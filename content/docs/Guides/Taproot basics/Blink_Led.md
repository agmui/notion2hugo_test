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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AUOLYB7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg6VopmctXHrplUEhM1E9gqH0OBptRNH2H%2FIf4ljImpgIgWPFysV2WeP4bDsOm%2B7dH3qiPNZ7hQTU%2Fc1vPhgZWvjEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLM%2BkKg4Tk0qIFmCXyrcA9cqILs65yXDDcEYBj09sqDVBnl%2FsmTz1hZscMv4SWMhPu4m5HwsUmevI%2Fp77MxJlL44x4JZitfoK5iat9O9v7bX5uyY1KTMuHtbvNIZ7hl2iG3YxNh5h1wI2r6qFz4idLX8o0qf3h9n62i6B%2F%2BVzv9Z5mdp0b0Vx59ROD%2B%2B3aC0wSKAs9ksb8oNTFiOU5cziCGrXet%2Bh7t2bmyPR2DiSZRjZdXH69%2Fm9NAEH8sLle9Y%2F9DPEKPAyvTenGFKiYSo6CjhC8GeWY4wVbTDaIdscKP7Teo%2BKrwmCdNpNDefOSed5V%2F4MZxkpV6qRXxBTxynagrVJKePI91IP8muHbaoNn75ot0hMnszb80zl7bOEQcOJF48Jix9rNOk8ACSJHZlCf%2BtncilhAwC%2FVJN4z1Oxw0SP8DCiZyf4rAK9WFH6flQwlpfOiaPX%2FgTC8rJZ9CvunIJVHXpFUL09E4Zy8sGcg8WbdqQll0jtdkXH4tmHjSVFIpHnkkTz4ykE8vhpPf2e%2B%2FnVzLTDWRxt%2FDReXmeS%2BBqTe0N8yjHlqm2%2F0sC%2Bd9RpsDegptIyBEptT3nFbeEgaXqmQ9qD1Zw4cod7dqGHRVhQUcZMPZsTIIVlawNDVu6%2F3dUDCgNAcUQOiQ%2FMNvDnL8GOqUBtOpLcOmHypsCpQ2uDR3hyjdaAIGg3SiWBoZuWtjsvMJUZthJwwmp77lpIljDcTciB%2Fe8Ju4FUa36XwXh3vZewA9JSh1B9ra842Oa5br3HjtjTrSFHSAHj6Fnn66iBLOKQGNZbDAJxT9nSjSpk86brmS%2B%2BHZP8rC8AwMXG7FTZHzyTvRggapTUTzJUrDLG41bGfV93PGBuxAsQg6RBiU841uhPSBg&X-Amz-Signature=618057de9832384cae5a9999fe9427f06ee33280ac6c9fa2570a55ac093d6862&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OBNMYQ3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FD3hiiUfI2CqLXGZRMPiwXW14OzS2fsrymqC3iOqrPAIhAIAtClkB6tEt18q6jekropjlXKHHmUmwMUCMqT6Kh8tRKv8DCGcQABoMNjM3NDIzMTgzODA1IgyLVEjb76edCRtHCuAq3ANVw0DXjNEEKAyfk5D0Ed5bWe3N0unXV60mRxq6k37NdpI3UQhKE0duqWOT31eksqzENDwZhHdnrsXnO5hFItw7WEOLImmJvR9i8gUCZ4oJpqXUamqYrnxgyNMjXRU6D%2FL4cl%2FNvh8XTw79irmS1ybauJwMNxA5PWUXFNuAmweCbuyytFdZgLCFe9V2as8NqTLJuD%2FOqo4CeE0GD6CjDEHObUQIpYnrYPZ%2FNSCdnb5TEHI6MeQBVkOfO5%2Fa%2BJp5fMYYFH7%2FBX0oza6tTQ6oDGJwCtMwdtuowSy9V9IrKSOSW8ow77giKIXjcippbzjBrc6Mxdy3%2B%2Bmp2TmwZLI%2Fxv5xcK2ZnP9wdJpxDoPArbH108%2BO6vKCXL48l3oVZWMNXXxNuCBomPI7L6K949%2F8ScJ7G9LQpy06pCqK9ZMV%2F5cL0nKCc8LxbhF9lLWfE2%2Bmf%2FV6ZvPBXIb5AbELVuno0MHCpkIlcmuWjgfqOLr8oycoy2ONzfo0Nz91l4noT%2BxNWiW%2Fz4xCCl8rLbZIiiussJaAHxQSBXfaApu5c6NVhC7qRwy17vsGGsUzTodKrzdSZNFs3FpEVkXk4iHlwOlvvuzlCsKaM3Xl2mLv7H21FhagMzDLd54wiP1gdZwinjCAxJy%2FBjqkAeulBGcCBcZPHmt%2FMojqh8N%2Fu%2BbN1ju9YKQYw1xEYW52YI9i3qOAcQIh1dtch3M5Ubp8Lm1I%2FV5neg8ajsFBmtcg7VSvS3h78Y7PCArCcSakxJmWD9pIVP7J3%2FOm5MJuJzinBMXTigj6t3H86QFLP83OvO25Zwo7Hkpjz0M%2FZfdBmJBvZZ4j55EE4tq1oeh1LD2PTLIx03XODmUvu2oaVHUr8xC4&X-Amz-Signature=d9ddf422d21c1b05d9a90b51642de1f13f87aa3435fa10bd2c395cc451ed1c63&X-Amz-SignedHeaders=host&x-id=GetObject)

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
