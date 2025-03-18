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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUIXDXMV%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq9CNpfpW%2Bf4vVfvBjn4wCbOk1GrISuq4sQTg73MGmugIhANNYoq7jhIorV0LIL6CHyx01ONNOeiH2fTTzsh4MZszoKv8DCFUQABoMNjM3NDIzMTgzODA1IgxGn9A%2BfLyIAjBImsUq3AN1P9Kz%2BxCw6ERK0oZjA40Zg9xm2VYmEQZiF4a02hv7t6JEc2SYSEva0mXp4EsAq0rsl3GBp65pEgFidSrCG5DPXrVp9Bf6HyNLhzdvlUh5FxDmmSBMCWD041PpufZGaekxRR8foKsGEEejc32rgGIr90TCdtfGp0Mhl9j3c4XfoPQveBIAQ3zFqKwRXOqOKcKOWG4nBfzzQBqs18u%2Bqd6ZJR%2FBTRrZT3EAXb5bq%2F5WsPrgifHgxUxd9RIr%2FgXdvDFR5VTkRu4FpI1O%2F4JGHMoHSl6%2FgUm8LbWq67%2BvFlLSXMEUdlnReDbwXTTCU9OVLxd0pqQBC9IF1tR1MtAQadIXOpONioUHgvfl9sgbVF43F48rOsFtM24cGO2Sct8kfRuVeFqywVAzN2U%2FM%2FBTCTKkO6a3x%2FjyuY9QaiTtLAiJ07EB3YiP4Hb5fPYULhobA3sR715tsbwB3F4CRetYDGvYGIU9jNYwMXDppeig9M0RufKyiLNZx7%2BrfzWJcPvk%2FT0QwNpetHubR12tqLxyW7FKfOXEDHYefYabd7JqjlM5HOMkNMnDUpLOJQLaTMP6c%2FNZqJQWI8UTzwrSUuqJy0Uh2d%2FuvAul6jE7h7JoUMHHMlNc75sNtO0sBRIc1TCi6OO%2BBjqkARVSDIbGZAPkd%2BxSkoRVTwmsPoDZf3SYm1rdciD%2FfMBU5mnsc9POrOiCMNeQPdbu5lQR5N4xJSxJt8B1p4Z5zSHe2jPPs5qf%2F7zFGXndB8cBkp797II22PczJxsB3PAQmEzm80naqNr6D5kdxoT6RXVdBmhgDSTGQGQUjzzn9ELPMluHVA1EwSFu%2Bs67qNq8zHrKRmiW46sLij5ZT%2B2trcP%2Bq6yq&X-Amz-Signature=6d019b167a665061799f7ade7a0c1c1aae40b0ff2533668cc2713371e4dea99d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDMJU42Q%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8gomgtB3LFz7mveYHMAstTpaLr%2BwFRxP4gnGcCu2R6wIhAI1RtycVRybyx9cnQ0aktbhDcPND9T6EZagt8W3QZjMRKv8DCFUQABoMNjM3NDIzMTgzODA1IgzeEv59KcaDUkekDgoq3AP4UhXPq4PeaoPnn08Q5rwt7d7bR25EFfTl5IL0n3rbL4P8VuObGCBHAeEJk4zbggf%2B%2Bzq1CasZqsTMcJ9sRVM809EqNNC0UKPsKWsCkLBHOQcCluh11mrhIhlwbf99TQwAS6HLuoZcD4L19OrU7b1nZzmWajjKsRJumAwCIW%2F%2F0mybLpTmFdfbTIyUI5kzyunlToaqmV4vvYLUhhYcMyWSpD5NCa3yZAGuX6w8YrSJ%2Bpro0s6dKuW4CkE1R7NfU4fic0DsLqPI7yuqyq9Mf%2BXQ5zA0HGKf%2BXLv%2Bd7tT7dc5%2FE2Qdy%2BPHOn%2FA7FRxZc9efuqhO0C0ttZULu3SHw5WUJ5mHOjLikHzNSpMvCkmOv95V%2BNN5BZ7fhS5saq3f6gkZiHtQN3MXQMKyuk35WQP3p2cUXNrmTPD0%2FqMZKgCTRn%2FKJlP9M0JepqvumJWAV60%2Bc76dTRiXwiL9r8niTp6sTBS4Y53oGByVSimbx0%2FcTdXlTh%2FgYTE%2FDQ1vfZzrhYgCmaEd8ooRtU2%2BAuAx%2BxPxI1NSGmdZ%2FKO%2FZlIBge8w3y3S1zAk3s%2FJLVI3gA7oHPsET7QbNs2kk9MxuWlXlrhSDwbRs3eue5LUegkV2W5617zwXEfzM%2BRTMenOiXzDh6OO%2BBjqkAXgE1qEAskpcmD8npkOXk62VEtRyTPD1H%2FlBh4CqXKhYfWjAb4P6LvWcHdvNS2NCGYNEzbAuzvJUiHpdouLn6LfPHZZijnzeKSYr1v5lSgWGAdk5X5K2vurftlKGpwQjSY0M9IGNV93hRggvhaWN0ZvMtlWRHOoWMJ%2FgKM0uR8RwXWdB4HK51PTpKgHmibDuYRy0r3FNx6v2Iw3vHGJ%2Bd2KZyC05&X-Amz-Signature=691e18ccdd259760068417931edf936f6a1af89bf36a341a99098893bcc30d12&X-Amz-SignedHeaders=host&x-id=GetObject)

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
