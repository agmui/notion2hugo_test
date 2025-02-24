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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2IGU4G%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNr25%2FAii6LCjbu654gzoTkP8ZhDkIoXHybUy%2FJfV7BgIgXgFofJ%2FoEL7wAUVV%2BuLiHRRyQDR4LuJ6nEEYctySf%2BQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJ2PHyYBMMVjQI7MuircA%2FklZkBX0vMApjz1KRhcLXFMEmWrJ1E5ut7ymdgypofsA6JM3x530nqj%2Bxa8htIPaJhN7bs1Ji7RntlouVsRJSWwz9fqXKefvT0YO8k4UbNHvJjz2AYe2J7zX1DxzPOvKrQuhEz0eh%2BN2yGPnVeezW%2B2Y2r8wy%2FFNhl8ER8gf9y7PWef0zcejibIRlOhUyO0NK9U6%2F1rMr0BUVlZgDvt0Ih8xidUEW2imK3iyG9pqi1zGkVZPickzO54qSOCKF3uhnaR9FF2aXNS6LmeuyXQBDq%2BfAUmOup11BU45JIBtaxBtM5yVaYozIEj7C4xRQ66XbzoLoqpv3fn2wnE41EcyaCN%2BjAoYp2G2N2IfHHuPFdRAzlqFTo%2BzvAesg2cQdku8crEepu8rvgg%2FlGoI5d6vxRSz4l2QfNeay9L2ZHrHPffNwrzfWeT4M753gNy1YskWBS2wWs0dasjOM%2FLVqq9iQIiQs66KWAqjTjLmEywlpxKk9ujk6RVXudDBOwFmPRZuI0N1cGUJGrLzY2fNNfaQnTE4lkcshhlYEQavwLskQ5oWFT3dGaqPX3vKC2n%2BT0520JveF4Bbxa0m%2BOwcpPzGZKLRhIANecioCIdi%2FkxjU4bf0IOL3ZafmkQ2GJkMPSL8b0GOqUBlcTtrBxZk%2FGEeZ6ygyVb1w25Uu8m8fvyKzwveSM1HxR%2BEXMjcu1hhdOosXBba2n7z21SnXXVrWxhCOfyI12AOCDNX3ysmFYJAVKQ%2BskcQFE8UzUGGusEXQpkCJMYlD86%2FbqkTcJr%2FA%2FfsU0ehwqjvJqt3jGcoOI7y%2B%2BkqYPSnCYB2MEbiY0A4fYD6Oa9Uqh6E8wKj8tQ30P2EEasfjwJgPXvSr%2B8&X-Amz-Signature=55ab7522ea7cfcfe488a9b9e91094cfa45a51a01e0d920e054c1d89ca0321b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VFBESGQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYLIFLggHcmxV3bPVodjNTpjhX7AAuxW3kQv7R%2Bej4MAiAugG7HIBkXop8vhqIDQisN6fZXAXT3MeO1gH9k3oI4Hyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMLQQig1A0Ws3qzl2CKtwDqnoruMlFl4J1THS7A4bGqbMzPj%2FYApRSi9NohcVY%2FPQErQSShdOY44WyWSSwQnjCxc5%2Be%2BYnsLfJ4WxpWbuJ3uRbsZWS%2Fd0%2B%2FPTOF0MCbqH7J2MIyDHeH%2FbbKDeenJOnDpDV1SXX9MjnJMKS1ayO46Zb5KksMDbD%2F%2F2YoCAiBw1NfyVXU7FLdUFOqRWOQzpnOmDI9aboMQU9%2B8RdoFGs2dmUb%2BlbrhT57UEA6JiSav3EnwTfZC5121F%2BM2O2w%2BgDLGEbyxmq3ZyHL0tDK%2Bye%2BKh9IDtDZpqUZe9xlXOKx6Ok0hGIlpZvJ8Rgwq1t0Mo6g%2FZJxu%2Fqb3Sy5NLCnB1e54O3mgiS0xc%2BwUB6IRwl9WxKtde0VG465WfQV1Og1LQ3IbYny%2FYgUfUhtGWu80Sx3KwxLGRxMvdGRvVWLY4obEc3G%2F6LT0wgJmrI73ewVYuldUJTIMU6qsFdRgl524qHw4Ch7Jvs6A5xo0qUkgYhE%2Fj5FkG8zmguA6K13EMtTgbEAZg3Bg8BtlDDoRk0Msu1FPdU5%2BlvOicXr4vKNsaTHsjofakAHaxQTKeHgIP%2FfNe1UrUmAHPUvwucYoFEA6Ch4u0zs0VQ86P6Wx%2BBi27KdXM76DqleTQYkkHqVqcw%2B4zxvQY6pgHwB%2Fo7lNn32vXhrjs4U6L%2FZJeQwubmOKuykADrjMsDIbDVM%2FdSQ0ZMaOYYfXax1JU5jeGSUlfrimKTHtTCTPdRcAZBYQDAY5v%2FsNHpdCamECceAxVz2onmkUmwQQtNnye31GVSkoEK5RvmD%2BNMovtbRRfQF4Mg58Rikm4gzWr%2Bqs1xmvlqw%2Fb8J%2BqPozFtnD4SnjvNi8uh4yibjlE97rT4F3YBK2yl&X-Amz-Signature=e27b506a6993c654f74ccb03146ae100dc0c7de831af13831900aff57a2d0147&X-Amz-SignedHeaders=host&x-id=GetObject)

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
