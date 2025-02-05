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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7Q5O5U%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCaenfFaYWDNsjUC7Rqx%2Bd7aa4OMPAnF0%2BzQ6GlDx0brQIgBMNo3AhJC%2FVRXrA1VXcv1HtFxQDKYMSglf89Gd8ofTcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPHNgWziv%2BO%2BBv6E4ircA8Utfsbc%2FhIrFu4gZ2RJrXfIoxH22Hp30vdfpX0clo9EfZC36tul1RvHb2gmZEaUTThtHiQnxnVngD5cPkymeHhFN5FP%2BhOE5zXJ79OSWOhONAUbV1i54Vwoviy%2BB4rplr%2FTOpy3VHIi2u2pJJga4VczCMQQOFiaFKowgm6pu4jjkr7HlYA%2FJQHsvnOBl6%2B8H7nnZ3FWiempCC2duffg%2F6PykognigBAM%2BWBq4vz9UyXMgJvvZeKF3%2BxN8CXkwAHo1gfmXeq9ZenZHbiT8Dp9Lg9eGc2KQJvzOMn1q7K77WsyanFw%2BwNElFrlLyh10mAbUVCLRj%2F6%2FaHcJtTCko%2BxOH8PendY%2BFZsI4K8xDVKNbTrf5VVX03dkfVTcXNoma3D%2FTSFtZugV2LUrPjkL5iywzOz6RJ%2BMzpX%2FOhhINjSC3OpoHPKeBCfm1d2fIehBohvhPP1c%2Fh9I4NfE4hIS251%2Ft%2Fa%2FJ74acbupJHYtXA7ceFcvL2GsyiwML6CLt1WddJz2dyToDaTwIHt4lesCUhT0MfmEOA%2FFHGCpa9oNlkBf67w%2Fo9G%2B2snzdaYN85NWzk7WQTe%2BHiGxvQXOkQX0Ss2UKmYhCSLVarma6HuQtp1zDK3yx8U57ONuSzHS5GMPW7jr0GOqUBUQCaUEXYVcV1teY6rwqB7x4CS8%2BQEGPxRPJHJ15RmizWNNmG7AiAr%2Bbmgfz1Ux7UyCTDJHRfjmizIzrd0UQ7NwXnuPMevgqEd9lScBwY8vZ5ZPiRSgGZKItPDcgJsgaTmUpO31QNl0OjNPzHDJorzvwJ685tMpFJOZIn5E2p7lsQ37jIShPMX1S%2BFRNOPA8yv62C6qemFFkCyPvt%2FoRo%2F2MTUbFD&X-Amz-Signature=bd88ec899b20943e41d3c656a282a28c145dc80eb4b9d624345986aed656100d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF4GNBNL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBG52kR9QkT8SX8FjmA2KD0DtBc%2BBYXd35A6Y7kLPEpDAiEAySHz%2B3hnKzN4LC2X%2BE3PIcYcNK3iEj0RDMzuzhiauj4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOj9H7Hyfmj7kxfjByrcA1XccuhIp%2BzEX4sT%2F4j%2FZCjvQ4TZmHQZKh2IeYcFXMxzEm0p%2F6K2E4OQ3zQj6sTEhUFV5gEadzPNNpuXVdNsP%2FX92fblFHnG7vVUNkjchAtJ5z%2FCXkXzURlvMAqypKK3vLdWy6NBB8qjp3dm4fupnp74K07maTege4nLwKL3Jk%2FT%2BiVIoR17paDYSvkfPNN4F4K1Bb8Yafpg1Z9Lcsp3tTXH%2F7f6WcjjUp4t0QqQgfvI7jLLUi1L9NMMrp687tjdNB58p%2FJXg4Ymr%2ByJwd4r1EJ%2FlKYaJixfXfGEL0dGLtITXAz%2FR6XjpcSdTFXQTDgBraL8dRXIfYeKBjjCtWidEezsKqXulhPeG1pSvCvRWXkN%2FU42yfbvjrNmaC%2Bvd5EKx59iy5emCJ6PClSo7k6hCu5PVO2dmqdl5C6gQIoXCE6TjSBqqUOhjc7KdwNwlTmN6SHEB54Nx8VVYg0L3b4tpyUt%2B7mYgkjb5s8f822%2Bu9qfwhUP6ShL9sLUIEQ484pbP5vJhlAusK1gTPuWAnTj%2F%2BbpHpjS0DcQQVkXMRSGs2I1yUV180JPDQAAcOVXf3CS8yHTKOf%2F%2BoleWYl807yysM%2FkVwR1xyOpkSarJ2fKeGonXKw3V1lAy22iOYC7MNq7jr0GOqUBiGmgwrma6NwNRk28aHl7DUkiFG2D15031D740e%2BfCdusQAC0UJVuuyVQgyAs035CCsGRrtApabJgUu6X%2BGNghB5DKMtRJVN%2FZ3TAATQrwgh4MA0dSqaHLjB5pIZmytR64r2XKDG5ygna4jP6VYgkSlYPsBe8Jl6VjqIB85n72j9FZW1fsriW%2FwCjIaOM1OTiNoDlKWU3qv35k5BRSoh3tmmVbrFk&X-Amz-Signature=8c1ae12bcb85fada918c7303eb6dd4c19ecd6d2010b03c1da4cc30ace654bd4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
