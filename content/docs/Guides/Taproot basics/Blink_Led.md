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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNZFU52X%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDr7bC7qDKrUBWD%2B6ON7usCsRzPyw8um17kB1bIiezSRAiEAyHLFHijJ2J1RBzOCT7IpLbUhqwx7G4DCXPw313JIkfcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7fUTLsJq7UrIfQdircA1KWA0CO2GyTaKnzVZmnNSpZQ%2B5kY2QWGnuViNWh3Ks7F6bhYJRjsyO0%2FXSH0%2F44QLhwV808N%2BeK5MFmRMAQYhgwAverUpFKTX1osJNKV0OG3PsoDV%2BtyXs68OaD1Kx1DK%2FAI9B8usARUVzKJdTusdIjyeq%2By4B7thXXV5%2BT8qxo8hbpSwr%2FiNGJ0TgVuPGpTLDgQ6jzPwUqsdVdmONJId6k9me6wWXkmyOqRo%2FUbAP3Wsd4c2DfIuZ9A0pNKWLtuyaUUOB6rtnZ5qqijt90z0A1QaB4k5hYz0op7ZbK%2F0TDAYbKQVvoOFH2Lxy%2FMU9MjR7%2FGZ1K7QsEcyQ%2Blvku9hurWnNRHYP761Q%2F1F4j0iQE5Oc0GPS0CWwZxF0lx4JDNnlJLIiRy6JmwH%2FLUIutt2vUX3oVS5%2BRmCpvMdWJtVXE2gJ0KueZ5IEmYaH4KTK3pbsu6ugrG6ucOy7UozNuJZg3uj4e%2BguelnFXPjsXD5RfSULQEmLtAH96vhKu9pNc%2FfJT8WArg%2BMWKaGMhWDDxFz%2Bo2kgMXEPmzMa%2FksEp2bZS1cLkVvinblkpAzb5HCDqc44wXSgKnMIBTzLxoPBusRXiTdFXLiKOJPJBk3T3xeLCCxdcDznU9W5KFb2MPHYzsAGOqUBc774Gf6LVWXKC2XpwnYfv0dUtFn1KtjotX%2FxW967b7UBV%2FoGglsHWkmRUQqgpx%2BHzt7w3SLnTb%2B2avtI5tCsyC4QbJ1V7GdvXtxZrqRa85ksUJzdKpLUZ3NMvtlQeVIQnUv0almNZjoYX0w7hjFJJN%2BP4DwpiCJirfsoU%2BUzRzsiYkngHP80amm3PzLeCxfFWdANB%2FM%2Fsku2lRtnzmZCTmvMIb8U&X-Amz-Signature=425bed8dca532904076aae255117df5440c91b96120308f03bbce07976ba76bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRMT32NA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC07BKmqkD3BOUSignPh1fWxynBBoPrB3PDMCLRFD2FSwIhAOFcqWMN3I%2Bg4Ca80y6%2FyI2fsdMszVE9A9YKTIGz0C8aKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7wXVamFkqQM7hFe0q3AM%2F%2BerpAIORaunqf1ExRbwGzzSdcPFadnSYUOZ5pGZKz3XoWNPu5mf5cALRU6AWIKXoBjM7VifCGIHg1IqU9GwN3VyOlJrsItP0xuRW7W0xfIUBZLh3E2if3g%2FNIJf6Msb62HdvJwKM1JqrCoV3zjRg8C6cJJNId0K9eLLcuXCBoMFTrWl4Z%2B92dtd0x2bxr9ov3pFbu3ni9Oc2MdHZtJzILLGUbK1tWxK74%2FWZ0eFRG0p35eF%2BPhouWb8X6vI243rIiNNq0cJR1FG1%2BAv63ukgix%2BS2gDmr91SwvbdQxJrJmnbuSZ92BJaKo2rSLSvXvw486Q%2BQ3kAcDG0M1Z9qWFFdp8midJLxO%2FBAm32BwMTKr%2FAOQ7Ys9fHiwkS%2Bn5S%2B%2F28AUnSt50zDKKddSfj0KqZaaGTccmzoAAJbiI2h9yUkoCka5lPSbCF1oEEPJnLitQBb7Dp6rnB5pciM8fHIl3QCJ8fh7KE0UE2ChgbOtyOdkt6FiN2NzEl0I7cBinSye6PBVj%2BUH4kg6mkTiBq5GiyihUD4rjh57TvaqdJ71DcWizyNcOlA0WQStxyywNaOXvWbdnn5J9sVCXSSxHOq7%2F1I4QP5adP5Bv6TdaXrD2mPAnU0TFJ6ccg3r%2Fw9DDd2M7ABjqkAZXVIKg5TwwMLM3XhLbUC9kLTBBnag8wAhNcuoX7lcOj9yYrYDLEhVrYc4RJlWr1qLm5hZXnRyqs9U2x5sTx%2FaEgiOWrQ%2FsZoUYxm57Z9yP8qo5v53mXODo2QFTIQr8djV5Emf2quO4QkKQFqMHMgr0y3WRpUFF8W7F5yvxN7raDq%2FqNG4L7X8WfC1TwheCOzhd3vJJrD0UDPuMpsEzg%2BHQn7fj3&X-Amz-Signature=18553d75b1715a759a856f6a6ce4fac0831a028e3b8e6b5e2155f8e2706e8941&X-Amz-SignedHeaders=host&x-id=GetObject)

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
