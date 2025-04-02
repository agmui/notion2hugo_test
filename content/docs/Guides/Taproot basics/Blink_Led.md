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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UEGT3BL%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQD3HaslsldagDptvkPMuZzboqPY1XxzxSvMAVyL%2BtXT%2FAIgcxWwsBN%2Fbv8c5zXXwp4WB9%2Bc%2FK4vbzsNyqE01bIgpCUqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2Fr6dPNVX1mAM%2BejSrcAxxqyoJqpySjlEYdKNw5o2sWKifbzbzLzBqg68ng2r3ik%2F5y%2B5vkFcgC%2BXSw%2B73%2Bh8AYfsjxLbOZuzcNuI%2FNOzeB1bYY6wDfvWWp2MJUnyWbT14%2BYD8MQCn9%2FUiGPC2BJZe2CCfaXm28kOt9bQIANnpSLakESrCVy5kA%2BrrYLnfwPt3kgADstGx%2FZDPyf7F4CmbZ7pp9gzm857ZMHX2zfKADK6aOQF89cGbbMWbU%2BWRlmyH0dIfRI2WGrSzGZoLzggDHtDD6hF5LZKhztMVDJuD03hMaBqVD7GfgePt%2FhJsDOaS1%2Bpu1O76gQM4KRix0vcThyiViSFm997T6%2FolSLbfRFS0IR7E8x1fXNzfta8%2FT0s9MAocyRxmSZ8kACB2q92sYv%2FGOGdUXMCgSdYt9h5sy5%2FHD3nQ4lyb%2FN3wVCEqjwQLwIBO70aqMD%2B%2BQJxMAbaNl6G3aV3b3Ks77mx1g8SfSQk4VAeU4lYnjeRLaNm954oty%2BXVRCT%2BBFVfoRCXmzn2CbLHTJP4EVmcoSxBM7lsCvkwe38vlnefVD3%2FFF%2B9ybV79lJFuOLQWj3oUrTVMNjT50rCpYmBLPaklY%2Bk9XdjPaPm83sUH2IwVGBFl0hjSr28H%2BChwqPONe0YqMIbztr8GOqUBDC78FAEtmti2OgNs62zT9GunkPyDWXyt9o5HoPMExw8uIJoCH5F6ZPpdiIZW0GpLzMx4Qy9vrVZraxcckfO%2BcTN9yTskYhWfIQMFeuTPnZUeAqW87ZTL8QIdHIgKR0klqjhuNbT7GXBtr%2FuxUt%2BqH5SqiQU3Zpit%2BbtOk15sgXO7jzWJPpFMHUaNE5txLvAMB7FR91DJsVMSY0rbYjTeDCAPS7rD&X-Amz-Signature=bcaeea1befafbba0a94713d7eb988e82e3e772ac10308639beb6eb4b01f15e64&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NMLCF2J%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBiYyfZK6AJUwSQ61jfL3k6Y8LlG%2B%2F3Iw%2F%2FeD8wmPwa5AiEAu5CfGeQay6S9CWPP%2FoaGknq4wCSJJvp5v0Yj3dvVQ9wqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVKQvlHdDyzJExW2yrcA2qBVO893JaImSXamPWMtKBI1XnMSD5gxPR%2FbOmbov46zYC9qupn9qrgP2Qg%2BdRqdYQt0QrjbEsX%2F7QJ%2FK07wGWPxHTIARnwwUNaa7O0GWD4q4AWwdgAOUdoOeH6%2BkVuRp%2Bu5tvXBvKMU9tqK8BJJt%2FpmD0oDFRPkbURWCzZZT7MS1lOzZNyjpx%2FQ9PjfDXsqFDGAgVyTN1uslAsQczkamuWyGRvDe85AoSkhRaz2pYMF%2BdhPqEU2rkBktu8uHxRBaYMrQEcJeF7BlVoyDgQdH66U2Ae06g1oQHWDDf2pRvAnzU6ZdwsT%2BlacM%2Fx4kvbuur%2F%2Fi1VKwQ%2FY0HUOOLnsdgTX5tSfjLoTTidMtBBpa0HH24JA53Tp8m9xkO7MSXM9TbxGtG%2FSfwOcJpvm9z2UOMOisv7XVFYyepaERW2RY0yvvNB32TxL4H2VvHh6egQBNzS2bO4mBToiOfqmfijSmYcIJL7uR4Mr8k8htG4rmmNsUULqW3AMOTVbGxQqfeTmmaK64R5SAYjU2IONvi4F7k43PAQmmwy%2BJgWWMgYBonPKRwB22Oq5is9d1xsNAz6WUPHo%2F38fHpQwy3Oc1wvPAoWXVwdU39uwpMxm1ndRC5h1cCUmNveHYj9IDMFMIbztr8GOqUBh%2BCOIIYwFg%2FMZ36FSi4sJMMoxwkEV3mrDP50aARlIPOeSRIu8aJ5Bl6xS5sgG0VUyRStvzhRp6b2kAeAzhGSG%2BEB0o2Ecpltk27sXcA%2FPRtoew36%2Br%2BbGjEt5QAqMsPPA6LP5saBEcjaQrh9qhzSlu8BdKORvg8iXrZZTr6FCeQVBU%2FvJsrvUNghGjTZIvgXVB9AUxAMJ82t4unHwxNx56MtZlfC&X-Amz-Signature=4f427d3a43b8c9493bbd21d9dfd1e927ef4557661b6b90dd7237cd448a4f8e14&X-Amz-SignedHeaders=host&x-id=GetObject)

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
