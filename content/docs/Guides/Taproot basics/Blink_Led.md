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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSIXBVX2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAHWe%2Bz67pp27v%2BhncjTglwcr3WPKNnAHmtbYXwJQxhhAiBM3q3uRZ2AGWsE0tjwNQqkfIIPsZBcO30qxgrpBJPFsyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM8uuJF7drjkxPh5wsKtwD0ja8KDjJL6TxCoMZlRmih%2Fu%2BUUmO2EY2gH5LOnPFsUUhf8H%2BNhfwfds%2FM5Bcr741TkCvx9i%2FYBzY3%2BOzPGc23sakmaFTGPKi2VpGAlXLLaAXha59RSMl%2BId0xa5DDV4NkOKV3FrDegOhGudMB5yzD3Gvq6xEkGBe2L4LK3PqWtgtAJi%2BCtt7sbvItqFAyIDqv2zjfxDgVsx3g3UjxHm63Vj%2Ba%2FJZtRB5hlrMFIcUnI4EHZEk5hVDrgvVX5UIPVQ6uha6d5pIsuQxKd%2FmV7HB%2FwYIdptJ71oGC%2B3b19r7J%2BIdaImsKCwPZMqtATDKqlbTpyWav8EPJ%2FvZWG0URMRPMc2BTwme4MS1PzqXURtt3CM9UsTuFtAb1DwuUAQcm%2Ff1cWJuDBV1DzuOfcaQr0P%2FC7T6%2F4Sp%2BK3JEcquHeEFg7RsdEjFY%2BrptEkCdm81cr3kmKoV3ut0WEy238vjDKDigIXM9mp8jVfKsIV4p7B2wKdkhSoF2jcgvX%2FBLWKm19a8XZDtOlkDFJbAZPHSECn5rs%2BJVmv0sl9GtX%2FxdnzqmSadQ7AKsQ%2FBFjvDMx%2B7a%2FUWJi4A5r9yQu2QF5GEgUSASZv8kikmhvgsp0vaN2j8emdnYHBZR4hNb0pnjJUwlPiLxAY6pgHxq7JxDaCT2OfR7OP1WfnsF5pHn7B8AMSyqr1EGLlEQ5t236aK2K5j2QEoyFv4eMXFXAsqQt%2BROEXEj59UEl16Rzx4a5uLo58QsgPSw9MnxvGS2Rlhh1IaeLyLKds4P0UU9zly3fO0Ry7ff2TOsv6bC%2BPli38O3FfWF6vZyfCvJmC4G5u6Ezfgx1JTawYZGyG5LKB7PB05FQwVCt%2F71GE%2BEA1VZSOO&X-Amz-Signature=fb56988a4a00397610a87ddf89c87f2b2d0236bbb26d68bfe6411d469feb3dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS2PCZNL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHQKMjPHJaRjWN0p%2BNeGbF5vQLba5%2FCMb5f6PPNhkFOgAiB0PTO1MdVNdEI6k3Z%2Fv2tMwDJBCVXrAwKP7IhuosMDFCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM2XDGhZZhz0rbRey6KtwDECWd6Ryi4%2BxYzru4gk7zQSJdFr9%2F0edWeXdDmnYesec8PlN6%2FqSOkP0JF3BzZuxZi%2FtkZqdiJ1oSBSKUvjZgvrvuKSXr29GnvlF752S%2BiyhpYmKdqBqHBgZBCKNrzrE8NYtV4c2CFgUnZ0RDUol%2F0Gq0l6BoRrzPQqfqp7NQ%2BB7vMrNlVQHhtJ97mYoJ%2F4IJW8DUxQJuPqr%2FYbNcUr5SAvK47cKpAVio66BProyQ26P4%2B2jmSkTXmJpIH0%2BfAZju6tsPDEeeyWZLcghDcQVSQbbsVMC7XH%2Ft8D73VfjW4PgZ73UMNBGOCmP0%2FOpRuyrA%2BMn89O%2FTlRApF%2FYcI7szYPtdfSZ%2FaK4%2BwKIQWP27P3cirEoEWjnyFi20d7s%2BSoV13Dr0HPstBY62MkQxU0ACFBhvdbtNoxyTfNffkt2Kq1fXNLeA1D9mnQ2W7J26xX4h3EBeIRe79vGBmOv2a9KD64Y4zUzRDDcA3uRn5fGj6o9Q1upBVPJOE2MjIRqHL1kcl8XuEVSBLaxC9szJyQDyLe9kx05KZxQh7ApL%2BHMks85RBR%2F9ZiA0qv9NQh9e3RRLJMokKjfbY%2F1zTc%2FQ3AypF7ZGNMb8%2BUdI9Wqrwvr2C9GZtKsW%2Ftf8%2FEeffI4wlfiLxAY6pgGUykLRjOlJW%2BBRwMte8%2BEmTlvid5IGuhyQSuqrT76v6uU%2FqjFumudDh%2BU4%2Fll8IqjG0MHETZtEq49ufVqzwg9mcE%2FyXAC5dXgozn2xyl9SsCfg1oKc1rPdCjqbW7di7b5mz1UVgSG6e04imOXzSyvE1Zd6w225JMuuROISJSZPnDOs2n3QSVmmBNdEdxF9OzdN2BFEYAIOJ%2FieD%2Ba0sej7V%2FhmIK6A&X-Amz-Signature=26e5deb17252fee4cd249aad260604861faf85aa987f2c9949e2b291febe8577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
