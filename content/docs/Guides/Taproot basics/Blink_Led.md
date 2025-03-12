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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UXCKK2M%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIAM5Cub6ACKn21nFGmgvAmJxCakwmm%2BUed7kfHJRfb7wAiBCR3cyS6zIzQivoSlf0X5LOLxwKxQ1TdWff2prxOt%2BTCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2gA%2BXsbo%2BwiRmZaeKtwDR0WdoP364MlPycFI9JpXfEy2PHtC2Qu7Jn4fSMh9O8zStHC8qor4OVI0G5LTzDehfRpGycYrNfBD7lt7UQtlIMuNzE%2F08iqDf4T%2FkM6kSRJFkdy6hfGILO5sxTtBLx9Svchi%2FuoOqPB6I0NFgOUTbgHjZqePcHJwP9BHmpM9f1qWYX6E%2FiQ%2BnjCqIgfT5JjmqRhVP%2BeKwt%2Fkoy4KD4H9z%2FxjC6mCecXcQ4XP%2FDWgViiA7LiNBSYnOI2lJVSbgjoArtXrRnXC5DYu1Rf1QeVX49coXcYJtirdjXpjhI1gdJHi0ReAfpkudacRCKda4nTkSWfgptQ7ACxMup5afnVP7AMc1Uhiq8tRhm84ExS73%2FGA5tUWcdojlTzSjW8FPBaNSPqj%2BxmMLc77XSSIVDQT5onggpYvJ6lEIs%2FWF1XSV0JZm7mKw2z%2BnOm42hMxLghRf14RkQwBWCRt3xhr6S8RBtUMOgF3Ei56THL2lOBPccYeza6bVZdZHW0ET9uNm0W4KPFh0MvBU54CxIy7gOjRZlPBAscqBxxTMThtWFJBtd%2BhR0sgvl15Yc03G7ghX6WJvk%2BRB%2BEMHNH%2BOLFopsO6IRPq%2Bpyk2j1tsFCT%2Fgz1Rh3KG2oEL1plY9Jju6gwx9rDvgY6pgFjFoRJJVsAQhX8lzPofkHlElbW4GmCeebKxzcT%2B0A1AZxF5T0Q4YgWb1G47CNCw%2Flr5qKbg69rWcI6fTCVbMxNkSdm34M0YcGCm62kHWI80Bzd6Y0cppzeD0HS7MqLM2i7OiFc8%2B%2BXhlCdubqyWfS%2BgvSbtN6Z%2BgRTaotuGeVdICRNoQwHwqLL9KAJIRpuN559bTSwt6Yx%2Fi2snyhXQyKCeBG56sEM&X-Amz-Signature=299cf923a5ede7941f383fda3399342a60802b543a48c67f44b78e0eef92ba00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J63YT45%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD8LQWNdJXMFERpELuzp1RpTAoNSxmLUZyQqlAqmJZIJAIhAKvXLDj5aj2Ceu%2BMJqOHJq5Xi1YzQBDIhO2cPdvBTj9ZKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNzlkYtF7jb7rrqO4q3ANJh7hvSc1f6qjyxENrlPM5bidlIVRszm%2FjQzT1uZpRJa2Zi5L%2FmeWtX8%2BnkEYIZnRU6FzlBo3yjbT94AcAMDfUNWowhzrJD4s4qyEBBM%2BXgJN63TKqIcsiu7pqrY3ilVwkPReAyfcxTBls48QEGKPclSTeyNZSkZNzTcm3Brq%2BfqUAmDNOs%2BlCEOV5soJqpGFSVJQY7IbOSLd%2FSBV%2BA5Mmj7%2Bqn%2Fv4%2FK3AWtjwZo7gJ%2BiJc6yGf6Pxri%2B6oPWJO82GatEHDSmLeWHYgGe8UMtC9j6irILZY2OYdkNV9sE2T0G732QoGHQb%2FHAuJeMoz0UM%2FJxDUO7GCIu0X6jd4Tds7LC0PxhqqjAzW1DAtyqaLNAwbu8ZCn%2BT6PPPFxrVSjd0gQSO%2BLJKDnE6alEQA1kPbUKQbzZgRnMB7oTchop9BddmCEc4y8IOZpJE9t%2FgVAZmuoWSUxEL6sy4MPxno6VxQNcpyGughDyxErevMxH9rT75Ombc5kNMalCCwg8NgPz8CADcAR5VtM9Jgngp%2FXuuWIxDyYUeixzH3xILQP%2F1Q8fJUXF%2BHwb%2B4eJOeIhCwEaW6X1pQq6kOLsx3AluveVdNfP1h9Qiu59OZ3zlf1Ey%2F8FBdyGGtmdieLkOPzCm2sO%2BBjqkAc0VDFzL%2BbHz4TeVKsZ1%2FObJfkCS%2FriKFcC4aPrRXHmPuHIQrjJsMnNBtyibF%2B9lQ1mkZEFG1OiXd2SYLRC6peBNwLw3LG5tINzYXocV%2BPVWQiWDvwGlu%2Fu%2B6nGJHkwOJfqvrC284QfBdbOpiTPUgSHKvtPNcrKhYbDwLG1p%2Bta2xfeBwH1rlGwWBZX%2B8EJLAvO2jLOiDJHsRC5UrfK5F7%2BUMeqp&X-Amz-Signature=1feabd24638b05f1a1694a6e157f8ed6a4e9e2e6820a940ab375c570437d6fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
