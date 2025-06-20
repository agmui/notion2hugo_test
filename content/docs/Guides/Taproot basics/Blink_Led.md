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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHLR6TAD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvEjJANMn1%2BqRTbDJG%2F0pYzBkLMO3I%2FIHZVct7UJuWpwIhANhhgFkJc7npD8CHlCODstEvnZeYek4es%2BkGNWTSCyNGKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDlxEttZ8JPCQdGsgq3ANmvaAlGT4x%2F0hNq%2BOii81qxQW98EyBoJg4nWRhvdS52xhSc5%2BtlRb9iTBivobC1azvUVBAYccahL%2Bb4fkgVg0bSH7sInkQ%2F2zHWZA5AF1KaCVVF23pKcsS%2BkwicloaK1dTcMGsIxwzgfOZk9j8lFQM2qNBtGTylRzfnwuRo1z6x2AUAiHKDOJxlJqe5Naz%2B0GiLIgqP1td0Rym%2BGpXbxEl3d4aZDGEAMtZt57V9NzEY2BImYMbCun%2FEA9IDDZk5Lp6pDSd1z0lGkbUdHEt9A%2BJwFwFrCRQ2vL4dojqsjuyGST2QJGbPRnwduifJ997QKM2d7lH6DbfwfR1PgDUMVFHoJdcr4p3AGk0whkxmbZxmwdR%2F1B2nRKwDTA5ic6o4BzmHa90uWwXc0jLtLwW4wHC2rakOZETfnpRDUwbFEHekFMjt5CC7ia24yDVIa8LcqBEAYDql94O6F%2FvFgh7KEB%2B7d4xqyZ3N5HNjpe%2BNufCcQWmz3Rnjk%2B0aBSsxGr7hA6zen7h4TJTBe3mQXfPVlI7eiOC3O8cQWB4rTjUIIpvkDElFOMTWTF3geyCa73zc9KeM1NT3vR9ytXPXEdleSyTQonSavg2r%2FX8E0W3Ur96JxfN1wqQhnS3kRNo1zDMstbCBjqkAWLD7Faqm33O%2FmjJpbY7F1mcar5pmmK%2FyFWKDW3%2BgcaK0ItxhUdaFRVia0pFB4D9IV33B1%2FPW%2BbmqcRwOyDo1HzXCgSuNmAYtvbqslbidwapQW%2FeuarYJPwlTMPxtQK%2Fueve549ORjl1DatlEkc9V%2FTt7OkWcEdsiYLrlQYOF55MoebZWIUo0i9U728uSrT86lJye5lBmNxzmVdsqyf6fDkQxwFv&X-Amz-Signature=375072aeaa380ab2c69cf83714c7f069cb7c2c703cae04f6fbd04865708165b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNNVXGV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB612utZ27pWL4eGcgZrGNnQq09R9MNQooS7gh5xMcbgIgD2aA1xKKqJL4tOLYAWaBA2tcsxt%2B4iQ7v4GxexE32g8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHT2c9T8QAEpqIdbCrcA9FMyVvQqdxqVkwVUBmfuBnJABU1hNsh%2BAD43Jei8QHfs%2BNxma5zQ0xgGtvoxZXWPRz0T4PABGpdkg09nbXPVL%2BwQnA%2BGUQCL45Efub6z0%2F3rWkvPsTIhExbkzOelmBCDHtSapF4ZGUC2t7FRWH6G2kmAMNK9Hs%2Fi8yxPL71Hnq4spr7fgMgYSosL2D6dwl08WSeWKnK%2BejOxWYTg3OEig51r1Ryehq78hMgLhuyZVe99HgITXe5Gc4gTavDiPKOBRXBUJRPhIeZuUWTmF5fAnVY4u7MTfiQ3jc9AKR2qvzq6%2FbBRqjYWsRlJk%2FmjsyWuL8JJ7TNRHaB38Llu4L1RgB1yIzaFvLuyNxt%2BwTJeycQReFwMDMqoD%2Fl9L872wCO43yTJIbY4RM%2FhhL04nDXbnkfcc%2BLCdsnxQCJ4fFMfoZs%2BRirrGSxeRFR7Pz7DmMcixXEcgujll2Lck%2Bl%2FwbWddg6xqEHVu5Nv0XCvRs60rrU88OCQFUAT7e6JoiDaTvcipG8FfRofw2uagtIw5dEZViKEQhZWkZjJcjNvfZVaPiBQSD0ncGH2o3wdGZgThGpgQa2lGIMGmqlkWpJ3kOD7OpUelGr53Saph%2FuV4thkF9k8bLibhzGoWurq4OBMJWy1sIGOqUBN3b99IHYJeQ%2FgORJzOBSV16Ri4Yp4FwtQmVm7N20ATx3Q%2FY8eWTQcOJnVG38JSgN3IrLPMk3dwjwdJUXcq4eVlzHewWnGwZ6ac5BWwsUaDfFuvWUyfBrRyy0yZe5g%2BRf6fkiqqibVSdWWevsNEYAduP4AVnj5YTK7WwpPYp0%2FITL6b4sA9spPvCDSGU%2BswTl4ut2IyR9ceYrkymXTcVLoLGsLuCJ&X-Amz-Signature=ed25a82565b825831043778451b5091c91cf78a53005d9d1ceaf7f8383dc4507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
