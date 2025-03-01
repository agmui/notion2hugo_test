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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP6MTY6Z%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGSjRqFeoaH2mUOi7mTdME8HbxG%2F%2BOYHAPlOJ9rLWKLVAiBYtjy41ApJbsFD1fvpGkN%2Bx5tS1r6OdYJnwWIkBKQkliqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIYp9iYhZhsi%2B1C2xKtwDuJZZpkeU1BCxfRoPTCjDrJNp3GsLhLMHavQJfQC4zHf9d3ODCJaSxnjB77TK%2BgmuZHJV3D5HmK9ss2rq1NyYFJyADrAYYBpYSkc0npVtPhfJBXxtoejvOCmJFIISJ9sC6lpEbpvz0uAAkSTvRKFHPC%2FPsjM33s9fXFzqO1py8FkST%2BXT3eHQ8zmhbOufKxoKt%2Fc%2F4voA7C4QgQKWCojzN9w5BaiYzSWa%2BLCoJPz7fEfCVERUcyhtWAD5DKOdoOesqZ0WDxoup4WBWxoUyzi05Nl718nWIWSc9xGm%2F4NxiA1QpjYIxEhnYARbWC2amv4Vcem%2BOrejTI5rky%2B2BTGC2Lcn9L48Jg9fIjkYxqA5cAm%2F%2Fwu%2Fmsvtx3PWZAVSzRcndA6BQoPDc5URVuR4fBBgw0xMw%2Fl9YaAEpk3oeypgHmBJhZofSxkgwx6kJ7MIz8YK1VNfGgpzvYXb0F2mGsVZhGv6lm5YqZirMS%2BGpn1dsNilq%2FziqavLppAPqp7g3beWt3y4ZNkBh7zJEVnRGMCyEabndb0lTI2sq8tp5jMqvRXTuxAFrr2DoRdGbk7xevzjDSK7Q2DQcvaKvWOCiXPPvNX6OJckUW7uRhewm4Y%2FXRGIRGNv1xojtk44rxcwiLqLvgY6pgGiKTpldh%2FcPgKuKhJEUmlNRUQErj6p853iAfWMjrsOm3FMN8RI0lv3SARsSWj0gQcGpFqWBVxe87tRoEf7rIbMFm6D5LUgq3lMegFhO%2BFBKV8ywBmFtTBqzGhLvbjdg1dw7lie%2BRMbRbYenhPDpQfSeCQBEY0tr23DrRN27x%2FBFkXHZHEGTyI9AlKXw%2FfVDMNm6rpxaeuaJVURaYYD3psTEwdBLd07&X-Amz-Signature=82a7204f4e37f577f270029912c2e10992b1a8708e93737209b0adc039e0d81c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SDXFS5%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGfLFO4qpe6kKJoF58MNYH7SM5r1D25xq847g6HUY76cAiBOi470mCo9VhJS6dbqkPh2OGgsdYhBwfbq2RKCzTZluyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCIP8R%2BI8XiW8gaw4KtwDI95eix2jjDUnRlrWL7RTd3n4qswIZppeekHWb6rOHeulat2CST20uCNBMcobJgPbEMxCsD%2FXBUQk333QXNbz2W6fPkKS47TEWFh%2BkA4mhZwdDzW1P0RN2ZZObYAX7luPTA44zSXCk2Wt7p%2FLQQtO3QTR0bg%2BM15V%2BzWgNOuIDzEdhEpVquvbA6NeaxoTpIIiylY08MhXuw%2Ft3bITnh9zwtwopW3x%2F7SZWlnn0kz8ZmqHUAyw38sGATnsqkJgQg4O%2FtjtRlWz2iSm6xn9e7qrGNcGMngyIyH4g2Kn2uqqSi0TM%2FQA0zj5Dj1R4fUymxL5Qi8IWhkQefFr5RFBvNjeY8BNP7Wc2bjljTNwrtjn6f2UUlyqPjQwAxv66DGXKXWqxNdVvCF0nPUUSyMqbB7RaNRhMSN215XasO5whWZKP2NHsUfPsxBdbvVLbtuCIiboSJfah1bpoUSTukWcLueEAuvUebFvfmbOb5GV1twhaimLF02A3M%2Fe2KopoaQCCxQVBLUX0KAlnqSzMIJcV8skn0QdhPrRUfsaY3WPrrizy6Fa3ZhL7yuiJOKujvy%2Fmnl4YEOHcHxLlh6jHUn0qiNYVC62k9ZhEZGdTxFeMovbKnNoc7hLTYpdxr8HJhswm7qLvgY6pgFRjZcRGusTQ3Ess0AmuNpL43CDgVjh5aZ6j338ZMJ0%2FEOk9uN21kPFOmF2UJ7%2FhQDodq9iqvgQjtfXER8Fi%2BeFijx2Qbc9kZS0ZSgCCPKblFDMHRxicHWZwqtyWJyCSx2gfQrSb43HCY4xaOoxjk9anj06VlZpRDyuLz%2B4SoEls0tRNbGe6ICppgrkD9ItGzKGe%2FuDa1L4Njd29IPowIidM21PHdXJ&X-Amz-Signature=2c05b9e27ef29b4a603e1c9118c54d6bf8c5314ca62e3ca1311c5e5aa7fcfdd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
