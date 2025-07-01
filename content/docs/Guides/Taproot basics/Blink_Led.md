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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663T3QZBR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqjxpppZWdIU3WE1NYboGLlWpOQRSouYz5KAVtnWAAwwIhAOpSKfGgOQmQS%2BtUkSFJrVBeQ2diApjrv%2Fzc3Jea118%2BKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVs4MKn044hsyoPt4q3AMek8%2FtKTCSy24AafDz3tmVd1FBrn2qSAiUFdu2i2%2BFTGMKwkNXnjya4D%2BoXOJ3Nl8UGkWOcVaNb8%2BpegbBMyiszENfqKLU8FUVBleFQJAS3PgrZ8wowCWBDAAmJWR1KBINCV9IV7HwY5Ll%2BoWHJ%2BkVZoFlkGeSyUL%2BUT9aydeGuuoi0Cqr1ywl74wf0hGh3j0OI%2BFkraHXk%2BgQN5bPhD02PB6mqJz8%2BZ94V3dfJf%2BYkqM6jsOk%2FYuC5x%2FeFclqVEmVm6cZIjq%2BY2zX5LU0n7p%2BQveC7xRTihS6TKSkakvhs%2BoRCMWH0MmjjNz4QzIUJxFIg7dCxhU9apZUzsG0t7FXeqtVCusR9cx1hMHfzxq6FnRpG%2BYjZRL6iUh9NNCRrmDmPGpYyALn3oR9jTrmt%2FXokTgdqsseF1E26aoBe%2B%2Fywlz6WM2tWX2Q4s3cZt%2BKowXJXG99S1TMxSUrMX6hNZ3krnOoDJ2LkaLlrUPGFgterDarapqmIkMoun8w5%2Bd0IcCSD1hx3cVlmP9R4mmssrmpb%2FwjpGxPX3xbKrlfQJYFStXRRvUx0wIdFL4yl3RZy6DmSZS0otlyUZetZkwcAV4JYVDqIr9MeuHueJx%2Ft%2FTIxgFODGwYxGysHvbs0jCQyJHDBjqkAbQ%2BD32ZwLiR8BxGAI4eaJgcbbeFTfI8RP5pJXliOKC5ttSV5TJgGTYqQzqiWwWiipsDCZHfflKs7KdHY2Cu1sImzGrth6Ohk7FxJM7LrmiurAh2RHBbBS8dtooDGoJTJ40a9vrQf0mkLa2aLnV3jcDVE6FvO5y0e9Rr5%2FSBRL9UDd29flSD3HwDCBpqQGiRhEDNAFXCKZq8TFxZqvhZl3q21C62&X-Amz-Signature=490996f592ac07840e135d5ce8b554693f343d6ffb3007c44a02bbb15a57cf84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYKCZXUN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvVwal8m89lKbKAVz2Zuwy9znF1kg4uRWXoAAvKkG%2BuQIhAMGwRltJLzqyb3jpSkXE1eSNrX%2F5VByyvq5%2FrM5u6j7HKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3FGI64VavvIV71Ssq3AOIaf1rzvMMkIaAxzws73V9zezbKT%2Fzw%2BJiolUN6UIo8iranbOKFYZ18XZnIiFwIIUS0RyMdwRrfK8gs3Eq8qIVXp3di8nSXg90yojBguJUjjes3At1R4CN0a6NyMxhetb2FnNyibKSV%2Fay7nvGd9AIKToMXpEwClSCAE3JosoRG3fknio5VLrhitadj7oMTE4TAauGQEDWhBSpSx%2BJ%2BQR%2F7glZBBJNElaMQptY37OBkfwCagprp5NHww6y2V57LwAGz3fYIB8yKuTz0uYfKCJ5ah4pXmDSxb1HXQvg6salV0C%2BZTd7aVE8ZtE6Rwb9sOMKxW8Jtpv5HI8B9%2F9LBIrdDJ%2FhhK2wPMc8CDYUkpGZyC0%2BLYDM%2FQqfSHbXn%2FW7wHiWVo9PbuC5T9TiSZa%2BS1q52h3ev%2BGwnEPRTltLeGKskGHlDnMwN1QvPehFcKPgRS9TiPYiyMBA%2FMg0Ji0L0NAUo0j8HEAN%2BjZzVW7u0CPMnvp8Wht2DXLAzW2tGvoruHTfi7erd1vAPXdM%2BbUjy0V%2FDy7qKgsFu65XzENMDo7jksHhXtmnUYP%2Fyzi8xESlYKLsmw%2Biv%2B1JJ%2Fl0WSZJi%2BtvspbbFVxcPlq9n8lyICzPdZx3eou3JCy5ledGczCGyZHDBjqkAa3%2BL7iswDY9ldM7nntvoMjMPmO2hD2LadfEpkv3KaCXBoef4n8X%2F5o45GHNDUKa999rl%2FOmympv5Q6EQ8UY4m5EzNock1ZnEOUcIdXDe%2FZd3xtp3VeFq0GocCLJlPeaTQO6EOvqM%2BbUaj26QWi7NY2C4eoMAWTxog7uM%2FdMCWAjr%2B2dltlN3Lu6eNweGDDkZp20ZAyrd9qGhqIDfmW0qWvNF0jH&X-Amz-Signature=550728cb3d44c217b6f7453d059c757c6c10284a8ec31beb23a2f883b6c0e5e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
