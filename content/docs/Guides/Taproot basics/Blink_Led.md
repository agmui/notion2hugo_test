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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRB2PF6R%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASS8q%2Bgo%2BbJVckXReu%2Fslfp5TSp2Xzfn6uTyXY%2BAEmyAiBNFoJP8Zqk5bHEfFJR3EN1%2FiLrQTfEr0jmEs9uKiCEPyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvc8uTIHulAdFtlvRKtwDeD1n1vGsFySZxWYshE4YQehOaJGZlTQC8rnmL4ioSWlidkUgYobcKFouZKjLWQg2sclI4CwhbxjnAyjc09rGKNquMlbEMNVVVTSCEt0VIJNZl8qeg0650zMT%2F3zboH5CMetSCe42Hh%2BPGBi3mJ3b9zG56DLxZJzV4%2B%2FXzlkSU9RV7%2BSxZ4ftD%2FuL8nCJ%2BwjAlau270cr77ERFDVY5FBx6p0RsZjPGw1vNYrlbgokBRjjBH5BmIMBeQu7VlutJe57ktxPrKkE3jxhcNi0qOhKwnDdObRJf1bT7Q9KfqpWrobDx56f%2B25RR7LqBTIhGExzlt9T5J4I0SZ7rOvy2zzlFYbGR5qJPZlxiPxWalRvmUkd7AGpYlRGQ1CNIKCMbArzLD35qeB7b97U%2FW1oy0LwkIyXwrCOEqCy%2BwNdildZfMYxGkMZ7dIcKJUwv0obv%2BMEiLBhi1BqZvS0%2FLqu%2Fw%2FhPGbcSNvkJjv9ed5Vxt%2BEtKeXTgDnvplQo1F1upB%2FAG0Gs8PQPCol3TQN91Xz%2FwJQXL2MSvdj1p%2FCQ37Px1ZJAl9v3ZNWRdfv%2BTP1fREpUDgxOeiGXU%2BZqQvIfmY5LjYQZiKgim8YR%2FTYvnlABtfQD1O5XwSbzmmeq%2BDIngQwn6avxAY6pgE6pG69EaimtkiMOyan4uyPIsYaQS6ioYf%2FXStd43g3yn%2Fal%2FrJXR0kPbXHzR3Tyn6nuEoYcjbiQ%2FRnZldofy9z9Gw07kd0cwpnRJBkFOyyyXfHGxAwB9oLrsJQAbRxYIt7wci7rsRnERLfwzzD5S0tlbs4F0JqVP3eZ0FywnKKWevovH3cFCuXhaQtAWPk5gSvY5tiyoYTMg46UPSSmPU39Tozz0ch&X-Amz-Signature=02c63c1adb8a804e9fe1c3ee48f8a71a78df4259c11bf733ee83000458504942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVW2ZDCV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxVPNvjvQoI0qVeQo%2FZEP6MAann1QlTaVmL5HiXrIsvQIgCns3o62OCZJAfpaJDbHEdHD927JP5jAH3DrrK1Y%2FEpoqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbLdaslhM522FOxZCrcA41Jslz6u5Hn%2ByYs0qkAJvvLvWXr70FKsVxbgQuvN4FUYNztzKgW92NvPQZZm5F9nGaVD%2BMYaxFtaDbnpOEewt5Gexbz9U%2FW7g791TfaPd1O0Z9vgHcBd%2BVKkGKC0rS6EuC1knjTVK1QIEVN7C0qcyiHIE17gWQ3KM%2FWY08JDw2Mlat%2FOb4aFu5CkwIwDV9cgYRX4xiqelS4nz6QMNubpQbXcG1fzPA%2BYDPdmRAGVjfQQ%2BEwNC0Jb1h8hw0kng8P0hIQsz1O728iJWu1%2B7%2FUhHNWutDA%2FQgO09z9GI8vzlOc%2BNawZs2XtFMbnJmAVHuzupF%2Bx0njptHXwrxfy%2FiA%2FPfPOPx5GoZz30htT89656Nf20Xe6gqwU%2BAjYOAr7y%2BRv%2FC%2FZjjh1bwZXazVzcGH7TDXTyJb0%2BXLGyZV9cHPPb4JyZBLyKTMkAWeDlWPgTXMynGb1U7z8r6a9RC%2FLcdnRWBFzSoN4UGnguT8figE3dnGDUMxjlVYBYrW7x9LJHnUkWVPkpQ9VaA8tsK%2FlvmmOgpQwaTAJJ7WdnQHN2t7YLP0mgONtl%2FMrPjiwCJGJXQ0zah2Qu8%2BbAkLIKXNye%2ByKfcILJtQgCxQdiqKad1zOgg7aql49q7f5WnE4enGMKemr8QGOqUB2ylps7oUO6qOGkdHS5QruCdkmIuG2swhh1k40y0K%2BVmgBg9htf%2BZDjqRmSSDr69tcVshqLqCirmBRMLLOFLoXNq8qOQWX9awPPRSbe6qJSDbpUHjj1I1EVEpDxwLlzULZKdARRKyd4hBDpxlEpSBqqzh4yKpeci%2BFLUp419Ux3khq6HZX%2B6Ria8qllOdwolPU6WmNlCijdg6pvwBiMjbseLiJb45&X-Amz-Signature=6f89921c69e25bc4217ba247748e0051f65d8481f44e33901d1c04dd57b4ea5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
