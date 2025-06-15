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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDT47TOI%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICLa0NbvLFFJ061f8ZPB7PUe1zYqX5KkZmaLoykjqCBoAiB%2BIk19jbwMrbXU6Tcj%2BwRUYwTIVb%2B4zcQEf6Rc9RemRir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMrMdjhS4dZG3fq%2Bp0KtwD%2FzBgATKE2gVdQqOhsQ808hgdIu5w8TLZwl4DPC30kaYLOg1FzCLqiwKrAGIAx%2BwgPCRHF5E0wgsISGF%2BF1sYekavJ07CD4eLgpTabbW%2FE3BUlZJDJmqWGg5UlvXfwIREsYB0XOZRjaFMd0eBY4X315zRc3%2BfHGxfZAtbX6tLO1gVYLhBcEPfEW9IvRjSsnJUNQA2etLnDN9MyXrXZ3jjumNhia6ymDvD0nVkAdJFOp6Ihujnx5zNw991u6QBtWnF5znACcw7SOXQD6kjjk0Mc2VC76gqHUuRHtocfvgtSki%2F3FHX4DLX6VqtQp7yzzTJP6iULU%2BIy4gFJIbKBmaGtY4CmjmoXNV1LMqXDg1f9Fkqn6lfPBhAP5HZLpHnsKxxxXyfo%2BDzw5caJWyZyssnQC9WbTJDeM6WOV2MKrcEMx9DjmcEzmS9e7b239XznMfi4TYOtH6hUO5sh6SGMR5KcLdYfmPJ5GD%2FZZ8NXBBNWDXsVpdkH7JBW17xfrHMzMFdT56VGu2ApwI3eY2iKkwbPb7EkpPI7zz%2Bg4rXqXRtjtz9ExpGciNSGU7LAdKX7bKTLnx4vUm0Sl%2FCK36rSzlrY8FsM349pCzgS4C4bc7DwUgEx%2F742ez0f8zP0lwwu868wgY6pgGv6GYXzeqVfR4XyZESbobjDZ5ofTh79oAAmRtQLufCILfFiSwP7uFjcLf4MX1wdNnBVsVAXI1juDAuoSgxrh9R4u6nvZUzXbl3b6JjamdOL0QVYoHY6VKxGKe6EO4WTFEwWttUupZR0mCfwPcPl1WAp2C4xn0c%2Bdb1Sg0ZRD2cMVp57Z288Vz9YBJ78effYniQYR8WAGJ3ebdnVOCuxeVqdqiujJMd&X-Amz-Signature=df0f3a25ec5fde588cf678d777161820c7bcd831fda820d530df4277b7079241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHDYMTZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDFiNiyfkyIq9O%2FhmLvzPolVR7WTeXARyn8MUEjfSJkWwIgb6C0IaMpqMxR9%2BZOzFQwlfNEx0ujDn1tBUD1mIxjg4gq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPrI3ByiwskeMDpxXircA8cUcgkVqx4eCRqD0pSCsynXMGkrIOPbH4FOWJSIiKKc8b5cX5bAdTioRNPMtEghK%2BF7nunxND26CzpKcOLW2yaiD5US%2BlH25wZVZjXmIw%2FtBT0YGlcT0QB1cAh4AHoCsDZJ7kkm6MIbXmwvSqK8i%2FhDGZRpLYZopYDbj6OoAcu8iP89suUJchW%2Fgo4MvEL4%2FwDNUHfrABNJXdQdFKMCD5q2SEKdqhrW4%2Bm0n4f4L%2ByGeGfHDgeDzz%2BsMXuMIbHuC3qDSAWb%2FlicDErmvaf%2BcWeKxC7j9ytt5QB%2FxLb52Dktciz3DXHY8JvfOkY6GrE1%2BoPupsPfGJqlWMK1kGBRwSwM101KabOrEbF8ZvK6yxlf5pdh3dglOnrr6qFEO7HxEq1NryokSkreRn1HKaBGMJ%2BjVSxToKPP5YPQdgTXM8MFmq6s2oAI8RRa76AA3mBSCvvV3rj6K7DUtGuzisCkL2Jv3DPo8wpfkJpbdjOA0l52cD9kwTlIX88tpd%2BG46zEsoUdL0M7yDKg%2FUkxgshOjgi55Qymq5B8gneROlAzTildNv8gNA3To2b7qODsYfo8bKM9WKShUKCoH%2FifOA6%2Ffv63U4IkNrwDWEpfjV1fCuH2847E23Kxrz4nG9gPMLbOvMIGOqUB8WOYur%2BBxHAAqCvLYEZipKDjn89QlMhNDVvqYgiWupUI93byvTkYPWmwqaN4wRrIvtsqPukeN%2FZ%2BmxuJdh1dnpPuh753bvy7VF0sYZverYkk3h8C6bQhB2030G3YaHt2l2W0%2BhaP45paAoNO5UcxEIYP41roV5d5M2tzaVRdY%2B6KSj1yWBR1pmICKoonvp0pPcOxNIw4SvvCwC%2FJfoInSm8%2FKYjq&X-Amz-Signature=fd37e3cdd0856b6f1ab55ead5bc90eaf8f30b9d5ef885bde0fa1e84bf8ee417f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
