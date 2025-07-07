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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JRG35Q6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQClfV414pScKXpKw5%2BVYuxTD9PWl7rWEXzrmksN7989QgIgElawYnZnb%2Fspi1reYs6Gnyt6UO1n9%2FqjP4ybMXhjjMEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJdDsAvNCZeUnTC7XSrcA42h1QiOQl4J9QjA7EKUqA7dLBtM%2FT0nxBFLXYA9DSvZGk7bAgfxC1mcvV%2BtCWEAPe26WO5NrB99XvONHku1mcgl79jaiXWUSH3mR2v9KDTbGt%2B72a9KMa%2Bh5OImB9ZzGxV28Mish3IzkVpa7x%2Fb34l%2FAHBGiwlWzbipYzeZgKCsOy8nV%2Bn5wLjjp7hhKjKb%2By%2BdDVjon46SR7t41f1udevPy0h%2B0hyL9NgYT1mqQFFauoP7RQansBNuvebUd6iK1zIEy%2BBSUeIfx7aCoWtFi4gWdlu6%2FOmoO5olT%2FTwdwmU6uTMt2DppaTR7s9ITUb6tH6n63wcsdzIujb7h7S0QBOsVGq6MhmilwBOtH9Rxgg%2By5ChVVhX7892SCIZrkz%2FVL4KilxtxSIWzvebPLFG0VNbhD6MY1pvGnMDPkWLOO3PP2uZXumSPfzX2m7UxH8IAJeESTgXosHMVvr9lg6wiif6CFJfb%2FsyyXXIrhWzSuVko2MQ0VfCO5LwwaF015o4Kjz5O3ZeRu1fEunhFB%2FCQvWfrDwSf7sARlN5OT1Fjnzd0c6DDAM91fHi0PROWu%2F4PtfR5EreH45hfHm19U0wj3leCHo%2BBy1tlGNF%2B4CJHs3bwtmi5pSxSvUQ33LwMJO4rsMGOqUBWmgzuPyP5zpIGsevKyHZo3XOZUuz%2F%2F2YZyogv%2BhoAyyHffGPwPP7xaAyJeE0VA2N%2FuGmuciZ2v99ePX89nby0%2F9jLxr6Js2Tho2jMAk%2FNo1SMLEQj%2FGraQU6cDiVcfsykQQUI5qpXh%2BRwC8irny2mEHw7tqRi4vj5lkJZwlMRtcDJSXoEgiTMwODRWWl%2Fw%2FHlOfWUfe4Uj5BbYEG2YJLImNqgnjE&X-Amz-Signature=2372adbbf4ba9f2a101c5170e2fe3d86d3a937c8d75944124ab12a5eab631d78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LYLAZER%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCpNu16kfc5gD%2BxHnDlVuJflTI0xitIsv78K5vwpPCSIQIgFzYhoQVdzTSRpaRzaX8oVzFcrPIeVwv%2BbUJS4Sl6DnAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHYgtHNAAsVbsrOPqCrcA19aCfhtE9MAulLlJBTS%2BGSyu9i7wKqaVWFCRGmk%2FR0M6PKJBGsKEw2MJkUt1fsNxYstjCGwsnSDjn25SWqbn%2FEumH7otq6ke%2F2wVgZawEnFNnPznU0S3pgulRvo5YKA2RWwvzAsxabMhX42oHY5c1kailKbt0nc4jqfvFNc8Son7HIdh%2Boc8WvKqqTnsEx9vNhhQAbhNzUUq%2F4g3hdm8dyjbjZCvQ14771BvBY8M55ylnbMSU0dFrEJikHCoTSs7rvN5tWC7TUdlC%2Bs9nDnTCj29MsePZAVHuwJQfVu1WPlx6xJsQA3HsyLqqV2YxjaLHdkQZXCTZuwbaK6rtGkJYUmnYWGd%2FHJtuiz18BEMzW4oN6v%2FmTqiYZ6Q77zhme5BB5nPnk2VnrYC0C1jvWhgRb%2BIsrMKp5FZuuBg20HjrTEJObbAWuwKxD3PcahKyjt0vg1H5WXxIAs5B%2BA7Onz%2BP2lIaCY0m9RCe92kqBrCbV0WQApqjFO6jTwb9n2I3BDab86eOoXm9JLlBxi0bx9T2uiQb%2FEmDdOqDmNKXNsfUVwaG4xhtrmT7EyTZH1fyorYIu9wWUchl4FDtzxeRssWRac0lD9Yc8UTj1PJNnZkxD2Ua%2FkcBs%2FOCswvZFTMMO3rsMGOqUBliRMAn8fkh4x2g2Mwc4JaVY2pI%2FoEknnek0rz120Y2Iq0NmzEkCDEgI40abC4kP34u42Ex6maUNV%2BjgNfuRBMNW3Z6F7j9QLJAYmBkJBl8asxH6PwkC26TsSt8xrEI%2BImSJKHgg49ufAOggUjShB2W4Ac4LiDyySBhaoMXRHnu%2FzZhPF%2BEgDxbPB2ANZuGxnEB0Rx1DvPrMP%2FvkAVyJRJ7zVUVGg&X-Amz-Signature=850576b49095ea1d5e8e13d0db41e11e0f60ba6f6932f6b1f893c928b1b10813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
