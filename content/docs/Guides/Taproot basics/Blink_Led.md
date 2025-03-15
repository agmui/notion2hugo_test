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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3LRJ43A%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUmJ4Y7KibGeXXY55cytOT9TpK6KKdT97GNidsOsmr4wIhANvJHvC0g4ADQhMYgW6oh131HPdqbwD9of357X2ObSGMKv8DCBQQABoMNjM3NDIzMTgzODA1Igw8KszwrYfAUGyzFRwq3AM2Ujx3Q0MjqFkkq6yLTMmadWSl1Wi5QEcvd35zKUTJbOK4WVsVcwafWwH1ikCKoPff1VC6TGe5qQPJTEcocOpo9wH8bzUYawCVCDtr2BNNeijbTQ%2Fq1sCiwUx9kIuxiWmJ9O3p2WNwEWKTOF9UeF0IUbpYvVnrLO9sYfjtCLxXSjaPI9hzYV%2BI4B6TAkG56yfR%2FpmMIxkc2%2B62aOtwXWdEL3Z8HSEkx4KFKxXwe4xr87Vuhqx1bJz4Rdub%2BRArYYCWZKvMOys4lMuljErP%2FIuls7juL9IWzLL44sgrdG%2F00aJ%2F50h8ayqdR6x%2B5f6woSnXwsay73tePJ5B9tQCd79CLfHGWkGtuP0tNVbYyp67Bep22yDI9%2Fe0h%2Fx25L8TLPjkqp4HZln6yaxrkb8XYaWgG0X3rBVcx%2BQY7zLCrMwqDYypNE3Q6%2Bk3NvE9t7%2F1LuX9thcMvoplmBXUTQHZ1yooqSg7kCZhxs3OdAs2vJAjyLAXIFM55RkU6YOKScBEy2LHMt%2FGy4%2BfiFQIoEBceFlLyg38ufnsqgP7Ex1bS7qZ0kedprbPb9ztwH3sXJCU%2BE71pAPiuSDcNC2%2B6X%2BBwnq7hr4%2FkJywjasJ%2FlCMuPWgU3GNGSYjFIc%2FAgd19zD%2BsdW%2BBjqkAfxL%2FSzt6WaIxnRjm0CFf4FO5s6zoiLihBU90uQGFgNzbn9rdLbO0Yu%2BkbjxXNfTPgi9u1nX2ja55JPyxyd%2BuK4ZL7aQmX5PfCW44NdBGVTnejqyIWHr8t2IT68BeoGX79GjA8dk2DB0krVJmL%2FI5fe%2Fo7NhIlds3OxPwm8n%2F14Z0tzeCdvFMhiFv%2BXzP5j8QcfyfnGaIZEBbyKtpPIV41%2FWklJE&X-Amz-Signature=914c91b633e0460cdbf60546bbba131b056304ee800d3bbc7423b114545f7239&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWU4JDG4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9vX0lKge7S33HpYjZj%2FCBQJ5oSxxRRR2h2x43bbx3XAiBKE7pxaI7nomP%2B8hBj86D7UtwbkAyCSY53axCmAl36JCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMKWGeZ6V2YtPPVvK3KtwDgLCp8tdKAiKUkdJBAXTXGgvA5muF9Y9zoMgnXMmkhgjJywBlP5gWC4Lsb4rPTSNtwj2NLES%2BXLeVl7D6hZ%2F%2F1AEQgRaAgaFGikQiAJBLJfQDWitgA4RNQoiidZA2wMNh9pjwW6L70YI5Ye6WZ7aooIfdYKeratIcQKxiooBB3tSVkfAVd9GU5d5mqtGaqgEQyKuBbBDMwDYWgCxTFpxIeiPWs0J3gWiGkWdul%2B13VamR05E5b98lHgPfH%2Ft%2BR2HlVr%2F0cNkSSqGuBc3UY2JcsVX0Ihki%2Fc9HTxzagV4%2BpI9AIRGKIM8JANV2vRsrgEHJvqmimmPVyEdMUSeD4J3kvGj%2FQIuTBxQAzoEnFFI4LwATkBFwDR7BiJXFva63LL79bWyjJhLDUnjsNFNoIp1rlEugsO7AtOUH4f9SAKLZcUgjaYoIKSOKzhxG3OJJzzM180FE63ux49U%2B2gj%2BoMpSdjin9hz5NVMPM%2Fbyjlxpc74xt3m8OH6XkEhcQq9RfEL0fAQRSCoKabyRdadEMouLl6898QmDDgREf0hhnklfHuPX1gy8y6RfFAo8zaYZ%2BTQ35z1Nzy3JAnFvlkG0hMDzizFKM9ytQuUnL7gdAA2NKKazXwJvlxrcIQTub0owoLLVvgY6pgFy5%2FEXuOxFuBYKVcSU8Sb%2BgFbA9ZfKkFbghi75PdyoXu%2F1C%2BUWsdoCT6pdu099AXQXo7w2rTcTduvAMwePjAds35Z37l7FlXTvHOh2XPbJKj29FazSM66BayH%2FikWCv0esjRg6057AVhpYDceRhSH3jp5bQztpQBboB3YQn7BIEl%2FTNSIu0M19lMY3tNFonnto%2BHxfiIlPjjYER7Ik5cLCp2zGn3zp&X-Amz-Signature=711fc0fa4510e2d9128b4368941c8fb530f1aded7c77573d1d400a0794c8e47c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
