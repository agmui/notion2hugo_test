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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7N2PBM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCG%2BNLP%2F%2FklruqzHm407G8NOgRN15tMSepEhIakvzMYGAIhAKjX64xkbtPhd5nQSjgFzglPWPCN3jSbvaJyj77FKqczKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYcihjA5uq0MIobHgq3APxrZLL%2F1rDAVhT%2BpyeBm8A0oYKU8heCn7978na3U40nfPG%2BzaLB6eBGRCHCCOF04vENE1I%2B3Ug0b5FeujPqgyLgxFGacEGKs05xiI%2F1rPGtrebY859m1ECAScEyzxZfs0UO8FsyST7s36UL1dlOutYgCwUu2ia9vQkAdn5CGanhdTjUR1TB%2BoZTAoRlkUzMJpn9ugT1WaBEFhPjJB40JGeNb0IRB2xQ80szCL8%2BFUbU6khhCYXfTEgX0mL01EXYR0oT5TUvqkqcv0hbC2xoyvaXD2ssw%2FUaSePYdvxCguWkUJzebSIZvgLcxSJy4D%2FJMFkrMcDtQOFCFbaUiM8xJnjQExJMIWQwFECZKavFjt1LLb2m5fMVA%2Bp1nfAwUpyMEpk4Wafuv2HVrMWfNBgHtWyUjFVXeCTHWX3y4ZEQ6hUbLRftO1u7vG4X%2BotbGWeiZ%2BrmSLdoSV5k7MEmUPeYw%2FrjJVXkdM5DM28mhil7NhtChLwWyLd3F9tZTu7Xrmn%2B4BVRvZ%2Fstnn%2BmtVcvVsc2Ku2sBWR12JYaG26r5ga1%2B8u2nuWVw8eu62I2m0gnU1WN7m82KLcPIxcQcrJyE5iORa9EmBTmJ199OuXblVQ5dnI1viIlVyQYEcWoqaMDCC9%2Fq%2BBjqkAaWWMuU843xxdY12r9rBgfpZp95uJmvZAJlKk%2B8w1kDBAlbnC7syXraAP57XMvKUqdzIrLVoC9nJfBghS7NUoLg6cHqHwcL3gcICPVGChGYBqUhNtQQzAETxLXZmnTmofHD8HmOnY3l1uGsCWYldaWhiJvD8T5uqjMWRB3GndnSDfFLTrQEEnOsiUjRm%2FcCEi9z5NG8EwuJkrGOEm24%2F2RoxTeTk&X-Amz-Signature=bcc0652b38d8c440e665dc0412f3a7427957ee16699c8d5046c3912afb8a0640&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VETYD3N%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIFwo0s5gMoA2mKQPUOqPPuj5KRmRWQlWGBkTEdawXNUcAiAI15YCe8UzqBAenMuAf4gl%2BYxs4IKE70fx5frm%2FQzXxSqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvOqIH8%2BSJwQDHCjGKtwDzs%2F8hlFq32zAhditS1YuH%2Fkvn1bPjSxKaeXU%2F0%2B056IxbkF97%2BD4l6ax2qBm0m%2BpTjHLjxqfrOs1TDisHUkSb4gBidL%2Bq0BlPXcASIFs15OL7ysya0%2F5qnePJqzkVtTU9Jwb1drqkKWysbXcZfoGBFaoaTuHI7Qewz7zlZiTEAgapkBJwFLlxec1XxlMlYJIboiS8uGzJScm8Tf00hJpuLNM9GSd174wcf%2FE%2F0eoaMHsl0ovHbw5ZYpHHmvgyQwlAfqLu0EAvJfngAweG4YmMunwDWPEpi88nULxFc8Cz%2FQ4Nev5gc6i3Fmk4Q8WjKzpRH84H9IIWb0qR6E6Z4O0ZrGaKPA3iV%2FcPJJtGvAJTV6gHD0GLzrziZ8V5pKeO4G9ZMr74yn16zn5vPnXEz3jZsqQMd%2F2npJJ2hHwgitNeyE7ClUOlJhKTT9r4VFjyLDFNO4uvaExzqZWmMid1c2P2PHE7hnyddelxXHt%2F07JjUqcY01sk4t6xHv4V4eSxbI4d%2BZKwef%2BN19LCwpPRKdyy5nU14GEWkcUC3Zwo0scFiC33d%2F4U8QL48NW8vnqPMGBLRqNNavr5Igv3EVLBkle0%2BQzGTjhQF0cHnuRoKNni1tsjfvTPCIkntGIRIMwoqT7vgY6pgFDTQycfsD1Sv%2BdV11HreDPMSyjFGncNixEGiU7ZR%2F2rX%2FxbvYORl3shgmwHKbWSlSD3vx7438%2FYKUl03%2BRxIZkTy2Pjj3fzVPJOsbVj%2FBUElbpoBbcl8HY%2Fv%2FnYHI62KwtgxvcMHMv5Uu7geOTE%2B385%2BsiBJIlXFCM2fRIO758y6Rx4hLpElyqubAP0qzwAeVhHtPuuC3BpqZ8mcSnKoSd%2B0wwZBYy&X-Amz-Signature=606d5f08b0d01c1529e6a9816ad23c8266de645db85f3e6e4d27d5ec907087af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
