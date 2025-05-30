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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGP5MP6N%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuqNqlT5PUfLIEf0m1EsZkiHdc1rnqaz%2FabbYqIKbmiAIhAJ1Ooejj1ubnF9XqJG4vXD6SGrJ5IlsrXNr7DKEsHvDeKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuJWH%2FHG7XApfWC8kq3AMHjsMq8I%2F%2FtgqS64uji1ovzJBdUGn4BOnphjuogT7nRTB4%2B19w1OcrhezMrbydQIIDDaaFQUZRHEOCq0ZalpVjpf8SgyfiqrttZ%2BMSFp8Z32o3zrKvQ6HQ1U4VPFfXDyUU1bk%2BuJYk86MBxaLTX%2BptUcB0UfmeDUkPl438t1tKOjloqPpi%2Bpb%2FxNu5NaAIc01z7IEDb%2BxUSQIcQCXiSoncXo7Re%2Fn681bBL2nKKwPShatIZQNuVK2SDd%2FWBHp6Ov12tL%2BDMT8YwxBuA1F3%2BymrEcRXtVbkoWtNeCIcF4BgbUHDPQyPJwm1oR3WrqMVtyICnz08MIQNtFALEMhIadxpD44wxa%2Br1qfKT98EawB9QNP%2FhriqsZ6RqLKfki%2FBtRsKletNKJk0DIeS5zVc0mdRBXaGv86r%2F%2BQguDgYb0kv7etn%2F1gK4S95ndXTNqwFfHiP21aQHyLcNb0xuxqzDvw06lUTrOsh7tRXtbmHF3Ch6TnOFa4VGUSMBBovxdNDRZr3qyuWZpco10oPzeIRsbSr6xs7CWS5D2l4pE89Hws5MmUDvRI0%2BF2MPG7gTj2yHE3wkWGuzqLDaUv6QmI0FR4rh2igr8T05oaCc0I0z18rqzf%2FKdcRj6ag5EAgrDDSuufBBjqkAfZSM18iPFi5yQKDHjr527QsTq0%2Flj%2B8YJequQMlu19STi%2BW0GugrHhGflIJAM5Kq09QUFQHHKq1mbrRVkMTn%2B212%2B9AA%2Bxj%2BludJEU3%2FTcyIAwxYRW2YAh47%2FbrExPiYAArse5IPao5Ns%2FfeuKWWQyzMxvXSkM0rMwCvWlgtSjy06mrr6xQChwpVvPJA1g27ZgLLaiJNZMK2n6dYzNFenXUPvsr&X-Amz-Signature=cb772582e9467cdf2ce973ab3ab48001313a3ed7ff1a05d929e5090b074c1f5c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625OVUWR5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICp5lSz%2F9SxYD%2FwRoADfscyjLxLzyiM9a1C6%2FseohGaRAiEA3DS5L7Ztftvz3g9LvlhzB2FosxMkMr3cFNwZNgyXVkAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSMVJA81rq3%2BNJ7LircAy5fZneZDyQtRrpTgZVbXgrqfDHp6BiYY353LWUVulmPFRQfmzyREE7WQR9ybZOrCF6EiwaGvgD0KdfVZMTE9WfHRXnUds0BwadqrDiRNHfZedKj56ZW7xoUutCCqa%2B%2FrOs7t1YEx8cL89P%2FFeLDYvEs7fL52d4%2BGZ2UL3SxktF7gKEI6YakwCeX85zmuGqcXagIo42OkHo8n8aFkrxqvWKBI7uanCDEtTRJlu1dxS9DVvuAAojguG4Ydrnj%2BG9xUPeU0BWMR8jqAJmWzJrQkZbEFtxmAfCviW0m8vhdMXFUYeGhw8fxYdQi9%2FDEp4v1XLd6zDOFJElRCk8fCBuzZt8kEtGNtBXCgSRgSS3fh4uK1l8JmMMIezDq93DAWR6imcR2toh%2FYyyHciAUqqfvqdwgNIE%2Fi7SkNP8jTW5WJqjpSV0VZXi5j82DKvrBecM63erVWiN31PJtUKD47WYQ6u7MBoZBreMpDyxDBvcSJh7QSkKZ9MM0e7VccEkoTlTA3rTxrSiMEbT7MGfmSL8zYnnFd9ccre2QJqOQzh2BbjHgFRPWrZTFa27AzhnkA3miepkCoHBY4pgW%2FbkSy8UOuPK6w6ixDR%2BgZoP5LM4LjgI2aYrogwrmlaXH7OGjMOK658EGOqUBAJoqzh0MZ9hvuJDu7kMz81Ki6E6jiuKjIIluFzSAuzFydhQa8dmgwiQopCyYSZ%2F4oaT48moDViPPs1VomnW9Zkn1%2FCVryfyb2i%2Fwn11YP%2Bq5xddW71Zp3ZOnMXCGtw6bsc78Nl8Lf%2FJeKKXlAy1vW8qI%2F%2FeXG6L5VGUaLa645VF3NKklwTul%2BW3mY1RkP%2BAVezfB%2BBA9un6IJnKcjPJn0AbQRwAm&X-Amz-Signature=4b1374600629d7427b8ea7b08b9a10c70431c5f82ac31b9fd9a998ce0e9a685e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
