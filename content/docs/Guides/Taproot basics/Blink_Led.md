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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPFSQDAV%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCy261jTQrhXsqvvrk8zWWB6UOGtwmB7UYhpEajSm1rHAIhAI57OHsNfGnYzJB2i3m29xqKud1M4HSYsEne%2BYNWvBP6KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJkO75eDP7dutPsUIq3AMtsEfBXfd6XBIYQeYPWRURROcavuQ7bsdO8DmfYpHlfSKTHmaoaoPkv8EsSVZgTHYkbuxyMt1t6BbrN3JNxk6yjjJw0ErMO3mzfJvf5jzGn4OCFjHjNPpZvIg%2Fn7LoW%2BUbQ0oN00Cli9%2FQKQTKcLxKVbn8zek3dMyd%2B3PSJjMEEyP0wTRQwPIoC280cwrPBM2HNTWzmFmViGBrfWuYyQjJkPSg0s1b7gw6%2F0M%2B8Lzt8SJSvC%2BzqgsjdqeUMIEyUXdtbtP41i6SojnfLFid0LCvRDKl%2BE8k%2F0Tr%2BFtfEcpPX4dhfW6VypqPb88vPLnbGVTU4EJumdlEI3j7ba066%2F5bYPQJTjjXyYv9YVLVs8XYcjJNmj3cW2w1FVXu%2BHTlcXG2oet6QvLE4qSOSwDrcd3Gtk7pHDIa4Nq3me0Wl1MpGxeWNomX8ujI7DMfap6VXWF6lcKkQ1S4siOonzFwo7cryJEu7aEbPsVn6qMLwZDqzS6YNCWYEWJGiczDfxX4%2BQw97NL4qrHk0apXKQzuXul0nrjl96nYYGMqu1nPyHAvbT%2B1IQS4g95HktIz4MkMJpZFK1QSVB8m91H8cviFTYJN3ViQA4IIdLWkk7l8An9DpAU9juNkTv50hMkLjzC55u%2B%2BBjqkAd7xgwdPrsWcdKJEGwUm9vXX5sNqDk%2FD%2FRCOLQGPr56tOiyDVPBAASnHCRmGPoc0N0SLPstjXilNECtZLEqMKnsrk%2FGZDTTRTeuxtR3DQk3dA4zDE%2FLXmpur5vqew%2B0alzhV78lrEO665pXOwC4M%2BimbjtPyThGS%2FPiUpqkFvzB1dO7OTEmXaprCUO8rG5vfat3KOjVmMXk9xWuoQG5jW0ZUlp2N&X-Amz-Signature=845c536c4bf39d77dbff9423a0df02a5dbb0efa1040a05e217e592a73c61ecb8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWR3VYO5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDmS930jbysl4nH9s%2FysAcePAy8fdGDqeamtHgXT%2FPbiQIgL7CxLc2I8Z%2F%2F3dn%2FJWYJCy0r%2BhbqgxVFua%2Bld6ozL30qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqixwIuq1xQtST47CrcA2RuyZ39uHW13xjX9Am7ZiiodWDJnR090g9qRC7wSGmP%2FYF14L3BWc9%2FQoNkepR3YhzT%2BhvP7i%2BBUbmtMIizo6jrQgz9RZN%2F3GEBo%2BKY3lXkW17zaoKKgpV78RpXaJO1cuLY2uiP1Jt18Y4ENdZfpKfJ%2BkDhyT49PiV0g0%2FUsKBIHB5BM40xkVaCz7B9xBq2IIcyKrQrcU0EjWeLnVlEvRPDssaPkThTNbo6r4y3%2B6h2pVR8he%2FVIL9ijuInUd%2Fa7Bv6hhK%2FoD7U6rJyMER9SkpgEKmzloeoKwEBkLZlCRg6P3uI%2FAtjq8O0rx8u%2BHFAxo6J%2FQ5VtRskoc5TPwsJoQUxBZsDvNBaa%2FBlyQ5YBXBLqCsMTXS4Ibuf06UsrdwIOpazeJnxb4ibgMDjvwtL8A1Gwf%2BjqC8GqWKqHl05zU%2F1QeOpPnrICSQzBvxQDoD5Xx6cs0WpIM3rtvNDti%2FCyUa4cVCOQdSYJjONkI1iaZeRcr2zE2pdE6v31HOs0IIsR8H9R1obEagMPHfVp8JkAs2gXQaSKHcKYOdPXCcGSagGZg6hGiTuZ1Wik7ckSHoTzsy3vHOcxh%2BS9hJl3BPJVfaoK6BDSa5NWu6xwdvRGwWLhC6ojr5RkqMP5MTUMMfm774GOqUBz0VUe%2B%2BE78FvXdmD9bL744uU6K8aZczgma8qYEyI%2FSFhEUhgLOFCT4bYRS%2B1ULEAkhWA0DB5JqwSaN0A2EtGru1cuYeLHkiIAU0xiLKNRxVW6E4TMplNfHpKked1sDTakuVe2dDzQk0Hy7GBp2a7UE%2FjdeuipJf8vVUVBhReYqXD1xRNh0cjOQbPjC%2FnYISNK0MpGNC%2BW1BM7LCFb3w%2B3P8272Vv&X-Amz-Signature=11ef94b5563f2b0f2016f5eade455bdee4d1ba8ff4fc9534095228d96b27817f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
