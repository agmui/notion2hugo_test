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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHPH5EHW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEiKOm1K56797FVJ7s8kmvXCnXagVtt0asLK0%2FxBjlSAiEAjwRFhd8xPPy54hwWep8yfhVnPr20tTSh59MSOmfpw4UqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgRxFEgg%2BmmRXVq4CrcAxYRGQytOhXOHTHdTstO1Aqy8WrhdWgnpt5rH6VV5C%2FiobCUXHYEGcDWg5X3vWgBsz7uS5RVe1ew%2BWZR3GspJaWxY1zS7wKNEnNo%2F17BsxJOgjQZd62%2B5BZ3TGIaXpNu9OgOKUYK2xLl%2Fgfsbpl9gNHO%2BnMbPPiFQeAdbiNXH%2BgEdUys0oZzYeZji%2FRY2G448c6aurOwhZXrmPKNL1gw6TKj5oKK7o67y1wWRYyZWY4A%2FIgicO5Y5IwDl9x4MmQHvIk5wtoIe%2BXIekGgxmhl2MOLp8g3tfYdREcZ33Xylag7WxIe%2BDuroc%2BUB2iZEe1uMAl22qdCsJQY8qTd7pah8R7Lpr5Gzk%2FfkUQpPqFBtKQH9zo1lP0MeXHuAvC%2BL8ahRHMIDMg%2BiTFnrI6bgCWl5t%2BSq4vFkFmMhiwGASbhOF3aBKYCHtdzkrYXFav2%2BjyzZ8bnI2U2CPtIHFEw88nflBkmMFKNawLqKW71qp1%2BlK0nLfIrSPNhZoOS4nSf6AcFGrUg0BxvN%2FFujMBkR%2F7sslL%2FF7NFqEcFlD8D5%2B96Z2AZqcyGW1QV%2F5PysoULEcU213hxPhdjFqdMGIwJkfSz2yzFJKzEknzADG1pKTKP4U2BFIEb4tNM4CGifxTcMMnwp8QGOqUBAfwpEM6qNvEPHxoGZj7PlTk1ICK3VEZyb%2BSTKR7c7bB4n1WCwJh4PD7bXFDX4wYkFPm%2F4IAwimH0xtOnw9WES67CP%2Fct7nbt4ZvN98TlJpEs5RJ5%2BQ3yUSGmkmQK6xUHNHWzQtvzZZB4IgBbZwcO7jR%2FSCRclys3z0YZua%2FdXsbFZhIhedFzl%2F9B1uhIt%2F2cwHr9FmU6JE6yL3Z1IZkPq0nSvoZO&X-Amz-Signature=2fe42d878ee6af96556b70f938923441db1886bbda0527d02fe295a7b7474d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLAATKDI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyzVlBm%2FzZ8xRpl7SXQYCAJC%2BJHiG8rCrMRfSstwl5nAiB9jc1S3Pyz7s3CsGdmM4E7iMBjc75ajFwYiOJpVLSAQiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnNviClNAqkVo0GPcKtwDqV8Jxq6mDN0Lc1VdKmHqrY%2FbYbp09uWfiWYUY7KEq5QPiQxo2RpA%2Fs3AyNDP8RrvoQxljLKq%2Bfg2gkRSoDltefjYbC7SC9hp6z5EfLkbuiQbCDNVusOTIDmNLfNBJQ%2Fb0cm6yk4q5Cua1exHv%2Fa%2BWTIVjqd3xxPtIWiHDnnMHWkhKOGVmbYkdPfndYxOHLqmCKDuTRPdVS7JsaOwxHXlgnrLcIRR1eo6KfwJ%2F%2Feqe0eSSHCcn3jcINyOl3P1hSQDXSi8XsfjO%2BY7BwufdV%2BE70RQvo41LU5AfhemQdf1t3k%2Be0sxZOx6X0timn71y5btjR2ZWS%2BCEhQKy1mZL1dXrbGtRolpEgfU7jVLZADINe1hDsDCLqFDOIg7vIN4oaVJlzCltLz%2BJ4yTJzVfKsfIEL53szOklYlcB8lOppjNYwGV3fo3ju05SoPjol6Q0oye5%2Fx%2FRMok5TxCasiI%2F9cMGIBGtQN5QZ5c2LJwLhPJbRYDgEAiZLsdn%2Bhz8TyhM5U3DEWp2rv6gdaAnxa2m%2Bx3%2B3FsV2F2geX%2BRYgXQhjs8Qa%2BawZY4dW%2BBVB5sPa%2BGsT9OkWhc1dDmiUy5JmAilpGDNb53%2BLAxC6TLMFdcxGMDkjLgET6Ao57N33ROb8w9vCnxAY6pgHTy4Nv7YZXD6Ge317FqxcY7EDW5nSZPN7sGR4Gqor50FgilVlsvpBYlFM9JxFAfPG%2FjxcjOpvlsTSFsUqz582oqiatFF6dlpZDigrKi2p1J%2B3fR%2Ft3kIU0GBT2%2B%2FPosqdABlyIeZxjNssYFbSRlzHLqE41sS9i5bZlCYLux19P5YMhVCvPZJz1wAwfyhf4jmvNBvjhgZ5KFGbEaZssUz4XYB8Ax7bP&X-Amz-Signature=3676d9b15a91ec324d01dd336492d816c04fb5d44660fd95ef9683a35e2f48e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
