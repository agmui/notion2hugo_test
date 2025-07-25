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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666WAJ6F%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD0u6vyaF8eCr%2B3xfgoUyt33ZYbqyxT%2BmHyHHY4lV5TmgIhAP2U4C18iZzNvGDqd%2FlUNcn6Hz%2BmsZ61MARQzeORXzDpKv8DCEIQABoMNjM3NDIzMTgzODA1IgxVXm4LxVtOSi20RE8q3AMlcu2TLou1TZeb%2BRAzRX8UQRbHx%2BL7z2iwQrs8DE0ipIhN3rktoilPDUoHe9htKI1pUQwnxKr%2B7TIw46wiA57qy%2Fd4rmfoJacdTd7Z7tLNC9Smh9xU6jGfuEQjPB6ypBQyZiocPKBk5hEPGs0gI4IsULQuI%2FeFfI0rMdDklaSssz1bWvW5bUYc61Xu5jE1coqmiEjtEvNmHpJuAbrgvogyZJfCyaSsJdUhymsJKYpQJMDSLvAMlya59pkB8Y7cSVGsp7A%2FVcPPbz%2FTY9NYJfzWE9ivYsez%2BnS0ePtlzhDxNyuP17dZ1FBRuXThX2V0gsAzf7vx%2BMj9MDp4Dmgh5Ujxh%2B%2BY7M%2B%2Bkar5F%2B6J9Oggeq57ZTrJ7JPcbC7kTi63szdwUmhBEMHQMSIcQhdSgHRv%2F7AY6vZ%2F1McmyG8Svtllq%2BmKey7JNB%2FRPjlt%2FKyODq60FYhjoswCJtqirUJ8SCbNRoj%2FV%2FAO5ut2tNXOTpmpoCryQn0Z0tlJzxR5NKHZh%2F3Sgek4RNS2dd53TiPDoUWlenq%2Bx5ajD%2FlaQJdfHT2D%2F4uz4c40yAuad56xt38WfXf0QLMxMOBGmr9GVDglgr4YGHLp15jLawHN3xSu9ytfKGvMwtSrHsESyWSOjzDVjI3EBjqkAUHxOp8tPjv%2FaIIA17TBvTl1NB9gv6RIgLEILXt5MIZHBMTrp%2F9lhGOrsGNXnqZuzLeqtskbbRnwWLdYMTtWF07llADmlYk4rlG8%2FDHhLZ6i1d2uEhOs%2FLBMym8See9GJD%2F6zM2UbDTOfOHO1VguBOe6S5i9vcp%2FP8Ls5O23L%2B1dNPQo82ll5ti5CkXU6wc345Q5AiUlcJADUmrHhVLfiZP9ZjDn&X-Amz-Signature=ffbfac7a13260a4369c235396fad280958847438d1711a251ea49e929e40dffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V364R6J6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE4B3KRfeWYl9nniWGNf%2FpMNI3l4f9id7Tr%2BCz9DIlCVAiBDumO75PWSKL92xgP8ObMVxBND6rK0zXpq2dZtLwS4Syr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMoNAshOTmam%2F86OwNKtwDVZPNCJfK5e6NMmOXuKjpMti2W3uZkoP26wb4399g1qeV3fiydKXL9Uq6cKPIb03fq6y%2B6zzrLw1w6CCwOjLORTiprZxxdUXwruT8KlOPqiu3vGCKPAz1r3WikA2n0NlhpK6BBhE3KtrkRXbT9m6srVgGh1cf%2BdTFYAlQzaZ%2FlO94KI5SXwqiOHqNrAwdjE3Uj%2FPBRPI5W9v4rKX17G4oKW%2BaK81U0eQ8CcJBMasACbwBG%2Bfyy6norUH%2FErGAlfXL%2B1aUQkgeu%2BJgkEKon7NAnvBSuyjK4khbypdWG85LTFhW34q6vqDsej8bS19BwTf84aZp7d0q3VI6mNHz7yirsX7%2BV%2BnkntM8F2qb6hWIur9wJnFAoFPtuI2ZNjTI8x3BEyO6CyzZQmj%2BrP4zwadSO53hJem9Fqu1fkIxlhNmUF3UIxsnj5uD61ShIdVkeFV4aDqrlsGToaKA4aOO3ZyqSCIZPz9QlUjkgWywrwDXIrXB%2BNJ6f%2BxDs6NlvkFt0Dwn7FG4fcy9Gr0z94%2Fa%2BtljnAVse9At%2Bw9dWKH53J2m1K3YlPbPFz8Dm2K6JD%2BlNXwyogxquH%2FlqNH%2F2VouMEJORzYAhQRJGJMRaFIPcYX9xRwH%2BoYFRakBsNk7heUwxo2NxAY6pgHycOQkWMNQAiCicyigu4FrUge66xuqR14dPVDaAPOT42RsiksYutgYqU8KKDMw%2FsTJVOyfPTqgKNmuXJxjdyiphJZ3u%2Fgaff%2FZTQvBQZt%2FZtdlhH3wiij%2BIV6sRDzUA29p6lai6Qd4U%2FOvvD3CJf3VlbeIfzyo91tHAtpPzAXsSH%2Ft%2B1moRJLmnRFZcfn%2Bnl8sqqBXNFYHFLqIfQdHLD%2FdisW97TjA&X-Amz-Signature=763351e0137015c72855fb1e215aa33c2f0b5aa10aa8e54ddb926c0ae07c8561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
