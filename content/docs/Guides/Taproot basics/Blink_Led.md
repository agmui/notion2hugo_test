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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TGG63A%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyIrW4%2F4AxozCYh%2Fk28VDgckc9%2Fms%2BTcDSickLf8AlLAIgO2ltJ7%2Fj8WjJ6J2p%2FYK24A1qlSI4cZ01w85fnt2SMSkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCi4L3ck2oQ5NUhmsCrcA9yAoT7OTr22BOoBlc8YDx%2B2IQUuv6WkZh4NaMiLDhozZOdFGSvh1%2FeYMZk2JKIncDRw3be8HfTJ783RGPeMqNcE8NSICh%2FX7Z5VR5SJpU3jqs0ajYrvsgrj1XadSwPTt%2B5RpB1VTGFbKEEnK6CodV9n5FvbrucimA%2Buk%2BrV3sMazsNa%2FTLPvbOSK0%2BSq%2B8Ia%2Bnp4PXBKcWEnmJAsuonZULNFZBL7fe3RbO5Msd%2FM7mypz09AhuUxGCiDxkm%2B9WHXRvfX10mrWjX%2Fep4GHeESzaF0L1I7VtoQso7NF22gA31qE9uH5%2FAmDctCpgakR7q4HbdqGlr7IYDyqUMSCNXOjO7UYfZiRsx0gKki2ZTCyf%2F5pEuV%2FbunRhr%2FW4VYf8SSNhlTg8MzfKqnZ7pxh6vB0fJw9UOCde9aZU60BYNZZQ3K4xK7vZtyxOzPUs2XSHC%2FTVnutTVCg7KtY%2FzefS9lv0Ad85OhQdgBpk4BERYPn%2FKDUG7mz8jFKk5WpmimWfqcVj9Eofj6CfmrZYp7gR2Vgtqzi2GmosRmIu9OO0YyYlSL6Ld8z6FRGhcTfA6024%2FgrwhrDPbtSC5eyNZeD4rEd9poriRvpR3GkaCMNND2TawWDKAAiMNhEIBSS5gMMqBvsMGOqUBYWRrbRg5HaPMd99wVgHC82csscYsq8gwUodpmAy5FiRPTnNY2HjvB00Qx75g6hHcP5TZLnUEnnNbgLalzoRFuwh1pl24F5rQCOBzhiA%2BDxE1OzHZoFXzls%2BRJ0qiD%2F6%2B8f2txBTqrx1puSkwAWQyf15K04u0NUqu026CfPbqr1UcTBcd2Te901O7jmgzIfNWjn%2FFkqvrFneT61VqbI2xxQ0IX4Rp&X-Amz-Signature=ade2aef0021bb585e2a728579b35e29fda8633566540f00f22c7283928db24f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYMQYNNT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqZOc6mIXCAS31ndpgIHO8Nd0aM6vDi2h%2FZv2cHREUkQIgL4266vvhZdi28EFEuOu5cUAoR%2BmovuyiNMw4yWhV4WQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2Y7Q%2BVY3fEk7JUYCrcAzzELuNQg56FerAKDuyuFPbtsSitK2i2VLAkHUqfahZGMOqcsoRuc%2BQBmWh5I0aV5Bvr0sBpxDf5WxflOhLQNcHYz%2BipVb8W5%2B17dFx8hk0PuwooXLms8ZLqieAr%2B%2F5GS18vJkfnUKMnkiUnDMlTF9lMV5C5Oh1y1gaYi33JHuRWbRo%2FbStVhPuU0IUxeuhib6i0ZhVbBWcqvUPmuANUIdYzOeMLznZJfdYxuT%2FYCeNdUsdJlPvs7VmkVkgUC5uLAt8Iw%2FrWLFbr1BaOF2fCb7906lRtSyJUKln5ox3Y3jK4SyTWGqXTyiDkFclxe8JWgeJudTuxUOoxzTS8%2FH%2BIE8t2NfRWOwGiTNcbh3tSf1s0FKOTYDciA9b6Xywt0AdR2S%2FtXM%2FO%2FVxcZj4Z9F170kZKtNLgKBX7Gu7ESbTRCcAtPfM2lBB6Hwc4i%2BGOcalEQMRWEZcE%2FMC6DPSelGRYf5%2BI06B3j1revLdIoawJdU4fDn5hw4%2BGgn4lLcA2jP%2BrpGkcb3OjruaExRC1ig8g%2B2rOG1QUlMCCYgkYjlKsy8tm9Aw7%2FtLWtqANY1jOdkUpw7rvirWkoUMSdxr4J5W%2FTj%2Bg4oWRkgftFvRN%2Frw9ou5J%2Fa4Dv6dfMxc7q3kYMMeBvsMGOqUBeSVFgg7ltxcMuzY%2BzY%2BiUEHsCIyMkrdsZm5MUiMKgLVjaJGsCTYgRRFAjpbEAxCUGxIHmi5VySPwZajLzGIep%2FUUcJ80VLc8NcRv1R0MEukAKmi4Ca%2FTsHiyU1Nhb1%2BgV3ts46xzohFpP0A1vHhAMPW65dhKdUom2WHcY5SD%2F8gaBfs9QwfJFl2wXWw0apzSs6ENQxzESvu%2BnANJLA7Gxi2sWuOt&X-Amz-Signature=20387a715934b07784fcc2da4dab9311698eee7059313221879369311656d795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
