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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OSRUDCA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICoVXDm%2BX7YHCV86JudByYyAZZyTgXhcOtuTlha8wFHdAiEAzUiY3juX6nZFg7W6jsILbLUc3H43dh%2BdrM%2FCHRgQ%2BhAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjkegRYvLU4RYCKSircAwYrd6%2BvU70xq5mocAyAvLwFbtzozkodqPf4uCgzhnzxijKL23O1Nh2Trpkmwz1VCMJAxNTwWGxOUatWI7oWMFbAjp1KxBeVHkKooolEVBlv5FBZYfyNXEz0oIgqR1Ls8Xy9SctzFSdk0oMQmZcW8tHffwsHYowNhPFWnL%2Fm40Tu%2Fev90%2F7dJdsEpytjQy8S3IfXgtH1Do%2BHvAiv2NV7PcfMcVmEkCiEVHjPbSo2eK42DdZTd6%2BC3xFpMwQf0P9p4vdEV1tKIIgt4WogXcl3JeensY7YrRS4m%2BRA2NgVoDf3U0aP9Btv9RjunNHxBRE5mSbcG9f2WMvox9LupFsRp8aN4usDdS5MZZskZ%2BlAKOz1qc%2FkaId6BcmBSGDoYVVYCkgINcLhnn9i90R5EWjFME9gw1PsynsaocGGWusEMHb9TeO6UmcUDkg5AyLITEjcTARHFaz0U6USh%2F7NC6JA0T4SOCgNFjO9YMFLKi%2BJwDGWEdKe6FGY9s5sWl6RaU1ChF2FX889ehj4uy4lsUWu75Z3C3m2wCM8Zx0FcMH3qNCZGA7x5Gg7NsTvEcGIL2EtxejJIfjloa4u03Y6iZbMG3iuNG6Xbpr0Vyy%2F6PQB%2BqG%2Bh8GsQE0w0L%2BjAZFMMKDOi8MGOqUBbiQJ3%2BBEDOky1tSruizkc0J%2F05BAEcSPp%2Bk9VWh%2B6R39zggneYOK%2BJ3JLT1c4T46yfGAzJ6p5pZkfCAHPehj3ftLgHX1GCqrW3ZhXTzDETaHaDUsuaWbBdUOUsvOVAZDJzR9oN%2FdJOzkBvAfI6D9wf4nJM5Uv6OFJ4MeNODY0oqx2x5DHFy%2BKKbwiaHncCtEr1rlqMEcYVzHsHUHe9r%2BlGTOcbD4&X-Amz-Signature=b29c35726a684047c344a258d80e47266eefacc900090d78b21e3aba9e765034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XFLAYE%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHINRv0amq0PXYSWo%2BlFGZg5KZdkBzK3Dj59C38ytb%2B9AiEA%2BAoifbXlXDwWCPZ%2F7RM4%2BXEkDz9KR7klrfddppx65CMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8RtdolE6jjnqErWircA8OKB%2BsIA0vdYon3NFzJYI25Vlh8CTrldmsIQruZJXoizWufFnFdjuXRrfo1mqFjZq%2FzBdsNPnBoY3vv%2BcmS4bmUb9IzXMqIUTjJVZ8RBCAXGoaZ4BMrsOG5PsQ7QvthlWoP99V5wPNOfY6M6gD9d4H1EuVshEkvlgINUAfVXSSsChIu8dmGzbr8JvrbvGd1OdlHdXtVKzVzxM3Gw9kNPfaqjGecHL9kvQ35f8biIDk8zn1Lnuy1fSJp6W4IdNrpFTdWXQsPLYBUjr%2BS0LyaPE6U0lZTZR%2BsGu%2BlxXR3b8un1zsRK5v1ZAGjO1CX%2FlVhZBDAwbaaEtVpCYQjU%2FKrZqoi%2FRPPJPxH2aC0WdjYVO9rIIjI7kw%2FQopOmk2uJPsLHRh8MdlVFjG7MbNnZ1TW%2FkL2V%2B8mXd%2F6W9sutAcbzXE0k7QeswXghdS98tyoX0qFOpKSoH2%2Bd9lpYiMEX4wzXE2KGZ%2B1JvrquPWZ%2FJi5w7z%2BQRibhbk0g1MPRl8x4ybAVzhA8vINmuyXwXhJ%2B5E1YJYGEylW%2FWk%2BvkgJ8f5qd9z54VRKcTE3Bdmnv6NZCKl5WFNInHBTmAYA9%2FtA2ydsYPUnLu9eTH%2B0gz9LOUq3iFKnbdZjK7yDTQVUHFRHMO3Ni8MGOqUBjoxTWINrGEsuBFlUQVfcswLIqLq7ncsv%2FixYh5qS3ubW5MedaU6bOx4c9nWMuzI4JLeHCPUBizv0eZs18cO%2F5r3xDyL0alAmSsPfxqo6Qg2J0j7tImWfjU2Umd2O8Zf67oU1f2basG%2BsQN7%2B05iDaMgs24QmOj7O5gjW%2BEbY14BYiGVw9iDA4m6BacRDQYnzVWdVyTClreAXJKUBC%2BoBiy4bwCmg&X-Amz-Signature=7ecfedd5a813ba5947a3980a6da29315391151fa0013c0317dfaa07294cbd7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
