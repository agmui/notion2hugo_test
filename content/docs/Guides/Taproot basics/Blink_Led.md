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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UML2TACH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpF9cNNFQurEaR%2FhF9QTavceSg5Npfil6vPvJdriXh%2FwIgTFsqT1k5F2%2BFQT9iDmTmwAWY0Lpiwb%2BksrfMmvqFSG0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAwkIFg2RG%2BrtwD%2FyrcAxoh3UgfFWfnARdgX9jgb23qKTb4xkx3z6cBMbUphQRLU4OKRCZE7khkNmPKOs8p4vONlTIG61ZmpibbSUM4PoT0AvIdDcQAzF40p8uqQhXX%2BvjEhklywVVyiIjGPnt87nAkjGMwB%2Bf%2BalFrO%2BHWoJWnALlxxdJyKZqw1f5B0%2Bk%2B7%2B%2BuTJJbSbkL3nphJfALasKSPrqmV1k1Gnao4wFjkxiHLSqGbk%2FcLPGGawU7v9exYXebJWnEoAADAFGaVv1k9xXSHNN1Dw%2FxepANq19FxauBlxmIKrsLPtRHjL%2BBgPouEQNXmIJpRVqZvqrqDM59O3OB%2FnG6gTxA5qA2F0NwGWPvjbHTPx3FJuYSa6IXIaMsTT5axDdCTX%2FpgXboJyd0%2FQOlNvIHJdaJdGyBqeNy8Y5yVSwupMnAcW%2Bq4Qin%2FSLvXpxrIiWJFzL2f7UuJpWSxssIeS6b%2B2skF8U5JUTZfSjXlvi8DKgG4A00kgKo5WY%2FfjebWQGWSOMm53mxeczKBWzzOFOISO20e5cbkXyu%2FHvIvRi9Wr2gAssryDUs1wvOBjzEnHXxapBvRrvsBZ2itM7fJnAxc8T%2FZHT8GkjHhdNyG2beNjdkfqm5fByijlXKpZjE8%2BccSYqheoOyMLT%2F5MEGOqUBdwuEKqUk%2FCb0BTDJGp7LDAD4nSxFMX%2Bed9%2FKOo7Wg%2FUpl1HW4VBEzlLiDK96COU2rPOOH14Lt6CPQ46Ctf%2FjRJ4brPrCdFHiOaQpBKPYFKCB5VwzxutL9VuapBlOQRmru6w1Hr%2Bhil1HFVYh2rBPClaW7syK2mfGAGiNZzrCooxKSi1n3LreiHcAJhp1fwERVYX28X%2B%2BeTfNHEzbm7iiMeHveVvW&X-Amz-Signature=9889eae5044d267b47f825f4b01888f6038668faf28dd25d6f193b125615bd08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JX4R6VQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvsOnVcNZfQZUTbKu8qUGkkX%2Fsn0xsQba6q8uGZym4uAiATV%2Bo7dB75uXuvbTvvJ24Mnwpf0BnSk35MAfAqQ%2BsATCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY%2Bk242qowcPLatkOKtwDxc9HZZxnj7LxDkJ6a1mZB0SGqmNmIJRMQvDJ%2Bolp6mt7VWfUIFFKAhnRYLIA5FJzjW3neX1%2BS1E1t2mmwQCq3SkCPyiv19CWscgF5Z7Hc0XUt3KaRpSDB80wqEWystypTg619QQQ%2BsppIfjAeGj5K4MveCRd4EyGmc6R8WMvSMgrlUFBrUxEEPav6927xDEvUsBbmk6MHC4OzYrDzZHFP03czQmoor%2BkWlUoql6YJ952o19Na0NBOyYRRGsco%2BegixU8IbiitWKcHRSexaydQkZpPHKtNPUzkua%2FNWYWM2PscTzNWhXD92FadM960Jj43gcm%2B8XBa0Q7vnUVpgF15aCHoNeL2HYT6c9PO64WAlHMo8K4Jd%2BG6KZY2B5MCgUr1nzAtxpUcYkDizjgjQLcXg8j4n3rlXxGhRagY1y5Fxh0tI9wv7fb9HkHATrIcNn8guzOPnHYADa5Y45Wuf8xWZrGnY4b983bDDl%2Bidz4FcciBZzR%2FC0R1W1epyFKzTaLTjYKZ4xIXUeqJICmplDw8CyKoc%2F%2F1o%2Fg673UQ5QOzqbFWT8Xhvuz36wNUFcHXwGxcmTvX1Xp%2FedLCfLmY2tsx8TkPGhxDI%2Bl32JNJyMP5pfGVasXKB%2Bk1Ba0iOEw1%2F7kwQY6pgGHva5TwfKkNkKuL%2BZojUIbvFn0Ej8YB5FuhqPNycZRVBMs6JD1IbPqggcdD0vN1bXdUg9TXVQGvS46625bzljC9hnvJzqR0LMQQ9lBCIcD978iILR4iGSLN7cKV3ifi36Xs3isImYkXUn9X%2FLUg6nYj2XhnDfXAcNAqSjALS9FT5UbTPW5Db82fBtKDs1oPumeQ%2Ba4TccvELpvor8xkOfQhjFZAgOJ&X-Amz-Signature=54e42ffd73b01c3eadb0935a03bf8aa9eafebd2aa4e75f9c77dba7f8bd234efd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
