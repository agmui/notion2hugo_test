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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y75FGNEK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnb5ULtSaYaLInyQyGduRS09USUNg%2BEzm8PPdk6X5uTAiEA2DOT2FVTl14kA24BQZIWsgBBwgZpW7bQHLRUyqeDdCsq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAcTHNz38E7Htk0WaircA8ESZuPbTAIzVx6d0owT16SBb%2BQ%2FGR7SlT%2FhPSRbSYRPTS50Qzl5%2Fl43LENXkOvp%2B0Rydz3DPCdFHdOXshDjPyrtp%2FWZWfnpUsD%2FIMsb1fiD%2F2rxUrKgGoLARg5LXiwjSJefr949e6YvBwwlOx3oIhCoZb%2F5zNR6kQ2XfWcbvJngSh1ZK%2FVWFsLHza0MdCBrfQJ0UM%2FBvLSyHhCq1nsZAZS2gV4hPJsGQSP27Nr57%2FoKuhtU03RKzEogqWmufX9bGMBH6lxOEWd205t5QmbAcj2TPz1xGYVnYCQxmKtgFwzq0c4YuOJeq2XbiPkprj04nrlUwSpau5WgLKAOxJA4ClPYB0wYFe2EetbVhGdfrrtpYRfknWOBGETkB%2BzVYLwMo%2B6K1dd8i74tyFwkBGYxP%2FywWng9u%2BI5V3R2j88eHkQaMv47iRHlhFc0B6ouHGOSXtZW8h%2FuEIgo255wCBTmUYvdrnXcVaZ%2F5JgfzPMF5OOYNC9%2Frys6D%2BJxQ%2FcyaidMCIsiKcdYnBvcP64zYfFOzXme60A1cX2ZXBQBJ2yrOgcLqCUqXDqE%2FvBXmFgZFgy%2F81dtknJwtpCwZShjrWGYLebpaule3RkU0hI29G%2BH8dPMxkfLbhaY0U4GYSCXMOOd978GOqUBb6YaVJVPIvjJD%2BscRCQfqzJGAfc273fLubXraeqIkxGT5pAWuZwUBL%2FlQDlR75uuSW69xqpZ7KNWreinHCXuX6oIJ3c7m%2FSVCZjTdiy2pPnI0A%2BGb9eiqqWp1qUcCmXa%2FSTGhAGEkGRyBBxUBj803KNIUXuU7%2BVuBQfsLVITairtP%2B6B3%2F3xpK%2FhqCWF7%2BTfuX4aQB0%2FjVqhhjHFAmRfLXdtVFAM&X-Amz-Signature=c157603ef6540ec48ccddf8da60423c2cb2955210028a01c443054ad216171fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKHLVEQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtUkXswho1AN0PTdt%2F3MBesjcv2mIXkMB7TD3z%2B4o8CAiAO7OFuAY3QpDq%2BmMU8LHM2zbKUOMQRdkWLDJ%2BBDjNCHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIME2YrvkDa%2BKQMAPJIKtwD%2FNFbHt9uU6uQcJ7rMOHzfwsfAaJmdDUcpTzotAlSOnYqzXqRwcqXOolme5kiMXHmgb5Dqw0H0TryWtR5Y0W3pDV0XwFxH8AXhHnueZTINOq%2ByruC7Yox1Q7%2FxXeuVAY0N6BjSJkIW9QE7fZfH2Nmy%2FZEKxZj2I5Q%2BxNj201kqexPyI8DayMMRsd%2BHFuB2ZUH9vuv76qF4l7qiZvAGXs90Yi7TMEVVCFINFisEu74MYagLpIYnimhq3g2%2FcYbuSf2xdYnOkxx%2BI8ihJzjCbkKb7ASn8BcKmIfE%2BvyqT78OtWXkO4PTesYM4W0hQ3XlilGQp7MRJBznhrx72YCmVaw54Y2n%2BVytJf4gXa8rGNlgGqSyTQFUf5qf4HiRVPLTwrnEzdr8SpjNdRBvDyA0pATB9kdrggQPGE6lpDaf610FgGW0hrP9RTMmhBVoCkb7DBqPeEX1s44qyW7sk3NYG4Chb4f%2FhyXsehoPpkaVfbxI4ZxrnE510pA8ioqCU91yJpmgXWIaMFPA37hlk3lftkJXf8xcFAG0cRZUQfiETMmEMRdh5M%2FMud%2FIy2gFV289H9XLB1brKC4HPHn%2FoEE8Hf%2BhEXbMOUsd6WDtUFBHmg5nQUYi6n%2B%2BgzFLo8hGuww3573vwY6pgEcklE%2FW48D7KCxDdKdqMYtCVZ3g6f2afuEoQc0qtqRygYgYypDQHV3gaztfCpjH8PMgZCnqUzPxHK4%2Bm4xn7baUPwnp1S%2B9sFWmGXyP8Iqdu9NhJQxaYgSHumy0omqzNR9q7cUHwXPBquAVOFo0QZDieeLo82ztbTSQ2KJC84ZqUEcNnQfOMGG%2FGJygtELcPtDl2Uv%2BZ9ScmHV95QXxYy2imXXNgQt&X-Amz-Signature=e7612a9929494a7f1959e79d02c79fda26c5aa2984ab7e43c25b0d1c1b46f265&X-Amz-SignedHeaders=host&x-id=GetObject)

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
