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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHWMJ5L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC9fXgZ6cscIrPTPzZaVsPc8B55QmLW4BH0C3Agps4sXgIgP6ECz7fCsGX8ruGuTnsn4k6CmMx2xWqxKfd2RxeWNm4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFuKGHhqP7jwk%2F%2BdQyrcA0s44H2r6ig1sN9Qtnyn54BzzgwfQQYuykf2bU259RE%2FZSCCIn8NSNwi4%2FGwu8IE7W59Vs7AghcZi4GPqqzpSFC9DCEJVRQcd8BT%2BUrUxuJJ5Dc785jdDsV%2BXUcRIUm8Flv%2Bde3OUKaepUDwP4UWURMCSNEgNYslko399yrzGe71nMiGigFJWs1lAj%2FWUQl9i1aHYbooCfkLoUwH3RmRST7GiGjYq93j5K4JSZ5MWlNYYvlION6GRka%2FH4aNDsn7CoSdJHI21nByjXNavQW%2Bp9wOMH4CS7hfs1gzgH66TX6Vf0awrfaKSkeFwJMsgTSh1RJCyLk8ygRYvNLjSFSIVnudjG2GYylYS9%2FB15PrXu7BTniZoqU6qW1d7U5gx4olVVzifNewLdhuj2E1N2CWlpV9VZxGrN3GwJZ9JdMr4JXEq6QdXrBWw87WYPW8NinEtwQTR7Y8AQaCfMMcvb%2FZ%2BxHabjmsvCGiNOhDDnuc6VkBIv30SYVru44vciK02PeiYHhmQvSmwezQcf%2F83jN%2FdCM%2Fw7su2JzU%2F4vu4UuHZFZg8AHqk9BzZu2HNNBe0t2ArhVxknVg3AV6ku5rdC0CgQqjUuxTnfCDtbOXWiqOd9N7lXoMopP1e%2BE2yJGPMNqrksQGOqUBi5bVBo4LwQGDPeu2siu%2BiVY%2BJUt21MDBfRLx42wsWuP%2Bt6SMS5VQfV5ZyGTbzLdWu5npAM6YrK9EjYB%2FloN4MlpU93Vm2MFpyx6S%2BHbgVcgolrUH57y0RPeRwVP09FQFXU%2F8c%2Buy3PMpF%2FF%2BcAa3IN4JlVkYG3fDuOMQXONkGDqJG%2F8CPEKnDEcYfJQJLnnI1gxHTQW%2B87XRm68DexEvH4wlwatC&X-Amz-Signature=228ee0d6365e5f2e9cca10de0f2b2015f0b812b7f7ee2a1ff04a25fccfb9ba73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPCSDRS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDNYsYkgMtTEiDWNQGQEDAReKoDDjW%2FR1ywBgndMupeiAiAumqjWPDFqZC7PtGjiHfp8MYQKSvVo7myQGaJ3uHfu4Cr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMQx6%2BuxpxqDtZVKEGKtwD351459mnqS%2FWmZm%2F9qGDia75ggOiqt3RJ3ow0%2FGjftDN2HvIE%2FcZV4awHolH0Ve9GxPXICBfo%2BhJfIGmB9iWpfqulXQxdZPqt1O6I1rqe1nv2xiN%2BWCwQvbyx7fGq5W5W8trbgaUNRXtu4664VTGHUguXHe3EPUZN0JW75T%2FYdxs52r5ArqKb0wtYmbRui5ktZptDbvRS4JJdrciw5PbjwoJUPfTXQNeD2wz8cPWQfgVQFbtRhAQ3MYcVRthECH7AfN9OPOpEY45ezek6wc5zK6r%2BspZw02Pg5yv4%2FfrPv6awrQl2UUzWEEcCm0KHQ%2FkUUcSWCnRRCQUSpyLgDh5iE7RgR%2Bc7kLtvucak8QGi5mPzWKKvGdRNX1D0%2BNBC8pcvJLZAxnkDAlHlGE21CnIZXvCUvuI5zEkqd1Bij9cePRz1XJgSbyKv0YIcX4TYAPs73hH8NbElIegPRw2ZoS8JmJLMfgldgFz475yzygoxVFXJ1kCx0T8XRVooW2GkyuioBwKyIc6ZLUxJgu5FlyrAyQTjY1GzcGeh1Ps3%2FlJd%2FQFgaCxpo97s9mWHCwxSv7ToaFplNwx2TzFSQcRsnTF2DBauRvgJKHmptgv9zKxBsjwgMlBhirl%2BFGjDuYw2quSxAY6pgG1YPL0DTNPZ8rm9%2ByXuJ1gyY%2F6aMkwynQLz2Ndn9ZJfSVQq5SuJm6K%2BDN7ukvh4vnV5pS1yI1q%2BXG6g%2Ba%2Bx1goujxn%2BUUTfpNCBXr4ydVCI0ErUoSetNQR9Ghwq1bgd9QFmSYmulMnwMJKia%2B0uo4pIpa%2FMiW8Tvmg5%2FLJrhzoqh%2FweMNoXNezE28At8cUowKyi%2B4IzBpzEgQ%2Brj84YBN8jWySzDsc&X-Amz-Signature=15e1690b46b9a5357c871ed31598ac05ea041756cd3066e6f80b524ed6182bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
