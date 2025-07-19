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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GENXQC3%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXIi21Cc1aOKJj7sr2GgLwEE6dwxSRCeHnZVkBU2vpVAiEAtq2Zb0yR9XYla4Yb%2FGF55kT5oJ0Tz66J096hAid%2FdN4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNTTuwiNpBi3A9wuSrcAxpZGRvAD7XQyF7A47lLKxz7xlsPT6sudu3flyOLL5o6gc34uc70m6kOiAwJLKpSnf1xreVkpHHrEJUskbxFWrogDjkqmsbe55j0alTlFppGsPsohDU1w9YI2PCwLFebbdm%2Fl5nXV%2BbrZjVSR0NDNlOGmdxxcbuUnsHSjPQjr3mc%2FdIHbU63feGBSWLgeK2iG8Ym8fcnlmN53XpQzJ%2FoG%2FGyBjSMfsmOG8bBevZARB4s2LR7xwuY%2BcCFRbAyx1IZzvz%2Fga%2B5rJdGCe7pCUyzrGPR3IghVw2ns0nRpRql%2FVtuu1c4zusQw0x%2By%2FYg9UA5ZizKJbOUiGI27XbmbmnxD4EN9Q540hY%2BEsaZoom2n910K9QG3amBhss2SsyBvw6FXYgB3Slfu8Oa9%2BR3oxs8LUhhZbZgETkxeaR8grUwprmrosh46JwOlVrDqkhU1QGqaIhFN3MOav8dWGRiaBcS93NLknedoA7fGePCghSTplwY22ucvcrG4qLC6Q4MG1PMPhOXK3oGR8aTTE0GPYttYBt2OQgJheN0AzXo4UFMHB1zdMeC5bAEvOGxwCtnSX1Fe4RwzSJw6c3jIumMNzs2Z8wizbcxmz1J0V4HFrZbgIWQE4V2Da8DFoLKG9BkMKzF7MMGOqUBWbJe%2BRch4kb3pLMHNl%2Bj2ifDESIU96lJ73gTqiPLQs6NU%2B6F6db9H3E59dhoXRaUIbbHXQoMI%2FVGyECtBo3CnUoXS10zsR1rKUKZu%2Bn05GVg54BCBjnZ20hV1LiDvG%2Bg5May2RyYsjuEc5TPd5u6cEnvRadd15sCronJ%2FqLSNq%2FgWwFhGkd597%2F0upVsAma%2FVwVlczDHu9lIogqd59jqf7wI8SD6&X-Amz-Signature=c5dd6f4e0665349666f5ba99a7c768f1f99c4e96516a9e3ec9fddc9492a6923e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPKXP7QT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy7CNkh8xaVp30ry7a8wtRNg2%2BDGBxQq3Bv3aVyN4NdAiB1wWbQ9wxGdEBNzN3KaNBXVbhHz3NK6ScaW0pF%2F32gYCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyZa0WP%2FnHv9tci%2F0KtwD6QS37PKZrEG69wYJUzwN081W3jK2GooirtqQP%2ByIRNTcV8FSnTzcG7AB0wulWCe9Rgekrd97ieLr%2BbaW6E%2Bmb6OVvcdR%2B28bUtwNtx%2F6Sh7GhEW2rVSu%2FjqVlO59LNjsojp6io%2FJzmd%2FyjmXWitVfO25Dlh3sUnfFJnG0%2FboL9I2z022cMr2XMket59dciZEfOFR4w7QzR95%2B46DUyZejJxzJY0qgtzfOhXDUaH%2F76u1m16aR2KA584PZgTN61yPV%2FuqY%2FPMGoIq8s76xcdkbfNY44xzbR1CyWCLAfTd5pJhxZ7E5%2BF0U7FgkqsL0wG2lHiWFFZzAIdAXDoOkv7Maj3icQeXWi%2F9NkvEf0bk04tRefKjScZJvT8Z3MIWP7rxAwkrwGO0IlY%2BGRxwkfysig6Lo1WHvh%2F3Pw9RKd9fRFafZgqsSj2TfBD%2FKO%2F4Oy8es2HBBlWo0HdWkM5AZP38pfYN79ujDRnuJAjYZieX%2F7xIa4Wf%2B%2BEmrcXR%2FoOdfeC6if1wCwPKlhrmTwW6310krq%2FtUza2%2Fvv1f2jZ%2BtLEiwODbR8EqvPVookd%2FejWMnAjxvNIdc%2FiHGsnPmwo93KZ5z9b9wDVVF04k%2BTn2MO3IW2FAi74zVnah0M9qSQwgcbswwY6pgHbo5LNI4oZFIx2Jkm0GcpP38wSgUENRp9E68z0jhPDVSohatuX3mEif2FSRxi1ohebY%2B9mJSUAlGFyCSHXvCRAOpQw33Y5R%2FqTT9U0rOOeNauPVwRQCbQttqcBoQVelObApMJIqID79s82Y6r1%2B6Lgdy5Mcblz98QiwHeVZ9lRNxXJg5ETeL42YVPzBO%2FJCZkSQgfP6Qmps3FY49WAyVyNmI4DFdLS&X-Amz-Signature=5df51b57411557dee210f13c1019570c4b2a75e0b3017243f05f9f5fc11a5d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
