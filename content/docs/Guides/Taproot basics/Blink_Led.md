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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3QVXP6S%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqEuR4FbKZjdmZtFHON%2B1PZhGFDHHs4nj3cy1RCVRqaAIgdJhOjrvyzn1KzV503b%2FoI2m%2FhutDJb6mAFu39rSKgRsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrp%2FFNpoAk71rC7XSrcA7agO7f4%2BbjkBkOlC4HkhUzIZ6AebOn61j1z2qcjb8jzWpMHasY5DMzVGmkkmfAfH9gsDYCD%2FxbclOgYg6wWIOfnH9C2dLPgMhUwbr8ExqsKdtXSJQV%2BbaEbRafGvXCLBU0TDe4LIq7xHZxTW8gU9AA8WB6sNc3KajNABCHubXb1ivLdx1nByYpgKMmdY81KZDFrno0wTvlR%2F4B35CQ3HJwA49jQN7t94tiPJhM7IE92iqCXHOAdMvGu7Zb641A6C0wq7o%2Fz3Pnrk1mOO%2FcbHBmq5NPURachc3ffBrpKcwU8FEJ9VS7Mkyt2CsGKOwax9xmJZYN04QDCQ8lLaHET8uGn5E2rcH%2BqY2u7ajqSaLJUxLSkFwSpJfmBQjv%2FATedc9LCDVpy24uHyKWdOvR0mujuHpTwh6xTYpxxJ0Guehd%2F%2BtVJ1SlJ6tx7rHjQbN7NvoEs%2F347IludEhbu6f5wVYTqML1O%2BENM0W56%2FJSxjeJkMbl%2Bq10nR%2FglEjswI%2BhPGfVozdELtC8hdYVWCtydgZLEuQe4XvEUyjICNg8ICh3tRVX3puzE8ePx%2FGe1g7a6j7S5oTFxzxttqkxCXk6MXI8b319Mkhuq2es7qcy284qaufFC6tGTGHDvRqE2MJq96cEGOqUBTZ8c92V3HLi%2FI5ZHSYMyTtOxjlvANgK0diHL3ucEKjWu6vrnxEm1inUJKdOeLcw4aUGKeXhaw63nRVu4S8Pyx0JqsRM7jQR%2F9Ut0lclL5dZyuoilaJ%2FbbBmHcnBf8C32%2FcqWSwXRTmmhGeBSxZzdj0m4nSSae%2FcxeudC%2FIYsEAGPS4%2FmnN83yabZVnPF7PZaN5PGfDK9voG%2BoI9h4aWVHipYjHj5&X-Amz-Signature=7f6c325e36df443c913a669987610541bd75da33e1393ea58e074ca1893b0faf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXAUF5AI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOlZ%2F48eqeDibf21qGdDCZRFqVhIB%2FxDcCkz9IqEO4FAiAlHw2A78tfwJ4cYZgSKA7FbF8VIfE860Q2mdmkRzJzqyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlNkafrfciqavUXpIKtwDm0FIjOLQKP5Y9zSmqjGAgbU4EWbjOntUIp6Az2XAJIMnnvyzlXdwCqtkQnIb0H7EuEZ7kAaD2Ib6MtotzoTR9FztlCj%2BdlWTqTBtKei2CFrefRMHxl2r85E76pMDRQNq%2FWMUrLfsKMNSmu%2BwVYfGbi2HmtnB0m%2B6h4NSN%2BxVh5cWMc3ufRJbBqyYboBoNzx0CopV%2BmR3wEN1dgGc39TZdPw%2FOY6ApIiO7DY8e3MLdnqzyTwUE8Jmpl%2BWPO%2BWfyyWO8MzpqKt9WAfhLWHIbzWEJNFxjRMmyPuZHXOkv%2BMdg8eA6jW41RfTD7S8p4Ke%2F6grdDy0FL6GrKxsTWcMKVt%2B4uSPT9Zcghi1sn13Yg6PvgleUzFolPSRsQp%2BTf5RFjvJBWAsUyJBZyZZaXecgqTGTMx5xmg3fmE8WagjSI36iJwSU47%2BNIR5mrILUhesn2rRgH1WHWGzQUfgiL9pq3Yojci878yUMQoFvCEvPfL2sCj2kW5BPXRRYZDHVcS4qkKlFBIEcE5jevBZSB%2B51UlV5i5LI6hmn0eJ12w8JAu0cbUM9yzC81dAeYh0utmtyRvJjRdVyzyzCRo8vNuFLc%2BygH6cYoTZ9n6Vgs5KWYXvQsiBfq5aNDosU%2FSVI4wtr3pwQY6pgHt7U9FoBhKtqLVb%2BqiUFzIROnepodluoz4llMnpnB%2FLm5xDsjX1uRjCVX7HkfzPoRowg8U8k0jspCrBSATApMl7JK6ZKY5K%2BXlBMgyYkajLBzkGQukNneFTFilrg1aWICPrXy%2F4zIxUF7UAGI%2BbvX43MfPJ2u4Ie9b6NtHqk8yyUAxFdsqCC7YruzpRD3inpmNaveQT4dRXME228ioCP5%2BiGysyVYI&X-Amz-Signature=4190de18b0c6be73b9903ff96eed7c86a56d3c71c6def9c5241fba82226350ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
