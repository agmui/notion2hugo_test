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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRZZOGLE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIEQTK5uDeqELONgd4hINiwOxFGn5QtG7SgHpacJ5F%2FQNAiEA4M38Bq3t9TuyqHwVqGPaPFawPgfaD8DE6rQJFf5q0EwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4%2B9cPrmDN4YtxHTCrcA1VLI7ctCO8iLgCHnUnQdYnO0fb8aB5VbTVlXsPB7TE9w2s8afoEKBXvJsKKv9ueNB4gzjrWLfG1YUumNFwJTVGvP2jvWqUCNKrWqOokswLD6FIlXw8c5V%2FuOGvPyMKhaC8dnL5nrA87gkSAd5IFdvbpRPbxe77TZVvVk6Ed5OlUvrnzl%2BUsW9%2FIjJ1BuMag%2BaE9xkh5Tk5CtBFyuF6rwtht8UhL1R6EdVlTdzVYlhQ7WHoA7U4frDbpI22n279bc4nD3DuGp8suW5P7Wu%2BNg6Ik8ETfVRi9DEi8%2BpEI0BVvOU1SjRksZmoYRMXcCeF7XJW%2FRyjYgvFfbT3J4MpiIX7AXXSbwHJERLF0SNuVkbnk3vrY0yM0xRhLka6hN2co%2BfSXDv64cCrg2b3voJOfcRWxt7MlGBXpjzSaDkQBgxcEvvN%2F3d%2FjEKW7TDtGSf7L7%2BSalk9%2BgQ1tN3c%2FcUTIGv9mroikuYpzqGlkT4dVZQzUVNvoJtUaAxG4eaqPTg8W%2FH3TgNcYnSiArT89wZNl7wK%2BWu9mSw2YWhdiZQveIrle7ceBG%2Fc1AvixnkhkpRb5d%2Bi3QBo%2FZ8ae0NyXKxW4t%2FNqAKv6sgFm7tFzWw8Tb5Iq8IgoxU8ETaOsD0DaMJPj%2Fb4GOqUBv0my%2FTvswqrea9LkcYxYvt1TAOpS0wmM8P3vUpZWkOS2fCpKI2hdLjgQPNTcYdy8HuGkSXEaunR2zZiuuZHVCmSkWIqfoDKyuaK08SjcXatzfpWzr6C3M0UQWTXkmLyYvnbxXO3HHvK0GlLCLIYbg4npMO%2Fv4SxPyUgxqkFTaZbJSxtu9I4mRiEyWaScYLs7vlsC%2FLZ%2FT9HokaXkj9YhWRBViDkX&X-Amz-Signature=344c7b57eb95c47f1451006fe504b9e7f638d13dab553155750f22492b648939&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L5Z26GQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBJROYh9l2kFa9qGAM3V7jNs4w6Q30KAsl44AcKnul%2F%2FAiEAzu7CcXzi234XPo18UYp9oMnNHIDDb2WV1704Zv4ne80qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOInV5oiaxQ4FurVKSrcA1dtkUYEoLwVlKeXzfClbLkc7GCORqTKzpgDAk46br%2F87l9MmJG4%2FFINGeiDtdGFmDg2IyZjfhl6vmUY0XPbuv5kMUc7%2FGbJvnDx%2BP5LzAqpOr7H1fMFVAdwMd2TzRXiXzlcpYbw%2F8i1Qdn88ghQ8GXZ9%2Fp5YfVkRuzC2xLB7xpfZw8ub%2FKm86CXSiPceAy5O0yQBp92R01MexJ97R1HNDoG0sU%2FD5kZoQH1pRApv9rNHadRKmyLBGXcCqj%2Blx5f79mpcK2vQMUxrsdIpv3QTeNiXmga6rRtetebiA87BfvibSXbV2L3WecT%2FgkkfBRITCs1%2BIuIxnC%2Fo1J%2FE2bZkhGJe3%2BRWfG3nubJjbbzH6hmsdtYZzeAJIzA802OympEqAq5buKD%2F9XFAQAIyyIRp%2FK6ocitvJ79szY0MPoPA1ujdRy9MTHXGnqvkMNmERWnwXEYwYlG46hnC00vZr733YPdt0sDkYSicodGMxFQZMDQNaNxGdTB0tuu0iSImkELDAc4e%2BRI3gKqHzi4uA6bQB%2B0tFXJqJCwcICptoZI%2F51av6Z58vhq%2B57kOi4oW7CHeCm6afCF2WkreQ4cXYh0d6IUyxof%2FxQuob9rPnIb%2B%2Bxs7Dg17OYaCdmmHDTWMJ7j%2Fb4GOqUB%2BF3UoIFrdtn8brjTwnRLZ8RPm0VlN9cU2DE7BbmgfA5%2BcLe%2Fw0e5ZDmo1MYoFUbr6GRY5W5VMXHET5h7bjjbo%2F3cXHgBIuubDQzJ6w2880Ht53sj99i0KCK808t3TVFx9Pymd8CLsguxlQ5FowhYr%2BX1d9fTWT7aMTJvG6PIZoOO5B82FO91y%2F3KNN5AmvwXd1fOvZj0hJkvk3YnZ7ycL25Qw8h%2F&X-Amz-Signature=708d4399987bd7923907baea8e2d18f72699919c2e3015118e19fa5f381b0d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
