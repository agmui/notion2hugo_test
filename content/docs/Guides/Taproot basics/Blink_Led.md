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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KUQ43VW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF44ufRMhZzoqTyq8%2BwCkqtvofEB2w60kPy9t6TNbYp9AiBMtZ01kxBirfry9Wo0FCBgYpe20zC0ed7JxV%2F1WFtlZSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMMKHICWoh5Tli%2B39KtwDi%2FiCEU0s3fSZqeoTQUq7gQwhRucHeXNLCj41wKYcVphtq0Yp74U2Zb0YjAcmNaObA4elGdLzNJH5xEDxMmFTF44x3MLrDd9axTSk5bEyKaa1hw2lmj4HzrnDt4HRBiWS0%2BI5CfApqIuMX8hIMcV%2FRh8CgNeWz39Zb4pwMCPBMKDaPtSgWTMooXVFlatbdzmW7wAoP%2B5PhYAE2an%2BZV7sCdc2z5ABnF7LYVROoPYwds%2BYw2DUYyLa1PfP1e5yLu8VqKibtpP%2BdD%2BW7yzUbsw%2FEL9kk66CDTxitKyyLvYWTNdCQj%2FLYrPbnHIi2uCL94HlSdb0xcaqWN4xxdJyDZjp3QP0LGYoT2pRDY1H15A4TBaWHGfRrmxkPq4T0v0eUdns5pdrxoJCB6ydCLILOq2Tu0WgRDnB5VUQD8c%2FnNGygC9F9bxekQd5hL6%2FL0Qr3uO%2B%2FucHzRRmyvUODfuKPpwJA%2BkebcHa9RsP8ANbMdD30PEPMAhfEoua8DoP8zLHLPpDr0%2B90UWWrq3s97cEhpUp5CfOmx8WkKraHsYe5VbhuTA04CufchVhPoW5MIOSoWTpEXOJ5cAz%2BE4ntq6a8RW9A7X6tsjkZn5p3qCr7uDB8ehPivF%2F2l6fvZSwCVgwqpTSvgY6pgEqoa%2FDfZm%2F3qs4%2BmeLvdb%2Fw8ZVCbXIoDj1FYrU4L9NjiW%2BvH%2BIYN3k4eDXBiOutaKWmy%2Fv0pHLro2JWHiuFBz2PXh3%2Fum5M0ZKlcNnWz0fn1VGH%2F3PsccSpe1th2JYzdCcATm8RKDHc%2BSoFir1l5YmMRzobPXnSx0YgGV02ZpCNCl8j5G9z%2Bh5pagX%2F0Wv3c6hz%2BgAdx0IGtgg02MgByufrmt1wZw1&X-Amz-Signature=f50652b5af767781a91290459fb024e7716b57dc801ed920ddb1f680652ba58f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IHL6Q42%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvHkMfQX8YmCbpWMr7%2FMqRmdopZ%2Bs1j5I4RS5XbcNpwAiEAkLEWnmUMhqHbZZYVGgmC39CzpQPy9ya3JFPyIChD0XIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQ45kaMuYbhs4I7HyrcA3X%2F4j0%2B2Jc6C1rJNR4OdL7eJE4NB9LVTa3iPN1jj%2BOmf6VRkVLT8uc7ZPhbDHJtkzSst0uJKeUN2geYmZTshfDa4DfCWIMSI6dKmlszZXCet1TBeimENzFMXurY5bkVsFOwDRlgSpS422Zt4zgNw6%2BJl4%2FyXKv5ByjLZKP1w5rvuoW%2Fw91j5EGZ6RT5GW9hZTRbElZV4v9%2BokQx%2BuBdTMKdKzf1hvEmD14gw8IX9wOlLTQqNYq7lRUWQNOZ11dD00aEy5YufLDob6ydCpeJqhsTz73agOmoHHGmsQ6JGm4wfnRuI0b6cvfmuGUiOadYyilSoYJFeNiS7f1CTEbiaQD7W0nLo3ZmZimTT89LiSpILSCR0%2FEv2zgvTQkXujI06gt%2FM4sS5ygg%2BS5QKUd%2FZ7dLP2X%2Bspd5YqQ4houpm%2Bb70klnTgxy7nXoyVScDhL5odS4N%2BEJWOYT17G8ev7DtMcmQdmzKju7n4pzzOAzQ4UWl%2FgXGpzjbiONr6yWeYViNwV4oI5ReX5t7Y4vwR8TIeIpD%2FV5OIw91L5ZSmKzXicCOlhW2d2qPY%2BNgD8WFlRyPHop1daw7xirew5b6MS06MFtNiJtcquk9kRFLQusmvuwPdp4jdT9xUJaXVXDMLKT0r4GOqUBjwcLmYNWlPe5vBxWuZVdygDXixOKjtsqGhH4tD%2FJ4LOvzlxVBimlOXVnNtTUYiXjumVZICceafPqRZ3JZKaOD69Vqo2ZA9ABz9ueCW4qnV6X1ljfVCo%2F2vWmCYe9rfdGAKvXCRQTNL%2BwTs7sEYigQwaZSedpEEstGxoo9GLwPDmTDqKVd0I%2Fg1LXS%2FEBufNUVn%2FDeVnpm5GCVwZaXE7sEPzTrhzC&X-Amz-Signature=1d85f85d88953043636a26148d70f98e1394106ac40d8a6fc7b2fe4980bc9be9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
