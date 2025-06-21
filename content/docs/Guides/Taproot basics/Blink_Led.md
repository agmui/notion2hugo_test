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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDIR5UAF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKM%2BUJw0oHjlQWKAUVlOel%2B4PAfOBILb43N8VYLl%2Fc7AiEA8J6%2FgJLXRbzAke%2FvmmYSgYNUdl132dGzZwqqV5iNqR0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErQ9Mk%2Bd41PLmVA%2ByrcA0MXzfSQr8l%2BeyqK3yTFKD7rBzqjhtpSRUsbbDD5OSjKvx2VwX7bxlbfDCjMIyt2X0KY1zfzOy9861vFLL%2B62E9%2Ff1DWmOODCQXiA9jpJXvy1vGiKGTnHn7I2WIp8G1PwyK2LGZ%2BOAjAgv6RdR97cKNOJMqwHIma%2BcT87DgAMZFSiuehMQZ%2FwvZLcKf90zPWuq0N1Y0HWN%2F7P3RmWDQ9WuuGBoJ6lzb%2FO7OwraGBMk2MxyGN5odlsVoqxYAdG4%2BfBh6MUvUsIsSOT00AciTbNx4EHbPpKagLKvTcGMAQ7kc6ZQNpuqEke8%2FbLMI1enndgd9kIY0w%2B8hxz3%2BM%2Fiajes%2FbAV7EaNUDo3vlPm98LabZPEyX95S%2FBFZza%2BrleB0My3bbGrR1mcmNRoTsYfrZDKmlxi4KO2Os3vvesdTZBx0Fa9Kve1P8USnFTUnqXeMm1R0ahR8R%2FmsJi1JUS2NwOSJ0k5AxZmssezErQ9LoX7zRz3SGZqeqiUe72VmheuQemXkezaPdzgprY2mc0wJm0gI3LI9Yzq2uOEChIPlbKRWO%2BK51nZ%2BT%2B2Tm4fgkWOh7%2B%2FR1dddb9Xdkh1gzUKs3jNHnh5aYstnLqW%2Fsws4T%2BEdXY8RANMMZ9wbOzscoMKOv2MIGOqUB4WVnHGWsBj8RK7sLmhsdG31EQRirKay7%2F8yZa6YeEMtRSgyUMQaOJ6iEcH9ThYKECaGYINxSekZfJZsOyz6p2n%2FE2DogVj54WdkrFoWrmVakDKtDKBu3E%2B1r3jnNHa9dDXZEhfZNVHQ9THtg%2BJ5hxKkvil7S1ZDRm1ni8dr9Q7MiDG6iJ%2F7t2iXLiH%2FVmlgsV4c8Au5E3jKWG%2F2yzeo0OFhZuSC9&X-Amz-Signature=675a87c0f1f712b292807bd00b171018d2feead3ec18ea3a71abaf450b431673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V75VQRRK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjwYnVaDKWE0pAEj1HnAGtGg3%2FSEkLlx5EgPo5dUTwWAiB8yEqlpap1XpwvhI6rBVhY4PKUFOe6Kgl96d%2Fj4JAD5iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxC6g0OBGPayE2PW8KtwDX1mLzx6QasA3QaboId0%2FCAH6v8OIMFEOD3JD1FRkHtCb7e2rb7T2FGywXInEzSXjhj1X6pySIOReEZjHffB5uGp5sf3RGdYhPbyO15Y6jT1yuq8E5aMTqKrx2sQXkXqztppBgAr7epS2RTohPdWmnJTTg%2BfqvTdp9UmUaPU28%2FlB0QzW%2BKywJUufQ6GOkiWMu4x7xEQU03FjvtLf3AoZyQgIXif9F6UwnaYZ5%2F0Y%2FaIZBOGxFJGk6xradChMpX9F6OFgT6wqzyomrPg0Wv1ZiUELfnhlBg%2FlfJwKyaUNPx7GYsyMLx1ERz5whnKPYc12mdgsmzlMIlEcGUREYRrS5b7bTAE920rjzjZsaGRbUuT0v4mzH0mh25zFOr9x4pXgIScWOuiMD7MTLlX8hfIKflUVPpJR6Q4Vfjwm0zoDojkbapuiIG%2B%2BQ1QIbBrSIosmTRfE%2BxSBZJKwYl%2F0SAr5uOxU8%2FYzWURB7GTUy47bSvOjzRoOBtGUNo0yrzOdU5%2BPR6icUpKqzxkYHhfZSxiU%2Fm2gcb%2BJFjhBQi5IosJQvaeP75RjVi7kNgOF4YdnEtYj9fGppQ9SI%2B5up%2BADmNJBeyGzUQVBZ1MI0bJ53Xsm4MPbHHMsQs9Y2n0nGGMwyq%2FYwgY6pgGkmQvtFMlsdAWFervwzfsFhU4uJ7Ebdb023nzXRSE%2BO4Qh%2FPtIV9xNizGVaD7YbfwntWZpCZLqEFkDZMjI7GTiUKwRpHq%2BKeCfNWPr9zwLvdfU7TqoEpq9%2FMeoOBZHxebZsDZWr76%2BM%2BoDwGzSyhCIyBnak2I96ViAmSGVcimYcElPicT4oI3faR8Kuhk%2Fi81ZLw4VWuVz%2BPyPX5kEg36uSkP0ZfxH&X-Amz-Signature=e2de1cded07cd490b11dbe93d4ed3b64235b97ba53e1e12fc53c96f5dfa5cb3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
