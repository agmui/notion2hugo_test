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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJTT6EDX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCQ4dFQ1IXOZcIseOoe%2B38GLYAfrwPSELJdZq1xonRDgQIhAIHHrPzZnzbBx%2FH6cBCPY4PQKl3o22KK3nyLgCMbRnrzKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj5S0snLEfjz3GUFMq3AMXIaHfmKJW9D41cB1yMYRtPA%2BB8JBwCSZJ6r%2FvE7L2bXy96TG5Ov36rF%2F8FwknI4i%2FsOhcvNc8XKOAL3HSQncR6faqiiOgb0yWVrMqRFYZfYvHeGMQQ6oBspyRmcrJw4zzEbgymZpBzYapFY2UPIzjijiiKbsAC6FYwxwCl8pee1N6223ptrQs4%2BwrcVjeoHRK%2FCqSFd2G8S0Dzk0uqbUx9BhnrH0XuygbEB0aIOy%2FgFmtLy9qiMD9hDUKo5Xeo0Mmpjdyf6SaFtPffW%2BhTz5yc2TzYz0NZLnvoRCEwqvBYuWF1KCd89CDylfsJwSuooU1Mt7gH1sChzUqXXxvWCoD%2B%2BbZK8ng5LWngkFpsbWXEUnUHD9uxq%2BeUAIkG4Ru%2ByexSMaWzCCqXbmHGKwMpXiRX%2B5pYdZCcNtMxIcqmEYLwlcArv8N53ShDRxSnqc39lvXQK5dSXOwei5PTJjPtuS81Ny5Qwcasa8nF50AAl3q2aJySgRlcTZrmRZMTxOUmUQV4AMj255LE0gDFZv%2FTU6heoAMsnWSpYkQgMWhcNzm9HbiBbV7XFw2SIsFch9ubDwLEwVChMmIlLg8klmDOe31AYZI1reAR9mrok2hNLOv1V028xbKj9g7VwW%2B8TC8hYm%2BBjqkAU86pg4kv5NTXH%2FFnbCHgGvVofn89UQ7YDQ0Ftec2jpZpDwk7snrGFSQXqns5KjgAuIYPTKY6zmNQ662yiM0JhXEzV%2B8D%2BMpJW4P%2FYtqD%2FNfMbLYSfEA2bJk7dYGOFVy53biZ4ZMMa%2F5X3mxFTgocy%2BSAVvddPKEWlOShfyGbunk4eyodgTmjaRqlsVCU86jgxzy5QCl4m7rkqThvW%2FV6NvoMOEv&X-Amz-Signature=b2d210acd117b3734d7717d86b3fab89014e93ed547bd24c4d5f70ff63bee541&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LYOHYEK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIB52TBtZIQl%2BOKuIQzoBTGEArLgplv3G3RcGiOC%2FtpmhAiBQ4s5p%2FXexRNjEMOsPmn3nWV8vOMolQKQHUjc84mpPJiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXdL%2B2sNghPrhiiwKtwDbEtOGbiO44vjpeP8kXJa40z7M2DIVg1RtrM9eBXBRsjryugoKQ8BtV3yoRoKuIWlmqumWkAYNJ%2FeMIYKKfd2x%2BThLyhUyXpK4W1XaiIHS8lOC7MtbyI6zwbbqWHFVMyAZ2iDe%2B8lfcHyg9WAYvRHyUBRGRhDtVAwRbSWvWsker%2B1hJ5RGYy7oDl5DZy8qZmEGn5lckrN11XKjO%2F9BuSaAHsyYvirq2WMJBqW8KDlAenyZJ5%2BNw0Z%2FR2zjDL2Wv%2FyOUTb7pirPHtgdoUrnsHXUIIDOVKIbWR4D1oGlRa7BdgG1eRtt6x76CFHpmereF4PLz5NQ3o%2FofJqE1G74xFXHz5OhZUjirgC1wMMr7Nek5a1K8gmUnUCWDK5MzWPNMQaniunrEsc%2BrGYLkrTMt2qklBj4E8g1DMZG5Nr6rG4f0Mxs2dFsW0MOQ7E97qEElsdl9V6eTOTuSKHAW2ek5C90fGtTcAOi6BY0YyDL1D12w0%2BLd7crmMrhzy2qm0F0jdlGd1ma8Z7JClF0%2BcWEKn8cwm8MlcMOIhpxZ2JcMkPcMEdMuflme5%2FDbfw99K4%2BpfWuchnrh%2FJTLuJthThn6nKhDs8wOCTjz7ieTjkGfN4XZsVd6O9pyuKaQFMbSkw14WJvgY6pgGH%2BGJUMJbrCcCM9XvarZjD5gd2T4%2B4Z%2BZLZoE1kLUo7OjZ46I6g37WIImFNIbSIgswV0lFM2bmBizsm6KA7kOlhho75DkxU7VN%2BJNo8No%2BA9r3YhGT8ptsXjLGVHaAeMFxjfh5nnT1lXG0jtQZbtS4iW0V1%2FH%2FOEVj9SRAcVz85ce4trCpMeyrUYlvv3ZLpmdkQu6DUWaSc147t9YENYgv33Rp1sPX&X-Amz-Signature=cdbfac319fafce33a5e28ce2db876b1db5198a43cd99e7a420b223b7e85f640e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
