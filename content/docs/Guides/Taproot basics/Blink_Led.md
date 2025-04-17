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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W4QLZG4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PVbLm7ODr175Vr9lchm2bluzSfPJQJUsDaSdYqmWHwIhAMMvPGJd87TE%2FP4uYRP4I8hm%2FOkdWMxVEtHAMZeJ902qKv8DCFoQABoMNjM3NDIzMTgzODA1IgzLRsneWs9Ym6vDrQ0q3AN%2F646%2ByQiX%2BU7I8UOUK8du%2B7vFjc%2B1Dk2kDH8k3LIpkleTiI3rrsMydoc6GtagJ3jpSNREadil9Arrw3XyD%2F0LB%2FBS4zRh4FUplYDTHUoZdEBBuiZ%2FMaxfMAD8TJ5I%2FnGuRcrorRs6G1SX7XUookkjiwMaGb%2FWaMjk%2FyMRoUNyrxYHiotTu4Gy%2BG1PIryBvp2R0%2BbmHKaJ5wZRiVbbaCCP1osmjyfkjn3R5liN7BNnmKnojgXs3tsCTN4gMAwETBke9%2FqM80B9fLiM%2FbAWC%2BlzMSJqTcTSRjdalz17T5M0wKAfBjIMRBYqyJK9pFQf1s4MKgHqmzpeX6zTgUotRkNHXt4YU%2BJzDicU9ra69aeWwCJz4DdocRcrUIdM3nvGTFvad3meNVWP5Waw1P0lj3SrlkgJ%2FBKods%2BJcJIsdY3kegUNLqSyJ8E8fiR0AVNUMpYCrm1ft0qpHBO24m1qZggHWMjrMVTMhVgchQilLEkafJbYYCE%2FsiGRJxOeg1y51V3%2BdLWDZ5SX1FJBTtrWAvE7oR2%2BGg7YiB8SkKImjcU00mg9W4gBzP1EGJBaQP7LOiA4VKbeg%2FD6IbftUOCpK3MuC0L3k3fln0J2Ke411t05c9uC8%2FNAw11yFLqOpDCD%2BoLABjqkAf0T6jW73HDUn3OZhndoaTsgDqER7dRoBTbDFxP1nOxzaDwfC5Bm5jgqK0aJA8U4fpOpUh7u443r9W4hXkoE%2BJ2uqwSSPbpz6NzUXOTvYxpE4yQSlpO7MSg7bNqHxmO3zpLQBqT94rsu4FVZrQqGK5N%2Fss2mJNKvSIneVXYRuHPjY%2F1fEPBj5Ku9NIbdMf8PbbxkKXDel9F%2Ft6zMEo2KXiRKX7zP&X-Amz-Signature=03e9ca80b82ec69b7a9ebddbf4dccd068d563fdc4420e03fed4a5243b34b0024&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVGV3JVQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuVgKqGlU%2FwUMhKpISmdY3ZYiwdzfd2s4Mb2%2B6Z16a6wIhANl2wK7liSg%2Bk0OTEUIrvxQDVptrG9KdxXByygvrc37WKv8DCFoQABoMNjM3NDIzMTgzODA1Igz%2Fv58MyXpItjmvHKMq3ANGJQiYpjZd5TjvF3OBv%2FpGmVl%2FTIXe9LkR50zn4cTxX%2BloC%2BWtqqccUaItgfzVl8Ai%2BFkHIn43z%2Bp4%2Bm3tdhR0lDVZ9vU5eVpGyoy%2BlcOHmthUagImS0sFzZeWmjbDDVqpn36V1Dymyk25ABCRyGNU0J9rwUSIq7fwv1IO505fc9lHyukmT4VE5%2F63uD22j6DNGg7wIFFhhv6Y%2BbgTpetRr9VOPygpl%2B74wtfoh5M5%2BYZ0TJFkV8osHr9%2BrVO%2BVaJ%2BayEQE46NMSGN%2FvRfDSmAwfUHzCG3TtIpDXY7wwXbrSmI8cwkZ1YY7Uevwx8wwhOdonr8tCCi3Vve3kj83JqKfH4dzKduqb1gFQ17Cp0EUU4ODIWiGqUvjvL8rPk687LrrgsEjmIRKs46d9ezFceqcl5VkDBOkVSNBhlg4X8bRKQI25KgSXC27f3VlRjYyNJTJeMsCixUjWvMwFuk8r4WHr%2FpQT7TqP13iQ%2FIdOADJg6T3gA81waxYf%2BUEB0mSpILfXs8YU6wfFityGfGvBE9vFgWX8JQ42MNF3t%2F9itjMs17enZ%2FVqf49mOE4njuCf9N3aoeF8xI0RpmKilG%2BOwzJOzKif7AurFxzaw3pAnO8Kg6Wa2B7UhoOjvZXTCA%2BoLABjqkASKJBBNPnpOcfD06Ionxn9DizvenUNU%2B0krKCx%2FpIASDKRPz9e%2B50EtY1re8X5lXkJsBEZkJI3uC4thZgtWG15j0yrbQAlO%2BIHhLZTcY20cUtP0kBaRzDh3BNpxkAqNP2GTfQ5gLyR2i4ozbxDDlEtRB8awUqTdG2%2FVoQlrtcbaO7sc5Ids8rat%2Fsgm3MvdXmQMz0pfzP1Dc2BSOWLci%2Fd5%2BWWXh&X-Amz-Signature=7046e2f1b3ab03fd91256e680b953b9c14b0eeb6cbca41e3dc9bedb1d95f3dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
