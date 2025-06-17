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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEE5DAO5%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwh9tOYBjXr6z8KGtdZLZqBvgyqGLnTEA2ZzS0ecHVYgIgL4yyFdtWf9u96XnA2G616G3GwQBpUArXHu8%2FCLxKd9oq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDO4TCegrBBrOFneiSCrcA9b4NNwTgXp3Hn2S9GqS5mFUKEWJumCS%2FheIov%2FivY7JQ5c%2BOZN2Ki2qOlRvR%2BV3A3zkGxG%2FgB1GL53LB%2BxUMfqaDNkJmHhLXuIBIqwNWSOLlJt5yyG05CAz6gaBxrJ48xgaQPd8stHUaLfFmrASYMsvEUjianUfcMzSqf6l9hFNpOYZFv3S9jd%2BiuqIchY4YBbeSHvdLDpGbzb91xPeMlHc75zYe839nJWkPHRO614vxl1L8u2Gew4GPPpYY9rkDLQJmLBkEGFM%2BF377uqUxCkDZ1w3M5PYsTPQ7VdbndDG6uRZbvl2w%2FCvz8mzd8rmEkl2FPlZ89SYSwqogwJLEQknT50FafqNONxOAV9ZXW5MbJG7T7g%2BIBBU91YpHUAVNhJ3aFV8pHzVhJjSsZMqdxdajkuPpFqULhF%2B%2FV7LYEph%2B9p087jzoH%2F49dlaet5QhPY9MmV%2FgMjt7nJO3LQhMlwU7iFEU6gyLCKPmfc1UKVjDs%2BbN4JPnRYrff%2BNJMVIuZJXq3LDbDMHeaN4KajItTv%2Fdh2jZtHoAkRVcAk7NMhHGLVWZqUsJdgkwGJTw8Q33n3vK%2FSVsJvkVCcbOuCp0R099jbTr0JX3R8Yask11TD3VTStkdeYx70az0FDMMDuxMIGOqUBMTKmXFu5JeMqNaapep%2FQMArhrEGhJMf6JyWx%2BPd99TpxQRf98s80SD7MAn8mMnYjjjgFDl1vd5naEnYKjMEoPyf%2Bdsx36Q0EJJdVIy5wyGlsHgDRFJ%2F9hrYYHrbf1B9JRUDr9Dowzu7EVwKBNV1QVJ6%2BB6VaQuu90%2FaST90dSOHgOWyOhTee7bYPLM3iRkSe77g4tHQreftAHSmlhmlcKvseMszK&X-Amz-Signature=af47a0ff44c60f931a67bb94361beee7fa55dff4c3a5c150c1cb82efa7289ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667LSB2EW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4Uy1yMhGLrIEWgxL%2FuDn0w3oP87p8vpvCPUa4A44qrAiEAwWfR17M%2Fn7hBaZEFk3JjAhRs6Fmwfeea087ksFrGJqcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIWzLPTqi%2Bqny5PL%2BircA7H1ABrrXbkUgD1vSsyD5ApSqPJ1RudCMhjk8C%2Bg3XfJrVASlUeB%2B%2BN%2FEeniEJn9J%2FKklb3tpTQ%2FxGvaFgQ%2Bf99GyPEJjPfZiOkY5QRZ6T89E6wvE3QE1q8hvBaoTBFSteK6Mz0kXXswsuvtbAtqSbT7o63379%2F%2B9ujn9VhMJXQXlTRBWRlBs2yGq%2BvIz9VMh95UKwoi54IrsmTMp1g0Hb90ufRBohLah3oBAsvl2SkRTvPxvfOgQfrlfl7i82OWxn%2FwQwqxP0mvq5oVUotX3IBCCHHTbh7mLirEzIf3dpoT78ot4Uhjy2%2FeI1QXwJxb2%2BYTqTNBufDTUAn5%2BFe5ds0ztbOqZg1XPxBay1NXQid0YEciAwoojC6hEz5MoQ1wx6NcA%2BBZISvz52h%2BOki5Odiz9kVdAlJTnWmoCjAiYRAwBnAETyRVn1wn8V%2FHZvHxKlwet%2FYWJT84dhJfzqy8MkJmiAVFH%2FB2ce8etwCfdzGpUAn9uyskUTXEIGVd%2Bc1xyIG2wz0c30fTcuUUYruQjq5JSNSyJA66DmoBYqRNPATFp8arebaJLmccO58BykiTfYbwjL7wyhXfuEhpGk3yH0C7QYC4p9pIr7urtsb1pXHgbLrBAn3rESrWN2BiMPb3xMIGOqUBgZDxL8Z0wua0X884YsKfzs6v1AquZGM5f3LDRRkwuhn9%2FbJqm%2BDwsIdNyYZL6DoQA%2FcP%2B3mqKaG5rlxZ4HV6QcQueFDgTqHR8J9LAqS%2F2hCudaMHXZ8NWO80Pjxhu1EgOY0C2P3JfmhhZUhxK6znvn%2FST%2Bf8NAkAOmfIDERhRTYmbS981L9zSC7IuGL%2FR5ZobHXIKpffXJBIZnOsDQCdJR1YNg9i&X-Amz-Signature=922be8b5066110bbb80fb7e6499a43fdd8cb7825d9f114c850447c7b9d93320f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
