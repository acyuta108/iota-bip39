= IOTA Mnemonic Phrase and Seed Generator

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/acyuta/iota-bp39/master/LICENSE)

This Javascript library provides [Mnemonic seed/phrase](https://doc.satoshilabs.com/trezor-tech/cryptography.html) generation and converts a valid Mnemonic (as the one generated by this library) to a unique random seed to be used in a IOTA wallet.

The main purpose of this library is to allow the user to safely generate a [deterministic key/seed](https://en.wikipedia.org/wiki/Deterministic_encryption) by using a Mnemonic code/phrase (group of words easy to remember and save) AND a passphrase.

Although optional, **it is strongly advised to use a passphrase!** (and it would be very silly not to.)

This method makes the (IOTA) seed safe in case of unwanted exposure of the Mnemonic (stolen or hacked digital store - not advised!), but most importantly it allows you to have plausible deniability and [multiple "hidden" wallets](https://blog.trezor.io/hide-your-trezor-wallets-with-multiple-passphrases-f2e0834026eb) using the same mnemonic (basically multiple accounts).

Implementation of Mnemonic generation and conversion is done using the [Bitcoin BIP39](https://github.com/bitcoinjs/bip39) (Copyright (c) 2014, Wei Lu <luwei.here@gmail.com> and Daniel Cousens <email@dcousens.com>). Thanks for the good work.

== Usage

```
npm install iota-bip39
```

```
const iotaBIP39 = require('iota-bip39');

// Generate mnemonic and secure it (pen & paper or encrypted offline password manager - [pass](https://www.passwordstore.org))
const secret = iotaBIP39.generate();
// => 'clog chalk fix anxiety betray horn envelope alpha acoustic man hood goose tray skate toilet frame airport glove beyond snack retreat memory confirm correct'

iotaBIP39.validate(secret);
// => true

// convert to IOTA wallet-compatible (81 trytes) seed
const iotaSeed = iotaBIP39.toSeed(secret, 'h4rdt0guessPa$$phrase');
// => '9BUAABSCBBCBYAUAVAWAQCUCWABBABYACBRCVABB9BCBAB9BRCTCZARCBBZAPCXA9BSCABABQCYATCPCT'
```
