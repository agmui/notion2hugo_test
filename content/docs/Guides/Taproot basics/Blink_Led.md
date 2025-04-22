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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2KZY7UD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDXn0yVg%2BiJmfRvgQ8qs7A%2F8rvs5WHDCa4%2Fap%2FbHo3tMAiABjZKryKptru98qFiP%2FcSgh33to27X1Ltotc588XzYKiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXCqVQ071KiJHT%2B9ZKtwDyxmTO37%2FrkElHIckoXLGheehbhQBO506Cx6CUHwVBQ7O4kmmvwIpI7i11HpSfZkcNipfUlSwckTvu9GTGGYcnCbKQdJIcuCf1lH39qxs%2F0qSBJatHsSmq85lQ2WEIZhJLoA%2BEQdHLZHaIlUdke3GnDDpiNDQ59z21pLJUbvepd72ZqfR%2B2HTvJ%2FEs%2B1b%2BcoJDb9g1zA%2FUQjFq38ShPJyKwMr6nAJoMVsI91xJjxFEHwnm9zZlbBEuNK%2F6pRs0adunGPWoss4Ger93K4FXrph%2BskLSywFUnPDZGiwjRFWxGKGWEEeXjdOHII1dm3ufYeqB7k3kJ6%2FKWC5So39lEAmeMGimNQaw3GEvTn%2B%2Bm%2B54p9SWunlPEZcuMqPWf2yUJZjadYGNq2OTq5OV5KiU%2Fr6OQw79Z%2BA3MBbbW27%2FCkbdIqQQKwJneGO%2Fp8VzhYZxdQf6gouGTLlIvYlpA7gRbgzvVVzB68crmbezvdJ%2FDlwd%2FBUDj92%2Bp6xBbW4R2kRi1VzDu0RzpfmvSWr0ybPmE70GacRcwwpc0L5EleG8ksRStzB5yaEp9sIn6xRKRsZT3cubxKMEESkUDwL3sTYRU2fjBgYxzwNaWbWlMI%2FReGJTr4l%2B3tetbwPjuUHXXkwyN%2BewAY6pgEwQi4TE%2BLx4YzKlP6VYUhXzYxCYdu5t1hGf19A68uzC82DmroIEEHrDpREL%2BJYL46OZzbALf%2BsEJB1CVYMyde1X%2Fovf67nPCR3k0gEQvlHwW8tdAWlFyKQLyrJgx82bdbdkuIqNiQyhuTc6w7dHwiVHMnFa9JjduJuGqZIEFEAkV11LDeOl6%2FG4VDttpdgAoLazMOxohM8yJPKQXQFeUlgw1Dp80R2&X-Amz-Signature=be4506792966f49028759c4050a082b3fde5d8086b44fceff26e9877bc101080&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2M7GB6H%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDcn60Ty335YnE%2BuYvq0Nv6BMMd4bd8Nd2lPb4O90tPSgIhANY5PtyTpFNeWl3ao2p1FBdfwKQhi80XU1nzzm7EWNSSKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7WBqfU1BZ9oB2%2B6cq3APUdUsDCJVEb496I72cbIxTuNhHlMLqxPE6j3vdSDWt%2BVcG9zC9vUch1BzI%2FC1N8eUYrpz2iICvYFMpCezvb%2FYyKyzi%2FODnm51boAakU7GaY1mL7gl2wbXR4xnX%2FObnvHGnAVRgHKCpyo5GStC%2FqAt0o8lpnA9AdiDwbgO8fiOfMinRGmTgwYLjebJprklKscOnCxhA3WGBbgZd8RBvn4bJAmyKqXvUrXI6GK2G8lIKp50EMwxgVOPmQUTTm24FvGcDcQ7vIIEy9kQJgxTmsouT%2FyWXWVPZWZAJC3Rqbfc3D8Uesm50%2FPK%2FkP5mpiDjrFfouNHo3Go66ByGyupIEmqYIQeRu5OW1QwZthuAtAo1ScQqDcCKnH7JmjmXaAjLewEZXpVXGZXgCSfafQmDK6%2BgEWW%2F6Cj%2FCdXwHp3GBKqvfGvTGREtTrHBG%2FpzqeakhPqtaM3RNzkd8GJxjPHuyuGa31cFHUQyg9clG%2FIsEkKkf7tcTEtQYJPSbyepTFZE8K9nctu794dIm2x%2BpSxlbJUEonHBU2PVKhRNpwGjOAAyNoRNAQKQHuf8mVv%2BEaX1EWTfjb7rwVHMsEZmz%2FYC73k5XGPgF2WWw2tbvV74CxOS6SUQuWzqhPiNCUcGfjD2357ABjqkAQEjFP0PJOj1%2B9%2BKp6wlgpZ8WN0X1x%2Fnz98x0V9CGGb1iExQlRshsjfy33Cl6jxNsGrO3szbKO9T4rdb04NLfH6OU1Ud0kBTOv6GHb%2BEFzKkpPaXE3X3FAHIbfeYQ83zPpo4BSMpW3Gk%2F2JbpGRZ9ntv6i41xpmzumbrL5D6UtEUjuu2mxoYdy2O%2BFYZYJH6bt5zTQKR0sT66UZeoPzpaJXL%2FSlG&X-Amz-Signature=b39a38a43823f845cc322694b8017ffafc923b865caa8fc6693287b1a0a66de3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
