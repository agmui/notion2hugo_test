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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OISCEAQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIA0xhg%2B%2BoNUCF2PXEw1obqsDwd8me%2BonZm4IXchRi6pzAiAk%2Bd5eQxrBcUZCJiLTS2kK%2Bo3WQn6wMQdeUV0PZ0xzwyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuB1Ru9jlOuF9HyKGKtwDDrgIB5gHeiymFv8z8SvxQhYDtJKaOfIwS7PIzetELzN1M4DILmmAJMOZrZlpFye20uzrCPdKCd6Jj6vveC%2F3mRRmrEDry9G0Khs5Ays3MZdk6InjzP7MlfJlX49Fu6Z0vN5UFMTFUC5DRocnWdB0AIZuOtet0%2FRpVCPw4MGSusQy8eRQ9QbdjkQfjwuo97n2ZwX3B4C4ouHAQY2N6SVPA6ET%2B6%2BgOqK0dJtgSDQYC7W5CZnFpnBfN2Lt05uBzC%2B5Y3qA0750oLn%2FMYDc%2F1LDxqv1DD49sroUy%2FFoeVbIw83d7yock9HYk5lOSFrEMWz14bhFLSLXkR%2Fc2DhO5bt2trO1ftnOkBZaYaK4SaW9oSCnjo4IydMJLkDbIcAXFNf4z%2F%2FtHp3uHMsntD0ov8wCaQpng8c2KCrqomBM6bWKijom2wBiDrac%2BLod%2BBd8QRmDKPLxElwYSC1s4bmIcy1UAPERiWIjx0Dp9%2BDFXeFxzEm86uHFUus57oQQEep62yqXlk4maWmINRnVh94WJl3YsvD3aRKAcUp88IgnhuHjVs58qANv7lqXu0ve9PINEbRcqbB40ukWO15B%2BLLeCu47oT6evew3%2BCB%2BX8hh7L6oeNX7ahIxyF704dmgD0sww8XcvwY6pgHDpQxtJ64PAD29iI46cVj4Z0mMyVyhTKrM771fEgmtaUMHDx5Y9Im9KhJArsypJDP9KzNbwjhx58Nrjxoh25eXa0nBL0YltDxMzxIpw%2FGFYsOpzmzPq%2BuJwTN5juJCDaMXmVKwZd1%2FnhRqYIHnmWS0iWq0Mra3X%2Ff4qxxHebqb%2Fg%2B0kFTO5EfEFQ7DfZJ0H41T6nqBt5KLe15E%2Fb4rilNdRP2HeDm0&X-Amz-Signature=653318a9c2af46ae5a85cd417aaca0165ff3c40fe3811c4df918f5f7e0905bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKVIEEO5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDmoW323%2FRPumWsRFURiumMV2RKNuO3EjkC6kIHciMSJAiEAq4qqJZNzJpRCOelPGgoKKd7fqK%2FAwGIiR2lGSSz042kqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4LtwXYBYH3WD7pNSrcA2mtdFIfR9X8R2x2pB4XJYYc%2Bk3IMM5YBsCkxclYhvzp4gzXw8y%2BPibxFWzWF5Mo60pWEyEKzxwiPo9V7qLWuS5wtoU6o0zWTHLAUledV9bhMyAzUBqH6JVflOe1os6WTgl7N2Zs57IPz73v40C3iyA1bMl66or35LZtpf8h1yOU5aTpzBjyGjuBkXZYqOAmWXKTvDHN1eBgpojbV5IfG4wa0FRCARF1T1VkRfcAfVsJihQeFPmsIiYhPP7bHZmZXgdO0jHCiCLHe4tPnTPHpb0JSYHwA7aovA3%2FaIf981S4WgdpDVX%2F5jjG%2FSpoBFU8vrx04lCi0eCFAmPWBA2UBcuxmVPugF2Cwc8Yx68AZU6I%2BsTMAZNqRdNqGQVUezTftYBd4e1vZIJyXSetml4RuJuitOyWwcBfTuiKAdsteu3I6eUvVoobKZ2IQtlvMDYHQ4PvzPCADmbdbLUlCpitVHYq%2BBTuIpOdBcOINP735OfPbVihUCQVs7896WpzcrbCqvojTpP%2FzKmTyn0zcymopSckNpv7bWtA%2FfOEjP%2BmSVBYFpXf2CpnmS9cReSJmG1sdBZ3Tq5OPFVSzv0N9gQYbpZ37necucdWMSc8D%2FrKZkkMRSQG8AUhLXD0NpgEMOzE3L8GOqUBfPW9XQIyzPRyzCfsBvCMEVqppjSYrdSRY82hNv6nJlxRrEBDD5h7tC4n78Ex0lrvHvMVaDQ4gTXRR4Oud9MIIOZv%2FwGAM99SrFb%2Bardwx1ntJP0%2FFz0nBbRDQJEOC8cneJ3Shwn1IkYlOLg1mTkU4PVX8cCcn6EANdw5YZzLVFQJyYyiE%2BeY9RnW5nqgFOgbDW03%2FMuERkrLHZ9gZTyGNlmOfk5A&X-Amz-Signature=2e4ee6004766aab8bb91f03a8198d2414f6d592f246e816aec2c9eba39f22d17&X-Amz-SignedHeaders=host&x-id=GetObject)

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
