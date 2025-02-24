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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ALAW4P5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjDRdxd2U03RBZ%2B8E4L8pfFeCEvAoPkIESZJEL7y6mtAIgRLfy5%2FUCzScPpe35hEZ4qwjuOyMTOGAHfvDLoSGPjT4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDL16UzQQqe5uI9FDFircA7OA9BMiX4IiExmC7leG3GAtvlS%2BxzkNsZJrM0Xr655K95CjKGns7WinkiL7Gk9Tm9tzDGtgvkZL1gfz%2Fwtqi5mleb36PO7nBGc5oGCRyboa31wLOcoIItyeY6tBMwiRCX0ircydfE0IUfVA0KSgCnow8Wb1ARK2Jzx7wFO4sCyoubYekRRQrOu3XSf6%2BipU2hwAZWtdJdYThnPOZ%2FZp70iLXgpT3CxieFOyjLKEZJUBjAtpl90kLsxrx6xYh1SAU4oic9MWwRT5CFl1dH5tggepKEdbVpFzzvZoJxJwE4UwLFfodllSbcfGC5NSISMCTg5LlaKPd0YgAioeje8cvCyF%2Bs4OLF7mjIs%2Fam387VYITnwAOPnFdEGl2lR0uzKIaCQS%2BKeB56NEwnFUpdda66OlmpmLIf4aFWXVNpCE3HPZOq%2Btx42yRcqw881xmU6kKvX33MR5%2Fk8FG1eZHmJy76mTeUKSF8D5%2BCYt6N9whhRiC5Ny68spgr4ZpgV5DJidpT%2FwHCYlUPSvE5EhI5nLJCOzO3OcrJu7IWfCpf4%2FbcQSM9hdLaisp0udGGySg93ow9q0ZaNyIuiN6BpgsP3yKqRzA4cjd%2F0Ff%2ByyLvskVY4snFvqJDfLoX7qT12UMO%2F98b0GOqUB1QGOYVbVCOgHWRxt967CmM5NjeyweVTG47H0DMfHxz%2BeiWwGe1YWq3z%2F%2BdeNhD3nw1B4AIRfXWaeei2Z3HNjv%2Fg42YYQphKbCDzRBuD3HjnmkG7qkdo80l%2FP6DMbPO3s8Eg3SfroOI3QAbc0yCg%2FWro6zsabrKS3fpzHiuG7m56%2BWCWCAYfZw3ERCgW4qHq8crPwx%2Bwerhvn1bfZz5zq1Epg3k2c&X-Amz-Signature=ef35fad95c60be0a578ab3ea6c0e2d57ad1a0ad9417650f7e7afa2967fa85c11&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3MS2CX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASGeSkAnfIWDzFdcfNre5agiZbTObhEoVuIoGn2VUN4AiEA0M5rY89WdX7m9zRHy9nU%2F%2Bq4ADC7IqWCK7aPQGK0amMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDBbleCwbm%2FlmXwstqSrcAzCq0wEEWATCJ21FKkL0J95CZey4Spt8lbxoEJETdOVgiSFAhdWrFTBzH2UYTlnDOCx7Fc4iEHEY8zYhzusr8DKrmVimRn2DVdibT%2BKFjD340nyWAomp9eG%2F6UQ9JwMSu6FMLwY%2FWnM7d2Prupj2nOZIlhYy9P7m1SJA93o%2FB%2FPSGg3vLIkAcz0pyawzzLW99Q4%2FTGvoLzRuKYFP27N9butgEMAr2gCct7dj8JAxQOU9r2CRrzd5JNLQuWiW3k%2FMsfMNXJJg1qhEpnrmAic16bD8h7ZHD5ZxJNvbyb7wQDz1xqdwJSKV%2By1k1gEkGsf2pE25D0rqxhqMh0O6YLg9T%2B6%2FzFAwZAaebdTibW4wmZ4ZwlFQF%2Bzi0wuUqD4En5OSY3ik7YR98CVe5fOCGi2AZstALEuoDaBSsDQy8%2FYleFwR8Ai%2BLUCDHWDFAv6%2FU7wJiD44XxMePZbPxN%2F9A9Xjp9POmxieb2Rvg7QRektenYIfUyLiih%2F8xd%2BVUql%2BGGEsbmbxBOeCfbbLokCYjoEfGzQS5TOoKGa0GAn1l2MOfJ6%2F9%2FgWh0Ihgdm36CmXU3APhObF3FUWWPNtvoAmtvKMD%2FHuKL2DStagiqwofrxP26Ag0o8xyUUDnywGOx09MNT%2B8b0GOqUBiIoC0EjSorkHERfErr6x7a2PGJ3qX4PORzWnP7K7%2Bh2FamQ0pIJqzSKLaV10%2F4Zv8f%2FiAtGnDwN9SpAZn5O%2FjOrycdG42W3GK0F02RKcZ7xbUkN90g8W2MRfpJpUs7g5nI1IgMjb8wP5evcpNkQmO%2FqfB74a1df6Q48Q2HXqJ3k%2BPXYjaCZmruciM3QkGGgOkBVEZDt0Hz%2FHtDl57DeRGdf4jM4z&X-Amz-Signature=6135fa16b005fe74cf96fdc5e87117024b04dfc15669a5929b8eab86f148ae8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
