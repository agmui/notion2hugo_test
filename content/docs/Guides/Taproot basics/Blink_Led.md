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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBAO647V%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIC8p3bP3kkpslvJ3CaXGuJF2yYpk960GzpBlyLEHI%2FcmAiBaEafuaoD2klp9U2nLJCvl0U6ueF%2BPzsIMTJqSPQoTDiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML9XToNFwUrBb5OjfKtwDwnHKOyXdfQ1Ha%2BpurjsxkBZhvgN7v7dALhDzoEQQgz0xK7gjdMIYZSZMwM7mFPTHAgfwCp49520br1lJB%2BlGuLq0KkLYMJtAbvuDdqPSscfvlnlNRGvpgmLlW8zehpTXJAbwCZQv4%2BnhVV8fbRLh4USZEmCLvSAMJzHtt2WTxkk%2Fgk%2F0%2BRrpDlfWP5cOo3qyXYWD9%2BkzJ%2BlHK%2BP9c5ntX9L1fT89MB2Y00ftAtnQq9TNa4BF86efOo2amNToM4GP8szSq7kz6t8sEI7hq5bx9USiFECEwh4H5ItC6Bq6GpquyrGNkifU9VsbcSekUMJQLfdpfkGTIkleB4S%2F9Fymwvdyo35TmzTk1%2B%2FEhVYNSYWC3hAIK0SYWsLIob%2FGSu1VU9mMVES9r0xTKhThz%2FBWxwYdwZp8F9x1e38wCFMlR4zrjB7qOMwEn9S2YhAvQeQ4tZ6bFXIDL31J49I3YeHyzZQK%2FjPsQRwWZdfVD7RXSt0eJhu4uumJo9UB3vULPg8E4U%2BnzOOJDOzbjiBwFgsnexLCoi8Cy0lYDDB7lNqEYSCPwH%2Bup9MHcujsTwzf4L6YS2rQnZCwpWYiiEVN37TF89QbJnzAnkcKXfHUf9z%2FHtCe51qyyc5Wz5M6Ro0wyKHDwQY6pgFBTb8jctCXQpa74kpfoF3RI3LnEX%2Fu0JHIGkusjPRhdlO94sehHrpSkJOApD9FobDejrGyC3FH9NmFURW%2FWgTyKLhl557qfsneeeKB177enuHcR0gkDd%2FLN17mlkmWmHYr6YjsrLBfxlrTsEMp1BNYZW9dcMT6bIXWCadCLp5nK2OgwclZ3iIsEWMkAk29cwYgdCqcW4zfOltyOdMEpMIc4nMEqZA%2F&X-Amz-Signature=3741abd24d739e78b42ed37d15a588da9351e73431db540478d29f188400b237&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K4SOMLY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDegYfTkAEsRve1l3SzT%2FcMbGfv5iosHBi8CoixJXEpIQIgHP%2F14YjpqgOlgKcgTc5dh9Esvf%2F5HQZpfShAgOsQevkqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8%2BoSD4HX6IuxnYeCrcAwczS538lOQTdSbohNbvvePOz9gcm9JeL%2BNxuJtMNtlwvBh7%2BcREL%2Byl75z07y5ujUr9RCn8tP9Puthbwrfn9dIO%2BMvnW0qHCrTrZR7H4tR63ghTtmbZmEV0wUTF7J4oKpFIXUzMH%2F3dYK23fOsVo4NgqV9%2BOOEeCbrj1Apy9DIvV3U%2Fat4NRNl6fgJ2kPQpkhP6o4mgvj7puiKl1PzpDPwNjRbLYlUQGqYJwxhw1S8%2BUiEfLyB1%2BxUTcaPzJOxkSp1DllEJFVEsV%2BvMhwlEq0L1bOz7N2dyl1KYwW9DXgLEqEGoU6KxlsPLIqla8aWGHElCqYJFCN2rQDq7EWBuLn8v1P6Z2ZjPL2bhkq1NWCKdevtcJb%2BI6vk2VlnzpJ1Lo8vas3j5yCkIw61NE2kFvuoSvmcogErfnaXweBvMISg2L3ky1jc0elAQPs2HxRYcBuFc8x%2FR%2B1njpmO2Avqfq1ECwsH9WDfWWT41rGLh69GKqqgjjDDH719nBredn0O5bCEg4%2FMfHSMo3wdxIRAWI8nnZvID1N7uwN5laXCLreH2fiS%2B7jpH%2Fdjbmt8DG6YYfW2j7SlATAcRbaZ6Wdobt6c4qpsgTwRBURuRMdpPG%2F4F%2Fi038Qeo36WdNNcZMNWhw8EGOqUB3xW3cf%2FoCFaWmkmm8O%2FOUyjXEQFADgQpv3k7NQbkBUqCWNlrKSua5bB0TEVN3%2B74VTTW%2Bql5Y3v4dgHwFEZuqDeAZ1HwdlwBzPxoDT8NCLo0%2BtrpGrBBG9oEcj552RYjhq3oY0lUqNf6plB9m96CYpv%2B%2BMWRGixe2hGSuZZ9N05Ym40cPmxVbFk2LNPyjCDEChGm4rdICictyHfcb3X0yOn5b16O&X-Amz-Signature=057eeafb05c64aa8d59ffe9db616762485ce3b7ab7f3301dc6373dc441736303&X-Amz-SignedHeaders=host&x-id=GetObject)

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
