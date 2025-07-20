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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY2FXG4V%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChgW1%2B3vHGjKOxgtb4M8ze%2BVl5qUPseFOGshozpxViuQIgbJTj50QXYLFch4BLhXlgyGS2ramUrN5iDtabzpt5rXwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADHyVk2APp49H382ircAzhx%2FsMfag1otyYwX01i3dR2expC3PFTuiLXYAO4gHK4n2GVOYuN%2BJodB6kLUUz8ThGPW4smQnfCh6qmPUCZ3u9S4sr1V8SqLwpc6y%2BwG1syYe3tav5BpT87upCtUZAtmUTuoMS61i3XcgQd2dCfKzevyFWU5SEmMsDq1LbHyH747z9frPjzkL3%2F7VFIscngN2nRkRnMy26sCuFw16vR%2BmyoXyg1SmQ7zc%2Fhdxp3wtI2BpuOfnz0ygVHPz7vU8LpRf2d7JF9qf%2FwOFY%2Bze50h8AAOIbJGJy0EK5J49OeYBBSj61p7e6f663G2H1CmmxBsmPlYvY5QgoDN0UrkE37CBFcLcb41h4msw%2BsBbnnVS%2F2KK%2FgPRsKPAXkF83pV59sR0Kwnb0BVB0xl8cCsSHK81WE%2BJnac3P4lDgEr%2B%2FdzYTBpy%2BsEcjmkWNV6eudmQFBK1mCCzSizFBKYMrPG7LG1zCN%2Bw%2FMYb9laM5x6dQc2%2BksGnCD0Y0PjN%2BVmISrVbrT%2BTv20mj65jgCEnTjB66clhfkjvKPtuvdqdkFpim%2FerM8kPRhXqOzBwuILcTV7AWFf5oSv257Fg%2BkU8JNfxZTbdkmY0ZmPpzRzyRjB5wV0lbi9Ub%2F5leG5%2FFQBjkEMMDb88MGOqUBNbkKKsSnt6tcMwJYeHUALw7AhZwVwJ5ybpwBwGmUFp7wIPJnPMJKOgb6EIMTyyeoLjYwoTMMbrwhZ5xSRrd41FXGeHLooz%2BYSIAXTT5kgTuJhv51H4ktd7FEhmV%2Bs53B2ilf1zLQhNb9Old3%2Bjjj3LPJRM9wHdpSWJLZ9Q095O0UYKDZ7zpWhQS6JjQodPJbrC1xZuRLQV%2BRkUztLSgBYaW4x1Eq&X-Amz-Signature=f663b16c9c4c903a6f1e300861050568ffe5e5148f65fd76381488207e2c724d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZNOBS5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4ruWY%2BRsSNPQiizLCBUrJV2KX8Kpbi%2FBDw49dDaPFyAiEArW3Cxfb09Xc%2Fl9DAm%2BQseXcizaU3GpX8qv5nGyjPPEwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiBwCPC2EILQlenqSrcA68Qe63LIPZu%2BD46zyHm1PGTB73azSDWK7AABB%2B8zkxtHrCwIrnfbNC%2BdnX%2FiohdB3E9a3LK9G2nNua93B0Af1giLF5Zr7SfiApD06lf4Ia6U%2B046%2BQt98PM%2BXDJa5BFN9eaT90o%2Fs1LDI2kaozAk8vTQhyINz8JzEez91yc3swqVU4QMVa%2FymJmC7L5gP1SPKTP%2FensLnG6qPWg9rE30NuQS3Vg7ruRyfeym1c52RP6eKU7TxLT0oin5GL73dT2BzuTlfokZspjxlwgbBInjHgKZWdE7WlXPw%2FdS4YxaFsD5g%2FmU%2B78%2FsDB%2BYqGQEDCAKNc8tCEWRZ3JE4B04GVL7PLg9syItfMlKnErwhIc0PUbx0unjO1fZEks%2F7qRRySJiV36tTtkL%2BnPbreyDwZJ%2FLLxPBKFebzl3IS0xL%2FMYm2Nyd2pjVxxApc1%2BEN9If3PvyEzesveKTGoJaqDM1PKU6lvVYkjLy82NcFpOwnYrb19mwueoekCokbPef34XdQ3pIwNVv61VuVf4L22%2BWF0mhVFEsA%2F35faW2xEs3m%2B3okY1iLxuxyIduLecCEM8Z%2FyhrMdGeoH5sQfSs%2F6WYfU8I0LVkEUbDUv0tRtjZkTmSflYFZWt5eVkXTZMaNMKnX88MGOqUBJEraWr9fgpliVnOPgzub2x7Un9T3B%2BGyvsHA8vivlROBSOV8TqF92CJBdMWnEQ8Fsru27ub56hlpVtuOGfZh3WRL79LhnBunGeQ3CSTLDNBIetHQ9agNGMa0eK1qjWzpZnyE904xsy%2FGskZ3IayNDBy9bTFZpgSEfcpj6xv16Y%2Bp%2BEQxrjeMAUugzZ45g%2FCNznKwHA4%2FDmcyeTyQmTIQYkc40Xnu&X-Amz-Signature=afa7c458ea4a6563d6f4732770d103134182ab5daafc366071ce37fde19049f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
