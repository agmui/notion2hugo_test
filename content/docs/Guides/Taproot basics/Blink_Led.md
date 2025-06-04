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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466272RRCOH%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQD9l2WyhptXdsi%2B0QNpVNsLWAJtcsWacm7HTyXwSwEKFAIhAKBVC%2F6gQipln7ixRQ0FminDxt0bk7UdP4kWk7%2FwQ2a4Kv8DCC8QABoMNjM3NDIzMTgzODA1Igwe8t8gMvqTeCxUKgoq3ANJraTBdw%2FwuwaqiWO0Z301rsW4d4f30d1XPzdZiWu3%2Foh4ikGlXE%2BuohLjoPYPCirZsvzDS6m0djM1yEdrd1oLtEnLGsy%2FcRY58XBcewM1LeR8U14h3qOX6MTsVAVF4f%2Fx6LsxfD8n66wSOH1GpLLr5%2Bpj6bl6cSfDf9x6zF5ef16CoFBaqlXXFEfoXEqZ3UD0Bq%2BoJSAX%2BZViO6RNpK3ummgoug0poeHNZ6yixsLn%2BzWjmawJ7mL4fAdhJRUPIxzzeZgyjBnBvA%2BLNG57dXqn1QbYvWsdd8N3NjjjDAfOAx6iaRTqcXtldfbbrUf3NooF%2Ff48MwVpLfcURCaDCLu0Rm5oxbfkcYeSXjM9G4eVO9KTAHmbPPHPPWUsreK5AmC9CaxZRZWDUTXfEo%2BeJhTgFNsIIk%2BkJhMFfqDHCS%2B3hvBABTVxwfgNCQx6aPhoQFe8jVf%2BPLfWiCixTj2KW4qEowxJA0bpwv4MzSyILzgu4FHu62cQ89VYwdnV0zvIsQk1up%2BBAOXiP8UNSBMOjaZtnlShl3uPcaGT683M7vEpLqwCGX7A5HZIyUKdPxomCbKwES9zFvTQARPWNbnziaAMstv6VJriA02nwsFVkG%2FipsgmMo5X1S8nBH6aCDDyqoHCBjqkAZngYSd8vckGVoGJpQHSRXcycKgexCkFHD4nmiJV7jgLBrjkKuLCJgDPQDHhEokkecesA5N78M3gEqqzTbMSB%2BhQi62a4mko1o97iQHl1T2krrbCEM3UVOnG9fV1CGI%2BvxA3C9lFhDg%2FqQNl%2BUBd%2BXAu2Of7cKkaMgOtTCWOlA4byAtvbc2Gjc5V1Ma7rQs7ORtofJVO%2FJ%2Fq%2BXUECNKvuqXW5J9s&X-Amz-Signature=843120351fe836e1daac44cae5f59587db02015878576d402d68e4e076884475&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CAYHY7E%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCk3vqD9nZtj2DlZqKDHyyF6gCtsqfqP1cOI8c3KT%2BbjgIhAP6S46nnDqFyCtua%2FGFKg6LqyA75jr9qH3xAbNiyM%2FmcKv8DCC8QABoMNjM3NDIzMTgzODA1Igw9wc8T%2Bb4WEOe1r3oq3APjp7QGd9D6X6QSATaGaIdrn88LXDunRtBNTxjuqqZeE13fGwabDsXtco%2BhWCqnv1lDtsH5GT%2BcUO8PDISxQR6THDF%2FHPgFLbsqz9UqsD4a8D6Mq%2FLyRuQH2mthL%2Fjhfs4RSfpHEKZ8DnRmDtKzBYDDwheoIXJK3LI0t3E8et6gHkmBLuzRrCwyU5RPc27qotMIBzbh735debiumihNNPwzzSgNoCkUtyVFncw99FRAsEUutiR%2FH5rA3II2LeprEysp9sqypLM26T%2FvGTPxLxkuSru5fDjzXn2s8BGly%2FgiGoaE3KBRHMNGeP7hcotz5gvgr83EKS8UGTh1DNPBvWNbNwa5yCmPJyVI85qm%2BJEOGaLIoxobmzLperESx6GUgnVR%2BpTAOmp8iuoVbEBAxOAMlLe%2B3rbFp%2BwqzZEZl9P1KGuICu%2BqmkXT32B7c0za%2FffkK4dxwcA4oRfL1xl8sZWPummWChQKgjpH2b9XpJIIMi8mrst7ieq96XJcLWFO%2Fc3ce2eua%2B6ri9m9OdRN3gYotOZLH38xJ5kQc6HyMYwSCoLrqtrF%2BWUEFhy9eAel4j%2B6UiUb1BN5vdfjUlIPFkCueSvHq0WZA47UQMwpadFSNUE%2FP6XlguFwi8UifjDEqoHCBjqkAd1evP7xemwnFZ64oy%2FDMcxMoM9YRCplYDq0xHNH8qxPgefJBPgU1qFHsouYioH5sDw9%2BA4qSlxXTQxobdw3A5cOJmq4ioUcL6qv88U5JeuypLEzru%2FsC7Zl6Y8V5%2B9f4WHNvPwTl1uRxy27Oc1Vt3k06XcQ3G4iQOi%2FkLqEJefS2%2B6au319abJL6MnIlpDOPKzwaV8wGCPaOLEsJFxqZYpyVGqw&X-Amz-Signature=1091d556b979fef32446d01b202ec2a6907bc423c03e4243f3cdafc6560c0388&X-Amz-SignedHeaders=host&x-id=GetObject)

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
