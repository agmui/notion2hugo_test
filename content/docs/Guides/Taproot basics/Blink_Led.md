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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GRFT7JH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCvMnUtdrOgc3%2ByjLcZ%2BTjOx9zn0TWNxBR%2B9xTUjmOn7gIgDGuYW%2BqOGN1QXmrA9B7MAGTaN6Nom2oXKFVh%2FsdgkPUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCHPm3%2B5PKmj%2FgYj9SrcA6uCsBBXEg%2FlRWpvNvh1JR1Y56gWGuaFwCP5dSwzz2Y2oidGJamNjM%2Fr44Tvgep6GXSRXN6zWQrgbiC9%2FAvb37XE5NF59Fa9yEMIufvlTOLXF2LEgWC5o5EQEC3cNlkuF2gYv5UfUwAig2fXo7BMeCMoU9r1lSwC0Vrjuq4xhpFRevfk0eUelPBG43Nt5a6iVK%2FE%2BBmegkL23%2BvYsSHkfTfIYQq5OU4d%2B%2Fwh7fpnLhspOoq8meSHag%2Bznn1FgX4ovaWQt5CWkkAlFhhdyp%2FvbgpL7L%2FiFOkaEl0L0YezYdw5kzx%2B7EODRsHAArupPtRxtpbAOJJYG3RgKrYiM7fWEcyxwNPXcmfoMBwhBlPovC1AjbEiCj5lbpbsebb4euhZMV16ZxVVNAv2bgspj%2BXwi3IY4Vb80a1U3i7POUIY2nD77H20DRw2C0zpIwHmanxY1GQqdGZAzSAmo1YXUx9FkPqCytKhhgOnbKVkalIbsMJPt6geqPA62LpYdOfKriTcrAE3WlmrIWe4vwV3P6LCcPY9eZnHoVXbDxVVSuFjFXPMCRIsb1OLE6j1304hZKhcsYxOxv7vqu1CGhuaewLKTr8YKHdd9X%2Fx56ALXTMw9FF3ejM7OC7am5Stapp%2FMIverb4GOqUB1qxHG5IhE%2FJZlWBw71%2BYdNhVJ782PgJUPJR8JRZKNUStNC%2B7WRSQW6JVtF8Yql2IU%2B6ZPHW0sIblr1UopoxO7DOt2jwoJISkoMk2fMwV5TKe54dp1ciuW5jc4vQc3Y04VXE0xqW6uAy8SHLIHk8W8DNtfNkuv2s3Bwfai%2FMXAuZJXNGikM2PbuXb358ce5YOvu8OsillU09SXdsUROnc2S6VoZHU&X-Amz-Signature=434330a64b4829022e981b6e03d8b65cf017fd6cc7ebc5b6b0ec0969ba946459&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAS3WNJU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDEHOmF%2BAHE%2F1sk8Evgq84MWvvWKL3CxU1ufTHwTKLaRwIhAKYRoKQQ%2BrgS5DHIlJMs1joRxjV5t7PIG6fC2Rqs17QaKv8DCE8QABoMNjM3NDIzMTgzODA1IgzXjFA7H%2FhBymVvOCEq3AON5t0CB%2BMG9YG1QvfurZlDb0CkYMMVaIAukDmZP5JXCU0NQse7BSIqQLcj54Uk5fRbSd9irCdDh6Viw1VV9qBnU2PKcUoIn64jL4yVjtB2E88Qle1GaK5cNItaAAPJBWKPzl%2FkQxs%2BvVO9XdNrN6dL0ns8%2F2LVMX9g0EH7DPxvpcY%2BxQIPpML7YgajI1hhVmOKNxGsPai5QTqwp40ph8cadexgnYkhk%2BCsrJl7KrvNShvm1Z2lH6VaaOnc8Iq0d6hNm9PTNxy%2BHiN%2BA%2F53QhWguNKLKbMgiWulN6fgeBcWUMX%2FHKAReB7KDpYbBnegc4Tt0lbLzREIcWh9jYUh6Z3ry5RrPOwlAwzQ4RfcPYH%2FBm%2FJye9uvLYTZWG8zJ%2BYHsYLcpDePoQl2xqM6Sja0OHczY7mmJMY8Fz9V1SZ4bzzHLCMQFeJHFZLZz6UIIFC%2BgaBKMmp9icA3pKbWFbBHiXfPBlGzLg4lKnl0MHutqF0vuLOQ7%2FOlnS49esrh5WE1%2FNm75XPi2Lx6dNIFqLBctYrjW15vc9RtBnUPPsk4zT7vFkTRTuDm47FhSA0OQPxS%2F609eN6uofKNBXjWTc%2BsQxAjPOq%2FWKgNXucZajCN%2BFx7hMAJlUtme4cij7pzjC03q2%2BBjqkAdCN1G628r6QxycCeZPbcr8D0wThTen%2FHxnYaxerPcWkPbZUadDvmu8jTvsJbqnXz%2BxlXo2eunz2wna3RUqSsGC9jYAcmSPXHEdk4Ro0qkTxaDdzhdQQbSWC%2FabsTW0WkJC%2FGlC2gYJECWTd%2FoNWhTg9Dzum7jlKJ661R0VUpFwzXqsrExGbvbiyHeX6L7BfTEHWGTwuSdr8sj5fGJp0nRtg5HI%2B&X-Amz-Signature=1666196317036c7fa925bc9a475f9728b1ed602c66a8236a6ca2962b50c4e234&X-Amz-SignedHeaders=host&x-id=GetObject)

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
