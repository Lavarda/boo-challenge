const Vote = require('../../models/Vote');

describe('Vote', () => {
    it('should return 400 if userId or commentId is missing', async () => {
        const mockVote = { userId: '123' };

        Vote.create = jest.fn().mockResolvedValue("Missing required fields.");

        const result = await Vote.create(mockVote);

        expect(Vote.create).toHaveBeenCalledWith(mockVote);
        expect(result).toEqual("Missing required fields.")
    });

    it('should create a vote', async () => {
        const mockVote = { userId: '123', commentId: '456' };

        Vote.create = jest.fn().mockResolvedValue(mockVote);

        const result = await Vote.create(mockVote);

        expect(Vote.create).toHaveBeenCalledWith(mockVote);
        expect(result).toEqual(mockVote);
    });
})