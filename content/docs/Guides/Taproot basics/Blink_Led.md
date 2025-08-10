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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QILTXLD3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBsjLLuIORcn9TYIB60wozigszvq%2Fwbn84UUM8rht2PwIge6EvnmoPIjU18k9dkccqPFV68rINCdK8a8iUwviuEocqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8Rw%2FnksrwXR73R6CrcA7em%2BivRkvZSnTvfeoCB3jNZKqwpvCjC%2Bq%2BJ2PiP812DTsNXEGbJduJ0i63%2FQwAnQGlqzQ6eYCePtTQdn%2BlCsW0a6EfR3ZD86DoKGY66%2BzbkrcXkFeyxe24Mjf63On4TqGII2qKUF%2FjE5qI6rSZf%2BxqP7se%2FRl9UyReSzoS0j9UVMUOM9q4sIb609lA9Jggm1icUJr58PnRM%2FvkO87UiwpyxTsVbn1JEJP1uqVGdbm77bc9dbnef4R5tclv3%2FnXEXv%2FQhHPhp7Le9O7VUiA7sVmYfRxWv8IW%2FX9LEwZTwZF5BZXM4ftyoYW4P0NKYMl4i8Etrv%2FFuctMW2by8n1qpADN%2Fsu5h8AViVY7BsVTwsAKI8%2FRpUJ3PVY8Mbj5ayByw6%2Fw7TiOiC%2FECCIavI9lb%2FeSmndU7t61tJvWEs8EUSyka%2Fxh1Qg6kXC3Fp8hi4ws5f0EjeN34OyEQUztWG69fPHM5blG7f9AqEtra7H4MJuBST5cvlwg2064ilbBtzbs%2FlRkDPKTaDHSbDpAjgq2d%2BwFldmZnR%2B36GqydhOWx7whtjtZlwZLbb4vz8e%2BVLgYp5EQzQUsHyzQ98kUWtjZGxNInMva1Q65ENhewgfgxF2FHg9Hl%2F5Rff0zlWgeMPC648QGOqUBespjzCas4VyIup%2BUV72L0tR4CevBK%2B%2FPZQVaRiXK0TRllAhKIU0WVH2lkDy%2BImziz7bu7ZaoXaf2UO7EKL6I%2BkyV%2Fw9PMjvJ%2FwuTLSu5zmHLX69Cv0lujcCjskofbO5s6%2FyXxoq3HP6JrreTqUE0R4qMpgiRtwzMW7XGYNJuw%2FL7K9Lfp3Be3g7zuuSTImDeLZdM86qAouEp5uwLG31gb1hrNkYF&X-Amz-Signature=eca6fcf958e92405a3853cec7f49fd8f6177ae35a201425558d49ca33002b00d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5MAYLL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BAmPU5zPfxTw%2FnzchP9AHJ6mFVhzpq7Xvw9IYGYHVZAiBnkV%2BTil%2Fdo2heqcJIXu0I0GbNTc%2F3UiddflmKbxXQ%2BiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXxauV6IDJ1stwkMEKtwD1m2U7AUDRbKA2etIPd8qbFb6%2Bwn3kk6sQfSm1WFAdHyfxMzQmm4BCQbFtPUjAx2dJ5OVjQ8umhxtIhl%2FbfLS2gIBUhFSeB3RU8pcJQAF0XI5cDPlXTFc6DCRTtwzZZUDM2Ukus3QHjk9Ooj%2BFSmfPkmMao8JG4JgUK8KG3k0pgJNEgPM8lanSoyGc5%2FXc22CmfmLTuNfwNvy%2FZK0ZfZ4mwZw5UKUqfXPnA2tK04EmQzRu5W78jOqCrKr9hf0TCxlOl3GZFkSVzp8NOWXnabFWIoxWv9GGI4jW2V8iWKFNUPvL7njqoNWK%2Ff%2BVXbnh61tvR0eCF4QvW2121u5XzMNDN4a3szjniloXRGFxS4HjDQLC1XIplP044l4gVy3%2Bv%2BsKvMbnzLfxGSy6u3cLvshiQoAgbMVIS74CpT1EyoZb1j1Ps8Oz5SVtuquyOwbpaWyY8npc2v27t0rcafYbGOmjM90bspmRXCfkRp%2BLSFpQR0jj7hOOfAziSISRjkEt0WQm99cFed328I6ong33rIdO4tkBXBmRbxKk%2FfChCJAQTOR%2BW696GXfQYrR5Ww%2BcNichBQb1OfEmTd9pzlP%2F6l99cC2lG%2BCVDWcIpMWlV243qPUiAG5uwdzJrU0XLAw5LrjxAY6pgE5w9Qee2lB6VoZj9%2F8cg%2BXdcZ72b30y4Tnfe6jycRAB5IjISttH8jCwXgkP48Er%2Fwh5Gz2SyEk7P%2FuRZAw%2BeNnw%2F4VrUBIoyDeU5o2vUoGbjz1n4D78SzyysVamnrol6SVhbO2w%2B6V4U%2Bfeu0gVH1ChXReoKD1s7IcylDASIfHVg%2FCDmZNdN7m9NziGj3Jc%2BDehobk%2ByOspyDx7x5X%2BGcLom9sz%2BGF&X-Amz-Signature=847daa9b25189c9ca67766c3b12d9ef8ce1d1a78680b6f3792e79cf1b086d500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
