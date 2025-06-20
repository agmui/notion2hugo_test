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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTEOZYZM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FWlf2RbW6TxLmV1cxh%2FysFX1RXnJnyYM7XfSA7rVqNAiEAgtpeG6twlStB1cllL6tRD4P53rTaMV1qIdNRdnRDw6oqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7NpsuTIDblem36FSrcAw8Nc4gHvaEsTcdL%2FvHJD5aL7Ig%2Bsy5F%2FpeFIdXBEtZQqGYiX0dDlVKNwdOiKyKytQLsSu1Mg13ly1XaXjLDMFMscct53aZfp16zGGoRFL%2Fn%2FeiFbD9uweA%2FskPcZIl1EBCzoNruQ5jj3LJKWVpMQY8VBg6s9uBz7UKpqdb3eroht977RdSeALeUNMgaTUd7rqaR7y5pqskoa2gtALvBh1Nk9jExMXWvU2PeWt2jMioyzD9iTqiNFT7%2BaQW2pfrZO4DB64eygn2h8mjdgY45T6MalmSj1uAW1wYVbQArgAN3dny5VxRdy6Ex5%2FrGQ%2FFnplyvbcDg4j7daIJebIxogECOhio8TIg%2FlHPLAAdEsOJsXZ0ODg4pKc2D4VjvCg08PZJ0AAnL9kaGFt5ed7ShOzymTYqYdrATdCsJP4kMve7hJITIW6PgHEobuKXOsj3u681xvxrK1GCwWkNvxDf8aiethSWY2dw6CervjJ92O1nFHN4%2B3ZgWrBCU2MAUuWtv%2F7ckG8Qsczg6kWy9cNwo5cuhz%2BQnYqMRkyU18MZ26MYRjsBMXzjHmDXgs121pWk4pRCo1QQGe4p7tBIigJsbozHTHmhIqOeUnmiXqdKIQCc6rdv4sStm0jCHOLQFMLfB1MIGOqUBbjK3185lf4celEB53jhsguCBAAtCU6I%2FbpTmIQGeYhMQHRFNZs4sHg4Xuzcy5X4Et3whUMyWfzFDJ3%2Bm%2FNeUL3JENtUuB9mLWOAyqMHkUhJMHum4%2FEzXOkMCFuMoFLuWeRscRM2a6CANrf7PhowOIHTYixqdVL27D2bxWr8I8%2F%2FFPuEBT2lxshLg%2FPdQlQfAN7fHbJFvSx8VSFDAFcO849tqrNAO&X-Amz-Signature=eaacd5f4781f8ff7199aec69f4a0cefcc7d19c3778831957475e60ba1c665fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOEOB7D%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7ivhzt8iV1uR4n5T93n0H2cS6Q4kcmwGsNNxShhXiFAiABxOgcUKMxV6frYC9YRq6lOQ0ANvb7k8GZVNE8rMn8WyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv49Jg2TjmYwKNhGPKtwDokzp1aro%2BWCv9bWV6sf7olnRMVrM6PjKhLpawfi4fzsEaD4rWwh7ZHD44iRrkB%2BAR9N0xYc28ofIG%2FhsguV4ovRF6DTGWvUooQppmq8GL1Qkyn2Hy%2FlqOGCD9QUtqP9qe3iDc6DVQskayAY3MKtolvBL6qbj1bVRdY3KL1TXbYbCG8p4%2FIAweoDmSJvGeLd1ORid5PX3KALnSOzInIshl83CKQ1plwxU5%2BiuUfy2Cy1Wjsfj1%2BTyt1KdA6eKD%2BtkrZFMgiGb4xo3q7ckFRZZ82baVnTelg4xop%2BcJ4nyI17MOMzWREKgHFsTN9WfILOSEBMdXC0e3MKKQB%2FN7ipZGIJpK2zexarMtQyGOrrmgLgksGwX5J9Nop7ax7EuwvbLOmJIApQCcxU4WI1Sob%2BLQ6O6AF64uPeTzoicNA6OVCSOTCgkm3tmCcTBr2xn1XEKM5bMBD1REwF1tHLZ0%2FXdKUbMxfAi8yVv1aGkBCiNmfa2CRszpE2MbgO3aY8xlqot3jpvqLTgJygAwbxmlSufERdSRo3Dr4DPhOhT%2B%2Ba1bWaoO7hxdtSgBf9ui7OSF9ezLKA0SnxlvlQAvVEYzLTAhBnb7s1J1SCZcX%2Fa5pgVIdTppY0Q8l7fDOlNNVQw4MHUwgY6pgEWvh3HpYA6DZuEuZZSiRqtT1j7j7Eod%2BU49HLDQPJollyCM0XCisgjxuDNIJfsNNcP%2BytIpFoi2XolmBmCrxFVlb5dewC0zu%2Fydj13IiFem2G2OhzSeglcuUboCO0hxAofquUtJDyTmktAQtQhEvK5b1eCkoJpzLrhOsHv422eWZMHNrdqfyvdglnLxoiuo6%2FmJmPMkJ1E9aJ4Vptonxd%2BIkUxfNdn&X-Amz-Signature=28fa1b1e496138a585ed7001fdce7c34feafa64dceb7426e5be1f1e6a4e44928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
