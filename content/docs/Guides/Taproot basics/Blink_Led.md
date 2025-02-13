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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QMQ3TAF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZSefpyeW%2F68S%2Fyi4CAKJ6KbXqv8eMDpA1GzmEi6CtBAiAY61TU%2F81p5kg%2BBwdeuinEyE3oSUxcydTnyd9mGe3%2Bmir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMQ%2Fn%2BcpcPbLd5nNYnKtwDTG0S7yF%2FRh7fDLNgTWvz3kcnfo40m7FqSdR3Q0u%2BRaCda8VHwLJV99TkG8BmJurrzs1n4KALi7D93MQZgZiVBjd5qyg0K7kIT5E%2FD4A4Gn3fwGV8PeldZO3GX%2BRLkw4hku8SnriZehUMSU78BdsiNcBU9w8G7TZQ2aaP3eCs1vEFddaqcJYchsjQU7LVVf6iLN48ZExTNxpZHPgkHPuQjrJSGdpQu64E%2F5E7Z6goEAf1F00XQikz9RcG3L1ihhghAt28AkuriTdC6oPrAISpPPEvDXx%2F2n084R850HzTZ0aqMSC3mcOXY7MoDzvNnPJAy3wG9bz7VX6FAKm4EDlYEx70c0AetLNMbiVpu06Ajfha8xzku%2F9ewT2qiYF9imZF%2BVzp1YAAZ16SI1Uq31xnv0VpHMq3lXGf%2B09HoVmgixk1cSzgDh85sM6yTETGAK3959X%2FETlec%2FAfzL3%2BRC%2F8sR6pPLwCUs4xTlKGq4it5FRNfhrTl96eCSjC9qsble5JKE1w%2BESh3gjQT5d%2B1SXt086r6myqJRc2BkyiFYHqud%2F0VUm37xyz5jl%2F2YznZb8ZKbGogYofoG%2BbOaBdGZMRFcj6eIyY2gETtpnbwT%2Fj7DwiFPLQi98WBqq6juow%2FKu5vQY6pgEm1H51HXrGW%2B2YRsch6kCI4EPIG4qk5B407gIWXfqOLWKHZm0L8nh4CMytaLgpOfhmnoNokBHlWkR%2Fgp04QdtQadD6oP7MGnz028MMSGKcpT5AGKEPqGP3FpPGGF1i7%2B20z5VIaBRPcly2YopSo%2BCH5Fn70hFNqs9GxM0URhsNN44SElCF1NNa%2F1UWKDbatXF0tE4hBSxgAV%2BtN%2B6o%2B118zAmJ9lGW&X-Amz-Signature=4e532635a583617110bf420a31c5392bf57bfebb2fbdefe802201a803cb4fbca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGECD6KQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEc4k0f%2Fj7%2FA8RE%2Fe9dKQZMUcMotlm7pAZfv6OpnOSSAiBwKuuhI1CVj6uNdfeJXA4TsDrRaaztOFaYqmfjVvmukyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM67rmrizkGZyay%2BpPKtwDUtwk7Ehz1BI%2FhSf2JSuecu0GpP9GZRNG90FUrHQqA9iI169jGh4JU2RY%2Bn4YXgGwVOtkXigV1vsejLMmDA6FouK28cNm2zowV4CrYLczaiUF010a%2FV0gc%2BZUvL2C5DxE%2BHMax%2BdSQCN2GY%2F%2F0ws3LRXcmnaukBGoHW%2FxKXp6hXvqA2A2XhbcFR5qULVjGoAsZgKOfWLx%2FBSf7DyTeeRJdhcfi6G3%2F234dYRbJNmkj0Lg5%2FAxaHSnK%2F8340yxvoEJR%2FaegWnaaILOq78QUUQRN%2FONPBraNwNHJGHCxnX%2FJGhL7L0BAS%2BBRO%2F993INMQGyf663ahZqGFCOaGGfGcotp0Te9gcocmSkoNkGjjfNjIkKkCCoM5ujobomkCIFL7l%2FGVsuHVrbYjC3Jp5bd%2BZvsrDz%2FSTaUEVLw%2FtdxliQJe6u%2FA3iFQWpE8r3ZouQ3e9TLOdPb%2Fwi%2F1tQpwUKSdsmsVSG07qkCR2ORDQ1PNUNpfCrMA2TeoWOO8utJF0sjnO6CBGutvdhUqhzecY%2B8FgPJc32e8H02jztpbKM6zDTyuC6JdnPonzHJU6qlVPboZvzpe0suFt114PuS7YMIzaFsNCnqZXRxNrm4VybuIlEEBj%2FMWwVRXf5%2B3INAKQw26y5vQY6pgFLgNCtPKpLaR7A9DjUin9K27rUwib6NdTjzJBwOodU5c7a5y9QraZMPT18ftnukIDNZUN7me6VWLpyaYTVkQ4x0E%2FRECGpLFrlDL2Czhm3UCuQIutJOP%2FDJF1%2Bob%2BOOGq9UKbp4JHo0UbKsWYJLs9LPJkbR4325MMyGpR89UXGTcrc%2BwOLPPR3vXjDrrJAl5YVNhvHb8ZT0Tt11VaZRT6ajh76OOQ4&X-Amz-Signature=a193c127b802b202c6538a2ba73686713fcbdd486e75426754a071127d2f0f08&X-Amz-SignedHeaders=host&x-id=GetObject)

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
