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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UELCBLYY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCYgMfx75%2BqO2gU3K0d78Bw%2BeGGmKDICzzwRqlRMf2sgAIhAOfezGvJrV8luiT4fE2XI2UMNAnp6xfw6lLJX4b6F2UdKv8DCBUQABoMNjM3NDIzMTgzODA1IgxRdEUGOTvAU2FNi0gq3AN1dotaMdBirIDeePn%2Fua8enx2CtA1Og%2Bcgpb632WmHwUXVvndzOBCdZYr5IOZ%2BgqB9pP16QgLkeGQTW2aerR0JmhhRQEiR2%2BS7KF%2FvZtt1xyazq6mEEbZAZEwl8uJ0QD%2FsXRbV2%2Fi07Yp908OnY%2F6wZ%2BT4kp%2FlWUielStp0erqWKEm8svP8fvn%2F3ToE2QdvmT0WBSNizvXH4mQZg%2FuhISozgOI6bn4UGp7NT02rBbL%2FtMp12bj4zBdQUZL2lwkpoPwzkb2qtiXRvq%2FjOvwZGOE5dnmCWypoRRGKqgDwpoOZf%2B54T4DS3Z0hRhbB5smhvJeD0zwgv%2BG1VIBSGve1%2BncDyMAeC7dLoYv08nHsvkxIyKmG%2BWpm%2FZPHqyA7Z4zkarA6ph7d8024uq9FlUp2RCKXkS1mpsSZAbBChH6NP28nFtzXtSt6DdvXKT5SEuDas7a5eFlKZOOzgogCtTRSUImSCorG2RvgNMkc9Oc7QbMTrYCp33MoGV1IzJdmSYdssnQBm3xpCKAEXXZe9IDPgm%2Fq4ERcJYphqlbqs23v2A1A1pSM4kSx1mp9W7Kun604e468RdtFBMl4hrJUmuChM57dhwSeI4FoBlDwFYVVfu%2Bag89G6uU3pj79MWlkjDT4ZnDBjqkAS3LYGtn2H8YNl9l6t%2Bo6Ea8nTqdWeQRH4yFo62LOgW3WY1RAKcPjUYacN1AJmKmpgV6A1PHaOQm1G5gVsCMIpQ8wtWIwBK8lrXZdDL7GqiYDz1%2F8iNJfHPrxcnqYZx%2BhePDB7n9DQkrLaRg84OM2%2BqqVi1p2dMDJfDUbPcyruymaEcq6U%2BsvYQ0fvYAOy2Bdo0oNcikY5579nZlmm0sP74MmmMr&X-Amz-Signature=071fba3286ba26e3ec368affbf94392aef2143322c3b7bbcb992ecabb27f31b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CDWCTA6%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGZswIOtte%2Bi2MH%2FS32HuL1RNGlhB369rWwLD2NTdLfgAiEAjPtUHXzN%2FBvodXfJM2Hqw3STgVm2UloEIacnuGksjgsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJ92vPWHW926vZCPRircA%2BFpQ9Ny1zr2MnEnmKBx26qNYfiTQMtJ2AInhal4vLjvxf499CB87JAj%2BV45Wm%2B%2B50iwIlPyho73DXi%2By%2BFtaGAvkKe1qkJfeNbK0l%2FzVAdLcERWE%2ByaIffUns8xYJ74CxIuq4MGtTPaDY51tWNBBYsRLQEcw0VziOkW7Cvqg1xLHqCrXUuXsw89LNb2vw%2FC0zhr3D2Yts3EVR3BdFst3MCx%2BSN6e1is3z%2BZXNHsxgSNlOeO59oBeQwvJ79IsieuVaKNmEpIeL9B1lKKdBfZ8c298M1tbSTk%2B9oH%2BM2REO4zo%2FcjJcTCy%2Bq75jDpREXmi9zuyFGe0PcSXzAAh%2FElg2L6dFsT22G7Vtt3dwNdDQEOpFDdPy2FBEkD2W2shp6v2HycSCniFInh33Y9vnuF014i9%2B2dLnOhwpFttZwTbe3n6MxaMwOktrJDDyRibUHmHNNiEjdSGiUwZXhkf48neJi7Mh3k5vDf1jJa5MczkvVRC8zAvEI5TfNAplCV%2BbTZTxAQYLyxe7EsCjdxhWfQz1UedTCAV12zGUIDlKkWj8rmHYmgTye8pMplpXdkoyIJtK0akENsd6mxdjxHuBPkzWxaLk1G74gVWVm7He30%2FtxFSgNHEjR1hLpUwbcvMNvhmcMGOqUBInJTKRoLgpKgqr5X8yC5NwpAOAUDcjbWIH6VUd8BAZ54d79%2FvqWmMbxI%2BPI6Ja2WtFpwt3m4fLhhr7ZqyQqwvBGt6wRTzIRQ5OTnXSiwyUJuCwDqW%2BYpleev4sKfJMmDPYUF88JrOwaBhdV5f0xaLYfT7Dh1jDFIpWfzk3a41dmzos976q%2Bj1vF1jRc6WNSufmUfh8bcYzkL4cizy%2F13EopZN053&X-Amz-Signature=f16a3468e361fc42027e36a2bdfe62ed51e78ea48f0c3a5cad57d3b79a2fe6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
