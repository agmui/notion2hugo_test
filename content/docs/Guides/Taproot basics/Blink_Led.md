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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDYGTU66%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKH8o5qdfMZu82wbciYeyGNmnUdwTDowjJlqbZT6W2%2FAiEAih0YIPFobQIaQAgZRyJpgZHZAU7dDDV%2FmPthw9TyapMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLreJoN1yWvba8ybcyrcA7jHdcV82BB9f0CtWlzwpMmPztkPTBRVv0LKcP85FIGcgpVHtyQNjTe5Xtxh0lG1a7D6Xlo9I5Xy55kTXzxVP477Y2LPTBc1dfi9Nar3yqtM9cU2BDTa10dHTKgsv4X3u1TLKUMatFMR4bZm9X9KelLKVjt2qLOYImqBq6HtYHf5DXTLuBB9jmE9HegLCGMsopcjKKGnoa9zIWHPKWyApE%2FIJHn7dKK8DBtL2rhpgoo9RYma%2B6%2FZAgL2mI2hXL1tVwMgyqP%2BEP3WOHedik%2Fx1vrUgn8O1WN9gaIw801nYklSpWXRpPqKF5oWwJmfswR%2BojWmpeDQ29iMpubKu1NRsWMi%2BozndBa%2BNiAs8cnEIWuFAUBEjtQ%2B0NiApBgO2p%2BfVlGo%2Bu2d82F5hWRC6MT5%2BHtz%2FFTx8ep7zofk1ruY0jUUz%2F0EplYGeLZKngelJ9FJmFcXPITu%2FtNhVJiGvIJTNg18VNaowKIwtGt%2FVhVztMJeQYNw6sqn%2F6TBNf7NMDixuzJOb6tmZKxxhGnwsKJYhCPxM9xqO8zMogaTAjh%2B0ovdPoSkG68%2BU%2BGb3K1bDnuvUJ9AV3qwBwRcBMjZPRtX5vQ09d2hEXPKbMTVyt7jsmAIivEyJa9Ad7CUGAQYMJHLo8EGOqUBuCgLffVmqhvzOdCNGH0ReUwwTwEmGKuTSS0aM3jlg8fFzj3kB20e7hREsZ42UagvlCLkXiMAkv2HgG9v3DpKfZCqdTYOpAYc7bybowVxhZxceblCRlekZKMJks80izJIAvbnMEDXd8BSJbuVJfkxzjz8Puk60sDic5SDu%2BOgEjx9ibhAxttrW3yaaBSiTeXM3M8v7y6nkOX%2B8ABEBmMGUOCghXZM&X-Amz-Signature=85fba09c9032bf88772362028bce4c1454ebaa8463c0d43815f9df82559adf89&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A4KR7FW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtEGFyh1lKkdsIwEVsRCjz9ZkYvf%2BKn2xiyIvli7nviQIgcxeX9XSs%2B5uTyDQ9UQtbhLSAxbDa1jZkUmdCMa2e%2BN8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDS1dq3eaHPQibYQ4CrcAzr%2FrhLuT2spkJOPVFqoIrwL45IuCX8YUt9iYfGCZF8W2jnLoH6rRMpXMd4pnnr8LwBg%2FU9%2BI8%2BUaOuG7O3ch%2FavhPzBVa1dntfvMGwkxwFZy1WP8z6aRYr7%2FSNBKqnMhHbWDkQ578zxFLcJlO72qQIW04tf%2BoUhBUPNoEtfa3JAoBVcHLVs0c4FNZiI9F8tDdyVy2jFJ%2BPHwyZDRT3nC%2FXZBScFAOnl48ftsNNEOJgSRc3fQZJCzhSN3HlbOkeYqxR%2Bs2h6m8dHAfY0Him5DASBjG7AE%2BAb8Dq4Ds%2F8vCvZV3hIeN2zfnz%2BLL1ZRrMAFo2Z1Suea9sGit%2Bpqd3g1VcXaD9d41e2bnlLRAQeQrGSjgtpNnurCvEAixXyXK6iVV9dPEE81%2FW0LmJfu9ZnxVbVbG45gEnaIp8Vm6ZzPj%2BZnad%2F2hCT1Is%2FC7Iq1%2BqMbLkibVUYqhQ2RMBvOcrbUcNnLYxq%2FlOaGaylWleqjN8O3heADanaJXI%2FA6%2BoV7yGuirk5r1NYvMwE0Ak9a89OqU9EGrjvRojbFyFFhcOejexKCez3VYHSI2KJYlbpCawk7VjCLpSCdGh9cy0%2BbZMBkbJht%2FiSE1oenz6CASiQJNKqd4LDute%2Bfw9lkC%2BMJ3Lo8EGOqUB69eEx6X%2BElABaZZ%2FIEJn7M0F%2B5VUXHGhR28VcpmAJX2Q%2Bp4YGe6z8VJPyxkV2WIAuhTs6nudWagZD9gWqPBVEHnEL43V5MGVVWwUBeOcFPkeAFCA%2BLLDCh7Ire5wH3GvkreNc7wcPDh4mWXtNayxDyYX56ULVSHpHKM%2FP%2Bk5g9Um2R8zfS2YuRu2u%2FdKeliD2%2F%2FdKno1NjTU50APH6dzLHG1TRfx&X-Amz-Signature=55b2aa1d089865873d855ca02966642f9091af9ed804ed0e32bb8118d1aa1460&X-Amz-SignedHeaders=host&x-id=GetObject)

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
