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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ3VNFXV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIH6mRc%2BLXl73TQhoNlcneVB5BkWAzzww7TKrDqlxvo%2BHAiBRn1G%2BeY9Lscs1Woes0jvEnEm1nNUDhGSNskaUK34jjyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMrhAzBUIYynf2wm6EKtwDVWvwQB6RqahwvJCFaEgEcxBkeIHt4T02YfP6JKfb2Ez9qzeK5aFa4MJ8nzgV5kB%2FqGitBbEwhBwydQ1rQzRMAtp5JVA1mXvogoZx2LYeKvDQYyZwOzAddHQmJZL587nCe5uKBdOwBIWsoqQ4vWWDF144efcy97GMizUfCBANnvj6diOT%2F9fLFU1e7K%2BMz04%2FZZKijHPJyvuRAXZXYz3eTtcMbEWpr0JyjuJlJeYrHXzNmLfUdq8SljsPOlmoQa3Jht3HDO0Jb6HJHHXD6l1nj69mb3GIpSsCIhKV3Hdo30fH6%2BgFKLZz7pTaLZ2TQsBwYSp2M%2BxgyMphxwg%2FLcEfbWhIPMb7j7bfLOlP6onIpvVk7xgDbFHNKg8cmGYc0A%2BJWtQaZ0jv3%2Fv9f9R4PfD7%2B4kM6RXfGrOJBw1k4i8aTWcwJVhfz8WD5TgWKBvThpykXT49oc%2FerOrFCyi7fpTB%2FCMp2Ys%2Fuhea5bSR178JvTOLo78Z28jn3OTt0SWePIvmsKH35AXXkt%2FMrgiXhcdE0jPx9QqJtFa%2FNNgaDMHzA1huNfeoj4RgDaWMZa6f4%2FhcCrgcYZwsXm7yKIxaqRMUomI2BQPXcCiRCtuC%2BST08Ful8PJsmxFqmHwCc7kwhczRwwY6pgHzalFH%2FXYz2HdJt%2BmmU6E08xOYrG0GSxfkBe1iG1KPVFuEV0fKTXZrYBqrV3efKIjL0Mc74rbjrZEpvovZgoD1HfR7TiJZ4BjxE9D%2BX3lbogxwSZ480C27GhHZQYM0L6C%2Fst2VqgoUQixT2H9Ub3KrQHofdvXfikT87KDkYZBxjGkRfHm2l2TsQ%2Bov0RJafr1Nh1PsXiRKiWNQeXm0dfwjctIni5Wc&X-Amz-Signature=86f9c9a655c6489ce61ce80a7649fe7d17596abdbc9ec901366bf14e31fd4376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY3DS2EZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5Xd%2F1ze8B%2FYA8cEpo0xe6b4hOSQq8TMqlheBrqcimgQIgG%2Ftvz6HFRoc0gYaQv7GB2xc1gw1RtUpSc9yGEAVt%2FGUq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPB5e4aINun8XLUkGyrcA1i%2Bf8o%2BsANULEJEgHnRByS8%2B4Z%2FI46FnvvisDikN0R4vwDGI6n59X08mo3AlUoa9LtDCZUBrQC6LZRDkKyl%2Ff70CjkMtdQ%2BWj%2FbiN86TW5WZ7eJMdGDD5AoNkiXgMa2JiB53sTV31TJrdis83PbHam6bQOy9ltcf%2FRU2t0xP9v%2BFsZ%2BDxF0a%2Ft69DTvSLxV7ThqnCyxmVkUc2bOY4VvvwSjbXfqDJc3KL86ssA6tUjdx%2BHIHd7W%2Ffzgw5GWNvgBDEu1ik6v97PwYkApVeNfXHcWJyIhD%2BQVPnPy7P8ceZ8Z6MOHEsgFKwoXkTf0errmyz1h3bUIzH3l%2B16YuQ1TjGTr1w6ZMsUD8Gm17y3uhWOCwPC9%2Fl3%2BaEOyCk2WjPsv5mz5RQx5w0rqGSme%2FqrVdp7weRqRFpoXE71UISRfBq%2B71aYSFfJYZJR%2BbgFY3TANU93CuMns%2Ffp9PURG4ad%2B7Y1DtWHhgVAGvyc3mV8LkmbfIbZwdx6Ax0n01SdVBUAhwuHtDFZ5igc7Y4cJgl540q9Gp3zvdn07l4K3vVw7M0zh8Kyv9cDeXU11cIbh8f%2B9qtq8Smcf6gjPeZFaFU2YFxSzaev34d9tgVadv9g71Lj%2BBi6hcZValDOZTqB%2FMPDL0cMGOqUBZYqfQ9gq0%2FM0KYejwaz3htEZxxmelZYDNd5ii2ZlAWl8IJDqHENr%2BR8uGqgX0C909RqkYqLdXXve0kHFOJQEqD%2FqDpj6pCTLEen25RZX72FuaKPHJTul2PaNP1GuwGQHu%2FklAgXu5Hz7Gt00anPlaDISc4TltRRqkweHR7o0zmysJaaNjTRE2M6V%2B6VAhL60SkGkSaPpj0UoS%2BloofftWDgnGSK3&X-Amz-Signature=632030e860144c4e18d4c2b9cda740b76da4aabd5f025bfd6ce4daaad8d15bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
