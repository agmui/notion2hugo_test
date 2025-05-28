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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJHPZI7%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICd5K2murlG9x9l4%2F1rgrkSc4zxjZwHZxCYXeZ%2FDsj7SAiA6sGm0qxtjCfJ5BAIzw792LNR7M0Ke66qdbVGjJXOElir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYNgusuRY05x2issAKtwDNyPsZQFexGN6CnkbhLmeMT2E3XUd1%2F6QZstVIZAQYyjjrddx07n%2Bgglnpi%2BvqWztZ6TTbo7rTo2xHsOAmUs6731PmKQSqajVTxzQK7e%2BWCd6FkmGL8GfPZT%2FuYfpEjjHkCtnYNUTYzn1CvJ4YYu5cL6RjaJ82BjkqxhwHo0CDHYT5cJRapCxLDw6My5a6ajWSP8%2F50LVTFLhP7W9QNvDRinLUDzgyiyKJAsVxuY8w%2BGoC0eZeyNUIdOk6bJvmt0U4xbew9SRsGCoEfvwqFyK5kc6qFaTmG1dTFtgn7DnIYpvQAYZWoMkuDbDSv1FKn%2FXpZhC%2BavYHA2py3R4jxxAIjo4y08aH6rJO9Mop7mSycCYbh2lyyfgkfkg7yzjWhJcWOVuhIYFfZKlO1l6Kwi%2B%2F%2BiFPTjiIKEXuVErRr6Vdz80xRWxIYgQxOlBXeEm05Y9lVyxK1fqm%2FrRBQs4%2BRqG%2B0yCgagrGAv8oxDBqRQ98BQ3iHEVVtBdIA6MpQPJz86%2BNYNv1cmP8xSdBq0DCxXab0tGW054QOnZjMtosIsR3SEFt%2B7%2FnyduYXXM6hnWreobfjZdUmiRCRcp92QvO1r3Q4d29QeAN8125OoXLRxGotOtm73M29wF1CfhZUkw%2FPTawQY6pgGAO6TtbgmOh6iqsW3PA8OdraxhCpvWIN%2BGCmom76JnfBMamjsORp9bZYg7A1lSGUKcPCpS9Z2G6HPUq5woPdtblojIuL89Squ483RaQjBURnEohRwKGEjtPvHfWsMv5H6xBav4uaXvYdD5JEAKWU3NwJXCDFA%2Bc4b87YtT9V3bLXzKtGsHNWTGt2ctSq1YFN2NuBrllRAaP7cZr%2BR0YiAYuUuRpEAG&X-Amz-Signature=c508ff057023205a7f52946be8fb5feccad96241b2e88dc56a9ca5702042249e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLKXVPI4%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH28kY%2FL1Arb2snXm5FcFRFuhcUrYlR%2FJbGQQ6liMJ0ACICkziZUY5etHAxh9DcGvRrloPIq60hw8UwWF61Ii6IUIKv8DCHEQABoMNjM3NDIzMTgzODA1Igyc4nSMeMh0K244M%2Fwq3ANIaBXdmvHOk1jpc%2BW1XPQfwuLZSmz4frFvIQVm6c6VB9uSM5Lz%2FaGwQJSYBW%2FzmGjmcmOiTs1cep%2FETFQjwSyzhTedNSt%2BCNVuEq9QFxd9IzfGz%2F6nXAFzEXOFnQu0USyIYL4KJhL6JypSi0AQin5oQPdQ3ovUSuubP%2BN%2BnHD%2BIBg8NxQEyXET101kuoivPTDc8m2xrOGje9OAexzAwnT7d8f5uEbdo%2Fmmba%2BgUvMt%2FyOoVMllXEgFqhbr9yXG9k5YkrDNDV4YDZMHeNoEXd8m0F9vnVQmW7Reg1fmmItASm8bgMSEeFsXfuExfteATPEz7phGa8rB5LUn%2FbdiL%2BQwstPZNqG7qXQ6FCjhmEwu2ZG1v2qDhxqBbYfUy98HrS8eRTZ2AAlYreI6PuWPb4%2BXYS%2BhZlMB1GSkpgXTodYJO4n%2BRf1TyATG%2Fu3lcMEcJ9f0n0tL1z3JyIkCDR54Evd8WjVmuMkMyygbymHjKne8ie%2FnH%2BsGjbEA8eKA6HXeyJU%2FGShSW1HLby%2BU4Gq8kaex0pUcfhm5LvwHgOUHlZfHKSidBXaMVXo7yn4D%2BqTrQ%2Bz092fd9SmpqAuhGeGlxgm%2BY1vjH73G7gd%2FUddpgDVdLTSNrL7W%2BULgffFQPzCv9trBBjqnAUlVd6ZMIHj436bpPWdXdYxdTtxilhHqxGdmnMgo8MLv7aiOccFqoMqXmQoKB0gBeksIfIh7q1i30p6gEqgfi6RIlo7gmzmC3BJi%2BUfLvFuUlAlr5HukU3u86vFTg4DEktot%2FJAPebpRzQwUY7Rbaao7kFFZXFKmgPPIodLw5AUA2phcmhGDL9sBqWqh%2BWgg9sjmfwd02P6MD7FEQ39aPOUwC5TlovB6&X-Amz-Signature=35e91bfad4ad747a82f6f74a7b35fadc7c9edd7a80f57546068b41150046d244&X-Amz-SignedHeaders=host&x-id=GetObject)

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
