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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQJSNBCE%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtQrFJ%2Bj%2BFx8iyqXPG9VbqdP1DXfsua486aPjJDHtyqwIhAPFuIXrcQcsNT2q4ihS5CJN1jqUjnFQNx0Ci%2BCFHSDGYKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5rjAy%2FNxjVUY6TP4q3APUtRbpU%2FeBRonT4L4WAygjHMmOtSwJ%2B4X7JuFfr2EW8R6xaVxnZ4CsDCoxV5Lfm7V1AStUUhXRrnd96p8tuXf5swLJgmLh3RkAa2pEhQVRCkc7j77VyFDk8UVvHUNHwZ6kk%2BBB3VpM6hbmYZxBYbZHb1Jmo68SRANH4cu5lD9j%2FsMVZpKCmhSieHVdv1%2FZYv45wY5uPKAs4iS7vDTHGZt1YTesQbVm0qQr1sde0EIiw1ASADW29kuhTtTG0DFPqfiwul%2B0uqXXdx8WogffoHJ7qMgHEklEYpMjpyc7GKiz4isW%2Bfic4Ru9n7Kjd9lxEHdyjsTa2k76nBBjdNgqoVvaRf7jM%2B5qFv0w5g7ykyns3KGM8mXeXvwltxY5oyAp%2FKsy0b2npMK0SR%2FDgB4NV3oTBVf6ydeFhO%2FRnkSLk%2BLiDilthLedPCqe81av5%2F6NWYHWekayBX9St4r%2B1ART1NEl0XQI0%2FYGseqbdjvWelE6OWfMEFRRaxFosB19hZ7f6hPKZk6pPutIqFaaTLV7rNVMnkP6PkWq9lfG0rrIH8mOMQc854qGvafCd654DLXwqIxbZo5PCIrdamNHRMQIoPEOtDY1SeidRGsTx3fbYMECzjRXk5aNFORjPwSYhDClotLCBjqkAfktgqu%2B5XbTnvvUj4blfQ6NuxObCcM776iPbgeR6WNU5LwDJGJF8SOn2bLjXKLMvLo75BLiIDyVbfy7Lrvg%2B%2F1JDhMCS5pib8YPzX%2Bfonc0sHqBj7B3YBLgfAR3BofHTON%2FW3dA88CW6bXrQJvCbRtlRjtNfXFS2ay4OJw02HFAhVtqXS8QoXkFpd%2BJDFLzSv36ENPBfhRM9v%2B98fF2dq4ovM6d&X-Amz-Signature=70421a0548ca71e91d0cddd09e57b7384d705783815816c05e6c885406e70259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCID3CS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIbOoeCi7iJkVIUHjPExVcFbIciALMVoDZytlYJ7hHUAiEA5MWPTUtk5ONHtrubr6rp36pxWz1ucPVjL%2Bw%2BLzicrwkqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFDwazRFGC08eiiWyrcAyVblyDkIPPqRV2M99SepaKVSD%2B3mShra6nYw3eTaEutMr1%2By9Hvfw11SEC3ozF9iuAA%2Fq32sCrN3kn7k3aS%2BdE%2BdnllvgpdFRwritp4SWR8b%2F9xkCHInr7cTuzn0qmLlQU055Am2tUzi62CADH3f1lGAYRv1liKFnOGxy9pvf9Y4Dqw6OctduxKeo6Wgd2CSN8VRabUaur%2BcmiqjZ4ysRT0pnTmKBDUiPGCnc8irEvfw1kh28aGHn1%2BXkhM4qLKc8%2B6smSmnDNg9bJXDehkqbp4W1336upkGwtUz7AXZNA%2FnzMQxGWCuPmY3Y3oaYkaBkzSL8P9JYpe7kJd1hmQJSel7Ux8pqHVMDm2L8gvylot0SE0kvZtS7oHWqxfMrSbZ2eyQ8cRksKGi%2BPqy%2FlPoBm6ZSIh98iK60pDMt4%2BcltDimBWOdZIRG341Z3iOo4xD5shlXCpZqXHK5BhCMFPh7vKWsiZDG%2BmoeZOXrFy9adcRJjdvtAB56PQ0t3WA89xowkJM7knM9tKSTnuILf5SVUQnmE7v8rU7DC3w5xFcRJPxTU9uEGXj6d2HQGMQuIgXKxXV0bn15fSjfGBEWnFU8noLnMPR9%2BaxYx8Dz6Fuj%2FaMjckXnYwk6w1yd9hMK%2Bi0sIGOqUBGj2VhP6jpT5NVRZ5wAkeNBsuyNa84jaAQrHf6EYnKdUtrQ5qVUsrdyrYahpd7EPRXVJk1EITKXNU%2B1Trc4m%2B1c02JqqxXR8oi%2F%2B06KsKTbqjgmZcr%2FMp5hh1tfPvoKQF9yTLHfsBqtaGolE2ysS9FYlNXSKb%2FO4%2F%2FSxkWI0BDMKDKgHsM5KPEb8ss3m91U8CiujWKNY45SNJtPcq4fA9mvU7yYCk&X-Amz-Signature=da5c0fc00d68477f8a2c9d1b7d0e7f5ee2ad2f9dd3892c30be040a49cdd04dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
