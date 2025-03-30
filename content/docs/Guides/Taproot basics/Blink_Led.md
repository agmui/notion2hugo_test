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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE3TGSTP%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICh2hUw0gn1zFgDO3jrTkThcD%2BdJGfZ6c%2B2yLTenvm37AiAvMtEu5q7GfHoeAegR75l8HzT7o5Q5ZVwSLynrrX9jmCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvaT3GDlGjl5%2B4KqEKtwDXgnIdtN2AW4A0Xl8CcEhlsC8NueWrlO1NbVtYwS45gJ%2F9qCARP%2BJ2W5hu5DyvvBb%2FVrg%2FkrsLqUllYNQ3CKnqK7KTsB%2Fef%2FvQKUvPDint86KByKgSwkorK0x3cthIykOMsyXygmy6hPAB6d149eL%2Fxzqo8vr8BpCxevJT5dxHT1Trw%2FheLt51qEv56fteJX1y4DJoCLs00707bVsW8Dq67xDfgQhu5qatTqO%2FzSdpX5Rg%2F9e3BhEjkrTZ3eFgZ8dAxVVM7qYHXcU8Jwvol5f6s%2BqyJjGeYIqqe6H7qnS%2BRBGrxOVr9DwlvPjFYeIPyFheIOXJQohYB4FBt3lBRQR%2Bnsrcl1x6ky25EUXgOekzIbGwpg26%2FYwVTTopOT6cilEgnWXWcKawBp2PckEblaaxoLKVMhn8cpePenlQiANGYz9wZPLWg3sWSRChs25ujKgJiO3ffEDxtoB6V97P0Ncd0osC9pKflHAgo%2B%2BTlqax7tuoo%2B7WILEnrOYzqw9oK0usso12splnRTr2JM%2F09Al4ydS018KqvN8GZVEy45nL%2Be4Zb017K%2BhaUtHh5Zq7tblyOxdTr85cWsxSWosC%2FZPkdTYF6PlfyXBPXWljM%2FU%2Fa%2BtxaKVByY8X1auaAAw7IWnvwY6pgHZ4KFBPi5%2FBwTdWrInF45Fe0GG8j0xAWXIONlHfWmrf2VWlZrSaFfm6jCuNlkkJYQ%2BWFPpN3BJ84wWvcypH5UKVtQDiNxw1L9fCOT3si2bJDeBhRLCytu4e68qIPLOOnGhVRbbDwb%2BVLxkWgEbDyxE4Z4z4M%2BgY13hVCgVNpE5ExxkZPZCYOoPeDR7fnpkHcbNugPbTmeZtVQLwVVJljyJOkywGLUy&X-Amz-Signature=23f5eed39bee6980ce44bff7ff865fe62e24adaf51458f69ed255b6e0f79deeb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQIH6UUM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCfQ%2FsEBcHSL4Elnnym1Epx%2ByDjF4F1j9PygC3eVnRimQIhANWDXCPE9HoEmi2VeumqipdLlkWvl8Ds5lVQfYFlUGl8KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz66yxqqBweXXKQ4kwq3AMAieu1cMOgKD03hiRuwUnFsqKVWHGuev%2ByuNEgFhH8FpapNCtFPWeAc1%2FOz2Irp5lcW6vrgbYLdkTAtO7nBXioxFG8fuN35%2Fi1wRHLs0iTMyKe%2BibtAPqDnVYe%2BiFY6lHtabqDkGfwlQ3wARAIRETEvjdTWtgScU7JWdLcoJGMbBGNiSyhDxliSssWj5RFXzkUlijaQJrFedUWpBpnYO8QpNwcsd%2B%2FqH5Lb4IzvFWzjSJc2%2BHcy5QKEdXUtNLmg6uq4lWEc21g%2BroXAXYRdo9%2BvWWtU9RPFYwvAa7Gt8%2FjhvQDx0Ecq0U0wnAZI7Ofi6WsCB5mB%2FycGQj0lx%2BkIdz%2FFPOlms3bIHfofsUzZTWGgf7edwczw6QNw%2B%2BHw876BsH6OU5Bl4aik3NG8ekvEGVjdlhyL%2F0%2BRiP3fag4w2%2FdJ1%2FB8iRfJbzNSeYTNxUnShyImQfaDksY%2FhJlv%2B4Hx2CeCSXIOxQfgcOJ4ir1n5H2LRDI5rdGlngTNCmhq4fQRR9uOC7YAA6S6vetueeO01aLWFB%2FzDDAvcIoxSWaJ91Ytvpe6eWmN4LZI%2Be41Ipcp6898YJMfdCrYQ63NcwSIPGzZGg6LFaNSgSy%2B5Y%2Fqn2dHNgZKPzw85Z7dspcWTCchqe%2FBjqkAU96QJMxizdTrQGCPFW0wMXBa5NAr%2FeCQ8Wr1%2FnI010X5dQpbVCdLQvmoZ%2FMQ71yCmlqJaIiKYG%2BECtr4GBURxBFm11rOzzbqt9XMpO9Is1mf%2FEBA%2FGXR%2BUIrRZ5ZKC9FNoXwmJ3aGMn9bS41mcg0%2B%2FaE4W76uor9eHRVzUlcPBI3MBdjNCmkTLF7%2BvSFfaB5DEdkJlRQC74PgvysJymVHjWk8FG&X-Amz-Signature=9a45db2f22da201796907a733583c736b64313e489d696b6e88bf72c5014de64&X-Amz-SignedHeaders=host&x-id=GetObject)

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
