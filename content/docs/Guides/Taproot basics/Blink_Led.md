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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLFLEW6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICntC5NCW0g%2FNkRMCfK6iK9JFGjufsWSvUkmIQaQBi20AiEArAlOsIOalxXpDtoyx7%2BLeEjTkO308d3OfMaxkp2dR5kqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7gfoYJBqUfDWroQircAwblBVMXMCIAvhoXdLAq4yW6%2BxKu%2B%2B9ZkcJxSkbgZ8zyRtFf30S%2Fzyk9QOypXnexbfOhocGIjkwgrfxKoQAYudK9i%2B1iTXt52xKolEbE5bo9QqLToW4vJp4ZLpBFA7SZE%2BL%2BqZWaav%2BODYIc9QWV5HpCpC7ndZ6lq%2FP85yekaRNDmMOfEL9ASHvrNJz0q0jgmGEqHgTO1q5kMMHgJORaJ08umTXGnreVbOmD1eTh2SCv2nMuls9Lcwnubs3vg4MXtUHpVHsYuoFne3BKqCsXH6xt0rC56QoTv48EEke7zC9xpqhiYblxH5D259dlwLuV07eqH0iUBS9QXDoja6ws8WEqyvjONnZnHh3a6rj6KQd0dTbwHDH3Ap1HULYN7a4qkaKO%2FG5bXz0mCDITVT5IP2dcNYSlEzQgMTHypJvqepFXJZYkqwqqczmVk%2BBjwp%2F3S7bgGN6rB7eYDzX0DqrJZDVsA1JKOay3X9UHAq1vEdbzV4KKRGEdm3z0gX8gvxClIGh3D2swzA2dmNkSByFF7PfBD3XEYC6AJurV0hiXfZGR0a8mmFbA%2B78%2BXtbabIImMUxPWAXtUdryo%2FQ0RWU%2Fan0tuhY4XBEMIQeA88%2FfapwVpsMjA7X%2FN23W54voMNz35cQGOqUBupuIzVJjG6SIT1WzklIcJtSxQ%2Bb5tSLer86lhT05BrtAzgppCfi%2FtFkk79PCbTLZwtoYA56%2FxiwTzB%2Bcbe6Bt%2FjBW4CV3Ta96QJDZGavtTArbD%2BiJJHo4WVoG2IyDt1xFDIBCOryz0hDUIyB87F8dzz2RWIhifV7OSokaa2vJ2uf32z4Gn%2BhHh%2BvIfx7oaPWJPcHLI9845dpIVk51rUWHlxEnm1l&X-Amz-Signature=d0a4f94c0c07118b6d724b6ac87c4088f91e83cdca50609ebd33297e687ac67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4RGEKX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB5ORrUqyxJy5ufn%2FMS7XFi3TF5HXMq31UAGNkwju%2B1QIhALcZ6MN11wqMbeSqAy%2Fe48LiZLjGw7XTmQTNHc0XmXgtKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzqd3WvOp4RHjsNXMYq3APsEKROO0CgZHYBDxMG3Wdry8ultW5zHFH%2FP2szuoy001bTjdGsVH6hgyQfkl5D%2BNslu8PrXRj1jK7dVt2yw9SoGfJPHkyMKBWBP90loqhL4cWKSexiv90dIAE2cWuz6JQg9YBGPnnSKPelKFcNoA7R37O%2FnC1i4q8kENxD3ErHMc9BeTRuw8Rsst%2FypOUqepo4oU82FJ%2BepzpusRMzUcdSQcktUvB3%2F7ilKzh0Lgf68gh7dpJAkHSenAWBc%2BVaBmn3UG1wklcZlmYEqwTFpTRItYiUaVMm85Ta5R0nymGfWzmnUyjL9%2BCqJ3j90NHVYNXPT4g1YitdZ3%2BzcdjXOiE2g%2FqVg9VX6zGq45meVsnkssJDbNFMCC%2FOFDWjE9uxgPOvWCx%2BcZgZH06fqd%2B49f7%2FVY5U595TcbGQogMVoK%2F0N%2BkV7Unp3oo%2BSlkR1DJ02FogFL4mmppi2nyDTDznn0ev4i%2B6901ACXjbvz21H7HB%2Fa9ulZ5MZfPC2wNrZizt6V76%2FrOc7ELuiIf1AQjuFXAFEkvlf6YWFN5%2F%2FwWc39z%2FTCPI9LRtSmr5urw7UtdonHK6gDoE3mIC%2FW4Rtn%2Bjm7%2BOfmOQsJoFr%2FFQQedxmdmSb%2B6OoPzWYHuTHPjarjD09%2BXEBjqkAcXV7tE5OJB9KB2owtXIWtMoOSXXLHKc8rQddM8FTCftoX5VT1%2FGWNsBShGf0zur%2BjoiASm63MS%2FbusDnCctLHkVZ9tg3pDe2uaUOBm8lX0V4w6t4RdwN%2F92SZFP7N4y6anlyDtOW7WtPtcpJY2S6q%2BF%2FjakGod5%2B%2FsCo8vkU6isrZxcFvbTpYACTu2KLPF8olgl9Ev3PsRtl0%2BTVNJYshLdDxem&X-Amz-Signature=28a0c27ac1b64ce4f8255bafbe4893ab304450d262e987c7f5bc32801bcb7907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
