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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZT6Q5MS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpJ4ZvzVBXBcAH2%2BTS3ae27sWPUWoHvlCZWUJKt1zEhAIgD0mV08T2yodNIq0nLneL7%2B7wZPbJgsLK9EtnsLuxlBcqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1ekRnV8HzSADVKwircA6YyQo6Fg68%2BL1qfXVZh5Ot%2BbClvJy1NkfuWWgFNHvydQazcBJuh2dQRsCC6Suwc%2B6rMsx4MVMitmGy32Iu3zbRdaOxsCrNReXXnJ0GAF0pjXVf15sMuXwDjY%2FQsLWUgb0ssPbbq0t6Tr%2FJnxrAvZ2cfNUkX2cd%2BYADEl3LSkdw1PMFPuvb8EY%2FaYrOVt8Dk6Her4fRKqas36XqBtuYxnCSoMghUVa7MnG430IowCUeIIrBQD1fEa7CPVkp38gprzWMvS0U%2FK%2FocRq7hmg9gBbRTS02zaCXP63ffreaxtojW6%2FYps%2FHAmA2oInFfwP6%2BMqDkZZxz4Xh%2BvI0CU55UIY0tBP7ZgCll5US59p%2F%2FgboQPAtlG1wvfsyP5pwU6p9TKnrxsY2V3LfMQoRsZXR%2FGGkmrdOOY6SUeyxE2cFFn4U%2FXfXOGRG%2FE0VvJXguXA34UoQCIKWGSGCufNVt99hKANvLjVhvCM1en7KM%2BXf%2Bb0PNrCAWwoiZFrqvHDpHorQAF5M0LhCRcZAXjck3bUNaUJwBXkJcdd%2FGsksH5Q6dKKdXtkyWpK9Is8%2F2V5wi2kx%2BP%2Fj0WFvK9Vq55gzHZ90KQIneM80456yffhR1afrJkaBcte%2B4ct1cruE4OJHIMOTz7rwGOqUBkQrk8G%2FHO6UC7XLhLtNhoTcs19buEcUPFmHPZ%2FMY0HqP01Xo28pjXtOhKjzLLt55xc4KoIwkC3iJgAizAXPRL1BlpewWWUup8YTO8ZYHez2JQ6IPgBIaz6IC2PNQQypfoXeyImDann1xMyaB9QPC0xJSe1ErMH%2FRp%2BakuRWacCJilRCIQijaHoLCKc%2BhFAAry0Oz0yayxmvBzak9AQwRl%2BITYszo&X-Amz-Signature=c0500a650708299ac557f8513328873cf850de218244ee2c034a09faedd758c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PU7ZCLG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdbf43u5I%2FwCbuhGe3WSpXCOLfUm4ZYxr77Pz%2FJB1U0AIgIHb0JM9Mv%2B9SOfSY5X%2BZfBmvmg%2BYCnFN2KPg0vbTmOwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbO558eEyLUtFmB9SrcA35%2FSCzQCTlNJ2WuCgyEwynB7tUpFbbFXpVmziqqD2i%2FmAWJSmYvoM2iuXPObuy49D7MSrzlM6Mcueoah6l0QuWyInTTZy11UxsBI5SrULvXl3%2BxuKD%2FgAQFRpNWFUKjL8eyDM3kLAiZgru4pyaXM1y0WcZZxWFUoBvK32XjjyZLXcEeuVAr7iKl6caN9oNELJ%2FQGyOIffI77NzgQtYO%2BbWTqWxhmQyrwcxyj5yt7X43shLPv3V%2BkJfreQkwkeEDFYn67azyoKdjZi2bCgOWoqv5aB5F4VrDCwaRz2b6HEKQn6zZPams0NMTeW3g4SURdMp6cqLC7zCC7uJZsP6lkXfxO9%2BqRuv%2Btde5FLNc58vwEZAh61q4xFe%2BTKyMFxpWRrnxYiyU9mRXh3VeBPgtW5G7DexNe3TpnTG1Mc1XGN%2BAG6sXVcPjcocnAmpmP7AkposyCj6k9ENhfv1rrTIrnYblWD9ZR6Lk7N8eWv95fS%2ByHSyANjraleIjAm2LgDqQc7YtwjB8IjWRr7Wyc%2BI8o28igKslDnUl8AMh3SEXqx3jkDGkX83I71S1N6eZCDTmhmt66vHwQ7WJJOPiZiwDzC1PTbGIgHsJ3p0tvIE6HqE0vwigq4nBUqFo1bfqMMjz7rwGOqUBBgQ5D%2FSDC8T8R6WOnPKRbLS3xILJo6cii5L016Ti9ydtGsqCzYMS9xV6htKbjQSO7JZF66s5wkihXBuDKnHwZ2FCee9zu7%2B86y3jk2T30nAo1xA8xv3PeVFofgZO0aKe45OJ7L%2BX%2FkGRaHRG83%2Fh%2Fj9WRe7eDa0pJIrN6fW5%2FmqlYMRR0a7j4xLuSPmbo6mv0vX%2BphjFkoYAsEskwL9MNq9nsYnn&X-Amz-Signature=9fe1fd1cff7ff0f2f84452e3f29dda33b2599651237faef558b894544dd82dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
