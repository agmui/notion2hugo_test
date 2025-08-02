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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ASVRINB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLkHMBA71Y1hrQ1lOqo%2BbF0A5ZSWE%2F1Axd%2FPDEMSRiAwIhAP749fSzvzVoqPaRYqyqteeGo0RpOIFj2Wa%2FBHwkrq3YKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEv7SXqVoWb84rc68q3AOcpI7cNPrr5FFVPyEQg%2BzzWsCZCeF3C5I7%2BbYhYzZLoWo%2FW3mgGWD9H4M0FX0dUrRk%2F1XbRL466Gke%2B0NRWKf5hHjZQ0BdZdHia4Akj%2FQQfIWiWujK32BB7WLkuldvYamLSDnWBJqkBjlnvj0vuAnFtqQ%2BtuBWOF3p1vN2V1v1KeoJeRFfIUOFmO%2BhITQlkE6X1X%2FYMoB%2Bm9yYGK8D0%2B4lAP2cKFjluIpQGBSV8oDj1j52VRWUU99Oi3bQum4gOzMrDex5qD3ZchfrnmtcTAbgKT45o2d5yeGB5IYrvcWJQ7K4S%2B2zcfoHaHbxYhPsitllv9%2Fsa6pJB4kedMg5HsAFDOVLPiycoj%2FSnDlA%2BbikRkN3UgUbDf3RtKgWb1echdVMdUxjslz1a1dj998RYg4Nbspnobde3IY6adFC4Em3wraK3dkJqDCZPs2N%2BCF2CasqF6vgUQCDxacmbh2FxrK7yeNsIYHQ5x5BUYgZulOK9i%2BxFtLKSI0q6RpBNMLjewCd%2F5HuOl1%2BGR46S%2FODDSMR3aa6u6UeJyh%2BVUMKKbP5cnAYhE451iqPjUARLCDVatzyBAWVqcGFrOGZgMCqpyZq15TTG5WedUu7AmqcUB%2FphW3kNhdFIqAKU7z%2B3TC9yrbEBjqkARti3U3e3Wm1WOzu2p6em8NQ%2FHOTON6vszeNONydE6NhkaYcHfWFunzwcj11TKRwPeQspPV86%2B5FcAqGg%2FahpKj43f5u1Mo8bgpQBqo6IwC3T1ekGrY%2BkzB0MCub6XFjFWMdkrA9w46KjR5jeHbLyAx2mZfhvkKDaivtHLyWyLVCi1uOpccQWamb1M7yYY2GUSDOUR0l6HTsfL%2BWJMEuKV5nH43m&X-Amz-Signature=456a14aa78a2a8a92ae75a89a5b0ace34d69cb251f866568906908852bb0d0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5S3O35P%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLI8ocztpnOGCSvR%2FpraqZ6o5FVNUoterkYDhkqA3tRwIgB2IVSdtGT1A60e62HhrCk9h8L6psXiGnqbXRvso7TBMqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlK0G%2B6AJd%2BQ%2FtTdSrcAxJaTJL6jGc18JO%2B9TB5Lmo0RXi%2BAdFDJ7BmtFa31nqYcICya8F45G%2BHuFdlPvquZtUD%2FMaxmllGWRaYpRdvXo%2FYYVdSk2W%2ByV%2FUXy3y0%2FrAon9AfjblQlI9saJ1kzqCz%2BsL4%2FyUSk1zPJthXZCXyuwcM%2BCcwEDGFgmQJaOYI%2F2JQ7Ez32V%2FN8qNpTuqXeHn6%2FWSlZb4%2B9JdqhMj0fcGDTwAXoPONK5T6H%2FIFsB5WRTHFFHzpLfyIRaVRxnlf3iIJ3lvtsf2SOuahsf2ax9pqel09sUxDlG5uz46xiipzaOPiAaP2FFhdAvXZY7QtyDOy48CU85%2FrWRgJafldmcv1dscUymLMDQjcbXFVBRNxQcbh%2Fdt9w4OAcfIeaVj5D1N9vCn%2BEjAhCj2qm0i9BJ0bF0eGFht5GU5KlRkCdGrW5px3G3PTi59qyVgsJDaBnJauDSi0sHov7tyDq9MccvQqIz0hS33E8gIAwzr8dmdYYouFvdOwlV%2FAhel%2Bt43HVnRtaQkbn720tvCxSqVwi2h5i%2BDSee9I0FSrBzsgTUJVIf35kN6%2BTxRu4pJxBNvT%2B4uRp6Dk3rPnomPTshZPM0Wy6SXIslOUitrhXKNpV6y0PbZwcHX3jWonQSBVK%2B%2BML%2FKtsQGOqUBW54eJkgk%2F750jfiifTs3nCQ3Y%2B1z1%2BopJqpa9%2BThffX3IdK2US34GLvVyD5oQ3TvG151QN%2F8dYt2lnOIrZvYYyYkMLGF%2BvT6sbtMJriqYZyxeloF9M1hEmER66qUfYk9Sd%2Fo7XT29wZ%2BbuPb%2FUp73gwsnJa%2Fo4i5I1RzjK31yw%2BzwHWEwJSmzBeqQ5elt3TXqVXW%2BoEQXnOduwoAk5sSk%2FvFBnRe&X-Amz-Signature=d409e21b4471fab87cf2915f7dad76762bb717ea8bff4f99628109df6031d380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
