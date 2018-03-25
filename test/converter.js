const assert = require("assert");
const Converter = require("../lib/converter.js");

describe('converter.toSeed', function() {
    const tests = [
        {
            mnemonic: 'use search intact scissors lamp canyon alien enforce sauce convince slow balance',
            expected: 'DUZJIB9RDCFHHXTAOHGYJOTYCNDKKOFMKCMLTUMKKYTMW9VBEQVWHZMCCGQAQBAHMFREWEKNDXRIX9ZSC'
        },
        {
            mnemonic: 'use search intact scissors lamp canyon alien enforce sauce convince slow balance',
            expected: 'VBJOQCVCGQOMJWOHBFOZPM9OGUHHNOZYSRWFCMKOFAXEFUTHFGLGVGGTJNZHVJHPSULXNKVUFFWJIUEMB'
        }
    ];

    let seed = Converter.toSeed(tests[0].mnemonic);

    it('should be 81 chars length', function() {
        assert.equal(seed.length, 81);
    });

    it('should convert: ' + tests[0].mnemonic + ' to seed (trytes) with result: ' + tests[0].expected, function() {
        assert.equal(seed, tests[0].expected);
    });

    it('should convert: ' + tests[1].mnemonic + ' with password 12345 to seed (trytes) with result: ' + tests[1].expected, function() {
        seed = Converter.toSeed(tests[1].mnemonic, '12345');
        assert.equal(seed, tests[1].expected);
        seed = Converter.toSeed(tests[1].mnemonic, 12345);
        assert.equal(seed, tests[1].expected);
    });
});

