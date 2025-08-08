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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHX6TSUT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIA%2FLnfENhVERBBlZ%2FVayM6HMU09eIkGscjYn1ZZrW0UKAiEAtOFVCxE75AoTFA%2BQoMiRp4xbhm9R6SshfIBIm9nj7bEqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkJ9imGh0GeFhup3CrcAxe%2F7DuZvhc%2Bwjc8dngHdkKtgRPAGxhvaUvD%2FzJ8%2BA38Q5erJyaxp317kGLHjQ06YMBZEVW6GZlJwqruCqBl%2BF1AUgyfrfsiFLVkkBNR0649pLDBPHct9hqLJ5pqMeq915jyeKYo%2BMmfBcfpvhENeo8nl6azux817TYZecRfR4FM82bMLxqjBAv2479LIVgjIy6l5TWXA7fL%2FRzfAbh1qwqkW53Q2WfP6eXogTaXCONTpK9DcwS%2FpyuJRBqWejDTueoVHW1VdPR67dHHRUXvsp4MSsvnmg6UlfVy3pYsA4DM271CmavUfrL7qx7WM8wPJsg%2BKFXx%2BcdRrFXX%2FaP06iri2jzwqMOl%2Fq8pn2timzuZAZvDMq0%2Fancsr1ara3R1Coz%2BIo0bNy1E9Ncy3QmZ5jPl2JH2yqLtWdg1R8KwJM%2BOyYoWI1ftpnh6rblK3o7g5W%2FwsjIDa%2BYZMEq%2Btu0Dlb1kaIFIinMxefylPLn3AytTl9eXmroxRT4gWsgu0nBcrEvz%2FF9FGfu9fm%2F7diecdYZzU1bn3wL8osZDL4CBuQ44a9RFON0tHbj%2B7ZVpfLwTLE%2F8elWxIIv5s%2BEYzoytxigvMSjbFFh0YOsNXiBAsA29aALujDO%2FiH9yLds8MK2C2MQGOqUBhpc0WEQ6GXrVRbN56AC4Uf5Ijk7dq5DtCiQ7XnLrmjjuknlPIdFYQWeeLEFtTxXmFxS2OwQiF6vxz80Kj12xsOeqvnfoP6ZgVG%2FCkV4nBEPp%2FVVcKdpUkmQIAHXV3yRh%2Bv%2FxDQBA4PXmil3sSHcG2IP1hVtY4ngdJkgCj%2FUurd3%2Bu7LLJo4slXDvNIb9XTYlZxAwuNO7Q7SGL3OGf9BiokyMZw70&X-Amz-Signature=60e60975f3e01b7ebcd64feb9b76e22a0696958e5b225e500bc518fb90ea3476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLKIZMHS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDNOQBN1B8fJvXCUOGLcnJxeJsJxhivl7oEwoXxftAstQIgFC0Jeor6%2FGVrIMrhi7sUj2ezfJb3Q5jq6w3jgPT49doqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FO8O5hiT4RB2SM3yrcAwBiQjFpO%2BWGNTB1XAmONY9BaT1gYE1RYHkbw7uEY4AaMp770iNU7cGaPkz%2BZbR%2FQIjRe3QRceA4bC6k3Dfitw5CiDP%2BVvo3AXYZ1yOWFOgxAbG5KUa3Kq4ypl0RlARmnfJr2UiUgajL4%2BnxO3Yqved1%2BxHvqa0qMAnrQF%2BbHONDl166ZcA%2B5H9nB%2FtBwD9EuqU04RLJFZP4pd2pXnuEjbpTtZZqjSYk%2BDS0qG0ZevpfNALdIINWN6AIBRXZDj5pTMYQuVZNH7ThHhCq4riCY6skod75TdPmFMqv02I%2FRDfgpRoAY6ii9J7BMdIE8rXqscbrDcoTMs4yJMWsVgpzTavPOUFUswXxNfrcXhyxOfoTRRMO2F88XKcN5Sr2%2B%2Fx6P7tBP1y9%2BQsB44m09O5FADJzTMgUlfOpNbDkcS3YDWBnSzh3Of0WfUVggiL9dlJjv2ZbU%2FBmXPmmIIzlF3QjoDo8bXcDf9v3poCkznqWv5qw9fYwdvfZ8R5CftdTbX9B02XS7pFcngeHZxTP0MQijp%2BW%2FdAVs54piyGvCig2PIvVSaVYkAq5EwiDO5gjIIWJPzRnb6Z9QcJ0XqUQZkFkwnO4wTy0s8HvhYaHJJaJUcsFK2NKq%2Fi0LwRphfkVMJWC2MQGOqUBJZz2LrbbGt%2Fvjv28VXTYcBoarNXhB4Gi%2FRyyVTCkBOU8uBJC4Oyk09gLBJd67gjnY%2FU02nU%2Fp7NiT9MdXE3LfCySv34RBYHqf1%2B0jxj8WGXISQoaZCtr8YaiJoZOyCHp64ofR1OTj0WTibNYMvT7e2dNT3ELzZRICE2vLbA74HYLsblSSLZl815JjVsqo2z%2BmILGkXoUO3GAthuD5nd5%2F%2BiwjngS&X-Amz-Signature=b4586c3573a5dbab791f3ff7f8b84afa21d385fae389429d6cea9fdca26543b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
