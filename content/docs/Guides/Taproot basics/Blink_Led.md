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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6X2PR5M%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmqfMXzLMKfI6fEzjpwUUokN2SqnTV0xKPxUmegH4JyAiADM6FUcdfI8jkyrOiOrEmiQWQ6NMhsgAzOZOTc6WhBwSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMtjxqkBw%2BmMXl64QDKtwDU%2F6bRlVtfaF4GUlDM%2BgHavrMd9R%2Fo8yOQzKQe56Ul4viRsMQ3WKylGkpGCJaWoEv3eg6G%2FvGA2JIU4ugI0ZAYYQGHC6BNJ4kEQ8IhmaFaHmywonT4885QD3hB%2BFxkvFlZndK%2FO6XRT9D%2FZX6FJ4XcL5Pzb7C30JqDdBR4UTY6%2B92Zbi9No3U14F72Z7YNBwJQhz07praxpRdywUWDHCwFV1xcfKboQgLyd1Q4WiaKZZZo3H91OMHDcEvVc8LNFU8BhJzjIxVhN%2B3cmZPYlq0uBrr0%2B1jOwsRFt%2BKaDtm4dr%2FabPRkjzQPBMC6aY3l2dhMlMFS8%2B%2FIBOrEyDINSSKQ5e0UD%2F9OHDVeSlkG83GDO15JDNpj1JUU4JUpO23H1VJ4H3tsO6dsEBeH7zKjr30DMJryfPmGbPrRo7AV%2FFRnmBQDF4%2B%2FIimeeMjLMY7%2FRMjSVD2TVdPdKV6pOd%2F6MYuzaHfLxdOvKpultovWI4so6rtGE5Hk5Lhubzbc6B%2FvSHKVTEV0GUXb9UZGHeXVNt0UWL%2ByAwSvB9uynyVWMaeH8%2F1dAXwvZRCxVdi3mDkHAuqI8OQ4B0Nk%2BUBMqVOaj1ljyjZpf1FGKCDoikMPFzwrIZgTsegKjb4wRWUTyww5vnbvgY6pgGi5Xx%2B67pSuf4vJ4JbnimcL%2FDUZX%2F99ml5zalgsq6ytKoDfFd%2FANvuraWbgTZFnVDVWrf5WVn3uLBLx3dhpJWaN50IYJsXQHxqiF6PV633OcvTW1U9H3HCXa9WJCkSUudKy8b%2F0Sv8ZQLsjC%2BrG7Ii6HcUJGrp99Ea76MDJsd%2BqeQs8btYUxBpH9G56KQ%2Fl9yV50jkjV3N8cxX%2FoxA4AOoTeolDtcv&X-Amz-Signature=6d356708fd95341d4c2e0be4f0f633448bd6557c76b9b5c724f35ac4fec05fa8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4DVYIFB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTA2kKbKLv2Dp4TFUSEGndkEPFRN7pQ6JYPVCvOWxVsAIgbruOGWTHNW8QORaYxHJKRgQEmYfg5awtVGUQ51cC4KQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOCMRVmk0Z2JnimG8SrcA2xGT0Jr2s1fIW9KOElLhr%2B2xVYvkdR4MBG1X7%2BibBDz9qdJR0xEc4vsQ113aoA14fUiqpBM0dImYwB7SVjXL5MItLc07eNZA6aINYw%2FESmp%2FDegoFceeWC9%2BMG7JVDg19XBAGyRnFV93s2xVREaSiGRRIq42pK6hu%2BCdlbh0X02YtgbC%2FdPRtz%2BOT48pvG8JQU9llYAVDobB5PwvFPUhtjlois%2BOAlVsY9HWV0fduUvD%2F49%2FIBpPP4r%2BTgCbwGzjV5nXw2iR9pE55AzNS5mRfkCXFdVlErWvg10%2BA%2F20EEgLDD1uo4gMkWYdP0jcEkKm6DU3JMh9wjSbtSBIS1r9VlEcWBYsc2yi0baedfVG5uJiH1%2FBVJH06iLo%2Bvx%2FSRGtHjI9PPHt%2Bd9mFKDLCvhFGweNmbmzJQQYgsYP%2FgqALLtBjBuVMjxQu4MbqU4fccwTdECvB4tdqdCzwslmx4zsxYaER191DoofTRNIg4OVDhTXiiW0%2FdeYPONbBevOEvDKcwwy1f%2BsVzROmgZxQhlPRdIn%2BBPyFFHMbHbmhx4wQzt5I7JWPBOKi5CrYNx9NFZMHcm%2BGJDmhBM%2BTB4SiKOSU2LqFa4g5xmYPDpK2O%2BLoRh8j626klce2dYinFhMP3e274GOqUB2Zq%2F0YX%2BFXT%2FX0Fkq1A91aqkkvRi8RCKNisLnTGm0jHJ9g4ax3p1Q6eVIlDpqlgPc8pKynVLGcKSLA%2BDhm0mJR7DS9VmLI2gbF%2BVTNn3%2BxZwCCkhIURgsjW2jRyTQzlN%2B1vgnPRbcOWMU0i6pPtzpDjxUMWUDaL%2FXz%2F2RWW3GZhwTGHb33I4qvuz%2BbLPvirZB%2Fz8IoPJDfCpjszcIfhvy0dx2D4E&X-Amz-Signature=122a33de500d30f0f6120c6e5d0eec186e151ebc4304f965a136ddc8b2bdd6f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
