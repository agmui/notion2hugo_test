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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFK4MJ5K%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIGzG4%2FO6TcMoZzWiNaC9oqa0eIbdMyM9hMyViNRKcotlAiEAiFJSpOFArcdJpQCHTkiA2KsftWYDw5OyWGXRN01eqJsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzqmcx9LyFRKnifdircA0KSNF0KQzzI4KVXqvO2jVrOMrbylF0FGWxHOhX1wcCQUxv%2BvX8sLkrd%2BPFvoUrcV3d%2Fr17PpcP5V6qkGOvBVMBf6YModSw5EGlMaVwZ%2F4SRlHua2jwtjZxzyxuqHEs7wnyxVjj9i5iBz6FK6uYxeGmu30xSFiZu8Yi3hPg2dpK8tPNfJX5WwihVAQbkCNJZBP6mZUXL5QBMn9tLhHI%2BNydOLZNMJBWUU0uIk5HEPbWlizIamP4fJfZbWxnKCm2oWNoaVboxPD%2BgU8nnpb1vX%2FvSvthOTMmWvyM50FVpzHpAMFUp56Z0BnquBL0%2F2wM5jNajSD7SYxd3WIFEMCmAEHx5ZOyWnvRxP2rq%2FqGTMytk5A7CD%2BACWV7P3BloRQQJ3f1hgkAbdErWpa6zAHs6xsaNoYWfFMn9q3jXWJZAR3lWNrr7F9mgZkwwwvRK217vZl3BhmqH0rdF2QBjQxcxUgFHDTk%2BqhFQ0O%2Bgw9ug3pocs22MeDsqrOB5fBbfSevNL%2F8oQPL%2Fh36RH637MyvrEicDR0gZZt1s324D06%2BPl7oOYsEtulWu0g5H28z%2BCJMnef7lsoMuqxfol5cqFLDrWLepwz7VNjndW2XBtliSXgeX3RD7xBm83Ku%2BTibQMLOh4L8GOqUBg6A7cazlxzxbf4SVIJk7lMLvrPadVd83LhgN2qvoPbS2mty3d3Y0c7OiHRsRwQesmRDGXKgoBGNl1KPTXZWxsUpvUhXGM0b8nO1XDtd1B1t1gTSde5yBOC74enfZxV8BmKt9MXclAjUYzwCt99mRvKa%2FFxQUKrF1b3WCzUpwIyL9%2BraxR2E%2BQomdp%2BdfY2ypZM7ulAEZYxzGQ0PKfZYgKeSzCOBI&X-Amz-Signature=e38eb8d80ba2282ce99f2c727ba9668e4baf67e8ba0c3f6588c173c222d6c661&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPOOPMFZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC2OhaG5d31rNCpdbq%2BsbxSxbl8PjTBiwV7C0L9BcxtiAIgYMHriv829W3Hf2L9cH7%2BMTwIVkM6ECdk0ugtE9kzOpcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZYzb597ZwZtvqDgyrcA17vRjBVBr9KTEKa3SBSktmWzkoGiwN67VS6y6jId3BXW0vap35IaamnvtAEnqiyNxl5Pic%2F4cQT4wCKopJcAVHmJWdYPt%2F8tY%2BQIeCQxU9e4qKmdzHUykkCac8tbQ%2By8TOZ0u2SqnLmcrnF0S%2FV7fh3FUqMFGPdVNa0ZfrUIfIXdjva3ewugvfhyGAUhreooFDwyLeN7jrgR%2FbH08ULIy3swEXA1PZJaAOUyaiiD8zAeFMABOhhu0lFWMn1%2FAlzg3pr36d9C40QdhOenhaxkjxvBpkPx4LPMV2MKNILE%2BOtMZZwHf%2FaJAsm44zmdDKqsHjU54Fk4TYYg1w1ivzm7W3PC4T07bwu71YGy9LNcpP30nCcmviSKZaSoHgZ1WqX95OEc%2BGCSnBouyERhiJkz2WRtSOQ5L41HDsA0ncLA%2B2Gdko4am%2F0S3GJi2d1uVN0yPLrZSzqACemrV5iKZSTg%2B6L8DDCPDtLc6o8zQZOTDOVUH%2BYJz2bRHAaTKAs%2FliqV%2FNsCck18%2BxbHpumeYWD59lOI3O2gE4wsr0WNhTVuuddUHnTh30n3g6ljvoccJST%2FQX44kx01nsgVG2VSucQi1Ynb%2BGZi7oDCpGQm%2B1Igy%2Ft4dr5JlnBWyQTsaYDMISh4L8GOqUByHtJcMar%2F9IgOcJUagwZna0D90v42RR2pnFpRXq3Qpf3lR4K7aJwi0JHTXlseCIS%2FOkzvBG7kKR%2Ff0y8uXsSI1N5OHSRsU1ssWrQAKsKORenF5OVyvuyAl8udqVASDNh27PF9fZBvySGKlS63mrtagro3EogCdQOsU6SS3OFdsSMb28e5eeA6GjDkYNm%2Bb6xD%2Fc18lYz88965L%2FRvEozUtm6ufgz&X-Amz-Signature=f1e7f5c8d428dd9574169d3021ecef3e885e427f34c0e7e4c96d7d86bcfb0f16&X-Amz-SignedHeaders=host&x-id=GetObject)

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
