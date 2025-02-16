---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBVYXUH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEQABmDnFr1FgyG%2Fq8eH8me1oJVYsFPs2JTTR45yz9CrAiBD4JoTFLnQ1SM5G4sNLn5iRPBPI1RrEN0f0xlQ3oParyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMy7PYIjbAUEU6KmHHKtwDB2HunpOyWmlXW6jWeNesjv%2FDg0tw7zzhN6ZNEo3AnMsmJqvUYjSoxv52hzNYBF6bMCqj48ngneh94T2nmPUE1UGoj3A5Vbx%2BMvpinJnm%2BkB%2BFi1Fd%2BJSZUiUZAwRQERUwkRLbuemonONVB4If1mEk0DEC9Owo2E1hLHYqR2OXJ740ubxe83nTK8wLYF8u%2Fy79bw3%2B1ZAm5%2F5bkRXgNjyl1JPUxnOpZW3DVlcLZ%2BBN1BPVvCJgrOj7E%2FshyuxVbjo6uEijEs7R5n1uxRsrjthz4IFrj5Mro08bx4edQD%2Ftt5%2Bd4Yn4kIvEr8mIFQs1H9LKtyvxroEzaXbc7Fsu455mKiR2qePVQX7ZRlwQ58Zguz%2BYMoDC1AXxbQm9tZy75w8mI%2Fqs38%2F3ufTktoLfDApO14A%2FtvCTSe%2Bg5RVUzh3gTRah6I7z8oEOpJvMM7qoOKvrgSlKqxeni1qji88wFm1EIU1uZVcA48xKXcEAOYxP9BXRQcjkgEsTfPbbEBWE20teBbnBkPDQ9RLvDHnDbzqiQ6OFHBKfL7HgvbmLKOPHZkzK72VWF7bnchmJVdi1qS2rrl4vhm7Jsm%2FW1FhUgfTQKny5azw0ssfYNstoNixOvQ4ALIOPmBpsbd%2BGygwkf7FvQY6pgEG9vqujHnmZtyAJ7qvD%2FUM36ZBk4OXPdvXS1vodK0JES7i9Bx%2B%2FhZagYKZFbWz29OKBaxntXIkehR5ZCeYI8NmlH5GZDyyKOHPq6kjT%2F8%2BPSLpMd80vCxKkWaebt95ABkHmKe0Ot7KIDJFD3pV0Lo1pgw5W0Wq5506lOql9SaCr30BJet7v%2B6nvcfk2WtQfoll9IUDfaEBPatQqPjBFLyWlHpzHOhM&X-Amz-Signature=a8cc47d36d7218e98373f289a9f545db190591bb3e5ac0ab7b7ee66387a5b52a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOSHP7FA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIF6A6nHxg6YADZJvZr9klTFL3l%2FaVtKPtYoLrq%2BSV0YIAiAXsso3Hgp4Er5gfmT6TJvGy5R588JnUgrBXLHoTnLh%2FSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM7AYwFc%2FhwuY%2FFSYfKtwD8viIj5pfcemhCzzxCctWAmSRl5wdNmqF1RDlBCBJH%2FUZfjx5kwvkrdr%2FIOOIv6waiSFbfg6zSAqrlxhT2YmmSavQcUhHQLdiOBv7nL8e0O%2F%2FURODGYIBY7VEy5FC8%2BMkksoX7gF3%2Frs51mmQbdKAYlNu6okAquWH6e2k%2FevBaYek1jskVB3EqplB%2B2LJQUbMrs2%2Bs1mZPNjL%2BQYbZjsaIwzyZ%2Bxcv70lXO%2BnCVoUdDsh%2F8KV%2BNRmE3nmgJwfLlcwwriCG9NWpFtw6u4j%2FRGiHLLkg40PIaPhcpcnluxtW6Ma4A9hf6MokofZjQ%2FJYK4URE7p%2Bq1T5DxispSczZrx8RIcbWVC9u%2BpLVcFZ1%2Bx8NBRU2qrJbe1%2FpM94qVewGB8UoBK3p0dRLeJeymjw5kCh3TU4Zb87ClJTFz%2BUs9lZjcOPPBrYbfwpjnZVhy9xxTAwqHxSamtHa8tcaKJ8QuycKkwR%2BMl%2B6diL%2FrHTjhrqbPE%2BWpF%2Fpeb5Eex5XMVkbeOCCbnXPFg9QUr5d7GKFt47cvM8h5ciN%2B40UcNA%2Fiyfa5qTsqYmgi781mFo3dHZSVqzHI0dw9nbbnSw8zI7Gsa00OwMW530qv22Dq%2BORXglz%2Fk1gjmtTfhIdV%2FLFgwxf7FvQY6pgF6IgNg%2BlbUf8duuHsSQESFkv8CxfLLFa%2F%2BCuvLDJN7MJmh8qPSdI7%2BZJUXBEBZUuEzo8edDGTVdDckRnQ2HMMnJCJ7burV2jTWJwbgeCnFZzToSlNHNVxur%2Bu%2Fb5B0RhjlqjZP%2Fsw6fo3kxqO%2FATYdqryJVLvLMbR68nRgo5os7TcuMtCrdQLPmxO%2BNqKVfFiUWz624MvxaWI2OqRYbiiywHSaaBb2&X-Amz-Signature=e0e33f439c205f2063589f7e81edf8b1ff9b490c9b2b933dc05b22f1e1297f72&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
