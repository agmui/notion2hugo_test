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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFGDVQLN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbzcXj2Ho5Zr4ldrzPtNxM9SXufJXX3tU7ZCfr%2FLSl4gIgRKSV3TXQplrNG%2FKsA8AU1mW3G3nBNn26hX0fUrEOeA8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHNPYU1s9UlyYWueMircA4FWmWzOTVpjP2auQll5C%2FHGgXBuHRgp%2B4xo5LMteAHrLW1ItS8VP%2FDlx7uQWBGBultuoetK08%2FSK0qW1yH3NLV8J3cXk9TCT3UDsHN9jHxnSzlNx9aTCT0QujobwimeFBQfTZt8Xo%2FFbECNWpvcjWs0EuxEpFoX3zgXvAn1sxu2t9SgyjVKZQOpIvHbhVKh29weGKCRKoMTuVA85PQe8CyXElFfHecdPDucyyM2F8rPFaChSVULVc1x4gkmnTLab9H%2Bvdnvq6opJRlLSiSUWQqPUVmAAUNs6qgUbphS5eFzOA1Fb%2Bq47cLpJXRVoV%2BXKMQMnAUrEBZ9Ry1VOD67DtsqHYgzGL3z7l2nHz9qOuX%2FvIlmwCbPvGas7VjMS2N3YvPAs34nOygAjVplKYD8QXzzkJNleWXuW4S9wvpk8XzR94EVJdcoW4dHL8pw9oGfWVIVntLMDkh8xLtLVF%2FqbvuFY3nnbDAmgSrJN%2FQD2LRKhpNDn89NZmZ9FAfkofyhMTQOrvdN7VUZ3CzBTvdFFZLsLCQUUwgGc%2FAE4XNvFuxa2KX3aK42t%2F4nC6zOoymntqZSPMMtUOI65d813IdsMVHUwMdQl5swPH0qz1gOTpY7zY4O97lEKKj7wiHpMOSAncEGOqUB1RoOilZUT7MrWflgF8CGIrHxsW%2Fo8ffcaSlD9kjWz4LjpQcBCLL4cPsVcQuXkxh6kiVjxLBTecaowLJsES4OMY6VT3Be9fbPIA49DunS5UsXSnofV%2FK7XoSx%2BMA7nkHWd87RscmkG2ITjkNO6KmwC9Qtv3wVMXcEVxqYKoEy9vRHutZkzOMZOjKc8AxvQFSOQyeymF3TjXE5Z84%2B9o3rIhwdu61U&X-Amz-Signature=e62f700b7a872f4a66f84bb44ef2789c40675012f35823ab84bad5192ea7dc58&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6QMOOUJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FndfHO4Rod78IrTwJOiT%2FQbUFmfJVoczOQgU4ZaA%2FJAiEA3%2Fgc0vdsc8MtQgLtiyt5jL45V%2FA4CM6%2B4AUMpYEQ5C8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLEXrAYoMIEwjeYETCrcA28VepiGMNQiR1yZE7Th0BeI%2Bf2iGtIIov%2B0u99xk3o%2BbcV%2BTRXScxe5BkAjtOwWDxPYVF71CjMyK653pP96JHAXywJWrdw91LQnBM3BmnIrlY8cLtcgBrMyl%2BjSXvf2ameQVDsmLU8%2B9vatPEnwk6Bh%2FZWbgoXsfbGi7F14CqJhJ1vK4Am1GnegXz9CyBmgjJP9tpGskCeTgMp4HKEOrYshsbjBoJMu5%2FILvClmKCJfRAApmdUOWuA7wA9Ks4%2FRfo%2Fq88fWcq3xUibNZbInWjfsv9iZDBXe9Eq7qgiBy%2FaP293HyyeLlk5Ao4oNvJuiiGnyfklhgNk8g5mT5M6ysRJ4%2FC5EOiw4f3C7bSZEodebzbifKonx9j277AHQ7G%2FNzdS30QCkvW0LItbLfcw3TcNRC77u0xD5o%2B%2Bmn2Q189lk2rKz9pTGdr51M4GdtLQddZAoZqL6CWuh7RyqRcIj0GSfrGyH7XBCJ9aRRhpTL3wrFT8kO2VFJr9dSF3f0bKmSBgUbdP%2FNgsa%2F4XR8QMrbkB%2FVfw2McBR5Q%2B16Q%2F4z%2BUVpKC4w7Og470Ga9QdQ185O1r4UKgnguSvGT6%2BaxGm%2FD5j1prQeH3Grg4F3%2BmQ6bQ0urx%2BFecidoKA4gwkMJiBncEGOqUBWtPBsKGtTS81GeS6CScXOPO68AecWpdFdiF0xq74ZG1hZVhSbvd7i1firb6trWgUVduC7%2BB96KaPB2hWJEF%2BtwgBEx%2FRGD1BQnW3tV%2FgZF7DMLVzEWs6vZgbiEHnEg%2FbbhBH144jnzmi3hxWhr%2FCZualMuYT0M6Gyd5RdGflWO%2B9PoQy2NFulriPQ3kVDVvyYwkIEz0rsx%2B62XnIdj%2FPTplx3Lir&X-Amz-Signature=e2efba9ed32311c6a31535aa7790e5cf855d677c4db453a4b47c3e1987988f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
