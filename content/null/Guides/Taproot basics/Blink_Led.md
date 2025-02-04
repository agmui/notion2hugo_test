---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Blink_Led.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATPTDBG%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCwwpMdRaHTmrhCPJnS0imugmoM7SWcO1oOcReRQNI9PQIgRvz5DdM2SwxpPNZp67336IeiiguiLiPXLX%2BkWkJgFjcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCdaPZeGWluP93LHfSrcA4ZdeL6hGy0UAgJ30yVgxpecIJF%2FS8xPoq5a1IjMQoKDvI2ixRqsBluyq3Qxtqjve2FEjNCCTR5y9VprVYG2FeznSy7OVCqVZ0m1Tgjz6GMdWmNdq073BfxzWNo9fU5UEbRHwhJnhIrsGCG%2BgLDndUxwpHmwF4ttUfX%2FmV8twqsDZOGvIKOupppYjv5bvjjvlIfRvDi%2F0Do5UDjh5%2Fu6GM5XdCgcUn2jlmhdJ0E28LzoimJKVJF0e4AOsmDgaGsIR0e9K3T0avT2jqDlotx%2FcRPZJSmLz4j6vBpAVtR0D7udQgdvclMO7mrcXykdv%2Bd4nkXZjAJt55hzFxBoTBv5HNYSugQMg23kkdod76facdkkhgTDrr9sSbQwEZBHW8fWS4NHJrSpMQYRQdz2OVab46GE8c1EK0mOGw0CSJQyvcN9nU03gFRmB1Ewe8NssPZtr9M4NnzgKK0VKXOcATmyPkasJQmtJwTYwrblM3ezfRMLwvHVpPrhmMwwTTAE5qVOsDfpmNh9myOskFeynGcE4WQ5ooe%2FFjzvB7PoJRvGwATME7eIQWJuT8Jx7Ic75n5QFflrIOxa4UfA40s89IBNP1FThdBwL%2FpCsV1EwHPHHBqYAr%2FWflLncW6tDfyZMKD%2Bib0GOqUBIeZyL4U4v2YmWHAp8oLRJhT1o6gHd7rrYNAM6BPJrbzQ53fEXIz0NYfHzk6210avWDARzbFzwDB4qBrmKua3Uu2FcGSuqaySqr4zMWNpt6pJR9XVPE4Q%2BXpV1CyZwdYe92dBjpvwhstrd6VIcZf0ArwysuNYxrJph%2FdzXkI4lI5jhov8eK61ORZnyDIZOi6QC%2B7GqRrKtCsoM2jnDq80tQeamD4E&X-Amz-Signature=a821a64625cefb3055ddd8310a29d7ab027eb7c63632435d0a17fa53fae4e582&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTYSRUNY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDHJeI36%2BaMO7ycIWnJNJTQ1ynCAUQVOLxa2ED3Lq1XLAiAIobEBv1Pfhor%2BBLPPbIBRNmfvzwS2Q%2BTR3X%2FKWvDFzir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMmWDeZ4UUMXp%2FgMl5KtwDCl572dSYH9DDHkUEe4eWgTaOhmFoKmPXkAITav9IqqzScDwGuBjeOW0NE0HH3Gl%2FXZqh5PtjqIpLggUECm34deYBLjInj9lIVpKspwsxPVnOs%2BC0YR4XSKvt%2B8WxMYCHnOuJAO4Q%2FilaO9ujljhSBYF%2BeYSAEP6i3xIx1pjTOnYmJQzBhLMktIiCFLvM2HmH3mdY5yfbkri2k5xurH2fMoCdRblsEopiTZK1nBuoDEZDBjQfLJVw5t%2BOC3kucObuLOqY9km3PRKjtf1NCJtt9xEbj3Y8oCEfC8atQBaK4yW3EXwG3y7B5MPIMttbRdHvPB73qOKuGU2sw4HyFu2t9XnCHOT2zIgcL6PHc3rZjeOV7KZGS5sTq%2FYgylBn0Y%2BcdagyZmnAyvQbv0oVTehqC1okrr5R%2Fk6OuhrqtU7pmX%2FQUHgJNjqMY1OW66AKP1gEzXVB08qh9S6ytToYNJzfp%2BuyUMq39FatRgp%2FMA%2FFLB0y16ArN23ZG1wgIGAHURwrdfkYfB5YSbGZGLmuOlW2p5AU65VjVhYxAPerNxPxQJAi0etH4sp835sBeE8MMchCBCImORnwdaSFZ8iPt%2FCiEancEnvvIot57qGWPKK%2BaHjDpWgFaMvehQZ995wwjf6JvQY6pgGfl6LjW6g4BJ5SgribUGNiV2%2FhwhnzO0twjfD%2B8Ae010mT2H%2F6ixg6n%2F0h75Vll9SeDE4M3pgpYgvc6x0NArQ%2BL63abmYFnUUtV04sZPDtHiePv0oc6v6oy9X4DfT1HZEn2fU87SQzTWTs0eUc0SxerYWLAV%2Bw9DuQElJPnqJq7rmsEDu8ex3IJM6gZihDPCwT6HVFGUobjhI0bvUSumu4yBPL4eXM&X-Amz-Signature=5bba6bce66908e09872363a73498027492b5011e6e7af351529bdc61da900f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
