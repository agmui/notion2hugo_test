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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUEG2ZS7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCppgL6GBJWg0SjkswM%2Bze5UbYVVBQKaszwVN4cl78G9QIhAKpeeZmuJPfu2Ab9Zf5b5wNfI0DEI5Vywk9EBpr1zi4TKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDr%2F9V053oM4qQQlYq3AN9FkM94ZtkTIIaXSAbuMp%2BYAHbfyge6d0Lzlslm1RgNCAITfLGOfACZAa9Ci2%2FFWJtUpdf7rvvbwny64QIWmfBNXHR%2BC9uqQxxR7a8s2Dd1IlaP3268%2F5C6IaVcUdFPD6Ejy7Dym7x%2BWDFUD9yu1vpeDOMv6VlpoYf%2Fv7ISv0rk9f2wICSn1aWtSUzoys%2FVNJcfbt%2BKN6YssxTMDDuCEVox4HrN34aiXuMHbFkZhIm1U7eez9ivRvzupQExuAtK1JBQxYgbS1Dsb7GZ5TTfW6a5XtB6cHoii9tG08bYvr20HxhDcFY%2B4yfDgG5dDqjUzKnUzEhcCK8jGwE7YnTMInOkPs41uw%2BdfR08I87eUEWaEYh7B6%2BuneKnjzMG7NSlkZMO4B%2Bf1cCpc6C4sbVGc8xErW1OxovmFE5eP3zcYw0y1rRFerv4aVv54FvL4tpL%2FeDuzAB2ii2AynXfvOIioOWjSp5MTl%2BmoEQL%2FhTNqj0Wjy9BLwHhOIki5WOJh7mR%2FXmxt1pQWd8I35Dt8arX70wV%2Fr2cjr2Po6sFNbKmO2U72kvFrvOVK%2BJcRNJz6fldosLHuDHqDW1dKLLwuR1RBdLNaSPEeScvib7bug8OfaPtW2%2B0ayem9Jn4SPA4zC86M%2B%2BBjqkAdM2xnp0ETbkE%2ByvTQ%2B96840Founcp1G572M5qFt5LmE3B7WGBW46In%2FH1JH5qTBQ7fsFNVmNsj7EUFq5CJOoWJbMC%2F4wQhFhR3KekgOqwHFvW%2Fa7ujlVAuHcg8tcvDTt453l2pi7qVNcrq99CbxsC9CVQQw6XAdei4Pm6IKX%2FAqGpLJsvdu2K8kj%2BeZHlgs6imY8woBqx4zJ0%2BzNbyI0n4dSEoc&X-Amz-Signature=dd8ba81b11c1f6e48e7e09d2b59a1fdf1db5d1dae017d11e570618ff58c74431&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FFHAZAH%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8%2FQrY3CR8tyuveWCgZw04kX%2Flby1KqPsISfzDSLu0VAiBmcT3H%2FATJFEdWw462HwzEkL5eYlN%2B7yGnjeyHiT2o6CqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1dkHTd6OvG%2Bwh3IpKtwD1nBxtn6LbcXwEXkT%2F3g3%2FN%2Ft2iePC%2Fe3xL4taq7y4eaDaNOrT5aeUWUi9vaLyoQE%2By3ZYgRvS6I9ZJ%2BFCTENDP6PNSe7fJaadGtrquWc7Cznge1Lxgimd5Qns24v%2BKeJKGeb3e%2BsWIMa9SsFaN81v8aD9EgiJHCHlGwb6Fsw1sAwGWkK6xRf2w7id9UJARMnlyQ82w3iBnDI5EEqlW2jFNVzOBnzbRgH83SsgUKNhN1%2BbZH6xgukcfCuWvcIJCnq4KNcE8brGtokf2Rn425JASpcGPVQghaVdOF33kQRdMBPDgGTGxKZxnyfk4R8inX4vAMyoXp9dfcrbFDuh51dK8pDhwWuXDM7iHOa8dR5tHNzHXmFYIA6mAjK53qYJ5iswKrk1QzcRXSBTg2qdK2Csj4CYcgtVlwDu3mIsCGY%2FV0SdbkgXIBRiQMBWb%2FcDzu8vvOBqf0ANBYE4VBDao9z6eCrFkqhQ26%2FXfKxID%2Fb1NtDL%2Fmk2dZTVCdj%2BaThWVOh66Ceqcd%2FoLpzex7%2BOnyYHdw41TaLnyztjCsyk15UjNV3izJPBg9G7i9PfQRbiDxJ%2Fm2iJU4IQovlAJzclFleRDcVopYGcXUZYLGIiDE85OxS%2B9%2FdAvLsAzKYPdAw8efPvgY6pgH2GuyDVS7sHLckuzr9tE0U%2BVPvjGp0zBy0d9lmKJPAyj8QA8wY8u4UFq1o8AOK6NkxyJA83FG5MjKt2H97uTI0O2GT45AVdB%2FIdotkVQqLSwl0OJrMsGA007%2FtnCJ6%2Bg%2FZEyrH4txby4knQSsX%2BgXi5va1psLWvlEAFEPAOkMuEN4ZVDirp0y%2BzSMPwURKNUZBfzBcsevVqYeMwOMTA4j3ccPHIcYB&X-Amz-Signature=08bfe060ec626c55255ef188e8734a43006ae254aba88cd09a128fd56c001379&X-Amz-SignedHeaders=host&x-id=GetObject)

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
