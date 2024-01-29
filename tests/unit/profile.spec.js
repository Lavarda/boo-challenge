const Profile = require('../../models/Profile');

describe('Profile', () => {
  it('should create a new profile', async () => {
    const mockProfile = { name: 'John Doe' };

    Profile.create = jest.fn().mockResolvedValue(mockProfile);

    const result = await Profile.create(mockProfile);

    expect(Profile.create).toHaveBeenCalledWith(mockProfile);
    expect(result).toEqual(mockProfile);
  });
  
  it('should return the profile with the given id', async () => {
    const mockProfile = { _id: '123', name: 'John Doe' };
    const req = { params: { id: '123' } };

    Profile.findById = jest.fn().mockResolvedValue(mockProfile);

    const result = await Profile.findById(req.params.id);

    expect(Profile.findById).toHaveBeenCalledWith(req.params.id);
    expect(result).toEqual(mockProfile);
  });
});