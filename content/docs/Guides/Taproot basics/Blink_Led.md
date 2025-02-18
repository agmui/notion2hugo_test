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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXIVFIEL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCo1K%2BcMVVeQkio%2B34SPoIFqkov%2BIzalFWZUZ1CSxxSdQIhAPklIIcaUXNOdDsMFBqE5cfvUZizpNkJpNHQeQss22y8KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDx1cWQ0npJdBv5Ikq3AM7Q1Bi9uoJr04N3MjPH9CyGc1GxyEFNwbxfSl6SALOpoiun8KM5QFV04JBkP5yE3IXFkPwJ%2FA1B6eAeGmYeatRGrKAxM2mi1VRxvhpBQlhXQw8i0mNI54mAPhG5UX1Ylrmu6nnqLj9KCjuonWP162LzBrYtOnlXhmABJst6SeBMytnZHm4s2qCrBkNcKplj%2BSusXXxHjI31xcmxpuJSEZpGaGdDd8P55BqS%2FMo96WDH7MI3tNgQB7SqRO%2B74gg9YfMmb0QoXXKcvQCwiIMAylIH7Z5s6qhyWEFJbjbQxuwI6OtlUB4U7dSOZYp2FdVWM6jpucGxBvaRaWkMVCutcbUfSHY3AIQ1IaptxoXvMadQGs%2FrfHsAEpJT59xwZpJCHQioRrzYWaLJyXY438kuaZjA8hCRN8ccKx%2B0WhIA3SUdZR512sCBalgTKRupW1qnBUHibuX7sRsw3%2FCpVA9q5qeITntDITXc42J%2Fx2ubm7j5ckX5hdA%2Br2wZSG7HM2sFZLmSI2I5PVBxX7P202ncWTfrCmfjg%2FRzQO1uYBLjozU%2FWW4a8rbJUhaYWJhdZ3Wqb%2BtYVE3ebqzAYRftu3Nb1j5LG4Go%2FpqJq3YowLI12fUFaa3siYOpdW3jBr78jDfjNC9BjqkAcmYtTBsbBmrPQDZJJtc51BpocEfHeMqg3HpicqhuV8edyoZt6AaVJX9DOU0z0p8oV8r91vABeBt3chnFqzqiKsNp%2FgK8Lv3%2BElBV%2FFMxYljPwzz5Xe1KvQajjGkNoCKEXaFSEvq2a0%2FoCl3pH1QyWEs3zeKcs7cyY3FL7XN0qSUyCXjWz%2FRKfd4Covsn0J%2BzwOJ%2BofTklWRrQZDDM%2B3jAd7PqjU&X-Amz-Signature=037182d658935781ea1ccbdab886b31289f6c60f6a23c7500c39b1d479b67f17&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFOOGXH%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIFlRWtaRrxYAkzuPWluyFPaZlQHg0YTY2Bn3mHvDjX1tAiBZ8qoGxkTdFOYfHSjj1TtvJLYk%2BtLrmTYyGNLKTjHbHyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFb1i0JwHJmLxyX%2FKtwDY6bafnEKhSKT6b7P9Qid%2BIH2X6UOyQi6OHRHFpCeMt6nB3I0m15R1DWNIijmHIKZYyz3Pe95E0Xg8hzCcan1x%2FmPe0Fbp%2FDWP%2FwQL6rKK1x73mYmKsm6TYEqDF6JF1fFlnDwVjB9kxkp5JsFHpgEVtKaR0RJyVvksA0mkyYEMvR0vcRvIFvrFG9Llu1vUicCYch9q0TV%2FLaf7P%2BRUoGIM5%2FdyWZIT1npdldvlpyOovc6TrsUSoX28BkSuSGKBM7q9WUvkBV%2FUfWty9HJYZBYglCrDezy8imw7pUFcamKuVbfoIwv0coVAAStM2rrwRyEwBK6EDWfd81Ntr560DSEyIGWvX%2B%2BDZJuUzlwr6IrBwlDd5OU4Q1aD1pzvr2roARDvBOc99dKieTu0X9JWtir2%2FH%2FIgRNwtE418xksWtKNiMYxFE9zIoYrbdKZXJncjBxmvmZRyGH5FukLkIPrAYjsspKGFjlXzecn2zk5GQ%2BwlKObolxcEywuitUb2XI9wA%2BevWCLJAcGKB6RM%2Bp5ghuOZcVENAYPps%2B5lyTK0RMrGwTDy7rkDaHl1p3ch5RsTlyRkcyHdz4ZuzLobIB4HSsTgLKS15x1NUXYO0rQQ1YtzckPF%2B0ObycYxA0%2Fwsw1YzQvQY6pgFbnXcsK9WvMmqPi%2BNA9pA3IOS0EAJ%2F3IQZu%2Furx4j2Sln5%2B3%2BTR73q%2FKyurO5zoBlr4LzTC5q4697kAqUycn%2BcArGMsTz9q29JVF2VQdX6eHUJdAs8nR7FNSehhj61RxpFuhF7sgd88M0oCHVQkv63roe%2BefdRlsqjyb4pAdUhm%2BEN2rXicmIeleXJ7Hwzn5dTG2g69VulneUFUGsXE8x8m1ghZ2l9&X-Amz-Signature=ead597f70302da01f77a0cbf943dba352d9ed4a7da77a4c934e3ed3735b63c91&X-Amz-SignedHeaders=host&x-id=GetObject)

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
