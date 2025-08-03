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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGC3XYE7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbfrRLDOTYBEP4YFqhY09bGW%2F8O4nTlBhd6PAuA4b7SAiAMWpgAicX26saWg2ybTKjwsd3f7QJqFzl%2B9uZM3Pg5%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM%2By5ziP3cJiUNwYdkKtwDQUdt99vH2%2F%2FF8Px4D2zetgKTQNvSVnMZIFolEKI8XbsD4o5mwof56DxGmCDSUoEKkfELEAnVhgcac%2FF4rrH4H1XfXzOV2Uh9bAVv4z%2FGtcmKAeOhou9cd4HBWsy8Ko6CwY1ElREoHIbgZwf9e6CsHSVSLGZ8KMaqSsZx1wbE6HHr2AqbJvsMAmY9%2Fm%2FkSB%2BOwHz2feq0Z7TDikSkkTgOK1ieB2aFiUszjpeKfdzjkh1Sxm%2BNRiME%2Fwg%2Ba9W5MT0wVLgDrIN1qiXals0kXiD%2B3H4jqvuIG5nx7pENA40S8M2KnLymNVy9%2FHOTSo0rfe2lwMtxDEPOyonLSi0g5QZeHoDO9JALkpBY295bV3QAu9gcBALeP3b07M7vfGnEcP9Mp2Y4X2cHIeYT3KXs17Z0R2tpv81s9VjZ91d6b2nd%2BaKIyLC2A%2FEBDiP5j0dKFWnNqUhVPs51GQplVE82QzovWvXPIAxYBNeTh3%2B832Nmc2MAW6AUABm%2FADwx6ILh%2BKFlaHKLd5BQw4iXzyCo9RQ0E6nEVxpohjwCqTaZaOrb%2BYkmMoCMgPNbwE1qmphk%2FBXMLtI4GgKYS9oxN7RwYavcBhHEBA%2BpVQLAMCCBqVwxepjiI6%2BZEX5Gdfy0N4swpaO7xAY6pgE%2F1qHT4XfkL776aiqVHOsftPyGIvgfk0KbogEosdn4x%2BvjW2UE91BBj%2Ft460QvspsprAP7%2BLEAfQB4%2BvUcG0itBuxVwPm09yW%2FQixeJObvohb9dsTdxOaMCsvbMN6njq0RYoJGu4vzoRYtQQjGkMQ09KLSd4Pj2NBNnSzcqa2opzSPC%2FiyEgXqZjMfJox3UYmfROeSZMiSX3m%2BHSQLGFtDEdHGdqfF&X-Amz-Signature=b3eacbf23806bd89283c4eb460defb7339aa4295df511d4fb55209f419a04d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHZUBEN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTgYSYPZitl9cLvckGweKzkLee84W1n%2FwKDwyPXa0kowIhAP2g2pNaTu63pIVxD074i%2Bc66YZh3pINQh1Q0E2L1lLOKv8DCCQQABoMNjM3NDIzMTgzODA1Igzgi%2Foemd7PHtoR8Jkq3AOZk%2Bcj0irY8eSinJdrdORUJO9U6pVMDJFkWacIHTTFjAPdpnn78RVeKUR6wN%2BUVD5DoCPVqMws17bvWJvKtgXffUKrsr5pdOC%2FY5Cpcb1fwrX3yTuUIGkWqSfgl4mcm4dmCsb8xmtI%2FMKRgRk3L2n%2Fq%2BFXhvnYRCVzxdkpr%2B6tU6pKrDwmy%2F0AFEnccZgDww0LebdmswkwcnsbyTmJDa%2BoeadigEkCwSBTAWc27e7w%2FUaFlWU350Rz0i54SLd6lT27r0RDkS9BfcbU%2FPDFykwe1OZrmHW8x37wWmZeYLkj6wxEIpztzMwvue%2F2erQKO3NsNIAOIDr0b4iB8jalyaG43Q0AN2nK74iqdiljhatRo66X4PzOB2hFuvuakOKoc2ExNfGM0TdHp4XlR7ckxQm%2B7P6l29iM3Y%2BgznUvPBYw9tYR7YOoOuoxxRYxCDxsTEu7x%2BYHvYA%2BVjx3f6K5uGzEroekr2IKw0EHu8%2FI4ANOyuneo%2BtbGN3TI0Y2eyYaKdFcFw6UpjvgTd6z8crsKTiHBCbyvCkhUyXKS2GKTRZN8ftFdMYiVCj5nLQK1v4h4o5zdwvrls5Kr2H84M2b%2FL6VfioWrL5Xy4YoKzK%2B0bcasmwNfsN83PB6Ms%2Bu2DCio7vEBjqkAR0emVogmYO9kArqPLIeeSeJB1qaDyYIf5uQvYuQxaUEYiDOsjtPtInJHXpPnP6DzC%2BanIqOGMMRQLs3%2FueyvX2hidrjeiCKpgN%2FDx2TB%2BpbDo3461%2FqPLfJwo9T%2F1XxclQbngc5mhrTBASA5ZcUrlNNc1pEzQRVlQfacH2WrO99lWaElSnU6micncn0tQDSPAXUvPL%2BXbyL6gHEShnufxMoDMRE&X-Amz-Signature=680cfde32ef897e048a8e8a187c000061c573bf7c25ffec3fcaa60aafe2470ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
