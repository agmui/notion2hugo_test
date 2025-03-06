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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKOWL6VL%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dEjW1Li84u6FpSwJLZYF%2BNmTCWBu3QwyOzsEe7W2ogIhAIX3Qhv6DxcDXgxyvufPslQksgB1FxRzitkcz569sVU4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw21qAnu4mS%2FHooq6wq3ANbJi3s0A%2FRYMTVoMq7YywAOrWujI5gY9VZVKGkFw%2BIoxrpJPZb1DNaL1Ev0fvR1oP2lO7qha0y7xAq1X%2FW%2Bq2YFLtkCK4pCyJlTsetoDXuJTznyH%2F%2B75uHWfyF2xEg0VJe%2BijjSXTxZVLF8IogLhZ3Gj1cooOkHgz15jSjPrtxQj4lK2hwJyNBneycsI%2FilDmgmdoI8Nxvjcl37arkH%2BIUHJaGrvj9i%2F%2FXgJrminaSBIN%2FOYjlfUjDLhvoPCpAq4KYHoynHYbERBlAXHqmH%2FzYYAOWdxdLfWWFwv1QtxFoL3%2FX1t3PjwBdGcqgXaXq2g2uDCTA0NojhoABn%2By0cT%2BvtH8k5u8otx0nRdmfzNMo2pUCbXKGAyu3ll9a7zWV2%2BAs1AxqFF70ylZ5oth0%2FQbOpKyOvh2DuWrkxhTVzoCTeZQUONTRMOsHx%2FAo4fomPjrwmrOFNm8QLH%2Fg5rbtSJq3y1R2GyRtWLRBsitv2F8EOqk6SXC9yt%2FgvaukRBVXTwfv8hQw4az9SXI8fwKBCrPcmHkqqIdpv7kIQcsgSmSaFs6xr9w2uuUZLWh9ZanK4oys6V%2F5FsbkjoKFpKSDn8XLqThqm8PWDXyjcm59KSLq7bweh4JXxjrZoT3ujTCB06W%2BBjqkASdveR0sKe3JmkwaznmgKLr%2FpiVYif1VufQD0YJef3YwM7AQV%2BFbi3OtqHFJIr6UYOfzAPDiqHVI73Mmzje4Dn0OOguZyj8%2BnK4aPnsMXzYZf%2BollC29%2B0VXYevtSYUSjDDMgCf%2BhR7uYSXj0DP7c7by6Vqkv1x9gEsOEqFt%2BXJHqeGtrnZQIEOJ5w0EzksB72rAvS6opmks1iEfnb%2FwtIyFHRKF&X-Amz-Signature=39064a2aa086c000aff23d380f0559777476343be597307f94803e2a975e3b4a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSXOLBW%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPD0SnDpO1OIeNJgkh0PXCNQ%2FfsIBNMSbyuZGMXUKrdgIhAL5Qv4QoW8EidfHZKstVV8TqhrSkMJUJTcESxk3okcJRKv8DCCsQABoMNjM3NDIzMTgzODA1IgxZcetdRLj2hy%2BCRfcq3ANuOwalIJzD%2BoX8ivymV%2Fya9xjw644QTf5fAheBh5PGyrIPF%2FBHDq6mvkrzFUFuWSO0n1ajvBNrH0PWKU3JwxrR18kaZ2NGJlUO5P2QAGZw2k8tCJsi1Y51MhlcOzPsfIsfq8Kd%2FV%2FqV1wyyykywhMSj7qg%2ByEspOGg06ITVah5kUZG2LKWwnkcgq83IrVwyt%2BO255Z5YGdBzEGaHOcQ%2BC0r7EJc9hZBui%2Bi%2Bs6772XGoT%2B4aXeRF9GoUzKdsgKRjBjEWU%2BzRMWY6F3CCIMzq%2BxRQqtINZ%2Fmaut%2FPsdpb%2F6xviuJFflvHACYByfcbeAHgb8rJvl%2BlYBnc7DWGMjR7UQfA%2F07E19Gij%2BDZ7YpfZqqaMioN8PMrKMX41EG1WPp6gGl4OP6LCRmuzEnBE0dXswGBGIss66Jay4Wi8y7NFchqgYrz66gEmtNB5ufLl%2F3GNzHGQP8Hi1gO8C4l3p3idjaZcXXyPzWQhigA0kfKOpnylubewC1%2FbqdAAlmNn%2FiUvvufQMOEvqMRvsHCYvk5I4IiAzmTT27w1LGVxeQxyCK2O0u4%2FRbEl%2BUa2BzR2BDY%2F0WFCZsDBnUf60KkTkAXZLNetiT7Sp%2FZrVr6doWGYLYz1O5z4qaMiX5HFSBzDZ1KW%2BBjqkAfym8b1m9eoeK5Qf6SoMNUGgSYPBGDLhJCT2MdrYuQ3Z%2F2WE0OT5dMbfk3l7V3nGicIGzulZkWlvV256vDTvoEuTfqPa2ayt7a3m%2B63uNOWr%2FVvwm%2FnpTy4oTZ%2BAc%2FdBM8Z6W5VPiqDKhiIv0tJz%2Fo01yi%2FDq5WahtXf7J%2FFhgnt%2Bmr5PIymiN6V54J%2FOGbLgtHLgNnZd1hB2XSv2Tji2VtyhayD&X-Amz-Signature=04a01e97c03f3e824553acdcc2d7b51e1703371ca17c7cadafb9c195db84b2e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
