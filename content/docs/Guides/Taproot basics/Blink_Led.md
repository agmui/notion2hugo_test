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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBRK6JUM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIAweD16TzlUv4lZJXvBQCpVrX8IjM0Csafjh6W%2B3%2Bbz9AiEArNf1Baa12xdDwedEF0TgWStK71Gi6VjIzo52r2XW3YcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5nS8QXSusxex6FSSrcA72xf9p8MBzDaAzkLtUrERFJGG4bb4hdx3fo4Mb43gmanW%2Bgm3iV9%2BNTJ9JGppVGJmymgXQDWyku0IQfEkKKqkBzdXTUuKpnG3b34T3DXsu22YN7RDskoPF%2BT2j9UjK9RlhpIphvyWQe9qbmG5T0vU%2FqXXYv6lR50IjVPXaIJ%2FRe58WbS0HXwD9ryqUVVldqJxVTfi8yL%2B9w8u8ei3WtXET%2FjrpxTrShoL6e4EQf1YF3UYhoF8TfY7JtG3HF%2BjqsSW%2BKVVDwx8%2Fe%2FT02RrWYgi3qeTYMJBaheiIVfuUzyNR7WSoVSFObqco70MvPYolDexv6gQLO5ut%2F8OeXqZdOn9BdvZDDoY8WKxV960tjJvo%2FWwf4UDdK%2FqWtsYTMRRcJ29Qk1cgKMUz%2FJeUV0pbG%2B5MFaV%2FGf7DnHeg5wLgjzFm6OYll0Y0sBx%2BpC%2FYehfgMZoJQrdtt%2FlvH5yiJr%2FKnqZwY%2B2ZhdgrLWIzJ3SXfO%2Bs%2Bn539QENBxXkdHRPRh8s9qVNrqczcSV%2FauFGOXzg23YxPojI6AHaTYFcjVubpESkz2iMzhyjPEO%2FiD4uuaAmU%2BguQpmOMSo%2BJQ554SM0TO6yRq7b4xyp9sJY9OAVu01slJvGujjiym560kX4%2FMLf2g74GOqUBfhNzehplq4Lk8iq9lsusumkabOilITIZ04JqGFB%2FWrI93kYdL7zrKzyPQWB0dqPadkqLmc0klAtBTvT1rmz3Hi3EnRAZbRe9mXHd73ZaVHaZT9NVi%2BUK6mzskYdMOmEnTsJHpj1Ezscu%2Bf%2FjzsM%2B%2BJ0HOvkxz%2FguBWQkfuBDVyY3HE6LejDPNNj%2FXiGghivW%2BDmTiZ8uK9gyOkEjd5i%2BZ3QEoJV2&X-Amz-Signature=280e7b02a4ef2348f890a2c812a55dd0e409884f8a1e335f5a06b9e8da4d9a95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNJFCYM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCe49iW6gL80dnl20B6qhVmudPsZhfj77qo%2FihszewKgwIhAPLZeJobxTtBl26IVpmG6Xt5n9Q2ST3xEd0bp9d8j2SVKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzltCURj40YPFQWXhEq3AOnGkx6qrqKczr7Ovb6AnuV74ata%2B%2F%2BswdEWWNzImOR2nwjNLPzM6Gc3n41VddDdiyg2TyCHmGuIdhGV9FGfb5Pb6lXrIF82Mk2EcSUDvweIQUw3BFdvmIfDaPAs4HH%2Fvo5PaOjt0EEY6nKgmBWsOhAzwT9EXqIRirldumPYckIS5zkp%2BxZ6YQ9JG2zflS%2FUF%2F2eH%2Bbbv9keDdITq4s%2BddEPDd7J3AD4Nm%2BNsG4vbokdQF4T6E3izp3pxFvkJAaOUduLvrqkXKNW2hxwI03UJ3zENC73cCwT1NBHZ8cAkefG%2B%2FeVt6luuBS9D8a2dw01%2FE9hzC6GTs6TeOFOMZ2crXPwVtrGB1CNDE71dVIqFV6SsJf3YDjrARh2Rb3a7Bsm%2BQsQUVWNuysPSHgGir7A19BvzZ7sd%2BDKVVE42%2BS5%2F6G82XKFAWAxAMjQ%2B70NKZkPUq6N4%2FnbHxtpTBilalQCzc44xc4J%2BtjNRN5pfxcF8YYacQRlBN9aonzzRscEmEMGTbYnZMKnGxzrDsOSFIpyf5MpRYgzsOWxHNUphDNtY%2F%2B0izzVDBIdLgjAXC6PSJrYGGqccj2W5yEgj8MQRWavZx%2FiMy1nGIixxooyZypNUA7MP2pChrmFrOd5AdegDCO9oO%2BBjqkAfTv5BuV%2Fs2Ey5s1EDrKSPUOU3DDHVZFOnop7QBEWYCPr7jfuB099KnV8dpx1QSxYLRZ7WS1v0MObTLAFKDIG741YLKh8OdKu%2BLjU8noMGn0nB0em%2Fj3O5h%2BJi6fUEmqXqtQ%2B04ZRbh%2FbTE98zVqs%2Bbp7gr3sqx6PcPkjT0wnqLrY0m%2BnJa8xi7QU2LiwUmaYAI0kuX2YoOkWPDyeQyq4p1dw480&X-Amz-Signature=5f9b36f79247c062391c0cb34dbf57bc2021a67aa07bc63fa2355e00b66e9d3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
