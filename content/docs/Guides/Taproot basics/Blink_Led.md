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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7JQIFGC%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC62%2BMabnO9rwEnKxX8YipAHXRJdIjevbijqqkdLAjLuwIhAJs9xykHZTgZHruecoER1Caa2QDiFQ0pXl5zz5RvmFc%2FKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkVjO0FCHxq7qVmUEq3APu5Wzf1YYe3wa2wr0ThnAtzr3sHiIJXDquAzaj969HiEa%2FjL2pfBHAFsgkVUOnl8Sm%2F7zcCMp63rdHvRZCVtykPNpZTUKRZ3Bjaben5KOxUeZDF1Ri9AGmc4CZUpI0wuC1ctGhtR6cztmlt8lv7mjNyxFW19s%2Bowv4EI6oZ8%2FZ7LEus4MExsn1DUc0598ZGJQ4cJWvzWvG2eM%2FqnPC2bl5IvzLsyeQ%2FcZPECnwBRAkc0uLJLK4IhNuNte%2BakokCPEoa9akImyKsSCU5FSrx0jUO6vEKrw%2BLLOy1YYx87gq5993FQDdsua7b10HufXVl9l%2BCjzY%2FjnDDb7evJyZqIGJH3D%2BIvrpED4PhZV5wOwoCTw51IeEnU1UiF4k2V1N%2B9biBIm2GX9nsmln9NDbnbQQqI94HsFwgUXvdIaJ4fTPMnN%2FGRS6hSClZ8ajjboDZjqAGNJDk5eKqi%2FEZdvY68GnjM7y%2Bhok%2BBer6sMDKAVwGX9lJ%2BQQAmuYef%2F%2B24RPsVKspTk1BunfjmIS8B7T1G9SaeI1xUaXwRSq1iixDhCzvHJjiEwpkL%2BjaT%2FC95cMp95ngB4Fx1BfnSX26wI78Ton20TfY73cyeL258asfl4NBimF8syyI0TR6KFk7TC2mO68BjqkAaZSGgbIe%2BV3PuN%2BM7TrWqUx4fS9GEWqyOzVSKKv%2F0yTYrw0jZ0Tz5j%2BJ2F%2BNQNdw0W1RBAAU4T5KbNqQXru%2F0QHI6sghXKWJ9puTn2VmlJ%2B1TZVGGOdOYDf4RcIV%2BTJI9xHE9Y%2BxF83JasOm38zCeFAH5mUWuzodUiE6MBTfXDGuRGWAiFQQqmml5uwjEufQE3E%2BY%2BpS9sQ%2BQ%2Bi3Xc933EzEQC6&X-Amz-Signature=00c426106cf5b9be7e8df32a71c0d9da13dd8a7a1b7aaa8352be951e94788f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KUKDECA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHS54oiPhcEEuKNvovGRb9nywD1yHtBdPHkfjCRPUdhTAiBcbqu8WJkKq5v%2BZpj8CGzm5TFSqm3H%2FgGhbkIHHc%2FiLCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1doJ5GUEj%2BVMv7bTKtwDF5Mu7Q614%2B5hfrrQ%2BgiGJekj3HjB0wBGRYmn56boU53NxF%2FsLh6XP22AQdP2NVF48ZA7223Hg9ViN5dtX09nAoVzhXLNNuL2fL9o8WvLKEdyxxUGZ8lQcfYrSVE%2BK0bFDhvCotNSw8j3gSMATBC9f%2BHHs2jP1jOxhEUpyoH8O320CqmwabDA9Aowvdmpp4deDBdQKVTR39eGF7oLtR8I1ZcD4MgaBFtbC%2Bt3BXEAlLiOfbffvoimY5%2FpoyLXZT8i%2F1M2UZbtKu8eEN4PoPBXuntoPCS7RWP6fVE8%2FTXIX2Cpd4t4VPS2UKEnnLbKUrlPAAhaByj%2FO24miRqmEkzWW7hBg52r1NsBcd5FMLxKTMTRtYM6NGl7%2B%2BY82f0gX0Or9b%2FXYujkm2tWcXVbVRXvGAR12ryH%2BoGN614nYRKosf%2BAOJVhL4NyWmLSJeoZyHfbGb2mborCBdPNHkLt%2Fw65G1IfWtgKMNmXk00VjpxZLWfkepBw7Ja5zF6dz3Yud3UBRzxeRmYqaIfiMEPLsxviWj%2BJSsf9Rwp2rGJHSsYVt0N%2F4l8qooKVnhMAASwDMxm6yesgbe%2FBFTQEWp66deNKO0MPUKHRo6TrhJYEMecGzsi864ANMB0%2Bl0BtZRYw%2BJfuvAY6pgFAbJDw1TGdSQmPPfB0A9i2MXXeQ5Btys9ABshJEoGWb%2BBlbghmod0SgHq6Jwr33isqwmyOuxlvLqvRQY%2FxM%2BTkIme9klTWujlp6vUiqf%2B17a2RL%2FHXc7nryhcRkkwhd0VKZsUZQO4lpp4JeyJ9%2F35ZvsLE9KnHmdZwF54f7L2fG93Or98OwtOQYQL1KdPNZp1bSeg6vXtVoK%2FPhzZclGDWqzdNrpnx&X-Amz-Signature=d41d90c6997590ed6dbe1fd9d0de13e0dd81182089bd12c5299ba682a1f3d858&X-Amz-SignedHeaders=host&x-id=GetObject)

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
