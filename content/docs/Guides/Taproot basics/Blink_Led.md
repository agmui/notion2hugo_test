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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BL5CGCV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOZTB32vFihOAQ3taMoVTUy2iHhMFX7Eej%2BojELUFQ%2BAiAX0GC5asnaiH%2FFdpQ6WLrcERgEktjWvosw54%2B6P0ZVFSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLrUYHrdtym8v7anwKtwDIXyndx%2BfXmjoMsq9Ev8AHrt3A02pBBM93ULR1%2BEnT7vH5C4p434%2BPfZbfazitnf4vr16HytbeEJGbPssdNpcYmhDSjxp%2FzkclHbDChBdqtau6C7yQ09Y6hf1MnXEOCxxXX%2BW9WmtnnyFuSiurPAwnLn04C1YIqUHJ4PIEL66PHfv%2FTmAMRV7NqifGA4HBQhIZtdarBG3ZC0lobHpRCSKPGYu6Ij5HlfzoA1KuAuhpKMQ7Az2455QFpE4lzqG4mQtBVvd52zNlQ9Ee8eqZ4MzX6JqOxNiTky84ZuhoGc0FNEADsPoB1mKvU%2BG1QzcLEhXs8Mh7W0lPYAKl6WWdNdLrgNI07wdOyFjPrf2DUoHeRvyaCWuFyc3uo999gE6zZCeOgKs%2BG%2BV%2BjqffJRn8Gah3O6WGnhZ7%2Bt%2BeSRwYJeLrKl4NIsh3um9UFJekyjURtjJ7P%2FOuAfeVEeLFWtf13q1WTaNtzNKZaUZqE1S2bJds%2BqTOsFyz03UbujU16Ak7Aqdk4k5fD5YcPryEjPfTOfzKKKF8%2FUDPX2aX52IDA87keUDUD5a726uLdy7k3u6t9QPu6AwGQ%2FneDD35g8yPMNopUSWP0tsF%2F85e2SoiGMUBrfpfDH8nGij2qH0DTIwtsW6wwY6pgFiyzo4jvLnaFLpzgfy5rNcIbzU9XLzpkN5qoxMlbCG%2BxpvummMLHDaxPE3n%2F1UVC1gwSKQgv3P9srNmtSyJxO0t2WDS%2B6aqV0b4eWP8izzhkBLS6XvdODXAuG5XH0aXMO5acoP%2Fjh7PjhufLUSoKaardFXvRxkFOWo6jhECqxZvRyVtE247AyDYdILnXoZ%2F4N9POSFq3viTdCpdewkL71lJiAJLLAk&X-Amz-Signature=3f5e050562f17f5d984a120fa0870426cf176532ed3caa391c4eeb938edc05bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXVICDT%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOc6hYF%2B0tognjsAgjR%2BE9yWzRu7BDg0GPVZXANjwr%2BAiEAvwc24ZGrPuP3ukiB9WiNzaTbWoPWqhKa65oSeeQQhkcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONq1YfO0HWjY5F0ASrcA%2FKKvVha7o5gccvwRk0kq1XStEZerENN4n6N4KOSX56g2nQzzcF2%2FMzKz9nOhPCwdMFOPbne%2FnSv%2BvqL9Vvovsh7M6K64m5vks3hWPl0T98EoIojmopDVVDC0qtjuCWzhi5L60LhbGQYTnHIrBmIHbxJX8Criyc%2ByE3pUbd0GTSKAfKU25mNbdVp3WsXwHUrDWNaIGL3G6RVRsyQu58FeRoy5KI90dXDDRVKvwVOmpgO9KWN1XH9nOLqhw%2FLBHsXh9nRB%2F%2BpsJbyZwAa%2BzdxJ35Rn%2Bn%2BoISyiv%2FGrH%2FIptNrPjXwW98Q3XbFHe71Dvj9On%2BWE%2FlmWlAtlrVgeQqEeo16xslYYM2c%2FQQimVVtNQPHlBbNwiHEyx6AZjQnPMnUaW9U03GsPD5wJMUKJ8UW006eNGoU1XzRs3bsifI0YVHd0eDnYJECSm%2FvwS8g41F7t8a%2BToG3gWdJzqL91gXsOxjyk3PA01CDAft44h9wQL8OATvGpjW%2BlgRl%2BdmnsHDN%2Bvo3b5gf4lmfCrNBeJnDXzz%2BNN86Y0brLXoyOOE%2B2C0kR%2BDIcF%2F740hgl%2Fbn0T%2BM9WiF6PFn4EDX6Ya6%2FLnU9V7y12%2BWF1LIiv1IvnDYrp6Wa8wPwi8P4XtZsz8jMN3FusMGOqUBE%2ByTMAC3rqH8n3yX6qfRMSUY%2BIIZNMRvYn0LUWlKgGWNGCtWJst4ic0MAl85ZYptXVfGrgtds0%2F68RJDnnkyWJhi4WADW3hh0o1WGArC1H%2F5vcB%2FiacyP64c%2F%2FU%2FmiIdRNvFrqw%2FILTyLWtAv4MMgwOLv5RJegN4F9%2FYs2y6j%2FZKs6gYZhBx%2FFDEAVBN0TGDKD996MLXNpkXp3ZOBhZXojbwAXL%2B&X-Amz-Signature=1b0f0d7f16421440eb71c3da62bf183e13e42e5038903a32be7ee3d034ed20fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
