const formatarData = function formatarData(data) {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return new Date(data).toLocaleDateString(undefined, options);
}


module.exports = formatarData;