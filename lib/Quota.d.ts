declare class Quota {
    private mCount;
    private mMaximum;
    private mMSPerIncrement;
    private mLastCheck;
    private mBlockHour;
    private mLimit;
    constructor(init: number, max: number, msPerIncrement: number);
    updateLimit(limit: number): void;
    block(): void;
    wait(): Promise<void>;
}
export default Quota;
