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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQA3UDEW%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNtm2R6NGFYjLEIWk2E7SxqocmLXJmEvHL%2F2%2Foo7vIKQIhALA9L1gOChW7NQAAMTwwDrezwbK2j2QkpgyRIEUc4axlKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpSBSaWMqQe2wYXEIq3AMGhENfqRgftafmee60wKFdQPctgqn7xsHkka%2BbCr3dDMxGRS0%2FsQN1g4LSlOxAIuJ3tKnJUZzlAtOj882QQfvU1btqz%2FbqVt0nQlq3QXI1ozjOKHUq%2B7Xn6Gevp8AcnpQi52%2FBwuUq6VSLuTPPUafGUu6NFjd%2BY2GNZ7KR%2FaOnob05PLw4SwwqtEnk4O%2F8juxkDzxxuryvBHkxq2U5QDHjFeE%2FFFZWmC3ZcPLeZiPJxwI5zM%2BRkJ3dHwx9FamlXC7qYkzPIqXGBgjuWpqohIJGTf70XFTeuYDEXeUxcQYRqaK%2FdxIYA3LnRet2y4i40ysTfw6H81hvv53HIMtLMefVMDz86WYzQoeJ1hzciHfAI%2BK%2BfFt2oE01RViVRM4c2CVZjvQUqWOFR5lWnJ9z5L9yJZD%2F8Iq8sw5PSf7BdZoLsgbXBmQEDJDJE8D%2FHWaUx3ozUtLRWq2EYNP7Cd5wOIdZeTNsUnRBZ813TjrUjs4g%2F5LxYEkVwlQqzAg%2BOMyNsV%2FZmgtwRfTvIMTc0S8dvKiIyWlaQS2YD1BbB7GNS9xkp7v3NE6Fx4zueXwOU%2F2AiCoQoDRedIiAob%2BSplpQIuWBQc%2FWMZ3gsBTsezrTZ6AzeKeHnN92oX7Mt3WNTjCHlpzCBjqkAVWO12O4Q4KkPpSsQ%2BHm5Mn%2BTKPJf1MCOGPdEIUMBnqquC3i8WzSDUffP7IOiyIWoNNsKFVVtI0NFk8mGHTQrL0CkK6cnL1Iof5OJToIJ8zxazaHrm1E%2BPphCrg87YZZdOZbpFFJul3cm9vIZQMks%2FDv5eL9scoz%2ByJPQUlJhYGQPXl9HQYkFcF35r%2FBYXqSBdwYLF6s5QwOPHOyohDuGObF0tT%2F&X-Amz-Signature=0539fac062ddc02aa2bacfa02303be9871a7b1f9538f36512106aeb7ea074ce0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KTJKKIS%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYeWal1iMRSdeuVW%2FGJqfspdU3EL%2Bg9jvJ%2FpOaMAgrnAIgFLEfBdE1BnCoAvUdvIlDbSJA2zGQVA55LZsbyd90ha8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1G1Csk5dBW6wZuPircA9M%2FdZPmjoQHXFi%2BxZv0N%2FO4S7hG5LvcaqiIf5aF45PG%2FpXaqMHdNw4gXi1L%2B0dR92JFYJPVkXmcJ7%2F2di0cYUXbYBNW3r8%2F5BIlxJ%2BPjXyjt9HjRwlykYR4SjRLX3H%2Bz018ULisu9let%2BEACdpMKqCrTB9t5OtE9ifI0iCzbX9lSWCv%2BvSdq1eeLQYNTUWITX1wSuSVHwXlvpLfwZogQDmYUvv9rCXa%2Bzl5Ye9j6MjP6TGVPzD%2F7UbKTBTU7qzpaSlzicvAwWd6pwSzXA8zK2xDdmxsEa8DxrvVoACaxIfEp95x06u2qbiB9JUyP3oNP%2FHoqSZ6vyeUyk04XWQCIqMmuiw8Ypr3LOkpIB45JXSc4ORit6%2ByAwjgG7OUV%2FPWL6INznMSN%2BBwT76IcMUp%2BwFmrASkWOJPY9zSFIqrr%2BIaK1SrEwwYt01i8XVUjYTJZ2A5v95efycaHKgh8Ru5tUkbZ86dELrod4wJZ1ewyzWVBNRN5qGYD9fiQAQerEi82pk4M1YPeBCLclpIgBSbAikqxpkffcnUDtQzSe3Ju4F0t5Zun8xEdhinkQcRUMiVi7XzquK2rpqksIW56lwfFGCi5VmLFE9h6hFj84zdDSvTFaFLnqBXoyKCnwsMMKmWnMIGOqUBzIVNpwyfEun%2F09FlZVTwVg9jDDYXNYT3OVguEQQUEYvvsfZ9ckjIQvlIoMRW4B5DoYib1G6o1TUc4zeuF3ZRIqcHOuMNAz2zlXzldPenB7qQa985LFcmsVVnXImfBrN8GOZcURtmfsX7bDaxLXLy1s4lTcgaHUqSlmeUkdnnt35Y2JXYz2bTYiYDOgR4RRwJBtBY3YSp%2FSeh1m6M3zBz5O01M%2Bky&X-Amz-Signature=9587a5eea36b587693c28aa71f805fd9adf034a876223302081baed4c22a0112&X-Amz-SignedHeaders=host&x-id=GetObject)

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
