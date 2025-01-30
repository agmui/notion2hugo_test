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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZXHCSOE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F%2BWfc60Av0srsR63cnQg%2FbQHw9bazNd0xUY0vKaxxvgIhAPsw%2BCfZGhP2DauXfJEO4DkYjB%2BXbvK8Hg4tN4Aml0IRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRpTx1Ch056%2FVm1OUq3AORy1ReizGII7UdR6s%2Bsibps%2B4iKm9Ypg17aR7W08%2BO3OYN14QVpE903g3l9QesZQ%2BV5WjUhLC9frdTBQV8k9kyWhsIJpi6cMjT%2BQlYYZGAYOHVOcOKm9w%2Beta61uelGdGS8VeFuuQSiUDObYLNqsqtMlGa5B6c40YgPwMWRFjSAhU0W0NPGeZo%2FGnOHkMxS2fRk6jfNX8Ewdei7NRx75BoUWyrUYMO9xqMM8QwdhJ8l3E%2BiqNfw3jjljV1d2V6EYldjxL78w%2FEasIR5aKQc01DDcIwyTdY9LdIrQgj%2BOcwT9cS9H4%2FRkxhFKJg5nEon7tl0BvM%2BAo%2FmGCDHcdPYETwwlZwc9AA%2FerZVe5Bg3RgnDvBbmvzc%2B5DU1afgqNUnZEBY%2Fl690279DlL84P9NFIHYg5NueGwy1IN%2BDhHkEU5YcFwXOKBI7ziRFRCmL9WaAeDIy79iBJjLVhFuMrFeLlpiG6L3%2FhMjJCNn4LxEioSRF6C84r024wj0lIOGIUe5JB5TETL4Sq2HqXGGwGcoF2L5xcBJzfpJdIx45LjSTY5blJnH%2BVN3oAUwIAetMBYHeuTEBGL9ZLP%2FLpB%2FHQHQeXBtVnIQByos7Yy42tm5eov95mBbcnR7WFZNZatsTCeiOy8BjqkAW3JRpGYec3MHwx0zMGkUonr6WabR4YAoF%2Brrb%2Bn3oSWkU2VMxWOO7lJT9WPDz98XQJ7QMBLmxoOcVtcDi9pEUaWwvmRN%2BZi0y0AO3p6HuGgrbqEos589zKsazj4NcFOMnNaHxdGcpPwAERjL5WN%2BV4w4N7fek8Ay4n3UL%2F%2F9bVYvcawzXPm5Yihatp7lpcnV2Fud%2Fttg5kcKuCeDECg4lwqRhzq&X-Amz-Signature=795434818fe2584b2b3738ca5f05f611dfc4f3ad1bd2f9af8d30ef59db51dfdb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SOKQTZJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvEf5vSBTxngBBbm4g6EpeKF4bzOAFJXmJ3K2N4I2agAIgYRsytG7ozxgQl5Cj%2FIaJbyVUAFJlm6oEiZX35s8nTCwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeM1VPiT4TKSMbILCrcA1pyjWBOqFsR7uDQInChBowNA8BkKA4y94HcYGrUdKIHZ39pKchhHo9PeCCbKag%2FazNFzhmFZuKuq4ggj%2FBbuF8TPWP4vklxF1isPYwIj5TUN%2FYAS8Au31BqH%2FfoByamEOkrMM%2BDI6N1KtNzNhmAGZvRIgKiyoeJL2dv2SGKti%2FNCF9y6CmJ%2B2hQ4uba5wYSGjlJXeeBcDiyNRZjBs8Hiuq6cl15e3Si6pFjZVpe1YZ9Liu7F9VejXRj%2FRcwICavdwWPGa7LRN6TsZRvzeP%2Bfs7uXw9ZZPBkHWm4jC3%2FDAllgVw27YkSzyAarMvvcDGRFcweL4GzZyrIg4fGPdOlx3OnxEW3Qpn1TgUYaAk1v6ghTcFPQaDJ%2FT4SYmEEYNiHbEY%2FIqzotZXbmTzCh%2FivQ81warQp%2BbuxzZJfCjUWFNnEUjXbkwEPxjYvXI%2FRPwkDRuvgFB8RGkkq%2FfVIebc2MYKxyIaF0gC4%2BSDJJ1CjgxjOdAo9fXpA5QI9c7grrAQN8230Gnwfy7210IqcSF2wEjUGoswVAwBwjXIk1ltloiolGvH1JB4pKFC5bMmKxsGyNC9C6tmNsgyZw4iIzFJku6BeHxqiiw3Hmggl0uEbTCr4H5mpbI6NH%2BXSo7aYMJyI7LwGOqUB%2B9IGl4mMg8uLl2vhp0wpHDPz4UC39Xq9BVWrYy1hqYJl2XQ3ZomyywUFSV%2Bw9iI9lqX79%2FknCfz7FjO7ori8WAIm9H4gfpLi4JLAkby7y3tfwL10B7MBye1ukU4lNmNVl8eT9kS9oru3TFTGFWsENnyHUXQrnkw4uFpZ5v%2BI0Xq3rAqArzhQgKebS8Ntsdiuwdc6EYnAq5EL9%2F9ZFHKHFTGvsUB1&X-Amz-Signature=e808638b1b448d77f4ce8b4ce7c2c90c200de0c0f18e15a464b093572efbdc4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
