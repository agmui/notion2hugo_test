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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G4SW5VV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCw%2FCt5dJTeVy%2BdoTu7PRU2ypKBVJa%2BY3O%2Fr2vlUoo0QgIhAIIubzwXYpni6M8c3XLp%2F7u4jVqspnRa39TdXpDp%2FINvKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0VH5rifoHXelf6rsq3APqE%2B8WX4qRmGhfBqhet19wtrym83p%2FWnKthdcxxSf658aa%2FwC8nCVvPc7xsYeO4JfC6C84kl2J5sTJjpv05fEcsCpOfp6M%2BiHWehMVCu8c9mtXEnKJlf%2BQ1Wx2PXvF6RZi5wKtRERUb50erx%2FI0FBab%2FderozUWtqujA3KomJpS8DygCx1pQK0PiUSDV4yQT5lWO%2FTqX33LiOyrtWf365Nyj73Opc9Htuw8iS1WbTRiugsmO05pzHohPkuJwkFyQp3yorndEcGIoNFRC2DzAmrHMp1Vsfy%2FDMdDAUNObH4vNON4%2Fv3uw3XAex9hbfO555qz1qnxsFSxsR8i3GMowaC1338tUymlHqDpt%2FqWI7hhCcPaEPJkWlNeXGxKp%2FXwR8TqzT5Zo4D%2BgxjoB9HA%2BuH2h07tVroNnETbSKzQhMwJNqlImwOhJthizv9XgzyJ0fjuxrG04wzZscp5%2FdEtbGO4v1Md8Me7tKeq1mX9BOI8VPsyACvr1%2BKGbxOzQDfELh1JuDla4YMc%2FFyMM1J3J%2BFth5d2Aosv4fYZj92W94w4YOwffPbXyZd4hE5JxE4whEeT6m74keNTRg%2BA5JSs0d3kBd3Ac5WI4kGDFcMm0MiIswy0SLM6QACLRJSxTCDnau%2FBjqkAR1oHb3bUzxYZZl%2FdqqhsE%2BMbCNPTgqQ%2Bl9ePkL5b2Dh2sfStURb2tc476UTFW0DdO%2FQYlIUB2PK%2BKyz4qDoQKoEgnMPnP7ozagc1Dyiky8616wfpxih%2BzMCSBrUP80PE%2F2vUER7T7CNEC0d9ngpBtsLNiJndI4LC1eurPlmDgwQp6ysnGXz1zMfzbzcv3yvcDRMizDI1StIAJmNoddZxViSg2LQ&X-Amz-Signature=60c5efbb0075d58bc97fabd24e50bbd426d0813d2134046a4d092d05b4e8c303&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZDM7QU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAPxJefeLdrYNMWS%2FtL7AUnigBjDpN5ev7zlM8XVrclwAiEA5jO2ZhjyNYJoog0M6RHuLvPqHtLCqxJu8xjYey2pQaUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaiTdE4roQj3M9%2BzircA39dX%2BP5vwQUrqsA4ACigouPnhD0f5BC8VhfoMrKrKqk44m6VydJFx8N3nJMrjRB5c4MpYGAOAB5sPVyghpnBwlHnAhXaB15DxlyhqmUtsMyavNqb%2F2qDE3xhPGxFpZz3CB2gi9dTwA6Xvsn7wgU92bT4gr1PRmdzdyyO%2FdfuJGIyyXcYs5oPlFLJ%2B4L0QgOIs4%2Bj5Fzn3ZvgX8an3tM2ke%2FIBmhcDLXSiVy%2FBuk9hoGgOvSldidJS0eqy8ODsLo9liX4Dlreq6jYt%2Fsi31COWtZlWX%2Bg79Oq58S1OKYw2aIvNWY9oRWz3H1q0QabUNhjQCaRnkXtgo6jKrbfUznQpfIlsNMGdkqNBKDuW1InzfF68frAAAz%2Bn1CmMmWuaM1llObdRhlScptz81zOwQRqqUwnSTa8BCTSyE3nd1LclLy95aJKV8DO%2BgBYzxwQH3eVTQ6kQmnbnCAKIaqqkx46X%2BSJ5hUEhrKybDpUVAj7e%2BtOennlIS4ZynJrLMDt60F%2F%2B2wmJ2gz4tcXtEKWbB25WrfRIWxamjVcNrzkKvZbYyJAVm0BV5Ul80dZcJKPkqxzrvz2%2FNkoDzO9%2BmZxpe6wUzlZZbg4%2B9Nx0LgKvEe5OFQnhy2zWwAzzvxgolHMKucq78GOqUBS2wHWLulCknsB3eS8MBrtMc1L2X83KdUWkE6ZeK4NZs3Avyqg6ZEAb3FOT%2FLlbxQG%2FW1ZHLFsLRGO3vDJPif1mz3yVsnpfCzO76u5fsko0gEBn9NrF8NMWKaI7tAFJcD2SM30RdRIBRh50NlvT9hZFtGtLElU3VxVsQC9M0W%2BHzBfANU5JFbPBcUgwlUzrbEutRVA0vGFdKOohGlNW1TXE1YQtnz&X-Amz-Signature=261b7b933972ac5c58b714ba18767968874203a18747493cfdea8def2ffdcb43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
