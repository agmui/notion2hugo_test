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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57ZHS4B%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmZ5V0A7VQW2lRmCzDH7wV%2B6IP7l7nPsYxaU6Idb4nyAiBehuvAf1OPe9CwDVyDRsDA6%2FjH9rvqUAi1RuxwpTJj0iqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4q37PgAzN%2BGNeda0KtwD4xRHolkhs6v03MLvrElxb3PcgpeEVUsaS3B%2Fyj%2Bc7W2HXkz3Guw2dDhMOLkUU7diYs98yoYWr3hU%2B0aaLWjzaBDhd3FYAQACNItNazxqr7JFExTiSOBST3HSDH%2FSAXh6YadMhGK9rtlGmTNcrgLG0%2FdWiJ1O2G7EJOjSeZTDD3%2BDdDMuEtY5raQaefNRdGmblvN3puDlpONOR%2FPI8%2FFvk03EGBPpRvbAZJ%2FdDWRVTa903qQ3HpaB5CZ7WqBaaS6EW3%2BapT18BaVpKq8lLm%2FMpAA%2B2PEiaZbZBq0pyHIVicrjbTkUfSJouet%2Be3NohNXAOWYzoxQhcK5XMPebuM6tRkI%2BunmuJC4x2KMS8U2EwuKJp41vlN0j4KhKmL9A50DClAe%2Bl1ZxgdT8G%2FF0vjJqxw%2Bdrurrc0cXi6fDFtoKgGoQ6HwqaEBXXnpiUO1CjFHQrag3PxZRSxkJdZDxHEuMiuq9VvzSsjqz4NRbImDj0dHLMcfP1YWiO09gUzk2koOnNwnxUv4o4Vji0ixdsdcayQYWckb9p8JmUA9X8GrHBEa7zHl%2FEjY%2BMEEvTiRhRxme1z4%2FZnT9gTbJTpUzlvE4ukQVl9a15ECfSPcIikZp0Iih12KjljUU%2B%2Fh8z44wnd2qwQY6pgHg9GrBDeaGVzv1F32mVaESc%2Flpkp5pZrK%2FvweuDdwHDkGR5%2BiaURwzWGyGMFe2IMKshUUbx0h4veW%2FwTZQTk8py3V4dMtWDrEtDuImVKPGiYeK8ZCsA2ZRcbHZGz1z3tlClVmWEKsy3flNMdBt2l0c6EXEO2GRh7VQ46nzLMXhlpsKkdZX23m4vfI8BNfLpp93nJYIpZfFTg4r0j9j7k%2BEW0B%2BlcNV&X-Amz-Signature=cb389e77766c60cf4ad6754c2437cc4425f6d64271d4df5369f74f23d8e0d962&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4ZGD7V%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA65bF5DV3adU0gbHzcPh4WKVGYRgWyEmqsgDfxtColDAiBYaFpMAYj9XLsQmQ%2B0K0sz2voGfYD86FNiKSk1ENSVACqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT7EjvCwa0sjdXsxhKtwDo%2Bj7KTtXhWS8l0MIQeD%2BaUxGgZy56eJJGVbzLo0Ps1UEs3XmrLbRCv3%2BDUlZSiqzk6Z1IYYGycV1ErV%2BSiKLvkIYeOJwxD%2Fh%2Fu4Psc6Q2FwvtjWA0SzM1fhieXmGQJF3kdlV4iHOj1fHPyXYqbqYGbT8e5ciu0glzsE26rES%2F5pn2EeIwvFXK309zJUQtMGOXVxz9eTMRwLDY1YHmqThRIsdmXMzDpzYmjS8tgHfVdmgZXFBiLuwmmwPRk3scplVbsDKQwLcMD12f%2FRKxTaIICYoatConS2Y53BXfcFD8AG%2BkDMrHVMIzbp08cSMeweqv1aYZXMiY%2FqvXYHtbo%2FtbR8CEj7KozL%2BJfgdDB%2BXfcIYeHICsnbPBWLCpjPyaawqoIxfwRXzGei1Q9BlghdAQvD4S6S%2FE9bTBa%2FeEy3%2BgLIbWzw4wqr7p4N9V2PeuOhAtt03OIjQ1SWinlpW8FnUIcerNdMhvSnGxWnb2VLtwLbED8U3Z45N%2F9AFgh64y8PG4rZngKAR8R2KiSBCHjqntRPmM0CLoHhazvl01Hss0Iivne65B8WxVYd3uw4HcFGays7GlqeBMqb1YMtdYMpj6NrWsXhB9E5lgpKqVSNTLI20H2kH%2BAvcpFnd1bgw%2FNyqwQY6pgGsgutHM0WAfEKXiqSlQcBadiYgjAq1aparoXB4E67szPd7ht19JhtfffZn0r8LFhEuIfuhg4vIgnsRwRAElp4OkLoeAOBOpwXTweAC8QAhiAFwkMt4K6tYo6PA90xjeFgkuJ98rXRPm6ysAVGlzUSDVtG65hhYIgTlaxPBSTO6EeZEhT6wD0WNlbOJNjWuW7vvXqxTkKTvtMLN4S%2F2NOr%2BIBj3OesC&X-Amz-Signature=c95342f8fe7c006d179b1741d3ade6696ec157ee0a2ce9839dd426c58c0c2d36&X-Amz-SignedHeaders=host&x-id=GetObject)

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
