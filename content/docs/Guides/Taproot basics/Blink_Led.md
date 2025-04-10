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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZMVH6P7%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFLLwqZTaKycqvgxZ036tMbU03nBXOnVKprjn6LLczdzAiEAw3Vt8p1kzr0Iy%2FW7ch6C1r2nNEPUegZV3NHx9ik3Q7QqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSOBSXQzC7ML03ieyrcA8aZ3lw%2F4i1L%2FFIDhc0rL%2BWMqIfB5wOnDmNTirWVY06XSMA9oBBgG4Q1wKD3qTmAso0NcrPHPbxJBlCkT%2F4raHtkhFIAoNLsXs65SMyRX7wrRJvTXPCnWLNPKCAfxzmrGPm3WqO2QEqCN3Qj1t4lCv002TCZKD%2FA4MK9KHeGvpxfucfu%2Fl48vJkR8T%2FHtN5LbFQ%2FR1ZiZrjLoJfig7R78N1hchAD2TMKPtAzhGT%2FuswVmsJVmEDsgWZNDOoI78zqdl1%2FLpeL2zbfCcrYFbzP%2FeynLuIaRdmRr0aMQBtiw5yeEPRmSYl2qxfw1ae51AEQNo2F9w%2F2M4MgxAhsRIaRzQNwjDQkjgUhYv1MTLVcY1w1XP8TGjOmWdLy12PoIrrbJc6tl3L6HsolOxUkNV4DyxZpHbxOiN9LecOcOi0onoHVxEKrosl6OPpXtIBCijGBU2An5yAuV7QoHCRs4VBHmBTjSE5xDiz8YBF5PkYG5jhOthcunCSv2kG46YlobLbCgkE7J71eEIWM9ZbQHZrScJxYtrq4JcKYzX8LqEpISmi9CP6kfpHLovPBE4yfJ15jL%2F06W3%2Fai4AqGw49UPW%2BRq7DmMZfeeUNzEPD9flDs4eXHGabOti3Xzjog%2BeNMK%2B93r8GOqUBzIpDvMiH9QuTsw7HweVP2v2AFZi2iAU84PEUy0%2Be%2FqQrtdpmtlp5L818B5IqSinT4L41toUuZ2ZOxxAANQAG39riSKl05un%2BvpXIuYb8hIBU%2FBkScb7qlv%2FZBaV3Rx%2Fjv3UL5Qv6DPyKdnRUbI%2BE9iMJEw6Mc8xX79EkAGWsRBrGVpmRlOVi79bhMq6TAASDyQAb7UQxAoYsB9jrOpkiSb8Xz2Wv&X-Amz-Signature=40a147b3cbcd2712c1a02a7af1300282c9c37dd24d52d2fd33bcbd8fdac5fd55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7I4C5RK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCJ4c9UlVv0dt1cytS3V5itxdlieH%2BRDFoeDfOLIBWGygIgd4UclXoLPqiQCzL%2FNegiqq%2BnwBfltzhkWqgMFScpFB4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYkx3WnqtLV7mwtqircAwepPsEnKknm0p8QKnuEizRNV%2BL%2BLaXj01qE%2BFTB1H6Bycl1xwD%2F7cJHeZ46lkWKSi1vAq7%2FT1HQ4%2BfDgLbyvxW8OnXEYF4EfZc3yK3CEaSUMMIx2uR17Xlcl0Obs%2BC3DAOA9UyWuVZ7HWXPL2jdihtn5LIPgKcAL4p9IBa61mWKzblCcLSLbPP5dV7zBEYwIiDUSNQ4T2Vz6qDvtS2f4JvEWXEH00v1lFNt9tknM%2Bzjd0erSZm59mMcAsdmZI6Vp36SNlKTqFzsa9LMSdW0lNJhhWef3id5abIuTPjskMKfoegc8zEtgvTXIRKERIG6DmW5WstEaJ3ws%2Fi8FkDXgt6tapzK55lDvwyMEHgKqfPyEmibR9ptnyJ8UfNUey6tY3TihZUWWYA41hTSg0TgU7DzR2BxTzGbRRPUttCVMM7820nvmUk1NQw6Lh8E3JLGF8y0%2FYxtQFcqtzLQNUreUzOyBf0wQC4N8VUCLXzA1Sw2nwaRadQDztFd%2FEqugR2Pc9lLOLepT%2FsUZeLPC497Y1vXAuwOpjpYFkCxodJl22YGYs7RrCNuHGNujuE%2Fd4vUJEFxasPq7FbtwSatbYjPlrwCDBsFy%2FIObzpPZihbuBzLA%2B3KeDFBve9QuZZHMOS93r8GOqUBEN1d0RDO5PxLPB6bbuNnXFyN8fcaFfkfiCjzcX69aU3ke%2FkvdsRBRZ26%2B6yQavudZPYNxL5gcFOQUHMA4m8zPWoOTgjCgtOABQ51AKe8PLxBRhQ7uIPKodczm%2F65qMNcO3LiqITPRBgA0ESK6r5mgeklJKscaDoAe%2FEsGroy74Fg%2FC2tIJjbmRR1gV2H%2BkkKyyfFa19%2FsUjyOi4cBSIZPFnRXcBV&X-Amz-Signature=01ac56d34214a1779750693325e580411f1a18c92da18df384c6ebd18991fa77&X-Amz-SignedHeaders=host&x-id=GetObject)

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
