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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y26TT4OW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuFS8MbAlTh2nt4fLbjTOf1nV7vC9%2BGV0lZswYnj65DQIhAKN0dpT%2B9c1BO%2FKhIDMQ81l6H5YUZR3CIArjQ6LWRt3TKv8DCH8QABoMNjM3NDIzMTgzODA1IgyyMpuYXR1b5ck2jbUq3AMt6qoccDRKi11QroYX900E4QCb0kBMMLZNppGwk6SuMgjBMWsDXw9ECv6%2FEE9HK1htIUhS%2FHBgLJq4npmuy0qAOs%2BGjVA5I2QebpXgFVM87gA06PEk%2FpVwFvefiq1jW9YzB30c2YQTzYFEibZYDtRmNgUg4Znmabf5EuGzHECCI%2Fs1tfnPQ%2FC%2BPC7uyYsv4djPXVFq%2FYZ6wBRSaKrt411bLjvBDsbBhkp3%2FC%2FKR9UO2lSudgGlm2h121ywbviXzNpIiR3RMO%2FWHtqt%2BJz%2BVLxm3xjBVzJtE%2BQahJC%2FSza5%2BQfAr03KUFFVCipneeRRnQ73ciS4TclDw38ct9%2BgFXZvZKky064zLIt8S4lZSFw2Yn1SNxDpL7aWsPRg%2FrPSHp9FLoP%2BbrF0%2BR7iKmcQxS8sWx2dIOeQDXRfaaPGYogIT%2BU2poM%2BfY9JHHzzwmfLnmKeysVbGvD4J5nE0xnVI5KJseTkEAh0mGwwApT2fRyhGP2l7sYSaO%2BqxR9q%2FW71kR8hGQGjbACc%2BVEcFgApQQ8yYAZmFpcbr9t5oVyC2NSC%2Bb5t6flnFHlFMqVt0tSYGaCcmNzwKepGsKBMqhgOAq3t3YF4HEJ%2FOeSaqtSpfIKZsFrdywbo6DOXqDW5oTDy7L%2FABjqkAR1YHlI8VMdZyV84dRcXhUt4FeEood4HktKihO0FrHi3UPNVcHAC9%2FsgbbtJX509x326xZyNRef7mu4jtt%2FmBhWKGi5pd2haEL9NXlbUsI1VTvLWwx0daVg1Lk5nono0GnsOZHZSfQXdBdx40Q2y30rPvQ5pt5udPum9NQbNIL39UZuZPQGA4NiRtDunuMur1AP45WGmEDY3RAFCde4jKooXBaw5&X-Amz-Signature=d7cb4fea77f8cc05358b2dd9b9adbbecb181c1a297ecba64775a9d5847ba72de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP3A3FUZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FDFaO1%2FG1o3SjPneJnqoBtYPLVgsq8oWHg3IW%2BJtWaAiB9jMQcnS5KfoGwqAYueYFVf3f%2BOca7p1Dcg1wBc3yFGyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMlwHH93M4ZV%2BAGGf3KtwDMbs0SrNhERTYve0x7R%2FhO81fXMoyImWeAJpy%2BucewVaTaBYVpmu03s4uyFr3h37yGKKbr5XUlKbbxFF%2F2C1dgPRezSaHPvYTcAGGAyg%2F7xvV5dLBl9OP%2FszbgYavLoTu479tHI6tUPty%2BMQ4MVWfgCjOb%2Fx06CrRyOr92x6Q0qFNx5QyZG4d2izkc9SmX33bf%2B3MZvVnuTh3HOqlPgyJ4KCJCTWu4wU1tYyPmj13oQXIO8oAtH1tCp6Ly%2F5bR9DJfvW%2FBDeomk6hJezvej%2BfwM4ZeWozlgjdBfPmmKrYhAKigPy2LMwMCsP%2BxE6kN1zY8EKIkM4WMAuaEwfT%2BhWdNJueW2QTp2l4UTKi78jKYtEBduReLbalqpKZ6xkUYtaegDoggM9vYeO5vPVGIGP6LJhc2RLLZNyEyYsWaMWJ%2FiRxukpAF4Jx%2FWSGszsdeqD3zwkr1i%2BeCJmZFzh8HsQD9oxVfB6IjvDByTDdG2zpTQkI64flLGc8pLHewS6Rf9zCQrTu6nsdaEpRe5iih9e%2BtczkMKgJ9%2FkY%2BUAg%2BUy7xgdNJ2DjI9UqQSN4kK4Giyi4annF6McDJsNnJ%2FxV7IAOEdgaRsTdaKKeZX4xo7cOgYs6RDe0m5dvyBsQsO0wt%2By%2FwAY6pgGIaGTqRPUhSLbSOMZFgL56KC8b2SX3ZbL7qsSsZuB5pLCRDa99joxn0IfSb5Jo4I7SBP51CROdPYCL5%2F9HWzXS3OURozfdHu6pk3Ttm%2BvLaTDta5Vt9lN2aJBA2dcX4%2BumYxhUM4jL2naGi68xSbydkyWXMvMHag%2FBstFvP2FGNyHAQizww5kYASX98GDajhuJz9EWX%2Bday1Tx%2Fe5DIsbwcZI4d%2Fh3&X-Amz-Signature=4bc9e936d29cb0b56f1b9e880077299dbdaec4a65baf0494a43a3415ab99d932&X-Amz-SignedHeaders=host&x-id=GetObject)

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
