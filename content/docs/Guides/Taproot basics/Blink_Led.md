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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZMTI6TZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWlau1bwaxPYuO%2FtYugcxknyiTt5tEVj65mSjz4CZ%2FPAIhANbntT1%2BStCcgwsw0UJ%2FXQIh58gzTBt07pGBNHXYkJduKv8DCD0QABoMNjM3NDIzMTgzODA1Igy7J41a3QVLQHLxPWYq3APTntyqk7PBa668TDHxuUdhjCTLDH%2FydK3KiTQufe35E5GjT%2B6ebmDOi7x3701SAm%2F7EVqFSRpKP%2FkGx8dJrrDIkPvqWGw5lqedj9HZoGeiW9AzIyrBG5V7n2TFPqDNZEcSKCFuN0Z08DFoIAK6pZEvWclmsmrejdHQoz7OV1SC9LtvzGk3UlViXeSmjhsvoGs%2FXHNvVlAE5L5WK4AOxV5zApJcPYN4mghrxeHuUCVhQZc6J5EkadcBEEKc6MJEUw6P9uiWK2Caj53gNNrchSpJpfHnB9hf1a%2BB7RBELsGWj1kf3zaHj%2BuELE8FXUte6ds2vRGiiwvDaggcO6mlg8Ix0GkOmoaDoKUJLVw7%2FjQgNYLpEHmLbJ%2F2y1biKR2cetvrCgitSiEwaV4lS%2B2ajf9u6DYTzwkOX%2B1uS0IGbd0A%2FEgJFn5sYB2WyqhbHy8LtEE90CWbhyeYGhmLxOtJYbqIM0JCZMjnKRmM6iFqs5aOJUx9lekPuNntCJICh5vRv8zlKemQgogMuZ5aoXK6OlWM7cf59Dy5vxzUqLRylFSGVXlhdZLylJf4aB4oK3ZkLRiJ1HIU9mCud3Fv7cafZwNdEkdt2EvBXc0V%2F373Nknpe%2Beakj2RxNCUC4I%2FoDDwiZO%2FBjqkAedvnsufF4%2B1kWNWvFQtyarNYhYEimNEql%2B2CmrUDXEE6pa9GW8HKKg29F%2BcGiB5FzINQW8geXGyg9d9wZOoXajIF22VY3EMokTLbe5kpNwy0vFTfdaH%2BOdwGDFwm8U4u0aSSqcdKP3ivmWJQkUv2IfXSq7VdXlno6VKGPi0BRtbUhnKE9fltwNwvMuOiBxBvhT24UKCc3dIuThDYogY1ipoIRD8&X-Amz-Signature=1d34788e18ae2b1162d30b92dbbb5c388b4743f9a52ed8c1a4055a2672da92d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5IXCG2H%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcopVjjrNPPemOU1PHbFeb8%2FrHWcpq8m3veywMsXbU0QIhAMe%2BuSxUx8RezNiFI3LFRQOfeu%2BHlJKaNKS6p1S8JbNPKv8DCDwQABoMNjM3NDIzMTgzODA1Igx8lH4vGAr%2Fxnv%2FGN0q3AM%2FrK1KaOijbQXa0x3bfOkJiNGw7tam7rvwLEJjg1LsaUAJCEZRM2MOfB6KGNbmSylyYITMyDMi2uifkZXxMMnWSS9T6No94mMuRC%2Ff2TFflGhXnqEFmzSs2NK9pUFjp%2FOme%2BNtDCu%2BQn8z4qe0ZFHVaWAIdW1nNPx3zhXkdgoCfQYLGIUQ7SZkd9eO1PyVPXVvtH2piUEGeePzNaETVRtENpDzsT5xqOvva8o3GYc%2Fa4oMU3zO81s7rzCvDlTwwqIIQ003SrZxFq9NFVXOV7svTvgbgasCAt%2BIeKbQeisoY2gyPIOL02kdyrbVDnGvPtfszjrqoweJEbLhcav6UPsYaG4%2BS5zy4HrYookHY1DGSFW45Zi57pH9XUL7VhuOtAq80ahaiDb4cUGKuwoWbd79hI3dD33Fw1qSexdVzCu1OpXu052eor3T%2BmBctyAHooTO39a9Rsz8Igt0hJq7kWmD6d7hIUEXxMpFCX4577J8YcADC%2BsbSC9vt9A4AZmfm8q0lQcqMcHa4vmIz2e89fsmQFjQ4S4ky6juYI3OHK57akwwZzuJfOma99VqO7tcEIkoepvQUtwmROVG%2F4TNzKwUKvfAnfTAL7lMEbddK%2B1s9xY0d97jflU36%2BP0JDDGiZO%2FBjqkAVYKd5lMf6z31i4j6i3jB1ErzYICmalFo1u6hvR%2BXF7s5B4onHXM22bbPZAW99VbrbKWpFwW6C0B1B4eo7gHQxOayKwxzMiR%2BzzV4KRpLcFiqs2OTci6dEKxIWi9v7HUIAfFoSAkICQac%2FAgbghlTk%2FXEOe8i0EnMbO9ifnZ0bf2U5PaGX29yheJ7Bvn2%2B3p2TxOk28cr4v9XtcKBGSmsIlhtfzh&X-Amz-Signature=878f4588b870bb78569266973d40fe33d4e41a72b8a33105e85231eaf8851d19&X-Amz-SignedHeaders=host&x-id=GetObject)

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
