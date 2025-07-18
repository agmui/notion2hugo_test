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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RRXMCVO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDLS%2FCMufMRomui726DIYuqvjXABpcavkbXRmQ7%2B3rpdwIhAI7pXyF80uOYk0%2FTS0mqqWlYgi35Ki9hOHfJ7AVyspfdKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykbQrwO5ovH%2F6GSNoq3APkQSUP221iC%2FrtYag3pfxvWMr%2BB59a2xi9lo1J4erDS3PJ1YtERAhvbUaquE%2Fvc1trvCQzjGQDgCATekDJcucu981C6I%2BOZvS3xfYBsxkBAs7hzVsIDedHl%2Fubr7SsC19fEKCMMyaS4UzMrfusJUgcmU%2BEY%2BXV8MymVs06fDTM1QLCiANs0FZ7o1H9Nhw7kCpkpnYJD%2B3XNsEwMOkWBBdAh2Kf5p8QfM9SyPXAx1x%2BJou9dI5r9SkGHhrD8oXMNe190mavVktFXjOm4HUV9ISLDre3Z6WRrUWL3u%2Fm1YZqEMPXsjv2rivrSG99DW%2FHoQk0vmPS%2B5E7FkyixuNJbBRwiyZjnUWd5aIzVKoo0nfAa%2FW9X7EGo8n%2FKu4skl9R5S3RZ0%2FAMYVtUqVDE%2FfZHPO06nXChI%2FOlQ6f6pfQg9AMgCBJHNziGYxPOI2uupathwMM%2Fii%2Bmk2b8bf79vgHIyYgOyoIqnYzBtWD%2FAsniDIuJfvumhrqoU3CGypYp3oOc3quas7g4UwetTZ25BUcOuNkszWm1ibofV7Tz1n9RAT0jW4it2pKBFFJGEXJXHdWrJS%2FHUe1yd06N8qReXFj8hxAvV1lX6O2r2oHnATpPPrj%2FQWvaSzN8FsDxP1TyTD0z%2BjDBjqkAZFiGo53G9iIYParAd7%2B%2Ft2BVaNOrbBIawhhH6w77ihCC3rQQzYFBYptcGfuc8qFIo28mkwrryJAGI3YsgqzO2YigXRKOqZh77OAA353ETw3YrCHydOseR6Xe5qWUssy1eX7ZVPpsUk4w%2Fgq5IYzvK%2Bnnv2l1fK47e%2Fmn5fv2J5zjV99XDPSQdljcPspcCa3Rm1idtjHS7ACV%2FTJmWKdTcr4GqJE&X-Amz-Signature=64bb48c05d8ee6d0e9bf1bd3beb398ee6e4b8db1f70e956354d97842376db3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6VL3LQZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHaNytGTw9%2BQLNkDLaLfrmdmVA58BDFeCL92WB0KSZbMAiBhqi%2BBFqsRkca4%2F66wE%2FODXIprriwErXUKbFm%2BOGOgYyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7DIOLWbClyNGxGbWKtwDs4%2FO31OYmTtB6%2FwDqWUFUoC5Sn%2B7Dq34CAQfWk7LbUpQITnpQhe071fMUlf0am0I0ijw0pZIYFWV0mRXfmBSPb3VJfshqLsiyYuvSEa3wL9cEB0iNaoBmikt%2F790NFH8%2FZ6y5y5mFSO49%2FHG%2FP1Fa0B%2FaP6B7nZM24uoI7fvW1qzLIVvXk2jJNuWM7nyULoCwRd9wxrUcObdLhvQNXAqZzOy%2BS1nci0LQA4i%2FNWg8FKSkjlS2l50%2FiOanboGsCV8QZ0PPQQMKGItsEzc6c4FGI6tpRhFNCeTNiOLcppDiOSJ9ZW1WKx8OOnolM2aQC9P7432VwL4FCrgDShKUjz3GLlqdgo%2B2JMGPYrWoCE1LJl50F9cZRl7DXyN9caOFO%2BG4lvbw%2FzpKVOzVq0y9lRnmzC07lLRrccXEt90bMolI%2FAo7egj3hHCrAYf1HTo3lGtINu7AJRpi3Ga5w7DnOoOaUjg9IT5ftH5jr9AAZ2h1AUIGVrLmQhl8ze2yZ1UqPUgmF33ZuoHTH5B8BHhsJQTRRrFHmw%2F2fy11vUQtJR2bW8eSYhuD5iYWwKs1RdzUNnpSf8hfKQ1xhuz%2B%2FJauNUxxojM107IPQXImUyzU1agfRDdPst%2BBLy%2BjuSOaVgwvM%2FowwY6pgFxTob6u0mdbghlakaqwnFbAofLMheYDvN0iI%2FQ2vcNSxcViEIbtoFW66QFhHxmoSApQ2oovkC01clcSeEJoNQNUuQ%2BNpBbAwolHDYDDyfy9Pi3wwSvWnAofZmenGCLJmPr4ce%2Fo0t2JLvDy%2FN3HgExy6pdL2UcGe4YoWHghA3Hzz9RHHtFOlnoHfWaVdA6vcZNxdHwbt8On6FSVtLUD53VGTNSKDFs&X-Amz-Signature=631add809bbcb075d0e2fa4fd7c2aa1a5656be4ae19ab024bd6fbf080a36f8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
