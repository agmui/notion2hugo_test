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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3GGIQL%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIH2BfmuJlcow%2FUys9cZxAvhlWYlf7S%2BFmeUh8IjYMA3oAiBJrQd0jL7UrhY1%2F5acQ4wzQXYzIycomyomgbVGbNvkRCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDZjreJOEMal1CmFxKtwDCF%2FyjZ%2FcgDwjHn2WdjWxTsK0paJWLyglasBgkxPUh4q%2FQYN7SZlRYUr2k6gjlDdO28%2FEAY58Zi4mbFdcdhR9uhZ%2BfVyLFnCTNZwRyTgmiMEZslci6yvWl7o21n51Z9NXclX9yOw8%2BRY04fosWTkieiehB7MWgOMJEuhepPtJvyv41SWDF0kAizZt8PI0BjScHt7M%2FYRuzA%2FK0NDX7l4yiPhiqkzu0YOXdM2Pd01GzRk8lalXmmNIBo63lAfKy2xZi42fBuL1fuFtYbetHthk9Z1YeQdfEEvHx0JPx1G3xxLOLukl3RPgI%2Fi22HfNw9KLengdKCekgI61UHxWzsI7zx0h2WMjQkh3cAsVwcNfugjgOhxgHqYt6suX8D7cx%2BdaQkoO3yCBB4HK95zoCdX42ddQH4tByulXIteqglOgGvMor5x9VmKsKbkods4CYFGgxiRaF%2FjAZHj7hVeJXRi1t%2B%2BNC1%2BwzcazpuT5P1z5VQgfBmERt4cAJum%2B8wbY2JL3I5lbDSK96M5X2v97k0ymb9M9C3Tl5xATE5Eq3U%2BrtM1QlR2iQXBw8GAZldNLLBn1KiEF7PQGOA1cwt%2Fr%2B%2BOj3tM04hqdcpdtFx6d%2FquDgzzUkDCLPnm6tL69OGgwhfWNwQY6pgGgdJMMMpx0eejUIf%2FFPbdNoNrVDIjXJCRy95zxgQflhIaQ31KbsmP4O160b59Mh1fG2QNB4CSBTWx8DqmSXtaVsBjb8nPxD4d08xds8mmQLVq0kXEF4IwEKXqeWrtREjr9paopjaLXSXikJXDU1Ky%2FKjR4KGk5HpTu1vadV1qVtU%2BadiA7%2FaevXsk7r9pqbJprYRQjXZP83H8pdpBNrpRhi8nF0Rm0&X-Amz-Signature=fad6ea98a573ed632d6e834b24e715b9423277f0cea2874d810577a445d6eb98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XORZG2V2%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAe1hfBraWe81CFd6kYiTX79VCW2sX%2FSrTSGaZlcAHXMAiEAlPnJqUKmIcO94rEWUBIike0037uS9x6anVC%2Bh3IFJzsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACJIhXcIuoBcLAwVCrcAy6LQcHK%2FC%2FYa8b7PW1GllKEUEhqIuFAT65qFPvOIuOg8s0beMTFXnfR2x3%2BiyF7mY3JFD%2BTLf%2BTZcZx9jQ%2FMMudOotxNgXr5xSyzWk0bu%2FjUlJB2BiwpHg97pNWINZc%2FGiD8Sp4wT7V0S0vwiiXchb1YrsmcW05SZd8pRQdxIBa6R%2BsOECWVR9lttUhcmVd8punj7Mg6mEgQK5nQv%2BLSmY8n1LdMYYYQBFCM6RL1qGpU6retL9R%2FzdVtTyhC0hIkG83UdxWuui40uYokAfcNtMv5PTIZtj33q%2FglVCCaT54qL%2BSc6FyWml58o%2BBqG0ZvFT%2BXgH70XG6FZxymfl2rBWir6YtETqczgsiqLUAb3q6OwnCmyawV5RJsxlBB%2BXn4XVSIBNA3gPLQyhSNZsEwHmkJ8Hsb%2BgUmT8akMQrvspVunqxRcJrseYdcqiQ%2BJkDyQahIfiBfKEfQmRTBBoJvteTBUInChxkrVFVFEjNnfxjXYPj3uaBLZUjFfkXFRSnZi6f5YJlhgmx7QDpcEtzNfwATJLrt%2Bb%2FPgGws9OQAjorkRlUWzPmp%2FPD1mXG5KTUaZ%2Bv%2F4NPYMAxL0BLw4sZiTRyisE9th9f5UmaVUXxUpYSyvV0o9Tx0L6wbkd6MLr0jcEGOqUBM2IbN%2FkoJ89%2BbMQzu0wdZyd21dve%2BFL%2Fs5BbkFlN9ukwVoeN%2F%2BTjh3Q4j2QJEMwhXsfdglGEBFZwUW2hcF9qyQhrWqZW8265ct7e9nL5mmTabcssxuzMT5TrtPwwdlnuXNhoVZ6VhsrFf0EUJP3jPi7v%2F1GmUCN5DEA%2FBURCi3YIojkYoTidtpQ5ADMxxGRjymwzqkIpCdJ4LB2ekZD3Vymds4iy&X-Amz-Signature=589f038a50587706bfb18dd16d615ce6ac7c8ba30cfd70f6ac9550918cad8860&X-Amz-SignedHeaders=host&x-id=GetObject)

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
