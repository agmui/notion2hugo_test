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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZZQVO2E%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEntR%2BUff155cebvzu6GC8D%2B9upvHEtFVQtLzOnuMZD%2FAiAQALaeB3RjwUttmrFD8e5U3m279cGurzF4DZ6eU0OLVir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMUBWP63nSAfBDlL7SKtwDZoxdO7FlmAvoyhgkHQiHJFMqiKrcI5m2sv1E1JwFCitE1bqce9WDMI%2BjRZR632nN%2B0L8E4pmhq2XcJZ6gFFzqE2o5Rz2y%2Bt1Pcf7hpfhYMt8W55sZzZAWwQGPhCv6ul72vtzR0DUBJMPTUi6f2hSONJdm9PAoJNLJM3XDMufYzAKocjMtNapfYWFvFlZ6NWsiUINVS0lMBFFtXp%2Fx2pE79ENptGhlt6AHi5qFuTTUcM8oJmU5jVIUi8plQT7F2q%2Bo7Xjt0vyc%2FISQTNzwR%2FrAED71Eq5mA%2F377PZKYOzhiZQ%2Bh%2FBE%2FLuMDb9LzGywNy36bOaoTE8PqQ%2BSnYFNjywsvsb%2BVlhQJgz5tJpEcWzw4Jao7DfptM%2BukQ5poV%2Fyt9W9q%2FqMxAEKwXkb5OuL9Vk3NoTjVwHxvNAyEghNpiEFpBxxV1Vxwhu0SKiGuVup33Dt2NtbnSf4YsJPX4NBCs14djj1SUtcnQzDk%2BIKzhJYidJN%2BnM0c3HhkCo0NRwV7%2BJ31cXP6NqVvZObzU4XA4IP1RnMXItIPIxs15exAZ0ftG2R%2F%2BLVfSbSnZ7Pqt%2FyEGGhON9ozQRJjmKl1pAih9apt%2FSvQUW2bmQKvtQuqAbb9U4aiV%2FkuYCBhbO3Dgw%2FuXRwQY6pgFLWhNPUCnPHUOxpUloK40jJhoGIrgmO3Qt4JJJ0ML2HaBJTAvcU9cxbpbEecHbfD%2BOMGRaYXcgAS%2F5UeTMS6ovvaStfgD9dCPdIMsOlogPYwyHfIt32qrOz0%2BJYNOtZQ7GFz%2FaiRTRDhHgunJRSqz6zlzJ47urMsmo1JLHYSH%2FwxU%2B1IDdXkFxFLtZapwhOzTU6SJ9Qaj%2FuzCeM1nyqWUMdKxcgH0f&X-Amz-Signature=97073ceb8fd842689253ba711842424b17a4fc0bf0b1c61db38053ac648080b6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEZEBCD5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCH1eVq4oN5Wct80uxuwk2w9qY4ywXtxC2Jj4itfSLYgwIhALHbMTXzvABU8xHn9CjNitwBgY95f4roTNfdYwR3ygeeKv8DCEcQABoMNjM3NDIzMTgzODA1IgwD7whRrlfyhlodEbAq3APEudFKJLw8%2FFBFGqhZl7orvD929iNqdwEy5qXcSmTx74Q8R9gk6N5iEZUnegPeKLkDFMKmpymWuRTCQ9rc6E%2FsRzbbqsBPWh8tSQzIw5g4EyZ9ZSRkf7GOZ2lvB3hvek0%2B7n7gvWfXycxPJH1H7CsJDw4MAjn7f%2BOoF6zBCrAQKqUAHPFQ9EI7Mgj3LCsOXTh%2B3gjI8ijm4BDE37ECicYCJv0jovrVbrl5h7zCYl5aUqL6wMTuDqDXgvhdcFvS4HGDBnURN2DrY4Er7xqG4LhQGSWpFMHIVli0%2FalvBG8I2ax4wl1LvAmA14Ph6mr3gHtgy5pD2Y7npoDKJ2JRLMPsNSnGE2Xo17CbG3kTbhA5CDrkvNrtW5b%2FZYcRkz6Y5mF%2B%2BbPqago1PmRQg%2FoDNHp5J0wq7ceS7M2eE7QQcNff4CSWyEOo9%2FYRsmiP1yoK9BFmG%2BCVDdf%2BB6QFtBxkt8FOv5azFUmr2atYfCheticCFGhlM1pBFr6Cnx9s82kTt3XKVcFUprrvKBlXhaA%2Bml6IHEvXV8P5GIM2Uqfngvn7R0tsPUJWNeViduvPTlMC8fx9Qbo62mMpZXe%2FFzitMqmq630Ha4ikv264x4fDXrKeTVZV1T4ynqccVV5A5TC75tHBBjqkAZTvkf9SzNJEzXe6ccf4ScHRsnPflKQSc57koveuwfbzpoX2UGK0%2B%2Fbud5IOc%2B8z25fiCc%2B0oa4dvOdsSBJ5sxY7Vtb%2BHzjJHbuTAwU4BL1th6jnQCEMPIGFDkuxvN2iCIHdhK%2F0pM4cXXWMJg2wV6BACFOQmYgBFL%2F43fCQmMkRhXebxTBJQ1yLJwxjtwBp%2FPDjHqUkIfvs8JKjJA%2ByH8KDkIgc&X-Amz-Signature=4fba6249743891c963aefd57fda0013b9c5acae802ede2434234634ea6956614&X-Amz-SignedHeaders=host&x-id=GetObject)

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
