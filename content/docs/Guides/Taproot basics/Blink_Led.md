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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJ7V7FV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbqoFf54srKAGR1cCIclP3vKKf3s5Jm%2FNS4lMgf04xNQIgOY7%2Bjxs83KGzQhB7eqkWWQn3Imz%2Br2hqA98mVbqEsRoqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNotN86I9Ph7kRfsKircA7NrYln4CAvJlCkuzSUTS5rbR4YP1J19xQQ5rzJk38P9c%2BLannVtWSvOU1oECkwl2NdUJjo7ILPVxLfi30IPkjG%2FeEO9epPFhrUTbRUfi7TmayYjYbyRGMLb8oUySMIKnqywffoXkZ2w74nJuqYl2gJ3fNuHPjxC3PgyEZjwEQfnjp9Jvh4uMGIH70hH%2BHMkU2X4jzMxZimOsl3aFEtJqdflzBtLknTyKLMSBLT14M86QMjmxBWPx5kQc19WtUIjnBU15tklxBRWsn4diRji8QXeSNCp5KrLApa3cVVfodooEfs63IAitlm9vZBIbeKLyypKErc8rdtGBj8uyNzhdb9jxjMnXoaQC6LWZlO5CcJhVzCOdRT7ecfLIWv4ChdDukIlyElh23ppH33CiR8Q8OSM%2BRC99d5mOUUt2EzssFeKgECfV15BnBisxRMGspDzcdCY02Ks9uc%2FgAAukC%2FHfMex0ZgpOXIs5lz6W9l1nr5lREG0fLHLje7WwRCQVtBlFE5IWGfKAfCNZKQrfiw9LF0T5awqC63ic9k%2BbV6byjldAhm0RYGezUF9UslIhA8ytwSW7d7V7fmHmcRDwspcJ7kyBNiY9fXLC0lkagcOvjoDWociFRj3gqtBORtVMOjA%2FbwGOqUBh3z1WxC4TJ55K4sj0GbIvb0K7g446C8v8tTKcxQum%2BvIdgAff9OZgc7EVBjJGjhjA7CmJ%2F2losZjOtNRQMXkeJoBXrbQjcBRc9duTfk5BVQOlev4JDEcqiYMyCEvosC7gFht5QYoFB2%2BBrDXqVKRWjW3A%2BB%2BIgEx4CrHZm6zCdX4P%2BsETBdwRCp9D%2F%2FJD5guhQ%2FP2Toge%2FtS8L2V3uJd48pmZal8&X-Amz-Signature=16aa4a8ed6ed259a5480f1d1a53d45877ceb1dea1e56de353fc38ccbfa709c90&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVABIWVL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2Bj5QRVyKATmax4eqTwm2Lu7a%2FJ2W6J9VtLpUTQqsAvAiEAz1qBIG019EtV4kpCIWpuSQYu1Q2nmLM54MCXrHM3aUoqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGr028V9BbNzvil1tyrcAwSCKHc35lRkVRWLdrSZgJ%2BWgZg4otne8wWznygdG9xwOXD7mp5LJvfZ8ahYa8exhPV0U6e6wAeu0rAng%2BMkOtz8QWU2YpjJtCGt5U3kwZ74pKCPS3PFGgbrUH2DH%2BpJKHjneMPqeDh2%2BpamYGmHDtr%2FVzrrKddpnoOEhuBQSlDfTDCBMC5WuzbvZdK1EADAP1Hp13Zut2NAIcHmjpwFIH9H6LskY2QKoRLnmVwww6qQKQ88Nh9bGVjEAi2FEo%2FL5O1A34FcO8AqQ6aNDIYfC7lRpCNFzpNSlHXwUXZH1tB92J75mXPTS9vxSua50S9vbZfVa6HWNTdohpB48D%2FNw6NcEcoKXx%2BPa28DR0dVRJb0g3I8iyPXvp6oSO%2BCkAuThr8ldiHi4WcbKYQy7LuvseQ5UcKkXUpwf1wKDVA7rlsSUOeYV%2BnMfj08XbJ5q4YPIq58vrZP83Zub%2FigPjHvME2dgr98SIFTv5mZCllNyO%2BMwilY4toSivFzBXLLxs76ULdtXkqux3fDTQvBaY5LEiiDuTknaxyVAGMim2gCY0onuOid6ph1Yo7qGgv42CTLLAB1POPhF2ugjglPeCSbg2V7B5FZ4THD3WZ2BiYTd%2F9CLnQ2mcyltA5jOyP5MPDC%2FbwGOqUBDUXC82lgnmaD9eBs%2Fk%2FJ0J2JDiYrWZGK4M31FvtcS%2FPbpoarFMeDRhO2VlF2XyZPERQW9Ng3iNQoAz3zAkWGhAvRwD80reigAguthS2g02%2FpT%2Bq923JKjaClazrU7RdVguFvhAzPtBDV6gwBtC3UPvkdFnG7pJqWZIB5Zpvvy7HM8SHksJ0vUXJVSmMmyN%2FIc83WctSgW8Wed24lY%2FKANzsSZiut&X-Amz-Signature=338d5c1f72b2763df5536ebb850b850f4a5e26fbd27ff7579f60510435026a07&X-Amz-SignedHeaders=host&x-id=GetObject)

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
