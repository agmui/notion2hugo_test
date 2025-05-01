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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGMM7RW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIAD4N6AEG14MprAD5NTdFpT5Hit9pbq3aD6BLKOZ0QIBAiBWZFCvWlEstq8BJzbABueO6B6IyfikHjfaXb8Dh92KUSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqbwXuqv0BI5qzqx6KtwDqk%2FTh2UsXW9BVQISf%2FhzH9oiKWh8UltDpas4hOhJgDVDFy29xOUFYhSGx7R15LHKIxxP0YEO2Qgw9RI82rcffSUt%2F%2FvdR14pVawQTnvK7Dmb%2Bf2icUP0RFP8viOkAijr907G9I6oilxRhOS30EnaD8h7EgSJI3rxNfvRjeO%2Fm84ECIbCBkn2JWuQHpQcQK%2BXffzMYaJ4MOIRwXgg5raff8Lj2455dGc9wUyx%2F1eJWWnAZlZMvliLne%2Bm1BTW0WI1pfmyQla8712OX5yqi1rpkm1TgBRmdeCS7jvGGObYpvc0mdllB5UTaCe1SaEqjCXu0fXDfB0FSInlQUQ58rmFQ%2BFn9axjQaSKiVgUE%2B%2FFYkQ0u4t1RG%2BrOYKYYkE7CoZ2J0akkB3P4PJKRwAJs7iT3qHLJ56q6KExPdSMMuK5rZ0l8BtmpnRRcR82FPuJsrSDlxEGnLpSq6V49sU%2FnX%2BPmix%2FmSoue8GnZV0%2BXypc76SKSMIp34MJsVEJPQ5vN1IAVPwZBMYeWgJcqmXTr3fze9%2FHEG5SCfJpOj9Fkd%2FyTYihtbulG9zVAYpz7%2BzDVXTMp1yz9y9OIQgosEjPKvqwIEiF66TSNGlLe8JXhZHMfhbnLRA%2FCz3GUcY6B%2BQwwL7LwAY6pgG9UQ7XX0tQk3yaPme3EiA%2BfvsIR52lWcGECZznP8e8ehhOjvVnuQ%2FT5LtmWYES99p2g09WmBmw29C77qgjHToJ0I9ltaghVhVW2E6GRmYuCRUkWbPQ6eAZZavxtoYmuFAQl2DD1bUfjNicpA5TWnKujtpRgW5appiw5apwt99j469cK6N%2FhFRVt8lFamtRRf4pkMHT6Xi7UDAC6UZ4Ba1WK%2FZsGyE6&X-Amz-Signature=0fd0e7d5196f72c317b8624bf8aeb5bd675c04348a3c39c05604c151d070e361&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGHLMVJ6%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCelwI6NSU09ubxl3ySwlMgGjNn04mf52NG1o776v0LrgIhAJ70pWuzo1MID7lLplNaOl2dcH5qC%2BPhzPBbs9vW6MzAKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZXAGIYzXOdVoXhNAq3APnLD6FNdw8ESU2fScymAa%2Bj2TWIvd9rrEVfdVw8Av9bG9BQADo86mP4oKwz8Q3REqq4McgbmgeBsAn%2FmmPQ0goeFJ9wfu6psf72lWhmVwKSUPawfwGv%2BPgY9kOalwZ5Xrg38fyJbWqhsQEBausx0V%2FhjuPEame8BlWSz3gHm2e5Dc4qGTklHjJ4eK02GZQ9G1LsntiJQDPl%2BAfvoxal9Ii2W1g7cR87WBMye9%2BVEMIQNxTPUCB7xFiLAkSdjXzfoorL7nVvLwmZaQDuAjKEp7EWyXp5ex%2FzxitLg9xG0jjMq4Nc7j%2BDi51mD%2FCI3sDfuZGNf1uBbXESxBR%2FbyZyP%2Fge2Em3rSPqwflbUL8Fz7V64LT72BmB1xESrvQIT6%2BgLoOeOFD8RWBBOdAjk6Ll5GrAKAihiMpuoKYkrFndS5XLK%2BBb2xSAm2zHfCPL9pdsBB8fSf2PgjJ9bodiHSUqi7K%2FPz52wpWh7z0cuR%2BDGJ2i4gY%2FSGPcneR7mKx2BIilj9iWbXJ0TOV2sqKoeTS1iNazMj9vXET2aT6AUuqyn1YUWNvvoFYVsCNzNPKbmIAvU0mhtUCY8oUlH8ST533DCR3NPUlssnmACTy4QyILj2VrrsfiksofUMvQDaHUDCIvsvABjqkASsPRjBXuDYtVomRYGXia9Jq38CdGpRb4C%2Bzmu5ifBd6zSi4qn55j8G08DpKkITJvL4Rvfuoy5%2BBJsPh6aN0D4uUstuCoPacmZfsX0H%2F58ibW6HuzfFo1pkw2zn2vw7HQlepod2NcmQdGETm%2FNRWx2B%2BYBVB%2FcQ%2Bcti9I5eTUOY1siQlB2eEy2ANbpuUDuVkaLB3bS64tx5iYnzTIEi4p06rCzIF&X-Amz-Signature=9aadc13b39af8c872c7f9503245af4d36871385dc2815f5f87954054e18c18b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
