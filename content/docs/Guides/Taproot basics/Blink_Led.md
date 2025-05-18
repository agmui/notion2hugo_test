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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRFKZD7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhmVfFuyC%2F1dxyvo4o84bVWld1WhkSPJvVZ09kYjVngAIhAMJ8TJ4jJSyX%2FuLpuM06HuRhA1VOXYBwpXiBVajw72CqKv8DCHsQABoMNjM3NDIzMTgzODA1IgwYFv4UGVmq8Yms3Rkq3AMr%2FjxyWp8%2B5y%2Beo%2BFHpfx1QJav0wfL0OIUUnhnASe6UjDBV7lxLW2vsefHV6UM%2FbqIV3Ru0NM1MJg4PYDfxp5W05fCE5UzeGjuO48YNDgh4eR8Lke%2BYkEp5DB9xIZ00TkULlSWSmKBBrQ4GjSYGDnJf7uXhdFhmOMy5s9IxnJhfAB1v6ymAdgcKt%2FBXc3dsEzX4UkxQtzGV2onWc8iktgopIEQzDqGLblidqrt%2BJNBCJvYc0wvxdKWxL5DA3LQWhTMUe740VVyovdy7RmR0HB1ZpxHAl%2B9T%2B15kwBmk80qahJAjCftKZnnIHKvy1J3vALnR5656hbOR0A3VB%2BhrNiijm8XXqfW4knG36MMwfQRU0rWg82eGNAWLpEyi4mPovcH2LaZSIpxu6iM3OI02w5uGQSqxvuNCk1U9dFw5IugkbC%2BcrOPsICldIH6czR8UhVR16w4zeuS%2BshxbjpvT8qUNFmno%2FyiImQog%2FozreTqN7QWc%2FnTur9PUL9JMNbAJZsb74Pu9qNkoHmgYBbZmsqx2BGiWLzHmFm3y63vCvHHokvIADIHtNnyU3cK46yWqbDiUUlJlmbdfTSCH2DdTMVm4lv8a9ja8YOjNwLeSi4NmsTUwjJtz1H3DbWaRDDmwajBBjqkASY%2BQb4yPrhcRV%2Futbp2zGcJdTqknL6PJPwNfqqV51xrZBxHGydZcja4K1I7dYIoXrWKFMs1R%2BL%2BpVRhFQGKCTrM5ummXgfK6siG35HJkRhDmqrZdNWQxxVenzay15iQeDeCzb4NT9YjJsPkGg7louHUtjfXi38F8zs3GtI%2FtMdDu%2B5zk6hV4lwyw982wb18Vpz63pFJteWNHPk4RPboSLV1%2Fr%2B%2F&X-Amz-Signature=62dd19ba58cb9baab9e8bc36090eee0e83829e6f04aac182ac16bee8c20e3b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4LT3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOUEcpgyeen8pRvAni%2FlbQ4QC%2FYkci0Ta1EpTGWQNspgIhAOwtbp7XsCB1IiJSEeFKuaPgJhIm5nAsLK1X0yAKEecGKv8DCHsQABoMNjM3NDIzMTgzODA1Igx24d1NUKpPmXnnJMEq3AOL5CrNEUpUzNSWVqXN4k15PowmPVJyvbA1t6DBPGuomSK%2Bx2va3k2vVxfsXRlOhwjzPfvIFX%2FB5RLnlCdzGW%2FUEk%2B3MNV4NjRMSeqwNJH4BmpZxDoCDcBKVYG4hR2zpgekjtO6AUHxDzWwG54rzgSj60A7kPT3v2yt61lgU6WtfCp5AdHHQMUsCLKDE8oEacVn86R76%2B8tenOyJcI8kzQXtUuU10gIAwS%2BUxIyKvogwiFukM8y901eEJY9PKM1YmPJdmH9H0Wx1ZB5gIQITMrFbMdKzvQuX8oNLQzygRAlNOzXAH4ORRhGPIGoEoBeasxwEDIWH4Nbwr8XMEOWGd3BszRwc9JCFyFUyuvHDsHYBAiqkAV3NB0Ag%2FMDblOOlsDDxPlHCbtrilU7vM4RDqnWxf8U5pja5pXAv18OZIzWDHXt2w%2F1wHhAvzZIG3VxsQhkOASFuUyQrY%2BbVlMdLB9DybcEnRDhFZPFOJZxYY%2FKLJJ1qJzqiWZdzFY%2FuDzKluBq9KN5L502ARYHb%2FtugZVBxkqC7HMiGo19I5DmhE6ARMVNaTjfHZZdlXuzxiIvGq5oYSoi7ESwTbRQionHGBM6%2FIEDM07Ezz8riCHiok1cWwSuQusvV6FV5Q%2FQFTC3wajBBjqkAb42HRnCGr9O4K4%2BPeQz9EHd3xV3icdn0tDDhfCz4EP9kIqEvA2me9BI9FQ%2F7fgcSfbl9Ye5IrygqzdyAh2McwEDasX%2BwaRiY7nSmWJpeTPPdCNVuf9uw22Vu9mxAp6L6KYt5LOe95305uMyMdo4ywvmjueHwGgUa4kY%2BR9%2B772yXV%2FEtq0S7jiov365Jg7BriY%2FgFmpnp6Fj6rvKX8n6RXMWfJA&X-Amz-Signature=003dd196a300f2a3d4fee4c1f20c5f7d6165f4fe19e58be4f78215e6d92eb055&X-Amz-SignedHeaders=host&x-id=GetObject)

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
