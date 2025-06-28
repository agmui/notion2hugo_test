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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MPS7F3Q%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwcLBjHgugJ80Q3I0h3r4m2g4PSbhtPqDjUhvG9onW%2BAiEAk2%2FR25DPZQGJHbRrpZZT%2FqWyagPfAE%2FarJ9sBVshBpgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvziiawMm0tjf3i%2FCrcAxoFaMkBBr2P8Y%2Fu1pp1532OMf7MF0W0FtxeZmyR7QkjE3ZGFGn4NQCEPhQgNmW59AJfACwi4vLaGepfsPhE43ZqkFMTDQsetMvsZ%2BcLB9XdyOjbDpFcSKDV4ZgKVGzKA4gEdGy0R1%2BxikvWrT4D%2F%2FtHU1z%2BnuxffZziIf6d92VVhXlgO8l%2BpaxKE%2BPQzZDwBsy9Vz06FQWI6tP7TkJCQSop8yFlfYlunDa6F6Z124VibV7k9nDRDqb07v%2Bmhkzg3eOPdToPjedLU%2BPkVPYWWx88r93H2jtPXqwghNl3XANOJTyO0fhQsjsIPIdE0E%2FxrCyc%2Fvb6ipm7Zyt7dkABpt2pqsLvLqMM2%2BY5bxsa52obENS69gPdIzU7E1wYbR7UAqauAzDzwn5O358HvAEZtnGDONnWBeq5vyUdyMtSvYbExo18p9dSosd9ee983z4ORyXDoWnOnvczNcnnfRXBTEx8hIOsVw8Iq3bmKDgSUKjtK1MVkwYNO1IPcHsmXU0Y3%2Bp15GIWJV6eGfpsyK4eUnBqxbHMXvjOog9zOWOVcCL9uRVF5qNfXhQ2Q6mqWYnuE9mkoR2RkTcqzOGCrBy%2BFFQ8x6V3gzwHjL0VlBiXKiFZswrNfKg5KF4TrRmtMIun%2F8IGOqUBaeRZIVU3QeiSMBS9wtsITjDU%2FJzMDhi2AZifHnOI%2BsAv0zjEIoCE6SXZDEvdTOxb9vHp5nBE0fSdxoJ0biXO8fqPsZi7K2rYJG%2FDtUa1UgjmwZzufWmkX5SXbYelRZ1HFsZSL5NSa7mlSl8675V6IMzzgqmMMjatSbFfCEcThZNJVBQn3CSho%2F0uZCUSIi5rhMmyQQXdI0vpgQj4vcc0x6UA0uh2&X-Amz-Signature=f4aad5b180cc764a470fb2f06bac170585c52e1d89f8da7abb069324135db2f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EIE2TSG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF55OiPjuikX7CH51tuR8n%2F4j2MsqoHg4DkDrjknMAnRAiEAkK2XLvtb55Er3Nn3oRrEjazc6egGG9jMkol%2BHA1brogqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8ujJEnv0X2SpvTDCrcA94S6KLIhBanlsdM3nWzl%2BZCQlL8slyc7FbcoSS%2FHPQW7TbOZJ8GSPNErZnNS7todvWvK8glSi37tIaT6MO349BRdAdqSt3jc2P4LDxOlfyS86II%2Bn5m8V2e8myV2zowH7v5%2BPgxhrsgysYOhaLkzX55Q4O3mGpCa%2BGrZtX%2BL127IgnIl%2F72imp8iEyumo6vJKoO3suRqcyETt9zGsOZJQe%2FVR0AHhvnzXMrxHEm9iwNYNGOWKcrufhHpKCAq5rcgNV87LkrwNXqKnInkkRX5BQqlLFpOJCYSybyEFI511oPyNuSexGI6IYCv0BiE%2FgFiY9EuPb0Q90bH3kM83c3%2Fgvlmp3CiXud4A9Y50eejxFsGgeWncjSEum243eBNx9LQ2tX%2BXN1eSMOftRQMNdpthOXnC3dp6S%2B1xpC3Z%2BqlAZLtFmox7CQS0SEu%2FyuZuJOjRzxfWeai5euSdTq4VvvtQaVlytodFC3%2BBCR8VkwdYIoYL6orVF8uCjvQ9xmA0d3BktJuP097T6KoBWhQ31KANVND7rHxDWidpN1xsYFwDjwwfOla2rmxVSYaG6yyOOIpnCMw30Z5iR%2BQsPihJuVs8icQAHLYMrVdBfkKx4Q7G8Glf9XutnBv6p2xuQNMI%2BQ%2F8IGOqUB9TY2hw9dq7LywoQJhAvPz4dY8QJqIpX2cmP%2BQ%2BdrdiOBLdhfObH6Rx8wJmK8JLuu0DBp818WNUFv4LmD3x5%2Frla6yDk2zy4QUJcyhr85%2FEBI5YkBykQHARQHvpdM21aM1CtNsaPNY2JEMlJSyElBsgr%2F1gzlqJ2L8CW090mszHj0PjLpb3MyQJEiQ565Sy7sb%2BMtaN4e6W%2BZ6TNjZwwS%2BJsSu7AS&X-Amz-Signature=5c666014aa51ade215fc4c69cacb6153beb70cc7e162b59acd9e9a47ec5d1027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
