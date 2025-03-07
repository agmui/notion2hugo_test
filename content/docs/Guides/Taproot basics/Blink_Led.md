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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634MW2USD%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDunWbicuQ243MhlZdpLzfwfgt9PDn%2FWfEM5PBS4G%2FrpwIgKLy7NlsNqxQ8H9l2wH6pr%2B1DHzQNzwCfkfKZ93MUnJQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDO62tTFkpIEM9CYvBSrcA7K2xSFVZumHECJE8CWwVsXJtIYFjoVDBThuSxnPVLR2uKCK6BitaPVRdWJ%2F2W15lLGJPcMUYXPmH2xewtGJ06stPOqioPLUJww%2FJvNXC5sgrEmVBVSP5VeYx9zPA2hvLautQoCCigM18MZ1b8UjC3cLqEAUQfv7pHxrnMeJCJbJ4BZ1s%2F%2FeNOT9XWC7McR1S%2BP77gGAP0VdGqjKaMJZVIg2Jy4frJu8r1cH8RhcfEhvtvxOdybmCHTeJHiNEJXMbPwcZNv5PhCYU9UZv%2FTZ6%2FTtO1bCeXpGzceJggD%2B3iP%2BOicMxWlCz5mNI%2BapOSRowDEpojTP8MHRl9uGalVJoYGWb1SHDDab9PP2m6bdf9CYrS12yssFJs7tM3QOdDGorfznrbHTydO6AxOCtj%2FCuPaPNbVq8uSD5kpHNHrAMbQrEgNLeF2zGqWrxPJqPB6%2F3BeHmsJX7eCqZifEXT5FM6iEaL%2BIAeRHjV%2BUj1D4CbpzlKsKWxr4N1teFl6XyuauNf4caWwKryKttIEOets5KivGfTUvgJ8EsMn0iRns8MStfITehk5ISei9y4%2FOivLoceZkwAMRtJkD8iOQpuoK5RZya7OLk9QiJx%2B%2BOdcBSu1ReKvtLV4%2FOL2CXdMbMIXHqr4GOqUBY3azNof6Zw7Y6gLNkhvQjHC5RFArLH6JT2oCBzEnfvNWungN%2Bqp9z2gDTYWSznwnaK%2Fad0sdTVZSduDyDHa03mII3U%2BhedWS3OeEo6MVSLTrOW0oJwb0k%2FsjoFuFyDEf8jxz3U37bNTMvHTBBtAeM66ZZwOB%2F0nOf3ugWGTk2QXyTApeL1kowvyblTYucR7lJjRjEz%2Bhl4i0%2FbJ4m6pUXL5T%2BkIR&X-Amz-Signature=50fd9c0a92a2b8afc121933f3a1ae3bf22206bba4b05743806c321f3c7305b4c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHH5Y4Z%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZBkC%2FDiNHEBcb%2BJzNWybiV3lsV4tYU4Xtt8KAEjFufQIgewceCYA1Obkruhx9tTylwxj9fEu1t9xNMb1AAEKN6HUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCUgyE19vkJSkDwefircA3fSoiPsAHqNbjmZzTTjllHt1tigoMZtJT991MjTynP7NdJ43U%2FcNAhYZf1C8tGwz%2BOJVxieGv2fNv4BxXUAI9yGCJmKf2GzXWdbzUgLtt54NavVZ1mm%2FcgTC8cTgJgxOIUtb92B1t2TQyTSJxpQOuUr7lj2Cd2Oz2Gk63WdupCgc52WRen7kkL9Xue%2BAG%2FX3iLqojCQthPOr4hDMbVFWLu6ipuUPyuqW8zPMumJBJBVHIFIAP1ULJo%2F1IhecnY485NJofvbu5GLfRt%2BW9GLL5t2ZgOBwsJEbGh9J3Uou9QdlOQuWu%2F3%2FHRahzClQ0pAGPCE1Sb5wry3ofD%2BR95SGiTX5IZ0zVX8z7N61C1aTNOKMjtK%2FwSfNvW3r7iHO%2FonZ957xwdRupCNhHHU0Hh3m535ew77uRXPcI%2BeG8I1rsvPW%2FkdILbyHy0dpzrQ2I5lI7JFVbZVLWxOMTS%2FTaulALSewPRMaqF8TJ8C5rjQaf9hQ9WpP94e6C6IABYPKZVyEQ57cZ3Zk%2By8lQfmTp2PCghA6R%2F8wOORStLJRUjDINT6CVtXGJLSNQ%2BFWVpsxThJmcSDfoqEjBZFAV2PmEDzRjv84zcW%2BRZ%2FZmNzW7EVathMDjumc%2BUF2c0EYYfCMKTIqr4GOqUBoKq3WGSN3%2Fxbql0SYCcapnSbcB9Avn%2BYUMZ7pTT%2F0yXTkfb0lOi6BTn%2FGtxCcq3pXKSgIGbCVJvzdqlvh%2FGf7gcmYAlA089LtQhkQJZ2P%2B8ubXeE1XRVeTuxedl5CT3R%2BH70A3SSyLoFNXtjem642sE%2FrRBgnFQsl4bYjAx0ItK%2Fw1bXiJSVSeGBcQ3DI5t2xd33ytcL9BPKvb0FXg%2B5qR%2BFE8wG&X-Amz-Signature=19f431b48762fea2b1fa07369fbe7d5d9dcaf6453870d48a92ede4729d572574&X-Amz-SignedHeaders=host&x-id=GetObject)

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
