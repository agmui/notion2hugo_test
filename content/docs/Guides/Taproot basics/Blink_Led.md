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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2A5JFTA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF34dvmiHYumBEUdaXDZNusQoxAieb63O8Csnke3dAdyAiEArRG1DSYWRm%2BlRWCsAZ%2BokWnVmJMYttL7bYjKfQ%2BBdeAq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHSfZya5Az2pFlhx1SrcA15xV17v%2ByfGHytoA3nv3B%2F7AGI1XyMIjfoMW07HtomLAZVXHI4OHaEEt5G0MH%2BN1ErsYKiyCOCHRwf%2F2z%2BkiumAnb8DHlTD7oQqUwXg2qGBCOdzJDNQuDL03H7gVX%2BdGR7vqSe0i8GTur6KaGsuzI%2B2PeW3%2FdZiRCPNm3X4s4zls3zinq4jv0%2FgOH41iEPcFYDiTWmCEh8lwLBv3kEmGqja7JHTVAu9hbaecKgux%2F4q1VxWDRIycFvcOHdwzUl1Ch0diHSPumIFrel5qAa9thQrUTNsmysguO9lccTj1kQEfT1bk0Jtzumwo0uI%2BzUfmaXJKmGUjzfRXuAtFRZU8YzIHFacC0QMUF7C76OZMF2L9J%2BW4gMVGUy5Kk4EXPFry%2FKsnDNU41qPfoXwS3eq3LDIxQQGnUEbqNUH4qL%2B0CQhf5OpmU809rhlBBXIuKzF2d2bfY0jSznFBjeEhCVl2IMjC9pfmu9%2FERnCiYfZIfuk13NbXyBKBdSNv3OWD8OT26YRcSwiv74rauG6hvhTMvb76fvhgmH%2BEBckEjyce9Cq6xyQciqEVlhdygzDyq8Q1LqUOvv4VEsDQA%2BXrY%2BNBu34cggTWg4iwHlvituUu5MBI42qH1U%2BhKherkXgMOSf878GOqUBLGqRx1Rdb%2BSsvYbvP7ECgSNbKulKO8Nms1t0DljDWr3JgQ7yahAa2vanvVXGVXz3i0cCxHlutARdk3BXUtoZ62%2FKzCy1tu2Qezx1QDBpj1uJIrCgzzJ%2FvsJKdEBHObhITEmE2nyKp4H0ekVBhLt1exr7ylwlWapbZD0rJCPbS1SM4pQWKE6%2BJX54pN14%2BwUV8UoWWpktRhSnBXIJK7%2BHQiZEZjdt&X-Amz-Signature=51fb382813714a406ca69a7a6a9cf7ed560dc429f6f2658f6d19715ed6590f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7V62PTN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI1Bw1rDB%2FhvAQlN9eOdZNxRNIbiOguJSnCQFJoT52nwIhAJKPsxeZqXRXzPPUiu3bMmIrEceIBVeal%2FSBQzFSodgUKv8DCBAQABoMNjM3NDIzMTgzODA1IgwI4W2PY0fUseTOnawq3AOY6146q2v2kTweUmC62SPyj871lZzaAa1nY09DU3PdA9fsmaCoYbhJsQzker3epMXBBOGQ8vGvtbtwhlRIhQmpEEnMQvkjnreKr1O4WqGus3VIZQ%2BKYUtLFVkxe1EhdsRRECtKwDtXrR8nX4UzrsBopKcXcC7O0KoUUmqQBSwdjECX27WfipaBDoErXH6slDySf%2FZDunmWfL97H7eNqRbgFDOnC%2BTYjTX0uCotzaXNFni30GLug40wXqxT0M9gT6ong2iwJqtHwbABSNSCd3gNPvdscspBqLe53gAPiALXRsAhwZltzrfhduLOi3tnxmtI0Wsdf5Y9VH7rWgbaPl0U2urMCj12sKmWHVSulp5TKT47OhAfvTZsaXLXt70yXQ6omP9S2EXl%2Fmw6PbOg3jDw%2BPij6ldnXq6WgdChzoBR74rzpb%2FR7kShZ2ZpCPkoIzbjeE7%2BifgmCkcCXB%2BpuOT%2F%2Br3KqIfb4AVfVGnUTjdrlLbd5mbU80SnwFIYuysP9TMajYjmt2%2BLeK9f2TZRzztMvF9Sa2EaDv3epCFbbIb9Ykt3V78vOkgXjLX5EV%2FNBmxTCrKxjAMgUr%2F27xptJKZiCpHujL5jOQRAF0T7iiSli2iyZkzeIRvIvNYoiDCC5PK%2FBjqkAeuZ%2BGjMBO7HbnGLyykP5dp1X9PGsyOGRDMxSQ2BqLhHs4SG62D0E21hWoGkxmVd8stafgtMKMEiS1M62Qi8nE9iz%2FxEfP13mHOIl%2BjaQDmQCArUJuR2ZNr1qrxP33qrPl1LvRdpuPPh%2BpHoDOUiPr%2FbKvFgosRqbf8LALk%2FZlAGLFRU%2BrHaxnLhcthyIIRsjGGX72nFn%2FxkTyT%2FfxmkMJ%2FGqniD&X-Amz-Signature=4ffb16f40230c166798250ac9e445a4cb4ebd596c44170c686c664e42c1fa255&X-Amz-SignedHeaders=host&x-id=GetObject)

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
