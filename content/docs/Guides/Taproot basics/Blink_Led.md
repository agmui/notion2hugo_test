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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47NFGTO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAm6CZAcGThKMPwScja2CGZttVAzzgGteSEh8i2l6n2GAiEAt5zMgpvPGqM3B32CpAyi%2FyP2C9tGSZd%2FVz9GXZJyiFYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJW3pUfPvzBj56I7yrcAzPyDD7TZFkmHIippigrGIu91grQfS07Qk1p%2FDOg%2FM9Jetk8yEPDsvI6oeRFefb4NltfMX1R0NShbdCtvrIcAFhSzQ%2BHE3qkplRoBUKj8BoYxVNR96V8WdwfZStHpKWu9DNjm7G7X5hSUkEGx9rxFqhykz6W8u84saKtg9ebYf0FGUW23zD77L4BwqXILBVc%2Bwa%2BulfOLX05iSlqeP0BHsszIkYbNMv%2Fge%2B4vEYAjT2MXAMinhqAH1NkDM1NWNJQZz4JGW1TEN06NVOceH5BdDq67fn0oPs2CgUq21M%2BWeuFIEyKf7jOMI12KxUzWn7LAe1rWzRLEmcnpWu9VJJ3jNdjs2MLYYCV16IaYG5eKBFWpxFEyQhQlnEh9kjuz3mwZesv0TVftMaZ70htp%2By07GPPOa1b0UVyNbsC4YnCuQUKwuDTVa6QqOj8sQPKC6vaXwxETojiup1dM%2F5Zy3jjkScYTElBC%2BrVsaAsWB9gKupjwmzFDp%2FeILknmvZqJtBBHa4BDb1YGi%2ByXAafamQZAGjqt7f%2BGl9LJELAeIEynO9lgjaWFwkLl3DvH2RfZuUwNXeI5uzlGOw4%2B80Aesul83I3fqyGAm7WVpNHHpcCBdDn3MN5AA4NhCIoBWjNMJbMpsAGOqUBj2WnfVVPXTMqWtXI%2BHuGGPC9dhdM0oAeykrizpk5LqNGx6bFFJYlge1pSvbxZBXAD2OhxqHRMe2Tni%2Fk2HY6J5eoEsm5XFOXguMhmOTS4XBp%2BDTUuE1vxw7%2FkJq87rsU2V8dJSIaqpaz0jlmKZJkrncSmQQKqMdz9LTleWk5mlIC08VqkYfq7sELUKhcPFvAUmF625m%2BOKsP7mRlnZi3G60znEQj&X-Amz-Signature=42295d48def1cb2c06fb07a894918a0ebe41bd2074c9c43d433cd425b88b6b83&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USAGFGNT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEPkhs%2B2un0coe7uV96gzxJY4lW8rVoAdCtsnGO5PRoBAiBcnyeT9RK03arNBRAl1rVKZlYmkbCbin4TpI6qTUMARSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYMSA9EbTlgQCiZIhKtwDD0%2F3C3xzZ7PaIa9M87KfATlGsDX1gkcsJdzSDYcmaa4HazJhGVgvMqaBKMEOHzZsgscRjgiBIYK8jPePAvC52FegcrMw4ZG%2BMY5N23%2FqPfmPa7pilQEyoDOXczivWZSpaudwH2VqtInm0sX3o7Mz30n53SuWMxfgQzlTuUW59OuNHgSCe0HS1nezXDvM7Ddz5TWGiEGeGz8pR4feaqNwMXoMeB9LYr%2BPumIa0NChwjLFwPPNweusKhSkMOsD60BXssjXdPJXzNVE0OCmgEBkEAN4e8YnjNTs%2BNg6sv63kTwKvLRWtFNbSNq1C7ULABlgPsFJ95aycMpOM%2FIELpUEOW3nwZAy65NS95zRxg5QKDRoBAsnGQcO2dXGwQRUAggLVITr3j6bylbJY2sVO9HvOujb8ACxAZnckMopOc1AdJmXg%2FR1cliqTQMnFm5GykRuDLkGgr2YK40%2BEpHi73no4iLgesfJq6eGIMMIUFJ7d5jFAZ08sKdeDd%2Fht9xzZbMaFTNUohs1o%2B3xV0%2B6a9oigks9eVMK8cG1WZhET4mBAiOcHoXLshJwycudjFjK3wAk%2F6A8Dy3z6OyGNIZpNaDgmaYbogVkf0Ar9tiqxyXomknfKCzM1%2FnPrBo%2B5ZAwqsymwAY6pgH4HTxW9rb8DN2TI8CT4Cgv7MjxW%2BeAj7rH8lA3nevUh3DVx5PxLk98VgzTRNrgE3jE8Rcs2nrW%2Bejv%2BxnkRsBfHe1r%2FR7WUYJ3sWvBipCYxeYx4MZLH%2FGLfGqDG%2BixAcNTUi5%2FZeWQeZxHEY2z20aWKd3M7%2F6BRWNNOln9GP%2FCrVGkdJ0yhyHYMvSK05JAW30KUfC9ab%2Fpe7%2BqhU0oe1BLoNNkcNAz&X-Amz-Signature=f96af8059e5e3cb49c167d7322f8f4bca28418eb3be741f1dcfa418461c7e850&X-Amz-SignedHeaders=host&x-id=GetObject)

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
