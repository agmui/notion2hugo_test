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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU6N52SF%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHopvx6yE46eyQQsdvKuA%2FGXqUJtukI%2B%2BssHixqJqR1PAiAVSYWROVjaAdRlIMr3bUcpwAnyQ0XL4oAomI2SvRdQoSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlmwDzsiSWes5mXxUKtwDJUIujQdwDGhuhZRUpXmo%2Brl24w80wSIXuXOv8URn3RpgZppZGD2VMMreo8FCSoNuWc%2FDMe3U5%2FRjqGsWHpmZ3Na4ePfonOP2BwmTFRDrYeyFUlf1nRH%2FdvhzdHR66uQ6OiopGYNDLBt8izKKDATFlrJPLJcnbh0W7qWGjPn18KTxdEHFkcoboX1%2Bh38hKVKMxeF72gM0hi71Rso4S%2Bqh%2BQ4hqFDmhisxboWb%2BYCt35x%2FAo%2Brcc8EcsLVZ5Ge0NXhPzLFv0XDuIHhMOdoXkhTi5thNEdroajCf9aO89cBNNYmenK0crHgZ8I%2BG4XWlBtg6xdMSba1gotCVQg%2BPIVQA4MsNJyGwgsV%2FhTtvGUhk%2F6MjQvB7B4o%2FhlhYBsfWlbMS5A4wvmUQ47fIt5o%2F0QhdJ2hWFVlQrJMDzX8F%2BHx%2FNab6JhfzcTsZhHgmHfYMStfZqn%2BAw%2Fzpw1TKJ0ybl3lAenLi%2BQAlK%2BXpGb%2BTTamtkYEESPV%2B%2FjLZvdnrSfr8rolvTqZyEF%2F7RkPbQEsVRQp%2BMpnL5awduDLEF846I0z2z2LO4c7XOog2tCA6ACkU2Dwdt06yd4GGUzbj%2F5S2YxILScxtPRuLWqyjoST5T%2BgcOcLnxJ7juAbCSCULD8w0%2BLvvAY6pgFBxe1EdkBSkKllmGI%2FQyv%2F5EhCMG93cgd9NZnpjj2uhpLf3%2FYSBhVNo7mn3iGCXoGRsxEubEw9EbmtFgkqi5uAtVlFtr66aTAraArAUebth1aJWnrAZ%2B67DnsmlP9b4WsjfuLp9sXgFxqAUhQbilxUFn%2FChQQFYZFN8Ksg5s2%2FCEhGWrZnE1bYkClaAMbDrXVwNt1LAOFCK3G6CVRHzGyo%2FigMSuUf&X-Amz-Signature=446faef93c33f030e8b8805bf8b7320b5f5be7a1c01914960037e20210efb717&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677ZKZUIV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEr0%2Bzsai9YAgDbmJTkwn9xtPzN8JaIFWPXeOdkCiZ8AiEAwVpFrJlqU1No1Xib%2FOVuQ7xtnBTzPkS0XhsNAJqqC6IqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxAv7D5MNjZ6rFzHyrcAxUZT4f%2BMkdoH97W4U9lpoO1RACajzP3SCSVoawFNVVnJvz9cKGfCEmAOwWR%2F5cVl43B%2BZLhewU1nhgt0cfMlQ3iia9z034YzC2mGtnSCOqJ6R8RXV1RwP%2BhRjNnrZQwb1jlwJZAotvECnQjllgjvHD2gRxWGhZ%2FBG%2B3hU9ef1D1OPpembTO4D6pOWPZ5J0gSBbrOHD7K7nlw47OMh%2F8mypOkA6Te3QGwwjegxHY5KfwU1pmgvy3vEvK91dAy53JJjQiJd1MVOopBfNg9Ly%2BRjpTBxVcAaLq8SbwUtqyOk5v%2Fb1nNHUlNgy5%2FQoLgwCIQ2aX7tMcHipX%2FLvH8ZPckE2lGf0wcVUufrCiEXM%2BDx5NgRTdS3In1a9R3jN88rRdiOQOKuSzYzX%2FIzNVib90wsN7hr9L1h4Qo8HJ3%2Fp%2FYYjYi8JJlj9%2FR0xg74w4K9DBZ2R59csh5re7zt0dq%2FXCnPV00YsVCRFh3nRPcCFjsBZpomRu1x%2FJIHTpfsfBB%2FzMRLp3AWyS21dQKtT6j6V1SL1Bu5ykT5bTZV5hxoftnL06z27DPtlAHTtS4DF1taswpp92cdOPvEN8A2ysYWnn7k7LBnI8mwi%2FoWdQ47BZhguJ7iQRyBxZ30%2BBDRLcMOLi77wGOqUBptjAG4QR%2BEzihxDrmC9RA7EwQUd%2FmPYz12smoW0VcFK3KMNT5qe8FeAuVvTr2yNe8s2KjUpU93FU2S57MjBti0pQkr1q0G4J6YtG5x4IETJV%2F4OenSNTL7TkZ1lzQPk%2FTi%2F786AFbNZutpHqddemfenLZ7E%2FDsXlSQG%2FrB%2FxDv%2FM37dHjh%2FibWJX5U7j%2BdgH3JkDKs406UJPlQQKPuHEe8IcCb5i&X-Amz-Signature=39dde174488b5b765f9830585526f6277472667078868c5c29d5ebfb8b1d1c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
