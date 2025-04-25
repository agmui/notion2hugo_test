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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL7ZPAGD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlQHx3zMdljY%2BpZ1kD9qFSihShZfooj67bx0gNFqWrQAiEAwEzQ%2FKcRedWHDCsw2iUwbGEajl8SopYxYqq2hj2J7Ooq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDF2pAp1d%2FoJ0C4%2FzXircA8GdZU%2BjDcO3cKl%2BDpBuL5wu1rZiwX8wiwdNPxtJT5%2BXzz1nniC%2Fw4q6orh3Zj26WMPDJ0ekoPF3wwmxR9Oh%2BWqBAqYO7ydoXD75Amggb4uutpYTzSMEHnzpE%2FnIklyE%2FU61I4X7ZMuFJ8TnmVwEhVa%2FkQogphA%2Bf%2Ft9u4X5BuNS1EcOWK%2FBLa19g08BkHlqVywzyZ8dLsfqNqLoKi0i96SIGgDLuR5UybOFEUzdLlDtlOz%2FgaQZwKS7%2B8XylW%2BzG1GfPV18TIpszEQ%2BMIwe%2F7%2BgMuwjSAEb%2BB960EgabuFJBPLFVIKRdrlKS9vCLdGvMW3yi63BIN7nGsMM3hroB2l2qTkeXx36diaTaZBpTZ3hf9Scm8Txz5b4PP0QlKdTtgBgqGwqHsvVcfaRDij4GIos%2B5qzrGf3twu9uyj2WQi4MM5iolBfCOIjXPKHw7qH6m50z5Qyh6O2GUC4ZgcN3wjx4ar54wyYl4Y%2FMAPhV1YJuGH3C82dkaNbDqhYHYnaMj6UDLHZ3681SDNKhAC3WO3jCXMET1TxQEQ39rLgIT3CIUvtFA10o1JG8Nd79pt5GSlm7BOyVGPj4hQmDYtI%2Fat4Jy2FEm0rXEs7fZkUds4vwDT1R0oWF8R66qZMMLXNrsAGOqUBzIPOS4Vbzzpc5ZqiCepqqG74P%2B%2FW7UIh%2FmoyPY8QxgzfFd%2FwpHch%2Bzx9dq20TwytOkY0AinpsFPPsNycYEtSWDYG0s58sycwYUfS2HWp4PY5qge%2B8%2F%2Bsy3FaFB1VkMNCOOzjBHUrlqwWNsgoY9LJT4d7x1ZQtyZWcdYb2gwlakGTcGK7%2Fznv3Kk54GkdU7LNua45u59yXwpKmfOz%2BhDWH50lM5ib&X-Amz-Signature=b5853a0f422a3739573ef948fa928d58c8370170eb6a42d3ad1efef2f0a31599&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZFAS2X%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BIDyhO9z3OcbWym6AWU18dLnRD2kJ%2BlK9dIPWF9CcUAiEAs7xC5vUOWQvQR0Q9e8DGZAI8Vyg0lobHpIIxVQKA7K0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDG27V1krDsy7DKOdZircA8coJeV80drWC69f144XZE%2FH9lJ%2BIvxHYIRxysOFve5V%2ByRnAPzyvCEGQVvWfBGC4geOXP2zy5r5rlf77eMlOCo%2BUusQxVtWqn3hWQTZktGjAiyuTWAHdFHX7hbgz%2Bjt8cceQq4oBChMJ4N3Y%2FVS%2BiPsgDgMkfUCdAAm1iAy5vd4QK6Wjm0q09xg3mHqjKiyJjL%2BkYEBSZlKaDf2i2TY2%2B%2BZIEd2d7ChTKWwR0%2BkmVcEfe1JUWUhRVqhromq%2FXEcRtqm74VNydJmLgZaWNM5piKkgfP5JEpfUFOuz3GWcjZVwg0ZgpYqhk3t0TWzamn09VuFJHfN08V90bquDgafpu440I5HFSPbAlpDEliBM3oFTPGiZYhj1EV17q8nEwRtOxH8yRrE3tyDy5gbuntB9Pjr7CaC%2FVJgoNzy8aoEhC3hFPn6SX7%2FTdICGVf9sUVtaZxDXp078JLHKQIkhITDojNA37x2rtwVgEVKnFpHwQyCiyjYgSzugVxYFyFGSu7%2BWer%2FhYlpGj5sCUEOYQXWDo%2BFelCtjtTXsZAMRBHw35WOXPv4A9q3ioaK7cGl7lYGvdaSDut9rvId48UIpvyLHlKJQokeYMVTzL%2B7%2F5O%2BlkOYjFUGB4zq%2Fl68xLU%2BMOvMrsAGOqUBjL4l8wYBSdxZObaENsRS7SRIm5T4Y4FhYcNeANS6x6fPlZRswh9C4tiFtOSCVL6EKdUzhm3A%2F6dojq5Tsc38UxiDJ4D2fTmooHxdPg1aYGh1dVxZVpM2uuW1h1l4Mi%2FZqu6cFXSYNAoisbpJftbzzA%2BnLDNqID12SgNzIcInHNI8uvAmOpkMydtPHnOgT2SSuXL9y0%2BY78dahsN4qpVRBmpKf6C9&X-Amz-Signature=2c269fe6f6cca1c9d6a85bb74b65a62d649bc56f498e106f8eb4e4c1ddc95d83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
