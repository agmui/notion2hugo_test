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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI4YE2AB%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICBG9Sgm3wtaDhmSN5LGDxb5m7aZ9SH%2BRUNV0loDI8EjAiEAzxqz%2Bn9cMjh2Yq5pqPZ%2B7q67%2FA2sr6xaCmoGRKAhKGMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwTO3SIh%2BErefR%2F1SrcA8%2FS3G0hwXSrbxMTB8Uq1R%2Fbg9MOCFGA%2BwU28e9O%2B3lnPFXfE3TcKZP681gEWiuwEBeLSm9qN2AoVm6CTBhgu5yvPl9KzUUwndkfcol9EBiE4szZVg10YWxYOUgbvBNyM1eD%2BDTqadMGm1H0gZWXaYuWxeJhBrOtFXjN5oTGBqD7X5ipL%2BNv%2FNq%2Fu0vsib1ThKhPUnQ71OhOU8%2BElRcPtiyVOrFKjeBtYKEk%2FEKsX2%2F%2BPOczs3YS%2BUAbpekeZ%2FtcnFucqU54jZ5O959Wi5iGrvcsZzFsimcMOEPNtLKHvQMKbU35SCVh3aB5Q%2B%2FwzngV4gZrifWBHAkKwBjsCK5WeTwBohUb4u%2Ba88ETvIPtfXfwYctcC5A0WIsx5J2VVOR0der4qfePVrZRCjwkzo568vmdgC5mno4YVF%2BEfoxdOTGE3Xt7eEPwkZfEKbCKnQeG7QAGnHn%2BwYpco3Yed1NBk7zQ8Thbfx%2BNbZ1OidXaPAiRYwkIZWtkzWgFM%2BEHfHlLDoTcvyb6c9%2BpG8BKrPkz2u2Wc%2Bnw1045rzDBPJBXQPvhosYo9RwGrrhMcwhdQL0PX7UJQB63tsCMTIoEMEKcfFfJCLJKoNSqAvohkX47XabF%2F%2FAUK8HBZh2BCBoEMMH6tL8GOqUBJSgrBFS38jHJyuoDodslUNIGMKjv7OFG9D9c9IW4AQYxtu2XfDx8fTYVBUQfk9MMb6GUUjn2RbZaY3ZOaarc7Vx5sfE8iU%2FfrAn0jpWBwelq774lGXTV7KKN0Fr9jLVFmwwk%2BDE8QJQGCe1FP6PDLVzCf6V6hUJirKNY1xGZf1LzYXxWHdMCeR5aBf6oNLV5jNe55Awl79XPLeeusaS5h2XI%2FbH7&X-Amz-Signature=b4371834064f667d1233a3c1b957f17a3fb56eba5c27ad110ab08175eb134114&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTBQRBI7%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEvP%2FB8%2B6i4x1tts2VVPaTD5GdecZmtPPALS4D8HmrvAAiAMmJp9pEyyV0BQJokS4Db4YVAztEJxBokM6lUf3yfzviqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUm7lnOAg56%2B%2BHa%2BNKtwDQhzUITc0xWHYRW3TXiyl9gQnAOJdWZ3NMevYGl4c5L15QSrKDTzTfLmWHv3%2Byf5BiLlVt8VC8zZvdc%2Fr18zdqdwpYUMiAu1IubIbzhsx8kuh5gNnWVbmGU9xv0nuGrsovceGN0c%2BDnuZgSMqd5ZlZP0ENjUrlg62zDd9pLDDSK7FMMUr0E%2BYm34qEFjxmBirteLU9A0DHnC9bNB1i9yvp8TCHko0HE5d8O%2Fav4yzosrYgmp%2Fl83yA9YoZLnraQjLAE86Z1MnDHk8Zw8mrVw6cXJt3lRMUwBNmE2tts0Xs0%2BH02hBRF8y4o2y8yII8HzJ1bvEW7EpjA%2FoCf3CPaF5FuB%2BpSMFktFTimlZ3pBpqFZ0GY%2FapF1Pc0H7nPH5753vIywFJu1579oVjdqERHhXrwmYovp1rJrrD7Y5hD8K7Atzt35LOM2oX%2BI8dDfk2KiqSo9eTYrETmY%2FNxmqsCLss2gHreaEfNq6WtC1Gvnc%2FohV%2F7mjbf9e%2F7KenrF2jnVZg%2Bncscgur3SDjePpVecplikohEfRoWD9dQ1JNGhmDSBDtG2lJK7n5oyCRK7T3%2B7IsA0YDz9n0CCM6LJ2HkAi%2FnfKd5u1jk2Li4GXcOo%2B2t2DRXIEItfi5s1px3cwlvu0vwY6pgH8YSK2DKdq%2Fd1RO%2BM1KZGzZsBcu%2Br3f0IPuWuutTqMVtgCBK%2FC5GceMykN%2FIiNDvy32PMScLN%2BYxvd54e7TFZBHALAbB1fzQee0f8JUvkRj86kh1C94uSpj0r9BkB1cKln1VRKL8yxCDt8Cy93kqbk0SkwLX%2Bq9KVj14sy72XcoCiSxWJQF28boRhxPKnyimgTZ0%2BRuN3e2n4NrXHjyuFU4RUaivG4&X-Amz-Signature=f96d44aec9a2aabe5b690051d3a7782d32360d5737b17a08363a136de92e60f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
