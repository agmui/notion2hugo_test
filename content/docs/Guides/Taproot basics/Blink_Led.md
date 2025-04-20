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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FIMOCPG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDDsin7R3CeXl8iBtOXNN5UXq%2BKx6JFiGq18Z6Jrh7TJwIhAIeRIoalb9qaD1xPCGB9SyqxM4BvCK9Oq%2F3zZ7fQg7QBKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9Zyu4LB5eEXXC%2FqYq3APzWDsAX14WtOgIFIuhwIEoJ7oOCUxTd13aKYQjA6xJPJxxQ3njauxY%2BDsKxCccwP8tiVnch9tpkYmGRESNsfNa2jj7ZCkZ92B5oMgw%2BjLmmOhN9n2FhJ2QO%2F72KmPCggpUox7%2F4de4HNj%2FPCQ3C%2BESZ23qJXtCJJRf202IKl6gWCDW7zGiCBnH2%2BuxaBe8aDQ%2BwpT56kYEA7hQcID89Ak2CVoA0VhzFS2EKaB4vgu6tq4yWztEgbbkVDCUFs6ZWD63QDqVXroqV8b9W8cNXAbG8sAimTY9Y5fjxgGbMKqCrujelumU0Db58m5sAe0vBtyYJtR8cvFD0DrvcUyJJ1knWH35N%2BoaM9RHgu%2BKd4seW1WThiu8x6%2FjUFWatXmllYZ3ZBNytTRqkrY2Bwx98CPItGk3oKCfqdNKIctwECLlDUzG%2BSvxizxlJhms1sxHYxmAixlWpVSkvWgjur7qefs6OfVhqk%2BXIY1l3nXQfAokqyY17trgbuBCuxtKhLP7cJgno3L347wMxfjskxC8C2ggnqGWyUC1SHFayXhdOLGu8HTtoQ5sdl7hShynCqhTDVK%2BvDpJGqsSuXGRtYh6fwKMygacj30zxNiAD%2BT1IhbJrAgmwnS93hOF0JH3ZTCUyZPABjqkAd0AYj%2BPQhRWFZDW0lhkLTdGmS%2BAZifpVpACLeVVtT9Hx7OSqXALbgOo3DYvJUCEG9kNOGLLBApoPrJWngLDeQJThEnrkJ2zTnQZemR7ZRJzQ%2F73dAV4eCXm0DzPYru6gIGb0E1Db8YOOosIl8iDAtLAHNNH%2B%2FdM7SsJT7Z6OlqybfMy%2FVMFv5WQA1CDVR0DP%2BegJ38fDiDYLSVl1cWNmoo8j0av&X-Amz-Signature=eaf2d24ef960d31ebba6d720fc0d5289a09907d060c8b98afb064b85898fad2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KAXPYW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQC4D3M3OVyCLNs1KoDXWiuMwWXuSQYh%2FUNoWitsHhGxrAIhAIqBKqeSGW%2Ffd6z%2B4yjqU6WGoLMU%2BCitj4J9uHpsKfDhKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx577IG7%2BMKl3fy8wq3APMa%2BcgH2tJ6Rxuxy7%2B8VKBH7%2B6wR2G1qwciITMDRzNSkeT5pmOOzz2VeackquHislbBsX0XcANKt8SNCGCp198BMEIrKsPlGCNxjxyXFIhPVaj779u5adSbPtiXCrFWr4mNzuyLFzxYCpC8%2F%2Bs2zv1%2FOi32mlP2y%2Ffeo7c8iDGQrms3pvoOQhZnmctSHPTEFydJ2XH%2B5GnVnxESDcPkGGhDQL%2FGPna8Hue0phFTVPr5QDsnj66kfXwkWcWMeZIddK14jZyoUZfj%2F1R1xzvTpstwGjRcio4xykMeDCXl85QQqde8b9%2F62GfcsR72nml%2FUOySf4sB0cWJSzy4GDNipvNc7zKUGKvpQ1HIHN7KgFV9wnHG5STQlF3CZh213pk2GysjaU0dPSDdCP%2BlxC%2BdyoVm4HBgq0ab%2BrbVPoWjZMrQUd9pox6uAjsgp6Rlue00tq8HWfDN2dw%2FfyBliix%2B435zaPeuCLJc05XzREVw4HNQj7ePGjKuvA8J451aN%2F0UgjpmwTnywgKjStH4Ox0OwBso34MV0QR4fbO02YvyT3j%2B%2F%2FJDCggEeOt3sZoorU9WH3aZKUuQ04cjY1Vwcvch%2BfLdfITBncOmPtrmXvydqInwcUygTYeC2XPq2Z0DTC6yJPABjqkASVHz55f2Isfr41DA3lOIiMuL4VGtCs9u3gnXyFfnDPlAD3RJVMsnVO4Hzn7xta1ZUhuBGraL113JOL1swwno6El1Z2qIaOkCBiXf22oIuqij8GEZdOVXcO9aYC26qs%2FoTkLKIXODdP3z4BH20VPDtGH7apDomX3TDFCWAjfWPkr3AwXklOurax1YzFy1uhh30LYm%2FIz%2FKG4NLg7MTUcEHd8hMGM&X-Amz-Signature=d89ac4ac9aed411a6236e5367f90c906e9035d50df4ba1897d5e0c96776a5824&X-Amz-SignedHeaders=host&x-id=GetObject)

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
