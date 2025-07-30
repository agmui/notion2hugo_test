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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y77NCA3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNDlvhyZToI07lfyt3gBlH9oY72wpWemGpqSHhoqnfpwIhAJ%2FUv1yK%2FFS983asctI4iJfdQbJfRgfDZm8FD4WyWyPBKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJ%2BZL2Il5jSPXZlogq3APppkOYpoZcDT1dq%2FDIbA4i3aqvqyzyhcQCjQHgIkiKHnBQMqCMxNF01gdAnhwD4RrplZvVUgzIUtYVkmaGpaNu%2FO1bhR5%2B564Hb3PHPCbpIZJEb7QY3nSg%2BFOiEWUGWAuhoM0nUngfKxOPZpJ6iO3tLnREZECKeOdaIfYQx4m7rCG2CKw5SJpXZJMe6GAbJG7Gi0Y3pDuqQPw9qvfEqORO2tmov3IfWs8CJjmLxyVG7K%2FLa%2BdJNOHOtL2VHSc2uStKMJeUIpyBtMWiXM%2Bchdx2T73%2BnMnEvxsKDkLL5VaUysSCKpjSJrgfmp2a%2F%2FN0LhE8ub0bb%2B1mpwBzCeeGWg4SwAxHXxc%2FIjeroCm%2BT8MRZE96LdtVq6gwjpZKpcFntEACWGQe9sOo4CWL1IZ%2BPP5TKkAEawNsu5BH86hkUO0pafnseT729iUyDOhbW0PckhhQOfHIcg1fBtWOsp99dlHnoVbwveop%2FXjsif%2FWDYy4XnwXk%2Bt3g0Ntuqa3DAb2TsTDInj6QaxOWqewMxDE8erwkzE9Z6H0OOENpArV8qXdZD3GM8xPEf5Na71rP4XmNilJcv1MtFxn2WMzKO3G5evkYGHRB8zggl5XGFAlt7rH87E%2B3p62SSKbft%2FDgzCjkqrEBjqkAfjPOocLzfLF%2FxmP1a5SNlNYYvFdL%2Bc8%2BxJd7Q7CEND5qMJ0P34qva3rfJ45zrw%2FBiPsDRYn9llOflvhajhVp74YKg6AAXH8yUc%2BfcLgolFpopdw7262qx3rXd3zOW4CIVqNPHmEb6Ma%2FuSnGmCtpvF0zhOnaVBn%2FaFEKD%2Fy45gNND%2BkV1esAu%2BnBV5eQ9raU97qC0sZbyX%2Bxi3NKNr5Vpyo7r%2FR&X-Amz-Signature=c09361b38f467a313e5fd76dab28579a5bb38d9aebd08d45de4af2e9c848d225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQINKX4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHskuPd189BAhmeYfdQTQp5nLlCCeiboN1nvCtc%2BbxqrAiBBzjArXSQSiBc0tKVym8uTbhvxcPYT3AJT36vcn5ceIiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6e3nqNx1fUaKFT%2FjKtwDG%2FG9x2BK0J47gea5xfY%2FbujCWjpCQR2N6UEmZUuPUwbYrM%2Fc47H55zO05S6toHY4PWUdK4LtDyf4RJJ8y35VKDs6hRu6JAP7FhbRQ66mRxHN8GmPt3E7wZnCeCuyFg0IHYs2lCHTK5odEP1O07hvGjV1817fa1aWxToGfMI9c3%2F4IjiNn1osXeBh%2FOvUJzlGjLQQ1yg07tuziihIvAOqcYd4ZmVTITf0yuAvi11Pom98oDHewIODetHUrJqSxE6WyBMOR5IwQewQM34sriWsXLcFR5DdqEQjjuU%2Fe67Pl2DxvefsxxiuRgr4iTd5uqvYNy4G9O4ZWYRlKDOnTICvEAOzTf%2FpcM%2BAHzrpUCF8WIHchjKPuLLw3tqez1u2YsQ14lkkKXBwJwB%2FvALRoczBctNxSZmh0JxlNmfIoecox6bLnsFTkS12M79oz81%2BvG4pU2W7eOBqK9%2FqSO431HB6Ocj0g3IJqlEH7sejYS8WxVjTSQCJd8G7YhMjdlwEa4obZ5JY8dra%2FyKm3Psh8guOeirrUy4wdlvmyPxvThbZCuSOaMYLHXm%2BC1WJPaeX1iDPn0eAc4C0jjFo40ffjNDWqQKVw3Q1EwiOCLsdzkFF4FMUNo%2BHOZcvUKW7Ligw1eipxAY6pgE4e3SJVmbD8U86JzQbtAPkOkiUStUwI8Mj5f8YvBbVqngR6blsmkwkgg%2FAT%2FP6ebb1r7r8P4WBWI%2FQIBNv%2FSKokPmNnnIX7hcgTR5hl%2FNCK2JswB4BPkb0ciG8x1EbmvcZwbRHSvBeCJ49qja0ThrLicJUUg7RMqYfBntQeF9%2FKA83DndixWqQY1IN3tNHJ2f66GvCW%2BK%2B5maxTn4EP3JX5Zf5b%2Bbl&X-Amz-Signature=3c43c38c9a2bea3614a87581bc79796ba8633ee62c0c8a3ad9befb2d64956301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
