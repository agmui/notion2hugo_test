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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC246FX3%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBh4MS4wIemUo6%2B6%2BqIG1aOd3XBIGzRyjQsB6ahkRYiEAiAk8C0yeTGU3cW5tvrwfkSrOnmVzhvUYCEnUh8fOuPIKiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYod%2FnfynZu%2BXzUfNKtwDXhSfYL%2BmmU0IFIchVljznfdBtUh9Uf1S6atb4vFlgEwTgPts03ADlDeIyAQPFJEBUhxOfUCOkyjJ%2FrN5Pa3JCO%2BJX33iXzzHgyCx%2B04k1Cq7mwn8rBak61yqMC3uGpZq4VAGcOP0dn1f7Ka3A8yIoVAOHSW8s%2BQocr6PMbWNLYAr2EI%2B%2BTIRtnLb1Pjoe5O8PJJSgmIC3YG0EZt8IVSSlpri6nh%2B8W0UiHHDKT3Wvt%2BFulflkdox%2BRg5bmMB8PNsLF7qQnWKCZHjHiZL26FIqh3wBT6b%2FyDc0kn3qIRCtrFlj8YYkByV7GC5RCUtx99IgZA6Yzz9SGNWDv%2BA470%2FAAQfOWfWU%2BF%2B1PBHeoGDaM3uTVtNQr1B32DSCzgC5r08zYOMc%2Ffu%2FsiqMIdoY%2Fvc0w0CqPaa3GoWM54YKBSG12aFB%2FfM5j2BTKK7IVVLCwNZ8aAO4wzCh25yJcj823JQ7vgG6c0OAHR7oTHAFilld4fKYYY2Lk8nOTGJZz3qzzuaKIH0pS6CyKR2%2BaCZSbEZbAmAuwPFXkGO8Qbte4bjIdgCoIByQvv4BT%2FYCrRY9F%2F2vZZM%2FCff7%2Bbx5I6wpCHrlOHr12J4xTphurslSp%2Be9mm7LhpXNv8O8DAfoZ4wg%2FiKwQY6pgE8ey3N9XlcxjhiQ0KNwphz7zJ2tMQuM4KUV4lchn5%2B3ySloOLMVawf5NJmH%2FTLEyLuSTsreaaO7sk725NJKGNmb%2BLEOEgixzx%2F%2FrZC97HcuQnqcFYzHUrBLiUfeBmMn6kabSglGaz%2F97Url6pJviAyXh7TXCDShIcOV1gHwtvR%2BQpWdwVu5rjDzG%2FTEdlHiISEvE2zyd6jg1KhdDZf5Eqqs5ssqe8p&X-Amz-Signature=b7cf8b1c2cdb8da20351662963008c7bf6edcbaf3c359d85fc1f131229421b66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6THM7ZD%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBUbi5RYNlO7vJUiNxV2A5WDG%2Fv9Ic9mC%2FaDIyn%2Br3JbAiASqB%2F7C2Ic3z%2FVLGaHCUs5LM4tCYgGh%2FhjMLJUG2uVgSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJVXKiGdIChS4%2F67oKtwDhZq1qAcI1orPH4rA6oQ4i%2F79YcOye31VG4mk9Js82EO%2FYdnUjBShhjimsrOV6p7M%2BBe0GndbLAQNyHcfAnmbECyZ%2F6tcZ7gIiZkNAu2LwUm0%2B4Zb4JH4cuXkOB1HQAWHE%2BUTvnU03%2Fo5NBZvh8CzE6yxx4MIU%2Bn0iBpj8eRKzaRaJeK3kAOBW9TQaAkuvVaN2f4dherNjnzhWW9PK%2BXrcUjwmQmGXkmaIF4TDlfQ3hLhcC8RI%2BGF6tv%2BKpKDX6EI2NKyr7ztOVAsyla4RsiGKUdZ%2BHcS9b%2B24Z%2Fo%2Fr6%2B5qDjOopSvAqQUBU8%2BokNZgfG%2FQY4dRI7mvrqK3wfIiWUJzq%2FC%2FGS1t1kC2doxKRxY5uFTgBQ2Iu8MsnNTcKSDEA50lFirkWiif%2F954jr4DmV%2BBte1%2Bfs5SpRPqWQ2yTNLtdm2CvhwU9XRwHfOQnxBuuABiVWSYFaRVxkjtOdK46PulocSED43PGMsYXGHqpxt41EEVANafANiBl7%2F%2BS2tqi1rjUbbo2fdMo3O2REQp2Ocpd9mY53EgepfQuZRhuegyFQBSrjxVt3qCjPh%2Fw4oyQvyVtNHVnqx8aaqfKDjvSLiFnauwFt3I6L49%2Fh5gygvKyQQ%2BbjPl3d2KhCfNQwzveKwQY6pgFO42KIgAqmK1lTqxHGYocnWo2azcweXVywBcHjWEWNj67XSu57I0fVvSvAUfxcgbcHDvrq4oiAV8FZFnpzgAKMxhWvfhZB842o4zEUdcQAD1HvuTDfmUow9spstIJ4ub0iIuHrZaz25arH%2FW6DgsPDUnMSzhA7IiYtFqSO0vnMSzLh6GXN7d91UBpkOt%2Fj2GKVDEfYaZOK7INZAvnIBb3nK5ewsIUl&X-Amz-Signature=3a4acce391ba9294c094cb4dccdc644ecfe739ffe8b64236ef37d391a3376a10&X-Amz-SignedHeaders=host&x-id=GetObject)

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
