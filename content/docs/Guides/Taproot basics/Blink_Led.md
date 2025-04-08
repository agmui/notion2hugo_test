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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPWFID6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIDUFzmOWob33VyQs616jLZ7N%2Frgtr1Wbzdf%2BKcypfDhfAiBZjCMXOuvYR8%2FNhFA7HiirUjNVxBj8BRsQ9WIEk%2BshDyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMUXp9TkpEa8dzr660KtwDlyzuLVG315fTZnCPjwTq4uBHW%2BmDaUQN1tgTX99gqloFEk8DWwkSnP9FvifqQ5UzOznbtTRVyyZp%2FcLASoNju2I8TFFnEZm6W75o0zvNqAHanANK%2B1FRhvYOYuZzEcdSyUxajlr5RmsFn8KrnfYWhFRK0h4SHgoqlGyl8kAnOQemMghAS3%2BfyX%2Bs%2BsoQlugVaPD7GIMtdJcRPGTAsoFq359A3jjwMyjdc13smuWaaxMlHOhF0P7cDNk4pKf1f839UhkxZr9IvYV5QOIqNrsd6U1u2E8q%2FZrDXoRYra6sRc50UveLgZsxabIfXcS7%2BydOyqBS%2BBZQIP8gwzhAt91LCSEW9h9TdFlQyJycy9Fi89i1RjhbZlUxtu4tRRW6wkix0UjSebP36uAcWT4iuOrl5DiDvq0e02GuJh6HeLKgJOZpSNuV9CEqzSv%2BPIxZrGqHVSys3ComdL435w1zVfYDOP71dlbb6%2FyTm3T3IrWK9RQhs3l3u2S8cfWeG7eghut0r4hzej2G0W6oewQsjM3z88PsRD6CdIqZ1Td9F3JKDyG6Vl8N53Xag8YLyjasrt76ErkbscWt4zWhzkb9k48YyOUOb1Zdl5VA2OxwIdfrRCeEeFLqjUkpmtNkxL8wsovWvwY6pgGF9OUknlRvY%2FJa8T0CplyBkKYOj1dY12Z5AOwiWpY44znM4CxcwP6mY1xWO2K5J4aOK9zM6h%2FuJ3HRZnlGBNfEkTNQ3IYaMbYfKANQN9K4cynGYUow%2FqJuRxP8WjSEI2f7G%2FDhRv2BSZ%2B98W%2F5tj2OUipbfmIoQ7BbB6jTG7kXQ40N2Mtm0FDGQpBtw0VabBYpU3Ammpl73h0uYoVCsjxIx0g6OV9O&X-Amz-Signature=4a14db543dd9481a9ccd70b67f56265b889c6f0beddd534be3a0e67c1c68924a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PJCQ2RC%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIB9WUeudDOW8Mu8Cu1sZ0WAGsLGjITNzL%2B60Rw1vZCVwAiEAjUgPyBFX%2Bs9qfV9JQvXtnXd0wnouAuYQX8ECq%2FCitbUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDO33s66S9JckTT3pXCrcA30xs21pouBXDW0XCQ1hO%2FYsZNqRhgoLEgBEkFoVXF4jDvi4IKu8zGBLBpEgqrLGjw75Nxr5OHtYB9YELO02CXjxOKKoroApcYueR8BOhP8PGHk75bh%2BnGq13%2B6GJgf82RXDIrrss6ioS%2BvJAK8bu3K7i1KPqQMze4r6zfMKzSARYlWIN2Bl0wyVYLjZ15U6SoMfu6ks5xRydsmdolc87dfqrLWBmdwI9kSdwI6mPUJOZORXRuZ3fEeDRoM%2FTgen%2B45gZAFbSB18of%2FOYpLUTrfZlbrKlOgjmV5S4tnufcNZVDjaZ7ZmXpmFbJ3C69%2Few5YQ9Tt4XfHbZnjYbPprgAbd4mbN11CKWZQJQcwjVfQIFltbwp3E9l64toJ0oo%2BrrqEE3FkLvcg%2BTd8BCIYopE3HZoY4qScw6lPhLmhAQ22jere018nqtRT0Tr%2BqbvHkYeeuXVcDmgT%2FZzNHUkutA8rzN4lDTN6w4JzLNj8LXBTR1WSUUpycIpzrU0X8BYOg8wWAfQG4etxRswk%2Fldu2NEJg9wfM35CWiqzsUyRhbcuLmPdvRGhaTYsPuXFfKqOvSUzN6gFshjbLIBd1d32NsXxGOFrK5xpBUXPsNas9tlC3FidIx6J5nUGjB%2FJVMMSL1r8GOqUBlE2kdv%2FhH1XL53B7dGv%2B6yiyEHRfwVbNf9MTObOsdrfHl3lpAjelyG6U9dS5kXAMqwihWcEvh6uCvDjpVBF6zZLoCW98yewNNiPt79%2B45iRmclv5I1nCb4fHgh8%2FxkeesnuZyfOXLEq%2FCFcTHX2NvrKSIN%2BbUNtWBqgaJYNWjH97FdeYfUti7Xn66rlcIz%2BauDDbaB4XTfdd7OOmEXuXqlVH7wYn&X-Amz-Signature=cfac87b9f26aef83d299be7609bad2db40d34b9ccd14be8a1d10f296231278da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
