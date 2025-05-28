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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2Y34HA%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDin1OvmhRWen%2BwWuBnb%2BlvZ6K42qieViSMykMMLigNuAIgLFJykAo0eP907CrrsR%2FF5yr%2B%2BhNgynmh%2FteNsPAf%2FYMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOxkpvjw%2FLkVfpD3xSrcA1iWKqIofx40lDQFdrGC0smmGp4Nw9IFD8NzwfrN7ZmMVstD2VX8fm3%2FDvFyiWkD84HVyFf2ofHLXaRe1c2sbfSWrvrgbqDGeES2sJxyjTN%2BJozNnXZG1jDMPeLZ0BTJuRiOaHVniwv7TPE%2F2dSPMsP4gMOD2qpsyCi0hpA90X2bk7nN63CGhK6pmk2naNeQb2MvUOUb6pP%2Bn7OJhADOVpZ9C0OGRWvGWsG7IjFDkJTLCLaX8kHot3hKtVoebkJyomgZRGRHOtz6BKV2yQhMFVWkneLLShapV2zpyZm5qout021T5PEctfbVmdWajXUAdgOtD2nIuiXTOyIWb%2FQE1JvgHCKU5hwHvubXEEDBdmgS61H9h1VUuqaU1eI19rLCPnXEvNcbMhEbA2fmxtc2y8DquL%2Bigso%2FnWJKVKN48OVBLL3B1PMCjRzMizlAPbTj%2BxZ9lyQpLz02Ebsc2VgD5CDSAJsyG%2BQ38KwHi7fszFkOk0ZE5HqCbljByqNC5NGT4bPaCii4UyVr7Vv197owPbzwVARXKoe%2BjgV%2BJlwRfULqAXp9tUFCP5NHuV9xOXQ6DT0l5LbBHQnxV8U4zbwBlAi3EWlcmeLMTz3otMtnXnyS37o3swA7wx%2F9cZmPMOCQ3sEGOqUBhquueddCCRgL%2F4p%2F%2BhD8JuEOUsyRH5GGNsQNaYRkiGqSrISx0zolZX%2FHsoVFpeqoYEwaFuphZDyQ0Cezb2hMIXx3ISS%2Bph9WcBcsHw0k4gNa6kthOMwUGQsbQIqJ%2BBLiW5waGsQy7AfLEbkdWTBwHEdYBklfN4eDfS%2FxpC2vWXEtyZqzJD1GqGabhWvtAWzGHYUM82%2BqxE7qeTtbLxtFTlvzqdn%2B&X-Amz-Signature=2d357b2aaea5feb768b6f604381b7a4f0ae34b62c9b20b93de646267eebd2884&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SVQAJEB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbh9KaTdIk%2BFG5fkkWWPX%2BGqi1Zs1C0ne%2ByJrcbl8ZFwIgOQt0U4h1xbkhvfa4L%2BmM1pgRiPHTE2HzDwv%2FPD0zl3Iq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDO6MqBzSTMAs0%2BH%2FwCrcA%2FFoBoti%2BWmS97QedlAlMo1JIFSi3XSLD3KSrVdnkrltMeyKHH1jCveHs0wbmSX0YCI9HZytYwdS4Qp0c7gyR1IMexMse2BHsAXE5PUhbou2uVHrVnkVivJPx5GDR31M8aUJn0Udpp%2FsK2SEeRr8Py8TxM6B35fEC%2Fz%2BlP%2BXNxENZCWIZJMlrJTey0nAEE1oQ4qwc9%2FHQ%2BbD6%2Bcw0yS3CnAyInGkp8r7Lhkd4CMfBHkRkdINb5nIyrJgtyEorHl5PmqEZpEcUO7mdSHdwtZhJFZK8BQ5fZLkZiteTEzbCzr%2Ff5MQIba8%2FuIJ5w%2FkFf%2BigyafErqvUPS20DoNnQQRR6HPPljFSnbtfBTjL%2B3YiyZuiQvOOnT7ETyFZSLWCh57%2BXbK6QxIfEVBbH8xxjtTHTeUUCjjXdiWIU863I69CjkSM%2F60Ty%2FKxpitbTR%2FDAFSBsb4S983scwioKS1%2BZNbjdPa4y9wMvbyyCE39s7Xqp%2B2etDiEFtT3giVOFD3mCqSK1NtjPVDzhCzD2RugRQIDSA3o8Y9%2F1wE0DcFKt59%2FulA3zantK%2FvW0284FknAm6iEwC2zAws%2BKIOair7BxDSK62GwkU%2B60aDwWMo9nuxu61Gzja%2FJJZVNHaRNDMkMIOR3sEGOqUBJSw97tz9tNUaQ6Az7k9DVGyVmf6AeK8ZrjKA3aqaO%2B8hXK%2BKfdWlQA9%2B3y66hUxfGJycPRNWszgqMshoD6eTNwJlhnpM0gCZZk7eYirbqf%2BnmS75cg1frpiMva0PSoGttbZ%2FldmX8g16NrkvLmsY4bTfixrNr8l2TmTn0XLMtNRHFNTIBaUCtWet1QKGJwfURV1JXCQahqVMGYvUvHcv8RJRPuRr&X-Amz-Signature=705293d9d96ad699d941f199e30e2d54b19f64a7edc6bd7090d76dc02a026bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
