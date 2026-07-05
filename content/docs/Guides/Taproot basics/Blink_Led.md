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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IUOY6SQ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHK2aqaYtkCR4maNQUamNyCG6tfYEJbvltpg%2BYkVIaNjAiEA2mW1dTJNj6vfhRnCSVcvQ3c9stB58ScrhDjHTijsczQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDK2CMOrjYFB27FJbSSrcA%2BdXH781FAVJ1wZmF%2FYLS1w4A4BCWqn0dqOplzdBBjZLBdWyeU6Um%2BdOlBLcmPjyxtvxb%2BPXmJBN7ANLY3r8IhXrxprMUmyR6GXpfnCH8AMjjiGHcjpDieHB7ZlpWVYT10OkQUZsRd48336o5mb3l623em%2BvpEbP2n61hGeA1wZZF6q5Y3Yb19uMwq721ed5AAI%2FdbQcD6XmPT%2B8hWlYKe6IuX8UcnkvCf0cEiBjZO9xBjIMhyhb2KMp8SwOmv0dRfy9X9k3ouve1qAkOVpWu5mxnSwtjzUX5zN2YFk00CULdF7uDgiqzO6yDMtqvlwM0KAa3I9tIbtN1RS%2Bw8aLbRvM5QhFtzbCnRtGOnxu3fI6A3fW1g8BWU9TmUdzIATw6o2MGSTXgQOA5CKbYPK4PyHYSNeqs5sGYDhGvSKbHTqZfW9frhsi5V%2BC%2BkNGVzXmGLqkVHr8kG6rkpjCFAZiW6gnZzoED2nlyDx4EUbBpsOmxo2qfR971VYnwP1PBkYWsFGWgnfqSbMHqLBlS6MSe54WBy8Nm7fC3lI%2B7TAXgxiXm5dxpCGgVr86V%2BvRoLPJF35Fqe%2FNJ%2F6gDULMgKetuaqrlFSQewoeg5klwhO9osF4H05kfVH%2BL8ck7G%2BXMPrZptIGOqUBIRPtya%2Bwq2WUgrc8aIgMhQ3ooQtuE1BUf5tb7a64%2B%2Fy6Xwog828DGWiGvCtyw7Afj4PGJpeGELsOkQ%2FoB2pImyfzf2nvhjAssA5D%2B9L1DpfRpUEaeBv%2B2UZLOUKBlLqxClag13QKs5nwJn6LDAwKLLIdlE8AwS%2Fj5%2BZh8MA%2F%2F%2FIETuZfs3MDlQYf91Lnq%2B%2F1GCMo2WT990GQfywOvCvmkyf7a%2BGZ&X-Amz-Signature=aea005cdc647faf22d6c74425be00cd184ee29e3ce110d151de7c2fd1d371df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IU7SLW%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC%2FtTJlNQEzNajUr5%2FAXOb4ZEeG3yHBFjUCEdqF7g7jqAIhAIuOS248XzAwEG9ZR5%2BjeCBznsE3P6EtifzIicbgmKayKv8DCDIQABoMNjM3NDIzMTgzODA1Igw7HgyWDQ5Qif56l58q3AOfV9ty7vfXz7RjhB8XsXGVuzP9%2BitFGkntjeofeMqm9BCVKKptBUHvMu%2F4Zyt1KuTgI9bougLaFczXngL61QTR37CSmSwPhAOwoLD%2F4I9mSdr%2BkgqpCjLUl3yzGCM3MbLnA1k73vV655sdegLVTQb1qPxjQuPd7EKtXBSY%2F6iGWTAQDIDtMc%2BsZRlrV5hIt5j%2FYG3hQnYrLjTMewzXZFqKOMFMjE2oIS1OzwQ%2Fc%2F5UEU4gCyJSFS7j337A%2B4jLpE4a2KTlvJGqChiinqM3YL5SAeu2ZRsei%2Faiqtg6iksLXQuxtDkNZBnEGB5DSM9iN9J7IRn3fIZkUol3FoMQ6UiBtAV%2FrRI9hmiyryH97G%2FhsMDwzSxIZ27Yy9UBZZiMWqZwzx9D7H%2FUTA0veNEWkvBhOAt9nCjs8bdJGHiLCSAr00AgeXg4dPve25foy%2BzQm3Uxy%2FtdK1YvSBfQ0rTtY3Hlq5UsNjmVQ3Ceny8S315eimm8v4uBBq%2BopugSacJdkE8Z7cIKM%2BH8iM1xdeumScP%2BiuykGWF7hD8UhSQ%2BIeCeJEqHWFPbAP%2B1rUcTk%2FaVtcQCxDuXakRobKFOMqA6rI%2BzkoPlsRn9P9YNBOtW6pUBYFB9lnH97GPYw8ZH7zDq2qbSBjqkAbTtL6fJrRWLwxk2SZxTgjA4w6t%2BMrGzIVbL9bevlgN22OgpC6NOHgrHgCExGdvi55AIW8c5DQvcIFbsJBsCURNiHm5FO8kLN4hvEToJP5oASJjgFnoyks5hBYXovhnPmeR%2Bx11xHweqBTUiWuBhnYWGnU24XHAmpVUjiETGZ9eCw3Sdmmyqg%2Bcirdqt8LOgleHmisTiToCy%2B9U46WIy3FYb0W9V&X-Amz-Signature=ee0cce38e126ec08c40247e306a6f5c69db64c67a4783c736a2450c0f665db60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
