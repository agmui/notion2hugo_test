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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNFM5WOJ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKFPI8ZTTYBgWqCfhZoFBZ1L7OZnDm0u5sBTNpPPUCcQIhAIVUXDL1k%2BkrM7l2NPoRND0pNASchBtdCizK0fqElkRvKv8DCHYQABoMNjM3NDIzMTgzODA1Igw1cw%2FYuW1TJygGNm8q3AMik4BNePpsNoq12WEKuoSp7pTrWR59EFrfNsS7TwwpFLgB%2BEDOnlxSD0oOYJJZJaCAr9HF7o5dp9P%2Brn39YbSZW82vDXM5X7U8gCw18A4L0XTCkLEERbtW62qT1SNsNPkr%2Bs%2BjbSCbHgxyehIxYVJ7gMuBsKdJS37imJUk9g0RAe%2Bdhv3s6r5aUqigYSvLwJGGDJW%2F37zdL%2FDrgoDiaFfFt0mgBlf%2Fp06x9Ymjc9wBF0N18kQuDcLLIH26e5b3lfqsh4d8CEoTFynB8LWm5G2L%2Fv0Numev6yfJjkjtRB2ZJgtHFWagJ%2FL6CSJYle%2FN6VYHPgZ%2BLkp2D5AWdht3wyR36FdaBPYB88sLG%2Fzpw6OLJPT4lL4G3H8zOic9c%2BxQlB2Yt1VeLf9xhDVdwnhSsk33uL69BrYvE%2BUh8Xv8PEipuuBjeOBRNZZCCCsnO%2B%2BPjHccxiQEebT5zTezjHgvhzQyCMAAaznm%2BS%2BqkVylOp%2BwOc4dgL2dvs%2FUY%2BGfvYNuvPibJoe5G2yTavXrlwF2cte89jyEuDnt5w9uD%2BQFH18ArqQrp904MQJy66wSyPmeVPJlquZNz%2BB10%2FfpKdwNZdZ7%2FmN04kJX0zCO4Pqx%2BglbCQeMbjVQWFAQ%2BmbHxDCWg77ABjqkATf%2BK5Py%2FEo2eNWemmQiINoQrZoD%2BhDFGGSk8yg4H2jptpymGxqWN5Y1L%2BD9IMDZjPfccFCaRZF7CtStLKgXjyyw%2FhywVD0WzGMcvxaVQNtvspG1u4%2FvWZdQIJvfA6gvu0Mj6cldOcFkHSD%2BedySiRdwoAks61%2FaZhVTeVF6GLS1L3gC4%2Br3dp9TN8D2VtQgLk7%2BvfOoI664XZn%2BczJX5XIxQRKE&X-Amz-Signature=6bf4b63e79a472e8bf752998d5c0c9ff80a08c5bbf02307139698c4bea8f144b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UURW6US%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLI%2B26nkP0CKSRSnIG06VB%2BMaOlz9Z1FH3shnrPF63vAiA6P39MRnSQ8hFd0fB8ONi6%2BfPRvTi1Q8AeyUSBWNUYJyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMuivyQ1gDB9laqGp4KtwDDLycMCKMQXlS89E427GdhsHqpCvlLZfjlPvP8MEDzDf%2FiOBCf%2FNU2T0q%2FgYMapQ5t3E4Y50EjYEhSrh4%2FP4EpmwmY%2FnP%2Bl05ZQB5U8Wu3gaDdu9JkAYblJVvp9B9cZ6IIgFUA4gIZ1x66QDn2TgWZi%2Fb0EWv4j8j4VElPRetaHll7gPiYmQWyQQBIQVSYXEG4%2BF%2BBMJdln1ecMYh1SUE8XF%2Fi5CksUL%2FnRRH9r0uNTYs2vcXp94a%2BYbppkZFcU7JmFnjDF0TXvrjU4%2FTJenE6Kx%2BxdMd6B3V3%2BQ2eKQU4XuoON61EtlXaYfFiLiMb0jPn74wVrm6g6UeCzCvSx2tmXB43TuoJlObjgBM3G4JTomFB4em163pI0dadC9u6AjgrsjITgi%2BalI5u3JOJP4vxjEueH%2FmyH6nn3P%2BZPxDSbyVAmaGvwpTlbCd5a%2Beia1XmN335D9EyzhXqxqgsapATPct0WVzeLq2nlfpmGHyaWxTkiuFj7lUS8wuQWhYEgyVyH5ui5%2FVtPs61tQbSNKSLw5Q5NUvJdU8FsIEDSvz9KTtQrV4eCNCgziqb5wG%2B6cGi1Jmn5T7BkLE5zkvh5sphdFmxLHxaJF6oLB292aVvUM28zZCuVAt1YkDoZEwnoO%2BwAY6pgH5WQwXDTBV5ay5DkM10p%2Bt1vEU8KYdMYXC71Mlye4ORgofMAFHMrB0rAGgMmdbb04Uau%2FpWPzUsEXaFPWm%2BdN%2B11tKEQErr4QuNvDeIWyi%2FwMlT2sRtMFiECTo%2FfWOcd3CFj0qFO%2B2lXWjPS%2Bs6mnGMk3SwSUH4k05mWHFWEGAmVSPGDaTIfYkEgNEKGmaTB%2BL%2BZSKQoSg6mnDpAc8OSlchhDDZvEi&X-Amz-Signature=ca633784328b7d39659ff56cdf2ed3665a9ce601284570b6aadc29ffbc7be085&X-Amz-SignedHeaders=host&x-id=GetObject)

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
