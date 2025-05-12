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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EUS5OKL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDjMyAdcz8Jxi455uobrOQExLkykAJeH4esL9pNgVbOTQIgDv7CbPRb6fAVqan8uHmsbkpv9RMOw86GZ7T5if%2BnMH8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsTjp48oW2t8F8ltSrcA9KFPwQYV2BHYUpKPp%2B10FFI%2BpVSIKP%2BMoJuS5UEmeXrBDi7ugyfXM6ecZc4gOLpH8s%2BhEO1EFtG4btxh%2FwFBsdyRrAnTx31XoaRABGkvKZXfWPKrRqYWaUiInbowlE1JjGi5P%2FOOXdeUCdN0Aeg3hmwjvIDgNRpYLL6GlQQZZksodg26kKonP%2BSx0yHg0vfGVmxg8D4OR1cLjc2VnnjBcm0sqkgkaC13OFDncER0E3oXa%2B%2BwgYJnutdKZfkbxEmhjsfuaCrZhfwrHh2yeb7xf4RUVy6YLY7yDSwgv%2FbPKF5w5BktLMKnV7gP059vAFEivA%2FwJtauQd14BhbNtJSCN3XaivZsA%2FhqwQTwhu7OHIP6fISWmj%2BnECHLzDNC%2FwA8qiv3W8Y1zTMGOVpXi%2F9ole55RaKyM3yXCrlvDd1b7pFZeM7by62yV3p3K9Yf7hQvvhlt4Ab1j5zx0UAEKOCqxdge%2Fgq5H%2FvZ7nhkBmEaKlVSxWbznfc04pecfftpOeVzO7zgTCtIVy04IfjueicAbfAlLFgijtHKVWEaUm3OUdBMI%2BIWH3U37tsJx1VAWgw43%2B5qJWiMAoq4qkpjuVaHMY6ZUSJ1bdGSyTHmTlmfEKsP5Z7r3GqPko1xZ%2BvMIuGhcEGOqUBzZGxr62o9JUbimot%2FpWQW0dR9HaskrYavG%2BRAkmRkHI3gFVjDW7jV2fXodLhWsHPCNxdWg7s6%2FvbdBSplqXXGjaByN8ZBjEkmuz7a5h9TebPvnccD6apsEVOVS4dXmWARWAcT2Xd%2BoaCehMzrzfV%2F3xzLE8QyY5ooUIUIwwv3erElichjr4Tw5%2FwL6VpCRBpBSYJ2cGGfwNjJ9owY5sM6M%2Fo%2B6gw&X-Amz-Signature=98f6875a751b3e2da3ed38245d8f684e4a446236e25005fcc3e99ed6e97b842e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHD5PIE5%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFMkOwa2IEspPuw3HuISVkpq2mFPgigodaO%2FotTFu99OAiALFvysJeB7My6GKY92EWJqZTHL7TTYcnS8lwFKc45QXSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4%2Fx74%2BcOs2i%2BKhNhKtwDy8ttk7OiWO8E7fMV3y69aK73C%2BJ3gCrr1tw2RQFZldglMqWm9OlpH%2BvNz2C9WeT83jiWVKbTOu8UlgETUinrojcQ55ORm%2BAoTMoXOkARG7i%2FCpaRIt31%2FEufF8JVK5vjjqBCEqs3%2FER6x8qz1v%2FpAWMPtabciGwFqdiIg6HXbz9mugQ62NGFObY%2B9Cve9QFTTNJ%2BUlyYhUWqpjReWLw2ArT55Ad0Kwy2RUVb%2Fv87Jx3ZFWhCeTt7O5RHtX6voySglINXFoTExojnpys4JpvQ47DWA6QOOvauqa3ulVfl7ObdOjJZEVeQSfzfH5B1CvJ6%2Besby%2FCJfVrUgfgL399%2B6C80szYwWILIqNbBTwLLsHF1hlnu28UJNpxvLNqKM13ksySv4coOby0QpZjp%2BTW%2FpZQbpAlw4dXfBheZPJtVqJPBfdBUlB8mJUJ7xcC2s0SO32XmwP5CSebZWvrlxglss6Y5VrM0dhA7S%2Bgl2Eih9VWQ0wE1gABUCIBgHa%2BsgC9vnKe1c4vSwnZVCxvbw6yuVSmkeRseBua%2BlDfVKGLNYd8a8t3YAeOzgj%2BMEvqB0i9p72LBiMlwEuQMP3c3GXN%2F%2FTMRTSYclfdIx5N3PEYi727Jx%2FCxqM3E9T%2Ft2cYw7ISFwQY6pgGCF0IZN5mhsRO6uimFrSQ9QKnVxH0DpiTr7z2VzfkkIf3V1DB2lqpCmfnERUT05J7ZgMmkP%2F9jAJYVY2fOsdr7NuuO4F2o6byIaSM%2BqzXhphLISo%2BPbyAsqsR5liWOuIwIW%2Blp63agPUurf3fK3Dne3UrUkTstfCMWgn%2FEkwITA2ZrmM9hvT%2BJszzqtpAVTUJqTdBEblMcX4oB8VYlibd%2B7D5yVwYx&X-Amz-Signature=7b2b8fda265a2dc3136f08352dd729c2d7b5c9df8218ac4ddac0be10629980e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
