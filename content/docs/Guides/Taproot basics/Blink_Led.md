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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJKVZQU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIKcAjR6eDsGFSKCzqq9B0oyu%2Frm806j8uGjpo%2Bqf9eQIhAJV9Sm%2FD34neM7Z49Z9xP7fcCu7NvbXPIIAxLTZMyet0KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd%2B6HsN5G25kV5aAoq3APGbbaYUVXxazsO02goVcBnKwJmPK4Q69GHUgUEO71ZhKbTLM%2BNbJJL4lxbvLLGPdstNU9VleZT%2Bkmtsq43xKv9ZKH2BWTwfG0B7bQs7LMhDfbXobaNnIzktiS7z1KPtzX8sG2PZSTpwbKj0%2FCvIY8Jnhhi7%2F18mc6QL4hLBTXNxZalqvXV70Av5wnyFs%2B%2FNHUfwCi8kpQ3NmnYRf%2FdISjNvwmW38OkOPB3wAhFZcnu86DZMekxjWuNIw6NcArVK%2FjYwr6RKvs%2FD5P3WL1mvDiLgYnfLtvrN3iqmvPtIwfPxUzcgwqTGd9XXPAU18dZJktAfecv%2FJ2k4XJdmQ0QeTFgl378VNoPVbLGP%2Bpau5YYHum56Zij7uonswdQNG0VotAI0zMcuV6luS%2FiWKW1pTY%2FvwmCW1ahdDczIsNkejdjxeaX9m5uNFGgZ2jxoASp3B5QsjOfLbErA3LlOicuaPi5Jjs9E%2BFi%2BNhSndvjn2eW6%2Bd%2F458E6IhaTsQZ6LLUdmcNfa7dbRAaNBULhTNeUv3SkJ6pTTh8QmdG0OdGvfGEvr06kW4MDHWngztXMlI%2BxVpcm55EwvWgC%2FC2EjPxxtX0HmLY2OtEjeI%2FGc2Jefymsg6QYR05hlfCZBXqpjCm7ofDBjqkAcYGRgcqOBLoegMTgYh07cnqnJsU40bCSDhw1molYv6DcwIFM5kw87hOIx05pjBCKv%2BkmXfJPne8QQOsDB1wRClJETqyI%2B74jGnZsQ5dWxRo33fMzMl1oV0iyhuBx8qucczVtv6W%2Bfv%2FiP2rButDR7m4ebVTE8kDcPlxKgxRFxNaY%2FP5J7VyK6ZWxUVQ%2Bt3hqo6mrZsW%2F%2BS8QU7pAU7p%2BoKjLuWh&X-Amz-Signature=a509ef38203e911180dd2a47851c097347c25a5d7b620bfbedad4be930b54ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTHHI6UR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6kHodbjxxfS2vXmu1Eup71WggB98mETIgOaUT3nH8gQIhALCDGQEgHK%2Bad7d8lmk0sqVQg0WNRSmcgvPgmwz%2BQiNPKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU4Br0UOeDLPjTL%2B4q3AMLz%2BnGksTjIpRSsbN27hBbSzJ21NoBOltp2uygErSZ84ipVFrcQlQzHjbFN2yNWGyVUNI9HamTMg%2Fl8xxlpX%2BRuk7BQFrUd9UTS9fWYHhhV%2F2YVIZpq07i6u%2F%2FRmK8GOcSzWozgWRfYS0GTUbh0LvNW6dFyBwrawfZUx0Hg7wWsgY3hOjFk9mL3wwPhKpohwZby2bGgKJutyKRPw9FDD4Uh72m%2Fd9opVv%2FZhWURlnHy8kDsd3cv3tY2H2YUul65ObX%2BU1xaaIcSSm65PRVpjxLdVfAnuofELbjSSZdXayGCWkMwgRvYZjybJpJ8DREIVypy4WW2Z4bksYlm5L%2FxCqHkYGiJc%2B4S7HdcZp439sQ2usd8iOOsY5JHwqVELj2%2FtLnfbnRqnTGb2Fbdcy2jxxH9YiFvK%2BBOZoAunk6jpGF60xxFLqYbGeepWVxvbW56UDmExg1ly1LnBqR3%2FTlMjtDWmiXzAaJuuRhHKW4Y5%2BLd8Xg2RJnr0pPZK0BOZBFIzpP27eh0MqgrWUzd9x5122x26YL0rJ0tcJRVYSF%2B91EXLLedSX%2BwhrgNNPG%2FYUH%2F%2FjcUmW7AubtHXh0gVnfR89YEYxFdmh8%2B3cvi94Vg%2FjEB3DiMnk55Mo59zO7TzCA5ofDBjqkARHuIVFSBiOh4HszIdygWivM3zdVHVSIVsS%2FlOLUb%2F7xfBv18cnW%2B0%2B6j3m3bRsKD13VWAqv2nrGlTfRX7dRK4GaTd2TwobAc4yff3nkwMs%2BRLzQEhOExBZHhEYmdCidFSbOQy3ZS%2BOrV2guLz5rzwMwVNwekp%2BE6PkU6vRMct9vMvmgAevAeU0iCofxWAE6EGD9cp%2Fy%2FCJLHkdTNe2b4cX5sdsv&X-Amz-Signature=c5cdc9f0981b4ac2c60995a38acde7fd51d119678ff42758e241c84878e5ae9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
