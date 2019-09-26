module.exports = {
  name: 'modus-documentation',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/modus-documentation',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
