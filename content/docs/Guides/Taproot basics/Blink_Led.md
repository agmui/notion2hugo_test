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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYDJTJK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5uIPCqy%2BoENpprY7FN1MYKS6p32rKRKoB3qpbZimFfAiEAya1SiwVB32F9M8TlrrY4ecJP0F99yrI1AYvNgERd5roqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5Bgf4HeNh015TlhCrcA1XaBkhpv9hIg%2FKA%2BGFzGEM%2FCvITGj9wRO37JeUsbOXU3oOhAtKNcbJ%2B6q%2FHZzfwDAJAfMtK7Xxe4IzMqXXqE131ScLCMJmfwjN%2BZKFjlH7zvVhKNY2bTCqmkhOEVUzJtcFufRRHvnZLTC%2BzsUTZccOHmo4hBAezoLCqs6f4VvPBperPPj8tJDFRO57SYPNyFo%2BYFv4J3vrk6hb7raWUM20CB%2BmjYNfZMvX7GQEUVcO1oshNxY%2BWNu2m2Hi9mrkZqRR10zIERUX21B6qS%2FAgqus9LoGY%2Fnh0RQHZwIzruH3GLcZm%2BbKxuQ9CQOfS4nfw55hnMq%2BFQA7O2g%2Fz5AYXTqyIQUr4NPy9oaImVOJh9zyUb9M%2B6lS3WDw5PT7GUfwK1pk0x2vIwWATD8uzbaO%2F9%2BFU9PL4u6RIXfqbZ9UQZbe26StK7gwNq8iro3Vl8sKPBwhfEAL%2FrCiOJsSN8UTOl9Z0RrTJEb0bFK5Jr0zi04Kr7LhqNKtFy%2BSg%2Fovd%2Bs4EvPdNOomVEWqJOtNCHnyTO9J2jFkYvGZjyDEOwXXGnKxJCP9%2BQIkG48wJ%2FS3eEoQ2DWV9AQHiwbGSVfbcw8b40Iw5%2BzSen99zKj2hIYvf1OGTaHrt2OyR4%2BNlfkLzMIDe3MIGOqUBjM0H4YFwqoqbedTmy970oXU5KsPYfgPtV9hBUshe7Suzq2pXD7Jd9lF8uzZWE7JVD0eOWkVPEAR3T22%2Fvcvmgw0557kDpA3xr2frrDZMrgdIOI25mG%2FPf8SFbqxi3wLQyDEDBtXB8VRxCDOM9IQONZGICODPynBYPfyqU9EnB%2FLI3CpFQt7JiP7vHXfNPp6A0suHpXjKbpdIps7gEh8EkHGEP50T&X-Amz-Signature=f925b7ad0b13878cfac0aefd4121be4838951807fa221cab842c3e811e40636f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYAPRPP%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNOSFaEhuPmY2u68lYIp14Aw6hKXT5cZwbHrrT5dANQgIga42%2BgxM6HEHZuk6zTd%2Bo27QQmE670f4lrkO79eEcDysqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6SiPwRY2jc7VOKAyrcA%2BkeeHRAMeLMXDDuiUQLQd2YaRFk2WMrgEBCCGZc7wz6DiFeok1cK%2FE6nRHjPbI%2F3ByDjG9xUFeu7LvlwmiCLQBAmMJS%2FSInq06XDaMulaS0LmnL0ko4gSxuZignQVjuFTXosoPUJxyIqW6gLv7WQqrMswl91ZGGS%2Bsa2%2BLZJS0eV%2BY4hYSiKc24indC1QF0DCe2kR%2BhJpM57SKvDXZwVyS%2BON0fcrKfjsV6YhCgANEcx1jYCQLsenZ47BafVXh0nq2V%2B2vlSSx4fUEohoN1dQhPEyy7skySESqsGbZgbXDTIcO4X6zzK5OQSR8Zss0Im8SDYbpNKwI5Q6xrLZ8jJN7e0O8XTt5r0IjSYodjPhRzxH7yEueuoLlfDlxWHI3G3Lkjbv8Jhwt83mvfvMs04BwSeg214aXuaCJUrLkjbRARv8V8RxrarSKzAhVuQYMzFzVdsfKdWu1VZ%2FJ%2B%2BLkWMSbb94sFzk1gdoq6JJnJ9lugA8ghHIdYNmjKqtNEj11Tl6SM0SuKUwkGDEpap%2Fkk1Pqk2IyZ9bxsmsR37FDnKfuoKb9BrBfGSZpIfOIIRvpy8kU4ZVhuGaO4KZcgzeyGcAkQwdrtafchGYwpTcmK4CdBscJk0avDJ5PufQixMOjd3MIGOqUB9A7YQmu%2BxFjzkZm5rAzz%2FyqGtGVZlEz8LvCfHgcubVNWtkY3qkpcbP%2BlLm06Sv6gA6UBwE7IOGFRnpp3%2Fm8JxSg9AvQB6ZUn30T%2BE4TAytPwdx0RWkMSgArtzE8JPsTifnHwl28u7a5U%2BGl%2B3gys2Pg4C87dFQiCjgfqEm%2BGQzAfBnWzpY7MEFevSV97VIuszvTpzc29PYhTLeP7XmTKljTCVarm&X-Amz-Signature=99dc67ec12b8d6bceaf7494e6f6183e128a8f28b57ccd883145e76d20f68e842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
