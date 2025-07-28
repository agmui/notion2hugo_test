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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMKVCSWC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC5YnVZoDu8CF1YATLn2WxbMkCs5cjbKybyjklYxXlkDQIgWD4RkFCpBwVsgOAn7tmD5ywHu7PLaG9h5CyFNp4fZPIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEmH9fR1AiRryiCeyrcA3s90tZy%2BZdlXwcWqPKDOS%2BCKDEUMGXPV3zh9j9racBGCWmPCnTVZscYng7CBTAV9exHbVHJ8YQlmZEfYpParT9LIjl7jHcA2To0NhW4jI%2B2x%2Fvc3Sc6LQQELA5taoExAnaQ7pNlvLUZkZ4zzHZAwWUq7DhmNmAeeUClFf97O6gp3nnxWFLyR%2F3WQIM5QoN5%2Bd6xfEk6qCiyVCVWQZ18D%2Bt1%2FYhgKxFpQC82aVj5t%2FLOuw7ju9L7jB1XTkvlS88FG5iFjDsYkJ6Tg3gi7LAY3Yt5xIde1hwbLf6cx3aVIdE%2FMJbozJ7gIFtZrAEJwgwgbstAmbxLWr%2BGRhHy%2F%2B9O0HXdPf9%2FIUVNsUMlD7WKrsHZrnSvpWPSFdMdc7B0k0ozYETCeleEhQCz4oGKWVgPQvEw5uF4dFnX6sR7zuXaVqSEYDteei68%2F3CumwYrIMOAEZ7edhYmdORGU1Z0hiTMvb%2BjsuppSIB1wf4118J4QfLD4phYFLSgVpLn9%2FKCDwDDe500jCVfnjSqOLK0Oc1i40HumQD5uDU9%2BleQoINq4tCocqxeLlRih195z%2BLXoLOJ9zc%2Fd%2FTqiRONhgQaAc%2BXrDp7Y59lBzQUDOqEGG8aDePnrDGcws0ttRIyoMx%2BMLaTm8QGOqUBngWmargf%2F5ADZ8BLCuo8hzNKr6Q4%2FX%2BDAqZOcttu6lD3duGsz%2F40pEqGoFQ0iz7DCj3rUVKkd170TnLpoSC06wagHsAbKYa24ggTM2q6kett%2FIhPlgjVoDhblWRnQZvTTvzVdU5FcfwD8NEPQab9dUYV37LMToOnjPPlZvHHolFEl6x4CdKnEmBeF1ES4u%2FR7FO7HxuhSEvdBDwuvSSTRahfSWU8&X-Amz-Signature=e4a4ec3430ed7ab8080a07218ed42e8785d1c7613fe471095bdd2b95ca46d43d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZN7S3XA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDkxLk4nIhWxciiHk34SUGUPJ8Fdr%2FZtyidGLkomnN52gIhANzjMoBx%2BXfjYMJAotjXvfZQIMmM%2FQWEe8AYdhcTWX%2F6KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2O8TH0EHsV6eS%2BYQq3APm4roB%2FVPKN1oNc%2FKlqD%2BT3PumR6HgxBOl51d1VQWw91hXGPduvlYnccJO0z6D%2FHwTq%2FHBkRECwEslevEFNThFx7FNIWP%2BAKqBcz0HCZrzhJSB6992FGB%2FVABt8qKwxw4rWGqnKfkcedJnLGZ79KcMJIEdGPJj92C8RId5q5NhpaHU35kYxZMp6Mqo2hMQCgTDdHv6u0Ibn0Cir4094EKAkNr7zeV5SRV1%2FKZnV5STKQrZeyo7wRjC5TO64qwMpHiav6PhnoV0TiSNwrKEeFsFwmsj%2F7CgyBhGHRTzJOpyEqPzFUFmb1rbBamkCetgn4F11HmmEJJZQJ8k%2FqU05Kf5kkrJaZTELQjWKUVdjyXZ3tROp4Wu3y%2FChoOh6nMApU8c7H73VtBbr0wyTnnqPX7fL1bFmc%2BkvMsSBikTNu72JzthPKAy1BCg9Ow2iTo5vhSdmpqkDVb9SvUb%2Fha0yZ9%2BnBf2FeDf34ovSpTmoXtEyy8toERiSz0KcxvDIMROBE6Q5JVV1FrTb4VeIkV7OJlNMiKdr2XRpwLVMff9e%2FlqM7JukfJuEdclKUrqRXjCMv4bnShcxhqI8h30czUhXEetgwuC3LY9GFQdihBfgvWcdE5RowLjkWo6L2dxgzC0k5vEBjqkATpSyxqBdX83r9CJ2UZYl7vU853neqTTRrekBtR5C3%2Fzr%2BJbean3h4Ls0EhepUSvM0mQyoFCRxxqonVS%2BtdHGH7otnOIkqWNCcMTUDIFIOyc9t9vknzG944WLk3VIYNz2oDVKkCrXl1qv0X6uwWXVfKQmI9%2B72%2BioIUrfTvg%2Bgu4qetPXsL3eMzLhi8Coy4RMvFlXT3D6uVXy1rv2epgmS8tkyms&X-Amz-Signature=bb324a5356e906b535f5ca72b40fcfd91597b0d2bfce7e27f7e8b112eda4afe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
