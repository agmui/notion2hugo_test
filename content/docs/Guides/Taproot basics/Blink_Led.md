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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUCUFDMU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIARV2GFLHKWBjxMvxNabDZ8uEl6e%2F03lzIWI%2FLkZw6SAAiEAh0n8cPaALh3rBU5ajiG6aOEZMQK0CA318h0WdAar2cQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJjWj5B%2FhuAvhmAOGircA7RAAvk3SHQa8v%2FzyXPwrZ1fpmOqXI04zNbc3J5X639rZVUeUNrBpQMyrAm4ZG29%2FyeWt0Mk8pVlgGjQCv05t3wuRDik%2BKJX2VgdavA83lc0bAVabka5KWcOAfIo25VaVsTnDNROGzSnxGWKgj8Wh4dW3xJWeVcD27bhx1eTPFAtG4FIG8pMYCfjOFDAc9vblitX9xNjZPwJZzqAMke2ou0CNqbpVwgfNsgqx%2Bfphhrafmud0zW0Xhlp%2FZfBdNrTfMh%2BZ7XqIxwxEYNp2gHmpVeEbBKgxRo7lLzFCCjYTwKcpYtWKKm0fFS6x82JZUHcM%2BQuVoTwcCRrSdgxbe4%2F4kwo7JPal3t1YNNTnAbLXuR048BuLNS2%2Fum7U8bGGIXw93xX7q%2B7A5WRqosuhIPcLXeaw0Yq2TQHSw3fQ3JPz0ksSslkgUpwjCeQCm62Z5Dq7j4dJaW9cQ%2B4Q1CWZv4ta1st2bkOUS%2B%2BVKEVpWxjqTse%2BZovT24XrLJFNesDPs53XOxwvNP2ycYsT1InqyE4RfWH%2BbKg44X89lqmBwvcnmBHRZVm16T6KDhps0B6z8gjS3oUCYHPs6eOtSEF5kfDGeoJ%2Be%2FcLsbXcSG1ngjJizmNjaWIpPCJrljbjBqCMJzDhMIGOqUBX2vBRWDRXz3R9EhAX89YaG7ynD%2Bn57mKKWWxcP9V4fWsAN1wn7BfxXrm%2Fdz2vXAk9Lwwsc49gA%2B%2FQYsgSQ1vOZqPi10wWpkmfKhV1dfj88EIprEIYKfmmIThdfEaAq0%2BG92EjZl0iOEDPb3H%2B1MccL9w%2BpELyGo5XLJ8Z1CGsnymsCPiVKephWKwMbUwGjYWIQ83YRz1zNCRzJr%2BeTaNqr6spHgS&X-Amz-Signature=47b6197402957ec01f8cd5bc1b0f76bba81d4f4e2e4456d9ca5b209fdb648add&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJFGXTSN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIETWSonfRl3U8nOQTQx0X4b15K8sg7nDzQcTpa0O5Q8dAiEAsjir9Mw3kg6ZxCqhg5%2B%2FQjRacbjqI7hjh3lVE2HOFFEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFyhZ71lt71XWqYKpCrcA3fOaF%2BQjOPdiEem%2BjXEiPx1Ud1IyXeIcgCjKv99%2B8Y8BcFsdTfFXz5%2B0kCGwFXhCSQvEDQD40gASI%2FQasqQ4JV3YqQYf3hvRCM0kklrU7ymc9wwwFvqujHc66tWvLJacfGNaEG6smMLmVrNMIoZiMRzkyevrTyKhdliHQ2xvjBIo9LMEjdhuCC0GbeyP2zbbdt56WXcAA5eV%2FvXhdXI4DeFiOysCIu74ehyT0xUMHQGRwYO%2B%2BaU2uT5fabQCWQQOnp1b8bxBK%2B19USjV51nzqQTQfnu5PNq09vYC5S0Er32%2B3nFkr1yDQdlihKxxNx5P%2FeBe7qvFsv2vbSh%2Fe0swBr4g3MfeQ5d%2FM8w9WUtyxu%2BjFJ41ezmR2iNN0aFmBDJu694cXnf4HR3jnsKKFtDFf1IImWSFTbKx%2BLmw5HcuWsm2Xs2EzGzCT0ga3%2BRyDbMFt7DmwgvxF2edxrYmeDEq6IWxyWw8lFYhnczjQKaWjWR7Hi1Q5rDm%2FeALKDObGb8KKiTAvtHaK2%2FkZkdKlGxUC7dmAlmsrg%2BIY4uS14esYQoNcOKwyL2GZAOLFwK1w1jtULU3jCKfqE2M8tH1Kp4rNxdHuLa5yPe%2FWhrEarmxc8KA%2Fs2qZeU1xCUN51bMIPDhMIGOqUBrqZjwZSzCQoPVF5nl4xHt7NWCLhzOoDHigLH85YkcauZtZti3isFXv8a86zdi6zhCSeBRoDWK%2B8OUOCA3rgBhPGrhkPqR1UdHGcm40IMQayGiPgHuQ0Bc7GVtiqEB9Wnhbth%2Boj6wAr8dmGaXibiBawVjYKIVJc7eUDD0I0Z%2BagqEXn%2F8IqJLF%2FBMxFm9B9ligapjoB35eKH6TX3XoIxm7YhL6L3&X-Amz-Signature=16a07a76b6f74ae204a5e35a1fe0e0fed4357889ea88cec95c2906a4aadb7ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
