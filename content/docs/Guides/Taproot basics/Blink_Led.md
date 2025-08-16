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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNTVPJ4I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDNxdpgE4zAlza7d8BknoKCoMl6CEmEtxwD3GsyRn1b3AIhAPJ%2F62vFKPiO%2BqB4TmY3ow8g1giodgEiknmQ3k36U6OBKv8DCGcQABoMNjM3NDIzMTgzODA1IgzfOjfX1EeTdjpS1Boq3ANubIpNUB2hhFbzmxR8bRduFc8UCxAQQyxJkr4k2qEGjDEL6%2BD3SK0UV7DMASHZWuf%2BBzBjhZw6Ubm%2FKY1jnG9KV3z5K1tC5EzNDpuNiejymA0s5%2FQPl4diLs%2FLvKUbXGo2buZeA3s1S%2B7RXvTBs1CTR4qLdhAwOyQjN8i0exCa5dkmby7N%2BaB59%2BkFFzO2apxmDvWHXsQTKkYfGoJq5gaQTiuz7k6dtjXf%2BuSsyVsPscRhUqfwX%2BCOO9siXPq1pSTXyr1ODitTS8PLaNe72z4mC1OaZSSMl3Ra5O9Kd6NDzl1uNSXT37aSfx9Vo6HBP7bA6eJo%2BQakWAIF8Uf%2F%2F5LBlejF%2FTdPapNyv17Jvdw%2Fxkyqzs5G0MZIhHYbR%2FLg%2Bj8bv%2Bg9QgckjAWu2CEkjBbpIgYvcjyYH4Z6EPY36YDkawokyFdDEU1%2FHbVElVFg3IjQ%2Fyr0wZXMJEPIxIXw7LjoLJUtbw4zOAT8I4dAKSX3aIMYL%2B8APLny4RbCMTuAjI5hs%2B5NQ4hcn%2FJQamjERARx7ISGQL4nOl24fFXVsp2OY8CY%2BpZqOldTakkeRAip4ChwP6MVWGzIlaDMuMpHubH74l0FWFMNmVp5OXrNHhW3XGNDMcR9UJz%2FT805VDCo2P7EBjqkAaa9KEzi%2BqRI7QDY0vjIhsvsMF8cVJIbK2LJn7zl%2FkbNVpVfCan0erONp5J9QUGM%2FJgjWOa3AXucnVh6CKsOwrTHVMBRrlHFtQlcdgsFM4yZyuXbiN6UTfS8WJ6cP986QJZLT5I36rJXOSxqU7BtOpuzKKlyg1CmgNSdD3DP07coAC79evtacAp0ntTWfeMQYmvt0kWtDzLHoQDrUBq7%2F3icNuml&X-Amz-Signature=2e19451f4878fed542ac47a03b03f787f4fdf3281d1a24bb22829056e45cc787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ZZOORT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCaTJRH8jNWDwFChMiJw%2BYUhzGF8Zet%2BDnzkPYTUEYdUwIgTJwBEdWTc%2Framq1Ek6Bk96JmwmKlcHlXiwpdNlmVIBgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDHLGCNGWwL2uJ%2BkOircA8lBPJZeGiSC9To7u9YAsGua242sV%2FWGLpbl9YHY6mDeqE7feWkJzqkEaGCB7wuRs6ZoYIc%2FM5RvtStiPxdcgEK2Sc%2FLXWAH9KgnMrzB7yUs5k8pH1PF4Jtu%2FJPt4laNNzVgGleP26rGs1qJYf8teq6Dm91cubymU8r2%2FIOfuqsex4SDeBGZ2xmlnTb4H5M8uJm82FbI55n5tHMSPw1h8oEKlxom2XM%2BanuHoabE%2BzLaQVm0QEuzhXyidWq7uF0l94tsmeN5wNsfgwWWUfOUNi%2FJOJS2%2Fim7dEKu79%2BR5SjH2Z1EPC3Z8DP2lG0cZCuHFl%2FqadouzcSJ401oTjv71eUsMVRgTisPjHdPjqyIIjDdfMTQifWdOtOz5ZmxxYfdftMcZ75zLKCKOPNc1T412xrhsaDRgAWNCrkTytC%2BD6Oa6436S1wPuw%2BRZVb55VfRDks0nrAnIGBeuwD4ptuVYN%2BOCTa10NHb%2FE7IjTqTh%2FO5kYVqOyRrkmry%2FmnlbynarqAd5GxyXvkPWA12tRwH7eo%2B7QVSFJFliuWp8tAOGT%2FP7MtguUxfD4FcG3Ure2TlJM7idN8PgrOEWVZpSLsh3GnJxZViQ1ZcoDNdZcEjXNxA%2BEE%2BdSQGyWogt7bHMMnY%2FsQGOqUBXuEGI8qrk1qJexQqDYacMcTngkcNVA%2F7meJP4FQRhznLuAZEIrVKca58mcsy%2FqDpTDLd0HxNJh2vPOetXQScl07LsFmfJXlNTKkf6NZP8cqNuxTiWj5oGAzfJrgUxdGRtg%2BRqG4c5WYyv999QS7pTKz4b839t8FbQk42BvaTchiL1llZjhuec%2FEFkatkQUf1HOwrg%2FnP1N8R5n3WrcQQBAYqDR1v&X-Amz-Signature=dcd5546673ce1e62450fdc0a8448fa4fcb09e4a5be0777e0512aac3b24ac83f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
