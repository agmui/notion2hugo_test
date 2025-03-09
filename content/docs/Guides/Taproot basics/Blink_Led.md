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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP55GPB2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIG9rKl4BKo79XbMnYBeZYtTWdt3vB0NEGsUzQlp3UwWBAiA3187qC6wdXE5l769cYUxf5MtXz%2BI8Vl2TjlvDTDodVSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMnM%2Bf27tL8QGkJfF3KtwDuKCoh7t6PnSJbGtoQvTl8c4qRlVIODJXP4TmuOvsEgtHe7Awk5NQdiSi%2F09T%2BmkEzk8phlhOnYESb4%2FmL3Gb7BuCM%2F7%2BleYjFrG7IUBlNu7VayAO4J2nrgDm3Wtk0%2BT0u2joXWv50V4sK84ceyWtqqZBlOPboS4K3gEyfpqpuvb7RNnJXQY%2FfINCKMGKXWMApdGfabPAR3Pa1prjhprh2vJY77%2BBndg%2F8tkka6helL1PR4e%2BAO1qYz9HRvTCcUl8zYkmGrXkQG8z1q2cJXfy95rDxCXuMglPDicn0%2FTqeQbrWntvWkym372DgO4nxWNmXnTVHiNCvT117%2Fu3vA33KGN71p8mHPWEHjgK8ujzbg6GYmD%2BoUMMLGa9uC%2FSBysAxWYdDhJvF6wtQFOet0Eyojb1oSs7MxzUujqt5BYe9QAu9UC1DLcSpycjV4eGdYHyRfdXDNJqVawvhejhFhz6uvy6GI9lqQPbdF7wHmkfJXQDo2ecIw5%2BH%2FW%2Fr9iYmxQgA1j1cx6RCUeVrFVpPcOscCwu9eouFbmQQ06h0GKKGFL16uJISvlIKdjGMx0CwnERE6htAotYS1uWQFvSxG8oiIKuWAFv61ieP%2FI6Qxcs1OU0xNO%2F280x0QljVw8wtOu0vgY6pgEVPrhoygnhP5sT9S3Q3Y1i%2BbDfXUEgxcLZi%2FL7xsUcNwTM3TlLwqOOQH2DQMRlMJZDrGoaFMpMpao6EN6qKwPpzxRJDgMYkDn7VaUhFrCNkA%2B4scNVzkBq3GuDrIYiPiHJseO%2FDwJiy4SQ7v%2BcX2AgHbLcM8ug4Ke7XW51%2Fq0R5rr3UtRkTDuSGJnf616NIy8tdPp7E9WJc7tXAasOtoYBFu%2FHAt5c&X-Amz-Signature=baad770c01c43bd01b377bf000b2fc4339b4b111d59b05e1c57aa4c3fc939850&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM7Y4YZZ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCe%2FjRzPPkduWKtNhXOYGk%2Fw%2F6p5EhCJl%2Fd9R04tKoSEAIhAKKPVmCFPnC84hchfGsYDw7%2FRZ4IZf2thCIPwbv94%2FYOKv8DCHAQABoMNjM3NDIzMTgzODA1IgxqxiT7i019JSaiLpEq3AP3eC9FYJ%2FzzNFZBxx1DQ0wEeG%2BU24BOdEGsUGkHSuc%2FSOUKqUp9pO%2Bm8tAiFHkA0RF4lgSo4LvCTs%2FgYsTBTuMUohEEnrRLjcVoYeUs8BhxfooJfIxMuzNGCkvg6gmFK1MXZ8q875AnZn0j7UgpWF%2BzYkE7F4Maqeh%2FS1UgVEgcyCNofOk5fAksriFB4zbgCy0IMq0jOs4DqOOZl5DQKKv2HloNHa0ufQc496UIUjRCHPbSfoze3HdZfTaM%2FwFRMw6G658o6gNYq%2FHvwTlN6a9pMyStQnNBdt71WRJqMXGSQMdWTfapAOm8oLz%2BpLF1bKG4Wx9u35D0AU2hBMtaPiCtPOyeApxirb5YhQdxMKDN%2BNWn4kCWXU9BJK8qeh1HbaAQsQpzhO3Fn2g%2BwDF3Mi3scqAWZE6NSbxrMiNcxE4cEkD7rf4LESYsWQ52xxgWwsSyjjTlTC9yLChXqnPxd9S2b19FSdoRh11m9Eb8LpWqmBBUBUXhK9wMzL%2FhuFskww82vH8JKKrIp9chFaH9YlafTM45M1FCPRlZPvGrh9kddfklqvZB3qMIeCx%2BlMc6ZqzHr5rz8nx%2F4RehMnliRCUi7VZWRpf1Xvq8HuRhq19V9yOJqhTVLduLni1GDDF67S%2BBjqkAZIlX7oSYcMiFb5CHNUqMNrIWvyY%2BjmSofVzU0qMS4S3kMAKWXQLSDM8ywfPSWj3ygQ%2FDg4B2T5LT%2FCc24qHoy50QeaTNA6OOZ2y12nfsb6BK%2BYSZqVvF1o8dWxh4RXnKH%2B1yI%2BoVIp0eQ4d5RaahQ6GGyuja6TxDOekGgJBBYRhGfOXI34dTvYoblvpL2Hd1XcVxVv9FpBeWTNwxqj6TGL4TUHj&X-Amz-Signature=126e4125daac1571aab53563a5a4f3d6d034f4fb4529a16fe331fa265b69034f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
