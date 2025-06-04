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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CKPTE4X%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCID1A4WiEBjnUC1k4For7usaLi%2FTuLfIAADgtdff8j1EnAiA2GRzOqjeHxQWz3%2BO1HXJDuH651J%2F324zCXx4V0Fq7%2BCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMj79lM177obOWXmITKtwDeIX8Ao0zMbWqDgaHKz%2FC9KzNPmjYW9iQPjVXthH6k2F7vih330Q8QC6PN5V0gwdHD78cR4qKnUzB18GVT7paqouymxtQUaV3ruV%2F2FNuZW%2BWH4xOmtkgXVt0gRK%2FTIDOpSwFD6s9N2dzgqz0tWVSZjXkijYRcpjUB7CYOyRsOdcOSMV3OVA%2BgoF9WsyoZ3lopIzHibXMpfWsEoHgg0c5%2Bf7qjhs91JFPWaRusQvzozrmOFjqEHOKC0etUIaNFeRHnpIJObH1KqL3QojLvqRuc67F6dRB1jgJHKu5xnQeJQmeEmkLLGpDveq%2FianqsvBbCPLOO1fZIYJwSKwjoG9Y%2FmhlqeJLAfy1nVlyL%2BetAFaU4vezsG0oeaM4ZbJU60hfEH1s%2FTzufAgG%2BNgUGPB2d8%2BcmlQ%2BxRsENzRV7C%2FvQybSS8dui7n%2BoNJ9K7Uh9h79pBJAdVsogiCXI%2B%2FrGGt9npcSs%2BYiXXkXVaD8n%2BM8rug3POOxU3JFHdP4Bk%2FpNCscK8gWPibDf9m%2FNNeWNtHHLSiUqb7F6H8YZoDcEg54cnDbO8ogurizuUZDIWeWxzn44l2GjSMmYlU%2F9xPw1zVcizM2DPM529mE7hInMAys1nUt0fUai%2F0HoIDrD5Awh4eCwgY6pgFLGRqGfJ5iyeGXsdINQpbmpLmO2WJPz2qGLTOhXNYDp63bFjIfkNKhHxaOxNfXWIdf95O6UGCeKn8EsryUwfw%2BQ%2BGmddb7PsiA5JP7jyM1eZ8XP%2Fzl6naTAY7NATtsPVtV%2BPpIWSc4IRusjYnpMNT6wupjnTg1VjmypqNwb5LHPNQpWjfJKik2u6Iux0RgUsUN8WuJ5OCEMr%2B9hznKe9eJx2u3uMPW&X-Amz-Signature=aa46ef29a0e3218394fb82102bde70b749fd86136416b96f3bf1294b093de89f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKDTQ63C%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBN2lxLqfkziR78m9fJgFA4DnQ3fE1iQ045fw%2FfDVl4VAiAYLc2e131p%2B2t2Cf2grfXz0yBQoznrER9%2FTzIdXagTUir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMfXujjW1gU076deMTKtwDrSO2uqJjuoQk1Iz%2BwDehT9CO5DP%2FM0lyScahI1A8xtvuyjebVOvnfd8g5f9a64PMQ2ItHijlTxvJxcyq%2BQrBNOgdsdPMWRMMLdKA7FER9yU9YV%2BUKYg093Fh16ON3uxMha9ilngymR68F8ftQp1kY032ReswWFKn9NK%2BuzljXRah4t5YnZljPY2Ebr%2FEGGbLWzEbbQgoe0o0s4ExhdDov%2BmEts5mPNUmaw8u9j2DErQAmTIhWXZRK430CqbQZ19w9WIQb20hQwT5oaYfe5OKIyl%2BfCZbECqe5i7l%2FfX9pHmt22IP3AV6Z%2FvIF2hT3ZdHcr2i2hc15aFsNlmy8s1eBRd%2B732tmu%2Fpk9pM66SHeWdt%2F2F5nQV%2FHWCvMN6LChQfUiVFAP1KJhj9D%2FVqW5%2FIdGXZIuQUaBYKnJNgjx%2BN9rMy1uTCX53YCSeESBMJyM7I5xRN5NNZN4wsrsxAYgg6K03QNzc9f%2F98QI9u8ZhN65%2FMlMnE%2Bl7cJflG0iimKzDHbHdLTTTaJ5ynk2Un9byVBxrhAhVjuVhDC3fKLPHyVJyGmnp1LgqCdKrfSaF5J1HcFk21q7ndayzluPqhyUHkAyuj4dURhEspjkn66keMrw34Hej9std1iwkmCz4w9YaCwgY6pgF%2BxcW6kZrDJdNE%2FF%2BLTp560qF1QYWCAz1aiE3VwYMzEZnJqOSP7Yq3o1%2BdfyPrkZVYdLnUoStkMC%2BIt6DqjMJF5V1KoScqQXRIjOZzNJR%2B0B7F%2BAAMLAvNIsherrnqzZCWvmgKLM9sxRXxIoXC7PrUcFBs%2FBlY0ZVPN52Lhzbsboy2UXHwjlz2aFcqi%2FqSxGYcf7p5%2Fi83xnJFlR0j%2B63mHrBeQehR&X-Amz-Signature=15e87d2d9e2b6356ee37ff1471647741c84664335ca81a039eefb2440c486f00&X-Amz-SignedHeaders=host&x-id=GetObject)

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
