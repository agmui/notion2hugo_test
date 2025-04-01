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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7SU64E%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBySFydER%2B4TFGCRVp31ZngEZ03B3gno449JhvrDCMuPAiEAtEM2xUOd%2B5X7y1W1yRj6bMu%2B9J%2Bt7YUwFuUNsZ11eVIqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLH4Kd%2BPTQu4Uy6MUircA3TimO4fSxpzQgWAmOLotEwDMyGF1CCW1F57Z9F5wtodJVCYGcTkaWntaWEIuFhTJ9YHcUttJPOJodXy%2Fxd6BjmgxL8%2Bpc6%2FasSKnhjbovDdxGFLHdv9gnOlwCOiqXKcEjRMYU3%2BHKmH5UmORu%2FBOgtpk4z3eBYRpfH6nYwrfaBZWzbn2kaQ7nw%2FwsYRA56VmMHq1VlSy7Wf27wMoZcQRpnd21c0ujuA9bJkIf0MCSbAKmo8fqHuG9Vbd%2F0kmzVoPORE5gzdz2ZYmwHUL7yAeEzlkMB%2FlwFc9zWbONJMLOX4IynaLvEZe0zBOuVmf5HfyxtnrMzvoeD3YX2FJACb3z5MzsfRYqC9eEgsSn%2Brz5fs4VDMcsEblQG%2BPXIyclM7v%2Bl774g77lRjr2uLbi26XjXBBbzXYKkczIoqIPLkXexgcddyVaBhJkrIfAx7PxBahT53ExeoWHCwOiD%2BW95%2BrD%2FmPaoAdCRPt7GUqJiEVk2ovMqzIO2cPVesYEAW7k2W70Dir2vH0b%2Fo6pjp2%2BeZRzYLXqvrAQEWu%2BDavqtA0DXe56O8eIpGNqgTGohdJBXV%2BrSeJfPrjAtUCZO0Dr6FlKn13C%2F5hy8WKUrfst9oMRKiHpwVD8Q9cmE6GJ6XMMjsr78GOqUBPIDGs0XefCNv36DZwP0xYlE9ptuWPJVG88TFPsv6m0buLOozLX%2Ba%2F0AWvdphYIkSXZETQRsoGYaS2mGPYqSGb5W9TJNESQuj5RSiL4uqMIV%2BkBAKYqVdxUv9RrCj90ozNiCZ8%2FGl1pkE3E8vWxlX4pew6A%2BLBI3wSUy5HO8Gkex%2Fe7FPBN6TALR%2FPpNFpt90O98shO8CVl9UAZy6Wr9bs0%2BuOGXC&X-Amz-Signature=fb2958250f2fd788b6872a8391e62d43dcfb3468f1c24cf3f88aa99eceeb1bd8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIUCH6AO%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDtaNpeYOz3mIw0W5dg54NWP9OoKBY%2FCA5fSkUDd9QR6wIhAMpD9GVwszECvEgmtMqJlE6bPCuP%2FPq3pEXzk1Zfm8WIKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybqksRwdfFnl%2B%2Bj94q3AN69eDXpQ1fjn0qbnS5XwH1TIsfJZSRHFLmOxoLeWdTdxC3pLQmdP6nLiPDtyzHOug2%2BFAfpH4IikG5YMQG5Md5DVzxR7cv0Yd%2BnQ0dEkqDRqOw4u1fjmjLqiLpKxuEVKGKcM04epMczJa62aVXjSkBCgsouCPQ6XOwb%2BH1Q7x5ARRzOhYAP4Xx3R63Xv1gqswretAD5hnJofoknn0x%2BFjFqbSC3ih8ip%2Bl8FcLgmkgDFPuNVKwqX6aTAjpo0JSo%2B4yr7SGQeZP0CQdGcwjpmdYjtk3ETCTaSnqU7pFViS%2BrpB4I5M7rjvaqdXtaSZtBovaVjk2Ct48X6VuWOkqSgcbyh%2Bz5Ddv2QHyPDTrRjAFvcuzHrtwk9nwK6uJ0VexYdyurfNRr35aPy8TyB%2BxG6RT69ZCLYe%2FFjHpytVRBeSBpl3BgtSBzxHp2MGh99zeBpFufqyYKYUI9k8wMQOxsM0RY71k3MRah2mBTDtWIg5UbbxSWTUyrwCEYThoDdEXuEnfGS7fRGRwQlVDcI4EUrCIn9dOmWQ7Vk19mbVCtylU3r4nHH5Cgf7xBZ5DidZOTqA0jAEcCCC9h5LspV1zsvU34qFIXc64BgamC4BC%2FTPsG18Ts%2FxY2mlauJx2%2BDCh7K%2B%2FBjqkARKNxsCPVWlKn2HCq3BeqTtKxFuf0Wt7HEH9R2zPKKLfGwPZSzeSRCOPrwvUqzr7v%2BafCx9D%2B1YwgmDnJZETQLSInzDWsKIv4IR6xOjddQUev2It7fxbFfVduZTcwV3U1pEVk8CkG8zZSLWb9QRokNTcOspX5yaXx4DZWXuMJC%2BFgHswT%2Fv2PSJmrtFoax%2Bb7n7x4JnakYrFyBpXENojj4aPbotR&X-Amz-Signature=2b11c295daef441b4963001111c304ed852e885fcb97a4860225bad1da2a8898&X-Amz-SignedHeaders=host&x-id=GetObject)

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
