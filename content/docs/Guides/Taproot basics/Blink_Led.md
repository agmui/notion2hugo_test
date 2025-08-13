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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY2KZZS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfKzGupgS%2F4wTaS77ea9FtToeCr%2F7acLhT%2BdueJ70mRAiEAv4TyeR9ISj4tUE5bdXVOfOEe%2Fi3%2FEYT%2BO5qybMPYURsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBYXzdd03zfyQWgCyircA1yYoDnXmmB%2Btz4y%2BW8ARTUJpbA1vOKkOxzfDyVfyIM9u1V81es%2FfrjNOcWhuP8m1G6gjQ%2FSTnmVpLt4Gil0aOxptLGOIBBrAIOgRRkYsRpJoZ53J3K8z5YjFH%2FbbKi0k2x8Ao3E%2F7cSrix%2B%2F37CtEjCGqxWVBGYQi7WoKgndls7UPfXkSxmuDFR6UtDg2gU5oadEInZPWzxqynOD%2B%2F6DP5dCEwWtI%2BUgfcbBD%2FVkKmXeOl3YN14nG7Wckfhp45JG9WAiw%2BmTrS3o%2BaZAvhoUNUWB0bw2b4sLYXLRJpT9KBePy2RKMc4kDuiwsOiJCrzLt4xyb%2FfGE8UCcXWtbL1zbu7JMc2CuLPo%2FeO8S1%2BOlGPHbKjqEd4UHQ6%2BBSywQUR9EGAhW3S5%2Fce1M8xXurAOWS8sJFtSNqqOeQfJRJ1JcOKFSv1bd8i19yXhVZdflhmplyijqFAMGftrDaOH3ci1qHzCYUyJa1QYMQtL5UeoRlWTXey9JRss2rSJ0Ky4sm%2BbuVybYVzSnojutRUSr6Hs5sEBy372OxwwDcE2NRJK8x4oOjCYmSb21nKdnKUpnVCv%2B7g1RHSBdxU%2FT3pnjY1Isgl%2B9h5XRcbKvCKn1OQlM%2Fc7uYLmwN1cAwT061SMJb88sQGOqUBT1QdTD0wd33i%2BAxMBpQs8KwaBOQyhB6OwtQTTH0cqyteiEE83rP68gSzkxbahn65TfjuklXLR4dMq7poCmMWdkbdl6alJbCEHPlTEoCUxCECslybwQtaoQMaVZPHcUpeSo7A%2BcY2%2FvYXf920168kcDjkUDgh8bBtUEGONFaKuQ0Ld6%2FBSDxOh%2B85QyDEOoirlleWOwwUDGiFdkv5AlTFsolRIgUp&X-Amz-Signature=40d870f8b2541b9902ff5758fd74995810d7680f4b88dcb82c21b3c49163d9a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOW4KTNG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMvroV3doz4UMcx7jRIIEZkHwvjzPWJ22VBFDAq%2FCOLAiEAs2Q%2BeX1gzNc1m5pJjmiDiKp3fcjPKfKwHVxjHAncA8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDD1kMmLImLqHYiUQdyrcA6QxsaWIGZ7Tnc%2BCdreGt21%2B9iPbFKm%2BSCVLW6w1AnKrafpMoa29GgI%2FugfghT%2FCh%2Bg5ht%2BSe6FoXC2U%2F6hS9wcAODOXnDHEStvseJTHGkCBpLmF%2BccCwhyHE97vcuA9nN2jW1ZUBfOa4J832OEPmwNOxJ5T5Ww0RF3IDM1KIUWlRxKDGsJZTtmKOSfYJeGyk2KXEC5TzEA%2F9KexhbsSjCYcYEhMJQu0WsqWmS%2BhOyCKpVSmycQ7cNu24p24d8zqaByr8%2BZT0rYcnMwnvqgnYvGGgQlEFMzZPi1Ie0j3xiCaLzjtPwZzDu%2FN1Gfu%2F%2BYV%2FAtJ4TNt%2BTimjc3dtI%2FH1KQA9WOVYG79VQa5YQEyXILy7PkrsI9vF9CZRcP54WqgHrdMjlyiWZn5pxC5222id2KzzRhh1NQHa%2BGozhfXtPGoOOmj9mEXqHbhKOJuSTaO9MrNbuyJ8Xe5H%2FpiaL8%2B5Jtozzx3lwWse0uqMnbYTxyPDAI3if0IqN4PSewgNzYAOj5QSVH6%2BT1mOXWDZ0Cf9rd6l09hBgqzTCpTFT1zU0L2215W3rcPHj%2B0YggrKF%2BIRQrVPg4Rhzayr7VSsDVU%2FnYA4MR7yhAa%2FFN5LuiksjX6XRLY%2FjS5o7T%2Bqzq3MOH78sQGOqUBypwlz1jpEoXVj5iQ2nHCmVtbyVH%2BXTCx2Bf8PgbpUVJBeEaKRDnuj3V68hUQ63ZUxOxjSVrxb6O4kWUYiqUT5KhPabBmnAzhQ%2BmFzrt5JCS3ZIdORFvTnAGQkH45tt4ryKz9V4DkH3zfVih1Mn4EP1eM%2FVxRY96eaYy0%2BeHiRdATQHJ5O0o6tdZv1DrmVsR24GZW8cRSTnVmIxWXCDptgNmET25Z&X-Amz-Signature=e3701a1c18b397cd1a5284b403dfd293ceb76c8402f0bf521944354de3fa43d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
