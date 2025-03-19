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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFICSRQX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEk1T4KF1sDKAoLR8ZUbWg8Mg1%2FlXth3fFDNq6M3UoZzAiEAqK6n%2BRHV7I%2FDdes%2FHFA%2FSuRmh%2BpOeRLUVIQrUtQpPtUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBQu%2BfvQMnXWiDzVuircA82FAHxKIGHlhWPXsx22iXIMxUG7ofciS596T%2B6DoO%2BnUCJIg7TUdnu72cTIFXBZRZkfYAQNC3oG%2BlInnaw83uKikcWMnmQdUItfpr%2FfNQnYtivFqsje1%2FpbEd4ItjAMf%2BENqEd90uyL3jls5av2danpo%2FKYX3tLi7pxPp%2FAgt3vjCk%2FF40lORe7h31woTX%2FEwJw6lHXIoyAEjlZT1KlFwT9hwN9fg%2BlO2uFaufgU69yF3kQwGVw%2FCn%2B0b3B3ewU9Y3WfgwkjmEsxSFygbUkXkTlarVQBDVPLHwXImE%2BJCruuIwiGMTg1vwokC7Fe8v0Xwj9YDQDRWE%2FIY2OpT9XoUZV00SZU6ctYyk5UgXfh8wrUsL9FMYQnjVvL%2FwdY024OVr6%2BSDkN7xVGQZQ8VcxknsJdcbGSt%2BucALJSju5fAov1XnXBE4709Xf1nqC64PfDk41yU4Riri6quOXia6QqhNCbbo7ooJaSspsGsVhJWBRp6mCGhoLARJGC4wGymc3PcPuHvKcu%2Fe%2BV3YRk%2FuAFNpuVHZ14WRWUht742n2BofYI9x5OsctGEVsVDK4uRxpdEFXsvw5a2kdVg9FnxC%2BFY0yCeFfYUV%2BwleiGHqxWLmdoxEEr63DidJQsnNXMI69674GOqUBdpxmSRF7AaypDTodnrNI5sczTPA3KI%2B%2BN5jPjst2CAPwOdE4RY3phPq971eriyBBPmq3MjOC6iTbyq6rvyOxqzRERhFqlyf%2BKepHYojEV9%2BD4qy7%2FYuMufFsos%2FYFAuWNUlTCEv2YXNECviucS799YNDpRQltP0crIPClRX1IpUUqHV1TQ%2BGHCow4PT4mz3lWg8saC1cpDD5BizKtiw5zGzAvtcI&X-Amz-Signature=c211d542bb54b807e64488bd72625536d6ccc57e59a88e60e74fd865886df7c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3AUZ2EE%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBGD9TsrUyYvRuROrSYP0f0xnlG0isdoM4dEgFB1Ro6LAiEAyBZhV57JqBgDLjLpXN6poNzA4cG2Zr8aM2oOy7Atim4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFWqB8k8tgdiI75H9ircA742JpZLufbKbcSQq5tvFRmW7zMa41cUrYhnZOZpKxtXj7Vi1TvQ4%2B6jysy7elBZ7sOXiI8crZX6TEwrYGtwfwi5X24V2X7f%2BRAH3iKy4Chl7NDQ7EallEr2xGKf4e%2BWB0fdgNn%2Feqw6WcI1A%2FSuYJNOO6LZfChPj%2BxMZEth9SUSpqKurAo48wwH0vuz7XZ3M%2F5M9pb8eJQT%2FcBXhqByceOxxaH2ZfX7ScvDFbJbOzWgpNGUgVAyU%2BpE8qJ%2Bb%2B%2BBLyvP0%2FbsUaqRc1H%2B7llNEoBGGxyEw%2F6kPcQx%2BRFD5LKxEOdeT3%2FvRpzYf%2Bgy1hRaraLrndXQFKeOMZ1z42AaY8OQhV3ppQzchdAHPHyZHd2zR54TzsT7mBd%2BdVU%2Fl%2BEE%2FZHCON6qOWakRqoJHTjMwEWQipq%2B9fC7Mebge%2BQu0dOY2wIRXL0HC8ezNL4OeaAcO02qvers4UZZcFTM0iSVDxg2dXsSLTcwIMnjuKBNjyQcKhBwGI1C2vQQmyNsjBBX54Skr8HstXjPltH0KVIpJvQNyxHkI1zWCR3w3R10zfEy2eQk%2FaFKbsfFVIe6Vq1jdkvlNz8maXCVQqJwmOi80vdIjhJdz0xkSjcr%2F0vM%2BL1sPmuydBbWtZAOMid7MJy8674GOqUBeUZa5LxrIR5uKlvOHrxrjsjpcp2OVLd4lAa8MPwlPFIyrdHwCC8AMiqv6%2FeBb5GtZZ2TnCP%2B6rJXD7u%2B6Vm%2FFNqvNHt6XtqA%2BByy15Nzz4Eaexuxrg2q4iQv2wUhK3Zy2YWH6137jpOZ3zQ%2FKG%2BaQNKhW6RwJ5fV%2B7S8CmoU5qJXg3qPDKdPTrOKDG77f1ucSn14oeybp45tMsheT4qA3xVVL3rT&X-Amz-Signature=4549f9b8033976b191f9646c7bb54f934dcd2dff352abdc4fd81dd9e8ec774e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
