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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYDXGHI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx1ZQi80SC3hsJJDL2vNqzDa0jAWd2eLHOaQP4PSGCQgIgSSuuNJ6mVFqILpBQ116l4B4x99xdxND%2Bj5%2FejMd9W4Eq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDBwPqL%2BGkkAoObVh8CrcA3Q0Ocz28vEyLEtVhE4m3dz%2BgQuZHJTE%2Ba91hXRNR6%2F3BJRpalTlWRDt0cFzo9uOnEKCwBbpsSbbha%2BQFN9fYcUEMsuWcWwpqyxGz8WvM%2FL6H2q%2FJJ2E6XgyMYsxjpul%2FluiBr9SPAw7qIInyuD9FiOybWlo6YUqNloMjjVMjseEXREGfLET2P%2F94R9bz2oMnc2xoTL3BMr%2FTW6YEyWUn3gr3Ys%2F4G6Tmbj%2FzP7TLu%2FR4U32vsEeddtrDGV4IqDumAS8OzIH4YBEEJVdkql4qr7rfHi0kWwTdhYsAYk%2B%2FYXhUjpzS1BF5enOTYzc2Dh11yV671cl71bz8zhZZcKOBTZK%2BalfWYDDXqvsmG%2FFfxZGD5v7ohkOjTFEjFK6Fw6xwg387215rdqmYcOl24wje4OgmkuADb6n%2B5QdVWI0pMMuplcKtxvBoX5MWW%2B253c4dESpuwxkZsKZ6DGMuH2ODgIkGoN9UVf86SBuzBv6eziUjHkfNP0TN9ljngnaZEryqtmgMi7DwvT%2FM1sVVbr9QoLmhhpBBNE%2BofsYgx%2BTcjifK8SU2z%2Bdxdk5AbBBZvUB80QqQ2xW5h26CgYwBQelq4%2FB7yEsNif8N%2BM9uG3v0NQ4x873ApYqZegJvkNwMNSr1sEGOqUBsAY7l2vCSBW%2BQjSDgZjWQCDGBRrKSk81v0p%2FKn%2BUmNNHdhU2%2Ffc%2FlAsnslKqzNZ8%2Fhh%2FnC8aQSjQ6I3WD1rzWJ8i%2FOso0rWqPRr31pyTRMVMX7IDeNulRCen6PBy84o%2FjfctxD%2BvgDp2vo34IHqySgr6ol4u%2BKVfrEfBN6G%2FmbAI4l%2BSujwcNxwnCERP5nY8CmYx82d%2BZkkO6T1u75%2BAKP2Pupw5&X-Amz-Signature=d884b3d192fb70b5044627550b80b567588ec10c531938decd73fb7001483e70&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X73KMTKG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh8d%2FyQJCFY9oGP0zo6shcfbCSIbgRJcppBE5nO9vKXgIhAKA2QOjNSt8n%2FvEouuxt%2BeUIveuxuPg98MJIn0zd62GDKv8DCFwQABoMNjM3NDIzMTgzODA1IgzNO0h8Hq6yahix%2BuAq3AO4gamMePRJG6DpZRKbN%2FoSkDl8jlIJQ1z4kfo61cb4myXlXqXgOlhwfW0Y%2FkhFDOXxHG%2F2l3mXf1fLYMXobUkZoVikjedqiWK5QtEASEvr%2FJ5sWO3RyolOVyyOdprrYd08X5JKycjnDTUiwTwyM%2FdV4zSTIYOJ3oJSRi3QRItHqlLt0oSCwxwwXBUAkAsYgrKdSHJKbhnvfmX7meRxhyX0czAXahLTIoX%2Be%2FQMrBLdQyEFBNNx%2BEEvE0DVXdUniv%2Bzh3Eyy3crOCJGzkTlHTdBhsB26zhLTT8s46zDr9Yyzh4kB7aY5o%2F5mZqq5xk7Z37sNA4HiWJghQuJWHUU%2FJGLzcxEuaBekgrt0aXDN7KwHqzULsWjC8PtPqAKaKj%2BznLpArOZO8FWjQxFG0eSnbNv3MqmkrJgNk0HRWgAsvKMnTeFuscI2i4v0WEDYCFFFivWcYeOJAulZ9M0ytcwbZxot0lFWx2pNlpfe3BApICTDHdD0f%2BDCUtyaYi4sGyvsvLRXLvF%2BKyd2V7L5DM2h8HbYVU6CKZLyGwq5l4GZl%2BE27XCJ5guOueiOdO%2FTNwean%2F74hluSKIBQcwFD462o%2FS91tavEhnGHp73T070Oj345qJFy7DWw0siQHf84DDMq9bBBjqkATsaedBVgtiMa8wH06EG6J%2F3ju3iRHuiAR9ZyFukeVaTLhk4fHSejqk30BhJcEb5%2FLL7gOjoz5xCm7j%2FArY%2BSiVUSlHLy0ORNU9OinrHK%2FhFhAU9FWCyX09et%2Bt1Smf0ED%2Fzc%2BuI5aX02r6Qkh3uvSFTLZvr6Nn9xj9%2BZdaGB7eBPym7860wJu3oZJpdexI9ILmFo3Z4dKBuTufVOezGk9Cdstz%2F&X-Amz-Signature=0ce6849bbd114e709b8322144477264ccd117f653225af067f2e94b1b1930528&X-Amz-SignedHeaders=host&x-id=GetObject)

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
