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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4HQOLOG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIBfphv0nOphMo91qp9%2FIT7Zk6pPtD4NgtjkE3TZUord0AiEAmwOKu7yktWkB9EwmWvtGBxykL9k2y3jpJm1kOk7%2F5%2Bkq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA20KnqJuKNLNoIzKircA92SrXIWnFyn2D%2F6yBvnk1tnvDpr24oKPbcYrhJRBN6KTS6suUMFRN5Op04DurR4OrrqRp3mXBhQmlslOnk8W1zU%2BVsO%2FcrmWrCgNdadFfg7IZ4Sxt9QNTLnm8tMj%2FYOgtfzmonTF0KIoUtmU40JStBLm25mpxQVPEP9r6pL2NkBkhKhuaOlwfIh5i4NS60lFwrxj7c2figGTSxYE3NwYY3YyKiYSX9N0jvZN807usndXYC05Jt9%2Bumo0VduO90%2Bz4emO58xa2gcBDSXV9R1muI7VgL%2FBxriA6erA8c75LVA7TYJK06s14Qb3xc6is%2Fb6%2F5YtOL8gcDSDED%2Fewfe22ZzvB0oZci3hX4Zp9PLzMlN%2FGQ7sQGS2vr%2F38xjwINlOHCFKWk4e7heOKRJQMonYyMDYTPiQac6Km1TAlM3kw7FPMakXd2W4vbBrBUDKJklOSucLzKD2serK3PPmBjGCYgitvq0kwQdTX8eVJ12AwJ2%2BhHtt44w0y%2FTKLe0y0AzkJsPBCszG2dvr4Ju2n8ZSskpma5BIIz1zQcsDP%2FVlyOPa%2BIo1avj5G8o1dIxl5B6FM1t04snu%2BrLiva7948cD2ZjkkHI45YjqMvsBQHEDMpgMUP5tgN7yHB9k8wxMMiqt8IGOqUBsfoUZ6uBAo9VQcHg8nWsbuYhYBHdmbTV3hZxZF83Sy0TadSOktP8Xc%2FYbnWjMw1nZBw4mW5TAUSSppy323WAfAYGOrZ6%2BfBh1KO4S02RYZQAkYrRNCP1UcmtjQazYWvwII6UecztBecVtlUuy%2B3rWoXn9Th2VK0RW%2BVhyMU0JYJBEFxUYh1CZR2%2B6SB61V5au0Esjdu9ikFv%2F%2BwBxqJFTxVdgWgb&X-Amz-Signature=ca8452fa538cf1878fe9b1f28fadaa3ae6e8d025eb31d7e65f44cbd5f461c45b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAWBDBI5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC4RdJpxuZH5i9zO0iSrEbOMHbAkahxtCXWzTYHQlgUFgIgMmRA046uIZ0nn2NKXnYAgQSFwubqiXmdLSWUjsqWVWoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBfDNAbj5CMzGmLOVircAwPfsgVF2ZWjK0ihbUD0nJLzIuKdv0dCxFxrXhgyMGn0MXAZ1OQSNf4BuZOjN0jARfKu9mE8lrYKjHLf66sfNd46P2%2BW8zXCK72TiTzPhlhSkQBdFXbitFGnMTTElXc8ESboBg40F3%2BdkCY7yWFbbhIwH6z15Ve9EtIMAlfVW36%2FE0JI8ddd6nMzaSjATSqDpdCekuIyZnF5MuxbQcAS23ouoWdMhPNwVKb7nVrUT4moPKTYBQ6Y0wNcs7%2FfShybb0ORkFCpeKAsjt28lmpnr9cvhK%2FYplUTKrc9%2BPi%2F8d3Qg5k5MxWCP2cQ7bQZS1jOYhlK2yRnXEL6HBxIHtB62OFTMKQ8JOa7gVGj%2FLUvVBFchqrPRKtSHv34BPc9GYjcHi7QUwc%2FHWzQp7duyg67QwjxbOxZls0ZpFAfQfeKdySoPN8DCFTyga1zviYxLArD5qOE09iMTwvEbwj39tbbBKsafkpsaLivTVHHHllUGB9jgYCiw5NVy51VfEvJ9xo5Icc%2FaoYSgeXSfR76uZbUzZoI4Fwf3%2BAS68VSrbxQmVVaJjICvYJrb8M9249A%2FY%2BrQBgqnx2iV4SGmpzpJjLLKONXFL4uWghBMsBPAMHdcDqy743W61mvtzfWeYkYMKakt8IGOqUBc1K33KOet2yyYY3r8kf5hh73MAx%2FzCWspENnmoIhEicxFOCVwGgjJrm1L9RH5eu7BiT5dfZjfgFTwj28shfUrX2f4Ijbf9Of8UOfI2jqOQyZMBcetAKp1ydgjjaZ7JSEbdzfFZ%2BZ0Kq7jaLkOfTZIxoE8GlLFDIdoutxdkRLxH%2BoI1%2B%2FjMCf%2FA5m2Lm3iGLysbQ6VWVKGhg%2BWEulNXfCv3C1BbLJ&X-Amz-Signature=551837d0a77fd13d1bcb2359f3bf78f9d3257134563d03fb7874f37ba5082d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
