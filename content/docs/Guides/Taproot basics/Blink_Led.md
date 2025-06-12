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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW73U6BF%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHTPW4P4OichvXBHUQzO6ObycHKyJ5ddJ2gpcnU%2FGJypAiABZxrbRxYyRypCT3pTkd1zof%2BWn8DsehNAkOmk4gGFqSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJNJ7EdCPyy3Wua4%2BKtwDClFXIBX%2FQ3LMYu%2BKTbA2e5VLASWAx5DUzE4aCyo2gJiTuYglJUSpVfpFejmUjWPoYZ6SETGvPaNMcGakVNPd5CWYUQgE7%2BTqJE%2BJzFHK8Ayn%2FoNmvxZdQIxXpj9d0wKoW2C99DDMcVJle6e5o1HEHv%2FXRoMfB3fQuD6t1R3IcZ9kItmenRu52DiDw9X66H6KbNJ8EAV6fwRMDNGrHXZ545ifQsi5S2c6PvLx9yBz9ruDyJhL5KDPzS7aa16ru0yPwPzu53d6qP03ryow6%2B7rOxx%2Fhd1da6ZTMiy7eSAnuU5zptKyWzfxWlV8Pp%2B4qKxG7Md7pjKIwcy3PgHWNAn535Kmijt3WiWlcseqXma0MqqmtOkdFFM3ngy2PmH0iq4nbFxSKqdu%2BBtK8yH1h7uFFsc83jGqDvP0RFXTTCo5tGmJ%2FQlwJOUZ4%2B9TX4Onfk8rSImee9%2F4bit0R0M2MDLf7tIElu1QHzYdV2%2Be2jIGZEBYZYS9JFLit%2FAHTNBhGN4ZLtIfJ0IKm%2Fhb9xgiJmkzuLE%2FsgpjAWxUnHYqoSfWmRr2o2MTJbcaFMkmUdqRU9ZOBNXsZ90bKj7wzwdipdBoRAAvYvyst1ceruRLrrE2YqVoi2lToPJpSkl88Kkw5pOpwgY6pgFrmRGhm%2FhUUrPQ9aU9Hh4jzdyoOPgWOQBiZmpJlA1wyY5KZhY%2F%2F7vB1IYqUkSa28c7gRjDMQK6jxsBAEq4VihfW%2B1D2Ey7e1km5ZxMMWmHjPPfkoEMQCnkkWimjEwP3zgi9%2FZ%2FMXZcgxn8kcxlcj6g3o3SKLiTeEbfc0M5d1EaqDsbk0vNbTVOu4oB8gEcPWKIgZkXJ41x2MdDwmZ3M10JLeVpVb1c&X-Amz-Signature=1a81c355e48edb28d6f487fb95644db02b0d548ea30f2f8c528842c931228238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB5ZSHQP%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIEJD2A4hdzrjAqggv7byla7oEjkG0va9r20sRN7YbMGwAiBxtwo5CM3vDKFaKxfi%2BjMS0yi8mKpU5vv0dl62UUlDfCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM35feUYk9UxOgR9ktKtwDU%2BRry1K5YTBLOTHbyC6HOUy8SnhU68yua%2FSgfhT1ikOBjnol4Q3WsKy9oWE4%2FFevKNLcrC7VLqCid0jyLAkXktuk0nx32%2B5K06a6%2BUMS73YzOFgQJmwUjdEab5YNcpKWrLa7R9p%2FUqfKJ8f6Zpm07EGTWPes5kzc3q0izWKwN5e3vFVZqj6kCp94jhQHA8rzqFT1Kl5vKBw%2B9AWgAGer0FCJ6AuCqrogV4iYBnnqciLWAx8dn%2FsxxIIyfCxNDohETMlcy84OpOPZ1BoxsuA3oEHcz%2BBE%2B6s%2Bf3ZnPXYnHs4xW7VjBV6Fa8LViBdRywFAmgvS1KE%2F3CyBulxtElyxeQNzMF%2FBp1ZWQFSdfAS%2FwVZSx8l3o9MwoIbBVCIY1Qx6%2Bj7wQYIdYjVKm5rgHR94b%2Bu29sSxl5hUJwX0fdHOYN9HpJ0XrNFor6oTaOJR69KH2OXPax7XROKRBfQb8Cl3Dnjz95j94A%2FPHWWbomc4ZCHAM1xfVrxemPZTEWefGHjIMB9k0q9z3kGhUCxr0Aa95Q4ZhFMDXZoo7%2FMQL%2FkEj21uRdPONAz4UkC35s%2BcHwrNuWiic6Sn576j6zElKgTNFZ90Aca7RtttqRJtGwOqaoZJa9XEFnC3hzOoICowj5SpwgY6pgGPuML0QCbVchQGCqNTnMVsaFnBigAkgmdCPoypa%2BFGCDW055bTwGyrDWJ%2BlP94UAty7xHTq9Tiv0gUje%2BD06TMqqjGODiOlnKv8Z08BZ8YMQ20nT%2BzTOGukhnzNMIHw5SZRGJVRz1ENI%2Brx4szV5eP%2FfldMC0ksN%2B8vShh8UcdIXWmLpWSOvjLvlg%2BLBu8fic%2BJBHvSAFp53oy6IJIa%2FBHVeqtCRZl&X-Amz-Signature=806b54038fb9b349499e10be4aca9989f8a2a912d9f0e53e43d0e0e68e04d52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
