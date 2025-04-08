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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JV4ZXJI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH5IqQV%2BxHIfuAAkEq5Tg%2BE%2Fm2y2u3efbip%2BClEAsrDQIgO8ZQJPZA0aguWEcFPZCZQXApsWGDHyDaoPnKwe0VHHUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKxV%2F5w66nl78%2Bo6IircA9xNuzWv3UuymnjSJqZehBq2nCUFA1x82DdGio9bajA8y5akAWYjBp%2BObB6RQTxWdouYYFbvot2Q7KcI6KjFsGnyo1vAgAFF40oUGSG4Eq5oD800oOG4QqCB9IIJnlCt02wDeqWWOukHWCEW0es1SyPfIpdKNiZVLLy11eyYu7IdMhsZWi3INCxDC%2FXTYskgKpNKfw151IwjX9Bz3XyWeq1ILiSr23oYQEXPN4w6ZMkU54YgK8Ve9LeUw462S%2FUZjQdphDkm%2Fy1AGcNmyTEx%2FYd9DlOybgyOv8M5Hd%2BS6TVOB%2FhRvhkyKYIGVSDEjhBd5qcw1pn%2FBze4IpRhuGOyp0oiYxGM26%2FCNrvQP9iCVaA06xSR%2BhbZp9QC3Cn4pBm%2BbbG0fEnPLEbzvnzO%2Bfv9llSC6G5p09WpLaRoyekHxfWri71uvQPXZ480m3UQv%2BqB8fLFtCdZ8qL4FKIYh0skOi9X9qS3521fLic3bj4LQwPXT05sIdTYpn19k9b6ZF6J6DpM2mguX%2BJGTdpc6IYhRAoidDRslcdVYR8c8Haec9qJU8ymJ4OcCdmS9DRyhmPr3oIMNaMeoLGiuwrqpzSh1LOEwZDbmS2ij9VFmMc1DUU9crjqagJD1bLoaPokMIaG078GOqUB5aKI6JMVl89wf3tvcwT94ZMaJDyrpoe%2F2DcOFW8OcR90sEq4kEXz7mGIgg0ccRPUs6ENukNSb9geDpMX9AQfIY3QfszFxNrAjDA9BIovyC7K%2BCllJJG%2Babo2RVicwo8U1u2ImZKGtdeR2oZi8YURZh16eXISvO9ODBIm7hGX7tCHLbXnnBbEbx4TItmmjvWlSejqBukyq1Wif%2BwXNxEOuF2uMaaA&X-Amz-Signature=381cec330fce24ca272652afc6fc7e1b1fe7bafbc43c394a29ef4233619c68f3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657ZHP3KX%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdsyl5hMksc6dgskV52t76sHglSif8PFZS5o4C49xHagIhAJ6B9xx3dZi6Xjson0p1VniN2tJSDOYNJX95TiyQ0clVKv8DCHAQABoMNjM3NDIzMTgzODA1IgyXSvhHIybqnXZjhYkq3AMLhcg7KbdtfcMdaCCHTi0MJpniVcLONv4zaFmN1LRksBPvDmYMgh74%2B10f3VOK5Fw4itXdMINp638MooynYSIjpV9AFQNFdQHJ4DDeYpTy0c0LIlRZm2%2FJFK54qsMY2Scff8qsYPtKW0sGlZSjOi9aSXg7vAMVeVkFbojA3cy3PhxWc%2FKGEqMgIJPKXvmP4NdIASetYja%2BPWI%2B2m0cS9Iv7iNtNUBVgtXsudEqI3B4a6cVQL4J2ixAwvBEaHfTT52HBhXb5BuZnviJ38dlJiKcQnP3M2%2Bvu4DpUryUMtOhVaPlsw9WsNJE5QYYiEcUozBY%2FRFH2Yu5P2%2BFa8htqqxW2vXXiE9gSyGGJCaa4XbXjMcEzctLbphm5w%2Bg4W6lcjLWQj%2BxmCUH1z18x%2F1HLTcARt3UwHluBiZeqNlufkp%2FKbFtsCKT1FaZqroZgDWHdTnAnVhBpyEzhAvu2J7fuDhraxvrS8TgfteQrcJTETZ%2BKiacGG8mElIoFIE6OBxFTwnn2DvD9lg7oM9uxFzdKHWBsVjq9EyQaqYSikssqcUVydp0OWzTMRhdeH9k6gXq5q2ZgvD6NC%2F%2BZmmaTjj7Ptc674Yy4nHHsrEFZVzmV6qq%2BUKEuw1hv%2BVT9R78YjDKhdO%2FBjqkAeeQnItV5m1V4NVZSoy2mxTR935Ib904QvCj8aTz2Ji%2FmhpJGI1MA0K4GOlyBlqTm3LrovZ7t5AzGTBgSGwWeGUINC28XBOpb30X91jLLkX333lmmO1fvgnnaTc3zlDiDHPyzky7k1EQupTr4fIX%2BoXv5iwLB5xBbRo6VEGSh92gNr4%2BpDCNH0UQgP1pBKY%2B6LLhiVrd4rIF0dOi9kH2MFtjl5o2&X-Amz-Signature=9de05d387d1407a90bb3c80f12721ccfaeb09deca93e7ff586e5cd93b071ec4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
