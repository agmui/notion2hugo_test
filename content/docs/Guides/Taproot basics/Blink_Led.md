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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIQTN4KC%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeALG%2BKBHptt2Er5%2BHu3wWDD7kGYbLhARKJ2ZBINffDAiAIFoNbtcExveCiFgds6e8VmfnkxHxVV5HQK3HEnmDSkiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkD5dOl9D2geqkbFkKtwDTkodqpYWd5bjxINJceRCwoLK48XtJbINYFcVg9o19V11sFgkh6dG483z4hH8N94jGHRuZugq4r9bqAwQ%2BfQitAHUDjlPz74vQ60Ac9jucfACOjzSh5rtnGSzR0c28wGCT%2BWjoF%2F6kQ4chZHByEkTC%2FkEBJXWVsy4j0x7irRdOxPtb9YdrsB5UruZPrzNiVWJ%2FEH3m3lj0UJSMZnmLdoXh1SgRPntAdcu%2Fmlo0D2KDmidkIjwy3yPl12sp95t3XhT9D2Bb3yfYNkzURGjF%2BA%2FdtNDbil9qBHI0LTHbD2aBNo2L8WIV0wnVtYhPxpdIBZ9vgREFi5qSB0RSBrY9h8l9xzFr9L%2BNJSpJn3Qniv6IReNANh0foYiYeGmHj%2FhdDhGpCB7MJ7OjYoMehqyv1I%2Fpn5Zzl9RGQUOJzZmeO1i0DuZUCEhq9TolZwP%2BT8%2BNGVXklpFSXLRgm40guegbbajSWOZO1XW4F2jfg8H3KZxhBGRDYRU7JyXh4I4SlKg2oucHMqS4NhydvujF7tyjka02QPgGBb8C%2FFkV4yvSl2OZe9rbUTzNjuGPSW828fjZvs329xjZxj1TB22GWN5QZ0uwgJofXR7iHsTkKLLU1ngsW4u28HIW7UOMRwKnxAwkYK%2BwwY6pgGAB4qvd1U%2FFxCC1yNMsrYXrASVayCzjTASj7swD3g7q7aA38mDRaHR67NyPGs2Hm6ESJe9eubpcUwj0m8dUurC%2FszfFHN0c473bhfSWpwHrmbanziETBsPz22lt8%2B0%2FD0wLBHPl7b%2FkwT7hNdn126oNlFf18THPPiytejG2pZUcURgOhi2HI50TwDWO9L6H37m90f7oaVUxRr2JPfvaX5LvgrNFKan&X-Amz-Signature=b25ba556537e4142d97af5e12ec87ffb9b31684a663590217db10a7508d5c146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQMZZVWW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGV5J1LBXO9A3wL2tBS4c5xqVL4Jn7bMQcG8hSrAt%2B9AiBTeuzBkbw6JyvDurppfXNQuulIkOaqBG6bOJKuAYPfZyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsXoe5tQO9Pg4jG%2BGKtwD1ulWTer4rp11WciJIlvj5X1WH15CF4KhklCnTZKLtKQgFujxuy8OPyGYRHcjEuAcoEQVXA%2FLNpAO2dXDQZzY%2BMq0MPIrUmIjHrDpOcamLZZS79Msrx6YuLNOBrT9guM86L6Bw12hAfl%2FgEmza2B%2BavlFei9FRuGlxf2NHvAbH3RPk1WwzxhsOVYfga0P%2Biz1z4PAvlHecFXMT8d%2F7nv5ypB30I3gHvv14XbPm1Sq3lUIrNU4R0zJV1%2BzuohH3tqQp%2BgtL07Dhl%2BfuMw9Mfhr3XIL0%2FjoP%2BMFjIKkf3ypWnzN4VmHOizIpsLj69gVdcMh8eZgdhGu%2B1mQrkCpEfJK6mNEDFC%2FTc%2BLvXgbMQIcOdNq%2BzUnbmcuZNU%2F2YQv9V5GHFAtdqyHxx8OM9yhuesGzBRABdKrX2zFTzZk6cuVJ9rzUeCrljRg3iVz%2FF1%2BC8zhsONYoCNmuyNQlRkUTlmXb01wVPtY5A43d0NBOIfD2BPMr93iDYXW2OfR3DTm8oO%2Fcq0Buc9TZTLnrp9%2FITm4yBSPX62L6Dh%2FluaUwwGN%2FqQiQ1QbN%2BOwdqX3CrlilDp0P%2BnzflMTgSW2erc1kIie8AVMrsIc8KJ2QPsr1BZa8G0vk1oAJPAMz%2FPztsowpIG%2BwwY6pgGKui8HLldw1zSEP%2FzwcoXMijCWn5GTUskg12OfwfKxZ0WxW5xRDkb%2B0bVJKcnVBG5ANbFD9a4aP0oreFbjaMFiH54fSUUzgl%2B1HUU9b7EpvCzeg9Clq9sHeCCmsH5AiuUKwYfG7T3QQptkHrc8Mazg1TH6R2XUns2UdbOdFGSm%2Ff0V0RXeYzTuX2RLtxmLwvQwl5BuwVfX95Qp4X9dtHBbI5v7nwo7&X-Amz-Signature=22b3ae222b27d25954986421f8b97fc4b063265192e5abcd854855df3e67e92d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
