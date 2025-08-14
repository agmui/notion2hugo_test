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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ICJFG5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm7IYQIAh2QpcLyUbqX6a%2FvpEQNPQoJQdwkI9tsqqNRwIgTYeAjlAlvl8KRI8LNEmxl48u27P06ZDB6huN96hOqNAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP6QaSINOW8%2BxwDA7CrcA0yRRxffL2MRGuzn%2BshN8IJofuh2UaXZTUGAk5MT%2FtC8odh6yLn66VWNpz61ZoV8dv6VTSI%2F32Co5C9zipfLkHaTx%2BWfbGdC%2BdF8C1Eex%2BGk6c3SIOU5JD1L%2B6FpAMor20RNPma3kCsNVah9CJeQljqpqG2Wp7FIJKNCz%2BadKWkX%2FUAN8mxZYGhEc6kGAUpGKGUlTNL2qH6nVQqOaqAunVSpAHJqHtwhUsPRYmo6vLIAD2ls6g8GDK5QTxPV1GNtllhV2ylcBO6uj8Vdl%2F3Z9yz%2ByYovQ78qUTzcbxbN4xf6E5cUVxB9aopxcDBEcO9FLoHPq18JVyPkrb8DaZHrDynVFOvUl8WdgXXBa38QFjEhOL9qKRNhQ5g6Vogo5VhCvjF2zggnwz2f8mzprHooEFyX5OXjMRgyHVf5s2g46nBF%2B0I5SJy0XCuFikJnlYS%2BVHMtWqINTLr%2BSNSrgbjKlHtcbkPeP09twoZRA84yFFwunbT8BY6mW%2BYENlwhL2oYsH6NAQr1Vnvr%2BFTKsqDTdiculdRpmnG5tspi3UumBaiHupEJ%2Bs%2FgTrUE7XGFqw0W2h4FUnmo41ANhMf7kzMR26D%2BK5oCQWyCRrDGa0V4RjxbOjXd5VtJ1g1hWXFTMNyu9sQGOqUBclwyXKSu5VsF5jK3fLxmPFA9Dtu%2FKQ4zauyqKl978cfAUWWb8WP%2F5Qea%2Ba%2Fyy%2Fa2ZfEWdW8LCqwJiblo661molIdv2mIYau9cngERPjso7YRHYuhE0U8y8wHMKtfE8HfKJ49LT7lWVjuKKvfFv8wPIo3a4vH0fyg5%2BXWpnWVXtlTTu2lH3nmiKLFhVyqqKVEyutyP9MlTViV9eWF9eMf07%2Fl7j1z&X-Amz-Signature=d7f081ee5de116a8a8532e49a8822aa3dd6666302b913d408ba6d0be0d81efe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VAUVW5Q%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWC9lYYbzfyiWwISiXcKou5OiI3LpApS31tGuhduyEOAiEA22DSE194HiCcWq%2BdEfqsiME28JzemaxJ%2F0ZpwpTyQRcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBgk4SrQYYohEYyeuCrcA%2FZo7jr5TnNMk7ks4gIwQX6r3p%2BurYfeIL2esqXe2VsOTMl55zxh9OCsFhm%2BXA3LOzQHv2efG8QM1Qne1hWTOr94FOinMrhVpOLtd9Z13ULmohMtq5zzBbN%2B5MpsnFpLAVmXyTaQDm9gFBvFoIjqnr0oBQB1DY68ZxcdS0JozAW2VPtUS1p2S8YxOdlMEbxcJJtKZdXeJZOKEG%2Fcvcmun2mg79IwV34EWNWI9ze4parbSwGhMmu6UDmC4K7D0A5K%2BD3s6c5H7ValuZErfvJ%2F97YD8XT48wUmV4hTvlaJzhzq4XdvmAVYKC4kFiQbNN0IiDCatQprqAZeudabftXOxdNhCFvFYvOYfcb1echyebF1zRPFixkI9wMHJlUZB20EBaGXxB%2F%2Fzl8W8%2BeOVQ752wkefD%2FVl5twZmhfC%2FKUR9v7%2FtIwZCR8NTc%2Fxu9sfpwgw7EC8HAlEsC3rWZ9YHpmhjTGL5YT7IAhXvb9FRKilYx9Ukb0mD7F42FAftvFwagFXvhnR9lkKmjZB3MpS8Lrf6weW9W1kPV5qJfvYiYnZoWjK0w1Wx5cdZOTMM5nJolFulV18yOjZ7g3GIKFyB%2BPQVf24B%2FkUASNHDB4BNNGM%2BRhcvrZXtJ%2BSF2mOXZuMIKv9sQGOqUBbWVQ30101XTKs5Pr2VzYTTFB5e9wGVNXdg7VADjdrYmrPAuCWmRt1ZfOSnMNORf%2FmlCLzTx9Zt2jxczk01LIQobqorb9GbvrPodFnxgYq8KsY26ENlkLEzuqBsCcOXnGAfLbki8pGREmSGuh2BKsRY3rQHp0vgEs3B21VWMjuuC0VYM1UYTvz0BPYNf2o%2BMgyiUkea2wJ2gRpKDSq%2FwIDDZjqydg&X-Amz-Signature=86322a9433f54d9472f9e4442aa72ff091f00aae4241b9e09b3ad1a13f0e1cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
