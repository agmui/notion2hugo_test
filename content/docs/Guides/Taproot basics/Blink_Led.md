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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TKZHMT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwJZyp0WryV0g4exHvc69IPCu%2Bc4OyKrRI%2FZ8Dz3pm8AiEAuhac3432npiwA045Bh29Ic7HagQrBWZUx%2B1UP1DDs48qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZpIiR9AiBqKWEbbircA5NNhlYprQTHwKynh%2Bg%2FGSdtfBVjpwL5JrfKnOhSff7wG6dajxEyU9XKOiAwCtwF8orETbHdbs7KVwovdSkWeCHCUR4K4ifxutul1hlW85MkhkceR6TOHGAhLqA48DZSha54ERQMw3PzOhdeaJp96B2D6ZuKq8TmmPg0xvBlvx44kHDkrHaPRLTCfyeG6K%2F8i0SeLcg%2BWmtq7NBFD8mw8OS0r19azChU1cSiVtaTFct%2FJIg2L4%2BsFCjDq3BfBq6g%2FOyOSZ4aloqzCIKRhsYB%2FrHlXCgr3GiwxgwWtzPS4V86TswkZKiaJfafDqTU4PJiWPfiuYJAL5KoHYawuecKL%2FUokisHIn4hBsuw5zy78IUT8oVIoejIeZ%2FTJUXsL4Ee0hNUIRYMJmR4I46rNTwgZSzIhqNqZpojU4%2BH4EsTCK5UoCeCd4fIof1fi7l2G2cKF2tvZO7fp6rxg5vxFYb9mkPVSExi5neoQ1iEwbWyYJYTD5WVMYfLaBMZwEhY9bykLCUb%2BsmzcanjgVjwDh3HydXgPXXmHSXddrd7AilES9qloRYKWKQAsZEGKcvadAflP2UzwHdFW%2B8xKhYy6st8mNlaQeKKYnZ5vstCmP%2BdxKJSX3mYoKmQZiV6AKCvMKTFz74GOqUB65M3wGez3GYODgotwGOxkI3a11Gh8C7Jl6B%2Btxt%2B3FSyT%2FAv%2FJ%2BMlxWpzQsWo%2FNqV2bqNxSHJqN6uH9RDcFTcuta3xVcN%2FofXcKQKOWKOX6gHy5iefgrRSyCbWLMlMHMSOdOd6FeM3MEq284L2f%2B3iHjsgBFfGIMd8b%2BQUFuj4KLkOl%2FO%2BYmM1nmZVhc1Kde%2Bn1vhd%2BtXiOpXGMlKF9iQBydCgSp&X-Amz-Signature=62c6f1177537fc09170379e8eb82407b71baa3c85509607710ad414b66d1e623&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNQDPB3G%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKlLrRwYPsWx0jaVoSSW0mJnSu0YknJhuM%2BzLRLxUkMAiBxlrgdoOdkEUwXQ%2Fydaj6BjEMCr%2B2TKlPSiwdNfl3f9yqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVqBPNfn52vXVemyLKtwDk%2FCJAJc3IeXcmLb%2FxVW7LA%2Fzmv9qEMIj4luIoUkF3oCBzE27rTf5lulPoYkP%2BnRLsMjHTtBGLzyDRQ7ruC8dk3mPmHlspfhnbwpmGFsCrGKPxZV%2B0GBQXvZ57BLpWaRB2AivqA1cE634OxeNnpcSTH2uF6t8fE9cZALzT31KMatXvc1RaW8gzX1Dre6FyYpLYebNm9wCFbGDEeD7yVxWJGe8NTM92ojpOigJfwbZwxcd5SGAbdK4xgd0uc4iHPd9Ua%2F99j1JlMWNwjtFBL4mbF%2BRyWWPh2Y7YA0Yfib%2FPL2uZy9HzZDIRrpuFBzuCcvD2xtHoKf1RYHc2ij00czzQQmHI%2FU0cpzCE2xjX6NM030nnorTOV0Vp4P7v7jBRYKsDBK9i%2B%2B0kA%2BcDuqR3esBTYuMWD39BdLEy%2FrBm4TyMZV2mzvevh3c6wXzOcWPqBs6utn4XA1ftvfVfL4nLK3nfMTwFDlZIiNGOq0pOnan39O4%2FZxgzfh5GBePXlrtW%2BIFvVDvFX0zb9jyMjd3HvPzfkzZsRL5D8hwr5keifuViU8CnKNtI7xRBvx04174M2gCpugoD4keLwBXCdseHICoE%2BDnGLZaEsTRPbLlysBXeRoO5JtJ2RGfWd%2FnuPQwq8XPvgY6pgFPyZLtzrenh6rcNL6LbuL%2Bf2%2FAQFBSpVDqjK1QJZuF9rfTw2NRzIuSflf%2B3neV2pPb%2BbBWpKR03Ba4R0Xlk4S7%2FF0FTn6BVCIszrPBwjs3JMZYDFbrKf1%2BUYVZPp887oeTXnKpEloyssPpHfYodGJzxNgu1rXSElr2lywy94501xd2OGuXERIEhrduhIpUR3etCtHIAQAGlEyxrNaFFZzYFrbyC5Dj&X-Amz-Signature=bee3bf6ac8c04bb9a62faca81c44769c3da8471f80f607d5ad344cf84af68916&X-Amz-SignedHeaders=host&x-id=GetObject)

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
