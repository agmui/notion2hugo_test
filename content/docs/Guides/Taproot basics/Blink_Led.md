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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGGRMXGJ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYxQq8ZJF8WyVHyXXUPcip4v3PV6j5NCCp3btqM%2BvunAiBJ3%2BjZ%2BpuTqMcvdjKxtzyivvU7lJb0hKUkJBm%2FkLp3Cir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMYlqlQMwEMnlcn4vtKtwDSC9GuSHZnL8Ym07nWE4P5UoERlVVqoDQtpA0Gxg1tnH9XT%2BjtVWFjzXsqjLNMDFFmiePMgUj4wIlqi%2BEkrilbkS1J0CRcpGFAg46R18b2KVdAOwypqBppIhPZh25ItsapogTuwSvAQEuDeTOrZFUUNYNqauKtZmuSqjKa4TtLkhDcIwUS38NFklHQM1qo%2FgXW4OCGjA57BSUQaH3VqwVA8j7yIvluC%2FnvHoo8KNkpGraRZ8AicIX04Qn4%2B6nGVrqj8k3jyok621tFQntpd0cZQMtFfeWeLAIQLZHCnEnNRhuHSlsLAnKeHXQaupiRKv7j621SiU7%2FlHZawXAjz8%2BnuC1k07eZbSIFrMVUPbTdROezcALCsJoueG8%2FuAj67RuBA2iTr%2BLvQvHuMVpI6pLF9KJyX%2BHC1%2Bmf1WM%2FqcvMiuMQOOsvOhMHNdwM7xusDZgs%2FoFpnriCl55%2Bcpd71klbDeBCcYyAI06FaxRbztAKP02CkbCQdQbU%2BIwy4UYs4VeyErqFEKeKOyjwzvds3OUNk6VssdcPO%2FWGpuLpAh32kcyxFm5E%2BJiOV%2FwXNN6EkF477pGlSHYwX0TiLDxMP3%2B8c9DZJG%2BtXNb9rGzbmt5pjDj8Kc0TRja2JRfmK8w3bzZwQY6pgHwfIbaq1G5fYbwIAEY0rykwgXd1P%2FyoVq8YSZAtJ4DmTpKnB4EzeXVNrQG5%2B7YiXmHvkVkeg9S5gK2e89QPOS4yOunubiYUbgL0t8McvQl%2BeVo6nezqXr7BUCBcyg29tcTRGxOi6BtVfkEDuoWkJ%2FRevHMXLfLvdRe6TVVndv1NMoReKQAoDEfRGAYIRMwT2pZWVYTf1MZwwp461HbYoYwd7UIZeb6&X-Amz-Signature=84d8f46adfca897c7bdf1299e5bd5524706913fde7706f86c5404dcf74eaeafa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UMTPTYO%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJNPSAGRavKJ5pAS9UmLtevUEazpWRYCRzWTaGI917wwIhAIRPtyelE6jqRfhW%2FqRkFTRzsHTlAPoNKKMDjk6r45%2FVKv8DCGoQABoMNjM3NDIzMTgzODA1IgxVQoUOOpVks6FbiOYq3AOIwQFo18vWuSQx4rZpRSziCTDBF7FEyMLoVlJFrpsB7xWXC6%2BYUwXLxk6e210wHHpCEev7rjEn%2B4YT75%2Fw6hEm%2BRV6Ulms81LZUIt%2FlO4YfREXRCSHNE1%2FDWW0BcPH0ynZoWgd3IEzCEOAFX6G0sddOTRs0i58fFw%2B%2B8upYyKbd3yWTOXyBDYjGL7HGoV3sRRqJ6tKxEdecnyPi9XuGWrT4wmEVlU02OMGLj7J6OssqbNLbOAQ10xR%2B4lUF9pIPjuZNTATbP3in1nKX115wjO18wygIAr%2FEgksd%2FmFzhFFq0wKhEuziOPpvzBaMOakmO%2Bgpx%2BkRNhVrhEuBmc2sVtDtZ%2FMjAAOfLWN9%2FRXnE2Iq9Wb57wqrBf%2B2UPPk8UqE00eqdDMMEoWbi0R5g9vV5fR7VHivhyNjjhhHjDH8xi5JHaP1iKIojkIbz1LnhEtkZ%2FqBwn6EuL3tYvQZMJBlqyoZISyY%2BVRNNZiU4T%2FHQdSpQtNhUXXk3IxCBYkmmqBBBkkuKXaTM3Td5EzKiEmid2sZpSKOSH1sWkgLLSEsFNvq%2FEjPtSrmh0faov%2BsN2bvfkHgcuEt24y35yaK8jAXgAcsvSnZd6%2BcuLT%2BVnwr4372i8C%2BrYC2rVGr6dQgDDqvNnBBjqkAYFKGSdUq7vA1WkYMSoW5z%2Fm8vzyMQy84RbU4Gfg2z4H6NOrrvjixBK4i1emEtlcGBpbZP3TnQB2X5%2BKDpJlW4CwFSGeKUogqBYzauOu%2FN4SZ174b51%2B66JfMpKvgzfFkSCHhY5abUrLE%2FlZHyCNdwhWKrKZOBGVXcMN1LoJgLsiXCgXBE2KRj4%2FIuC8y50UuYwvmkchu7%2FUU%2FmIRWK9JE56Iphi&X-Amz-Signature=555d4d89d2f96994b43a4322e76b92dc05b378e1acf41458ba7947ff83213b26&X-Amz-SignedHeaders=host&x-id=GetObject)

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
