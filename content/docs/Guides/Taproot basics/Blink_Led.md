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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUZIYAKE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQPIsCEA6%2FefimtaGxyqwU3k6JXC3pKAYjlnEERBZ91AiA2%2BIr95m0CqAkwJM3mOWJv3DFR7meqEWyYIVlGGMZz0ir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMnQ8r%2BlDTTYsiXKRmKtwDbynwe%2BB4BzNEG1FcdrJ3kpX0S2EfHvhF%2BzDA%2F9rAxLIJ7fD8oj7ghIKCufCBayFWhz8L%2FDdbBUW5irwR67zg2cOLZRJO1fn4c64FTYvOWy2dz4iqf%2BZ%2BdVF7m5tp%2Fp3nv0oM7kvZs0rnsziaX21TOQCNhbvYd8ZEnXNLRnnCcZ3LUK3DmUiV6VaTIPKqsk2ZRVzurTRwnsRRVpZdjIXT%2Fs5xibH7x1f96wMCaPRZHZeN7jSmmulrLfYAyf3AuqacDqw5WuPEm334U07V6%2BI8lmdVuGSu2bc8gG1cXPZmmWbVPKPEK%2FlxE%2BgIIN0MebGgFmsts49GZnHORGD6i1DYtUcp%2FjIvBEfFXNM6Lt015nct%2BgyBBxmgaqk9GCvHpSHSiCjpxu22iiREITJW%2B2HWqpVzgppKgie8tFKaLXo7wQ%2BBrmhLbu9S3G38PGSGGyrlJdsV0ualL5bVhWSIXNdI8rImtJS%2B9qArBjnXpNfqFTUvXnd7lZkZnHFYvCw0w4W9inOaGhO8ZWC80VXlnodtk5HHLezj%2BKr%2FaHsjDNMjpif5fjqsCH1tKuCHjs9smEG9EBTP7m5hPxAD%2BIO9XMzaSDX2LQeOcjgKz3Re9CoSzgS7u285T6I%2FI9ug5EAwxqqxwAY6pgHTHc6K%2Bbz0xgoseP24lA%2BUtabshfN2WbuHVr9BjJNcTEh2MYr1FonMOwHJgCGVejBizn13IsGHmu0B92ZbX2JQbnAWkp0XBY%2BuqA%2B%2F9PyJjwtH49oMRgPOBBr9YqtqdHF9qZFlcSxZ7I1aws0d%2B8LfBO7DZKzZKWDlq6RXPHZy6MYkLOY19siurmb8nlvxAAttw8e6SVxXnEGzo2vWh6%2B5ZYp7qwui&X-Amz-Signature=3023eb785f81ca2e33cb985a90aeaeec71396f28606e7ccfaae23b4c69377d19&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q6ZRREU%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtHGs02ii0mvYwZCV33FFUPobpZsTjc0ORM2hCdKT5%2FwIgfHyizr3o%2BIa3%2FY8KIZy0XFF1qvd2Vhdn7F0aGldX91Yq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKQr0JSr%2BpG%2F6xuYfCrcAzSeg9MtK76ayWaYy%2FRsKfMqoKBYvjDmUDXHzpMgxTd%2Fok17ErE2inTlfTNGRwrojqYEhP8%2FG%2BxDi%2F5mk91LZlJYIRbn%2B%2FOoKiawtB0KIf4IyLVPWiDEqBCm5liqY9UytAa21CDkSG1XIy1kC8f4%2FRhfQoh6zoViJaux14UHrsDG5fJtoQUJA83GWzTTEJ34ExgvBrfODoV8gBBxWmGAN9u9x2iE3AS1leddyJJJV6HtBJOlpogVh4c4XxopmklnWNgGwSKY%2FlZqP0l0DezB%2Fh7NCJShS%2Br2ZavJUOkZhJZOyUNzykeDrPwHTscXPhYrHZ9wF3PCF20wPm4hHmlrsGFbPRohnzECt2JJnafyx8a9E4hAY7FoJ%2FHxSNWgGNDo09qAfWTOo9f7gZdBAU%2FJq67JJ%2FYipQbisuWPz1hNXBwg6ADnasQKo6R2ciaWLhXQ2AMupdgjLdqE%2FHMRK5qnQhR6AIBgbcqsWo%2FX210BFXNomL6Ii%2Fs6AnhXcSNbh%2FOHje9cD0lV1EDzznHaUSIUdLsD63jg7DH4WrNclxNb1l4Poq1%2BTDaOHXqqv1euUd7rQcpt04Bln3%2FgN3K4g9QNg82soYEL6fy%2Bc5XOogtNjTgo6yul%2BLKZ9f51GbJIMLOqscAGOqUB8YS7XXN7Y9DsrQZfUFOt9lMO41Hf0kbS2cqLwSMXlZB%2FTtl5h6%2FIRGU1ozvkLiARI0bOP68eNKycxzZWptsU1DbpuwQ9ScMAhr2YIQSGC2M7QRVjD6QNpFlopmzglQXRVm5F6xrz%2FgySYJ%2BJtRhzj62CEwukepHVxzLSatuk8BgI65kfd2KxqY52UYAtulgjcO3sqsgzBk%2Faj9SymZP0yRgPA3eJ&X-Amz-Signature=34d6a741a13620a6f6826fd104c0f5b09de469bd44642db225935109257e40ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
