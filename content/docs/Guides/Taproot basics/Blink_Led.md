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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H2CLVAF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWs5UFau3m1tPhFCJqXQd%2BCTjmZzZpYDig76c3GunZyQIgYwZJikZ5AtwQXt7cx1pYNqRrhka3E9vfgLLZ9Gp%2Bl2kq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOn46xJrO8oQecSL6ircA4h6IeTAO7Quekj%2Fr1cghcaaS%2BDzjfJvaE0eBZE8TmndD%2FRdpeYLfnI8h2qvdQh9ACLN9EnnAN9FL%2FdDnguwDbJWqfiM6TEIgF4q5b8%2FFXxx5hjQbNfizLUhV5l1WnmHynm45cmk8t5nStyeSJIDc0TPhdT13%2B4KTm3g52MvoT8nOsg4vfrIW6HRrMFXp6KX0oxeoBjXgfqaUgqabsMl9KNMtlZvc%2FflRcyBQdO7Jy%2FIyEkNwRCoqkD%2BMhTZ7%2BqcZNqD1YKbhi%2FsAdGL5OOfl%2B9QEHRMrSyo95f4UU0GVNG%2Bxyq5j3YEfF%2FXF7JihXbXg35uw4Lm7c%2Fjj0JM%2FWnm%2BpIIfCPPl6qw82bAwoyk3Xs7jjfIWds2ukwa1PDr26YI4pMxkJxuEIiJgsp4PgYDvDAzQ0egATjleuJC2ZZbMFot66F7vG2c6xtWHQlMLdo0GCXaFL07FXbsxclxkTPsAuTEnzq5czgz3%2By3uMBJmiGMv2R0Jka3xS%2BjYA4BK%2Fw5Q9EqZfvXn9e98ft7RQE4a9oGrYQReUuTKFbYqJ%2BE5PpMtLPRdPByqSmb85GWg7JavdqVp4rM94YNOxFIw6rMIdpJecoXzI%2FXlcQGIKnxrcvjGjWTAkLhSq0%2FxZllMPfi174GOqUBXI1Gn1B9Ww8zHaiGfRVcP3TP13j0sLjfS356pNBQJeBoJ5ut7GD9E4eRW8PnYYaJZpNOSFnhsT5ZWNntkF5TzIIQJqFzUrQ6qw0TMd7csZrhSWs6AYlzWQMd17B52LKVWBxELaxIZxAEXzmJzXPOEppyZShGoiZTFUvX5wXmQNrOgjLb03OEz3Zezk8LFCkEdBbbIiWsohTwj%2FuhP1lSl4gYWloE&X-Amz-Signature=bd9d5fe95675cdf1a6974c89e1b406d2afed17236e566a1c0d38195c5e31f547&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XUF5P54%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFAHOR0j%2B3aN7tP1DI197OOHAovcNZgKjx7O4BfezxSAiAwti6AxSevC%2BwqmrsxHBcpSEpK%2BJLt9DxCwqBBmQR0NSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMGDDQqxkhfcO2PkeqKtwDjGn5SdnBqkyN9zhS4BPujPq%2FWEQYj07qsJLpdmQz%2BHyP8p30yXv2NdC2fPF86T1bbsI6864noI8CFMzIplm7w5T9WqSAZfRPdY%2BWn%2FRXol0YbGlyY5tZVqXe7iH78zVbt9ZRFQt%2FzFWDakLYZhzfcEyFkPrtKgCqhZ7QwZZETin%2BY%2BaEmHIbBS%2FgHFwGktWJhFiUosNvcBrK1bTus9W%2BQKCFNC2lBvRo1Ax0Fcj5Dk5h%2FTScWUcgKwJTWxf5QmF%2BJSJZDoIpFkUypaezNbFZt%2Frf5NTLvoj9B5Cd2%2FAXiqGzWMcsVJwf%2Bv360Vg64dni9GNmx484mF7JZKxDC%2BMeZ9F%2Fmd8bnShWETMph57F4UjIqSXxkq9ntKuxEzBpOwlyhlqTNMcJA1xpGNJwnH2eHZ4e%2F0e4CcTmbHgBQHJLuicCS3VCtNYSOKBlwIGniCQMVQ0%2BvJRjY8t6OArOtOnQ8K7w0I4jaczsJIAz9D%2F47V8F60rLCtswJ8ImBWoVkzGadqyKOZ2MwKZusAIMA5%2BYD7b3E8mUq4cu%2BPvqDbnxHS7ppruQPTMUPn4RL0XLMtd6RKGSN%2BItwMfBYJs5duJPjVVfTTRSa5%2Fwin7HxnWCO7MIy6kaSmwOXff9lKEw7%2BLXvgY6pgFolQ2AOWuv4k%2FtdeHNdbEJrItg%2Fe5Fj8hgTe1zAg19GUwDTyCin1hUip1lAVDnWUVfW75li4pJ6%2FzVb0WEWV0aUTfeHjHbrGHJ7D0wHj3v3Q8bJMfbZMu4FBTpHnXXJuDehwa%2FmC8I2LY%2F%2FDpBGlcgaBnVXra0%2BYMFAqMAkH2yPCHb%2FFgLeqcjtiqx6se9df62xZRMDo7iETkMzDRqSHRjWG7B5Ngn&X-Amz-Signature=9f676a7e6c6d0b7303624b445b837565632d920517c6fba8fe063d3e84d5e0ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
