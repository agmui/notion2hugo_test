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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMH2LUIU%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAkRPQtK2IILjHzHsvKMLEQYMRvWtDJWmE17tsGrsWMwIgGWfE%2FKGSqC8CzeD8kVDGONpI%2BKTBYqI%2BcSNtJxf1xnoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLMcdJhrb08j5gexvCrcAzN%2FAXkL4YNus4roCC7X2h7QvIYjcLJwSRKJ07sVNK6SgdqRVm6aGioU55HPNuI8FwzerOJyF2geiBLwqjqQ%2Fb%2BGuFgBnTa%2FbuI0K6jzTlb5867CaF1S0V%2Fy8EVxrZhNPP4hJ62czP2R%2BtqF1tALHwHHeWEGcJLhZUTWU1U8xWncc%2BO2zdXBb%2FgRH0HHEQW6AQP%2BEcq3OrPiwAREe79dGnK0cnk%2BwZ6bJFNniz5hGH629tbfPrKJ1c0oEIUl9CpQhLt7twjt772ozKTQOQACwkdRvelvaBNQeZzidk4VYCF11oJAxgjgOFWPpcutGM5Z3TtiZPDuuYbOuP5UZvkAEoF7GICZD%2FRlqB74TYRC6HIzKMIdyRwlfHuGQVZwg%2FIhaH3eZ%2F1RduE5dVj9WO1%2BPaftC9BhwzQ99vyxcipdA%2BZGYmdrTVcl6K3R%2BV8utM%2F1aOvwvc3xT7Z%2B%2FjOAbHRCz%2BSbGPxYkKCUNssM1DOgiE18VSM3K3H%2BdQUYRerkbghNoKLmv7tFm8bNPNuERBGKTkbN7XDtIZTBz9CAlm4sLwW%2FNFYklVIhrTZAOVDsNTOHhysu7gYct1DEc6UQEedHBILfand%2FTAKAdRm0tmh3Z25oTVlM5%2Bmzdg9QQaPMMI6dy78GOqUBtExop5ru7ocVwbbsA8Z8f8pDrexrzO5yVDbVVPZsUZ5AJDjCxv80eBl3i3zI6x7X5C0UyFUJydZNN1Bo82yfpeVFBbqxd2ZUPWshuLkGUTUBVlyTU23Ml%2B9uCmumeCyXV7rYqriNZ0XZStSkiocYoASBfqiOiQ4NjBZyBtWXyoRoTpRnI9lopsuGh5n87PFfKIf2ssnVnnG1jTbowjt3Qq9s%2BsTZ&X-Amz-Signature=5211fa365acf481c8afb52c104103b157dcb99af9da012f3f79d529acf9e7128&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSTBKTY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYcQNf9YsY%2BwBZH7RwOZiu%2BKhOdZ1vPL5EVf5ConF41AIgOb1wHjooiBJuvY6HJ%2B2Iu%2BJQkcul2FYVczEWbf7eVocq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNpfimmikXpBoxPJAyrcA%2BJGlPX1bv2QJP30TATGpfClzkL51iWqxnigBtwt%2F0NKYKimXU%2Ft6rdD%2F8Ce%2Fn%2FmUN56hjK8cx9xrSyh8896I1%2Bbe8qwLi7ff4%2BDYS%2FiXmNj81ILJzyJblI2e21fiqf9q9jSyTohRgltiUKmdyvt8Jy%2B0gxv4d9lG3JrpCyCmn7ImzAhwMZNrLAeF98M6e9eZEhQOOWJeI%2BoUcr%2BNfo37lQ09TyMsjH%2FqiUl1x%2B9ZFJCZoUZctRAsJcCp6DoHc9T6dffjYwyzxdFzq2YWXWPdd%2BoL%2BS3VAeN0B8idDVEZ%2BU64pb9Vgx%2BbbYbcIyM%2B3nSXaTSwbrXj0mNrhF1yMkIq4skdVN0LoEFprPrrE7Jupd6vIx4UfBlEsFCXnaknPwWMTwrqRNKPVvxawNP6i5xPWlV8P1UpKS67EmxLzJXFMq%2F7poYI7BsbiFuJnJbK59jBck5UgJ9QhIYwCmxglYHudR3Q9kbER0NHNkxTqibEfgkVQ84LHHrBocOdCdxMxe0pIpX4co06bre63WQou7tR5rhbtPEIhuC68fw2ZPuwf25t%2BE9928onrJJfY7ZIoUkIN39MdLERuN0nuz0Slnar2Lnk82zSaA5XhFhG5hU6S%2FAlGqmnBy6PzWJKHGlMPady78GOqUBwCeZev1ECJbDeCEywfoWRESy6EnQ%2BNaJBdBtBSnycRsdGgGq1%2F%2B08iQooTHbnrmSkqMLbieJu4zrcCV%2BA5vAt9OPx8xvbB%2FR0BhowB0lv%2B3IihCFVkt9NxxuOG%2BCJzNabXXdZL5PMQ%2F2%2BT0t2vaulNVyqZSfM3in3lRB1WYH84mb6pP8KdtZ52MPuKW0upObvAi7fRwrPPp%2BbBePfDtLs8TtvRaJ&X-Amz-Signature=db961ee2e4a1bb126ad274b2f468251405bf6a6ddcb382f297cddd18942fcaa6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
