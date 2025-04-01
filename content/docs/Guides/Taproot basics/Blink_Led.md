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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPQW2QON%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCAf9sWgLMrj9Hgcm6SEv%2FwzNmqjVBNpqTAX9cyTxLEjQIgOqbkTRKbF7SUEwgYK6dl5v3yCJQPNjdUtg2fOsN%2F35QqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsI8pEHJEfEyj85USrcAxmsgBgdyVr3JlqNRDYSJGGuFlcVgzBiRodbXaH3PQBeNcJ%2FbH3zTTrWbik3mC%2BQ7CUgoSwwb52SkV168V98c0lfkRkVnQeyXjabkdcXUQ4TmmZLnGhbKK%2FqvraXEOqa%2B08GRwPd%2FP4Jc%2F2Ecijh%2BLbzbaU24nvb1z6igvbsD5OuHOGLD%2FWLKnenPogkpRww7kqrYU53JnIM3oZp3nuqanBqad0nOR6beSVIvBsu0ejYhsa%2FcaNPzRybv0fB7poYrXduVRKWq6BLsDRW4OlZYuHK4zhRNLVsNaZ5g%2BUaUzaAHGEQwbg%2B6Z33KbkNNwApmopl47cKCttgY%2FX0uev23NJhshPBgpTznvoBaX0t79I9wDJtcHqRQVtbiPTd0JsM7zXxLe9H%2FqcQJZKVf0qHLLIr48DcKpaToBixqij02cGjJLcy%2BOYcMK%2BBTDSN6V1%2BEyWJklNdIuDPtGE9if81pH1ygY5VJJqA4YEGxsGwh72rF2Kd7R2A4gCEDgGuU1UaqqeQ62WLVjPl7vA1MgexrrSo0l4Xl9t3ZQy2FQEqhcngSh7Q8ineGu12NbPSCcJca588X%2BihwldygYt7NnFdnBV7pBKFDqQYtEb6rzF1ItP%2B8GfznPpXiqUk3ni3MPakrb8GOqUBT2VBG5ydQVwTpWvXoFrt04GIMnpjwnJrwPXDEWyyv18CYA1d8VUhlD0ssyDR4fb5u9TGDekE2ORkpF4ItQZVjO4khPGGUHRMUblGQ53k8QvhJZ7oc%2BKh3bl42WzswRozHqbfeanxGAxbqyi2PsClTHf87ZKG4DR0Am0ymLk7cPDWGoPBlYzLx3NddRUXeEB%2FzkkDn80kK08hOixqWZvgJSgoN4ov&X-Amz-Signature=9bb0c3a7567a1d5a495392b74d569e497440f5a1597df68a149c49cb37d9edaf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VGNXIGA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD63a549ZybUUKILIKIQm6eZu23XDKRJjIDEP%2FLS720AgIgTgV749K16XrrlPWSRRCxdS4nL%2FsHuOt5wa9VimqZo1sqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9QsN628NkPOHShISrcA94e4QXLrZferizakCHUId8LkSPwXZTYdN1ykpSkVfOBRg93B9ESh8FvOgFC2yWde4cBEWWhr2E4mcqD9Kr7%2Bmc3Cz%2FbqQ2yAU9EgAzwh0OScjTrrKfSL5pcuA6pjTXif8jzpLSdw3Hngz9gaLFG%2FNuOrF2dmPOlXhjduiSTn63Cr9ArhtqRsS1ni%2BkuxYHMDWkFAG%2Fb3KfQ8uRy6uERxaBaiAEI2FgGbwDls3F%2FL36nrPffL2i265hfXgzO%2FXnSBK1EiBValcYYpZeeYM2KJVHLOrgmA%2BXSL0T0Z3gtS4iTzmlHbtPyF6yg%2FtPTp7hKm43hSzO7cf4LAYSZyOjnHBYDN2HagtEfJpiFHZ0yyDL8%2FM5RjSHCWcygxCrLfCusIUnsNS%2BwPYub%2FPilaebv1XQb3vxHQLec567Km%2B3Y9Xwg9Bomf035Fn35QU7aTr6cixgZCqCfVRNEIngP%2B48PVcGGjrStnuWv7BdUZSLS1%2F3A2mPHTZD7oI8AMVa5DB7MGkJCRQEVPmokHLVibQEL9awlqpmg5Yt6O1%2FFcdwNvEjl95KjrekUg2GcX9kf9DKz1ASo9RRvCPQ2vZzmymjlzop38WjWZSb5SDq80pHqJoKV2NfqMFNHHwdlzXeNMOqkrb8GOqUBedba4wa2evynUf7Kc9aeAvxoTuZNoD8kqwjT05JP1kHE3IwUWn7N31NTO6TOtkFGeGwTYgB554i1I%2BKjZob0mrtZ9Fvol23YV9AdqQDU%2BbszamAfQGzXXQdBhPtuSE5ucZqaJBi0spmjUhqZIm%2F3Kz%2BeI6EuCrQUQACOqOtiFY7Jw5ApKmPZoa1scp4nSRft2hKZ422tng5gUMJXxfYPhS11VchN&X-Amz-Signature=4fc04aae164246ae1a0c76bbad736ddb6f3b7fd2ecb115b941717cdef64b080b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
