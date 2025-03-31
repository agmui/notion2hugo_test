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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQQBRCLW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIEg%2BmEPfhL722p4bAH84UVYOowN0LNS4rWUEJwj0s6MfAiAPxBj6AEkwVwXMgzo9u%2BBUnG620UmM%2FD4IKNlyD56aKiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYfcVGXjN0NEQw%2FwWKtwDvwMazQXhDkU8i5KcHBAvwRHINzv1zLlCYWsIesy%2FRNgw4jdko6nR%2FiGDdi6Hu%2FNVTDAQQPQCpgZqY%2F%2BcC5AUQ26bvRTX%2FCYu0sOFYIzbuTlJDPZcpXg3DxXF%2FEaR2pw6YD8XxdSAoY8r3PC%2Bx%2Bta3R8kFGAAlQ4x7eEQ6Woioi7Kro6yD7nZ%2FEr6l9dqPcvODu03O17I9KCWZgk0%2BONIFezfiFfWH4cX6cgIpksjtkGx3wtx6IJNGoAGpE3fil%2F4sn3xplK7yJLLC3wacHBj0fXlQ3WIjQxi91otgswFpcdhVXepOdTp14WaYV493GpprOVf9xUcapo3nT8Zno3hRIz8q0Ep4ESKVLYwufsn0evQMzzK6WFxwFgvmjbpNqiOpYGS6%2F9B560S%2FF8SVkTh7Yk4wxGabNx5yrcYYsG%2FzXXCMZpNDYpKWoJ374DTZ6bK8PCweJbhiR1Y2rcITTvoA5noXQHbSLBd6I95aQKDNuyXCh242h4rSC8C1BGrelARL3Xg5sFT0ErUT1W4k7vXHMFtZWOV9UFvCjYU5MHSE%2BlCFqVyz2ErVH%2BIQsCdLY7uKAmPY4ujjIxBfYxYyFTVB36TB2cRSfZcbT9P6NhuhRhCU25kz90MpaS%2B4j8wveeqvwY6pgFySJximljTK4RNkETBad0DJaxECVvu%2F3hd09oYJIvykiaG4FTfXbCFbERpzLmOyklYzwLAwcxw8dn5t0StHy9Diz3NOOsD%2B9ZxnTzDVSlSAa29MLalIaBQ8%2BxCG4boJyBcQaFeqp6cnYdr4abxpPVJxgz4qNxCsFrE2KVFM2XHzgERxMzEiTcEawRompfpCY5s%2Bfazkz%2Bpf6EttTRTIfjdd%2Bo867no&X-Amz-Signature=71334103a5574a610cadac3418e6447be149396e3872572eaf9cf47d4014feb7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X37EHN4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCC%2B9Cnlf5bUguKf32h8hTudtICxLtRqmwEePNINgNUsQIhAOT97o5MUnju1trriBKwycLl0b8ReoWnPhuQt55sqavCKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHESgkXLKvZo80AOIq3AMyg36%2BW58BDbELCLznCPoGJui36bk3RXzCATyTUePBJ8TB7R4IW8Zd4mG8VjZJfkxpP7fmwhb863uNMsOwbamNLw4HWUbjyHnsZWzEHCc34%2FN0qygOCYLyOq0vCqPKXFvf3griix96SKC%2F8r2SmROVHTQPM3x2%2F%2Bjgd4IbGAPnx4IolTguFpsVosd%2BJ8bSMYgwBpKoUNLgm3az3tSce7SVHem45pq0%2BZ1T00JxFHIHGBLh2oWVPV6eDOlrHI8gGbTzjfqd7059L8NQuXP4tEN3cjSU1gRPV4%2BmGNGv6GJSgx97RTvvwvIMvB54vGTYmquw5r4MddlLEqHm%2BvJ7d0KUNJEbotCFq6x%2Fyt1tf1LPPcXstelrXO3Y%2BM7K3YHw%2BnNJIE5tvwrsZmkE6yMqN2Lf95GYXsCqo5wrnFQut3fnYj0AS08hnx%2BiTIbV1xAmjsYXUPNy0sJ4BQX5rKP%2F1BOZVWaWMvacm%2F2XzvHvQll78XcHtY5%2BbpZMc7f9V3L5oM3H6DIIsuVjdnsKnk%2Bor%2F7uJnyMGL5BJnx8H7AHNEuFcRoBmQU%2F4b0G0CADhgQeSqB5t4FD2jkY2EEPY4F%2Bs2Rmf%2FoWR3drqT3HMyf0eGRWbsxOqxMZeEr1bMdQ7jCS6Kq%2FBjqkAas2aZqix7O%2FToN3cOTWkc9q8Z2SakhLtrJIT2NecdNkD%2Bva46HmoVu51jL0gtvQFQKXeOzHel88uMj%2BLL9csKH%2F0eY9RgmF4TXyCp81Z314akk4WIdSSflHcUjhJpgDGlxCvywF8%2FeQJ2JMetOzzn85qnMtDQRcEvqtz7T1L1p7MKK3umFmDVPkFEL0MYFU%2B3TEui2r9yjHNCUio%2FVVvSnuyYmg&X-Amz-Signature=17881582e83207e3f1416d539e544ff7f6b0730f5bcf0debe823ffae17213eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
