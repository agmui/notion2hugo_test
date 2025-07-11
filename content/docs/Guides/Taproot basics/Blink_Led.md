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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPYND7J%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSnfr%2Bru7AwLQhXfk6SSsU22Oy9kUU6NUObyHi7DlIHAiAlwXW%2BS73324zfPCO1plOMAdj0zawZlcuZiYLhlCNB1SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsj08Cfv4Lnxr%2FijcKtwD6ruTp2n7RF8nRl9eiG72QXOtxVz%2BwJW8ITmRobi0rySFIk0YG44rF3Tql34DGrdsOVs6hgVyqzA3hkUAoeMGQcdwMssBKiKMW1ROLz%2FaTU2bODX6KyIzTShh0ib3uG6a9Oy1CbwtC2jIqPcxA5Uo0ktOIK3CUR6ivJhmHknDBf7%2Bas75llBdV3dy3x7zJ4W9j8b%2F%2BDnY8n9Q%2F8dLPlSCqq6kEEmPk4lwCugdHYAW9n0ykSXQx3OgDdUNN1FZRIDrKgKQuoZVagvvj25HrShhC7Z2BTfW32c9zstH1sRwlEv5bkkh8zBRCEHsyD9xn5hOUXRcYLJLQfFeFfAwspe9BNlFjVQ6zdJO3DTDzldMYFqR%2BkNQidRr%2FBzwe7FWUsudzrXMiJNmN9%2FenoqPKxw3%2FDyfwV5qSd%2FVQW2jKeL9xNm5GIDCjZC11fLudMz4GGMyoErT7bUZS9Abfg9E3FJnlmlGwrPXucQdY53DEZSe%2BFbr%2FLGujfwebQkCb0UNJsJnIYJhyoqkWhYpe4PoO5%2F5HJ6se41C9IQiO%2BeEWZuhxx1mvXdkxR0B5QjrwAMe90JVsbs3nieadOcco5x8LfhIK%2B7eR4pB7IBiw0uI9u%2B5Thy7JCqqNqKc6nG4Jq4w3oTGwwY6pgHI2pbda%2FH7ROAUw9Bg9OJUhVYcBEUmbjn1lDxcoYyOnIv8TVlSab%2F7IHVTW5VvaNG2m4Bm1YtXHmXtMqwot9lm40XFYFYd5VC1UAuv%2FcZKjwXes4OcZHKffoLZQiPko4wAEDeuUQ4Gvn5xOdmWkaKAlwzE%2FCidJu2wdwnPKQZ6iZ4JvTiJdiEHBYe5Dbsr%2F32d3p0CA7XM6%2Bi4xveJhvvL1NwsxEjA&X-Amz-Signature=1c9f50e043cc8e4b7bb49666e891fcf6d99f81941e7535bbc98e303279112152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BPSTGPL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDymbzVVt5oRTcn69g%2B7lhAp3muxxLQMSUqkyuZnYbI7QIhAL5Bx%2FznP0VF2TTj%2BmWCYgvlciCCR%2B7QbEp8FSoxFtq5KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyslRcWHV2Rp4IhVDcq3AOC5pCF1a%2BgihY2OZ9f0Q0OpIoRCm2FgLGS6CPTYgC2hn5xmDv2DlW6TpcojbQOtCs42Dd6024%2BefsK%2FrAG0KHMVj%2BjMG8%2FNQ99kbVNIUx5TmxYQFGTzpPhhs7vo5kshVtUYJOwnIIimsQBn%2BXfaDNz4eG4m%2F0aV1CTlkVwMOqOfQN9uL4%2BlK1GepZ7d1hyOkfuf2jbVapo4RWMVi4DYg9j88W43babwawcHFTMBswbADcBa1U29wIYZgy5Pq3ASrA6%2BGuKlUCH5eEqa26zPjJPqNjFrMKIfjgKgffAXP7c4wKI0uEErcvohsi6b6V2LCom5ossfJFnagDQf%2BfWf630OFyuxp96VCxU7F9L%2FSojcMEAr9KiDf7zGxgUcoPQ8xItGwgzdxgI34fBG%2B8Mob4XrfcCyogI6prioky6OFvftuOs1SgCBKJ%2BSblX7neU4WPmmw9hMmfrtl10ZugOyMtbR32rCQgi%2F%2BqK6I5goQwPmhzF8%2BO8mI8rHM066w8Rvpl0FeYDm4xRMK0xc%2BtpU1q4N9DtKuL8%2BKC%2BrPzStPFOVWOShGXSZKkRnFkAT2n4xWEFmYZAqv7rLarEuyXgYNzDDOwRiqPe1haFpypP81s0oXHfLQTiMo8d%2FR4fTzC1g8bDBjqkAUS3%2Be4f9ohWG791SBqzxMJP%2FARwMHxwMTs7BbTCIj%2B2RlvtRpSPp2ZN2DiLO%2BstF7DBWHK7eTMlEajrOQYrOvbcHmcPqgfrF6fWTOHqhc6jHtyE8Nd0cjqf5YuhTq2C2pb5RjWDkU2RW3z0Bl4Idiq%2FK6zicmJdINVLBgkkeS9whHTE2eNzrtbJHnqLcj7a7ouPbymo3H0L7dMnUIeTAKc0Oplp&X-Amz-Signature=fa4c126809f15fdd519640164139019bd9e3b2ea8c73cc971b29c840e55a30be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
