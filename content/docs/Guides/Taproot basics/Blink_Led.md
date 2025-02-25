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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDZICBK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHZrWiUIz%2BVSHBh3ca4xCMD6vm0v2BcEOQFEZxUT2m0QAiBJ%2B0m%2BXMCAeCTvKfyh%2FSZhmggR4CODBHv9j3WI%2BnJs7yr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMC5tzefS6LNABHTDnKtwDbl3zK9Krn0pRuXhZGKjPlXu%2FMeHVNbQS3bLlFd9PSSlh4iRvJAipmGCWIwAdGNwre3q2jMNnqafWBgN7YhZrLnfe2hr7vkPgUaNjLx%2Bsi%2FdAW8CQx4nwjvEmpXgpl2xYd0SVyrgq386Ahlne9yljSMd8CK78NN7E5%2BVsbRGdQWybk9Q8tFkjoCdkEoYgMqCScsY97J6i0RTUBb%2Fj%2F24AGY0ZfE7gfCX7KqOfQQuQQPw%2BxMP7jicdbs6oemkKGw%2FUsTXtKd2XNVrMDeTMcqch7A244tiPV3nZhO4%2BA6zeOE%2F%2FvXx0%2FsWW5uiLDC4wfDgyz835dnrcXQE8IcTfPzxDXdz0Jgxymv%2FA38K%2FpaeKnX4ziDK5ng89i6WdrFe86OpnGrD0%2BEVXsTeHSxijGdPLqaRuqAIRsAT7LNzOi5gZRqaFdf0ZRPJ%2Fobc7ycOOi%2BE%2F%2FKpxEpvg2UT3UKn4HzEHkuL9zaD0ZsCk6AFXSKCLYVV1YLO6eDG6zvGgtM6ETRxCMeHCgc7XpRRaCgo8v%2FYatMr5cfXmO%2FHq5nGtEK5h5KPe8pVzMIaVWjXF0qBCBkHeQOxWa3w0NcDv4QTASKhlh4wwTfWLGbHci9fOQi2YEDIdpOMBJl9JkGWLjiMw9Pj2vQY6pgEPq8M4zae4EKwKnIhJs2rxke1%2B2rIc0kI2nmFQ94fbRKE38pDib4AkhnCSd%2B855VY29PZOUn8MhXiP0S2hR81Kf%2Bn3RdDQDh%2F2OIeHApE8gvWiPuSlO1zclBl2NY%2B8nV%2B5xgCwx7yWAVQAXSIdZz%2FN8yIXarc52OsKfPkVmRT95Ffl3a9bTNBrEsrs7uAEatO9zl8T6vRraGlAw7xmNWsYlcunXKIB&X-Amz-Signature=a30a3056118c4055ff2c56ea7fa970aa5b4af90a8134f65b0eb18523c82e22f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOUBXZTD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD9UqsVvUO195PqWmth9Guf9M1PBJJ%2F6AJnqH8wnTt1FwIhANqU6Fs7GxbRr7Nc1lzomIZFBw%2BsXfNFn9FdhxErzlSjKv8DCEYQABoMNjM3NDIzMTgzODA1IgzkzNXEEnU5zeFvEKMq3APU2o3YKKitmWYJgtyGkqjgFvov%2FzEtDLYtOdKf%2BtmL86uNa073VlNhJvey7tALOkNxjzX0x%2Fs7BihnB%2BQzzEgSjt4pwTHwtdNow%2F4D73RLaZ0DYeV2OtS5yFECGFTyTnDilgtJuY86ljhTM4S4ryVTK0v4Ze8BtsFm8kjITa2jcVWlu6RM85eC5ktHtBRqlEif8oI3RRi8D4fTIm3KfEFR%2Ft0Aq9Z4p%2BnzCSKZTAkkPn38pZviQ0o2roCnDOZxL3Gr4XJzyP2k1j2eYYqYewyIZdhlc0F2Yya4y3fSVrmnyedd%2B%2BlZfFGd0%2BAYrs0xu5zkp2ICcsf07oHtmRRd5qEGtt76LIK2hpVdakBH7TvsEkVQDiVUJEOs1WBEeBZPcjzRufTEOPgvKHf7pJvPcVXxbj0cZXcxOCGiFMZg%2BfvLPOIcqm2ofZO3qMywORh%2FZkmkRuVpVEgXa3PcXJCJBumn9fFgfvywLU4%2FW6SfQ7%2FcOBc76UHqgHH%2FPRPL7PA5iKzljF4QWp7NyZ60W9%2FJWWJWH30u9ewSLhjEY86fzHK3HJrNAqugxUMRW3yAubpRq%2FwdxapqOb9mlqvm52yGP8WEpYdQeNnwMzMCm%2BcZGNcZyoyqF9Or%2ByOoSEVxajCD%2Bfa9BjqkAU1LrTZLBUSsA%2BpKTD0hRRha95fY0ZOp7gfkc35qZu%2Btu8AuMBuyynMhJs7VMsoXaThfz2H6mk%2FGkJNLNa0r0v4fk4VokxZalYUwCMx5FbHd9dvqmNDeHrSAEVlzTl9Qm5gcJPT3RjYw1oa6c5NKNzHVe68vXuyMR18hefSu%2B90lNGwBfJYXRF70K2XZMRmXdwZ748YYbR1v0RQXmzwZgiJP6jDy&X-Amz-Signature=11a44a918982929cceca8c2bb5a53bada9b59ece480020089646c5797d32545c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
