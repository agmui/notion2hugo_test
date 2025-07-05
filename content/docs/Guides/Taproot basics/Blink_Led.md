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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVJWYTIO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCeNRQDdXl%2Bgu0FbWkngPTI1Ft84lpzUh19GBQyWRCVeQIgNydBWfP2N7OY%2ByHtlRQ5AolSmN2hxnQRlOrDKva5zOoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDH8OoJgVCFU5vPiSsSrcA6tAzKeCTeYNGgjqcJivft5V8FLsBkjC1eW%2FcNnwU%2FIV7s5DeCV0QZLdpB3w1UJOD0wU47Diw5WllRLH8K54vm43TWtg0rOyFQBUnyyvFd77WSIxRhhzvZY887XBBvPsMjCxlhPckHLgKJ5afTQffRfkUkGgKhZ34JLHArJVnQ38q2R%2BrQH6%2BmbqIfTeSyE1%2FlTDy0gfPVhzSxNv3mIc%2Bj0Oq0%2FL%2F%2FO7wlxIfr%2BlRYLsWBnxnxPzjPQlMPlZ%2BFEvI0VVcws%2FhtGkGY6nLxyIR2PFUTuw8lK0zSqxngUdk3HqwzSH6PiyzjXS1E7PpAvi1HO78i%2FZ2Zaj%2Fw9sjqGLGlwHt4KVtATEM7T6mQq4nUzSW04pmtaWy%2B%2FyDJ0%2BQo%2BSdzV3gJDFIAQiVGyHSRBty5FBSXwaG3aDd7jWze8vrcNLXzspUFci94YGYuo5cBKpJp9uiMsiqmajbBR6kGLnA7SNX53dVejYZCrnpJUapGMCtLeRiECmr%2FHG2kR2JDEYrANdEmqa%2BdngfZ8Ut9i26Y%2FOMb9ewY96RFa7a0sYwY3qgegndTlXJ57ekZhj%2FIethz5HBFNbFfTTXoXLkrzmGlPTfSCfQzkp8JLAMFYbR0Y1hN5H%2FE6y0i8wv%2Fd%2FMM6HosMGOqUBcC6w2C9Mrd8%2Bu22NGTY2HCPNr3WU5V00hQHKO8hmDq0NjMaGxMIdiwgUkq7lQ9RYSU7XmeSPO9XjvbSmQUszomFw5tG1dJJwDTzjky6%2FW2nD2u2wLyClci0AlizsBn1g%2BuGzip%2FeemvyhbFs0kOMs26o%2B36PPsG0af7SnzFEExglwi2bIdCdkGvHEYlCRiCxsZH%2FoAy6lG5OnRrZCgyGEmDDa7YI&X-Amz-Signature=5a1034122a127fee16392089e20792d035068667ce655476ac43601457b5f9a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6XDODE6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIFIdjfxVhS7t1U5UoL%2B7hA62Vf97xLjIjebqJXe096tCAiAr%2FJRXCoJtHJWtIePGgrdz9J21UNf4RLNJTK4FUn%2BX%2Fir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMUgy7UpGkh8BMUhL3KtwDKwOCe3IDwGvevTANL5j9kvASgTMlABQ10aPyAGfCirQoSIUGMeNCrFiEOvEOTDx%2FQglehGYriQ0ugoPjl1MUVRom6XRJ5sAJvgJlas3tRA8RVmaNRJKoE1um0S4CLb3%2BfiPZaMrXgbh3Y9sieuORZrN5WjvuSGRfrf0DU6Ygsm3DAS9mgpxr9dCEmmTB0mq%2FvGSTFD0DN%2FpD3gcJ5Jf%2FCr0skfzw9uznciojaIqEaUPt9khsn9%2FZ%2B%2FHMN89Perg00te%2B9vIcksR9zwe5phVTp9WJvkojh76oTFvb2vWbvSfZeUaEBVGKT6rlJDnS9fzCCo2XTBcMVaDJE%2F9NzcA%2FlVzsP9F5wk%2B9vSiK4ssvm8OkxPLTJlIOPIDF12h0wO1dgEHbOEQKmnItjd4uJ3YRDhW%2BeeesD8E2IBo8B7WjAzDpditJkeyhFsoVrIZ8LNvUR%2Be0Yn3bud8iIvShwicxMM73mz%2FESB3%2BfEkiD2N%2BviQ%2BiooIY0MOY8GfgHR%2BY9XVROCMRNz0v7oxAESb5J3AiA5mRdUiV5Ob%2B7oFYWj4KARwp%2BKb0owC3gbVqmQquzvoXNErk5Mu6dV%2FqWFwoqBM4zDidiT9Y2bcvhy2rPv3%2FXu5%2Buu1%2B%2Fr%2Fwim6ZFww6eWiwwY6pgG5OuvugS6jmNe93FMUdejtL6WoQvFihbN8j1VMTY9GOntHOa9z1CRiAKRicR0kHBtKiDhVCYvdeLmqNvM%2FO73ymze%2FXlHNU%2BLha5O9zlq%2BT4iIZzwJUgjyyIMcaQr8Cn9%2BqXsikQKkRVxVKqzJ7%2FdhrN1qgxK8AsAfLOnyuokpNcHncjBGV89ozi0w1H5%2FE3rG965QqEQN9JReGUuFvch9UGu6T%2Fqk&X-Amz-Signature=020d12b98a03ecdd1156c4a8fa82e78f1ce29c2648a5837b5fb3bbf95f3319c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
