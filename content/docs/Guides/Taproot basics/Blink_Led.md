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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCNJADG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBi4F2N53T191P5%2F5%2B1Ivx5J4Odd%2Bi7OYqQWcFHmsR5uAiEAx51psPlUmlwZta3BHg3c3g%2FURDLF3yLZRd4mFIMLP88qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDON3u13ZSbxWkzGrhyrcA%2FF7ARGb1rfgzmtgCFrJRxmbwe0E%2FjnACWzKTBVMMb6gvdEyWpQFOYriTK53ka2uGfURTOLrhqtGfJmsPezcVzlySLy569uWgMOoffGKHNKJGtQ0eRuXM2ukH%2BAJCqTKUPc3ZzzU1GNC3iuDCjOYtVsCLMc8URtsSzbYtKrWHcLLdZ9yVy7zzskVPUO3RSgQUojATyQ%2BS5C2bahAJJ3MwuLKzvMLqAi8t%2Fo6bbWGSziKA3X5kP1KFgigyrpRNbVs6RmZ81GRG%2Fnbc0DKeFsGW5V1uuRfVgmVySMki%2FrPYhT3O%2FqPzh5KLg1035zd3r66pHWFmXAGWOYZu3s%2FCrmk3N2N6ZyG15aAxGQMo%2BG416%2FX3xPj3Q1k2KmaHrzux%2Bfte2%2F9jSJjeG5pwV5%2BZGKxBFUv0YMqhjcoVZoi8DXyGyM%2F5lAD%2BMsZqswkZrV6INHmJHd4vw%2BL6%2FsYszzxXQNkNYFQJLiaBqfpJuQVGHpALzij1oe6yW6Z%2B7SBA4%2BHe2%2BHhoJZMPzx11Ul%2FsIblpx4slMm1nCGKFZMKTbPx3rBO1JTbfbEsp8V%2BXh9pgDZeqrDYYI804vCa23oUYDSh%2BIZiENXz%2FaWBGHX7Cm3eYE2Wp6rYHLE8rRKgvoEmiHxMIb66r8GOqUBmGsOcSnzvFvL%2FWWbw%2FB%2FUFJX9zwtH4C83rkj5YzpKfUhpKFhQzBRrP9syzyEq4H6dYqsi1tRNMzqClHVpqquQDqXX0OfBeGbWHqC%2BBHgTltZxP71ueJlBGcpBIYMNQlkA0S3pVfR2WHO9CkPIqma4WcXQbrmvGg7WbAw42floHREENdqrwRf%2B6M6Q2Ofz5NLt8IwPpqplryEyFJykLGld5Lz%2BiNX&X-Amz-Signature=4ade578e90cac17de2c950444004bc551d0fa23df7290dcf0597c9d016d8d2aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423VJCXU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCYM8CPKAfY94ISWERdMJDw1GjUK19QvG7I2nsfhuM8ugIhAK8hW1CQ5%2Fmn3LxJKq7r3OHHwuwmO9Xa1dePBEsvuddbKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbW7wfF%2B7YgG3P%2FZsq3AP1KDce7Ew%2BZSr9%2BiCzRmPXQAQaRI2Zzyn%2BzcJixCw53lvy6nw%2B8UOxFlIQG4ROiYJZMmB7OSq%2Fe7%2BEo8eBu%2FYMFO%2BOS0DD%2F%2BrPKUvdrfhiDQ44yudzUb%2FdpBkrb74cijwKVgtTvvbRvpfONFMy197p10A%2FFjW3ZjqTNnHwq9kkVm5%2B9ban6wKPo%2FTfm9OOs6hGU7yxnX2Ay1549kk8weG29cFUp68LSlR9Iphwp6V8D6I83f593LXEgqdSy1FLsoIVtKTyzBCNRiRmTgqvEXZiqJYDNqb2Me9GQSFRcCS5VMJU519MBXQgR4F3FHAdcFkUc2Zf%2BulALWTp8qMA2%2F36B7jlawYPhCUzkAmCfQT5HOZ4UjXrYYUxabXsMiHcEgSXAJ36h8V8d5lfvmBQvq3SZuBioCoay%2BsZFxJZi5bv%2BUHhUM1eElvd%2FulF1k3aJhLcDQkyreHzAGUa1xu9Ds5nCHlkJ%2BgNEt4X%2Bx12ofcqarcHIOhVa8wsOyVfPd4XaJ4i3GHb3SX6EccYnefl2%2FgyKHa5%2B4Nuh9pQs1tf2eofSvIWmryqovuHiTQoS4scYRH7465l5gycjG23eJNGVNkwo892M8jARnOnBhvs6JyUmcCFSs15nO%2Bgs4HYyTDc%2Beq%2FBjqkAV5UCzpHXTCFzDaISH9W2V60%2Bk3rp4h17DTqFueFbjwBuXfUax%2FlOkD3VFo9RMBQH5IJ9PWAHJp1Z%2BAlQET3EyDBW9%2FuctklZlBvD1VKvfyqgYEJQmHcJ0Nlh%2BPqltEuaP6JS3lItxrZWBfvFsaAFlEWFPX0az%2B%2Br7vF0rRjZ9hwBs9oQS43Rd8e%2By2%2B84rE3L5pjs3dc10iTuOAFPFP%2FyApCDl%2F&X-Amz-Signature=cc2c58d5e10d2fe2045a81d188c0fb04cae91365b290782f9ffeaefbd9c9b2ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
