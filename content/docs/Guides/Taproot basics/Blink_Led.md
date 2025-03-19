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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHJNVKMO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIC30Q5T5Bs6TBpUiXgZ3C9xdymTtaoxyygmYC7mU3NrnAiEAhD0LQVuWgzTYNnataPk0%2Bi%2FCcELJVLi08ITOoOCdncoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDqsPcQLWffbh0YvVCrcA8yBwlyIsKdIRXUr60Vu7t2f1kvaSHkKdwOcOG%2Fl0b5o0EZ%2FGgQ9B01T%2FZ22%2FZhE04hjss8Pya45B3vhZqV4Br%2FmNVJ3bakYY7H1XX8j6CfLXCL1KMz6JsItGgpzb%2BxPysLzSbHM%2FV5AvXZBO44tz%2FgSrNOau9nBTwy5V8vrt7%2BtL9HnyaCu6jq%2BetdBJnHhjK%2BPk1gr9TE0pdfpZmhNtP7e1Evy%2F%2FylpO0IsQ0zrfD%2BBSNIdwEe%2FTObnfjlGcjhskkeUw%2FhwAnZhkrAW8urw9hPbKdzEcjUp%2B1d7elnyq%2BDCHXCT8LaoD17JchQrbatGPvw09jwN3JHy6BdaycaNRaDiBMuLDPlEJg6lRDvtW39dtr87A5bLx8LiYGTuETZczml2chPhxgXs1TqZvNf6sNGm6ZaaMYH%2F1gVdjXw9ykDQs9p6yMIO3hnHixewaf8rYsrx%2BeL1YnnslxC6wTAYDxraxhO%2FZ%2BCRYVfWb0Uj60oYiJqIIdZRsV7D2XwJtuQKBedmPSx8eSmHZWzy19UpRlHPdAar7qd0aX8wpsO6DTopB5Eekv8Bb6bO9Io8Kb8y9q91BQnQYaRaZNs%2F7IKFx7xB5iQel5QAINaejMUrRkj8EJaLqi1PBkpeT5zMI%2B8674GOqUB2I4LTN%2B%2B40SNvlamYBUzJrTWDLeECD%2B47iLRUyjwQTo5rptt1C9Asnvx6zepdymrbeY4xIeMZfE2oKBry7SEO%2FMqP04YNimIYwPaMLMiWwX83k43h1RE1GpafePzt3jRUYgK6TdcRTel5O087evAgSHQ5GSF0Ni15OxmiOG5pozed4hqiOhFFV8kfDhz3Ej3peLJiOJq0%2BWCdX2KBsFKrxh2dPdo&X-Amz-Signature=522f2303c8466f12f729a0a964e2884851e7e49f706617695a9553ce06018fe5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TWR4AQL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIDK7jnoumycQ4%2BDMXR4OOf4FBubfJxV9kZz1kXVvNkIhAiEAm6qQ5WvUs8QhnqWczGjPiUTbm5LDbphDCHyvWHYSMfMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNqynlEKBf2t9JEp6ircAyKyZCP8%2FAewKsjaPOLzJlOjHOgLW5ngVRSqOMBecGM8VuGg4MyN922LXQgbydX42WTikZOZfGg8btQLYV%2BVQYp8tzLMf9eQrAJN%2BVXWNcYpmHERDp3CLn1806Xuo2cNMmzt%2FCy%2FlEWPW%2B2Kgyq98AzzzrvltD9nbVS%2FHAulvJOxyIFbkEqpezIHeXna2Sds%2BPH615kdPM6GLOvkkvQZ%2BwnvUW4Aswvq0s76eBJmiaLh27k2QwBP7sGMIl%2BT9lAKrevmhxY7r7AtLHxuQr6%2BU%2FzbMXDNO0FNflfU%2FGLLfMxx4MsHvAS3JctW3L0y4Nd%2B%2FVGRnUki2TGEPmmTasggGOSp%2BCw367YzobW%2BJKP1y6R7EnLcFYEdeQLWEv7sK%2BsWRH1FTvlysVEF%2B7IdgIMckgUflxRLFj5SNifsVC1yHIst%2FYNW2QBfLLKA6lJGQVI60Mu3Vpd1f2qmZWhIpoEVWHiZCBSnY6GYr8UwBBE8eIskZyv9TYh7V3ZQ%2FCnG%2FGQT%2FYMdJwWAMLDI3CwTIAG%2FIV3BIIALslpNAz4nonXgO%2FFqmEYU9EeZNs9a%2BrJgBVV0eGWtRKlMirMD%2FLXw5gDGiSSlJ0lgT47wWDxMfLOeRQw9xII7iwMlxZVZr9S%2FMIC8674GOqUB2r3m6YHc7A15SSwLpML5kvYe701v2XsWIHjm2aPcgYIv6TeOuL4mKLWg5FCwBW5NWaeoML7LtvgNZp%2BPzWLQrylv%2FCIOM%2FFqoVoHZvN0AbYRzofgXyldeokkLLrezo92dz6j91dQxtQTKRqPXqEX44nR48iB04ifjZanwkeL8x7NJKT2J8RwSepnSUNTTYZlCsj5E0u4JPUQIrLdwIm79WccaSie&X-Amz-Signature=4e8a966b4aed620b0dba4b6959fa7d314938ae4be9714e693984d6c2dc5bf38e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
