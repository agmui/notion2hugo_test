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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S373CSY5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC0uo8YqhnjEJcMb%2Biz3ORIKAzh05WdFV3rVcfA0zSMQIgI1%2BByeQZOsM%2BZ3gAozCjMkbsCLXMlUApddkaS9MAQRQqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQ%2BK3hKZexoo6wNZSrcA1ohzRMJWiePA2b9gVpZshx4dzoWL8B9D%2BpfL4hdHzhyiLeZ%2BbXjPZyUqMYEKWGOs9x93wGq8spRlRh2hZoa1dJ1Ma8R1CRICS5%2Fl7VDJp2BdWbUB9ZoM4zOoSZfLiEs4fXsmOzg0e9CkM46%2FFOcSlx3y0wp0y3RSbF6lidXmch5cmDVIHmALBS2Lf3iUET3ur22q4SyGEUP1EM3qNuyCVAwzexNIaLsKOY0GtlPZwRozGYmeQs6bjzbvQGYxLA0PLxm2b8Q%2B%2FvtsUQulNWgH0IObCIcTp7ve6jt8ndzlNDpeSn6Ti0Jysyi%2BusE7Q%2BCSX%2BdRYbUvk4xWhHaJYhWVovZ%2Bg22c%2FZVcxVLOAIKIOh1FChHt03QuNUdFGXYLbA6OmP0ZW17Fmuh8vyNsVogNmCPmvOHFilW9ukciKdx4aZncwi9s36TXt3YIGjkWkhHmzHNnb73gGf9MgiX4yPuLa361hWTDOlSbJFBCftF5XJxRhHvdmNzjhD1%2FZpTVdrbVSTn7OutlV5DftrS%2FgbeyfsF1MuQb2COeNFLjgtOtY5Hsu2MjuEuD%2BVbGvCeV8AiTieN8aTE5tOK0HfnZE0PkuH2PtY3IlX8T5zE58rdNQ%2FB98MEBIhySziS1IlkMJGbl74GOqUB4iuTPuS2ZOEc6Pb8%2FB1ZbhhAqy8ZgZucYhVGiC8MDjawxoNXMbPmROkoiP9nlIK2Q5f4iqGJWIcsI538DQX3uRSybKaisXIM%2By40j20P%2FzJ%2BCJ8a%2B0pG%2FUdFgkibqnkGu1iVax%2Bj2Zd%2Br0ugVfJX9BJXCvNer6XWFqFbP3NHUJOfqj9RKn21NvFsu1ByGN7kGEfhnTMp28fqQYYQwznovZSfRrVu&X-Amz-Signature=699905823abcdfa414792678994c3192c59c152d0ebbf5d1ed7412a963c2294b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHXS3RG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6SqoMe%2F1m%2B9EiJvTthJeAItAZgLIWY%2FsyL9%2FponJJAgIhANd%2FW9IzLCDBvxeCeTwqi2vTkvUoH20pxG%2F1hR3dkMqVKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWdDyYKD9FxvHZP7Aq3AP%2B1SQk%2F%2FTYBxWhA4nsQ5zQe%2Fq9czIuDcYgQ7YKQnbOwMxLf8oHEwoyZCBGDAr%2FDqpiUn53scUD9xPZsqBhbeR7UZSRkeCHxcqk4ynDnePHWeKge0X4OYCeumLXMZR9hxKt1ZZw4bQ3jGkY60cnCVgqeHQAOSPT5E6654HHuBjm66x73lwYb1OOY0pb70p9elKrOgDdpNYE5NrEQCyRGdU5JU1OGJR1YhVPef4hLDOqYLuCzU4McLKjNcIUYn3wCVP6c12AM2yvuiYVLRonC17eSosmUh0Gz0xcyCL3%2ByTP%2BUAnlicrVfZi8TrZJ4CVaRKV5IhT1YV3IHicC%2Ft8nli9FbAFev2Nkjs9IAd1F6xSuipFi5Fd3l3SDaP1Oa7hO0Md%2B0t3iLRYn2a2ZdCZpv%2F1D0rq1QXJHPu2h6CdLd5Sm3qj3s%2FUxNBBAieURxNTOfzkLK8%2BTTSL1o3DRaja5OWNJeTQ3DrFH3BYpVL6%2BWUWrHidSnhLoeOEFqMhwiWkp3bhD43xJUA%2FsZueT9n%2FH0orhdphSq6ie8advbtKlAEbeLYDg9Q8T5kHKc6Mor5RsaYEv2uBpC79XsM9UbLV8uD2Meo6Jq7Z8FCr63oT5ajP4%2F%2BhCrpL0Ui%2FKPSgDzC%2FnJe%2BBjqkAQzm0aQ%2F2zoSOVs89jcdAffB8A6ezJqlS5RdjL9g5RpD%2Fx2IAsI9tkLEVJ3rtO4Ql%2FuZJRgINPGCdhjJUG%2Fcjr0Y0y%2FMg8MJQnBELlIPUsfKQr5KPYsASW0sYEtBwRbcP5pLiCI3W0pV5BqFLLEy%2BeS9WjvtCa%2BlYvksRNosl8GPE8lG4zEvdUTNpuW6khVCVxeW034GQX44ZMfxUckSltBHXWZQ&X-Amz-Signature=dccda83ed264a396a8c5061692b5002db91c7e0dba276b9fdc15492576fcde37&X-Amz-SignedHeaders=host&x-id=GetObject)

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
