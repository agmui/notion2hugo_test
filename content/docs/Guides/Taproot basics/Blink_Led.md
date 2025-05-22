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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ7E7I7G%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCNwA%2FQG0xoXdNSpADXE4WsCQuVU5rs8TqpbnH%2B%2Fab%2FrwIgAaq5q1KaHhkgtaKZe9aFinGtJxs7hXZ8IJ1wgRpYn5sqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFo%2B1Ri3Fde3gRy5uCrcA%2F40x9lx2D3fc%2FPQrcz2V%2Bd1s2MD%2BYiqtFxrkEH0IKxF6TGtdA%2BpXdIMV5yv8rVuFWGDASjeXW1TbKKjC7kQJZoV%2BBJc8j6G4DWDGDD%2BmcG4BpBpa6CMgMEckkL%2BsgDvkhi6BhXQPfQepbkkfLLiIVVhp92qncSl3sIxnqoMwEF7CYbuRTcO4Qq3GoKlTWJwwjPqOhY0SA0iPQ9k8DRt6HzOv%2FireCiv3wo57MhtdCeb8UcXkhRU%2BfkEshGzHU%2BQZUem7B3MdVe68A42tTz54G8sD53TJ%2BqiVf54jAzPl4VEjtyt%2Fz3vItB%2Fvsq0Rqi3Y71eKnNDx6nMWwbp4sI8skuUYJ7b8hhF0Lbr%2FP%2BUP3ubfI4XZ37bpMmXwEtLLoSzYejtsxyjdeAxPDA6xECB4dH39kP0b%2BiBNFJhKKA3amPx6q%2FCZ6a3CK3E2S0WN2eBJfcrpExphoGHnTtYmSF19EKylYOLVQA%2BmyJ3IF0cbpeD41tbRNCYQvzLM4BEKLLCopGkmKL%2BKC9SoZjDlqthJz9ZfymQhqh3e3E50x55kOs5T2P%2FBhxV3MjZyCxE7bGZmtK51GRMC4rXnY9Pr9R9RTVB2ILjs%2FYSN3JU8R5zeyi92aZ40ks4Ihktxc4aMO3svcEGOqUBjDmuxkn%2FtxbfqVmYXPVcptJn2bH3RGAlEOY58ioJnIiHAhMn3jRHsZj04abnkG6vfKM7SKOKXpFYMY%2FIwokanC%2FiGafhpbiH3oeg16r%2FPiA1CusYHf0X5MVEADwAk5yqtC1E8OiCs1iNY%2FshWSVbfiWvHhY42keRpGOCB8o8MPTmwDsglw%2Fq24j7Y1dK78ngIvn8B3if99UgdIPGhgjLXOiP2bCU&X-Amz-Signature=2462f21bbd886a146a17132141a8b842c3d44f33fdb939d4d4650a66a3a9d1af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6KJ2HTB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIBXnv48R6%2Fc6l3gyAZuVZNXb63pzVdJaBENW6AKfMa7qAiEAn7OkgD2ECDX3VWawCL8v8hiMn46Fmi3OaWeJYkU0Yz4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmJqBzMaVpHlYWW3SrcAxA8D56JIjqGqnl31Fn5%2B3eFLO24%2FwZ3msjxCvEoHqlAPe3N91i07XxQB2al9KdX%2ByoDQmdz5LuGrRIsJw4jss1jCObF4RBdLXSPrHMcEZcGomImAY8jXp0wLsqz3gdQqiAyVDj6YI9RirrDXggFdIhK3rD5v%2BpP0Bm%2BqN5mV14XYDrVgIoc6IFd0AvZ2WEihv44rdxSFmwq1iQKPsbkrSWe2Q8HHoP338WzysOFXSmN6%2Byh2BaluFRqKgXXATe2VpBgKyfI1%2BBi%2F%2Bg9qzwaKOE0KtExP5a3zWTpYkFzyZDNZMULWRFO7VwAyjse5xcNWD6rk2tfYq6%2BFsBD2bn0kAftOLoQ7FJ2%2FC8Gg9zU8G1mwo1jJw6Njix867W5%2FmRMk%2BnYOscQovybutCWM6D0yMlLSz2ZuyJwQPa57ZX44pzLmihahmwMjlI%2FV7S%2BbBtXvmxkFZX9zQThxk%2FMtutbLGUQjn0gPN2jSfVnzYTvqak1XNqRgiZWSroot5dBLl7xWdznx4KpKC9X92TxiOJuC%2FRjY4Ao6nRYvjsJMsV0Ol8ZRVBOIJoUbfsTY2NXgJLaJfPYV6v7QkKFJA%2Bo45D5prGVOA83FQ%2BJokheyzLCqn42Mmo08J9ueVwVJYvDMO32vcEGOqUBG6L4AeGDBuwnTS56dGNJzmjQ4nRZ2iyTEwFkANekWhJFJGWM13Y0HMrDz4dEDZ1CKCG8T5IRZSHkhER%2FVpqZdZUWOxer%2B11QA194rGwrLpDRFPaO5CKZ5fMsw7GAb9Vc8cKRNdcrhsTfqC%2FBCMV%2BNbZRI4tyIg2pUAC0abChxra4%2FJiLd%2Fy2B10rBjLVE%2FXVs0jCH6lJOKT37ZrFmP87d323Zz2c&X-Amz-Signature=eb416cd6df38c8f6e8b70f56fa9956f03254fe1ac00cbdeed8422cd14318a54d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
