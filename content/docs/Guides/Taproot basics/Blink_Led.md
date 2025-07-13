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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OX53RUX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5zuoebUbxs5w7WOsFoxaoe1RKIrltsVdlCGOr97f8XAiBRDshVxsz4a8yNQLkQ3e8N4JqUwushiVKEfwQo0I1jLyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMwehLr1rTBmnEUtUBKtwDAWdpZmmA%2B87ECdBHKzeFH4ZUFH6PDSGVHqy2osl9JHOA%2FURxhh7C9dZAP3N%2B10UIcwsXYOHKAFOw5owLfCChOyssNC15FBJOvTyherBg6mnOoIipySJpmtalMyMhwkXNgFwtSNvsO7TRGyBuNfHbAQWM4iMwieArA1YdXYqNjAXQcux9lLtLQyvGoy8TCZ4iHkrIM7xxMYDebR0dH5hvCHibo1gRlfFm1QyJbNBp%2FYCbuQQM8qozqJMWSarSyBM9V6UgR0eLQZ9cz6fcb94H%2BnBeSkRsM4lEcksYMnxIYQXaFEU6GHf7Ezy18J0gyRaVK732yywJu%2Bro22U0Q5xUAEzPfeu%2FxFCB7n6LimHhhsTJ9tf9%2FHI0uihzTs1eOt9tZBblN7LpDzU4l5X5SWnxAi8OOjWU3POxEEeyvh8ZZj4MkuajafHojQj20qmWMxHc2BFungVove2PEWbn29vn%2B6wOR2MHT7JCHmGKl6Yjfq2awdTo5mAhJKGfcuIbZWGWfUkCi3x70mv53Q0OYVHKHtx0i2M942il0fKvwMNQiKKP099HWk%2FFWe0moua1PVkHkw%2FYjPZWRkg7fZ4u4XdJayKJRfHXSAvKde6JEDEqiCT9YP5Kzs%2FxfmflykkwscXOwwY6pgEjYl2%2FOAf3wIv8epvYuoUQlPuWxIqh37ieqCRcUYRCywRlBiWZP1RPzIqbggD%2FuAhzz3zUYQCjmyvNmNNHiyUQTbEAxUwYOh7B%2BbEDa0Fi8D4GZEyex5W9cI%2FX0BJb6HOjAdmLGKd2EnSiCi0az2NyyZi35cvGgE5P2IFtGUI3nlTL1Aiwt53wpnopRu%2Bx76kufteRY7moXW0s9mNIuaY7NzwBKKzC&X-Amz-Signature=5b7edada1d2ae102459a5da3fda884f81ab54f8610e8db04a3be681973e68704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINEOEMT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlTopt%2FPUUba%2FDRk8RixrKZ6CRwBMqzngg6Vh%2FXkUTMAiBFkMiLVDkhapOnzNUSusnQimraNQv6kIUOwADHg%2F8vkSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMSKOfPYE9nArMV5ueKtwD0GALYE7Rq6kU9lr%2BByUepuDDQoQVtSYmVLSbaSDGq3mTVSy9M7VWrnOja0rLoMkn8RhVKXrXjHrIUCG3v1IH0tXLRal39I3%2BAhw2w%2Bl3wpVEekvAlS%2BezXQA0byeUyCUEAe7qdr5zXKlagZ5Hz1h5B12Ph2VPzQvRJf4OBfq1dHdDFLWhbjWNI8Vs7ZMLD0LiEx%2Fps0h1xB5MqetmXc%2BGOTAbF6lvcmnXRrW3EtTRrgyQ1%2F4Y9wGGD%2FkT6F6bPW8cMoLvDo8jnLEuF03VIAS0mrTkfq4013V%2BZO1AVdRQOB7oZaRXjMda0SvIZsULe1D8fXq5hTgAZ%2BUuACHWGOshCLUFJ4TC1h%2Fsb9SNo6LygZpejwe9Xg%2FZV%2FEa%2Ftlug4%2Bx9Qw1HtjJLVVu3F8g8XGbjgMbkDoKa%2FADCt7RqgbnA%2FOuUTcwrN%2Fw5uIoPfk7HFVISwM4AyFghtoUjyIsFuPhzc5waEXsDG6x5wj1%2FaqGGRkh7eoOpNJ9K763F3k5otZUACndoJW2PIa3Davms6byVURF7JYG1ZnAtjmNxYmYdsQkckzbW38oCRQ%2BGU9AmYHYnNmMSAf1IJ%2BJD8sF2qASufeKyrI%2FvdzFED5G8JkFOc%2FLyrwzpT4dIDFtxgw6cLOwwY6pgGy%2BzkxciDXIvdaB1z%2FNvUVZkkSJn28Bzbp%2BobC%2Bl2aQAsOAI%2BOE3LWvE9WQU%2B%2F6P29j%2FFIh8s6vrbOoUm7hwjsopHI7CjHnJ4%2BplWNiFhQ7gNy%2B2TuQznaHU0FZsC8tPrxELBZDaOx6xssqh4L%2B3gT7C%2BW0HlXPgV9QsdyW7OU1Lq%2BVP4B7k5iGijyHBtviCvBV8n5h2BRpUtbngkRE%2F09QPCwORFi&X-Amz-Signature=a8a1d3062d94536ce3193e52debfcd52fb1a56d3436ea104b6ea87accc7f925e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
