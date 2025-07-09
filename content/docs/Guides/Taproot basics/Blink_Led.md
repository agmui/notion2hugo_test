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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YMFQX6B%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEz%2FpItRDsJFEjR9dHzy%2BGKmyZ%2BOGrljYFQdWDFsXLZFAiEAigoaLII38KRt7ZfyQ16S5ffKxk%2Br3JsT1faHyKMEJrQqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMcPsJufEEEqRACjircAzyD2O0Qn00WyG3uFkiOxT303X8ave52IotqSlLZ5tNjMso11R4j1C3DrEZLdpvkNv4OtozW%2FIbD0bGJY469QZXE73oIPzqDXeHh0FR85ydu5uZ6xGz4PxPLuPqSjtLwVobFyebSQNq0knbR4BFG6DRKbVRjIPnRZXEYCJ1CboX7vRfsEiWSmDEUXawzolrX9f2Oi9jeZGPiojaG3JnzuXx5H8cH1rxPIZYse%2FplSREO%2BWnfbss1X7%2BCbrsNjvlbxkaM0VJ590QsxRvavNJq7iTaxOXX5A9QYU4MBmCMXdFQsOYycWtxaZJeCOwxK1HR25xN6OMldGqrjQVRTtMntFohmNZjnMU84hk1M%2FnueGqi7%2FcC3q9QOXmR1ovVxC6nEdNDU9nYHDlXWI73kxIfuHk%2F0En7UrxJJ3kL3QjHSNNoqJFz%2BONQcGLyDpAUrC53L7kTQSt1TcY699v1nxgxiKz4VbD33DD0ySQ3BqZPgkWZ%2B%2B82doCU1Y2txvPQboQ92v19z6U9hKtMUIGSnZB9BUR1t0MpvQIUyoYTArdhz2sEKSYm7vjuDt0g5kungU%2BwyzAAI3xGsfWMtDi8g%2F9oqLyfh1f4ZBBwdpI8tevjY8D3%2BO%2FIpEzx6BtrGc0NMOqXusMGOqUB3rR1pebZUjw2VsbMBVian5QlklrFXThEVarFrNlu0ZVrfkMbWq9ndQucCRofe9B%2BF7EJMzHxl9Hi7H7co3k%2FdOrdPXH5t0JS13GwT9hH7%2BbxkBjZt4maKlfQ5IemmndKTN%2BSYkHJ7eC2yDOBndON9apl9Zdk50WTUmJF9Vdc0jOPXdy0HGb8VxODCikl%2F5FX15lOrfJ99dlUwHfVUQ51OyO9kJKK&X-Amz-Signature=74918446d18f051f7d8b6f52dd9af148774e5442d15db1151ff5d9833ff97100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJUBISNR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8WvjZHkLDYVCwiRVr1WApYlhj5Pj4XlODAJWDQ97X8AiEAooIjR46iIqyiqsiPqLT2JcNtwtsFhANG%2FIgvr1HQItIqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNNjg0g9S9nikLWFyrcA0J4HRvXa8hLcRoHv6dXdqpSxI0UGELiqu3X8GSN7wveancHEAiqr3k8diWNaic7eTwoZQaPyDoUjFtKOhqx5WOg0j85p77KMOkfeC8p5REnp%2FHpQKjt4E3TQYUkyQHSwtXDdwjy%2ByXQ%2BfIeiJUnH4HelMaRCAp1GcFyQdABzjvW1IScm7EtGFgY6Dwk5IK%2FwLdfPL5eoN7pSxToup1eyLdqsfntHQuOTSk2UzaMA85fY69UoZkndEnCtikAyxZZrrZGS0L9IgMy4CaW0Z9B0CkiCmbxcuz25JHvgIck8MTpxd1qQdvaqwKkifOKvcEzUmlJ0%2BjEFHmy4l3CqtDVhs6dmNaUtkqZAdIVMO6wyUf2sc9L0YAtsy8s%2B4rzoyXK9HTHN5k5d8LSdrnggBCZ2ExcCzici2ryFXy2EQ3YZfcx0Cj8Ok%2BmMJ6GwOxx39%2FvZZI5LvweX%2FzV4OCMJM%2BlSXWnRBkE0bY2bCQn7zM%2Feq8b6EbObuT0em34EMoqE%2BsqX3hDf%2FNvPKo6aG64s8XrfEWLNvnyTcExN3cmT3WH3uqF4J%2FIWhqiLgWuOOkQhoJr748JgxjUYq4765BC61Q7FGDGfiIK%2Fzh7N%2BXfduvjudUMxxSwzBzmm2jwVZ0IMMCYusMGOqUBf7Hxpv9xL4Uo1aKeADsda9FaYxM%2FLE%2FGRrPxZZIcxxekSwk6HT6I4bgzwHdpl8p1VW5GpuMxAkSAkJ0Qa0KsoCW8Ra5SyXrZQMNwOpCpxJplwU%2BIsqpf40U7vEGx7K%2FyXYHdUxo0NVunQIkijWhiOaAChBxXZOnQ3kIWuM8ragpdMNjjJHdI3tRBPQLcs2nlHhp2yykZsXXtxcVLlBqiH3h%2BAMXD&X-Amz-Signature=466bc1bdca3eb9a0a9c221b30828e113e409d966a43a610dba4a1b472d9c8bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
