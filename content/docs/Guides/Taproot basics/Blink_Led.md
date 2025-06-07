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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHBCKZG%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGCDpFl92eeKipxCrAc91vmJFkUvgkiz7aW%2BoN0zycbAiAc9W1LvbLtJrs%2Bcm0Yq9AmutbksQZXO2zMUFIDFKVN0Sr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMla6ou%2BLvQZWPQN45KtwDtN%2BEMv9PO%2BJcYC4JiTBvN5HnnD2C%2FWByRc5h3MFuCLmI964bAF3pQIls0ZI537akJLG5RRVvTuwaf3EKQYxbzws1ciNScRow3vS8788QeApyYkHImjzq00unVEEKRu%2F7rNNHC5XLuGWX9lMGmqulpEJRxKUhXk5N4pt3TGstTybSO%2FyJTwF1YW1aZOTWLc8zf0ZNN8c2ZPBd5AdCtrc%2F3MTBM3i8Z5LIIGXO5Xiup7HhItyn3iCO5gsctbKR15%2BsOOkk7dTxx%2BOAog0KL1pR1jJF%2FlYUqE4%2BM%2BKkO8L8%2FVn3qjyObm1XC%2BixOoXXXNFHg1Gr95V1TonFDZpcZieA1GAkFqoz3KUZAYetmKL0zMdjagbpRcozauUNpk08D%2F%2BcxvmkFR3KVpyo9NbHfOiVNEMwGMlav37Aq%2BBwNvkg6AvEOzw9iYscxKNM66gjEBWXxcUbP1xsWmVjlGhBX8igYWcKKbqTkIzyJZ2%2BC9ldkh2FGExCIFVWfzZJm2WzkIGJHbXTryU6qwqYh%2BxtmhQvjKbRqbQrMDzrRQeTk3yswEtuR4T%2FBFuKZoR2HFMBadoXoXqVXfVbfAOcV0Tdrh8kceB0jiBIMs%2Fvac5mk0idV9k6kBMdqsmpkPLZEhEw77ePwgY6pgEfvpjaExHNOCJT8Pp11A9TfB%2BPYixRtDNGPnJtFQJQg6Mrj44lwh%2FIhK1%2BhIiHngByX4rl3HZkxteDEKohxFy%2B%2FTBe6tDlWer5y1q3oUD1VwQAZsFECPT2L0VqY1KrJpWmIm9AWJFRlmGRs040kcplaVS8Y48qVmihC%2FXCyNPkchX%2BSAIOWXVmVRQcG3r%2B1AZg10miw5LbcmIiEEFtAjU0i%2FxaOnm0&X-Amz-Signature=b75d160b084b9341900f2aba5ae3efbaf1daee3e72be492383c699142e810b51&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6NB7IO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Ftx%2BAaPxvJNGa4rCPY38tjRph1yjEmxMMNrL2zW7nUAIgewu0WLrUt%2BjRpgEkA1imjo2oCWcgQ%2FXq9p0koRFDdHoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBbYTtL479nXXeZKRCrcA56pZH0%2FR4YscxduUl0%2BkQEyMvmBpeSxp8HXRQXUTI%2BngCIz0kBkuwu%2BTMglYaekDZZtV46ohloXPW7B21k1Ifq4V9d5cWKoIIfX2YpZQeUwulcQ50aW0vrMNAr2oKZR2hw6wsy2I3hQN0ABH%2BROfdrlOMlK3hHVY4YkcJ95eKXG803M4Txhz62mz0oYXkEaQkAO7s%2BuFe%2FU7mfYzcKVHvIbA43ydX05pbijVCUPEASrYZrXpPbufIe1S%2BfRM87QkNq4JFS%2FcPMen8hP4VmX9pEEZAXZt9yGRiLX3qES%2BlQzNrq0z%2BfqOVZvyq%2FDfbQampD0U7zCDZR%2B7lbZTOcIFekgon8k2pu5j4APwmasJJwgB0QtdliLfRU%2FKpQFS8%2FXk2raGnAgiv97Rj27X9pUh4aCwORXjO1E1XUCorFWm8zS7m%2BiBERXj%2B7e9ydotnH4joSvdkz5lmBVyoeAguQgn44C%2FjQkB%2BIbpIF1yKvp08GstSyc%2F5ifKfrRAQyt0gBx0LVsKQEmUSW81JwRJFObmn%2F8fRTAWDwhC4eU%2FddZ8czOLfCR6ZvtSQmmrctYkwSqRYLw4r0OQwJE6IonZoVY2G6oWotGsm%2FzzcLgHZFbZ97YBHDYBC%2BdxdwUJsEeMNK3j8IGOqUBcO7tY6e6rocDCATpN7fz3TMcRLZmgvEu1Uu7khbpfAAHS6MvVTzcdB9DaGADwHkh4%2FrpbeGJVxcT526d61%2F7uYmOEbUJIP672CwvnllS2bTFMvqRtSF7LSSi31udBXWZvYrQnn%2BeatYt5vP13GA3xIL2LXc7X2hi6YNh0VQJE2NqEhDanp4j6Cs2LBFZtf%2F2JJcWPuR5WP3QzgKWig5ndWTrSihJ&X-Amz-Signature=c9b28bdf99da67052835cc8283dfe51ead3ab43298bf6d42f1587a466e9cdb8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
