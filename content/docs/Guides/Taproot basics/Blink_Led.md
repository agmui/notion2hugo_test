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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TOWCH2G%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIGemfXDI2bd7JAiI%2BxrBBtvC0Ez%2FYW2L5h%2FGxxtu6yW4AiADQpfWEYRyE9vqsnA3UQc2NQ416vLB57dDvty04pQgMSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMpvksa5V9vXlsqlxQKtwD5on%2BUOzI5RXgewTOxM8JvGt7EdP%2F6FPQup8qf%2BN3N81PP8UeqF0tJTP7ONyDRRwMothXXEnAIWXTV5THBAE6qmkSfGMGUHkDtP7dYpklEwYeTd7Yrmk7%2FsDL5lE2EF31T9p5J5L%2FEGjEGHKoAeoRDQipaxNWQEP5spweVYgsza%2Bb0BTMbmigiOoDPqrWOTxLTKHzEZibgoH1BbV4areAzZS8pdd4hLWRxOGrTONMm9n5xnXdA1HP5rqTjHq%2Bbl6aRQg8Nh9nXTU1knmVVM3%2Fw4bGCBTpzj7h17wy93DHHC8i3IWk8sBkoB%2FqaLu9boVdle6dwBG%2BYWm8zl6Kvo6ZGPmUdGn6Iondendz%2FoEzp6AwhT35E%2FiDwodQNakVKnGTKXvaDEPm9c8QKZJc5qz%2B0hVrpX4wRySPhG8Q7m5esUw3iYcEjvPGAfSupDLv53Y7uW5zexl%2BJKjgyrmQCRp%2BI6CUehKzFuxVDqmwODQ8iE5%2BR0ovYYAvuX9iHF%2BWezVnvzUSPqwmtKSdw9xjEfv5MrdAqsky7PmOGEum8UoKM%2B9NoJVjYOd1chKtnIJuyzwVjeUT6JNoBURCwA8ugTQPsoLfB6sYcVJvFhXkKHRXGTaJAUfsLdd0U%2BJHQz8wpuigwwY6pgEPk3HPK6KRGSErUkn6hoaxxeaHAEIKEJpD7P7ksnASv2hbX5dI79x5jNbpDfBu%2BdrJhw7al0RKjgS%2B63jC7GB3rOQmI1pGWRxGazuQr5wFn9oVVPuetvFN3H5lqeOJRdpFiQDOu9Gd42L9K5QM5JFRWT4bM0aS6TygXnwDz1YD6RcZX%2B4UMp50O3jUrZM%2FbbqBggICm8aIoZRgowIicq8%2BfX0m6jm3&X-Amz-Signature=f566d895eeed15ca1d163ab1b44d7a232adb1865c4000c47ec4acf57a3c764e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NUO7ACO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDW8ORbmTHeMP0DqTsh2ZJATXyAuazFcBGhoiX%2F7OJAqAIhAIDFRUgQLUBl16uHbmfeRz%2FUs7dUuQotVrW2hsTV%2FlimKv8DCDUQABoMNjM3NDIzMTgzODA1IgyizIShZ9i0mVcXncAq3ANliqFrQ%2Fb6347emM2pGvDscx%2Fo3RjLK%2FZsgCcU%2FCKRU0YV%2BmXhWbUYrAJ6BYdgO4eVUkC8GeIQzqPcWoW0UUEin1BaRIzAPoQyWOKEFOy%2BByYHA9NdgON1f%2Bb%2FqL4l20qevfQSFYz44966tZhOv9y1er2EhJtIkzmXIplYWL%2B4iT0dEPHIANUHAXe2Kh%2Bd3RNNbtb1Wr6Ml3djKW%2F%2FzGsgy%2Fzyr9kpsYDM6Lnp22jhuIiOZGseUa0KmXnKaWN48JBeqA0WP5%2BJHQ0d%2FW2ouvPo%2FQH7%2FzhfjkryTE4dF2DAeHWljSsSOogDK01r5HVcH0prG59mMTOqtfQPNRvF383qsrBc4%2BqIJOtwwy0J1SMfyw5JjVetzkbMBY98eIS58zvJ%2BWDNYOFyPCrsCxldKCL1SZamzLDW8XHGm%2FEVh0lNdLJCP9uqxXzwOPI4MeOr0RVbGmnlIkQbOUZhK03OfsTLUifuY0JHAo8TX2akdvIZL9AcHjaNj18nEOfOQFhszCMxCzHUaZgVzrDw10LbjVdTSLNRET2toDXv0nds%2FPDIU%2FEGVLtwdzdo9dmbp2CvYCYoBz%2FAxY5lP9w8x6qA4YMuNzqqnBlAcj4DxIYJUhCEQfqwDJ%2FgDZO%2BAcEpKjCR6KDDBjqkAab2zm%2BpZS6GCQmT78O7MnuyL9POgFSuVokDjo9fNoHYUB7DRumPK9N7JUQ0XBsufffhxlTCqOfniemP07SDKcEe8BQBzotIrI9ZLJPruoH%2BzAMkSiQ6hog6%2FnvCyjCq9hmyW%2BQWwDP8LVyFUy%2BHrrx17relFHdsh4xpchfqRW5IkeqQd7xU7SPmV2gyM99HdzgQEbjKBJWtb5fDrmZzeOW8eKcl&X-Amz-Signature=3132ff2b454677abc571242c5b8918cf466a92a39c560bfc85a48c7a9d66e8ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
