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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6TGEMZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQfg10XfCwW70tlKyWn%2Fehl6OXzizuk5ujDal3IH%2BFbgIgMsllJ1c9WW3wkl8t2R8Csv2S3B17YW8UrTM4uYM9R50q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEbmShN6RdrKT0bOnyrcA%2FG3YZsSotPUV1y7UTPRb%2Bew1vitDuGrei4F%2FWbO8TrUNv4t3nJiNvCzTz5GB6WBOfagaNtps4LL%2FSbaUdj2igfUD8xwHR8OxhJBrMdBk79DQ91Nn%2FxCOWGW%2Fzs2YYDRN3rJ%2B9FnvasuVg6oKm9R0NHY5wix8UGCZA9hvKJxA9%2BoEBa8dkZ%2Fu7gT54%2FaOxRoG2JkBud6t3k6jKgVjddlnAhOvJd6%2FkqWOLDgCEqA6HSGjFPJ7AmH5CvYozdrKOu6xabHqYD2rLwMUkvvCmiSuo5Q9z2sy1hSBxoxlMrTem%2Fr1Vf2gEdXH1dxgFIPZjKikOd3H0FX0LYYYOpYEVMRHovWMF5K2NK%2FjRiwvRcHd4b3L4f%2FWNwseowILLkHcPC6IWbYJ2Cbdvgf6Xoxyx6YrUxR%2FvZ6nFrC%2F8Xe%2BGU2K1%2F8GNUwVUhowSWh5S8dR4rifhw2xFKcKeQYzgtaO9YcuKZ%2FVLncGWD6kFx41OQsndU%2BtRDr%2BI0uEyjivJpyLg5JZG750ydrtXJxkRMM%2Fy%2FhIMXAHEkD14ecXF%2BlQWxksu5J5PvYXbhJ497F3pajpOXgwNeEANQ%2F9A0jZcSDVspj9nWha0x5vqlM%2FmYqQZXU%2F%2FYOrhvgR0qw5HQD8tnuMPOVksIGOqUB5NRmjGSnAHZlW3myd39zP%2BIgprncBngpgWj3u2S8K5syFONjzQi%2BO9%2FKjTDRT39GAnuX0eGpJESi9qPOvuGIinqOgT5Xx%2F0onrDieBq3F3UUogf7Mk5tlVwpIPVe%2B7WdCZ4mxV2LRIx5qMcNvqB%2BeyN08jHcCrXh39P%2FbfQg3B6X2uSWtK3AU6%2Bh7qcSlaYGiYyM7Klh0Kb%2FXSyENvvv2Q0saRX%2F&X-Amz-Signature=f43ba095c41d47e977d30bfc6a6293ff4cff851a13224c57df786294c620ea7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBAUIET%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpyAWtGXTdTFN%2BOaXbNsc9bVkwepXREGpZmLqzIaFLyAiBFw1on%2B%2BloDh6jB%2FdCeY7htAOMz1Ol8TGLXM05WKHdrCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMxMEOETo4a69wU5DcKtwDSrdG41WHNoTYldXL087ab%2B3TdrGk%2Byr1m9ulQ%2BMjSVCa%2B%2BwSWj9P4li0JixeJ2N4RIa6mxgJLiivK9Dm86zGwJ%2FoWwu7IV7ayYDucZXdUdGvVMhfgVhVrUEzEN%2BRagddgLXpktdXSjBYEEZjRqkfh00iKvNGWVI6puRX%2BEZ4F5Zddrg51bkTWPFE4pg1iF3bxT4wJ6M%2F1oqHQKdvY9Agbmiyewh0E3d5%2FwFJ5Wh2N8%2Bq04lc3q37eY8PmbtDW38y7eOrSOqtx3CZWK1FvnOeeTZ%2Be4kb0unCurOEeUm2NfHTVs1oykhuz1F%2BoE3ydLfqSvGMG%2BTrJpBBN9NfVk915spA9zUItQMd%2F8%2FLYgtcMTlFPSvDEMJdTvPNc0Q65n86yC8qSQYCXKuTPGjDg7pHLlu0yUTw%2F%2FpSD6L%2BNGNCGZ0GC6zRDlDg4jkp0gXpl%2F2DqW5FOw%2B4QhKeTwSJqI1f6r2Bahi1VeQVH95MH2SdVKeTYexaoKkKEaeBzw02K24KigguH2X4OFqQJsqlR2KKgo7jg%2FSXesm0y0HUqW%2FsOY8Sbq73cm8VJeNSx%2BpF%2F3rjIePrvvvq%2FkhMtcL0s6U1CjdGFfO8edqAqmVC3oWQNES5sX8aGdO1xrR%2F0Agw35WSwgY6pgFKtewShwcvaWTPGsEBYt%2BBfun%2F0%2FF%2Fa6vFKGU%2BQS0mP1m76X0FxDq%2FupawzPV3MxAsZJaB1pRpDb1CetKdpA273pONUuSJj4Aus6Vsnd5mSqoCdmcbrTtREBJHK1YVM7%2BYzNh4sfL8rLzXd3KgtZuLDsHKFUgvZB0pi2%2BeEeK%2BOyxqJBYYLFgYKr7si%2BTCG7qlA0lNBMmcdow5zK5Edy0aEW2ymwbC&X-Amz-Signature=24be857dd78a2eee5d35f846fc15a01af137b40699e34164e55a1a94e513846a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
