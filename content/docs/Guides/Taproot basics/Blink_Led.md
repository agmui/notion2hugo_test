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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUMHOWDB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCSeQiCkDFJschR6AngiDR6z4cu7zFsb%2FNAjR08U%2F1VegIgE7Fwp985nQLx1YLiTIzisLVzoDh6VEWoFcVC3ll3BCsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOz1Ps8f4fIK5BIoircA8jnhzEAjcizHP6pRE0CAyh9OmLVbExh2Cpqo9t7qwT0lpQMR80%2FmzCvV7BZkMVPUpybpUqZFEN8jVICpmf8342I5T0i%2BxEhegK14M6xgWxShlVm9jL42G1H1ItBwIT0RxscaC0RRJHROtcXZ5aIuXhy8wbZDWPWl3iUHqlYp575b9SZVSIIQWDJv0AClu1uN0zaX9F7YW4VuEjt%2FKLHl8M6ItDAKvxL5VW%2BHGM1FaU8bpi2s4FIn%2F%2FF9yecLINaZBt%2FhIPoXR%2BzJw0hDDvLP1nrVxQIu%2FY3cyKKYL5Q%2F1hM887d%2BwdPCjBHjZLVsQoaSMGWgB2%2BSTFBmQD%2B%2FkzpiQPUUzCoPwF9RTelgfciKd9dD57P8LcWLgJRMBensZybRvkgqaW1P6VXJQ6Y%2BOyV%2BZ%2BpAJkkCyfa%2BBX4Ld4%2B6bekHlDI2fzqY6VVDReik4DSSF70Mq0ciwCUAueU9rGmxAl2hSdgNVoQ8L0LLuIoCFsTfvjeFysMev8wFZPXAF0l4f3iXgSDUmJrlQmgQw6ZZ4gRaDSZwUqGr7cyL%2FR7hIbvse4KnsqS0Mzm1%2F3vJeft5ZhbDj51vA%2FVwoscwkCf861BFxFPl7R%2BnTK5%2BUvjyMX1ST6GS9jQw8NzUoSeMLiU1MQGOqUBwUv4GYUSq2FhMkJcl7dcfM%2Foyry4%2FdGXpxU1nuY9pGrSOfiRqNaJpTQfV9J7OT3N3VYkXDlsC7AxeAKLpgwU7bzjCnOft8ojSg9nC8a1jn2F0ZkbXxM%2BG4g7JgcMVcF46up80DAwiZj65tSQcQKUAltgUNl9bOwphPhPq%2BfdfId39AvjfNsay18EpcQFP%2BT0OjQCr2%2BO39B84Rb63S7VWGeo9qIE&X-Amz-Signature=b882e4535d8bae682cacf6d2e931564c387c765f1e7a6f5eebfc90561d2a8b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCHY5VO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDA8IZ9IslfEdAm%2Fxnv5I9QmXLOLflz0%2BpC6gJsesNlUgIgKBKEylOwT43V%2BD1rGnJu6axYQ%2FKI8%2Blr6yzEI6D4v00qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeCNM4DpqZ%2FF7jL2yrcA8izzqR1CwOJpChtEfREQ%2BSBB%2BT%2B381BNOgr0vNQSHMtmg3GZVz3j%2Fhl43yL3Q5pIiAFi9b%2FWYZASdsvMVr1aZUtKtB7M07CchKsts%2FoRkJFPFNLJabYHQszmUKKYV4%2Bxun0lD1iMdet9UlA9U6xawaPhps77XP7nyNHwPj15y6Z9Fy0BGeEHb56lL3MLXFi37Gzst3rvcKNjbdMvp3Amt6Tgl3l%2BhXfyQlJjZ7oJ13g3GVwxE16y3GK1KDTfYLn20VphRZkVv8a%2Bhp6RI925NGiNLIejlHqRcchkprsh9eeKrKGiI8sSCjJrAIjVspJQN%2BgUGNhk0jN2zZ0l0hDSXI34hEj3A5qYjR5bVyUUA6w1Knc9MgC80FfP99ZWa4sna6M6NLb7xqQTkKUFX%2BDsvspygInUEYUeJHfEL%2Bqb80UiAbNuUEgWoSZrXdUzKVtLCyWhMs0FXM%2FDNF%2BvzEepZnoQpvmZGLrFuDw%2FtgItV3diBmHsRd6ZjAjeEjHTC4njJGnYsArwAhDF1A%2F7wmLqE9KoqKL%2FppKTrpsYYrNDvxFonLOJsZgk2yWpcWUVAQ9rd1Rnl7YRalQWNBILD40e%2BvToj0NIYTPyGm1XT3tcYPvDnfZHpY17OLDWRlYMMKU1MQGOqUBsFjI0ITwOv8RBTRTTS8e9nvSHzZikKsut5%2BrgqY%2Fg8pBCK2kbqrgUakL1kccZwZLgu%2B1QAQvJayzBpaiqAZ6bgOkilRiN1w6XdxGV4TdJwRQyetS0WRQvG93AQFpeDe%2B0i%2BjnVDzVzO2scVbC6YzAHZcSxLel54iUrXmTuWYXlM0zsZX7QkA1TtRBHrKb6%2BoMYJLd6eDgQaczyhKaChPJiKSutNf&X-Amz-Signature=50e13a175c90fbea21cef69955af67127bd52b13db3caa56de500acd075942f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
