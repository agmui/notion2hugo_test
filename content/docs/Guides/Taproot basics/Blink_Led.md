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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4WHZQT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHlycEgp3e0tjz3Tncxth11kGQav5YC4ZQvhsRjY%2FKZQIhAPVvTgj%2F5mBxNACaGEPZaRSYrfSFJAG0UXyeguDfIR%2FaKv8DCDQQABoMNjM3NDIzMTgzODA1IgxlGCohz4IO6NBtc0Yq3APhe%2FfPqz1nyu0hzi8u90F7%2F9e%2BDlhAbJWsb%2BNhof6JjPyON3eZpGU%2BsQrtMc4F3BZsUzukveKNUb%2B7McX96niHc0LwAKxH%2BgmBMPK2LYMWKc%2BQHUlld8XCF1WdmFHKvHvDWiKdh1vC%2BwliBH9lLy6EOp0uK6RVizVQRlbbtmym4jcwhQYKZawBuLiXFWX45kIYldHk3GUwlCBDo94knivIkh3zd5dgKmK5nbOpIlkYP6RB0WCuVdCQhBLllDMQ07%2FdMefmmaA7lOWQ9SJD13UkejBeHOep8GK2cdtf1vsY%2B2bmc%2B1J9jN%2FdxTA%2BrVmz4MqVj%2B4grx4Q1sOxGzK2HmyH6vxdODtfK1TdDDiNuLKr1hmCudsLyXluKw5MccWApnYy%2BO2hRIEIp4%2B%2BN50GPrVdMfQiddUdQpMbP7KAvQM%2BzN2UTcqKPfsIK7HfL%2FC4JpJNo5C3CB9%2BI6CXcU22D1RTkzcUXITsuN%2BVpNizFMJfLWroANHs0ENo8vi416X9f4bhiy2hdOa%2F8rI2IcYhW3JB%2B6DONM%2BMoJHH6te%2Bh0lAuu0IQUDqnsYaHSZX3w7tDIdaq8MQz31pGrt6UMTmf0DmPWGems2qR5OyYQfH1TlKz2%2Fp1Z8P6Lhe3n%2BADD%2F2b7EBjqkAYAitiqALJ8BeSGwZXOvFF%2FZ3SPyIPFjB76Z8YIYCvd%2FQ3hB%2Flaq2lgOwbLzhIMR1G28HkW5YPjzUHYainnsWI74qVy%2BZBtZeZbjcyiDqO83sg9b1asbxqUlCRRFEmFtI7o5BWRic8UQFhDV6i8l1bER9tcnASiQGPTg%2B8DvX2a%2FcCgMo7D6w0w%2BESlOeChiadXHevbAmRA2MkzpodjbAzpyVZ6g&X-Amz-Signature=77936eeb750fc163f49550cfc2a35f6a73ed3c7ddee3f56976507dd056da6f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XII3TRA4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiURoBeu9Hrf0OY5ZNwLouHnddZJT1cVi4Ewf0gyEi7AiEAmMmveeYJ5bO%2BlcpBG6t5Qi5q27yzL2FHC7orsWrm%2B8Uq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBcmTgV5GQmfxlJZECrcA1tiM1WuBtTPjlBGSaDGAov5ZgMgF8Xuqc3lsihlY4CYSPG8BTmUrqiN4bLxwv7CC8cZnozQfFDXyNjoBovouGY0E4fjswV%2BzY%2FND9ZEnPr2VFULOnCiFr%2FDv0Jo%2FnsYj5PvOYjeg9iSJjtIQKQw%2FIaKRZPJ2HzVRov%2FCiIk%2FNmNdIeng70xFffEgEAQtgQANHLVEqvxkJYILTZWeV%2F5SWSiFHshrik0I%2F5hNAk4WUg2HVBA8rmjNT3%2B%2FACuEGMhGNiDqN9tbxy5Eh5Gyx5nCCqNdm%2BgCA66lfzdM7CJt22aicgxWFZSSEd7BYVWorCdS4hL97ZFzhp2%2B8l6exJ7cir6E9yWdYR3C3GYSfkUl7tkphKFF%2FIluTnY0O68CgaIegSvi6L53%2BcvXI2%2B21XpTsuCVSDYHI4PM9n6H1xdw7XNX7mgxkE2a5WCZA1KlX1xZmSTZ%2BZbq7pcM8cfED1axr5lIFoVdloSUxGYpKIEv%2F8s06edKvi63vRY9hXmvg7E07NFzSWhP7w%2BXcDs9eJl1gxm3Sz36GkxdRofMuHXSARt0edyuReu8LafU9Xu01EiOAUNx8BglDq3ozarkuRUgO8ou9Eij0zezKEVwRUTlZdJuHNd4knf%2BZ0plBCMMOvZvsQGOqUBi6jqyLpsCCRPZeQBE%2FozghqtO50NWzhaapEbwhhSM4fH1dD7gZ1POl1TZCync9kOIMk0tZmfN0ZBF4xFKGRQMetYv1ck%2F9pCVjRxxLJnXw%2BR9209WhAxvm9aQHAzb0T2t60M5AeSqEufY53GDgOUk2Phl%2FedgHgFRflIjmuuoa%2B25koWfPe2ZIkW8gINjfbDyRsiRMKwAKiHK939bzM%2BO9jym054&X-Amz-Signature=5564f578fdd56fac172bb004c2d6697bca3b53681a1b225e35d01ce444225d99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
