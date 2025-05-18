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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RXHTB3T%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaN1xtTBZqX8t5Z3lgbzdqrTdLvDVeeu3L8bCpslssyAiB3pYhcXX8F9ArdNoSLCtQ0QpAtOVjxZTQAhUyyo%2FeNPCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMr9agmACm3gwxhckTKtwDKwHqmEMjtEC3ks%2FbAZHPsHRsfkJS7q7mk192rRFXmfF37OU2jHR9X4D2VrkLYZkbom6hiEIIeAtkveVoKwwv%2Bc2ZP0CsZjMFfN8A4Kbl3usuzsZxCkCNSKrjve7YORu9GoTslMlkkfCGXAgo0qsY3kG7I9Hrj8gWQHQuhY4xS94R8aPotBytduMuPTAFu8jRnLNLRih8Pw7HZbdpWJNcX87okeC%2FcSdm6rmVVEeEURHl%2FiBBJU2VlHTg%2Bjq49ehq9xslkh0wazxrV11qQiA45InfldraZUz%2B%2B%2BSmHMVYSeCyxttH5Uj6NYBqgNoEaQQtbW30GSZrpQpz4n0Ug6r38czmewbll9HEu2s1piHS98%2BwVJgf30EWrHYZoeRk82zlNJTqjlMAirgiQw6JCUeHNzwXMJSim7TmqdviiRWC867ZWzfD3owqQs449DOUL7WcxRwikroTHI%2B6uxFoh8TfHJECpZsQKKohnN1wnn7%2BJyvmrusZ8rM09U0NQ22cMAIXMbBeFTUVe2LmbnFGO6DstsRHUx4XM2syUFO18mF6ebHc%2BtQwzch9kNXSyyJC3HEOn%2BBIU8pQJl5AKnIQDEQ8epEJReQCIZ4z1i6Zdcj3ppu1Dyx%2FWqpi2uvaRwUwgeemwQY6pgFQrgBtJ1gNsliirdpMAOO94C0kwYPWF2%2Fv8pTPdpkGRebHV9S9x5LrixpcTr49fz%2B2%2FJwEHkTARqMc%2FGHLACP9XHPHYA50RRRw1wg2hPW0pZjgw%2BY8t%2BzIZ7TFmKLx16yngSGEoSndppxdQPzSzP6hdlQp821gTSrgbL29gwI5tpjUQJOLs9qpC%2FubjUd6bMJInsJ4MZkJk41XexQ%2F6dP6v%2BJyEVar&X-Amz-Signature=07221802c07e68bdd81bce34dc61650d9b1519e006d6cd6546e45111cbd12dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROKYPDC5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPD%2FydoBqQmi9KTakI1CCNJTkyqaA16h2x7OoaxGLm4AiEArW1DwHlq6ecfji3Z3fjc7m3%2F873v3AYPbpelIVRQuckq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKoAu9lR1l9MyqqM9SrcA4Kx3WWl4HjkzDSZd%2F9aCXQgEIgQtiIAcvWNt5uQnTR4JKIVOKieB54Jwv5UItY3Pkbakue53gXx91%2B1rE9tPDWK7g7SmbqGGsO0jXETTv7E2rpOCoPRJkJS7T0W2rULl%2B08nl%2B4wTFsDyidd%2BK5%2Bg9GUHrZdD8%2B5aWySndF6B7gz%2BT4%2FxQuR7IlMUpb5TfDMtHZuct7eVseqdV7qI07qenpW6%2FYvtaZQvFU%2BlkYHiGf2DsaM3d7uaroZkMoKznuyitaxy1Ev1rM9L45J1XBMJaG6qMflW10sJxRHY3H2AOZaQh%2FvygJFnIb%2BaKvqoUN3KlVPTR8tydhT8yC%2Fa8De%2FFI9IDVoluPVscYt7BLUyRFG2gmR8JGx3htKBTbyCSIkGlDolaHcNClB%2BlZVWrxE8L5qwvXQzfpcS%2BEw%2B7y5TMEje3MrfPbQT3cEpi8KWb1mEnxRubJdE%2F4scWlzEO9KZagNvVOyZtfTTBift%2BelmDxwUxwW1cKxpRLH40g6N1HngwRKFynbWpfIUIbeoXZsL0DSI39tFAZNU3%2FNpxxYNr7%2FEjctgbjW6h3%2FvO%2FKzG9lciqLbI0sOeklG7NrDaHdYgw0eOMVqsgQEm6EABGcOXyQrZvLARUwJ9LNdTJMLeGp8EGOqUBiD6jWZB4oIc0lx%2Bmtcghk1HHIzqNhlCE4Gxu%2Ba3bkme89rIy3%2FCnZNymCCJayAzrM9vT%2Bju6CDgMZq%2BzCEr1xWn5VX4DR3k0dB6hr3qZWtYRSXvXhgYeTXs0TA0wDgnr26slxEEB%2Fa%2F5o%2FXiE6ChvtHBo8A%2Fez8xQUMYDwTRfTDLID3I7Uk3hbXlvsFMV0opADSiB3H14iD48ANl%2Byu9x%2Bi%2BolUQ&X-Amz-Signature=b0cc28b248c79a95c53d3b16f12986a65aee222b31dd89d6f7e8839ec42f98ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
