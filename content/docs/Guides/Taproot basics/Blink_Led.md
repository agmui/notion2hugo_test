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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOASNJ2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICexGQf%2B%2BhEyfk45j7aE7BQWq8uNdNJ67%2FDj37KuAUPuAiEAz03%2BMNErp5J%2FnE2Xl1RQ3%2BV5WofiUlfXjvrQh9R9gT8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPirQO%2BxxsjcnwtTxCrcAzeYc2gMyKMkASf7yQ7vgNbosONXV5sz7BaVtSnBpUB7fYGx7pIPoUc5G%2FjFRRjtyyF6UazI6IVTs8i9PIf0pwidZKoNOEEumNXPD%2FBGdyXR8vVoas19QsmGp4%2Bn3Tmyv%2FLznWaf%2BLHboy9%2Bsd1kAbaVE2Wf5qx2l4271AV%2BnjC8eCo16DxXRHBQdINhdxDXpIx3UmrV10yfE%2B%2FKmFuKef%2FIA9bT7tiGnCcf%2B%2BF0CHRoVPvEpdUn1vzy7exEg8TtFIvomNI7YQ6CkMt8D5F9E5oLxvCWN1Va7dbTN7UNRJSFyWDYRlkonAK25DHtJAktwSM3PrPsuTm78VjjadKFAO%2Bxlb7RD8f23GePl5xteUizhMFGs17vETAdikMYHGBj2smkWMttZQuqCsZtgAB1PMnSVrk5qeJ69VzqHlDb6mA8mbsPWzHMuPVpt534QnczKB4jrYaIjqwcWv7kAXiVTUiaZZGwj%2BNDQkdI9CKKt8xe%2BZfeHcCbVKitpMbK61gYVSwQGr3wD0aTskpP5znd8btfQesEuzrZ1Q4dNFoNBfdzi1gkdeAh74h9PL5uA53JOmOsLCseKIcvApMJIK9LGWOAkD9ly6Ek1HvMB7Gowe2w94GF3Nz7HK8kHC5bMIqJmcMGOqUBvN8tGR%2Fj3zfbFSWcojqxkzuuR2MSeyv%2FtC%2FXcTsbq854we2ugwAMfjzR9XDJrqqt04BJMYxLEnhKiCCkQ8ltWsxp4aXxic92B5lvss9%2Fs9l40loekv4g8PG%2FS60v%2B5k51gA8JbkyGK%2FaEiTDZOz63edBXDUiDfL7CsM2v%2BJ%2FiUfCtYSvDv5ghB5e9%2BMrQegbWBEM7xGFzm6j2npFvoiJHPMBA379&X-Amz-Signature=ace70e5882a2d2d74c78fbca452a71451fbc0abb7604e8e1dfb5dab4792c49ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D6EFI4B%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDfiJT1iqLpNUo16MKt9fnqa82JSpAulZ8r%2BpVKfqwJ1AIhAKBlptrqHxPtrQKkyJvCTL6dB6tnlG90kPDjR%2BWMN5ZhKv8DCBIQABoMNjM3NDIzMTgzODA1Igx1RqT4%2FcqVrbvDDYcq3AOnYh7KrYg6hDJoM%2FlN6czQzrin5jUw1OlYaWjrN%2BiTQFds852eokHupDQWB%2Bm4uA8H8nOY%2BsgP8IdYldMRIHDoKIUpZxge3vO64GgC0FNt9KAzY4PmrIKpdgNaBdi3lHiL7B4e6KRj1r4hpk8TS1pBpjKj68pj%2Bd1R0omxWMefS3JlYr%2F%2BCgdbE8z71WP%2B40rQ9eL28S554lHM86g06RYbV6jPfwAsMduKg5fLwd%2FcqylfCL5xV%2BZlAj694L%2BIx3vvfkF%2F6UoFRc3biAKM77o2UIVvkj2gKnY1pnSR47po5vvFHt7LUH3%2BtyXVumh48fPnB0A9l8VSF8kTe7oMdzVuBy7mJvo1aNEFphFpdxlp3Tr5mjuKMfTB1jRmePg67878eG0efTbX%2Fb%2FMCU7aegJQ6r%2FSXcHxD9aDaZT4HJFV937RkENvE6e1v6gEFzXrHPifEvrl2w3ra0Wp6YG5fIhtWYINr0QMqWIrZAcNrhnvaIjMpWye14n2ZI7gmxmOLZWM6nK2tB37JUz4dsMPEHZGAuhLDYMkYduDHrUO4V9fXgQBNu%2BbsvuccMr1UDRTgxT8fUauv4LbcItIVaTkNqJyvB%2BCxi3id8vqM1BGEZX%2FjeTIk9AbSWqaPjMAhzCPiZnDBjqkAQBGp8mOgFEHVG5MEc719VpP321AfyBD0aoVJS%2FfzW5%2Fl4K0EIXX1iuXfDzRh035Nv5EGuVnBybAXJ12T%2BLdTDMoMuzpi8exQpM%2FvZLPXN7ca2ECbhLBgv3WPlWcbrmLW1IsC%2B9H2lLCkERvFMg42TURhYIreeQ0kI6QRGvcCCWa5trQikrt%2F3J3p6ygYdYBkfouXbdcbymubKbvkocBaALJoEWh&X-Amz-Signature=136543bb01af4577993d1da03fd9031d46eb3192bf3f1f2d5729ba3810c9cf0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
