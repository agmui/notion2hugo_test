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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYOE5LV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDOSQ1sHMf9M3yaAgh2zHR74G1Ro1oK1JVWZxlSwqlZBAIhAPbeJZGq9nRO1mytoG6%2Bym2%2FyUpA943ezQlWZj141KNxKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdvA%2FJ3Tl7DxSs4qQq3AMDJk7ppCy6adwxyXZ33zHmnfG0BtJfxT8QN5L4%2B2bfXbRiELvmSOaNfQt99S5ybJ%2BkadX2mSpDZ%2F%2FIn%2FNDBRf3Iza3CxVbclakbQA62KxOBhkk8uekAkx%2FPTX8YbqPtMqxBpWWSFHa%2BuHDeQMecDirhj6XHJLClI30QujwqLGm7m8Lv8g5lm7Q6n8%2BhbGggD5K6gZYqUMTDGub1IZAk3qJ4NZJNNBsqCJoVP3DfcGzAld19gfhWXxZesB3BGC6Y1G%2FePFV2Oiao0Xj3U2hG6M7bD7N4B%2BHM0mfipKizbnznBV0q5h0k3V2GWlBftf7sZ%2BbB3Y4h6k1GQTiD8gh1TV%2BJ8DmoAC1zRCxsfKrbvG6aYddg83qI4JZOaqzxjb8aXjE73lOuKexadjAO9Md79Odt3G%2FwvS85JfspYxOysq3DHqdRdrfzA4GVp%2F5oG5f%2FD1xFr2lQxhEXXUhW%2BnXqhbM5H8TEU6Qeg50jT6MFi93xImsRWYv%2B1UtKJYURcoALiEknr4R8rG%2B3EOzHJ%2FPMdep5x4Pd5Txohv5MqRb4QNQC2kqFeZnSk6Od9PfXcmJPf8xUKqONkrVG3105LSMJ2OJWSzJOx1aUqcU9oyvfMHp5X3gYYBfSer2rgopeDC5loTBBjqkARUQ%2FBAXJsEM3I3y%2FteiC206CBxKp5YRi9toeVxZKxCVMi3Fc%2Bwodwt29Keuc5gBiclDLXSNrOl9FGKbpMmVNIWH2P1S8LyuAbFviK6E1QWnj4qsvkVgwXlIedkgDNuW9H56vhAWax1O%2BYT9vb%2BkZ5DgqFEZYRy7A5bdvyuph0uJcQTiHOon3tB16c%2F9BuKwn6phec1slR9p7ukAYJCnZ4QmqYRw&X-Amz-Signature=75fe3f47016efc3278b5c7a467c4f2129aa49616fbee1a775c330417f9495d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGJN63Y%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIF17A0%2FhE0Y1PjtoDkyq8CHk2faMS7IOoYiyptkMdcrGAiAJ2a88K9m%2BmXxtejz1rOecvXhjZChJ2E3uNUB1MhzfkCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKxn18eTcoolZ9wGKtwDUyklNBwBffdNQRX24KWf%2BUGwxteZR0pozG%2FskO9Ydq5OJObMSmg7dboWEFeCuUqwdoMMTllnJz2WsOSdsNZCpbTWSBC6S4wj04mreg2Fyy5GHSlYRyqliqWnxNMvseKJ4HtDBuV3ZDLdhjShDdiUYv%2F4lsk3YNuWgsYYIh2%2BE%2F0ws3PS6F8Hmw1G414t%2Btaqgr3QgG8yIklT5QX10jSSh0XMFKw%2BOK757nSpkLbyBVzk1Gf1bMyMEb9tBs9rb%2Fas%2FoAJS9r%2FxAZdhKdIXyyHxliVPoni4Cj3Cz22MIlT%2FQqocPio8ZoldMosW5j678vv%2Bv7apLrkhpJXf49wZhzJR8EW%2FnbWVOERkm8Rvg0hvHDVdpL7HFkVceE8B2OzC71kL84oSaU%2FYt4lzKLbjkUaYAJ8jmuZBCYEjeq9r%2FCk22tbStZEDv4wHweYB6OzpG2VxEjnrIk%2F8595Fu5zSxazAnLa9AQtx07HgQiSvcONYZ8ORiFEbiGWa3MYEdBsTlLy61leb6GSqzCrvCS83zhZKSJZE%2BfyO0X%2Bnc%2BwWh1vuxSkBlMygHp3nC2m3U%2FbtisxZ7UXcDbCOMRq26Fe3CMZdfwCkFbMqUSSfz3BpTYCPQ61TJ%2Bx8pewukYxgwMw1JaEwQY6pgGe%2FZTZXh4h9qvUP7NmTQ7RyYQaxBlJxIZ%2BUBKQQhjCaKBVQkGdQ3DsB%2BXSJ49Gocc3FA68HmrcI%2FlFMDdMZNKLrBHFr%2FwCvq7ThzQCTgC1SHipyPxsOfIuiTrTMGaElJHFWKLxuSZde0AcfclexyNvn4B%2FSucHYGvY%2Bg2qMRSJSdEGgNEVcV%2BqH8OHRSMPnBX%2FjZVZ4mQamf6FXJwM16M5x4bzLgqM&X-Amz-Signature=128626d2bba395edabe61f5c603109e7c413bf56e4808ef0131128f5cc8bee65&X-Amz-SignedHeaders=host&x-id=GetObject)

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
