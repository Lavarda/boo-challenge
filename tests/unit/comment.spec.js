const Comment = require('../../models/Comment');

describe('Comment API', () => {
  it('should create a new comment', async () => {
    const mockComment = { userId: '123', text: 'Hello World' };

    Comment.create = jest.fn().mockResolvedValue(mockComment);

    const result = await Comment.create(mockComment);

    expect(Comment.create).toHaveBeenCalledWith(mockComment);
    expect(result).toEqual(mockComment);
  });

  it('should return all comments', async () => {
    const mockComments = [
      { userId: '123', text: 'Hello World', likes: [] },
      { userId: '456', text: 'Hello World 2', likes: [] },
    ];

    Comment.find = jest.fn().mockResolvedValue(mockComments);

    const result = await Comment.find();

    expect(Comment.find).toHaveBeenCalled();
    expect(result).toEqual(mockComments);
  });
});