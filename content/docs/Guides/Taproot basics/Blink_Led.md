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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2MCOOJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFe5uZpp%2FDT6SWAWrbhENAh4bWkbPvEVV3lvpMFFh4OiAiEAhLeMZ36r%2Bfp0e20OlgPyxEognnqVKbl1MIUAqNqMZHYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBYTNUg6TLvXBj6UPCrcA%2BuDfA2%2FW%2BpMBp2yZZxg6PM%2FCNo%2FtR6jGihVxWR4a9cjYa6wL0lTWaMyeQWuHuhFk%2FVppADyt1n74CJWATWausMjPrBAOT2AEYL7TTR2wUWiNwUQoszylDd4bZBjbUb4m9dKYXO%2Bj1g0hJ4GaWb2mk2jzHu%2FeU%2F3e5eHw487TqeRl1v0wMEIpNrB%2BMWXFtE31k%2Bm6ivdwauIeLqNma0g3HLDsabgpYvmZagRVE1C61vnf8JClwU5Y3Hoe8MNA7bXwS5aEaxiJTCXXrzfUfzxrgMDm3NfH%2BdqCkK13qpcm%2FL4WwlDiKMoFTYF8L2kt0om%2F6MN00QdtLqWmHQ7HBUo9RdH2ez3GEGRYRNq1LKuN2UQBhXWU3UjYxt1%2ButNnF6W9m0Ua2eJhHT9ikaKrUoDzB8eIuGoLvPYqlY%2FlJRzv8Y1ac2zkvXQrdjhDhMtRPcrtm6GnPJ5zHWhW49HalHFq7qkjA8iST7iIw1HHELzdiDwtmxFPejCIV0lqdvNh1ZNbfMzv%2Fyml%2Bq%2BfSSv%2Bjap5oQ8Uay7ssLgw6K7wwKA%2BPovlcB8rPl5F5bZClsKdyWUrACJz0LyQR9SsEBPAiJdNCbmwYvM62wZGZ8vt0NXrKgHYVvnB5c3OgP8w%2FOnMPWqzsEGOqUBglE3JaTCeaaP%2Bid%2BhiRl6Sus7jvSn1sLRhsJduE0nsYPCVp7r79FOZQu1Q0G5LFCtvvyEq%2BeXJncHHGP1YDfefb9DWC2uCMIvCsCokYneBcn2iMKTp2BsUOqH1YF3wN5c5gAKixUx8cexfKOKnLAF%2FmU9iW7gdEJORh8GldD3CzzYPjXheTo08QLayxiato7sWy5EGydcEchMhoFROusZgppv1L0&X-Amz-Signature=734c3cfe68260c518ca0d41b2350d9296cd1f17d1138a671cbae415358f18e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBKR4KDX%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCnnc9JR%2BMLnr2Bb5lY%2B9hN6d5JKWMXmyq6dAgfPquSzAIhANzXhLEO2XsbA19lrHm5%2BdjuEFoqSoIva%2BbnWSfzQ6BaKv8DCDcQABoMNjM3NDIzMTgzODA1IgyZTfjJ%2Fwp7BcwpfVYq3AO1515ezXRL5s8coBBhAqML2rIotr4ddSVWzclQuzj%2Bj1coItDympi6E01tSHLOTlMO2wKUVGjkWAGqHmmQi3dQMTrq7BWTa7oOjj0aYYNnA6JSobrqdRMl6Lxt2BZdT9Zz9Y0Foju%2Bab4Oj387ZDrtFQALSSXjI8ZQar8N7KAHDBvKb7aes0hQPFqS8vPceFxSAiHxdHFtu4kbO23kfL2mYZ2YN%2BxRMW%2FpqEFmey3cN3YurcFDz6cZutxH3%2FPYYcwsejueEZ%2BlKZhLY1z%2FeHhvNqdZ%2Fui1Z8EJPuJo3vRChR%2Fg2Q0Zo1IclfmgCcZhCDujF0v%2B4l1C5Mq109mZ8n3eTI79E5p9r4ui0zzYCjZpn7oRKPZIXK7aKgbi6c0SujkdmEHPy3FNvkEL%2FsvD3eMlahvD9Yok5DMMuTNNgxgzem7%2BcYQzMZRpmmZ16OzjptkW67L3gyKzmDnDrR1ZY9vy%2FioorT9Sme2YIOnoEmVYnIWf%2F2sAStLDcn%2F3fwGGaj9a0h26ZJRSucDdEFE1bXsjDI4nma%2BAsbHj4NP73aY8HX%2FN4a0Bab9Lqz%2B7%2FIPEltEgYRvnomogzJXBbtSZaJlamLuXhGklMynMc88ZUFXmpvfhyEY0wFdCdT1pQjD8qs7BBjqkAf7bZnZn4sLczRwy4m5vTHMraR4rcvdMcSpDAbxXOvRwht9Z9lpNd6g6jew47a%2BijepZp%2Ftqb6S3k4foSuV13pmA9D3QDDus3fNhMwhLKykDqSVxz8EOwwpmFgj3Y8JHKKenLM54YRE1cO6e%2FIlt7b3z4HJeFkJYLiupv7upODeU06jMBDmPBMZKUqi8wIMW2YfMpJPaSlBkiPjGzZUz3ZNaX45l&X-Amz-Signature=6d8e55f54431ea51d93c06966d68ead1bf3db60d0f9ac649f07a8cde171bb69a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
