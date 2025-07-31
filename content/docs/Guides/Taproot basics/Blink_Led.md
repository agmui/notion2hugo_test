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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R4QA72W%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmx3%2FSEieg78yiv0juB3cuj2W%2B9ss%2FvmP2ew0ql2u1QAiEAoRq3MWdfwTmzf%2B6vhn%2BW9R46EkD8LSaGTLLDewJIiTcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZTFnYC%2FzDqbeD8bSrcA8o%2FqU%2FKXuO7xlzdl8RIwwpaTwgOj7cewURv9KHMguUnJJdUI8TBqPkJXmjvyXSqaDGLEqu2KQuEz05PYEBuApZGqFgJQcybPDvpHRV58pt6QrL%2FAV%2FeO3z5M%2BrP9DRQG6upKOw6X%2BdxT6tWoaudlfDIit4UVSQrX71Tq%2F1zsCGvlarTQ6lEw8aL%2BWuOLA26688K29uo1Kg5HkOpct%2BPNeni613Ren1xrdEiodukPn3o84oKRwIGfkoZbKC1VX370MdMfyLXNyM%2FjAUmloBX423MqRe2ieXwxFVQfzzgPp4hhS9tJyysZAmpRCszBb1mtiiuBjldoSLwo8m6Q5RJfEM62%2BSTjhd7%2FOiqhwuEBfj8NFb526vfFH4be5Vm1W%2BhLhZJEkcLllwDZdH8WMhmEmUWPVxAMQiS1cm8FjRD6wGi77vNW%2Bh4cZrWikx06uocDXmTcyo2fqkijVVIdOvIB3xsvO5tpkxdfUQQbYMjx3Ak%2BfSHfmqFU6G%2FssBEYaO%2Bxi3Sdcxli3sPeWfW0l0eCgjeW6Lwq98lk2PHbRzSHVYb5F7KkrCW1NFRlQx4aA66GUaByy0C50dUgPBopNKusTxoWx42YCdHXUUpZ%2Fc1HKI%2B3YpvigS18HUDvFv4MJndrsQGOqUBtKML%2BY5R0BvCbxpkMBtQ%2Bdhj1J%2FZgijHz13NEUinpcRIT6ekXt6ZYf67XuNxj7zJvaFTeJ%2FnIfhjOy6g7piOxK%2Bbahg39mrtKLdObDKdtF%2FhcpWiyjo6ZRKXYub2rrdvvzmIRuQqCg5qpjwPZnu2A%2BB5lc91S9%2FSqsmX17wcivDO0OWBO3%2FsEU0sZvPE%2B07rLCHcCAOuVa3k3iBCy9C89%2B7Ovfvn&X-Amz-Signature=0cf3094feec98e5901d07db354ab1b8964bbb4d88d20f42e729d83a9a1f6e0c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSVU32JS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmSNOzaTq6UQTfS84%2BJWEVbvJVtQQ8TZRX7qVwXU6V9AiEAyEWltuDRycyxFmgf%2FWJ%2FzO6HbyDLtqhHskEkP1vuevkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgSQ5pAbOWh1nGCvyrcAxrGCeWJjdhJ0NtQTNZ2vHhQVvLWW1Yd3PH%2F%2BJxhIuEWHpeKamYlQ40n2SP92quMfc6tm3Q43908QtTk7LNWSXWXMqCVT%2FXKy4%2Fb3hUkMGDeoOeRL0Rh0iDEcw2jAHSTEuB%2F07xseVzUbJE9TdgQ2rsBlGl6jKaPd2H9aN%2Fk%2BvKGvRaIW%2F7UfT%2BHRIWWHJlpK08N5SJ3l7B95OsLjM9%2BCf3uH5mZ02wQKOqoqurH%2FdvmmiwSxu573H8vlfbc4kT%2BH0gmj3T1R3%2BAm7xUGNTiialuTyks9DgPyYR3jiKCrmu2rrLieUEmZ4yfj4IKYB9xiJf6gRfeHZNvFtIxx866fRSXBXSrrG91vSmJRmgG0V%2FT6Z%2BHcGkF41uSoHfnu1rkwC88rkJ8ePPPDxiQGAhcJg5C7Hy9QZvnyGHxExAt24ZcHtDnP9Er6Zm%2BssO7Q5ZgIShparDlMBZeST8hq6fZO6X7WRl33%2BJj6inoRftvhAR9PNfk2kTDqeUz9mW8gTa3koy0%2BjDFY8lbfWgSBioNuR5Z3CUFWbmPandQizYp1UJVf9XCbC6PaKwWsurW7hDDGlLI6kRzdP3svBloB2h8fjgd8ew49iIdEbym5yyoS43M6FyvDQv%2FjoVdY2viMJPcrsQGOqUBX2Q4UIIUa%2FvJNgAuozggHMpSNh12rq30IQiANejspj2%2Bvu1jqlvDHtNgAJ52XLtWeGqMP5A5tWhrwDKMhSekOQ4WSU566waFIHiBMuDqsjwb7Y%2FKMIXvg3BsIAgGGsjPPyqEWoWCv5pDgqWDDFDc0%2BQ%2FJqyNpWNbJC368v42AxeFz2HDRi6%2B46Ig0QSmmPO3SYIjRf73jU%2F%2FY7iMXUWzXg0LQo7R&X-Amz-Signature=5878b82e8803db22ae0cde209ac2dddaa3870b0991a3286d371a4f6d8fd1ec83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
