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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LB36BFY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmdZ2ODLAsXRVBy1SwNqZAtGX5Or%2BHaJLV2cfNfVwYSAIhAKzGwGvYTfjvH1sFjGP0hK%2FadVRJHq3P4adjwg%2FfSyc0KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWd4e8JRZYadWcm2gq3ANMKsKuxUwwSfvXM6SwBQsdGZS7H3Y5UZG6qLNuQiW0zNrGvAsa19l9xlqthUnve%2F30yK1%2Bn178s0Cfdu%2FjJx9IeajasNOD7rtAVPz5w%2Fv6afcu%2FrC%2Fn%2BBjc7Lu8WlrGm%2FsLpluiLnU6NH0REGQAHeLhL3NBQdKVh5yFpzFVwdtXqjluiHP8wONWLA7aZ5wkf%2B%2B6je5VJHz83f4SWCmRBAWU%2Bu3hA0URB%2BMvUphnInj6BPZXlKDbU7Zb8gOm8vYQPmWos7POzAvSX1Y8TH%2BybdVZqFqbzuMkSrVsWFnlMP0KNoJKCMg6kfA3GJ4pxsITM%2Bnp8BKZNmBc%2BFsfE57xP5kOz59nodZOACR83JpJVaktctHbQd5UN3Mcup6NVHup1lc9CbmikU7Q7IZpDXYNALsb1bvDWZxs2KXKsc%2BWtl4qHSnGyhoBmwANU%2Fa0MM0xztvNU5l148YOX6Oa8kRnfwiADV7KHomscK5h4n6aoDg1wt7gk2%2Fz9mfCpf3k41flP8fx2XFrH5%2BoJ5347GxXsCjpISLM12KvxH%2FMzsGqI4OlmgDuOz1ICub4vD4alAn86qjTa4HWA9ThcrxN1jIwHW24SZ7m04vsH2AUDUIzv9DwPMQr72QurnkN%2BsfujDx0dnCBjqkAYkVLznIuTXAeAxbZRPTyyH8KDcYIRCmEGcqgA4%2BjNkAOhfTnOj1mD3S7c0z4GUG1ABBmPTWe%2F0DVmcS7lvDnYm75%2F9XXfJemmSeiqGGXd17l2df15dx%2FHiWjo79d0Z7L7ygQMof7vDlt0kJCGJ%2F7ORrov06c6LqmO%2FtDllBkcuJq4gBqvnQxeS7wBh%2F9d5Y4kH3eKypruuFuvyWRsTE%2FgqQagg8&X-Amz-Signature=2feafac6c7ef9b2e59a99cb644135bc49ce327d22446d69eb72beffaa214e02b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBS6KFS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk9vBU7VPyz7yLCWtwBPzV3GkSBbhi%2F8QOnHrt21M7KQIhAO0Gpa1T1jhTVGq%2Fs9E5Gjjn%2BvRiWrbFqahsjkrQNRQwKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2aD5RjDoZvYHCr84q3AOwK6ZoK40thO3mPAXM1W56d0zqBElV891n4Z4PGUnji9olNIUwin8EJWzpx8EJBXNs8qUViNTFsYeCqvd0%2F%2FDBc36b2AvvJ5gVNov8GFvQ5g%2BrON2NTa2zcqfUJQwvUARv1MU4OL5m0jx%2BueM7v9VD4fftyVLZjzGQ8UwVCFWAbtM9atgBcOnmERimkidaJVpFq4%2BQu9IJkyj4UBxRTnSxXRoXLtqzyB5VmihjdLzr%2BjLqc%2B7iIOQhzHfg%2F7nSgwyILdzbjhh6pvIcHFqB04lE9aHHhle%2B5%2F258D4A9WCe5NEL84ezIXYjOQLl9x7NpzE49PjxR%2FniN1zgH13vPiL8js85ZFbFGbtnH9iWE3xPNGC8QpW9XBqezJG09hAy%2B%2FzCrxXkWSp5PYWfGIUlTgJUEyaDof38C1u%2B%2BdQpzyw%2BNnnYLZ9n2y8U50Xi8nPxANFT0rKgg6hBHqZXl8oW6f9mhvgSSl8VwJ5LuWneL6S9uS3HVP8XHW%2FuttJEECbcwJG155MpI%2F9SkoWI%2Be9owbloWGkwVfRSMZ2DL4bNf5HuUbUpmoNpZ2MeBzlgUvu0YMD4Sc%2FPYuu7GYKwuHjDC2TMiVlv3ZyK4rhj5WDfMTxhDczg0FbmGBBOE7WQnDCQmdnCBjqkAXe1nExPaqskeaFfr1GciRPLvenbnAwjRnTdcuDmZIvboZ3hYGzL6MuxI3ts7fnwn5x41xiyVr%2BG62e5ndOWUNPmzWZAfctRgBFxiKGO7DN5ufTOHVLvXmnXl78zDUuAJyGIPUPWmz4L5U2P9cZdG9NGuGMt9cSBD0yLlSbNlJfTITwMHYuCVggd3%2FMb8MwD1yVBKMpVtEAMbaE2s%2FyooOfqnP9N&X-Amz-Signature=a52893cefb389a5dcd779fda423a65f01b141286d52c3066b21bec2eec21e4a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
