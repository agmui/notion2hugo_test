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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXMGOUI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCIUpJRZKOl%2FLUNZnWbAoibfL4g2V%2FlS7qRWtb68%2BjG3wIgYK6ZCnDYApSU6Cx4aD%2B3ZtjjluWZypbvMEPkbaIUJ9AqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiuf3KYIhLfEZjrrSrcA932adHVGxfK%2FWIipXyyhabRmeoz3y1Qz25kmngjDHc7pWO9IhlXsKNWhfDRKlR4glK9DfWQFq0oWlphhsvx12P4webj6sLU8%2BZq3VNdz2KVyKBxzYNu0jmNUg5XiHuo7G%2FK2AhbMhpF6TEcZaSL7dZK2bvxgk%2BSWq3Blv5ElW%2BoiR7PXvBofb8wKE48R8szuc6qXDg3f%2FP0hKdzXLKo4S65SssrkzV%2BYRedBrWMEj7FRpMf8syod7aVgLTKrDY7jSAWa7BY3%2Fh9infKKen131lXYBo%2F%2BRGe9HAksIzCX%2FwcF%2FYfhIB17%2BTTJgPnxzaKzTkgXpdNXb%2FyOCML5q8EO5EBszYOKHP%2BpHRLWcENt8e6k1sNuZhwBKOvF1DwvYhEGyEg2aXBAPpsdVJwP9AHU%2Bl21jA1j4M1vwYoB%2B3GloWCZxQMoIfYeQ6tyKQWgpFtRhnAo%2BTgljtKv7Z3T1vbaVrElg93mecOxm5%2Buwl9AFTVVwF%2FhuvSECg%2Fqo0IdDW4SVb5X9DO1kaC5mi6Hzd6owCqwtbRkioAk0INmc5R51gCIWwkET0l%2FuxmIk8a0DWE7yQJiJvtGtsZwBURYcNGDBNigQ4wynjs75SaWQdfmwB8mIMhg6Khx8qjHUb5MJ%2FEx74GOqUBJ1gigZpd1oleVyYk0RrWKzCdni7oOto0J%2BUwV3kMGiVkQOFs0BzWxYUYwD1CAHOxokOrNhup%2FnBUVSJy4kydnV2IAOQMfbP6ZDk%2BuFt4sWRd%2FkfZECg%2FFPdW0SUhUArJiHIiG%2Btg0iyBn2J3DRJeFHyomXO5htVzaXm5kqoJl1FdPB8C9p5%2FOHxW0Svefy5lvgX5wA%2Bn0xHpPHQxhpc%2F2Q%2BJyPmK&X-Amz-Signature=9fe839cde81458d399ad55619a839a0354705094bacd04e42fef9a3f69f693c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VFTENWD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBW%2BzlrZAAYve3BExoc9ADAt85XePmf5BCEVJqaWgwIHAiEAvfJgtIushsjPl7tsCeDgKtEP8QtNW88pkanPMZk7qsYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl2Liho8o5QgzJIVSrcA2LBNl93xJmoYPT7UQS7YFr%2Bo5tsa2umur2W0JtnJL2CyQU2bPps%2BPnqvdIdgtWZ4jmW2sqEMzZmTH6H2I%2FhiDgTfTlF3UnN2qnNRnojgcmsnxRVuA%2FXSZWSsunJqLJvGfOVu5z6rJGSXBvu9rlPi7GjG93yxkKhow98JU6ArxomKrajnQY3joYVh7p8%2FjorLw8xnVNqOXWjo%2FTQRELrpYXHcdGgUXwu28L2jWkzhUP0G7vnTF%2BP9q%2BkWG8gA4U1C91wtsrh9z1rpRtUmkJlyuNWI%2FDCc5l5S8ZILZEroT363CDxhABlKSV5XBzmhIQQ2ai6l2Qqpdom6n5DNQxJIMB9%2BRMvfym4IS24SetiyKVwLF0Sc2bOvULvt5TtiJQpBQQxy%2F2u31gEgeglohux5jwZJW1zWsEaXGKwYn6mch%2FH%2BBxITCNe5n5C%2Bzg32gN35tObrRCo%2FmiMEFMR60FeBOmIjUJ5Rhpb64L05dzGFtlUC5JgMUXitM354LfHD40DCjyVS0R2%2F5VNcoGiwGLd511azDKx7VVg77HcPRleQnWMxDi90hG%2F2Vbimko3v9ipbH8sgsfYnUwc1lyBjpiALLTbY9vY%2BmUNcODiKTj8mCwyV4aC61xxUFgNI3MxMMPDx74GOqUBWr7ZoSHQWW%2F%2ByW5MeS40cXtUehZuJ3TeLI3I5xET2iY9HiIYs5X0zBzNZy%2FWGA5cRw42NCzoXI7Ag%2Fdpkqj8mF96HIruniBj1y%2FygB%2BCYnm9OP8wrDff7d7IyD5h3WrngYKR6EVIOx9mplF5wnfeOpRp%2Bm%2B%2FX%2BPFsNlxYrZ1XhWgWeN6KIujRE2p6JDxlfbYxfROX4fKszCppms4IKAPGR7SAHWp&X-Amz-Signature=78e39d7bd26b45856405dc651bc1d95923cb89b14ff3e5ea930108427d4ef3de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
