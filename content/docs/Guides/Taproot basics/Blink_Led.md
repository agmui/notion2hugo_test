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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDYRHDZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9UOdyTkud2p80egv1HBEQnTCBjJKeonLvkbsMmNFSnAiA%2BE0wchfoQOjX1MQbeSpFAcOi6o%2FPBLeipCMxicQLQJiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhIS%2FOvQdYG%2B%2Fu14oKtwD2BYGw2UJ03PpZTqq9U4TR%2BROclYykELIAQkqHvdtVReL8lRmC8qddvKbDcA0zAzMbmWIbcc3HhFmBUJmkGGQDMk0Y4V%2FobQRfBRoJGJJReDFWxsbBy9L1CXMzv3%2BOPzA7rtp9yMf3stF%2BniN3IM4RdMhlCj9D%2B0RvrrJ0H%2FZEsZXZXs0cD%2BmmZvlhXqhJR4aP5F2wVj7lQHnZr8bo%2FD9XlNOiOOIMqgfaEuGVZUW7fubwhmhXy%2FwkAxroNi1a5PB%2FRiVczTeuHgYYmLrQsy8sBKxTOAY2eztOOqVhVNcSUMx4pmwMp%2BRGxIamYJ2SmZQoPz8cpSurmdRoBeI9mJD4k5AdQgTuYh1MOPTWFAXbVHHmpTTr2e8TNB%2B3LH8cw4PMTkhEFYk4%2B0Js8faYaB%2BwmZvIfqTlZOMKOcbdAjKZyJ94n84g5TfGi9uGFQ2TMxlCEvqdHpDfS72l5bcd1W3Nkrn%2BN809cxDGAm%2F5c%2FJfma3s6RtVWWO3anGYugKwBliglQh42JupxLrkHQhIiUmCaIGuKOGt4VovP9ih0Wo1KLm4jiIt30MmvREpBdWTyddYYJRSQP9tm%2FP92RuvQ4lNCLUFuee3BXVO9eGIj4y0VQYZyU5nyZrQPR8%2B%2BAwyOWlwgY6pgE0l1nHVCyc1Tte3EizqoKs9tVTY%2B4Zg8gFMXSzbbHZEuqdqLCFoMOgDRemmnXTyiHFQfctmQLUz5yUjqwk9z%2FTFVfRhkmaii4TJWc66tzhN89FRcpNFXvcqPc06POtiDMWwXev3qeEWe2QEgXzLcs%2B1FC6MYeI5i5YlneN%2B6DZvFI2jpwBICZkMROnAI1wO1RkHYmb5hpNkJ4RcMP4kGfWEF3rMzPP&X-Amz-Signature=1c81a833219bdc44721912af5dbc2153272964ec490d9e05e7ba43cdb57c78f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUKNEP5B%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID14JF5suafcp03%2FZt2Xp2usWN5zdIfNkr3Q7QblK2EwAiAi8GNjaUP5m%2BeCioMSNe%2FKQ6tyYNiWhynEhmsPwwfLQyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZuqoW18fdNG39W9UKtwDLPpxAD%2BiQ8U8%2B37FnAhCTtxmHBw9ROqhH83OIm7bnOFzBl84j1jDJD0OoA9ah40xSNDrhuiA9HRnffhkq0Z878dEY1mGHl0mCyITicNANSlEIlttchGuZm5Rj6UxtQoipuv2m7DqT31TLqXBxs6oU65pO%2B8%2BK3ElLaTRhHJJPdaat7btKBqEyf48pEhF7HY1qT6Hp1FENFgDtURFET7TFydB%2F4f39WcZZzPbnCB5cn8udB6NTBHB9rs5HlLmZuzqrJ7dJQRjFsDg%2Ftk69b6OBTe7MBFsBI7PMA4SjF8FB8d%2Fq2kYmXiW69wcLKjRZes1Z%2FyOgY8dI%2BDNPv3anggsAGoT%2BzfJF3T3YtfYGUGYxHVvBdXKRdpPnNWa7n5E6jFMngnTWN99yP9uQEyT4VvGI0QQNU4mbfVpdEuer6TxxbThzpyOLI7hb%2B%2B%2FCN3cwOkwPmtZM3zQdVMNacMkSwEf9axJVMHYG0ZVw4Ki1Qc%2B0oro9N1yDOqNZLf1awZBrtzCrmbdDvaXifpB1RMOyoD0Wr9pHX9gLxEMARKlPZQOBHfddjYcm%2FihKB%2FFjbPTqcHv5WenY9Pl09WGVOefEshb0NZSbW0ovomOGAQap8emw7BJm3wJAnm3rsfdsHgwj7qlwgY6pgE0MZKi9i%2BKDA0UOR0g8hRkIUps0jqhpek23u7R3Y6GBJdz12lofDBAKgBPai162FGHcPuLsEarKxQu2E4FSrlGdHO229FEEoN4ZrPTW%2FqAynZVU5D7D2shut6WbLSe1aZDV3oLYBeQYGhKhl1mioAunNyQ2RVHLlCpL6%2BRRQSwfxjA1j6d3mxcHQB3OWczyLQBdwZS9cWZym9TQLayj6Vlx2EKSs1L&X-Amz-Signature=76d3c61da042ca0e2464776e0661e7b7c3b10ea82c0543219567f68614cad50a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
