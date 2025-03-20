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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X35HHLYR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCID%2BPFnTiMSDJo4aR6RPJfVFdqIfy%2FRvtpesIlqwLbjnFAiEA%2Fnb4rsQfG0aFZ8ArkgTGAyQCftF1WB%2BegVAp%2Bjh9rywqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhEfrfWPyuo%2FpHlMircA8fV80sVAEjF2h1B51eOAgswweVq2huZ8Expb7YkyJt0vCtQn9iAKAf%2FwYpiic6yAzUDXHjm9u6Rq%2FQ4gB5But0tEzHH7t4wixiDUgeuQmh2IGiRN9EHTxC0u3JMk7%2FGLlx8btPq5Ybp5KkXolXx4%2BvT2vMd8mi24LrVatAWOveWk2v5Ey45T8mrPGJVzGMD58dzBvBqL0vZbB2yoEnEvbEi%2F6sZ5S4u7jXI49Ae%2B6lwrzdeZeykzq4hOpAUPqkPh5KlL1zIb%2FnYbc%2Fv%2Bsws0eI0xhFY6jOdpdzRAjjrxAuzaz6wYI7TZy60lmaBrHEfFNRXKNcGT0D45LH0InPNXeW8eR4%2FB76npYjLYLuAtanv5vGeLjOg9ypZL4wMuwXciQW4GarROn2HOt8ddhd7wT%2Bekl6KE6movKwX8rsNqqHGQKs2LLaJ0pbyZolNcE1kvzs2II%2BaiUT8l8Ppa1dxpzhmSXF4XnlhzpBMh1SUVIRv0ZwOqrQL5U3JzuIr0Cla%2FCKd73APkrTsvV2xzCZKPNnqUyA58RXXuwwY7qE12ISZcXr23pIqCIVaFZxZW%2BRVAra1iljX4N619m73RnYUZkU5TJwA%2B7qS%2Bdhs%2F3FDTnGGnwtuDpeNbw9XbfGBMPCF8r4GOqUBzEnui3xl0BLJ5l4W09DjYjXe78EeX%2BX8ZAHrTsWxnJcZwPzVXPwe6bKo%2BAXja4ZzZVF%2FdpTssvSEKB0i1Z40h994pD3%2FwU9GZUg8QBondfyxMj5e4rIKKkb%2Blkd4MYericf0ras3pxGgdzwz9kz6aMsZjturIbQCITHURxoeQualpzCdEEx%2FMIcRbYK%2B2WQN6%2FmxD4J%2B7uSBnKBX2g9FmEmocvq3&X-Amz-Signature=5e8e4dc6d32de65c893d3cca9c279902d9ee2e80fcfbb44cab4c4395bf2a6742&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V74BBP5H%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCgifmhEcygl7w0aPhUz4E5fa0AAmwdlX%2BvqQs4Ah9gzgIgGTA2GHzo8STh%2F6R%2Fd3F%2Bp0nvDBL7ScMeDt2ckKB9Dy0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiE9Cl0ykaWgxXpsircA16KGFuzVUsC5Zp6yFtEsUEhyWt14acsRiuaj1fDpSLh0DqhQKDN%2FcIpyMze3Od9wmPDtsyps2jWDTQMW2nzcPWcU4WkZ6RthWvmEB1klXVsCPDktZHSU6ApF2KYFS7rw%2FdVDaTmmy04pjlCccyIpaXJItZX3s2UJW2lp11SduDSs4l5FdHeakfGpmy6Fgi1lcQeVJpC8F886mkXZbMORMuUmzUQyp7A7Mm9nWsNSuF6OfV91NfbFSWjZkfLKvf5mX9wQBsvZJmKcmuQhzI3XRKnZXSnTibuTM4Kz07R95UkB6XVghsgBBx3J3Hfgqzy7DyUjVfkM%2BeyeKr%2BP5FEOLD9Jr%2BCQ8MVnw8muLYwqLBS3y6qU4fTbZqYP%2Fh1maxU8SZduP%2FXkX1yW%2FPaMJ8PUN%2BDfxX9nTi80GZK3SCwBkwL8sm%2BtS8OgdF1EINz634n1FkOpkyMRUPXUP%2BlG7EUExe99TJUAeoPkKGycgSnkPTzxsNI9rYhkVhAgMr21qyCxtOfjHcbjmcAneyBr%2BKgJd6pg9yYiAd2gIUX8Enn5o71W97kmyJNxKDwIZ3qY%2BxccP3roB9Mr1lMy3TGIgPdvGnrQWGpBuVtEAsGK%2FEkgVIajZJTKSqem3xC7ywuMOuF8r4GOqUBze%2F8EBiKTRB%2Bhs8%2Bsi6LGby8vQvYp3VCj3l2rZF%2BCW9q%2BmWuPHU29u2ARPBqACV1dib9tZZqHonvSx7DXrOqaY7AoE0qsgImnNsuhiyUjvFS7a7tEJ2kXHd26yiTbCvEgMzoWZwdwYxl9hMXx86RMJ8LKWLpCczlJO1bUS6YwzuD0fi79tLZqu1mnAFkdCNFp9M40G2Utt5wZe2Jpf6uh2qtHnxG&X-Amz-Signature=7776f1ed5b491ad1473a9eaf92ae0359109587aff87beb26b87e8861a9fe9d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
