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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U76XK52C%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQS306vE8LnQ0gAA9K7o02BSVdem1V7lmXJN1YzmQV1AiBSH%2BBou37t%2Fvv6cUhCHMuLy1hSeI4BvpHXSG%2BOyt0lGyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM50bqIWM2UscXBa0%2BKtwDIvTUl9HMmLGfbJ8ezoWl%2FeHJ2mkcGWVYeEcwuFbHFI4jl7Cf%2FH%2BzCP4OmqrQwvEWPQTkC%2FpN329S1lwXqQGB0S8bv3dBpQAMGme5dasmcdOxpLrHrOKyvVjDu634E9k0ZkwJr3CIUjxEJXw1HKE8Z4mH2OrlQ7jXqMt2WKjFi7pQbPrwXStwv4BSUFGjV6q4Xqhrc8ljnEuBEBvzJneez3LSSMqIUnpchaLWGM6kmNo1pGRUAE7%2F06qAhOYCDaj%2Fz07hLjKlFpsUpiZJ1Rka%2F2hGxMYN%2B5cYDlvXhPdwTtJQdklZQUstO%2FickZ0YDOJsPsJrjpHqTyqYdNrUSVbxlpSeXY%2Bj6T9pqU0uvyIrqnaJrmaXzDnHZO7ltUx%2FClV8xgK8RpsOTpdRCbbhrcHGEERHRHJYB2dkevlKEFHIFnO8l08TOagowgMzzRE3vs%2B01dabGB0BcHbu9mSQdkuhIkaPmIO2Ety29EEYK7AlVJGFEwt0E0vsGts9Te8QE%2BQsUpbfvdqEdy8KkDEsji0gO3qZu%2BfCIFT%2BlDc5HKcrZ8GqdqGd26%2BUMhaZpjceRIt3dOV2%2Fv4uAZbJ%2BmhGlspLCKfEhApkjz9AzpJ%2Bl6hiZq4adTiVBOjqeZSmKE0wk82JwwY6pgH8itRzyfFxr%2FuRyZPQ%2BcaZZBoPWQySlTnlBGcev4MLFEbGbTV6Txi0dAJGiLzUc05So7Aq9y%2F7H1xlxgFx8e6yZWle%2B4V58ueLUWYMTHO3c8pxdqyUGg20sh%2FRHbg65O6YwoNBuCrXygbDRJy0Mdd7hQeKDshnRYYxt2G1riF7tNauKETGnpfF9Tg8hDG56nYBRomf67aVj8rjfxCAZPvsrs%2F7y0pV&X-Amz-Signature=a9ed63c95c92a832f00a2a0aa57f9d381ec6ed3e034b26a5e8785c6dd1b79adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAFBZWJN%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOTsqwQvwkgMmAdujc%2FzptUOkGGxaF%2Fio6hebidY%2BiQAiEArXsDgPkXrw7kCvjal9ZXUNy%2B0GjY4OIbmj5t05RFwesqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzCnZjxfAHXlGiZWSrcA%2BKmyiP4mTStbBIpJu7ytDCCyMUeTDyQCvMFNmbTa0WKCSGSmpNh561XUug75C%2F7eyLTHDKJEYbljt6%2FYfrAyAl7aTu4l1Tv4OY0pKCqH9wFxdBnUyIJobfPwpzaH%2FdGiqiV3Ntl6yu4gz6kHLXJfZjQbLEJ3PVqLCbcbhwXkjlEc9l%2Fs8LFigJeiMYYTrTe1Ewaz4LORBKBZ2VqnRgUOdnp1QxXL2PCPKVWEp5SPBdVkAD57VAu3ee%2FG1q2AcKZGfVBjlPACV8mpQDDEPeVI8Bsid6Bjt0GfFphUd%2F5KOFqdsuxOTZUZd7x2yn7co1dPKvJu7II6uxegWBAB5fPARD1j5Rvl%2FppJWDDfaDlNW%2BgIF3UDIdJWdB9tCVYHfeSjBMWWnKkMHirzQgdjO75ZkrgH2Ayi%2BQHy1jl0LmYrRMr%2B31crt%2B%2FgKPShvLnLByMfesvvMqS6tdkfhVILoJ%2FUduc%2BZNdZlZBS00XOGcjsTy8il0zIPiKE%2BGUA%2F508LoC7Y6nRb98KGpNinjSX8oa1KUtBX7cq1cCLWv4zTTroHNCkL7TouZaD5bncYACiessX55bqoVaIaxnqD2Tknf%2BrjV%2FhX5A%2Bg2RHNxlgyrQzn8CZxDbaohU4PKfsd2XMJPNicMGOqUB8jT4%2Bxw7e2euN48VrJNe8mefIjqDsdbJ%2FRjWok0plzkxK3HROBCHFckkakhsxo5FjVuB86nq5EXLJtUMv6pcgEse4mOfTIrZzQoNROOxLQ1tJxRcFqEjHErKWb7TJsLyLmCUw%2F6m0PEr%2BaJ0jvaDZ%2FyN7x%2FbCbqwXKOcmFzIHvAq4FEhSgcjMNTWgaopUEnuCeoZnS2q3EL21w8CnwR0e%2B37ccfo&X-Amz-Signature=a19907f19fc2456340b1d7281361bffcc218d02589aafe44c00031d1fe14346b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
