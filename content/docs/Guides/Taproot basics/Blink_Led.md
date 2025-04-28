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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSMHEDH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATVJnXRPmbyxtl7nygwW7jJmsdmAYWlOwPZVV0K49QdAiEA2I2uuo4kxT3Jwu3Fhn9QGyk%2F4zh1lIK8lwSiEj0QTboq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGqiVfRrXrmhEvslkyrcA1KcupRMk3DQEhKrN7ZLRTXS%2BRpEU4vYtex0aiWpq08TW%2BRhBzDc0m%2FFWFXXmij9n9Wlz%2FsQWTtDMEUoKiKzG5EP9F2JTWg%2FQ7Jnr%2B1HlODWYJpSOsktCQzHVHKEyAfDY6S5K0Uw4v2kZRasfgKjrLQy2ZhwqjLNP4y9rHPabmbzJQxYZWzxG1cEW0ZWeoWjFl73U2ERdJCtCqJOrFgeypVTHaKvtbGblmDpnL03VlpmqrRIpWvi59Yea2RUVoB5BbyP%2FbEp2%2BVrlk%2BNkkyxqJ4wayTdFvCy8QjARVmxgBSeVQSOZ9MzerXd1%2FIJpbgCaLPin8PrReLZL2wJuZMLYgRLwg%2B31VA22RT4bLjbpZ6yvWl4xRKWb6%2FXmO1J59%2FDfqIH%2FT770gcS3y%2FamRnm5lQtNe48an4IZbhNnaiaJZxjlKqexrK%2FEIkB95XU4Hwo%2F%2FlJ6SpBJUvZ3TEg%2Fin09lq1Rp7lQJFL6wvUgEPnLHJWHG%2Fr%2BFd0RnhCA6otszRmCLy0rLJjXXoldg3a03XcYsy%2BYlcQmqiD%2Bwgr7NBFSNNCdD0pwR3KsgcV7ZvzdA2YQYdToXaw434hmJi0VoNow9RMAyUHFO5q4PBxoEVzjAyE9luBwWOVvsWnMOYwMNrWvsAGOqUBAaMCfhD3iyS%2BfHakPudjaN8SBUWR4ENYagkcpLALWGjHvEwqqKiUpGD%2FuujA5KlrBYw0auUPyx9vzvgnQiU4b5XKlj5PO62OauKhgSeCHU%2FAWWnsNolJ3TlAI3%2BEu88%2FqkfpB%2B3ZtF6hc%2Fshs9eUZTTiLllySibpQ7KTM3J36o%2F26YTHvAHtLv1k9YP6GUw35Ty2hb4JszjewHRcP%2B4wnDQ35uPY&X-Amz-Signature=11695a85032f6f325006cbf07157603e66bdffeab537f2d0770b428c4e676e4c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DJLMV46%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfScyVQmgax70FGlTAItWX0uQwt2RgJZK2tfoYhk%2B1xgIgf2UAS0OieDAEKEn3RpDFG2JOEEWKnig1hi%2BUzqO30qwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDXopQMb4wNXmrWiYircAwicl8cezm70O6bfM66vP%2B8cDOj1%2BcBfRKag2TfjwYXb2UZxkhRbTLL%2BikIqSushILvyTgZcQH6wsUorn195iJq9ZWkxy86Cu%2B%2B3jofFCvuygt%2FEEAd2ILbU79oRr1UHqXVfFVtdpwZGqwU%2BUMAjAPbHTj0e51FP5Yt6IxrJ%2F9M1MCmLM9cYAeo7HBT%2FATUpPMPwd1n%2Be3SwG0%2BCiTOf%2FSOSK5JhTjRplps1vos%2F7eeDKiKhK4EEozb7IAXJ7CaPHhFXlIOi3dhZZ8zrRfq3xhSQovdNU8rvuB9A1UP10ETK%2FR4tzUG3p7Oa9CF9kBJoLhf6o1eNZucaZRDmUT2I9o6EyOvxwDmad9TCNnZve7XmJL4tvbXodPkRkUX71oIIt%2FuAzZVnyZmJ1jqFSgZveXNM2EugGnNkHCCq0sDnqNOmV2vRFVEdCBzgcJGD7BYRZ46zQR0HyPwVhyQ7V0sKUDYHTfMx82g6Wea16EhspL8Mi3WjC3aJzBO6sk4WFU4abpYGBQPn4FEiVSly7aXUD2nZDoI1NLhi1gp1lOMzgbvHdB58H9D5jhh0nX6UQLw6Ut%2Fjg60z5yubLdOy6ix1X3ohY2mkvVzSS%2Fl7t5ISooRVpQWLp%2FPwAUquywADMKTWvsAGOqUBoecdlJDP5Wn3RWytqf5QjDz5iQj0Ur6sezdxAgCuwJGoM6c0Y%2B%2Fvhdko7FhL9A6VKcfWIxUufLygJSAdHT9sbiIZEc%2B34w3dlnb4k4FTQzhCPtGVim6656Zb0sBKfcqb9VfrYv7QMiOt%2FFz3nfUSy%2BLMWvtV05xgohUhcgKJGzyO4MKuxf3rvbjkkk0N4%2FoJx0QpgBLDl8e%2B7yVOxF%2FkY9zup%2BF5&X-Amz-Signature=03759ad75210ee4d206a2a5f58be7757c31dab6ff85d8fc928e6e101203da600&X-Amz-SignedHeaders=host&x-id=GetObject)

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
