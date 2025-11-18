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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOA7ZPVY%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOL86jFn8q7BQZ2xJqiPnC3Mr8Nxc%2F2EIsiSc8KfpWEgIhAJ5kVS6NC8CQzx7Kru6Xul9AR7fi10z2MK%2FQSTpCB%2FgJKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Fsna6nBSQBXXSjoq3ANmFo%2B6Bz4EVM9MUrMqC%2F5LlLVIhjC6gIYA6hMSUhMQ%2FgZclS0e8iUqHW2edDFH4LJcIaqhE1SWEhTlKyDpYFOxApfwVUwRCrsgaNOX%2FxasYVBR43EOec%2FekddeZ271ViRco41zJb7yE5JppoQcSG2gTd7C3jKOsgy0f0ccyftBrnDXyv11aLMQYV936kCUtoUKQERAQXu0iRRx5YND1WxMeCH4UrIykMhsG8WOuuVPHdllkFM6UalaD0v3vrXV%2B93YLx%2By%2FtvNhC8GsRqDzNm%2BEl967w%2FDakAahb4NUi80BgYd2kzvtGHUvXzqdA5gO1E4bY5f5zaFJXGUChzg6O1HMBsWGAERNTB0rBsUx161SNjGx3WjCoSuVas%2BIWcUFduU6JlXt0R8KEq1%2BMnR0VGXOQNrhXxvB1vi7Uyd0Z5PktlqLO4K2RIr4lPdp4xVG2mc9tMJF27lL0fiGsZlxfq%2BTJ%2Bt0cqtWWrNwMx1lkZD82dA0tj667teLarCrWdzdAP7c5zfR6rIhm9OxurybulnZQPHnIM%2FiIN84m6BjV%2FUzf3vPQJeMy%2BLDLS3uvGkoSf4Q2%2B7qQmc3PYNtxV%2FEYzvm%2FIVA0oYVfqAHdaC3aOP5Dhd%2Bnnspk3%2BJ%2BRy4TCZme%2FIBjqkASF%2F8%2FX617ulKZY5Y3UYkRzfWSogsYcvzHLHa7c1NtLI7wyVHQxI5FZu18DfMrjm93sE3bUFc3HdGzewBc5jfOblnDQ1C%2Bo%2FdzeorlKYt4ywZqlaHncMCdJLt4LwnZ2MTMrh4T5XUnYKJSMYnXKC%2FT72lXXCQQeWEpNZaOSlY%2FKNE6mFq170KCOpFGaoEmRwlBZY8kz4PEgKWiEY3S3JbWdWX5zQ&X-Amz-Signature=dbaaccd5abb2694d56010666b11d318ff72826d04d22935369773c6e10538300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB5TODC6%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRcOuif%2FqVY16UONLR6feqq3NjTszdKnB9SZcQNy4KCAIhAIKVHxeF2vA0VNxg8LQ6K6akGhyoeoSLl9KSEONpUatwKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCthLCdCdsbTvB5j4q3APVVzSL2f%2Fhrjkp%2FVqWqgI%2FBGgkhOQ3Efpv0B6lBNKu1jSdRQ9KoX%2FbpOVgxrjyB4JrPAfqInKbCK%2B3yQU0lnoXxH0Afcbkn7JLqr53wHCV3TUik7HkNWjdBkV8H38T4aOWwYP8dRWbqUwRpwwQRxkIGPpqB5BA60eSYHb%2FB88orEvBrkPKis3AMyvbUrMsSKFv%2B%2Bjyc6a%2Bzs4SOw2wnuc1qKk13aES7YEb6RTIn8veT5AQMTFcD8U9sYyP9YJL1c5P%2FpMNID0Yi1w2jwHoAt6ok42cn9ERPeLkGU%2B7LdCHyJSQHNpN90wwjdEe4xa4YVxVP19RlqSx55GZExdLw9TrREbGbkIOFkYYReSp32W%2Fm14TcUoJvlMqcpInAKkpvnzYhEkGk6PR2rQJOG3lE5gIE9fitn7dsMd7Je9y0uM08W1Bdv9SFpUoJ1EtNYx79%2FfHl4TetZeITem%2FilzY5FA1AD%2BqwCBhN3ikQ74s%2FjcW4VyleyxOH9CfZ2HZhwPZPY9JgQ3UE%2FnNi9rZquFMBaY2D9rQ9ckbJ4K5iWMG1gXlJboqMo4HVf18lOjLtZBZxK%2FqyXNaGrzte2WTnWaa9RvFYJnsaWqu45PJIngj82rn7hcsvyQrcHw%2FXO1dSjDPmO%2FIBjqkAce9w6yblCrsP2%2BNdFXZGk7KMLPciY2rF9a0ZRo4IU4r8CIfSLTnYGMRHwIUCfCvqGo%2Fug8qeSdfmYzWD8%2Bq1jP1A2AQJeY1YFzPGDHVKGGhlbNZGYuJuW%2FNwcNXr0BMBQkuy75%2FUPLYte9QJ2Qu2WxcNzLBh2rG%2FZTmsgtuhxtjmLvGoHWjGgGSj5EqTVMKHBZacAVpebgCDSH4Jg752jhzUuO7&X-Amz-Signature=e233aabd52c8f584a48e5022c333e8f6bfe341e318ac4355192b01ed634f9b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
