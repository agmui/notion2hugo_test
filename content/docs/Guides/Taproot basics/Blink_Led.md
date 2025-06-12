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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6FZIWAK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCztSCmheDr9drjes28wpFsaPtA7%2FAq8YXo2nqP9J9%2FcwIgVXF8Ayhp%2F1TfmVGIOr5NR5HyjsuQebo76LaxSE50oEIqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCPdnAthlddUpdr9SrcA8nmGr0dbCDzI4IvX%2BBJyidD7SE3XIR5lSk5cOMUfmzWvpjwFq8XumvkdGqDXlbZqR4SlZfW0a4x77LJVyyKtYE4UUl4lQMuxBsmLir5XJ8y4MwjgA%2BdB3rEru%2BFfd82JlZoVITBlE0AbO9u8Y5F%2B7wKWwGm%2FbzXhbtd6cibzoM2kuufu0I7aGiRx9GMmSj9fnd6BOEDhJdz2deK78vpBl22wzTYdYJE2Lm8KWPmfcxVnGX%2F9sk89QThgCqy7GlitTx20IgoKyqnRZ00xu4%2Fm2geOd1%2BpHjDhjLJA1ZT6B5aXF2wzBu%2BRD2cD78Tz75DH4VRbAajq7darvzmekvwam3k%2BxQMhZ6H%2FqckbwxGJH%2B6rgEdSiP1pXLOUakOQNDdLHdpaCUXFXU0yKmU%2BewYpXZEHOrXP2UYeGiwRfxPjmEhxm%2FI8G%2FWBqArbFvnrizTkvnW6nr2cKpCK15sPKQsyUBMsbNgWgb8MP4GjQZ0CoB4I%2Fusou4dUP0tOeo0Mqn3kJYlmqMtx85%2B%2FEjTQWtH404Yr3%2BiCavac4WcNCmODjaVS%2FIR%2BihG9uo87QrAAbbUYyX8vIl%2F32DQNNT45NZMhKgagA7h5CC0MAjsYenXfT9fig3d%2BTT%2BVr8FE7PRMJ7iq8IGOqUBQ6dFOTnQlTH3DIO5pMuzDA86bdZlU%2FgIsbLt%2FdoaGwAM6nJelwP5JQWXy6ymmv2jD4rcBJgCAif%2BAETn5%2BrEHeFcKceRaYiFYs5BC%2F62EP8QiGBbR8jvJnkLqk9xRhe9fpX4tor59Tnp5duYt6R1ssVucajTvH8XgFfck2UyX6v0txGgG9eY9bjdTcQHv%2BsXsnY5ncBgb8KyCTerw9WSaranV0Vh&X-Amz-Signature=450ed7663266f477c30f76424ae0fa5b2d6ee52f94028bc989a6cfdde6c8d623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MCPRP3F%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCTOcbJwbWhJYRJiZ3UvzF%2FUpaz4HiEp7rb4CNgS6D99wIgbdKQlG%2FWdlQJO5jH0r53jlO5GW2b0Fi43XkzYMSs5XgqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuZFCbfRChawstAASrcA9L9suwoO%2Fk9%2FEZdo2k2vdW6jRrxcDq45cECvqIi4EramSwZuuGM%2Fsn7Vv2DDZip1jij5FVgBdjqxLwibDEzPfs1kL6oUxHUe2u7m5PHT%2Fyldy7uZQysfc%2BOMG7qw8M8P5yFzGOIURNP5xF73YFBGIfeOGgndvFuIUZODpCeOV3fuxbGhRs5zzJxJXcEFsETV86r6OM8f%2FuIVfpED2VgKGPLd2CT19ja1C%2FYNiGCERNGiqFfzBIE7WXFJQsIOdZgrPfwQp6W1f0vA0WAtwRApAi5USwL6XJNqfq8bkHUxovCI2qQqSdwx2r1iB9k4lcuWutlNtHrVaCE2f%2FPl5nomljcZlrQsXDQyVtVnLKCTSrv2klQ3FuQb6Jy0DvqRBB3aP6bFEk8eBFzgQYIE%2Brfs9wFTfMz1bJqulUlxIp5cSIazro39HRD8H6Z7Gp%2BH6L5VokZol9zvFnr5eWTPOr84pgGGrAEVjIwSlTTsF6sRr6%2FK9w5Wk4IUuLG30WzIQ8LlRUndo8asQPHz8HXQGCoFqxX3CsXsSg6ZGJe2AuCnAKkKZliVRSM1nzfWDQvx9Ac6yGppYyVi6787b3uvDm3hMCGZsmKD4h68VtfoQdIlVp2v0IvXJxOoaAsn0NPMP%2FGq8IGOqUB6mwJnTDgRKIkFJoF73APam7fK%2FvfMibT%2Fj0BX65a0IeC%2FwP7jiEMT1sxGoGsX4gXzfuveVly%2B2hbM80f0P7MWTJQmtwXnJOkhDORKJjsQoUIRSpjqhve8dPEIr0kK56uRsMFdKZzueqOD8WIH6DtO5Hc9k1lyEPuvzgCVxwJ3LNT4wwLvbd7NeYGZ70OzvGkHrBiYcnBiv7dfpZqD1aEgU3AEX4w&X-Amz-Signature=82156d50ec428f2381e47005bf97017175d490ccd9cc957af5f8718428ecbb05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
