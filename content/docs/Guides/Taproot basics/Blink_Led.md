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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM3OSD3K%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFwYXkosLg4hc%2FW86Mh%2BnW85Q5gouP9cF1aRy2IIXPHHAiEAqQ5lzEuMYCkmx1g0PkD2efFQn%2FWX7XACTtkzhkXMeyoq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN%2FeyJJPGdNSojx5WCrcA1c9RYYhbPe9BrIMTITcR2Q0ayf5yMJib%2FIaljHecUMUGt%2BqhYMc%2Fg1jsgQT3Rl7uoei2Rrikqo1Rm8ZB880Sc8wahQz6ZU3Huk6z1KYBgKgeXNSnYMpf2rBscUcqEPrLqIpI7UF1krBt3khdPnjJ9IGbmhSkup0Oi0L0AJ%2Fl6KBZSBQ5Q9IHGPIBDkpe%2BD2VTWWt8Zj8qQRA8y8hRpftfLr18Zz5KM%2BhD%2BNZIx2xH9UFRvRReKdtllS5FgHskZnYEfawA6yF2zI4JJYq%2FUOdHlg5O3rz%2BfvPZJhzqsp5sd%2F15H3ZGdS%2FS5tYf%2ButDLAXouedEj%2BdGBrYJE9LpXD640uTVBdSun9dCbyck3hxMMgmQrWLLOPr9GBBzXjAc%2B%2FOiVQ%2B9SDhjV67T79gW4szyesIdRGqyIVnus6Kf7w2xLoT9B35DsqTsqrCMMEHhP6dYrnfWLiCY50mhiqbPpJTUoT3B5EDF0gQRuCXFAxmM0JO287UBnteGmrvNSnx5srWu4QrhiOh6x%2FMMl5DvCcJOkkStcejDFj9j6KQLRNJK2qTn6zcsVyaizaNRCZT24uVYn0oyac5C9ds%2BQa1nb%2BgqFXhmvxZkRXYvK9ZF63BOCFOTd5d8Yo7xns6%2BdNMLvk%2F8QGOqUB1TmGyJtQo9arfjqNTnUgYQDDFyuvg52EbkfypjunrUkHxgJ%2BdolRGmnhzUijSMxmRqiTLZ%2FH0yAZan76pope8zT1Rzcb%2F3y3P6zQKoAm54TdZ58s3STLOVCGzMUAnVteX%2FIb2chaqtRmFIGAvVdDdQoBkyTZk%2FW%2BzavS0zVHuxoNtPC2rdzvjrdDyXLZy68TuhebY9cBavZqw0sh4UxeuBJVevRR&X-Amz-Signature=7d0c2d62f756f70a16757aceea121e557a84e077665c26236c14a31a7077bf60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7X46CTD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDd4wZdZa9y%2BPYrjiQd%2BlShmcisp4SnFOTx8nJKh8eW1wIhAOqPWxQKwDscv5xPsPGnNqzRxSr3GEX8zhwAkMYWeY8zKv8DCGwQABoMNjM3NDIzMTgzODA1IgwpG7CJJqD5MEcYbI8q3APw%2FNWXVKOukmscrOOslJM%2Fu4sTzrPA%2FylsfkNGPKmm1aBZRgNlTFDdIk8ynMBxwBozdPonDpdoGePAyXzxpNOrYhqSo5hQdLkUgp0Reda9TuENL%2BVyFUZR0xWUPHLrz%2BLYcKcCE3A3WOPfFVh6Jao3MufPFSwYbqBeopaZpXhAMiWOTTw3GwZ0sK9nscM5%2B3oFKAbS%2Fo7Hw9KEbpK7iZuilIWeEoMiO%2FGMezJbSnqWrY292M%2B1lz3RvXOlnvu9ZlOtQU3Na8q5XxadBB8rhWnHCuXSzNLXa0yDsw3lcGIWou0kGj41LZ6URnx%2Fbkht3H%2Fw%2BVUxn9eg6qMOnv1ZtWl4BMzJ%2BJyyKRPBXo7zysJ%2BrCxMpK73H%2FoJHX6IQfbuygqOOnYxTe46%2F%2FjW0BpcLEvF60c0NVn0Qg%2Bio45oeOuxQW0e0pwFFJ%2FU%2Fzpz80lJqlTykTB5wDiFTGHtVsZoanUDmDYY4tSpadjTnH0WKtlrYPrUSqODdoi7Wtcq6BdAHn6m2A3H03lHn68O%2BxeDIbuudfrUEin5Qm%2Foay0U8v8VwtQNRRQwVe41Yi2aJrwVLAINCXPM7EcWN5Lrl6GOjLmeOhwY4HRdfGSdm9jgqTMFALv6V3gzrawoPWLLNTD94%2F%2FEBjqkAWdc3%2B6Kayx%2FOQ2Ri0BGHvm9LROTQ8IYwb9Ck7XUmhTx6Zx5BLTi0xkITN6hEZ0MkFr34hc7zyC0Vnxi8Fb1V4C9sKIscYJwLEvZrS3j9PP4ers1T8aTjcUSSJDfozfT1vOjC6CXUvNlJOw4O6%2BwpcE3VmkvxMrFGukOBkyotchNx%2FC%2FirOtsNeWbWkcBtgRdq54Bm8VqEG8WfJkXtlEMjbTrp53&X-Amz-Signature=1310013ae5996cc77a9133515ca1506282be631dd589c4166ce3e85917803719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
