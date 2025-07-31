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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVVTHORO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEAm%2BVdnycnwR7Xd2o81CUDcg5RkW7qVhRmia2%2BUk1pAIgHdNyMv1vlzGoRx0jgmKSclJxwkCn366afU28%2BNteOQYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVMubmrUawsMNCcsircA8hBN4D76GZrpmDtL6cFeXW%2BiUtJro7VnCw6Ioi0T48%2B0T%2F03DLiP447UKXaeGieAwnoD0ABeXeZ1PkAy%2F9xujVNDWOAd4kQI9kS3U0qVsENxdfqiffs2az8O%2B2X2S4bqjp3GfnB%2BauXnei74o2IfvWGFwX5owBW6Cn7Hf%2FvBu54F7Rx3aYl9UuJ2KKSuGyAzilnrr6%2FCUQSendqAW%2Bq9I4cYDvQ8X6DkSDhDoh2gGCd0BJOz3HfK7OHLXJKk1SOq42kslXR9xn%2F7ki0v4aVwJENtMfuI6t6pQyTiXPrJpcBkAKnVRrtYnttlx4GFYohZ4k6A7T9x3tP7Zz2xXU0khjT%2FKZxqzVvjUpcjkWEkCXhn%2Biwe%2B%2FainIq773nLJRdB8j7nRZ%2BEgWoYcEKZdSZEjuNp0WXhTljCKCQ8cU9JpeI3SgDO59AB3R2XfIN4R8YW4onSr4IoXulKvVJOfVTMSrH8lkfEjy9mluJX0KsWgp26kszMRnzWx5gBmoYsPE3sj2p5XrwICEMSz45%2BCZZE4mw2rxcbqN%2FQSkmLH6Smd2thduf4qK%2BHQQInIBdHUHP3%2Ba6BozS04N3yMTzzv60j0Qr7N7KCZwXmSTUme7cmAYiWl4uDf9rOYB1pJT4MJ32q8QGOqUBz5HooACkwv0e7W%2FIEorab%2BgummYtqYmMMNP3hqIL26Az0hufcmiEY4qc8iMVmmjqFeEjgocIwYwIcO0zbgc4TLgR6%2B36KA67yioUw6N0V986qiA2%2BPp22fHwCY2z2IrXyyP0lbHTv0aU5XKXTTpqV%2FclVy284xHzQ%2FRupdO1DneOA6Y4UjDnK%2FTHp7aEsNO7WzRuFtpj41A1o0zrqO4xKIfpTfR8&X-Amz-Signature=9ba3eca6238925e1fc67ccb7e5d4812bc8e1fd7b216529947aa718ba7ac14870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3X76EB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvgisYk7%2FGdJJ42x%2FeRRzXtn9YdEYH5gY1KXDT4L%2BL0QIgDEurlLe%2Fgc88k7k5wn7lmXn2%2BmyIrQkyW8RshSeqOxMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQq37QiwZARR5SVvSrcA8%2B%2B63WJJ7LEWC1f4rEsk%2BnQHrDKkitWBRqEzGZtC%2BVxqnj85pr%2FGwnlSbYkGF%2FcDaoyxfa4zxTTSNTyETek3FicOxvSyfo0vli1s2j9QQLD2tnuNhmbEwf1g7dOjumAmquUGSSK4Z%2F3kgZvz9rIIDY4WGFm2hG2PcI5hGMV4tMEg6k3K5FUDgHMw%2FunI9L1fPmFs0zd7O0FhADoC2sKMq2ahJ3QpCb16KjaXi0B40zyGfmERsi%2F3EzVcukJzxddHDlKVBQwSfY%2FNTJneN141%2Bww41N%2FohiTOqGTK7DuZjfEIWZKAwXiRvp73XSC5y7As%2F6NNaR0EKkV8MJbp%2B0EqikrXAOYD1KqSzYmF6TG0WNu%2FQl8NohPG7mnbjG925p66xduSmVI%2B8nfJLB2RtFRyMT4KbCRjkD64A39SzW54gTGI%2FBPgJm4uCiisKNbHYxFFU4fFewbJZ10RMbPY2q2lhH77H54dJ1ZZMPlwdjawK8xCnx21T22hskJMa%2BgW%2Bh3PVExWpIa4aq7%2BD1CTSTRS0FbQkM2WF4vZQq0NxBHP6WSt3GkPeE%2B8%2FXHNKe8AuBHDTSKzH5yjdl1KC6m6OvHpCARgKH91fZqvrN01U7IVszGxRrdCJGhCaKKRe0iMNn1q8QGOqUBzpIEUPY9mOgkqRK0kB9aoZZf9JthtcBFeTGOYYfcl8BCtzq4%2FlsCe4SBBg2JMIN1Y%2Fv1Fs%2Bb783KJk3enml3Plgh1lzFP2w0sOyrvHArk%2B9tjBppRA8dkGbN5rG6KqOyp21WT48V7kKzeap6N1ThRGsD1sTAuzVMufztfE64vzoEOLYPDk4E3p5TF5W0I65znCbPW3sgBCN%2B4ozX2P1YWZhdPJYj&X-Amz-Signature=a2b02e319428bec8f4a3af17f61fc401cf6d7f4ea03253cc089fdc2e1d7db685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
