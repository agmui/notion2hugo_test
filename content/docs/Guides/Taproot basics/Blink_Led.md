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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBMHRJR%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICgagPf7feMLgsR6uAZ%2Fs2cPuuuzbt0jxLB7tDgDFb4cAiEAwyXZvB9I1YzWSHl9Rtk3jTgS7A74NhAIrASGDXVRff8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaEsjTM%2FNaGtXGzoSrcA%2BLNzS5fYJd7ELFfEv2eqDf9IQMGuPeL8Gyv%2BFOLS7GMKzhqwV8TLoS6HORFEQrKm%2Bv43bmBmqQ59yDIOIrz%2BwjP9uHPpDsHssQeBUszfeB4CuyIObditx%2Bm0EtQaPYOghyMV2A6La1awddrRaYwhjtOeOkwJvyqisYBdLK7g%2Bj5wd9%2BNIiEoVW0vn0FGAbOahoxOn6eKD7H8VJeIrCWSLMnUV07U6uyjxD5Yok0xqJX%2FtwsXmJzNxBTB42U%2F6s1x4QfPKrRCgAc5B5qclkWiYtIs1V9Vvh3PZEwqKbhNP3L3rApZAhRLRXSf11Pv2w7%2F443lNUydkrHKnnIajch74vKWLRJOPM%2ByVlj72Nzx2gqWQ6LCuJtKVtCfeMBDN2mNwmhK2ht3Gr%2B3WQ9oXg53%2B6odAPL8MI7sbYI7lZQ5c4AASTX843lKSof40dP8jHdk7JZooHLD4zOGihSwbsac1GJ19WSOHzarmO%2BXyEYw8V3QQTgovti0yEe%2F1Fj%2FNPEbe%2FCHHZo6ZTzXuXcm0Q32%2FOS7zUM7w19ISW0iTt%2Be5ibvXuWbVlNtD8WlvO72cRMhaw297QxM7Ny1dxdAVJboeENNn3g69nJYUBAQHzRex%2FAmbrNfskgIgO3j3VCMPGhqr8GOqUBX41Rime6SuJr7u9XYnpTHVV1HfYm8DmJYYtvSDPDrldv09UYA3wc2eypdgt5cH3BilHoGwyyrqpRipXrqIDbSVnJH3RYYpMLMNyrCyK2HlbC1VO5WT9RRWHYwHWgbvElqn1aDqhikD5Ait%2BNSMUPdHVApsPYWBDJGjkKddI3v4yz39WcIU3sUoDOFUyOa2XwNeCK8yvjyWrM74EHzyGCa2P947%2FK&X-Amz-Signature=2131035b491c8c0e59c01d873bde5c05f5569bdf23d7b1a9b14230c02887ed5d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LXULKKM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIG4rpFYP5P6pO4bi9YRnd9hXEVI2ly9JLPL57eE1IqBeAiAOYm557ze6og94ucvspc4EM1DCz1iT8tmnQssKxfdB6SqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvaoJEEhnQ1EKmvSaKtwD7dtcnozubIALm0JqyVSKDy2ia1ltHFgHuqt%2Bhhu6FOfrExe%2Fji7nCrcgB%2FntFlxLZ2CgGpPaz5e6rBJmouSP34vuDRP6BzrykCvSWxeFFsQISFkrO72Rvf3MnG7RXkjpH5%2BXLH2uAl5M4JcRb3%2B6rJpDbecAjjNR5B2mhCKwh94cS%2B1VkAW2MlSk6yNRXUYF6CwR6uTU7NMYYzqQ2LQ%2BUwmAVclhvPY6qisUw21Gg3NVcifAbRgL0C6G4XiE2ADhab699b2FF%2FsRi5F1FdWZ2U1%2BQOzTzaGTbPp07Ra6ofSuEax20VWPWqsR%2BaDL4N3VMoONFY2autCOAYAdbDLyp%2FJ51pZLRiFp97O3M8t8dnorTNOdVMpne%2BolZmuBVqRD7ArpbQ0tDMlMPyV6cpXc326ss61IzjLEEaQW8Ec9Vi7eaICdArvXb12%2BtT0GApdU75qDpuTkptajMC9OGEfblfrsc7S6hGrFM71cMO0wKVVLsRKkJra6aO%2Fr%2Fy6plf6pyZgIfjY6q9zh954IFeZirz5qG1PXL4bwxpH0mYChb5%2FcOxCMcsUxnkSy7%2FV1JQxB8l%2FFyryqbnfnBSvaa2avLPMs%2FU8%2F3eYvvLc6oodLSa9ndDR%2BaUos50huwggw%2F6GqvwY6pgG%2B7FtCM8L%2BDjHaKfN6e%2F8bJ0ClbvX8ShYmVJlHp1tQzaYix1UCTyagrH69ysErfzjnUU%2BLJ3ujuw4mDJY9Am%2Bi0kYjqx1bc70q3jBwvmMLhcdQ%2FZoR%2FGhJj%2F1UCSOaq69bPIYIuzIS57%2BetVisEGZUzdjR4L68YucJSDp2Z0HpQ8z0bK4mrMxKBc5vgg2LKELr%2BNwX01WTGhEyyk7Ufns4wiNYeSTy&X-Amz-Signature=24dcccef4d3d9f351127cf6a7a4bbe84e229f61cb6a67c38d71f2ec3c2ce2232&X-Amz-SignedHeaders=host&x-id=GetObject)

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
