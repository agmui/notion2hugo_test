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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6H2AMJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjW7r5WBmj%2Bfhehhaf3jbUo1A9nFrduK61%2BcedKKMDjAiBPeZKhmmzTfrt9pF3fjGplIebHsMQX3A9AsmdSE6tfwSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM0PGEZS46Bt4GVBWgKtwDjX9A%2FOoa7%2BQMwO4lazmaCpVHyBrcZjyge%2FBriGhddwvKOFSDPfZxjx3Rps6Agjr1e2%2F8TP84miUEQQRhEOB%2BGemVd7z3EDKXo6XtjcfZSiM%2B3AaRdJ72nm6%2BQCK3v6s9bu%2FVcycw%2Fhx0TNd6rVLwWo5ra%2FI2Riw8%2BOz432frlHkOaBxDUZcW89EXfukNnpZhiTK7q2jBoRWvNGUtlM8g62gy66t%2Fr8dbzp%2BzB7g3vKHnkmb703bZkhl4tOCjAg%2BsSlFwSj%2BXM4l2ND8ZQ%2F%2Bwy%2BHRm1wgLkwWzflsQLZUok%2FMRVjRDzPP1Tyi%2FS2GJdC9JDXjcShC7dKxUuOIBGlkhB6RvkmsTjM6jfr0hMGwXF1yUfKIBT%2FN2HPF6z9rVK7L4zast9aa%2F%2BR%2BJRn1pRJzU7yegQbLO%2FervY%2BbEj0LAffX6e3pceNUuH9rbw65bS0uCYWHXaz2ESzm0Nz4DQjGoqY8Sy4sc4Rsv60fNT%2Bd5RshQcE0XFB4ZlVWzxrx6Qh5owfB%2FTwg8Vcg2k3ypsejAGSbNiebVGoda0i%2FTvLMIBsCIDHyjMJTX3VuMw2%2FvQ1rXZKbxCJLcPUFbBwniP9Sv5v2V6zxjxCEsxBjWGaXMp%2Fr9rOvcgzT2kLggUYwhbXGwgY6pgEUQc%2BZNcAD6fz5bcwgq47%2BDjq%2FvpHkJbtv%2Be%2BaZ33w2zPTuL5FFWKa1CpuXCwuZpuNpeYjDN9Y%2BO647tfFy97pDXTSJ9ZivRHtXbC3aKrDryHOetYy%2FJdznd2W7qtKizGvvtrKLCtqUtLMw5aQIoukXwVgsjdobhtJM8uDgkkEr%2Fs8vKjXBlGivq7BGFXK0ka2WBGtfQFtCeV9MS0IrIUw6Ng2etCZ&X-Amz-Signature=2c42043bac273703b891badbaf034375484767b6aae827077812239e7a79f6a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MD3OSE7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHaaaBK6bFqPwCUsBX%2BHeo19fcaCRS4denGlNyPC0CUAIhAL3eQLUCGsmbeQYK3tr0vzf9A49YiIToEdWXfG0SBrsbKv8DCHoQABoMNjM3NDIzMTgzODA1IgwSsYIYJNnZ3vBMRtQq3AMNEUeNPHuxfCmg%2BtYkQ9H5XILkz4c%2Fi74Kc%2Fz12Lt8IuxuF3YZ7eM40MItMcc863vxpXh2LeVdQe6gt3GGittiAkTnMvDkoVJFwlE3zHEePPDuMUBFWutzcNe7OEfsMidjDXLt4z6l%2BNUY4ciS42cQ9OIT79PcD3uNuPJhgx%2BTa4kS4zTFybLLPQYXUqZxPWDyqXLy5kLOxpeIJeGmk%2Bq6TQxozCGlcLyqMdjHNlLDH2GBvKRUjFtwN%2FOQ4ceJgn89HMXlWs8iTpKfCNoBEPd5GZC9zwYUr3WPVm%2BLlj6O2sFQdy%2FowwoqUZNDBVHBUD5OR%2BN285vslekat6bhXbWIwuIgO8cISXqwWAFim%2Fy%2FGoqvyyy2UuaMO%2FmS9Hnv4CMSACzW%2Fty6fJBrEWgkUyDgxOfwpS%2Fv4S2WcbvStl%2FTsmrPcD9%2BfUJF6uPEM0eFQknkC8cC1TbEW1R5jB9%2FEoniZ6Gmmsp5bFgRIhGzi7VnJh%2FGSXZQ9f8cR%2BSp8mOz8ZliPi4W5garch0d8hXrNfk9wy1KWCfI80QfkXEd5%2FCoFQ%2Br3ivUXxBjhLABCp4G8dot2swipkZDjadEF6bGJ6gqD0%2F6Nnjcl6Ovs9rVK2y98EbsuaLhtWQN6IUF%2FjCgtMbCBjqkAXYw3kChkI7uojyYDp9e5p%2BU9QzeC3oi4%2BQ5iTu1ROMyMcxPBmwMZg4%2BOxZ4E8Ka6IakXj1fUbMwjvd1Fcg8l%2B%2BB1UAjzGqmh3NRPSNRIkiK%2FQhLVejqsmkZMhyluoBYzaoeJXzETLMGzVFVopol4SCfMYmRcPGgSan3f%2FVhMtvd7eEZmPq50u2Hf%2Ff3xTQ0QaG7hKCUqL%2B6gNrpcrrGXGpiFibn&X-Amz-Signature=b41a594acaf33e4b7ae2e4abecb97a7e527bbbf1bb3e6edadd16d17bc389ac30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
