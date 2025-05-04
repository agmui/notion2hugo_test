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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIMFUXWC%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCznjXyloPZKYcbMOfT1s9vNfqxQsR0tVzYarDWydsD4wIgXLEoEn%2F6oF8o3xvek6W8VB1UxZS4soMICQmK9JR1sbcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDFudNlg0Wsw%2FmbUHfyrcA6rjl4hync1z1FkZOrGdE2gQkArHqj6g%2F6ZmI0UkJh17W2zhtS7zokeIIUkryyYINB%2FgQD7fHIe4uVjZRJlykPwbN6fX2QXoFE9tqTv6pZ3s5wPQw9AKWJNZhPo7ZCIGoQKqpmJbqoMx5%2B1fmvJPoYD8pge6%2F3GPqwiqICJcrVCCNspk1itjqJ7FrD6nDzcuaMfQZq0aPv4wbLt5yxWNyCWok05so%2Fy8PQbIlgCxrPVuBxK%2FzRw7sVbEqC86XIQ3pzDUxOmPa0B%2BvIGv9mz70i%2BW%2FkFglsRuvUqL%2Bjo4TrRwQleindOTpDozfWiZTsVWp76PVyz649w6knPwN2EFbSeFYQPxjZ%2FmwAOLlQKiO0XHhrxTLlAOY1ChgufU9UV9mrmhu8Vidvc77pAhUofbLE6XPxBJq3vrNoI8MwNyyji%2Fi6uWirR%2B05l1vmOqilDpBEmH2DBytCyHdmetMUGBytdlm68h9SMEv98X%2Bf%2BtC4bH0gJmJ7lzxj57fh6y2ignM0Ze%2BcbYMEZv9NUGIBGzVT4X01uvPEEvp1Gr13cKuS2TJ3VUHer%2FuktRpLa5g2ibTODZbWA5FQ5bnloSZqCzYA9FaqYrBkjtZVA1J%2BpLy8o9e88TbmMNShpggFdDMIuH3cAGOqUBaZ8kgIunCyaCXY5aH4b7glHN%2Bb3tJ6MByo9V%2BSTCyL6WXkmtYZjTbNKW66aftRSCx%2FIAx6FQiqYEjoltwgAosC96PhA3qEJQ7sz%2BrKrXqst6hDk%2BqdGpgVDlu9QTAtBqEFkvfjx4Slh6t%2BDsRWTvk07yXBdVeQU3hjEiUMRZ1sPDfh7Rv67J1kIigaxqQYZ9Jrh3x9Z%2FRB8j0pTEu7IjpYl%2BfESb&X-Amz-Signature=e7d0257a462f12abcd4043783e9219c77b66664b3330824902ed0169037fdb0b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNYMEX3B%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJFMEMCIDZGW%2FESwRbyPNn4oeN87R8KIV5ZCagFn5IYHKrU5Zt7Ah9Y0p0g4wuoLNm43IhFuPcMgP27F0D8btW%2FueRpv75DKv8DCBQQABoMNjM3NDIzMTgzODA1Igz%2FbKQNizKY4iHxbn8q3AMr8MVLtiuzelq%2FFMWSE807T3iE6%2B7FVKApSA%2FfLQBnFVut3%2Bqohfmb0gu9BGn5YAbm8gPGASA71mZFz57dZIM3VKGtjng0vb9a58G4XMdAQqFhIIQawwkS0Od7dmba4W9mLWX7n0iWgBGO5QC1JOTWNNmsDIuOPybN%2FUKbcL%2Bx%2BS9tUcHo8TJN04CxAn8mk5em1Dw2Q5jAQRe%2B8tfc9cZGCKtZgodxo%2FApj7n3792wHt%2FzcdyBij49yYG9iAYCPypUlOfUWevtprv8V5w9kZew9cbefrDwZsWN6NfG5mvqpXopzJYwMFPNrUwwGE5iJj97jN69R03p5y%2FvhOWop0RNT43xJQL0GXuKHPk7a5fL8l7EqvFz0sQtwgZsg1BMFFbhhOxE9mLodhHRnCnEQKjK3gv9000sHUh3e02upzctrudyJMTG2Rn5Ra3Ni35G%2FTNxsZ7g1Ut7y0Zlnvee9NoKWu9KIfeAiQRdFEJ92bK0osmKqfaLEAycJL1Tlx7s4qHCVnHZ271vJ6%2FeOyVuJSW9lNYp6ZYECMOTsiQieXEKWwAJoxN3Z1KGHZaAIU%2FqT4PzpNxn1hZRmwmtzB3sVRWEGumk3vCgmVSctSBwuk4PvS1OuHWUgtOzw8M2MzCsjt3ABjqnAbseaw05c1J5wP3TMd61Z6BjN5NEA3YisZhGaDU4vKCB4%2FzUq7fOuOreS6%2BAMUnazvi0%2FDAQC39oawx5AP83AdxXpquzI%2FNh2TCgqNI%2Baw30hetkzyIkzooWIuCidy4nGXKhiPyhC4OblY5JdDJaaxW5nx%2BUgblM1ihrbre%2FbfxteR2u%2FAQvyKjMYG51Q%2Fi%2Bv%2BUULWQWWY%2F%2Bw1DNDZmFw%2B3cphZ3O7Ne&X-Amz-Signature=564a89960db6086a9d6e85ac8f9a0a503a7b6d24f8e6d9bb9fccdae5f686738e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
