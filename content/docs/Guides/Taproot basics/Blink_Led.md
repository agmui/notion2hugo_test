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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFHNKLLS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDP3p33VyWN7DagnF77vlhL2%2FLglyY16T64tvCzyogGrAIgEbalNP5ttS6y01qIXSRpFZGORvUHhGgQLajyfV8ruZcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNXaaU7GW%2B7km4DppircA2kqvlbLFE30kCnb3lPeaZCeNoav29HKzQQzy3mj0FHchk3CIJHAzPg1qgVvV%2FQE%2BT5NPpAETzWrklrdUOuC8S25W2xU3VxPzWkVyzg4R4sejHBKc%2BwCewChut852J9s6Xb2qP9RDd5KVE5MAqMGLY1hdTCnGcvoQBwjGOEblUArtcZlXuvmTLzigtD4WLUFiJKlgCrYfOquRvxF4H8P2V5Z1r8gQHBVYz7C%2FEdJjFIC95do6YYHkE7uSDLHUz%2FDm9YCmxUPuyWrjCVAdin2G%2Fv0ue54rpb8vPZ1wD7kFI70ipQaZievP3Xaip2mGTWUeg6WHv3awOUhc%2BrlBo5%2Bgyi1yVPnQyhiVnWlpMCIzgGJpF49pZiatH2lMVlQqS79Yfo2%2BXPzBCfM8Qw1lkLQgL%2F0RChL3xqfWRfi8Fj5j6BMCr82PDK%2BO7OnaolRQoOrbjWIcD7NuipSlq7mfvBD%2BIL8PKssk02poVIIcOGKy4hO%2FpKn8gNa%2FPvhjR9E6Nq8muy3Sd5B9eyWjYlRqFz3HiY09Pf788vUj01iL1AELiVVK5dfa3gL3SME3PpGBD%2BV70V%2FB1EcEQ%2BCbiD4HRccjt2n3sPRjKX0nueLhvvlb9u3ghNCA%2Fl8cWh4nlDpMKK2lsEGOqUBbLAkurjhcQenWLHA3T2prQQf%2BnwDB3HC5xhH7tM1wiqFPDv4H1vYDoGa88f0blQo9umnGhJfl8Bf5AYYg28P9dn95Yt1iEOyh1mPZuiqvEZXf1wh4JxCBzQhroG8JhQUJUsjpteiFui7qnJyh9W4j3Ia815D2aqJazRudOO4%2BrFrI%2BzQvCBZUwbsLyYbtVe9olSO4BNlDfEdjS%2FGiGiMI4bRwNuS&X-Amz-Signature=aae09a9dcba050a9544dc08695e278a68d3756b086af7ce03b3ecc903ceb2ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWV3V5F%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCv%2F%2Fl9DDmaFeUraJUgXlpliUi83NZb50k%2BvkDCzz72dwIgeOWDlyA4EAtXfzh307KpzNjJ5bi6kNRFPDe0Xgm0Vikq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDI%2Ff%2FjJiqNrXoeENwyrcA9LBDVwLKFrd7be6T3ucuh6yNdP9v02lLNNmEgv4Te2yZucI%2FPwlXy9wtsv3uRwUdo0OgKSuNMVmTjZ3CXrGuwi4S%2FYejTcOz5JIgu7WBjbdz4ua9v74owNL3JG%2BdbSEoZceZieuIAHBDXgfahjFTspFu7bVfPGU7sEmtT47DeEj6VoUKaJJD7VY1Yiol%2FQSDfwAIc4BFImyRkjoxF0U6LEUzXiaqoqxja9m7VS6UwksQct%2BvN%2B1Rx542xJYQEAr4%2FoXk80HK%2BbJYbc169fCeL58ei49NtgJCcejsUh4yqVeeycP6pOUODuYUuQBZjy0hrytHdLTYv2xMvtvwPjXFeXFDiqBo9cyvyvuXf1jltPgcGlqH6C2xdLtpXuf4XCeaPUjuALyqw%2BBO%2BRX3kxaP%2BsLLpMjPdqJfBIM3957vHzG0Yg5rutWdB4cwKTmcwqtywh0i8pjpJrC5%2Fy1ZtAWYJtafjg3dNU1J%2BMV7WapZhArO5mDjCzFRsvSyHvIeNdxQNikPlfxTtwlua0JxyyLTewSPwXK4ShFJ3GJKAqU5pPKhYGFwI5rInehQxXZa%2FVeVJxLhqmigDS2mffjLZv744%2FCLyqwgoLMj72ynbN6cuk%2FNk0DxR5Z1NZpJn6DMJ%2B2lsEGOqUBp0MFISCYo6fOedCI5uG8yVxOOMr6zSBmKFW9RCZOgHTtVO0qyZ4KgLO8Fjdutqr5CUVjU4wISD%2FrpYUjidoI6APHD0G8KZzunKp%2F1OB5x3ktXjPOPxhABo3jnH%2BRitzgHUqcc%2B5kpL49KFX8pOqoMzwZHHlJLaaD26T%2BRqpvu7Y49clxF6pzl5PwlDukUTgzLrHpFmZ4iN1z2nDb9CTB6xl%2Fs9aF&X-Amz-Signature=4cc38b2f4ca933af994f19b7216f4644c7db962485fa6875798656982037a3b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
