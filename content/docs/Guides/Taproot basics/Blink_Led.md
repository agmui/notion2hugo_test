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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HK6LEX2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDxU6EpB%2Flx6kUzb8JcE157om6SLD30yOejVsupQ4xDegIgA1mabJX2CmdrgfVOpytTzTPWJc1fU1p3JHEx0kt2qF8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOfRF9G5BPJiHLQeCrcAy7WV%2Bfx8i1ZTsJQSyvFcM3ldKtx0P5mESNuZyp2cbmVs%2FGBooxp2Otw1jfAaCx9uu0gCZ7dOLs8XkqkRmpP8e8IWVwVwHp9EbovGfTmQImMSYXb0HAhHhU2ie1lr6926HJlOTj7aPOByeFQN0ftP5Bg6XOxlfK8X6x22h5BYNYRwRNp8IaNgnP9YnV7pCrWe7znNEtjFmWizlsxgBNFr5YolQD0JM3qAqXD0Zn7RYMjKVQHLRd62LtxhKopriJIvxI94uRVS4V4yaB6AZrO%2F9WSJkk3TwLr4GJFgwf42alai3%2BwSWqiKtNS29gnSP5CYGUkwdbL7KSZ9p%2B7tadxq9B2cQJo4GTKyq4Cv0YhIJ1PaZ2Po8JDdCHREhRVruFk45fIZo3Rl%2BmQFTF1xXSAdwdoJTCgZeZRmWDZ17k5EHv0vEGNr4mZoi73M9yL5t7q0J7w37ayfGUGbkd1yLlA27zYavRt7jAjy9rhtPA8SGSeh1UJcjvZwi97H1Th6erV52S6QAtAJweJcZJO9u3iL3R5iAeqAwUFcVO0AZ3GuY2pBbl49xkU1fZ2U1dXDEfefuqUHeQqTzkpYM3AjkHZRQ7lKdBelUqwuJC6IzpWOwkJMYhFS9ci4XYrVNQaMNDRv74GOqUBlwQYLrFkVsyryM5c4J6jKYs%2Fi6jTSl19UVX1pcM5YD0oD9QuebGYQ6zko8G5SaVi6ixUjuhPAhbRElImrXsWpPA7zGsqRpvf3qK3345COOLrjQLISbzUZWQTEBgazQkDsQIUq977W2bblQ6eaaf7thIfBHP0OThK63u4FsaAsImsXq3hWRGylDU9whCtK8feokjuUtERHP3bmVSK95LQ4IgKOKtt&X-Amz-Signature=ff255847c0cfd7995ff4b151afacc53d9fef78586f36ce497b22ed441ad68f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AYJ5BHF%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFroOWTN7uDPJ%2FQES%2F6M8SImJvOc3GhbvXYAVhVxUE59AiAqRnKPXk65hJth5J6PV53Uw4NEPZcUWbLvJgBkNcfJtSqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfU6xSu%2Bs9UxpnPNhKtwD3i0AuZsxt3i%2FnTTHf6H1O0%2FFQyBS05UcYrQNWNETT22GCQLebyULr7UbYVdjmLlxHrAO7cW%2BeKEuMn6I5pq5gvR3pdqopf3L1xKJB6ATecBeP4T3KdGls3rNDKZzWXzHEMzgkK0x5QPSHp8pxWIzq%2BOtwM%2BAJDNmr1VmUvl5nhaVRh6U%2BLQpDXP5pAuXXqQ2JnHSywGf2M7j4W513xAo5gx9g8FCZyYG6MQQEmenE6GEH4uf7RT%2F%2FOy4YT0T9sEHCPMjm8YKL4jiIQequsn8QxQvNeDh92hFvQbe8DhCu0jAtIe4%2FzHz%2FBSAkqj1i4SylEJyIsv1kCzn3mIi00mvHSfRbFT0w0LALV%2BjCwitm%2F50aMr527kYkA%2FaZxUA%2Bdg7dPgtcKZ31Mtijrw7lrwi2OZkAQ781gBIq9T%2FNHmZjMqjAPK4V%2BK9dq%2BSqKvWuMm%2BUX7yqeahTtLRed6ZEoEBCkv1MfZYQXbaSr%2BR0PLcN%2BZD3DWd3MdmADeryyd8BsoXgKq4PoBH7u4zlO1vx%2F4NjVAofxWUIWkN7EcmlBusa64Qr2E%2BOog7rRbjTPKBURYDXAU7pJqjcJ0r7HV%2B9I%2FUdYTD%2FsVpRFEx%2Bo2ZhH8bjyStfZQvShQr%2BmU%2FUF8w0dC%2FvgY6pgF%2FTbvGI68R84S4eo8qBpf0g2vO%2FCmsdO0bibzSaroSJlpkM8P1ahe%2FZXVBycEJ1UT639MmEnzmE0EZkqY6AKr1KfY%2FnIJAnsANBEEYuiAdjRvk%2B2JjPewRt1%2FRQQCd0tVFlAwoHS17GgaWJK2GDET0pBGYg%2Fav4ztdcJit0aSuR2Hg2bd%2Btwt8zrUxV00Ut8FPtDS6IuyZ2kO%2Fswf9ECw5TmO4izIe&X-Amz-Signature=c48f3e9a287c9eaf5318dd32b4b92f738cbde1bd89ca8ece8608ca2102a0cdab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
