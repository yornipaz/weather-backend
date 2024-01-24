export class Utils {
    static generateRandomValue(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }
    static formatterDate(date: Date): string {

        let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
        let month = new Intl.DateTimeFormat('es', { month: 'long' }).format(date);
        let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
        const monthCapitalized = this.capitalizerFirstLetter(month)

        return `${day} ${monthCapitalized} ${year}`

    }
    static capitalizerFirstLetter(word: string): string {
        const firstLetter = word.charAt(0)

        const firstLetterCap = firstLetter.toUpperCase()

        const remainingLetters = word.slice(1)

        const capitalizedWord = firstLetterCap + remainingLetters
        return capitalizedWord;
    }
}