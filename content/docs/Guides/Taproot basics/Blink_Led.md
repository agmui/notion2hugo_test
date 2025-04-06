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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XREBZIOS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZEfLzcHxj9uVeSDsdeuU2IW6UFcmQaJOUUbuS%2BHB3aQIhANCDhLAQ%2Bl9zQBFEtV7Ioi76ljBT%2BrRHKK1eNL%2BCFvATKv8DCEAQABoMNjM3NDIzMTgzODA1IgxIKicNLHPKejMriggq3ANABocS2Rogt3znvLaN2IgftqFO91N492PONZQogINfdSNSarULnErPe4Whu38KENkw09XHGbVRvh1v4H0z6kGha9rY1ynoS77yMowJHJVAr9h%2B%2FYaDOEnXHYZ57mMOc1KF6%2FN0iqW0kE3zYzTx1TmF3ZhutU0PT35GotXRqkeMxqgczDluMadB2Ab7MHonyFgJcuGiKDbx79j7xrHe2e%2BsAvJJUnBaXUJAyoZkJVn7XqG2%2FJsPgREDwl3s9uCixiiYjzKPs9%2F7ojFfBpPruXQN1en61kPZsXqTDkeu8gQAbqrcDSjXp6U4AGtKUw2LfDcIIjIThuhUaXyq8OQWeTNY%2FASjq3UrZiGZjMSyYL0VbXtVJ1XNEfkemtw5FUJUE7NrN98qP8gx3JcpSl1bBAKTy91TEYb6UrJVGngLxb18gAYqgoz4yHdXhx9h73OLqe7%2FziAk2KRiKBA72LG9jHMKNbNsXXassRxDkDLcaBRrO1egCu3FiCEJAls%2FC4OIOVizcbpq3JIa3xKTrWKGn50wFRegw1vLiOlJDAK7vctto1GKUktXTa8iovKbNIFNd%2FxQ9%2FrIjnyHoQBQZWNVQr7JFd1J68faD%2FxdKupE1eWCe69%2Bz1XhonsUaBCYXzDZv8i%2FBjqkAbe7Des2TlhPVn%2B%2Btza%2FqRvnDiRXxk5nSUo67SPCQhXYPZ6McWSzQYv6NAHtWFM81VYpVBGVlWBMy7%2BUPFq6ACiEiGjku9mVcPTs89y6qxd%2FLOQbMeyTvDxYvEDbyQsppnGD9ETB%2FeIw1DPXATFR8haFtjIJtJa5nuugr7CRJ%2FCuwZ5jz%2FS9j8AxppueXdL7RsMqQ%2Bl%2FAPgdOTNIOkPmOJ7MIn61&X-Amz-Signature=e4fdde44a9212b5c25e18872bf5a3c14001e33fce36df91502826565eb04d908&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFNMK7X%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk5gkwCt5SneVg2IPlmAzD3Oa8CMj3nFv8BA7BxfqQogIgO5T6uYUHSLXbuSGl6wPF09mfUpWv6kw7a%2BQpdW3KaMoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCF59CzLdy4GP1CZkyrcA9GVc3MNWIgAGw0lPyI4W5vBuQbDuH%2BzXDaYHHhoPErFK96WksUJ7UlYmSV9tRNKgg3MmZCndjUwCMcr%2FMS3e51o51ihavVz0KXwagNV9vxeWcREY2z57DWBnzVUiyC5gXBJl7wYKgE2TJhE5fxqdn8ZUSp0mWFX%2FN09XZhMrn3KE5yUxIYgpyRRkEoL%2Ff1DWBuvRUGKPSPe%2FAQne2Ybvspz50D0V1mCB8bMFM8Pn61vSXRB5ZzUkwnAPTtZoMCwBQ9SKB9zaZ8vZ6%2Bz1Ib3y9fhJLkZQ3HobN4dOwLh7h3PvwpB8uttwHKlAc0z4N9GEJAKa6eFQnnPAilOPv3nuDCsWwwliIMV9i%2Bn1Usr3anJGdg2lspaOz3FJknfThOTrSzu9BqdcytLuBPbfawIpSkDGmkNJ9A4dLlmOHEr3zQgY8ANM%2BbuMUIxy9FOAcSyZ5tJFdcpAv3RiWzMbcNGcSm6Kn9GheKx0QPsgfHkUEwW%2BVS8nVHRSS3erX4%2BVHmtp8h6JNPAF%2FvWLXLZzmtuIHgPyG2auQ8PwX8QGOhnF76%2BZLAwN8nJI5F2QNomKX1b0nZXPtVu9kohOQoLoO0B6XrzDVLrEPGQbh70HdxPCQA%2BhPvGuEjBUtUo%2FKTkMLrAyL8GOqUBBkfpB0ekglPYo9cGswJlcsDtATpx224jFfw5Fb2R1hbSYtoN1lwpGT0nOFZd%2FpxuhzBTTsahdRxR%2FGvTsvr3vB6aYkpDZp1Kr1qboNPxZKwcbgnPxMENKk52kDSfC7yWyVIVHpp%2FbI%2F0RGON5UZleN6Sd45xqTgAigQfurYngEbmanV4wwuBDyEN7tdDAwL%2BQJ79xYgcPXM%2BKbTpa4J0uVb%2FsO9D&X-Amz-Signature=044f413bab45c3f73c33056e4229a73d9bfeab0060746bbee3d1fad0a36a3632&X-Amz-SignedHeaders=host&x-id=GetObject)

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
