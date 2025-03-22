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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QKSLFKE%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF%2Fu8ZMmR5nqAwlNtWIOPanH7%2FAAL4VccCKVFaN7lyVgAiBsBLPzYBLfASMyNFMU%2BoWuJEPHKzAFJAmQv54zxz3yPiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMju%2FNCZWR46AW7HxIKtwDuG%2B0BnjqTaX3HHNBLv6vqLqkB7z14t0tFLh6OHvdNjjuE1q8j7ZVLEoR1UwfcE2s38djxit6YfljiBsH20WhFiS8rDtSDKHizhCYKRxV%2FXvp5oOF2C21kGBgriWJP9h%2B8xK2dNU73XjjLQlRS4HctXnbkF0J%2FZHIRJnXIW6qxOdUvY%2B8uAqChRIAAWDzf0wAmR0r%2FFtF5U%2B8B1JCojHp1FXNXYnmsn8UwgEv4neeMcslBAJHTLNeBVnnWVHUD8lPMxE2fCV%2BeW%2FbgOGGfgrXgnQYs4T4HskNru68bHFPaCrtAY65VUyae6daC7k2K0KC3mqhf%2FS98vyIcb8q6HrEnIB65CJ0%2BK7zXosb0VHvFYsUJRhl4DnpDSy38eg3D%2Flzxvac9zAnhgPs7wOirKLqP0wwzgcpzQ3VBJzmVFgi3u6RWICOTs9qsPmcWUjNS9MlkMwY1NGitELm66hp27FQbO9VPfzhomUg9e82d4CPtZ0Icg0ewRD91MwkTmAiqtNwe8bV0AzA76POdJTLhLp5ExmmDGwRXEbaeyLv%2B8haZggfNwvqWrGr1TSvZ7uZJ5wYfnkonrY9dXaEoBEmAdkMcRwp1iZdiaRblI0KBBIEgDEcPPP8d1zZA50tUdcwn5n4vgY6pgGkB8hSJ33HCQHkEsNaAZMB1rEV8RWXxD5Wt5VVjHl1TkF%2BxcrIPh7iMNBqm9s6JUOMouvCeGEMAv0ubzhNM%2B5VRg7j7f60unNOFIi6FHDhk38jZ0lVq%2F0Ht2LMYHFCtX0Ie6WAptZajHRd6j61leBoH8dAPfhiFDTAWnDpHrq6jzMC9Ken36h5LQoj%2FEVrb4tr9%2F3RsC38XtpPVj7pOqYOl5EBWhGl&X-Amz-Signature=679da70c2085e26dde9d9b5a0f3cb44957b2d045678881f224849f206df9aefa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S54L3EQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGaJTeEWB0wUUwqW3o7ncTxb5RlmbAsgzbJmqyGOf1U4AiEAxeipriZFULqsoJIUxLoz7XMpwbyKkB4HBLADizMNaf8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDST7UhT7x%2BYj8jryrcA2LKX6PYrOlrWdJCkLinyv49nnSHqqIyqQ8s8HatobGOEcmJoRG8Ho6wcTxMbC0KzoSywb527cqIfg5jjPn7DaMAw4A1tJnKncw9baWL1CHTwJuYwnWGCsoX%2FBHIjxm0MBpg2jO5g5u11sSz%2B3lQooyOVAQ8WheeiTEHDRsLbmzPwwaJVrcJ5PEP6TEK1nVtXGvEFaPRZGIGEp5pM8K8W1yq61KVvAZpHkaleK50C8na0WnqNRPYgNqCRODEeY9goXx%2F01RGHj6igr%2BO2kubg25e4%2BIBrE0JcrG%2FJiQpfnkqQRScQ7UG5JMqSLI1XNB69lsdYRjFBQTvMrw5OAYDt7QYL3kuWJMEVekWVHA36I6ukSlWklFDYBghnftdu%2FUv%2BDzhXhexXFXaaf3Xi%2F4eWS4a0M%2BDoiq0048REeTApcowEtux0qL2XTKvKcXdQYcsAZvEy8CADf8AJY%2FiPgVtF1ZozYBW5Sj%2BPtkfSw8q0Iu5IXYnkHniEGnXvuUe39ANdASijsBQtM10qdRsSRf%2BeQL8ORQlSJ2ULRts0WeXonEaIji%2BDhr7OYkJ2pqk2Da7MkeoVRApOWvKkYK97nMRsIclcoZxAuishEQ2d5goadIbHN94Le7KiAOUM35uMOGe%2BL4GOqUBMXoCwbmaoTb9cl93bRhNKs%2Blnze9URxQujD256fqF0oszYg9Ao5%2BjBbYWjRmrY53bf5dyGYRwH3iGpJV5ImpQM%2BR1YlW4%2BqlQ8l%2FFhTntnjUQ%2FDBEBrHKnmDxnYU80AZ%2B6K%2B20qgQjhwzztH%2Bdt65nXxczmf4Er%2BR8oUkCrIGCidmVlVEs6i1KeDtFLAFexkjxX4hB1w7qQJCjSYbrzScGeWS8rN&X-Amz-Signature=4e428bc032430bf9ecf0fd7cf4a4adbd379743a3cfc6ae540ee848e752bfa9b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
