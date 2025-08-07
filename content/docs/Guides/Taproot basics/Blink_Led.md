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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYCH6UUT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCOFCJLSs9kjOs99mtvPcuKw%2BnaD13R%2BkCJ6Dja0WkkeQIgTPbGqp6J%2FKAv5hq4%2FEN6%2FCR1Fznx4xSxu9JuxsQ1OKgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7J7s4bOPC7WImvEircA5exu%2BGq6mClsJLL3jmOCE1QH0vLsdazerZawSe0tOsik7SWopkg4vfEzR9%2BWIqMjper%2Fsgd21NXhqBRlcxnxw3y6srVdBogkIHSV8VRsfYbTOjkQuGx%2BTPgdM5m%2FF0SBE%2BmPXIu23%2Fx4DlW5YUrdbti7oXIXpNkMGuNvmhNK5j8FtxAjt%2B%2Bz6i5jNFb9QntFDd3%2FGHMpVcFPFYkX6ooL8Er6H1FOq6wWWvQMOhrBD5yeHswFEz%2FdY%2FE2GrKws9NHzLMN2fnRHc3A4Vs0Okwucy%2F3sS8lBxHRP7H92kOcNKLpTJ8fHZPSD8JWA%2Bevqeh891qGnHic%2FRgQ%2FccyLumsxPImxCqAppLXbA%2BUIegKxp4EnfL%2BzJMrMmzweVal4sW88tvuscGQe3J63x9S383ykactedi4%2FQ5KZSPmBl8VOhI3JwdiWulyvFyrroWG0MZ7j9ewjRRlW40AjGdAK7FtvTNo721%2BPMegPvT6j6r26sTZWHBliJjIUa4gAQ0H4cut1K2zZ9Tvf82sDlY7jIVowj2%2BQ09HMMqJQL9bE32F%2F6IIo7V77ylxcTDJNYofEfOAYgHuhWEzWaxoVj97XPdnPQWVIKyA1i1mCVck%2BaYE2HxgH8jgi3NnAvr%2BKW%2BMJnI0MQGOqUBvFuHazllAuRG86b2Pxuv3Qa%2FOZdkEYWxOxcczIrFNCzk6gZh9KCfgQhrD5ibEc7BsieLxRIex1vJXbQEVijaP%2BzksQL64e5Of3REExb16tZ5sDv%2FPx9x5IQ0mr112zRxVtHgrH7%2BkT7eRsTZBr30unae3%2FzyqWlprm3z08xICXYqmhAdett3%2FaWhBRY%2FRJrvvrjasWMMTXjALGQaOth7ffutoPn8&X-Amz-Signature=19b53912e9bed51ddf027bc7c01197868311f35e288e1e9925bf5880f7939a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3IGS3HL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDAmFBZKplb4czZA4ZGrM%2F%2FPCtwnyexiMZzdHG6i2jXVAIhAIj1tnu5RbS3JV4jHS1Rh25xSajmreD%2Fl%2FD4jE3dLfc3KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1KdU2s5Gb3X07m7gq3AONBvNJ2srCdbGRBoDXLGKqqmXwgUm8kfo1rYmUC%2Boi7S3OQ3MJa1nOGE%2BkrcCwH1EzTHbjLjIkxXQUealliBKcZLVlnGLy7eqgZMuI%2Bzp9nqb3cPDKmYVz3nfNcbLFFvPrRCiSk7TQ1u7R8vBKS3ZbKMyCi%2BJJTVHNfPWvPcmkF1SDWj9h1nTSbqFE%2FfO%2FN6RAA3hzZjka1dtGOlAA147Jckjei9%2FsmVv1dsN%2BWo22641JGi%2Fzw8ZGqD49aKkQ8fBHB7djTSlUSpeLV2B9KBxSNz9tTjBRz4BK5YlmNU5NEenylizylQfMeNdcADUdpEqY4Srq%2FKj00c3sKS%2FZBZnmP3SOwjhaL%2FgiBGEM9Jcb5BiMpTBOy3Hr6COnkedlfZf42yBeI3Be8ontJnPk8NG46SQ9X5YssHxBFr5wTftKNiJCaz55AuTdmqcWDgMRWK1W1dRN%2BtW%2F0WrCr1eRy%2BkZecai0RYcdYWkohSHgQP3p4PZfyu4t2rz%2Bspd43HKhSwojd1RjXzhVFqgclkuH%2FqdLHFq4C0AVzyANbbAetHWmXzEKOzHJajShKlIgKzJE%2FLJ4qawrsLHqIoN43Jq3OoJ0YMUU%2BxJlTQ6hsd7aqF1O9mwkQVkvCohai2JBTCRyNDEBjqkAeTAzYu%2F16hjQYTlwGRqY9TUnLkrr0wiW5YyAMIidZcasMIBTSYU7Y84DNiAIen2xotqdPdKAWBzz2oC1Cb59n7%2Bb34q8KKAsySLdFf1OgLphanQ8LquwjOxXFNDpiMgd3rxSFti7Bq1dYx0kfK0KBMLuGAjXJSOlg1dP%2FV0OGbAhExTJStDqWUUSg%2BQHcxyTZV37h3GFiqpMsZH9mlA17zvgV1m&X-Amz-Signature=6b1e40588fbdf1fd4ef8cc9dcbbc334bfd5eb36cc5b8a8ce015a0adfc4ba2c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
