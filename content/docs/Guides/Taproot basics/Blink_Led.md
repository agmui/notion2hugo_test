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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJ7QTKK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD00UeX1UR0b1ylotp52t2qDfNNbMHRID4yxFRJwd8vXwIhAKt5DKR6RqZs%2FPa4%2FeH11MbSsX7qOlcUF3SxutJWYygIKv8DCCAQABoMNjM3NDIzMTgzODA1Igwk%2BOeHvgwVOA3kp28q3APBX8V%2B72qmkX%2BidpjmNaqonQG8zZ6oVE%2BpR%2FFOwO0Mi1Aq0rmfIIqeA854V43UFXX57xkIqGvdiocKjnv2CaAQBlepiSXWn8jxgVfKex9XeG4dduDE8oPnwyJtk1T7IIPAtC7kJHHg1arw1KIANq45pty2yk2cK9bR7K%2FRntp2P3lc%2FPMC2Krz2tt7mSeJRF2VDaRf2NFiXWwQPju7cc%2FEtWvJKM6Mmp%2FMr0dKuimN%2FKgaBi8jCYBRDd0VJVk%2BIM9IbreI8THphRmWI5%2FMFxUGFC3dI3iabftZf6sDeoZ5sd28yc3hXXBOXRJFh%2F8k9Hw55JAwqwYtWFULEdR35q3U492RLrh%2FQw1H9mYVr6bZHxjNCMd0kGZtlGcCzOFG8LGDWuDP1Px8PwdiBuRQ4JL2fr1TBsf%2Fb3xsmaqnA%2FUuaNnKR0HPbFgNQb%2B49fICqZNUoj9OndJzWXKSrszPcOr0uDfnGQ3vaesaub0ka9cA3coyt2GADOtY9%2FLciRF2cMdKDyg1J0i5wpNr%2FSFoujMX%2BemY%2FQ4Bmcz5EygHama5j95p1ClUkJvR4AyveRMmkCVWP6R21CW3Do%2Fhc50obT7ztt%2FnTMHRcB2hS3nKpwMLt8bfzcrHdbRPAxq4jzDxgdi%2BBjqkAZV%2FDRQHk93WkBc2G5tCK2C%2Fsreqd6ZWVvfoe1ekWW6yPWVdW0qVVlWWS0x%2FyJBl%2BWTJ0ABpz8%2B0z9cU378FTM5aroZhfgnM7G4gtY3y1JKZRQlY1sQ%2BobRKAPLEWKqBcvvlXdlPsh%2BFm3mErbFiBI3orTWBoXzvRpYiJ0hUss5RR3pjL1uPpGsMzUJCNuOg1LIsEYHKgbbi5Y3QlnSK09nsxbrg&X-Amz-Signature=9cc33f38def86a56219275d1bba9c8ea7e490506e4767749ede24dd8c4523c5d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SVBTS4W%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkwvoqIJb7ohgtPKc4aaaEjOUHe8RD4EgTYzraNU9pvAIhAIrKw8kYgnhg7Qsqte2QZveRC7BwiqKNwEvov%2BOAZfd%2FKv8DCCAQABoMNjM3NDIzMTgzODA1IgzdYwpgbxBhoEv4HUcq3AMZCmk4lf9AfLWwY8ADsdig6iOmQkjPWiSx%2Fj3ZKWAhN0FR4Q%2F7SadsAOn4no0hp0EUKKongQNkIyZUvc5M2RP8Rc5wCRiADTBiRQjacOAJuiW8ncyUo2GsL8GRES0tairnduBJyM3w3azoo2jRfd%2BWrW0YWlZA8AYLVEL3M9SSim8TdvGXlsxlhrZEpyIjBfqvgDzkYzbexEVYHSqF6cQpNZ%2BrWEAkzeRSSpZo4qx6b6TdWqdsDxCRY%2BT8Xgpbc3XMUTH%2FkNChKXLXaf074U6hdKOR2%2BljRrAoTCvrkvl5sK8t06tVryhnPtRWs2isoGWtJBF%2B8RL2WcP%2Bzs1uFG1chRnY3Hnj%2FJahqjw%2BQ%2F5CDSNIvL%2FvuoMCHm5jft8E5FjH2r7XjrrhN%2BaQ%2BHOCvbdu5%2FrsDg1yYykcQABF136N5BpTutYfgd7HR%2BWkzQ9gF5ZDCgq9lG9Is9Ve9kukBhJWFpT3KRO7OI1ZLJfFDg%2Br06xZHXF3Oo8zA%2FsJCTPo9fXOD%2BkusDfg7pI9UkkiDDlFr2PTN96aSYeE2q6uXPNREc%2FexlLJbR8AQx525NxfhvEKvb8SNU%2FS%2Bj8WxST%2FvrRtOgvYdZImItzgWxqWtz44n%2FiW9t5bCM1JwajG%2FDCygdi%2BBjqkAb2cPk0hDiQp2IJqfqAZa%2FKMshzcBhTTx02eNXDA3yoER81TUphWxs5utb1KfixfcPgFcCcFz2tuwMfvnQnnGe1TFRSFLZ64JEBV1iR4Nm4armObYH%2F2JK4GJaGbOTjL1VmN8NXsuW9CoyeyFHa0vo2VTIGRp1o3HeaQaxAaceC8NspFSdQL%2BKOYWrx7e72xkMFIS%2BOsNF6a8jdWP8fEpKD8T7ZC&X-Amz-Signature=b51092fade6b281e97ce97f8fca1d4d86a29b04623047cecab92f8a80d6e7e4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
