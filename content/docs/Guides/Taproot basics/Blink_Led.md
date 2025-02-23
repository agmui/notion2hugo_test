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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPERFEI5%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7QuWCGYzeqWaN2Dw0LVQmeBiX5aDW%2BjlpyF0%2F6%2B58VQIhAJeFJ%2FZkhIakPFQv7aZ%2BD3ifH%2Fgobtu5XzlTQWOlvA93Kv8DCBUQABoMNjM3NDIzMTgzODA1IgxGo%2BiwHku8dpiSM1cq3AOwUqq43SW16C4%2BBRvYVpzPbylPwPtLn05y9bB%2FZQosIqfKICnJEigXuD0tRpeHImjp%2FaKa5NBHb9wTMHHQ%2F4s%2FWfmfkG%2BhZhnEoJ1gXuHqZJVAgEF4npKsfbaEVpTDtOiJiEFKampBJZKKl8lBA1fT7dDCcPxOO9N0NBuLD2wepzgtDn0TaKGsVe1fUjXgE69KBtGaOUr9BCCOBq17UAn7o4Spx9rotI9KDmz%2BPUOs1a9y3ho%2BsWlJgWodiegLgpDRtb2u3%2Fj7yQC3ZhnrKsV6gEuaCgwvF8J3wPD%2FPiB721KGXLVgVJrow0q3djol1Nq4NN%2BluQ2DZI04Ht1u0lUxxPKDpeWj67JyVnu8Mb8VA2cMvxvD4UO3Ddoa9WmD1mjNbQpQ1Suwj9adURGX8qDaDleesSX1sXGj3076LSDlM3W7f9M9ciR%2F%2Bl3fFSoGyfX79X762p2ZPDckk8PYof23MxPivQacIG2C63QW0kHID5H%2BG1AdwyJMh3IUU4tWBhrKC3QAJEma7DLPbsZAfLQP45DFF2JHCHcTzjwGlcYwJPK%2BK%2FbY99S%2BJnOGJyTXVpnBvFQMFhcmGRZmviElweiAhQDX2tBBxiDtQ7EqE9GqUOIl%2BC6JouNRuzzwlzCFmuy9BjqkAXlit6PateQuDnlLz80CDWPH0JoJGuTgSWQ%2FmCuvTxz7vAmXQnT%2BSyp8CFAk3FkmgyA867OccnfuQI7OdZCKEAN3m49eGuCkYwPXldUEYn0Nnwwluer1NWf%2FlzqpIPLVm0LX7ySiHmSkvy6hxZ6y%2BKDJQEhNcqAFLy1yozI9GRe0kZMblgJut6u%2BEJGwjEYpuMOLbvyXrnfEayeRAumZZGDRkta0&X-Amz-Signature=4a86906ba6e6a2107a3580c35d8ac8024d7169f69d121af30204be6b52c11926&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4KRDNXY%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLehdD5qJNuChErbYZHVakD7GnycD1N21JK2O7qiNl1wIhAIAF3KiKU2f%2F4YqM155pcPWlk%2FT4qUV%2BBbi41gPluYTPKv8DCBUQABoMNjM3NDIzMTgzODA1IgzeaN2NDubIRsskDksq3APLp9TiXZ6n73l6xNnJqJPS8kLaJ8QtuUnkQ9xtOr8LFCM8aJ%2FGvEDAjouF8RDmO77Tg7jrjcwfAU8a5kXnjAONvp707W8x%2FVB83Hut2e1pif68yfQgEsnuaWv1mE9neeIIcKCzYx3pE2qhdff5FoR5UNeomvo9sj9QZJngZZ0AEN0qfh6PnmjeCieU7iw9UEacckp%2B%2B37W5Q5bBvNlJ9lx7ofPP8L5%2FBGoRq6ODf51Wu71MoNLBL6wr9r%2BUjfIIFEKpnMmPlvSZwG0pIArTtx0S%2FKB3hogeV4Ye1gvuXMu9CSyq9NVv6oM9oP0i0W%2BNERLUjEfxnrL%2B88mDmMpjsU3QjfMMiL4MjrGawbzWUwRhe7JUOiXHGypvBmzTrmcTdokMIpLa59ae8wciiKzushdlk3mPLCxOVhIxe67iNYdFIN0vQdWDP3ORUf2G%2BUY%2BGl4kIhJ8wPV1hA263uL2JCxzxD6XJA3NwCyd8t6u%2F%2FSECYU0h7fXn8QUJCO8dAbZdHKUyWh0hvJpTJc%2B%2FOFoqoAt5tewtws8C02XIjucWMoc1kgd3QSL1X7hvc38myx73l8lrNSFbkJLdZd7PHuLveYqGpL8Um1TXpdnR0pVV%2FoJ%2BJ6CJoVILPBwI2FyTChjey9BjqkASDRgLIL%2BUQh%2FBuUGK33J6uKB%2FtFe7MsE%2BULTWfH099ix8O4%2BHk%2Bf3NcWlc5c4E0l9crRscV2W39mtKuQ92h27WfAOhsCNbXA5uICkD%2BqUphPcBVp3nOtkc%2FPh9AS%2BJg5wng9KdfAE%2F8pqpr8USB45orcF4uNucvh5UHhQmYod1jcOnpTCyEi8KYCZD5bVIPa9Bs7HJxiIXOFXUBh%2F22uuzIUM%2B6&X-Amz-Signature=46f4106368b6fe54a42ddbf444443a779227a98dc70bb7c69e0996446f33d21d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
