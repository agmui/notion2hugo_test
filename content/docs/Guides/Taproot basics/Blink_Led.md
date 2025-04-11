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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZLHFBC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEgYovc0%2BPL0Z6sCQi3RmR0KbqZtPIxdlEN27ZUdgI9sAiBhnvlRWnKtiGzpLLQYyckGsxGmcOPsdyF6BIWJgtln3CqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo%2BcFP%2Fe4bfxsLDUwKtwDkny3cE1Ccj4SMdJVSk%2FVLJTAPWrw%2FMVQmLvW%2BLPxhrxwyDc999f8SRigr1yueeE1hISGq42HTcqlTaAmMZRD34x5OVw%2BdljMXaVAV3TUxkOzVA8LU%2FesNfIg5Pw1hfkuNkN1M%2FbvkqxhHVE%2B%2F%2BD0wgFhqt00YqV%2FGwSMemMMIq7lpKWz0JvtBCj5bVtJ%2Bav47KMleQllCXsaJmIcPc9QtP1VrBd1psPkVzeld88sroJgqgqJEv6lYofEdf14ioyJwQcs9y4asau%2BnFcnURqNXHQX2MBGNfxkauwri9R1Drudu%2FFBlBh7DPzQguUduXLclwRmuLLlFKXqK7wuRaN5akML95Lfsu5iQ8m5%2FbHkBGZoKok1qZL%2FnNQ4DqKvtu%2BInqI2wjPa3U7pSYzm9SdTmt3jYQZi%2Bile4xSdpbWWCisQURinnsCBujYqiuB9wwDLp5BPlZ39YZOmEX92I8zbLDijBBtuCDyeKTm6orunpLrG7SJ6KmZcu6THpYtuFTIVvbc%2BbTB44Fapr9FHBtgdxtXRXLOah8GbK6f%2FR9GRvE6y8LcaRZiuYozVsY4GHOhTa0OJxaQZCg5TjDX38a47XT1l1amUGshYZviK6Y2ABO%2F40ViN37XRVb9QrFow%2BvbivwY6pgHTlTXL34xzI5MS0sH0j%2F3TmEpfe05ZC1nR7mWlaz2r%2BabCRbdZwUnD81Gcu%2FfANqaLcHBJeaTfILSkeJ1rdogMQ7rrQDd5mydwDNA3SncdnilZOH9%2FtHou5wW0EyjsT5zD4t7egaO6BOcPr3vJ1rJdEIMFnRohiL6nEKwNqnSIK9sYVIAcvBbhOWOBDcOjjzMaA%2BRNyxw6SOMcGtAafBFDmUQZ9THV&X-Amz-Signature=7cff8ed9e2fbd0bc047222182c960c62536a8d2349a94d77df24710f6a758bda&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KFUVSR%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDz3ClO8PjJtWjJckBMmaPjtUzMY3PCXw7ptrJ%2FcfBorQIhAJDHEczp4N4ihyZ8PqotG2RMOmw%2FrtesL0fUjnDAw6%2BNKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeRiDvV0Xy4XQyqX4q3AOvlBvAlbFvvPBddExbWm78EY8W9Ygd09C7kUrOoyu8SuUxOnHOX8icGDzm6SdKhV5s4lpWFkG0PjMCcXD9pdu79v6WDRxPCdeKYSiZe%2FqhYyuk2BozwZ3N4AXy7Vp7scc3KzgScgBgNPmWQDEb4sRPXmfaYpA5d%2B6dCmshVisxf%2Bk33l9Xwx6XRSv53VQ%2FZBcfQQMyo6w%2BUnpjb5pZ6HvaJKp5dUTZyDBmPxREhjSjwMczX9AMz8D%2FJuM7cGuSFng%2FlEIQThRehqUeMNIyoONfQ3OTyPZbXYkf3aP%2BXY%2FdQaTBgCfGLZozdl8jvpPytANfvmDpz6vZ6%2B37Ve3kI9Ocacnzt%2B2SXVCKxEFc9kqCcJB7t8DS%2FlZCyppSe2MQ7wQir86UCHoXxJhEGbWEuuPhXq1HOesnblVrxSM8jiZh2X4xvjOZ020o%2FUm9e1Bu2%2FwNXxeR%2FsSJaDj73rJnMjumGbpR4F3IM907zAIe7VMTPP5qVZRrwpoabYnn%2BjCtWj0F1BDavZErgnbaa3gt872kKGqFhwUqyywnk7QsUDyQLk2r2udL%2FGO2%2FwlmMKNiUSDgb3D8vujz8zzZk04Ac3l9ppJqAfgEcTXjuh2muMJpGXA7fCfpxM0ZHZIDMzCm9%2BK%2FBjqkAeqzXsf91wFSVu3ySBRFXIstGwAYo3KXFkwDHSaG6Ek0aD9ZSOCtg2njhTW79ai48mkHw2jArO6KczJ74dLgPOPC4aoMs9VOIMOJlSz3SENnDMVK%2F2MRqS50cdw%2B9ZEox4Qd6Hsf60CYFrXILUq9YF9zyh4g6tjtz1tIK88BusXYkvbOFj9UAyxSKusvVb%2FmAIOvhBKElxmpaVyR%2FxOCvavIZS0d&X-Amz-Signature=b98c8fe8127579696fc03784eff3cbaa4cf48d456eab4fa1a10743074f0ec9e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
