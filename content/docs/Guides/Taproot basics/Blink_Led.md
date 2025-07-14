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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SVDPJJS%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIC7o3VrjxxaEF94Q%2F4H2cquIWHpL5CFCOgKDUhyQHCVQAiANNY5Z3kI1X6DVGcpPyaPkyPja4i5BzaPl%2Blhb8efDTCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMU7l8Pr%2FKKO6XpTTeKtwDWNJfxue5%2Fhn1ZSaSmG1F4bCxY7%2FgCSbNbl8KCvYanRkQV752809R2CPGD7SNyPnwxtngSHN0%2FtP8e8gcKgRLO8mlBn1I%2FbQQWtBs1K8rYOnDSEuklT8y6hqsjganz8TIKuO3H2QaIZecpwHrGH%2FRmkrwWq7lUsQFsDX4vb80xO9greVR4q%2Fmo5dl%2Fndlh%2BNxFqT7478KCIxqV0gZXEdHLvKIq8ocKhovC1X901EfflDEicwjpiQ9NB4mniVrF9uSsNiaE1WptsH8CGQJkfG8goquRAVWUQDmjeI9wJCvwLcTUT1KgHU6k39J55S4smFFuQk62totK5O4sfkFbT53KbD4Gtx3Vm57rUeQ5uKAqA1YfHaQm28J2Ojc124VRFNt%2Fv5gH%2BQnh0QiHLCcy8fw0ew4xHGO3AWPsMYo%2BoRt%2FwgksgZLZ7MhZYASlGlWTbNBe2WwBcDzvjZG31RM%2B5CHlp8oN4rxVzDRpfkjSiGXb03wgIANfbxWfw%2Bmp9R1Ne0CPunNoK3nStA8jGvOfHd4c1OXw6FnOj%2FJPNVtnNMicyMj6t79Ukvs1B5QpfLPv4HeLdGLPFdziDItVJM1HNw1vsHVJX2cuddDe0pue2KMhc2kivjfRSa%2FPPxA%2FrkwsNzTwwY6pgGXcN9u00sLtiE%2FYFOM0dRHjeU3Ccs62DDxguu1dFQ24S1g9IvQXySdqShEcvyxBeW7E3t3T%2Fidr3lV8I5atfvCYfHz9qmoK48IJ%2FaIV9tikVVpAzuxT5iEAbG%2FlQl3b9qc4WG2OhATeOClx5HZxPzyKllzYB%2FBjqirSiLFqfKeqDSI9ejQ3Nu1TqQjUEqgJl%2FzcKeky4%2F7PefHjMBdDf4KWjk48pYS&X-Amz-Signature=bfbf6038e752d6452b78297ec03d8e0ad15820f31f88054087c6fefa26158af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBVIKRG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICpQ%2BigOnptZxDLnmdH0QVwbtrC1r%2BvgVX2f2oyOkn2tAiEA6fHuyAYdRxxl%2BqqDN8RgxtTNh7aijO0RaOB0QQ85%2FMYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIzclCzHLD4aW%2FXyyircA13z3UWVH4B3iqKn%2F2y%2F5Y1TTzdBSz7dKg4Wz4P%2B9VupWsnx0WnmnSyC1%2BXZpZ%2FDYt290hK4Wt1XsAQz216WnCKXPO0OhBKEnjmzzh7Cih210Y%2BcmPjOLl0wYb%2Bw%2F2M8X7wGQoURVTBVOxcJUXkCepKB7bsWq7uAb73MOICrev%2FWtNC2P6gVnPT6vQ7MkEBHiIb2kvH79RK7G9WrnC%2FIzh9DUeBsYN%2Bc3NbIOk8EhMUd1ZYjO4ysM60TMs%2F%2B0C8L%2BTOa1sq0V6oDD7mE%2BebIv9Mqh5lUfcuDdFfH94QtE5rLDqFqBHxPaTFQVmumSRfA2mF1W7Q3C26cwJq%2BL7N26uUrKrLOf7c%2Fjnfa5aysmO7RynC96XiCtrZNc0Tn2DtfU6cO3kY2AvA452q%2FHuiY2CzQ8Qpp1xVqwGjrQTnL%2Fqshn36REHJmF1ruOEDNDxMHRSvuXVJu7PAYK5TW4LJUXFWHfzJzQxmhWh64Y%2FfZ6cYFRFx6%2Fy9QEj0bBG2MqPLqATWXrBwGK1FmQcWdjStwsZqlNctiCDiwZgQVEJ0AcV%2BEq%2FzCnbsXKABhixBZNSiU%2BwEW6GIPdT%2BdDFAnOJXzjZ6cFFoHik063xEfofgUBUav3M9%2FYJsMoDSdmD99MNrc08MGOqUB5aSqn79kF9uqZk56z9w4AOZ4kkUtBzYk0xTWMP4IM7v3AndSvaWTZPwFz%2FAvfROZ%2Fm9213G45ypdZI9OMB%2BnLomvT%2FQ9MXaAZfxP%2Fu3mNthC8dopt%2BcwQbVmNvpaBgmf3fE2fp4kjSiTOIGBsYBKlPviDaolO1DraTpxIACr9qzu2eM%2But73b12ujf7GRdV9V13jSyW584Xy9fLAm3SeY9IdPu9h&X-Amz-Signature=cd4d67b5955a75bce66b392fe73148e2650f61161480e36b83c8fbc39cf6b0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
