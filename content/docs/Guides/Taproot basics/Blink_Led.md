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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYK5G7MY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBG%2FVvhiLC49%2BzX92uLOGJML5gk6bD51%2BC0GgC6%2Flb19AiEApLAt3j%2BfBp6bNjHywLToasii5HmCHc8E3pXoOB3n3e0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FhmoSr%2BRTtznV80yrcA%2B4UKlZmWret7cCDYLuFBtAH7hGs2rRRTUHavbFCZHAMjpmnEYcsJZyXVU0e1%2FOah%2FXOZV5bSBHAmzu2gLVcUF8LXMS8P8qG45A6vTFzwaWRBczaKmSrZGrSxK%2FxYsYwmsJUYnXjD3QI4mldF8oi69pRC7U0%2FPkdZrrldXUr%2FhZrAqPcHRvTk5D6CRToOwukkOEZvpYfvVsbXV%2BYaspNcpCuAdpWOCe67DX63i1oMJD%2BIvoLMawapokyAJ%2FV%2BfiKMJy0qRBqcfxVAsKkcsg350UDDNs9QEdKneQ5%2FZ5fBaIIch989y1G01XQcXY8wFJ0xXbOdMmjaSX5zLuZSuJcFzSFgAa6txiO7yKBJkLoNdW8gBygPrmMBCbE1Yi1CS8oM4%2Bw5BOleiKYTLen%2FX0Z8ybdp2yu1nzHQuR5nGmT8PxnrpVKd5ejin0sxvaZhJpJWGm%2Ffzvk9ko%2BAoz1mfpG3d%2FxfLgN2cOkyctR2oGD4hgpXoWuneT%2FgTa%2FCJWKuVr%2FV452j2QgPlnyDnBqe%2F6YrnyLBtk8P0K6%2FDq80q52IVpB6uvQ5e2ohOqwEgDN5XGNFCuBbO9eGY9Uu9nfoiLI3iMDPcIMgTMePSc0REi%2FmltM8VZR8NKh0uTUp3qCMMexs8EGOqUBh%2BDDRvP9ZQ9DzwocYkJhCN%2BcElDf2U8cfVTqCBgawyQ2tnuU%2FFqzrls0SRhtkUGVoULoOUayLLzD%2FQSGskqVW%2FUW24h4%2B0KgSUgwEmIKZZY2rfX8oEmQGUcBc83OnuIWVSGIaB5g5rIpM2JNZphrpqZfqzKE5Q%2BeRO%2FbYNGByqeewPIg%2FLUhu0N6Qb2xU5%2FZEESchpQ0d38%2B6SdDxklXSyiyCakW&X-Amz-Signature=fff037291794ae4fbd794bfdf0dfa98570161222a2aa9dd1c172fe13c7e02246&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPYVQBA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARxhA0Fox2H4qGcs5Tf9DysXKPtYn9%2Bln6VAQfN3udvAiAxtY8Dq6agLD4TUildDPq6UgUONfNaNGqsBJMzjrf7BSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefc2TrJsHq5zpBWHKtwDllzqRzbJ33JwOUhQ2lHIca24oBhuulOdrImdyDaMvJLs97fvT7Y6Urbf6BPTfRKN3jwqV1lXHJMWhCZMDZPGIgSnYVpJUsVxwULNp%2F%2FufCqX5BIKY%2Bpqg5LScXB1MDV7ZAPYYT0VSD8EabQq1X3d0kCfvXcUGmY9nfKgGX20bv359Z6kFDPa8PnGm8k2M5%2FLZr1RZh%2BqoU183s4sMkM9im4E%2F6ZcLe3c4cIGhah%2BJF%2FoVpHF%2F32Mk7G%2FMel1%2FwMlyRkEgL1wAbbzTwzdCqzuBtBGt0jALMFjNXutPgMfuL0rsUP1XUQlCzjP9xGefki2uM%2B0HuKp6SM8OnHScblQDkO%2B0r7WpTaTSySebNfheJZO3zVgsOzCXxsuShYPDhmpFrk1sMUDEC%2FGHEL%2BKs%2BoO%2FR94ktLApcMpDZgj9OFyLUc%2FFX1IaehZXNIyqHHcFqzBmjSv%2BynH6LE%2FeuTacwrjE1fMrf5plcz7IE%2BsoV%2BuCLLfi%2Fqn0RzzdL9NcbqpoPLMHrZrey3EsjRsxMiLFbHehux%2F1wsUcNcABF9Z8ADLJkTIaSh7cNpXoZtQX2CyAy7s7dc2c7u%2FqPXngWZs8WiNBNcEH858MamB6UlKuW%2Fb50ReOLVX%2FXhUq%2BFxlww3LGzwQY6pgFFSiD13zzh9J0IBcA29nKW49JXigHG1tnwAQd%2BwYSjlQaqrWPZsNRG8oMdgyI5hbb3774LawqI0vneIupMwdgORI8cek4chqVTn4yz3%2Fns9pCazfTcLn0tLszDbQtEF4L3GSES6JX%2BUXljPVUdfl68WsL%2FllJCqIMPnRCm9z2fExSjtYygfxOQ%2BuRLy9g%2FsjznE%2BJHJZ52i3OwC%2Bu7jAM4OZTsvPtq&X-Amz-Signature=eff941e14528ed29b493f57c9ea22566c6d609a1c1ecfb82624ca53c6d53cd96&X-Amz-SignedHeaders=host&x-id=GetObject)

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
