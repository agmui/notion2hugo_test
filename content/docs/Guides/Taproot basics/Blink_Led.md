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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWHROZSJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkrVRIp1q5IWmplaGT2ueiVpdT%2BcF3OpZ3nNPvtUYieAiEA9P5Fm%2BT9dmEv6HaxSNqCHtHAiHisADIBlV%2FKXBPLoZgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOD8nIrYcH89mMcADCrcA3e3sKhPuiaSmnc5zhgwQ6LqRuwmC%2FTDZwV6hdDzjsELUoRdpF9uBRXJAGcmvyMyY1LiW9%2BwooG7muAssUHAmrp8XuvjdMiiCLanTUIEhjLe9MuXvzH0qt8I5ljyS0l%2FiI69zatHPTju0qtW%2FNlB451IjL3iVsw0zUs13A%2FOzE6YeP5qVSDYO0MfwfaE0Fs1ABt%2F239VTyBJuG7ZRuCprCBQhadBuv6YRFy6leCvFSK1kUYAr%2BzHlrkjAWr7%2BquceL4QOI8xPVDpY3phAY0o8JxOT%2FcJg7tRyLDb9zvQgPqtdZkXAU%2BxcTx2iQmN7qoDLjvmBIpCWG%2Fl%2FvMinJo2%2BTlZCtS5w8kFWy7gjlsn5zGyeQbSX9MRLC7H%2B5b5XDzDGKL%2Fa8Q8j4StV4cZTLRkcx1Qr3YDwa2b6CHJa4GUMLGZhXzXYJkqVrUjKSxIbcivKmMjlksKMXfiHzT91kBAV1i%2B5fAvxVStH%2BrYrCVzB0LsxZsxrUb58TI1fxPU%2F8AcYGVvtC%2FN443Q5ojMjw8BfYi4fxJqssv6k5TE0TkLjDIayI6XLnBRvG2A7y8SIRf1tpuJV2FJC0gU%2BK8SCVg9bYNj7JbfYQpET2uRvKfTBOx57AjpxjqSscjJO9MWMJmWnMIGOqUBpWtRiqDXV2tYqGsnF%2BnnEpHri9Vus0nBDK99bzZnt%2Fd4tgEpKLW5GVuAPLEjA1sXFDaYmpoi68z8Jzi4rxJs3mCRaASxPyGM29BFZzPIPJ5PSJ0blxoRgRtr2TDMpJZIiVyhEqvxBxJPSJwfOEYfodm2xI%2FP%2FCpXXvIqYPgrs1ESQ9B6XrG%2F1thugeueDJzuP0fUJIJQa9Dk4daxAjqbLBrXOqBu&X-Amz-Signature=d4b53cc3d99c00fb4834eef1197374768a0bd22ca5e4b24065a410f05c2fcb5e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6UQVGHV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbWKqqaRRCA88%2BLYpqt7BnkmJC1mgSLDi%2B%2BS%2FC3FuZSAIhAJLpTlqGNM2rKuNLhh4HkkXg8Om8pbDTxP0Gxt9SUDWJKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynxyNR2K8b5kcXLxIq3ANjEEn2XTWn%2BeffVy2HYiWGJK99pqinL5kDOxavLHOp%2BKuT32az54mwKF9qE1Kr7flmFjXjkc2sAnNuay9mmpmEgaWXaPy8KSUMsejXzroqe%2B5oqfpX5FX5IlaQ9Q7kRKiP45IErgIIoi4ChIMb2l6f8%2BXIGnBT81SDe%2Bcz2rj6oWaAlymAipNQm7foXNsMDAeT8wON7azS0yCqMFpH6fcTOLtg1hHDaOrc8k%2Bwm5u56Y1Tul6F%2BObS31koA46hJ%2B2E6boZnT5Xkcn20NhoPch4C0bpaITtCPJj2h2ri%2BpJjQC%2BSimyoJA74%2FH%2FOmrBTHKOC%2Fgx%2B2W76Ykof3RLeP8sJf%2FH%2BWVZhnAcpYOw7PTlLSrHR9M778JcBarwJC51sN8xvhcOLQM%2BdXH2QUx9hPPoA3WCMwG3xoYEt3o2%2FZY91yRyE1kp54Gn9Ccw2ABYz%2FxxaJhX0QD%2BYJkheVg%2FeLlPZqzariwphVQsX3n3ctY20L1jbJImDyckBIjr7i2iJPCgHZGl0w3bYBsLO%2F2k2xCDX0yWWmXnVkuk5p1s%2FCqCTgv3KXeEsEzabGTp4mJLIyt%2B3KmNj27yyAbjpNhQR%2FNByShQP0wSlfuKFEDQqLS45uFT%2BAei1DvuRXsn4DD3lZzCBjqkAaNhkoYt%2BVIPm38v1jTwU%2F9DypLg8QzS2jV6Dcg%2BlYT%2B27gXrD2VEw6H4V3XekGjD0cxHhMZdQyzVk1JUfTv3auEAl1pz4KY3wt9YNLoVOVSvdZCDhTICn2hnYSNX05plYZxadQx%2BV0v%2BRWR6FJjTTFISNX7yGlfY3PUN7Oe%2FWPlKfKOrA6Ia5StkqOC3QctTJOHfRROKBpd01L2bKLe%2F635jfuI&X-Amz-Signature=a7299f5410d1bc5f9c0dc8a98c7c8a5912e2ba34b48e2516e602f8b2fe388b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
