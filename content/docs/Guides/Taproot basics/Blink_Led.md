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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JNL7LJ5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJ1pZzVxLv1mNBSEfQiDIyP1YNdD1azfkgKycasDtR1AiEAvXHHgzm5DSIilveqQ90DOS%2Bhtzk5xrx3Pfawfeaq2woq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIVotOd3gDMZEBR96SrcA%2F2TAdK8c5vGaKj21IS0MtTwhTTvXPKItFEvuGZtL0J5yWeTyBg8yolMuMWgtqyAITIWuipGFb3JLJMq9fLCUQ0aJgGHIAzc%2BrJQTlzOdsQy9rS3NbkkgqkK6plWEmDXugtIa%2BnLAA6Nbzcc%2BInQ3aFToHRDTUfJ6hfFWMo9TkMIycTBM5%2FiBcQmm2iWuOxT36zL0AgC%2BzSAKQafHtfrPkbinypC5kwt8Rzo%2FeNqwOwmzGCl3a0064d8B6HEXJvZbKkvA4vdP0R1bF5%2F8kVQF0I9vcf5CTET9Nsg4x4rhkMPzWGiwncteVsV%2BvDmqwlY3SPQt2OpWHsPz%2BGQA2xV2W15KClC0sa6VPxukadEMmiztZpiyjtI%2BJ2FRyZnNkVY8M7W5dvrrlpHG3itB6Eo57CR9AMPoBtLqKjlNZWcQnsWipLuSrl76f4terRW%2BJPLscU%2FVKM0QkKstZrQhFy3cuQ0Y8w4GFU5TgqQWC64dWZQjDUoVMT0wbxx7iaeylmdprNZ1Mud4iLULZ6n1kwqaeyibi4s3iiR8JBLcI0jWkxtOisKmTy%2BV1FemHeMVK0g1wSQeW6S84kRuKlNNMIiFpoDAVo67jN5fScy53RuSHPx%2BL%2FumDLTssKC%2FPcfMPLo8cQGOqUBRsfN4Ud0Aq%2FxjiLs%2BawXT96Neae5M45pNtvOChW4krsDoa1ytrORT0CM3HUSitubaSux%2FFMnHtaB9MUEIKzW92RksFD%2FduZQUMdCh4COqAkqh2TVCo1aufK0X0qaHoRrPdDKnvFqkyw17WSrkCUJxhlajr9ixNYmboc5llujeBLy9q7EuD4xhb%2FgzQT5wqj3QC89RA8o45xZQYKEGhU1CyqGfcS%2F&X-Amz-Signature=8350684265ca4510c9a3ff8b205a73601a1c208590db1c69198924d52c4905d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MNPY2O%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0yhd2Ce5gPUloDprQOJaVq5R97dYBHAdC0JHM4xR3eAiAOXta544OfYn8P8FB56qTZpODd3e2a4bNwVTl3YXO%2FRir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMb9yoxEcII03zZNbcKtwDW9LvQfq%2BX1HaFsJm6D%2FsOAfSYCTCND9LAJULmHzJs6I6QonobTaz9e2DqQ4Ss3st3%2FEWnG12OIxPuqlVt07WnL1Ls%2F8WTgSUweDpftUXMj01Rsc%2FxsrRcq53i6cI6LJWMxQWndg2FBekB0R145yp67wYrxOUVW0Hz6eZC9K6fQqH6AcD3LDWSVBWq7NGjbqj9MGrrUodqIXP6wz%2BoP%2FqAILNgPA317nLNep1eQIejA%2BavegCwyMFYGVfzswzoPEbLNT9m%2FtCBxQ6NG4MJYqHICqOwCV0fnDLR%2F2VaEBkOPFLUVdpteGuwdotU%2BRDnlLd99iKolEok2vmKPLeFl1KvBB5ug6OhYkr4xhCqZZ%2BqhBe5eA%2F8piJEpvzUo2ChT3Lkm7Uhd%2BdI1r3ruXXq10Ozd57JjBL8x%2FsOe940Cy%2BCkgXkntHpHrPD0A0C0zXjmk5Awi%2FUNZQ0cd4lxr4EJhhIUGrIoAtworpXh3iIedjaaNPMMNxuhNMqeVs8p1fKDikYZeWw3m8F5wXE0Cu%2BXJL6rnRG7u866NJ46TbU%2FU%2BK7QTPmRpja9xReSjjEwTmEaDQnNaypjnizcYr7WV2M2lbdQvFuxRPUGbwxYg0%2FDjO%2FT9bbTzFZtsyKcLB9QwlunxxAY6pgH45tBmmlEvVO2lSd0GCR2SrPOMgb1nTy6bX4PKpHvWP60D6AN6Fc2jY3uxG9cmhZdvHr%2B%2FTG5%2BNLVrJpqw%2BA3263yIIfDnhPz1EwJcLi5YNIJ2sFHBazyv5iTNyewOOL%2FvX%2FV%2FtjZ16FMsRGcrc6h25x5Yt6ffjf7RbbNB1cd9M4gRzW9pzhOIfN4p%2F5WLd1hQFzsz%2BmLH27PpUh6AtvKlVjga3rD0&X-Amz-Signature=cec4cdfbe7b26112355e70db8e6574344134df5902ebf9b9e193cf873f225781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
