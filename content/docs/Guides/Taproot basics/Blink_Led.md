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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ7YGYSG%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDpLcMHFuAIq1UXZFau9qF3xZnYpz1JReQBti12s%2F532gIgBak32CwRVtnpmgiRYTbeAehezEh6m9WedQVpDgkQ5a4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDI7XOkhilRCbYsRQzCrcAzqc%2BkZl74VoaA0ofIq7kEWjYg4AIhtcfXTYOh8I4t7vcdvekiyCHUuEKmAz8Bfb0OZobaa6aq3xesDm8w7CwRFDUkdCyyfUZcmiG1ki2FaA7PE8n6%2B0GwIfXE7DW39bHdz0fZ0EUZt8VoKjYSnOLn%2BzRxEtCio5aY7gMPMK8f6Q%2BXB687qhI9rcXTNdq3cn9%2FN4QtnM4CeIdbiQ1oRrOno48v6THiY6g1XsC%2Bo1ZKO5fqH8E1%2FHCcqV%2BD%2F8YyR63KncnAKys3oSuthjjNPiyi%2FXYwCn9wTqElyyQ3LMlkrCHkKbP0V49qgc4v78dlXMgbcbbGCtVq2g5UgKpZI%2FjWLdVmkLl84NkBFE0vh6OimxrJXPjJg%2Bqi2hNO9qBOW3aepetbBQiq2%2FWyDXuGsgY5CKChFHm2WOGfUzBy8Ln8MOcHRpSxKB8RtHg3X3DaPwkWrKqm1Zc6P%2BjPC162dI5YvUYnQYSdjTMKygB82fNYQ6YGGmTDyAg%2F1cl1LboO2ZLUg8G4018XdAOy8DpwVFpTEMcGLyKkIGfV9VvS9jTzOjgd5yYREJ%2FBVHQ7cVEKQbeVCN64TCXw1Kr7EOQAecRcesGdldVwyftM8dPJ4BDJu%2FDcMlxO0LHptWu8zUMNz1iMIGOqUBiITyxNj%2B6RZFXoFzV3T1uJmXA1h1kdvAc4DHzHpCfWysBsVJaXXLtz%2Fvr%2B3lXzj5AyKDmJ2iLA9u4ecJ%2BNnPRwJki7IG4H4nMM6rIt89kkT7egHpXChUXqeCzxYfW9JZQTv1Ofh9EAJj5SeYiQbM9JKiqeJY164b6LWzqsIRe8dJplgem%2FGLqld30rd1La6GOMomvGowbkKbZE1acmAz61r79LTR&X-Amz-Signature=068573ad424663ce30ca2871b2f4fc08ca61b9a6971aae5cb5d61eccf2ee6af3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673F4L2VH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAVqxjfmAc%2BmIwgs7EiRgaCkWJbuvcHFCwkwQr%2FsYYJCAiBGBC8nzeom46sfPT5f%2BlbaIUh6mJC3dVMSquw7rKnpnSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMpF2cAJ2jKiZtCaIbKtwDvlHDPDZeYYHjSqK%2BNauFuK60ubiR1jd75DnO1Y02%2BNoPKvFfD%2Fz77rSwfD1JGxE6C%2FzkGYkw1Y1la29GvI47qNsHll8BvKAQnyKPuXgIzxq12zrhtO%2FwnYbOaQ6wDZDwvfwSj6JkBBmHH9m7TnsJOYgaQb5xONWP%2FXbxaV5Lt6T5zs7QYbQUZYm2EWVxOgQOiCWNBCBPyt3WlL7hSGARTURsHcHj0k35IcN2Bt%2BGz8DPSxTz7l9AJjXUx1gr8sU%2F7yN3GAKs5Q6tLVAYZOxCgsXyZb6vlSJnCsNGZsAgdP8QXSrWvXZ%2FyeP%2FNsniS%2BakngvBJsnmEpwOD1fU5M%2B6sSSYGkMMBRFrABENSSvPST6LBaai5Az1J2QdCyIQ0J6chNCDQrRO5tMyfMnHH%2F8hdHDZwFScxcu5SLNr6n95HCizqz05jXW1aFK1M%2BpxwCXgM%2BttkhmgTQKd73DXpdl0pZrN3pmXey4Uzzv2wNFQCSoVjJ2cc%2Brq%2BLkNajyTveETu4Q7OHn5tprm1CJE0AHie8Rm85E5MD5i3fkoFtTx%2FJTs1QBQGgOJtZHy2liFR12Wr26OJhu9sXYh3QC7wVMfCquXkNGPRAZ8BCTFXcEfsOZFnfrjZUV7B6wZ5oww3ZWJwgY6pgHeuFfQDe8OpTTXo6aMGXmLrm6IP3oCWuSrT6d9hHQrwxWdLaI2uc%2Firi0V%2FabpGcSzeqIIA1VUYtp4NM9QSRButjNNJ3B7PZb1%2FUnnx5b52%2Biu0qiS%2Fjbv5UdVd%2B8wwa2z84QVDyz2ML0%2FixGxwWUX%2B95MUnskmghIbNrDLA3VRLIbPcgSV980GQ%2FXdKxwyIxdtI3y1e%2BzrOWG1UGikMC4v822YLqE&X-Amz-Signature=63cd125eb1b6f1e25a490cabc767910c72d3058b68335d0ffd802490a7dc5dd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
