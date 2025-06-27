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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NEQITLB%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIExPaeN0uGsrgcGGhzhmXNrQVmsRAA8sww3SmUZcO7mVAiBYW8vP6XqJyd6rZxwfPrcVIU3fg%2BZcXvEZyZg4frEjmCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMOD%2BQAQmRBsJ7Y0J%2FKtwDfDXyogk5YIdAIE6U8wC3L6r8VlvXMm2SSqAOnD0f7vMyUwOIB36FG3FJymlXB3rW%2BE1KrsDZhSBVZXzGnssO%2FRy69Id%2FQ1NHWhOjIdGqXBqclhqBzWotJAR2Cy%2Blgjf8g8ZGhaGc%2BciUzXwiPN9%2FqlAC9hKD1%2Bgg6BnzSNtm85kPuzHDzUXXweX02nT0lh9oedruJSM3AdOiyYOgsSVGtZPt6qvBiznR9mgUEwc%2FQ6Ou2bZgGJZatxzYj3DlJhZVX8wXFBZjFq2QgAwAfU6AZXmQPgkvGapHrX059HlgNxzh7hQjZlCzklKNj01YlMC2XSzR8QGS11AC%2FsIqtPvvVT%2FdO%2BPkZ7ewq%2FEClm0Jn%2FQGRNR4NpFrddRDG4UfuBkwmCf83K68KEDOczvojqZJuBZqo4BOhkRhOlnYkuEOqwvgPawYYTGdESjxvWUAHcvPP3v4nchs3v0Bio5FwpdX35JpCSK2aP5AVFbpw2Z9kqPPhUgBWLjOvSKY5ruFCNMyNnT60cJzaGtH7etdi9ZracQ3jOlZ2iyahuEMpxZJ76YzpR%2B%2FmgV0q6BLxoopN3gxS4NKIBGJCwgq%2B0h9zF%2F8VgGTq8QbPVk9h4I%2FpWX3I%2FivSNBXqhnacLLNGSEwrtT5wgY6pgErd%2BMfENl%2F%2FkgQuM1k18iNTRjUYt%2B0VXst9iUhImGjHk2q71ywsLhrFAg8mFcBJHSzlA31LNe65Wswvhl3xeCwGF%2FrI1E4AX%2BNyfb3DkUULKrPfGuPNAc34j24S3kdK%2Fi9DmdE7pP8uDnTU5WcjCbN1Q0wNpxbbKT5E5uIGJgvflkjwUQgeH0abcCfq7OVeVBOkZnJp96tDXbulWLRx2cWwARam4UZ&X-Amz-Signature=73bf8042dbd08ca257dd88d4eb7e93154e413cb1f68ef91a043f4a623156e118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQQJWHM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDqRExCx1dX%2BtSst3PcePcMuWwV8biNEKQhYVXVJg0IYAIgSZIwl1rK9zPAoiTHtCZpoVWeg6FwgNWLiKFDq5Nz5qMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKbvsRASieL2EsGW0ircAxAGLu7EjBE9v5Oal297RVC7E0m1AUIRl6g%2FwE9u7pnDG%2BNaxpbPxaiVh%2BNoVAu7yaXtBZqDQ4UBBLlGMd%2Fzn8B5JdFxJZWl9hKJebeK%2FEgIi1MBFRH2rpo3UBBfjerc2EuRC5mFx9k2k1NpZ7Ms%2Fsdfhc7ZYAiACjJ5WlGWGBZkIAkmHMXFPzUrYMgq8DwPEi028L46qaFGzo6nlM552xFo0yvX5ycSHbl8OerrUe13QgZNp9MrC9o7Dk19gh9GZhZE0ghAr0XWqDETXr9HYuOcVA3wHwgX8r%2Bqq8uoj6N2n032goNuvcnnV8VlaOkCd3ZZ96tC2Rz4Bq73c5NGqRVu0nGekLD1ilP38RlW8hYj58vU%2FR3Oj0U1J41yxgEhL32%2FJmvTCKqHJcmhwc6ouibmozIaJsE9dLyB8US%2F%2BKl1S5EYcwCeusYifDGte%2B5eUMI2tULfU1rx7NgCpIs2oK%2FY7etd1QcfwinFoBjnojJesHPKb95LCDd6RGhKmnIlZIwROA0qurYTY4aX4em1HJf18vVUdYsSuy0KfeW%2FrgK9W8ZoPYDlF5Ftj0%2FZcflINqV3Pax%2BxDejKzrBM0fOk3JOYjveCpnkeu4xuT4ul0GNSq%2F6mluhPJOajJFnMJvU%2BcIGOqUBKmp8MJR2RHRo%2Fh4Xlfd5sA3VsXUA6bnDVEYLsINeh9rTbcmtCZs7STsDrK6dsFr6FgC1hFOlK4QKVqKwMYt4DN62nnorcHGHZ5lDlm%2FNhi%2FlklTdzb8kf8YKJrMFljWgC9weOyNSdjGVMDzDmECV5guHty9jpQd541GnDDxBT9xZ5dPJY9KWjspbmjMS%2Fkfc6gbDDvMp%2FCZ3LDtMnxvLIR0TI7Nh&X-Amz-Signature=100aa730c6569df733dbc281d1d9cdedfef97f0fcca7e721529e1613976f5c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
