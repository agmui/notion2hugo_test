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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SCFO4Q%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDq1aI14J1LVVOK4CjvqmL1Na%2BEVLtvnVMthM%2BKiQIfpgIhAMg6Po0GPjJdKwq0zMwA%2F8%2FS5UBns4gnmsMgUMuf0obLKv8DCCgQABoMNjM3NDIzMTgzODA1IgwjorsneqDynJCpyLcq3APdxr6pGf3buan8BZkORrgbim0A48HlqOGL%2F8e8o%2FYXMzyu5jBTe%2BnobNenCaOoxZq5WVae5DyKX14TgRVYwP3RAyd6l%2B9Za6zbOSQQMuUwHTYyPAIiCoziKX384ESUQDPufbea8YvWYXLtVzDq69RBj%2Bl4cjY%2Bk2zUa1M5eVujbI35hM%2Feqfigz4s3hiRGHrapqllpA3GTLQZUrbRLJk8v8Ii%2B%2BdMupqpaKMtnYlrI0nVyVwtniw8uU6T3cFBT2GO93FT82Xd%2BjJYCyO5A5c8MUhvE%2FfMeSp6jO%2Ba%2Bog1LYuSS9ZmkjWY90QPQI1QcGgWI%2BCvjdLhkvp8i4SP%2Fk6K52qDo0nStD4W6XOyLjs1iIdozSJFPMGkXzlIZozZh8DveGMO1eydZjbbnm%2BYOCrmwErfSxLpOO0%2F17bD20bWBgvPKAs4bBJ4NzhJtp9RfhtzfpzO2o25bMpA7mEINmKcJVX2B1xpkTcIt95O1BRIzlpEBy7dQRsZMFbyPOrsXd2%2FxuTb4hzBsWEhfIPb4EUFv2v%2FZna8Sf6mzubQ3Kijfk14ToD6Gcg3K3comXZDLDHc81K1fZPLLTr%2FvOW4OTfUX2GK1J16t9nobXIm2LsbjcewENDNVX8P0CDe22jDdvLTCBjqkASnRY6OIoP%2FV8G0l8SMDIibOJHmcB2wrhgzrT9Aksn8gbb0zeiexHPgtflCnyUVcNuquLbYfZRs4sBgL8mssRZsURztzDoPokgLrM6bj7NG3O6kCDybxi1mAAVCQk4oIo9tQF6lQWTouF5MDRv9uc75DXxeoPNy1r4OsgLHKpYfNZhC0YF0w0Qt2frfFCwZGBKTo3pYId8xhLmiwNhjeVCOoBgJp&X-Amz-Signature=5f6d0cdad6208e71b02ab9a77a76f5b692309a2d41cebbd0cc01ab0911aec122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N3BLZHC%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDSgxkgz6R9SVbzww1a8XAF9J1rhx2Mn8snwa2vfYluUAIhAN%2B4unvvyCjMA24TPwxVcSM3MpMSQAIDHri8vmvH%2BnGVKv8DCCgQABoMNjM3NDIzMTgzODA1IgzhZadQS%2B3UWbjj31kq3AO5RIUEY1BvFqMJffe25maIbP5pSEyAhabmPmFGC8pLaryIxeOWtKTDNiou4qIhTtUPFoC359eYhdzJFNM8XbAfwYTKzz8TnKuLZKLq2dGi%2FcWQLX4W4idokkelb6Glx7NDVPFwRbLYNpB%2BjQi6Muc15WN4HTum4D4wBej1dVZXxvAP%2Fc8dpCAS1%2B8hNvRKWTtrO6T7C9Ox6KSKkTBM7c6JWD%2BX1yn3jk3lW4TYAguR22mB1sMi%2Fz5QiqfQWvNUExEhWGa24n6Bw2mvuDTMZpAzkpcjH%2FausK6RHLY9ezNlcS0ybM86MQwDGYhMCPrmbvYMb9rko9pH5K1PhXGSwoq8XoEuxG8TGpqo61Ch8wBYXBeA3QqafwGotrKoLzPgmWO%2BuDCtKS%2BtYu3GvY96EzbcMKh6%2B8DG%2B93NykPcA9mgzYgYxc4AiG1hj1UgLOWB718rEGQZkBtCcVPS8r7E2g7nhDEcYWXn0HgZXwdnPi6bDxmDm84EF0XTzhzLMw54lwqjAHp2Ep4Jo0O4xDAUs43ErT5mTptUEqCGjZKIGx2s87ZIhsA%2B9PpqH%2FALrr7wWgbn5mN3DvlwyoRzRHcqvlisFYXuQnbVVAsl2n2pl7qE%2FdWZQL%2B5GiaY%2BqSkZjDnvLTCBjqkAUZQr05K2wvqiIdHKy%2Fd3q8y7mOo3BArOiNAI3XrDYdqtQHPSMWKU1iy05Wc7EjBNHho31rI9%2FTkhpV5duM06OCetivX%2FiiglvUghWP3hNY7PPuFHFWXuHSpGMSF0dpAploQoeM8%2F43CuJqCirAwBdBND7coInVeqHJIA2Wuu3HD1vy5jLLMK%2BSDttk5Pwwokpn0ksELww0o5wDmTb1Wy%2FuUJPou&X-Amz-Signature=a8822a46d60349be27627771e234b9624d2a713396c2e79a718dd11ac84446a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
