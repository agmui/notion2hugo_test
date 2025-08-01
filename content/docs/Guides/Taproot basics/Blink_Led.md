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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BEPJUBV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKw2NxeAKJ4tcJrOMpY2o67HwyJCOwfwz78IObx545LAiAf0EhxbXgTdJ8st7Fvkp%2Ff8pMCfis%2BNgOPqUQ23snOciqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCm6WQh31S%2BXrGj84KtwDbITWu1JCPLZmwfNPAlYLzoRC70nbjoNckEjVP4cQmhE8cXhMr0eOLE%2FPd94%2BKehlCq8StchIqC%2Fq43E%2Ba9H8j5Yuuzi2pIJh3OcsWwwrmS8H6BnPGDVBSyIUHwT7th8fRgURdsoGyhXF7ZR7I1NfUtTWIkH941ZMkIuxzhWvLTVAZvcThIv3RSco1HdZCb1x736FBpr1mVpLwWapeIHFcNbRG2IN9HzgrJwWZBedqcrH4UVNO3%2BHPkduJp8AkOvO5DqlpxrAi4CMN72vB85SgfBT%2BvDiIp58ozD%2FdoA1PPcxUzIsgGGlequGMF%2FRmhf3S3hQRb%2B3cp%2FhMqAE%2FuPC9i3%2BTkBzRHHj7hODJp3W8KzMntA5u9ppAMUnpVrasvmR19Iagr7V3CHOGhQp751gjJcym6MSPG4selJ%2FiYOrU%2FlkOoN%2BXOIFe%2BuXJ0ftY0Hva0QvSkKEDY4JyVo5eRZwH1qIsLvm5N7l61t2xF8iaHWHXP%2BWp8gaw38hr9WxM%2FxDKyXTNWRgHsg8VARvZd7DUrN4kcRDVNGouJFW%2FTN8702S89pVkOzlOvDeY30qnxazqZfGcRBlv6BsbGDblu%2F9vz%2FW1MARR59gsB6uZJn2MYtwWVgfEbeV4ZzoEJgw8%2FqzxAY6pgH5raWZJDGOqpxu4opDnrN4Aj55Tmxf9Bx5No%2BLjJA8m8wKB%2BsvSxmJSxWdaVMIEZVk0nv3uxEZzUwYAAnpS06qSLtXU3NiOHUP2WysgRSmHduzkn6XX4cFQ7Hr2UyYM2VCsAB5J4oxy9hu5uatuRlRYipnidx2pUVgqyowOlViR3CDQWUdSfvT1UydyYJ3sQ1WZNBqKOZxkHXPKZ6ZMql2WzN%2FLIYU&X-Amz-Signature=2ba795662cf768e2957b9833a9f17c591b1f3778c4ce0ff587042ebe28ac2487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4RTEY4F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsjhZGJzDcaMbgBegVfg4zcRlAfCXHt9szE54CVTvoygIhAPYNqo77G%2BTkTUG64ec06ief%2BKcZb7TjQiQHJe5PFTVJKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyXJtnH89YdrkTSF8q3ANdn1Wih2ucy9LPqX7Igy8dv9uM441xiKDvBQ4cZhgJqTnIYhlba8IZ5RpIbHjRm9AvZ%2FxXzb56NeHXyhCaOm1ew51VEnJG6aF0i6BJyHuWQE109XEmrUen4GQe1VpBITX9O1HpUEqnc9tA1lfx633AILynwieqwTXrYoDj6mm9SYpoakXqJwYBYwBFIr2HhLzddUR0XZM%2Fo%2FIPlVpIx3k%2FKNwcsC6hBUq7znXLbx8Sev1Fsfi8UqWF8Rh0SDMd6%2B9a34wNyyeDhbHM8%2Bw5%2FpTNjJz%2FWJXCkdH4Fh%2FjGk%2BNiqoJp42m2lqEGoq88ZGUnmkQbxc5Mt%2BDLEmmtImoqG%2BZdVojFtcEB3Nw1ErtYicWMlmKMRUGH3Lj8vdTTLYynnBIPzT7BB8i7wSMUVeQmFMSeB9FeCNeXwZKUTRPc7rB%2BbUtR%2F0wRWdwpgk2dS1J%2Bf1U%2FvE5dm%2BzdgRUjaVLt5ZZ2NV0k3jSv0HM%2F6g15nuQAol0I0GfZg4gssD79QHq4zbOGjD8yNQ0vBZhgt80n4K3erCJ4C9MpgNIc3z6SOJrKglOj%2BeSWcYIQ46nMDQ22Sr5PT3Nrml4rxgeClvfxzEkbQbHTubRL3zf56x9%2B5uVQ%2FwJe0CXjLxpBcmeTDDC%2BrPEBjqkAaUe2auaxGYWDFpEAWhN4%2BaMa2h5tFlL0U9R5C%2FhYiwo6%2BRFLp8wLOJWjaoMwdHcb5MJsLcgDEENicZqPH7V%2FrrsEgI1DL43%2FUpB8e6LPdUPmuvmRys4P3oTHgaO411Z27T%2B1PqM8LMuNGEI54t4yYXAhmHaL%2FiC8%2FoEFaaIMZygcbFEhiZSIE7%2FbR3x%2B9F7jWLv%2FsWvp2RY2m25vc7j5AP%2F4aW2&X-Amz-Signature=6ef0f62dc3e667104ccee212abd7be451c7e96d3960859064623fe56451f9127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
