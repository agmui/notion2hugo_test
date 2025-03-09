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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMFDGQ2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCoPn4TsLbvZLj2tFhek8ibjbSbXrRmprNrh2vPgvoDsQIgMlGOb3%2FdLEMt%2B5kec75beNuU0Fraqu0Gk%2FZJUzUfstoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMF8MoHXqeksIxxQ4ircAxGuXYErQ2sA1IRBcj6fdJICrZv8fTJBG3kN7E42hSsSrHMJKzEWMYsf1PqkjjU7uhM2CcoYq0FWgoWehVOWVjcCUUh6LFuEZL%2BxG%2Bpihd%2Ba1bSg0IOdxUJOQMy9d6gXVwV1ualg%2FT4uSj4F1g4xuWn5E3o4vgWKChJ9iGg3PLwq%2F8wy1z5Q8r%2B1Xd2%2Fi8D63xzLHPIFF5NNnNiPcGm1Bym1%2FQgePJQHs8c0r0jfcOxKX9mkrgUToR0wFaW75AehpJV3Anq33vDaAYYcj9ZeOTlzSMymyr0HzQjYUStUeL4yiYhu7Eda3NyXjG%2FZ2%2BzYaYkhLmqD80JfERtZ4NFN7ja5yV%2B88uoWxmj9XzmMQI0PpzUT056bbETSSOQDbmlN5ud8OcEObXoCdMT05UATApTvyxe%2FCvQlKxUY33KyE4LsouX6t3dPMMKN3A2SjwBeUmwhS7zfMe%2B%2Fz%2FOxTbn5JFuK%2BlSsUDd9HqBZpppUo3zXyyRqR%2FcqgXSDvD%2BJOhNp5WHbAU6X74YDpcBKTpw5XWBwYHL%2BG%2BvS5CKf%2Bk72GI6h1HZJQSq4j2WwA4PzVREtWtleYZYsNnkYis9OlQ%2Fu6eFimFPfAkZASDYXjUsMWvvxajT027rhZEN3fm5XMOXgt74GOqUB4YjcEi2MeoBoF7ynE%2FBbPUpyohv5a5e0wiErZ%2FK7INMDIT88%2F7uhcNgN%2BL441Fe39SgWcJqoouILXzrxJ1FfRIH2TzbmtogzLCsvxW1g3eT234invQFpn%2Bwyitb7PV9peijvPhiKnPwsaeD%2FbxxnGK7uEbKbcRLZUI5jlu5XGXmhVX0TAjW4IRHJkBbPFtPrEWvX3EBqhhdo2XhXn%2BM%2B%2FLs0SLKy&X-Amz-Signature=646753eb066567663aa234075a1bacbe6ae59e662aadb7a7f08e95132318093c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FEDU5LG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDPek9iGluPQsWvT0Rhmph3Tey1pmbQpLhQWqLPlQzkNQIgS4jp1dT44fJmTIvxY0ObnQl%2Ftceq30awIn6QCy5izhcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDGTvDVGerMU2URny2SrcA3FsPkhMRIzjAeAX34E3WSEEKYRiw4bpxj5Z7ntlB%2FQjhZw%2FaISLLi4mNsOO3r9YQA4i9uahX%2BdM0IhyIrNQDKE9flXP0tmdl6bxnhPjyUmCOEAdn675P352ra85F52P3J%2BSlVJSO42wAUr4ThG7zLsG7b4klOiptIu%2F7x5PZS8BM%2B4%2FrDrVYTxZ0gMYu84UDdVdfcy%2BbytqbUhegISD0V7EAQih2bDh%2Fuhj%2F0HvMMFhHUFKXluhOC4qUwQAagE5TAJ9UO%2BNPnkwiNJvPfaeBwkkb%2Ft5RHWtwtjXkcVCg5Z0MPL2BmT97ftMLpCXi7bd110K52QN2G4R0a7B1nv8B7963WVHKBUK%2F6%2FvuaTegzKH%2B%2BDPEAjjIQhWYOUvcDcA%2BXymGygkB9XQZCA3U24DSCZBvpXYYEBSCwaUFpgi7aVhvD9F9APDHNgWsArbo5uh%2BLNlpBCezfIJV8GcjDTTbjsmOt0AtxvmC6fH1hNSjCRpJBbAObLrYASP5lbcQVlThQDYtj4dGoSzcuyuRx2A72BZxwmo1HsGZ9qAgFhMzNhUmbOLB5BjbV8EBYiW9%2FEvf8Hje2HdKckyEAynmH9DJQR56YWb7Br0Gv04h2PSkAxxHSk9zcrF9TcdRrmMMK3gt74GOqUBlUFo5kkrexOaPaiRmoJLoZrEAFHjng4Pc3d356HdYzZQgm73Q92db1rrNGBGWK1bxbS9PmJvFyNRc%2FzSk0Ru8K0FQp9EBSAQgouq0hJug3Cx6oHdVpz%2FR4OngRuZFz%2FZU0Kzr%2BmhLEqkfjlQbZr7lq3Di8kuMe0yZOqkOJl48ODJtrJaU1bGND63hIrCS1mTsd7smPXadzxLPeGAAEMI8u84R4zv&X-Amz-Signature=c128a53e985c945e37b710de4aeeb8ea345c0343beba6cb6a0c4940db8e20d45&X-Amz-SignedHeaders=host&x-id=GetObject)

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
