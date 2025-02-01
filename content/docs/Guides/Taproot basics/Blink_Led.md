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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJDX2TJ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPnDbov%2BZ0yQD%2FJKA8kX0rI8iqLV8E5r8kyHWjH2Et6AiAyHa3%2FoKw18wPFfFiaozxic9UhX3t8HfIl8bz54k0A1CqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML6XgfR%2BAQ%2FeQRiKEKtwDlFuFWt6xDSiT34HZ8CSiOohHr0JTiXnREdwzV5y0dCMSeSi3hfnIpvHWaKkt1oi0vIDF5bCmP0LnO5q50L7juuWAm0L%2F1r9KVdm6eEEpDlE71mxXo9Q9dh12QuYJMg4tsSwJA9zC%2BOaMJoB3%2BHpP%2Ft%2BQL0ESclBl7K%2FvIpfeR2jS0GIYaALvXnhw2zrnUhgHsPWcBPkbWBm6JlRheQBJybcFpUQFdrIYBU1C9xLe6qTR3XA4EG%2FJQ6TXMKj%2F1YV%2BI5OyMBpSaxsrUODHVpOfak1mgjqBVtusdMll6%2B58D1bpR9O7rQMKwHXTkdz0P1ABhxVv1TESpFMMLPt8UD3FWOq0ozkpR2oShS7vRrERNvSz8cFr63cuTKA7jOSSyJ7rAIRGVllS3wuKRiFllL5OlI6sxcSEsadbDKKdvFHnUruIhTRWHQKhWzealrLT2RKcuM2MjCKqYT6TsaIbv7luyndhy3YgtpUAFhWw6GBC4X9A5V1r0Mlce42BN9cyDmVRbTP5bbprEL%2FY7as23Nvj0aG0ih7s39eeUa93bO1EX6w49ycUmyRbNklkYdAEivYHR40sIVZEEdgA4MZYkW4jW754mp1BxGvRePkQVAF0B%2BEYlwecquL3jkhedFYwvcL2vAY6pgHEgI7cjFmtNdpRobPsyvVXK7dXXF6Pb4jtFGx7qj5dz50w6KRof%2F7ZOePKykxCT2Hl3%2BIWMgiAYeFg68%2FimRJKd4SaE0Y%2FAvDXcgKjWDF2nJvShzgAAFw%2FGruIbDXuHkVMeGQLTBsCzCuc4yIzcKgad8xVmnGIHwFm3pbQelTN2tZDACph6dbedDO%2BzVN7NhE5PapAiXNlKFPNJoIlp7N5tHeSMd%2B7&X-Amz-Signature=c11e1b02c9a6dd172be0c7605add011782a83c4c8a76096d36991db6f34a9b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DF7BJ53%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEplqp3ep%2FDVRXGg4muJjUfXS4qH8d26OfoGmuOaTnDkAiEAhOw%2FSCOJZDOjtTc9%2Ft42K%2BbTXPUEjSwC0iXtfCVUf9UqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPm4Cm5M3HtCRNzjSrcA3oKReWwulX86nFVt0lp9kgfc0KKvTmfHLUhX68eqP%2Fu8IrMnf2U4wU5JuwmBGp0VJtKwxrtEw0Jo4VirmBqUDh8wAkcjKb5UYP7ohvmQ60FxJI%2BK5ust2%2FMy5FbLGPz2b7yg8JoCxMkx1BXzYlvEgFdIF4Kt2CNx%2BD0ciAoRfb8ifrcR3zY6mME7%2FKXqyF5VlatY0yd%2FYttQRXod8tesvgEP%2BaY%2FtMM1EDTx1enEtSFcGzzIDdcO%2FzVV8%2B8o6zAY8Y%2BvFyLG2QlaGMV1NZTc8mWAmUip5dFduxY5CkSB5Gfv5LheBwh3YvnjzrDI%2FWhrN0S5Z2qcNqj8Ucpo4Ie5mQWqdB0%2BJXK6oMMzLTCZl9GGi3nV4WOtW8p7fCv201hJqG66asFdeR4TyAkLVmrgXTE2uHcCs4BZ3ClLS2NYXpzmYA3oL5zlmPytQIVIezGUqou38H4NCZs2bngi6bRTfdz1Uu%2F807JYQDDSdBCw66cpF83cMygMzW9%2FG1L1PBJdE%2BTbT63mQPoTCiSQk5Y6AxhkC00WTQCEmtp7MsBm79T7M1ZJS7qKO9DCZtOqjn6vJY6yupDYoAuOLZFM%2Bn3lYI%2FCrMxmM0oE0Pqbn%2BWln27lL33uhfcQUy31JfUMPDC9rwGOqUBreyMHYMIsDodjFJk4Mi6fl%2FJH%2BTVAmG2lMadNXWyUsIFPB2qcYhf8nFf6uPOyNH9UwwKkrfVlhKMwupZPZ0fREbnLZz6nN8hgYbYs3z5Rm1SEnts8QONDwM8779cxt4RzjyUZJATtN%2FW9LCVzngyhEUAsYAC5f83%2BHI3BpaQbXvNcu%2BgX6UMaz6moGKFaYilsd1M3oiGN1NEp9UmNcZSTevZLQ2S&X-Amz-Signature=50de672282380f315541ffbc924d4e0b5637733eafc7928f113da8552979bb87&X-Amz-SignedHeaders=host&x-id=GetObject)

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
