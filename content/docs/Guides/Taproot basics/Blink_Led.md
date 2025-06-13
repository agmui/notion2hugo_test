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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W32TZDX4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBuTHsca4uVtpP3pZt0uZXDv8XI9lybENmEKOW71lqvhAiEAq43GQKJEQHwYR05XxKjazPpnrn0Ot%2Fx7n8gP70e2JYcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXUjpoCbqjXfxYkCyrcAwrT74MTo6DCv2nYVz5qVTeJ37%2FdES4qb7FJ4kaH9l5UFSvJ09aR2dmlIRpwM9ZjO0%2BE%2FeGNUDY1IgJgOPb4t%2BsxAdVxorFvJhnlGF5TBHMQLOOnMdp1wuWgwDJEJ749wiOSOJHzVDbqP59nqjVw0NlganUPFGsYxDLtORpSSYIL0jJFlPTzHB4ZldgIZefAsild8Ay%2Fc%2BVoiV9dXJ5wIbRWiq%2BeBJVCzIt78GL%2BZ1UUkh%2BsAHe9JgNSW%2BkTO2MpHdJWyvshP0mvhQe1PjTBdF9%2F3UsQ3d8lFzN3LvNPNM83E6CVS%2FgZemvo6oboFwZ0P08d1ajSdh8sGUAnejUKrUxbuKJ7F5KShXL1sBH0cUZBKqRZ6gjk1JnFX48FGjCXZ2sm2FVC7Q52XQkzdTeIGe2h2XPA7YiR9VIGsCnMekoF6p31d8XCw%2BHDEvWoKWhP4HIEeDDoi70Ja5jhAIGqpU4Fp%2Fmmdxo5vTYgXkIhXyULoq0F9dp1p6Md%2FsIppszZ2hxWDHDIJINMbi8z27qJfDGhdPoarZ1h7tiR%2B2sOzxFwr9Rr1utCnFFaqjCNBQSsOUzv4J7UpqWka3Pj1OlRG0jah7YvmITkJRtQf2tgMjnyHrBz4QEOHXSfHhBSMMW4rcIGOqUBkAgifTobsVJQhzP6EwRh%2F9ROB1ygvXJKsSNyvQ5LVeoFjLd4KpFXeWHwz9jjV%2BI21N%2FrUWJUd11GFbEYNL%2FIClmx1Mr1kvHRExbBx2VDxSC6Z6gGGp1o1uTu1qBvghK6HezU05p0VsFT3QD5jUj4FAaA%2Bat8Z%2F4hizgI8BvnP0hjxu7iUACRy7WZaHywkhv5fRJ2UqHGTWn9zFbGQpt0Bd5XDsKS&X-Amz-Signature=14bb01cab38d46227ec04978f7538b894ac9f420e2d7081ab25a4c576dda9f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAG5SHYC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD4Axu9c2MaKvtSEYB%2F61TsaDLpNH%2FNYegBsA90y9xLKQIhAJLHmcbjy7VQmu6rEmjwUmUgBCDnzC8%2F9K5Zlm7mOQi7KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR6OGWwcqtqInnMnYq3AMshY1dTlFOxhTFKrrFDAv%2BMrOmwDylAVpWlZJdai2vfmFSep8tqB9saeFkaRe%2Ba5hUs1uaPx0juFx2QjvMS3PY%2B67kbIHR%2BFrDP8rwv99OMyOPt8I%2F4Wtef%2FOP1nPm8QqW5yLN%2FUqL13Rangi6UeSZCM6XqJiWTErKz6OFS%2F5secu2EZolgXo9jvwwi4rmnwlKBJX29qBYHwLuxBJiw3KYbnDZQDKfo5XDsaEJMiC%2Fld57L2lojY%2FyDDWMRZu1nUnbcg7%2BRflN9VN49YjbwSEjFfQBUU8GPt0gIavc6q8ZOwmZJaYeJLRuRa0OMzBoECUTojxZ1%2B8mxfZnSzObcfu8dgixyie1rdFUPucLBFAPCAVHUT6G0uKHr5oASVs5sf%2FKgraWEF8oaIdt7EtCoPXOuNsUOKd%2BXE6jnEIc9cG0y06HMTdUBfjgMN9xAyXFMnlolN2js0izDUG5cjIniQDJwpFZs5BeXYdkwzsTylbEbb%2Fd8IKqlfcpAzLNm9zLViD01RuEygNSyxHEWfv3JUl5Qc21FDhpt9ZWTSI0Y36S9%2BrEnb9sFCzzKhkNHnmrTAkLEZ6PLjHclakn154IB2tiif%2FFhcU%2F6nxsHa0%2BSVDnYhLKO%2FEYdl5IIojL9DCyua3CBjqkASmTws2AzlKkMAZr4F7UYDuPexoN25XuDQH3NVi7IBiGAFeVfMY1GZv6O4K3y1uXw2bjB6IX%2BQPbcZX1JhDvrMkX9DbFUfPrc2A99CriRqWFIYtII%2F5B2fgwxilb%2FU4ySzrHVNH52SIPGnAIu7R2qPX1mK6eD8xQWMNN86XfzeWplIYsDFG7SdOmRXxNUPIJBq12j12cuJnZ48hDDXTCtI0loLWy&X-Amz-Signature=5287c930feaa1b920af8a7088054e5a9dc3a013a8dea27a7caab8de88ff18a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
