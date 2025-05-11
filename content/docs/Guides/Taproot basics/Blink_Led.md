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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFYXA5T2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHOyf3fz%2BNkaBotRokyuKpDi5%2BCrkDWQahLzFJrMZo0VAiEA7kl7C8r5djCtDxT58Rqvu2gd6O3vNxcosElF%2BmzLcPkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FC7DGAhajrrClfwircA0GrzzafhjAMriysCCdCfGzPtfnqHT2Zg9%2FGbrBOBuAE7G8TIyy77DkYi0tPTYdWC1z83t4Zv8DFPi17eJutYs6f08Xdz0v0uWLkub3PvRnM3T0%2FLGWdwx%2FNwiuCWgNbBRs%2B9P5rGTjbb74CQIMeWF9k%2FP18dbAMid%2FolOkxq%2Fsm1Z99zRF%2FHOH4uXRLOQfZp23pUWsWn7UWs4qeAIy0of4RjBmnyT0EQOIzH0ayflXfNCr5nUwJNqiKfsQpChGWktx9BMBmEr2STcCEQyEW%2FsRNTlTqAgVrjuK12cKAYMZLzUNULURai1CdYJyYwNw8jB0V%2Bs8sxB5dB8HLx6U27E0YV6%2Bk83cqnrztNUFvNgMeKDq1ZiSLkhC3f29C9ERgiC77JigjHDv%2FOHoKuaWd4hIF9WVhR%2B4pVX6ZUSHZEge%2Bs4QBOm2nvlw5rNNtKGEYdDSk7AsyHM903xHs8qLGxVPBMAJnCMIBkQWyli136ak2hQxJmuqv%2FHrxLgwYprt4MVIL%2FMHrVvkhDXRlDNkYoOcTNW5qP2o3bauhY6qR6Mu%2B7%2FEXVFGUAFq9Qe7lN%2FafeZM4psRdHRwzNORN6kKeo4ZjPXT0HIA2dlPf1oaGPa3pOtCRDSBHFic3qyWuMJqhg8EGOqUBy7pgbuanFTmAkKJnQ36Fpl2n5zjuDnTAIpF1cRvIB%2BAeiADkssuAsWqUCCNdIUWupl1A6G6B1ef9YaRCSbpregXb7IOy5BsBs3UUDMjo2LUKUPC9wXxAkyrfWe5HZwzlNXWalYMgew%2B3TKzqgty%2F%2FGqf2qgQctU7IN0n3gPJ7jI4VfpFsW46wZSvwwAYTwF%2Bopbr4VY20uxJWYyClnFYESj238Ak&X-Amz-Signature=466aed5fc75b656773d875a01e500910c774b5a03caf4bbc7ab104c58f70a711&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQOHTHEB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDjVEtZGpl%2BAO6toMrOvJLbqJrsLpyz7oQlDy3gXn1DBwIgEloFFOpf2QS2wZkeY1f64iLWtVwX%2FbFCoIy19n1yFPoqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnGLjix2yrBUQKMZSrcA9ii7BAfx8Dc3N8bDqozgolcYWOPaYW%2FJaUolrQeTfm1kEkXc3YUNcsxVOJwG7xRpyB1wW1ZdHidE5vHKfAnW%2BhEo7aVlwmh3JnMjwqhoaNi%2BYrW84msyN7jp%2BNsHSdl7sIbRCw%2FOEtcx%2B88gDacHC7rqZ2sZmqMFyKDEApv2oW1OnnqtDJHRIHcjzsRs6R6Gfat66HurBQh2EZ6VZA%2BGBvRFBwvYv1m7uyU8XUsEUky2V9gBcbThdyL4qYn4PXklT61bqMkl5DWg4iQ4jqiDohAVn6PO5oiHSF5k%2FZMrRx8odZ6MiB56td0RO1ZC32SOErFfWvqZUZPdfXOd42m%2FZ7y4%2F3F0bx3xgDVI2eP9km0cElXQkDuID%2F3fW%2B2UDlrEw%2F2X6r54N1Ec3g9HqZkKQJ5ZZQ97U77mrRJG4yiTSMYMekTll2uanJZOJdB7yuOBqasBCe%2FlhAR9HPoFG3POZeA%2FAtINaax4C0nTTKdiaHJZTzhP7l68%2F6B1T0k8ztZVHjoPszXciYZF8nZf0h5xDBvjV6MF%2FZE2LA7ei%2Bu6fg5UxCj1q4v7LWH85Tw%2FgKsmTbVWdn%2F8iKXVY5DLIdP4ZW2VA57Wx%2BtFjfiZ%2FDaLBFSMEESoQ5wf8ZsA7%2BKMJ2hg8EGOqUBZz5S5%2B5Ag8B9Sds%2Ff8KscU1XUVtLDUmdVQmjO3n4WChuU%2BKeys9y828vb41BiIbH4JS2%2BR8LKqf1LDSmiZXkyRnyrX1ARIs5xRfE%2BQiNg6jk2jPFlyiPyrl%2BsXtJk3N0QVR%2FGWnvd0ZduJutrr7yIvbtvhyT9T9YUizmnb2D%2FfYcv9n8YK%2F5%2FJRlK%2FZRwchs6mhfZpfAuGHwCZeHp1VZlrDNpWZB&X-Amz-Signature=38823ed75615b2d3c89b8d2edc86d3827f9aa44ce9f71ad3414fc6c257786d84&X-Amz-SignedHeaders=host&x-id=GetObject)

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
