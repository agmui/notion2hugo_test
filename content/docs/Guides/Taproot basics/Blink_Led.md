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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB5BZ3WN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIG%2BBnQ8GPCaLO7aiozVagQ8HMqJqm4nRQGphgqMg9qObAiBnWUzZp%2FI%2FaR%2BACiE%2BB0pyTugNoUL8%2FsXgpSG945egzSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhHmByA6smpLANkNxKtwDR1kYqrv7p09fkl6JwJ7blM0drX2oZWJdnWK9CrW%2FqqvjQRo4VRTApeAA3b98Wa63FF6C0CgIAr5ZtB5eTOuvB1XtW0Eijdt56HdtAEThFMbWkFYWvzDNuMwIIMnKdV1kiKdHIeUoLDcLU65UoKitmcMl28irFwo0loUylYxot1mNcS8P8pzL0coPLwrKgSNWJZKxLPXJ7d2xwpkyIdBvhys9RhqkxtWihcXElNT%2FUZ%2BeLNVkmGPAmb5HRgC04MLI0SV3AJFL04c8QxCJVN2TLUEdxpRELf6%2BwvCfKxTE4%2B6TPQ%2BZyYwopJqqGe0rHl0owUpa8II49G31AivVohDezOk6sfqSkJYVw78aQYYeeT6rBEoG5%2FrxorduyEl1tUfiztMsIEp9swfaEaDeGFtw6vjY5daoK3ouWpnqKF2NrhH6ebrQ6xCn1FWS6b1%2B%2Ba0m7OAQ%2FG42OofeuAXS1XDeBqOhfJLCjLvVeIiMvXxztvcIgRb5XYHPGPBL4%2BXwscPGsimwYW6C%2FPL2lLQEqKe58RqyAJuSOUtM%2Bf%2BcZ5Y%2F5p4czgXJS3KsaSdMzIVQIyp1p1jnWi1hjkagItg7qfkjwB7VkIQCr6P0z88Zed%2B76FAeZROHNuRWfE4PkgwwsNuXwwY6pgFdvlzKJR6r0NYjZKaUjrH7AKF7VkIkkxnKbo11ZEm8nlfEbRJGUwyEyThkZ2j%2FokZlGpeO9hGPhXj16VDnUQ9IcL8CHfXDx3RfLdh%2BJHKbJBXXchKWza%2F3I8J2I9rt4Kqu6rG6YTYxDL203yImklvEK542MIHyGWpdZW8BSX%2FVFi7FQrq0x4XhCEtclalpwD9qbn0wB6poKdxfIamtgcq%2B89SWVF88&X-Amz-Signature=96703dbe4c754f6c21a4c1143e6f96a8686af4629138cd92a7381986e9c54139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNJ56WV%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDFOfkQIgDHS8UQ5jwlXt%2BDBkYkzL5C92%2Fi57Tv%2FixxUAiAN00Y4iEIYBLK%2Fl5HCR3NVcyIbSlH5xNINeKDD9c4u1yqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMge1Cqng159h7Sz9%2BKtwDDFRLUu2i7eTp63mj2MJl2HhNkoIlnD639aEsCktwLvTby6kA4FY75J%2FRWIovsEvs%2Bq%2BGCYBznNlRLstUkMq4pHF9dIX%2FRDzFdg%2B%2FxNALtSTxrWnOXWhDUHM9QyLYJ5aoCuPJpOV9dNPmkoVzpKQ17T9ERA2o5KEASE7HxNpSf0Mzrl5w4hDMf9oD7L7mAoRUXGKaOoC3%2BE3D0%2F3kR7%2FFbQKA7ZhX%2F3RQwJ7i557rRXlpb2eLHIVgYkUb4rf14A%2FtLNpP9ucLIEhm1PmWxJRrfeMKx2L9irETAzydjbVZwglEsCYeSD16rT6b1bCApwlitrsqitvm%2BXBoZGr%2Fcau1hwWZsr9R3beP6Kd4Fg7FKevCv4cDCaiiDoLk041e7G9I7y6Ic9PMUkNnnQv3rcZKvevEgqwKKorT39iXZ2SdXai69ModR95JPcBlT4rg7quIDwTYaQiuqbUeWCd3fPUFRdEmK9kjcjvk%2FdmnbR%2F6Nuia3c28%2FMXG%2By3ylKSlBmYI6unATvdAKL%2BPZbCZNZG%2Bomrj5mWCGjfpGJ4ZAPnYart0cdr5l8FrBAON%2FR%2Fye1%2BzTUBLaZ%2BGTAoIHLTK8pAB%2BcuOpd8fFYjyRMUFMWqadKDqBMs7SE0915tS%2Facwh9uXwwY6pgHuFUqpAtJgDWdWyYw7ZTe6CKud8einlep5nhRiTqbL%2BvKK4C76QEBQFVPcJuxo%2FGnTTut%2Bj4R%2FG7z1Jp4QSifib4zmrZKg9sOUsQCOmkLxP1PsifBjY8WmjwVpUQTAfJiazoxUn8GRtL9DizD44Dyf6qDEnHBmq6whZDfGYVqEJ7gFQR159cBs8pJv%2FNcKq6VCWL1K%2ByyKPH8e2eAwaA1wiz8mEF30&X-Amz-Signature=d0e54f9557021f59cb1584965d9d39794752db7428a41d3ae3acb740cdb43881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
