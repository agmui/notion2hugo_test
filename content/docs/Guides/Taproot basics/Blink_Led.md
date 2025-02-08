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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LZQJ6CM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFb%2BuZsr2vufkjkiFlsmZNm8JZKmhhXJctdQ2FZmJUvYAiEAx8uwEFDGZ9N4uyuEyu0GhU4sqCzGlv0SGNu5MhdlKmAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfKHwaNqcehm%2FvTYSrcA%2Fx2s%2BvYshT%2BlG7JHt1stVLrwgyljOpoBuDngfq5%2FfS7jzVZ6cDa%2Fv7LfusOkJKqJONfXXaJaOfC6xw2WKjpKnUBi6LzpHutIcXL8NnAVFNvGRTRIc%2FLOpjAO89KLkiNcEyJ7ezp%2BmwtZpVDfE%2FKprtyaML0lDECOSYiQ%2Fq9IEnNTkntVZ4J9ysDlIkrJ2UelbWpfE4791flStbuP8q46KYszhwWsil5JUBXlvadEKm5hGq0mRA2nYKNVj1qgoMXbku0sN3t6nfTU1t0MKcT%2FZsOi%2BV6rUEYy%2BRfFvwcp61kG6MOtU%2F6jRbbfFZQdxWC0UGyOm9nFXeePetarjGjqpRgj%2B15LOltk5Ok7uU8wAYvL%2FeRLTuBzNdfq7Wnqo6AEQbFTO9ATqwEpm%2B5bpbdUg8ft2k2AjUuxF%2BMZ%2BwphxDfIKCiQ4LmZt5P6nlYt2JRezWLKarraGeVVoJWg8%2B4HepZeU5F7szwz%2BXUct%2FIJ7Acc2aHBJf6s3hRmWqbddlw%2BOdvyIvbdy6HR5yHPTbfdFqcGDCP6psjNZwZAiPmPpXB08pp%2BH1N3G1xXp8HIizjgXh0uBiJfDXo1Rl2B%2FEkWhE0asoTf8rWeA%2FOG1gG97CRQ08eu61fWfnijqPcMMSGnb0GOqUBx7EqUlbA5ryCNFeFJSRsOjmpYEdG1dfUcrQNCiWfeJySJ8KMURNvLeyGsb1IZvz%2BwIwFgIoTcettIwI3s5qalD8rSKV6POoohlvPxw5PNcYxwRCFMDSf7%2Fy6%2BO77mfk1oKseHeGTFhMtm9eD07gFbJcvvxAoioC16d3%2FpAje7Ncmp0A0d%2FQ%2FwyV%2BQcv1jEMLRI%2Fed04dn80fnKxUaK5zDm4Hzd77&X-Amz-Signature=095a0979baf746be0c5a2dcc8898e5a1cac06a6c8a4c2940b642c9cc995fb926&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPQ4COW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDx427tHLjvxUS1o5aim5hUwYxK7pY3IlkGFmBbLgdGBAIgdtzMSusX3ot02mXoHxdu%2B7IScG8W%2B7BD%2BqOY1uFw%2FhQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjDjrC%2BHGpYSM8j1ircA8FucfXHYyBT2eyUqIb%2F55j%2FLXadsmbE56c0zDllTxFI3%2BsN%2BXX%2F8ZCHmpKdhZriOgw%2BLS14Pf84n%2FAHJ4KMKQwvp08fRSzianuXkwquEgqJLqmeL6WdFh5IyN0SP%2BwESorlZ%2BVV9ZTkRf7y6jX6CNOO0L5VZ3tGmCEHHn2cN9TZQ2yEjQiLnz09WoJSZLVyYAGG8SvfUDXZ0m9ApFYxbb0bxtQWRzgqP1Pg522Re5%2BovBwB3N9C3d2i%2FI8lIo24IyfYgBxOmdXnnQ0JrwsaXLHPWI8pcDcQKgF7sHBL%2BBPZfsctH9AKZJPMURt1mAk7sr4vhiRSYZEtBFvJg0wM72vnsEKxlyTbatHqjw8PLpwe8MJmATi2gNFpeMypNy8ZNAEwAslxa9pzThxS9eduTwM1%2FGc4NoWesvdSwksSCHMR%2FvZDsgnPXGVmdYCEduSrHxQ8HUqg1CjtxLBoSzVAD0vp6W5Dtba2xY3k23hFlzIFdN%2FM09R5ExTRig%2FlvvtEKdBhszc4slq1sL%2B5KFtcEbKSFsw3m%2F60LKdWeWNy4QNJkJOcTcJPgdEG68r9rV1waHuFU7ykPaCliKyPs5tEeji1D1j5CilTg0iJsbkF6YdNXSBJuak8GspLpTfBMNOHnb0GOqUBaJ01EmXY6IjPK7HYbgd5%2FIl2mEcBRPFr1%2Fjao0Xt6I1pFrzuUjR3YzLbdoVqidNKzjijf7tg1JubzgIiNTUHktbyS6cPQTW4toVu7JFTTZtlgrIiK4W5uh6UAYe3bqeX7U56Vew5izKMNuldD%2BJc3AX7%2F0DXxKWdG4LwzsThEqL3HSPEctQcP4Fj6JhIxe%2Bxl4uAyYnMvUBcdPu1d7fX9%2FWFe190&X-Amz-Signature=a9e349548968827b2842d2fc60ac2fc7a1b73f80e78fc2b757785329df3f0abc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
