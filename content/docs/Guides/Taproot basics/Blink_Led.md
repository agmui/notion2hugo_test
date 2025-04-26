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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RESF2ODM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPmtG49uqmBrvS5mob9PhC47cDS4lQ%2F9u6PiO5f9Nn9AiBOghB1%2BB2g7mQbWiweQzaxJjY3oOtUaQ87oPkLm3xQTir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMyZEba1tLyfTW4aelKtwDgSLlQ%2BU9HJuEVIJ31wAjrhnyaOtXNSScgCHOUjVqcm4E1gOLnwTyUPagfOljhL6Sin1rQpYtqnNfkS0%2FFJUGMHs2zDRIDA2WgsOeSSa9Z4fRw1y7SkDT9%2B%2BghxV58JrmSn9yaY%2BovKtwsxVZ2daxwmyHWLYIj4dmGiKxkAWg2qq8RnRtiaVrSRzNRqoy0Rp%2FYzUesLC3JHaMofFWYqb%2Fu86So%2FZDofW%2BDK7toFcIa6uwEDySQ1mWppRdsAC1xJCbKhKsFOq9JRMZz%2FRDNPxr%2FBF8w54MXuptxK%2BHtCzwd9raW56m6r9tAVrHB47m%2B4RcjGzM9NnLG57mdFWltvu6v0Gc%2F3hIi%2FiSwZetrhaqLrcrLKBG1j5mAw72pWNnXgyEbjo9SEB2le%2FZizSPj2SiCkSzyZi18%2BjF0Epr%2FYRzqFcyFXk0ndj7MiFyHXBt51NFoZJ6gzwBeskpF2B0urbBx3FFxBkwbpAHHLDz3TT%2F7E17Gc1uLH19JdDF9taJom5ikKKW9nECgd2W6ohHNAy76q5IKVTQqIrRcA6POfmWg3oL7h9Lhat7UPEnYCiVWdbY9yrA%2Fe7pXJ7177uzScdG%2BJMh5Y6R7bCKu%2FWfDwOZ2sG9ABS9RJGmArEVG2kw1cyzwAY6pgFyw3rRmJHBfgiQPA4yUstLbVRQoMeH%2Bv9Pzexv3tn73OY3wud66AbHH993Ifn2HgyYz48ZFmdyn9%2FCDtLZ2yQGXZx9NHuGyoU7sQE3Bl2bwoO1BxjaTXcYXDA%2B%2Fw7DKzwvagg%2F62ndn8%2BQ0KXfil3yB9VdWDDirP%2FkPUDHIFuFGMtUBR5IXRsBdNAFW442ed1dRwNjs5cSTFnKZagMQLZmRUR8V3S7&X-Amz-Signature=508c4bb8797802f62c27e4c38c2b373bdad8ef96b7c53baced5b90632d6495a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSTAYUXH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7akTSE7FORWEVdXv4Pn4C2%2F6teewz2jb6VSm3Fba9MgIgYME2gpE9s8sA%2BrjnZxV3wOefu3ZmughQp6sBj13rQPEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDJ6IJbOopf0LwT4JCrcAyaudZLeZ%2F7HM2xc25sNOmh%2FEHtw12rz7k0HaJTWBi5tZ9fPbNrkDd5pPXLQONAKzSLdUZMJ5PvplQoxv57vnldHriIffxtZEkMuiHheZEqrlSM2P8%2B8811PJvnx8pFuMK%2B4pRKOidJ%2Bf6Jis%2BU15hGzm8L9jgX8IDMmD0mrbCHekqSeaab4sS7TT9z5ZHIOXra%2F9L9qletFzJlsYTSLZwxe52IpyRd2eTNppi7Hb3OX3PQqjl%2BTmeyZ4cocFtvEJxKNShZeN6z7QWX7UGM37zjlgN95%2BOhY8lqLX3x2ItV70YQCJnWuUnziB3Ep1MCROZjxgoaSIiMAAzrVcEKOCfiiwbkgjbeef%2Fd59ZJLnlBDyRFEhRS6FOCQHQdDpgBC2ZVA6jXOJNCHWe%2Bjahztu7ZfaM7Y9m2fmtWftBS9sgEvyJE63wwCJf1KevxTIBrpVGmMpOJjBf2zs4sO1Z5CQNeWJWGCisIfl90CJs%2FT8BzXpahyF8Q535Ex%2FdPPtdUgM06dv0i65Dw%2BmmqXcWFFzqvbwIhRwF2V5L3NFBdgPnD3sdXqB%2BCPAUt%2Bi1wRPlYSnkBOGFDh7Udb2vf6Ysy55O3ielkIyHXHayQeo8HxPQtu%2F6nWa7qZJ2M3xOIbMNzMs8AGOqUBu5uAdJLfvzYzxknPRjBXIxsHpxLXvqwY5Cuo7yO89PkITTYZWGidU2nN5RcclXpKtzZoGZFe6BHc5SiQTy6UPKfjFOsf%2Bafoe5PCe5UmZoSV6dW4VAhQI%2F31tPoF6%2BRl%2F8k6xkbnq5FVu5LglT1FdwSkwGlWCEZ1UjcNyzO3C3oumt5rktUdPIlOw1XjxmO50Pcvzamfh6aYoi6Hfc7g%2Bgt4e7c4&X-Amz-Signature=672a7a4b11e82542dac64d89a6ac18d6b9324723ce6f5b2a6f718b3bcacca46b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
