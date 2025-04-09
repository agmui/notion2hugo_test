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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVL6MU4A%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDXqq%2BkHa2pzplTz2aFOw%2BVmi1v7iaBHhwXR1gZSp3gSgIgRVM8hr0dq7JnOzIu1teTujeuWhNqgBscPYjBkbkqfHYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPknLjKNCnKmn4m%2FHyrcA5Tp%2FOum2ryQq70cQN9vIX9nglrU5YN0aksWjUbaet%2FjzOkxZh%2Bu%2FJF0t7lQjt56yEkSp8Jbuaa0ry6jU2ha8uk%2BG0KeVS80xWRkp3Yl43BqIHk5bIz2z0Fptv7oX6QAl%2FqH0rCUAvbX2y1QA5e7bK6I5dmpPONrdF20%2FEQu83Cc9QbVhRLUqIxevAHrTFhowtwnCC1VLf03qFvf%2FfKLskI5QItZTkzYhGGskC4QRezbR52KpwbG09%2Bn1WrocBfWM4AyxZcBelGdePUjPEUUMUkV4OMAughsYrDNMwAhLiEnr%2F9JWlbcbXT0%2FzzWDOEW0oLK4cDq79TFiVfwtwOLs%2Bk7UgL1A5pJmR0A0dI2mPh5h9Uxe0nlyaDKtbt1f5hKulk%2BnaT07A36QmxhJCL3nb1kC7gq4qfeDIZ%2BaYlDlecJeAnrZZNLmlmmXQa8SV3katwVBdbeOsKGvBrwHatcZZn%2BXeJ4%2Fl5gNvwRQ2GvYJG0ZXDNSx7Syr7H7Q0viYsPZLUcC3yqVkmxNJdb2KiNaHquz71vanuANMszt4sbh87WX2RnsWORWBH1VKxNSU3mVxYMuls42S%2Bvi2H1%2BQrFWAcq6UBUVYiEX%2F8WY3Q1%2BXob5tcdaTloA2UukLx%2FMI3h1r8GOqUBNmJM4RMda6ozk1CXAAxcr2p%2B%2B%2BNvAt0N%2FSZcmNjMQPYPIpMlvDo14cwE2GqJVhMoFgCR4RjDHaIDe%2B7UMNLH2TTm6S2Lu1kpC2fdLVco1KFNid%2FL4fDt3DLLfCJMqSfdOGm1wx5HP%2BCeKk7q%2BYmfSSrv2%2Bl%2F49Y9tr6lRWFUUGBgUrclrJZa9reejb3XcKoNNTsYHCORkdF%2FngRj6RqIHT3ZWUV%2F&X-Amz-Signature=3c03beb8b2c3feaa17c9db9b8b8e2f49cfd798a534a8eddcdc3b579f322c0096&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RPEEBGR%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCCEIPUK1GgdHwFj%2FjWcGV%2FCKiT%2FbjZINOr9JSkXxLT%2FQIgWbHe7Zc6%2BaWMTPZ1PLnsK96IqlefCf2amPGT7o4s4cgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHk0pr5%2F%2FMpv6S3QlSrcAwstK0d%2FQOKsxt3TJNioyx7p7XTfey5h0DqeUqZKpwY1lDiksYROvnMf0nAeEFEAY93Tg6BVsRS%2FhCsvZN56RJV2ihQq5XG%2Fuma3RwUTlWFJ7CeMsY0rdUkPFz3T6EeWEoCrqsEuupupMDIP262W30UOP44KzjtoYZCgssvHxOzEQJwpge7dMJh9r7hynaGazIE%2BCKa0Zk70WF4fExrOUNZ4FzvAdhI8ZHJyIqmzhWMNZCCHkSVnaupVHyPVslvc2vztmdONXK4B8oEjkg%2FtTj%2F49RGzi1YZmiFrFAikKsRFDeFcm7ys82FnAzMDWaxuEt4y3wUQ1hWdFKYsSq8Fr%2FilY%2B20%2BK%2FEJ9maZ25flKmtcCJTH8cRv0taM%2FUnrHjpQuIYGCme4SSuqNKROYx8DbVpArFjDOGpFf0ctf5nddeADsbFoHWuaoukM%2BsReCW7qdQRsO49CQNwz9HD1bhLk04x33eXiq%2FAEcJ1Oq5OBGBbEJml6HKW6uMh0FjQAo4D8yTNOahbMZqQ53ShQnfMr9b5qVSF00Do2nfTbDQcOR2sJ8bNkjn31qbsGVQ9STfvuiCYsRYw%2Bse8ykPZV%2FCRpWY%2FWBB6976%2BJW9aEOlOcvqi5PFwE2%2F5urG8kk9IMK7h1r8GOqUB4jma2VXq%2BRi7moO054WMwoKiLSYu49q%2BOrnns3UaJfMbCCWGT9HPg35bc%2FUANlDu48%2FguBGJ1aCClxd0maa0KK8qkTWgXYwCPJwCWIFH1yoBXr8sid36ctHwBG188Rl4IwyCCA2HpNCNHld%2FS92Pgm0Bnu%2Bs7QXQ2CX%2Ft8wNLmbzvZ9eIrzJ%2FanxDrEQvEIfetAty7jS5rYsvUlTL8FosUvlXKrt&X-Amz-Signature=95c8dd732c81a164ea855047ff8f3daa51d0d4e6d2bbae290580d349e35f0ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
