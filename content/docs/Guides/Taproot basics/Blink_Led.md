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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXBWVQOI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCK8q%2FzlOiNLsOid2S0IR4EDGmxX2axvUqEesS3Idu5zwIhAI6Zu0yYT5bL17hU1FmTtn5krFfabW0QNGmz7DoDP9lVKv8DCEwQABoMNjM3NDIzMTgzODA1IgweJFWvmcSNRFFv0Boq3AMxIuX0niidVS2aMUXfSvji8kZlEG86JxCzckclIOGJrDfpFi2%2BZXMeT1j%2FclssgX%2BA%2FpexI5NHrXb34toaycBlpzKzRMBplusFQiR44S6IEwEuT4gObcZmab%2FiZRGqRjKdPJnkWOzEECjKrLfgrsvIB1XsggPIP9CFKETVOXUuU%2F6UdwsVvblIK0pQXXlCtyGvp93YuHetjEyoCuraDZwdlBccYgLwuKd6ErSVTCdVBiLvdXRy2njbXMemhRWeRrV%2B%2BSiIn%2FZdZl%2BbABPSRgtvcsOZFz1t7xMwmZyWGlRB6ENgM4EQKbaeDhwQRVK8p7yS%2FccvQNEuk7E90Yri0Fh2aW4xJAg%2FUx9UHmXCXE9JDZGeKEGi2f2%2FNntc3l0DcmF1fb1dq36BS3riHdrnRpjVMd0ICMdiSHaTBvfSGOVF4URGLFNT2sYGGMHg9QqffPmX2dN44jCnIEkBKEg9ScgJ6d9Tsnp32bw%2FOg67qgDrFwyTl1Cz%2BJwHu2jv34kAzWDTh%2FKd1%2Bib24bjwr%2Fq2KzWvSwP5K8jbNHtrX8ASeJaHUMvro9R%2BeaYNYkTpPui2LAYTVZ86CaIm72WWie4yonbNwIAo%2BOTEhcOV%2BoeCZmFkojzOLeyL6BHJVP7UjDnqfi9BjqkARnI8Y0JpADex5OtpU57JkJuzHadXmgdaK%2BNokeg7KkfL0xO1p2U9fj6QEfwg6eJzHrUMfl6ulTRKjI7dT%2Baxi%2FH5fuUSWsZwU%2BI43h68Wf83pUuGiR5fYszMytvLG7MYouBONYD%2B9njrXgYTLa0NOa0gA0HRv2rw8yXS9%2BkkmomYZqu0lC12f0E6MgaAdeek1HPivcT7PJ3n5PbZ6k1sYlYuaDX&X-Amz-Signature=f9f415b67104b46012cb7a2b4c97b80884a1c53f65dac72d63cac72406741dce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQNEQSTT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQD5Qo8UpGPKbYyKH2z6klQaI%2B9BL3mjsOfq1e9y2x30OwIgIiKG%2Ff%2Bn52z8DRH6825%2FP40E8KhYe56Dx4ZBlvjbOjUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCg5wrfHlwudNThISyrcAysZLyNZNkZywvuaDRjyQ%2B5VgTfaM8lX0jKcHjc1e4T1MMxHZY%2Fg2Wo1iaOKw49xq6l8rCbX%2BkB5x4WB3dYB5LwkYVzaF7Qlyz1X9L0mv%2BWm%2B7zUagAS3JkKr3gXHPf5l8LpkyrLI5kfK0ocykoF%2BQOZzLI1cE%2Fhw%2BdUyG44vNitiYW4%2Bl6%2Fi3mRhQKnL9f7x6ae%2FWgWD6eMJcSKHr3MDEflVkzahZH7rhcl309d%2BxT1KPJwRP8aumXKqVdBScdqlsnBAM1p%2BG3KUPtnFWxcQnlyONNsem%2Bqxw2xWEhITdhFAH1pEjyCKDttRrn45QiRFAiuhNt94aLDUm81PXSM04qDXj7tp70JXvc7IVCu0ShFuETzZN%2B6iIOZxD%2F1NTseL3u6HtrqsFiy5%2Bts%2FM%2BKf1jsLopNvyu00krsfCPTigyDiJ%2B%2Fcezvg9xRIsDDu5wvGSwQDMz6NFpEYRIbhtPuOV4dkeMcKrYXVRAsZ3D5uquA4ha9C5Ea4pbkps%2BWUuVQLttAZe%2Fw%2F2%2FkUgnAXThTmbaPCBybQn%2FQmxx8By09PpRAVP7PX2rH6ebOXiPstASHHLkyc8wccjb4HFUz%2Fa%2FcD4queiytrfkEjb4HGsZSp%2BDysJVqMNb%2Fuw%2FG1UnNMLyq%2BL0GOqUBG%2FhlwYuy5mlASTrAYl2gvBlKqvWr9H9nxSmHqGrEkezBeL6ECgsxv4Q4BG1W4SJPxElkv7xL77kLV5VonZDJlCuAc%2FP2A5jKNax%2FFU%2BitZWZYT0LdEPwZqOB2M1IljUlXbQhHMo8g8CEbiaYDJPEfS09jlckOqc9drqyksNMwCU%2B2Mj%2FbYudduAO%2BosOSHSYNJPGTYCzUjwy2fAcaD4kLjVv0UIX&X-Amz-Signature=860af6caf05b6d97d1275b1d1839c3e6178a87629077ad5ea7caffb0d09cbf27&X-Amz-SignedHeaders=host&x-id=GetObject)

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
