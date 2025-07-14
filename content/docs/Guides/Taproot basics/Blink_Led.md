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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUAOXV4%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHX6JlLsVkzrLCM9hVf0cQ098yiBR7uyWnUOUvYkAiUcAiEArT%2F16X1QoMiMLr6M%2Bb6v9zpKofQXb1tD4GvZRUXMTB0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAv2jJMFHAfpqEx8HCrcA9L3%2BKZT5AKL1tQEyFwaKqYelYosgZOSAhTES8buiCq9joLSEZ02LSMjkmHY1eBim1JTF5eF%2FgwKdCu0I3%2BySOaElzFtUr2RER%2B5%2BKisRCt1A0dK1wI8z5NJq5qJKXA7qDc%2BtFccKxgqd3m4f44c7YlF%2FEHxxmIKxkAzereRKZb1SRc%2FCCOBJLItgCSDS7ywK00cm%2F1sz4aBr415Aelx1xqx%2FG2S5anBVwr40Mc0I%2FwPgIBD4DjUqhqSurNlA00kPrze38SY%2FlX8HrxBQ7lSRNKQKLhITj7EBaJPJDNDshbiexLNS39WtgxcYnc8eWooprbe6Rx5nak9U8qYFo0Nr%2FrJZXoFjr5fcUjfUOaGrN7FJTo4hHFnLuBO6EGlHNtkwa%2Fly6JpKQpZYqkQVf3HLwcdSUd%2BHLdKaeD7%2FsJWNxyUrxm881xvQ1guwK8aXnrmEX825805FjLMddFiinZtbQ41Rt2BlrkKFExdc8TygNDSBh9NYZUJsOgkejK7UT2uxbNGa%2B2LeL7aw6kEhOCrUTu5husxUAxyrWHbcHyZ3yQlBmvO1KzOpDjCN%2Be46LkybTqZbw1JVlrDHprKlDwGHuS3xTl%2BUnPKQHHPNkj91Iod5nzLbOs3Wxz8kI%2FkMPaE1MMGOqUBhPMylhns3PLXnf%2FOKYD%2Fvmzetrq10fSJ7SmNEh29Z57BzIBkQYZAbTfwyHoc9dTiiZaEC%2FFFpa%2B19jw9RHIE9ofcjuYLB4OSg%2B25ovOZCUkSog19GYln%2B%2FgtzZRcfCfhoPf5MMrOQ6O6WPGnLRn5Xq482N1L%2B1wO1OJ8l7Hcd9k1HcHToCUD1ZN1%2BLafqK8VnPQ%2F1JuUPth8vUhvmIs0%2BJo8XOsZ&X-Amz-Signature=9a467411bc0f0a5a403dcb5e6dcc5673adf5ec834921407c311b609188a0cc36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWTVWN6R%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHUTU6q5Af8Ye6HVvRqaAiH%2FCvCArVpIPCVwsu0LlVW2AiEA%2BMmlroTHfZ890XT7NvMcojGdw4h%2BwaBVCkW8fvjPC04q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLaV8jFtPe%2FkaQe2gircA8LrO64M1i5ubIxSU%2FXluYwTUtn1VJkXx1RKGfFbLsWNqAj%2F9v4OeCZYiwZ49yuVchysufH8LTxzSQw4Lkev7S7%2BXbD9aiKKF6q2zH1AYoSWfYhUV9DW8SjZBcnBLyL4c7q9LiCOXuWNeECcv%2FKNMhwgPNkhpWg0aihUZI7KLPywBxsFw77zmAn6jq4B98oSucaQc0Q54rvYgHLtDVv%2Bw%2FImFUdvorIilLZXFOpBu1NeASuMNecPK6eGqE8WF0T3UBa6eW90VAQd87RLFtWOef8eQUrEuGQIoF8qM3v1oUzDAB%2F0uQMDW9HmBbqQocb5aBuuSEw0J5LdcOfhsw2ynQms3LBOXoodmpVR42m7DsJNmj9WvYQrGho%2FUw1ofj%2Bl2DCbYe%2FV1AD806PAQJRRfvwsosIINxVHRAwB42FrUblgZ7bsxDqi72vlggr9TKXYEsQZBO%2BqO7o4GxmO4KfJ1PKaFvc66gIW8qnOQb8TTlQiZRnfif67qQVXzvmrHBab921e8fq0G4vA5%2BkvE1KonGBtX7jS28x8iR1yZqwAg6lDwylizkVIlPa7VgnaCOeFCFr6ydENSmQE0CLNWM2m8fbKTvcNEpcR7OXBdTN8KxNlPVg9vBLaajNFQtgkMMSE1MMGOqUBIHcG%2Fnrx4c%2F9l4xBO4zThKkJT546chadrvqVsvIaCdMp7wUMob0oAJE4FMVh3QDoViOGEZZoTJCM53XtJcT%2BdeHHIaRHsxMDiHmdtaMzD9i58HX0hwd9f7V476pDR%2F4GxTDd37gJzCL3BSo7%2Bg5DlojkM%2FDwySsF36PDfr%2FPpS89TR1T6r9EY55iGFKsqa4lm8PAq0syEwNWtSGRu7W1YVVw2o9p&X-Amz-Signature=47d641d6f693ff153c2bbf8fa4703da3e2dd94188289808ef278d86293422453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
