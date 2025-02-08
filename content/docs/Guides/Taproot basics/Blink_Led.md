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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QVLPAVM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIH1%2BzY%2B1391cfFMn4n4vc%2B0QTANwyIVdiYbTIfknGsA9AiB6INJ9JSi%2FnrqJWDxwP%2BCjYHMrh18pkdjVucOydZMLEyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJXBmMx9VzHxVvVf9KtwDLjNqjFFRj6bmxWJgV2625nRorEa1qbqKGLjwdDaBRgYow8DGb%2FLZ6V0A%2FNrdEhQE%2FNKL8lHBLQj0iGKCfl0zCQjZiGWwKDvf%2F1ojNNhrs4j4cLF%2BUef%2F%2F9ZPERFkuws2BkhgmUqQvy0%2Be3i%2BOYD8FJqDDa2kBFCOPuNCkLXuN%2BOHMkt3nkX%2BTqwuQwb9j18Q%2FpzKZaOObFtf6DbE%2BmF40meiBlZL%2F0P9fACsLzI6W2A2rIz4xWGpy49bHtt4FDw6Tmlwvn%2BU3HYuzAyjR1wTdavPJAsCzff0vAcudJ8pKhpAEXlE9Pn3CZRFUhLx7OCFD0XeJRhZrSdcXZ%2FPEHZbDpvesuLKvBJA760xpffW8gr4MkYNZOd7xPmXTK7xpYQh1tOklFWh6U%2F0mOY0ai9WKLLR2tmM3UIfZDTuanAiFyRSM7kmA5SNBFjdlqDqCljnBj%2Fb3JfkWJdK6%2BdTDJBytHHACdlT%2B%2BJmcr702nBuNHludEI15h%2F4loH7XXnxuCBogu%2FZIiKu%2Ftmhv9h8ARyd4SJxfdEvYifeQpAGjgXI8VdmXMa9BEajGuFnbntsMOl4tJdU%2B1lBbt15lZnDJWka5MIz7rYWyt0ou3AgJJK21jE5fIGEwgWTYrPgNz4wrJifvQY6pgH2XA04nc%2FOhtG0q%2BspqB3oMUX8dw8QwTsjusTQxwz%2BJrYpqNqJQPhQbLCqYy3WVd1ww54V%2F9xlK9Ib6sQEXC8ycGRQ6uCXP5S1KJdwCSR572Qj65bwbJj1Y%2F%2Bo1hxAcjLvjUIba3Pq600s4FrX9%2F5AdXEX%2BcI2KLW79lkoBZakhgXmnkcaUwSvJ2p8xUSa9mO1suBM2%2Fd2xYatRshZ2mqxsDjT7%2BJA&X-Amz-Signature=1c57b5b573d66b0c0eb3be1236a5249630154a7cd18158d3ff3bbb01ee6b5dff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BOIEMUH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDgli7BFfNb130%2F8kFwQ4HXKiCVgh7j9pn7S2C0iPpcnwIgNgjRbHiZ3xZJ2zOgOcjfH0T1WBd4ZQqwkRyXQ1O5KWQqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1CybdVDzWduGE5eircA3nPv3bn2XZ4dwLP7UyoALVMMe6vw7OF4TOSHeyFFOZDaj9EEmrknXaU38jYbfAqfpT482mErKJN1LPsW7SUoKaJ1xaguPKKdWo8eBApBgpgotXN1WMSz830gsyFRScdVpz83oIuRDwCpTX3CDKejeXmPP1mp53lOZ20PDn8%2Fejy%2F1ev9TVKnPUkrWI%2BKFfiXPd%2FU04twc9fQAWcw4B06kfhY0kBnTb0VDkgcpLpLvUcej%2F%2FFEzcZO1EVX3UDywVAzTWxH2P1p9%2BGWKF9ye%2BeT%2B0buiDKPH%2FTFix1Qq6V5LJkHTTpJYlRPpia5zY5Ly16bLKB0ZvycOoVHdREpV%2FwNZC1stwUnFgfZP%2Bz3%2Ft7E63VoKTYGD8OFhnWYuG38DBF5d3pNzhsLMeNhmlHTXI2DVsQSzNyHrt0t8I2fcgoP4%2FQ1AlkxoMgxI8Jzaul4LI0lJgf9o%2FZrYJ130kFfbQ5wFU52GlFnAL2FV4sG7BQMkUCVoontdf2Ope1ls2pxHWwvH628VgsHeuDZJu32DArL0zSejxoyxMsQ2HEMwwbZmZTaZOotnmzU42XFznIvqDEjRo75%2F5%2FeE%2F3humRGBgdj4OEV3c9yDIcJOycMZdS6Z9aE5KJRwaH1%2FjOW9TMM2Yn70GOqUBcbk0mzMaE9%2BUNpPgKtLxFcw4%2BTycGVWbJG7cz6Lk9smkz9f2NZkKJtu5TRGUbKFgu4882V2CM6eXhKnMqo58eNt4XsD5Tfmzmz2TiQwUsgb%2FCtkbkHI4gwhrPysqmXLv577Ua252fyAZxDhVj5cVYOe4giFZm2kByhwYsNVx6m82XdxX4TyjQp9%2BZYAh2BZZnmwnENncw2SmBlwd7%2FiYDO7FQIyy&X-Amz-Signature=9d70db2ce41f3a2a162a4c369e51d51ddcf2af401c1d65991aebd2e51a02d51a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
