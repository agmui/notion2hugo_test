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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDH5UVBG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCtyR9AdeSntPMCpmgTWdY4l%2BoKYoRa%2F98nAc0dSadvsAIgbazn9Xw4983obfwlfQVFzKbbnSXh%2F2ZNqzHVG7fDJtsq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDI%2FfCRTAa2LiguEFHSrcA95B0DGSDb5Zn0mcipklRjwr1%2FEXIw3THXg9dz%2BZq77sjid4qmQ0hSx6jcSL9EOHQe%2B1RFKsq0J6aHETsbtHjZtoTK3XSY205u96cMZvg7Kwy8nfSTG8YhSgix9J%2Fn66FmRsstrN00nJEs9pgCEsXz%2FHu3NN48eZ2dmeyEshmXU5kqQ5u660SNUXQfDGPnP8ZtUjHH55SV30SkNb6A8clNdtUuyyhVSx9VXNedDFTB0rnXzQZJsQXoghIByPkJf10yhB%2FQzg8kIH%2FgxLaQC3PPQSj8f4M5PESefkiK9cvGnmrVGk3nW3z%2FbD3XumfHMH9a2AVQqo8MYx84D5MLF6Glv8i%2FUsl7IfNx9UMcJHSI7FB6w1sFFcpp4dND32fXiGQwV6q4ANpZCXk00EcmN3hbElx6kf08zxZJ3MtknXQtu8CqR1C4wtUX2rOm5%2FIVlPrQX2dR6ftR0OT2IKv5akd5BUI9fTqRY8VHs%2BX3x5exRv0DPXBL3ut8xiwp3B5Urf6tGLdWejxTckBt%2BNdSIt5U5OG8nU1ov%2FNK4xA6jjxtTUG932t0tpvnUP0E%2F4frI3UlCU2OA9ey0mAAES0BYBN9YePGfLUdgx120iIRgPW4DPgqZcVqm7Wg6vjH18MIrzr8IGOqUBEcPYjRMB4AMhdiUx6ey589ppeNxNthtKpGNuOTbh7gn%2FPLwj38xd8XSNWLzwdr5EGGYb1qVos27jNOlc5nyy1OrL%2BFWskOLOqaFuSOS1ol8ocqP139cSlIRek%2FoGFfK9CZVeQqZTX3R4ceYEsL%2BnJNX5Y77%2BXGJyRoCTonrGxQmFy5VVjroR7okKlzZxvQyMaqAsiOI1muQB7YCI0tbTK0iiuOfQ&X-Amz-Signature=4b89515462e20215394836f4680594e8e605a3c9bd910399796b4d3e761f972a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646WFYEXN%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDzfg70%2FA1Er9UJcG9cF7O3VWCCuS63gAnSt1Alaavc9QIhAKP0oER7%2F9qBoLgeTzeyH7CGsv%2BnXraECmNTcUnvmHk8Kv8DCBMQABoMNjM3NDIzMTgzODA1Igwq3M0YaAnoIBJc9Ekq3AOmK%2FWovARny269FiIzXXafJkXKDZHd40%2BZjTT2p%2F%2FiqCdd%2FcZQrYQITtAiCdyH74aOQj%2FPWxluheTzgf6lOF8yTMxXgG%2FQmbhfv1hVNob5kvQ0cT0sPNBU8vH7dYP8Z5Cx8NJKjMgPH%2BseE8d7GO9LKwLl2rMTlRf6Yzna9MDjrfc6Nq%2BD70rVt3SRkuhqQJ8UlYICXv0XWPjyor1k9f4PXrG%2Fp7Ls0KEY43GzV7IyqFF6qqoFf7ubh92QOveY5KfvMtsxzALwAwsFz009QsxAI2YDp43%2BzKnNi5oNeIbQg3RpcsB9YMif%2FtLeY7S76IBAsADqVq6osx7YPFaUvZTP9EG6QZAVvckiRFIq0ZBUlCOC1OKt2TUNpXFXfoOqQ05KPv%2FrskPcEqDGD2iun98JLf6XvSwskloZ0%2FkSr5fG6bt%2FTqSmeehyDbEEyk34o%2BK6AThTYHvKcWlbYAhLvwP8hz8g%2FNHoYgz68ltF4WLNRle6Hkg6%2F%2B7Bg%2BkzuL%2FP2mIt6Tde9PZoX836QnQsTftv0BRzfXt6Je%2B377PiUo2OO06rAUt4g7nLj9SM9LdGUl9afIHQ%2BERti26mxNlCnxb%2F0QL7rpmrx0uC%2BdKDptUtXpNB1Jr2T1HUWXkaJzCZ96%2FCBjqkARxNIERt3d1eURXFrbkLDU8tPfm5vjzSnOKBMqv0UJaZJbzOq43WoTaQTTp4NpHZT6L1iKx5hYDlkws15lxQQ6Lmwzqb72lL5RRZhZOdbRFEApVj7UGkoFVS%2B5EbCaADJKO%2FcuIXctcVtafcO0Fl4SR8v%2BPUOx8Apj9nNM%2BEmPn9mMjyMF2icAoI59OklOMJn3mAGGjawg%2BAlBqpIljeHwD17qd%2B&X-Amz-Signature=a5ace18c77b94c8d6a7e22df3aa98b6fb0f734d1642634cae795705009f2a85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
