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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS53YVOM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsv2%2B3wFXZjLaxn5m3cr4jtOtPBJzMMwFHB79RM7AM7AIhAMqProlz7sqcVu91RxwJJ6b0acmAqpiGQiTQRMuce7DVKv8DCB4QABoMNjM3NDIzMTgzODA1Igzzm3PEsw3%2B52SYANYq3APP1E7Zcd7FJnofwMtecY6QeNzLaaZzPGVIMZyWoBeNZIMLpG2v3V%2F5oklbesaFwwXiZqYmcoHhqMc4ks4049s1ftJxPTOW77TJW4Y3CitNd9z%2F1jKVPC%2FsGy6rB0VK65gLso2XaChqb1hyY7Q6OFXzt5BMPuOP1MufLdnE1BbZ%2BYoDVMU%2FK2t9pSUNofdh%2Bds0DJqnJL%2FyuzaZQn2r9nuDc1mMezbsNzZmx4B%2B%2FqK9j85lRfM9gvaE8aceoT1RUKcHHtgI1TUefrzbp345g0dqPLRIp3d4j05xGgz1RSeiLFN%2B5xOeRkC52N3INCw6nkA1I2i8kPgJ2bQ%2FAX8uBMSiVZmodcO9dQ6BEe1LVY6O1eJmklp1HOJWncRGLB6xdLt%2FDsfD7QFtfP480UUc9acqgQhes1qSxjvlHm2V1nUK3hC5LKWyFRfa2dkYgzO0Oi9i0Q16HFDwEmB5FVQpEoKfxR6zPmebW2N0XUG1wka8SXFf9x49KF0eaaAsiIWSo0QgS4%2BrBG8XJ1iMfu7L10TJNtprlG5ddBrod0AwpsUMEulzu%2BiDRSw3yoyEthI8BlpHHwNx%2Fv6PwExqdWvbItn3lAaXUGSf7Te6bmtPcWTX%2FUmOJSWchMl3I004BTCsgLrEBjqkAYcz8hGIarDi0QZkqJvSZHz7Q02VGA%2F557QlLo2zcMcKlJ3S64Jk5I4qJF5%2Bdio8QSK15GRTCrZPP6y1uw9M4FOAX%2BHA8eY7q%2F1%2B5ugXAM9JVah4mYRsf55qjwzC7VKIGBOeMjY7VALq1nJvPo4aSfgxM6SyC8TAKkklzc9sjf0x0oqbJLbMAedjrEiO%2Bw4v4pU6bvhg6LyVcgaoSY1WH6Crs5sw&X-Amz-Signature=283226190c3aa1d92f46514f1bc1beab1da38ae343b31b2c6bcfd81b70515e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573SCUZN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKr2nO%2B7SU43jCcfInpMlqEeeZw4WQT%2FGiNpmLfgXg%2FQIgIzgNlok%2FNfjgZj2pEyuuJ12NtC8jhtrIQfbHkf8MkJIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIMoVj7xtFyB4fohmyrcAzXLN7MqsHZPi2NwxG1DRQohjuS0ubkfcwNf0HtDFPVOG22NKrKOH%2FW2Sk9cYCU6XO5Pw81SD2Dy4bIDjK8XbuEpnbgdmcyaZS4UEj34NEeGkXDY2TYcJdzA9DmeRXvb2iT4UBw15h3tNxPbmnAE83pAn2JkPR2t1ZAONiAQrcFFq9mRGTnoCdCcHhtf58yWqiJ3b4XRKbrUqP5umhh%2Fuh2C2j2AWEYwVwU9se5OCcBYT37v8JL5pUvqY%2B5H1LOvw5KJAoWIUPGMY114mxBHyf%2B8YG0IfTaY84gdwi8iNS3o9BouD%2FWAn%2B3qww4lCrKqN7kRO4VABOclCwI6oECmuGDPY%2FBBeC0jjNucCRP59nrgvaD8mI75Sb9rg6genICqhfczwpl3Yie6SyUXMnmeA6zZaOQ%2FJMnlzUITURmuaMOUMwHm1fM957%2BEqOjndI80%2FRclI3yLIqVOXGtacUoxSLR3aoD%2Bp0ej1MuUev9iWZw3A7RE5sWXO3T9oevxUW29x6%2Bp5cxVfOEblQNe8EgUFlFU0Uzu3LpHq9psYE%2FFIlhZgvDrh7W39o4SHcdbQ0iXKt9Xhh%2BNgUhVGfnP6brCxkHahRH6G5dJ1KiBAfDDZ43aC94me%2B0eMIxoqjnpMIiBusQGOqUBHyqT5EbgoGBHisbSMqVWu9j08UscNaf%2FT0loAeJ9no%2F3kyFvnnggESft9aIETHHNb%2Bd1J8%2FdUfCynJs%2BwVGqVKF3WL7V2zGIJf3vkMPQnFV5VbT0skU3NHJz0Yw8J5XmnhPRLQ%2BQXx3ZBucypE6GupBcfDO1diGQFHp6kmiAXdHzOw%2BgcShVN1njPpKAP8lFWSSKY%2BRIyRiANr7AJ3ZBopXgSeOl&X-Amz-Signature=f36fb7408a2e4ddcbbfceeb8a67bc80ef2531262ad5bd03fa108a00e02efc60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
