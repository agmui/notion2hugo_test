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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSEDNQFS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJjkvtTZGoDt%2Fw0MgTDo58nAgiKoloMFbqzED23nkVRQIgE8nQMCuMj%2BGd3DumusKzPjlL2XSKq9%2ByVt2u9dhbzLsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJo5%2FjZSxwdYGq0qJyrcAxuffL1367vHF8VLY2r8a%2FUUdxgidVOMudvjXgIeH2Bxz5Y8jPUSnduQszHM4chT%2B4aNjuLENu7y%2FY%2BV7bYtm50ziXzjpq80w4QGbt74zPa5oM9g6fPO5I1BMRFCV4fyO0%2FeS7ZYH0ijNVou1pyTmvL%2FpISHzGjzKZleJ5ve1tSYis4xd%2Frsakku1v14JRFvBfM0rFfHAocgfKlchyFtzikXTrVMjqRuoWlVB%2FLSN73OfXzaPqw3%2BXu5FHtC7Ix4zUkgfICRZUVGS2vLb5gRmItrZzacX3uIC9xlbYV9uhaxG6LoguLInh0EoS73irLxn%2BDw7zIPkK6oU5ysnBrQ2VW31hNYhX9p%2BwI9ABNX8ybFvMKdgQ7F4PLlS2iXy63iA7eTFLTFC7KtDCFC0XddPeD83G%2FVRtRNywIfwboclQALzIRdr2hOwKLcVQz0abeuqizV0ajWa5jywbBIKXa6HpsDHFAsPtTGGRmjeIZ9aR5IRa0sFcq90mJ6S2mp4gYj5712xlzjSDd0bXTDETI6ItnnBEePvK4ch2TUOhqLZDGVLhXHQnS00AWp12IpyPdlVi%2BlZuYsf0bUVOjxUUb1fUyP%2FNOQ379PofZTKKyxRGEvuyq7re0wGI5mZo38MKH6j8IGOqUBtrLFoSTP1aSH0%2FecXMfrmwb36wdR6j6mxBy%2FOR1dsmNlAINdvEKrYE6gNBiUf27if91CTlvblibd3qP2cD2NVuzDA7Q%2BKYg9vC4Ja%2BrZc5xwGbMN5iAHfgMqeHTMbXmNzmGLvfxCpY4AvHhP0NKd7Mm%2F81b8HiB8O19buTqPTlKnaJNRGGvG4%2FEE1Tsq4ITVDjBgEah50CgmRW1qxFkgP5dviTd5&X-Amz-Signature=33f33d1bd84d90a081b0261d371b93797a184c1a2182635d7086dfd6419d650f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLXPU5I%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXuLOzonYQUeYlZMjAUsntoO2zjtytZDkoZChYm%2FaGuwIhAJGW7gvWklzupLDzvyHDEai9o22J8X2QgkzywSq%2BI3MEKv8DCHIQABoMNjM3NDIzMTgzODA1Igx9e69shS6govJJQIkq3ANC2P%2BitbPlhqWHmx8ebGdrVbtKdTLTABCByunWnM%2B8lRkdOSR2fRHDtWIteYKVIf1C0dO0x4F1w%2FOLpv5zdC0UM7REahNmI3tqdbynvI0OLUOq7wzVYoyx9J4940L%2FY9o9MM%2BeVOs7itBy6D6JGVhVMLRChWPCFmUUee46iIsdSrvk7c%2BUgFpFgT8tDYtA%2FEQsO1J1OCAtU2Px6kShpEYVRMBFskzcdacW%2FG48oAYqpaAD21Gn22G647u1lgpk7X0ZJJWDjWcbldgA3pxR07Vrtsa%2BtRNvJ7jt0AaZo0kdMkIg8MAtmfFV79bxOnbkZ1aI3i6RuKfKo80B8YDjkQXbmGxGm6dlsD9u8KxNM7o2hJDJMQRhzmSU%2BDJWbAUrcU7mEZBouQgSRo5betYoBw64idr4Vgvh9HTRxhMiOM8jHyXXH1QlGF9wF7Xm3gt5DOpxVv9sFoNojcSmyFG0ypi9GyAmC%2BX%2BTytiVhAFV182dLzKMOhpO2r7Aw2hiShbz562jZQKa2b%2B7WI0nsT5pv79Vhvu8ndRgcRWOMRhIY6i4Bv6ft6S8jClDAQ3SEznLZSBo%2FW3M4mHeEGkNLIIlJej1No9%2FEdWUB6zw%2FwJ%2F2j1j7pjhMqvnVVbIWjQojDU%2Bo%2FCBjqkAYrUFSt6UvwIF023N3PHEeD3CbnJlI0prt2Ke9CkQRUqQ4a%2BD8%2Bti5Ao00JgFn7AnoJkt3OLB%2F5%2ByumESvSqZ1sD5KikMJYDOFOyyvwFagJUhHv1Y53xVU359KhScnYnJZ3XXEEGv7W7NF9Scfz%2BCW4Ipn2wdvuSVz9CZdhIFhI8gflTeVBI8Yqb77wdPa1NAgypm3SPjam5pDgWp5V68RIIOkez&X-Amz-Signature=2a6d2f7de47f6eddb6e09514f5a611b91421cfc87267c22feda602360f6bbcb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
