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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL6CAZPN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmAnE3ZmoKkIDuMvS70J%2B9aSLql8aSHZW3UhLTULj66wIgWt50bmK3NHqkl7WGOocDWjJWYJpPXBNBn2A3ctJbGNoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdDpOzaT4qvbAq38SrcA72bWnvCvQNNp7JtZjq4g8T1%2FX1xmAi7vQKTiOPIRsBr3PPiw%2Bq4p4rGvIpkP3RhZ5441v1p3japciVpDn7dyoo%2B53MqwsD3Y5HxwljxzWhaWwCkJ5TEHzKudUVEB1l%2FIyb4h9P6kgAJWr1bGUauT9WU7SWnfa4g8KLYzkmySePzLqQSzUAXycRsm5xFUvApkb8hFppyGafmByUq5u5NBwcGYMTKl6H2GcsiW%2BL0VTj4smO%2F%2Fcplvm3SYEnnQC%2BUpBD9246Ox%2FLm%2FDjdSx4Jq4biVptyShVXffHDfirosi5EAEO2H6eyUzN7MyxtLD6o8jMaQwqTypS5wDXEgccom4BZ5ZqDnLUP5DO5Kwp3fnO7RcCP3U510MpDJz7wKjMlAbFHyl3uPHDj%2FwG7pdIbgAbbZLn2CBFYcY4qz68iRs55DlQkKbjNM0LhOyv7qwwl2loLfHUZyHscko4apyM2%2Bmu%2FE09OrC3s61Ox3kQEeF2YXQbKt9clqfM2bK%2BMwPbXtnYU41%2F9RbgEwdZKe1KTxGFEmVlIrYYCy7vJPW%2BmaZvMoZjuq%2BrNyjvmQquRIVWV0nExKyPnC0o5VvBRQRB1NzRn2rscFyhW3rCihy19rmTp9VaJXjcExxFfwL%2BaMM7I4b0GOqUBfRGktJjs0pHo5ifuVUrg36oiIqrJgPboohnu9PpV8H3w1EhuHtXaj%2FZMrSxL3YoEfmrwCZ%2FxKEDf%2FSx04MCwgRK3xDcGDggSNDhPapbatU0lOn8fLuE%2F3H0uXKVG0gi2qo1fjRIzn6S3vHKxwwldZWHn17wGag9xJ1Y9abteZfeDvnMbkQDQqKRzz8QuL6h07zSCwCYAVCW%2BeuWVXdTPpxOpbaas&X-Amz-Signature=b514d1ad295d67a67e3b28eacee23c830ad97b6c4c4f1b70aa4a2a5b2cd16e67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDEA5TU4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6%2FPqmg0Nm%2Bvqg4SC%2Fb397K8Z9vOCP6ZcuV0baUO68%2BAiEAnzn7MHMOj3j77WhnUq8%2B0aHSo9vBSPqWQ0XWqjBYg60qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLACH4VmBKsmESI5fCrcA7DCegwlce3ZdRzvlC203WNlGrz%2BTPiVWxYINq5Slvai08zO1xAm4eGD9ffStrQYIeqTiuw2Q7Bowsf7LyOTsu7KQyjOScuaSyDfo5HO4xmU9mj9tCFhFbi87vnMl03n%2B2zcliDuIob3Vhl3zPhy8SOjjAaOypOkXteM2tv9Kt5YkP7D%2Ft8rqu4Ap%2FXOGcSUJ%2FRdCsJAWs6s6oVHaxuRrTlm9TNo61owiHK24wdUAZ%2F4f5rWoL7%2FDqNYZwhHgDKNWmLYrV9vUYK%2FHXXEd07dm6kJCP%2Be77arbWodaiZQysrfytTFL8A2KoUucTmh%2BHMV6Zv5kvUg1M%2FRLvIm4vtFwMzuniOCsM3c4OiZ5X091eZ8f7YQ48FOeAWoqiRYzOnc6Zn54fsxjL%2BHNE8PWpJOPLO1gBzOzo3grPngOOkn3cD%2BIMlAjCw%2B5ChK1G%2Bs6acb9%2Bx2oQD3QyhraC4MQaYst7%2FNjB5erbPIF8BQc5WWt4uIVBkJIaxvFb%2Fdx8KgaJaziTRJ2zYvk56pucc7lEg1x6Aok7ld4KmeNPq3GMMacMEF4n%2Fn1%2B18Sh%2FZ97fBfawR08wBWgmJQ0T90QdXF3iSWC3kMxS0LuzDQ5kRubJacs3Zhvvcb1X6pg3CY%2B%2B1MIrI4b0GOqUBzC0uNqYFz2WFLosqYXz4H9bxj4ASoLcWneeJaCYBojr6Dr7dFgturB6yJFGz7w2tgxGd6KTs2i1KsVg8HHvFJvOWaOKQ8YK1k7aSl7WaptY81kYt13d3RH0LBYd%2Bq39uWzA8aEOxqoqzp1ARy%2F8FClqsSZcr9nTcCWNYwm0SFaLk5PHbmG%2BnNiNH2wut12eCfZ%2F0VP7s9lGYkdVGw5Ecx3C%2FUnvC&X-Amz-Signature=5d94e4384388aac919ce1e7dc60374aa703d17cf29d98cdd7470382b78d43a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
