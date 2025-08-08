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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGIQRRW5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEZtdeJRcY3dEz6l1tBmxZu7x0QJgYiMst3r5wsJdTXkAiB%2FrY7fENL2DzJoyGTSCKe9qHRJCv3oaOQxka17LDYFyyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7DOkVzVIBsl52dKnKtwD4zVra7ymy3KetTU69okYYwbES1wpJABQY%2FqLh3PsriJV87yHCGnLkY4zNDfAfqg0uU6ZVHZKcG3LsK6b8S4a%2F%2F%2FmVqWHnl50YaOjHpebc3VQTZvEmoSOfDXp2MFexTPPaNrYK0rOiMpazjM%2FEot%2BT2U37e362nw0Fs0uORetqbq5HtJZtr9VhGbA5Q%2BTxqNp8jW2xGM4MZ6%2B%2F%2B7t1oBXKDjZ35RTPMhYZGfaDqbbeV64U4PFmj3i%2FBpB27Ici6dWdE%2BazD04Jh%2B97gtLagbskWyS0o83Lnv7paeDb9ahi1xj7wf7nlg8On8gxyzWYLb9gW%2FeqjuA7iKczcC0LWb1Hu%2BqN89fepLEBDt9Eb%2BS3hBm7GScT13IHBiZhJOBpJB0IPImrTZNUPr4TGcYzMqnNIfKiPu43cz2q0hPmldcDbeUxcdDPCnhKeu7A8Gzbrx6pvmERJLOr2IYzP14jSpO9INqueba1votvvctG%2Bp2Bb1O3O%2FlBMikEuNX2g%2FTtUjsmikNcZ8YKBFxvVOUchurgKGpWlsUWufEHFM3QETfUagqjGQnyoygSk36czZRM0ErpOcJIUKWLI%2B5fgmjzJqro%2BogrJLew37u4DEGKrL9h6%2FPZ3HSDrmkE%2FWAYiwwvpLXxAY6pgHmCKhf69mIIJX35%2FhCptEyDdwH7DAKWKrYhL042i%2Ffk8VMLe1NPXusiIwxZ1NdtmSei%2FCWCi3PbxWxUpWHuRtWPUJZ121ZsVSaQQCcx23Rhnk8m4ejlbySx%2FDjrS5coBdkdiBGRZ3wrS3vNA3fcK8McIQ4FeWl0nhPLViWTWClOwnw87LVdjeGjaCPa8qDHTrKvAnpgykR%2Bl%2B5bXSxWlr3jRMU4dbs&X-Amz-Signature=36ba78f138d599e22a00d552c0b2c06b70e3252289174b48922a33d78a88214e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T34N4GQC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDL0UVgzzor9HkAMGpfiwA5l8OjE%2FjW4xvY2FW22%2BUueAIhANkKWrt5jo8psvCudiSaPYzFE8RU9KvKdmAXGbFEZ0XQKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmyHOWnUaKwfXpNiAq3AOgSiRKVlDrNdSqyxgABq3VlExXHucv1sDA%2BTIb48frs7yRwqSdrsrJrzmMWBOEyM%2F%2FRc4pQNe%2BLjrKoWe5JGjdO0OG0%2B7b%2FjETgXaE7ao9Y4zxF6j%2FUXHAvCUDxZP3F3THUnQZar3NY%2BhWx1Hp%2B5C4J%2FE5j2vDfA9DEjSiqutupEjhy0I2L9pXgrxFOXrra4j5q7VeJ2Fjx7g5y%2FDmG%2B0IyKRsbZIBFpLjYwOrbT6gwXy4wLB%2B7BAMxAaJnrxE1bKc68LaVSIpbNklieq9PWPkN38hTgNIOzErLncXjMLkOB9S0Oua9Q2amcyIpD3tsG0ZHhdQPvzB7tV8RIC1KMj3ePKH4yyu4p8YZrAkIiY1eLc1epClZdZ%2FDxEkU8Y2FPiGOZDZ%2B8FNRziWl1cu%2Fq%2BK2yonIsgX3Zf5erIWRHH0DLPpS2oD1seS0CzWQVUL%2FBGTnbFB3QU2hLEH%2FePpDiC7lOspt7uLyD%2FMHGoavAAEcXHlvOA0BMy%2BW%2BoAqjysJsLv5S79ppB6reYRKk4MS0cjBnYQw8tl76z61efyz1m7y8kyQg3QZujhbjX9Ov1JDDzPhJ4zvLHqXOOdjAqaNWl%2B0SQBk6r37A%2FujxWFAx2LckHtXYhtm62fjLEVuDDTktfEBjqkAel1DcN7yfyG1Hh%2B9Zzev83yOTejBf6UWxu4UqAVa%2F60v7vP8TmKjCQr%2FcTyyWZX9%2B0sHRBCNBAZReAqVRuEFC%2FVUhFnE9Thvo6q5TJFQLZrgR6Fl2QRB9jIgWw9tCboizYOlEzrh2p%2ByQ5BoA%2BTikNUcdWVCCnUdAbxHJfFmOp1jACrmQmZ410yC1DZq7zLlBNZPDMysR0agAxoFf%2F4Ji4b5OlU&X-Amz-Signature=b659b40b290893a61789bc3dd6a092e4ad838810c8d17089ea62af6dd66f33b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
