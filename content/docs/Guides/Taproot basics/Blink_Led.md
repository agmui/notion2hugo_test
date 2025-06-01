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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC4PREXG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIF%2FF7jFBGcZbQ4ZWkYYZk5ClpUBm7GewFhOw1wzB02s%2BAiBnsfPROrIheW%2FN1OiMvdPxxIrY2qhARy4NnwV1wYJEZCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzoFUqvWz%2BU%2FwkfBlKtwD5ammZCpbnm4PRsEM3sTwNNIGrjfHLjJDtN2gIdNg5oblLr3wUQbN1sIIC0VWrNGQNiBbnNGHYtK10K%2ByNZXXbuCip%2FW5urFWClqJOxfTfaM98BZcQRS%2BddF5ZY3lO26Kdlf71Ac41NFcKgHs2psZAjXjUufM00EYbDSNJdMIntVALnlA6indRWg%2FdAoseKeX8%2FUpn4cEJzPkh6oFe6%2F9%2Fq1n3dROpvEAwtB4d8EWUvKEVdYtoMJULFDNfwuKxyl18pEb2eGXSIzP1STOY8KF4gV4cDTD6MQNJslYtTPIJ5Ns%2BvYgSS2X2LBnvI4e03Pl7IkKW7u1HVIRx7bJhdQetCwc9GV6eblfRbdhCnZat93rLRRmDORWpq%2BKm5ejPnYF3Gi8BwNgsrAxAUw%2FT71dJtuD4j%2BE8VhKZqpWlL7f6rDWY61YE82qxd8dYQBAGV3Vme1pXratck9CBR9ne4FEJdRBiyP1DNTmYlI%2FJTHFOzfZJsW%2BTas9ISU3AsMAPTzlx9JA2ylWgc8VgoXrSfAJOtdb2M209%2BjNWUzf5ChW2sDdN3hslqL2bylSmpVnYka%2BNvKfKYoh7NM0Mt%2FFAbxf1sEAU0VAUViszkFKmdNjyavvjWMbIfNeNHXX6rww5b%2FxwQY6pgFKFyKajaGS03yMJys4wgCRpADEDtmdg1EYwsCAYmws4hCZcgUVv1JaXCSlXKOBcVw2DLjmYiKPrvF7sNV%2Fr5N5xKU%2FJ5SSkmzlZ0sEVwjTUVePxQu2AoQfCCZyt%2F2kS%2FPTbXl8ugB25jr3yCfrrKqX66xAtfj%2Fb0QMVwyXyWXT1zwt%2B%2FpWnkpdZTlQXHwVVNhRldfJhxEtlZdOMs%2FyMiLYoMnDP0B8&X-Amz-Signature=e2dbbba040deb8a405cfb229c27ed506333786e6a12e11a7fb0a3eb7f773c1c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPF4M5YL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIAw40kcqnvOR4amgnvQbkZz0L4VBvt21itxloGqTq%2F%2BHAiEA8JrJnfUZcy5EmRqu7UDd1uoGpnCY03hboH1Qu1vdYAwqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQ7NeGcp3DhVuMbeCrcA2pUT5OVk4HzJyqHVRkyWKf98UqYmEAq3W5eHI8vZgRnZakdxCYfGHJM%2FegBSfEE3v1Td5O4a8YmAJ%2BxcOqUDkJWqFeAsTrxRRpN%2FuEveMVigtUbP8uv2RqGWv2YOObz2wJ%2BTJyJukqJRZNq9Ct3tG7qK004Oe2%2BOhBpGaEcWJaVOmK094YXBQIueyrJExNrWkGmWYMFKjfVyU9eo0fFN5vnYUQ5LPr0YyBQ1TEMFOnsk0WxdxnzXDLPA65P%2F%2B4xrJX1ahE4nE6u2HB3TAncownH%2FhjJuPxE45ep0NRjh9SnUwf36Q6R3zzPNdCg8WzoosAWw2QyT3qJ6hj1ySx3saaRWl9xEypHV4nl74Vec3EkLDGHAZYEYnfv%2FeAOPPZRc1wS0PHw9CB0NMP5IFjmOnVgj7W0Wb7tfC50OmE5hkZYkUGTplVIfTXYCK8Id9jLoyZJ6fgoMPYlveA1raVnThaDDeBbI2ORRPXAwabliczm6zJayXEczzJyGV99Uz%2Fs8muWEhGyh69%2FnGTnFDhFk6wsDANXEnKKxJo6BkKiQ%2BogNHhjNirf2rRALNpqIgaaXIryJjAhhHSYFRnzW1opsGVlLdh3lur1P6th56u09RLBI4DPrExvKuITF6iQMJD68cEGOqUBk%2Fvjtkxi6fyIcM7qyYi3nJp6fCQpiagK1xCVl4i6bB4NprBJvulm9RuOyVlZ%2FSNsH8daof8hWEYpREIBMEEqHVcLlEvkyOEig%2FHOHsNTe%2BS%2F6eCzNiJFXskVL39e%2B%2Buxh1ydMqqCT%2BPc7lpyBcfiegHlFjPetDbP2JeyU6DwudtZf6ai2fy9lRAYI%2FMelbUp9yYtXUV7SYyh0SKGspp37noCKDpG&X-Amz-Signature=e5fab1aa066209153ed27b066207976daee2e37a9edfd19e0adfb939903776ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
