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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJ2LVEH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi2ioM3xV81NKvsQLt2PrgbomkSNW6DP3M2Q6FZm005wIhAL7PjSEHN2aVDcx4q1hsH1UqAB3v2%2FM%2Fji3a6NODYd5cKv8DCG4QABoMNjM3NDIzMTgzODA1IgyvYcZhXeBRcQitms4q3APzTuffVXzV3Bp%2BEqQocP9pp7B%2F1DOmG9vKRuikzyWLLVychTqNnYq%2BbvSSNtPL%2F00PR2xRkoTq%2Fm465tlFEcEXm73K4iYZlWEMQoMXxKTeUPUIor8TRg9T3%2FGnhRZvU%2BNu55GCL7DQpMwevGNxDa6n5fuXm3zRYUjyKZnm3U3BSQu4of8Tl1jRzPTA64wuIj2BHpBsgXL5Tw%2FdSbQn%2B0rt5VuWmBsnoFe4%2Ffis1zcjnAP1flC4nK54xVtyi83w%2F1IAuzIqPYM3dz%2FuCYofgQK7oafEN%2FXB6S8H9Aj4QcVDUWqoaPy6o7f807bKfQsHYajzdufALyVdIVLoWeBR%2BcO%2BRosorOPhh4Mn0Mm%2BToVnVm6Mh5I%2B9EF6Q03IWpjp05Vh0t6k6qReXd4CMY0siZI%2F6Of%2FEwCurClg7y52NKpS0%2BcMDM4Nrc%2FBH%2B%2BcZV%2F52VZj5hR52xdQOSiyKVAtPtYcT9cMxw1VMFShSnlN3aub6YWZrZLZDlqsxJeYp%2FgJsGjfZjWz9IpnEpELLraoOFDMrUBHKAs3gNEfqIIU7kOq%2FLjQOYZl75jl4LGaoDpN8BqIMnmK1IddQYz5uIi3ltPy41PgCo2zim0wXwnTQvXAoKsX25TDfoKIeSyQgjDKlLzABjqkASfJhc2Z6Jk5zIHOIrCmGwQH%2F6ZkMt6GsTZZzWfE8W9%2BgTjdyPVVtvxY6CGfOZIj%2F5UV1XKpHoR3dCiMGqyA9TMQzOQtfhDhWhNDqmXoG95AjttVY9Kbd8M8b0Ue1qH%2BjdhcrKOGWkxJm8EMm86ZmhaWSSsziWptFAz8b%2Fg%2B9C%2BBzbsTv11qbcTyJC8qwmocIbftQzRJHEU0uvG1Gl%2FUitAHYGwC&X-Amz-Signature=a7c974f71ca899fef8fc820f9977914c8e5d2c886d0ce1153d80e0138b2d2745&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYSXKFZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6vVIk3A8C24hpoyNp1Bg45LSeVMe4uTgBc4BbM9b%2FUQIhANmnpHRgkPDIlOBanpXk16r1DdwWVMD2bsKhIKeVnqbUKv8DCG4QABoMNjM3NDIzMTgzODA1IgwMKY7plEvEv%2F2RI2gq3APnkNIwyYNHGwUqdLzhvYHhXZhMrR9ASGwZnBuyjxQwdnzh6o2Xhbr52xWWpN4%2BPBk3YLQUkPiF6gaTvcWP6oNWf2ELOJhME7CV9kTx8eKwbeJhBnAw%2F8IF4S3yizEc951mEnngP4SgkecHQJDQysrp4IKhNfKZ6ptU%2BYUd6vik08u0WixER6PAASkrLZemm9uGOlumFBoxCFG5%2B2hL6nfWFM2fJ%2FQP64htJr94oKTFQzEWJwvIb%2FMOD9MgDRjGTY7gYt5BA1JSP49x7VHLLtAd%2B6TygRnkrFa6nqgbP876swbAzp%2Bq756waKbXIeI%2BJkBTW0nphz5nCTFGr%2FUR7AXLFcmamiHbJHVoy2%2FIe4F9v97g0xJFHxwv2zl6txQl%2FUBk5VO9d2T4oE6ykvuciMuVbSVH4v83xV1emYg%2FGwKMpqBfASp3pdYwvzlcSWLHopYRvJ6n%2Fl%2B4mMWhAF5HG4o20bpvuToKA34QHMscJSDqxPDQ5wh4JTWMwOMavDVfHGoCzRgfxB2t3bmPmteuZR9g%2Fmrh2a8%2Bgbg8T5ckyuLEK4jRI%2FlU619E%2FYwzRPdkt5anOKi9sdIUy6%2FHahzD5WP7k95i8YbtvVSRYlyoolw7w4ffVFbY1uGoBKywFTCilLzABjqkAfkmU2GAlL0SgfsEfL82QyQ4Twv9%2Bx%2F69wS5qtqjT9Ltwo2zgz0ILYQ3SxpUyaqUTo%2FjVGYvJXmniaUj0DUssaatXLDa%2F7QgAJo2yWXUCSqP4dcOjUX8PJrkh%2Fh2oSEjOAoJ4pcSxRsRDXPpTmJtgTzKbyo1P69FjztbUCfoZ93zJUCemkeB1OW%2FLhYyeF9o5vEtBt1BTouchduqVDe%2BOFrHv3Jw&X-Amz-Signature=f04e6a7554b0dc3ffd0a213e4cd27a9875bed0fe11345efde6de1ae06e67c70a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
