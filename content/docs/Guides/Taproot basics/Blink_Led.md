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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YYJQ7CP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDf3Kz3%2Be3qhHW3qn96F0duf2jp5E3zkoOwt4qK3N3siwIgD0aQD8avzIzmuZ7JBseAQLH%2F%2BUou9VyA%2BDCKLUTCVikq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDG7ZNBvXJMlIrQaMCircA0PeAl1Tx%2BNAZg7hzCtaDKMtWlbi2ySXtkBefhtR6ObO3AvMF9bYRNWk0fNuYyYSGl4rWmVoBR5EdTxEVfogovUbq67AwBWFblF%2Bqu%2FyPc028QK1z51SVRABByeNwjE7EXH0gwAcH1AmU%2BFihWjm2%2BuX0QNnZSw3C6i6QUDLBBURNpRRPA40RBrNohqy72bZeBcNBMafSCPhKedrVHwPmDkqc5AQuXEmLvM7loCFYViZvvWWsl5%2FwMfXHFfTf%2FGjrDxsaeUx3fC35BK0Qaxv3khICk%2FbTmAsrs4YNQHLD9sKxnkkvtldi5z8GLHfEEJwDlurJWgk6xcMDoNV1y3OhRXV9QDrBZRzbfFq4VliVnXziWg54HGIzWuOknfVzESoZ0AY4WfdJhHkMPn6nWQ4M%2FkhcniePJggdwpyeJfbc7yrdtwlrnQ3GnYd8aRi3a%2BxHO9X4WzLX6XoPNJsE8BpQ0zaqeU9uYJETVT70c%2Bq6fy%2B8GEYcufS41%2BiHz6mnHCfnMtocjzx1OOrHfVZYeH7lD2%2B6SSvOcq4YQcn5O0xmHIwkIN9z7PzzJLKxrMlWNsgfhYvG76gZ7cPEnajrEgrAR7D%2F0tjwJN82iMu6mLPzj5HIuzMWv9OT4lMzTyfMLG93cMGOqUBS1wzQIw4%2BJRw%2F5R4lscC6SNHQhY4CpQW%2BQItwwEdb%2BGnl1v1NaGQPktWcd4f%2BNv58DbXmrLyxiSDk7cbmXMSS8cHTIxViOM%2Blhb0HaPeVLR9080UEP1J%2Fa0MTSLas9xQRqfqgA3x2g7NId%2BF3C%2BXyxQLwS2qro5yZTt5Lfqufn2erRDcipK04KVqsq%2FeWZrwaxt0J%2B6jALB%2F7GmED7KXJPUB8YKd&X-Amz-Signature=0a6f80801c2b647e56bb8c4bb627c722a17a1c2b477dc29ee97d74184829ad5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREJKYZN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIDDGIWQsiMS92CjWvbD1Qd9x0dTI4SAukHWOxlr3dKqQAiAp5iiZzT6PFhh4HjZ6diOAWjNSy0HjqdTkJu1RH9Me0yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMK2EX65oY%2F1FdcmRcKtwDlwyII4ySKnPLSeeOhAMs5X%2Bit%2B7z%2FsiPRBMIIBa48cKrfQOm%2FvIglE1dSk1B3oxgy4oeOvLacotHt4g5L%2BDpOWWvHWq46CbTzziL2bUE58zM3wQCPe%2F0MRdy1qJO92N%2FX8bxhz2nNwDwipkUXaILsULHxkOD%2Be3RKNxZvu8falP4JIMxio3F0NQ3pEkllTMnzV8YcFwwJ%2Fp2FNirPmkv8%2FYTOfThW0MoEFKWcp2zwO3F3n7LaaI5CErT7p433QpNuHi%2B3Yp28pZjfuSTv4L1Tv1m3YqvuRmrc3Daw9psfnqsSX%2BFxyE%2BqGZNN4lDEGbfnbx40X7%2Fd7gbAn4nZW9jha8oF124KzDJ9BAjYpElLMjUGJAUUWFtFqDYKWI7SCIeag%2BqoT5%2BxF5KsC0o9JIHyPA1L3yKu4Q5lQKhO9siyP8wY0RV5yUxHdg4CelHVsHZclSuGM7nb2xHyfCVFCIu2PPZzk3fvkBanLwvL2kfk8opgyeYhWbpYA41HBZLqVT5qweRSoZuLl7FhxVUYaFv2xOfH09dNQFrpelei5tEPPW4s%2BdJJ%2FlE6AnXqvseEUokI4SITdQh7a7TlYa5bPuGvRWF9%2BTfQTWv3otWYGBTHQzIt34ozKrpCXaHGhUwuZLdwwY6pgFHiiQ%2BOAKGo8QJmKvoniShdONbWDPYsAphUlPQw1u75yX%2B74DJw031ElMRScVr3ehZlQx4hgrbgVX4oHsEUMjrvsXGs%2Foeksb8UIbSDM5uh42QmY%2FSkGlwDxVELBhUHPp6DnH%2BHR%2F%2FWTZe61ghg%2B8r5ETDek2vmh3hzHcgs%2BvoHtxD8hfjUE0IwC3D0NuazhXsUc9QFIO4KVOtDhvcyQ%2FiX2N3wOji&X-Amz-Signature=b09969ebb993f229bcc1b3f72d61fa2f1ca0b25be50c7e2b6e2279d8b1814cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
