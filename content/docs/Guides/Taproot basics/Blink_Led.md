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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5EWH6W%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsn3WDoxFsM%2BRJf%2Fyu83QIMOt3dNgdBSJ4OUktqKvWxwIgJePui%2FSNCxbSZjxXzmFbdBQJGgWHIGqI6HA9V8uK%2BVIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzV3k9IIS7ZMw7aoyrcAxNcAVBC%2BaGv2BcQAu9NH5dtAzeMav14t61sGo3C%2BGuqgKjeZJb4VGLG5vW1mVp4mC6igU2g3rpHk2EpugDOuHeUJbZJf%2Fv%2F%2BAt6dZ84QoxhlI5SFqQgPaeyEsZY7bBClRORlkVfljEOs63gkVWCPvepjevNsC1W3i%2ByNWFFaZmxVI2E4AS5ybSfEYo1Mk%2BQvMs9vWS6zEdCQIw%2BTEqbEEk9VyFBQPpAmyB3UGSuD%2BqyB3tVPGLa4oK5TvU0bFE0D4MLVDKRkvUZcUN30GVTGqHfh8ZoCzg16XTBCgAUVgfXFT3dIUSHsT8EgXFEIXOR7hGE%2BBGZAyKuZtaL%2FkNFqsLPOeoa%2FjY2nfKnxREmPboAVzNvBDeRa5BRiJeWLKGD5CJ0P9ipeD5Q8qgYuLKeCSQhsglKE8q%2Bfe1ZADJ789TPVC08UfGYMv6i0KUQfQdc5Y1D0h%2BLPKZoFU4OtXCJa4h8C0xIOITy2aYP2sdasVUHC339jmjybzJesS9xd2wBTznSuEJSB%2FbgyknHtZVzqEA76BkPeKV%2FfFNHfuk56g1krKAA8FpQg%2B8iOCSJ9vdgfGon90g0IrPYBefriAKjg2AKCH1%2BcdR71x%2BVRucu%2F2Lum52WkicRwjzLeLEoMJn8wsAGOqUBh%2FSQCgNq9UC4XnXM06j3TrYH6b%2BvH11wVA%2FEW5iClptkZVCy%2FCz%2FXrVfhCLyEUfE%2B5jQZkUPO70SW8l0EbHJdCGW8kBxbhckgcxYYLPjcNcSixJ%2FYyvDWte1VQzMaIyyKciMT4WdVZjwdwyp1ZAd%2BjlIjXAPW%2F4Cmrdahn23YSCT8ZIurtBS5eMNsJ5AeVtw8NM5HpXKvuC2Jpg6HssarP6%2F6vTX&X-Amz-Signature=4ce7474325ab27b4a7213d155404378336a5f6976ed3ffc1945a3ec732bdf984&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGASC37%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNXq4ib31Qs7NNHtJq1yxQOlu4itmhZumaSQctz4voAwIhANBibthOuoI%2BFCb2M%2F1uayfUmWg1nQaSYB4jncZhopn8KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7lE0D4xMcNmw1jwMq3AOIehvSwH3JgErcA72PG4%2BCA3qTWIHJeerwMEcvqvzdCHo5u8iizVhykb9OAWyoExs%2BaiAkuafqk%2FSyTteizL5BWuuv7s1piAxfDwQxVhB1h3ozXClYa98ExzkL6mjoTZkPq4OSslxo%2FmUIP1zJ1Skl9NAPxl7dI%2BJQoIqe%2FR5HF46xgaT03asbf5gGOt%2BaVnmoxQRZ7534PJN9oqIpouN0Rfd5Pt0QdbLaqvQ4arSeYKpeNkIjJ9f0C7JEqAi1oZabhI7zydW8pKksfUl9JGBXxWBgxvMNj%2F9OHoEGV8%2FC1wGfwmRn6gnPu%2FAH%2FHElRXHaPFLHyUf4%2BbmNOeGhyKe3JhdXBwIj97Idg23y07jOX5c9%2Fqn%2FFZCTZn7K%2BEGtvbrmQJsVCiKU9bgA2E3mOpMJPVnzwspjsGqp6YiavbZPiMqEBZOFuJHyWR8EWR9MyptyKBMftFQczr1Xn%2FtaD4sVWHq1furYIo8uNfHckIU6UZxcpgDTL0fLXDKRoyZPomgMxPEMVuacaX1UFW1J4xm0o6qlevxQFBxyhChWrTmoBN0OaKy4PvqMEJSF8%2Bx%2By6YZq3li5KTd%2FXvNP4SocvConq5Xh9oKEgU41DjW%2BF4KEDN9HCOvlatXuatG2zCn%2FMLABjqkAadj%2Fbhey%2FEYvV0mMGmtQQV0xWHrilv36gOWxuvfwxLHop41hVhBJCbXI1N%2Fa7qSxsV1eWZA4FZZxnoKeyAA9KJqttnolA1qFAwS3SWu3pjj2MUjCa9TI7Q6H5JEn%2FsKPP8gsR9yR1VWIrHfVFBtKQS73xpGG4Rtmw%2BgoS1wJgjx5EnHHJ4mvGlkOpR%2BnHvbQgY1AH7UH5fyUy3by3LVr2PgSn5P&X-Amz-Signature=1c1b108fe3d0d068e1f5b6ee9ab55efe605593b4cba304b7608c6bb5e8d1819a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
