import { useCollection } from "react-firebase-hooks/firestore";
import { database } from "@libs";
import { collection, query, orderBy } from "firebase/firestore";

const useFirebase = ({ db: db }) => {
  const [value, loading, error] = useCollection(
    query(collection(database, db), orderBy("id", "asc")),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const data = value?.docs.map((doc) => doc.data()) || [];

  return [data, loading, error];
};

export default useFirebase;
