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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAFBZWJN%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOTsqwQvwkgMmAdujc%2FzptUOkGGxaF%2Fio6hebidY%2BiQAiEArXsDgPkXrw7kCvjal9ZXUNy%2B0GjY4OIbmj5t05RFwesqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzCnZjxfAHXlGiZWSrcA%2BKmyiP4mTStbBIpJu7ytDCCyMUeTDyQCvMFNmbTa0WKCSGSmpNh561XUug75C%2F7eyLTHDKJEYbljt6%2FYfrAyAl7aTu4l1Tv4OY0pKCqH9wFxdBnUyIJobfPwpzaH%2FdGiqiV3Ntl6yu4gz6kHLXJfZjQbLEJ3PVqLCbcbhwXkjlEc9l%2Fs8LFigJeiMYYTrTe1Ewaz4LORBKBZ2VqnRgUOdnp1QxXL2PCPKVWEp5SPBdVkAD57VAu3ee%2FG1q2AcKZGfVBjlPACV8mpQDDEPeVI8Bsid6Bjt0GfFphUd%2F5KOFqdsuxOTZUZd7x2yn7co1dPKvJu7II6uxegWBAB5fPARD1j5Rvl%2FppJWDDfaDlNW%2BgIF3UDIdJWdB9tCVYHfeSjBMWWnKkMHirzQgdjO75ZkrgH2Ayi%2BQHy1jl0LmYrRMr%2B31crt%2B%2FgKPShvLnLByMfesvvMqS6tdkfhVILoJ%2FUduc%2BZNdZlZBS00XOGcjsTy8il0zIPiKE%2BGUA%2F508LoC7Y6nRb98KGpNinjSX8oa1KUtBX7cq1cCLWv4zTTroHNCkL7TouZaD5bncYACiessX55bqoVaIaxnqD2Tknf%2BrjV%2FhX5A%2Bg2RHNxlgyrQzn8CZxDbaohU4PKfsd2XMJPNicMGOqUB8jT4%2Bxw7e2euN48VrJNe8mefIjqDsdbJ%2FRjWok0plzkxK3HROBCHFckkakhsxo5FjVuB86nq5EXLJtUMv6pcgEse4mOfTIrZzQoNROOxLQ1tJxRcFqEjHErKWb7TJsLyLmCUw%2F6m0PEr%2BaJ0jvaDZ%2FyN7x%2FbCbqwXKOcmFzIHvAq4FEhSgcjMNTWgaopUEnuCeoZnS2q3EL21w8CnwR0e%2B37ccfo&X-Amz-Signature=4f3e4d1534e2739f8e1bbedbbd0c5901fe8127f4c265783ab6f2e2ce327ac40f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ5IMFJB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuBs48mHQ1M8YdscUd%2BG5agF8u7Fdfdw3BiiCncPe4EgIhAKyZIK0LSxPU%2BDJD%2F8yOjrLDws2PE%2BEgp2bpC%2BmmGdCXKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH8virjLqItBQfq5Yq3AO%2BbCMpJA1ewZSeWQqsBi%2B%2FNU9PRZ1dm1u%2FpcZmYhzlXL8h8B7lZaKgRXQJJacNB4HyQphEQ9u0GCHOPoq%2BFV7FeHHIzTHGUCGzH5rJIgyEBwPZomSUhEmvJFJkJWN9C%2FrwqxbxpzmzsqWDM8IEhD0cRmaL6X4Lpw1EISn9b5V5sc5b84Gu%2F5aNtviSYArjQ9D2O5V4DYsHMaRdjoaP300O%2BRbDz0bDLftXjaRKpXJIrybr5%2FBKZZGvN6r4PoR5Fu1pV5aUS0o1BO5DcnCHjeEv5Tt%2BMkD6dtSOxcTQNtuwtdxNUlkdMYxTf9sU2fNOc3chCR2jQBnpdy3HgPhP%2FwQQ38%2BggghIXbQVg9Uk%2FFOVp9eJm4v2CLA6yo5m2kE35Ihi4G8h1oDiBqyFBg1jx%2FsXxsX7gzBzGsagEkNOIKil81Kw%2FJSaVEAwDPP1A208VqwDkjNKMQ4PqXruzM8cF2la1qsTFvvkjoUyEEvLmgiJamVJxCm7eUIkY4aV0P9VPeVTRrmDr2RJNYvR3I09uBgaHM3NJWp0%2FmIbkH%2BkWbgvtEomTUw%2FTjYtBgmr3AsYWaLgHepZLrKCpcIYKXvmcVlXC8WoiWWsYTduWPBKROKH8DsewYiGsGHeRwIBjjCXzYnDBjqkAdqL9I3GufDDFp80oibHVdSgmOmgb6mYQaAtRLAFFZJ11hz%2F0A0jBN2kr4umGIVTrbZsidiTmUQ%2BWVGJiCaELWl3JL3ViFfr3lYxj56H23zGhEgw1arQn6K5B9vOANb1b7JGikkleuY5HlBCHStC0BiC%2FWDzIwit1cH3Xoj8Orvj0u%2BSMWIeAVUAtcpXIjuNYBG%2BJbOJPbeBTgNeNA%2Bmf%2BIuGGOg&X-Amz-Signature=6c7a55eb05de26ceded874c4eb1ea289d64e73a2e326a33e5c78e8aa1bb3c53c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
