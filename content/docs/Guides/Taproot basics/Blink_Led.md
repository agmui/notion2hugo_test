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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCRERNN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1rY1K6uUll4rWXwkaQgXbNa%2BVT2odrLK2M7Tsn85JHwIhAM12cqC83%2FkVg7LOqn%2FayVB0MBFTXNl6v4Gfp1gPW67HKv8DCD4QABoMNjM3NDIzMTgzODA1Igz4NwyrjCopRo1zFbIq3AP%2Bn2dJiXHVcvglStMCUmeMXwYZbkkrNWV4yoST9qwVPEV%2B8UgoQKZYr5JWKmRbCLD93ocZ8e9yNCpke%2Bwt2cugVgANV6R0QyXHpR75ha%2BhoG9DMO03FbvqTeoaUW%2FzW7ChZmXSKCYwBOJCm496RkOLx9K6uQB4O1WmlJeRFb3Y32rOM%2F0J7F9PDVX7Ye4TkhOVH4FiGsw1aZjqG6c7LK%2BwfovO8smNR9U4JXCw%2BZqSkHHz7rt%2FbLSKLckzOJA%2BDbx%2BCaczMTIX41fJnriy2P%2FLaC1P5aVGgkjSalp13Z1e67f3t9bEzczXm2jgCnDSO37ffKcHQF5t%2FVi%2BkgGrOI91BdLq2sHn3vwVyQ%2Ba%2F23U7%2FbuUsD9SDmu3J5CZWuRClX3aihZPhuwqQgFgRTsfbXdqU%2F4lexmezR0pnatDK6ZJZNqNnP7UYsBrvyH%2F5t1DssTqpVP9znaS6rw2R%2BrAmxGGx7SKmhB57xwCgdLjAfdz8%2BLD3SS%2BsEfVnqF9Kr7MpUaQNI7zdcLsLeBU7YzTcBtytdi9M3Ls%2BRRs2ed9vWF5dScZO4FgVFMJ0wD5kWD%2FYXamzE2yR%2Fq%2BJXWQ07TORaqcMVK%2FQSHqHimDclIN%2FcFSlyzuDDJTT%2FiusRGJDDTyLHABjqkAdlAjmo6xLgIftvCbXZbGIc2YPaljAP8qp98X9xoqw%2BQ%2FUPLVaGHGe5gS7Ev%2B0orXIrna8F4hYwTAhHU21HpsLUtqtoQm2talr5AURbF%2BFTPtKaW%2Fc%2FCa5B8qLXOqR3bUQsPGOul5kblJ5%2FqAQZfINATpn57F5LL4HrossIh5lHltyCbtcnPzOiZyD3LUMrePrh6wdMQ305cVNSEPhgXvnrRbNwJ&X-Amz-Signature=c65521b15e3649293a8f09e877cf0030e952b5af821106bfe99ac05918bbd4ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KPSGZDY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrNiV6HrJ4JmQiGCyK%2BDV2D2NaUnoROHMfT%2FHh%2BA8gcwIge0TT6NTauTrEEASM7oFMx1ueeCqC5rl1ttHq5af%2Bhuoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFAxujJMWavd90rMVSrcA4iqRaOAJqnA7uYwM9lxgzGy6tv8Kx3RbeC4DZP6XE2Kzm2%2FiV09Aki%2BePfyREXXR3RZOpU5GDOKVCCrcH0E8XhfGI7fs5Dq0wYyLYtfG4WNi%2FlwVcOmuEV1pPlgGuD1nu6JAyLACAFpu0OaM3gGYVUvhEGY9SP8DDnadDtsJ0jqVo6E29fNYz4kzl3k8ve5PB9txYPmYrQ8YeRLxy5gWu4ME0yT3IQF5HYWUaD%2Bn2350zZMqG3vUtsg76G64ViviNciIYAgj1SRfqk%2FYLVwO%2BeTXXXqraWD8Q5GmC%2FWgVwxXoTU25j0SA7N5CF93Z0aGjtVhb8yDRZ3MCyYY72M7Fl2sw4RrcLp1NhlMknh2MnwP0OPIo2ZhUwAoMN8WTr8S%2BNpGRS2VyzQIXKdotxDnubDINhnKISTOYY%2Bqf%2FWCFM26h9dx4VdlVK1Op4%2F64ercc8ZK%2FyyQDSL2REuddUb%2FDJxa9s2XOG8KPvzCpCp9F0qT6QBElBQp0tD4Gyt3z3P5y1ajMK5Gcv1tlqOkRIXNpDUcKFNslvbDTMInsOCGPB9Q45Radxe9ubr18lSfDFs6qeK%2F5y28FG9rjXO7K8XGbn4E%2FJxRYNAemeBaoRlsFgKao3pxgR0flg925LrMI3JscAGOqUBgdv76uYiXV%2Fv4SoT2n9wvNMl3Qd%2Fp58mKENa6s25IKWwDC8ClRa1uhDYOAWFnvEcYPkUy2ga1QUmNn0sHk6kJenblw8sfd0N9jzduDOYOmLxHgMaIfrMSNnVagBH%2Bhercn7Cg9awGzs88ZuFnG%2BdleIg3RSMRW6YWUsFibRRlg2uIS6Lb4h8CxefI4BFK5Jy2REXjEIDDlCsFH3nYXWF3UjpfS4Q&X-Amz-Signature=1a6fed172f1fed0e14061c05cec6cc502049cbc80b91a084439a54b8d14a2ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
