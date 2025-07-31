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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VG7TZWV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCgNa6LiRLHm0YLRBpWdE2YLjtuflvCT%2BuuRfp%2BZ6z5AIgKg5z5SfuV3Ugpg%2Bxl2g4R1z4h8KHkfwEPOFoAqRByf4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlKGWCAEqjugxURASrcAyK4fhLsv0WiS%2FiHLuTlcJk5APJKbbNADGk7Gsw72x%2FrxqxcaZQL9mxiRHPs2mK8Sp4VJlnVBeapBNyCRLAlzWmxO8auKQit8EtgO0HtcAy4ho1lcpE9jXJgHFUPGr2Cnw9g%2FT11kdRCdwLXn6xYPwLmAGWHqJscVCGeN%2BazC76JW3HAn3l2GUTGaZfTFNiVZt8LUZDDiZ3ow%2FW2%2FDWan0HUDfGKiwW2rz5ax7wcJQ7YKb78gB4nqnIWVjnOw1WytMpR2tthLmzITHmQJyBeqstm8NT9eqylsYXy38twSHTnwnTD2Sfw6MnvXW%2FJgAH7S3a%2BSD33htTX0q0rlFWQgUtuMNU0HwvgwDgzkr1WhH1JofX0gUENkjPo1M5w%2F06s3NwPyvNFz%2B87bqLDVyE2QTbXXHZvjFmreGxla0TFXvIc3oZ7s5Mn9oT0eveHcWybAeLMPW94kt6MXhPSV4yM9M383kd6wOii5DsqS2EEZhX7XOB37AegEu5PCYTUfhZNWeo18EV0a7WHqIQxg5KiNrZ9jEnfp6s906eYr9aemZaH%2BpsQvyaigg3I6GwtQay568DmnApAmL0aZCrwN9VKbfGH9n%2BIxptNvaqt8%2BEzRsPeVxjymup4bsadu405MKCarMQGOqUBGktxZ70sM1WvGgkPwWGS2eGRI8okTChn7mGmxlODywPgvkBcAX8nImGncZATbo%2Fb6OraQeZHrRXRw%2BW2qjAQc7c7g1to3lzFfctYx4po%2FLT0%2F8kx%2FyocpUgC5mpULfOEYpOZa1lFTCJct8vvqa%2BmcVZ1glSFZAhOsNI%2BTmahdRVs5XYri%2BqA3L37Q1Z71WKhVrSz3YE%2FRmfB%2Bz3mI%2BQMn3r1Xrdf&X-Amz-Signature=8b031f1e0affd257eede742e3e7bcc3a38971df3d9e5da687e07297a2f9453b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBMKRPR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVvzmGiM8F2wNXyBfC30UShHSQsxtKCB10UZ36DjTgPAiEAxpytyip%2BfJEyb9%2FkwxkuCBk3y%2B5c0k11ks7FyPQKx2wqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCw4LaOzrk7rZNOVTyrcA28W%2Fg6PHbJ8B0YZ8W6tE3Xq7c1kxT75KMtMtwRmjSxOOENtdCLXUvXyjnAP9zy2k4bnuuN6CRUm7OyYnoElEDRmbcv7A2gP%2BM7%2FMRs%2FB78kwp7MMD5kzRG1rzHM7AZ4Fxt%2BQOEue7eSVA8gcmKqnBwOJEUZYBc43hnyMqMBQtXYH3NGE9k7vfiXczmaetOB%2FXYXGfPcWvl%2FfGGWufWw%2BjsaQ1Up9urfBVdFYBMORe0AiRWfOXj53myBzzQCa2CmRfUxaEnNaVYlInJqHtxAmA7Clh1ZwWtMnxrrMvN1W6v%2FFRIrdFQ5UQQP6rcURla%2F09nx0LCP%2Fy9Ev9iYnNM0BKzkAqmC1dX07bzh3UC4S76YtqF67%2BX8hlrJXo0%2BHG1H1ziBqP7bfBZ6aVJJPOPSv8pT7YJVmMy0Gp6Ok5mikmCgufUr84V6bz3z4eTu3GWWVyVGQStwiLHaoLgMVIi3kVlc%2BZ3GAVtSh0JAEnkpiwtqwqImk0LzmHA3645Ro90LuF8WNRWfWw8CkVKQ3VX7bT%2B%2FtqmKrJNPaj9MKr6VdtyGP775lrYvLTx%2FebbI4rMMMXyvA8WMzFwXz%2FJmOU8HjtLWXWWx97tESa0Za7RruvrbUs3LEBKaLLI%2Ba8CBMJCbrMQGOqUB9hHxzFSraXYnNoEuklg%2FxhHUUF7hGQavMAa8BL3p0UPH0emMNlqwyKOOVyZoZFJISlF7SWy0o1w1pE7lVxVmI4l4K%2FcuUy6Rwsw1KUViYqDCk5pdjbA2dT2yzjJ7x9Ow5Kgq1zyun1%2FG4WSWVOkpJ5M2SmtGC%2F3JJtyatFacAiz3ZGEWkeWvPmZ32U6mhjJ1SRxWB4hpIU%2F7SRKjEb9Zk4sgtLjT&X-Amz-Signature=75b56423860e14e4e5bb4cf170d8113cfcd8e9741191bd1c2c9871e0fe724cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
