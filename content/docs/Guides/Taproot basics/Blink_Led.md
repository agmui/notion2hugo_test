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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WA633XW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAh6KU42%2BLz1pD7LB7vuBziEIpoUGi8nGPIziNZa3LPWAiEAifU3QGw14YK0Q1HEUjS1%2BlHdkcVZDpEuxb2kJ1jtV0oq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDAkHDKZkYiZEHzQjWircA8wfWXCvl3xR4XD3V7V0oPj4mBnFqUFrmm%2F5xa9jxRfzyZjSVzwj5Q5ls27FpmfpEPCE7%2BG2pNmSMRWtczewIuoAapTL28DHVyBOR2%2Fp4XmmJl0Sts7PN7OhYIo5nyOJZuYTHdo9KT61RD8Vyllw0valSZRY5lxsIqIEc7Gx8wIJ5zDg9BjetHYcSY4MLWMF70Hzqev%2FnYEenvkcuBAUlZiNu3bL4Oj%2Btn%2FPr5pS6nRn7e7DFZ4tuFDlCtV2GwpsZtH8WfQJLeWudifQpZE%2Bx8iaK311RMI0O5aKHfTz2Qgo5hcWMAQs19l%2Fq5ALy28vjhso5Ln6zxOjQyARN7yLWb0mhwFeYVAXVq%2Fg%2BKF6YnHBajVO5YbFnXg%2BxEoVJxEjhdFwpkBEY%2Ft6zRzUQk2Ci1HhAm5Zo53RwmbGssVcIx1jbq9Wd%2BSLpU2Zzm7bqmet16wqZYNSnC960zozurRqLSV3pjJosdrZG5yG1PPNgTd5%2BqcFBPpluNdSlxpPXZDD5ILoBu3KQqGkP6lbWzy%2F4%2Bwq9CEgdVTEM9HQPHYrbAbWkFopdRu9a6XHeXSK9sr8PDILhNHJpjv9fj6TZ3s9u1P0G1jmvvQIRvg06qfQbkdRKpgIAdCJOvbT67PGMMeTxsEGOqUB2Fy2gix0yNW%2BuSuwg5BG8DdT2yUPn32kQEriDfvrZfgGYalXVmxjS0pBoOGlKA5t0jBZBPFNQn2nPczj04AfVmeE3uWGEZ7UlfQiIRadbc8biFyaJZNiFYpsl%2FftY3CqNbPkZTkk4yenrgf5aV4RQbu0FpJdHJTPPU%2BidwYP0T7jcryZ18qP4CWdSPUd%2FpS%2Fj1OToFwC1l386Ethrx2POhdZJ8ic&X-Amz-Signature=fd0abaf9e0ef7d1daf0518317f9c3b4a17e13040860a12f666d14b46836b1c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3IMK5A%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDZDUKVNFvCpCAjhPTz465nGjviBIrRFGWRNQs7U3uFpAIhAM2Lj7mKULk3gWTBjeadCnH1g%2BKmxIra6s2MOnoVesRzKv8DCBUQABoMNjM3NDIzMTgzODA1IgwlS2VRpSwDL3IwsQIq3AOV%2Ffo3ZIk2DzlQRDWzkr7M3Gg9CA%2F5n7DNZVLfEaW40srfC96ZKLOyvY68YwSoVLprSvOMUhgDOaMVmEMrVr2fjoz%2Bo%2BAZG5%2FC4YF1MMLFEfg2TXpoQSWYrIDx3AoH6kAWsX9YR08SGrVs6L2FDiMhNRCW4vHnY1mfDkfRnsgWT3mrVzPZlTmgv2DT%2FbhOPMFU5k8K16fn2W9uyFp%2FbqbG5m%2Fh0hp66rijFyhFS4FUWVyU9A%2BLW8cjwbD04RJU%2ByM3wFrhcys8aSEqzh5Lr2ClcGde183GDIBdtbjBDGhxtxiJbySeoFfa2exZjicdZ3UuMkG9w0%2FkBU3MNNV4qy7mLLlzyVt5QqnsW0DtWeSxOGRt6RmeBrSI2wqb%2FrXvU2Pb3fiwQtczuBr79BU7KQhHYHS6FNadcq09djyAlVVvP97zIFUprNH55DuMmq6ASKV7OAl1m7uKbeCtYzJMmIXeGNzm40TOVGlfvvgohgZ3u4REQBCeFQpSRrl8lK4b37dp05RhyUZfFmqwJ1HmFCe3wRpSN2NA1Uk%2B6tiJXW6f19dqDe%2FFP5aH8ARHutb4t3%2BzWgErQjR%2B1NQIb0eKcYwouYGyN8OuejuUk69WdDQeP84YBMI%2BRcT1HMFW3DD25sbBBjqkATkdSTSmA4hL9NlCM%2FxbRmR6hNqvGUHe6w2VreZ3bdHk3dfh5CktgJt%2BNJkGtYIxGcEcbx2TE1vGHCZD9KpzcrU3kQWBexQZVm7PuRYTRqhGiDVLn03YPynysJd%2Bg2r8gzLVqb0rCo2DHq5T%2FJ15qCkmiYtPSBNBmQDtHSAsDYVq823Iko6pWD7kaqc8oxH6NfmClAxGVZ9TT%2BIHhdMSRhCTk0G3&X-Amz-Signature=416cb960386bcb884faf589ecb9ecdc0af6e6c105e00373d83f43a25964ff885&X-Amz-SignedHeaders=host&x-id=GetObject)

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
