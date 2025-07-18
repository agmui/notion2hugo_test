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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWCMZIA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDg%2BChQQr4eIAEdED7ohX2AZozRwnwHl02wdeMBnZi7xAiAw7RXgSySfgjCdWHb5mcbeoiH6uiuInWDW9MXhtn7TlSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsnNjJzoWgNAvXU%2FaKtwD12gM2CGwR4jk1s2JZOmK9qByLq%2B%2F3IkTWQqosZANfVkwbfmmXPUk7ELbMMTDr7S6vgRx%2FeXmnoYV59iyIU3yCMzD4sBj%2B%2B%2Fb6t6H4mbrUYY6o7lyToHexLfx9sOA9vE0OQ7SOsnrLfTcNsZojIz9%2FidsT%2BlHp%2BA99lttJzqk37l2ipwnSwoIe7cZ9x11q2pb3%2FJ4J%2FOxirl8a3sZBCv1AkBPGgGb1yvw6PZsBmc3BEk4k3rdaagsqt4xEhWLmqJE6g2Bx7RI9NwWcr3fkn52kNRqS0RwSEB%2Fr8jQPrcqfkaMyglihtQED1KUKXslK7ims4KAL0ddYVrNfvgdwx0D6B2PaH13%2BM0AzHf133i%2FX%2BRR6UVH7DncIKfiJt5GngtlqPha12k%2B6X8vxtCIgiG49pZzsw2htlR5IgTWhHtDO2k3Jtt9R9RcDGzl4k9HTmoRWRsbFqDlQ6oA%2F1OzMm6%2F8auraHr4WwaKv7ztEoKYhWIl9b5rLQs2ArCKuo2972mT%2BgDwpjta%2FyVZrZo%2BIP4462FnpDGeQrKfg%2Fjh%2FIhb%2Br2NTFLOvlRNAsbbGva%2F6zxraJd7f7DtjSCQlRefc9coSpY%2BQqrzM71Z%2FHDOlwjBm1w21Bk9EX38CNXSGVgw14jnwwY6pgE7oTaVcQNU%2B6EqKdJiveSn8aGzqWblhQCl0IddbyWeJ8uRxMplysX9XCIdknlc7wkcHe17NIcp8S2p7ig4%2B2ScSzC9WlGnzWqdNNqbsEVu8zC%2FtA%2FV1g3xZWpijrdlY83YbxLYSJyMlO4qKnZZ%2FIHTPnvIjvHgN%2BbC%2BL4ge2sNyoxQt2kD9jkQ3FfKIlYt2J9hVhR%2FRQVlPx4Mqm00jQSNURgNnfDJ&X-Amz-Signature=111afec96b358b59e32f64aa97a59c74c7a2239216cecb87e594a6d875262bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WDSF2N%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAeSsqrErLNJCHy1I1Vt%2FJJOVyr%2F%2B%2Bb7Gzm62%2BfmUS3oAiEAj7M5ggM8UPEzccFmmd73wNIJTEE10BR9mSKxMKtSd94qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3DD%2FODfnWC3Clh6CrcA%2F70cXNEvG%2B8UBIZ4gtI%2Bj1Jsn0euf1b8rp68OaQyZUW6keQGfwCNobSQ4bQkiahH7p2dWSKcZ0j1crj1pA8s7I%2BHnPEfnBNK%2BkGw5E7%2FPOEAFGFommdP9HXJFnZMwdrRLZK3Rxk10A9d04EwFlvDAEQICqEUzFJNyB0zR37IfsgDw2trbU1BHdleTuroL7kobfTMUm8UvWlVspW8ZMpV2VEZ2NmarkM%2FoFcPL7hIKBy44oJbOtR8W7VFDumNklrmS3WW2nRsuPOivxS8HYn8ObRnDqrCrPOlqd7o%2B7yLhMYjgS6%2BBXLx%2FHSdTxLArUE%2F3JWQjQejKvG6wuMvwX1gyyhFG%2FEOBfMm5MxeP3r9dKldZr4ALQj%2B6Z5OmsnWtlfRrWl4HFEhhqo43bqovN0JxUQiN%2FpyRkavLW7qrXcU4l4melVwle3MFW%2F8g3JQ%2FkIHOYSFf6niNMpPnV39HOKShpICuenxm0eHjmLyzjBrleTF1sIahUG6Z2U4k1QfUH7Z%2FGrICRtV3wEroDh6oTXBSIwsc41hgkpaYQkNzV5%2FpH0oRGazmpl9RhmIUhEuchv93JDn5saA3wC3xDXXvmrYOai3LH9vLwIm%2Bl6PSGSjBquaSzOfiewsKURDV1PMPqI58MGOqUBzDp6Oeai77M2weRvc3Vh8hlOf7LGq5OwChJeX3sVmsjhAufv8oPRS2izrwebFmaeM%2BftCso5q96nDuP1cwrmdYpdidWoSrQgsI9yrfh25hmCAhCYOekEsQuDQJIPi0W9xnAk1PGwl4xogM5CeStWFDb9zrQmuau97Pjz8%2FaMHB0M41Mbm4WGgieYzjJvqmiBngcQHbr88eaH9iJdiK%2F9IIw6tgOf&X-Amz-Signature=b48524fe2038b9f175c3c8f7e1b68176a01e521fd1ca335b67a350fa43382b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
