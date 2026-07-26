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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3H2YFX%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCfW83zbXf7YE0SKHCZpzCQIemVLJTLzF3ydyvcz9ANfgIhANEkIFm%2Bca5ZldfeuOXHzCYdam6nm6bYm83DiFV4EpX9Kv8DCCwQABoMNjM3NDIzMTgzODA1IgwGo3ppHF9AcGUYPnYq3AMLvHU1B%2Fs7Qz6aL6uInEmpOiU6mgTtcR%2BW5hLYZqL%2Fm8LAHZdufMiodeQ%2FaiKj4CBxj1tbZ1D79lvuAL9Dj%2FLfJZQKMWX1dlEyKdtCKRhenQlIRdliy7%2BDXSl3YpWCBSz0HQiPaHorwE4lgh0BWZ%2FAlMRjGU%2FkVn5VespIdKeJSGhrAHOWxpMRHt4wiNuPQ8TeSBj4NEPBfzA%2FUkR8zP9MtWmDKi0G7LYAM2jrZmcc%2BdHOCd6TdYK5qrUJZD803L7p3zQ%2F11ZB3%2FkJpfiaYt8qc8SL3aBkAyFJk1ps9V9W8LVJ0gHuyiyx%2Fk5LJOCkhRicviIELQqH79Dvq%2B0zRASPDxVmbXdBL2YDDVdb%2F6jUSvzzO5AC1v52E6hvH8rXLswR%2FEr%2FCPaiPkz3Ih1Irmws0BC%2FqJrmGUbyFtPk9hPExOMlfqlbzuN9e2KXEnvJXSkoe0Ixphgxh%2F5MPK7lKaMhIFKX4au6KDZQjuoyzNeqc5vBVdZwgn1j66koiehj%2FGKP3JQu2TavhFL%2FPX1rKF%2BKeYfb0wva58XHBdX3jXCFgQJpponKhLFuq8If5%2BgLF%2FLIFIw7XNVeAYyngqhplmRjD8gURTP1SW7%2FFqYA6wpXPowMV88lEAp0GZnLSTD%2F5pXTBjqkAcrDUzILcGNVEnIyldpSw1HmpiCrUzmWgKiIkB8BQ5bAbQNEzNup%2BR0MZ4vPyfPE6coTiegr9XKRcXuQa3zgNrchQGP1LpoIaQdgHhRV8YyAJJS%2FXdj82zPO5eSqaXnXQZLQ25eXQ4S5PbMk1FyTU5eMOFTzQf%2BND%2Bs9J4O%2FxzKGJRiUBww5vhi1SN3A8AsreHtmhVeCENrKtap3qcGZkQaazLB4&X-Amz-Signature=a14f3bc69534c93d1eea1555e7d8395918a12419b0de48a19c9275707d7adc81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WXDYNZO%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDC2ThesoBxMPVgEt0rWpXTCMQPpa%2BV6MJqIGlfgrNQdAIgOai8LSlRUyHuXdwndmnbuwoYZp%2FDtNfc3CuULsDWp%2Fcq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOIoKaRqiPZmHPohmSrcA%2Ff3YF9QQ7StpIpLlFgy0E9YbsyFAVdZLyZDZhYm19FbKIU7SmuGZVfPKy%2BMjpLnCbNHtTh28RYOx1nupQN0Lm7OUTsCU6wk0b2wQ9eZkOn5uUtnS1RK3vxHSM0wqyrQHJTI%2BBhsnvX454ahoDNK%2FTahY3iSG%2BLdwj0thL7FoP%2Fi4lSpkrYJevaHm%2Fg2IvGg1SV7QJ5VVkL86fy4n2pojTm8hmidSzwi10T0JmrRlQkCnk8IoSgGbKi09Cm71rfi8mvEnaeWoKT4Z3TQoAD%2Bbjy2Sy0Gq%2Fzgyf%2FGucE29FfP1lZVUz3hb26d%2FmNsPmVv4JqPLdWDskm%2FrKY2XyOzwq4EomWKK3PPXTLa%2Fl8nV5OvsMSmLwjMh268ISdZQl%2FoJA7yc3jFEoNKtxDo6XbDstpFGPDWYkzPjICBwFRn%2Bk%2FpRy1fnw6jcFQAbqs1NYzdD7OnkLSWRxhyvSbIMqxCP%2Fjgx1v6AjdBBBCo2nSnyzAazJQkx6ZWTfymeXPRaUeOtYZg8%2F%2BWjQsiGfbSnWRNv%2BPu7miRxzXIodCiNjkGTYteaCqmwwBTQDIVzKrN%2BFtocnxScIrRfeLCHssaXuV4pyZxaJ5gJmLBqLz7am3%2BAmfEfTKezlBOy6HXfdeeMLjnldMGOqUBSWNlzBulmEURMCHnryV251ieVLspZBbr2Gw99unBfQuocnjXayQ2lOLa9lzhhR4dFMXXf0ZnjUtLO2CUGskPvFOcVLSqogcLjFVyBxdDk%2BPXl8WjjRmC56WqUValmFBTNboKvkTywoExMA6SQnuI4nByRUYZshinwvSSW91d01bKFYG8h1%2FhN%2B3z7zqeET0udQst7pzO%2BRA5WZWc0LDhQyDbVNqk&X-Amz-Signature=e8f88502264f43f0127ef074e38f9c83e1fd10bf2eb67f455f85bd8cc3a78535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
