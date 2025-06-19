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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QY2IXRD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5isjrROqOkJRWhX6WmJOHNB0nFM%2Bsm1fo06F0jzZdUQIgaf2gD1n8wbAdBk2%2BQLO5SZZD23aytehdd6%2F78FxXSUkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgNPiiTpdcj2TlnvCrcA9RfgwiSFuHhsymtyCsqXIKagWhh2QGsFooFRfSmRzTRrRxK5%2B3gtamguCDANRIxk055lLMWN4Dz%2FkcCw0XFMTgT6I%2F7af5sn6l%2Fea9JexaZOD9eVKcLz33pEZ6m%2BY7tcaOWXKI%2FdCE9B92tTooPXqAyS%2F7KWiq9tI6RiHsTe0wVDRH7%2Fq0IlNez0KgxlG2It4o%2BF0temCD9B3P%2BoLFhCXtqgmZ%2F%2Fb6to6xbjzqTMVrsX%2BfHETkxARvkz7ZiqidT4gLRlX5ggfoLac4nN8my2zeZ7E%2FlViEo5tVZN%2FMCMSOsZpNKlEttujCusQlk3S2I%2BadM3LIVccXZjrDgMKCpmk8EMU7G2bvU6AK0Np%2FN3iNwoTZPdjZPN6ETNLNR2wnlpq6YNpAA6%2BrYKcU06bydPK1L15eKRvtkqC1dNFXk%2FB8s5BNiks7UvMnw6UoxTKCH7N%2FPWQta0gBTN1L9%2F6RfWMB%2BZodBmcJ2W4bBx%2FiLHB%2FaZ4fs%2F2gW0oQqA9Iqa6p5YjF8wLLxC5gvGHde9%2F8mhNACk5wZQeXBDODDTvzsYcJEmSKdLrKd8jkvY%2BWRlMgiujJxwOeYi2KQ7YV47pdQuo%2B%2B85TeuvbzuJhlpvcKcCQl3t%2FlhjKlm7JXFMifMNqz0MIGOqUBrno06NQtdvcFGMfZriL22tq982tehMX3L4Cmzmrz0%2F4%2FQh6pgZaDwhFf6UIHveP%2B%2FKgNobbe1pjLzCly0DdGfYZIz7XXxhXljnvf4zYg8uybrHPLqoBDh21lxXqnxRy0MvbO7%2Fh3Q0IcWcLEV6bk%2FbC4k4eLMrv1mnHwrH7xsRjW6gX6Ojpcm7%2B%2FsBD5%2BgjTxWKLWDRniwFUBIjXeuOpCqLUQxpL&X-Amz-Signature=7c30da82e25fd1792b83256331adf0075ac5dc0b23635d1fc3ba5095826c8810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULGHQNYT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtDyk92dFKv2Q5gHm4Mf10lCvQfpjnG48p%2FkCLgNB4dAiA8P6%2FxpLxy4GT%2F8fAaLmeaFN7Vcq55G4V0z%2Ba%2Bxl6RbSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjnUTscoOc5o3QZ6YKtwDi85TSZ%2BS3TYI3%2BiCeFJ3%2BFMg9Ic2gDJxQjTHlWnvsUl4tfqV8telT06jAklTM48WO8VFTNfV7H%2FsW914F8v24xLoXOj%2FYkYjlPbuF3Fb%2FHubnasrhPIOSqmJC%2BJ%2FyLaqkmfwuXoPpSofJhEm7mRJw%2F2l3eVIj%2FkzuURQAXVmrh%2FcLQrSK0%2B6xrE0qQtwc5kJB1kUM2mOPWAsDQi6UeXMX%2Bf2JSSnIr04dcxZW9FhkOk5G%2BKH%2Ft1u58qBXHZvpkz3vfjlavqVckP82VfSX0elJOyZbw%2Bo5RFrsDpRW0LazL7JhwL3TEAmXwmWbvi%2FrYLtCv3%2BNt81bDIjN7b50OP1HWlUZ3MfIEP4lAMGa%2B%2Bys1atz0QnFJQFBzN4DQjSVKlXTAT5gK%2BPIGeprI%2FnJQMS6ICcCY101eTs9tJvIOmR1CLFCVlzA3pmqEYPHVBeroOh687PY%2BcbKjFSbkbCKHN7qKrMAXRHxbGCO4yQkYXbhJWxaUAqmwsUyutwrNr8M0viGGKAFrKKd71xstY%2FCGwQ4xInMVO7sWwTYuw%2BWynJGbGl4514P8gIDK5o5Cp8PrKhCd1u2vJ%2F0PStUtzukJbgk4udOgBrFbOx1Z08w9VfA6CG9Arz16X2RxK32k8w6bPQwgY6pgHfJtvqXlqJ9bpU3f1n6Fiz%2BrV7KPWKXLn01Q0%2FJ%2BX7J9ASWlI%2Bd2levOWJUGQoK7sWcEkvLCywPk7O7pHu0odRgu%2FKTwUkU%2BlfN0AG%2FJ4uwB6mY2V5cnOFHYOKJdHFYbJVWor4Ym0WJ9irbtn5R1uOejOdeo1786t%2FnxAvRkm3S3216Kck8vG%2FOg2UcPTQ2Bueyiao8Iv89tYSeHv2VGkQZWVjMblp&X-Amz-Signature=02af1416ac64e9701425cef2d7d203d691979d5f7825a3a289d7972d602721da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
