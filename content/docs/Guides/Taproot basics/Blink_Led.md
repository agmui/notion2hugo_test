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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75WHZDC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC64fgyBXOAKv%2BaUrHuO7EV9ew8IjmziAXn4SN39RjI3AIgW%2BJ5nb6TxPdnMDiFUmuLfhPzvSAjyR6lYZxwa7%2BoJb0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGgejqYXK7n096%2BppircA2F7ut7C%2BbGAXfvOvQ4xPDGUvjiBQCIgDEP3IeLR5Vpa5FaYLu5YDtNfMvuhm7Aug2QlRWujX9NDQO29Anj1OMcYl4GlakGJaHzcYcgCS7DOURlgo7s1U3oUt2eh3mlu%2BhB9WZtpnDvFFyCmDNS82O13u1QEhzffNjS2VSenqs9IZXYbaiHyu9VpjzN%2BIXHKkdgVrehUW0pTYJdNWyW3C3xvdqYwpcKWYTOZBNbv3iKCKuKlpSPGOnzSqiXJhklKtu4LnbEnKeMQ68Me6tp%2FqaHF2lrq6NIwCJu39C9sM%2BXLh%2BgpoSRRqtUGB83OowPQ8E16SbcL9yeC%2FfvsV6OHG4BuNL9cQcno7BBAuU9n%2FB%2F0ntlBuuavwYcpKQbGmdzUVH83e6g1e7RAWshAn%2B%2FPDuhLGItftpl0AHAn8JBrRo0Sln8iKDXoOmL7M4Ae05gtt%2FsFmXAkMn%2FV0EVpsIBKBHrNdckI5l8xTYsKlwKEuQsEi6b0%2FF6Vt6dwbw2%2Fea68BDvPys8aHn%2F7HTDL2hu4FO0h0ZQqUPeBiyxDxlUYnTPAwBCC9efFmSg5nnxJZIAHMpwQBFjcFnFxV9spimmLYmcSDhD8OYURnHZkAtDrW8XnQ8t9dR9xR5NjdmruMLON8cIGOqUBj8eSB6Cc5k89n%2FWBW2fu89%2B3lbr87XHr8l%2BmewpASdgZRWORCT6TO%2FBNzGeyRn5pLJVU6sRpT%2FVKaD%2FYS3zZms83m813ivny36xCdNNiNvRYYQLrrFGTtUmy0JLqkHQhb22NNaTSycsJPzsxhlmM4z%2Fgmui7LXMSeHe5H2rKeBpSgVioRMOeyOym8ZVM4c3ktagW2LsimysRUzHBLSdS7tdBGMTj&X-Amz-Signature=88897888ccb4e2c30f87952c0162784c0d41e448f86dc93728e1ed570d8e33f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZGRDMO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDe1eJI201CX6hUOzkVhFkeO%2BhSdmsc8nBkVElDqgpzSwIhALdBuymgQnd%2Ffq77Y2isV8PIGLcvU%2BFWZm9xtcJMNCPbKv8DCEwQABoMNjM3NDIzMTgzODA1IgxhNWaVscePnRRfCMQq3APBMqIVfy0Uehq86ahpb9KCoXZKrpOr5J%2FUyPqPbKIshxWH0ZkGMj%2FKOurDAK4B1lC1FPrJtRp7QpvVm74o3I3SxySTDxC31p%2F8e%2FQhbd%2F0sDdOez71XtenDClip4vZ53gOBD9udxw3R1wEYOsq0Qgrjp0Nk0MkE5%2BhNTAhmhCECiNm0DSxZtkuQeqK2oQMuiHam14Bshoj5cJJE1OVdV6rKNSiO9y2wW8JtmC7qBMFJuiJzZMSxm63NX1yRC1FFyMHe44C1g4P8ejEzlPdQwQjj3IdvBxny1s1tdxMWWCQ3CnP4z0wMDqvDjqF4Ph6RuWTlhjO9ZCZJojMy%2BtJlVJrFi7vH69ywzkOsaeLBF88891sfAfDxmBjzeduibcBfSjQwGwhfj%2BAKrnUFK5KFzwbkPDMw44G8F%2Ba6aZH5oXGfB9kgLNF8ywabSXoHMO70Z9GtuHerkSeomJofrcjID8J9I4mCQSwkABY%2BXPdHcQnFo8gbnwN7LyIZIlZg80gL%2BNB5jbCAsjv%2BQZLKk3P8wpNGu1h3vfl9UHnn24DXXFjEXMTh93NjxMo0EZK9ezw3vFTAo%2FZE4X%2FJotokUmM7dsMYLmLEys7gbjZGBzF5JXhWg7xM%2Bd5xyS7vZKxvzDijPHCBjqkAYsMSylO%2B1f2JrU7Sk69sENUFExWB3DK9YflubYEATqKRqZRu9upnSrdrYDVp6jdPXSLrSngGt7n8JTuXNo55mWtmsLOQ4d7L6gO49TTMrhIzjD8mwTI0tg9xtk5dnA3tTrcU60qQEzp38N9hi5HmsSqidFLWCTMymBzIG5OsBZwpu5eXx9WZZjKDbYZ5dYeAVFvUSOa30AGWngYGzr21AmdYrYa&X-Amz-Signature=b238eaa58428a0ce6c87ca86a3eb3e57f707a40d4d0f5acbdd7d408e9c924b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
