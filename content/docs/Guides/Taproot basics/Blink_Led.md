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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6SYBWJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDnF1vbl72k%2Bo98HoCU379etjpwDdvCD4c5ynmG8jmKVgIgE2VWin34ojFhpDU%2FZvG3tGKSugXzfcj7xfXc88aRukQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsx6UZAUglkKeoT6ircA9%2BJQsDORXOhi%2FnQZe2RkAmMnbA5C4iwevMb9ULic0nlX9yInlxlYbo7VP0DYIBwuENgScnhmEniYBpGyhLK3bh8%2BCOT4rT3Lp04EjoiSU94%2By%2FezLcQ2NICS%2FKHuH%2BaGZJmRcWIcGga63c242VgFXYB46FEU%2F5vOOztA50GW1%2F%2B1JasY%2Borvs0YaCDkxIbNIRvg6ycJ%2BmgJGHP4%2BA3PL0f8svacewstiXrYu914rfX%2B44HuFpKd2EVTHCQaw7x0NBu8FfOQki7cZXcc9meo45D%2FGfyMUxfkeyEKi9JiOo6z8PfGT%2BNsQCS6HC00Ue%2BK%2B%2FWMSdmJp9hCQ1FEm295WuQOMwU3kvMjOKpMK4ygrZqfAzT%2F3VzItVZ9reStaGhFtpiMuv2dNLPy9mLuhykG4MCdptm%2Buy8HKb0PwdXzpGsm8kFjMaDJOCJpSIDtbruGzwuOdEXZlJ%2BGHPZn7L%2BHuC13xZNpJMMkCjAq%2FqetlsMia4U%2BPd%2FziRGFqUIRdJzfmwPcGsc%2BrcDqcJdMbe4YvHeE9F3KlRC7zRCfIIi390rqdZuz%2F4nNPE%2FURewc%2B17ZbDQAzNBac7khDXW7WnMTrHShtemTK%2FNuM0CM2CkIrjZl%2FbPXxZ2vbhd2GhH0MKOhg8EGOqUBeKpKfmQMU4m7QVKC1TEBJRF5H7HNtdlQ3ynxXopZWbzf%2FE4FDpMvXbRi11Yv1K5eYgu66uxT%2By6%2Bzw2sB5UOuKFK1kkr9qFovUMqtodIHVwE062Rbad6uJVyyhKFc0VluIyceTALF%2Bal0yeFQcvC9g9p6fu3CxDA7N0UBhKuq9LNMKDFmflAr%2Ff7HXivZn4bQkgtFQtEReXsEdTnvRyQwgucXTXp&X-Amz-Signature=2cd0f68252aa484d6f99d98be6c6e27d3fa5a778a7ba071795c8b8c20776a5ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYOHGKX%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCzmi458w86DVy7%2BFhNb5cNtBvNMn6fnwpt19gFb26plwIgLCGVtjba3WVtupeCZMj9FvQ0pJQzhwJBgNeO7O8hf8EqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlMAmaCJe3FWJxGYSrcAwHEg3Vox0srxLV2RkEFVwKTNMO9kU5r52FulJEmPXlQQLGrTrAxWokRQOxrH%2FRv4ndk3nQQGv27UtTF5%2BZE0UgDECFdqIamwTXnm4YthYQISu8Jur%2BfbbXRh4dOtsGEJCP3FfSTb4POUxuVDhu%2FZpL%2Bm%2BtorWYDrBwygkQxK6zeg5q6D9eeVA5LIDS9dYcM6RHc9uDg06Ak9%2F%2BWbWGGv7DVh6iJPgxLgAwBHqPDdbCwTNUHUFtr7fSUF9jFEX1Nab%2FBUNIzh1NcxU3oihPk4H1tSZIxOml1sshgrx%2FlmT7oXuWLbwny4LSooBMgiYLHyOi%2Bih3JCh%2FESoZ9ERHYkcZF%2FTsIxcxZtv7vrH0vMoO0KwfrkH4Fk7zJqGSCMktSo%2FgUFqlLnh1yFhOZJpluzsAFDyOOJJY0lmtcg3XxCRki3onj4oXp8rpqn5WoIeuhDUBOiw9K1TVgojqCsPoPdm4DZkogJUtO%2BGUFgUg2lb5BJybsQtcusjGRBxL9QYoBlmpctBxqZD1QTuUuYUKxGQKKxJLQOzgtHXxTHSAGBLLuDZC6FwzHhSIX8w55JGAbm7pm5SnwAgnHDJgsotY32fHJvkB6Syhtos2aAL%2BY%2B8JThXEM14tRthOPdPuoMLyhg8EGOqUBVIavqiuPul7GUuULNoAqYPHtrTzbfSsmsBu8OBgfAfhWQQ9Otr6xn1hgc25bt6iYIpBvUohETmsRUKatyF9b2tjl42ks%2F7rZ%2BWUEyvwQTqevQ8qIo41fPxsGfbtyP04y1%2FjSIAyTh6BzbZdx1D4rTkEmWozci6r%2B0GeqPiTcoSvlGpHZREyetcJhq6wM5sPx9MuSERm5reLRvS%2FVXNASoT4Qbt%2BI&X-Amz-Signature=076f25c427dddfc3bf23ae76c670e931ad257750d61ef816d7a40e2c157840c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
