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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F6PWDLR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJ%2Fsv65xnNlSkEr7lh4WOILBSNskPvbN15mFIijLWpYAiEAogXRzZEaRoOSZFGoiMOK3RvjTHh09Amtg%2FBSHEXXAEsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDKQHQSG5I07AtPMvoSrcAy1uhITRKAxs7a17m830oZ8wzFbE863GRXg3i71pL9b44BVHgUinUbhU%2BRb41tJXnAoUP2b8PGZZwfBBQ%2BlLJnzia3f5Y8NA3Ngzp13TO7yWAUHvtr2lV141XS2bRv9UUejmF9zGF3tLZVJ%2FnKr1Qb%2FG4Q%2F3SR4iaLwC8IznWsCjtlAp4DlLttQlJDmgtTd9RhXjMOj9H14fVcyZrkbMqB7Sih5egNjRlQoy%2FfGTPDEUf4VXaLUvWhDyVCkQHKhldIy0afP6z1k3AO5azd2UhVXtnM7c%2F%2BUS7HgVu6SNb9RhbWki97RDWepVUkyGHruq4aPHn1sI1p5mgHCTRDT08Q%2BuCTQ3CPpYdMKRZ1wt3DotX5qR2%2FU2x3NCEjyclQDu4Z8XnauBycrhfmPX%2BOaOlj1ApBBw8A%2BxPvHFJO%2BxDWh9IFPzsK6vf7oLpwIyX%2BFDG6LWmww2mzVgcbDSKgzBXnV%2BYN2F6hyweqKZVUQ07NWvo5293jRPbUZP6K%2B2INghIwC9gZKCCochw5jpf0JzsXyLrnKuBzXCyp9%2FCjrSlY99egrGSX2jtIX3vkGMAIJiphhZVABs8Bp6Kzaap7TB0goNrKFEtL56CUWF5zXVRB3PUZ9%2FPbLUeYP8bjnSMKKOicAGOqUBfzfOwzICySLRvZ8hpABM4TF8UlcqVAJ4zSJcf03ivzZKE7R4iSIgYUpoyq8A5N%2B79YQMJONwjKbUcMtksdSW4ZMYNqbbIwNDJMlL9PJ1inJYUYqRYb77OtTIP%2F7xcabI3LZVHTUSRq%2ByFxH850VbRM7o5TxTZ%2FneAm%2B4UW2GV1o3Wdz8LsRcmM1JoBqQwqTOut441%2Beek4N1nKUQj%2BXIRARsAjqZ&X-Amz-Signature=293affa585a25756e111d2cf95f3516f0b1fe4dda55260d920fdd8603306a60f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657DUSULO%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDp%2Be4l%2BSu9a6ohmT5hFOATd8HEUE2AH1v3QoJ6cvSe7AiEAhl%2B2H2nGaE3tVhq0TrtmbUVScsodRi6%2F15oM%2FZX0b1Eq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNMAd0Ek2CuIVn1SbSrcAysI8n628BXTN9Sg2POi6iHYz6dO3g8lwLUgVddPq5gv4pAiCllntFFYtlRqF3VD%2B5QjlkjlTGQeEKnC3%2B1qUO0Y3hpQqGpTZ%2Fr3EiQ4QAsAtnlL2i8cQpetsWTQbmypqTwQxMFEw%2BxPZS5wy4gv9QBNDUjSiHpc3tXify%2BTUinefdVskBxUrXgegronLLwCVdi%2BU2jpsIxTbRXJjFfUKheuFOnEW9nWQ3hKPFTEYctdJm8%2FrvmslL5ZcbuLMf0cpX14fEHFDDCU2265%2Bq7YHmNDDQ3pV%2F3u4vpSuZTGqfgdkHxi5sLkKGh%2FyMGXICWd5f0KoWjUugXo09KY23xALUEspDyESGqMowyObEBjkzzBEPgVvA07P2LdRcjkHstQw0S0nyPhogr9E2EEv7%2BnDVOohpgBwaHAzedZF%2BwAF275tAaDB2K71TlFUabreIAhII56bKvW4I3PsUvnWrNsP4djT%2BVa73WzshTg9OS0JytuWvSrdUvlZMqfdDuvjEy9lVFIiU3p7ldH7RcdWqbJ1SOwNrmy2sBz%2F0FJ6quj19ndbd5zSdzPJ5IlzA1dkJwJ4GkpB3HDsKuw8HI%2BeBCBNuOsTrBLZOtshHu21m%2BzS0CxmE%2FzFkdOlwbHd91xMIGOicAGOqUBgF94GKqn6s8WjUXlqK4uc69OCzwWEy%2Ff8%2FkxhVhvs7M5yU8%2F0Y51USkTEeRoYAec6fT1vPfKsXoh3uxJ%2FFXZ5V%2Fw8DLTGlr%2FuA9UNgD1YUMbDTeTvLXObdfQ2Cw5EXYWR8hc%2Fi1m17ceI2OICG1MwL7Oi7E48lTAX1YwpDFxN5F6uJC2GIM%2BgfyEu1ApiXYcwz%2Fz9oCzCvbh9ukcEP%2BN3B%2FfWxzO&X-Amz-Signature=3dbb1e2d332671353e6b64ae086575f02e4888d865228c5c0707c77aaf84eb4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
