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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJCCOGK%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCLfF%2F5hI5aWdEq53Ew17YANZygHZqbOyxT23WTSAFyFQIgQUV5%2BgwlY%2BgMNGdS5uFdEQGxEcmba%2FOapKqikC7ZvMkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDD7U1Nez0LlfOSLIxyrcA0n1Jjhd%2F%2BjUWnqaxrn2iE1adMchMdGDmuf%2F0h6aVtRAVGOyoZX63JKBtyrrehtgq4UfHeLuvj3iN7peoLot2J5ckoJeCD58DDbZkzJabSctkfdRetOkgfKZYCv26oxBvY8isJDgW3V0brWeY3z9%2FYHspbYVrucFSsf%2FMZdsLxXHeikJTOsxpQ0MbgxxpV2mcd%2BET5oVmwHghr1Qj%2BeO6kH5Wznr3FSERkdB4wKgMhyOt9NgnDc2J1RZEk76wsnia3ntJwpCYOkqXr0KsmrA8%2Bacur1wIhyYJfB1Su1Qt9xRD3cCBB6KC%2FEwYm%2BXmuN8gpTGkmW0X7HP5eYUW6%2F5oDlSJDyHFdBJnBoILuQRmop2OsF5WioebJM4QBCNQ3KGBthn1%2BOAHF7e8SlcD%2BpU%2Fyny7u%2BB4zUF7vS5W8C4cGUN4%2Bsx1uyZ0k1hln9oRO9%2FUjxxkC3pZkA7usQnbzZ7IBKt2YCoXxowprOzFDoxWe25SBbfB1WiN6CLWT8MqwHVQk50SzD4J3lgpv6OIQ9HK%2FH1EfuLTmZPiUMwSUGJCeWe92BmP2Hs4FK%2F%2FQhbhopWi9PWM1J2xxx%2FVUAD%2F5Q34E79jIdd0sd6HDfsDTQQM2%2FTuccKamXoMw9gNMNcMP%2FenL8GOqUBMQMJDdyJnKxpC1nJgl3H99exOk%2Bb6mz0ExcZH3huNeNZLmeQ2y3ITiAWdfTet%2F3blMif2qQF4JzJaBn3UlECcGm5ftMa1CQmIZXUrSRZANIkdvzjgEc8n8UHTDgYXuTuJuh0%2BG9znJgBxQj%2F%2B4EruRfNw5H9DytwzSTUQmcGDHO%2BKp7LPec4UGQVphydWg4mWzMOnTc4LXBUcPbuUOjyT5BgFxkE&X-Amz-Signature=b874ce090adffc167335f83dded188d11f012d8d9ff764730768ee70b468502c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLD7L3Z%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDKkUt32QDW6YyuqE9GDiN3pyenS7gyu1cSDH8OxJpOEQIgWUoyYNey6IIE4KjUd15YZxkEKu7a7Sc5pzpYuPaJ8woq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMbIac%2B5sRpmj83EZircAymv72afcltOSCDTveYPuvAwJY2hg51zjVPF3mypw2ucboxz5gR5z2qfsCxi9c2BfT4KBic5fBJd1RAXUqMERguaCsyyXAoh9cBtPkyocQ4CKotHyDcSqbs2OZeCat5F1Vimaze2rAPQipMrHF3E9if9B5v8%2B3O20V0%2BVP3ib77X11vm3bjg3uN69C2f0%2BmJF5cfuRYjhpAPXGtMJaZ4RCqR7ZRu20YnCKHkrLdLOGtoM7dlTW3uvPfRCOpF56rLEdNx5%2BXqrWNO2LNY%2BAE95SNx5OCoCNeVowSiNxADb6Rvcg6rj2EUTuplGx%2F74AxV5QwG1DR8Unu7WJPcTEHtYhhURCLy3zC0lC8HEGc2xu0JCNlqeYQhd5S%2BKhqqXAksjtnYoiJUe27XUnhW36cKccq%2BeXeOvrAZw4FygmSj72PbX3W1qnDsQqT7vSTa9QYbGxbILXsNqyVSXZtu6HJ%2Be2JM23xoPrTPOiuYUT2cS1WVSpCOANokaHK3IiWCENPorMQqS898ACXenBItU%2Br%2BwciIFdUZIhxvib7VpzSUDKTS6FgwJr2FI1hCWvLX8cvne%2BOyM7B8FnXwMHxjrxGeiCl5dHdBODUeDA6Ix4w1jO%2FJxbNwhGb8cyZQtChUMJLfnL8GOqUBxX2s5ExjZzFvkfH9up8FlDRZpajuvrUrjbGIy7MhTaT1e7asyrK3H8l6jgoug4HcQ5RM5P4g%2Ft1I%2BUpA8Z3qJiKeh1pyj0rhnXtCmwtbXImUPcqIWnjTH2cSuHPQFAYzzSA73HSvjdzeZ6HXW2krR2XgGCNTeYJ3fxuKHdUw1QrvuQD4B1Pn6tWGoNeCURYcXpTdSup7DCAcPq65n1Ryn94TyFju&X-Amz-Signature=4394e4d02d54a29a99b88ac9b95e46b463729ef144fb48df11896a01e6584566&X-Amz-SignedHeaders=host&x-id=GetObject)

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
