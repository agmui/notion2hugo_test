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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEOM6DX4%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlQLVIxLjo0YLqjH5gcaf%2Ba%2FUU9MOjyCxLrq8Q%2BUn2CgIgCJcFXrSZRdC9gWH8WQpAlvsf599Z%2BCHR4RxOYuiTjAUq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDFE%2FOxHh8iYyponMQCrcA0CrzynPr85sr4fjAz6wM2MSR2D8R7DuVOcSwfqz7UvDomavByaV9uXmi%2Fr148lD5hR%2FCDvhtxnRgsjxaorPRT6sAJbJBwCGu0gctk%2BfqjsYc6U1Q3FXemhatSB3Ziup%2BOuBD7uckn1sYdbXrESRKWLeB7B%2BhTc6DH9iv7dGmunXf6mik7DuoKokDO1NACVwMe%2Fvjh7GG1ISmYbmZX99yN%2BJ7y6yBYgFCcgCcAKABR3TQzJ8ou4%2BsIXNLcNh4xs%2F%2FG9O%2BfFByhxyNnW7RzrFlWs2QAhtFeCfEJ3xOl670w6OV03Mf2PjKu1wZtYDUCny1g6x0pWs7%2BkgF0dhFXxcxWjsom79pcglj%2BI4qWP21HGhPRvfM6rjYo1RAURGt8mvjOtwaKVvUslSjKi9z3DBRrCQzIqDYZh8fdfgCsDZxHIvrthOiqjjsF8ejM4J6a%2FMu5EUxI3MS4hacVf9yQmrlr%2Bf1%2FOmO9ydCzMfInApMiPlEX2l%2BPM6%2BYvutsIk8VFmD5WpREQdA2iRgHs9g6VTvBjUNwvjbQliVa1TD9JL31LVFazEFuLgC8cdXTGLJSVXmUrOx4OgzgbZGpGSb%2FcxV8x6nffrGdJXbJp6ZBsz%2BkIH%2FhfanxS9YU2d65LhMOWW2MEGOqUBJEUxcUQxbD8SdiaewXHslolDN8Jniufu7FDnJRJrGL6vmtEFYjZctvBWa7GPeUeXlDrlntywf6L30aoBU0GRhGD2FgSwHKgeN0NrQ5GjveHUe6LS3%2FZs3lLhzvmM18z0MlQngXgCnBBIUPJiCAWKt%2FrmPUKUbJe6f%2BtE0typ8%2BhmPnOmVf7fBTveCuA6y%2FQEnCC2ijHlwCJXJvbYU%2Baz0%2B%2BvhbLc&X-Amz-Signature=4e4de07cf5e7e3c0c2fa326c65ff1fc3c7f53ce96dca733e6af71945a08af02a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWSHJP3E%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJyflyOugFpLrlprqspd%2BraCHLnK7u3GWGUmcIfTyzVAiBr3icULJSoRA928623zcFQ0V0Ket49m7YwlUaCRjAuOCr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMF6%2FB2iqEyk8kVZ2qKtwD77zVkvwW5vOXmq825BDe1Y72Rry55fzF4HHnmmoOPqRgiujmZ%2BQeRJwEXeAvIoQroUNQBbZUs19KGcTS22HDi3PXO9e%2BQF5iN3YPzEK8%2BKQXkQ416NsSmWcUkitt8OLbteTYfvXp3Je7MS%2FbIK%2F5cH%2BJK%2FPIw68nbjsKvM5VPqX4ot33K3hcjIgYOjwkTX3Bw3M4jg8JtZF3vZa7%2B6jOdX2Io4fdyhsxRWNQ0VwWN%2F6T9W3CO4lstLypTLfdl1FtvqtaDbiWbUEEpafJlIoq9XlFe9%2BeaM8DhxRTkLI0hbATVDylc%2BKKkj9s3miqcGQnNLrwGdQEAAMqAVrAV%2BtKcBLMMx88AVwshBs%2FzBWzBRgFQoXsGEKHWhlRWL6Ak7scn9jJuIPNSRG42vq58aMmrfBVAQ3oY%2BqlU9%2FcZn%2FqWeWFaU3lYxoykb0rG4cgmldxUGX1ExBUil9Fog3vdouW2TM9dNj7eorzfw3RFGWc%2FWVo7Ba5udDBphBfuCOwCH5jofAn2Ltq7plXojxMq7xkMV1j0XYj2rzDVZ9%2Bi73%2FMLy6Ky1JYXgmLf4QhOSel3afpRQvGaqCqHfBIqinq57%2F3rL4Tjow%2F1GhGG8z3ijFAl9bBcYYZa1DrvOHZCUw8pbYwQY6pgHaxEqStRc1iYDuEtZYhsg3EoQJL1bixw%2FfV%2B18qlY0lx5%2B8PkXYquQyYF5upR5EQnO9v1Hb%2F94KdNuuoMSxvd1M7jQhw%2BGYIJIADKajaWfC1fcBmEitn4ABX9SWE8bAuLq49l%2Fpd25qEp4gXa373CL425K5cQ9jLanPWGYNGKp0A0vzu6E0b3mHMJKaPI%2Fe3UQ5BaXDxlIq9S3xfP71H%2Fq2z8BC7BX&X-Amz-Signature=ac74c958264bc362f61c12637ca84db35e7b222a9a0f9777a57ad33c7c505245&X-Amz-SignedHeaders=host&x-id=GetObject)

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
