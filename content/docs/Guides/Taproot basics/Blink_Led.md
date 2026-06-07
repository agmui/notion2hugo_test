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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIT3LQK7%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FBiN36%2Fv76nmqVjqjJ5nKsd93NSklkTetAoh73XmKCAiAw03Ec4%2F%2BKp0D6XKfQxE7oxmFpiDxq%2Fa6Hay2AIs3FBiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2VaFA4IRq%2FzgRA%2BWKtwDIVrYScuheG%2FZ1TPnjb%2FOjnUmT7UKlESCNalticcwu5TxFAZoK%2FVUKuwtVwB7PrRNqxvciOprixBddmuDFRWRodrXdnfJDYpZtQ3sihBscY1FzMfU8ahoxrzGzQxdqEVQXshrgAlEwuUlrnVSD5CDkTc0WDlmE2IwSA6vYuj6xig%2Fw8kFT%2Fstf%2FlDPscN3QPGbjdRpt88hDzilDltpE2jhfyq5wdSiiAFUQOCqh2bQhagP33PHDDIciUNGZy4yi%2BubSMCF1wnppswigZqwrfItXP35iL736Qxr8s7p2Z7k7iUkpNEKnJmU3PMlqLt16zQP4yFNZkDgByB1Gp3p1zCdzG%2Fhnx6crzCnBlYmg1s3OSZwlL4vmpYtOxzEms7VEVeKHRYG%2Frk9RhlTUoQMaO2ulTLQWFc%2BeZ1ccemSS8cPcedqIMNIvituoM4n20b4ZDOp1h1AkVFlpGeaky9VwPlv%2BeF1rNF5tHr5bDgeXXY8pt3gqyCqy6ByLGc8mS5UAmIR8kjHTHNaH%2Bf2b8ayBAu8c9GW1Bz8OQRsQx8nzZc2Km9z6L%2BuC24h0qfLvNQ2gV6Ig13F9LdQMF850aGF9%2BA0WZGZHHT9y9qgvYWGx01LxZ4qH8UIg7AgXGBWqIw49CT0QY6pgEp1Sn%2BXuSBHpQZ2ygrEatW%2B16reW96oGcMCSJJ3zm8Yh5VUxL7GqW%2Fm%2BMZ7tWda3uBJ16sckIGdN25QmWtognGfU4CmmhQCMjkSp91KxfKjEmCwRxUCcoFVBVdRnxG2vXEw%2BSMINrXmGmLWzdBnbCWCBExhLxz4X2NIY%2FcjT8ccjBEhSNHXvpI%2F%2Boupu6KKQhmClYaXcTMjvcdE1nLAWbEAdJsc%2FHo&X-Amz-Signature=db12fd274a08ac800637ee9703051c8eb07478d7648b4c31e49c1ddd464c26a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ENT7SEL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr9rXPivwJ6u4zidW%2BzZHJq6vBtRMfnhd1koU%2BFhVDiAiAx22gIUvzMlFSvs0Zi9b1Uc5eotv4JEDE2u9wEE9jWZiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnK2Rff6waZMz55jKKtwDx2TzjmK6uBdU0MX4TJQ1Oy7hnHDHFpGeCHszK5%2B9t9YMmRn6Op2Y3VvpQomBy55jJmoA1qIrSkWD%2B1gRd6VFesv1ybQ0%2FfvedfTwMxV%2BVxstTm9tV%2FNtYKRHiTnXsYB%2BMPtydZRXyWioaWbDEXOipo7WdrGCaME31yPWBuxPhlRJxSoQDd9EQnQYCOe%2BjPTuN4u9j0YCjjK9y7BEKYLFNknRwdhbrO%2Boo%2FcB0qBdo9dpj43AQrFb7GX6vPqeyXwGB4sbV7wsOOF%2FYpCM95ot9btO%2Fr3gucp%2BuyBMKLULdZSzSfmXlOv5mAXtPY24f5gWGyIMjPbq28MALkr%2B2QIFTG6JnPhRhuDdaSGE5o6k7kl7BxNw3sO76db7pP3Ujje5IEVjohI3A%2F6B4YHGzjgpRJmir4hm5dnNn00EjECl%2B58AvUJXf0pvOkftBzCb2fvFRYpjLjofAEqafkxsmqF%2F20uS7oKpuYiX8%2FtB0k8ziZGDmw%2Fv6waWCVPxIflV4Ff7%2FIN83bi4wUfmHs0JTd5nbWPBKGRxoDCw2nlcd6SOF66U55FIJ6wXiRxp2mDctOgzdm9cWOhpvFegPVKjYI5c8%2BozFfaICoZ8RP3IpiNb5EDvu9M3JuKwM1oCZ1gwmNGT0QY6pgFIfa3VFXG5Nx8BTD7L56fwbvMpO1uEYsuNS6d9E8klcZ6ynq1dJ2A2Z%2BfHItjx3A1ARH5zXdTaPyTv34HUGSYFKzPUZsjiLf4O9l%2BafRkAfUBSmv4ojE%2B2PiIwZdfsF91wYG3SlJtyjDnKXntpcWd%2Fo27Wtq2CyHwc9yC2%2FgfP9Q9mgUwCyXtHCjM3HSCQ2KlyjvKVPqEjUk2QRNGTcjtYNfciWsge&X-Amz-Signature=b6dd3f954adf180bb837d56cff45bc768a2cccac513eb7e69310e53cb8e37830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
