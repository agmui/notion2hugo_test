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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MMWAAID%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEBWgAkrPS0x3ga3D%2B2aFug8XyRl0FI8rtfWm2hQbzW9AiEA4GTV01cNRAUp%2FCc0%2F5ztfeSstdOb09CN1bKHduG7LBsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOT4dKjK5OEqwPPIircAzayyDmKPsSdEZn00%2B9hzntMsdfUiG9dSqAMGL96UIWPJk3uJ7jHrtoWPepS9YZAtoHH7wPZX%2FofnwNFVVIApazY2fFwuu8fgbrzblTDuTT2SlRhLm7vd%2Bv1UHvj1boFtbDQ7bA%2BGhz7Z8WBVKganJkmZuvCoLffzGCPP5aFzMnIKTD5xHXCswq5u1dep%2BPxd6DWirYqxkY8avZ6jHa4O1aCCTjRh1v6hN6g%2F5vzZNECAZOsKIounT%2BHROU3FNabKU9MQX%2BmzC7tppAYxbV13uxrq5tFNrwW4suSsMhWMRbba993iotEMd63g3rQXr0grw7NG26GQEZolCunilAlMCl85VzGZZFenKXs0ZF32nEotGSUaSr7p20YThoyFMPlXw8eRYcxsjMSLdb1iSnyTmFRL0VbnDun0OteUlGd7r5ok9ji3ut7TA7fsgX5oAE5rEydzHG8u1WbN8btPCrGMEIMsAzzkOWF2pUSllmVPuGwOeN3Qtvv7siXtic96o9CBtKgkLgQutzLsPYmusMeHApVOsX8397GGqcDgFYW6qSn0yg4IoWORymC9zM5RVzgHs5f2TxHOm2JUHIl6n9W%2BkKZ48ixxvZQu7ysxb3jOcbhpDpMZVu%2FBDjXuSjEMMfivMEGOqUBSSBBrKoGR95eY4M3aL2weD%2B7YDfaJIDPBOuhikhYV2vRpnHIJBXlqUHMbr1p%2BOPr8VKlnnbxus%2Bd508WGyORdom0A0gIzxD7Qfs6Exva0HUwl079q1T2WKpqUdsFeeawpNdbMQrTu0zLOW9VsbVg%2BOtPxERAVdymUckla3ROtayR2UVZXXLRduHkhO6lcuezmflmxctrx6h9rVWCE6PUfqD9hGjF&X-Amz-Signature=ee9fdac9381ad4ce6622cd1baaa7c72e6ad2f0b732d44ca53d81ed4571ee2506&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJZCTJH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICkLR1JyCUHAXKW1H7aogwdwjBddb59m%2FDee57kD71EKAiBE5vd5MapOZYDgljzBN3Lvyaitf2Z5jWgDZKCEKqdVQiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdOOkLe%2FuVbxdyzYMKtwDqXfSheDSL7MgyC%2B9h5YiVUQ4xwxBOMvPbX%2BJDrVoRb0%2FtAf%2BWpVQTmSfI4yXYwUsk9OAV4QEQFvuEeEEWt1xd52KTxFlyWEeTy8aSq25WtA2vY5PWoM7eRXofCHnEsjuHBjBj2CTb0AN6nhnojrIqW9vEsVb%2Fcn%2BPtHePnmSLTVRsZ5TLRy3qvUAsydtJCNDE7racPVw%2BsGWCxLqzmdhla05q8XPe6Oec07rGNogJuL4Tfb5mCzrXCtoF%2Fd%2BoxH62EHpoYb88nJrvnjW5UuI3%2BuQWw0KbyMplpptwtVGKvoGO6M%2FWhZ9ydqcvhNzBHALA4uw2VMXA8dDsHu%2FfMrKOuOflkGuCgv1Iz9ml4Z3OgsYDXql5sQ4E7VaaSZEkimFelgJrcUW8CZ%2BjxYRm4%2B0r8104OzTNhS%2Fgtcu1%2F6proHKRw9jswHyqWNtleG2ioY7Yt%2F5XdYIxO7anMhEFbft%2Bfp2JEfTTAtQttLY4KoMQuo2OCqu8dGkkdE9ybyETwiqEo%2BBCkGoXG%2FHe%2FyGRY2HW3UbcSCDPjFLZcLodf1FEVGzRcypjwPfnvnFKyseSt3nY2b4aBnyY7m4ewOMjc31QflCJ%2F3pTzDN2PxPda%2FaYfAX1IX44H9tvpk7m8cwg%2BG8wQY6pgEjkAy7ScC8ofqk6FzyCaXGsWnYfPXMEad1jUEdtKa%2FsrFlfJk94aXeJl8n%2F94lvkMG%2FiblvkkZjTUr3V3j4O1eHPNvK8OzE%2BaItbXiqq9v7Kp7sfboMR5srKoFQJ2%2BSi3LtzJrxuy6yjIbgp0iVhdpurPFwGio8q6%2FjUG59fNo%2BByKlrvqSlRfh8IumCQmOLKGeQumh%2B8CbAXgIJqNh7%2FXCLMiYRp%2F&X-Amz-Signature=d0655b931704550577645d01b663fd5e0ce98987c01a0af2918f3c70151cfbb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
