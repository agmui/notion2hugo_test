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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676OOQ6FT%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHoAonPm8Kh9metTgV%2FlLC02QNsmVn5Gcm9NCX6o3gUTAiB2Dl89UXAmxYF9edQJUldG%2BvlvtZsyM%2FFxX9MPthltuiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM67t6%2BX0A63hgFrWqKtwD72MX3I2vaxozQaV2rhQ1p%2BcIeKewp7HmhLh9OeBoQHEbL1izgG1eZcgUPBOZEGdcQIliKC0cukQx156hi%2BuxHi4oXvfxZ9dQNXGoW4niryk4pzkKMZaYV5ZsHE5xNNgj2zMNkI%2Fb2yiHUxXPRFuvM2PeMjhWxwJMlrsCS%2FzUkeYVdfclvdmpNSeRc%2F3YyT60EyR9jE0cEFNNMgynUoCpLje62Td1Oq1HaXqWBmo5o49i4aCXqN3qiU%2Be8meHdjfD0DePsFlEjRf2CvLoCrWANZZG3EckEq04mPIY2sZ3byjoIcfKEGC%2BspfDWY1IK5T8EISmiIA3beIfrOT7Ly1u7RjDLmtpdIMIMmV7vbsUZ0h42XLbPWHswEnHXN7%2BdbfcmPOGdMQgBed0HMeEjUbIuw781GxSpcf1GeFL16YLbNzfsZ5fQ%2BY%2BsGku83yQRLfemqo2SJOpOY5OVaVcaeQCLj1UmXCjCZ3HJwQvyLnZntXmmXNHU6p1ONjvSoJA56AYmWYBjr4o5HLD0wR8R2N47oNHoXkSrR6p%2Fu4T%2BrJiw09cYQKf7RVZMr9Gt0ViPtXG7NFDlu6ypVALciZMGvNk6vMENd4NdCGD5qGwcgfOY3fNkuBPcIxIVlGaCc0wyb3evwY6pgH0vCz5E1ZQ8OEWKrb3E32qrLbuF7ajNCNPlV29Dh%2Fx0MPl%2Fy7DevzZFaMvkZjfNDXkyQTmtQl%2F5kzGmhmbIzd1014JJChYdcs0AGaWjTsGQU2Mrp0%2BwcQ2ivFOzvr3SNauyazHgurzRZrbbnXPkNZvpbDBvdsv0Am5vXUhJB9JmeybwFiUFGjuz1JKqOQrsMDRBOsWrSQOPIASG5bB1LFPXuTCaEGT&X-Amz-Signature=9bdaeebc8305e112ac41f4b0382107c28b710c430b7c059718f9e1aa9c67c4f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AGEHMZG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFcrXh0uY6n2a8PmJtWXPZv9q%2BeOjn%2FfrekjWU%2FzLXcqAiBKb1b%2FrVOnSzNKI2xqtggCubBWLMNb4e5v1HVFQMU%2FlCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyyvcXglVFecQFCeLKtwDMXVDX21k5ccWhfuEXPf9pm4GmXAYgr2TBLcJBpOsNujqooecpZ7hC2AemztupkUyHWfDirhXzhiNL2qgw7Zx7vdOe25vVB0Wg4eGcYZLD0O%2Fg9PKXxSI9D2Ah9ZbQbCwrpcDEAEv8qrLpp5xJLCCEy%2Bl%2BbjIdNdGZrJzF7vG%2BkZCXfBno3Qtk7gIYqw6iOhndlXWBsPUr%2FmYzXy3HBR8vBIu7k3ZX35x3HRjTBNPjZEpHubsqv0xYCUGdR7AKjIMfWUtkwPL5myKBI9bZswO0d7g7%2FFAx2KfoA5oG3n7m71jvY5KBISo45rXWN5bns5IrJJmZkkgTYXRLB76SwRL3U1iGlB08NXVP%2FtWwbPoGQEYomkXBVKLWuBwZaim0cCM31dsaGdYY4IJpdFtsF5eneuwyEyfsFOMQYRDuvmiTZlKIW%2BAaU9NHcYts64NP8HLPwQGhog9%2FlAF4RZWhyfYVevhSjd3gpf%2BgYS4cVLlzEMq3dGFFeIuUClGI80%2FaCtAVOl%2BAaCnq%2B4GiZIJZsxaY%2BKGf60J53HtuwebJInZ5A1%2BydJ%2Fzvtbyd4VL6wK%2FPWWDzXZfRVM%2F8CJ3BGntAATPz8Luwx%2FCymFRLWHSevfnLIP9w3LRvDj0gT4hDowwevevwY6pgHh4XVRY7TBrn6S7rUtmliG9ZC1hHaepJ9ruJ18sGiTYmOMPqG1a1IQvKgxu0LMygvz9fFKDJAma3atqWupI2iOQrenPQA4TnV6Pa14wGT21l8FKxBtPFhYKwukbOqq3NygjP6X%2BA8X%2BBX8CjUx6ziuu2jJajB8XkNDobL3xRtku9cGaXxsE%2FsuTweh5ZWW8aV%2Fb3gvHv977WC14pIaQh1MLKGSeJuj&X-Amz-Signature=bfeddaa025dd68713ff99136df3a9ae2b8436a108a88b225bbab35327635babb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
