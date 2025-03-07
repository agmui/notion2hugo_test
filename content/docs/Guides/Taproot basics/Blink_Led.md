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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPBK6Z5%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4rlD%2B%2BLjJCwWfSYmrt5vBiT%2FciKFSUvQ1C1HGT%2BZBsAiEArC%2BSfTR90R2838dA%2BWEg%2BB1Zwqk4NmQhzRoDFHnEA2Iq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOhWbY4ep0ujbfa4VyrcA0%2F6Cj1nv3y5fwPXUrVHKhdLEH8GPTgmo5RvEd%2BwBXaF7UfO%2FOvL%2FvBnal48wQVoHoV20Oe%2FbV20cf9%2BaFysjII6cFvDfoR6dqnMAw6KRBNpJJHMbm8FW7vt8GEYOHQ5msXusvE8AEjlBmzz54xu3SfYNbAJEvBGzHoicjTvwk46xGGlDv6ulPkSuZH%2F%2B7XCvBFIJgBY6xVYdcGo4KGOkOlUAq%2FatteuphbnTXASiQa6n4ITx%2B0yV3Hkm3NkSBlYgJPPkKBpcQa8VBvKgF5ePuGexay1%2FDG9AblpGWNZjFTuUJ8Uc0TIhAhIdZ8ov4w0cfCLXKyylfzAsbdxS9vk1cQJK3gsVL3nQmRQGxUa59TSjK6fP%2Bv7SS1kyv0Z9F8PihdxnN9z0%2Fz5ysbySKb9RJXwE27uHAoPF1%2BruQBwjwH58c7296iRNTJs5nF5wTL71oHb%2FSTrb5KwZUdOWh00FTryEioIQUc3vqKgqEsg2CbnG%2FucYaBFegjKGTqvxkxObwWz7bGSgy0M1dIhRISFt7uWQ%2B0c%2BJk6752ojIvJnJJnYIC89yiwPm%2F%2F%2BH5maM1AKCwPrNzMAnqmT81rfmee73hl%2B2ZkQSFkVXQ2WyZ0pyxr0pA1%2FlZ%2BMJ%2BfElYhMP%2Bmqr4GOqUBhPlkfOApYwk2%2B%2Bj1t0jnmV5vpoqcrsDHwjVnE%2FQ0JCmTM9GLBaz17zZrd4670daWziZMhZLQnYdhtFe3waY%2BEznmTCQ6Zxf8O2ApHPe1LdBx12VAroxtEae0HM8%2FKlnAI0ORhu1Az7XhHhKq4EdhxIekEee7il1NveWhnBXDDhD8oDKXhq5zLNnwQu4Jtpw1rYMF7f0RfF7MvZQgA4keepNms0B%2B&X-Amz-Signature=ed87c42140479f5c28afb32a3c5f5e9ef8a6468b177cc50092456ee8ea3caa06&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTHJFZGV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGH%2FO%2B8R2PrT8tSi1cOK%2B5nL1aexV6I%2Foed1J8BNFbzuAiEAvfUqmqJrv4tyqqYosbm2NbdR42Mq8j4Vhiq8ZPe7cQgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDtqkkE8fw7zeHBRPCrcA%2F%2FlWXT4%2BLJNv%2F2UjJMgWt3uiDRFNKqCKtEMbU94BOAPbW8lDljDX3gnaF9q%2F4zCfVyqOVXAxNHZE5sdMx%2F9TBDMdEF0%2FUPDYKxlHbDmarjZ298ldBY68yDaFtsKt0JzhYvHxwnVjz3E%2Bon6Ur0mu9zVYhfxHNrqsqA6ZBRx8j5NPvqKPuUVyzvh1MYGDngCwMa1qj0oaKLySwOMbHp9egW%2FuRNi1e6hUfIm%2FYavgIFMeLXXdk%2BbgSxUGjfi8GdswEC7rQMeOud7DBB9EJ6Ag%2BW8K8hbtYSeTkETDII0IyQpSW95lxSqgs6CpXibU%2FEfhaQAJPlXHaF8SDuNGLNcug7rXrmPBzknAoICuS4n5ErUAUMdcXuaz2rd2pjNo4v3rTomXGOGKXi2Czu3HdvXE%2B3H389P8ouss1pjX9Ce1LkYvB9aYo0LkLPvLO56rUr9NTeBDvhKQi0mwsT7K6KhjGtFRdGDma6utvHIFktrzBwgDC6kie03sRUHujbRIA7iC6fCNBpir3a5Yl0aGaBGXmg6W3mnZWjulbKc08pocILVAF3QQ9iJ%2FN6VTMY5KKXvLCVPHGcVTef%2BIHxMDYGdnRcT9owOg3WMYPvNMZwNzc1ynxSkVyBy%2FN9LIyOXMN%2Bnqr4GOqUBkdguISgRxPT0S3gv5ZRHLCYMhwQuNbBbZRjlgIjE71tFMSl3Ulrm6mgGoTNZ%2BPO692o1aczVbzDBKvl9w%2BkEi9XhJLvXAY5RtDdVDwySIyvwgPIEnkidyPIIsWct7sRPKsl41GnShisczyafGYuCDX1tBEW8d8cCv%2B%2Fav5t6EjdX6o3oxbkdNpn6jyCLY9NLAbN5VGG81cSmSOk1d8tqlEGOsXQJ&X-Amz-Signature=c4ccf174639484b6ca2f7f21ef0a3a7e0fa5400465398aa98d72d9265b1cecca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
