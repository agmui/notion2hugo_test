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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEHX7VQM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCSUA5J17lhbMjTUhmn9MOWT20ZugbG34poi4QoIQxWRwIgSN1aYbevOviPyOGq6ucgi9VM3ncWS3QBkuB0bgrldCMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIjejlNtxxMhZFeTSrcA5e75FXyJ5bKcf7G81wUQHv%2BGdPQwck05a81%2BgOHFTFHymskwQZiLuSXDIXkc4BjD%2F5xXzgFj%2BrR%2FGybRJrGKt70OLYE7%2BEku0zoaLmboBN3Wc3qrfkHBeUCU8wceBi1JaFi%2Bx4lttIzZGCp%2FLuaIwdyKWq6nLJ04%2Bk%2FZCHUdepBtPrO3lWe5Fve5q5amYKLDEDQB5K4yR4iriTktU4X2Q%2BNhvvUm2v%2BdkvNDbILLwfUw1MnFL%2F19oyyztpgrd1c5lArK93VcgrEMQdNwz%2B8tVCtevFW%2B%2BW3wUSEmzewHLqC5wmNmIc2%2BaUAYNNMnhx0l6jhf1Cjjv1v8f63HP5EMnDESkyEsNU%2FTYKaiZOLC2%2BAfbCdH1yTqgeT0geWK29Zx%2FTvOs1%2Byw9MOi1G%2B9P212fouSs1PV3sY%2F6RrNvkyuZrFN1Jik%2Bz%2BFUtb%2FQhOpJwsp%2B3BxBHRRKmHS46ZISZz5zBsIHkJWKgQ5es7nfFChq%2BwJrIOBhThnjz8oPpd%2BtSGpOBzaFBrYhPtSbP%2BDO9xu%2BcYHrXpHwQ%2FjfONGoGXZLymHZw8Cp0j8JEAA4s0KDtGOZzxVOw818AmltCSnf5lj56r9E%2BjcfcW5Ar5LH603nWW3bP%2BBzwcNWWl6A8MMS85rwGOqUBBNlyApXa0zBPw1iJRoX%2FBHaNPLXFymDkc2BooGz1FGrm%2FyKr7LLjyv7AGYQOhtA8322ZCpBvAjnIHkoWuyZz1CMbvgl%2FY52OCOX%2BQP6TByH67cJDdtjnS6J3wKSGWJKW4dXyDB0IwvsYpIRAJLUPmniveggRJ6QRpEpisIzhUBD%2FVO98xNV8WfSgiEvEXv6AgAWxde6GW4tUuHAuqRU%2BJZqhHGOb&X-Amz-Signature=f6118e61e01a26fcbb7acb617a577c0e57db6c9ca57673eecf0a159175d33352&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHXLS73%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCUzIsVKjRKplyDo61HnWsEiZbKBTvSpcmfkTYXuoENCgIgQdytgK7I0oOHcCi4uKKernA2uQOuHwjLjXlMe%2FRN3gQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEV18u45kiGFZofzrCrcA3%2FV06%2FHViCqIAvOXinpUi7c3jIK0iQe6c4aILzoGuwSzI%2BV5Ee9taZni4AWh13tiYbKKWkBUW0z5oes9NNdNLVviJ0VkaVTExLOtOzEy6n%2FcZxzELbWAPWBx3u5qlwK5aTW60cklIRfq76AW%2BNAnJNo9diaoLnRNu2Ezn6FmBrnvvJ3XFbW5pcCWLaPrO7W7RZhIpAVkWR00%2BGB5AxQX4tBGJsuZrDXbA3u6L0yKBOaFGAChpfjpMyoyXx7ORnjkfMvOav%2F0luPoIMj6AWchJA6DcnzegXpo2j5ZFYiLP%2FWbulnsKxqu9mYldIBVkA0TFY%2Fg8VwOjjzqvcnyAb2NJTzTQhxmaXh2jtmk%2FbGpzt16hcEvTrkh93m7%2BWHuHTdB3MoNdEF9vij2aT9mBcLvI4kcU9cNX1e2TPd5SczMmb92zp4sPyo4%2B89TkO%2Bppn0R%2FqZHe%2BmwH1EnvMuCISgxaFQEK6bVY0UL35nX2v%2B8jP4uo9O1kYBm05suk7J0byUGa3jiB6wPb4R8ldDaWN65BuKKxK1pWho%2BCpUlTPBsAhNINPdSIJvS%2FCrCUjsUIyFJ%2F5B%2B1fp71pKERKEeTa%2FdYlEnX4jj%2BnNiLU23TZWOvP8pz2rXTfrmh1989AcMN285rwGOqUBNoVnxPTXHptiE9FwOP4SdMU74p9JcfuhecBEwxF0DmWnNNQm5rIrX12lg%2BKPrSQNdxOXk0PbwkMZawbmsKdzDaZmy0juBKZGAUDXPwN4qFmuhAyPatbuO9y1O8DfjqmTQXBR7qeA%2F2zZPSGHwd%2BR9LYuvkOFIRR8RQrZAlmI5AuMvyBsZ0igT%2BL72aA1dkEKPrXrZUqCha9xKV%2BAEny5nvSygJhr&X-Amz-Signature=a4b13fdef6052b0b89e945482d32642e285e1b7e38cbd6c30a5506772fcf5266&X-Amz-SignedHeaders=host&x-id=GetObject)

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
