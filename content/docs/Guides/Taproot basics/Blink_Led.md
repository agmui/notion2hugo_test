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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXXI7SDG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI7BPdFm5xCnH3jgRiKUfsdb9WayN9fqtGEbGRunKSVwIhAMboB5u3D5T2O1EyHZk3uiunvbh1YexMjYoQDhrT%2FKNbKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Rs4X%2BhqwO6RdSv8q3APLlb69MVJsGAfbetOOvG1qyPZiFEI6lTMF4gg4BgUnWGelDMul8X%2BlAhyxBnBk9YI40b8wUgFGTg6nRVs7b6wS7gCpyDetbHqUBaQ2F4WMH7Z%2BdIMgvr9c6%2F4nLhiovbgLKT%2Bzx8v0RXnjO%2BtHBqz7luxuU1U0Z1Q2PSqHhDa5i4NrZz0rEkav2a3u6LjPWGaJZid7pRq8aRTDtCTLgAR18A2%2BDcScyHPuPVM267GoX4QV39Gt%2FszjafVCDiEB1EVlRW6%2B2dqxchehshWxx03zNXigMJwA2%2FJqg%2BGGyFZaDgRx4rsHUIL56B6drBQe6OjB8CYxKKWno6O2%2BeUvb%2B%2FyOHAqPuIxCh3x1Kdgmg9Zb7o2kS33nhHIoyfQBVrtjpkMHeqkXV26raqiiKZEu2LUnLPb5yk0rypdxxLK1XPjFPGyoPeHqkraqOQbGuTFb9kNC685cZ079jTtddtQyXD8c7gSQC6ov8NMhvpDC6ETq%2BrdjC%2Bkw4j8hcn0HW6SnOaTpPEy8Ve4V6tsfM96y1PdzWsSNYDJKvXTLybMtaR4SX16OtYtVRWWdmVQ4Z92yueiWaiDn2hX33ok0CUMs0Zm6LOg50uQnZstw2HY9IrIIbrCtPFSwtG2FaobhjDchLy%2FBjqkAWNwmFSHJJUPXdiPIWExJKIaf2P9l9XQvoY7C8ggpFnvLjPVqGt2JIfgjTG%2BqgJ6X5odZMJoYWQCCyL%2F9bb1tJltWgl1M%2FgHhE0f9Vhz5xnEAQipQ%2BGsCW4UYEkwE1%2BsNdDYeIdYYIQEOXzZ0h09OJjmgmfFqM2ARyFWQtXcncpIIRq3U8ZdzNPOrzR17pUXqOBtBT52Wt%2FbYkNT60pjndn48wRq&X-Amz-Signature=b0d2e780861d5f47d4ca508be3065dd521ccb7e499d0fa7a026edbc190bf9b89&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GK7OKWD%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbYUdDOJVf1wuh2Wq7pv1lzSEkZuwy5%2BYm%2FA%2BS88lfhgIhAJe3QiDVcCQjRQgRINb9hS6fLXvYDZpggJRHKlNtBl%2BtKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTTQhm3x8fge9o0f8q3ANpTt9VDnfS6jHx7fnCSRHEIHRRZx0EB6F55QUKjUylfRsVP5sUoKGg%2BJZfRt5to7MqjR3TcPKJXjgB%2FlPVWzlTy%2FjvPT0j5tsR5NIc0DCzQaHiG0ftJIqLgOBXWhTlcU%2Fc3RiPnslMVe80Rq9KXHi3JMNbFQbq6MQA2ItRLJQNy1UiUM3vBfOmImQ4lUOhrPPCGNiM9qYQrwyogXNgOJryVw07qBXKMZcNxTrOLWVMOZ5f9c3PK77LRsI%2FrCVZwNcMGGfi2tPmQwCH%2BgdGkB45ojUgERe6j5GgHLALHUW1TxwGU%2Bpw14BoLplYAf1Aa44oYVMp50QQdUY23irnrIP4XOUIh0hH9b0j5E6OZ4LPvp%2FVcQnqMTGJjiWGNgmJy6HwWjDukxvgBJrYI4EB7SfoqQXvgrNPksZRl2HPfpHZrX1Q7YCW5w9bXeotTC7il77trkxogshQTGMV05Yd8P3HrMIMbQfgKAnH8fsQBsIX3DZoaCzbsZz4J%2F6VBOlO8Q0EYTmeAdkFSwupd2DX1u8IKFy9UCNV4sFpV1ZOSrOmhgr7DmlCGWRD52WkuxksBvW2OrwVUfzAG5YpoXmdBgqvBntsnUsgAoEr%2FXfok6O0likZJAmVtM4qgmF%2F%2BjD%2FhLy%2FBjqkAc0Dvj%2BCD%2BqxL7ayQntp%2B6J7drSqD4qlHTIgRCa6gjv4O4c98uuRZb8VzBYCkWRwx0ZJVQV5tNUSe9WncrviapoaufILhAWCGKbuyeqXTGiaSyvPVHVPg5yRdPx%2B4QfMedHof%2FwHmXfXxppv8rL7290Pjn6Xo%2BZYgWBEAN5909xY%2BqFrooHj3AOzGYC%2BMfqnTvnhT4DwO1nsJvZyKJ8WcNrmzDhs&X-Amz-Signature=dd382d1e0f8efd7e6eaed3fc5a3d26a94dcb483fa6f0e561dfa07a18da9a3d1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
