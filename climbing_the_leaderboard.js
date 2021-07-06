// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

function climbingLeaderboard(ranked, player) {
    let scores = new Array(...new Set(ranked));
    let mappedScores = player.map((score, index) => ({
        index: index,
        score: score,
        rank: scores.length + 1
    }));
    
    mappedScores.sort((a, b) => b.score - a.score);
    
    console.log(mappedScores);
    let cIndex = 0;
    for (let i = 0; i < scores.length && cIndex < mappedScores.length; i++) {
        let offset = 0;
        while (cIndex + offset < mappedScores.length && mappedScores[cIndex + offset].score >= scores[i]) {
            mappedScores[cIndex + offset].rank = i + 1;
            offset += 1;
        }
        cIndex = cIndex + offset;
    }
    
    mappedScores.sort((a, b) => a.index - b.index);
    
    return mappedScores.map(c => c.rank);
}
