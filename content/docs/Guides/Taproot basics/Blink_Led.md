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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5FDK2WQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqCIZv3LkgyM3SM591qodOvhmNyUm%2FpFRfktfdsMqW9AiEA26Xr9oaszh0vsIwTl1PuNmftAq8%2FLE2gLjXEfa1WfMAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAGxBwVNghk3ftB9ESrcA%2BcYDVtNJNtll4LTbde5iPcfbVil0uRfVAyBODLGOr51AVOuAtE4u%2Bp7TdvsatXkUEjqMuvBxJtTdde8oEf6ciMVzmm%2F%2Bb%2BUYSZi0OkhawmcGHv6wyvzZGCTx3iF4i51mWht1vnfXfDXQd3ip5D7jf8OwSfRRHLn00E2BvzMjiIYrMbkCv6MUI8XerieSR6ASCqmmyAaLAV%2FSwPbPlgiukKNz1R3yv1JpnY2mHhDF6J5yx0w%2B9rbDsUSui3Xzg7C982QKhpbjDrqerY5Rx9JQrjgVXQRpaLK%2BdZjVTarv%2BZ%2FuQbBpoXya8CRgJYxp0LqQapUmOfcq5d36lQEnus0Yq3y3ecVtd%2BkKMmsFp1ELCoEoERrlwvWqg6QxY2UgrnTpbDQJf5AUl5W2hgEmo28J%2BMEq%2F9%2F44fxZdP8SeFGWF1G3CTWdRaMlqONwyR6iaLJBR70fpg2Zn2qym3h3ZODO0kPiQMGF70U0BePoRAdilyaY1UZI1C12n%2FOcez5bN7cKSCKw58%2F0F2djsfFWVIHjNJVY7z4cTX8M6%2BMdUcwiC7bgpBnxa%2BO2uztfOVh35xyU82Z9Bm59kupGMsbUSFMgTmkflbQD7n00ynO5hp%2FQv9pMkm6FvjyJIo%2F%2FKT3MPbgoMEGOqUBilwsqy%2FaoCNU96lGXmYPdoiuGELPS0PrnO4bccQJuP1b2RfW06BSP7fbVXwz%2FQEc92JybXFfhySr2rXs1h%2BPbR5adTVqBoMur3JUzVKx%2B36VPFPC9uddgxlytM9%2FVIsDWaYi3Bfm0LDCu7ZDpvMCVb2qifX4zsmU5Mm%2BkqLMeNxns45Az1Gk1gOLRdLJ4qYwIjnxmThiS91pDBzkNHrg%2FnmmuZIP&X-Amz-Signature=d5f64633049e235700dc4d961e0ee639e8f45c2855758ef44efdb1692ebdaf1c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O2BT4KE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkcbPjiT00JAgysVDD6To%2FQ3gmIbOsbrNJQuMRtt0XXAiEAspPCT%2F%2FEIWm7KlzlWuwErWlVe3uRhvUoDo0OYyqsj5cq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDP7NtX%2FqqEjRUWa8zCrcAwA97xi4dst7zoM3Tg%2BuGqk5xRUqsLoe9FCbJHm5o2O62C7c2tuAFVUelZ6di2T4UNlAYSSP2DkFyvnXyBEGUvgGMsmn5UCgUl8KPvb5TUUFyZdAlMyCr6lorEOlX8MUucjo27mu4%2FWqxSdL5Xz2vou9zkLizAJKtngHOs9qU5ZKRxc1avafc52YFnTEGrDR9cC%2B%2Bz%2BTgyIdfknKhdEj4S0XfYYVSjinByXx6X448qgl%2Bq1t%2FCh37ILg%2BWtEDSfCBheN%2B2xsML61QAqERFEBq13FCnnihRh2Xd6E6xOSnYvxaMAFuH9H1vtwWOKyaD3%2F1um%2FwdmruOWiGsQQYEqgzlFjQ0pup9t4J8Suq3XiYg5F2emmEaOo6G9isPVfJ32R1Rop%2FSTaLUDplFuHMo2DLDJlxABqqTKruN8sZT65SfBGCTn1tfKzBulvqbNseoqNWSP23jodVjaXCIFAFb2UUHkczOfxRGhNzuKU7zkdCnAS0g3wEhiAomqSN2pDC67DfC55yXtd%2Fc%2Fl3sA%2Bodn6T9a5Fr7O81t7O14FKj1GVha3%2BsNW1Z%2FRY4a9egPUoxZr4Xp8XCpYKarKYGyFHpl%2BFrUAQqm4PcUaYO9IS4G%2BvxguRdwtv0NhNj3DbmxCMM3goMEGOqUBTAlu8F2h5nCaAtFkKTkY8RMrj0egnbrNHqJflABKc4T2uO1RIAgE%2Bst2bH2Kx%2FFd0ZEcPeP9CAFgqUOs5PcmNDYAx8YlhXpGpK%2BmK8C989muOtU5ffGrqcBGJKp9obUenSInuCdYnr6s5jhgNZJBWrD%2BCFast7hl0wRE1q5CYScQcNA7ecMSEg5zuaa4akaFRLGEuhLKKXo0GliqgXy6kuikHGqX&X-Amz-Signature=808136d83d0fadca7f906b3f15bde15229830bfaa0705f17283313177553e05c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
