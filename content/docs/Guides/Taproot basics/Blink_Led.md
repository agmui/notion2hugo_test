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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U33ODAEB%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcz4MFqTs1x%2BUEO4zQa%2BqaD2OVNXsXeLZTWDpdz3LEHAiBrI5sTGP7QASvA0QIOU%2FT7q%2B8zENkQ58UQOC2OvHITFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuyva%2F7Ta4D3W%2BBcJKtwDdnCzG%2BB2VH9ZzpzJaNQePUv4tzmrO5QoVaRqwQJlVeVmZ1WDEah1lbDhSn15z4qkn937fTaInA6IcY8hXBar2AnyH096lfAgVThosCwRRAYLn7TE2lCqEkPsRqJMVDZAs9R5X9Nwf4SEZTlPmQl79Da7BJVdB1i39WCWtrrE6C5nkPWM9P%2FPcFSQIOQoy24PRrknz87qF0pLUxSNYN0NARrK15iqUV%2FogvwmF6vmt%2Fx20XIgC6%2BP%2FjXiHSwmGDTVJgAUI8MU60AKiymJ%2F8LuX8GHFo52VGrBQOdIuWeWN8sgPB5HdA0oJJFALS%2F2FjcC%2Bc3WdfCPMdy6gmhCGWY%2BWKAKyhWC%2BlLJaYQsHRcyXILQmU%2BoLGTX9W9Ln5e5d2qj5JDO6xLp8W4%2Fux%2F8HGYLgT%2FkVLkoqdLI12yAoexfSVpKyIF9En9CT9QmQiUW5%2Bwd2OPr1wIcPLze3PNZmEqR0QPbc8d7wpNmlDkMYsYY1kjS7z%2BxY0QYDF2rJ294d34fcxdU711BxNoCk9VwjKMMhmdzgchUeGU3q52H3PwMJfoJANc0EMRP4%2BCqsL3Rv6TOxlmfuXBYn5JpfKFq%2FXrKgwTlmwJHOzkh4UW8vevK9iA%2B7ycQh%2FKEAbxj7EYwlLTiwQY6pgEnx8pbUlAYm0PKwjTG9E30d8r1mx5L5siFBJWuoj8Mzsest1ls1JUEoQmPPZucfN3YtdT%2BxLkv3e%2BoEvpCWpl%2Fm89MDXd8%2FVEB9Ll61U%2FG4RqnmkFkOKFcZkGuc3XMfhBHTyokRR7waKL4AK9JtjViVV7gNpH%2F6iKo%2BRP2t4hKRTR7rzSNbPbekHcXMpTMmyr1MOGOHop2cNC8t%2FXzMh9%2BPpgV7%2BHK&X-Amz-Signature=940c57da5efd3323e7b811cc8f656606e001e5c3ff81c8fd185e1d50f8474861&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWZ27PZ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlP3Yf8YdGtC7fcwtC92EdrGHzG%2ByMy09O6ItX0QZojwIhAK%2Fk9CsgXnI4GLKXUGvsiStMvL15ltC68YT8D5%2Fg4U%2FYKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5mbJdYOCVSphHmsYq3AN1hDA9UMbQ9WXjNEd4hrnR%2BDw6NDj0%2BIZh4DtghyOW0B1n6XcGs%2B%2BKac5TI9uNi99oDl8SzmQQqHW2Qit%2FpIXvIGAsOIRVQk7awc3FEBh0AFhwFINAdvBLRwIh7%2BA26F4XY%2BnGC1NayQL0JNAezojrXVzEWJa6drAwhUKXlgAzbs5N7XD4sYxV43cdZ02xNWsga9UJ7stUkZM5Z5mgvqbTUcuFZw7LIFsGL8Gb8E3QO3Hoscy8QCXeFoknZjeNggGzav%2BSwKUZQwQdb5natfKqs2%2BKTH09XG7BnLUqGqU2bL9U5H%2B6jl06hAjflDhv9O9mTqYuDgp8vjm1bHDStJsCAWbRS5ucOXTMptRvsVmC3%2FaooONl5CL%2BZSSS0cixpXf1%2F9jRs%2BdF2BHbHOg%2FIdVWvamL8%2FlSjMlwwFrwvXaqGMV6Mk5HmwbfXyfuvy5MnIgRO8maaFBEED47ElDJ5x75keqShCGO%2BHcrvnEFbPDHTlSUHtfMqvZel%2FhjDI9aGKizcz2BUqVKFTP3G9oA5g1hPzjphVGHI7u72ygdfdia3AK5LfeeK7%2ByjjgXbONqX1IoFHqiIw4uV6cOz%2FFUrKb6E2RTUGa8pBYoaskg8qNlut7RBOLcPG%2BxY7Y3TzD8s%2BLBBjqkAQCndEqLswPdFsnut%2BwkDKzxJRr7fxw9jl1%2Bt2L%2BrtXzb6kqFZeh1sZOkKWeiB8tBVnrL3fmrPjJgEGC1fb96HMOTn11%2BAaAovBonPNuzw%2BnqQOyhZ3K%2FTtDjvErWCPfxqa0imj3Et%2BhMa8gPsZc21blVv%2FOOt8%2FIoaUbWGwPVv0xAy1pvCqgHlZOcYKW%2BWaFJX0aUH%2Feqt6biYxq72kOrQI4JM2&X-Amz-Signature=5eeb9f3756c3cdcbbb2d578cd227dc3bb0e33d7de14ddcd8f37b0ec0814c0603&X-Amz-SignedHeaders=host&x-id=GetObject)

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
