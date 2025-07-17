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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S4TQZAQ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIDL311USHUwrSWMUfmPIuQCmap6btGfptQaV51QzPUOeAiEAxjQ1oxVOAF%2Fq2%2BHS9lxIBWk1Ld9YMUApWtAMwHlvG8Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLhGQjbmqESw4MKmBCrcA2GYN5dqjmB1ANCg3A%2B3zuiJxy8%2FId19gsHmJOfhgcdXgndUjHjOSkWDHALyrVXmrIkPPGSv4z148obmFEktpiDd1LPUpWQa5h2o6L%2BIqxQTs%2FGnGqQGfYjcm3tWabN0GYRHKuh6WWmgevVQmW%2F8GPt52Zv%2FUO%2BjBvU0d58waeujtc1b6pbvl4ETTzeJLjLzksjmSkHhFiacNJaUbDiNq%2FiDgqqtldXLQDlWOhdKnm5WwVcjcGZbm5l2NaLok05xeVUj%2F27fBNt4WEk%2BLNmYDVKFErm19s77mrBeI9C4Ip7wdpOfwI4bCHm2%2ByJHbvVNA5vRp1cTB7s3lyWxj3qGoYbWettMjhti%2F4YN31EN6j%2BMXHXegPMa8xjkaLXaaGS6kJlechsij5eBnPslGyWs3PMmlJPZLHmODnYtH07wiQnd8alqM8F08q7aUgvnQSS96XSn5ufLxBgCAk67VeGz1xBuVJHeHIO64rQhjqrlYaHmR9k5JFQZEmkfO45BxlpDiIbIEOuyrnTyfthpGtkNtKHE5%2B0Qb7pOixuRJV6fklNiYRVTfve%2FShlUPDroHlTSXzv1P8reYI32x8FBg%2BYOjkbWIqf9BWxRnwpSWpf992AsQ78t4hDlYzrUNItCMLeK5MMGOqUBnhFXAN885XRjsHGXJCAkcOhe%2BKNIV0gAzz4P8YtlwjRb1JZRPwP2aOwEycOoTjd%2BmJtq3cvtZpDx81gesu9rYUu8P7Nw%2BPIttJH9Exj%2BP3PYnDLqdbDRR5ypqfHZ32Profzcy5Wh6Vwwe0O7Ru0v57%2BHkQ5%2B3XKIvHtlECwhBHZ2Qu1uoQmKuon7XQ8DcVzayVRia2URgqq8El8xRWFO8fe4NXVz&X-Amz-Signature=72f1cd44ff0df20db7c3c5aabb51e0f7aec3ed2cba7dec204d6c2c21973a98a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDXPTCI6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCNvMDQthQ0iHj73OatIqjqI7LxwyWUwO1v2uWhWX5eGgIgCIUXe2vgJWn8DyrHV3%2FwPX8CAlwyAVTJoaUy5ZjIFkIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNROEPE1D49SOkEzYSrcA30PDs8C1E9zGmTalw2JXidxvnMtFUnlEgp1NsfumpcyM0TNRVpezQf35LQ6ZdIcCedo7WPbpLPw91VpO5km8xh9%2B3RmcfuROW1d7x1oAW9qPtJpyPLKkAZfyVLJvVANjCsfoZ%2BIyFN5UJDsZ6tfII7rBMdVll9mzly4cw5%2FXcSB3uLJhI%2F68x7I0RNaH9FSngjnWX4%2FKDUAGGmAVXXnyQsX9%2BmL%2BToTY89LC6jkevGGYBJWxVKQnVuR1Jq1PEH1360wy0JFkZZ7u5XqDO1DG0W3UlCvOpbpt6o5uieAfy8l4fRn19y4rv8%2FQJ3rUvrRA2whLQeg4mA5Qd2VvwWQHaRJ6R74Jmz0IniWm970EyMNCGXGHlCIz5en0WE2N4qnUmUsYD5ozx6dCi36CUqkzG4Zu3u2%2BnoiZaUsFTghRCG4PsWNIqYQjUjtUjql61zP9kYAUfiUUw4gvTvxJHF8kuM73ckIMI5EgT3Rp0EJyfztUkzVm8jtdS32p5buXW5aa7zeKV9cuJs%2FjBQ1dXTF2jMp8V8mu46rwQsOo32Lb%2FnyliPh7ev%2B%2FQWpmD82OUS%2BrSlfeuhnQCNQd5y02ilHIWC60B4GtxAa5SUIm0NzkTcv4Jo3I0kHzMmlafR6MPeK5MMGOqUB0OeSj6DtApiJFNnb4CLRg5wWNTOEPFvEzQIRuopwrFcK%2BbJTBk7I8dofRbrbZjeVhdWj42f6IfUbyHggYNfPPKXrBXW2B32WoW1rHH%2Fj61PgPlIwLrj2PVVDlREf%2FoeUXAWczew2JaZy8%2F21ZL9Z%2FvLkC9AYwSi1b4qRZ5MzCYWqYOSfXn0VLLLdqY9%2BNmFDg4oOYjzNb%2FS%2FnIvAdSOcg21xOopb&X-Amz-Signature=6b916cff313c121d6275454f6c2f3e563ef9616097edfe90336a846f5a857891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
