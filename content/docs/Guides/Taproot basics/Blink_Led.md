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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZGH7C3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrY6Qz2KgaSg7QJtDy4W0G4t4Da8SIEUzhqbIAyeTrxgIhAN9ztuRFyT%2FXYKBvDxW3WgdPaMTzNfo25rekW64lNMliKv8DCF0QABoMNjM3NDIzMTgzODA1IgyGDqOdduwZrMJR27Uq3AMKWPegE5e1HgFXgPygmNj%2BwlW5q0H5J3CIrbD8zlOE8mfARlTEWliHD5bK9w2ujhbrQjqkOF5DeEGmYDG5XtUY%2BYPxWPNqD2XVOWbHOot3o77M5VUg%2FIQN3lBs3H83bW%2FGWE5L%2BxK3lRgU%2FFfBjbnzZIfUZlEkxWh0O8HQOmHgeXgzftkk%2BhMNyhAsuU3qv4huRQvNmi8KA6zoi1U4t3RVjt7EmQAeYHdOmmrdlBCBr0hcgahBP9gAMPdynDunkUlk1MDta%2FiRRKA0FRgDwZxINTYiWsy%2F5hRmctX5TWC20TIf7MCy3VPBX2Smnxc4nP5gcyItW6pA96%2FajaQ37txbniJL0nG8Y4ddWJBnruOOHPqqouTSb4oQWK0Va%2FaWrLlxg851sXvE8XqvvNlwOYKGxAkeeI4ggjhSYO4QhjN8PaihV%2FQNOI5XRoGHwDVjG1i%2FgDoGQ8VbJpcjzVMgx5p4KRTbGfoZPdKgJT9ttLHHVQrLOslO%2FAAb9WKPux0pur8vzeqg%2BvSx4gVBfnnBdvCUvFHV7x3AqgTopuLObPYjOVTngySvUJOWk8MhgYpNC7uU7th2M3aozH%2FHF8EmdZ4a5YfCnvQPFdTLBcPIAHOMtnJme0arGIUmEHDN4DCx7c6%2FBjqkAV6ZxrPYzoq1Ng%2F%2BOsn0%2F%2B%2F9%2Fq9kb52qk%2B9STQ5rpHfcg6PxHdX4bu%2BV7xlVac3YkTd9%2Fa2yNAxWG7Nsxwu6Nz3ezs4u2ET8grQ024hK%2Bhl2D8AA7cxHY0PJG6Uszr1Ah9feITzZzB0oGBT1%2FFYoPftZNolr6ovDR2nwT4ASszWE5Oy91KxDYLevyE0u6IkbOxCy2eBqJlBRqsaBgiAwx9m1GqWU&X-Amz-Signature=de27b9c44416dda66493c1fa5cfeca138b2c5bbf4728a8d9e678a9c57f2a1642&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJV2QYHZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1hPLthlyjAUbCgpIBd2JgvIaLNWGVwrgu%2BVggyeDh0AiAC%2BSSFdk2zhiEpR4UZN%2FR4KvbGu%2FBd1b2E6ktEvXTNByr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM0otZ%2BGqo5r%2FThZYRKtwDgRRJUM66PB%2FKhRJpehpN1B7kiem9b3iNTTkT8I3vglRLLT%2B89CtUz5NTLVFUg8RGZfUih6HZNgKd14j8Ws8JDdhimHZ%2Bgnp7WXYNRKwlPwXs533C%2FGV%2FkGwGHCHeFxmQprSR78NcnUvfvDCs74pxLHqTiXj0lrI05fALNlGk41I%2B6MeuBwJG2tXsz2Ra7U%2F7LgnmJklHHA59GBuypl4bVsxADpZRnvHeluBc4Zc84sdvDcougoh93tud0O9y971gLIjSYk80JAtiB98wtJrRyWCsR2S3OYbM0iQhq0K7013F1f5Wg2Y5DF%2BshY7iCMaDX2Arnp%2BLgjQi8Oe1SZC7A88EYUGxdAEJPygXS6nDFFCfN%2Bf%2F9mmwStfGz2Vd7DsL8jTdHkTu7iWL4hwgJ45QUPS7UMh%2F2k%2FsC%2FI4k4PqAYnrM8cBoVNY5x2R78Pu%2FQ886pNbAaeJF%2FF5BQFEEZtkDCJZpvgKmjXPLAVCB%2Bi37NeFlp0rV0kFzpPfYH1KufU8mQan5IfivP0ZUsSV8KFQD5dB2bDdFfIItlUFp0zZgdXy5btiu%2FKNFP0hhkga4pMdz%2BW0IR%2BgwVnYTizwdA9MBSpaXjJ1Ltema3BUMzn3VDWTodnxFRL8ZPttWk0w%2F%2BzOvwY6pgEGnMxuuUEMeOLeTA675RqijEx8YTs0m7EOl9tEYs4CnU6JzhGHtCMJTUeUlazeY7668iAE%2FSD6xmzS1RMkoYNCM08CiF%2BA0dH1aIGxHhbj%2BRzGd7dWqSqBysQ4bg3J0oebMAOHA3xGDyW3dRNdQ8NjoJSecmKhT9n%2FWFIeof%2BUn3a6hMTrXI9JcvuyT2WoGsrVWvm3iZ2Q2MyC%2BaJseat0S90n%2FR15&X-Amz-Signature=9c9c713bca544bfc68dc10582a2339718d5b438c26f5e58ad766b666a1bdf52d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
