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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHWHDUEU%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHD%2BTwIAcFoyAqcl84xOCgNg8XDE%2BRg%2ByoCxTvr6r3YAAiEA0g6tFukepDXi%2Fbmb1LZB6FMlgONFJN%2BssMdAK9Z8TsYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqZor1t%2F7ypugHvlCrcA9ngr1vVt%2Ft8QueSZRLm%2BQxOM6NeUtJBnhj%2FihFjNllCnNGhhwe6V1Ph3eb%2BN6974EvY0EufmbWvAXWVq9kg%2BnunPJ2q5JKA4plSLhB6wG%2F1IrpN%2BkipM04bx6Ay1mxIEJH3fBpAwfFLdJDsD%2FBcrZDgv3THtjiU5kP7KPqc%2BAtAbQr0S9qcBnsOCW9GfDLKTOQoPz%2FjxIEc1Rop59BMxOM9oqciCCNpVb%2Fc0cN0HwVM9mfmQ6BfUqIbaMQVivvZdWwb1Zw%2BtBaBwPaHa1p2owbvx4ys35Gf8dX8W3TJEW9K%2Bfx8klAYm%2BghTzKk5SUolQDnefEF%2FihYm%2B85Ayg3Nz3u5AckG74XXYiUcHY41K8DEy%2FhMzVXbAovcyFuGEK43d76CbHvFS6Rgl47i%2BU3NlMKif8v2MGIem3rWVIFUannF1m2ni1%2BVyioirNi38ANwSQDmSvopUe17y0YwsBfKIoFHobPyteEAiywJyFvfYOcKvmUdfKmm7c9UvcpLRUC3ZYGxqMhu8lseobDUNTpUH7uZQdRhROCrWm%2Fb5E1ORW%2BhO0%2B4jOKnpBHPfhq9nG4geAer7RTznJi0KNbt1ARW7efNRiZaEfZeYd4jqV9h1pL3zQncXC%2FKFjH5Is9MLTLjcMGOqUBl7Cz8OpmQ79YEENLqWXoP6Q5Vetd3oBudZYrJ08nbfGPoJyOYi46SFULVTaA%2Fv4lP8tEeFsztOgsMC742eQHzBaVGTDyrHZV%2BIcnFoRyhei%2BHgdhGCyNG32xwYJbEp%2F5ASC5qv2nKJZn8ZcVyOSM44L8mFqKyb%2BHcSk4TnOsEVI68VKTFO%2BRif2cJEo8XwoHQiLTD%2BUYR%2FN%2BVyenOn5KSuySF6xU&X-Amz-Signature=55eb2e47fd927d8e297b9bb8d86563ad53821429576922b9f9897d47885230da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP5JMISK%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFned2%2BphG%2BfmCrEnSksofyqHC%2BZyzub3L%2BLyhwAyjc8AiAJY%2FkuBpBfmw7hL16Xl2h7Og5NelCs9u8vQQUwmaH%2FniqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIModPC%2FGDcCZ7tBoGLKtwDvpDvOAJQjkB00AvNqKyVwnXTvjRhOx%2Be3UHHtcjshMPEwrRwKbgfN%2FFI5wO4PSUK9y3DTZP91%2FeeVrkueuxydDQ%2FNyCaFbIR39U7qrBVjXzSKdRttcSNxo%2BuRhA4EqyaWx9yOE1oLIq%2BsK7CCbcU6RiRyzN9TgRdApHGBzwT9L7qvnhOzr6jMjnm9syONKHaL4%2FCCsg1etQ%2F%2FXP%2BeGQmAYEiHfkxUFXA9FjiABvICVJ8RiBve1F113KyWOliiHNBHWuqCtGVSWemMfp57UfXANYKQQmkhJAfHyU9tn3Cx7gzkkH%2FqyByiEXrPz%2BStVewkwmDPcFx78PgRqqqjh%2BZ%2BBAIHg3Dt1RW5x3rL9lDnPLbnCRMsCPKBXL3Jae0wtTeCAopmg88mGW%2FaqA%2F0AnXtYNTiEBVxIBVLJBLs66TnEarqXnrMe5tRbOHad3lu4nDauGBxK%2BYiU1pNrMv2gWSYwa8aXgyvKNcrOyHDu5ScNhCVq2IcVdGhmAY6yUnwdktHHbpkot%2BrQRl0DPjZDEyKY05bYsxMbYlKORaNemValhdo%2FxVRY51h7ErW%2BIfblmc%2Bii0cRp8OXn1HPC20IQJuqlWlf1s5234ghrWtmyn1yRQqIW14THe70Edi28w%2BMuNwwY6pgGj198Xd6GyKkR8IO1%2BUv9VhVs3wfrf4mzRCDzyvAVR7UQ6qEbKFNovwLRc5CUgjrAtm6Cozkp3pxtCyUbR0ja4G3ZLu3%2BKFDM%2Fn9by9vmYgJ68Fc2i6lAu6MQbjBZd2PNwv0B9HIun8TjhXLyYIvBjD4tR2nSWgZtBrowSx2OM1xPSZ8WzlNxsInCa%2BiJ7zq%2FAg1VOWnjq9cZ%2B86Q63lhPKvNuGi%2B6&X-Amz-Signature=c10a642ff7a69ff26b1308942482755eff3c80bbabe22faffbd6e89134e727ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
