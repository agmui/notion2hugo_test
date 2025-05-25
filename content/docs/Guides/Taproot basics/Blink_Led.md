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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5C5JJPQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC8UrGBOp2Mnl6vzL6OfHkkGVR1of2bYz4vCD4DS7bKAgIgOgJDdyzaP93ti3AWHY2bIzL486D%2BaF6etRMR2PhIw2Aq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC%2FEi2bMzQZTD6Lq7SrcA8ljKLNT5eFidlrvNKeNA45pXkg5BJqLRDicVd8WNYk5pMUW103PfKM11OVyD5BmISvPN3XeH4wEICXb2gRTFepTDsEsnycV46f%2FDuK6uCDefnLusmLxgYSufvRj6GKVzrzvXkFTpXv5V7Aks734YrUgA7guA%2BbC7zKQ0p0frSnVjscGBWYN2xdRq1Uj80Ea9a1izTQTngbHIjcLhBB6QI3VdA4SF80MbBVt%2FCnbrtHSHZzzlaRxmlJmg3c%2B5QuznFZtg6vFgD%2B%2FLEWP9T%2FbCjBy3LQW%2BiqLVxVz4gJ%2F%2BAxhfKLoT%2BHpnJW3akY0zGtIPZgbpfZ6vsSbaoWlge%2BTmyl970WYONIuEKtEpBO%2Br3plpd0BWHkiGvAhB%2FE64pN%2FBHnCOsF6NBRmZVPPqAVk8EGgXBljLp%2F17yYwzPlxpEhO%2Be2AQ5niViEFPS782XPiuqi55MRvpoFojms3xbms5aLy1%2FANu06yJIZWUYDx00keeFBPOhLv6IUwIzuW3FMDbbeWmHlPx1%2BZTtBl5esK1DoOBzeU64ywhOMrIqkAxeEipjwlWLX1mRy5de4wpcloEEprRgVE1pXfbCYBOGkWppPHZPpWH2wP5mNYrV8zk4fNj30gDOv1%2BY%2FOBkmZML%2FUy8EGOqUBKMVEimkr3hIO41HyKzoHsWjT5vQZ86wAnec07w4SWh7eB4%2BMV0yqwlwyTGfbFpIP%2FhxL4LaydcLWBGtK9JZqHyWciofuDMPvFOlMSrm%2BtWNun8GXFdDU35Cf5dTSGwkojDZmH48w%2BSieklHn40YOH6F0CccfSZZ75ajv58r%2BCJ7qxbh9DU5B4OGY0%2BC3kje4J%2FdBZZSXSZcgASNwIt6Enijyh2Z7&X-Amz-Signature=8e8435c8eb88bff5d7d64a5c5258cb43f9dfaae86b6b2a99261e3df0be786bc1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR3FV3SO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA9HEtVKZ3a4kN9pv%2BpZdG%2BxWGC1dse0DSgCfMLTkTXEAiBf2h29bFAl4gCwEQnvP1kh13LD0z7Gq2A6VPp%2B3Cv8kir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMUpxV7Nhu573pE1BsKtwDHG7OQCGDZBFuGrO9zOBr5ae%2BLsxKis6Kk2dQaN0MD7N6tzcfikDhs%2BiRk8NnNQUNpKNVf4Cp89HUDfQ8GAHFETYAzcbciqRqL0qWe0abl0nnGNFOKeYBc0ZAAtVYoNit5oE4%2FD7eXYm5Xi2UpTvYPIizXub9nomUBCla2bB8s9uL4qwLMkhb%2F1psMJj%2BYA17rl4HxX2zA5VsSqMDUhxIP1pjXjqwT3rEjhA26iZQDQrC51rkb1mjMYAx7dvucMTz%2BAcXdTEzt8E7u5h6FgAzf7qhv1HzmewoqB8tL3hNa%2B11vHgMdUx7w7ffmkCcyhRhAZcDpD3wffot8UcZ01o%2BpMZMssnkEZCGeA4Q9j8dmUF7%2FXu4erT1DpbJaV42jufzkrOA1KOGx%2BwC%2FCgcMwpdyRAvkuTiPxW%2BhSqCmWtGoTH3UQLmg7mryQ8FkO4FRVhlHijHM5Tbg3GX%2BCsw9KyAXe2oLv4jTURAnIV4zT1lHF2uuwkOdOtnnJcjF6dCDVNU%2Bsk36VZJuPEcQdRCBRBquBPXr%2Fgq%2FpZe4u3VxVjqhglyEe%2BJHI9N8YEQ5SlSbjtxEJi67TIc2tbCVsG4EPcZGxlsbdA9Ui%2FXQ7FctXUJstvgK%2FO%2Bzq5aDRd0Se4wmN7LwQY6pgE8iA68%2FpxnyXZagmo48zw9hhpx5mStYUaU76uA0953Nr4W2fSF%2BI1XdqK876iCWM72EqrYjGDk6BbTn8Ep%2BMybD%2FW8vBfqIJzAad6sdWCGyuiB4INoOrdQ2SEatvrU8cGHqg60sNDPbQs2gqrb5CrZYPq9EnhOYOQqdOGD7r4JfkRsSseXGXFvix63VoBwH153iPw0jMS5XXoDDfwnOYbHZx5eLzjw&X-Amz-Signature=b950d7aadc0536dbd689d5515ab12f71077796422a4c66973c4b7c21e17bf455&X-Amz-SignedHeaders=host&x-id=GetObject)

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
