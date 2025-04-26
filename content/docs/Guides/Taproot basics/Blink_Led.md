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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMBXLFP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcJPgJxObfDtrL23u9UZkyjYmzelHYDQZSYl%2FoK2IcTAiAgs9Hu6DIWFa7NqAyNvHyXAEt8RtSplWU5ITLFO5eXMir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMtw4Nya1xzfFADeirKtwDb2lHscP0u3tghAHG4JJ7Od6DNuX3fGd%2FmmBWm4SlVho7eS1EnE1etqsyD6%2F1bLEK6LPtCw%2FxTKfjUqbs0IPWpeQGxDPSOKC9iBv%2FcyyfaQxXyV1bTVxP39iVHZkjlUQwMzmT9I8l%2FHqjfhh9uNGda50e17ZWOgMyOMzqkKWIrEOqlJY8E%2Fp3ODHfO2AvmzJiNrA3gxImEnyepjNnlfboA83l4iRjYyo3q3IyHHLiswvuWAI1wePd3MShxhOrLPwjwYY3VUHCnqnYELj23VkhlDYnSWG7DXdqhia4YQoB0Ag0T3aWCKPu9g9QfUMMO3xLQYfyQbfDs0S3ja4sw%2F8DY6HnAskfUpKcgXwUCxaOzwE1sFESR4jAAz5%2FW8lVKX6vndM4WbalsOAuAnRwI49SkXmHMNR2KuKiUIlfjQBQL2PhhCJkPlJSEAQi%2FzWjllTMMKxQgDi%2F8so1HnRNSIiDwue%2BlgQR2A0k1UOCR7ZOp%2FA4BaEWoB1tboGJ70bW9yx23HWMDf5F8eVLybefRyR%2BYvjgBe1dDO%2BzYI53yuwvSsDI74m%2BO3cXQCW7Pi78lO%2FKNvwIhxv3C8O7nWYy%2FPIfiupVchxGQRwD65FKSD7L%2BhXtFkrGY5uGfRGfq94wxbywwAY6pgF9fUptvPTJhEu1tm8katB78xnCFIYLUTgbtygXo7t85RaChk5mKkbA%2FEoVjd8Ip7WxTbXLSFNh4BC2RYhMw35Lymk%2FTXg0kIdaxqm3IZtKU63pkQdyTYvt%2F7FH4grEb3cLTqR814fDYOwfc0FKvj5WHI0SfLYVRtysfj3kXOY5Vm%2FsowHGWiUK3WuoZugSlxwoEr2A%2FbSMHLa86wFG5Dmr1XdAqIyt&X-Amz-Signature=40dea280b76aecb3f39b9b4db996a0a5c26c6c9a00671339455348b82bc90aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTNU23W%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEbRvKy%2FemBvpD2U6XIgLaAnii0znu1ms%2FRcepLjuUewIhAIK5IMcHmp85JpWGVHbDlUasy3oJheLxmZh8f47nxbU5Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwAltzfIf1SZwud1zQq3AMhyOBk2lejjU9ovJnab5c7d2d2lLBq9wXR45TQ0shgem5TzDfMeIBO%2Fa5S8iB88n5EFiBEb2Xwl04MqoBNiW9XfxreCIbxks0uAda4tA22Lr95MQUNqKTQj37cs4xIfu6T%2B5v5BGU314VxYYlvgQQECHoMJnSYd6dx2wsFKlGA0L9IRxX0zo%2Bk%2FkSttttls8CgEFZwGm88faJuyzKR7yBwXwNja8zqkl%2Bq4%2Bepw4EV0prNhFSYxbsI33rqR8Bd0YBVvNrQOPv6GKVvYunNm4UwQ%2FcaK4fqotXiGirH1Mkv%2BbTSgOsVmF2odZvTYfsyynYrC1QWOzuOkcDBD5Z8Nulwn43wHWJ7JUymEaPKyBlO1MHRgHwEpkoz0Ts%2BN4DqNATcHPzTwxpVXzNe%2B8j7jLuAydIJofEdqEMU28kZ%2BgbuaubFrww%2F1Ga4MuuYgjLOq%2BMMDHbA9DShn3WllNmo5XfR5xIVbLUco34gufnhwqmJzzR1TUFnZunxHhQid9kRZPO%2FGO6vRtcYk9IQ04G%2BcDUtYWy3lRtjwpI%2BK1peMTRIRRKLMAEe9W3nwEDUZ3rICZiYLDuuP%2FFrEhHUbQM%2Fo%2FN0xvj0uoSnU%2BsucldgPyi%2BGTwsFe2GR8XjRDJIGzDhvLDABjqkARqOM%2BMW3DIIX%2B8PclYwbBh4qBZh2408%2FRHmNE%2FX1gCxxg2kMlQsf5s%2Fm7zB8vNVvXicuXktE%2FkCfpD1E4Ljb%2B2sIy21fyuw8415HvV136W%2BYorLDnMd2U8e84xfkNJ0tk3zN8x0i1rH82WqU5uYZJWY2UgJ17fg7MniV7rgY9y6jp%2F0x2WjklYWV1zO10H5%2FK4Aa1Ir3HXsNVITjKgYuXywOBBM&X-Amz-Signature=99f3abbab7e2d0683a46d42c64ca463bb70de90f9205e1f98198bb4857873c97&X-Amz-SignedHeaders=host&x-id=GetObject)

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
