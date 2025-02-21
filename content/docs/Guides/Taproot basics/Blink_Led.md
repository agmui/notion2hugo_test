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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KIUHECY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIQMMNzhBZtBMyV22Ia1Nyg75D5TJ3asZDRzxyJ44RwgIgSYIJoZlwrYYhaID0d7gjQo7BIiM8NKEltEbT5TUHqocqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABcXPpV1Q5qBcNmuCrcAxpgIU65w%2BsKRaPtU%2FTwgJyCO8zGqCOm%2BjQXiZareLtg7XeRZyYJ%2BsNbAaz8EsRrRKTpOCtjb6WO19o173lhrgPFJvCG6iw7Xb5FAFQXbtEPVQjlzGJqAxfLrt2WWfVurccnQ3%2FBSfOHMOBhGYyZBf5fztGV8EM1oEY3MMUeCsEDLh9AsTmqwh7QUFRg5ZUmkDukYCMf35xP8YPuxvwhQGQBOzf0bzEPawt9a4lDYSIAccFHmnMmk%2B4eMnLVJocHqgdwkx%2Bgjr4X3y5Id6mtx0%2FakWlOokDZs1Sd2nYHMSYCZKWl%2FpXG8huFSQBteJ0IjJ%2B1TZfjFWxnyn8WwiEoU56CdDLFrbouD8LHbJDup9p18YNLbtnD8CQ9CMeKCUuOWGyThqivBeNsgUBHET7XBXquR2QjFHg0O9rj1asKzP1F1uUgUhuRdElYYN8vfJfxec%2BE6ZI0YsGObAKrkOYERZijWrjE7EKzUEbacbCHSU7KqIqLvvSfuRgf3y11ZX7FmhE3Emkj6oHrBHJuwESZBfCDMzYg00HWruue4ed%2BGk7uW1Zv4L704U1CBiaGvdcYRmKi1afV11sgWPvQABcooZ53AwZr8SvvB%2Fzx6ZloSXIUyEn%2BOf7E965qUWtYMPSf4r0GOqUBRlkBF6szPiHtZ6DDN8IMSDaHa9NtYJhqB4EPjA8%2FR8fn%2FspY%2FkNjJWS0F1d3MqNWI9kGXP%2FS6X6F6X1ckHJRh%2FrF55naHVvb69zGXrGB8v71PCvn2NOwoyUwnvx3%2BybQBqAyYiDNTxOUrSdWYivBzpRT2yt0kBF9QNrcb4TeLo4PZJtVdydT4F2pko1gsqpobZbnWQnVkdzikot53pTPk9nykCjQ&X-Amz-Signature=1c9f2738b592dd3dc8e073ddca6e119f0a72330ac931753f13c0f37985a5a1a1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVFWOOD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjE%2BicwkYCMtm88sQh8ptRRJUyjW8D1drHkFqlEThWewIhAIytspIX69HQaN7ZEYpVjz8YGP8ukIVeIKEimlMrXCMSKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiepIKXhRQxz43rDAq3AP67vQOJpX7lI%2FTnaaUiy4jpuceDm5JdQW7iV5zp%2FgeGhpbzr%2B07bvHSIMuv4Xdkv%2BYIvihLD9OCVrSZE%2FpKnI4qq3phErzP%2BexYkdNJ8BYAbGOJaBYM8jn87dJ4jDsJktClwiNdI6a%2B6af7ZW49%2Bi4LKKawdNq480WOQn38fccsnnC8xFgnMuNwhTCX1W2IX7lupZPCD%2FN0BUdlOChSbiSOMPO2Y4be%2B8Na0pZbifkNdxIbPa8LQXSgfutXsLXz2ugJro2%2BoW0m9ZlxeO59pCF2aeAoRuuTf%2BSj2ckbFZbeVptcaZbMQmdU%2Fu%2BlP%2BLwPUrTljQ43JYqo30i0tHlr%2FdUzWZpKLWbwm7fkJH6KLTxwCMt4yf6zzqb8RL4OjHxY888hpza%2B8MW7yQ%2FE5%2Btqd0JKEjRMosHr5UVJGC%2BDtLwdIuTwbMOvS3IlOa5VgmXVTx2muj9qeBN9B4XBVSkCwcnRsLq%2BC9WISs%2FBam9gqdzsaATb1qJrP5dfZ8VgW0IpXsN1vAChxz1Cdtw2A48%2BtzN51Ic1vVLoZ3451rsoZ9Mw9E0XhRFPhdo6Yzp8TsYjI0%2F6eIpbhgPNsK6h545bid%2FQ3epN2ySVyldCty2o1KgdwtgV29UEWCFSG2zzDPoOK9BjqkAQrGEbTg%2FV%2BDq1Hajh2Q8cXsU5rXug7xD2u70rd8%2Fb%2BAK94o%2Br%2BMhtzFIo%2Ff34ekJ6ExPFJT7FfSVozt%2B8VJ5W%2FR%2BTPJ2tI7HJPSlk09BgJ%2F1azVUdPbLN7wkJO4Lp0ggYL%2FnrLqqGM4STkdVPynSBgnTeASkOf2tQ3aOR1aCx7n10Q7NuFv6SwRD3G9MniBgFFjKQQr8elmVPPB9kSQULpLMGgA&X-Amz-Signature=29f4f4845d82bff9fa6b7534dc15a79535ecce142d2b1493f3a202249b0e7339&X-Amz-SignedHeaders=host&x-id=GetObject)

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
