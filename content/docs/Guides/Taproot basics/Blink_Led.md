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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CALADGU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDlenpjmzSGJtxFxg2kBjzRsey%2BcjCCcAQgo%2FhIKh15CAiEAmD1ZNXu3UQ9P2pdXh3nrkDwePq6aW0oEO9Q0VmtZn1Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJZdRMUuTh%2F0un7OhyrcA7zpW0eOkXhy%2FOOh26ic4Kx1%2BVwe9DJ%2BVrmCW4IcxkJEh4cfGXhpGd8CaU%2FQLYhNuPzTqGyQIcAkUYrNnfcGDuDH3FNZOGPSNqplJ%2B3BUeI8M6V%2BSqcLCF0R7ar6gKC4itSP0wCIHk6LUVaSFV4aVhgqcW2ViA2ZJdjMX822o6%2BKYVPBlSwPH6msyEc0FLeAXmM3ahLMPgGxMXjJNk5AKDeVUzN5bBbv7YiI30urI8m7%2FDjzjYXdDeVEawEVecLZmFc1LZ2FqsB4jMwJES3T8WuhLLFiEsMPV3gpog%2FsLxxxFhLHq7c0ibsy%2B0Nf0VbxR8r38%2FgpFG%2FzjfW7DYS73H9ye0VCgKWC6jzf%2BhrHtz8Vc1gRA1iNVZqBbQC6G0lxgGN22eR7Uax%2BQNyMa5SHPo4XcnXmrW0UTaMaGBUGWogg%2FqsjBVecKCBeJ7CJVsvxHNB3Q9Qlh5in0T%2Bcua9CnZ0ovh1K2fhJqYqAPMaCuPE%2BocuRflkJAi3qyKgZG%2FnnOirSHhwH6IpvKWDcg6%2FiWjdz4P4iuvH%2BNhCc8K9CcEQdCQEZ1%2FM%2FmgOBLYSvikDl%2FK6Qr8RtfZNEAihAuFlBBvo3bh2Q0HKIWeh%2F23DtPUHjy4%2Bxgup51S10h%2FKKMKOuhcIGOqUBQURUNMLMdatylGkzQ08ab6Kb9jzqyIuMj8RwKKFZupouN%2BjVC%2BOZjXtr8LO4WfuEy0axCrjCjJisql22gVWQVojHDLfIEDblyejA%2F4xa7bZkhxkTZUlhz4bc8XWxf85WbPCpyKP39r%2BXazrkKHozb8TaH8oPg2t%2BRk57WIG2NXwR22ZBzlt9r7ho18oBNkv7DJdyhef9GMSf4senyHLZGVe63G2N&X-Amz-Signature=eaec70fc595df0fa5452dfb59c3f1265dd50b03f4f0232296c0b1a19d6eee81c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIQJKNXH%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGq9U35clIbuaacMQ6lW5zM1vyDx3ggtKfPbaeDp3LgKAiEA6N36kPjTblpEZj0LmqYssbOK26kv51NNbEWsVE0UO6kq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGPAhkqg5mYUPZqkpSrcA3sJhp44yVLHMF0WGm%2FCaJN3PkbxMTlF7PyXO1X4s46zbMQNWmRUZoNW24aWQ6CSGej45IbLfSpUK7CkahPm%2FP5s0Il0kE4olqoi9M6N%2FZ0K%2BRy1pPhsEZ88ZMHxawAm6mOfW99Q1yrkA0eM82qLxrLZ7rq0ynIPayu2Kb0gdRMImT6FAb3x4nPCgZ6mP%2FftIUyl809m7CPoNHJllX6qlGkg7xOKqkwg%2Bxo75tpxR3hFTSSSPXX8wj8TljMdVJle14UkE%2BPKIK5k%2Fuc4jmOm8wEJ86UMUcocCWZHglX79PiWgZqfD3VPRQNbHzDR9fe%2Fviawxz7HVgMiMGCbZ8%2FofQOOiTmVxiIokk%2FJYA%2BwF3%2BB2Nhy%2BVTAbv3VH%2BcT4LI47cFG5jCqQKbuAv0ckUQ09fknJ1FxG6GmxcrrAtZGvJZHfDBjKU1AG2ykdwlHKaPZdlk3e1MgI9hkyU6ijRUMrEVo%2Fe7wWmVJulIKnsPZW4ggeEkNGKKS%2Bk5cRef1LkBHlq6eS9UhRLyqEao5R9myLGaKCTz92kp5%2FhbtzQbKKbo4jIAlUH9IHl2L994r7nvyYFXLaKswvK%2BU9yhxZMIcOxETN7JdGSFF3JuE6K%2FuhkXdiyzISfWGPg%2Fo2kenMIuvhcIGOqUBtlYj9v4DxmqislPcOn5nTWVZCIjD9Ft1jFR2OLUqtWygI1tbdlgAkroNmwV9Uho%2F%2F0LkdP0FZomYZfiT6%2BrTmyL%2BQugwycXPhpNB9jkUskFqiMj9bIyPOEGFVeu8Ex%2Bja7Cwr5FzK1hT%2FcOsTMy3dMFIMvaLqf8tsbw%2FZNZxN8vs%2Fj8oWggtDbUFKYMf%2F3Lc43K7EKwMMy5unCPSwKQMmiWILglo&X-Amz-Signature=a17fe0b45e31a7d463ebc913c9a75e898e5d04f9a46ce392a85f0724214a01d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
