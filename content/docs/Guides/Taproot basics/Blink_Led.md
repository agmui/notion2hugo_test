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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZGU6ZCD%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDlm%2BPI7xxl0RHOOUgqzWsSsTH1tceJqt5qIQH8OO6qOQIhAJE6gg6tGiILOr6XznRnwaJdiX6AzZu9AZ3w6UT78bpBKv8DCCkQABoMNjM3NDIzMTgzODA1IgwEqxWmnxDF2zr1JGoq3AO6WQP0xx%2FJn%2BkL4GW8NULNKkRyCjNUUqXhj9SL9QkuK6eBdfJC84cYrt52rWMCtGRg9UDymm9LitPGY%2F8FVCdSW%2Bu2jMtku3elpiSJXhel4SAGW3WF%2FYfXd%2FEjk7cV98oltPZcqasTQQryobKJMh%2FaumLGVifUAVcMGttQmh5OLmQkCkIpGlZuxOu6VeP27mxRYYQRy92TXs3%2FsUCcmrUh6ZCVqsoK8C8I8Mit%2BrUkZEonlGy2fA7FrzcpAbBKAR7nxYTKo0IK3jL9kqQGFh6Eps5jBDepB2pBODFs6DjWnsZhl%2BW4psxkkUtRNL%2F3UPgVa86pHeYzeDLkG36sCVT6%2F207cFha17jhN2rIzl0%2BRPwH%2FA8XjHeL9RtYss4eiVxAyr%2BxrlkS9Oj47JUEtfVAVK21m53WnovOQC0knY0q23Q%2BI039RsOMDEDBP1Pj8y5Xo7E0Yh9sNeymhPiHGKhziGgoJIIo3K9An4YRWMkJs5UNjnoPpxBB2u%2FNKJ3UBWVZwm6Q2SFnIKSwpHY0iWTkZC%2F5PK4VTiv2pDItj%2FhM7kL5pBLuB9rGmBpKPmjcyUGnY2HF4NkQQgbp1veAELOB98p%2BwshFBj0HFP%2FqdNj3ue%2BzkduKIO1RrYICbjC9koe9BjqkAbTKnXvahJH7x%2Fkh7uxSwPWlB26U1fyEc8rVZH3yUZM5ajBKpBc8VfwLCsxUlj9SefzLCsBUSiE7vo9efXhuKRiKZGWRU%2FK5FBOtXs8DjjnZWc8HKXNiWhgU4XSCFv%2FIW%2BIQgzZz7RdQYoyyh95SDUI6l6fnbz%2BtCX4Bkonbvz40AMp0k%2B1p64vX%2FnTvKshfemeZH9nOY9dob1IUcGT4uM%2BWLKC5&X-Amz-Signature=8b73f5091c72ab1046eff342d8fc4f9fc2d18d39917ab1a10e4c2e9bbe145f81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCP4SDJG%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC22XjodIwIyeT7lzOXWZBNBsYVhob2nS8NFUTNipybtgIhAMcqlZSGPdcM1e5be5JKFwBs7DHfsQct%2B%2BfaUnweaSfDKv8DCCkQABoMNjM3NDIzMTgzODA1IgwRrI%2BRsQL9xcdCzikq3ANN0CqJzRT7n71VK4dVvAN3%2BSH9eYs06XRO3qzVD5%2FSBXcZO1JPsEqZOBWYvtpR%2FLlqTX2GOf8WM0Cpqp9C7x%2BhrjrEfyITKtFRZW6xLiPxbBh4dwZovRx9UrJhVAbS8zHxacsGpSYFvJjMZJES6%2BauEHasdH3EGilSWg%2FmgSNLIo8jaZ2Fay9ve5W%2FGLpQlS6V9%2FBoowQjmU65DIliAw3BcJ8shwQk%2F7ozY90lHfOxQnQdejuIbLV1DJSz5kcMSjv8VSJCbZvKXrwff4NiglkIzLSvhgGcHHXza4B1rG8qo2t7GG1%2BxKSBxkzh%2BJOAucI43wDjuuHcRRznkqx4dqTIYVyJZ1B%2FfkzEdKbdic33wpr8KMMd39xESfkIBBt5bBrkdZ0C3nLR1vFtm6eRW2Ni4mQbx0uKQQiRz2x2JWBDk41U24CN%2Bhk6HDZ0KS9epQRgv66MCXSwbJFGrGgO%2BylTOzcIf0G70GRKMXNvqNouY%2BMi3UqkXeBKwUVecAPYvwLDnms%2FGL4Uu4dbdpF9mMTbwAhJbKHeAUVMeAcZSQ4t81mWwSZPsl4bAURVjkxJgnYzrOVttxMiA5HgTdECid0uHpfiDIRzDkX7X0oxfuRQsCEzTkU7fhTM%2BF%2BnzDCfk4e9BjqkAWlzsD2%2BsStVh9LEvLP01kvrXRL4B7TNeJna71ouPPuJPli1rzzouBIyAXcYeHx2hFSPs4cBs3LgW4xHQ%2F6%2Fctwva6CBwso%2Bocus1NbWlTv6cPttl%2BjlqbH1mz8e%2BZcv55CAoca5hBOLxk4duBo1DMNUYdOkkQVMnbvH4Xr1zyGQN9hABfMg7Ij5JDM1ORTL4lQIG9m5HcDlcsNiV%2B46pFXxuMvW&X-Amz-Signature=3400e31b7054f6be9efb699790f4f5b12e349fe3b04950cd8d58584e69522f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
