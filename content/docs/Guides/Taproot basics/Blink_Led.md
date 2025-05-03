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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4LIBVJN%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBGd5SWRsYFc9cP%2B4nj4RMj2gDVERnpK7Unvmqo7Gf8tAiBaN4RTL4wBXAyxqjjNTMt46VeXfniEk2Uv0B1i8gAklyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKbQlHMQe%2BNRheWycKtwD5sna9vz5GI32JynuEcKSostGUs48KfdT0ImPVAKUNgPiBQG7fGq6dfV7r2kUrdqIE9FKAXxI3hlrgpqUGcOkhUfj8m6%2BlHu%2Bnh2mRJKYvcN0uREAGSQihkucxWI%2BUFCokUeCcOC49IqyVrEKds7zXaRKUWbNCJPTgPR7knVSkv6YCvw9QsnRKQRHd56xKqgzRV4bQCfJ9g7nPVhWU%2B%2FZQe35XwSjhR4ItW%2B7BHJg%2F94NmYGygodjYO%2FIM07c7YUjnW%2F3MX2yqCRxA1rfhMFDhiSK4HIKKYeYReZNqyMr8%2B9myRkXLGMYEI1KGxBCvAZr1lN3Gtq2yuls9kSENuIsYXfyUhrrh6VoRDznuguYDBeVNswlJ7hJz9bh%2Bc17jRitUMAiYh3R8uZeUkk9GLjnDSjYTR9ZvESx2ypMyIkTRhit%2FIdCqFAA5aICmffmORT1A%2FOjePUOHqmMLv8oHerrQ6rjed3duLuqF05VDfqFAEudr0k7zGSbWf2pIH6DW7jbgrp6bLNp1Qy9q4cDvZZm2YMmTDa42ZbEJRBSt0fJON131JptUkeQyp%2BBt8z7ZkZMfEKtM3FS3A3ZOqvrv5VRGCZZKfE%2BdIVYJNjU8XyU8Utto2N9XJUOo7WM3Rww59rZwAY6pgH6lO0HBUbWEoS%2FesvUBbAfke3zeZPGCY3QETxaq4yG0sOwV8VeF%2BF5y0PIvLtChMh4AztZL1ybw9KqQhMGJZQMBHx5PxfIzHt5bIqtb3w8bgeTFfwVItyo%2BYyWenKUoWsD8NNV6NETJKmGPNZG00YLwyXuiNj0JJ1PFwkJ%2FXLF17LOfEuWYymUIdWKfViUHs0AVDysPMXZu2YrB0OZd4WUVBqyJNtw&X-Amz-Signature=18e407338f6019570acb58c44a77bbca76006aecb0d88767aa4387a39d46d153&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC672VB%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIBIPJRFM%2BT1mIBBf3MrCAZ8VjHF3zz%2FetKwIt%2FnlUIFnAiEAq8x%2Bw8JK7T11lqsEHt9oph7gQfM2AiTjUiJYVlif9SAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCAO2sdXBtnLyYN%2FSrcA46OlWZTHXJDey4LITcUTQvBMy1zZsEPBg7E2244fL80Jao0aBb47KpHYcv0menHH7gJC5lz4Eddq82XXg8I29WU4lrrUUpRrIrGCjcjxb7N7pn2FUsHGkmvz0COeTsSKUHLGoXwlh4yClcS7uOSUMCddzXEOwhHHA%2BrDh9cF%2FnU3A88d2S7fMYn%2Bg%2Fv8rhzQI3mo7pmHiOr0t%2B7zEZI2k%2Bf7PfuYojyTWgu1i3V%2BRHhA0YCH4CUWpeu%2FtLlIxsDYAyybkun0umQXWB4pb81t2Yd8FnaWNF%2FiIj6x5ELUbQjYvm6TO5A445pTy5qLmyrEYc%2BlXI0qxuStsNLcxh2yx1EXT2H8C%2FHrAdScgCOatXMEr0%2FL%2BXCh493YzWgKbDC4j0rMXoVukrDr3texul4pfFr1L5t0r37tuTMBvU1Ts%2FgS6L52Vw1NiD8G6W%2B5cvBjynqxrDuRTumr4vk3pavFM63MDZZVRiyoOsO6tVs0xc%2FdSYOwFVXLhKuETzOMtLf4PuxIX%2F4dOfJ2%2BfLYXckBNS%2FpNHg4GzP%2FqJMrIIIE50sG8nUUs7goG%2BLzAQdnXsExHGoFj4AUMFNRcRaapFWBEHvBwMFtcX%2F4%2FvFt9e4Fc6228I1sUDkxTTfq%2B78MMja2cAGOqUBzgsDboCjvRnMna9DzJsSY%2B6mtAdz8N4wR4uBtV8YFrm8zAKCe74jySonMdxYylnE8%2FA1kwAJUf6bLZenecfbfENvNLXn5q%2FXeT0nZWrXSWdQB4siERAMu3XNnf%2BknnM2XjRk6IvSg2en6GJyvKBHO%2Bnz7mdJRp406SuBccy2OpjpOM0nlmPVBtavu3l7W7bcjCxoxFxTNKiwme7zYRvOLhm9x26%2F&X-Amz-Signature=cf438db811fe2561529bff3cfe84e91fa4045e5365133f35c9bd17467e5d44c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
