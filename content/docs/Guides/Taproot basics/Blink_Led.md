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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z623RWEX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpnFfnZRitRlh2nAkbWYMRhj976SxkcIOiv8iIPWZwGAIgfBGPys1do%2BcINBt0OndJG0LC85oQrVqJRbf9jbfVSJwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDfAVvoVloZTMy3%2BCrcAyUcdDP6K04SI%2FOO0X9AqODc5suE%2Bh0qTI0SwzddMMACN7KDgE%2FQ%2B05YkjlJED9D92g64EGTyZj7rh6I7MvU9l3Fn7K3kKi4utjZRNOhFYrWtsQ1B0TxfCDKlMcfvaLKRwPlQ0nJzfa1iRh64hTEdENALDSj0%2BlaZ1YojN7%2Fn047AGTYAbYiy0WgQxrXE99TPYw%2BJY8im5CjKCwAKeLhhmR9xAUPgyliYuUe98DUY4DwZY2AerlE6oKKqKNxe3iuKMtt%2BPTwEsD0TcU5JYNEQiaI%2B7flO0IHiVHuZZQPRWb43wK9k5h6YEGKyLbdWxNP3Z%2Ft%2Fj1eXlEUlCdaPciGX1m2mrsFc%2BI%2F6zeGyurrl6DECTJFCiQ61sxhySY2MWuPYx9KVF%2BeT3KbIGBc9Eeh2IZKffEMQuSCaMaI36%2BjA1I2DEXxDm%2Bq3XUwE8%2BBIs6txuCJcYOA%2BWx373qR8rHdZgKmjqd2Yd4iXiCwvFoh0LGWgv3CYL7McMskq3rwWCTpkCJD65hMvQz6NRmEnAHV84gyBAs4OVFO9MsoYkhjY%2BQgYCqgwc2fRzBsg3R4dMZ%2BWVqAKsftTB%2FG9xfg6lbXeQMfZb%2FPpxEEuiWWbB7MuEAwQx%2Bu%2FO8BbbpvOD1DMPfXjMAGOqUBTXKQIctY3n9cZlFCJx4k0VxII7NaVB2WpnWbETkKpsybCKObnaOfvMaijo7DAoOFhLsNyxc5bZU7RhxGwJrkViA1hE%2Fsqni%2F6x%2Bd0T%2FQ0heeGR4ipc2Jeka07EoJJaBpYpoxLpypG0nokSc3zDN4PIAiifXpEgdiez4fjckrrYqBJwZFzim%2F5Sfo%2FNwW8Kth6ovZgRKO2D1vZ6HCWdQttn7evJe%2F&X-Amz-Signature=39e596d2701eb037fb359e8d3d000afd55c9d0c79953089f0e7a2f714c00b8ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEQULJ2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ4BJjhsZxldJ8I9f2H4RnfGkmLZ7UopDCn1YANpvO%2FwIhALthvW7SDEuNMcI882B7E9eXEyLcOs5E%2B%2B6n5drmmq30KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR9U%2FZeqsruMf%2FeRgq3AOzCfQS9YaV29KCvosd9q7v5PbD6PpTtgCAwExjFxxUxY5CY7ysySzmcm1YNx2E3j0pmoloCil3%2BmnLsmr0Pij4zHZuurZ8Vhur7a4GOr66IR71C3Fy%2FKJdFjEksHXaJwo0sTSxRFMmR2s6Pube%2ByxW8iQFsI5jxSocFgIeFTDrNmKlfRz50YYHtDqqvkE9aqi6HvOCFw1FtFiDIi77kBU3NTBZgp5waGNGwIlt6s4jIQdtVtuiopaIjq4lssG2klFlvkokO4qb%2FKHWLIwZk68YgjSTW%2FMuz%2BRIaLq4H34KVuzoFpXxluCMivUj2RiRekNRg51x59oJ4Z7VUSiRaqWjTud8I1l8D3KieL1e0%2BsqPFJvBLYq03uEcfGq5XeHo8wGZ4el8Uh38m7yM9qlYwvWL8jJbgf04yhFw1e3QeGSqcl5ehJ7aXN5jvGc1wyzmMNCaKegdGk2aEKzTpO6PV09GEug3Wx24M%2BMhVTaEZ9sM3F5Ob7l9XYEaFMsBvvC%2BpYDcZuOHSmrNUq2naZP5HnDZhjoLDzpyTk8co1%2B%2BHhUAdjEWTG4S3mwvaiFGqZM%2BCJnmEk8vgzoNPz5whisDuZy5ryMIEKiBxs1uqxUU%2Fcy1zZfZKi%2Bvk21%2B%2BSlLjDa2IzABjqkAQQCsJeTw3JTbxlia%2BvYDjml3T7EMDvzfNcKqdG9xlqc0j3Fdsk%2FrE94CQc2XhkF%2BZnjvyyLf3wmaU89F6pxYKW%2BVc2YfGnzpqAEjUzVWXqaCYnEytFdO24to9iNDHAuofLUZgfDp4Ruc5hFbq0wkosjcjt9WAq30i11OCtKZCwA1E0dak8hI9HfdrN%2BxrC4TRQLhz2XLthLSD31gnjNO3rEBJ%2BD&X-Amz-Signature=e3d25056000fe91ead34928035403c77ca2668de990bd043986ba337403ad879&X-Amz-SignedHeaders=host&x-id=GetObject)

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
