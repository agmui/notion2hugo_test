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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4EMBOY%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLBD1WrZPJA5mMgMeY%2Bs9JN2sZvzMAEF%2Fz0soDwL5rQAiBRzArILlCs8rzWiRFs3p5AJ5tzMn4QSvlsJOOxQO1JwiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWxlXkSoUyuK4ip7eKtwDUtdeVCyUuglSoDCKBCKQ3tU86xiDROerY%2BkXIM%2Fk5trtTK5p2HyTmjZ9h4GR2WiL7F85k61kv0ywjGKIN3cNIl%2FqVahWmUgHptVV5DfmYM%2BfMTEtAXB0vur0vUXd77FLhfvOugZplpnBOuxXT6KFjJU%2BdrA8lH7ox1%2BbHa7yyXwRsDx7bN22leFvLFmgO%2BtQMmbU8JL52Po6aPtSngmsPzyocrzvyGM4KFqdg9AkK0yyyXdIRto3Omh02yQOMKl9RxSV7MXijv0bcIhBVLOTasXb68%2FeKm7ekqS1B5jSNIXYh4vCjh71pRdau%2B2yaVSMoauLleNMKRD3hP9PcSZt5B6aUirHeRChIcjVyGAiWpsF38ITwnomm26dwzaxMuFsFgAETUtPGbCbHz1Qy5yl%2BaZqSKJ6%2FH8vzKkO1PmVQNnLfpCtkIidDGrvISE7qozZ43Et%2FtzXbOBBooyppJYL7I%2B8GJaqfEnXXqZIDY4cMh42v%2B3F%2B6SlCNnJ5Y8MpzrV3aZu5kY7tUkWFghnMKePvJ59C7jPfxVDWy%2BBR31JbEaUTqY73PRtz5T9U0drK4vxI8yCFD4gzLrMNomfzZgjokpL9dfyBaKqm3aACFym9iDW6aIJjAmbt7GT28kwqbLdvQY6pgGzrGjCpuo0E0RM5pfqavDxlHp9chf1eorfNd0sBfBTJIzEsSY1Qcj7Nwa6ENimBJ2o0OQNFZWYRsXgvCAyv%2BBJ9pKzjYQie2qRaM5CkaJ%2BeltKDNahSRexTfIKT%2FOYXxGbWVaDomF6JUpLrxg6oXqSSKmQh556Wvvlox1iZNALcG1kW4dWej1WS%2FGHRJQBN4AZ2S8wltI%2BtbqoINUFA6LZEUF8Vqm6&X-Amz-Signature=5005e0cbbe36cee115ba235d19ab54e73ddc581a00d3217bf12ee0f25f29bef8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7AWYHB6%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFU7%2F%2B5HE7Lq3lTidic3p9lMR4tX9MHRlZHn7S%2BEnemQAiB%2BrMXuRfSJ2fIdDo98uxJLZIlITiBTTu5uhOw1dZVMHiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLcr3YEoUf971qLaoKtwDMkKs1pF4OV4k9NTQ7kJaHWLwHCiYa0oAkrXU4nTdmDSsfAkuVgGF5iWHjDqg08RnUR7bzK10ve7VUXecyknQmE0weiMD2dtPeg5fb4%2BYLFY%2FoIdaI2gsKbSsczkYYxqMQfFopXxUUstZZpYfLHyI5B8%2FAfq%2FgvZ2ju8oXu9hr4CLorwsS2u3TcIe2S42nmTOnrcrzNEHS0Huzl%2FGSKIPATuEmJHIvOe%2BSN0KN1C7vMQMu1J39wcgxuJRiWbxgcPF1G4b%2F9%2BcA3eMUusGSykPQ8Q%2BCyJK6HYHc%2F0QK5dC5uEgxDKGOr8vx7xuI%2BiX3zZAlvOtkrvuu%2Bbn%2FO1XiUunNS72JpqLGBBNnzcQilf88VawJKl1tm5saYDpHfagSZM5IEPelkDdlG5UNi3KpV51oUvKtL1bc3da03GwE8ln6E7jj6p8ZRH%2Bwtq2jwJ6RyBWjRYmQ%2BQRYOVQsL3kzQo31TaB%2FHaG28DefwMMFjMLdufflheOIXn%2Bw%2Bj9UgN6KSZ9wi3Oxk47bHddL2HLdYTV%2BFztlP9iWTa%2F0K1GqR3rUUwOixdfrFhehN%2BEc3dXx023uuH%2BU5GqIz%2FwzVkjzbmw8Rr6FUkLIg2O51DjN3bIUNyMgAXYmVE0PwfSIYww2bHdvQY6pgHcfl4yOL3RUNHSHgqUrVuih029wN70s001qONs%2BvLwRTZT2Wbg3TiIuc%2BjIC1v9qV6T6LMs0NtCDvA51Ol72FaNsI3Sfk2dmEymKVIqVt3D61Z4YJ6%2FZ824V08WcsOFVQLsBVSH%2F6u5pc4LmfC9ucFFNkJbwIq%2BBKSowt2ith948nvhBpVNA%2BOmgggVnKznQqAb15Q72fVlukYzsaRMS2jn0UVVON4&X-Amz-Signature=d55fcd0e77f53b866239d141a9d99d3e853ca9f7885d08ebe3566cd9b73449af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
