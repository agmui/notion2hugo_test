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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS4DIBCW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDHA16YryoWDn8r%2FcW8UA6ERSUJwF7lEdaaC1hJ9dGlWgIgaazE4RX2kZ91AOgfNQXxPSH8AivtiSkwc0PjQDCRZIMq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCluVxEiCb4sjY%2FpjircAyc7gekHSzAPeMW0h8uFGbw20QWYQjtkWwv%2BTV1XC0qtc5e0rsTozt%2FS8Ygw3OhiAfN2LwmUquuMHGkqSr%2B6LvXVf9UK7a0cusC4SZbTNCCyrSXWzK1MnJNbg4OLD9Jq8R52VPcwMjUMSJZG%2BWE7Tzkoymm09FowHgugyENVw%2F3caIlwBPBSBQiCv5Zewg92BKtWdiUrlxIOUmtDsUa49lUZ0zJZTxPp%2Bhy9tFPWWC9mAL1DsyJwy4F5i8v1v32EuScKOs2QJUcYaPOnMdVEoRb9Dd3MROUD9M0bFzZ5EIjG5k%2BqU1PfLbnHx93YhC0Xb5Wnw7BRW7yNFCPRvPmD5Pz9bTJ%2F8qJhMZUIUKjaSoK6S2eN5cwLJRfY8%2BUCY5I8FS4LN%2FdXUm1divsf0jSQ%2BneaUhq02Pryfa09M1iB5vOBVYil93sTvIML5z%2FC9MlW1f9873IRWyHxuWvuEyC0KNuffsS2rzRmNxXP9tkZzRjUDShSdOzt4ru7qiGVxWt%2BzgzNSGOcO6rQ5ICqJ7%2Bo9xts6%2BGdbu%2FVlToQheZzGWIeSa9KNYewHIUv%2B5b8TyHxdtQsJjCKFOl12sozxtwWUSxSwucCQIm89y5y1%2FS8tQV%2FyE%2FbTgM%2FVsjz4KgrMMD%2BlL0GOqUBnPQ2QtZPcOkvs5k%2BWFyLy%2FfqFDZgKqIo22Oi33SnHQx9L4kLcq11x5BN7cA5eJSRrEPhaKWYO23F8rsdthYNmkLj1iOtBtiY2tj61tqq9uLXbvHlXYxv7y5ouym6U26dv48Xekp5roxUxNJw30hiAC5ZVBru16n4R48GZPJmepZRM4%2BbF%2BCLF7RULFJl2HJW%2F6f2Edcra0tLbjCkwISxSjZoit11&X-Amz-Signature=51f1da7ab495b2f9ca298f8fe7ebcf5bbdd9ec041c060ff3a5f3b6cd2e88a0ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFQHWABJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFHLRIpwKPkpVdbXFKYZvzAOUv%2B4HqR2dLnIEW1LmZ1%2BAiEAwIjZWqOG8rRFnkEiNvrDSNRie5Kdm5jn7nsrCjEvYY8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGb0NuagOQr2Wm1k1SrcA7VshUxtoh9ddVacAwxx446GQ8O%2Bp%2FTw55bWxgszCQ0w7KhbpJiP3wb8ZFLT8DJsu4VLrndiJUFwsymtFSrVjGtDSUAH%2FXMed7yn6Ijsm9YsHvSHYtlVG7hnUkgwwhZ2ZpvGe5fxM2q%2FaG3e%2B6rSFF12toUaz5gr4QorRVV9pdPe2%2BHqAsyd4GXvQVOdw47qbOw7CPZvRNqHgKony%2Bb%2BBPyq9Fr4QVIbMiNz5KwGmjxPV7wD%2FltfR6rvHFKMW2eojZ0jIeoc5T%2FY0lmV9nUgtvA9REqVxY9FfF63KLpSjdNQuLXaeSdoNqdE4zuDsKHTDbO459nM3zcjMKaWITbheEjhZIbkQZ6n2aijnA0Nxjn7j2eB8h5Ra6o71ClQBVIdYBF1UFCd4UQvdauwbmTgOM4ongeFXgDMvVIq2KMZt4Ql%2BESn237W924F%2B78ruWsluAwYInv5fikpkI7rwJI1CPF2TevCLnIMGQF0MjpAiV1n%2F0zTsQCt82V8ppS2orskxfJLDJrDhx4TxKoiT6c8MjLfC4Kbk%2FxipDxGNgcwoKi1JE8fVE35kaHytV6YgxuzYrTI%2FmM5WFEaHYodSSAvS7f2sdCitvcBiGg9YlZz3zt2ewCq9nvpChPJjIbRMMn%2BlL0GOqUBbyns0ZDWg4izzARUYbmfE73AZvU4z45zro1Rfi0g4Atr9yoJobsj4LljaWxR2i5UAkFY1vGz9A6u3BhTrqbBCVYOOcjsrOvfL8%2BAiN6XCXjP%2Bdd%2BZCnywkOSK%2FMCTa3g%2Fnn1COS%2FRSF1eT3xeQEWjm8DshO1oMzKcbdZzDHwwfRUmKUeCY%2BtNAl0FawIk2nqH%2BK0eqdp1aDQf1DMuItkNICDQB5s&X-Amz-Signature=f5e82808a22339811fe001f7289c3957d0eee72d02d9e36eab6be8784fdf6b01&X-Amz-SignedHeaders=host&x-id=GetObject)

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
