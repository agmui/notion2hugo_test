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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR6ATBZC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO4SS0UGUPIRP2RxhA5yG4c%2BRIDEyddoNjkkf6OC7hPwIhAPE4eAwaVFs%2BNr%2F4WmJcHA1wjnrtuHc3wF5mFVT%2F6wkWKv8DCDQQABoMNjM3NDIzMTgzODA1IgwOGv7bMvMQ9eHgflAq3ANGthw1PMzfps41Ss%2Fm383R62lnftDHmWmZlswlCb%2BMDmqLGsW9vSmVw3vmCy7Irh0PnNxxA5CrnpSfzs9T0PI%2BUenGFOASZpdpfL74gTa63wQphqaq50W5EObB4MC1CiMQfNp7WcgYV%2BvKJB33WJ68mxCJiuXvZKKxaa79spnK3lbChgathyC4mRZHpkkmyreaQUlor1o%2B4crUandb8PxlqxC6zSRdxDrgwntBLJG1xgN99Vr%2FLjIsSlJVXKBFm7H%2Bxram5EJkhj6I4dGJfuiTGW5CNFUsJ7N6%2F2KQpj9V%2BjTSevV83BRWKfZRIpZti5DHmBv0HgUSkNygwo7b0MD8cPF%2F6RUV3Wv1eMSWr%2BtDvcap1WHq3UZYaq1PZYDLJ9ZtRF0RmqKX5dH0uxI54jOOTo7qUBmyn%2FVKCLrGjrn6330FbVdZHnQ5FESENkwx3UKkGbqtmBWuo8W2G31KmHdMkFPOqDwD2HKvTQSua7ijD1BNr3gwTgFW%2BFCEQV9CiS8ppU9DERE6SI2rt%2F63xJACFCJIONmP5Ova%2FfrXRFNVBajqr%2B2Lq6ShOkA8VGaPgJLbN7SYYNPqcxn%2BNJDnSsYf%2BAg8Jh7%2BwGEQjV8FazVvCSP7eqk5vQfWmsLN8jDK1vq%2FBjqkAaG6t8basxeyJL3g0OavOCE4aGxXTUFcIidsDPhpfb%2FBHGi1rVq6EqgcZRfWadeBNl4opB85MShTrK2FQdA7XgeU7ktBe0ulFNZ0JtvUm4%2F5lumzA5GY3OV9aBIB2x62hFyqANfmRPDlsp2IMbVfzM0w3mKDYj%2BdpuJk7eBW%2BEEViPg%2F7Lvierlot6D2lDyFDrYRFyLo9aJCdXVWF3jZFXrpfMd%2F&X-Amz-Signature=ec270116b80bb4014e5c60d4f5afd586a4614e0a2df17fd62eec25aebaa0e335&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SIAGQE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChrz%2F3H%2F0ZTjgMe4UVRnNLNETPI%2BmHpPn5x3DMwUHMjQIhAO98c7XWtGdTwiILul3i649hjsi53bRHhj5XxjJpfJtQKv8DCDQQABoMNjM3NDIzMTgzODA1Igy2GlOBPLef6FJYPvwq3AOppBusIGYyuAWK0zOOsis5O2wI%2Bfc5KPC8PGxkOKafXiudaOpTi4d3i8qZUQSzgzDcCH%2F4FvfinCPRMqKnyTyRu0Akcnrx1tKfh%2B74F9OWd4Ka2J2YHjGw90GnL72B58YnmFKzIoUf4u8QLV68JOC35%2BvOp8%2BeybhR6QUpTiTOgjY4YZR0OSyovLIzyiXiLa26Ow3K99O7YfmvkODSz6%2B8d78haVIKBLHv%2BRVryL18%2FtSJiMa3ZyIk69N2N0EnxmBz761pezBshV7wPDjP3UXf%2Bmqqoh8mGNqAxum6%2Bop5GLQvTFUx8Apb78MCxzjR5BbBcLRMrTzhLL0ZA4ZDICxyF3HwvOMPC6Ag0sPYb8BBFsfFsuh922Nb9PP0%2BKV%2Ft4UpBJy0gLk7qGjyvwPG3SABUUtQ5jzRajWs%2FWnmTTjfQ1ktewmwLGcv1ZGExPh5WoilEZi3qe0DT5tPUYfLfyqHPRSZNWkRKM1Qa%2BV51lNqDD%2Btp1UOzOEsKxBCypRsvrcWysSHMqqKLHn82eEzKHZYCqnCUTYluUDxNGdEnDisECnsCbi9KKI8g1kqHSzEQJZye6lkfWG7t3ne8LqLAmXH9T%2FZCDP0ocpJVwEhhE6s1OyAfZs%2B67%2BdCMsLMDC24vq%2FBjqkARbvNLJHE%2BeHGrjStS5Wi22Vnfsdc0hGv10TIiIKnkXL1wN8qA%2FY0Axn2Y5DytDXOiiNWHM7CCn7lol6mbXk9okr6Vh9HllC1CY5dIyXDJQ0g0%2F5D5yJjxhPCKcTjuq6GTRfV5%2FsfZBCQ9R%2BOq%2B%2F%2BVdo%2FPn4ISHQ8NZnN8QQDWy1a2YGYr%2FC6wpUjWbjG2VJNCynxl09Ei9axOYxrP57ebTPPVJk&X-Amz-Signature=9007ba2a5c94e49c3f2cae2d235127e62ea024e8c5f47ecd064b1915464eefcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
