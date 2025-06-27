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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBVGLAZL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIH%2FTzcoxgw4K9VZtgB7IuES%2BMfVEqOKybZ7GDK2CbfuRAiEA%2Fur59Mop%2FHpohlguIOYEQ%2BU1%2FI9aW2YaY135KKQbN6Yq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIdHZA4linr6kyIvnSrcA%2FlwPkVFBZQ4ISEm9tpF16A92tmdAq9iKZSZrpw%2FK5wFxt%2B8xfqCljobOHVlBvOFKCNdrdy3TcQ2Eyf1aWmqDZgXCTLP6ZcqDwPsd%2BREWwStpuCH2jhILYFuZie6R%2B7hwETZ8epP7vAWxGARtGQm5riebz4TkxLFI60RHdDaq%2BoNkVjyUYNZ9E3bl9rc63DApexPVtG%2Bxq68Lhn7vR7B6D%2BG9pMMH7MHyxQLS1FXut9idx8jblBLthfDMQbtHxtbFADtTNTIhUwKrbKCTTiHxSBbYrhASaC0da%2BauZFKz0JJa6wtG%2FbiTZU%2BCWWiF4P2wSzuJVc9W5xFZws%2B2xqHjS2SkKBfDYUycMXcdJycD7brbA607lHhju24qf3DGoL3NgaIOdiYNgd0JOjU4%2BdurHOfA4dLQrShC8WaMXCmn9yW967iUKgnSasccEuTTl2bKwaFXLTATNPsIE0sITNUczC2NvglXDcfV6ALtKhQVqE2hmZjOiHFkcoy11HxqGOASoEvfmSmD9baWx1b8KWkmoX4ip4%2BQch7ZTTiJOz99qmO2%2B3oQW9I6oqGqnE1o8Rud3mdU944HCJAXDd8kyuZEntUh1Z8wCmIjfCTExySL0VRmfjXc4I9JNbLEM6jMLef%2BMIGOqUBqIKoQ5EYihKFM2ehwKGsVu07rVXLKFfD%2BJv%2B9GQY3bKQ%2FqyCX0pVj8kzxo6QQYKjPpH%2FYEJ7ndfseFYzLyIjcNDrexTYoC0lWe0fMR%2BX04G4Eoza6TuKce%2BbTb6qG37DrAZJ5CA5KovKmgVME%2F4fC4xIT4%2Bd8hB67bB7hlJ8tJvNHtH4W4GRPyMiBQa2nknBwENTV%2BoOumdcgX5JTnzqxD2HTQkO&X-Amz-Signature=ef78d2bce4bd5ba3f47703fedfec4c307fdc2791315660c3e0162fd606fce296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKEK2GSO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCntbu0R%2FDcu2RVco0oSKElNRb9G%2Bsziv6BNBo%2B16ZT7gIgN5oAGsN7BoyVxAl6ZjdpLo2aMnq0dNa68hbgq9nSYcQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDM8mKM%2BELEBnzZKQYCrcAzKmYc2GRpwvH53JPgFl%2BY%2FDS0sqTAXs455UGFD8wiW1QOIBjq%2F36Xn96h077aC9VlxsVdPtpJ1W2PRPFr3Fvtv0Nr9xlw9eOEE%2FnHHdwPOcsroHdweB3onyR3T1OB%2FVRHQi%2BLJoQmRsHaCk1GHqKtTG2VjIoSdf%2BfumVng%2F3MNtgKRt2Uy3OBsVmpq8D3c%2B9WoM11nyJUrIlJ8N5E9WH4aywhl9zkgIF57pQMDwnpptcOAJyNaeo8uJCYAY43icGAFzX7nylOKl80H4Gz%2Fp5DV3dfde4m%2BfJG7neGDw31K4UI09SNPLE21MxCoN3Y14S%2BG0gsMebyfHqo6kwFDR%2FsA3j3zG6m%2FDN6lWFssSkEjpgBjCpO1JrgN8i4i2eDRnq7auK7cofsDiEb946TG07hN%2FOGP%2FFusNiYdToZsLLjcHC6BiH1mxLBSUCG940GeetQ%2FWYzNssRWTyXGA2vQ1hGb%2B6M6IiH1BJju93C5tKtICywVth5jaDQ2nFNDXFDEktlADZaKL%2BuY4XayZs26zH2He666dZA%2F8sdsNJaRfg8%2FER4%2BRTGxQ%2Fp%2BQre9eWCnYkYBq%2FiOcl1Z55qRklDfWtsXzdHLBspBzJqsS25%2BdcYR7xPu5Vn6ooKq0Z%2B3jMLug%2BMIGOqUBF6RYxmPAEUDI6AjCWQPMST4acF%2FACN2HfXEVUKzbw9tb2%2FQ65bXoBTTVBYGol%2FEsblKQn6pIwkSWZgsziq3ozsXopb%2FvZI6CcSAEJvg4qcLee1l9URr1ZdjJio2k3XwgtT%2BCyt3hW2ueW30xx4hBGB%2FCiY%2BHEcOlyXBUHUlEgPkd%2BhIlixRcsRPnSAUsM%2BPf6ftTunxysWGJ2De%2F6bp%2B70MfWsj6&X-Amz-Signature=1a509a53e42e8d36c5f445cd1b467446092e18e6324958e5759f5afd4e636c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
