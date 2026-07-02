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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LKEVF%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFBlHY%2FRtWOh34M0OanZC3gZfyufYi6IcNr%2Feyuj7fU%2FAiEA5y61XA0YpTuYJD%2FV%2BaTuArt0xGeBC3wl70BSfC8Jv5IqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOza5c7fMUSBode%2F%2FSrcA51fGajJYyAyPfiYDuKwrabK23ZVkFuDd7VOljLtkClL%2FgTele0iBe1FBBtzVyVXh5yyxQ5l7PrXdYB%2FJsaoaWZ2MEGa8aJCYoGbDss4TEgYifDAGI7hpRqFn6iu1%2Bc20DSMRO34OFjoMy8XUhpYJJEun3M8FxgQ%2BuUDyGlLLxMd%2FSz3EsO6NaUIbkwbd1g%2BE5FrtgVutGbKrcmYhO%2BEnwJe08uiM6jB%2B18hdHOuMVjmYuX8wSY50vIMXlrM3zgjS9xQi48opU6sHuI%2BZEWyF%2BvygPeON9%2FDDWTARcj38X%2Fg90%2BKmBjw4CHjooBMoBBM8WKM608kULyD3p9Abl4XQKmqLOK22aZgqNgjDemrxzyESXMU3%2BV9qYcOFeX0Zm6Qm%2BxpywEZvfElpOPiWHYCsnpBPUAZla2wfFA78Rg6MFHeKyxxt3SUGUr23aUqauCib0acGSA%2FfFMbslNYaWCL7jM0N6vz%2FfEHWCsSlRutCf3qDOqNZGCXpGyr4JpHJ5%2BssNtvfb9enjnv5LAHcbY7Y8bmIVU75bVBfEFGOSSZ1%2F%2BDxapP6I84QSbJCiheFCW4Qbedbs3H9D5I%2Beq4DV1%2BHiCnay9h0mNBXSGubuqnhlOOh9LNnox%2FKk053semMP%2Bil9IGOqUBQzo9EjGM0dJDFuH3P75fL9MXcCZISHnjtDoNNYuJ%2FfhMhSuirdWzd1LGvmxFnNz6GIqmcpzBKi3sMzK6Js%2F4SiP4G4UoRUE1uvKqvwz3%2F8Umnfo2HWNGMZnEu%2FMSqj22LWQHbWvRnoQ6Hxnlk2ukpH00BJmHCIRfRO6HmI7k3wa%2BMf7i9jZrXEtvuRUZKOVtihAI%2Fy1n3RCqXrbms7ufuY4yWetw&X-Amz-Signature=0cd2d3c28f3e3e9c1c641e61afcfe4245626f1446e43ce525cea4ad511e21a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZGHX3WO%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDvd11D4semzx2L4%2BHWySxeQfBv3v%2BXaFWr2ZWhLlKRpwIgVA3JORWSD6LmxSAhkA5ENWIsGCkPZzQfmXkWFjJ19DkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL247JAU0oMK9QfSOircAx1wpn0f75tWGyamAflmjPD6Nr7fRJsSS%2FQwaUPh9gtpCIRLv%2BjIt%2BHh%2BIcc7%2BJW07EJqPGuH5tPvmVj4Sm73pjuRrCesQmuWBZ567mb96KR8D1AKYRFz0711VnX1ikcLnDFKt4rZTxCK1JgVnaMjlaIxLJ88k7pcPHk%2F1JTWOmVqe6lbKY7DPPVUHe0zfA1zUr%2F46L%2Fi5ZBcHf5XVGorNJYiNIIXlamlY278VHOSNToUyZPsbOnjJcApUF1iLPVvqduqi4nl8rjI5BQCPg6DSWrplsNawalST%2B3j2Zkk4tH32T%2FNgt%2BEL6aqo0DFIGfdpVdteA2AGyKPbm%2BoxYY70gKzPJJE%2FjE67ImiSkK996Gn%2BHnwmYye1KQkGdHmabWCbjKqoV3ilDTFAumV2IdMp1lhX5v9q5BBWHuDgUtaH%2Bm62aYClwrLPU0l7IuoEyDUUKGNVOBf%2Fe%2F4BEzRD2GZyNZsdURBma47cMKNLY5aLlO%2BG6JBXR2w%2FI9yj9wYq8cqB1EIWxsc4eQx0v4MFYnDx4w1HZ5kiB456N7%2FNptsOypqz4VKkEXKHWbKCTispgrBgCnQGiqyX2cL%2B8029s9mCKzlTLrNZHox3W1%2BFKoFL65rxpGTpGwVp6i8UTqMOyil9IGOqUBiaSuOY3pyG3XeuUPqvumYV1FnVVSaPJ6di8IbpDjLglPt1L8Ql%2FdfA%2FXh3Waoy92IKXEwLSZxU1zU9BTz%2FAaBvaILXWbKPWuKuFDg5hRVJsMfjTzHOXKfKeKsfLudr2M7Vbu8e%2BvWwhGReD6XmOLaWfDStTJxqv5jbBznV85Q8x2rDoAmARILbLt4EtHHgcUf7E5rJnmzdwT6hQr624K8jMJQzAp&X-Amz-Signature=8c4db73fee100c1bbd1c82695c7d244d8e303c61f5b90597f4dea779834d0935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
