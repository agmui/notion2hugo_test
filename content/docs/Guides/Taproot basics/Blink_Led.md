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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL7AAT3Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdgLMy9JjRU35%2FP%2FHYLV5USw2tLibNDiZadLyhMhKGBQIgajm%2BseNLdUtW6aGaKJaWciGZn6Qj3PQ3Uxea3p5lYiYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKlOXI1%2B7Yz3NwVxSrcA7NjLJl5YB6O%2B073oCvjOdXkSaPevBJCH3RGKOZor34UX2%2BWQRSGxv3eJQJqDlb7B9pB%2FQ3yQcjZLB3%2BRA7Heswo%2FHE6V6TmUmToszDddfw3v2w28Jaao7HREbalJUxqScgLidBR7SLtZ11%2FYng%2BBr7Z0eL8FJnvLodRDGcsZko8Fek6iML%2FTwsTuRTBgeC2jf8CapF4uWjq3JKWF0%2B7LwRx2yEDtzV9Es9TJVrVnMTqtSgCIcxSdVO3rRCnJ92XVWEiq6wwZ2jV1YkIiD9UsNe8Rg3pNkc%2FAdi92xU22fv%2BV2I2kDCW9HZU1mQ%2B8KC7gFbz9Ht0S8gTPP2acbzQCTmhbzlYyo0lggIVMuxutmWpqJY%2BEn3IKaEP6PLuqV9QvDbSUF9wqOsddEV1Q6k5eTroqZ1jHs6%2BfDvEJG5N17%2FCWG6jBrBZ6S8r0%2FhPc4zZ12uq9p0i%2B7lyuhh%2B60yBRUTFWgQTe6Y%2FX%2F84wQZ9mQ6gHA%2FqoTeZYSHmGBjvsYNjWgnl68anAqOuvEWqvtErkqXzqYT5lKNwxk6JwJ3oSja5tuxjnFGm7S1%2BC2OGchuI0G4XYjPOonF55UbyxIZVdYl1AeYwZ4SBWa5KfmCK2Hvecovxw6ZktfggmWAPMO%2F178MGOqUBdnFslWMIfWXLD0Om2hlYFxb4oOk5YaywVArDqV3cwBbJhgVn9OlScku8kDDqvaPCFK%2B7gefcbmrLgwcrUdSi0aMBmBjC3NVoJEcWFKbreb3l%2BNls1y1a0nm4WZQi%2B2lWYb5ELuwMYpKbLh3FDU%2B2fSlYa7SY0HweVwEtxuL3NiFjCyfl9bfTj7nTU4ELTVuYAay11j3tlCjwLtyIYoTJwS%2FLqLES&X-Amz-Signature=3e90516d225f3b8741e8ad089b6fda6dd73a305b0c2cc14ae5d9b7f59567ce56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HAPFVZG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FgOSmN3nrMLU84%2BTzR%2FyBTlh3a2V%2BjuW7ukCvwB3QmAiAWEmddNcmWJe1InrxiuhNwND6yFZnD23hDnE2aPfC2lyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjrG7jdT%2FQC5k3nRkKtwDnr4z7dY21xWzLz5BV%2BpbEpKEX8ndkH0CF7c0%2FRsgqiNCmA%2FyXG3fPZt2BTe%2F2e9ZmNpeBNbFwLIEUOAK4azK7DWavllHo5gwsTfLAmr8NcBCbHI0jm4mlg9KzxHEZn%2BuJrj7pxMakk8Z17ri9KASzVF7UKArX%2FH0Q5eN7K6InXkkYqP531FeUd0uiGl27dR4S8R%2FtxxNYj8IzhHeaLVX%2Fuar%2Fs0BwHUPJfrBT%2FiKhv0rsIrOEc6xE0mno1blVXEScn2uAd5BY%2BiEA99QxFqZLFuVWjsnWdln8s8byYXeiN4AfmBfXsqG8kpGGQ1Zht%2FmOTrYamx1E5tUJZ3FyJpgfLeTBlo%2FrB76i2UAJASfvixXLrWZl4pP35XxUnfpFVxZaH3t1FN8Yr%2BXWEzs9TuYKbZBO8JMHxooFPh4I1k6tAziBf3A7zL5F4U4ucdMJTXtjPbiORFJ8NAi%2BuvmOQbdDq7pBHs5IIiwC3Yx11svLWff5hQhUXZekCdKtR4BiNSet73wxhRkcWmzNC7642DnYRpOMIx6hPqDY%2FDrwheC%2F%2Bg75OhCmgYzV4VcmeUeMGm7ec4RVLCP4jJ0vH7U4rPHBWL%2B91pB0xCoOtC8PjWasnQjeB5Hc23txr9dC1wws%2FXvwwY6pgHxOnPgFAWXiCrMVBfWjctVjoMTv8UXxB5VJ%2Bp6TiMZO%2FFjJGZv2eUmsnRz0fL8BNckMcqCotYb2y20rZIANvFIaJj3LF9KppcnuN3YPjs2iXyJfzEPfItvtZHv%2BIrTcenA1ZZ4F0AlW0%2BB7g2Q6MbDAw04WY5c6gn%2BB%2FFx4nKS8uUjiKbj%2BQB4TxBNdoCA94jUbAWejPmpF2YYcEAJa8AhwgBGN608&X-Amz-Signature=8c3cebd9ccf4b4dc3ccf3b54e5c2a31bf520ed69517f10e3ea556aa4da7744b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
