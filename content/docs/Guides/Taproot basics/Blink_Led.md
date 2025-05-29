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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXZMDDY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4%2B8cLFLCu%2FUNRRDLKLTDNtQnWCpKijTWX2eU8N7S%2FQwIgTxFNC8SfROL0VM%2FUJZ53KopF77hd%2BK81IhUcglcdMf8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWIb5CGhZUfYn0YKSrcAwJN0vTSQF5OLk8ptYbnTpFmzdplZwEVJWojPnC1o%2Bb7Hoj0JGhPFmP4Q%2Bt9Mjdt2Z0iYcBnMVCRSVgLsqTcO9Qa86doZGpW6SxzaqnRTlOMRs0zntzP4une85tXTGDskVwY1r8sokfWkD6pfUV7Caz%2FZYkniYp7k00u3AXH7Nc%2ByLqSqKlo5f3kC5jbnD7tQvq0Q1QYzj6NpcY4yt%2BOVeC%2BS%2Bdq4oCqwt81RZZIS0lcCyZeqPhKcTmZyYKFlaEmQ0DuYm8hUOvsBdc7y9wja8%2B8Oby1bC0JZTzYdqVm8o6AmwWd34ulwAi7ZUtC0aw0k7fgKb5ewfcfuAtS8c6j2U71uZApdWGNFRldbXEjVs8eG9XjXLQbn3AK2i3k%2BVCtM%2FIqvXgjaRFp6AuBXcXzy%2Bb1FLf3m2lJ6YITC%2BwoJrgDYUxGxzuaFfhxhd1hipC7fQEJfeepxOgxHmjsECq3HSMTw6vmYYMlx%2FXD1CNJVvguyIb6t%2BXHze8OnVTDFUvgUT89y5GEIEYHA8Ec5Mq4XX4B9zW6eFBdJro%2BjJIZJ1Hwy0Do63Xva%2By0Oh33k5dxHPFJN5DTLgDY7K%2FvqW3DEVlixgG5llxcGRcuuXRSMizwW08Bss2rN2FX8jK9MO%2F938EGOqUB5MHKxMqXVLeuxCP1vrEWheIqDR9nC3TnTVh7aNQujQXtL%2BjcaEA3sueGr1nXtAcYzPpssMhP9ZQql6kJYaygf8053qY6iJotS3WHO8JsDz1VBfF6pb11eetFF%2F9G3LQ9lah0BUa%2B%2F8MGNiDkR%2FBV%2FqnnUYc3dO2DnuL0UmD3RIyXPJLrArXlImcnE4%2BGEpCmFrRu7oJuQ6UDWAqEeMvpnAGXEv9m&X-Amz-Signature=82a19b22b0ada7d5d1cde1aeaf9a054fe601ae68a5d16aea1e01e844bc79cc70&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNDM3CFG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErEGZ1gDyjbbrMRhXzthwyNHhyltk5j0oFP7syM%2BcurAiEAh4qdFsZyvEQfagPYuk40iH%2BVl3yVklUZW588HUe44U4qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHubADkMWBO%2FgYn3nyrcAwoEIjJQBb3bx%2BTSjHXe%2BsLQ3zaFiIP3IYoMlRm%2BazFs9axUhRQ20Wm6a59ZjobLSgPdaAS%2FX1a9N0IhCdqxm0Ax0PyNoXqedO%2F6AA82h5LQeJ44mpSITGOyLCShUqJZsTeInGP4ln4Jm7jG1siUct4UNLQzR%2BKVbCbz8hVXgyuAtcDML9aTuTiexRBCOq1ID%2Bmp8uACCUNUvKkquxeDdyb%2FBAMMbCzlWthvxiDkUqU%2FlHpIBOn9W1QbIAEQLCg5ExpJLQ2HECw62BlAW61hmjs9YzlALa%2BdxjW4jG70C5o0rst5xrSI4HzWVSneO3OXUcDQ%2Bed44ksjF%2FzJ2txzhVQzksCk%2Bxa76jopjEBMAZ8XRFE5qcSDZD5nVcaPX8xmLxiKAQTJ1eQQ6RGrdW9GPsZdUqivUJelbtNgHTiCHILyEGvMwhHVVGMSiuvVHT0kYLnfz4qDJGL7Q1OcFDUlDHZ8%2BUtaoYLP5SiPwTUlN6bF5YUkRkun9Jm6Jp%2FW38CK%2BXr%2FS0dqWQcxoKHCAffuXdZK4Qnp%2FuPWTtewhwn6CRNm72KxCiAQ5VV8uow7IwbQBDBgvIKKumd%2BE8MFFvDwjnOp6p2WFdwBsYG023C7uC86hKVs4ZGAqKFxYioaMK7938EGOqUBBoEc5RqRe2KzfQwR3IShFRl0xxXlmuPd1hUXlODoSe7BPIgry00v3Sko4A10CMLxpmz9phaQnLAQvANr6vsoQrF%2BYxnirsblH2zi9X%2FUiuB69jXKDUQFTdfQ8Z48boob7KFOm1bpfkVmSCwfvQyMOKTK%2FA049LzKIQnj4W0K%2FdrIehZvQmgIeJiPPiXS2xVgRL4O2EFTA%2BcsKdVUlaUGXraD%2FU%2By&X-Amz-Signature=2ee7f9fe4d06d3a5b36e59c34e224c1bb9093111cacbb5ea876104df4f56f881&X-Amz-SignedHeaders=host&x-id=GetObject)

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
