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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKRTVNA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHKzDvM9ShkbGNfvEh3ODAVbUMYmSHYvD%2FDEtY9k%2FeX2AiAA38fe8QIKP2HFTy6BUrghdIig3P6Mgacg0%2Bw0CQEImir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMXGcmf5B75cmtxQ%2BbKtwDJP9EtTnmkXNXjdmp1qk6pLnBWjAGNuaXj7iJvTDEYKk84SFmKXlDz3FpZ9fvb3F9MEwVKQTG5izaLPV5GeO%2B4%2BZ%2F2DqYt2j5SgNJj29qwGaaqetaVw8fSksBsJZUjpZQXOtbEgiozPtdwj8HD%2Bp2cwgdP87payrSmDgDg%2B8DV19HykCo4jjUP0Bniddv4BWVZYIFqFyQcN6VoNCvsen1GaQZT05NG2hQ3ptBlyFVYt5BgiI1KcmpWwupwvtbRteN1JRo8cuyatkmuJsFBAHSJ4LYYwnM7IignwRW65uFzz4iyXRz7sIm4MnfCT6R5GPgfqmGOCtiOfIMO63UdOBrGs%2FtgF5R9kwXpR7IxMFVjGojVqt7qj%2FKMaq0GX5fr4mqeFseyDJToX8Ah8cx%2FSZU4%2Fu7UjK78AF7xL7DeA7WRONUr7h8MBQZWRAKyVp6EH7U8JKS0G4t5LjzeUZwIIHPuCLOfu0h%2Ft4V2Zjt50dgy64LKvUMYdyL7DazXJCEPygHLLRBmNPSQpYx10rBvURNXHHGYBj%2FpMqFREuecaxO7VWs6qduuhgWDUqSTC27lRSwWWsWpj%2Fsubg41PfuRMPjvgZ1fY3qTbvrp6zbqSDYoQWP7WpJsM%2FO7Tt8KrUwy4X9wQY6pgFAwzkkjp3TMoPe3ZHDd6kPeTAvYl1d2%2BQ6%2BbVszDZGYXBMoJ0czJtjfQVEYR9clbnxw69w4G7Nk%2FjtI11mveMWAV7ozge2Yule0hvfFociIDYst419TbB0EPH%2FOpSIIH1Xk%2BZ%2FSWRxbGUcUMLDo9d5PhAxHWaT4%2F6HUGIdvPBf%2BqkprAbWc9yAOxAgQCydBDriiQ5b8xCzwjGdU3LY7BBQdFLrvRjf&X-Amz-Signature=87bb903e6e1d8b4cb50f9c44261f2ec4463192c901959962a7892aa74e7c0973&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YCPGCVP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCzbiKmcg%2BDt9OEU0HL4In1DRXHw40KKncrnk%2B2AVjlywIhANmvc64Osd7RI3PnNMJtbp4%2FW8cr9U5ZwO7wkudb43YHKv8DCBwQABoMNjM3NDIzMTgzODA1IgyteA4r9kh2MdIfmicq3AN6IZBrcn1cZFoo92C2JWlBQ2ynfewpWXCzS%2FP4vXVxqyzFaW1UtnsOzBkw8EG9%2BUvgb37Lr3uBu2qtNNDLi9DBFMN0utW9x8YJra1PPlP2QZJQfeUOQbZKNTH3UuIPf%2BC22QQn5QAawVceznb0ITyRF6buH%2Fx9nv8%2BQUyBUBCLvF8McB%2FmrbHUIxotDTn720J51mNVhTGS5EpNR%2BZsJjyR3iFlL8ZgVOY2kET2OZzsxsXypHqpA9smLGqE1IMOFfhNIhZKTM1Q8rB6iDo0MhAmB0j7qBYH6EgrGh6evSxl72bqnBOME4iwY4XEKlP4LGeW0cqF06TKWuHncV5GTwkB4s6HtZFg1nELfOY0npyqXVWMknwwseL3mGdln0AqQpADtmNzzIx4v%2Fe6ysuz4Frd6kGxGA%2Biou4R2ihoLxkAlCCf2352tPQbIklTUDsQJr7Phf1YdZX4qN1Qxz87ut9FvxXJuSrn81kcwe3KsEqCbPLG8aniI512HQjFoeuAxs2Oekmw90AalVil%2FDwrfazJunFdCu38zzIkz3BNUA7OxfK52urgyTob0hvxMMaTnrAtek3W36eEm%2FEUrB%2Bb%2FAGiQ4x8tYELxovqeBojx984At50Wgv95Yumze7I4zC%2Bhf3BBjqkAaK5hDlDXS%2BSuOM6dTK%2Bi85v4eqizB9gK%2Fx2Qq%2FjBlGu0dpsLFT349pYseX2FEluRtq1dGd7R8iiW7HxcrerwOvQn8S%2B3L5s%2BoKm%2BrLQFT3rl1EHhECCJspv8RnHxvS5%2BA58OpcfBaBlVdGxvhc1U4nN0zt8s5Facpul5AWcgtQeHMxjtKswi3Dnr3DT7PwR2gTISn%2FRW1plSRVtJyA4FcHA69hJ&X-Amz-Signature=682564bda163b64e2cc580134fbe18ab3a8eeca0a9fcff514dfb046c965490ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
