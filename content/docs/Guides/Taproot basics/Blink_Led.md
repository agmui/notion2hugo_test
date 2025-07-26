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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VABDEFQU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAm%2F8OmeBajLkhzD5XSrf5lWyia8CQwsF5l3RUpJhAtMAiBAgfm6cZLXSk3zWGpEwCe0wUhsIVPRy6nXm3KIasfD%2BCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM16JxkYr3O9A1%2BIRpKtwDNNLSzdSU%2B3XojSTf9XIHQru%2FK%2BNYhjkkFjWd381ZT09US6Mm5iJ3S7BV6rxMC2R3NdLklyopuQlPb0UCqjJvGxzwwI5ZI3NCItFY3dXiS%2FKXfC8XK4%2BEWeX6a3fKauvS4hDia7jr1ywrTYKkoJ8GLIoY0EZQIb8trSyyrehkeCbAFL948xlYe6T51b9on%2FsWGFVLxhslk0GmGVnK32YFFqzDpaYPwcxGJSEp997qUWrdiw29NNcZiJVUmY2LZUcj716PfX4LkMgZ3ZiWbjmxjBKPu5ino174XYe6w0IH7u8GpzabliSZz5Dug%2FkObQXSZpatTuQj0e5zVVCNa1NEHG3SNiLEwAdcQNZeAGxABurTQpDgPP97LH3KiQuLjYgrbSKH7RWq19QTHpbV34zHw39ltXHnoMdMvAwZ3q5P2N%2FDVWjwDXyeAkNj%2FxAUAb%2BdxNNA8Pwru8z4exBL03meVu5Fy5t9EA0ZcnZjvIckypiKSXBrpk0qyGzVvTRaSH2oCqY0km7Z8PEtPUp2FuwqV2vNGskK791eG03lMGaJ1gkQZu5CbJkNHEHbjYrVwYWB4cOp3l1tmtURsw%2F8KYfSVgdEcvC8sbCe%2FfBJzL2j5KWTaHSgGHyEpfMdBY8wtMGTxAY6pgG%2F%2Fj0k2SIEZ2JsBx8EHmmnh3luwKZ5%2FCJYQdTvFuywzW3iQg%2FfVfBqsDUye%2F6JeQzoLh0RWS0TFu2ez8g9cnP5xuy6vZMGK2pfiCBrghqlpyltQZQ%2FLPoMMWvRJ%2BD0i%2B%2B990lvKQ6NsyIfrbU5pHNaDU5NEjMGGBK6ogttOzMi%2BPCee9QcDVastj9PQ1OqXCVY3YWtoOf4i4IyCJHK1NUnOwP7p2Qp&X-Amz-Signature=42feb8db1697b01c0702f6d0c78269b302d399d23840314c0e8ba97e2f8f9469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGCMG75%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC1Pn4kS5RKeT1cXsdqc2xoeKbWRmwMafQuoBoJ0x1hDQIhALZPYIfdVrVhLtqeKJ0KBSnv8vsfvNJdoyLw9YR%2FCLLAKv8DCF8QABoMNjM3NDIzMTgzODA1IgwZzL47F0Ue6A%2FB3Cwq3AM9NzuOGFJtBeIJ3S6PlU00UFG%2FHUXvm9xz6wxaYMnlO8zmPxUzzKk6SaEZq0TcQsmbgdFr1wIaGlC6tdVy%2BIEO9HG8a8SlqoVd%2Ba6S4RkCXzIyk1Sj%2BdcQfBdHoWBIGKmiQz5zZxLwJrIqmJfsKK6wTPWrWyO6naG1oo9wMRI%2BbYfY1X7BlOx4prrfgrVppm3QHMV1iNlgGpw08Gm%2BjnIgLKk5sicjIk8TVInPUXUwd1y2v293NImx9Ypl1Yzw2gLOgf8Kf0JOv3%2Bgn8%2Ft7f5VuyMR5W5S45WUSr0N8erlqa8lDPt%2B7gIp3tizvOlIzBvBXSZZPJpW5TPSTLsg5Nrb%2FTH8Le8yG4%2Fy2tb2kUi35BRZWRf2REm1WlxB525UP8SOG0Qxsd%2BtkgRnDDYkNIYWpkn%2BHTNfki9jweSjCJtODCpphWmnbBbv1kQG%2FvdUOKbi92IdZ32r5f8yxt9X9m4JkX4f%2FSQ95e4CYfIekGgKsoTCk4xCxjrw3bYvIkyhkiHbJ0jB8%2B8tP9oCBHAYnNJVKnEDAUWixTDlx9DgYq59yv210%2Bx7XOv6b4GbZ1zEmSu5ZDXTXXNV8g%2BZVyb8NLbI3rmKh8xG39kyHIt5nUNkzhPSZ55XFobpCIyDyzD2wZPEBjqkAXa4EGWSqu9HySGPA1804e0d1Qhm%2F4nBtY7bQNCfy2A9ix03YCU%2F34BY25ucDU8PUM26ARJBPtMFnQTeLY4VkZ%2FTLFbiXFPYKMWOG1CFkEr80H4BPx96lND5oOT7yyTly7KJm5R3MK%2FANnvi9z%2Fo%2BkOQ4%2Fle4OQwws7LoTIryAwy%2Fcm3g3yh5a9zRSRbX720CDIFB3rOQ%2BzntWrbINDMCoYbjriP&X-Amz-Signature=510daeca34da6413c3d36fd84b3a451889c61c7064704468b36d9e156fdd5166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
