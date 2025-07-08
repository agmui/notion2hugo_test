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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AA65YR5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2oBq85NjUHmzI8XzK%2FW68reIg0D5HxJ0kVa7K5zC0gAiEAiMZfahABaX9Q3j3V%2FUOP0z5Hc97aOw0%2FlSxefNzRwUcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH23NI7uo%2BPNF0KkBSrcA0N6QO936hXlQL%2B%2FCjDMZ3k1iSyLpHdSKhdzDeeEfeu%2FaT%2F%2B8y%2FBKZmAWdaVc4hhG6xt%2BVsbkPEy65CpGils4ETGhorKsrU2dRKegalTnd5osgKBJgI15r6TlVLeBOH4s39vIbgIyIB275C0N2FiJS5MqYqnPfiuQDsHJnpEUwpHP7wO5b2OTx5QbFNuvXbDZ2IDfYuqpAaJoaQ8WtXYhAKi1cukZEi7HR%2FpKM0Pz0oUcNg2k653Z3Ds4Bp2XG7qoHjI6uhbDCkUllDzD3KjRd8Ao6rCk6%2F%2Bns4UEO7favkluY8yHoMBj48u5BwpPDS46QVqjfQo3dTE2eWbLCdbuDBOwaSCgYiWnqKJsXXpT8Z1sA5xx%2BYqlDyWhbVoAN%2BtjQzidQ4Fd4V43kZKHtYgcu0e7%2BPpNbWKWvoV8p%2BlK6ECcAM13rPnmocdBFLmqb2CcJTEOcyJPKwtQeQW4UDUdqO4cuxVGeKMZFoONkX9tcxN0dykEOLAOhOxgymHFGbiwx0A60ReV%2Fz7QsKG09nnuC4PqqhFTZR83ujaV36CPjcvy%2FFg%2FoCCNkQjFyvclR7WVzdnQnXZcEN7HndyhfinvkB1LvUt2K6Zq2ym%2FBqNcU5MksDYtbh4p7JyQX2EMK6DtsMGOqUBMsHV9JoRpCzkYK6ckr9GCcRWEwkku%2FxPwh9dVWAegXgeW%2FzOvO554VTVJzRMDPvNAv14aHOynJPa6NiXih7hgHxP7exEJgnNC5TsotZcBisV9vKgKap9Xnk0p45WOt0dQzi0O%2B3BW4LAfRR1hG6L9K3s8PHaxpUNwamLzTYRg6E33KYfO0JIuttzsuNLXtrhWlMqpN83DcUdp1A%2BsSRoumz7QB3W&X-Amz-Signature=9641aa3d888b862d393463bea1a35b7814818f6b9c58596fed330b1e15d6d82e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVVRUWEP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn1ftsLSJh7mphlr%2FoqkrZUNxGfrNToRqR4q5xYheQWwIgUiMqZgWqILiCxv8yM6AYwd%2BxmBmq%2FN70YfIOa4db6PIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDit5kDRSBf4haFM2ircA%2BwumLrNmcLu9kAxS7R2yPhahmFtFJS2dVfrnCVV4pp5%2FCc%2BNZqCD95M%2BKwx0efNKYyi57PKEeq8QEwLFRJebcxBSe7JnRsZrfHyngNKv3lgLZHihm3U0TrvurdGq8hJ6n6C2mvh5g3Pzsf4j4GSAVSsE7tfqFNk%2FYYCgRH7miefK40gxMce8oUyv62%2BBlEw88UUgEEMSq5lJLkPRT%2B5W3y6d2w2XxLucMOuUMlGgeCDb8P8U5DZruJW4OerH4VnZnQiFcVHGt%2FQ%2FnDn3G5MvrCXHW8VwAH59PMgtmVKPvkxCyprn6Vmi%2B%2FfOUxmArM1Ys0k1YYP7SIMMwCmmPQArpuwxbJyLf7zkDuyZb1yWIPn5wRaqtqS5rUadCW0N1qoDsgcE7TeaZtYV9NCG3HNOrr1nx4pfzt1xUw3ItJ1kYGV8L%2BJ91a3zkzuSa%2FaLG9BlMyztpKpPivnKWlbdFChP4mK%2FRVpkwQrNKcmyWUnGZhpL7OlWTwGHUoQpRb0tBkXUzbH03VnqCap%2FxaNO9Kgt90i08m9U8TGXXTR3yi0NQPc2D54ropzeBRLvyPNlthGIx76h97D4x1UNY77QIPW9JZxMkg2PnZgTyzhA5EKlbuQXIDP0VzckhQSoCiBMPWDtsMGOqUBUfU56oI5Q5aSlWNsSmaHAOnySKtGIQmP%2F7P3alU5LNih0lky4glU4lbInPydc%2F9bortynDEiQS9MacjqFnzrNzBR1GwIi9GHwnGrc3W2%2FZj2DrfAArBexiyyc0hsusD3ZcF2L4ad5IOYSPdzlE2nLq9L22z%2BwbRrsWVxxwPezn2VGIP7qruEHqpY19opyB%2BVnJv%2F45m3cotFru0OcIYYp9Pc6liG&X-Amz-Signature=5724003444d096cb176f07436dad65fff6621f6f5d69d8e54aa557a68eb3a8b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
