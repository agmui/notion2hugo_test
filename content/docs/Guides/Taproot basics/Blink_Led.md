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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX2ZYNA2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbI%2F4EecBbxeQtbUUByWV6zYN0Um0RR4Uu6uJuforj1gIhAIZC3Y9nDQvwiGnr9Pra9GfFGW6PrEX1MD%2BVUTLjx6fsKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd20vmdPB6n017SvMq3AOUT75DIo9Dyw6BFDW0FEPVtCJPWvBjNhjv9t1HF5TdEykDJpZeyBPEemJgbSw2NUvSuvoJGx3ypctR9jlZ1uafb0BxsAOVCb3nxz3afNSeSxI2MejwEhmH%2Bs5FjWXAIVY2zHTaVvIk12wZ%2FKwDr5KtFe9r%2FI9Lrl8g%2FQS%2FmvXqNOWc446PO96ETWgfUHug%2B1nT%2Fd4xOzmBPrqy415diP%2FXiieSBN8EFZY2%2BU5HDSqkAaVmhrOyTlzJue9L09MPyxO2KW9%2BJZMgyBu7EvWGqaCUVaXkHMVZwiwyDTOqhvUuyUWsb42NIbXsOUjDOWRrwCJ%2BUeNxhoXEJpZN7QYwbcdd%2B2X1OQmP5NKq4uLS1FVZX4VFNAQjMbE6sSBacoHr%2BlQHijpq7xsNp1zhnunCIOBAellkJ4d11zS5K4CXHzrwgExBFtkmq74ZFL7S0rhXeQyJHrkBHqkeGb57UsCaPSWHfu3Sx5hgbkZKqy0%2BI8L17nbLvzkQKGzVB3Pbq2oODxkdGRXn3w68jzGkwm1a5fqosEPNjYL%2BeAm4yCz7nyJcjHUR4KnhiyUukyQUJ4nfEcf7K0%2BtySNG2dJpVoVi%2B%2Fjwn1d6FlAyuNDCuhqUnAdVHlKMtX32UgafpMd2DDDwgazBBjqkAXEOvN4KHMJGBUNI50sshQQvdDiofzglMXmxK3aEC3j0usRyTJFl85c6KqXd86gldtR7%2Fz3UTC1lbObTI79Uxp2E1dvo%2FrIUR%2FhpaPQUN0KeT2cOefMdCvTAlVKsjkMR2r%2BiTpJaQxOAesgWkt43rRH2%2FWjMAP5zZFziU9F0yrzZX1E6HWc9mh7T9M4cw5QDh0UMmPL4QGyyDL3Dls3j6E3TDMB1&X-Amz-Signature=cb9b53c1d5c9d65e3963d635ef4cf3a3bee6f5df9e93ce437bb0cb032885bcb2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466636VCH4E%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvUY2QAFbu7Rhqwlfod0IuN8zt8TxQxdEjz670TomfhQIgcCpd1kkW8ooDaAFh%2B%2FHVNYzC35XolNqb%2FuJsKLjnHksqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOudHVukR2CAXgj0QSrcA55zKhDpWjkGLiyNLXgYb4xjfVogdOEctHL6JqEvbINeT4anrxVxo%2BfwTIgKD88p%2BMOHbN5QSnG3x%2FOOA7AggRX5RsczNTgmGlrKKkLZVTkvRPeGW8eSub%2BXF3WPqAf996msKkdaqmlb3faJg0dbomih92AVVqDEySvznHjPo%2BDPqTnBtrTrd2asbpOT0%2F9IzGXZ31YzoFKA9rrA%2Bw8Eii4ldjjLmJgGfoKd2pg6ufgPnIMhuZA%2BWY42Sa7ZA%2FLs5IaXShmWbq6wePoslBwXD3wtTcMNPaYmAsbIlBVQKK9afeYl85P6xtT2OYZu1xGUIyuJB8wtVOAQrnYw23Ol92PLr4NFkYDla56u6sa%2FLuG4VAdm%2Faq6K4y%2BjGQUyQUlV0wyJzPcbFyNBPVRGLFzw1MIGiWRS7sTrvvWPVVkhFOX%2BbR8Ytj%2BeIT6lAKFQOWe5UFIBCJ0a1mSXl%2FgTp%2Bjh45ZkHsGxO6C30tsOWa49PUTwrw3P8%2BLfDEhBhQ%2F1u7yiQ40NvMoINAvE9OT1gSjeA30QHtCHdJcbdgTN0fbSrl8NHAWVOHsh8fqlOW64dPYh4FPELtcVgr28rbmISc4Y4eZtV9h5s9tGkRvPBQPnpZMR9AO%2FsRyNCzjvLblMKmCrMEGOqUB8BYX70UGX8%2BgU%2BC%2FBV7xF8%2BKGAwHscYI%2FKHFN8O0nSXxOtCzhDskXqS%2FdRuvArYeQ1h7g2dIp2FEM9Ke82AlFydBpebWmmqFmrmDOxPb67Vtc9ubUnh9NyrrerDhiIT5yU7E9VkYxrkZX%2BHf5WRxywbDDW5UfVmJdYAXHkkpA80puKkGYwRUPlHhS0EXxgpI%2BjClhxIDgJeLfVHg2mUB2QzfcX8c&X-Amz-Signature=0dce465d3619d165f089bd19cb68a87413f0559fe328e8a8cc588bd711b665fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
