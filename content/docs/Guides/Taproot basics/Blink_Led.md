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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ALSFRI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHbUaQF2C6%2B4RF%2F5P9UhxMkfEeftiLL%2BmFD3G%2FT6r7nnAiByaTzyHfbhhPe96nAheBrEvKocVa%2BUy716kK%2FiQ6ce7yr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM0rpS7ZxcI1kBkimiKtwDDb3vmg0Z3pwxgpfOmvIUXDQH9UMJTODGoIF6ARE2qKF3ylubHZ%2FMk4jA5zM2A99rkiprfo1tqLbXGTyhHXmVcFPv%2BZLqrjl0K3kSHu0NTLcWRCK0zWcBJqc3aHq4zU5xxONODCdfUJDXlhYZVpA2yws9RFDaQpbc1nUiqB5XI%2FwKjqjZaq70JUDy944T02c9XXgzOnH73Gp4%2FyYhdlCCFRip8xWNrDL5kUcj3orhT4XvFXRtNrcX2AWi1tiJz5W06HrrO9KRF9LfrHJfCkrdItHdJLHCbsl0lSzjlF1pvG%2Fdf0F7iLzrbeI1%2Fj%2Fg%2FsY2XJLzOBrfPzEXBK88NXABQI5uSIzAbsBVuk8l7SEIG%2FJSz2Zc%2FAIE5YzpFS70ehmngM0lP73Ja8OyosYObDkNzLaDlxjwk5VFbYirLEhlgDoCcj1p5Ba5Aaf4DrwsPHBeFkvbaOKQxeQrRgpw3wWAqrbs3d6Xn9qHj83cqpultpmLk4PIP%2FRisZiwb4IQzLWXYuvHw3a%2BUKsTV4p1sB3CG%2F4ICBptUAFLEd%2BRyhSajCz8dub%2FTT%2Feku4lbnFuZxLbRjspIqscgwThhtqYRJUSRRZqCxAVGYp6FqC%2BHPr%2FySphK3UDCAUzudlUFQww7YT2wgY6pgGncnUHYWSMkJsfNNfofQo0VSJKtfelZVQ3yZkx5vzZTD%2F%2BXiwKopgEx1hOlJkYvNN3pw%2B6mbI9e%2FGqYkMKBYS%2BbaywFI7xNBKYELo%2BK11TyAU%2FOhtxrmBV13H1XiHPu2OgP46gixkQ5vJL9Ubt7xfl6vJJvocR3iE1XtvCFibCJu6Y90vd1eQisXy%2FwVvgQNG5et6zzBB9mL8O%2B64HQ9evqm3O2sIy&X-Amz-Signature=8ac4046399cfd83ef57727e24d314850e35547907d65ada811c8eff49ad633ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINSTYQJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEVSG44%2FoyE1N5qGgi5LgN1FL%2FxwUQd2gzDkw%2Fybf0GZAiADyaQi7zWnWC02UubFbPrBcYUMoiedIebzco%2BW9XSfPyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMxkD%2FKkZrkBXqUFIfKtwD%2FArCni8GQJ0p03dRnTKIpLBctydFRdZDjC%2B1BnxSmkovokA%2FscvvJhHKu6T%2ByajtWYlFMOlpxIRQTNvbv%2F44QBuDRT8pgZunV3F%2BTJ%2BirYSsHAAvSlhhzZA0JRmualiJmu%2B5LeQffTgpa4lZSN5SIid808Ig8aSpILpRPOrxdENh4T8mehe1QXRbxgg2Weg47voJCgfrMDTFlpp3WF3LZy0ql2yS8CqDq55Z1dkFKqg0ipFbXT1P%2B0n3FuGaxpv2BDGTjWWUe5sy9QOfK8jgoVzFC1hzJRGTHRywJppBVQeVSjXXxSLg7uH1vuVgbOtxqM%2B5V5oc5hgdh7yi9bnmWtHbpQNTkdB5kUB%2BRZ6gj8C%2BAbX3sosrOEpY44ipCIl9LD51OZDhEBB6OVAjF3EUc4B81vr8%2F99MGtNtDmsdT%2FRHdJV5kA%2F%2FYUKbI8Rfg7FeUPIdk3QiuytorWVeMOXAQV1pnmNAajdvjUGFd0xSSMOVYK5ef%2FhAgX3S9Wd2jjxluHD3VHQuT5CELLKg0dHRS5j8ouQG2BppoRXO6tlLH0qWmela0e6CZn7BLTehHCquLt6us2OUbyVrMMCbLOcPLi7fsF511n85DU948I%2BQ%2BuGj8PQ5qz4bMq%2FWXjIwmIT2wgY6pgEJcrRT63QYeR7K7lFsRVJ9cyVGhn%2BnzbMOAkDS3PO4lGp2LeuiIzqSNin95lYIGEoGVk4Lh0HyvbTwana2Jf6RUe6v8pelSpfQ7A6E8qQLDRP%2Fh8MzVA7CpUisgU1b1ev45BFinPLKXsdQ%2Bs6R2U2SGS16DkkeEzeCy6HhcBXrazM9RG46Q9y5rbJ9D0EMpjiwqT3dEhkweymJb42mh2uhntCdeNxt&X-Amz-Signature=8d5cabfbb92f017746bed616ed912271bca28727da5062c5d40194aba776df40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
