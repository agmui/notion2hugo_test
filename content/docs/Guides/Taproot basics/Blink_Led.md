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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPB6OKD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXGgrsiKWz0K9%2Fv5Wl8zzCttSmCZ9cTLnFIr6s8Ij6rAIgKaaz6aLa9KVOFys5gRr1pc2kHElOs3nvL84I8sOY3QMq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKRM0cxo9L2FRyEgLyrcAyExIzGkEsMrOAesbZF9YcTaY1v5VVIlA1gE3l9dPRTc6AY9siI6kMkD5cRdpgcnn12xeR7W7%2FUPOn%2BqrMeaW2QqU11ex2uXEF2SfZIUehNlKzXk7pPgFW%2FANbemy3htolA7kzOT0xj5QvVSf18bZb%2F3mg35tb9e7TKHPa8pcdykXOl2GdxJTWdKEHUCmdyeuvFgWN5Aiv%2B7nME%2B0l03Rekgg1xIyB31qXaGST%2FMwGQlJZtXFOBsFXOr%2F%2BVFT73WABeb909npguC2dqfJpZAin2ylx55eABOywIhjZnxCotJx%2F9pt9dE7yiJIkX8ME959LMl%2Fcv8ZHweGh57y67KDt8Usfo9iIyYM7Ly2v9%2FjEgHmlDGHsKmiT3uioX71xxOXgeHqbGjmiPQUPRMg6Y7%2FoDTbb2dRHK5z1Ic9LOMeGQtStnQ%2BrcQTRg4UhRctAIJtGvv6FY2sedlMcdjY6yU9iTqynQasrb%2BkPdI7H5lXVskUZ27moyjdxy%2BUnwd1wdxzGgMwRcZxiPEqTYCSwRXrAj3j13c%2BkmRbP01hIbRBG78GslER5ObLgxquOMkOmLzsyDg2sx2ehmGl%2B169Tt32Yc4ETGTcmcGBwElX%2B9TnY%2FifGxs2yprpNOYCQyzMNqkxb8GOqUB%2BincU8RauTr%2F%2BrF2W08TNfx3P4gDv4h63u2PUd6dkroFYT816RVW2XbKPsOJj0MgZXRUeH6LrsXL7ydOhb54cjuPbu7sNKY%2FuEaV%2F7bqmOZcRPpF7paHUrKA4w%2FTxl4C5zNc2%2BgvSn1es%2BPlH1afa7pIYbHtnQizVXC4VWY%2FmL0hGAwTvBdOMK5M%2FpA%2Bo6Bk4oXcMp3Pf4gn%2BvfAmvl8nuWPPAe2&X-Amz-Signature=4de3f0d0a069f27080f8bdbad32e274e7754f18ef9911247c1f20e843c3ad4ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDHK2NTH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKCC8twWtLt7PhaW9m4ImtkZU94iXDaoGzm5t5DCNi%2FAiAfRlcJeR1Sctg9INxMXvHPTN7NZGD2VXEY1XfDv5VWXir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMUsZ1Iy0BRTTXxZW2KtwDSjKPmEehAtJvwD4I5q94iEr%2B1LDhLsXIlWWWAeZTAFjyrCvt5hfQAHNUGTFD1gX9%2B3DgFuhffdc34NPmqDX4qe494gNXrW3BNZUrxKIiMH9aeEZJQF9CLJTzD5QQICTAI8dpoXnFaomIEM%2B3uM%2BLbg%2FDGFstUxv8lh088EltXmAObR%2Bvze%2B18Rz9WNXYShPcT9BKgQx%2F6FSdz3NKxmwV61naj10Ma3OFH2naMWQJhXmTNfcrZuaB1zzJST8fesrd7T5VLaozBoG0ex91xRo7HNtLKTgXk0m2awe%2FzFlVWtgEvSvqRchahQV%2FP1FYIrsWBTqIxkRguEf6VKbvwQR2BFjA%2Fr%2FZu4kq8wgWezJJtr4VPy%2FwEfBMRG24lyOmwI%2BOJOu7V7zykp36GX%2BRFEWIp0HC7Y3R5eXPyOeMHYQU%2FE7UGI%2F262%2FAt%2BJ%2F61BtQ4OT5Ni%2BAeJWRxr49zU%2BazIjXyS5UgoKeO2O%2FIslJf4zTTkhWIe47im%2FH08xvAreBBUpopq9ILdrubXMvyt%2F%2BKkzcwwu9TAMEL4xIpabrIbYsxN2Q%2F1OuOwqR6SO9ixPjf5bWmOpwAzLtrVZ%2B%2FBm487OBN7EsTil73GsWabDLIUh%2Fz3fpMyWDbXsI2KCE3Aw%2F6PFvwY6pgHoEc76jUgGSvstd5T1U9d5Z8TiK4CZovIml1yRhKDdtCADdhsmc3d2%2FsWFKk32PzmG7kFVZEkIHVhFYuVN%2BPHLOdUJ8hVASRlFGuCLhrWOzhTdfzdEHGtLds9VKrAy4uu%2BF1j3mXW5QDz3WFTu%2BbX3Xtm2W7OOwc7vCwIYybXjeGHi3tmgaptHJnZLpzz9VrIb5mws7a4xJzQkfXi0np1NC8u91%2BHp&X-Amz-Signature=eebb8ad6b3dab4d01ddc2754faa10bfd3aad80c7ce1c22b2bf1f1478e44036b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
