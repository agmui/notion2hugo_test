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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466533VFUSE%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKuNgUEuWR%2FmpS84VRyk3k71GiA5mdjixTp%2BEG3lfsBwIhAM%2FWK6RgVsEUFIcL5wA4nRPXiDikx0QWZcuow274RsdfKv8DCH4QABoMNjM3NDIzMTgzODA1IgyuSMKR1FsIiAo06bkq3AOwVbHj64mtZK0AKx8lA%2BOu0qGIe2%2BBQMzKA1fCHEyIStr1NAe5UTJCAB9sx0NnH%2F8skkdBFTgdvKFyU1ro8IwdaXWUudxgQrHyhn7iZ%2BpeNHhG%2Fn52i%2BNO%2FnThuFQBZRgNpUZlIfEogiBxQbcxXH4mYLbq%2B59StLA%2FRwEF%2FmMTwaDbf4hKtw8KTkt4%2BNzqlxpAEdNvfNRzbBGeYLmEUUZcVHXsSxIa0BoGcdxjxk1dg7pNgHncPpNHvdit7ig2Mut%2BWtpq35NUgYrh9Claa37wkT0TXpV6SQ8M38Z7UXEUJlxC45C4%2FzirM0J7XoAZxol3vDlkA6irNQyoDyprUa5jC4djXoPc13jKtLFjQ3sXeaxKuEhTCFYCc4XhZFgA5CwMgi3PzPiZMZ2SCsToBbO11kY%2BTFscphvc99Wz%2FSYhpVlkTewDBq8Af4YZJcfI1jE7AWFkMflRkVMpPXiyBH8QLGMCST2QnpHl09sDr8OJt3sEVszwp4UkKs0WbbdX2Ox1Z86EBGHQhWp4MM4p5tcrkuH6JP1xCDYNHy8ko18PfBYTtagIa%2F5AoqnU16zzSUWMOlYzSCbiPSiBGGR6GsUPX0ce1xz1kSVku5QzIatMThMUrRVFeaO3pIxNizDY3anIBjqkAe5BStCC8VbQaNe8Wxxm1Esg7EiUYrNuYumGPMyZqLxBReuWCKry8HsdDVErDbicP6fIM7Mg9bDDZy4Vat5tqJFx3GXVp1QFzeL27KusZSybfoy9usDYoP%2F%2FhVFRYNnsqYasYV%2F%2FUsyeC7rXUCK%2FRooBx9sUHOteQETbUM%2FsUKmk71%2BjhlynnM6%2FPaUv23b%2FHpiPhN%2FkWqG5YikiMSS85jON5gAm&X-Amz-Signature=8410c9880f6ce5f79e62d163e33792c5ba9cccc317c614d305745f4b9f8973e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIHMJOV%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFG37AibGqIyT1aifnqj24J6%2FaeIf%2FR1abhrvwPZ6u6AiA9mTesKa4n5fQ2PDywNNtsFg6XTr3yEd%2Bv%2FA%2FiMroDHyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMMoE3VpNED911x7tHKtwDLVAYKxTetU4acJfs%2BVruBkIuqtAWqmCXGvL%2FxrKBX%2FmniPb%2F9VAdD8FFyZmhPrId8ZMZbtXt60Fu7R358dRk3YsfAIpCi3vHxmSbI6yDtNLQoXduDH3v3VcpwpI%2BBKolxKYQ%2BQ0RVh70oUHiWY6QSS1qzzAGhkqkeMq7yM%2Fz5fy4AOOtRkmf8cxyL74iwHPT%2Bl65ZKfJaXw5XDyU%2F%2BKgSGthvx0Q%2FpFPnb9FHfVws3gca8lenoDjamEQpPeDjSas4q4E81H3Gvlw7%2Fwx2I%2Fs51ZQLlgey%2BLinHUKDwrG2TtOlzbOVWgInLRw83ApAXTvsta%2FeD6mmU3sJpq2mBuEOXvNPKoHLjI18DLbmdtTXPrlz9dRHSFprMeWR295tqgr9UasMq4bDvYW4jEVaMMqZO3%2FtL0Gw%2FBpFossCQQ2XrgCWLwcs7zp%2BAezLRSk7KkIE5RM0eJ%2FhiyruqAUsZuAGZOqaYIjM7w6Mo9Fkb015VRjBwop8GOZzBhY%2FpnIpI4sNwyJNCQ2DMfkeVf5TGWJJCm6JxKMz59m66Piu2I0gfeDgvgGRLZEqiNjk7uryeJmZeAowd9FA23kTO1h7TY8cQCKcXGM226PrZPbYwfpivSMC%2FoZhJZPZ3o8LU4w8t2pyAY6pgGL78VyYl4GGG8yoFcnZkLQkQLPG%2BB78v%2Frt5nXoKfIrZz66iuDs%2F3dh21B10eU2gDbd3AM7QfE4cndcURSJ154SKrdS8FBrt2UcntE65L%2BxLUxxV76E2wsthA0u5VcjFCNVHNkFDS5vjyx6TfXIvQKf%2BzBmhTWs0o8xeNrNtjM%2FmkE36w5wXQST1xElnxcGEBnJIjy5rgKevdVpI4WJjG1NNXa0D7h&X-Amz-Signature=38e0fba9ebad989e5166ed4494b172ba529ff762688d640eb5d555ea9d68b0e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
