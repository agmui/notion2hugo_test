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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DXJ2SO6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDInyEOn7%2BYnvNMwWRUuTBK9OSqa%2BXMKjZy447DFx929gIhAK8i1tSYZZmzv64Yieoi0PFHSzZYkPeu7U9PQl%2F5IoIzKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrLJEbGE%2FHeQbY250q3AMHUhxt9WRUHJAwmyW%2BZVG%2FXoFTeNCGmQLmMn5nastPVwtT0vZ8PKz6KzKXRFjlVptS3xX9dnvkBgqtbbjyGRCym%2BuuTnuQnXd9r9GNEIJDBSvfEaKCcZmD%2BgzWPRS4LUIxDM9nUiih0ufBT6%2FZoFUK9Ou2HG2qGhLZLp7BWVxvccGAjPChE5W2CPn7KfSrhEWc0HtF29xiChurwbg4o8C6XdSZgHNlNWWO3SlMY9k0k%2BWxb6Tg%2F%2FEyYPjTiTeEC2SW8MtQPyPUU1Gku3sRsByeLmS0Ur%2FR64Uyl4ub%2FvwsEJxsg5i1dNhNuayrbT24oNQ2r9OP0cbfXKdw2GuiBU0jU32ME1G8KDVm8xW24UfIsUX5ay7egxeB8hQASK1c7rX7Rq0mP760aNUYTnvpU5d7RLv5xBdsb45iXlZZgZVB1O0s6wb2opb88Jnvk%2Fc9biRp6RINNciA7s0cbHhr9WAkAlMTFnwTXrnYnHTMjnR9lMaZvBGWWHDxP2BdCGSf8nmnHQrht4IlxnqWCZyfwNBK9KeVSc%2BGnAAoTDNEFuqD%2F9Tqw%2FKyCtb3XDGrA2mFvihpPap9c1mR%2BcW9zRowcUjthJPgfAmBYiQrhX6%2FEUV02mYax7kxjKui69KMnjC02e%2FBBjqkAQymmOAcGoyUCVEN3Uo9s4IUuHcn2wV0B%2ByFSZaE9fOSJzPhTovFoFdqtM8RlGjiksMk3n9SrbUJRbymDw3etK0nJh%2BncdWH7jaU1K2P4EYLsbXWw1zZ%2BHp2Pgq8drNI1%2FykYu1G2JM5UIwWxswPgGliclTnkA0qMtc8qJFi0nY%2Bn6Le%2BmEAt6Dfk62uj%2BMpQoCeR2RtTMmMIAhH4ntAqCir%2BtCj&X-Amz-Signature=fff32f6dd967116af623bc85a754f5ca6b086183e82217f371c14fdb6cfa3f66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLTYQRI%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDtgtEJwSb0QczKMuYQ0hAy%2FfAuNRjhx9TjpHI0GDokpwIgXD4tikPQEcIyGGDkHP8%2BfT5H3vb9GhPwqCLehWOsU0AqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbwXIUZwN1BjSaB3ircA6ZS9kQUwKTaOfczkhkkxndks%2F0hKgRMQ3EKOFRamsStx0NigGCgrM3Bk0wUhJ33VtV8nuplRRzgyeb9ylM%2BzwsfBSYMiO2yNlyTREMUtiO%2BTo6tsPYdN9pD4uQKsXY061pFjTqO7%2FHgzQ7qm0TTD7ThYdazNZPo2%2FrChXfXachZPBm%2FS7e1Gc4s1Xhw7S4mshJoyjGk1Wj2zLPB11ZlrrlobnIlmDz%2FfLKUco9GdI9dULrZepio4%2FK2g9LUs4sI6cQW7ivgUMylSv62xgBF%2B5o8CSRlMGUk6o3NAjXnxyPoj9nYhBkU2yR%2FYWM09HokzQz711WMyNEzIdaq1Dg%2FsxMYKU7mq3jZTOowfqaFiJeAzYxWZ14S0XF%2FNOPZr88nSe2J34TR5QCQGpjKAVRr5aygISP%2FJLNjTd4kAia2utUUd3WY7U%2FIsbb%2BygbTK4jSqkDToA2uih48eDcafFPMF%2FPLAEkVkDjft8wR6AbtULC58S1geXem5S9A1egu1JhdgDA%2B3ChMdJiJM8XnfmsTwYGz7rU9MwqLNtm0TFa5qNPXhFzvQZ5QtXwAs0czwHOjxj3APPyShdYqVoYYjcGwQTjtfnQMjSQM8086Px%2FniHKl8%2BhKTpv1TQnRFAaPMOe778EGOqUBVyaN2Ewcdj29pkbeXJrXARmH51mQNMU4OuN3JV0YV7gzoca8zbE%2FvSJnpFkv%2Bw4H%2FzFkO42CjWe3%2FRWf75jJ709C7nTam5VJEYRGv%2BchAqq5dl0Y7pw5LlW%2BJIJiLc5SNX32TkWA2rFt3orKydefbXn4lExWo%2BxOFeVfTMcL%2FYiVv9OkDX0Jjm0S96N9t5EN2MR6qFf7rbH9BHPCK8k9n1oDsW%2B0&X-Amz-Signature=698dce07df47c4adc3ccc918dfc333239ecfe9b1508372b051334fb5a7bbff59&X-Amz-SignedHeaders=host&x-id=GetObject)

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
