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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLNGC57J%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNIjoEonoq9i0F7dKGXB31Ukyu6Up95TJN00gmoAooNQIgVebMpA56kWirMHUUoATCjWgsYLxSmb5bbCTgowwiSdQq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDL83RrlgsSOj%2FXIcoyrcA5ntfepGCxfWJb9y1yhbkpZz9hWZbi3fD%2BAJt6%2FaeNdAoFNuslPYsaCP8GoOfeJLjiGiHMryx%2BtQqYA4s94Q2Dc%2B6RRUArV1xnPBiLKRirCk%2B6SBnLUCac1ZISQMfXz4UBMKeeeBykn2TDlHZNQl6dknHZAKTawMZWOeCvmMgLUlNPQLT1QnaPKFrebt6UyFodQX7qG4D0loydH6qxhEZDeK5hns%2BLS%2BnpX8ZApV0hXo2aauTZ1xXz6PE4YMpJSMJm60K1uA5D1O%2Flsnmr8cAdV%2Fp4WIupmFwtzo%2FH%2BIt9GvldNWoAYT7zI1jEcaCmi5WhuObKZyHWFq8piZifWqkSDjeR73QEbLnjnRbnCmGafrkRnTTu13hFY87xQqC4H1R123lcMwX%2FMapvds%2BmoRqhYM0mXke2UenrC7gyaCGUPjw%2Fiqn7OM7mnbxZavactXb1HFWsxMklsYnvdsJ5oi1lqdfiThWEzMXbgNaUrh6nUvDGXM9gr32LmzwRLIzPf9sISor8Fc3oxnWtN0g4L%2F1yT3APLFb6BqZ%2BFabPPckhnZT3jb7IFaprnrvxiNOuBcfAGXGAHqwV3464%2BZtA7tSnZqZBpFSU%2B2WPa7YPSKDZyzVol5ypuPWtWfPLkLMKGhwb8GOqUBYvJ5%2FOJ5H2DxbTOBQ6i2nEUtfoUW9Mfw6NsvJ10vypC7CwauN2mJWAh%2FJR1C3WDLzvC77IGpHO8lH%2BBccGtAYQcIgvGACr1tgavM%2BbzpSHR7b7tVz1oKKhPd6uvdm5sswsCdym5PRLIQCXgSnBL8tF1stWEn2DAQZhhpu%2BwP%2FMWv5kKLZStk17RnGs8bQ3Yl842KRLMRFpJ8B3%2FRNkz22C8Z0NOR&X-Amz-Signature=d4563e6ce764e011fc2c8c9fe105aa8f4ecf74f2b7eb3a84df4553bb9309c7ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW3F5GGU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZAJH0ncMkws6RWG3aJOftakRxK3ZWCCnyaRQnoa15%2FgIgHmsE0Yc3JpVgkSv0v2KyjpxqFZr2XAIcouOL2%2BcFOOAq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCw8mjyInumQj2P2ayrcA4M3XfoLilYpxUThkyOGtHaYuoLLMm%2FMPBB6IQV6el%2BY1gxTipPb0hEWpm8B5MoBsQsH%2BEDp9ieE%2FHSafaEoNGPnXUxs9ide6el6PkqfDVWlsOqtyH629tObEt4GqxceqRrNOFWO61Tfti4bdH8aNfsYvRbaGtZaOpwSNY0CENL2YOP9PfVVMThtwBXFAC%2Bi8RST2pA9I%2F%2B7d0U2%2BbVL1HyItTpFE4A317aSep0fnKT%2BWJHGszy9LfFdlnlPuy5vYmFdAkCdMMlvzOBAGRo2fWEzK84mtEygxvwrFX4Aunhdf%2F2pR7bDLEV6CbXQWjeMKF5Ped8JBAt0Kbq%2FxaMR3umec4B7wilNBoXEoEGntCfWviKZXf6F07qu78eBSaPnLVvL8mnHS9mS1JyVij6ILCPUXsLc4iO1VPaD6GXHy%2BeWec2jrsFmqW7gXadPxLlcfykVrX%2FztV4dyH3brc%2BGID3uYtTlk6oJVjypUI3%2F%2BPG7B3P7PndRnuyg7opWQGw8zlu%2BrFrWaKvr7djh20%2BCiKngnxUfxo0thQ6uKFvRkAe729El%2FeTlBGoacHHIOMHItcFyXpaN5Ej9%2FgrpIZGqYA3P7bjNoP1poB5hQ4M5pvqjUhs18cbKLhqXSqxCMPuhwb8GOqUBUTVoNXSotuZylVwD4jd0ZBT9X%2FOc%2B3e8LQqfSHUhdv3H0gMy5j6DQHLJGsHDINkunFjF0l%2Fr19%2FiCndmOrGqxhuAWByNjN0WjTposgVQm%2FFFrgm1NQQ4LJ62lTOVxthuesTc5qCR0D5LRfNRqLhkcNIg2IyciqE9YPJWolakS%2Fa%2FnsO5KCv17Ho7OJaq0kPQK2904Sr39beBoktcHZdkzSJUDBQA&X-Amz-Signature=c070964db7e665e65b3fb8ea1bb4c87e6cd5de6f5fd133e5848ac14a99914a75&X-Amz-SignedHeaders=host&x-id=GetObject)

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
