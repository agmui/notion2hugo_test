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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFBQ5Q5L%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDd%2B43NFRkRw2%2Bfue7%2BHQxLughHZCP5fcV7JQTEyhhHrgIgSiRR1tZRHeYdh3sOURqOQSJTrmq5fNySJ5pB5ScIZPUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhcOmD7gprOcFiACyrcAxcQkqWVI8aE71Tn8QxTVc52IenxQxtQ%2BbwvpKEzYdIuiuaekiieVH4w5N2f7s9bwiyTFyud6AYpsrOQQR0cmIh7OhoryLFYOSlO0KllSo7Akql4i9jDDc5M%2Bz%2BYnkdoGGjI2%2FnOBIArSd%2B6EYkDcDxYfNVlFcXxhBRTYFy3W%2BOos3gdbnCEVujuY2GqRX5yn%2BaffXKaIr8cOjhapA1KfJI%2F2hslbkhjSV%2F9cnzJ52AKkqGJvBv5H2Fn2QEBRnN5egUrE6yWF5H6zXpbqiRBFfOGjdPOSsMGd80UNsovZIi7GyGwRRNdScgOl4gNg8hvRwuK4v30VJ9Zy63%2B66ROsDoKUQfcrWJgxkYNbBKm7W4b4rMAaWKTqF5uenCNkwCSRnJT56iQS%2Bk%2FogZ3%2BDPH2xz6Lpsy4o6zY0IMG7NYdJen5XD9D6vkQIvQBfdP7F2CkApLp4uzfnIKMiZWfpgvfGSHhnHuws8uOrvDaE8bv2PyydjPb214eA6aCgg5kBrmn%2Bd5kgkhD7cn%2F6MtoOdlLfugjcuuCIsxjWvW8UEzOUMMJKvLKrA0oDeL3KxsRhUPV2U1MmMNGwBXVWc2Xwa%2BAfQkQ5ttiQgEoq7jceF0nHLImXloGPP9eDe%2FGbg8MKTez8cGOqUBI6OnyDZedp1ATOAVzFYq6PbCl%2Fqt6q%2FGsbH9q7EuUoXYdh6EgsOLV8IGmpkeIO5p2y1lAn6Y179XdsQNG98bNQ%2FEkch8hsGgulkHsZJQy%2BVFVyGL%2FTD0X0WXEZDNBEqPGObFme8xIsNuSSr4IcVvh6yjv5%2Fyf90kHRfWKdGXYLOczL%2FL1QJjcwRki%2BnY4%2FMZvKIT1WMXxy8RqbYbUHslZs7Mwwin&X-Amz-Signature=5040eeb7aba0c23c8115c86c0468a45374c3b1f2f433a775884ecbd735a32dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIJXBB2%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCc%2BLEC1CqzprQoVC%2FzPTgaVPStEDS2ELP5fXTbINcBwAIgDIiP99bmBIiOc2ih6Y692Qn8ci6REBQ3Y68Un%2BP470EqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3vuO%2F6bRIHWxhBxircA2w9L8IRzMolxMDinuQnqwU3ff7DupvWUDCijjLTg%2F2O7FhGgjOwrmscKrjLFqkNLAz78xoizWTN6KFNDxDvl9iqbf%2FRdADr%2FQq%2BGiGGnxqAemnrj95U3q9KPpSJPyil%2FMtNjssGQxoD31%2Bt6X91mgwHXM5xAH1CkVHDaLqoJ5c02HQjv%2FbMFjyCPs68F2gOYcqVvepDiUB9nmpUS0J7Imi%2BA3JagPqpkJdOCN6SPkjf5LiQ%2Fnz6A%2BybNgmb0ZmOG1m3MH9V5F8RnU0eAQEX5nSsodOvVDUwehilJWBiZQUwThkssuo9R2UsRzH4Ru0B9MaTwP0ddJIuEM0h0xGtSVSl0CfMrbpFHj%2Btl%2Bh%2B8HGUuXH%2F5rWvz9yHMHEYIHPekqmdvI4zUpRE2PFWlrPMS2DTk09FvsvVYVUiaQh0Q%2FSTSoRUTuZh3FqDwd4EAPHVO2lVaUIXMB5Sijc3ZIpWwCMLP%2FrTWqLaSV5ZFRrhQm%2BzdiIC6Jav%2FJ6g9nLJKwRYMI1351Yc3Z9hcDmGZ3VRbNEu04LnfhVESSveir3xMrMMrcRuA2rqhJfTPZZmGPsNNebvVcH47eSPyrlDKiPf9LOmPNEcmV9rvc77bytDgv2mCocUF1CGVFAs2ws9MKbez8cGOqUBD3tKLJDTqvV7AGT0UU%2BWhkQnD5EtV%2F1ai0f3M6jdQ3%2F5Um%2BHYflF%2FvuGpjMvz%2B7OsYshEy6vP8MppLQtmTFPr0h%2BlLf%2FVj1rZil919h5gZ70cKKwurR0dslGsQV0a%2FOVlhCEadyZxv7k45eV5h0Dd%2B0Zwxy9AVybzpgFClT%2FXbKY8WVknSNgZmEq2sBodcgeWksN1ZVxSFB%2FRUeVBNEdknKwoYVp&X-Amz-Signature=c7cdce3c63726a13c52088634ae56d3e7ada5b2eabfd9d2ebcfc9988cc85c999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
