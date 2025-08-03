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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3IG2FM4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMXKQGqhcj%2F%2F7oRLSUIHunROPfAzxLFPtJh1Q%2F4hKImwIhAO5BKIh7O%2FxhnrbrvDxzw9UvwktyIBXkdAC8iIR6Qe1cKv8DCCoQABoMNjM3NDIzMTgzODA1IgzSxOflbH3XvvIh3OAq3AMfZNriO8pVqP0GbGdzIQRURjCEKa1YLV2GSq%2FvppdlNrUQhz5QOCpalWxzAZUEqXWwBYlmDmfrVuz3%2FFTGDavVpnelsUXtYW1zjXHzwyaRyO%2BoytAbQf%2B1PTZY4ZTBTk0qxmuwzEwXI3tJlmOgSmChxS3zNBb4Ut5t0cYWN3N1ttAGy6HB9xBxRP8NYrKQMMxKDACRB09t0fL02bXQqimC5gF1JBjLYcbVL8V6auaATuUVZI%2BxSEt77XWbuM8Rru9RBsoCEnLG2XlAPF%2BrdswzKpS%2FzM%2FcMrC1xbF7Mk5q2EWiVvC3YZryhVWdWVMeJ4dOrn5ychpApzX%2F3zSjtSltSDSGlYM5l4IcUfMWbykJ0d3lgK6UpzWyCDSpHY4Sqox%2F1N5rJ3JlUcpH%2BpbeJGkNYOwgEaIg%2F40wa5kNJjeDOCtteG%2FlgrAqDZPNIlIDeyDoV6KA7pBwA5CtRE3t3JXQcJDFFNXtokA0t4CkCNhS3TVN8cW74hptfiFX0aHMUHilub72xraeP8pMmnubBaOtC0s8EUd%2BCJds%2FwsIHhFLRnEyDeVkZNYCP7K3DlQgL1Uh3vW6doaKBmVAn5Y5CYG%2BiXT0lnMKd%2FK%2Bojf2eIUwMaX2w%2B0EcbW5%2B9vEfzCbw7zEBjqkAY%2BUfBT6%2BTzIn4NBShbC1E3zu6g62CfXy6hsxFHuzjb02O%2BJp9SwKttBPGyhSUQ6JCApjrGPRc8CM9Hb3JNdQ2pT%2FRsL%2BPx8W1gI3i75GeLJlgT9AeQIu0doq9nmrAazAeR%2BlH6f%2BLAEhVvmxVDOsiiPQcgE0dSjxji2U2LgmVC9dXcowWPzr2zfi08jqRijWRn6VMBardO2bdBPC8tLMDMgXNYM&X-Amz-Signature=40d573b104c539d289c5d16e70574d20d40db0fe335376d54b624e257cbd4d24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QHIE4ZR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5faExYD1Gxxf%2BThSWyfWWI8yWbJ4Q75bvVp7zLo8dzAiEAmDlXNyG63pmWyE%2BaxLz9o766ZTfis6tjI0yb3ueSM5sq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHV3LeZxUbb%2FmAHOxCrcA4qurxPZH15K%2FNrTCSzaygjaF97O5m3FCrB%2Fy1VHDmhsaDEVzRtTKgR%2FyyCC8C0U2b61KPX5GIip7pvnvO4cd5EKzaSTsfCE37KH6AQyZzyUoM7KwoF74NSreqbJZXBXO75Qym2awM8NEzzaA44h8k6SQ%2FNeYMgp9zg5TLLOIuYPQ5ETCtyzb29VhGkBjdXHiNPjDZZ4f96o31NY4K%2B83Ye%2BspklJZVFUL88TLpMrGWritNODCnMYsMeAw55DqldqUv2tAkfARvTxWpGxLIPcOtokGTyIZCbr1xaGKyWyDGId66fN0fMtIeWrTIfTyj%2FVtgHx2rK6W0PX7NpEwmxcBrOZLbQPpcnMBYAR5tp6i4Ud0P2fZADOzr5soNEWkF%2FbooGnhQZLA9g%2Fh1WXcrP4dpjkN3kcwMNJo%2FwkqqAypbPrN9JkFaV1%2F%2FmnsO4%2BqG5NR1tVp34%2FVXjNW%2BDRle5WPMVoK8xAinOnxMDweRHM6xTdSsu5IZFf8kwNRlAjuc60y5zLXh54RNFSgeLfLRtPVmoH43MT58ShfAZJnGcWiDBifA6N0cemjq4di37qFd3%2FZuPuUl1rtNibq8dyDz1uroHBgj%2BVkKdIqfLjbPoLgW9F4qFCnV0gqDgLriHMM%2FEvMQGOqUBS0Q0olnK7CID9ku53LLi4YGqstLRpieOnkDTlKDH%2BOvbuSitHAe5YUlCjsxuqLub6gyMTDlbMZVrFCSi%2BErHh%2Fp%2BTMm1uQjP1liC9NQJ2Zv2tW9PGtzegIsty7pBgo8%2FF0dZXx%2B%2B1ZlixcGM%2BIM%2FlsH4%2F3nEKpw8VGr5PAemVq1Brj2Hx2Aw45qu8VNyYAODK%2BOJHuWBzXSRdoZQN%2F8vNKDX7Jzo&X-Amz-Signature=e0020b4f2dc2986d2a31a0e3d09e59f9fb9791b7eb975c783c4adec18bb68f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
