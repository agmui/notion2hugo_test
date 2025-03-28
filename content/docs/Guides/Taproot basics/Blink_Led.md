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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWZM7MWA%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYZYSH3pXIczelBcLAgOheZtorrVi2pPvPz9Z5%2BxPN7AiEAssLKnSgtf8HRTxnTOxbPMSLGUEcpMc5fadOlarL75e0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGL6jzDNq5hOD9VKhCrcA92T8%2F3DqsNqe5b%2FqHGM5l66Diaw%2BjTaaqQq%2BceuH1msoGDAkOooxEanJxhGnAQFnD8w7IJb%2BP7iJxsB67cdGYcfWZeagr4Ib9FQDDt3aXxn8Fz%2BRQsT0Bxw0pHAQxa8FB9C%2F4a2CL0pmWN5AEBfNG%2FlNfT%2FgZy%2F08Ssvo%2FV1%2B5NAMPKq%2FfVnTdEpaDeKG%2F4%2Bcptr9a6mGaRR2oAHD%2FuO7aGuIMgj3sGp5FrE%2FhVnC%2BXt%2F2nsoEuIqE5smBQ5va5Y5GFUrXU0i18OP10bM2Dap4oSSNwKiGeXJ0GZi4nHz2RxZ%2B6CYFxb6CghQaA6SvHrt%2FPEw5cVoJebQX6GM1vHuF6f%2FNT5wVlu4kzGXJSguGOHzEcV8ZU%2BAZbx80TCec42lkUQ6o3yj%2Fn5k9yqTZRqR880%2BbNkITgKTyCJNgwDjTum%2BIqqpWGbR2w0CXs38Jjmxpyb2cPTD5DdDmyGjja%2BKbifR%2BTZFEOfVxbN4CUJMprlRTCIg%2BvdF7ErWBAamKuEvBJeRmX3FrDzl7L2OeOB3YdZ%2F485pSokCKlt%2FvFN%2Fu5jEn4Ycsci2R4OOYENV5zdWXSy3HNGxLwJVBbWxqdtIPcxNO4oM2CxScfUmpg4pxQhz4f%2FH6iPpJp4uKzMOmUmr8GOqUBDExDxvI3XnhpTmTSHVUyF2THSWTrIuqfp%2FfBF5w8%2BBfVGlLRmwwg2dM%2B2jNz7jpIJKqbQx7QGKctcpE0QRXeUR6Y%2Feyqaq10I%2FEInCG8ixnilZCXj%2Fwkw5NpSmISPNabmzPBlpRNgkoYHnyH%2BM7pSweKQBvSbMW7bxhExyelTP9jrpXFPWW%2FTSsuqtRZWPLBiJRTXeM%2BtPcr0yLF4hqMdRBqhJiy&X-Amz-Signature=3d1e02f64d39fc166957d7f69fc536742c91f87965e50422496572fde58eb6da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHWFXAXV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bt17TDWGnozoL0JFOnMk4glZU3vnJ3TafxjXqEo1BdAIhAJlDHkEGNnPEbYpbt8Cx3III%2BQM4QO2lZN%2F3DlQ8YaOJKv8DCF0QABoMNjM3NDIzMTgzODA1IgwXNCY9UbRschrosvoq3AMf9EzmyYFCyci%2Fg%2Bx%2F4eSCIKYAeSTVg9D7AHFW16iso21LjrRtjAXp2bjz0kuSH4fqm7ubQIHzAskIDUrqxmSvVojm9XCGkB6zd%2FwfGW%2B8KQl3dQRvE%2FaOE2kI20bx%2F5MqCHPkUzXr6HZ%2BCRR1YcP9QUQfGqAkOQ5PkFJ%2FVGtDojNLkHbsv2LyngHDHsqvo0mHfqMTla2f6TuixUNOJz773stNtT%2FeNR9s5aoRpyeDR1082GjWUpo75GnC7T5jFbWYBeqpX1hycr6FsVyrUoSI%2BNm5CCMWbmxRrUuX8J%2B0xajXN%2FJAw6%2FMff9ieVo0yRueCdQCQPGFlwUkY%2FHxB82IOFNDjPG0wdKsIGmtbnA3bOSG4D%2BoFTJ0ByBsEn3C8PYI4ICTWCgfcvaF%2BhB1VwUZwnEHufKon9UtVWnQcUqgl8tAl8jRRuJqvqaI2%2FZ4MZeP0ok15iV%2Bny77wz%2FEGp1ClmDl8J6Yu4aAigrDy28IMhMOwz7utSb%2B66898DMSNguVkhaKSpC5JbRl4Ls9eaTQ3kApzdhMdi8XyupO1UWEOlqZBJVVTvhjMYhDoWAYeREDyh0xWQaO5GOOFRi9%2F%2FFzajhf9pKbE3KISfeVi1nFHINknWdfo8hR6K8N%2FDDqlJq%2FBjqkAaajcovH%2Fsx%2FeiJKrObYbgI3%2BewWQTMTHu2XOJ3Sc5BpkBz1CqGMAWcMJhZfKTOamsL7iLyPGMKR1prPp3LGNhB3clzX8OpoREZojNlgl54lWJX%2BRka%2Bt8mCs5IgcdthcS9rUWu7Q773X%2FVnG78LCc0Y5xeD2%2Fd%2By%2F2YngW2TjHU8Rj9lL0HXRXlsldx83xRgXj%2BjAvCgExiEdSGKf6oHb5phV8w&X-Amz-Signature=a6634452b1b0472cfdecabf69fb30122c30132ec39420eba853cf873582989c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
