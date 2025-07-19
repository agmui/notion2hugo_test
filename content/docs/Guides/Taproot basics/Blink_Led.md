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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDAAXYQ3%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD30NUq0ltRyGrYgpHSg%2FaikYV0MmUY6UZ68Se0oCAm3QIgJCeYlCFOJQA49BpizmoWxf%2F0%2BYhv0jLAui39gkts3PgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrC4A2AdddmnH3X9SrcA1Zkqs%2BwblIXvAxgBRMLOue8Jc7zPhKFOsO3f09y1Ds%2BlnHBDsUsA2PYTboSBFshqYQgKpoVPrMPh2qcUeNFYz2oAYa%2BKldir9MmhG39y5NwzTSD39Cr1zREelnLOqdSRTFmUvtc%2Fbs3XN7ovdoT2Pi2B5xciVtmTHyl%2B7dvUHe6Cx%2BTfEQZNWpahDY77r4eR%2BlCK12FD4z07MJVFqe7In2pzH0hVdFvJJtjyPkcEPgLX%2B6bJz8u7X6IcGg7Olp6ccSF3e2p%2BGCVbL%2F9Bzcmy1KrhLoJG2UzsEVU%2FbMP8xhmT0db32rwqSjNEQyM0S2Gts%2F3F5l87Qar0S8EypqD3fwd1OIrmQMQmkPMSTd%2B3J6wbaFfZtgI2Z5GCmTUWUncBAyMAWONelzDJCrhnrUh0ZXpZnnjhpuK8efULyDV%2FfAQzfZHQ6H5kKQgleBzB30Pd9Id3CVMjaob495X8dpdowuicpWJHwYSztGimOJtW2QsfEZ87skX2CCEhMiaAD1gYDquy2JNcbTac%2FVO%2BwGtR4LS%2Fz5jgYXraFMnB4XAhJw1URS%2B7cmwfcElDEDWD1OUUdJ6Jq6oJSIkYcf0M8uIP3ghtoAVXlG6JvWHgmFRkzf%2FKRPi8IdKOCmOnBXtMNvh7cMGOqUB8upPYy68Sxh%2Fc31zwq9XVmOsK9M1KWamBEhG%2BtlQ4Bp6dpuzOHEdP0shy63tWFJSN80E8qphhWzZyinHnZrndF4V7O8yv5c7j4Ai1xngxCBXq%2B3GSHrpAq4bs3o247Q1nGvCvUmScerQicEG2zg0dcg%2BYnokmHq9cCFIFczU12PuEorefkhT8i3dAGGgLPFQaMK8iYa11XoLhRrcJc0rqCe5qw8H&X-Amz-Signature=d51c5f176699ee17c867cf9ee8faa4346bfba97d7d7f6b406d34cfea73a1094c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BPWKYMG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1i8TkGPg6P6GvAUlHm%2B22qDsg2YJKbzuEzXlVVi7gXAiEA1xKFlngdBd6M5jYpEPhHnF84YNXZGEwAjbzb6U%2FUe0UqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUgdzRu%2FvDQXaKeUSrcA3YNMRIQkz4irLJhA%2FYNLxF1%2BB9b7Ip%2FL1MdU9y%2BxkCGxXWXYh3mlEC3OBP47y0f8nutwb7GTEi5ox8v0kjKLEGtdSw6oPfvJ1kN%2FQv2EnoXk0V%2BBbx60S7IiQSB4fKAKZ9m39V5wkRM8YvfXb2yPq307jBQPQYHiOk55PMgZDw98%2B7kZoCtLNbE0Sj5kdD6%2FJT14rUX2AO7G7JE2ojGZiraHx9QbcckBJFGxA0pqiCbIbJOh6y2yxriLwshBdUQhiMUItjDdpXPqiTR4nR0Ifd5fPAJ504%2Bjp1MuxcRy%2BonLEYW5r71kKGjHihcLfe9tJSaJNSUxMPHiw8AuJ2u5ja7PGUrU%2FNLB0wCG8kF7RlBTIWPPT09C96yLxg7E6xXv4ysptKBkO9BRcdCQjMlaNSzA8%2F3QoVZgYAat%2FTaNOyXS%2B8YUpAv6KP3DJ924PJvrWQ5ECyyBg8Gv9QIV5qwTwrLqc1p4b6YW%2BwbsfW4MaQcc3vyDM0wFWtBZOB9TWwEPfgZpQKHC%2FY2wkdVjPpUIgrLa0n9JhKhtRai51pVXaL%2BwWO5UXvxl9cW715zDYJKPIwHbxNk5kdsYRnjYLLGhBtEy%2BT5pcYwTLGoHpiFzVDTP8aD0UFabp2qNt10MILp7cMGOqUBY%2F%2BOG2QkHG7eorcxSjZISFoSPxjJCxCapvk3A2AiJeRKOOR2Qs0kCQtyPwPEGP5%2F2R4po9doq6PFdl5O8tJlBcjP%2BzsAdDSk%2BluY1MBp7EkpyAxDkvNZvKnLaZD8emp3KsVxWv4KPhZmAaR1G2nt7KLd1MexBwJbReOV0LjPJVk6WPUjK56HSuYH21nWIkxL0Ny1xqmCiZwbQqBtTUJdnO1YdZoq&X-Amz-Signature=7d59a64ba2b03824d909276737f7e7946dbee8b52ccf6453dd63da844e5de9ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
