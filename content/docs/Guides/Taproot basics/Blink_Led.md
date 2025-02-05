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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLORKHI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIFn%2Bb0Zu5tZhh7TPvrCkKuBBNQtDOqrMSlZj7R3OVMO4AiEArXpRws%2FxuYVShifyxRg1KC8HMTuHOT%2BqyAuTb%2Fcn%2FQUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMAFjs80kUDwEXuw8yrcAwYbPkA8aFDkF25DiKXXG60rNzFgnOQ6oi2AGXFJ2s0Lb3wL66JYwVW8mX1cyes0rgMK9urd0iRoP0%2BTBWBarHEXEw9IpDpDPJfCECjy6bwTwHD4tjCQbohwIvBs2YhWb3uBqdtAxp%2BZRmqisxxny1cKIvleAqvui3FPmJ4IImdlWNQO%2FJ%2FdHgd%2FBYUg6MV%2BWMNKw2bh7G%2F0%2FmZvRXGawaLrDWGHDsvmUcFbarqIXJq%2BlOVgKsFd10Sg%2FS8IGpiZsz9Tsq1BHHTKDL%2FCyCl0VOOyqow%2FhNfGzN1G2oR37qQqpaiFAdP3%2FRL1LD6ECni%2Fr1Sft7aR12tb5JB8FQp11LC3rRs7l9v2%2B37TO2yhwfZEjxCLPb0SGFQB7gWLpDk0I%2F%2BbvmJ8w8fqE8F33vZYKOYucGSIbS639dr%2BhkQ6GeXuDUeWrViJs46jly70hSDbxf5uvwRGPnylddekCduyh3tOBDWeePzvZ%2BN%2BLIEkLjMkQb%2FfAnBhkKFPfKmU35mIEOBI%2BX9JFz2D6JghPl4c8nK2SHhToihDg36BFz5O5ZIP9DgW1aF6hkaJpYra2rP8YZHHPKXUK50zqS%2BOGNr3qUxlU0VeG6LnTRzJUmHtGuqPzI4iKM2TTN4XWBzCMMe7jr0GOqUBQzHHKJfL%2F7S6FbO5bJ1AWHD5mAubdMUmz%2FiEjfS0%2FSb4SgFU3i73eC%2Fi6DFvZcUOogAaif9je50%2BqZFL6rIUTfRY9ZuUmFmfayTtEYoAappZ5b175tbOrwRDRzjqilyVTIbUbhTBDb3zN8db6yBI%2FcdZZOBRKE47HvWqiwICM%2BC4IiC9CR%2BJ2bydkqPP27uP64Q1oK555p%2FPrTIcGTHhCkGxXjae&X-Amz-Signature=896bd091969f8577875e0cdc89b5c18452c99658b428626cf1fbdd4280589909&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPJLTBPK%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFsiUvSWEaiAdqF9dbZcBoPJpGM6H0QmrRRK94vyPdG6AiBjqB7J3nqDOrE5DufqfQ1oP5PIYrCEZuCIAIZfQocuhSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMyLQyYo8SRwJ8a7bTKtwDYimSVleOnSTk%2FA9NN%2Fk5hWllgD3YgaUULkCEnz0TGxkN4nTwYcQkRHM%2BwMXNGqQEEs%2FPbbQ8Gif32RP2buRxNl8OR6zIq2e%2BjMBESibsM9bkIGcULSmaUuzV6XGmxagxCtigmE5kXDsC2zuFldmQoIrTIcrn8ObBKBKSvR2MMr6CJ8X63keRZJPmKmMaqkGQMIKHzsr59PN1ZxIvVhKfyez8MCgmdo3zhp4wmESgaFYaG481RtHQgfjcSLF708CAR96X0LmHEUkXd1Cczf7eDa3OmuI4eMRs9M4gkBTE2aJDjCJkayXuLypdT85rLmFCX3%2FCo%2FFp5VYMHwsewGSf6zPAIXWJqk1Z61k47RGQOpRIdD%2FiwC3DX0anMIo%2B0Zp1Fn9x%2F5DP3JafxC5PQxpT1QWIqHzlcUIV4iB4io29k1kNRbO%2Fm3z5KvxyUewjX9CM2UkbZcZ0UpcrlCNX2m0bWqn001SiQ%2BZDqmgRr00ordAFRxa4KLoRoKXni3qf6s6vRGUk%2FKojKBI9le7n1yJtcksJQpiwaaa23j%2FGOt9EHwXBSL8W%2Fuaurw7N26faEskbB75lvtWP2fGoz%2FNoe1BmBel8bEtIRPuRoeuYwaNKsH0qaAP3UmkWL6lUUTYw37uOvQY6pgHyF5L%2FfHfrEc6Pq4MoVuvG%2F8OwJ01wfEwczlTJQbBR%2F%2FLigz3HARoYda6snklU3NvUr9GmoD0y9KFOxv3GHt8fYmHmj1zBLC78%2Bavoya5v%2F7E0royMX4YdaBMRCTEX3JOM3JPJr1ukrp599Yi0Bo5bDgXxiOAYo%2BwJa6wUKk9GyPqI8RPRnYLlJzvgv3u7hdlLrnVmpRaELhEeLjlwzNoVEDttOPtJ&X-Amz-Signature=f5cbc996b1ef733cb29a744d936078454bc55a28c596ee05e8ca56ca20a52ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
