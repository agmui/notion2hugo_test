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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOZFCD4D%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOZZnt5c2OZLI8Tjit3mPS3SU893xk1K8AqGz7f0NJ4AiEAk1dTlymB%2BwfSzuk8Pw7aLhUqgTIJTJz8lAt3ZGQlskUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDAg5IrGDVj8GdMRHtircA2JiI6UOWnm7ZsRjE53OaDAQU9LphwYP9cHBW6k8ExqXeNcZmgKzEfgWYwqXkGs2hRlr%2B2Fs7McCBcjkHm4RWGGGsc%2Fe6Z12%2FltIvNIBCepAQhf13GHM9ALyoEdYUVYSGNUda6%2BFkqjkMMdXlZM2cSwJ%2BWbOk%2BelNN%2FbA0SGbPmW0U19Cc3IkGmLr7aMFxaWhL8VU3b7YtoKkAcGZqO796EZA0pkJS9sgDsW0QlKG4HBemr%2B5WH5a3CKU0lYUwjfpjYMZBlK3MrU0nsI7TTpqmTjUmiMh3SRaod%2BNNm%2BT7LaBMkj9S%2BybcKzg5kdVJbmIGUijJJ2ZStHupmpbi60eQdb%2BmJ2Cl9TLBJNzvzDa9n3b4cJoHJ9Z7xoOkbC7ZBMnmC%2F%2F3KAle10N6eLpj%2B7VmrAAPT%2B9zvLu%2BkE%2FE70kttcwQuHmgyMSOrf3%2BnG%2FpX3C2tCRmr%2BPzIhwNqAsoxAck7yK4pwJEPq3GDyfgXZYoEDiclVlNRJv1Nhg8gG8%2FCNatu5p9paR4QgpQvmJbd19U1BNbVXq%2BCGxSAPOT1W3yOcQq3J7MfFoZYASk3EKVTnGpBcDS8vzYAwkmgxwM%2FRDlxoLTXEG2wRA6sA37HW2xGRd58C1SXEgaPVcRHuMJS77r0GOqUBUZKPTwyCOH1vxl9KjtxKcY4BhkBv2ek%2F3iqyHUz%2FNvt1sGBN6v6NR8nKRRW3cyGNskQQpmOh61GmauZG8wECzr4AtI3Ed7lt%2BCJFvdpry6uX%2B%2BnDAN7r84VNALrvM9lZR%2BdUWgzoo2jcfHq2B%2Bnk1iV6DqrDZy5II8OeGJGfd6ghjdCZ6JZvj0ucJIjLAiENa0Y%2BesEIZbtXV50UTJSfkBu09hMh&X-Amz-Signature=77cf93458e58e9e0e870751913d308c348abd7cfbc534560bcd1488a9abe0254&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5ETWB6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvunH9KUhJ0PX3B%2FTD2ONkW227S3D4CLbbGcer6m0OiAiATMOUG%2BQYddlECwEHoY%2BUbACQpd2dUzIZNZyshnAdsUSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM2%2F6Fz37vBgoA5sxGKtwDIoo29bsrGLrCzTuQirja54vquFWy8oEUYlrH7bOwBzxWnPzt%2B0TlXFqJHaGxow6pVlyDzQhR7Pb3ykIXtQywszkZtJv%2F6M9dmdL4IEd6u84hlI3zB0LxTpCfzqolW3bo1%2BdoD7%2FT2ZZ9av1RCcQzisHTYMEaWDKlx21Uk7aLK5lRE%2FlC68Tv7YuMCS61OUvi%2BulwzkVAxvCV%2F3t7Zavm437Sh0lwVnYKDA5GBc7SZWzTX43TKZoNOJvDIogU%2BtoNWHc%2Bj37NCi%2FW4LpqA9apMCeYTVJh2jR4sQ67cyp3GG%2B%2F1VjR2YOcvY01eVEq76yqyjwqae%2BdujOjiPv2tZ3FhhvmlPKLAztBGjO929wxdnMlf%2FYetkHgIpE7g%2FProCTcHT8vN4k62ij1gkox2yBeYJ7ljomaU6prLOxHqm4EHduB2ia6TUNVo%2Fvz8D%2FWTPdBHkeSv8EWDJYZaFjnN04VuL9JzWOdlrXoOBXObWMtYufIMr%2FL%2BZp5B%2F5Bq2f5yUmDKKoaRNMSqcWvmKKuiVnrw59RQVvmF4j5eK68hkoVdPOzqdqZe55T1CPAgc5MMjxQjjXmkgms2T15G1pdAwf8LQCM%2F80lsPK1Sz5bKpRV6uD8cYK2MhR7vgdUvIUwzpfuvQY6pgHiUodI9Ij2LzAfbEIbiByk6MtUCzN495Dhvoq7wpjtTTKGCCKH0%2BYBiCty0nRh0OhQ%2FCJdUXw4JisGor2gZ%2FNfPXVqXCjfKNCFvC6CClxIHmV7zrenDpjMFasfI%2BNF6MIb7h0t3C3u8nV3w28Kbm1qKeZe7g%2BBzJNKuCc3suUaEg%2FAH4FErVsqBAxHbxVCgwPenkTQlHrA09YqZD%2BJdO08DBwIqFtR&X-Amz-Signature=79495c030c1cdfea08a6bf1241cf7793b7c5460507fac14bdb2119ed30f7cc39&X-Amz-SignedHeaders=host&x-id=GetObject)

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
