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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T552I77%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYCjbC4EEh5XVZ9kM%2FsZubOPBSW0M%2FU83ucsHzZjfXfAiEAgOe5ZSdjI69d4IVnd2s6kqS4ErHVGMSXwafYyMA%2F8z4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY9dhVRm7tUQk5cZCrcAzUyFauT5ntIu7FAd9sh8pX0gbOMcpLfsSsECATrRaxdN%2FJl4TEXGiuM9nkEKDKdE5DeXfG9RGwxP4sGd2DxIY7YSXN0eJVJ900XgxxPU%2FVIzNuACglW%2BWw0de9Hkj1KZ4DKxZEOkZfbwRi8hCIZLgDsAyNglbELm%2F1oj03DY5mmiDhbJmtZxdOI2otpC%2FZ8wUHIVBwNP4aQpvQxeWxkxMUy8xduRum2D2%2BDIYlznMFmdAJu6P%2Bf6%2FwsAOHHGzAKIGc1BzwNyLamSlFMsIpWCylOPObUyhYiA%2BoSRVV50gw6VfXH3wmU6KfYcxVgRmQj6viKNPDhqdG586wiPQ7cbig06iMn8fuiNbJg17GXSA%2BWYvJWTDAMXqa0gwrTHDRzLwAfzrYwfW49VCu4ySGIMQ6lvp78sQ%2B2F1a%2B4Jt5u3Eug6QeV0w59nf8l%2B7eYZs6yWciq557c59CY165joGDcozZTSIhiUmzW5mESmPVpwidUX8vSo1AO8gwNN7tFHC8Sf7HXTp25QEwlqXcomm41U6592Dg9K0EoF35RbIc6wvrxavXQ36pfM5NwpoHWSqbWEijHNRIB6LbvW57rYH9hpRv1LaGJIOsScoiNiS8VdjLEbnTcx3Mre%2FhqkwWMM6Z4b0GOqUBB8mfvFyaj2yHeA%2FrBFQuBrNWV7OIG8IBYMuEX9WOIoa5lXiNPHqiLb3gDBN9BEEC4qXdAn3VS%2F%2BjrNm2ZdHMs8zG5tGogC2gZeFp2PtI1xul1JjTVvadIivSKUimkUb4ANyMRlFDYaWdFpZ8P9vDPl4OETz6jP79rTulrx%2BtkXBZ30y%2FnCj06dJKQmvbra48yah25MU5hurIXutFL8ZgnpOKCTzn&X-Amz-Signature=2979d1b016cd51db5dd8fed349327f48b4a9cf04d1cded228dd9c7954b575401&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSY7V2XF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf8X4BMKJf%2F7JfDKheEO5v5uFnhAFkLCLo48pOim4ogwIhANWzS0l3vpCqCYqsu8SRxCPXu2cMr%2BENoZoX1tpcc0npKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsyi3x4moXISPtkLkq3AOMt%2BOSDos2sNtaAUGpUsdMznJLT8ihzikp2gCd8je3QCjcA8qaaeISgIMh1bHxoHOCYrzF6zycujNrKWBFade%2BnIBmcJCm9vRgbzO5lhNIYBcK26PdEJhcbkbmbSGvn7R0EjpzhRA2IeZZpbYL8UzXeF984bAmaU6Av5H82EvLpvMBwjJV8eCRstzPv5tTolm7RZuDwodYKQ3Hay0ttB%2Fvbga%2FPy76D8C%2BGDd9iyE%2B0OMLEkuMfVRYj8VqTv1%2Bg8jkHPjbisoLCATSIBJ6bsNEi18EnwjW4uGjKMcQ4FaY65u%2F4%2FMIrzpGL0APgYgJgPH2QXxSqDyCHmoXEkUJNzuFfFPKTgmO2nYASa35SWwVKr4HEVOzFX7Wc4uohso8A1X6rfZiUL%2F8SKLT0AVw2YLlvC693rkPLcolk7gqH67wgGqTUNKY%2BW7Z2f60teJ21eqcIAuyT%2FPhG4t%2FiwGgrBd8gBhTwqtB7RB6Bhva3%2FxFzWvmLCHpdR3%2FIqx4A2yPLiaeqp9SojWam6KeEZnTjKPjBY0JDfwVrUm9XINb63IyaTPyGLdFHkh70UwamfyTZyF9wc3qQ68xMhU6JrpMAs1RTMkY0%2B5huvsMmVhSdUobMliszwwdJw9uUXwusDCOmeG9BjqkAf1Xb2CEVorl4DDhWEqgMxV1PRBratGR6alA3fFba8uWMuvRzVczS1cZdYI7fEETJl70UOGqmE9pij1fHuTnf7LrAvjpXOCeXH1og%2BNmk1zbR36g7PeYbOCi2X%2B8KICsnnP4ty7qmHoEBbUqrc5vZmAA7Wx6Zq7a%2FtFQDMVtdlXRt9xxpuvhGTgpN2O9Ie%2BJ3NoeRwk%2FNswrR%2BhLupEFeLr678z9&X-Amz-Signature=645a20869fc99c25837810febb750d8598f5e8a2aa2c15ef20148a46774d8aef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
