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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4G47XJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICVR1cGINLSOrhH%2FupaHqjgoL7w5mP%2B8Di2cj1fyAkeCAiAIfQQLpnWwzw4zye9EJVbFRJ3GMsXJMNc3TT0m5IyAjiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiPvCgUUEkMnTjpTqKtwDj3lU0dy9pqbPDK4Yb2m75HZT84pscvBYNGhaxfJR98AQ%2B%2Firio763895iVewEyItieVf15f%2Bw%2Bd6OrOLQf8tVjBk3wbSaCDh753DzFcJtiajY%2FJGpeMTu5%2BEfDSsH60SjI9jZYmvDxBalHjRn50teTikPPqxzfkJHJZD1GmmX3rEiKAKInwrhIawENIUvDN6ha83LgTjnU6UHlfMQfPg3HO13mH%2BgPIRSdrtkm2sCfXNCL%2Fo785eqvZWxWrylL9zgZSIGBX%2BhZDvR4ZCpz5ePz7GxRVx2vjvuwHdwgCsjBBMqtFn9u%2FaMGw3zjO6HbbGQwaFUpbzaLJMqFjM9V1QxWpCVgOklOoCs5Fy7Wq09Gegg6rmS6SRbyiypizJTBaud7QOA9K5DqmQOazf4crfwbC60HWSsxDZgZdGh1j4UiMrUFY0CB%2B%2BVC5bh1q6gu00OerrmHq4CKr42i8H5m7fmpJFMcSYY3BVCxlcjxBB8KrsXDotm0ddeXm%2FRYw%2FdN2ASZpoUQRaeHh4Rw7vbXdeXVHUYWeBU3ObRrf8E2r%2BHO9hrsSoF2A9d1WT1zcDFcrlp%2BKUw6yHHcfqUtkESB8l3OTTwHWj2Gxlw1f7CKgnAWgJeRLChoBRTUtWGe4wuvu3vwY6pgGMn3Y2e9eHrMJPFjpbEePq5Pk5pDBH5ian4Zcz59IKcnRJqSsMQE6kkNJP1MuRQ88SyDEsabL7FyfqzDC%2FKTq%2BSQjc1aeO5miOqj48DFG7FKEK0W%2Bjo6Qpf30OunCiswWFW%2FFvVNzmY1eQzII4jqXSGBLaSjwdHerBXpWCNteB1Bf69%2BCfceufDmGGWCPwd1ZoR1j8doKfYRNt4mYbl1cmJVqaYOfB&X-Amz-Signature=f3afb4e9394f12c456e7df2eec1e461640fe738f0b63a8c9cd1df4cb540e9a7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIU7MD2A%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCOHCqGQwmpSYztKoLNJLiNrU8JaNaiGIbIKAmY5wvfNAIhAJCNG%2BAiFbseFBnDZ7de0qgcuW6YpJDhXAJGIEBYqJt7KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqyb3Fi5BgAss6IJgq3ANTAIfDYp%2F1FtXg8bG8m6KdeWyIBgh%2Bk5ccgNrpZzbyt%2BXtzdvHQNqjv6Q%2Bc6zKyLlg%2Bc9IXNeYKxuBAETVlFtxRt9oD1cw3XfQccBhd0CtfuKtNE6S4BO5K892LVwZYEGDP04jDtgkugtWL3Z2fanif8qoSW%2FIaedCxoD9XyqnT%2FC0vhublMZIbBtwFaR%2F08yTkYz%2Fd0FGkCgj8If0JtbwoYgrYYu1TXIwIdSA5sqX0vxQ%2F%2B60xN%2FPXWjb7dKzGavs3oIEw%2BWjoGz3kcdAhV0sg8lrT5usy6AoqSL7%2B5La%2FlLmesOzLi%2BaIxo0VC2wotq7%2FAWIZnGCGG5xX%2BgBypTp0IimAzp1aF9VpYS24qb1rWWpMmFYLCzp2uOWGh7irV414KgGQO3wKorpgm70hlD%2FUtdOeOYw08jiCHBsGIrpMLj212opS19l5jVQ2WacCudaaFVaHh7emf17czKr4Lqi7kzZm%2Bhy5z%2BiuXA8TqNIvdK5RBF1E6puoNSuKxpcg58enP0H1c7SM9xrO%2Bp51383n7z%2BmYK0bhawKC%2B7N2FoqLreZxTPfUX6qeqfBNbPKdp%2BFdD3fFCogaUjZxt7FCqLwJq%2FV%2BnZBuyHs34Gz7ghuj42MdiTxh5HZfT%2FojCx%2B7e%2FBjqkAVJtxXvBBJJOM2r%2Fp056dfOpJ%2BD9EfEXA9tgGez%2B%2BTu%2B%2BIFoPPPL6%2BpnUTVFGPHNnyb0ykbSctXmkUANDGRjNI%2F%2Bff4pljoxOh3%2FUuOVSsZkHako9xUT4Cal0iJGGthGUlttnwrQXDe6a0dBKu4Aic%2BR8KDFoC9pR%2BSnTNmrDDdX4HFkcr3aD9kP6p7AGY7%2F5uPv%2FDOTTQJcC9hTnXeMTo0xjc6g&X-Amz-Signature=403eccd1e2d1a8dc0a6abd782aa867744e33027e6092f00485a5cb677a25643b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
