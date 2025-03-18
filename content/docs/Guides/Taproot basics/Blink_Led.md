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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL2WDB7I%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzq7vcxqAdJnJYv22IKjd4TfuENvhB9qxhthQ3uae%2B8AiEAvmo%2Fina2%2BHxTTKo9hfsthbZhaofZLNz4HhlZndZ%2BnfIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDODc0tvAlkeMOPJIOCrcA0cwHogWKuWAu7rm7UcUK%2BUPvKzxH7ZRsxv%2Fdt2lM7Yu3RxPNMIIjkoimJhxPgx4WgRB%2BqOcCKbZchG2143m8wRVp7y84KJSXqxqxrnki8gDHo1g1BTrvKVNXWfY3G3hNezQehC8vMN4DuPaFF1OTePS52HDAPxtczCg5wMuIlNikIxLX0DGYlqZQP47Mx9l3NOPvFkEba7RvLwzkqK%2Bwe7HLa2MfR2IgW%2BUGEGKHsYOPlGe1H8D7t1EzgpmhPA6A1nYeUARc4CENa8rRmcS4Pd1vTOQ7HuVT2lZ%2FceFD9hhLnIT46me9%2BEjg8dJW18TaVhdPk1Mk53%2FZq8N3WeFiu0s7bQ0ySd23UyDyp6RiJx5mehfoVYmXOLnZnVEGf3Lu%2Bc0p1HnSSTsaqEP9JwJhnwU9kvtKtwH4hh6PD3AKP5%2Fd%2FhIZNy80uiU39WFj6mTL3EpHfkp8sSy8tm5EAz3XgurD4YgaFmLx%2BkdAruFn5%2BbyRsMRlipokyX2aFnI9Qw4h1QxZEX2MpRIZ3qA8xNrTAagso8axzUBwtE2xbI9uBFA7W4648AgnWuDzAQGXWhQRC%2Bj8zTimvbzm9078P5gz5nnwvUJ5AOjE6qQiwXLoPXjpAfy8ywAiRn%2FgOlMKLJ474GOqUBZdv5RfoM1QR8qEDU0uu78ey3GfozBwCCeywUU97Q5nmARJapJcqTJy4c%2BSUrJ%2BB4AgSNpvoKH7VWcZAWyhSysXHGolI04IZvD4KeV1uNIUR%2Fcz3s870wQjALHfvPmod0Jq64VaSsQKgULC1n1q41N%2FL479dPhyVysIun3QjFntJh9wfG1JLx8BwVaGz87EHqFyJqsE%2FfoCZow3HHSarOsmYaexpB&X-Amz-Signature=8d8f1caef7de8860396a82d6b63408c275d110b83e53344fa92ff7b40d7b1dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AGDXQBR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXtjM7fPMvTkGH8ESjywPMJkBKs99ft%2Bo20fGEaGhX3AiBVx3kj72%2FsE6v%2B9L3DoIvlLn0vMpu8FLRsyC2v7lhhjSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMibyfTRGtEszsKScVKtwDA7lo1GN6GK%2FqrO8gPnClULcYCfgQTsjiuPCc6RJ7nS75vgUsgVbAio6LGk3YGrT4rL09pZR9FFgL1ZJlNULtpLoplInqqTXJpbxbSECwrDJuPJZZI5EE2ze%2BlZ1swrp9nEjQktR3jJCE%2BBP%2FBWGl1b69hYmBBxMY%2Byh%2F9mKpkI49knSXMs3nAwtFoCrUmLr%2BFKgw%2BkEoFz8PBS%2F8Oz64tOEp5jLfZ9voSlh40UGaabZPjKUFppvhmghx9FAxK8smLtteVgvk6wtGTlY2JSix0NzAVQj5ZsdfXe0JKB3AM0rFjk4eCWm80kkvNyJbuQdpyiAwfaEFs0t7F9T1LhznX1gmhmtgIt%2FPSnCHxwcbus2J0gtlAyyYPGVAY0BR%2B35o6S9xLzqWo9sTqLWU9VdoyAOoByvLJE9iQYPxHa3%2FfucotmXeHRjEwV7HTj9fUcTS%2B08MYuiO4aTUT%2FWGqB6FHZPpFmTfg1xWUCpLCrIeTAOBRI0x2S7JUT033OWoCgaZP%2FCdBvXlDuE0XPbPG%2ByHItPfORjJtTLxQTxqSSwFtm7gJRa%2BgJspD5%2FvcPmuCsutH3mbgT1NcK061H7H8RCX1kmM2%2BowIP7E%2BKoRwY1EjMdxb4vptvjg2eqdipEw1snjvgY6pgGEbB7NQP2zzuYuk%2FsR%2FjiLcFbyL80cgk10ncn%2BQCszRZuN8KJ8FsPllZggn6lL6UWa2fT0NQCpUM5sw8lyJj6qgiqxK5n6CTO6ecvPL3NSDfNSnNrFJGMaZvZGbcoZJbQ1K0ygZLfd4ZHmW8p7RvAUqgE1RRtQaVoMkCbaksVmu5lh%2Bvqzb%2FV2ES8H%2F%2Bg0FbIIbls9YwNyYdkXvEk26Ez3GZl2TBau&X-Amz-Signature=fd0e1f968dd3c454aa339323f314c4f1794500402f460aa5186e2aa02925433a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
