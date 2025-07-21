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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVPNNKP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdjS29pEKnCBlTFElY6NhyDDv0VZgaBl5qSnmqQF9IHgIhANnWvvcKBunWamFOfPkOSAouGCrJIs1UqxBLFnfbxMw3KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuGNVk2MZJgYZI1acq3ANZ%2FQqTzsPVXZ3dL9g%2FMhXjhxaoeHIRUnuCH1PqnGbQqRcT2CQOfzz6QzjOvoqYIb00TKp52oIlep8MqlXfK08HMV6iEK3hRQz4e19wz3XDrGZXU2EmLkUiPuVAQWf8XK5IQlucx8m5KOjdQA5Z2IMYxsfdRflRJAtEebyR7I9Pkx2Z1vXDY1rWgFlgDCZ3CEoYKi04cE3UG4yZrUX0kxFVgPT27mf52T9TsUWNmXvTb0%2FEcYs2yTJkVg8XHoU7kUoSCtBO8DUmqHxmoHFTJarPNROiSA0lUsZU7H8%2Fhm5BIJyae9sI69%2FTavBgV46fIWb28IOTYnVhTMPfhacb%2Bq2Smeqft3b%2Bi2yEYy2O1rWNH3gP61U2c9SeAILJqEb8Nd%2BDOJVtNDkXAD55qf5cuXzFTeFEwtmAt82WZbLrlsL27FvMOhZ5pp0Tl5WxSm%2FkjLbQ8QqCS2GV5RPgAUNh2R%2Bg40bSDSdsOOQeOaC8uC%2B%2BKEpMDRPs1wgNILWcOdhwRjLSDw6eUWpp2smCU9fXrF5aGNNXwbBsLF33%2BA%2Bs6l6Sls6Lmf8%2BkkUfEaumOt2vh2zlg2d2oHTFM%2BVWLUd4%2BCcqCUBF1uI9HT%2FMYyag1u9KKd1vOsasT2HuV9ToQzDD5%2FnDBjqkAQ5CfnKV3ZIjhbsUyLFWjp2T2SGGPvhOsk1m1LOfmp%2F20nuaxixUtfo%2F6adrnq74iMol4yp8oThFRl883vZC2bYUdXqNbjh8JFqegGZWUiTIRrPKUe1xgMjIS0t1SUzMjIiAw%2F2ybY%2F5tZK0DMZRa4srlzOWUfmjLUq6jhDuNhcfjebBxNhwb4EnMU%2BotWMg7WVIO9npUeUjw5tSZRqQnJq%2BX2TW&X-Amz-Signature=97c000cfac1ecf0f8e47e7513009955f8312f0037f89d9b95602406574235f65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ILBWIL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBODqn5ADAHp6BVBXqcInqfMo4Dnvjq96uyOOuMtjRExAiEAz46czFIGnTCTlbuge4x3JEnQeheqvErCyAuvCVu2wvkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI264fushfsF988xyyrcAwYj%2FVj%2BkXoKZ4oxneaGw14CpXuN%2FwBmr9dbDVpfOPVZTSFc0csrq40nyWY1yVg7UOMmkr1LRnYVZBp9RYFZ9yQF9AS7ErHBxO1Xt8Wl%2FoSVWwthdAhi4%2ByyEcBQ4cjKp2uUDME80%2Be41hbnaakgQsHrVWVwEJxkDquEWhOmLBivf%2By%2F2G4trqJODHedH8FgSE75k9a1V6t9rhpoR4X0qgAbWgS%2BRy2NEEEyolQByNEPZpSpRq3Po0V%2Fo3%2B%2Br7Cpjx5pisx2ac7KQVFAxFw8b7znZ3hwr9pu3Bfed8d2ltW%2Ba4w9q89Bf722Ah6hIry3iL6EwjxMshotqS0WO9fikJ8ANsnnylQYOa4sTlSt%2FJsteIQyC%2F60vPNdxnC03NneZBhV6xN4BUe6WhB7DeU%2FYo8mHV4PU%2FLnOLurCOA%2FeAUV9Id%2FvPJ7t3vFNCf6J%2Bsj4eiTnA3uGMBY03hvbhwp3tU93qVxq7Ep%2BAi%2FnvSrA8nuXYxW25i1qxE11IwJ4Em%2B1H1f0mC46v7qLMo2zxb9q%2BUsPCTIQYpiWvLm%2FKDcroG0Ar82t7JIDzgZfi85Q8vIb33JeUwibNojJzegr%2BWlGlh1l0G%2BQACotHbkZ3Bg%2FsapvNA0AGof55bO39M%2FMMfn%2BcMGOqUBppKZBalkTv8tYZZaMy%2BGQneaOw2D79pibCw%2Bi6nHJ4dcw8Yf%2FR9Ha80f4CLDP%2BqWGD8eKqPoIJ0cEAzA7yJ0bQUVoewTbCQ3NZf8WAnhasi%2FLvRzmIdUael5FTZcV9nU4xZ3yj0sCz%2FeSoLPJAIfGkxc2qMzYbSTgeWEPHz5LIVD9r%2F9ygo2p0sorW%2F3Iln7ScnkC9QRj6wVwVDxQwwvvewP%2BoXP&X-Amz-Signature=8dfd80b2fa40e3e3cf7a0b380c6563b923478af0c06108917b500ed6ca8194c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
