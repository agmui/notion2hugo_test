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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYN5SNRZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgf1BNN5vGvcJSmpgGK%2FCQgp9yqtsFfrisp4yj013EogIgYZgAFXq9%2FnSCr2r561bOd2%2Flsv9C6Ss%2FQp2wfwrW9awqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BYhz4LMkrtxxZXgyrcA990Xp5KaYfMSnai5ZGOhRPiixmBynYIZYPtEoIX0NTROj2kNbqIQ3Ty95IEHiBc%2BebALRGMh2%2B4jwFTuFxBuwDbxwHhAga%2BbqgfIhZD68VpNdWEQFxOa6ieb97vnpOOr6%2Bus5SutvK5XUWPU2cUJ7hCLZQticWu5QWZngA2hX8ThRGKY5QMBvx7FxOaULgBkvw7Nh1KuE82g41IFedQgrSTJ0p4N8vBIGvFLnivCos9tWk9FxAmoAG4KiNPaJ01z43ewAFYp5tw2WD52BPMkThrLY4FaiwOpgcRGcX%2FiOBMX5hwTQOX%2Bs7TJy7fcsmUg4JV4b%2By1%2BaoLGC7N7O%2F%2B2%2B%2Be6kqXYXSP54qESDPTT0%2BPZRlvgmfyxvLjVrQIXqirrXahxONQNhaurhCIOaFoy1rsNfGMKO4UQYBdXASgGhymFL%2BDT37jh6NNvZvqT%2BQIABu%2Blpp%2BZXUmN6c%2FEuHa4d3EWdmNISk4huO2ZEDe8C%2BNJYm0CvaH6%2BVWBF6a4smjqaPoszpf5qCvKuuDfr%2Bj0oBQ4itPPiVvpUaNPaKcjzwTByFsFn80x61ZRRx84pRbzuggPClATklQH7ySKFVjLUQ3%2Bi3nKBGL8WGHhTNpRlHyqmv%2BxzVIIXs3XIXMOHwv74GOqUB65uokOnKkDrDGMlc86uIP1UYT2HObFtHFY69cI7SptkMlISH56Mh7qmkeQtjn96mJx3KHx9Q9jktCnRbuVbKA2fAf5HXyCrUcLvkJ0rJyZmf%2FFkLMyedNgKGCZ7HW6VUuw58F8CDuWHJr9RrEr9RONG%2BfLGvAgAvXMXy3aD2VhtvlpQ2LWP7dynhe9GU5iTS%2B1o0znRVtjt2ogLNPm91guXvpN%2FK&X-Amz-Signature=ade273fa3c5ee63337e59018f608c0f019a52784a219f627bb0daa96ef2300d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJW6EXSM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIC3wZiXwOZDqWYoMzEyiJCekI5%2FxGTbxaBXXNaaL7ZZuAiEAtS4fmMoJEo0i9avBQkdoTiTxgRgi2cZ8L8XWk64GeZ8qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGhMAGLqSHyc4LvOircA71%2FTMwjvLqqn62SKyikfC7exgH57wvsYd%2FSrE5iK02%2BKAJ9JqvAzEkyguPPWHkE4vUlE1orzvinCL5eAMnNEdaJjTT%2FzQu%2BciLe7jS2GdJIapl%2BjL%2B9zT4u%2FPJ62cB06vB3iYz36lhP%2BSPf0O5uLKbYzBcG9%2Fv0PyRDn2JyPghrtpAnKuw%2F%2B%2BJkOsG1g8agvKhmxiC%2F83UtcLsl4vBgcTUNeLPyDX3xqm7%2FoszJ55C0q02yCVJv%2BSN%2F3rmJKxWbk7t5rBnRSpypufjqUURNLtcbsrhv4FcKl0k5iARZke%2FshmYevmLwF6ptKPQi06wFJYL6KlriO6hGTyLrQWo63W6wFBzUTf7n8lCX4LUzWmScZXdvZWPKHuKNHEXHmEffS7pXYjDcjiRa0rWTeDaRI%2FuzyOeUjQIH3EWTyJUmS79f3pevtib1ITlKofHgNrrg7s6VpQLJqnZRo3OQnXfvedTXF2K08R4i05kPSL1apmw1yDJxst9tDWtTIRi%2BPX63vlOfSKE5icbBVqYplgpu1JOa%2BuaIuYmGiBFLcDs1VLVsNg4kKXuU3%2FyhAcMo2M%2FJXtMlxkBNkn%2BAytcZv2GuDgfxv9COQFA0OuJpdG%2Fu3MAkn%2FcimQYcEY%2Fa4Bu3MIzxv74GOqUBih313DIqOkMMBE3izMYc82M3%2Bqk4SkQHmuwH2FBSsz2iUHNkr3RDZkvzUuSfpXIWMgU8ixnB%2BUk%2F01lPVgiMbSjLeLteUrbOpECiz%2FKDdF1lqz0HtMhj9nztblIfSLtWGdwHoilHowryg%2BiHEDuQP8JVTtuqhLChnXRAF7sNWsrJBK%2Bcu9pk4zCgDuvn3jUAxNv3alIkV1V7mIBgeloOrPHIzivm&X-Amz-Signature=9449bfadac02107d2fcc01fb7884781fa504e234711b5333ad4748c4ad988086&X-Amz-SignedHeaders=host&x-id=GetObject)

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
