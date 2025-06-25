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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBO6SGHT%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIA%2BWDONxRWwAxC%2BqwPc%2FO1UPDP1cM%2FzDKrZauffOXjUBAiBL7qnSQa3iy8Utx7Ut5kgZfiYCNAWoJVRKQALXIYnJ%2Fyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMr6ROoLKFdGN%2Br0cvKtwDoOBVfCZ1ZQlIaB7sd00SmuI54%2FO1R71jPCRSVPcuXOHUhMbCmT2jF54NgX3Qg8NjPpxhgYijVIvGFydq7PfQsS2yUscCnaZr1LXiB9mTCcqJbs2OknHh72Ti5oUMVEdo73xSWy%2FP0Yhk4WYGDm8rfYtH2m7wOm%2FvjKqfkyt%2BWFNOiI7FUV0pybpZZIKY1h3JT8yreaMayWt7pPwrL8zSGDxp2kTntLsWZ0xq1W9iMNeFNiTAATdfS%2FMhwHiaKu6YBVrblVXFEU36H1ogBKQEjWp0%2FltGERTDFqFDIFw9d9NZZSsqo59uvOHPWSmg8cJTlCuu8N1ah7KwqStDunTKUk6qv0iqPRyYaG6l42Yh6rViNlpAwOWBAAatY0V7YvfNmDwu6pyFs7TpjwdemL7K2KlUjbeh7L2aUID1NgSu1%2FtBR2Xx4BIYNcEEA9b2TUyL8yQWUSvvQpPbUDTxPnXmHyL5cN18VsA9jZdeNmm0lLvZVLR4OhvvfEWtLmlaB6pMGu%2BAiIvEbsKQ3FagmZ95d3RniIwGg91N9%2FWBU%2BizAYVLjDfjLg3f2eqHYT7VcvQmjvyINavsUfOzhGuI1REfqmoz90n%2BK04Y306ZWV0TjAJJA0clnAwJlEo3AD4w2fbvwgY6pgGtHJ0W5VK7zFQSKVrLH8p5wyv1e4LnWteZVu9lbnqr0GFYBC6yE5MuJhkd1j6vK%2Bh6hAsA2608FgoMcIG8ZIXct%2Fu%2BhBl5zrbls0%2BadQqlueP5ksEGXLjoN7QBk%2FW93KZiUOnUfCW8HzmKHj6U88YsdKBKmRi6otsppsmD1Ur57as5qGn7TOJ6xT2sKDmRL%2FS0PZSdS0EgQUTO06yaLDYvKDEhLfiy&X-Amz-Signature=0fc167db221babbe6e2c46c395994b53bf5035dcfe432e6a40e62b40dec128cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IJZ7HQA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQD5rkN7ND80r9FEXS4HRCcvrGpliOIPic1MK2tJgHb1LgIhAILRBc0ozW6AnR%2FzoH%2FkdcCA%2F%2B8GuIThlm91qdF4XXVhKv8DCEcQABoMNjM3NDIzMTgzODA1Igxog0wRXCE0V63HUpYq3AMVt0Ha9lVRkxzTAGaRBdbscw%2FWxzoTb9Awx4eGMcuoIX%2FSWSUNoGGRK10nbpXNNYkfja4gG%2B5ZdD%2BLyGrLeGQftJAwK7sVC5jnR7%2F6%2Fd0rl%2B69xtdzmf9N0Nx30Y1VJGvVxmNWikOdIEvr7sR1eT4f1ysHEEQYwGW50%2FMQbPW2BmxlbRNZvjjDACU0CEx2tp7vUh65XOaGjgx%2BN9RXZPWU6tLQzZL7lniWpiY7B%2Fe8%2FvUFd92nDLLrGlgenWhWLBSHMl%2F7lNYScO1qLEIcU3lPDIBWgYS4T31EEZHSN8QOm3BQDxYb5R6KzAhf7PgP%2FPSmZu2b5ItGVTEbxbf5Wi1C3ZaIl3f1TTwX863wdu1%2F5P%2FcfBO1hK62ulM%2BNqVa399IFGsRHnpXOcMrn94qO3KQNs6UmXQHI6i2IIlyVlN80wnpPfmGBdBBs%2FNbytda4XTDLidlJ6JzmuRWgYk9Nufbtck4dmIurhZVn6RFOEnTkt2vw49p31GcQJK1Jfx3Vf3fJ90zuP14yJZ2bnJF5jZqLK8LCAqA3c7FzgtPkQRrlCDafNSyOQy3a6iwINM8US%2FKC63zXtsIe%2BnLXn9Tpslw%2Bh2k9qKtSrjzLU0hAUFyDFcto1FX1qVoyNSMrTC0h%2FDCBjqkAXL%2FivAVbWSBwrhxVbGzifFPPY4G6RLaQWctBVgC%2FR622l6HLzgnsKnXgSaXRzXeCPafYz9XK%2B7ChwlIDHB72PRduxFHvBs%2BkKmjBJTQGp%2FHKiH0%2BEYpgEkcGKGyupNtkrpGdNnOBOZ2JNBCLYxt6gU3NNuaeE7nj0enbuZbxwwPCQeDVLX%2BII53vVIQZL%2F85r53aSxSEOYdursj%2B%2FWMmX5z5w22&X-Amz-Signature=8df169fe1851bbe38667b43b5f527b745cac23523b13b94233466f01b8214df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
