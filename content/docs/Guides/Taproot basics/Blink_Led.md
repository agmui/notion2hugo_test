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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S4HOJA4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDTnW4zywYiiHiP1jTmPdoQkNbs9iUGf50wgnhIiXfGtQIhAN46EuZeSgPsEpnWZX3c2SZu6Y6oBF8B7Xmg6L5ygVilKv8DCEwQABoMNjM3NDIzMTgzODA1IgwIrtf6J1Rcz5hJZRYq3APgHs65%2F1TtPLX6O9zac%2FuD4mo4Zy68uzxBne%2FbS3Qy64qiWy3G54f7zCQI67upL4CQWVaoI6zE5jK1SL3oWGLl2HOXP13xdxGyZl3Gz%2B%2BZJYdVlk1eFKkxpFSOlhOxquarRinlXUJ6ekVHgFUDNcd%2F1BslPVcpASc6N1zLSZInJ54QBf%2B3BUroYNHV4P%2Bi1V%2BsJN2S105oaLi0UCV7URGqPKeIFD9kT24wVrlsjqg2xrjNYWIbd%2B6klAdUvacQW4A%2FmJltUnEqzY4iLOGpJrxr%2Bsb7KH4PCN48kADjR%2FUsGi85Ur2SanOgFSe2kZnPDqRAvEKxL76CH1bP1EQ9ov4iwgafAFudQgNoD719BXMAzQ0i7zfqGckNAHVAymHs8McOfSZQxcEv13KVm8%2Bke08rStjMBDmUlwireGCJvRKrmvC9h0ZVRfiyuZaSVp4HaEs%2FytH8vlTatw%2FwXVdN4m1Fyk84qPQEwXopHsoCYtluOB5O4NmxeT8jbGnzvWeke%2FRWwMp7J1ATOfY80R%2FsEz9fWftIhQ6taqwhtEhSjcS%2FGXRjvvXR0D1ovJIxZCgQq8gCjC9Kr18swW6AYyXoVJuLI9mWCRMVsqaYolQf7NAaBEu%2BNG%2Bjf6lfz3umdzC7qo%2FEBjqkAW7iQfhiFwDCZrl3LhsAILCs72Dx%2FiSib%2FkF%2FcT%2Bk036%2Fg%2BaSmNr8%2FNDuxjAJ0FkM2nNGR7qxRPwpVBIdL75KmMfVZCnaY1czbXrpjfCEM94Y0Y%2BvokiCLs3jMQ%2FPMgufV5IV%2B2gL7XAWzCiOHlKNxAydGWcwdQH1KwYNGkBD57WU%2BCuTT%2B8BvElqSY7ErLUMfAQ2uxJPwJfVt6tRyJ8wcUfAxQI&X-Amz-Signature=13182eea718346bb80677eef0077ff72154566652dba34a7667c86b8ec161e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZN7M4WO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCPyKy9BP21A1MLOKj5fQruggiFZ1mCRkQJZzgmXCv6bAIhALzG3iUEaJHwVrzi3PznNjCjuWaaUyxdYIe4GI%2Bdief5Kv8DCEwQABoMNjM3NDIzMTgzODA1Igw4npg4WdDSpi3OlXcq3AMOnEeiMfn0BTec%2FMOzr2n%2FnJaUdj3%2FL%2BG43pmvH14fJf9qz5Cr%2FleHYRYBFGNt2ieGij63Wg4gXFixudDOnHOTh3mB38ZNO1QecLsSScScJGLGILEPuGoPoKzlW2OlRVQxPbINqtyd1mH0bXaXLJvCXZEg8XLTMxPi0%2BnvY9UqCAt7fSSeRs7j%2BG2mXas8MLw7%2Bn4aPg5XGXRrwGBiN%2BfCQSQUJGVPIzHKblgsjChPjxczGUHo5Wwt%2FfE0lZ9XkuiikIMH3vZYPkcXq6xW6aHewqP8NFgqCQvGCj98g2%2F3LqLVOh%2BtMb0wvQxOv3wk1dtDqVEpAhKAbd6DYFPF0DEsrz0mvoD5jDlufB%2B3zaZXTDQozA021sEu1lucryiGXr11eoJKasZuyc5D%2Bp%2FsXwYmodVKGsIn8s5svBXMSdeQNw9CjwDj6WRQv8%2F6m56Lz04GyaIGnXJpB8eSBBQ3encQ7KkxTdOjY0uhcqBGXfoL%2BiA%2FSehTG9omcALxuPNGnEZZxdXkONMw9X3mFXLkdTZexrGQYJ%2FpxjyiNrj%2BsQE7xahuzlf4a0Sx4lQF1Y7QAiK%2FBkbY96F6WZNu3Cux8iwva8hMpDQy70MqYn8E%2BoMeWvcr8Ephpkaj80iGXDCcqo%2FEBjqkAc%2BhyGRGZ1r%2BmkFwPS8gFARBcnQfuznPHYiHNp%2FMA33J0MLkFAHPRuFHqa%2BveP8g1ErajH8UtqmWPh4kKeYD7iX5inK7zcJ6gx0LJTA9UCzH%2BkxfUao9LT5deNE7TvoYc4DvS1bO9sy1yMz9kJW8IEccOajScBZNBUmGnlgGu3Y%2FbYC4hKQWGw%2F5lCwhut9TLsyVY6DDICmp%2Fk1zCwYG1RFuYF7W&X-Amz-Signature=21305dd79039e21d00f855c8c17f6837700ee276026505812144f20e7f68b020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
