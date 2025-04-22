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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKH2CCKI%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCKYJ%2FrerXnc7M7yQNDFZ%2FQLTTIa2Z2sibur9uVTTbmjwIhAK%2B67VLWo9jlHDqVsm6g05gwhABgy1Idt6%2FCcHy%2Fan0nKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVe0cS8QZ718kxAp0q3APQ%2BE77E3R2yhKP9f9jihSxgwivfWGD%2FeclW%2FIAi1po7se2kkEiCrXMGMI4YxJaNNaS%2FCDefAfrEl73cm1CKD9NWfGIWwOad1%2FDTvGXKDaC4ymo7eW2QWJA6F45c6Td6POP0%2B3xkRvN%2BhNgERModbxZpQrBm0BY8vAAObu5u7utk1klYRqLasJ135pOvl8IKdY4bvsusFXuZEd8slBFCSKTeMQ%2BVuwccY%2FML82l7rBUIKUe6L0Dl6KjB88H0y0QZNPWFIXZjTVN3dxODcmCXXmpyF6uSj6NRjut4P9UxurExDb64cOsucvFk%2Bx6oEgzp7UFDmAt319baOuWxXRYpOIbeHxnn%2FfjtRInQ4MsWEKSgAIb5AXmsFx20PMv7hZRvc3D2YbwDNyZehfarCe7OdRX5ajWBM%2BMHA7y4vd1oU2CCzjoIe9%2BdRb1J%2FuBp%2Bfbphk0QdxNAZRaorp3Oa83wd9dIGj0MuiQMoNW8Ty%2FSsXqbnGmitBgtQ6bdTqfteK0Q8x6VRmzlxpFTziFrTh7bNJ3MvqdcnqyINsv4OmwIdkr4fab%2BZmgJdxRwxncC%2Ff5CKIq9yFLlliMOvVZHW3mnOA%2B5%2FEozUThwExcd8oqFaAUUJvLSSdTsAZ%2Bkpwt6jCJoJ%2FABjqkAVH3v7CZs4CChmnKjBc81hcpGKXEWOBW0EKNaO8iKFyBv7FfrHR4wF2OSQPV9Z%2B1%2FlKxVRpWgQif3S6qcQIUljhdUU%2BgyMAsJjj8d3SjxMZ4W2XiIdn5wgxr6wbqJ%2FjXMHY4rj%2FGtExA23DNmkzJb20nAXQuCC8SFaaab2SO6Bl7xDzK1Vc2gCDn1Gdw7%2FrsajeicskUeu%2Blo4MyLgzQ7tGOleTI&X-Amz-Signature=f72ee03c62220450ad5b19a0b02be6b95e1fa652d0beb2b08074444a1729fc28&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBRD5QYR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQD3iHAfMRdb6REJIoGOUgbreS4kXyFr58sE61Th0j6HMwIgQbTH7C18rtruuNyhqolQ0j%2BZSzgP%2BZ2xFtu4kkmaJ38qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjDC8ip1B0FlriGXyrcA8gN%2FxLQUgd8m5%2BVJHSaTULwXCTivZuqlN%2FQ5l5QSpAJzRp9u1aFA010W6H%2B1h3%2Fk6xtNFuwvaYdH4GtbFAHfpMDc2JZ9B5ASoFR2N2sB%2BzDq3rvndCSmSwg2PHV0twyPNacR5bgZTj2avspvDBVhx4SKte6mU0umByaSwd8qxNFEmtCjAsCwjt3NQCXjlwdinF9rJ3yPbI0PNBNk%2FqRCnz%2BSq2kFU1zcJoGbYZLbGCx4k2QISl8%2BUHPahGqud9GqGdJgc390iTkfN1GVgl7ZYi6AOjEWpk8gyRQRiHFyReI12EKMhcAj%2Fec4I%2BEr0RSvMwUZ%2FulAjqk9bOanh9UT75GgETuj5wlXAh90suV9tearSm2tgMC0yRxtRP90QYYDgv7QZkiW4dh3SuNmdT5X4yDeC%2BLjNKbCvcxd5kkhvtd5mrHu920CiT5uNc9Xtf%2B%2F9ufka3eqDfdsWgHMSN3v71rPiRRTczRb93QLqLYq6%2BOpPklZtIQPhTWOA0KMJJtdNXGa5YK4CRvJn6aCEBsbeWeEUkBzm9J7HOBqKJTLBedqYE6xZBFE%2FnzoAcpS1bP%2Bbp9Kj%2FK1tM%2BKkaHA8j9rtts1s9POjfaSqLnRzrH5Ai9HxkTFpvJUVYWzBWHMJCfn8AGOqUBCQrlCspAR3SC%2Bn0dco51NNFn8PyjZ20mnx5UP73RlaO0OpJ5lGHsNdFBitij12TuHZVdgmuYO6iKH0bhdGO5POSpkMW%2Fgl9F7cFQRMk8UDw3SE83zOMmUpSfAIWjVKqQzgFQdl2sKYgcqLbgZUkNvwaWons1GfWCTvjb3nkYQyl1GuKj%2Bpjvm4aa70PpjDCQmalD4W42sqxa7MyeU8LhkXfGNvGP&X-Amz-Signature=033b0715248d456e2ca2c400c52a196755fd4e5923d6d70304b70b8349501627&X-Amz-SignedHeaders=host&x-id=GetObject)

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
