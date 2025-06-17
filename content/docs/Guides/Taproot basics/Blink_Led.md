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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNGF3KDS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdcClLHlp9HGjFzMqc03Cp1dy3NZe2ngflnaaX3PMaeAiBYB0YUb9xcdQ0EVMm83eOhHl8LEPKXKeein3dxWQhQfCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMImS2LuiPvIG65LZfKtwDRYtvvL0MuKWp4Y9xs3W0BnvFlR5RmXVnyCwgLeAbCmU6%2FmvSHGIdLfukrjZc3po5JM9x3IzA6HVnX7V6nQAwk8zpCXNpPOapmjMpmlDjpQBXjmSbnuZNeaWi1fqrh5DDT%2FKUS9ajNi%2Bs%2F666VrN9I2TgKWsd9vhbBQgxN4DVz6l%2B5HjbBeMs%2BreC5gQPAWfPWMSzCFcuHECsItAqPXNu2m3BuEB%2BV8cGaK4K4e86wqJEO9bjobIqkQsKSO6p01ZEMkSF3jIx9NYADAIPpd5NOA2Lz%2BFXfkVWIwJw%2F2twNMjqhiZV7d04uo0kGlB36UDMb339kzhevWjxjqkdOSywT%2B8kaHqYgb%2BH7KB4AF%2B9wNTaRPmb9x25Y0%2B8xELcXbyBrXGmJ%2BX8gS8K3rSKCHG7hAAfFKwKm19bGXXUQRgXBgFDqocAcv9k4HBrcUN5pXE6oFSc3YIO18rzoZw4rO%2F8545V3WGnKIEtm4I7P2HjVRTNuKmfCFr1GEBNcWeVHuIKFo01Epj6EKNzYJFZy7s2uwHbf8HYokcWNpxYVViB5W9CQOKIB8kjblyaqM%2BcrUTKILroRylV1gcVPAEYAdzQ%2B06CYuXRgC4YD60UQKVnC8GwuPMbsU3PafpLK0wwz%2B7EwgY6pgGptF%2FGutoaJ2BqIy%2B%2B611B5fAvSlQkyarb8J48zrtisQLqv3Gy6S%2BU6t%2FOE9DvLDdrg%2Btjc8Q9BUeYkipR6NC%2B6DNYLMEATT%2FZqXeh2eNATTyWMODNvERmDRo1n9w3yx5Baw9Dmy41L6EMG1IzWpoAd6AdUHhb7k%2FQlwoCe3ayPQpCb54Yo7PKbkBLAEZs3Dknl%2Fnv4Gxu5Cs0%2FuLvw84iaKs6Gno%2B&X-Amz-Signature=f4a27f9d6459e3ac5fe2292b702815130d5286bb50ac79c11ec878607193f9d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKE2EGX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgSffg%2FggTuZZoaD%2FI7pweQC7KV4HArs7XW83oux%2BaUQIgPBzH8GTHIQlI0GZ6txHGnMF56eO3SQyBFiGPNSx5TQcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIBCR3ifjots%2B%2FBR8CrcA%2FCdQnJTRvn5LU9oP4Y3eTbZ8%2Bcrd0rnXMeTF%2FgXscLCFQODY9ggtMp99aT8cq%2F0nvJwyDt8eaDI03rX8rAcady2clemZerRsc%2Fj9Z6KmMoqZJArVM3MipLw566q8c3bBiBnrfTS3Z5hCphna4IwwiYzdWF9s3iH3POBjbbNMo5vowizvb5HJjpEstBbTozZ%2F3ddipuXodxxfzxWcoSUq0tK9YW1763m3qEJUN7SQmCyCW7rBtasW7TZiU67DVGu1rt3VGqKY1YI4Rhovu7mkxuKcK%2BOaqOxPGtyUTsRI12NfSQGll%2FIpwUmughgV2HWwL3FLj%2FsgS3TFmq5WSvjOSief6P27GnyjDi%2FvXU%2FBI7w4s2myG%2Ba%2F5Vv4eINl%2F6R3J8lDrbMCdWHW0Bp9hMDpK0JP8YOfiOd8WmUA3jKh2AoU2yQ3pqJ1dukav6plsHBRnpqLTmEi6VKTms0kIu2NwYK4Syrcb509tnrBDyNsS74cD45Pfvf%2BxIESUIFwG0pkCRgjNbqUeU6Asaz6cekfY0ibBqxGaaEFvYXkCV4PbeiaIrMusbSPGng5t5L0tXhJ7uSwVTvYOMf9A%2F4rhAYGcvnTjQXxPrM3y7im3aq%2FjvyZacT3KcKVyAq3C0yMIHvxMIGOqUBYjNhdBoRzQ62q4BnXReWO0xCUmUuZXSAdSbuRNlXN28Y1eUA8mZ0IP8diCiiLcj6dh3d7WXA%2BJ8GVfU9%2FqRzNfXxCYx2UsJci15oHowQ9%2FChO84QYIh91dpHlX%2BEpTyR5lbpD1XncQN6UOg2i6BQss82kOffNgxJhWOyI%2FN9o4j%2BjLqqMTGcDG43Z4FtOQqEktX%2FG28yjtnw6k8R3BWm68gygSac&X-Amz-Signature=3acbfed088454bc1b0550f39ace9b58173778cc19620ed3ae470cf8c5a6bd71a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
