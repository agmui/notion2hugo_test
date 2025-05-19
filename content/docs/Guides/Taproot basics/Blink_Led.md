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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FZ6X6U%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrYwU1zIWGtJVbI9e8NAsAFR0dOhOTyzpyIZ4TgC2yUgIhAIIxKundWv7Ss%2BIXdhTByK6pl7vgP8RBFckup45BsuafKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVpkAcMJF5yioFUMoq3APUUgDMC%2FKO6YZg2tX8x6Wqe%2F5Cu6N9Lt9V6md7D6R%2FymRWzP1Qyd%2FD6tHt5ZXvb%2FHNPzQK3NvpacI4IWdhFrw%2BL16bviAmyjU%2FGFaWDXnGmbtu3ipIZdwgOmt4%2FnwXzSKDrtfcXifofB9uUd0BVX2s79KJGVgkPDqmuOSDza6CeYXWxE1yuGfBmR85shSbxSGp5AHM3vWhLFBHy4TGDH2BdK1%2BN9MisIozSi%2B7leg1TMgXwnG4cW6SbNKCMts9G3Nnz95%2B1kZlXVnMIR5vYEEnxjhpv6jOjITmPOS4rKJGfxWb459tlugJBBgPOfVLGQaTUrP7u4FfVFsFItgdcyNYpDyXeMKSJUIf6LULoAsM3qwLCq76D3hpR52IIU1eI2eiRhDfLqOOlKPYpasm%2B%2Fzg0%2Fe4OujzoHUJjiaROpkpW64zpUOM6WR95EFd3hF83iA2WtLmuVuQ693%2BgqyDLhJLeHpHaP5ACdS2ikeWzXTB5GD1hVY%2B%2FpT%2BB82TEqiUcLGB0OKhbB9xIpEm9Izj%2FbJnX%2FotjVIXjuKbBL4Y%2BAUZyQQzBDTlUW6%2Fo5%2BrdiYj6DKXBdTZI8%2F%2FGUB%2FQ42KQ0NKTAdnyOYS1SCb1SJ5zPoOrCDeQEJvZzYesCexfDCmk67BBjqkAXslY9CFK9epC%2Bdbv9B1cTAuNAPbVmnfElEm8BFtfR%2FmhZNLA0wPyMsAaEgkQ0N2lBBAx7HeCg5TZ1B3tJ%2FnObNKlOgFlPdUbmdrPTeK0dwf6zvVYHpM07UxYFpBMGFO8pWVopaqJezcF8gitXcKv2WBSVVsvqUrKwFVi%2B0cXXGk7tasXpfMmJ5cS4Se5y%2Fqawhg7KsWXtMkl9ttXpnjCh3H8LSo&X-Amz-Signature=86184eab78cf3b3546b237d5885507ab7852f2ba26f6610e457be44dc04a7b81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MMGOIL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BmQdkMZlfN9q62d1M3f4ca3vb4gotpyFxXxEyy8lDVAiBvswHshLfInJ2d1i1%2BfqCulfr%2BTBRBDpTY6fOrpL8h1CqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPWBeAnnNuP%2Byav6WKtwD8lqRdF7ydQnXNx%2FFyLOsRlfJO51Mvip3HxIBFZ3n0zTUGKNpGQ7XVDodrrk7DiE1jz1hfwlbV40%2F9qdSLdO9tv9NJQO6%2BX3zuICclIb3V%2FY3P7iCxru%2BeS0pv4ElWgLYQzdjaIgqwFQ88NnhVioh%2FEBEP0cOqwF9IxPYtqF107%2F%2F%2FpKYwTZDgUqjIrKtX8EP85rJhjsVmJTKsDRZ9SfVZ99vkBwnwoHtGRJrYXudnLBUYtmXm2spEIzLwpN72IXjUtouJt4FgD2D2E7Hm53Hwzc6xhOgMJoodBAz9%2FxRKYtbxCbtgoNwnSby%2BQr5B402kPFAVW7U6QHk8K%2FAxaq67X%2Ft4UbdSCd8RZo8ejuicg4Vi%2B0Npw5co0pOerUdiw8j1biw1zOsHcDOxX3oQTN389a53aAXtPw8P4MdLCLsNaJIabKQqvngZXJodWwloPIJ0898IMHGFPJPr7Q4QTMi8QKngb0YZ4%2FtXPY4Rc8RQ9DeJSP4GmPT4ImstZ1VibUpoEOGraqXtOKdWMDpPVKqREAOopO00DV1RhxZh48BBf3xlvVT43R3%2FL8vuK7gRp7%2FMquVf0lwY4ltpIQCiG41HHLpeLGrsC5zAC04olYN1FVJlLWuyLAVPZXCRqEwhJOuwQY6pgHxen2OCC5Kn2Z9Yxg%2BwAAOoJ29CVorgVQUnAcWAY0R1sKd6XXjW5VhaQy4cO7kZgG386hjxkGPUgKU1tw68qcn4yg9TNIlH38vC9oLNi5zSg0crLa2GrLDu6wYbHQxx16pPU9K8dtECyMDGkYAqpkAPK9CNh8nfV0WD598gldp7EIqWsj9SnpzQg7OvLwLqhsyyVky6%2FwyWMMDDBrEvhexDJYQKRI5&X-Amz-Signature=8f398a35224397ae643447df9280f568c79609c0cb383548976dfbb1e176f2bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
