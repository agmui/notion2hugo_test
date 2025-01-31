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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H5JRD7B%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BXFFshqd%2FkVzGQ5H8CGSF9CRIVTn%2FNtD6Y37kZ%2BB8VAIhAIrQ%2BTgmxHk1lH5id6fF4mE3%2F1XYVHE%2B1EIjgq8NSRCyKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo3YCXf6MzsPTpUSwq3APVUN69sqPsrd5m7P%2Be2MKgkUMUV9dOFSToRUpRMZQ4bKWJ25bLjb7Ojn%2Bil3Y%2B2pW2Yz87FNgan7Ia%2BLZXUiEZTYvZ86ObPpn5HDp7TU5v%2BXEoCLy2HpxD%2FEgdIUkpTMjRJjdW7rp2aJU%2BIDIr0EbALT5FH2RSXDrcVdosr3Jc6WehJNdM1JRJ0Dkydv1%2F6JDfELnTRcN9Bw9O1X8kAEKi3yChDjgjuGYRoAQVUrbe7X1jLLkfQI26O8qtTr0OyNwpampVsRXSmpe%2B0cWWXkUJGzzvLYMEpJeLXtG7BkJ9Fibgf4g%2FTfeU%2Fpxy%2F58%2FKOmVXYVBcZupt1Sd1EKeCoDKORkYj%2BSO4jpmW4Yl0ICN1xRsFlgtx6rIzg%2BOn0viR9l9Gm5Mfw1uo9hiy%2FwSK3Wkg%2FC0GHgNwxNvHMiPCpfl%2FwKegQICcKk6H6Z%2Fo%2FSsCtbsb3Ejx8NoVmT6Fl2RtiYbDHloYwR9%2FJf3ir155z3mPW5svnMYriT8%2BstYKhTUnD7sDh4Tjtj07Zv7Q%2FdBmQPtH%2F1VU9gJMmnzqPLtWyHyvAYwgURKvdmBKn7WreSVMSvQxpPmz3%2B81V4QBYbBRrl5NXqy2o4TS39kC%2F2rgUXynFYWECmsorfkvgNvGzCqnPK8BjqkARd0S2MeXNTV1JHCzAszMSzcsVyQURzCaKnJJUcPqC4eVwSqXZRluLinEXCuK1szPFr%2BXw3zK1iDwmcAKBfgW0qTsOcYrDZHFaUfjHjW5h5Zy%2FLQlwfgXFPaXhTDJWQYRzALXlzJejuhdQuk9BT5PbutHFfHj8SeVPxeND2KeQRsgcm%2BPYszAQlO92xV2QcsO%2BQ1WmUmv3pc5qIC3JVJ3jLAIOU3&X-Amz-Signature=650ee16b53d8ca3616d43d6037ec4e9b3b6d8a909fd75af88a9e1bc5018ce2d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U27Z6NSZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPQ5bhOwT20cy%2F3nozyL2ZobDXjOV5vwpEW839xhQ6QAiEAoxivv3XFu5aSAQWfzwiywxjMaQnFJhs%2BW%2B3bEfx%2B5rUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtj3xzr%2F97wyFnl%2FSrcA%2FwVsh1RjdUraPeGd8rnGP0%2FGuZme0Vy0k319UIlIPHM8Fe4geFunsA7jse5dxFJgtRTCWAbOiGTDsdxh63fPMSucGsfHHo4ySREBVHBpnC%2BXTiavUM9a13NAVMH9wiCBz9RBrte4QLYskpaCQL%2Fk3FycumAt613QvYNdNHsz8n5YV%2FBF17fYlC92Igy02G00lrocsUcTpubfyIO5K83WnKT39tOkEBQKDEDO6kGMWceDghB6ptJQdKldCpLkgkjJYprioBHGzKO2PljHUJaICCFTp0VJDP83h43g6O2v%2Fr%2BIPSYnwnzwdfAaVfMccvGCI7D5ctoMBLijc8D9DmX3UfjQkfe%2FMnyqQEfA%2BYZgMA5SKEGjTfJQMeHDLkV%2FPR%2Fm%2B%2F1PoNf6FKeZ1R6zKbJjdP%2BDhKpUSabEpx9fNAhtVqap1jmWF6vigec%2FiCax%2FblltlyoKxDiJ0MQw%2FkQ5%2BSgX7O1XwyxrsilwSUI6U2wHOJQxH%2BOyaTHA1px%2BrU8VTGiRLrHFUnV%2BpsyT7ZWaz4%2FhDXz6m%2B7LYN5dfMw68qoSRQoaZ%2FnsrjVf6FRV0yHPtKujOC%2BiuSr3A5ce%2BSuky%2BU8UjBCuxSiq%2BqM4FsswqjheUQJjqmnKm4pOuLXoHMLac8rwGOqUBA4oIyBZXY9vvO6t4ve%2FGebl0E64%2BaRuoQogfiE1GGlykvup7euQwttAHNqL9vqNfJGf3dVfqv9A6ZCOfD%2BBD50En96q91pdfWl7U8pgFTGoyCssp7FU9FMjRsCXTyUEvCAAeyDYMWWPoOD4b4SxAjtnb65s0AFQ6htU9g3P4OZCQMwrZWVxnOcOK%2FHnUn1ekMgKWnfPoCHUzO%2FSaqLiv5n9eEdVj&X-Amz-Signature=a2c697af08393389a713389d1544b684c172058ff666aa49d325c2347fa8dc4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
