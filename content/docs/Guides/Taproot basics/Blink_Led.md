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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466335VY6SD%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDwJTsktdjysk%2FbFpYdhv3jHVifa%2BPQ9vWpxtfRgv0QJQIgOS9JVSf4kKQcMUhFSZ8Ta7dfdqn1KYqtDPD4E8vdhDkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsXOE9%2FXUReY5fkcCrcAzGhDgm9giaKxyUhXxgcLYvbqyV4SFxlhqwRjjA3SANM8oaEac8cBoCWym40rXX%2FXc1WVxzUZ9UlLIayJoHdERBJm79IPRvRHrvtw60rCjPUkbskMhAxjd1KRys8YqSOhWgizKZtck%2BhZcW%2F5gjBpU%2BEcWpp2ZlFtKQxNTm%2FzPu%2Byo8gEiXN4J93VnsMTzG4VR%2FvUhy4W%2BYiUH9BKn%2FuFedwsRNZs0Zo0xpeWB2fOhi8RZg4372KL2J1TReFSUK97HVc%2FazO82xayY0wMJor7BwSImi91svBKgXP0CfKMNLfiUc5zPFsWJkFYaPsopA1EdcQxZR1AIIUcBxQVn%2BOKM0CtWlirfz1PGygzdsXtPqX%2Fhh8asCjiU7dZgNXQl6Q5d60zzI0LVK%2FkmXHD5%2FCDkY6lD5EQ0P4CGw2TDbtf3wM%2BigfRXT7086ku%2BicQsgplbLWWlEKBjozAYucyf%2FrlOMv45%2B9xc2TomIH%2FGE%2FSUcCLXQ1gD9iT1ca4IPa0UveCdgoHXYpF2mogw3zuISkU%2BtRzSPRXQTqrnivr9GA5ud37R0f6PT3Utzqa%2B2iYqZBIHa264LKeMBJAZgvdrekARZkIJE2o19Cruk1vemK1gCn2Y2OQm0MTHxjAYupMOmwzMAGOqUBbBi%2BxjkufzDKZ2gRACYf7lBRC5rHjGT4V%2F8pMhrgAYzOj0SzH2akWGnrvXUCIYEf6PWZ6lppC%2BnAyzFXO1wB87a2%2BRIUT6uIz2YFvy00P6CTUk%2FaoWldLgJfo6Hc59Gx9DhyABvadc9G4O4MdwVsEnAYuPc%2FsPhAD3EoHAuDFbV5RKnsC0f4eo3iZLu%2BX%2BsnFsneo5ZfFnjIF0fWlKCqbn10I6Xu&X-Amz-Signature=f54f0824d7f30a07b6a927f982ab50b337c78b1fbc1d4e72f294aef0730c42da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2YOVEVF%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDsXrqQ2deVr3ofRdh5TZJqPo%2BUt4uFkue2rxuWxcpIMQIgLB7fCdWsM1c9EB0v1MH6PZ5i%2BPekx5oJTOL7%2BXvelswqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcMKFQoMzIT8QzfDircAzVDi4hBSIEPBjD%2B5OqwFOcEMVFYvO%2B8km%2BJdzxLDvYP%2BZUIwuj8zdwsvowARHVKPzw5mdmGnf8Eg5COUnf6N1fqSz61LaiC%2Fej%2BOzN9woSEE1gDDbtz%2BOa08FGBV8nPnKQ20VUlD6nVW9kkYjKifoVTHSl%2B6pklLMI14HSZs7xWNmMVXKvEVAZScYbZsFzkuT6AFpCWAoaLUXJp4Otv0OTwzbyI5J0CAsY9S6TJQgJcUexFEuIV1C6Q9NvzJqZ%2BEA6iNlMXDjz%2FBoSiB6aVbTRzJGh3Q3t7rHNtCFLK2gIwGQ9j9VmMYo5iy%2BG0ID9OIypUo6Gi01Spq9qbA1gf1sb57A2uoQ6opxIrroFLQ8uhCk7vh14T2%2FIN0RgL22aMM6rMpvnzR%2B0kdTInypZo4icPyIi%2FOu%2BarwcrMknMm1YLaNolzxys2wmwBW5qYa98SvM4LW1JmB1xy4ddClaPNcK9nks1b8N7k9QbJVRFfa9ihgCWH9ZDduJ4oyXHvAod%2FCxPcScVQxnOXCbvevWYlBkJ510r%2Bw1kE6EyZajHrZHosHQQc%2BvSHW72h%2BB5CdHmWIrCgAPID%2FroackSeResph8uvcdm5gwlP69yE7ohk9B2QfYLvFe0WABTx3wKMMKxzMAGOqUBFtHHuW84dR09myxaUD%2BmDAd4418aigEOh7IzFqkOBi%2F8D8A2imG2YPS%2FFWZo3uSj3OuV4vWYXuxuTIdMl2ZDn9nYOlJZHpNqgUz8v5uUUAFUMnrnCefU4yO%2F8IWKbfBy0FtaVA3lPxRQA%2BvtXsaay%2FCJVcPzvN2uKIxcEnUE1OjYvh2ou0KvBXl7J44BIPYkl616QwR9BFt9WsWev%2B0I42rWeZOw&X-Amz-Signature=86789f127e06e1937c73dc7d89b8501d4f8ad034dbda76514b50856ffb836491&X-Amz-SignedHeaders=host&x-id=GetObject)

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
