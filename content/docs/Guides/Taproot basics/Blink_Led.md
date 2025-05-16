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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HVNSKXF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIxUGg5nwyTO%2B9Laev%2BEC6NggeR7YW7LRv18aYl6UkdAiBXTIRH9NEW8M7PXcnzY4Cpr8VFidMBfYl6%2Bux0VNABYyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMQ0h3dIZcFLKo8SnRKtwDLV45epIhf%2BoQ4EKRE3BN8zPdDGif49%2F%2FAY%2B4Hkp13HVuidpfdEtiJdvXGPNYfqQ6y79Ac95ZV%2F4d4hIGdiSwIM9lHUfmwscE5AHOKfv6C5SAdWcdhtCJfCXySQDo35N2Kb5hFlnydk7uaSZEWA21qtx2bDDq9CzLY1c%2BSg5Jr7f%2FUzt6yjWT1gg4KcKnOKN4lDFEKuyRdXIbukchcm3875pANMVdIgnhiqdBrIHtUAeDJ9FZokTND9fZh1v8kIe4L3HPCCbGQ%2Bu9zwM9Nq4wkfKWLsGUxb6Iui3NbjK8VGCPLN3%2F2uLECfTV%2BKEgwlDGJBsCqUWpaGC0mwZHKb5klME4CjTOl9fUPuVgbQ%2Fd1sPqbbMXAKmcjag4OBplZwqavTaAmEjEpZc7i7Bl%2BnEGLknp66z%2FAUDn7LmJCvpA4s3UFwe0VY286NVsGcbZW37M6icFfzrtvAk8SUe%2BznjC7AzMPlfmrkQ9JqN%2FopwyC6tcJbGsjwlMwcHnQdFNgDOARcrqCpotHkErrRXARx86znuUDMumU6%2FrufQ7s5rZ4JNWwnpWTSTIrJFTqc%2B1JcKeZjpnRQkD%2Ffq6Yonju4WUiSnDrNfADflAmjyT%2BNwUvH6Eeeluoq7yuwJIG6wwmtOawQY6pgFglpGVr3J87RCSxSEDds753dx1Y6EYpz5Ef9yD%2BbA5ubirQ4LZHcznk16mQyoGai5Bknorl1mIIoXlcG9ia%2Fjw8w8m%2FGKYfSmnifsVsP5FSYgxkSDz4iC4UASdmKMLW8b7KjYSTdfw8a%2B4bS9HnQEJubwg3ysZTzxKQUHwEfgFs83X0GKnLoB%2B53fzJ2ymhgOM8LaucouL9whJsENdB9DoCxivxtKF&X-Amz-Signature=3238df11f5ab3594961e9fe411e4d5d3b6191c17d55d014706b20d7d8245c31d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URWKYALT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjWMhwFv%2B4zXOHtbjffzvM3hxT0Tv51XjY325zkDW2dgIgUJlZLO8eWcI9PTPweAfmVre0x6U6HfOhuFPqH8HNTB4q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDQHKspgszqtcbjfKSrcA0LwezPRNaeibdFjvCbDwpKOwWsdvMd4YTASGElQSCVURTu%2Fh1BZFEoXS0iHrxsIcpx%2FEHeIqeZcZK5CsTHnK6fBgvntPLSEg%2F8GCiocgy05aLwvRmAXipNEAj4%2BP7%2BFs%2FwikeoliSWMILcDq8my%2FWqXkJlfkol69FlZQx9rbiR8FUCKwQVY%2F5%2FB%2BWpbF5x6%2BaU9SQpltqdEtZd7XS4720Uh%2BUNlbhSW6GDOvFfUu7nnDMObgzPZDWS4es7LwcsMQVqEbbG9DAu%2BGBCYgBmRu16VAleTMLAL9Lnbk2nnnZR2k%2Fcm9fx1SU3vAVbX9EHMXVbRMW%2BpxIRDFbgKC1rlTAT7sOa8oW2uamaDB1xxqKsI4sMoMO2flVDiP0W%2FNkht9tCgs%2Fr8R3O9jKfBPFCFlRKmcNPvR74dmlkhlVJhz95C2CCbUShNlSeMTPVBCIuw62x%2BdfCUKNmtXw26i4jN9gFFzv%2B2tCHKUjqQC1BACvUWOv8RS17MMAJgH0eiYsVTRVEWhG9RDcnWln3NYNvxe2pvD0WrZh8x0AhKpSulqamM7rFpkOWRaJ3e0f37J2bF83flUbeXGL31Gz0idw86zhnRe2XppUwEhPHTxvJaCksV1%2BCkZ7ghuWHEjhfgMJnTmsEGOqUBPg39gLhdmQuAn8B1XfL0dM5syM29q1IFoep89f0wxgu2%2F2Guq2pe3z%2BWGzkslNIe5zbqepcSIFI2zDiwjbkVz5HeZjrdrjuCR2A%2BbOaINe%2Flmx57AUoOBI%2F1QjaCvMoFAAOwrD6UHlYzxwmJ0Y46xTEILwv%2Fp3sXE49dmoMzhQheY2OwvH0JjwjKmJ4FhtQQPJbgL5LloGEQBCe7pVKJGaD%2F%2BoVy&X-Amz-Signature=ef3a632ed9f8a509856aa1d7fc48399928eeca2176a26e36e5836415f26d7c86&X-Amz-SignedHeaders=host&x-id=GetObject)

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
