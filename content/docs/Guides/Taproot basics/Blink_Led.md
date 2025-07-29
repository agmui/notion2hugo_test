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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWQ4ZL3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEm7wfnjPaBFn0jtT2fL4mkq%2FuX%2Ffs6%2Fqz%2BzDIXHRxjPAiAlVhx%2FEDCRmzSis0eqizti8rzZCfghvxHR4V9pIPkJHCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FjHBcICdBgDuv%2FcdKtwD67DKU7F2GVytJyqwPo8lh7MZ6EqkFZ0ctiIT7GbDrG7vdIUVKZSaOOYEVJRLOxh2ESnOQFjhnUhly0tZID0rHCHpsIUCcXqBkkDn7Y97abBjYb6i%2Fc%2F7vOel8v8lviteKg2iN6ZrYBJX3pApIALn18enAdxB83l0VKFr0F1gEkc3V%2FGIaekFsFPwavOvpw2pZ9XicCeN5mPmEdNi2Thz2fb%2FLPyPFkriNsyAh758hHRqjoQtMxPFsu2HrCAjMOpuD8qd982SkEecNqjtrNy8sw4PIxjwp1FiWSEOihvE9hkoquC1ZgL5Be8R3ntlMCDcb0ygqk0GsTyFc4Aol2h9hKxrqQSMDMcWGNZ5O39E%2B8HHB8bvQP6NrKxggt6p3%2FtNa2ZJqXT24K5kIGtg4GAW%2BXQoPnE4h0EjGLTLz86p6NKkBPQAqmx0%2FqutAVOI0lNCTd41N0psJqqQ1AG0Hs84PA2%2Fq7kFUD64merikgTkhCjZ%2BdwUPOoN20ptZ8MLrAdPAdjz%2ByGlW0Y9NNO0n%2BoSg0TZL14o6FcMf47oRLU9p4aYFhhEns8aMC5bp%2Fa0I5cU%2FIXdEjL%2F45LAsK8OBTQt7XWJTPcosy3TbLnT%2BarvOe5DsPzfIhj9I5BO1JEwo4SixAY6pgHfAru%2FnnMcpFPgY3r4eICbZqlYElzPdLpEtJpFYBqniqY28cKDSoe7vdsRDq1J60V%2Fmz6ufxBRPWetCK5rA9XAVlwPPx6ZFSZ3Ne9ViGjGy5c63pxdz4o9EUG93ks%2BHRv%2F6R21pcqRfA%2FU9yGIGWQR%2FYrSnKfSQZU0TzePn5%2B8btlg55%2B%2BY3MVxKGUBp4ldZJZw7LUqd0W7Fdqga3AEtgJ4veayL%2Br&X-Amz-Signature=fd3019cc8ab816fef0f0a836b88066d0aa987d2b587d2eaf4da5b14418ca99c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4TLYPC5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJFMEMCID0p20LF5sSdNXJBURLu0IU8Y4VVUbr3J%2BwXU1cZ9UN0Ah93HXF504fXBF%2BgtGEJ%2B77wkjJgMBAh7LzAnbfGPEeNKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4X%2BbrJ7ZaWbn0kD4q3APPJQOS66gm8j9woK58iX7hgNFVXRCrI5PJT%2FPl1h7OP2Gd0XdAC0CsRqEnxPwV%2BRfHeAZDu%2F%2BZOUw0mDZZp5fbls15S8fbiQio7q5QWJm256kUGUeNF%2BRu0Tqhhhn8vjJkSa0OaCUki32mPpX82DzaJtKC0VMl8ssfqg5NoPzJ9U7yQps1yl8hWMbXyQ5TpbhUWmxOuCqdIA53Qbuom1JwH9pBGfPn98ssfDDU76b4Dtc921NA7NCXBoWjZo0pwlhDuYBSMEZcFTXGZ764FzwqExOJMOd3J%2FYSDPUwQf%2B9aGfMWaswAIGBKNZMEuPDc6BJkyLAA9eWtTxKR6MH1Tlt3JdVjPKIvQ408QmvUGXsJmzgxIoxF%2BiVmiFmYjjSmWmKDQk1OkPpY1LDVvAf%2BKhJ4nqqbllO99AMqym5QPtErmXiLlo74Mqm8obA07tcG2DXerTxnOdQPnIwMjt6R77AhTZIk5aKeDnPyU99ZrgVj%2FBSWqG30U9zmOJxRkCwnh7taLEm7FdTWaRA%2B2lNZWjwZc9OhXmlGCmWEuBBdzmK16z4k%2B8P%2BC8guVdCFpGTnn05zyrRIZQNNB33L%2B%2FLNr7JbawqCa76vnSaa%2FUixVjoTX37oOqVSHnLpYqR9jCigqLEBjqnATI%2FkjNtt%2BaQCLGXln41cdlLAcV3IP%2B5Sx4xkup2hEG85iHFDKcU1wUTrt3yxzlI8DX4mnUTChcQVYmAS3XoZAyBB0TJI26PWCux%2B2XJ%2FljuDzwjU%2F8TweqO5z1hyIL5LyCvVdUdJYrWVGVB2H4wpzp7RuU8%2Bnj0uAvY13I%2F%2FnGFHFNoxO6VHiqbxir7noSL9TrEIDxqViI0TD9KVAnHXctiij1bXYwk&X-Amz-Signature=0a56739e41ee21652d1ecf62f9ccc003114fb54c210011a9fa6a31f1895bba32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
