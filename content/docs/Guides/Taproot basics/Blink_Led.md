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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKVL5DAY%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCG6VhCKo%2BUQQnGGjnGbiXoVhbYZxXBXJ%2F%2B4TVMUEQ43wIhANOsRI9DhuyD%2FBafKwbzGP2W0sC9Lv4Vzwkm8De2VWwVKv8DCF0QABoMNjM3NDIzMTgzODA1Igy%2FO8R3dbH%2B6OrZ8ysq3AOcvw6FRYLxxkwMyUqFg%2BYDFMa5cd0jRpIf8gv5o4QcNAWpSLVgZDv4zME03teixVba%2BYDHpOaAbEtOy7hGdpK6%2FAWxBsdK3z5Etl6FndCwNYWqGKATAoS0SBSGSoNkzJ%2FZE3Z7ncY0JXngO45k6%2FtAp2%2Bj4A6DJqXIAQPTb5W4Mb1BzjCqzpltkBJkBJpYzFiuZ79q3rloF3sreqYu2A4yivmCmpgKsWQ20yw2TGD58MnQTpTmPKbWtG0RWeTN0FAXtM2f8DP9O02mzcprEgDMrEWs3M0xa4UEVtvKQjElWICOJTT5RvogMAvGbAhWt1YjftEdWnCAj6GlK4wn9QxTi4utOZQXkiMHURUmlvHLlji0vTFEFCneuS4aMYs60TV%2FZNBOxKrtGRfWol%2BzdlHvYYCSlClE47VReCTnh2P8ThPEchAQyPxpMcDpTiOJeMceAIa4GF8rElXN6cKvunYr066zU8y7YlGnIfeF4ytKH%2BibDzswcTaG18lvXG7uQe7JDrSnShiH3jXHkywDKYp9XPTI3TeUbVKpj2gUeEnff%2FAASeeJR8lVfCA%2F2wJKWbP2O9LJtzD1a7bmlrn7w%2BA%2FnsYx%2BmwdA1nFjIJBmf0QvxpETYrNxWKthRJdrjDNnce9BjqkAQk%2F6WHpk9YBbSECj6p7rONK3x%2Fd0tVFR7TUktrxeD%2FyKnWLvaYrgT4Jxw41xfUp6ofMgC27CeJjK%2FAcROXp91Q0BlfGd%2BXslby82idr9eYWEVmzDcICOYZBYChgXVoI1ijjVIK0mK1SpAqIvTclsriC6EdgswGuCO46Y3LuqGXx8zt23o8TkPHa%2Bmn7JzBSBKIDUglA85rBJLMe3LUfOtU5BVnf&X-Amz-Signature=c6c83166dd9b09b45bf230605d3add334825c1d0cbae916a2f6b865c04328753&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q76WB355%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIBguYZhNC%2BnofuCfG%2B5sh5bOXYIwlq4YasgxbXMbXy9cAiBVRkEbxs%2FvQD3iOvizC8%2FpfkWqArUq0TfKfxKIxW7Mpir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMddt%2BFBzMKnsB%2BweBKtwDZ01%2BbQS75CozAqBCefBSQ325rMw5Gt2jUAhT5lUGTofbPByr3EedN2PypbZ%2BMhN2gAqZ%2FfNuvEjp%2BPtjEtb5N6F5g4qA6YNAK55JmItMMf1diIdVf7ge2TknXiEhjaimvQnGOw7Zxl8qEQp2CkYQO3xUyjo%2FRa0ACOitai7vtYiJYX6c3e%2BbbeCmk0f4tpzRQlqZl%2B2Uv5nfx0NS2xfSQrnW9TpGsGLyj1MVAtXpmhn0Q80HK8Pl6Q6qbXX3VE6FCWNAPCrBCHgdqse2Q6SSaTSXFUCQ7UX%2FR3vUrMXi8jyKynYfUxE09E1J%2BEew08ZVTgaWJsqNWUW%2F1ybCmGbZNNJbq5EogUTdlVBlgY8N9jBl9yFnrhSgAyuTohA3CVflk2Vu%2FcFwoSb4Oeo4bOYewU8BljkYlbDfFiHA2YpyzB86ft%2BhEhWWloWTf0AmZylLwaA%2Fz861fwOQ%2FAKzWjKfM4buMFqhkFEM01g3Ks846qsZHR6HiDBee9CmArN3Dl%2BBbElXLVy9gjkAJlU%2FcUPwSMGpxfDO0MT136EiLJZmCWA7%2BvZ12DYAT%2BZogLvJOqZgp69ooceZv6WiTleosaWa3kALI6DBY4SY%2FpjtPjXgyiidIlVqJoQ6nNnIY6Aw6J3HvQY6pgHGOVMQaFEY5qfsT1JIe2NnpTdiUhfiY3Fdl8AdMNgW4tql43QkSITV%2FkF2UQtnBjLg4HfhqHrVinyd%2FpOCIf3wQCo4NGNOeaUBAGBBGIA5Q5ziZE2%2F%2BmYVSFtffeKeJlArRFJyuffTlEKKU9CxdfXr%2FRDWlcMZySWU8bBhXoKrwvem5zT2ImP5E4J9IhPi0utY2J62JvYcWLoMm3YZwbjFvm1Ws9NY&X-Amz-Signature=da9f7e76ad5dcac6505f894de8c80e80831d9e76c4178712aba5b94075fa4e10&X-Amz-SignedHeaders=host&x-id=GetObject)

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
