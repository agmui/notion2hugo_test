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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YCFPPL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCL7rW7TdsoOmjjTMFcLgIDeIol5LwGdjr1C9ae4vkQQQIhAKcYOajYdKoobaL9LGpgZtM1nWhML99ICG25YHUyxBcWKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySHiJ3GWlPUqJ3r94q3APYKmSgNi%2FP0Z9A760nNVC4VEuU7VtVdnS2tFGSDIcIXf3utMidGtWxxxooODAuhhngo3lPKmeO46Qj7GGVK1zCG7R%2BgT0zBbs9SBwlfVcEK9lvYVCjWo8Wbsxw8znMlo7zSOx%2F%2FcFBRGUBZ1WYUyLf0z8j6NrVC%2BLwF3%2FSwBB9Xr2PaIR%2BqSIxT2ya6WKtH8vuKutLikIQemWlyrOJwNUbHEd1La8zLCnGkEq9ocrYvAydDLtW2jPzY3Rb6BSen4VFjob1A8ngn5ziRY8ZSv7JCamp3Nq3jXFgcPJXMl9tpYByEsG8p5iDSLVgJUJPRSwO2qW4QSAQrbeJgW9Vr6DjNG%2FebM9%2F8uPxCbzEuqDp1waMKWPMauqBFdzwI4UKOhc5Xh88GfpTFGmCGOUQUSSnxCkMaaD3X7TFoUMWtFgNPE2VfseVX1OrxDGQGDMKtMii9E4Tkr3Cl0QNNFUjnvlB47iwIYNNG1071zvKqmvhpykpi4hN7%2BTfswpjNwZZwQHUTGznWHWw35JkuHjwx0NtBRAn8V9v5gtS8LQOw0qZ6ZK4HJFq4r9rze1qxu%2FyMSux0G9qmhpXmXSY%2Fd30rIx9FecJ%2B5HeLoupuWUYIF22qBFz5kqIRLmW%2BpwBUzDhl6PEBjqkARRssieZc%2FGj0lD4enCbVpgSv%2BErwBcI7kyXPxzCIt97z6XCcuRHB0TVYI7X3PLp%2BBRNaCy78aoWkfcMmzVV%2FnJzYjKLgCwlmZn9Z5b5Uo8heQt1wkzdgClzxFvd5p5WL6o9qYfHekVlcG%2B%2B%2FffnpxsHWz8jhRwZ8Ty3KR5fdSJhXUeE%2FN%2F2bEN9%2By3Z%2BLvInIcxRuc5uQnsfMQ9%2FHEHpe%2FW2cRt&X-Amz-Signature=9929a7c38765c9450fede0a7c6eea437d6154665609f03201aa0d531a8977957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTNACL4R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAnfPr00UnJJPZrL6CbaseWNUY0i56vKRSIOkxraXI7wAiA%2Bp2rbDxLk4YeHphEWSbuna3n46Qp5%2FnHFSrfa%2BXnueyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnChlFUM0EPgs3h5rKtwDwDpvXOrdC6uElISVtuFWMQ56iFAZlc07k63cMvOT5vcoMo4PF1sQvaaqa8oZDseWqzjD8KV8ZyshPQCd6lN2N4%2FCiyQ4G59OUlRljOSxhH%2FNn%2Bl3b1UUnZ90jeoMTBlrp6i%2Fcd%2Fj538xq7O1iXbtlgn27P2M93J5ghW5t8s7uiG5JfbzTBiM48p%2FZ7nUw1Q5h6PiMYbtVKJN0Ns7CMSMB3vzoiRtxvQYkR9NKEoeQ5YNVCpy3cAl7503KPhonGb5Kx2oivkkkTW2SYi8oqtFm9vDYHPRqdf1w7eRgU6GWAmkX5clmMF2M5TA02mW77qPO1nS5wWPtA0LHNKwoO9iLCkjsCd66FrY%2F0ivmxXBpiogsfHAYeiTAv7sa%2By1SgxzA7sygci44%2By1rx1ULV4ACjEAiSGhl3gmk4FRshuyX6zB4tmKDn82Tp1ePKBkfhZ%2F9QJFjvVX8vONLUeXInlOI1tTaDc9TziKW7L7PNyvdqtnaKUK4an9qZMLgIvpTijCP11Tp5KZKEsQqZR%2F99TZ15NZsfjhX398MVctoKa9UDczF9Ftn%2FR41qORZBrkWtM8HeePcStl1SIBLtyPH2xihcxdZhmH8OuuPTvXFk8LuMcCLvgG42MzVzPiTI0wpJmjxAY6pgHJ4KqKoas2KYjEZV6Up3t%2BeEcaUD3FBNKFSO8InxorVq4bLRno0i%2FENirDDcDdW%2BbXu8MHHb2eKw5vBp9mmQ9B%2BezRXkv4KY0QewLIru1N%2FcpQglAhPEFpce3DN1I74lzQ6Awu0cXu933SDlbGyKlOyuxAl6ovzuiO8lcW8CNCFZqKgZ7deAzuxaxpnqUM0ilWfxk0Hy0DawfFUtogT1h4%2F53Q67QR&X-Amz-Signature=83767dfb7d73709ff710391752dd12569b2fb863624e049b9bd5a7a4a84fb1e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
