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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QYETVAJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDzZd0YCswNElomoKEPlyhUvbV7zAHiK1gMk4h2vBVy0QIhAMCc%2B67wiBr%2FZy5wldqINWjdgedSAoiMdcUBgl3eygduKv8DCC0QABoMNjM3NDIzMTgzODA1Igy1ChLqNig8ucJ%2BgRsq3ANCRvC%2B5ogIQG1QW7TGLDvM0DN1HcPL1qa9qsF8PZbwNmWzumK2nQtqNYdphGixh6GM3AKvBOZgRu854%2BL%2FfByOH4NF6LI2PfQe74%2B8sP8MDSot4mZC%2BASOxHsy5MP16FbVE6TuW6ZR23c9HXL%2BWqIYw2dEQJ0t7FdcP3%2FKaGzIRV5wzxo7feB7NdFbbQisS1XiW9qxJqeGMk2a%2BC4%2FxW4bSv3jSeDln%2FVp7V%2BokqVHuXR7SFt5J8bT4WrPahs%2BIWFldLHq65zOgPXm5QXXjXuZNRYk%2FDrEXAvzwdr%2FPynDUXwZQ%2FK%2BNQGpExI3GQAqdprZlJOrRYOt5L4QNNWjmPsqdYsZv4272EkPp8i7yrJOwHcVroL067mWJJpVnD5UYS1x12HZRG4aidRIcIhf6B7P2TSPAegLOdc0BT1mR5jMrqTqlBmdvvhe%2FzydsXnJHK9eK5MDbzSpgIwxvy4%2FoWf427s8Dzrrdkiy0pkErEH6rlYrt0GO71JBKO8i0Bfx9%2BmWij9nYVgSsaAaMJNYKFndnTaJx7FmP8%2BlHYNB8pLV9tq1rygAqwgoPNH9GjwIcpys17QN7RrOIfVrNps9hMsoFocX7trqCGb7GNLXzU%2BY2Ak368dr95LBm1om%2BzCS6ry9BjqkAVQ9vaHaahhUZ2bhQD%2FDoTQ6lXptyRvcNITTEXeffjzxTEe0X7RGOyMoVP7LDiOx7LMR%2FOWJ7Je5xPauqDfpawcQfFV201S4%2FrKxoPgcCEAL58u8D%2F%2BF9t2vErMKBm82xr0BbCE3todYFJdw0C3rSoUW1yyDevrqIx1dEcu5ZbTcieKj6sUvZ9J8TBnhf75t4eqnze0WnULHoO%2Bzq1WKefyweBHy&X-Amz-Signature=0f2347ed5e0e93e978c7eee435070547741deec1a75bfb1b107fb9d0b9e31239&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646MKX5KC%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCQ1A4KJnYrPLMBqfB3TzfvQ5MSVZpNmCa5bCPCRn3NtQIgHTdTSg62cJaiXebxERjf4c6qi%2FLrGC4iQmtZpC7bp4wq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJ4oAV7BmwMA4BTe8CrcA4mSxm6SrUU6W0z0hVnl9qq9aBbzBmK2K3aXBYuAvVI8x24PoDMCO4DYp5Jq3WI%2BuJt4jBDj9RPjWnFD5lxqzlaGGjSdjvwGNBBLEAU0to%2B4FOW109zxtehLUaJboErZY07MgtniOLaCQu0y9Wc%2FjLi%2BAOBWsJf6t76PaV2LZNZXxt3wwqfQz9VEj3tLMoTTos%2FQinNV%2BmighhjVgPfLTNRavj0jgXZosm%2FPVOODoqGwuxUQq7WRd426J3paaNtlz4JCLCCrs87cpZaLYkcMsgNowiHtEgGk3BB4Vv2A53iUBonubE0F9ads9QvBHG6JmVJPXFH3c7qOTUC%2F6dhjEm9xnJ126sgHdZTvcTAj8ubPbJ2NAQp6BxzQaNl4r1Mds8yU8Y4s4%2BqzWbK01BHQnnABnnBIco1OdIC%2FQHRXVh8VZVHQA5tDJr3qNJ%2Fsrk8OREi0is31f3ktik7qzSJBnvHkgxp8fZKpcgtJB7ytaeZflFlgCFLtzkR4FZ1Q3RKSLU%2FdYCpN5TfWOdO%2BAqWfeWBDXiaycW80YgxirdIw1Cyz%2BsJ%2F8nNQC8YhQPcuS8Kn2KyDZVDQgz7FyujVVN1%2FDhl%2FM4y7li8e65KKtZ5YNSkJnGWP8Jd8AhFCq6T8MJTqvL0GOqUBImcfuko%2B7I69wzdpIynRXU7FkXdxY5gLvzw2QISU8GLJ9rVr03DBRrwLDqSRp390IlKsy6cYjAyKu89CntkpygDLXTk9BfFIdTWlgbP5j6nBaoc5YuPWuP37cm8IWW%2BNyTavu7urJS%2B%2BX4HM9yUWhkJYGRBCg%2FgNRfvjXa1Eqe6bURWdr9EYQ49%2BvPChElPWxku3zfMYlqosKcGeTxidVET9uEsT&X-Amz-Signature=c2e7115381afc42f4568eaacd650efe744bd2c1e377e7630b23d542c35bfbd69&X-Amz-SignedHeaders=host&x-id=GetObject)

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
