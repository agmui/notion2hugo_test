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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FQEMLYO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCNTnqhZvIYRqzlptbm4uOjKAq3fmr2NgcZ9crVqU2KkAIgE%2FEEvYyb%2Bf9Szx0gXeiBcIbVpNS%2B%2FUK5NUTrs%2FOxI3QqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiDzMgMM%2Fhvz%2F%2FEbircA%2Bh6%2F2EimGLjA58%2FvpJbi8OoP%2BNgKUuZqRqDrMCXjBn05gs46AXTi3MCx4QrA7vjqQgrsCfRGxckiDVIYCDuplXuWvzRDUq335VAikiFWySj4YHepBqPaHFkenIbEygZ80S1yfhyY2sXVGs4Y3j5%2Fk3ael9wtAK1QrMI2tWDuJB0dIaplJzouUg28UQh8ROSQLs%2B5AdjUO25cZlyjfW16uVZSmS38mo9H8rD3bhF1WuUeogl7jIwy%2Bh0B1eSQxriqhrui4ZzSByv2AUWQjAACF1bzNmgsiA57wXMSAnWGRpiyf68%2FC5ghFSQJyiTzxYTS3t2iGoAWCTP6PbQ8zl0%2FPdY8qbpkMVfD0tU9093OL0ddOo22JP2puBlGh39tKYi0El%2FbNmDPW90Kkj3DxRPHXwRRZV3e4lDUHKu2Nr0WPHw5IQ8GG1s4M6FsaozT7St3LlX%2BHYIN5OXdegVwesHKf7SIPieScCYrS09i0EdiOkL9XvGC9pc3LZQWOCuKkttPaEFxzck6r01RnYbmeM4hNT0GNcoKwydzVg97AGQalwMNpfFP5Vmnor%2F21PDIN0tvJvBhcwOYTKREp0w5z8BSuowOAmvoQSOfQQV2mfkikiODhDNeGfWSkK4Ka9xMOvajMEGOqUBMtmWrWhypZBCsnjvdiMvupM6o6COEqiyJgp%2B%2BajeWixkRf36oNORlNNy%2F2lklrsmV5%2FP5dvLEBIPIuu71%2B3HRfDMQDYLDXm64XU6MPiqpfLDovnSKyO705B9UNYczP6BdA%2BM2SMfC4MdfqQW3bMUVxNuge8gqwWfFZUp%2FFZtBTDN3WuxUTQVSThtAdfIGA6VMMk1147TZ1hDham0lSsBeyY%2F6CfX&X-Amz-Signature=cb12c26aebf23156bc90cc0f9009cb2ce2756978cbb95ab3abe0929ac783de49&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OQNSLDC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFyR5gam%2FAw4HAoRn0x8o%2Bq7UNV52lYlLWuLdaK0ABCKAiBXd%2BUNGh7zKGFCXDBdCIUcI0OR9mD%2BAoBwkUcW%2Fc%2FFGSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtcvAbMqqKWiFLFuxKtwDlfxBYYzQSTBU0%2BhA8QxEojpcI1t6fkMzqZVGBCMrapOhVR9s9nnCr4bmCSuZrpoeqlQHO%2BvJGXiljNZA%2FFeWlBdo9HH6642H3QMRu1GgnJoAbhSOpE5JtSxzjZ4Y4d%2BxVLlNX6%2FWl5LTm0GREF0rIpvL6WNYx6OzC%2FwTIerNNGkZKhwNpkrL9iQuRN8wsPFO7mH9jSEELdkVwxwRSKRhT1r%2BOEozE7aAKSz%2BoeDP8a3M3TN%2BlyBi%2FRYc3u6W65qXaLRAG%2ByQHYqMsx8KDKP5xQOW7lC3TkmKMGbPCNVU%2Bav%2BuqYcdAt3cIKZWtdXHSO%2BZNj%2FbcOJsVRgYVoxMQPOdfsHJlH%2F%2FUdpbKiae3iQo4ZGlrkkp9S6G15JRYCPbKFzTULq0kJ%2F3xljR51gPIHm4U%2FMuQAslmOnGFCzGQkr8jXa3tZKMLtn5FbZ8VYj6ZWgFZob21Vf91k9EPHavuHqbM1O30%2Bo3BwVDczjiYC2t1rQaYAndIUbiIrhPbUaLotYTrmJCfQBv7vm7ekDrW%2FtRORL0mjk7K6rvNiqRwgERhO6n5ASjYOu3t1us6OMQQt3HYL8LYr9rmyI3N7YP90mjM%2Ffo1hnGQXic6tQKafkQGUsv1NCA5K8%2Fdxzo4Aw6NqMwQY6pgEwNkwM4P3qduxLU0j77TyAiPOMxDN6B5YW57dHgQ1QXzQjEzmSs2E8rLw21t%2FYACB86BRII2nAUvmjdfK9GyVgozDn33Tr0r2yQdagVELuRJADt70yYHDf5IJ1D13ICSHJhHF1t6opItTTob4J5MQl0j4bRhe45PTRfa0Xz7cvJgth0XnmzrWqh1x80r4yosA9lNumwi5qo0I6QsKVojo96S2qbfIZ&X-Amz-Signature=1f0994538b3f3c1f419bfa9ae98110cba7dc6c9ffa5dbe517ce8a7645b798882&X-Amz-SignedHeaders=host&x-id=GetObject)

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
