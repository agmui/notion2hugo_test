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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BD3RWVI%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjBixxMBBamIRc%2FQ%2Ba9oCojQSpVlqVwLNXivdCwhO%2FPAiEAlZ19vqNHrwAFWXr4nDv%2FB9W6b09B3HILvl65XPliwIgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMT2sAGNkPuPZSry8SrcAygo3aMp5%2FR5eERCTgQJtYUA63rkvd%2F6HlbDBespi%2BZwtm9p%2F%2F2V9wCAh3e1usmxVHH77jqeuzThS%2FO1sxPa6Is9mKFxhYMGqcbfJHchpfoM2LnFdBvnolsmSF8Y7SlVUNFLdHLvBy8eTGDEhYsD9W37HQkfmrkE8SE%2BMxt8VxsuLWwbCipr2qMbBHf00jikCXpqfaI1R3jttSy7%2BkJSnH4PRS%2BJ690yNIlCcnK0PmsZaeULVYCQ0kVE8TfuKmpH%2B4IOgm86De3YA0RMB5epJXEMlcFb05vJj36lkB8Rimw%2BoFQ2avV405sNqQdXlJVd%2FZSmP8xvtqCxtHs%2Boj3vvDB6VoMmZ5IztVXJND7nMpBTKB9zF7xsPLBdzh6U0RiPjyBltsnssTJeAFRCn1CK3he3%2F704OPJn%2BGp5N0EeFpWPHWYayRPTdjUE26xhRla7ti8jqeMvSNl8spmxAiclpruwbkABAEwrsbxbe8KlzcXFsfJkAOhZ0pXctSi%2F99ALFpus%2BOFdbD6OfSvG8GI1t8cciktTVpwQf4t7CYKIUDpoQwKUW1S7bgLBxZ4vWl5e9Pdw4y4Hqh%2FauR2VHh19f3LPLnqnmWDGqF%2B76MbqmI424e%2BSGiD0kISrLfsyMLbG%2F78GOqUBvoVSkzUxTqlDcszOp8M2h5yVUOoNyDgGnopn7o6eUpMQNVeAlX3yyhXo5hWLHeZP59nyg9sXLed4ilfswiwqfyXVg4Kx39dLutfJ8fsaj3x7oL8zBSwj4EInY3uoi46r9O7JSHuWmHQoq9TUA2xSNj5mM3JWelcuhqQHt7042jMt99QcmN60F2zCeEX46Fp46feiMClOf%2FHJ1QxL9E%2BsIA4U3dLe&X-Amz-Signature=2ea57200d3fdefab5722a54e4d66cd555b70211ceee18f46fb1cc59e62acda9f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKGBXCFN%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BRYtwoyvKFgdUptVUS0HIM6o9odF7orIMAdk4GmkzgwIhAKXPvG6j%2FbjVUd8GNl%2FKCelyB5GCK25q%2FNRLAkPw102jKv8DCEoQABoMNjM3NDIzMTgzODA1Igzh%2BVSazEnMvaP2WMkq3AM%2B9CgKEpT2g1WHJ57dF3G%2FGl13Z5Jo053dgA07iY9D6wm%2Bei4vxBdYHleUz8bR%2B3WcTK%2FaIJFFLM8FWq3pEUUQZNYPbI6FkhoXurt2TTB1nzehDk8J%2F3FyvKIQ5x8E6liUINauY8iIdP12x0tnsS9d36%2BJmxOCWwWuVqrVzA0gBXru2mgoQSlKJSKn4O97cFrAydje5bT596SYZgTg86e7FpzOVC9yKMmg%2BJ3%2FoJiU7nbQ0S3sNXZJ2%2FWElOHHNLKEiXYd76jyLwxvCVEjbFjClF2My3fujiRf0LbynXBLAJSyH9%2BPZL8UsUvgV7KjXi1NTkEX3aVxL%2FKO48YlWRDyL%2Fz1nLcZk9gtnR8I3Fxtis9o8V0zzrLFW7pjmp9p92%2BXHxjoiudXlQOIag2QgpbPMCWPBEviA%2BqLMkxVauUxJ7m8O%2Bu4vmMv7AiAMvQ%2B3UWxzLmWC4oqUqjCTj7AMj%2F6%2BnatbPdT7tQJrUPURIhQwuhBelSv1W%2FZ4ZAJ%2FiercxAi4TpHsbhp0%2FGNgmsq95m971%2Fr7gPiEGApN3UCBmCkuIKcmLj%2Fje0eXBGchfDJrzok8i1P1O3%2BWiF2V3enmZIzD5N5uwSOIX%2BUoWrnkTKauAbpUWI9t2G%2Fc7VOgzDDxv%2B%2FBjqkASsvvEgz%2BQWMBGl8atY2YgJJbifY0AILQCfKKrTNZrvQ1BSMPgJf13bx0aQWc2uVts7%2Ba0MkpTP%2Fwb1PdVVJbQaISNoUnoHjCUj3vvi6a6YWCa%2FtYKNghYHFHJzJgCPVjaSkG0lReUpTIPY6w3JNuAHuKpTKQ0uiIxEgp%2BzNb3gog%2BpyAF1tYYpkjKyU700AD3l4y28ehlxxFiwFkIDmwDhYfJlT&X-Amz-Signature=e8789e56418c968ca433a5278a35540808c884274a7cb5d5295d541de309a1f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
