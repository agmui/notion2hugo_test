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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJ4AKPA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDF0LfN8SD4LmugLibHWIxbGiZq79gZdVnvWxULs3FgEwIhALcUpCJ9Jr5JW2YbiFMnQNs6kZsPhnDd19SizbUs63wEKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuxbjLXWPhQQGDUCEq3AMSj%2FhWXD1Yig9xl2DINSgre0mgqJ8rZ2uiPYiYPpmXrNWhWCNQdgVL1Uf3%2B6lvEY6ljQx9PQdHK9vUc%2F3hiL%2FzgOh181BBScy85AZVP2wyrUOeGva7qKFOyMrJqaxSuTAD5dvA1mQBd2ZCtF1LAllTfPcvLkAQzwGy8ITGPU6CTJBCv3sa9MfSa4DZXtsP4CnHIiTcvpOVlkNv2n8RFuDO%2B40PBb9y7JoibN%2Fx1o5wEscrqPZa2hmbDIpS3Hdxag5RLv4BTyRe6Qtn1qQcA1cxl3SMEz9bYCthMmPwhjzJ50kAFXIJQ6z%2BDnX%2BTqcf%2BM0vpQV9nAU2nvJqUFgpjflS5b7yzIJ3Mt2wTod6wAAEnMDuSFrgSHpT04mjHvNtg77mh5QFyP2%2Bo61cMoJBcwP2Y%2B0mAozdDZUFZVsvfbAYX02TPi7MVNdLjsrfl6bW%2BVswuzHEIQ4Vm0pDF%2FltJTo5MRz8sYaOA4TRSaPTjv0Fb46hvYBXplyBzdTnkmjhjmsPWbkmd%2BfEwl2gFLa0fV2f2P83%2Fe8bp2yErduGLoCCxMJOX9kwXrdXbyF9B%2FO%2B8kHNV1vK4HK84EA3e0Rwf97U9cdRh3RZTC%2FPL9sGRev71tdYQ8wwWFTq8V78KzDq1ufDBjqkAVRTQDmZfwTEE3BI4uUX7R2abNZUSn3eWQTbBDF8mHMo5JJL%2FZShDv0v2cnlUdMrzhK2Of5i%2Fhxf%2FkQWcKSF65Mi%2FLLgtDN6sDXLHWxMFVtjkrXFDMIWw2BRbIXTz8Rq12veV43LYlSK8FF2w9mRTWFb9ZW0lyFoOYKJ4pSTahIgnv0pHvSb%2BtDfnzrttVY%2F%2FYIEPKGm0rkT00otj9lg3cj6FzI3&X-Amz-Signature=4ec5b27bf27a456bb64da0b3a09e11ce1ed45b2c159ce7a22c7ae470d2e765a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREHEDHF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBcyb%2Fmf0s14UHVef5viX1dsejM6sovOOSdbsgtSRaQhAiBy0wasgxPDgY5qTyYrrRswHDZaIy1x3w4Yqg23a45yyyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAoCoznulcdAhX3CQKtwD8BuFyijjOEen%2F3EjoTUQiiMJUc2WbFzL74j6VOw8D5BlXJBqf03FBHTRVbgLnilBSguQAD%2BQIeiPpK%2BreZ7B%2FATqvqBc5IRWkeHC2KoDE%2BEAFPrjpbAesqVwOdlIr8GLAVWLeSrsf4rxC%2BgouPuWseAiY2IgoOPcR1dFZqyik4FnSP0r7Toh8XPFpl7cWLLEFPQ8JsoHTZgjA%2FjYuSjt5tNhuUfYtLFy5y1me%2B9ibWPN3pYTjxYsIwxOOzS17EuXIDeUoNCMNqX34nSgeK4dStlmJTldZ%2Bu6uWUQ%2Fq1ztqXLdwTwB0Uz2dqv1%2BB9r25L17fquT2y7a7KpyDUW9chPk5Zvot1687iuBYV8sMuZSqziAMWGP03zzioTNNXtbDhpVRiNjdsebaSnCVkun3QHxLxWPspxDq6zdFqxmWr4whOyLjPUpSCOBPafnP4pulOTFVbuZ%2BxO0%2Bs%2FSCF4kYem37lln2pbC2YOQXPHAwQlXejRGleD6UC%2BLy5AC4qp8YUby7HS9wz6vAevBBorCSXuVQ7xzV%2B0asSMLTugSDiqfPa%2FUP62ndS55U2cMh97%2BGZJLvgeQXkBkvxZIpS9rea2p8DLjgQO0fWSpqVmAx0D7prkjfGcRpi4v%2FM55owztbnwwY6pgE7q838IYcbzMV%2Bm1BfR4WgnaUxiHfgahbzKR6EvvzNuxy2i0%2FyWbsfFW3INr1K%2B1SlVDVtysC5yfCboB70RrdinSr1Dmd04c%2BaIb3aErRy5tkEGuZ75O5AAvW8EnpQ6olR9kwBqUUxwBLZmeWPRxtaCNSReFkBuB3KqV19%2BB5ge9xZxQJoNMkGi0eK88FOmLojtmgPz5VN70nn7d9aYWJpod4c3YV7&X-Amz-Signature=8ea6ef77b5712ce2fd95ff45550d2e95f38a2a00c0fe8be93e98fe35b96ec2b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
