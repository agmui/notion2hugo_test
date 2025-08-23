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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXGUSPWC%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNOeyaDtMhvZ3ZwhD2i9VPBvDb5%2FdvEQ6u2b75Ldnq6AiEArmEzEXuW0mT4H8EnfxClGsFcfg%2FP3ta4sCMhgTucEJQq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDB1YhTQoBvi%2Bu30hwCrcAwxEy6loy5osY1McO6Ffkhtva1K135%2FyT6uaBdgqAAwdrhWcS9kOQYOmYpMhL7gTS91%2F5yuGiqHsazvOEq7oc9FwHy8H4Wqx5J4PENz2PgGs489IBS%2BgDMPIhm%2F8wmQvEO7%2FXYb%2BM0tcBNirBQQ4mrGRi0YnNyAYDIIKhpsIkzNuWCVmP1Pv4%2B4882IDkX%2BiiKRTbszKfLqfKMjocY8iTlK93AVDf%2FuGSQUzg93Q8YBTnCj1PaYZSJF395hjN5oZ4QcYGoHlrOo06LNb80DCLd8W7JmRC6AbCEGfhgZS8aJFo17tjyb4ZM6AcGA2LYW5P8pPLloHDllevXGVsOaB%2FTn4WqRXfZZtXH7l38zTB6FUd2bcw0RRzwwHqwwhjbubHkTt0krkBeoPPtEa2V10kuoQagOBOfcsYPprE%2BL9tL3IjJ3V57sQn0Gaf3gSzRTuylGiNAFu9K7lygpyGdiQse7GCfOL6M56gr%2FVIaNb7bcJLcYUV9FRRsb8PVTsE%2BIeyPKbQMIClngDvTNih6%2BEUqn3WbAXUpFQKXvRMSwoNr0%2BS%2BUMjDVhB93nE6pY2YBz1LslicvTrR07OziRuec977aUBs0sDq1J88jTzVhbUonGRCD0nsD1Qhg3%2BjLWMNuOpMUGOqUBMygydqi3DNgpk07KEyIXvwJ4kbJo5YGz9BS%2BBDh3BMkpgwH2OpmVkRlerC%2B%2FGtWBb4AF1LcgzUlhM7ZsMvu4IF6ZCvAj72rhlpQmPiKlBzP3D7e7x8RDSVTDeqlWnNqJjVLwDlsD8a84BkDhLZO3v411jPEwqWf52l6yWFcyRAOr4f35ZXVoUdyQl6x0OTIDHqJ0%2BeVucssGLAZdqX5DwJU6dLRc&X-Amz-Signature=01176d08d40fe86dbe1ed53627ba69b8fcc14f6cee499050fd7408e624ce6a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNEAX27U%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9g8EJNX3HGS13nkgwy11zEna10%2B5rc9oqrec3V8OPpAiA4P64eIMTAgyebsgyLV4KfbTfGvCNCnNXmDCXGynHAySr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMxa92I1FLjHGBcxBFKtwDFqqrY7UkXuw1ZzRvnYHaQvzhjtYz4HC8oZMiYt25TP60A5T5FTpocNYPC9SAHDfRKfF3HobxUYydpyeuQEMiYdEtUK0vtruotNCg776tHVLVIFOSpmO2%2BUSpuraPT63HU60Po8WTP31AYP0VjZOYIxqND%2BtJ29IuHH3edOGjlXMyhwB1Smy0UUZ%2FcsqZ7zYpyLrbkWk%2BteEq5d4i0Zlr0knbFqaSyObFAQD89l%2FBBYmZ5dknA7ddzLUHJxYauz3y%2F6djFuc9IPcRxw7qQWZsdA6P5%2FPmgGlLwzpH1HNhBG1%2FhggQvwhIjxgR5Deat1YdS23VWrKqIn6nAuHNYozJAt%2FWBswOekUZjG126RO61%2BwtytMYNVhMFEaIVaa699SU0gzPVhN4We3ZKnAN97gr%2B%2FKq5D8OnMiyGTWph02T71Sh2GO%2FcYI%2B515mKVa7Aprr2iaZs%2FtLclKwnhZXTFRPUmgOIQ6deA%2BUk45MRU%2FlUy2GdDOivOBARUHX76Rt%2Bvhmdwf%2FujLky0DeatMaMb15%2F8v3btyIRTmsxJET1be3%2B120Cq8UlCrYeaIJ1Glkefjwqc31Ouqz06LStRRcJfanHrmHX15o%2BIC5tu5t08ydC92JU57KtPkaJ%2BkV8t4w3Y6kxQY6pgHi0GiyjwKdu7axzxTUNgaa%2F06El2MgC%2F80pD1IvZG7DSHB3uGm1ybKxJtoKUowbRX9YQjcn%2FlFK%2BD5qIxWA%2B9gnNVrcdu3bcNobrh7zbh%2BOUvXGRCExHENy05j0YY51UNmE8iA8g9a0vtoN6Y%2Bal6tb7vEG4yvQK7YWxUdILm1zp1TrEXJrGlR32KsikuBBlsd9qsPEDubtfds%2Fq5HFEKxV%2FWMgfVU&X-Amz-Signature=3d2ac16076d986117a4c21dde221b5c433e80e2a6222dce8eca987074021077b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
