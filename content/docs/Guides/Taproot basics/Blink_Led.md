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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B7NJZXE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQuVGMu%2Beh%2F2rmRF0%2F6u5hphnHjZtXSMHahsj39D7A2AiAYGoSFWkL8sl3zKjzefdU9HLeRrO4JBnaqz8DhjKJqvSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKY%2FT30%2FoZOp%2FI6LRKtwDMCJRQquUo7W7HJ54CTMLhgL%2BtjG45DSg5iFz7RkGkwQS2Lxdh3J4eo9YZHkADMeY67G3yvXER7JvPJvoEOIPhgRVLUgVMQ%2FAGKVKCloeQvX4EWAEVsyrhSbnbjSrnloJ0uihbYx7JzZ9HZjA4fkgbB6khMKozW6bFKQx%2FrRmG7xAl2K71Op73dclo4HfK1TBw%2BoxA97a%2BSM3Ax9Yt5Z92Y8oMTVCXdjB8tRFGO%2Btpp8Ex7N1IxGWhv0LwFBTNnfhSP%2BHulD3mCuXByu08GQyLzLapOBoYWBvaHdlsCHAUrxTObpgyd2BJYdBX7vizfDZK0re6rF0cWL8p8rf8iH%2Ffh2M5vulXlauCQTallRIHPCqmqw2uvygFGREgRhSO6vXXYN%2FF2pUFl9OayIawUEePsBhlsgM1g00yQAOf2jR%2B0f%2Fac7oAekskn0YTOtijNv%2B8Qfq7VhwgpTuxsEnL4gbf%2FaEjEICkPVD09TRp44CVlxFfXBxd9%2B9WyTsOHMDXV2RQqwyyjJIxOWFeyQE%2BZRiWCjtOVJjObvK2kROaei574DkQmvbBK5sfhF47lMJsr4eS8NRd1tlmE2B1aR5UjEcjEfsAJGnjVNTCEJAFFgGrLCQlAE3WaGiq2KHGmEw2OypwQY6pgEANpbXYc%2FHTbsX%2Fn01ou22Yl4delWLO6EamDE3WxTBn1uvqePK1M9n%2BtjzL%2FQGRfFcED2kqvPYPf8j%2BCcFJnW9MVG3dtwh2k1a%2FQTs8fumv%2BIQ5jMfDaVD3nSYBd9A6AZXIhrXcoppYik2MHumGlC0etu5W8V6g4n8eI0bnHS6lOkWPmpMoDMXcgWYiGS8toyrZNT5JkFO1%2F%2BVlsonee9g23HdgSPx&X-Amz-Signature=73ffa4e2c84ed10261c2771c3a54c0360cf14ff14fba8ce60f688ea41b1a386f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJG4KNE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0rZTQVM71j1NvKh4j7SEz9OFe%2BE4SX88xQMZb2%2B8A%2BAiBCRFRKhqDywWfJ6%2BOOG2abRaeDXkjThbZhJoUlzXfQjSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiF90dWb3v8SDwUMtKtwDF7HJkCAv61t1fkPOb1wJrQVy25qw592dQkS%2BJ3ORGnYJd2cMxhrwyZykVnl5J9Pfi4%2BHCiaspigq7zXwDdTfxp9X0%2F2KIFYw6tIF6EgB7Dm40kuwQCKS9tS8l9b5SrpotqVNtUSVjxWEWrgy%2BVl4pentmokoOLj35rba2rEd1YbAplGKWZTvHp5QEVQ8XA1ie4gfRFOJLjYb5tsBPgdOpSTfF11l0LSU3Ik%2FNaQaWw6%2BTX3ZhDVvDRoU%2FQrdFXWjidJ5c6COSpnB9cvSxhUkA91sxtnmssXFj63bAouZ3UO0xpa4MqXV6HLIfPk7ThrN8MkBwygiDMw934C%2B1o69sN56HsYik4lqFiXiKCP6im62L8N6o5%2BuxZuvqIkYqsKJfHyxdoHXJBufsqNPYwXpIZ0wLL8SMR%2Bi9p8vJ%2F%2BY7%2BMH%2BvCUwSH8ePmzRg%2F%2B5Fg9XEqm%2BkE5wfECiO%2F6tFhWF%2FXknXMK7LHLin9DXwZCqe%2BpJBfa99i3GtuhZZIuGXRxKN41npEbXoR4GPAJiirLITYAmKcnX3vhmP2suo%2FI8HjktNSaZWUaaUI62W7MmveHFtEp0Evl0Xc4TiopRpeQ302WGOSqGN4n3PQn38z0fFNpuPpBHnQI%2FJP%2FEt4wgeypwQY6pgH%2FWibAYiz8pEQeEXZ5LZekQ90wI%2F7UScT0VvCUqxZwVQJHuTSSPPSFxpxw1FWQF9VFnBTsp%2F%2FL9LRTSi9uZMx25gOx0hqz86JHTJJNEgBp%2BSBAPKfok6ubqYKqh6jRAgYoC6tfNhbO7NSGnCJM5Z5yCU7qsaEXsNtHQUFrQP0mTpaMSrL592QzqdVH%2BPm0YWb7WblQnuJWERHxefZSsTaS8RnfTNIy&X-Amz-Signature=eeb79bbdd1a2c163f046f8675218a2b63d2b1f7faa6da162b144cadf9f3b1dff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
