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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWBZLAD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFA5fBpUpCASWv6MuOUXMB0vzymfPjbUAnY9JYeItXzAiEAz%2BgH9f62JsP9%2FhXQ9YpnHwioJPhZW%2F07BP%2F0Ji8r0TEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH41JN5br%2BX%2Fig0MmSrcA3ZDru5Ag3umw1F%2BtQv%2F4Cr97OP%2B54VfF6O62%2B573ypYHnzCD4JkorICLChoc33vgWIjS7u0jv%2BcIQCwrPiCfSLs%2BkuIlxwbHRb4%2F9Bem%2FknpdjvTBFHIc%2BhftC%2F555WFg5ZT9z0Mc52DZTfPiBQUpH9w6B6q7PIGk3nEtziwnS1uwsbBg6Gj8GYW5AB9gyhTx8yO2MekE%2FkRnm1y6ioak8Vcl57n5bWHCbQMFVPt%2FRt3pr0hKHAc5Q1gqvuxrU1o63BkPP%2BguiatiO%2BK6ezUxdLqfs3WMpOMrXkw%2FBQJDlnOt3HfmBUl%2BbGXjS6gFvaa73V6MfDyjGvWET6HaoO%2BNzFnXJInromeEbdaEl4nGbogZSbuQrRHp2ihL9ukhwSRH2b%2FWKkXxXc1yEdi2RhPPOIzj546pPDkyHTwxEMLeIc2pu8zjjU55jTiOBdalCEum%2F6nxPKM1%2B6j9xFEOAsgiKG4AtKk4Xd19KOBTvzk74mo3e1hMJFtq8jpU%2Bgm00j%2BUVrjScDdeY9fzHlDOqssJm9ZXEy3YdGCz%2F8Rxt1D0SYolYf137jRjk%2BjOzLS14bAxBUc93uppxSyW4pabiSiQnlPd6zUCUY76dzFsrI4dqzieX77cLDwXIV3JMxMJe%2F4sQGOqUBK5ec7cwve2KBKOUS%2Bh%2F7CZGlnShATHWBTaEyfVr75DZ1NMEeJX%2BAhwNUGCkekIwRswvOeYxfjUYeIR1QDBrSCqL%2Fco8zXZjoW%2BGzhVbrKlG5B5rhv8dXDO%2FY%2FctnhPqlVqUQU8V%2ByH8IoHUa3exfJiS%2FiXnnNWF95WPrpcxbsY0pg5l3QebMWQx8BNixdiytlk7%2FdSKHuuvrtle0ZZS%2BHo2TIkpA&X-Amz-Signature=4cd2c984f84ab8dd1c19396b9021619fb3d9690e37ae80a07705af2dfe38ff13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LOKPCTQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRkCKSkGEncCMdTwMx4sfZtcUqsw5ak6F%2BRo096PSrJwIhAL85mGSW4JNte8bfnxSfQ1tscLaM76RTnt7Sn5ZsvjttKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb8vGYg6yX1nSJ1ucq3AM39Crm7ajDSxEA48PMxyZFc2mtieMi%2BUHuRN5cP3b0kf53Og04waHBw2HOw6sppE2aFYjraeLtRNnJgGPiM4DbawhGhSCT%2BWq3SLnIj9wnOxVYqvNNtpFOCccnRtleZY2B47UY22gzWnVQxzAu6c9tFmIye7QlqnfxeC1Fy4f%2BCxi0KlxYdYTE3rT7Edo6n71%2BMvQmqZ0DWi%2BS%2BrrftUpvfGNJN0olIB0naREMPux9bswz69sPqdnxx0wbM1P2LfMIJNrHkLr8LNbhGS2OMi%2BodS2cfKQ%2FHpISPE6g0fIlbaHiMuOjoaPq7VTzbRGkhaP1W6E08FmH0zya9EqFfxKHMoL82pXutjgdlHL8UGTHRvF%2B5RqndIhV188rr9r2Ok12V3KprjKsnvWUBH3kM4XyXY3i4m4C5v00cIqfeoSUexv6lItLOoHsLhVpkjwgMBJ8vU8LcujFTFD5NRHzW94Qxd7OEdZG%2FW1l2c6nFKSlQQO9pQ90Pi5bgNtma5CiBK5Fegj9qfH92RgkV%2B9QIFAs6UAYnnBs0rloSlpeWM7HPQneU%2FsRypVyvsocqBpTPI6l5KQoRMMzz82NFmT%2BPG7J%2BLJTj3EUWmvbJylvJzsLYBHfTEaCFiQlwrLw2DDJv%2BLEBjqkAV%2FIth2zzud7wmaXTHkZLvHhcBnrTjsVnx7BRnomSgPAhjI5%2BN64U7C41h4wbO73iPSgmEF4P8l0W%2FhfvQVUEF75mjQulYXyku1dd3KAX06z85%2FDEWN0tL0g%2B%2BCI3GeiBmt9AvM%2Bqy%2FynZSaalT2xAeKz4HNiuCnTidOJIpofPSDR%2FE9GhvjrNgNzZK6GfZYcWsxoOPFxiUuR9G5yk%2Fr57sRZUyM&X-Amz-Signature=e133d18eb5805ecafea717932b86d7de77ce0e398738853fdf704b6e38e9a766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
