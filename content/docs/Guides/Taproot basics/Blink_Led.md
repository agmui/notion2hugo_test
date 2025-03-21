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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466673ZO7F7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFl1A5SPz52woXvWWzXpVhVM791HH9RkNS0xQzn1E81UAiAVK%2BgcKxyb3oWgbdGczSlWBw0UonpU%2FUexJgpX18rslSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJCtRkOxLFarC8scKtwDHvtpsN%2BDSCIfpMTRLDWjZgkDDQHnM%2B%2BQKvnFedB%2Bgu0r9BwcmiHOipceIMUnci7vdFMd1gVgwZCD4QjtwemxBVlO0AMAG4zy2gGyximXzXZfgL5el2hgJgARMG6hQOB34FzN8sueJczKJj%2FbVAdv%2Ba%2FSjEJrtb3MPoxDDPIgqTDjYEcjakXwKc9taYjOLE5x%2BncLoLLEfLRBtDmTVneuF042A3LPaJNBPz6XWMqDckWME1PKzjzI9cLK0RrqatYW1idChki73xyyMOTSZLhlXCh0nYTzEaQ8SGg5nlYroFI4XFzpYHm5G%2FdpcrZxkFWCc7elDCUXbZimDu0R8tB5XwXyraV8Sxu0Z4vcqSLAEJCWts7pjEeUnRnGyxFeZF6JV7nE1Enj5WMEfs2yOB8E2ltsXBtkXFzl4VhImUrJMyeccIpPMnT%2Bo%2BaIepxQRAx72ePWQhtR7zDU1bE6u2PVvdjvfj7%2FMAYnRvc53bTyWekmGUOVs0W5hTxActi%2BEi0znlg7eLqB7ipSmJafXngY6aIlMH736iO%2FcXiU83BOFTj6Hd31M8Lr6FBWYsIbJAlcOhqJyjbJgSO%2BQlR0xvPo1%2BKcZYgpwmdRYjBoDavWn5yP04YI0Oz19SyXbQEwh9j3vgY6pgE2j2dSy%2FWOcwEK%2BVA%2BRykYCf5xEdqHZ9GWgNIqvyNxXyYyOl7vsylrBhCCtkmDMuFai6Iwyv1LG6JUI%2BJGbz4GZ4oOZf0p3TkVi%2BI66ZTOjoLoAYuLVXr3k22rSpKO19bUHrtqQkpa%2FcmkmlD%2B2D%2BDOoJaog8UpTMHPbJt2O0hLG%2Fb7TUuPIsDNSylLd3jwV3efXeHHR%2BeIlv%2FThqbY6Dl6zYh4EkE&X-Amz-Signature=22db272450b296320b627c7706139850605584937d4aac52e135bb4b867038a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL5YRLOC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDRyKNHx%2FTIGoqwg5fF8oinwiUG9uVigylKw%2FdouaG1LgIgVfuRXzyiBsaF5kyICu7OnK9HvnVA00zgm7Id1fe74ukqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBO2ZLO%2BEx1g4PzNjircA3MkfgK0FrR5dCJ8pGBxc6%2FnnQYcz6q8TEM8aM202eITBtvwIQWyHXX8TKkaoaiG2K%2FAzoXCiY84E0YbfgQNpngU9nhasbM3FxG5gCnoAMG9EGK8wudgeExAKbFoGH7Ce4rRuM5wF7Ld8kDRPTyyb1f5n7yHJ9h64PwB1aMFNeWzi2ioFCYcR7F03Or9U5zvk%2Bl%2FYvB%2F%2F0wP6nwPkbVmpxM2KTFzfLhGtpjkbuKTb9zXt%2F7R3ADpP4yCLMJom44gNdklZEpVkEiQGYU4m8YHyaiHAbXOjE8RIMQ76yxq%2Fo2WeqfbUDvLLX9%2Fcwx9Nqqg22RlT8jggAnSlQwASyLdjDN5KnPp6evDkWhERNyazBqodwmi0TLvj2t3tVzXyHaEP4n%2BwDnh7jqTudO%2FYCazciIvUsswHP96AZmDUEnWINNnMZxDM%2FCPnSRdS5AnsvxOtJH%2FW0GTpLZHTJiaByMcdQCH2ySnIhE%2FeH06KIrx3rgjbwYKCslwbm8AYIbd3AS1Mcd3%2BcKk0dmoeAuE2pQvjRAgzzOMiyjvszt%2Bw9QJGRK8m0YMiPijFqtrVeWz4ySaFD1dU9qllQRvf%2FYlgxTF%2Fok6Y8USFtqsJqHdvre2MBqtK%2B4APgM4kT4AThuWMLPY974GOqUByLLDtd1hA7VIqhg3vfsqc88UtE6kGMHLS1as%2FD1MOK2ZO2%2FVtn4fxQngOLL5%2BIgHo2IWTgon7AaJ66miUQtocZ0q%2FOWKQTYD8D7AGAY5IzpSQk84%2Fx5SXZurq6IBOS3mPvjTgznUeCMy%2BFxkG77y8OD25cE6Jrl9m0kR2cqFm2AD%2Fr6IF1%2FBTnoyLvrgdG9chZQw7ysRRyMoyDImwXanvtOL8uqq&X-Amz-Signature=9a26ece9113ba27783a9d876e4af138042332b2f4e5be468c0267eb952ce63fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
