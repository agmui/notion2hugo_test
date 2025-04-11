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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UPRNM6O%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIBGedEsxW9kzkq7DFifJIgpqchTW6OxHFgUhHgZZT3CeAiEA43NHbkwXuBOvfJJ6o8e4wqnv%2BIhb0U6zXlfIY29rHv0qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9sUxxEXZQUSxPVgircA6JlXajnz9%2Be9D%2BCD%2F6b9TiYFgNI7aq2iXCmeCgBjc1SfKDHzOJPqXE0kjwlJhlKKrb0FX4U2r6faGtnetm5jG2iKaszVhEls6ljGnfg7CL%2BY4ewec8IOaLN%2BA4z3UJP53dNZgJr4bbvUdtYrU7m0yl9AQL%2BqDBjWlGr3TkBY5tj2XheHSPuK2UJ9Z82Yb%2FJaEwxdDv72N5hHczzkduPWFlIyPYcllKpM%2BRVq3oURHfi9sPUWvm5UEpp9AfG2UfKkO1NDDNx1NBDQdenfWMlR3Zghg%2FI6iJH7iSIZZY7jMj23qLI%2FALcbHENh8RSAefmROWZmGKt29OIkIOpG2VZFbgMuQydFimjlU8%2FXZj3K0VR4oogei6gx8Y7i9Iyk6BboMpsFGwu%2F77k7nFBPfzOc0xQ%2B%2B%2FH%2FwDLvVjRAmfzsbU%2FCYINMbiJo9aGpeuFx%2FfUaSEn1V4wP2K8M%2FvEnhXv3Y8RzkTiJzS8ICPzyEaPdIZeCxvHVMKYkYA6nOeIQayAofNSiHvFJRlmcR8d4YO7Twnx6NGbGnn5Qr%2F%2BS3TBZZ29L3PJTBe55pFQocbrEo9293%2BjS6vvWDNQY%2BW3G5J8WtjiZB35EBEJV%2BHl94Zm%2BYyuQWFNClbVnXaD67c1MNDK478GOqUBlItNUKb39VHU001vfDc5I21PnvYvj7yZO3klfdu5zCoATb8dYksMbbagyrmDOX6z4je%2FVY5A9cA3IWHqKgfLqrLFflH1dHeeKSQtgrTtWfTlKhrguvkZTu%2FQZLVBaZHb3KgdHhWYMdkUwfZmgR606vPRsO45cv9pES784nLHrqcbxcf9PnWYNX0ocsOklW5ymocJZv2A12%2BfuWK8a9otgKOPNK8Q&X-Amz-Signature=d78580b72597f859887961a0cad29e3190a01adab484004e9679e87b5d79b9c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PAPMZAB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCID9q8U1M%2BIIYHtJp3mK%2F07ObHM9ykpV%2FPmicReHz11CoAiBc0c8%2Fx4IaZHWxnA3zyQ5oRXF8t9lpMZmuf6RD6qsC%2FiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwafF4Ca4WB7EpWBPKtwDibOr4QChCMuIjbQIR0bIOUjwIrk4M%2F4ufr4sT7FL8qp1eIEcZM4P6ejBL0ZqDKUHbHWgGaLXb%2F45McpMfxBf0bZirJG6w3RHQOYD69F7oV4%2F%2Fvm0R2oF2RpX4MzO9jk74z1PgGoPglWsAQHdGvA0GrwrZ3xGDqUIgGM%2Fo45oLPgULFZKNa40uAg9LUpxYw2%2BszREiq8%2BF7nYdv%2FSFYC7QNWEvpEqUSTDzXC1LzhmnDQ6MHA5UIBLlMZcHYc18g3Or%2BAbdiPrOSUYgKNovMYup7thTUwBZTHrmMtstkuXkeFtaVwVHaOMtGNDgBVgqbMR23Zjp7JUtYyVUk1vFusNJybZzy%2BJANZ%2Fa6Fr3nqX5xoIJSbipoh3iPsPjzwXz9wFhMAnPUNYRMeaeqw2CSfHe6Clp6wHPl5VTcNnuml%2F4ip%2F0Ic0gfFMox4FAOlKdRKXsMAVAk%2FX6k%2BR%2BEyoVmFGaNJgrYuQKgqmnCJM01wD0laPj5GwrlqptO1nib50Z8TcosF2AXsGb4e5SbhnlaBDVi6j2yFwGkvL1fwnSt6elCOZm2jr1twUQe0VLvengTNmwQo%2FAGjqW6wX%2FibyqNOc12pQCfIkNSKegLds912tEHafrK4CmTiMzmMlVU0wksvjvwY6pgF1XMTKUKpvhaBxDfipN%2FBY21z8fv5XsLKEeFwmFBFYmZ0zlgqh%2Fi37rAKwYKMXW0EmvQZYyvp22HBbTtbUcTWQOBfSk59P2TJZgV%2FzNVeMl5JLP5ygbbWxBw3OO7brminJQZeDAnaYv3wiPBvGNFQDpmI4h4d8HJYEyfnJmM40Oz8jKg36UNzpL5RIToh9hT6EyxC9HQTFYqkN%2Bz0sOPIraz%2Fe9VHe&X-Amz-Signature=aa94bed143cfadeca6aaefcaabedffa444e876beb37fd5ef1edf06cab5f2eabe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
