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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPA2CO7O%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHCpaCPOnn8wMiC%2F9PmGzDuOJ1qiNrzmMF9%2Bs0kXiyOAiEAk4n5rhaNfmRkmKHw2uYALl7JJpiavz3NzEvOi7rMYpEqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9ypQtE4HATn3AU2yrcA4pNrDuCpfq24oliFWgaf4fTUASqwwn0KLBFQuv1mX2ePfE53GXygWA1AcqikBNXrjNjmP7dtqxzNMpNq7TK9S%2BFC65WJNWU22oxMKD9cOd8gOUYJmZgFaR%2Fdfnerk94Yrd6wlwYVHkNLLQ8b7QaKA9AOkPflOO7UIzbeIKv9fFMfdf1R5%2FlAzPYOAwTkZamSLMsRku24o1fArTuusjBosj9HQeQj979UnBHXipdXbjD5RC9FPXbhob5Hyy6g8cAfAbjkWf5m3hLStTEGNWwPd1XFm3HJKXoiWRR3IIgR0uOo9o4b2oMo3ciFuEvvs%2FRgNkaR1SY8OvEVv8HeHC%2BZHkh%2BxoqkMuddXSGSBFtv6inUOcGBpDYF6pYOrk7M0LI43DRZWlsjaH4kgp0XklvLKK84AcEem0f%2FtQffel1G3vxZgwu83IKEwDAvTA1jDc3BPcPUQp5293AXvBFJOByiPkjdXm2tx9CcpvYLYg4oGRAcp0Ux7xKuubKoi4ocvBk%2BUjbHZI1v9eGiFO1o5sH3liDuRDd9lX2l%2BXDsYPfJ5WUlnfAoLYMendRHdNsa0%2BT%2BK4GxFSJfztA14PZnFe0NoTgj5fGNR5z%2BGFQDqFwToNJDy28RoXmXoJR91vhMLbj8bwGOqUBNYVj%2BriAmtHIo1SBc9uEj8ff%2BfI2ar5FbE%2BCuBQFPJPj7HozIBl4ktgt6HkKNAj0ZqAWNrpfphmv0sUWH34M0QxMWI4XOqoy9ToT%2Bx%2F0iq6B%2FRghztCemrhl%2BTMkJI%2F6s5JiX5EM0BAfA31RMvpjLFwwCX%2B8cKKb43fpCcHTh%2F316wPcfE5%2BKiR5jnvLP%2F8o8ueMr5Dz97Vzq91HQls9%2FjWcvvnk&X-Amz-Signature=2d4d8d91124976f230bbab89d38c92100d0534967a9f67084bf8da92a55056b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZMIG25T%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSZogXXjZBbR%2BtqAvOb4a8JEy9vxBxdE3ExaiYOs0SnAiAOpnJcr2TKsZfXDUuL0rF55w6QTEX177cVzPNrMAeOjCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIs0C16mpwdYCPBD5KtwDQ2M%2BTGpbL1XqzXsZxUhF8DnV9tiq6%2FlAmalmGjKRAfvMkPud%2BZUsylOwjBBeMuZJ%2FC2B9zBnpr%2B0rRh7fRqQcIWamw2xkymqGjNSESjo6QQDwqlypOqxGUbXKpxiTkdvr8XKgknYzWRAA1826Dd%2FlyTsw7i80sfT4LmknzELrwwscHvkiHlHJ7QoL8qxyr87mdHOWilCGUkaUgOYv%2Fi5ls0jndpsNU8A7e3gMgLY3AVKQPL99A0A9CNEX9W3j95fgwwxO1COxcm4REII1ZOc0Xfw1s59RJQaj2NUPAVk336q%2Fp8Fyo6pVAWyGHz%2BsljFqhXH5n2Ayzx2E%2F2khFCs94HjuPhKiM%2FHZAmZ7YkMu4gdmV69k6YMOJQlmmP7%2BLqaxsHNM1qFRgCpPuHnuxV7V4ZLWTij0dEG1cxZTeUg6plXPC26IVXO1%2BjULIJxDs%2FwJTaL4ahHpbqvUusHts9QHi3rUFYHsc7kVwpXhkAfdCKG1jr8zlp4Tml8DjVetFtzW3BCb8I%2BvqJlki61c8wvpRC4sYBjhMqWgUOmesXBfWIcK0%2FpceLK6AR4EbQQyZzUdl%2BQQWUvajgxQDYRRylIJKMNgSbZZGdn9N99I0HzL8MX3cotjfyhPiUrxHswl%2BPxvAY6pgFQTMRbKgxni5UpxztQuoVbd6MVEwu4SPpgTjzd0aQfV9cA%2FosvVFCBdBabAmakAvU5c4bykCzZ%2BbnIZfj8aa6fY8AcNrxQp%2FbPYWgLwNANI%2Fn26YVAAlfI%2BMWWndsRsjxWZvkwXBUF8M%2FAIKwq%2BHqqncauFk%2Fyr8qSE1ciPrTFHeY3m48tueN5nq3TvHSGpywajMfwpy6CmgEsE0DUd8YGGHHX9Gdo&X-Amz-Signature=5a1251e8ac571796155f45d2558d34b14aa3c7bf5cf3756c0926de84647d6271&X-Amz-SignedHeaders=host&x-id=GetObject)

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
