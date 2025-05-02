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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMY7FBOK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCDIHh2OLP5fzrWMvK9rxc3eUm%2Fj9kpvCdVPbhwGst19wIgdCu36%2F1hWUKUQJ1btZVTUxw%2BPlhVWkZXdLMKhxR0DJQqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtn7LueLh322%2FIZoCrcA3YnUfDAkPWhX7AoYzpKV3Tb5GkaeHiRK42MAcbDpBLdth5sd8HPVeuDwoTa3f1zfx7diCD2qHajkAr%2Fe9ZELiVSrSvjGZvFrOI033fp16hc2I4oIsMQ60eNQ0MpNRZ8O5yMlDepWnt6demiUEvt%2FHVfGLgaw%2Fh29ooV6tivnP%2Bt6TTIHLdxrkJyOyJRvc9naqgNyxdRPHA%2B8Eb75%2F0fbt5LxTFn4k6ZWz%2FXlj8bcMCR96ZyfGCHkVCOKa4YtLIXqzd4LQHMd0yAn26UmCfoPOKUZkdwSqayc9Gr3S9IV%2B40uO6lDWTaPQdDqoy8d7eOKGIAZrBcD%2BUL%2BO%2BQ24U9y2JYuhiu3QuMXAFPurAz8gYD5l66DEtKJkqHyxjXvzw9gLK712NakHiV7weV1B%2BveQ60BBxGJerEck3jpzUNhaE76klwsyPvuDAlmUbIxM%2BQHcvG2CSY7sMI4wsSeolZat%2FP1CH1eVZjJq4GLJseCkDTBui54jOnGr%2FK7YFLBJpjpHh1n%2BSCGDWa1eTQODIyY3UWZlbZHd%2FiCzRgBPNTpcQtp6RzxgtsRIXdKXTe1XdQe6aOqEcWiVZ8tPA5SMJHMO6sE0UYbXrKZW3q0huPixmFqa0ssHmJ8FzbX%2B8AMK2p0sAGOqUBR0I3Zu9md44MdrdA5pmPBMpZ3E1B%2B7RUbsGMkX%2BO%2FcOkvihjdTchehQB2A7bHAvgdvhaIVWpRb87iR7dti2JFDhCXn1LDhujYkAGTwwnnj4Wq00V3J5lxlsPABne5QyveBR3TA4d1qSxxWd17W9kJDDPUQhLnEWOBRno3ukn1vihbsdkNH%2Bn2osEnGw45aSEJ7QfwbEl%2FToAE4SivqxfviaCXgaY&X-Amz-Signature=b3c0e18bd106cbb9f16cfe99495ea8f6a045572135e0929da65c7a53b3f4a0d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNZTMBB6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCO8vOiiMRUYIAvyy%2BnBUnpvImAlJFH46DbfpJO6BCrrAIhANh6%2B4kS7LZCOAVSKxj3Te%2BJlK6uXqmE0HcA3e3Xxy4dKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIMl1ANi4mH2PZukwq3APaelXwFFfjK5r9v%2ByEnvtZJUHTiabOYlRHiHMkE2IfhtUzwkneofAhEi75L0oEedThY7OlfVE3ruBgiTy4oypetStwwfdVmrpe8X%2BDlc1oFkjb7WovgFm2zKfgVvAlurAEPlzU0CyQw8K8zwKVXinc3SYCK3iyrfq%2BjlezaUNsUfYjsh%2BwuDcZVbLkTW79tk5jwvpPTJXJvFS2Z7PogdwzZW9xY7Sy6G47fcL0BnZB4Ek%2FLbALdLjiGUjkbGZMptBrIKgnyWhxhbgu9WPR9iP0Ftc8BOqqrnferGy%2FBkmSS7BAMmMmwgWVvdTd3YS8FN9CGjf4FPzflWuzzwmqmyDdL6S9mD31%2FuTY624BnfK8TlxZB7dCkUrkDmOffZXsXPuind8Pyo6TYd3oDN0UiZLP5DkSYh6Ds7trGazfI1Phbc8RFtDUbavwYJ%2Bqs8KSiapJNK5ms6c9GFtrY0zcjnyO2U8KhQX6Bi%2FFu3RkPZXbASY45N0CAmh97ebsp%2F2R8bRMmEaIpsQ9Ac8kN%2F%2FrVAsuon8nKjhuXDa%2B67ZoDgirUWaPItF1pRdf3VWyFz6dNV87WDtDNkWHFNFZhJsDpH%2BPVdZQpVnPB1QumK4fdEyGg5kB28v5TGMcp6fKOTCLu9LABjqkAWjHuPf77GrYDOZ29gvnXe1N%2BinOKP7onfFD5wpGGv%2BVbaHmMj%2BlZ8l10cpBZQW%2BPpY%2FDxLZwB4FAQZR9L76JU7ld0iWnMzpvl%2FXl%2FsIpici1TID3IP18qMBo%2BTD4XK55rrA0lfXnZppLutFy%2B3FpsVAwpiIS2y1yxIY4ufubFpuI9f0r0adjmcWZ2HTzsHgEiKE6BkOV7EftqJbjvC4LJnNM10%2F&X-Amz-Signature=aa56fbcddb28652aca08572044a9771186ac5fd4169cb22e5262259fcb69e935&X-Amz-SignedHeaders=host&x-id=GetObject)

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
