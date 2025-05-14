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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTLCNSUM%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCICrJEKNmzhKhojkwHBB0byF0t8t3yZ1PqWPLUD2O3w1ZAiEAyyKJkVtcvkaTCMcWBEh5CxNO21gDCCW2BAkvl%2FYO8S4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnm2ZYxlRSTl6kjgircA54RSEpXtGDgQiMGpHMGZOmfvgRxkobObq%2BpLyDt3hn%2FwxYFndnzSCMfVEhElIszpdscHhdhZ833ZVi%2Fqo3AnCG88BEmsvDOKM7MHxZ%2BXOrh7mT7by2S4%2Be3xY4a9brrbFNBHyT1Ib0zQwUIK4AMFfc4jUl4oSPhVo%2B8I7hISU5NYzIDSnuJ0x9SVaoyLsVdVLObsi6jy61vyROQOfSu4uCJ35yb9OySNxE%2Fx6jd1wjn%2FkNfmHP2%2BIygmKVsL0iJJnLX2ta8E3r9%2F%2BR6cycjsKa4v3Um3PZrvfxLfb05IbPzgRWHYRgD5wBaGe6%2F%2B0EBnqKQd%2FsHZcePBmIh%2FApjR%2FvIAzUG5UnUBSUKf6vxKIm9oEcAhI06tuZodgxBXK21WUUJ9rLMXQOZVzJ%2BvbjVTa8mMdfl%2BzkcCv9Nm2ujoEYAfDTD5LX%2B6N4uai%2F0uNTJkXo0wPYPZRPNZ8po84EjX9JhjbL1jPJaMwiFQZ2Tk%2BqleTBdQ2YBZrWBwXRT23OC%2FWpYJnfbKn1jMtFief3NC%2BkbrHKCcoFzpruWbzS%2FWZzxIjdeFRiNGaz1RNOaPZkucp2W1fi6PIharY7KcXOkd0tnUS%2FeLB%2BvLbdp3BTzY3%2B%2B3h8aC3YbfcsAwrn9MIfRkMEGOqUBKRUYgh1gL9nG57BIK8xvvvcHHrSeInyzqe0NJV5qdHomhlEXDF4HEhcushIgF%2B%2FaCSdCluVBUIZGrExMigdmTtYyRzApBtYVp4q93%2FCV7lZBF0CeZ6Yr%2BjT2vZsc6uB%2FgQeyy6UDfDVAKKlL0laGXgszLR%2Fx3jdSGn2bTgIXreMiS%2Fk6%2B%2FKiQBuFY7Ad0qP7gUECz99jUCHhBivOtRxpFbXmVPxL&X-Amz-Signature=a6b917ec20f28f713fe8e7b412421385d8fb50f25fc37e48571658a3706fd7e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONB23CP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC8K%2FNLScu4YEXnQoKb6xxkLGEw2C1zC8Y0t67GjPztXgIhAKfWu6%2B2pse6c9ydr9cFGVyXU4mQ5mO7TuIcPtS%2F4ETkKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5HbcGhrtvlDmiyKgq3AOmSmjTk6JA7ZPy6xv%2FceHx51ht4fQrcCoq4Cu7zyD%2Fb8aIemkXPNTbrN8RmZBDUZiJ2ITwORk8YXsn4UzxmCqUluY2%2F8biV1%2FDd5OKGkImIkl4oTL6vGO8IMQ1FTOqgYGlpmr5FAFq8MddAzDRRT49T4ZMOhwXhwVV%2B8WEF365Hw9gyo8wYb40fbdbri5YWi6wo3dsl2ItUHL7n%2FSKtrxnD0gP9xTGx6yIDj5EocBodT9wYcDeo4bPH6Nuz2NvRHw1%2BN0jAZHWDt2xQDlGhLXDINeLdY5A3PCT119Huvu5L91qTwkvcVlDMlrutc4ge%2BIPT5Ek4GJeeTdXYCilAT9Emsj2nQyd5bXJFHq27iV0%2BjxZabIKeRM1R0uRBSBrpdEocdbtzPfYpyAiCrR9UOSDaycI%2FFfVR8eK%2F9x6%2B56avh2BxYCRvea2XzeTxveccl5f%2BPb5l3VUxQBoJuWdAdLz1MEqRIuvcOKKnb7RFYFjIL2lcVGrln4mxl2KNIrUpA40AF3viqrbO2w7eEJVjeYmjMryjZsirN%2FVDANPrrlYSUbrOW05D9G9MuTExxsQLZihGlga3UYbAXndilimnlQIXgoP8ycgxOPibQ7RorMx1zK%2FmRU08%2BOChTfLozCm0pDBBjqkAVtWZ3yGB9LIee%2BeglbQfZ%2FyhIOu356DVN5X7WO3v4zwnW%2FBPjAFuPPhaUcr7RumCfYHxqujBIMfK892Drgu3PKGYQl%2Bi7RbKPp%2BlT%2FLcuDNVD2jb%2F51Kit35chxP5JvoaGRdyGaoYXrMAdUo7Y%2F7BkRVf8sVWe%2B9raS55DfokvIg7zg6XAd0zWLTdqIakCTTU7EuNh1Yt6GZFIcs3rJ2Z0nVSoS&X-Amz-Signature=47b555c12076e8e291622bb0b00b154aeb889be7f3fd9827e6376b22fe416c32&X-Amz-SignedHeaders=host&x-id=GetObject)

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
