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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DK6FPYC%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBUxCxdxWE%2BJwRB6NgfLHevH2VCdcCynngVZOQQZ6IJgAiEApb8otzJp1uu3ePjFfoP9j4N8tZsWmIJbvNXtbJpe7c0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCk6Ll4cbFJ7cx6rUCrcA%2FynrBFpH8xiVqqbpwcDZGwel6U2s4WrbpuoQXPm3nmPvrLoTEvpiDGWdugdEwoIGPEZOHzY%2FVtC9nn8e0WcuvIjgnkCtgkhtNilyivodECz2ebqzf4VbXH17MzZ9vdxY2EegsqMY7vfgl%2FOgNKPbgkxN%2FxL0z6obwgKJye2TCIOvefqGSN5HkjQaiaV49EknVDKK59bDI4KCy7q6hO55baGljP%2FVuQaW1%2FalA%2Fz%2FCk2K%2Bjy2AO4Dp6bR4H5sFxPHFX%2FXNJBE03Ccs00xMBrcvMxEGwRMvDuQrRIqJ8UXkIYqDZSshoVoNAKs6VmgE4A3hFfh5AmH1ca6QUVyNo4mCQXjFb9CkvIa5IQkrPwflXEnIMzdvVXe9MtusuRn1CaHF3AFFJtvOstt%2BDu31tkJCvMIsCIsxK2%2BJX9BjkTqwnqHEcxR8MVudDYQniHqjdPeZYXWoQ51e0WHXc7oErFLmdmbqK69oj5yeEXItxqwDqi01KZF2YbbwX8J2CuhhOvOPTQKgx8OwQ4jgVcJ5dXZFEwZeh75bRslKS86GCDHP3b4MAxNBfzGM9WvUmW4x1ErHXh3L99h2PFud4L6xAuw2b6MBhSvJ9X%2FiH3vBAXzDp2kBIwt2Bx%2BmR0%2BpiMMMv25L4GOqUB9he4lMoMR%2B82NnBGaunxFl4EfmBP4knnv5lCAYd3PY3q0CjcnFeVWsXMFwSLZ9mbKa%2B580buQ6lqTq7newkCVkOo7sFSCtsPi%2B%2BhdpRdhwCWVkJ%2BGUXSKg73nu4P4K8ENLyf42y12FSO1RcyvZ%2F8F6MPIOW6x8eHBG5ljYXkafljTcFiz7gdjRvXORTuG86dR07cMgJm2kiymSDGdUkE9WIxxgbg&X-Amz-Signature=b9474e0dcf77c1874bc4337b75c0dc7910bcd46d22220a03c33e21c99a0e9bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQWWCU4T%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDn4JEr3yVf5w4QRdc8%2FGF5dkruODtUE%2F5kLlbpiVQHiAiEAglmf27Yb%2FFKNQ8hJaScuFUHrwr2srZyI37N47AY9jfMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKUNqyZYcnGQQkO%2FFSrcA9MsKE%2FnwTGL9r%2F45mu6P40qUeD8GZQ1D%2FUsE5PbcBlU6Umay9QCvypc0gN%2Bu%2BhwX8NBnLEFYMj44CKWo7ARgAjOJzHTOgUzqEQ9pSHMJuoYlLvzRpa5eue%2Fqf9TWgP24QvHpCfgvZGGux0VUFjANXpv%2FxK7VIklzmCXKP1NfTd1QzqTFSFtd4nZCubgNQFyoPP2627mDFcFTiIQRro976igqPFXDHdxD2OGS4qKAtK4RcrCT4PKZ5LnvH%2B%2Bt430UkY9r0pqmUDFJW57lS6PbXZ6VOSyl4LqVGnoK%2BBAtIyNW3Hekoxgbm0%2FIiGYcxCJtRfNAsJzpp8QomAuts5%2Bwq2XsGQtbhSIzwldt682dsfWMZu%2F9N9rn010PJVbyDTjQ3Sd53zuNnB3RpNyMfEyJQD9F2H9VtlTHKPACABZ%2B5qJsB%2B%2Fhs9IDyywOX2iNNyf%2FJN%2Fx%2BjvEJwiWbEGFZBNjARN4x%2BMrguJ3bQgAyS5wPm69qKQ0QS%2Fle857GmEzL0W6oIwtBPNks66tfdkJ8ABsUMxumRyMe4bSv5Y%2FXIkM2Pp64u1KsFyMOfz%2F2unbgFQLb07fphhg5SC8BpzqI0XefQFsPwbaA%2FLt5%2F2YSPId4lJuC%2BDXfyF3qcwpS6lML%2F25L4GOqUBGFIRBj46tUvbKNz5G1JNDuh9XagDFB%2BtFx72%2FeIdHZ8BX2CD%2Ftc8Sj%2BS459btJMSpsWrTMMyUEIN5P1jkkVMxNxjTaActBgbm8O0r1Eg6zwvHdItepBrdqmmNyQC5D5Bqnc3ltdhe5LF5MAcsc51M3elilWa3auHFkotGY8uwdMlw9HIUPzlhOam89miAUGnALRtRmlIPM0hdbGoqbR6ucXhJNT0&X-Amz-Signature=6060f582a53d39351b6fdb130ef56c1ecd57f787cd5593042aead684bffc2b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
