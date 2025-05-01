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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7PPF26N%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDQX6NQWWuPvdNzuuZUP82utxoww8H77mGTHx6UqWayBgIgD97Eqc47N0K4U9cnyGBzkFRvTxObctN8Pdw4ll9iJRoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXWLo%2F3YVHmefp9yyrcAxF5BNc5mDTu9OLvzjTCbgJKCm%2FBg%2BFfZYndr6uBrLLPSy3r2YdNafsKWYVUlPps5kGNeXvRzGMo%2Fid1EtOfs%2Bv11dHOKtOIHbtHT1FlS%2F%2BxiTrLT%2FNIfP4dLeGU4HNuYsl9yfv%2Bl%2BWCENBn49%2FNjcosDyxncCQAklj3nSQ8u5QAFBZU4aRiI25Sv98Oq8%2FtY8faQgZpcRY0CuGdGwUFRljPviMJa3w1u2XBnXdzWaORly5iFPjurKEJ8vfaFFD75RDpcvnNVZ8WmRHO0kLO2s387v6VS14PMx2q0o7KlItd%2BgQFp27LquWnw3DSll6Inw8fferYRmYUZv%2F3Yy9Y2rwOoa5W5%2BB4OMPeqZj%2FEcJrM9iImcQuT1%2FWZVymG5tc1WK6FJUXfu4JyKubdZSUN1F9e7fooj2rfQlyDLjwPw%2BpwOS7jSGB8zDKngf6fS8nmjshSKMz1QPN%2BP6%2FP6sxKxJf3vMI3ZfUkNvW5ibLPOqgb4wKNbv47nh7Zq7ekJVXIafcI9%2BqqRz9ezEU2jCPITjHWLXb%2FPThHqJFyINXJCBEl09rCHvMUT9ne914sMqqG04vIWBX%2ByY%2F9MjnsLmLfzYRGOiskV9kcO%2BDMwCq%2FOSFlIWoiNZz9ztPWSwRMIHJzcAGOqUBqfbarQPfVZ115l%2FumgVmtzGE3plnNZOmJpGudWss%2BXjatQs3iIjYxORKnESxKHW14hbT8taouTLfgt27DQQzKaa3w7iOnHEFYmp3Zs%2BxzHg9UmlaRBaua1rnBy1%2BDkQhFQJDYwkeaW4euQ5D%2F32QitzA5p1XNvMnG2wc8Zr%2Bs37USXt4WC9WdKnW9Mjw0sj%2BzUz2onGN%2FXOjLu0njiyL340Cmr9b&X-Amz-Signature=4a01f9bdb173681eb6c59520a96c97f9f27cc0b081a0c2ce1a57f9c6d13e048f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJCK4QM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCp7F4NFKxgXEKgmkzgKIt2vG2YRb46uRSOSXcKbdOlLwIhAKB91o%2FcLAfAGqzzxafQOapRzSRhOK6ikPNIqW1kjLtZKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeQDjhFcl1SpjYvwEq3APqpDVfbKT2rbZXOi8NdGHLmNTbSxyInCxQR64I%2Bw9si2lnhHQgOYnqeG3vi%2FVCzfrxYwDKu%2BZeUayzVAzLK7ptx3Ev%2FLRdZBlLUBVGrxaNzUnWUf9DvjR1YvgAaupOtem9sWA%2FU0D96BvK0O8BbGGCzEcGBBEitcL4WGI1pIHEZncmyjvCz9H8juOLvyoIIxwoYfryqi9x5C8axmOE7%2FdNEleGZaBJFi39KoKuv%2BB5WcimKgyb9LyfJVVTocIbj8%2BnMDbkFoDrLvHMM7crGhoN6QtCW5gl54e%2FYRXj39WsP%2BlAZ%2B7Pxku%2F4cK%2BvEUoMdZ1tepIo1nz298lrcwuDDIhHBVdd0YMVppUwFBW%2BJIGSXL2l54obSD9U5RdnAE8FT8SrAwU%2F28MGjUMdv%2BO96uaM1LVib8IDUwz2SuAXZ1gJFlgsB8BKI%2FVyxAoy1gmoOSgdVUx3QtmC8rCi5Ps0%2BnlhYiX3ONI6cuTWPQ9Rp3%2Bph8UurDsvWGWzqjP0H7Ab1a4AeanayDUTwQ6vOiQNOGRGse9o1O6oWjHBpAXm5ep6Y%2FOnM%2F0rG9MF8mI8hwN8zRgiV0%2BjQHg88YLlp0GQIGWOd%2FAhnI%2BDb2fb0End5KeJNdFhMzsisP3W2CoTTDgyM3ABjqkAZn4ttRij2UTUcfl1ZM6NWz2lDicxuZWalUgXoFUiUYLsJGQxp0SgwTxvrMVQCiAo09WfusNH4WKS%2Fi8KdGFWmPJYTtfyK8RhkXganDGcHWYmsH5aQqHZsB9D%2BWP8kTTLZ2O3dBGalad4mk1dO0GtjzTnmkQTCahm%2BxzK2bByygl9Q3CBOIjqh7VnIZI%2FMDyeEK3fFrjr5ODnGS4hNZxtcE5xJeB&X-Amz-Signature=34eadfc3ed2d89c8b283cd3fbb7a17e21ec127503a21aa9e617aae2c09ffb55b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
