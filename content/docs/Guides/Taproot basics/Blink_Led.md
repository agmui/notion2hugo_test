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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPT3PE3M%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCID%2F9OhS3bIY4HdyxoK4Xfv6DgBreTIORgXNLZonLuarSAiEA1R%2BKRiJZCBOF4ZfmLCyZV2T3WP00KquA5Suic16QCdUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCboeXUNfo9B7pwnircAy0Xu%2BuqSrNQo%2BiDXBDHsUAuZOp7mUvT5jx3FscGLJevrjgGSKG1hhtvkLOLcR3Wres06lVcYV6nrhKB%2FYru%2ByjEvSV%2F%2FlQlN6g9P1y6OSJLLpp57mJGAI8A2u2g3qZ06TKYB5dHGsvF9ErOu6HcDj05hpxEpU5mynhpDcrmfb2K%2FUJZ06mtjAopGd4Ez%2BByP3Ar%2FuJ1BKAXqmtGi98E%2B5ZJNRzDIqh7enGkQCHAOQmoQ%2FUQqGhmWCzZW3wHH2FBIYnagJhDPJVHUdJiJ6zVT%2Bsx80dSTuRtOh4xLwGeSEQiOArWmzDydkVgdQ7oRLMaMUJzVgoIpv2VMTngpQh75AI%2BmUvWZJ6klbH9BOn2XpX%2FQIXc5Fn1jihULr9okJjgUEqa228rxKeA3EW3GrgdaXUV94S3r0lLmGJ8ERW8XZgbuM%2Fv36pirUzVJkkTaJyPiJsItLnabcZTGK9GEp9XyLAk6ZSX5iX736w3NFfD2ukKuHhNl4HYvCpLwH%2FYau7CnKBohMCYXSWD48XVK1aocKc53bhz%2FNYj%2BAPXsdxixvQaos3J4BYDqqeJ1BP56brdUm4%2BcY0RguZcKwdwkdJ%2BdXqi3yHSzNQa%2FlWPBEc%2F92wyfQHBKrEu9d9J%2B5zZMNidiMEGOqUBITacJnVOMqxGh1v3HYGIZcKn1LJWOqRfcq23K07QITrK4lh7G%2F7nc7EJf7qygpQqB1RSOfiPoRyY8kDYX%2FxNF5Nl96KPBjbTPI2VwarJUkv1La1lHmohY%2FggfliEUcCTPI0IxFO8JyJfYynBWLXt%2FOUUJJRsQvb0XGEPYuz2RyZnuHFpKHg9pbBBkvO8C%2Fuk0rRiXYIJ9klhQa%2FANxvVX7cSL6YK&X-Amz-Signature=6d1bb5e0c43ce5bff8b271c849cfd074bf8d4f71296418f821d651089b5ed8c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR44YYMT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDZEL0zdY0K78HfTDNMid9O1rUytngbqvhrhtLjT6jLpAIgdgC%2F1Q5D2v1f9y4RlnFNg7TkNutpcauA%2B04OUwfmHSkqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhRZ6h8KES2mIId5CrcAy7Rh9YQVy4TVxbnlgF6vTYPlrW3W9h%2FRrtNTbyX07%2BBLoyCKqaGGKre5Nabx6e8EDFnu7fa%2BR3actqCdEKXJ5rmXa6aS07Dtwabs10U4YWQ67WGtOC%2BmatO31O1v%2FG%2B9KKpfFjNAhLj%2FDLy5DNmfeZC5Y1F6YL7UdYHxiBv363PVeKaKQyE9cWx2KSx8xzHca95vNeAiwpltxLnUK6YHUF4j7gB2uAFSZkJmABdzJf4PhQ9dDoQWo%2By0Rof6WBongYp2iPZz8Qsz0hJoOMWoms27we8q3oHFn7rQlq6ziq9S%2BtyWq8b0x%2B9meJnNip3o%2BrpXI6WXQn9C%2BsszOQtGtcj3Oim%2BGfOV2mf69Eoc%2BZ8SB3aNegQ6oOt4sQyUhm%2BhhTGcYllmhLCVAbMuSfmPD%2BVAjr0mNuCXn4Bjhmgm9%2Fk9HelWVI2xp6Zy2QLjk7xDbl5kY34%2FdY8YbU%2FmmsMG8IUNWqqXu7YtoSaA%2BEexk3epjr4qQSmYUc3ShUaxkKjV3s%2FdFIJISZ5H57Dn0fYWIbq8edu24LLSiMDG5QHli2l0fmBQ94BmZswvdZ36hqJv%2BegZ6kyZikDZSoOFvuM%2Bc%2BYwxBeg7CIyjStx5eMjpwomeVGGksBp1bhtxJ3MLGdiMEGOqUBfdZI7qlgWIe1xY3ckVvRi8JG2rUeCneRTFXBOV4bJmhRKdnI4LaPAwiX9uw6caoQ5zD2F2ktDe6Efwu57DCFQiBoGbo6h1gOGwMaH9s9Eoeii9m%2BaDSIS9GyiPtUyhxPfFkzwhUdYSdx6y2SuusiWLYRT7QawGskUELPwWG0ifKcl31eNlCbHqpP7GgBw8g3Ry%2BRtnkYVV70rmJ7jym13r95Nn6y&X-Amz-Signature=c6ec853b96e59d0d27382dcd3e61a0ff51e68e7fc78602ac3d1c476859c789c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
