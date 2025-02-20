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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2CVTYKY%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrgUQhNwgqV3y%2FDzZhB80oX%2Flo5jl7aOkjzskqC2MTLQIgTtENh5VXiNecBs%2FaNr1VQqEtklqTkwukrwdg78Zrt%2BQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGThB8YUWx7O1%2FBPLSrcA2pb7EpMFWN4YAEqFzek0jKYG4SMBbZ7H7SRRw64skC20q2c3MOxfLVh7D4I7HHASF9H7%2BZjQgAZt6QKWUXc%2F1qpli2B6y%2Fdu4rYV0OgBrjS9qHz90QCHg2cUGvHrs7Cg5qErzZnB9ifZ6yKmEPkvbcdzaymIUw7JhCE4yLduQ3%2FoVCv%2BtdXO5EtempWw%2BPoj3lfTovD0HFHyQAIsjxW%2B3ruxr8JECr%2Fj9Am3QWc7zND8OLU2CGAmPW5FmuoJ8NKwBr%2FM6QBZ7a2vj6DI6Wr%2BiXoqNWs3C7KjfULr49Ls%2Fa8LdfB0CwAdjmApAjBSSxL%2ByxKgrKVPXzNG3ZOaZPwspAzEb1B1MXt7hcLf8QL65TOf04kiudjvt74gdoWmvqHZ3qKsZCVqnK%2FLfkZlMXfY14mLC0M0yKFXaoOvn0ZTQt6%2FBotpAwzbyjxKbAU6%2BO5xW9qTn4uXTCyEBX88X9fRe00v28DcEtYGuJkyL02VwMFkKQKW9SZtXNrB8qF3bUCii9piGadpu1ypysefWUN3QsuAAo7CKHdBFuoQVwI%2BzfqbXO0In8B0hpcjtcoLdzoqcTJJf%2FA48iYAbBm%2FHo90SkcQbXGWYfS5x4f6pgfqUqAcmDLpvmqPNS5uQUsMNqN3r0GOqUBFhZZBOEQWhOW%2BvHiQHcbmGehBJuCKynJUHxbcegWylJXiwAvmXOI1AdWm5olvJdxuBDxmfVvpSwYCffCIxrrm%2BA%2Fg8Iu3RPRzo4cYd1sws8sfMEeAioAtKOuvhWNiz0iA%2BCyfkoxZcL%2FqZPr7B8r9FHEj6ZijUUFyl4DgSK6EwOsB9aBDRFZSFTCGQZdSAs1ZOtQaMNqv8S0z4Q8FbWQRv9vE1q5&X-Amz-Signature=14774a3264701f9cae43d6e1d5e0d3bf01db4f5ae5b086413dd0192a3af17c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMP2BUVW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrr1B0%2FUgp72m4e%2FCgV5zgWo4mmKEWlMXWja2RfnJPNAIgWzdX8GJLEbVL7anV%2Fck87iDuw4aKvjY4hcv7pRWJZ9YqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCi5Du3rjHgN0GauLSrcA0MaAUUIKbHaOutkLY4AscII%2FSJGB6VazKWdpRG3r9dSy3vZxlTBrzKXRcn%2BxQzc8bKmdFIAmjFen1utvraZgjj7%2FPPGCjDM9cMWRknBv760KwY7dBdbgXJ9tR5c%2FmAdaluO9YsMcG72tSEaoipL3vxxT5tKx0eC%2FIth4ActJ19Xjt7%2BuZCKyAnH87T8M3kK7x6KFskXuoSS6CsGzM%2Fk%2FBtkHwWisrjJlFt80xQ%2BrAumbMttGnhWC19G8e2JXQ1YbOvfwa8v%2BKkmoLeSxH%2FLTHx3SaC%2BnKAvR%2Ftb9r%2BNaGDrSFm92Y4UfgVJYF6dn7SEFZpRRJddth2QtzajH5a0HmJgTw9vCD8pA2Da3q3Mqbzojlf9o4ngSbJfuepvQto%2F0LnSvUh%2FR%2FXY%2FiUvtoDpu9N5pYLHGcZRqgRJDaooifUb1mubVqDCrtPl1jIIRjoiksWfjLJ6j2DPcCbfVlaAp%2BgplNu3IwT1etUGm5l3ccGthY3tf44WGpGrDirYI5umxEJ0LDQnBAf3aleiCNG3uA6avoHwnyL8MmbaGbuZzhQtqyuCUdb4khR%2BCWhRQHQar58gOfFgs0rRvts8Ufs3G0dK56RiwgZR3FEavW2%2BGMVQaYigBpCMQ%2B3e82m3MK6N3r0GOqUBmuHr2xtpFYDn52rQkwUhy8jUWmU%2BCu4dsuUoA0Fl5cXRLAbY3za%2FaxlFmcvoUAz0IUbn2ODypaVlDJzHv9phUqnKN0qM9XvVa3Y9BdgFZhBqkyUTXhjOWHjCg3jVMyQn1tztOpH04qg6cp2sBUAJl94h0wxV%2FMbl67RDQdY1rtdio%2FTyTWkshJ8oJg6CwOflv4jnisBfx1tGYe5PFRt%2BdEdTxO%2BV&X-Amz-Signature=25edb6df7789cd413c4d6eb1407afb83c413c9c6e73e903c07a17de77fcd9157&X-Amz-SignedHeaders=host&x-id=GetObject)

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
