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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PPAWIRR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICh%2FvzZ%2F%2FQdBb31wapTH9QIAHS9UPwBMVlt9EcxWzh6YAiBYO8C3Zp0XZ3dlak1ZTKgebL0DALNiQd9CRnsVnxMV0Cr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSJONMrq%2BOxEdloJyKtwDR3hlYkFPn5uYFhN7njsfc2XE69MzQg05C7YEQsbrtdZ5%2FOJkwuQOExy09CZxDU0L1CMapeAmeuch9NjmjrEEZ3MqXAedZL98dIoGyf%2FCU5YqsuY6J1c0UVEtXtqUmY6VnkOPzNCNsJvf%2FnT0rnh7%2FjsAnkNI079EmMGGwwkfLWFF2k2sTb4v%2B3Q1D12msqypAMG5og4DBiVgBO2QcCrlJvN%2BMxCJVTHfzHYsyYeGxhZIXitDTyvOGW7jP9v5wy75tT%2F%2Fr5HT2DVcmhvtfzdug9gG6GjP3KASiU9vcu9vPvp8ya8eoigfxf%2FQB9%2BXUEKbHUd0OpP3%2FVMOryOjntWUUYyapZ5A4QBuGBgczYy%2BCN3ZIb4zLFbGEK1uVPSolaoYGOZLFdEa9Qg5BSaeJjMCsISE41Gfq5kEcSyPmXtULQViPyjH5Vh4z%2B%2B%2B3UMV3BJEojHyaEQR9M9zeejqbGfYLVeR%2BWQXnbj9%2F3ajmLUSs9nVw5ZKDmXIh%2BIBzauhZJRIs58CEVixuROtgzKOBIpOSajARvpmgHnrjEluX8ollsYwkHmxOoHGRLzgkfm6tusPHWFzvb1duDTESyq0KSuPQCw5J8zHTGSaMgSn5J3%2F0pXNTlZOhGhP9aolpu8wgO6avwY6pgEriCI1z7n2LhfToIwI7fx34%2FLe7Y%2FB9OmRwpnfAQKemhv9zaZ%2FlAYfkd%2Fa1YcATTVC%2BPqF0JUYeyXjWmKLI27t1990GWOKDMk6v%2FQwFfTATnnZeqAsj%2BSEsyheDA5aEMDll%2F66VheCZPdX7CjbBPS3dtv%2F0kn9ROMA3iDzRRp5dj%2FfOHF8eCOhDZb20e488LTuctqT31UDduo7ECPxNoJSZKJS4jNV&X-Amz-Signature=55710ebe593d0c8bc20832ac4b98482e5c623e1f2dec41f18d18493471750b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEP6Z6K4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDNCVD1PedpzlP8QZMayWd7nOrjPQHxmhpWqbDyITlGgIgbQIBiPAhrYtFpU9alAvlHLJSZjvD6GnxnGUJunmv8l8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEC5Z4qDA0nK283h1yrcA6t2jkLNN3eGYR2ihlvNAlaQnD5p4TGAO7bm0OhZ5VRXe2B6OGHmE%2FaxRIHvUGlsc0BVjAFo7sK5FHwDGspnOF0BcRf8qzO0IRoMR1t8nKqIfJtUlJoTHdLIkbkWUrsh0YL6jv8TbLANmB17wWQlSVmxbN4aXt45thzO17K9Rjgd5zMQxIDhyriwoVscHmoCCMUv4GzoBdYIAttw%2Bmdmv%2FK3NvDZiXwFnPmaFooykIyvVzWXA%2BIZZlHs5h0MZqmb0Vn24Go7e537otEsWc0cVLxz6cz9eTcTJ4yRgSfCmpBkLIfZkc%2Fkap8qXI2DepRA%2FlcxKcqC3ExYQsOiP2gmcleUDE1LIRBHXzHbmwEMpR2LEcpMgt8FGNgpJS%2BlQ3AerCDDWFD4cYML5moVx%2F6Mq7XmG7rsvfgMwycPqHv3HsWPSp%2FaZEbDIy338sVpfsTxh26bVpVYuLpyPQdq3obFG4TVYZZrn1mhoVXCCR0d0F9Y2VvUZVcwfzvXx04xta%2BYnkkeChXZKdMO8Xuc57QL23tty9pLr070H%2Btqr32qR6av0yA51l%2BhaSq1rJ9hiiue25DU%2FIy%2BZjrVN%2FTZKP5Rq3iXuqh5nNlnl2N%2BD7jRBKm9UsyVs9zQsxqKm7B5MP%2Fsmr8GOqUB8GU%2FlN5b08tLBk%2BDyIJd%2FpFBnzssMooU7%2BXncfjQcRvEXbTW1v3iwiqa3sSHj25w1Gcrmff3bXpGOB9WWx6APRWNfYM18Q9iSWeVppNTvGNgvPtXrahSnWAVyRP%2FvAY5fleNIacFbLxcoW%2BmuDzNqJL6%2FPDXjZOdFo5QdapbR%2F6sODNmFwc92GoitZyC8sRPitO7WMDacQ4i1OIvxpaRIUIUK6%2Bu&X-Amz-Signature=60b26d7f67509db82a136f19ee0d2321da16251c1967a58d796e293a14c4041a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
