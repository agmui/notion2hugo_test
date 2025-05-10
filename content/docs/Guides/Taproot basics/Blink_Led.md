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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQYTLXX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICumM4id3Uz0CW1IYp7xio9gOAcJiXxX%2FpSdcuwTVILvAiEAwNRDfIQpIsmWp%2FFhW90cx0dD1ujZsAvB96IJAKKzMToqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSNOGwGwpHSE%2BBCQCrcA2euzfgmxCNvIDfbjD0tyq0HJSENM2NhniJ%2BFoo8X%2BkcqV%2FCXIj0n9Y90e87bOXG7m7uOBe3sIG2umRGPJKhMvaKJ7fSFF0VLG5JUtyhlMDHJvrZoke%2FPudgj%2BxzLu4CQl6YS9pgx0v7g2p43zZxzM%2F8jGFFwSyk6NrqIIEN%2FvR78HWKLEuY90PHaoVXy1Dpl3NOjEKu94RH%2FIqQb6dkwFKBcwrMvH4wH47WjL9Im%2FIbyCiyuL8FWDZA7Xtm9SAuQGmevNSgBQlTcKj0i5cBm5aVUy8ElH4R5MbA%2BsdWjbzuS36OE5ojhVn7tzcQEqPJLALuPRFvIs2klMSeDtqjfvicSrJPqEZwO3%2F80f6NdUVQBmEhsZICyhxDKApQPoKxKXn9HnKr5kyO0GQZEeW0jDs%2BnaszlMRxSa70MMkApu9N%2F4bngTFrju4p2imkAKIvU0b6yM%2BIx8uG5XZCg2kUxp7g2SAVcnfhyBOAsDnjK9c0aXsVg%2Bedu3xsFTuZrlzjS7Qlv8rKqh%2FY5yw353Fg2HYKvp3npdYOmXG5p%2BgvAsPJN4c%2BzuJ7L%2BtJ0VzaQxIYI5c8F1%2Fj77i6ZXYewuCU9jvfX%2BsOu7L0m6L5IZhgli80n3w43XrwK5oe%2BszjMLHS%2FsAGOqUBhU5K6XPnsLlpEHiricjFxSC2hIKFkzGX1vUY47HkBVPanZAL9NmlibU6yUbvBak9E4iwXkJWUipgg6jU%2FXzpUd2UGb1OhV45w5ToH6O69TUr5gIjRa1TWBiBGR%2BXlGTJPVsUXG9DJ7d1C1wuKHG33jefuPmpyjoijzitgrmUS8YdUxJ163bQLrNmP6PvQJuIVl9H0dn5WEPkTZaBIeZSxY4D4jLM&X-Amz-Signature=a24e62d3b8d0afc53c6b24a133b22c3b6740286ee84e8864854da0d979d35da8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5A3QVZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCcIv7QKLY63KbTRv1jTDyAvEGbJ1qT2d25It5ZRB0PywIgUbh3kYWoVuhieIVmYUwgXTlCa0cbJMYLHavKwfYScXAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FimaSvCRvI%2F1EG6yrcA%2BUIIY%2Buy3VI6qash%2BvO4tkNQfexaNxN8BbYK%2F9Gk3JXJJMxtIBGN4jL9B7I0PSGa5aoe0f4RevyC3MMUehDrqXLjT2JgSzP3AcKrSMGdC7p7008qy1BrkGY9nTnEhKyNKzCvUc9yh5Job9MA42QULzriKrogBTwRzt0trBm9l8DamVHa%2FDO4TDOqs4BHSUJdUrC47omfGDDIOE%2F%2BKav1SCDTQVQDj%2BncJxtvFn5yargbHfXExJiSzcYxTrUCM9DjFbzzvVXpyIF5%2BJ5WaAd4v6l072AEts2i79oe9N8RZwFvm7WFKoAjTG7iKAzJgTXwXjYSElLZG5foeu43j9z5EcVSqvuwDBUiIAXBI0r%2F0RaSGccpwTIUwid59t%2BwmvENJDKQpBAThC0V2fGMacpEu8oRcb3XKfIF0rKOR46Gn134U296HU6%2BFteTzQAtez4LEYyMZR6tyFU4hEhaWnbq8rYlawV6Fx%2FoO2bUbR2yQ5WkC6FsJmVlUPlYEXVNRtCJtISC2blwvbzbmvJzxrjBRUIMp3uZ0HRENZfph938sLnuq7WdR7umeh0gWPTzzphpdLKaqRy4c5kkxs3NQZIF4PpubC5VT4zK0paCglzSxiCPE6dmBvWNlOKarlQMNDS%2FsAGOqUBJfVc8%2BStH3RLpTgy3LbQeiJLpZIcoVX6HD%2F%2Fjgy%2BmvgRhfXcwcIau%2FAaa78ZD4sQwdWD5TraEI3i%2FEwAaf0Pm%2FZzWElzOxLrCnKJ%2BbNFVNj671QkOwmAKGbXNK781Oml5ufBhC42iBnRmvnEEz0c0gZPvHvJcGC5DgxEOMNdqWrFURHXO5Q7e91OHkEWehxkiqjyAAMrSEXAr%2B8CF97CNo1G2qjO&X-Amz-Signature=1381153b72436a043cd638ab64508ab831e6616e97fc4954d0066fcc795a0f40&X-Amz-SignedHeaders=host&x-id=GetObject)

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
