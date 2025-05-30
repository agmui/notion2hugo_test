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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOOGZXC6%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnBPTfJbeUwt%2BeGHV5TEJIfvsSIGaVb2VoHOcOb%2FxQ0AIhAKNwm74dgOJoP4ZkhOVzqeub36syswd5Fok9fa0Zo2muKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcA4p4srx2vQPpyrYq3ANze%2FVfoEQv3h8bhCx2cL3abqBmDhI84p2UPt5WrM%2B%2FNbTbXDlRF2DIssZJK%2Ba9Z5%2BuHBlru2ergFWvRaOy8a%2BViKhoxSK9NcQzHOSOo9Qp8d%2BfRQ%2FwYHhYT2KdE1vgLc%2FTp1okJ9XSN2bIpUGfUGu%2FAFlSx8eJQfxI26sh8H0w8n1L8Qie5uuIUjYFixfIpf8GiWkUicr8CkGL%2FYvbNYruzap9tkAeB5apvzKSjtkwbV1YX%2BK5hihjIWLh7P5%2BAwuNcx4TVNgCODARpqz6ygSdN6jyHxkZf8%2BG6u00gpOpE9Y9eP3hX%2FVHEiRoIyEGITEqVExt%2Bdno6SvUBKvjMsKfGdLdu36k9lbMe9CL5ajd%2Fqfo%2BGqwBMlwq02DoFqV0WLyy9vQXjGG9VtlzBwlCd6rsAAfgHUfssRuAKgZhwv7QaEm95WV%2B90glxhrOq4wu8Dh%2BbcIaH8c9aqqSPoxbnzhnZv%2B8O8bjn6r%2F9wIkmNQHmM6XBtRSJ0o2aK9iq%2BYyYDbBnj%2BU7plpQMAFSyFBIhx6ZjSo9H3TizmZ36QrQpkXlZMU0CzcsyQs08XJy4hhHSP5fUOnXIW9hhDQ4zURiH8lEnCd%2FeyVXmYG8nvNYgt1JgzjoZwdDELy3loATDj8ebBBjqkAVB3WcAjpHFupLyRZub1bznbty7VX6%2FolYzi7Y%2BrdCq65q0hrG4PAMWTWhjp78B88Bw%2FL9xwISVUys%2B2Csh%2FWwYxiWb6s6Yx8LZMo9GWO1Q8ifEFtwB75Ke7DM2VpJtqkyxH1H%2BwPJPkMd%2BHb1bHbS9OgoIjAcQ%2FwM3Xwq5rRUrILBPhVhhxeAHUI7S1krqp8XiBaUDtgpS3WHfEHL1Y%2B8biovKJ&X-Amz-Signature=d34fb851854def16aaec7119ffc5d06ef847d69a2e97dc2732174f649edd6b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWTWKEPJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQPU7c%2BEWkXyFrfnfHCtzArTzon2hYe%2BeIrRpVsdfDVAiBs6%2BDueps6Kz4%2BSEOQqVfEjWsvKZQvZdNF04pNGGZc3CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7OiLChe%2BTxGC7pl1KtwDjag%2BjjCEUMO7oASp5PgS96GbSRQGcbnq0QnRxXLWibNpTCaLJkxKudn6d8GOSIh3RbUrFDRsSDya6vvgIrRFUxwmNZUWwBeZfNLVwXBrqebxp2532towiW7hGzrnrJKVqybgMunQinP9yoz61mSyynwWdHTDPZ3kf4uIrzyETcMXmI8vUpPzpqnKLhvHRKSdniF1qt2Gra5SBuPbqtrATawm0P52f5wGvluhbrpE2mZ8lhBCjSSGmbje%2F%2BpWkyHYPqaqxkjK0eKX8CZxGzs6nobpLW0uowLPC0Y%2BjEU465eNhjvFpGrixIzBN3wvIt%2FzRQ9xF%2BFFE3KoAcmxKFJfarDtKFTDofG70bEF4o59EhwPH7ULlk32hxOEfZmvssNxwktyZh1Ydgg%2FHpWI3byO9Ik80vKgTqe%2BSqzfUGpx1C5BknHX52aaIwzlAV%2BoLGOe93NJrf00ZMrm7RAEG%2B3Y%2F35fvn%2BShGUSSc3jx2xkdkiCPP%2B6zUy6J3%2Fj6xNof5bhSAmuHUvEQgDg%2FUuNy%2F4JE3iEdp7L27eQ2tGSE%2Fc6aAmTG322l4LIDPT9kpyUIEJvSAB6x5XSQbxGzteIV95oYgcsGpoxCRNR4dYBZe%2Fa%2Fmpo9K1F2PXEJ0lh5iww4vLmwQY6pgGFQU7Dge6KQ6W7T9s0WmocpYbikxpRnF3ex1fgY5xMT131PmkN8RyWIGrLZn%2FXtsUvEsVHBNPgdpdcsvAVLwqDCILzAGgrX0MYswQEUFI0zX7jdpXMgdWm3qLHK6BqWwugb7aJnC%2F2SafBOM74olOp7RC0UI%2BqATbwQri1SqLQGuLVGWunp2DYqOUPpGs0Rb7%2BwfC12vJGwT%2FjI8RMxuj63PO4GLwI&X-Amz-Signature=0cac161e0ff8cb5688deae72a85a1f9f642da961e97b14f8b5a8ca315c1563fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
