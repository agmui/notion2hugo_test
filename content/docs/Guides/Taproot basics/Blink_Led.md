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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5VV6DW2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEy1u52RnAQD91WekgcvllxEurp7oHYPeWeAo6HZTYXqAiEAyDeH6YvU%2FzAph0u9H%2BujayCYMnwrtHZjBLnb4NuGyRMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtkXyY3b%2Fj6WQLOHSrcA3r3ERvaxJjaDT3MuAUH781Sy91HOZ9bLGJWVpJxLUDxRytr1MXfge%2Bk1c1MjKVja1FqXmYI6zFrYDlwMkuh8a1dtkBNVPsZklMJ%2BSOLsFwINkZ2%2BW43LYSz2YeCupdW6SAUFel4NwT5yUX2EDQdSWUfg44a4ROIyd2cY5bM3Utsy8LUCOAUHkS0bszMadCcl30xqE2KjuqM0Tjb1OdFH21KDK2D1jjZdflppDJI0JZY22KCNSDVL%2FbBZSb53y0nfv4pGsBMt2H1AZpzuyjhHSCHqmcZgfV%2Bks0Jojvx2k0%2Fz2WzxYZCT5cIwywBc3B6dvicMV5%2FRwwtmqJHTd%2BLy0nD7eOMJc5O2c7YMKbZrj56KYiOPea1kjfWfirZWxrD9%2B%2BdMJk1KBERCPneqEdR46UbRwGAznibfg0sIN%2F4OJRmyTcxDEcbExj0UTnhBaYXXqNYjw%2FJmU8Phhs0feC3Cp2D2%2FEXl9haUF4LO%2FKh4l4B5MN48UaxzPTaLN%2BHGof%2FGI2EdlvcbFqJWVevchWDxFNy8DSI2vxrBqWOYNS5yZxZYYFgD6gP86Xe2pXOUDEtFqvtE0I4omwiE2%2BkXytG9qpakz5HWc1h9OkaMDhUZgkmOrQkujMkC6r3H6sHMPnwh78GOqUBw9%2FyZ5KzQk6xmTajIHk12jH%2FCCX0tTE5Gd7hjMwWDm%2FxUHS3429BYF%2F0I0aWKONnZ2MqaRo%2BiMmUlxKUBTxnBsdiRovlkdOIVsFPXAyzpZIyW33lxlGjhR5tg4nVmBAQ5QnNg5XkQ7VYAPBMsAL21XmFZERE7dFT6PVnaKsvTbL2lw969TmGoFYrbnfR%2FC1rMjIeFYHHVdPXmTuA4xRpfAGzWbbg&X-Amz-Signature=54f5b22166d2a19b604ff2f9a71df00e650bc2630947e8db344de793b48c0441&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WZN5MZW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3XPB7%2FJnWpNuJ7NxZFkK3uVKegT%2B3%2BvoiBYn%2F3zFmpAiEA5jxcESiSOTi2fnKiUrYdLZulffGgWpdkzaJxZ8AGbP4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsxwLJkmVQF8NnuySrcA01aCnxzL57UCfKvNLkYzKlUgIeN2YWQxcAobSlWeKhNK%2FC5YNCLmdeAvrsN3G4Og8b3NMZT2mkcOVXG7DjN6g3ndEBhoEs96nxqJoGsUjET8sT8VSuVdmZqtmZEppwvGmk4HgymArwtY0VjbmlNLnGkD7S%2B35Y3pLSgtlfH50BmMRjk7%2Fs5dlU4%2Bz3V6sjFx7SrUYLKj0a5m3z3an%2FBPKH50HwAXvSXXup5jD9kV9VBuJam2a8P8%2F8iYCpeRGNSaRVIZtiLITukvM5Tk1OsBEZepoY88qy%2FBRU%2B45eBskRdA%2BPfSOUTf5KeRxuF6ZV3vEmGdi338hiO837EXtl%2FxlT3ppgHnxKbeWbr%2F5p6Djp%2FgRYJUOl9ddx3uAh8jJ3dmn5vO%2FY4icA6Pdx%2BIyzI5YfXFFON1UxqKnlEARi5aqzFBgbPRywqOWbg8nyNzBs78fiVywxHeMBbQ16gZTrC2M7aWU4zZ9YuUfrltXN2Q%2BBg%2FaEBdJ1%2BhsNb8ip7vr7lUYbEEeEMYeqYtm0oDLe7nGfiuY%2F%2Fpce3dXyQStPBz9NFTEfqkDxUReepvRGiiiqQ%2FCpySzZzd31nFf7xoKG8%2F%2FerQoVcibqKYSUmdK7HEO66mCryYYIIgVhY1T07MMfwh78GOqUBIguZQ8WHPdwbB83EM5AFGH28vRZUSQjmHVkRbONBUGSrSNwAvpvubWY0iaQkv0QypGK%2FejTDlZ2wRQKAwufyQ0tHvZR%2Fhqq5pyvOwtwiJ1ZrqyXfhzcmcBe4Ik4k19UAJgMLLP1SNPbsW7JNUr1qRbbM1Wd%2BENONE8yAoE5NIWSABGwyWi1ucBw6rNgPqqbMebz%2BXH%2B9k0Gxgn62uxx%2BrnEByzeu&X-Amz-Signature=d29ffac51ea02f154c0699d7b4a414b436a473270276f2bf1a6a54857b7f880b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
