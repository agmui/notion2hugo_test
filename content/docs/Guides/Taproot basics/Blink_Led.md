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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPH7LD3D%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCmLH1pzGn9WIY9C7h2UTC5XPzmAJnojj3e4i0HQnifgwIhAKBqoJ4lGoEQw60Grzs0ScYKX818AeMy%2Fm6lx70qGgMzKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlvR9RAYqVw36bvuEq3AOtvWeICsVyKhbxlhqkDqlD5Yoic2fZQiUr91bKmGOSlwB43eHQhbc%2B%2Bug6%2FSRhj7PMg1Qv53NVU1vnADf54q6ukrqinRg0yLCoTYDI6p6FBe3Uq%2FiQkRCXoCepRk8aNLZFqOkBGjWpSybizyQn7dYrxd9gCon%2BjmCzvtBMbW%2B27O8hDrH3VElASaK9lOguQnCWK4tCfpMvwVtOH%2B1DwxGguiOJ4pBb48ckAY5oZ1eGZVnc0zMo9ybCJZ3AEs2TRLGx9vCffG%2F9J4gO5OhtXRrKkssJavPubWlcEQEZBj5xSs1NT4GpfhqV88V3JTgOA4zOoUnHvnSJwQyQnsN83y7H%2BFVWyl2Eg9eogN8bRGV%2Bg2t78G8o3W7skvfjfXD4DcT9qPlTtiyteGUfyOW78xx%2Fj6bevgSzFNqX6O0HSX6%2Bfrd5POwyqGa8Wr2rZ35KgASfLGq7q5MZwGDZPzU%2FJSgkNXaO65xBhP230iD6E2qFm0hgzlJdQ9C99cVc7ija3QV1MrLJeC%2FIW2gCWNZNIn8XgJxx9fw7So5GssSEBz7OZRomfxn6RqkGoYxDWVPUrn0yBymqn5molBK7DfnmQEH%2Fbl0oHPHRPcG0F3k5QGix8Cr847p7ennxL44jpjCWosi%2BBjqkAYIDLxRwKTQ%2B6zaQijf4RKggLy99ZJAWCRemcvKs1wILMaZ0OG6O1VjLeGWomR8gVRuOP3%2BerMKWVRfT9nVIbkxbZRWp%2FbQg8UnkOTTgIXlanwq6pLcPCP0Gz3d2htBrPokPkvKqgbQCiCmh0dMjmjvTC5%2FSkEl0vdoi9ZB%2FT8CAe0uWQTjQUIQ0DebAzz43gAHv18Mu%2BmvwwXkBJ2by3FnZ3JOo&X-Amz-Signature=715402b79d3d41977857ce63300c179aa606902a7312066d17826425751ae3ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4LBEAP%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQC%2FKJu1iEG%2FsAFDPO93hwNQN11%2FuEaUlVBlFzt9LTK8GgIgbpl%2Bmqd20pNq56BGyIr6uWNUiY7GyhgtWwf%2FsCx20wEqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FHEK1aLt7XOi2WNSrcA9ICATWOW%2FY0SPL%2F0Sdz6W9lmnFmShkJyuraX0WLoz4F6Nxs5WYlnfRF6i8D2iLljOPQ6Lttu7LrIhEjIuv%2FVcmQBmTgrx89Ll3tytuMYTxu4Yg6gDdT%2BbNLoL8XBS9ypClqW%2FjtXENOHddWCemOHNqxAGRpqaDaUbaXUXEZnlMiEqzmNOdOUMXLCu2zWFQWsNg0q5Di7JKiSNHia3Ks7fcVQxYwTzCakk8gpQ0NPoFO6do367P87WuExlyUN6hVn9mwCO2%2BKKY3kqEAKE00N%2FpOwqwbK7kXsF3yzltg%2FUQVght7BO2uyvVM9qkkpi1ye2CmBNcwg8WKIEecAVBYGYF0lNAs7Gle7sWGa4VuK%2FjepQ9uk24zRgRxkXlQ%2BbggT3thiF%2FY7XpMPArU6EBaggl21XDIqb9vJvYkjHgSkiDD6kH6Ks9Un7N5ZGIX24OgqaPzFAI7sHN%2FoP51YtT9QrDx%2Fmhie%2FnQJbnO3QnDzKChNvuNqR6%2BLWhhchQj7Yqba%2FNm2oYLiO9pSV5F0TjZMDoIeAE1rzI960xIPorvpmEiQr7SLAmx%2BsLq3JQdb%2BOG%2FVW30zFAOV6XIwKj9qz3BWyjLX%2FDIbFmoWyl0m7XdeympEhxp3Dy7Yy817XmMM6iyL4GOqUBFY%2BYvbeZgewUbfBImj9Geaym%2BM%2BQGcfGoTDmaNrPan8vXu2jTx47KmMsqZciHjttZS%2F62C3Lwv5dnUJMJ9pz1I8jWtoGvTafZlDLpOJcV1tgdgyd%2B06%2FUh4ceHcEUjjPKYTBmTDqY%2Fk2jylnXytsxL5n%2FhaXAgsYUAItkwpnXKOSdX6Ke6VVs7iG%2BQtsqsZk6TFMHLHCyO3zPPP%2FSvWeivR6%2Fgow&X-Amz-Signature=715d38853b9575793424544188ec23a8558ae4e0f87a2bac5be17a7e83219e99&X-Amz-SignedHeaders=host&x-id=GetObject)

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
