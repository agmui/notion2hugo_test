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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSVQ6HU3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjTDm6i8P0z%2FK9RpyeHE7hFTPlpufk4scXD%2BuFvmhn2AiBbEZAvp2VbuDj824G6GQHfZltEOU%2BjduhwQ5IL36AmIir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMB%2Bs%2FWqOSYRM3zG71KtwDLRJBcsh6C1PUmOEasLHRLzh0o12qXlp27JmYqS7ZpDupqBYHo%2BqhJ8d4YepUIy%2B81cTpYezJyyaNv99oU2N%2BKfHmUaXXljR9M8q46WP1YxVuBoAACxXH%2BJ2HNY%2BBJZRW3sK8W%2Bu5Mj25ew64%2FO9vLeTlARMX%2FGFOQO24T0iUBQYguP2cDJz67QvjZ6gP6aumJnPXZeclgg6MdrGxYvkeUsU6K1gjgkFk%2F4DOXDWBc68PxTZIuxSUkMrn8ivnKZBK%2B4vqTTQxd2HgLEsuxW%2BxMiuoN00m%2F3WG%2BFN4JoYp2Kac7axKc7xr3KcE8wjRV0WhgRyiSuOu%2FO9Y%2FBBjTRKYsGLvbcS2NOiF3mLo5wOEv7EqAawq3P2o5Q0t9oJwivwIefniwuJ5ZzH4LfeIVBfw%2FbsKTm3F2cP8mnxQKdJ0%2F%2B0ejwp1g31zLZ%2FG%2BSEiNHl3sbXBNR%2Feh5G2Jscz6XnbrZqrUlKYQZuGxf912YlYt2kBnXmAZQf53RmnUeK9UOD%2F0nerqanOYrOkUuCA3RVnsJuD8WZmXRl27q1jy3OCvKfS%2BR%2Bqv8BrgXUTXXxejJ8NiJYL%2BbyWcU4oKyxvYCrJhfWJScb5WVSZXexicJGx%2B8l4%2B1DaEh8GrblUJnEwwNyWvwY6pgFyqNggj70TNw7boCBvMjArluIpx6L8U6Y8t%2BJS%2BR3wAvmBhp2UIr%2Bt24Fu%2F63qTXnQ%2FKXWf9YUYsCLKGoKC5wsQdWUidLLA0n5XB5KCqrfeOk1u0RJbo%2BYJykZisoKCyQsdVauy8fSSodj0VQ4OQKnvjdStITAxpzMr3rc71I9DF%2BGM6f4ZV43Z8QkLcQB9JI39IA%2FrGWDl3sl6IieaLsB6gnhtmUJ&X-Amz-Signature=b8e330ed882295da3a784e9f8cee0577ad19a509d9bb22884c4ce8006a57e54d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBW42C7L%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDus4nimOlwxEypvmRJj3a2PhXSY5c9s4lk6ptLx4DHHAiEApU5VN1pIcM6h%2F0B48ZfEBqkbj7xYvxECEQGFNY4jkzQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDMgN9vki78wt7J8gzCrcAzLEgtTvCPpooL8F%2BiR36T4CnjkPKCvRvmNUbG4Eni0lPPgJZ%2FBf27PpftIrLC0aAaMdn8dpl2CrMNCsBjvGhLIFXOT8R%2FZck7Ix2P2ZYiPSIiLrsSlrsk%2BpABHuXT5Dhv%2F%2FzrlgcQFEUBJR2egBHueUgqd4NVNp9iGg2KH3A1TjcLo7BLVhE6V3Cjwb5d6RenkgsCr71d1XFhSS8TVgGIMve7F9tTaDeWGNXfnXIoYpWo9Dj6XkQaDeF%2BBBSk8nm3VAjl%2FI9MjbGYuYGjuNMUgQXd6JlOEd4khkentP5y9JWmpQw6IDjp%2Fxk%2B6GFlHZlNc6Qvk%2BkXqYVUTu3ABzZSZ2KtA9n6Go%2B9PieG2QF2fFELq3IBiN%2BMh5SZjbXr1qDoAvobQo%2FJf0ImDMUFPNUhZ69JHI1Dh5z08bvWlHdBXI8cHSMN2YJ5QQviN%2Big79GNTCE%2FiMD0yqlpwrdbw6YuL0MvVIdg9P2AhNrGop%2FI%2ByKlKf9liTeFImGWuoddeJmi3iKDcTkYOCl35RZjgEG29j4fglC8ql8NEZ6T%2BHvJWG9qfVQjVkIPF8q0dgFwheAsDcI9o7UR4KLntQ46QW4lW1A6hZ9MubzGymRyKEIpW49JhP90tO7m1tQGahMMfdlr8GOqUBS%2FoyJaVesdCjFDRF57M6hjtnhEU57TNf%2Fu57UVKDu13pgB0vbVHdAqShMjo0R4la8boOeuqgJRjkLJz2eftLW78wI6YxX355w6PbNQ7GIhVFoQvkxMQpvASKaVibT0So7CpFrwsbA%2FIyoy4O%2FflLsqX%2FgPDFxDyhSYPCu96KeNmppoIaP4iymlNVGPdwf5uGxpTsykxG3EqnMu%2BxulvpksKhSTOQ&X-Amz-Signature=36f9958aa36bd685a4add4594b7f9386712abdafa7809a1d3b4afa6ef47c5b08&X-Amz-SignedHeaders=host&x-id=GetObject)

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
