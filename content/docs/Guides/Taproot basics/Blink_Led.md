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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLOK5MW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFj4B%2Fw4GOUuNqgBWdISj0JCnoU8nWs0NZziUYEsXR4AIgG9pYEy9oZ92GV9Q9Js%2F3NfKXDquripygbks%2FhAQL6FUqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDQ%2B2eE0LlE%2FpGzaircA8ISB6iae97YYq5TR7K8E8vMrXiwDFeEWL%2F881iPfJvYQX94a4I8iZe%2FjNYId89v3q1XPlDOJXsRnpM5h7Zangno3TA7dlPOGr7qLt5c5aa%2F0zupKfl7nKblLBxyeir7EkvSUmRW5X7OEWuKeQixYO0K4yqsOxYA7nXT9csM3zgd4tfwGQSzEau16x8lOBKZ27NBO2eVxnkvxr7997YhLPSVE%2Bk3vOfgjX91A1QbBkiTuNh3IPTQWZTbqRSAjNvqvQltNx8bNJxNDsAt3e3mbyUj3m646DvkZhRBLlBbWyQruTi5bDDhisBzCDvQK36ghR8QM5RHN%2FVNt9DYz0gEd5eJZ5JnEhdDrJ59rCu8h8aFVyEtoC03V06ZgXHqmXYW2jLcfn9xEfkMmYn%2B4XuzvR%2Fdyzinm0xxH1Cd9aKdYoVwSqn6da%2F0sKshoxIpgJNIGCUaL%2FVOSQEoCw1fDoPDlTwXif2qWxt7esRVltnpMPZClSLHrbnSfuhVBiDVgWOLFsrztKboL8QmG6n9NnEUCn1hNXqib9wFfsvSp0kKyF5GdihbmRUCNDWHB1s%2F6iOmSDBhdMHfS4StBRGOAd8pMOnyTvjO0UU93j2O%2F%2Fsi724V1BjSp36lhYslL8VQMN3gpL0GOqUBfyU5KSJEHCD9SXLTZwAGwVqwm8TrG10dlzUuq4IMOO67PrdyI4ZWbjBmndg3891qJh0SkvijAD%2FVqMz73%2FKWguH5TWXo3OWubh5ccG9quRV6Bg%2FeZrsPmAe5vyuYx%2FBI2lHTH4w1XvJGqLcgXK7WMf3cNrg3IXPmXh%2BqyBKA3oHOSltK4eVSjckgFTIsD6IFyIAwJRGv%2BLkXFN%2BfeX8fTseZc640&X-Amz-Signature=dc72786e83eb0031d7b0ddb5daa8855fee4a16da4dec8f35ab94fce10015371e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKE3X4A%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJMql0N4QtkIzZiH4hlAaj%2FiSqs0mrHeriaN2hrYfIjQIgJRhSxS7t7IQEfcTSXR4SqZCtk6KuQ3oGc2hEeuhvdFIqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMRTF8X%2BzEyAy8TESrcAxHRW%2BTA34GYNm%2FKistKOwM3HjHXjstw3LUgDbk4rw030Y3PpzIUjUEjABSv3ISAoAu%2FpZxxlmrcbGOixyL0Mk4WG4g8dJMTF8xJQXdjLLPPgMgX5RAOypjUthqeRuGvniA%2Ff0p021ChgyKni3w07ML9dXEtYuNSAqh9DAXNBG0N4%2FIZY073VsZDUXvIs%2B7492qquTvJW2JQLseEeOszNjf518we98C6znJkZqzhS0Z%2FqDqFBU6YvNdfdSaZLi2eDvRApt1kTqgQKDbp6zcrJxQpwRtBjPpCW7seZO8Ud9oo1V0ueqdoPyjBqvkwkBl3XKP21ecgVDer1FhHM8N7SQ2zC22xabgguzBBvjxYJm5bQ6ybzeMXeMWa0onWcQ6JyrjSTkzs1%2BycThzurH7RxyeN1%2Beio1UErDMRq2G%2BsCVwCKvNMwn0CaRDZVX5NrU1jeKXk%2FARV5GLa83NXs7ETe%2FEZzpCgapVThFdJvfgXPsRm6mrkHz%2By8SSyOUy%2FNMreFkbt6IOjGVsVnvovblgP2QAzGpX%2F1vxhFJTvdRaEj%2FDFV5cxB9Im78bpqoIuMCM7RZTmy%2B7r8To4G0EuzSb2ysrEcWnLoG3Pe2hZ%2BUkYH%2F1jBigr6UE9ei7zBf1MOXgpL0GOqUB8AI2oQiMQuKN9t0Ccjj3yc3%2FVlcve%2Fc9qblKkYC4I%2FENHwB%2FCcVt%2BEqxGOeH91E7hPb4oAI3pgCll5jJUmkW0IcNYWe3phzFNtRSqd6YYyUi5dALw2CvVWgsXjI99L94r4A7%2FJ0A4GZBayUfEKFflGqxkhmq1jAlqiRr852liIcHIbdPUxCWuIidz3lw81nQ5HFe97UYVbxd3V8R5fQKsvoUzdAl&X-Amz-Signature=7cb260bd50cab95bd964a8fb0700422c4596a7543269631595e20714878c799e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
