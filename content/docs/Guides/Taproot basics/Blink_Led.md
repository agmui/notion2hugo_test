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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWIIU2Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHh9yqIC9tZqNDREkrINZKsGiWK1%2BTBPhgcrjDkPNMcAiBaxDkLALhfvQsY8kifETtOLnu3OpoJSjimqjDhDjIyeyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTlu1j42IT3CIAlkKKtwDhyD6jTI4MNf5FeFw7Aj3bFTrKJ6IMYn%2FojzDUSTw3Yd23HEKYhMECCCgPHXCU5JKyHkmFOhH5602xzDGF6dtsr%2FUy8NLYTmbiJ6Blgez%2Fvqieuv0ikvrtS55ubsmvheqlvJpdTvx6aMcOgAxBlsiv%2FVPwwbqHfXbzc3rd4L77VgfCZEE6myjttg0kPf2kY8wwPuoSiEyS1nVoFchcX8sA%2BaxnGRkvB0ra6B7NazaWEJHsa4MMvBWEV%2FKADwdjHe8LV1%2F7aazAel8hfkHwgu9x4plhUp2hAjNUSuTBE%2FkXMjiv0Tq4iAv5c10aGUIu350kiZyS9K1F%2B49KI2Z4qceNBcIgYs1vYPhMB9f0AT0wRnH2V0wexTfFUSCU7ladjSMuB%2By3UOe3dUtIpqf%2FjLM7RNg7d5F3dx1CjDcUQ5vJgyletXdbKu9Cv3oTBrWCOdDwcnVQrLqWBACcpg5PuuYQNCJ6HwcFD5cHG1%2F3QW09%2BIkpGNkJosFfAKU4dzfXH7gsn33%2BQfktB48NK9lzl%2B5C%2FYMwjDJO%2FZaoZ%2BYy4yP7rkdtRliF2dJHe4G5QG0LqDl3hougZbwiq%2FMH8mZDEf2tFU%2FGsOHz%2Fo4IMVCKhhS3S%2BGNEhZPjhFTPpcZ6cw2s3AwwY6pgGGKMMloJop0ltfUDcKYR9DMHw0gF8ZMPgxaXwhAD%2BvBE8srANfVLD00F81S3u0yYDrbB6a7i750jO77Vrbob4GGqspKhmdzUbOgg84okEpMG3Ek2NX5X9m3loPAtyjvQjrKKqRne8M%2FTPlgURpv3WBlsl4PzbNq%2Bnk1G5%2F4HSvxQD7tBaYUnwHeJLLlurc%2FCeodx0iYWuNS2QO7zVfXjY619Rhp5JW&X-Amz-Signature=c239e38ce58835d2ee97cb6cdf4acb96d1d8d8592ea296a36224977e61b2bbc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NDI2GOJ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmqYz3hvp2ny34OXW0OmgWNmiQRqOOflIop9Mxhu0fqAiEAmedsMWo4uIFyeAyOMuJRH0fPUUoblXnNb1yCgu8O0l8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRS%2FIFjWaYSnT83yCrcAz6Hp5Jg5Kd7R7giNNlG%2FZ8uh%2BctKn01P01fAKsEwo%2FbkyXNkWlrWFzni%2Bm0NoyOj9v3fo%2B56XsH2JNczKRNsMhHUVSR6H2GuBOqQxdlLvqLL%2FZLotB2vl5HiI0yzKR1LdrKcBC%2BIIDCM2ckRIfImkPH3HH0WozoGvT8bMLumWYb8xW0dIdqvztLhGIHYJtyaRJUSzfCMn5wZTo5qBG0cj3ORZrvzjfnd8ng94VUNRqBXYhgS0BB1Tgd2GnuyD%2BY1z5Yqlij9TjHDIrvwHoyAAlMNqWNmkAHJHR8tvvRNfWPglSHp%2FKs7wAtd5jN1x6KkLPJUrhwGZzac7neHTdZdfDzJMJkuBf%2BjGfItD%2FFkVoP6gOrvnHW421XfICzYH21Msv1xsEUIHubV3cwqWqUaunWHGypdFh5rVMG3xDciu2OY%2BDKgGJC%2BdhhXvTnn9GqcKF6NO5MeQ8U9uc3PhNecurb5nJPAFFHLDTIbyW6hlgS10bZiqWUViLKKyoyY7Bt3fb6lbmXo6ZuHXBpTRO8q8lxkjvjUI7w%2B28RmcjJmxJJ9RWFoT0I1xRBVE1VKiDlId3cEojViVrBh2l1Ur71%2B%2BbXhGbzlsdLCmjQY9yn0ltVDYJGPR%2Bn5eahvh9VMJPNwMMGOqUB2PEGVKNEVkySYdWiTPKBE8B1qXDmA1%2Fg7lYKT%2BxYz2sHpelxkUfJvD1ZgA4BZJ4oFnZ4KHjtedp%2FKAZWy9RjHgv%2BXsG%2Bo5aldLtBO%2BTtKu7xFJ56RlAWk9DBpLVwkxzfHrdUiTnnImtPY0B6DgsuXGJzswNw94X5ClxDwMXeW35A3dXeGZEYt%2B2EOUXKTgJmpO8oRwxx3d62LbFtnhzs%2BKBlR1qb&X-Amz-Signature=64e775e542bb6cbcafb37ca1dfa3ed1d8253ac5225e961a9173a4305d86f9f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
