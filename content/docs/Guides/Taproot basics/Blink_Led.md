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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4O5LOG%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIB%2FCtLk8JCQmv7QiYLGAJXnViQenNSTf5sjidlfik%2FEbAiBEa9StDKLfhgYIltAxG%2Fgp26pwkwn8jg09xb5e6WreRyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM6oicZeR5FK68TLVZKtwDPwd3mPXIjRT%2BWNa%2FQaunlCUCrFc9ujiTRYzUreFpXgwkXKrOhgksuFxvpIdqKOWWgzh%2BjYWs3oENjCJvh3QSblQiPJeKkDjZNE%2F6a9jq4Cbxdmk%2FOpV78a%2BTSwwGOW2%2FGoVsQ%2BR8OpRdx%2F40Yh7fKKwzKXPurGxi5Fzxg0E%2BCeAsYKdOoXk0DpKwNQvFzpSk0piq9cSP3b%2BtuWpaIQxn6QvM%2Fl%2FA5Uqo4hFl8ZQa%2BCpzgU56KJFuenO5aM0zPEllHbR3N4f9RNK1Y41vhKzi%2BtmbvmZ3MiSNzDsbLExuBJsILryBfCP%2BoyLQYyFjp3TGNlP8jw0oT5g%2FgZrsQSkFWPPIjYIX9xakqn68KP8NgyzYK8Iw9DqjXIG8hlotzUoHcOdXU7JJqlmc6vdTfqFCDGGTRFeT4N91mX6s38bw34vN%2FOzzRGqB1t%2Fb5CXTvQ7o9%2B2lslvxWQdbU%2FFYZ%2FOWM3uiqDC5U%2Bl5TUMxujdgyrPW5ms%2B%2FaR491gPCOE3YOVVR7RH%2F4eWiC%2BGBWcRTZblyEYAc2sNqSMtTAZqH6BUe64hAIgJqTwR0jqMhDKvIewlAy%2B%2BGkHtNrXsIfWLE1c5ofc1bQLeZWomeYAzDbqYVKXxU%2F0hqrwHT8JOeGAwrrS%2FvQY6pgHAE19wShvHDORrUJOmh6pfFVyfyCdFLQZ8gkSguLgxFU%2BahRz2BkP2wiKvzhBPNNnUQdjDZGWKp9m21wFlb4JUETy1tG3iV%2F%2B4llUrA%2BY%2BxX5UCfhH%2FBkg9EjvG9aAXEPZReIlVY4vPjajCTw%2BPU6NfRgQciYDcQTMqVobB6D3AeMlZW5ufWZfEmZXMhjdutRHycVf3n9hehh8Jqjog%2BJFfDoyztxg&X-Amz-Signature=1c913cc1dad0a4357434f5936c125a7d4575e3451089a5e8358c1bc8c359df31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFYJAPIN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC8LNmaaLvOL6TqLixhSZBFxH1qr6deDU7LJw9f3142RAIhAOl5rM4yalfOwq8N0G2YiEpPVswZ2A%2Fe03uUQTOpkbvoKv8DCDkQABoMNjM3NDIzMTgzODA1Igx880Zv9mN1Dw7526oq3ANQRxe2M30v7rxWNgNJFXc8c7Ujjh%2F67869qw%2BVcyQifEr%2BKpLMroP95kRYpNMA5ZP59QwDcnVmU7H1fWnAsORBwM4Yy2C1TQnxv11HEHwBiDZUp%2BNm5PJZLph%2Bm5rOQkHRQz%2FTWMwwOKRNAMiXx%2F10FMPOG1IgCbXZb9omXImscUPJrlPAR2c5gnj4%2FAhwcp12Wr75mb0VeIXzn%2B4WQ6%2BUFDoWR6e1aEEIjcMBlnF4bQJrn0MJtkIlqjnHX8KJV8AITV8W1BeFrUvny4J2jWMav24KA5JxStNf5Fuhny%2Fem2qICKDaW%2BniPDnVhfPzTyHvPDQQIUqPpe9zdBADTUDhEvX5VgejQuz5pzWmujyDhrTOA4vDMi3cLNZA3pGfDtXl5V89rGZ%2BnbR7cRT7LCsikaWHKgMBJ%2F78mv%2BAaUkoaP9Z0xpJwjkSsh62dgMwWR9nDQYUpynWEXiOsmqVre4Nb4WzZURQWZ0lMxrn0aR%2B490xCRzmcRKwGpctpzJ18U%2BTa66G73%2F09bT018HRw6JclUcCCK8HKN%2BjHdRd35soWozkVelcroueWb5rHLfjvKwaJROpNaGzlfTfBHIJyiFKQVmQ0wctRKQheE4YbIK3xFD5oedsB8IM5Am%2F3DCjtL%2B9BjqkAQGMItBqNb5fDJVoEj9rrF7DuZGXG1Ow3Gx3HSfQdrsMrC3VFRnQs4oAfP5KL1I4lG6oo67GlUTi9T5u97u27lxT%2FxHJv6AYjGnuh9pPpuM8Ok1dG6M3hfOuxmgExxSSD8FO2fZ3yNYPjzkz7qIvoj%2FhCcDgJawxvS3A65n6d7UQ7YpztT3guuMO%2BQlQ1jBU26HxNUG2qviNkqlJZEhgnUMt4wp4&X-Amz-Signature=62b8f92d0a5ce2c8ccb0c504735def387efc9371d6d36721ea41dba306a423cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
