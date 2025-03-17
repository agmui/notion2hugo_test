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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ONN7CE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDEr2fvnRxSsRcKtZ5uTmnmQ5ewkFAqFFtzmvjfJidWQIgOhWHfElxSduHPf15osjW4ImUz4DneMgf52xHNJOWFnEq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDERrciGHUHI6L6FqACrcA%2FTjV2ZyCFUGwPE6DPBX7aMdqL6awcPh8YgIxI7xnCxdm0quQd6LtShmLx2s7n7CchgVNRBMwfVtyoXbi1%2F2DGwKJ34UKb346g4RizVDqlN592YmgsFnZke0J2n7tKqZOPkHr3IsMn5xytK3ZyiIwWiOPUaIqp%2BBu4KMWL9%2FfmZSYg9oaigFrwYl6x9Klfe0WAcwurvNt2xWE2t1ehiTPKQCKYDG0uICiOU%2F8gcCO7Gtj1iDqyybFhIQH8E36RSxL7upDh1NYGIeNDH6D%2FVO7IkzBOdvYCsiHbFXkZmkhmwnik2jEycOLB3Htxfe7YZv7ZKUsSemEbqyeKXjYgIEQw4t7A%2B%2BJO%2BFiTuax4sU43KWYGX4fcRgKz7REt8nZggfRlpcidgNqMMS1NsVr%2FbYdnHS0%2F2zOgI3t1LO9WX7vZMMkDdPh9fCtMJ1Q8CjF4eXx20GuCjh5hRiMVgXMuODbJ3smD1YQD9mf6c%2Fe2afG1%2Bmx9yMxXGTc9NlVlNPQsdwqNI0O6UAneVke8AihIGD%2FuJuS5zWTJEOk8URbNYe2Yw6cZ%2FzXtW3MAj5k5kl96nS1jgLJgnmVg3FHPLMdwoknZTEG%2BdIPRLWQRmIi5Dcn54SXoTT7VBU1okqfXteMIqI4b4GOqUBCvxpljm3GOcj1Bv2hOU6hhqRdeLi%2FdmW9rdPZsyku5r1%2BH5XH8pZTOYOi%2F80hVf8ecfNUEvRJtXxYkVBFlSYGnzT4QePbTdS46EK54Fkq7DsQcy1wTM3IWHfafiGuXn01pG6QIZ8c8nHTC223D50b%2FNQ5YMEhOY76Y6oD9H6F21GO3l2DU4QdniOXd2CLib35sAPik%2FIYZJEyrlRcxgjVQod4T4h&X-Amz-Signature=d9e56d915bb7b9f6e2cc47c698b5b2c3a2da16580fa6c9ca90d817d924caf6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBINLZUJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzym7%2FPeqXEmYc3EyEtMs4sIiu65OPAI20z5eNrf9BswIhAN9osmRBjN9yK98R7bZh8pdTEcsEsawH6ChZy0jQaGyAKv8DCEkQABoMNjM3NDIzMTgzODA1IgzBOfd6zXKWSd1Tenwq3ANLiXYIPht%2FMFeVHRWDa5eEoUpg%2BhjQshLd3oaUDeGKlhtHruFI8rC8yGidqkdhRnQnC64igTbKkvqayhAv56mtDSRv2ZWH6blCf1umSs2Rym%2BfwoajB7WstA8IMDupyE%2B4zyQAs433lmNyve3duVG%2B4W7q0XouVG89OYixgyfipaKBL888XhozVrXOpqm5zj8IIMElWkyd45ElyXXSW8b0UghMdCOEQyNLjVwQlzZXEO1JcfLXJngLf%2B2PlRbB9%2FMksoxUfFIo%2B75lrakJaWfDUjnm%2F%2FpgHMHSW2qLzSakoAZkRmcBL6tsvfyILG0gMpNDyM0xRL8N5WOB2AebZrhIcIy8Whlx3Ggmi16ETB9NbpgNvGPJuWQZch13pmmyj%2BtMD4H5pOD1xMJATtwpgiKfTr8bCA0ZHD47wQAtBihYGwSIhg%2BkyQi1eyNayd0wNPjqBB43oDYqIiVh51OebbmpG8u9OnBC7vKRwKZdtLEU7WxvVYYbDC5KYEclf3iyuc753EnwMedYXtE6SQTFbFQLFvuMsD6zGOz%2FHDbibRdtIsFx%2BG%2Bvc7XVvx2EcxkREiOWGbE9SJs2a1J4C7KVWfKsJtWGx4otIE27JAkV2oyrPihf8pmHhg4Qe1Q0LDCdieG%2BBjqkASY5NMn2HnG7QObEYXTGaXXoZlmkNR%2FHWxCQVWXjJXnYaQO9a6sLSwKZdhEZ13%2BmdkNVnJXfIIdtQulujulhDxsAQ5a2paucNKqnKiX5ekfBe1YMBo5hNhZLJtHMyZA0UJ%2F9Tc95QHZz1xkPhiIAvzCpbCVGVB2abSAQjgxd5ocQlKEczh3tiwWYZ5d%2BwRed5qKNHgcV4%2BOYILidVvzYtPNesSA5&X-Amz-Signature=ef39dd19ea1fb6c987b27779bd018e82102d6e988e8c2b57f8178f610a5437b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
