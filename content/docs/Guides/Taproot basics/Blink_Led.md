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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645UNU6S6%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCGJ3hjKPen88Df8%2Bzmq5XEPiU2DsIkwqVvscH6osWEHAIhAOSM6iqzYMix9cOTJubZ4%2F58u02nCovy1FidRAmPC2IjKv8DCCQQABoMNjM3NDIzMTgzODA1IgylZ3GiREl4eYmRJQEq3AMWG6YafFHeo5sO3z6DUmpOgvjIq2dI%2BHHMLo9entbIwfAMQccQlrDTcq1Ovw9wzZWb%2BVpU4L3lif7Y0SFGf9skBmxmXgK3ANQIqSJYCRntJzbUnI9%2FIIgg7xXjwf1WoagD%2FY7oiEC9MP%2Bu9yJEk0koSeRlmU9aoxFxqcPGVBIiTL%2BnoATuvmSA%2FNDNRVmpd%2BZaf6n6XsgInldbNzvZUTLAA%2BBiqHl7hWU91qZhWzMVzrCM0UuUygX%2FWn5aWJ97WAQPXxU1z%2FqF1eFaIFCiJ1DxnyWU2i61ijFkgvgzF7XB9LO1Htj6k1KefRGj%2FOCARmQPQ5T1FxpiPSyxqRJh8GkyiAA8eiXa7giXKQqr%2BzWNnldlYA3npBhz%2FOfhJYdtez9KPYdnlxY%2FZKal%2Bx5%2FSFQE8jycQj69U6ft%2FnqtJwUpaqYrefbE4GeuzTtMI7UEy9zMCpdNCBUM7fIBeSUGIPE4Z%2FHw3cuIMywS%2Bwo06XAkXZGWe4oaPdjEpIzYV16kHzY19KDPwyA8Xel4fUybxASqmVCe7LZNVgFeIDXAwoEBVnm1o1HVbRMOQJD8T4680pIfJd1zbFxtp1vsidKOnGDrBpxK21fgv8MTfm7T7Yxx3O9LCdsPbOKQFI4cdTCdmMrBBjqkAV5w4Ol7rm3HuGg03hGiaNndk1%2F38E8ohAEIxhp63TXOgkIA88jBlSHWiF%2BynvaNwGJ%2Bd38htRuwDWLJxGpwAaCTVRRMemYHdPs4JHeqEWVOSHTMLCFITNBlvrMh8OFpo1Xr80ygMIuL4D6uwzlJ7EzK%2B%2BWedHJIfkljRjeUML%2Fmd20vRyHgjq6ZKBFSu%2B3PNpecnMP1ObTrfbHoe7iGka2KeNLT&X-Amz-Signature=3489eb5b8da0aa89554d6ebf322f04ae92f1ad58c94a25ebe2c4af50804960e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCO362B%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCIk%2FwJxInqTt22LiByzRBNpAM3v3XJE%2B4UAqwK264OIgIgZNGZa%2BsxBqW%2BEotuyzQv35uaXFpSdczCwa6RcZ0vIfkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJL%2B1YIHn8qIqmC7lyrcAx165oROXC5U0%2BWkdbvOG4HyykPEvml%2FUhOPtSS%2BcM8%2FkmcooLNAMCTVOwsnvOu1bw2FfCaY4QACXywiZgHsnkmyfeOVGeXqErV46L6dzaGlL0gT09L6Nt5wUT8zcMYU7FEpVARSxXWRp4CngLPVigRvImq2UI%2FrANQN7nG5oJWNUFpdDCi4cK9iK5C9367L305%2BQTPwFgahEY0QMUNRYofkh%2Bm2%2BCVhU0efs1%2FIrO7fRSmxwXddoDDXXSAwg8nEvrPqQ8Fl7UTMvWdzHKN2IrQQ2EAQkCY1kGYHUA%2B9BzT32M2sJEbfFbQ0UMxG9a4eLo3pn55CgWI%2FhvilXFjK2bINX2ZWMth55asDuu1%2FsFXW%2BZnAlrrn7aCjbgvRJ4oCr90wRXKg1PFFxMtVrCJmRJPpls1qIQNfECTZxa%2BVQs%2FpoxOaGgg6P0X9MhYCAfP8BJ9RXLtx4bBs0zxvj2X8Ky3GM%2Bpc2KNYreCDaT43XZeloSyLCBU6XnzY%2BJ1Ocja7%2FCqVmZTq81xgv2UbrjGgE6sASKl%2F5xPYF0owfNvnXqxmpx4ss4t%2FKCw1w%2Fo0m1Sd8agYRzZix32U2y2F%2FQwl%2FLw1CLlnzxRg%2BVKS%2FUFgydz2FwurFSAWPohw4bGGMMaYysEGOqUBz4CZVGp2xMHkXaVUVXpapQ3RTjhg%2FOswoN%2BWaMVWysLX326INDuXl4qhL5%2FXU0S3hmGtSVuWVizJsJxd4PzT%2BhrM4Y5%2B4Z7%2FGO947gQKFs1jM2m2CDAk%2FBzj2iZAbjapyFdhwm3yvztjCzf640bFS71T1x9Lh%2BPyGnZs%2Fr8nERAa20W7NuROpdomVSBLWvgwdRSiRC62Db8UavlpfBtUzlwio3LT&X-Amz-Signature=abefdfcedbba6b020f1b29d3a639d185c886c4d7103f049754abac85033171fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
