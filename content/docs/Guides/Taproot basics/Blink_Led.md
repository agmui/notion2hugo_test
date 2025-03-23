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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQFY54N%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDZQj6bFIw6zQXGPTgsfyy9oXpv%2FInPksy0xW1aM4Ca5QIhAJPlk1e4wdqB65LNsHddW%2BMNszjTL%2BrEP2vGFxtSQw5DKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEdKtQ2IrK9GW1if4q3ANJ%2F7F9jMUBuVyIxvU74Fpyo1yARkFlpzn%2BZMUui%2FKVfsJnrFaRB84ULRE8S1vfMWfS4dHTvz%2Bj7tFMldqLZqRIwpzGPXThZW0dtK2SE8ViG7ocj2X866IfEDDU%2BkD26%2FCwtKciQZfigLCWtehbZChx%2BbjdCtd8hMgkyrkV2kYXyAGHJU1RXjbQ9FyIVY8lntMsn2LEOolYhMOeXmiTylh2aIjmH1VdCq6sd6SVTafLV2k6h29WoqW8aR9kor2yjjf5tW00nEGnOXoXMKgzILdDMYApoh6XK328wUChZfOL1U3sxp3i8dBJKZq0K3vilTe1cajuH7CHbQ3gDgDqWguCupERVp%2FZeBFpeSHZJGSCxzpqMmDhgigQGuCJtRlVy7OzXhm6nzB7yMi%2BUqEry%2F6ttHvy1BMmwf8cHXwM%2BhlGpVZfJwss4N0famkURsssEA7sV0qpfvAbYTlLNxAf7blxr7I0nMfetupHS2j8PzvPfPPPi9j1G8RuPI1TTFSVw1QDFDX%2FxYDhKSzNc9RnInqWxFDVf9bdASSUvyTfilZUOeHSLUmiSBllNG6ImJ5EcKb%2FT68FSpSYuqPIIu4udIurJFtUeGVIq1hA05%2Bx%2BB1auxFYiFBn6KYo9NUMBjCczf%2B%2BBjqkAXgYGNcj7prVwrDmugNSHDv521ReIaova%2B11LbZ%2BRO96y%2B86kT2H3cwBGdKxVh6XsWST7OV50QWktwnjGiSPnqJ1aL4WVji69hcRj22MlJoHz1iM6NQ%2FHY%2FH8ffPMA9Peq3Im7sT61WE0lPTbv%2Bpr6rlqlssDdAUO0IQOQEGz4KSWWcKkHbXNnisDxq8x4u5c6xaiobAdNdSwmuHetJHLJgT3k0b&X-Amz-Signature=3bde77cc794a9e13aa8a3a7acfe6760fd38ee75021cfb18e2dba1d56faf18d18&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROKBBD3Z%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDqnzMDwy0Ad%2Fg12YRGrNHko18fbxPK3Btb5E3byURTiAIgORAEj365Pv%2FO8j8%2Bf84srzHy61T9c1IPSWNj3iyVlksqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRwm2PrF6If%2BLSq5ircA9Ct77e9L1402czQdb6q2Iv8IRkLuhMcn4nd90KgKDRk6E869o5RVmNHrEfZNs1XhVtcZBlIvc4e9YlGkqkCkOl95lJ1IHHzCcCgCCFgb5l6YNMpXlxTK7Jq34hPCBTEylvBN88q51RcsSizLLm4RHJ6e48JK5t3Iu9515JwVqlOBLMnr18vfsbp40tdXBO4RaKKiK9X4KgS6C5pl2gDSiIZFjooxExUFgpgm0cIV3q2zL7cvtJWJKGcQ0dHizTye5xbARjRJeEd0NZx%2FyFU4xG1bZ47Vx3bGyc09w1qg6IwcieWPZdcJ6mGHrpmmW7YEQPH3gY6jIZPlwVkXkSiGZXGAomu7XVKk7wUbcknyASe0BhDFjGrpxxEiIcrPbpFEGkVkuaeS65BIZOGjAdD%2F6inPRwJopggq1pnJi9iXF7lWDbEXr9V1mCny0QbO35ezThXIps0J6O6kYXps0H4H9X7%2Bc%2BmrIpx%2F3LrPHNruGKmyZvtLD5tbu1cviVf8D90wyB7oLPsipQyIHurfSce7A5I4NQgCRuHI%2FPFBpgPFXh6%2Bymu%2Bzl51U%2BEGRrxdN0ZY8AVVskBxsU6rn%2FFdzAQIap3V7ifPqEL1SGfaiaWQ3bzJnXv8TqfuWovdOrkMInM%2F74GOqUBCy5ovr%2FMkJWVbIwEkg65Bl13fpie4GiBTH1srS01fqRC%2F1BsYHU%2Bna2qLf4IB5Jhye0PSZ9NcyU8wYTOtHrF0gGIaJdI7fOuXVllO9S3JS2qXoj4DOw4FWS2EVONmv3Nm2n6IY5lbpdfCTyFac%2BHREIZgJCR%2FdMdiog33NwTSo%2FOZIunfX%2BN%2BEdnfc5Z8W1YRrmz71J%2FeoiLJbWLnk4iqwYba3NT&X-Amz-Signature=0ff7f455a6108728150143bae0fbbaff1c2fb6108b1ca40f5995254cebea055e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
