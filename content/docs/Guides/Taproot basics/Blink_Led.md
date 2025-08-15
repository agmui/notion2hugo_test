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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5YO4L3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCID4n%2BocnJ3%2B1nfIc4xET4VCJKgPWvpa2E%2FakC64Nx4%2BwAiBazBafqoA4wXUMm%2Fuf79i9ZinS4uHurPJhzUhe%2FQfS%2Byr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM4XQBcsbF1e%2B3eeF8KtwDJ7rhobA8kf4pbFS3mM8ONwnsOofmUsjZgX4dxwP9EUGNMR%2Bx2L9UHo8zZyPpw3EHfBadsMBY4rK2zkm5R%2F0rW8p432MKpmyU1p8g8Ch%2BA05mf9sSQ0W6YjeKGWEIs7fSEi0Bd%2BfTaxSMhARoa4vZXOEM06sLzz00RHsbgGlmf2xH8apaFrJTSGyDid9X5leVQ%2F0Nmij4aqZudsFqARq0DYc%2BkBXPVSkTmx8B0T9LMDDkmeud4XgExMWTUgG1awRX19Bz9eC2DpjgXuCxZjNd5qWiABl4hOcrNSV3FokgKG0Kkz7c1dJXiHdUlvnXwkDNF4MRb0HZABs7s1ZS5y9wtuRX7JESmlj%2B%2BrT2PtjCmLd8Z2wNo45AhfBK8oBsd%2BBRka%2FRpKriQYe4OpOeCjn9fDOVvAhpSGsQk6YcILoIgQxu%2FseT0%2Fwl9yyC9wze7HHCZI4%2B5rqpxWzrvF0e3mUSdUY3Qh6JZOq7uSrf94lxO%2BiiAOrLj%2FLhMLn4fjvQ8yfbXGHuh2Z5H0sv4o82%2FsIhmt94QA7c6RmbZVuFnd1SH3qa4zJHcyrg54ssU5ybv8ByLnCJOw3U%2FCJg50WTipYmVKCIJoQM%2BITyjsYS1jjr318CUfqLkb4q1k3CTHIwxdv9xAY6pgHxmVEeosD8qeOzF%2FstXjlfRdQYq1lUfBov2FMCqrLnYP81VlF%2Bbk%2FPhQsxKvF1JmLX083NRDD10dpyrnUVwBw3T2jEmJT2geHm3667YkOAp7EgSJ9xUaCGeggXQ6oe3Zf6UQa0AnGOzOZr9kwOugCeuqshpSh5Q4DG8YIJoD3yugXCibTxUhaVgY%2F%2BquGccRSmw4BhOZMy6y%2BVzU%2Bg9rCROPGlFf8a&X-Amz-Signature=de560a9223d55a74a2ed550c81589ab09dbfa44a7565b71715136124beb9f45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHW426WN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCTJEc%2F%2FWIjDHBCQwxf1LKpTootpGRiv1uRGg%2BfkAoDXgIhAIfjSQE8OmtBn8FE%2BxMndOzNcdihGphLN51s7IGHCd12Kv8DCGMQABoMNjM3NDIzMTgzODA1Igybnr50N68EfgQ4u0Eq3AN0z8XirrpQOO0MxuySvRTqZckANmy2BhqcxyJtffA9zPBuKAd0%2FEeZxs0Ivjtb8g9gQwQU%2BBgRH1WgwOTo70zQYGbusVlO8udskPHWt7nxXNp6sgnjq1%2FvXFBUtg0x5AoeqgNFVDCsipfQDXFPew6KRqDqk1xowwQkKHXQ3ETY30IZ%2FXdf9iIZqo9NnINkdyjMpRHxzM73Rc2Ndnz083yDEgCCVnqSye0RG3emJYIq03mxTbUutb%2FoTdUrK5R%2FKyiwElkCXecMkY%2BO%2Fuu26BwJOk4GKYPQ5zigDD6RETAYOzCUlV7fLaVHbgG7%2BvjOX2cYUFw2klxHnW%2FsXPf0wHhbOC0Vro%2F7pLrnF3RUd%2FzHXxc9Cz%2BrfmG0iZRaAVEnHS%2BAmGG%2FZLKU3zHv19rQMVZdIbVG1daNBp%2Fo8Lr%2F4%2FcXFoI4NDMPITk%2FK0xveBUiNC%2BsnIyN3mO1fnkoo5laP%2FUyh%2FoPScRY7rLwi5g9bIi0vuXHiHBmsRqfnEFGsjOomxJnrghb9KE%2BPCdW%2FRWB4M7piOo%2BXzq3%2BQUMio0Np5a8%2BdXn1KNmWh7tCfeBZlp1V9M2xuijLVO6WfrkZlVQPTNvlmD4x6SzoddvTs2uWdL%2BjvWsWDaEe2iwdrK7pTCR2%2F3EBjqkAc3%2BoweckBtXDyfs0bLS4flYtA6r50u%2BDQ5Ppc3YDQkWSjpukqn09kCm%2BmXBHLf9HyEr3yad9VosxTpnTDbXHkIa46P0%2F0xThxetN12qPGhOqHZ6DYG8ab7g8OGVldGuk%2BCSjO88wsPz696bl4nPcT3xySoyFfR5fSBSemHt4LQW1K24jZ5UUuXROmiHXgDC8H6NyFQThPHfL2aYoKFW8M2%2Bxa8n&X-Amz-Signature=04897375a3b0ab12f93f827428a79b66ac5865b9feea93e4ccfd5fabe3dd5d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
