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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TKTLFAD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5g9yKNMcLEHNILzmZh2HGOOmJMq2znSDL8%2BtMeijMgIhAKf4j1Hg5uJZ5vNJ1OINOvNaoqqB5um3epzbcXbkuylGKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9im56HRkgdlswTB4q3AMpKSB3J4rjKsBfY8ozXCjfggqGMzvncXFtHAbJHRU%2FqY5ig6T62Q8u8OZHrjxzDtiPeTadrarl35ZMTVUB%2ByrYYQT1doNmQdBI7%2BNJJI61LkxsJolMh7XNz28gYMk3f3DsByekNjicGrhTSYIuqdfui98fI52x27Rww7nU1EMAaXtLM6t%2Bsyi4iqmt%2B8SuYgHUjkV0SAI2iacAeZGU5xaI9YyXZIvUX3r4Oz9rK4sHGKEU0gNDdMcZb1fproHzOUao47k8gWAhGEBpJExuBMNaXrYSP3Clil%2BKBlOy2KKR%2Fwc7%2Bw99A4mz3HMoNI%2Fu%2F%2BrDmxz1IWmo9DzO9xrEqDULO3kskGsvURF7cQD996aNcMsMqe7eFuFS7j1yVej5fx1s0Ak9xKOpPgjKl33Pk%2FlqABrxmkk08MQPDsF3naP%2F%2BtJ5eCO2Tbl37lyDexufYBJLTedvbTmR8WT9zfeiH11pqCEvHkADd9vfFr2QaMNEXZzqijsxaWAWD%2BdotLtfezf7%2Fh4VrFXbalwtxD5zqQS15qRJZaKWsKNp1HKlTTqmV3rlKTR%2BzqmVrXImWDft2zmdgF7N8bsFZ19p5mIhJATplT1VBtehKHcfmuBzyWoUfK%2FN3uOGPJceHH9DJDCcpve8BjqkAVMajEBNr%2Fj5kWbHawOo2WMsp28zMwD5wmWcoXLT7p1dqxn8NzCGyjbH71s%2FCaX%2FndxWClsRpQiYg11BBiIHMzvhk3fo1ffF4%2Fb76C756obC3wxr55puAYn1LdoA%2Bjp75WUK8HI4sKYRlBi4WAkIO8mEIFR7C2WO2b7%2FuXoz0Nw%2BGOxDgLnbqGAoK2iaKuTU2CSjmYIseYp5SlUpou8CTA60%2BVm2&X-Amz-Signature=f8662d788555511efa38ccb76793c005941b398fc0fe19e0bfb8625079acf365&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKBX5TR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZFXXEq63RLV0cfPX3EbTCQfrjC8SrkTI110IqLdgMjgIgdb3u%2Bi0SBdoF%2BZPbMEGcODPtm8wk6Cqkd5h3L6WHpR4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJNJoSuUBqAVZZhayrcA5Z3nSOBmwq5ve3chGeP7CBtD2k%2Fxoxwcscz%2FHqTkoPdjQbC6vt24Y7nb34cjacHdiuCP39ZopvRHq1Zy08vq6vLblGsjjoozntckfyTJ%2FyR6rFxdxq0fd0ySFlixaG6IfoXN7lZQfqu%2FB6UWYEw0Sic3shXSNqxGh%2FBEHh%2F62E58%2BI2CtwkQ42SOnN%2FypoWUmm9QiChnKef7YP%2F8QE8rUdyeTB2H7VgPbvlu3%2Fn2OauS8Ihh1818N9Gns%2F8R2nIyzGgaMJYnufUErMRQedu%2F%2Bu2E70qn%2FXHtYBQfSN9cTfrUDTG5TVftOEvrOh2tS3EgC%2BObscnFpihkmWagkbjyZK9AMoLHf7BjikomlefuoZrHH%2FEGa%2BHEAOFTgbVCe%2BgSMuWIAkdyqlsX%2B2PBpAGhgtQ1Md55e7X8aHURJnCJFdvbQIYixbcAGyuIDkHQGzI%2FAX9sIIAZrRu7meTywgCi33S6JbxTprubAIcGd9cXxbJ3o%2B80RbMlP8fj57fpcuWzmH5uNmJAlqeip%2Fnn%2FhBWfIX%2FICb5lVYDhNtq44WaNP5yuDRtnPvm2Glum19JXTKGQxZJl1RwelWFKR%2FoQd5%2B%2BGU1WDTtfD3zB4qNmIZZ%2Fl8BFxAh7Ez1p%2BJq1lkMLam97wGOqUBI6gWznjlM0SVzWUuGxsViBMAXcNBrqT2DC5zgKtnGC64gTE2R8BcvO2ZZv0te4XCCTLlUqV18flZZFqtuWwWFj9DwllBt5oRaDd8Ie0bkSsYaZal7%2FGzYju38qivPJioDf%2FU6It1jnvyOZacqhEGRmEoS4sd9VVYvRBybrlDlVNSp3XfgNrbG4xQc47PW1ySXb4GMxnWZ3e2C1psSL3WOSmQZUvw&X-Amz-Signature=b041e9e866c7f7e1c442750b9402246d2f0e5c7a5e2c7f7b6e343e1b2c2d5b57&X-Amz-SignedHeaders=host&x-id=GetObject)

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
