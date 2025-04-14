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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPIK25Q%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAv0CUEWGWrB2uPlgkq9Y9xB0rRY1Vtek4pQkYKDabB%2FAiBFL7fYiIBNWCchOcEEW8Olf%2FvzkLbMM4j7HIRHJI%2Fa%2FyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGRTlhXl6ZpzaAvKrKtwDrYVYVWZWvHJ%2FZEGdolD6R0v8J%2Fff%2FGBzms0RcYwrK%2FcnP9u%2F5Zm8rTaKH%2B5cIVOb8fNTpbbtw8jx5r9hRj796z7%2FTEN6kvQdmmotjWQiMAktimvFNyTGoNLjz%2BnxTDd3CKUEXBHdXumAtEZyM5Qc6%2BdGrgRk9p45NqYDAkb%2BbRYzAoXjwgjUqRLC7wFzjgosqry%2FBfy0%2BesAksTn18GeP%2BD62dHWK1iNQrwwz%2BoEypx6ynS3%2Fq9CBPuVJBDbKWogBiMes5P2hIRmeFEtx3WZcGVtTbo74WfrfVBP1UhXVTnPPnuw4PdAYcQ5sNDDzf9kPNMhqdQo3RxnYYS%2FBNxNPENB3grc58v6vzanL9tZ7VyC2gEn8ewSSC0npjV1c2ppZreIeOnyhwisVhXpNV%2Fa1WRKycodaTc6w%2B0fuvEOOjh0kI1xEGOILoTcknECFtsj%2BrREsGMPnoQoNLQpfRQknZlCgr4u6nG4exnXl%2F3x828IvowO9JeUR4eUWclQxzoolg6rQfp7pHX3lyuaQtbGV%2FVvPqCtF5wfn4g8kJMBU8k698RnGcNixNkgKxywpxItUDCadohj1VvNcojrV7YjJWnbcrLx6hXoVl0p85ACc8UEX7p7JmeHfCMhppMwqsnyvwY6pgHBpEqLhsga3c2Nn6JFbuVyXDPYlMlhrBJOqhSzoh9wsL%2BaC7Yre%2BPuDJIDhVwQdln1vb%2Fn18Z1ALi5WMYYY80Kp%2BDug0myOm7zucNbkQH0Z9aiWEZ9oL6HMegcCrl1E09FSEe81LUSjK64giZ8eyl2sv%2BddXskrLJB1PPtiN1uPQ4Z5fcS1kgeJtx1CMn671MH3x5DM6NGoVQH41cptL%2Bz8yn9%2FKb%2F&X-Amz-Signature=23c99cdad3ca16b771246474fb0347721d612e6cea7217236fa23b23d005341f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUP6RL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxxJWdZYKc%2FMnq5tOeYpbQbIXBqLYHDM9O8YC8g1pr4AiEAtX6QrtsIAO4otU0BYU4pptTIV9wTq4hMU6zoIILpv%2FYqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiaYzpWb%2B0lap5vkSrcA00YN88%2FGivk740bA%2FVnCttoL95ooMqczOC63skSIBfq9JFJ6fQ6YyhlUU3ZeDnIUJu8KGIYokRjV3TzgY%2BxvirQ4%2FWrtiB4G0X0L7sx8dNdTdE7fX%2Bi159igLXn8orreIt1TRbbRFhGIW86MqTuznValilSlU51hudTJDe766CYyygPiicU2bkceu1VBdkoIQ7sbiL29svqEgNa9RZB4%2BPjCcQXK3SVcT4penCcC0vqN0N1EkVI0%2FKch6TeT8c%2B8ISmbyWqmu9hDqXgKrg%2BC9hNtH7lYa%2BSmag7bnFhtdrc34BIVNJOBeKlri514BK6oSPiRgQ4zORbfcvcvgj7hom2bxypM5AOyvfYYZLrXfMZ%2F4fuOXYpwPUMyUjORVVlC4oBlNBfCFIWY17aY44QkVo%2BbdnIehPosWafwnGJOJTox6j9tkS8yTCViBiQxswlu9x3vIM8orpjDijvJD4jUfTKz12KBsSwA66WFeC9jBi0mLDIi6b%2Ft4W6ve9ELd%2FFG77N0NPhRLgonnivn6fiuU6aRv5i%2BE%2BFsFUnxtMp6VKLcPbwsCIbfxptZ7IowLeNaWGQGcPLbYTkG7qYoglyYt1noREEWXAcjYVslFNdnyySJPOce7bRG9MKKhzaML7J8r8GOqUBOf4OOoid9AYxC2Zeyy%2B0XwXIzkrgGc2yg%2FNas0rFBLpAHd4GdqbJXty0rH58BhkGTdwwYhJpd9%2BfjLYgHEnBv2Vbv3nQZh4uo%2B09AUM3eZ7z4ZvXv7vPZaGTOiczenopaQMbuaTyHs6P9VdTW4viBdDKdSwbmydblEV8U1Rx2wNqqaZ0flZy%2BD%2FGFGDC6oZm9WzcXx6FXawb8Yzcc8DtWAA%2Bv987&X-Amz-Signature=1564695919f619dab3d47d8d59692640baaf76a8fabe827d61ce6c452cf6c85e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
