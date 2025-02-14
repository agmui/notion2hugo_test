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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYMRFUA5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHMst9r%2FB0LPt17MVKpq24oSFdGtMQ98HjexEGx6VM5uAiEAyIljSznLRldmxhAycbmSbFD49EmzJAGEYKlMyTcLkT0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDL57azx1NYg83L9URircA61h2W9YTeGxUc5dRaNikuuXSF0rZ9xZBcfrrLyeIbwJEbjra2G5wVdAuiYPwUaZvnx36PZoQ7IWKHZzjYIkwgpbvxBbfl3F43LO6LCCfD0pSgHkRifGmfGlZsdGexVqLiePmlOFYPpzcAAB6Jf6a5yXborGWeEK%2FaAiuWUuHC9kS8MNpgjdCMlEfEPK7tQY%2FwnKQ56lQE3p1ET8TeA4Yt3jb2s%2BBEJAVcGaOpzO%2BOBL4R0WBbOxrFvY2OhlCMus%2B4nj6Yt5UFXFX6dgJ2iSYg53wofgPIbXqhsiNvAvSvBLEU%2BUHf%2BSeOQmQlsFY7aYhfn2%2B%2FSCcDQQMBjT7s975iYMc90jObAA2LehSNBx9YYSg2SReH7oZyZdFExST%2FY80%2Bk7F6DFvZ6erQLA%2B3l%2BThFc0sHkOEhKl1m4JWKBmXbWOo%2B6m8ttYiJFDTxvYUD0V4lyBVeEpTw84e1yzmqtvtneQap0cV6o9sdkz9eSkHBduTs%2B99p%2F7wPMIh%2BPwj3lvNKWybmwj6hs1r6BgObxET%2BoQ6NIA9OsHMCCxaCwZ9QC2Kcno3DDGItMKVx1qrGZrjCi4e5TZsw8EPaGjb92AGTocNTPAPmM6mk23Qs4GyYSjjcqOr5Vc3HbFALDMMCxvL0GOqUBI9bl3NTE83csUJ1JSggzWNBwy9laY%2FZmY7In%2FN70YNUqYeLMJ8op%2FXIfoc9x2hI0jtaCZ5oq3hY%2BPZ%2Bh0h42rPZhcrIFrQCC0m1RuaqkoHToL2A73o00mkvliXYPaYv7qnjJxLAGrpDL2HY7CZEgWUqRfe18pY3ViG5CLUVcdC65xA170w3x79HPaJKexYPghhSk5WRlkrHCftCefiAsNQdChhx7&X-Amz-Signature=b52e29868f61adea6586834e4034ff6793eb4309785df3ca5505a8c6f78a3a30&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXL3TZN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCkhJt9HIywv%2F7BEsR5Iix9grvnaO8oHiT1qgN0iH6EUgIhAM8jA5KlbEb05biSK5BV4jHP1LZHisJ9T0cxvoKHxBSCKv8DCCsQABoMNjM3NDIzMTgzODA1IgzHQ%2Ba2pohU0pFMOAEq3ANgqTeql%2FlqsZ0YQBS0x61bZm7RS1lkn%2Fosik6MuQATdnISZyDFnPMWTtIw3R5FP4zWHjL2M4uT1vOnp%2BHRvPsrNx4ISV8sqT4x7f9Z4ulvv%2FG3JNomYPRQ8xZU3StNZrFohlXl3BSfc3djllfehCYVr%2Ba5Z4MchfX59E03fKDS0ENcZiNO9Vy4LIJo97Wxe8sk2PzhZCi8lDZJSzpcuhOvmYdqxa717IatZzDsPnhFy8OfIQffouL2mQTlSMuT2ws1nOgMa5XdKS4UjeMnzMDVuCZcVrB8Xuwuy7jq8dXHGCbYWuAtiKbCme5rrIKtqozZFFMJjFsI0IXVqcUELWIntModdhxyMGvbZiO5GgaStPbXGMr1flb7nmDjmXVIY4ygCezr3eQNtvzrMWCLHBXHcO%2BP%2BiViaNtsSJhBbzEmc8PbwOX1NmU95el1TCsX11jBiVVA3RdnDPEokuyPfvLgW1Hc41gepI4V67E17EHGCzFbhh9%2BKpqYXSdhe17sHx6grNaOTdBWRqvYUAXUOMaVm71TtyFCH72fiXQnJun1e472RiwlLh6FPbROiUvnnaYtjRrgiJfVGJ%2BvQZPBi6X%2FqtMDItD70j6lBYOOr8bOt2qtgqWZRxVg72%2F%2F1TCBsry9BjqkAbyjp0EpC%2B%2Bd4i9c63WFhPHgVUfn6%2FPJiqXaz%2FzB%2Fg45FLMBk%2FIDgmTPj8MtUqBBJ%2BKHShIcNNKiIPE5O252dWW7klJZG5JDmLaG4AEIpw%2FMcxCXC1n7b59Dn0Q0dlCOCGo78YYrj7oNEDtxNgGjojgyGcOQ%2FO5s30BrlLoxvbUPEaDwvbIdrJZigp7Aumq46213yWgGzJlMO0ITNUs8CX%2FWpWk6&X-Amz-Signature=3bbf0242b43da0d40ad88d8fe20dd3194cbf12d64fd10f887b86489ab946c895&X-Amz-SignedHeaders=host&x-id=GetObject)

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
