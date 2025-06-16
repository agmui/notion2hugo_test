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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMT236F3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDFcDoEcHUTHk2J9wfQQQrtqvCQNYXZpKS49lQv%2FnQr6AiEAou2PMyjOV26A3zIq4O%2BPKN70X24q0uFc0Uirm%2BOLLdsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMIsRDM1YkCdRDfaHCrcA1e%2Fim8axIef%2BVErgRMtJSdxCwzKFvop7WE7xfoXU9KmamdCZFbZqjEWVLnfo9ipysmLYrJBMc0EFMJ%2F%2BwvPRO5sIY6d3%2BkaxDmRcZlvkq7i%2BhJpBqpKCHTnhcvvE1J97t4kiWjYhn%2B38r0L03rn6E7ypCzeHCsYXrndZUK6%2BwAtLi7Xp%2FFFXfBjT0zYu3VfdM%2BnyGLoUVmWW7BYRYmfL0pjEwzLaUnt9vcs6%2Fl6%2B4sgNAOM41zI0ouyBz0ctKUrjbIWGg3PKRyKxstLw%2FyjhVBLxrzMtbj7lRGWAKPO11dQbgb3lyvoT7nhZrcy0MD%2BQeFw1%2FAMRpfdbjfpOcFXbsg38o%2Fwn3WodhmT28ojMzV%2BuIUiv0t2Px8SW557OteXSk9N62o%2BvE311MW5ChB9yxh88OmgzwJw9%2FKEyq%2FiDViQp3yVjo2ugDLVaBtaoeRlbu8TdIqPVnkMGg3ETBM6gSUURXw1bW0lQo9yqVtXAdMJ2%2FT8zBy6VGvO6JRnBVEb%2BC0%2F2h1KS9FmXSfBkY97m%2BzVusJmLW%2FsrDDbeE0Foelq7YRPqxb9oPywI7UYmNjCRRwpGykWO5FP5SulW6ckXjw%2BXSNuaf%2BdAIGiQef88RXKabM5OxkH6nyFqTuOMOrIwMIGOqUBfBoPfWIrHjO5yN0YaFbcPDabM9866fzHe1rSOApIG2Ym0ITJ7uJ0Xw0EFCddg%2BXIVDJf6GtlOcZisk9q65CtdzRb6IM1GMsUGtJLzpKuxvKXB0OXUPIM8yECv4so3GgJTKpo54FP2fFTH2SDqVRgnRaq51k0KWFP0SxbeNyAU3bQo%2FyXVJDGnCMn7NQQJoOZ%2BtHIn%2FtbrSnWGhX5z9kFeJy93be8&X-Amz-Signature=d8ea4e64a2171f510efcfbb319a71692fa7152b8671ab828891ba5f62dd9e614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3X2DPIZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIAswjPM%2BgH9YrIjXxI7OUry0ZMrsAlvHlBaUpBfHIC0pAiEA%2FADd7yy5FNrpZXvZb94njV4oNRMaPf%2FaqAdfJa40KVgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOwDPr%2BfVzl9PkBKvCrcA%2BcXXHEJLjP%2BEiquncMrGAgVpFRey%2BNneZnpAY8eaowjyGiYnW%2FqBSJuqzwiVvrOXt1xqaPvMpPIlAVi1rNG9bV6MtkTPGMU2AHjaEYu%2BiCTRKWvYK8wLLYGtTJgyHRAcDwY0pbNezAmiuSeuoCVYk4F%2FBJoxFwQyCZDwp665XOKUoJ4XZMEKK7hp0HSC5iwQFcRwBtUnLgoudLY8pyi0M5gFvBxNr1ettl8wZrFxLq2YHaYIAS%2BRg6Ez4phYasIRSjLYCHp1cE3yQdBTJW4KYs1eXJAKNdnYWfIC0bm%2FYo9pq42nQBVUR9PgFopzi%2FebAvbbNcDyYc1Ups2wzlyCpITzCEjQQX2VSrDv5N2m7GWpHimsMkNaRn7FFyh6NX5BXxfvStQz7IcUYtmrQQm2dmDOZri%2FL5cDyWr6eDvAnVHK1K7iQ1nrjoUXIJK3wXTLrZdI2LpaDJSP3Un764sOs1BP48RLhFpOPKciqsU4UMNnmhq130AYh%2FPWfzFyaiDQ1yAK4Scga5m1iQV0i7tk0G%2FLOKdO8X1bdmpieAPEl3KNfgkf7mvnB0c63ciH%2Bbs%2FsX7C0TPaB%2BVRIxlmaBCHjHZJq4m6EkXRA5JwvOBIIooppKOY7uH9V562lkxMPbIwMIGOqUBDtYA1LbYucGPjs%2BMepbI3fFbSK8dCwyZUT1gU1JKzpNYlnCe0aab5WUEZ6QExQ6D8AxA%2FFI8TVroAvNxwQtqB9SQDmLO7DFJgUp43q02fe3W6cE7sJpuy%2FieNna9qMFSRDWr1V2yBAX%2B86BJLPpqydkyrmA6sXCqaeoxP1E38W61QcCneaRP8O2X5pVBzen0dDQ1ZkOV2SfsHk%2FscxPnwwdRbCt2&X-Amz-Signature=84a257511fa8eaaabdf34e7a6e8a0420c78bd8e7dc4d7e5242b9b5b68482ff63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
