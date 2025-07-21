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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3FWFX4%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKVNMmVHGE2ifP1wGnXpBKrFXJKgdXESnTN%2B5dYEgY7AiEA9Lo1ujDCjynQIrRk34RzCwkoLldT81jMyoz3FdOqtpoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL31DyuNeZiJehn6cCrcA6H9DWf3Ni3%2BxVWqDo2jC9Fb0PQ7p1XNTlMMkFJQMe8Jf47m8hCNV42jOcy0xlzPh8bKOzvoE8Be3WniZTevFvipL9Ma7ZU%2FiIwlpxhOa0%2FWILDzFk7CBlBNEESs9lFJLi%2B765hCzp8TMpjCBDWNtyeQj2TemBmHR%2FQPjwgxuzmPjKzCmp9zsJfspcrhu4J4DLK7zk1vBd6X%2Fstf7fposBfLowAtPIi%2F5VDlnIFqxdn8jAna0MZNmR3atea3IIWLWRxQpEypQaj6npx0fAjhr6j0KieNhhcXDzTr3S6s78l68tce3Pr1x4ttIG3ascDs%2FySYU3k2S93vhmFnyYB9w1%2B1GkX%2F1sEnLLqXByv0uZCuSWT72ndMKKfGHZU6OuRNa8%2BRDZs%2Fzm701lNcoLJTENNim8wwoT%2BhbJMVH1GqJ2JJT6CmbhM6x4Bz5rxrBHGKgM%2FHixF%2FoMQOkMQ5mo4cIoWQMG%2BE8%2Bu9HmvMVCCTN07aDvkCIyFb3O2whpD2f15xrtxaS1YxEVS0Ozuva71h0CnY0DzPGD1bborIhHh95fU7fUdm6u0SzaKXcY90ajIKn2dJgs3meZY1ZL8%2BRaR4NhyUtidoX9zmw3NJx5p3GF7vJGZ7CjnV0HIbBQ3FMIr5%2BMMGOqUBoaVgly2KOKbHFZ%2FmDA5TVebByBwMvxQ25ViC3vzZ0XMEGOr5pUs8VwxytugvAB2%2F21XPSZjK2vzHXkQnprIKzKKoH6YAml7Mbsw%2FxsciZiVXHZJ77%2FjG2lPxARkoqMC2gYlh2gCihxPb5TyR2go6cVEFrXc6AfYK00Hia5o1HzWrYI4q6QsDwyiGkulFp7aiOoFUyFw4ZuWBaqT9fNsoJ%2FOBF8gk&X-Amz-Signature=8d832213656cef2ce2020e6da57c767ff6f98a169e96ba23507ad9f4127f46e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5TLXKS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuWP%2Fvm6HjXlXBgQ6ukAKPJyVfdQT4c9Vft9WF1aVFrAIhAOLVwmVkx%2BX7RdGYC17%2BzSuxnXwnsKRlNmP2XxCmHxUhKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBrljChWp1bP0ueSMq3AOEXyFeGtKEyWz%2FWb5vY89ntbTaw0kvaao2yIN7ReJiLMfLYQSl2tjsV8rNYsDl1PTEH%2Fz6tH7KdnMToKk%2FZMAx0z7jeb%2F%2FY%2FyMft6U9tPh93yRBekedO3Ge4ClzI3VjA4GxGgjFjrmN5nKOPBSWmsMvAylqUJIeEH%2BMENuoYDwl13ApF%2F%2FiaWvSr4sivI1zIV7Em%2FBJ7o5Eb9n8MwciXsz0nbK2YW504MRAlab2BHqFZ13tnLYZOU8dhwSkheSP%2BbCOLBJF3A%2Fvr%2BhieBKRKPuobfpeT9qziA3varHS3F3EL%2BZNH1Z%2Bh4G4mn3cVrEonfg8E7Y2%2BvH%2Bl6gBROMgYnziYe3YCuX%2BD8%2FXa%2B%2FTHdF6%2FKygNpkKlgIekqLLBavHXXZFot0I9uO0es0PZ6usb%2FFBsapOPwsiemr0m5HqdXZOhSG93YfgMpobkZLX2VmQLwxjFjd%2FGOrWVPn4UD5Cx21YErGNCRjG9pcTJhqb11pRr3Uupp4mSYTGzuOwh8klD1b4ejFkMLE%2Fx3VPVUCUMPfeRuzxFbNspWSLzvoOpKUvUy22%2BvpclPzmKYOg9mjOlpaTRm8FgfXOod59OI6w8ePsFfbT9EA30eG3Tf9ZUxqiVo%2FXaV6CFnyBqbHBzCI%2BfjDBjqkAXEMPjVk6wFeg9aOh9%2BD4q3OtbkgQ%2BCGLpOnXEoh8f5RPdvWA9z%2BdB62PJf8yLLJ1xQKI7oDKkl0j2hOIX2jI2%2FSWr0rGQyCzcrE8cSp3l%2FZN1MyqVikkVluKhN0DPR3koRbo2Pb56DYXVUwH7UsT2N3zac17IwJvlP%2BWe%2FLjkUmUGO0uEnRx6vr6oS5NYznNriBrZph0AQbAy1kVKLSjx6jFQVW&X-Amz-Signature=d3a76b726e51ddbfabf108c381fcea2ffb79a8d1eee76d2e403aa640694dadd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
