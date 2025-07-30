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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2QOKOCY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpUQ0EVfrPmeaXktXsu9OO4a9Phvn9py1zIzx%2FsIGsJAiBMlvyv3r1EPLf8%2Bn9QZQCK3NYOYlUgyCxYgqlzRJPaJyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLWda6845HY6l8ty9KtwDjiLAlPdt5qPGHhNUj2K599hUVdm%2FbhP9HWfALlwg2YeoTku1I80xwphZZgWFINyqFyPDQT60h%2Fbi9BmyQL20N2zkI0Qcu0sJ%2FJLv%2FIRlekoyZ%2BFQHlzw27WR7ABg2lCdnujLjF%2BSpW6OxJGZTIFY5%2FQHyQF1rQsblSEyN5IBJ4%2FjwOJzHlXBjC3fIp40auWSRI4BcHPUSWeg%2BgOPdaQwgRLsuOcmMLhFBTLTCHfEP6sKC5zv61L9eBivx0w4Gz6qMArPBbkRJKrJ5ByMqofC7E47r%2F3Y7XzYwzF9cltjzS5dAPRfsJQZexGDSj8SPt4bgfdvPlETgQu7u7GBdKAioJtOVkbMTXiyLTlOBhqgEBzG%2BKGYN473nJvitUQh2moLHtveyw6td2bd0zXO4g%2FE9LNSklzvHwwEeaOZf5PM9Hr4s8d2gpTapDxTYCfpRJ6qob%2B%2BY2W%2BTyKjZldqSUcF7Spw%2Bwn25YFv7RsZIWwZK1GX0%2FBcikU5S4OKN7h5hF1OyV96BNe%2F%2BWlHywXhxPga4uEOdMnOyqB6S34qy98nyrfIRQlMK9uDcse7utQQSzkm2iWDsX6g85ywzBk1UtZBbTjNTxE%2BetYfzUsT%2BCV8VMAoilfEJeTWrOUc4XAwnaKoxAY6pgFYD9V6Qujm%2Bc%2BtFciy5Du85GfPRT6BqYgidAELcBJSo0cho771qAkvywuRROj%2F6ppZWLkmBn%2BYoqRnkHNUMojyugnXkrqlMT9waCZMZ2fdm5MQDdi89AtGE9i8i%2BCvhHRAWSGyX8aCIbNQ0L9spXF1W0TqMDhtYaatOpm8Wc1c6JaYAH5V8z1eoc7dLYXL19DsjHXYHbSiGVx6J5Vv6iISOKA6MOef&X-Amz-Signature=def0021f4de5c3a3c0794b828aa029ae1bfac0b18d5ec378217ea0eac75decb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOK6TEU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSrymElYXo2Z0CWadblkoDfYuEtCxgtv0gdhwO%2FXy69wIhAJyZZWrP5SVH5Si2%2Bt%2BucXf4CUQt5lY%2B727iDUVxSMzPKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3rDU%2BNnpJ%2F%2FT0Un8q3ANXudmaw7CSMs53kk4fhEIU3U%2FzG6WdkP9M29ESoXOuL%2BOd%2BP3y0pwrn3ZJk%2FaFHrgk0uOA3mffjMTrhUO8GVw6T00QhpCBV0nYyXaWB8DJnEAbmGOfsSCMdYl%2FTarJba%2BfX%2BC%2FVS3wF3IPa%2B1mkZKIk2fkK%2B06GmICwKaG6jJm5RqkzEYlwpRmJ8pzO84u1kO6juNpdveCbpt7qV7i%2FMUD%2B%2BOqGKTyt4X9lgv9%2Fh6ZabcJaKkkOvLnoL6wRufEKhWNz20sa7L1BEzPJjkWzxDLA1nr5GJSb1V2BPqijtjVApjBEt7C5ev6iFDdm5y6SND8hqk%2BYjeqjCwofLO%2BR6PBlNvV1cSYbQtfP%2Fb54tnlhEV1%2BUCEdmZhzjISbbZfR52iDqhFWtA92M4gyEllAbLmKmXOpLx4OamLo0BNXIo19NLSv46sEtf%2FRKnDIJ7FToJBehLvluuBdKrY%2FSKlB2dZMzogobYPEyPruQ2BcCL0vM4WFOsEYdEPWAVr01J9NZ1B%2Bv62gkH07dFAg%2FqO86zEe8oQAzcVtOpHIUIkVnNpbPiukBehBwp3ovL3EBuStQ%2B0BzM%2BxdYQGnJ1zywf6UGfbL0VtKLDvesx2r21D9bARcs303%2B%2BtQZemlei%2BzDioqjEBjqkAdkIZ6KoSKwBmel63qAD0kfn3lNHlPDJGoqDvZYaNlcddaUjywsEP7zqC18MTm%2FEXVYl3unYYj9NoMBv4WlKfNRLn2DE0s4dg2b5qbaYJC5%2BkN%2FaaGNjzqTUZ7SAeSYvxgVspC%2F7MyLZMVJMoeB5FmzxBxz3K0F5R2Gmk28Zp7kkfDOcWROEhZGC0U0s5pvbXdcAe7%2FTVMYHkD93cNf0TF%2BgmcCt&X-Amz-Signature=50e997693af8e3080c62e6ad8422f0600cc315089c9f1df29bfc466d1f21f2be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
