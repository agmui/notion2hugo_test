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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQEWYO3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXgxHZ1HCcfRlv8upZ8yPX%2F4EPzgsv6jCg3fdal6skkQIhAOEx7T2CDZYMsNbbGZSbIM6TF8CKHinlrKDqNpIo%2FdyEKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHaPX2wtbNK8cDoKcq3ANtnWDio%2B%2FF%2FXwMzwSOc%2BOeBuJyvl6OaTXnP4W24kho%2F0D6XL00v9r1WCJn0whZ%2BvMxlbxMPFPpU%2B6nURwGJWhfatYAPX0EWEWS7%2FEi91SMtAn8WPpH%2FCNOChLJtF%2F7mV42dkcT%2FxB%2BfMfAMbTv0t9IV%2B7OpqP2WeWT46lrjHqq265UJk%2Fxg0KbJKLOXXvNRkzzGBg%2FD8t8XKcQAn5O0WqEogxszMrGDetDDMu%2FozqCFyZW1v9%2FgypEMhblb76VyIsPJpKzPSQxbAYt%2BsCDknYcZLbJrSzMxHq93mXlnFGQcl4dNKO0luinx%2FtVGBHraEiBEm1ZcbzGkMoR8reSUDPvHbVQyJ7393JlwB6D6cgo3SmIvLmeHhDCJaEmDNJWO730oHvE9KeE%2FEQBX77rvnjWvqFeKRJTK5VqJKpxmVY9izhc2RUxvpQ0%2FzMBRWs%2FYPEJIIjNu98TysBuE1cXP%2ByV88La7lfAzzZQuuyP1gfpNHv2sU2pW1DUaebjl05M5HBOGtiL6Jczl9Irg9iGti5lUMuM5eVjxirXSwsobzf%2F0tHoqWqnUNq3pfmWrG3ofAWLRcNFLM%2FusqkgnZd4M4BiKBKib42XFUBSg0YpJo6lNrXSiSAFihFjI3kIQjCkrMvCBjqkAQxxkQe0xSllUz%2FiOY07%2BmLEAenbRCrUlkWn%2BIcC5Vr8xJvEGQJ3CnX2v9BtAuziJLpYq%2Bm2xWqGL3IRhu5IOq%2BUEAqvXE5s1va%2Fo3br%2BDLCEtKgUofgMO4%2BycoeLWeN%2BRfqQB8aegsldA2Hbz8hXDgQeLqRxQ%2FSV4LTBrcxCvoCXPHmXM9YD%2FGpwF9yk90fW%2F9MNvS2o0FriiGq%2FH4mcjVl8v0O&X-Amz-Signature=7d43c8ca49506550ed61e01fe2db5ddba603bc48246bba36278c1ab9282fc0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXDI65ZW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVC82b3RclqgR3hrpCY8eM2GNwr%2BLkPlbFTmOJzkfuyAiEAirnWUDd4lgq4%2F%2FUi7S0y5%2BWF759SuVYN4%2BFvqW2fmN0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQtprd5sFZl%2BJWH5SrcA%2B6Cb8MHfCTSyVTSesJ5gveV8vdV4hVNb2vnsL%2FmPMoQhWetLFP6wnHbWRR05dZiOSYEsf1AyMgtq6%2Ffgj%2BTUtnfW%2FJXZ0Hq43slohlZWFTeYZyaQvdzo8DIlo7RcsG17Ap0sVyn28sgneajdfZvy8K1MGtWelHqPUkX93fCtB0uzKgq1Ugd2Sz1x77papUtmaulJMwpn5OVfVRZnsQ93pm%2FiuxBHgN524SYFXKlGPwTp1mL2RwRMwNjXTeBnjPtUdYaLKZ6YKsMsOYUiKWbM3XbArBrWFnKnpJsNoGBPEgq5%2BtzSv42tRWvsplDUFkxeMqak3DDcQV0qNa%2FLXQ3zAaPOXmSKZL1WmmUGi6IIRs%2FMFVwHqXfyW2HswoAOwMYWpcosoXc9aLc%2Bo7iR3eVVP4XGoLPiUdcJyyaivDwkZh6pRT9jMJhNvN2B5Ol9Se719mUeKIFVmELeSe12C5dfBCi9IqbTGB8Z9OmgNkiFxEFaVIPM4eAfKnTRmzL4qGEVCO9tAHElZq25aOACUmAFKn%2FXWU33yHlt34bCrbiEC6SIKr9QbWx6a%2Fr7tEyONNdKzlucjqaywc%2BucuiHucOMFTjOffLeMo1ZBXoooqoCOoPqMKuHMIL1QN1tLS%2BMKf0ysIGOqUBHobskq91P0Rv3uCRo7GXqc880RDyHKRajCKpKhE0LJg2oFr8zIkOVvxGOU0vtglIQHIeFvJq7FiwnDRTr6KCa74SLhGxd73BvlDNDRJ4LAO3KGFMOEOUqATOHpMZRCEH2eT%2FtK%2BL5hfGTBog9rNFOoVA6Vd3gDW8I%2FY70upFWN2BBPnsGziDbWi0tIsbktpPxdhy1tPeTAyqgkoToAAq%2FklTM1rq&X-Amz-Signature=10216b907b4a763c8f4f79450f244184af80e1a355074ef8fab8cfc3ccca142f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
