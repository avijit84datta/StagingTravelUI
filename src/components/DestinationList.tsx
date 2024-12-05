import React, { useEffect, useState } from 'react';
import { fetchDestinations } from '../services/api';

interface Destination {
    id: number;
    name: string;
    country: string;
    description: string;
}

const DestinationList: React.FC = () => {
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadDestinations = async () => {
            try {
                console.log("Fetching destinations from:");
                const data = await fetchDestinations();
                setDestinations(data);
            } catch {
                setError("Failed to fetch destinations");
            } finally {
                setLoading(false);
            }
        };
        loadDestinations();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Travel Destinations</h1>
            <ul>
                {destinations.map((dest) => (
                    <li key={dest.id}>
                        <h2>{dest.name} ({dest.country})</h2>
                        <p>{dest.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DestinationList;
