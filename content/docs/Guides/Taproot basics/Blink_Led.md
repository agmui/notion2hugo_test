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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEGDW3H%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB726qBo8uvkmt%2FXHRd7WRdZjlmt%2BdqQ8OcQoVWUjTpMAiBZJQReROqiGeza9Hmini0fcplymQUVS%2FbagdNM%2BtaVByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU5fWwKaJ2mjxe%2FhuKtwDwYiTG6RLf2ePDwhaQ0xf9rzEpbNl40KPk%2FNtFA2xiNuwDxYgSce6NqbCFc6Ph7NKx4t%2FGixB8qpWLHBNIRsPr6d9DLN3NM34MPrlZRVenSfDTBwGM%2BSMkiX6eD6BA5Irpq8U2U7dn8dd3J%2FpNEzESpEGVn7BS6UuhoWGeyvY1qFdiJERiWAqwfub8c4Se%2FHg%2F3aEbDdCmrWipocoLRJicDRHjg%2BQ5m9o4Fk6dDj5RWL%2F6GnRs4cMbkVk0LYAjahC8Q53L4Ycu9czhSlV%2B5GdE3tgvReyeHChYBy0BwwFfCQ8yLap1SYBEh3f6Id3vZUVSXNFHgkfvy7A38WZ7GmDpYFHj33J7ONzO4jPtm7vE2t3QtoDkHB3v8RwkUnLEdOUwVIefYctJtPrFzU0jB2yxzQprvmD0wq1LjFcPelKNTQu3WqO5ZMWtE2JXudgeEwWFaNKsgBjwLxMDQBsY7hHpWHQLsAX1o3iJF86pSdybwcsAfInmhkVFMmPJAgnnK97ZXg0FbRbfnjPvQ4lnjtmO7JCxKVZDoA0DAhDKEI3bJ9ha7fh4ISAgG0PcCfdPaR1d8YN1UHv79YhiZjjzUdSjlAbq6XOcpPPNl161HbFrsflxvOOas7cnoopu5Iw%2BNCz1AY6pgHL1xqXRXjlwjDtVIcqPowyL7TzDdNH%2BRbBhvrmbNzRAy7imZfo8lC61asQXMZZV96TrfSaH2q%2BgD0CP4M2kvp2mo5D%2F6Q7i9po1XQQ%2FX7ch12YbltZyeIKotz9DQQP1mhjKWwAxuFu6yAacBTJBI8uWCbJULdyJUhR9nFwdBWIF%2B0AnovvUtVolNL8ga9BsJRDGKn3Mz7FASrl9kEg44tSw8eH%2Bv20&X-Amz-Signature=cf2972651fefd18fd9b9c0be43bded42571d4027aab6e9158f21af89dcaa1fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWVT5ZAT%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC9Jya2NhMa%2BP8IovpXEJ28WBFfPszikh8Sm8BBueyi7QIgU1wcdmYTbABL2zJ2g3wAapE0J61Wia25d3QMqaNrbPIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUm0k6bZzy4U1LGhircAwC6WQ6OWlJdM0Bu%2BQhZgKODEyu2kPLoZc2wUjTwZEi31c5uhjoWTW37jjEg0WiynKaZ9LTWIABZxr1ntR2x81CH79SJfDqaeuBaWswyFRzU6LwTlg8kSYqqd%2B%2BFv4HFAj%2F395dSwMaUSKIKGUZfOSv%2BQyyjMAD5uGmBkbsGwtccvP6hYod%2F55WlLpRPc9hI4TOXfNmu9gf%2Batsq9PQOzODfw9%2BPxOT49PiOSpcsa0UeYd7EmiKxLVEZrpgrTXSP4H%2BRgd9ISWnMXV4tRx2RJJ9NqiovQ7bdqIyWMbRiUXakwlSVWl1ZfN%2B5AKDWviFpFyH1wszArsSQDs5PRZzms7WdZjaRPNxfVDMrNkVVcdcH0ANiTwM7w9SqlVRSJwrKLp4U4FGY%2BGH0YP1OTyg2aYV%2FLDsAH66PqHfHq5nVQ5bARD1clk0TGNRzJCrXbzDBPn0g5Ar%2FckfY2OY3LUN20SfBCnavqH5xKR3IcysiJMD%2BsDHb6ACbrFRruASYgdSCo9EPesfFPptMF3qDQo29f9UGx9Xaq6TL7Gt2KUib27wWkCmdzEfwBEtQ%2B%2FQE5gZvlug5XNk35w6YBurvSFTUtg5XpN0zfMSyxcRbG%2B9cz4mPZLyiNpYDtV7EVzVCMLTRs9QGOqUBe%2BUlC2Dm4IXkebZmjzrgs1FE48MY%2B9xlSbUkKpwIU1xQjmhDVWctYpAl0JumzLdJDRozbatZmPZv3oDioDL3iiX6M0RFpciAJ%2FA0MRoAZKVpyxyPuARLJ3iQo9OtJ9n3Sfc8mJirfDmL8tbnxKzvzAin0hWNMs4eIwciLXuKstqKvuACjHD%2FNbk7jHgOhyp87bW2erVZZs92qmufh5yTbOXxUjQw&X-Amz-Signature=2295095c80aa237964ae41a66c167d9ffc52da751abf3a99bdb2d53759aa9d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
