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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHQE5KD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsIT5e08OJsI8kVnoju%2F6AnOPK65nH8kpTqJmasLvZhAIgcwW7oLCOUk11hfiY5niU0Wl6JWVWR2Qsq3qPtU1yQs4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDI2ONZy2kydjdIt8OyrcA9ehWpU1hCjmGhuajvy33I63HZaHLNa0SWAEytkbrE9nazJA2DyLH18oejisoVg5Nm8gnG%2BFljOwulX1LM6y73%2BCEH90qUTX%2BgS7Xk2NhIZh%2FwjapLgCPZ4ALKnXwyscNVoZ2iw6XAJRKak474qDrCgG3cgxua%2FTNkc3eCUOKFLkWo%2FI9ZDfYi4OvhMXrr33CGnCa30ufjzrYRtF6D4nMR%2BwtF5oc6rOA4k06eY5JAtfHjxnWlwec44QXJO%2BdIkyoupNh4UffcKofBs8LuH9c9hR78bNIdhkjh%2FP%2Bcvb3QrsRVLhbnCrPqZJzw8IMfmx%2FwcxnuRMVetoPOAxZXAcbA%2BXHTCNbAC%2B7nlsmzyZZSXVQX73VG9kIQzsdBQtocAUsWrE2%2Fk2OLwdJs%2FLRP1f4zBMx7%2BemHfLRo1TotFvHtslVHBvToK3DeBUiNUZbH02K%2FipQ5mchyw0ch3w3lXpmVubUgnWFGOUWZDE9yb60dh4FCkY3eguF%2Br3s7eSKjyt1Ih3JT6Waa1IlppLcAzB0q5IOTIAXvBcUvgj0eW71RD2kLFg2LlYZDQ5SbCR3Ci5%2F%2BbaFtDEsTlmqTYBqCLvkZehklB5kAabOm%2F8ApOluJyyKBZrlI9vdi1n0a%2FZMJKgu8QGOqUBk%2B%2FMBdzQeSFWCnKX%2FesSx2dCvhDBJ532DB27%2BDrh6rYxNDyrQaH64GPI8JtrCgCZJcE58Fj91t5%2FjEwGJkxAtxoiLNHbJvpaDpDskvPyXJjXo3Yyf0VomJYpp1UZ10FAUbvJZBL8MWRNseGcjuyYqUad3%2BkkoPfYNCp%2B3BrJWgsBeHJ5Dpeq9l0%2BddzuMXQjK0TaQ8bgZ7K%2BG3MucIfDXO%2FPWhBh&X-Amz-Signature=8200118deabbd7d907342d3f7d5fd297ec947e0e30d1dd951c2c0462b3c1881b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTEKGRW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2DiZnSLOnnh9mrVhnS9m6o2C1V7QxROcX5hHKlGv2RwIgDfiUMfV8El3LE%2BJs1V3Aen8b9J6W5orbSa3Eteq1SNQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIMPmDfl3VkQBYtPWircAzIyWuzEUG%2FjmnhWVbZZxNqL7QvxLGIl6VmG9EhN58hLiIJcvmfovasRNmTOZcg0QzpOvAjkdXYENwd7JTX9BI8cC%2FKdjyhAdI2ddVEc%2BT6RhnmV1fjG4lp7H%2F8eIpWWJWgYH866zdOunKDyDzxBiu8P8V%2B09EJFVzsVY9qUX62mOBe5d9eRLz4eqFeS5gbyXX%2FVdHkC88S%2B4yrNLHF%2FklX0DCJPgdRWPtSoeNqbVv51VPUV7FeIrSvW976jqWuDcAfhr6c5hq0QhyiZibxAMvyn6g7FHKLZcvyxV01uk8FwDk4CXGdAQFIenxWy%2BBetIUVXXthOf9isXBiBrtiJFFJtL2ERazZU5x0yb6peNsPfBk7Jg0G%2FCu0iisE%2Bhqrg5SN9u%2FgFCkVmN%2F6%2BM7qgTM1Mw%2B%2Fs%2BnHpurI1kz0PAz19JyDkPFuZKrtpx3oBmPFLWbQThB7IS9AaFhKrB4jyKwqeD6UQc3FKMrrXuBrqEMtG%2BA8IrT%2Bp5GUQS7HOfs8CFKgYXW0WJc601Q21xkIpMc%2FunuRTps7MjH5H55pVyLF%2Bq3xu210Pwiwbg%2FEv9mkRt2XPOfU5TGIHkE27lbjE5AX8AXL%2B0J%2F5UM9ghgTJEVw7EaiBxG2VWhOk4ZGoMKKdu8QGOqUBKi06rJSYZHu5v5n%2FXP5%2F%2FUgUU2Vxs7pCFDlrqpGHyj89QpWvDP%2BV2Er7x9bC0f%2BanOzy05gzTHZ345eEeaYDGOaBZPZxvBlg5PAc6cIsMj72tQKfwWg2SBmeIG7Q59t77tUYNURY%2FViWOEY6xjL48nLZZJNfeAii9QSb4NJGoRVv0odTqgaRMg2d7Dzn0Q%2FtARe1uXHbokLwNgNkD8xVUY3m%2FaIv&X-Amz-Signature=2610613fc5a35bb6e5784815c4cd7907e3c16562b9ae267057ff0ee667e998c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
