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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NEGTHRN%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiJrgVV11RjgBlojULCsVysVnctlALku0yxgW8%2BqBwvAiEAxVwV4Qp%2F3pO6qKwpnmhQXiVXzXaR4LRmaQGZVVdG9DcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpgkNpNXK5j%2Fjr4dircAxpSojyBSJNqWaIM7yVKcDDnLwfUgELDS7dqClRKZtQxLNyIRg%2FH3qUj1PxMc4tOmSu5JDlzU%2Bx151R313NzNJ1qzjlN8pVk4lIcwAV%2B7Vepw926cL9jSvISY2Okn%2F7dK3eiW%2Fih778MJeATtdaDR1mjO7knd0TFDBU33Nix1BhJ69A8NhtxZUn9E41Qqog1Sl0Hmzvq2QjTW4btXEegioYII82RI1F%2FomVBrCXAKGVoPyDIPdPhPdsWcNB1xe%2Bfyhl6tttQhVbPduyA1Rl14qZnn8dZ%2FNONPjUXrxeJZMdu%2BVvBuB9R1o7mx32sQHzRAYhzGTWgHdY7kclxx%2BHz%2F2OP3QTiZLZzXuaEO7%2FRCxOz9p59xXYA%2F8IQjOUYQrghGhTNKFVeEOPygH2mV1ytH6uzxy0BVTz8ZZ9G%2FLASEhBR%2FHoQhIPtp%2BMhYkrxTKJjW6lArq0vrtypr50QCa3cNIH%2B2m7kv%2BuJyPwv5tJ3UfDOs74w00Y5Qkd7j9tHaSRMVRfyxYKomgYnShTetSkojFRsvDkjqMTGAJU5%2Fv9m2AoNnfnvwkr72VBgypH7aKbrNpx%2Fl%2FELbwUmX9%2BHgpVUXipfuR9CIqCjDABoKui5x0wt0C%2F0HknlVZ06R18lMI7Do9QGOqUB%2FWxHuuNSYFfqcFmO7UF0q1T7sDAgqOOm7cDEwW4j3XsHBQDBTlfj%2FYkWajhF9Nn1pxQNzEAqTehe6ClfG%2FzCDGEmy6Ia7Wd396N6X%2B2wAVJ7xintdKLF8LRhOV%2F1agwjDVaKadmGXXiqwtgbSg2cgcb%2B1iikG53aLtiYWvTLv7qNJKRM7kBABnylywgeVeCC9obFP8QQ2JK4GuX2YA2GKAjyyRo6&X-Amz-Signature=cf8708212e6254e557a8899f6383ba0190577236f2bd8b7c6ffa81977fb1f602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W36LMAVO%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGeaN6C36bKLsSHidsJbzMzDITpR1LOSfo4QzN5WnyaAIhAJ%2FelldtYklTdKMT86Bg%2BRKL4oAX%2BnP54OEMO2vP%2F5a%2FKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrgYcN%2FIXqlFUGas4q3AOVOEJ2l1UPWQdxLO5C5XMZr4sQ73pAQDWfbqKiUwYpPz7bDiXDMOQMX8DNIFvRuQVVOlsj0YgppitSBch11qc0FPXtgD%2BpHsgQvSjRfArLJUZRbw86ElhSJBWBg65SA1Vcx2PeC4xcmlTrM%2BxpFVHyHXIJ4zTOyweCisOdyBYF02lL9JBhoPh92XMM7nne0mrnyRFZmz4es2NY886dwYd4BgdJ4wdqRlc5ejd1Ez1oXjtJ%2F5Kvzxz0AfqeeQDP%2FCAS6Gdin2EUoPK1LHJgoV9bMf9ZK2CEUyjR97DheeXiHwOKuTMTFIDxakPI3XjsrsEQOZAd5ZklPDvDUTpHwYNFMyxOBXz5DMpIQL3%2F0WE2358iN7Tnuw3EFnt9azlWKwyRR3Snt90kEuS%2FIlHW1Eg9S0DghHax%2FLcs0360GoAVeidAzSReRpSLuSfEuZTxBncOL9rSSrZ%2BcX9EMwRAng0X4NF5gACOs4xCTF4OfXcI6WKVLwukc6ka%2Fx7DJ%2F3jZwwPFoyGsg1JQP6T6SnDIlON4LBOB4jbLrz%2FGpPAlIFMAwz18i%2ByxuPSG18gseq7Q7wenHsyuHfUyFF4lsb5RXpwVCnMgyluryOZqpU4gU6wbpssd8C9h2KXGLqULTDMxaPUBjqkAW%2BbLiuF%2Bda1K9KakfxSGbtggnNLCxkOSGl4DR6xqdb16ipa75wdqWuaFUOrQAjabzD06HdvRgl4eZmHrqLEbugczGfcmDaoyEQX%2FqMAkiEIv83Md68vSSbA1dhBzpC7IkS1s1V2bN6TSMHrfHwMjI7p6ZWz1FqGW4th0FuqpBuDHueNhYmHO%2BXPxvAwnRc3NEN0Th3%2BE674rV26LfTcZYvh6RDa&X-Amz-Signature=58380bca644dc79861561f81ace6a58f5e9f8be34c94688a75146e957d7f5267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
