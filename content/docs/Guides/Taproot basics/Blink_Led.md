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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGND6HC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQC8DGAlGztTRCuLAMIWUDhD2qub8emaJHWb7zgagSs0IwIhAJZo4cQlW0%2BxAKPRvzknuN1xeItRmERI7mXn9KWeaDsIKv8DCFcQABoMNjM3NDIzMTgzODA1IgxXC8eYSivu9DCkLj0q3ANlGqqWsLzJC4Q1rKezPojC8m3ruRiu%2FLEiQuIbpbbBvTFKiA64%2BkpCDdwz04pq59JfoBSvYGvztyZQwdrz9S1nPHfXeg08CG07yRavqf0f1ybpXTwx0md2PzcdFUucVxqWlCkxt%2FHflyfkbnA9YwaaZuSGyD8tvdl3JONpwKrzlOTGu%2Frw4D96nd2gblgV%2BDb9IZ9a3yT9Di6eOXVC6s9vY2XKkbLy%2FhE%2BR6h%2FH6tUi%2BMUX%2FGPfq1zdaDVEFk4DxdKeN9iwxCccStH8aKZGV7W8j3Y4ieWMRS6alx03dkFt%2Bvtdve4mpCiYzQqtv2x%2B0ayJFT8pKrnHM209UU6MZ%2B87s1gBpCmkelxk0RLrlD89BSbMYjHxAOi1brSSKY1ouVrrd3s0jSeuGpDic5GOh4zV3YMqs33iZagl0qgYhqzqFXk%2FgTKXudyeeeENMG5tUv8BJ9%2BPmyWB8YN%2Fn0ucSRqNS7WtgmPIpQ2%2Fl8rlvU8I1EF398QtIRUNGmvD8m%2BUNsUzAzL280Hp4K1WXHTbjDf0SRk9lw9kHq7ocSZjo%2BGyrOG9AND9Z%2BGgIRAmpvQDi7MgkHboJxH8FRTZvnx%2BfRv5Hcpgo7eF4mBi1olyMSipPG7Fvi70EMuQKb0xTC1qKjDBjqkAYs7NYhpWcHWGE27yF%2BNVupYRzZn%2B9MKWw3N13p7PVhap%2Fs89y1qgkpkIgI4ku8SbgEj31GMp%2BzbUT8bMd5JXeSy32xilWgHGETMLZy4DwTp8iMFvPuCF2iOqR1SEMwi4rmK0XM5M8KswrXBIF9yaQBS%2FC61K4HrW6Y7e1LYW84sqIm3AuoPPW1pQ9AkXNHUADFjVCCcLNDlTirQPi%2BXvbvZNRHJ&X-Amz-Signature=1e89013ebfe1bd6fb8d1f372f45af29b8c2cfb599cb14f686425139289701968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMEZPI2E%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDWn0oh9zFaP6Chgw%2B5FwazScYjqPwXHf%2BQ9m5ZxEWc8QIgEwhNgck0k6P2xNJWywyGZTBANxQ8H4co%2F6F8mLKAKb0q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDA9%2Bx7wU7yVxmgWweSrcAwe49SI0WyepymRWqcTZEXrBbp4ugw%2BtSrOhGUZfwrwhBz6tvgf4uv6vJG1LtJSGaF3NaA2v22%2FAzVCxW3mbiQp%2F1R%2F9D5Zy%2B04%2FZTgwVqo34fIUVjt7KrBKEzAOg%2FLwJO5FwMlA13o8k8wOG0Kc4c2td7JuOgrXdspTSqeyHwrcyg04sG4kwgOJvfS4CPY5EQY3B8%2B1l7dZyxcLuutT3%2FCeQQAP0ZnX055k%2BOPZYHRnZS%2FsTfMIAYFOKCRpgq9tRD%2BO8G2%2FhiQjqp%2FP%2BoKaEeqodYvptFiHk6yfI8qB23CVCQ%2B3KiHWEJaBe9AtbQHbnDcGvGyaWO2USFprl9dP63JZ85W4Kp%2BXt91VGtJky2IrhaFoRk32Dn1AVNk6Nx0mOVcKkQagYSVeVVH1ywP3dj6EOdi7%2BhB8ecwmLXrJQ96HvQon5rbd582j4%2FmbsO7RYBmQ4eTvxQw0j5NsWRk69xHrH23TpHWHbAVFuPS3gqzTV6HChbqRjaXPIE9IusSbHB0DLUC4WR3fuxbw0WQ48V7gqe1U8ZO9GNZO5oCDI1SRUj7YBPJlgbTuZvNQUEFXMvdZYY2areCghoMVMz8qHQnJ5F42%2Fr67Qc6y2FyWb78DFdbfY7Jw2OXYiepOMI28qMMGOqUBucBbSbWFb2NNB9ha48PCgfXZKUThO2ib8GWG678sEhvsBQWG02dn2MlNN8nLb%2BYYwxoRkIwq79B9lOGg5Mv3q2GJMtJ3kcEBh7uvMqwAnECLil6jAw80eBn1bOuhstwt0%2FMummgMrMjD4SUA6xZK7wxfs9tzUq2mBBBN5AH5B1oOfNeH1Ej7qB6Ch9h%2FsWPaSeLzoPU1mFraKbHAHSufMASeTeB3&X-Amz-Signature=3e447c74cd168ea09eaae6b752b13b36adc2c92c20184bbd3c88d80d9d0ae935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
