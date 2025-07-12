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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IBEFYJ6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpsH%2F59L4XvPIsiTIGkE1d9akckLyOh8G1e5ziH9ONrgIgUoqV4zRZJN%2B8xYY7ZaVr4%2B0LbdIQlOX7eCY9MYArneYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKphuBbYILKHIq38byrcA%2Buoq9pow7TSB01PxsMFLtT6gkwrSA4wy0z6p4clSSYuvvPn56J%2Blu%2FBu%2F%2FFt4zIFEQI9NjQm5d6A%2BMn%2ByQSNo2IrMT07lxkbAZceREyha040Kk9BcYkqug0qYqrWLvryZem9q75U7Rdq5Bk4wsEmWIYJD80YIY4KjE5MWBFuyhHfCSZYgkSymkufF12vbagTat1G0DAoLCB%2BcubUUPLLxDVGTWjbalDCeTQvaM2WtQFQ41QdO0XkmZHOk8T290X8woUcBW5kcUtDD9cwd0s2RPhkGRRkn2MmzyU0uwBO%2Blb205hdfQpO34krh1bBrDi4hddgT2aPZH2MRYMUy%2FeTFMGCaf%2B3z34ww5FXLtMXoyGVbVs0FyAB3166thENgOiXBt9f9%2FMz2B%2FYThiypk8%2BT%2Buwjx0Wk%2F3Aj1atujTXJ58nrHQ02vHMIZyQySDThm5fCOQuYwZ4YxaIO6Nxx%2Bw%2BWF1dAgsWljFcRh9tKecIFp4d1JB5GN6DVaAtGzxibzt7a%2Bt7aMS0myuE1cHg2uDTBOCsIYPHLlFp3MFjyHWTAdcINCdRUHoGnu84%2B0cgeSPhBQ04ytMmJVMG6Ir%2Bcu69X4sHJZOouwtgb2ax0aiyD4%2FZnQYG1czPYO6UtwIMNz8yMMGOqUBkPAuqo9BAeSy%2FDojMyI7qxwS4LnaawUKqXGaGB3nNMVKDkYefJ7xpzm0Tm03TvL4la4TLUsIRMJCwV9di2IJFHkqGafRcjPNwgJsj1YTOLxiGFlMfkrljSjQ2s0ezFDct14fe4I2qaivp2fZ52evyGqL8dqlPbj9UCmAD44pATw65GQtPZiTCRlsWFPTZ71oOj%2BaHQf%2FvRsGxwHxs3t7tfzfp3fp&X-Amz-Signature=996f6183fac1defd2db53e995fd8361a5c5cb737f3e93faa9fae0911c74fb3cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD32RIPT%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlS0kIifwi2s38aAOMEill9yFbWQov9pb0umbVKr1xXAiEAoh7uMKCardmXuixm9kHZZPvLqozxfqMBk9SLjz01QCkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbHTODNcYFBphvU4SrcA%2BhAwb4kcRLQ02d%2Bamyfr%2FS1GZiUx60atAf%2BjmHteL7Dcwa9IB7Z77t8tFNAu%2BhkFNSdqGFvZY50Zt9e9Fn7iPdqOIZsTpo17Xn%2Fl%2FciI9Xjip4637L0SnlL0BZXqt2uE%2Bl75%2FPwVLkF9m04mMSoNDN82DL9fx0fTqQmyrlLPJNX2GpZblEXdAsAh7m4thCjMKdD2wcHHhShBSdDWjqFRNgxbAuGCZIpRFCRzs8YsDF%2F4XFs1lP2CzsPPieFDPxMSHKndQml0XcGIHVbXrv9ZirbAe9vl85sDaA2%2F0d7wdlEBwK9YsMwzL%2F%2B3HJxGbyXCUYfUb4%2Bwiz4oz9FFsiN7QoFbGkflXKyQgPfty8%2Fs6KLiL0TNCIW%2FXZe5QIrTqkeKg54IlvdxBQSUvWXRpwQm8BIZ0Pr24tuxRfFGghnJ%2FGNJDXT6Yo1GPXyXQLah1OG7uIDj4plKCB4KVjqgOewTDa%2B1JusbQO707zDxmb3z%2B%2FcCdGoeuWsT9tH8juwDDYxtINuVLLcbqyLv2SG2EEifpSQKpXUtXXB0SneeQZ8Z11ErevYx7LHg4qtKAz6uAkf6AucqknlUNH3Uu66zBqzJx8HbIdIUTTSBuufVkz34ZccNUgubf%2FlHfAuR%2FL7MNv8yMMGOqUBU3gYMeO%2FJC61cR9jPayNgnjLJiWBfWdFgMgLNs4aqDEzoGYB03xMARFLQ61imWxMH46evGK30Gb7PbOS0YXnT9oJ4q1Y7cRHxEVDaftVbB3%2FdHQdxbqZAo16u%2F6L5hMkFFsuUycRtXJolDnGBQRDcgGEgioQd4hlob27jTHvywRWdSfhegPth0fCPfgS17oa4fz3cvfZV8aEsCPJwwd6AWanqkr8&X-Amz-Signature=2e53f9f4b79191ca8e628abc55dc75735b742e4c559a4f2af716b9f5d3823769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
