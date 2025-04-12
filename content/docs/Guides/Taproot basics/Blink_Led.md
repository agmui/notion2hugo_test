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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QILXQZL4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCZpHAJEEmZEAX8qQfrKjtTPky4rSUWA0jVit88XylW8QIgc1tbJk78dzlXCNMZspK82woo8EK7EJgvIo7YD%2Fllz8QqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDnjyRD6hNP2YG8CyrcA4tHknvdRwzpyyibWqkiLnhmy5IkIV%2FI%2BFk31fanYHWv4Nj2VWR74E7F%2BbBsZH%2FIWg1eGxruHPCKogJqrww59yopKE1an%2F2r%2FEZglr7Z7m8L7IEi6pZDfRt3JxeNbgiU3uV3TfyUL1vEFqfUK6POhwCtauhCfnYeROzgmcs45KGg809CHIdq2pRP9fwOauUGzdAjPy%2FeSEOie5XSuO4ucXac5bDoozDU9%2BYzSRqMWQVzEqudYLTWSWEfXw%2FjvyOiGLhRzLothDFG6upVzSH4DOiSudWuVJ73yP2vW2l88qlplf0e4W8pGHnFI93siUBTDdG%2FDaPYFEeztZo%2BQN0C12%2B5HUUGmmxsbOmeNU3WBn%2FcqxSeKpBA0iurS%2Fm4F%2F%2B%2BE3Pes5cWcnUax2PPLlYNKJXR7H3HIsT2vyQ2wkdHyn0Hc8so94t1rXb4r52YBq3w4NBvYUipt2e3eFb%2Fe4x4QiT3nk9mWGWG4pESoECkS7Ch1C2mGJRAhOn6ONdsV3tmIeMvcoCFP9Re1FALEN6%2FBbnteYZUsKUWvHF0gBHxkcGo2HJ5WqHLadHdTSWXeqSg4oFLPOYulsI57rr1%2F2PBjGFjKPLf8LnNzaR9EZ%2BsbjpCL3gF1m2msz%2BY0muCMKiF578GOqUBDlpaFm5EnG8xUtIhLJOoBIziJvB0gW2TAcn%2B0Rj2LHkVHrAcfDSfZ%2Bdzr4ge2VBNgG0HJJy%2FvrlU5uCsnc4wiYlup8F84X6qs9JP17Lb0%2Fu9a0kBVActurOu8EU%2FDbM%2FenIEF4Suig0%2BFegUds2QBFEjWnqAg9tftHtv0W9saiymol0Fgce0Si49XlbqLwBuDgZ4Owhp2X6i9H%2FkU1voIAkuQbYe&X-Amz-Signature=c317536f3f3ca3f70d2fb108a2f000ee49561c5ec45c5ce2208842728e06233c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644H4ID7E%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDHnyjBM59oTaAQfXE%2BjMsR2RTJOrPaaT0g%2BBj5b%2FCeFAiBFz1N13pQHEfDKjlYZ%2Fq0Si00foqBaeCK%2ForM4KanEkiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVpuxeR1deQbvYhzKtwDADQPlkLAQYDpbxBPoBKGlD%2B7G7zUfolrYT3bkH4fDRgt1aQagWl5BpybbF9d6ahF2V%2Bne%2FQBTPVSeyexanz4BrcCJudwQDsV%2FZZ2QuRiHOEdRQ2%2BSbXvPVlKGfO261Jgn6zZdUR9oB6MiW4OJsx4PlXWhxJ3%2BUwS%2Bjcw4dhiefAZswGzEx8gG2L3JArKgY0Tguy0SuEPt2CnvitHMISOUFfnIQm0CuXcRyBkyUXM6uUZxc8%2FEH%2FwKrFAVL3Kb9BhWYsn7HsC%2Beh%2B1yDCZfyyHjQ7Wf5IQWZgUf0%2Fu7%2Bu3cU32ltrHL6%2FjF0ybYfqKQEn4hPJhMhvrLIlJZMpqb10r6LREN5VWW8TZ9xIyHVcDP%2FclEtikSW3bOMcC45FktR%2FVr%2BApD8wzK07%2B7XeKGzCDxZIsVrstqNHfBho3dhrkHf78n%2FQsP6fWoaTYVJv5yNfrLEtJ2nV6qrqS5%2BZQacOjO0poW8MGCUfswtQU6v%2FhCmovJyytikV9EgPqO9H64tpOHuRego4I%2FJXQa4g%2BNOUY6Y%2BCt8ObtDxWtruQZdjSX5NccPAs0vng9IaKHEQiXgUZXN4UmG5TXFRR5OnW18Lsmd15rQEdFFTYstkYEWj6sV%2Bin6uS7WNUzWM0AYwh4XnvwY6pgH51ktmVtcc3ISfk0vsVXOtdwKslJUl9fUSDV55BbwKmdz7wL6eg6bssd%2BzQBeYI%2BurN1NU6dtV27qzLJ8hrGYxwNyMMppN2xu3S10Xk%2F4lwZg3o3VZxjIJcIzdEf6yjiuB6WMeZSKP4H2c7RxeI3aCdmwVHZgSA2eDTnilA13VrKGeMMzXstuVYZJC4%2FQQAX2A%2BeM1pJOpZvLj%2BoYIkr3xJE5tUYTk&X-Amz-Signature=7316b15beb8158df7fbcbeb7e72ddce3cc5af1cfbb8037d487cdb3d2743e1ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
