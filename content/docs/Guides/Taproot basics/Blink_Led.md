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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQSO4AHA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG69f4QVlNME6OclZ%2BJHDqsrBToE1MHrbB9yC3JaAGrsAiEA%2FBcFh%2B7R%2Fa6iXO%2F4vNid9VrbJ0J4OFWzLnrrXY4CQCIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPsnNxPTSuOc2%2FdBkCrcA3t542AOJzZQ3RXKRj10jHtDI1Oep7zmP22A8inI9g2xsNQDMx726t0TV7f1ZoZSAiM7T0W2nKFaFuHsWr%2Bx0vEbxZx3L21I3pBo99Vetn%2B8WR6xZPgMMquUJ8KgNC0MmPsBFx8phPyikJNt6Vx9fNcTRnDcN6DcqjSnbF8oXY6ilySgLghQNwnB5WoQmdii9xWOtCErQzExI7wbD5MLIV6WrH8lWrRgWfkD1e4qOFYBRsT%2BMJXHjMFXwgCSvKe4jNxdjTu7MkC4uDSZLS%2BDf%2Fi2Lnz2tdPt2FJp9Tf8jo7MIdcPa4HnqyVHLRvL6AysL6VxsklNnFelj7%2BMeRuZNfoJkodrpspEtbwXRgmNy7oyflM6NtTjnXUSY4F0%2FBLpA%2BrlC1YeEl5bFN5rt%2B64yN%2B0axIcsXEX3ZJIeoEbhQvqBeJiVfAHst8FoSiisb2NUUbWNNRxfSe%2B9eHiollCTFEMYFDWjI%2F%2FLHRZZN75xmfO6tIci%2BEnrCef6xXvWOfLiJm4%2F5CyyUTO1ujUAJDrR8TfvYTi97Cj375nICmS6RS%2BC9CneTCVDZSV27wghqizLwVgL3ZAZF7eTqAHbeWuFg%2FbwPe0YQjcAEUtadvPHjB80OZsPZOTdRktrXCQMJ2U8cAGOqUBDzvEghdVsn575m%2Bt3DsZVZHAgBrTSuJSY3cZOW1S2vMO6Fy3R7DQqIbFXJq%2F%2FxJQwvgGiyotv%2F3m%2F8euHZhsHm%2BOjlUERNJJRMOf84VVQ5lDr%2BUvL4oNmihTbratjaGxmTeB%2Fq0XaicZqLDSmWx1xlMQuoAuZRaa%2BGTauhonTH13DKCenYoHOgflTMTKCxi1m2Ls%2BPgBm3BB7dPxxIEp24EVlzZF&X-Amz-Signature=d0abedec35cc9f3269c1fdae695629449adfd4daaba5e9e1d0e8ae9d089ee7ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5UIKLJD%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxJ02A1Yygb2DGaLhijcJc6gispfwrItBK0irenRhsaAiBqp030%2BA9skrdrLmkk5j%2BzsSA0txO3TH6r5xpqE3e2rSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMVX3I0ZunMSLSoCoLKtwDegPu7332NA2dHQV2w6l1vI7gB%2FakBNrUrsATQYxQkGOc8nh7lJAwX3OxBFi3ySwO25kkF9KQ9Xti7UHGQK29FIhpsSt5%2Bn6TaiNwgeA%2FZR9PgqVz8Edujal00AfSzlgddyyGa0MB65iKZTinz97ILld0wLVA9sdZV2TTpfCBVA2C1wvZk8rzVJ39GzCKBYNmmuSjJSXvEfyGU5uMlvocuR8%2BptI5kp5rD2RVS6r416IznUeGzGsxdyj5ENCYm7nzkefjL5gu7CiPvD92UieeBU2boLSEMded9aQcZwJK5CdRe4v5KzguVZFt%2BLN1vpg4Q9Bac6dX89sOioPiTi7mafWyPsP5H5HENelk1oOFtfNK1qy97OTWa2L%2Bbeyz6hR63YQhKB5TBBV9UPzFQwfWV6wBSSt1TqkhVecpkLOflQeZtntuPM7ECihkIK09mIzRzlqeFGZMPBY8IWCxTfi8RuNwXaTOX5fHV7yxa0QGtUoiy33RI3WxYIe6HkelSPicOFDlqitcwCKb4siBb5B7fLwm%2BmEZuCfYvDHNWs9jfvICNx7b2Z5sqx3bG0KTCDymPNWcL8GxSr7tjNV0SVGEtNkLzKSkByv14yNqqN3neG80QzicmkZf%2BLSW9t4wk5TxwAY6pgGH3MKsnuF1v19u5Uxs45z%2FSp063AS5f7w9v4n%2BU1uiTT%2FKdL268tHVj3%2F9xGhT6RPj7zSrsk61AY9am8%2F6bX4HJi1XtP24lqLxE5p3osqrKvm4wncELGPxLWfp1aSbmyNkoiWGW2BuvAXR0foOPXTvOVTuazbnBA%2F69MhUYUSWYow0Xgzi8EOPrjjaXrJan9iZULCRBIV3i4MsGJSbRmrbi7wRng5W&X-Amz-Signature=fed53cd6ccca8916d73e250e2efc6b07ffe3f3749512818d505b330566b1b8d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
