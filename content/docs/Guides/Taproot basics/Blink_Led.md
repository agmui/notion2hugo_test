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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIWGY47I%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC544fldzTDX42KekHTQId%2BUFyvCv5AZ5nrMS0FnqitpAiEA3t8sWfn1hFdhlpM14FQ8k%2Fc%2B5X7d2U6wIafH0m%2BExIMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFX0NAt2BgavjyXO8ircA1kYBcy2EKAsmo08v9SeDAtNsCUDrJsbNe2DV0MtVff8%2BeomUkn5XLNrRjOSpqQktKdNF8PIW0ICmsc8%2BxLWIVYahRWpvq9kEXSteiRvN%2FzcBSNH%2FlsbGNjatWT8KQSKC42QZD7D691ed%2FTOxwwqR2NAtj3nzGF84ncbpGe5qMPChvbhvkDkbc%2BFZ5loqx6DLb0pgEz%2FIMWYiJ4dOfiLFRYDy15rdv8ZD5dfFQLaMup4wgtO8Q5g0v8tLsrYayN2LTiC9lKVPthY0TBY1IAQN9%2BgNd76URHQ3QadHjto6aPEKe%2BXi3jKHCpVu9TlGamGTjIZIgwfCxfPc3eLxKmLNzexON5iWiteeh3VvdYb2VSu4G%2Fh1yR2y%2BYSqCoCBnCJQoIfN2jDas8%2BDBVVuQUD1%2FyM1XGsrq9JBAtxPIE2XseARdh1JfiHHKJ9fjvwgOsvCV27lZE1R5mND7ONyKLZ%2Bou0zLpHqDemZ9sU0qIUFeW6cwAYua%2FUeZXPicxnGC4zP4byO%2Fw5UWsMThpmxGuzu1i91HWOp9nK4EBlpaz0CkeBl8sgMbYTmjVAzTchIKrChGBogBB5Krmdqs2Zel%2BOd4nm595WB47uGdLk2NoUcLRyXkzE9god1t6YhtvnMND45sQGOqUBd9YapR82M1EJ19qTjWzMAx2Aq01UVnw%2BqUnRgR8HQioO18yvJnydB6twCVyEu1Pqt2EV4aAOZar6D6iUT0IzH%2B5YCt7TPuJPk1s%2FJ9AQVXCH0g0pW2ngpRnpOaNw8vJJgZ2XdeyYbg89LwnBa3zYfV5MBFE0mMjzluhgMqKN%2BxfM54UkxkymNd%2FDYcQNUApvZgIqjNEQzTi5C0dZx5fODS2%2Btunu&X-Amz-Signature=34f754cefa3944740f6f4d2f73921fc0ae8042b9579a0c7edb25dc61d8572aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNMV26K2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD53e68lQ0oAuIcJvmsA0jKN9y%2Fo1HoK%2Bj6RrnmpVdPigIhAPKFHzKiJwwtPKVUlUT35sEyTtXBdgViQR43PHjwEqsSKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzoQ%2FcJ%2FX09Io5l6Qq3AO6ETvvHSMt3yfh7QANUa93kyr9ZG5%2BGzM7j23%2FLxdT%2FsR4vOwDcHyL6Hqd5VdyGd0%2BBStweicV1BnDjL1xgjT%2FoOhxqqJMUMugW0pmEAT94oEtsSEfkY8MXnv3hMeh2dqpEZKVxbdE2lLa4eobdUxMI6HMWqZ54gvfKgEN%2FEcEJNPKoO9k2xm7LujynX0CYEz0rhp1Jkd3vziFJKsTrCvjbFnV5pzX%2F4K%2BmqnLOSM9tGAhLXfi8vdxybDNwFVDXgBYuUfkqEPrJuyVjZB9kDAB7uJoh5gGjhl1jdCWbLcBDPeRwW7ZWfZ4CYkvc%2BAiTw3yiLCu%2BZgjNWq9XzBaoYn6f52z7EZdvbxN2AC1Z7PMy0F3JjidXV4I3ZCgD08YL7gm90D6xz9IFNxPmxG3ipHJUr8LrNJDKvwoo2M%2BbWvBm5EF%2BqzP%2BzpX0igH0KGJmjdqbiAEJ4u%2BdjyX2v7blbyxlQKX88wpobdScrsNyltNPscgl42iOIaAAJSFcFflYNU9cERTUYRl%2Bddlig%2FW6FHg9MoFIRKS1Zzcf9JTSEivPI1WzaSt2xOJHh5CGQOLoDfvO48JBdvteKAwodMXtPQfnnLakMIbP3T9V9IXfh3MxKc2vFyv9ru%2BUacD5zCx%2BebEBjqkAdgjqR853IHMQ5gARcjRLoeB%2Bywwzg8irtWR9D%2BiQOGGp2kFNn9rG3Vx7FEDVmiFVjOZkzBWErGMV7TpqmzEak85N9OcHjZ%2FXhLV7riDA71pmpcj3DhNGX%2Bgd%2B%2Fe76SwhVNaeLvGp4QWqWVvU4yhZKhJ%2FKReeBOyxVeh4GSHj4AJoP4M5RGdCcB6siqlebb2%2FOBet4aW%2FCtF5LaTwKvalChQyBSo&X-Amz-Signature=b14f598312684a4c3419223a88b3462aae77c5f1fbfb6f7b5f2745ed94e7c2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
