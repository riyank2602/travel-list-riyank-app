export default function Stats({ items }) {

    if (!items.length)
        return (
            <p className="stats">
                <em>
                    Start adding some item in your packing list 🚀
                </em>
            </p>);

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const parcentage = Math.floor(numPacked / numItems * 100)

    return (
        <footer className="stats">
            <em>
                {parcentage === 100 ? "you got everything! Redy to go ✈️" :
                    `You have ${numItems} items on yoyr list, and you alredy packed ${numPacked} (${parcentage}%)`}
            </em>
        </footer>);
}
