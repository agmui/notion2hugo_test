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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXUIAJG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbBuW9kU%2F6T%2FEGbIRceiVMCZqVtlVe6JGd%2FmeHAO4FxAiBzp%2BcaF3XEzhweOA%2FBamj8i9enZJA03k9YIGLoFdNyxCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML9Q3NOYr%2FP6yso6%2BKtwDHSmhuElK%2BGqi0u08UbsdXPwDBDzdYeQhFO5Ffg4zYAeZbm9478mE9SuKqiCqs6XkKLK%2BYQBXPiAIADQVqXeNdpdra2o67tGCnPU9yN%2BMozMeE0lz2R9P0QCNoArnIYftoi8PU%2BZ6UP9xi7dxOd9EJ%2FYWcDY17mudVitCNicLiHRiAQQqvygVr3AhmC9quyNiTFNk8Tf3meoDccw8gW%2F8ggbcjcZ0qL6fj0yPMRM%2BHvSEjqDyC3FONsYfHALpAoyFfezhXd7PMcIWmSjNWOi5T80pJR5X7C9QzkuvWp1Ki4MpgOZt0w15t86qj9KbiadO6BMDxa8Qoo62i4A8BdJiyJSfds0oHFcQ28B%2BVDXm01E9q9b2PV1LFRKi98ytQJC%2Bi07Jtrok8WG7jky4HuXNMVzUxjZoV2iffHI0jqEzeBHNZNVvJpwIjZ%2B7KrSjDwcfoc454zebX1%2BR2uOHx%2BHdcU9RVqcsmKvmlTISpbKMrg2j1aUY5W9oR3fF7R7TkOlTP3gqci0Sonnm%2Fu%2BmCW%2FpFVk7uKXVDmXP5VcVHRVYSTKCqKS7BXwKikWGUzHm8G8N8Qu6mfYWZQiQLeTE3T085s4Cc%2BIsBJ6OXFO%2BPx4ZSoA5FOxIcIulU8LensIw6I6kvQY6pgGbtAImR0tQQ2elE6UiYxH0k%2F4EjBfaxHBKSb1dOgEX37I9zvwWlF5mNcgcnuRCGV6KrNQ%2FoXaCpezxyPLI7a2NhvYRqcaHMuFeQx5I9%2BUYjN56ohFR7egF%2Bo7%2FNO3kfFxn5mgNqL05XzostRbqt9nLQ2JDlH%2BBihiDvQLdzHW3y7B55%2BwGtA%2Fd3UOPS%2F6tzAbyNjI0TzuQtmfbDxatMZ8C%2F13AulvB&X-Amz-Signature=f22c73b9f8c88813165dfe80c5ad4d22f4b30c271986515facb441b43cc2a323&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ND42QZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzuZmruUkeCxnBpaFEvJ3MwPRtx5J3JvUiw4Tr67NVmAIhAPsl4oH935O1xfgXCT3v%2BWlzpbQ7ksvOB7NjXtM1EmS8KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNU7XPJQ12WMe7WOYq3AMsR67UYFhR54QfRBxg5FA9%2FzMxOJp28GfeUjb3ubTsO7yJ4hf9m7Qy02ylWDfYCi07Aj5N1odcDL1Q0gh5Dt80p65kBQQy7T7ZlDFHG3qhvEz4oy%2F6E%2FGybHIHkNg%2FXQHM4EBygPOUfo1QjR%2FE42L6YnRts0qPAZJ8Rjm%2FR6n7jeyweCTfc%2BwE4LLtOxX3fidiwCV%2FYc%2F%2B5ZjonNdgnD9zebrP3BM1qrUEml5p6nvL0uIo%2FKxdSbT0MaDgEwb3L4LRACs%2BS6tCYe%2BZn6AAgBmYiOEiSCYkaFxtzeDHLRQHqu2hAaKMk6E3hAly5Q%2Fl9HmQ3zRuHB%2B%2Bo2cHrWXfDg3MCJLXKssSOHJk7sONrTxxCBIMRFCkcz9K3kjqgGdqo8dxaBfyLvOSpmXnlXKBvdhcFErohycsdSfa71uJrwIG%2Fm2Y%2FI0KkvHH3AHhQdyMp%2FL8QH9rQy2UhbCbdfFvr8nDKzNYwEaJWL7ItymrOJ9CWXFzRBygMQU6EiuljcxXMz1RPi4V0vHJliqvjIuTTrFEuddwGIEeJWMg3vjDLB%2BN5P6a4pfVf3aQiIbPB857%2BM4bcpvDEcvMAdt9t4qZmotIWtszbBS%2BeB%2BnFXPgzFPkPthcaczalbAkOCoDiDD5jqS9BjqkAVSjpwdnTGqQ0HLYSDlzIzCp4YtNLOdpKWUMV3%2BrVAPF2xt%2FC%2FJ%2FV8FiDxcNJYyKG%2Fsyx8w9KVkT7hyL%2FzemccJ5kOd0EAOcU2wcZgSZQlLB6cN%2Fz6zLVkF6Q4lie1%2F7pgyLKCDsFdk24%2FBqKn9f0A53b6xCy6skzA7CZoOeWEkERp5JKLoJENTUJV1NRBkNM91jlyoGr3NpDam3un0hFVkYlsmx&X-Amz-Signature=18eab12fa486b3bad89e2e90b95f6c25fcbf4dc48948bdf76151563581c4510b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
