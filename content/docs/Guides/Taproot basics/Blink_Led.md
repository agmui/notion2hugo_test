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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOLBXSO6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEy5oYE96h6NYem40F8%2Ba9uiWCgX5lN50TGPq8R3WxnAiEA7A3uH13l762jxtTjKwyvOT1wNR8JUUx0dAjVxG43%2BQMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObgMlUfXyddPCds7ircAzqfKglyJKPphtRyZS3pbSzcdk6wLEnE5V9uwijlRYEZj9%2FDWZSm4nHNK0BFTv34O%2BzmN%2BJOR%2BSPQIeAHBRhNLghu4IPoiYdds9k21XaN4HyqJYwD42yPhViBPDkCSED6PyJiW%2BEcMP0erTalaV%2Fh6hqm69wBu5nVaalgsJY6JMvQEPEeZYDcFg8O9DvCztQwmxyUq4Ygbx7JsDzsY5VU2mS4ScAGxfFOKz2Dr34ZGJP30rxRaNx7Zmiizvksi6yDgTt4eDbD1Qdw60ww5rgELIMQQsHxRkx1iAI%2BYwaupmow%2BEHQcqWCa94u%2Bh8a0lN17aDEQEBbQ2wYTBB7SLCZUqop7oCQqEzco0yMk5zhExGZJR69EYjiKER0la%2BibSc1NBxsR5t7kz6qux7I9vnzpEPcOMoQDBViG409%2BY3yHlq0MyrLNjnQkFVyrPOwBoxfX7llW9ObuhBygKFql7uDXKkWcFETXoy%2ByoHOcl0I2hDbE7t7L%2FSLJN3S%2FRHpokpP6hXhyl8G%2FS0oqLezW4PXZ69t75esrLWx98JtsozxBunpjQsh1BZnyJaUsx8FBRs8rQc%2BtcRYMAxAUbFUQ%2B1ZzC6L1qTr%2BMpi7R4vg1zgcWMLUAO0cm%2Fi7jG1bvPMJatsMEGOqUB%2BIY1T%2BdfZocg4YbD6N3gd0YJEKm054kU%2B%2FTNFqzy3luwshK2OSqvVzjh7LbGrK8kaArQID7TwmUas%2FxIXdXXXaFcbXibTHzWmf9wwLPDT3N%2BhxXRhatxQCzgyovN00jq2jZxqkRAPQfgPGqwSL2CLxH2K0Lt7pPzhhAYOhDL%2FLSEkoOMOOTRyUfdZ2LseksD0nm81iCLyLqkwJUKNAjbUsfDlsPu&X-Amz-Signature=e0fec977ac933c45e7139f1025dd97e725f28b4d981cf5f36b10892e52f875a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAF5W3CP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3T9UBvB4WXvpF8kSLRWY7LxsWEUE8CleRe1QNEy3RUAiB9E8%2Bg8I9vIMxUyvbv8cnculVeD0YhQcNRr0k9tfW78iqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj9BTwGyBu20LW%2F4hKtwD04UxpjPLaLiJ4%2FJyAes%2FWWEFpOj59iYPXvqRHLon4rM6lWTkB7M7%2FSqf88DoFZnqf92qij3nLwX57g493tENubGIKvP3TtSzPkvtMVJCebTMqBFRlqK1UMpBfHHEmKHxNksBDfVQQHs%2FntxZ1KP39rTOq%2BOnO8K8wID%2F%2Bj7SelHkpOQjvSpFlUrPK69%2FicNzgOi0OwRlrdwBlMisPOiAGQwZasH91RBGVvMZjFXbr3dPr4AiB30%2BRXBNnRMxG7vDTkHNAj79AraJC4Osj%2FTAG6DjPpEaHKpYB5icM8tx9a1%2BfrG0OKQbAxii%2BulFfjLVOxapAK8s04T%2FQcY%2BMIxgO1B03aWn%2FMMBocuoxvHSPu0FysmpQDQBYmGYzjRfzDdLvNBrIePbfRZUgElXy5JdER9RKIuUfO035qo0RWunWywwT3hGBRG4wTudEb1FGd5JgGRXeUxG5F2bQQGfdtrL%2BZOI%2FsOToI1qgytjpVX0F3o0WKxOPbKfVOdrfdYpP1fjepcP2gDLyLWM2XxdfCiBwo4DYCr1VYf5ReVectX7ne2RlGwq9mIH0yT4tfW1SEtcjCF2ZawWP4p2Efx3S6vQdC3D41Wjs1E%2FWsCcYk70Tn4fFpCuByEGo4Dwwlgww6ywwQY6pgEJg6GZMfIvxo%2FXHNpVtwJWnzLYX6ldElw8oL7e8ONNrz0TflUeTZjUsRdcz%2B5Ldj6KlEKIBxoFbvcNFEedMwI8vZ3OsjxV6QB%2BAjye%2BIhxpgJk%2F1QJqqmE0a0quCx7n%2BOfdq5rTdEd%2BY%2F2GcH2ga2jpOvkIcyECTg0Kmu6Ezm3dHNEZia6zLrIe7MpMffJkla74AaorUpi1fzMul4AhrygBA7e22Xa&X-Amz-Signature=538f65f5bd597dc51b775bc3c6a843ebe1ad9c875968cef22dfa2ff5b8e65873&X-Amz-SignedHeaders=host&x-id=GetObject)

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
