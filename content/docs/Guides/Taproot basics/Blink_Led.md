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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMUCR56E%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGMclb5Dpbar7YQH6D96JtEiijUWkFTRDuRwlebDy9RpAiAcAbG1bZZzz2fWFEWbGQIR%2B4AKAIoq0c%2BvhLNbGxtVoir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM5NKmgF27F0wG6UN%2BKtwD1n8l80jeU%2FyNxXiq8SDkEoYnMORynlTyY0R4z5du7Ez%2B38v6zuXQM8K9q3IWKvjRsYOjQGa0LTJs4IZDSQxL%2F%2FpZn7M4%2FHuUa96F1RVjWoFDfYZ4%2FunoeWr1lsbdombU4ah5GEZoNwijCGl%2B1xqKY%2BDpErTfYIZ1A%2BBEEyPrKsx%2B7Of5VXVEEdqSYgPeytLcRydttbvC8biIww0k%2B%2Bgq4C3cBFzzqtSlprrQg4RSnO%2FbE5wf3hYDtci89sQw8%2Bi%2Ba4CwbuZ0ljoSInXRv4oUXd0TZIAg5nq3060CGE237GG9KDxclWclOMDFHMOCkdMiXoC02WWkREgIuntPZa6zmBC0OE%2FrI30Ip3aqSJl488PJv5AHDpW9BPw9a7URGDio0GbnrHkbohsjgEvkn5eYKfDKY7zrMa7xjr0injR5bnRmhBZl%2B85SfoFeSv0K8Lb8fVBjkNPm8icuDyg3Bje0vfqUnTc%2FhVzw5FJLmNQla77l3IMMf9IU2vsi0pGIqCmnEatjvuwdin6s2Lbd92Q5e9IiGuyv5wIv9LihJ60gZiRFMlGnfKw7xjWHuRCazgysOVhnMS0ktZe4OvC8Ynd95tLdB1fi7ywrpRPtTvZ0XlViBQl%2F2Si2tr77q54wv86bywY6pgESxFcMbrAz5JZ1xrpa4xkLm6p%2BGgy8lHBqINM%2Bddo4kgXZo2uuVNJBPm9ODBsmhN1mVsBb%2FKbAci%2FUbTzFtTWwquY8WTLMsb6vF0O4kD3924A3btEcFSG8CrCPGPDd8dLB0FPN8i0iSXUuNbg4M4ipZneLSR8hMQOTuNZ8e4CfvNemP%2F4WBypUuhQeKEvW2O%2F54m2ldJySqMlW4NffiDPVUytzcp0w&X-Amz-Signature=6d1eab6a0e79ee15d486953b9e3d68117a1e99bef03cfb253007810a505dca5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGCI7GNG%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDzW0QCy3hO1VIkS19CthV%2FyJI33DfsvYSB%2B%2BuENcCa1gIgZjV37q1dXx8jrnAZ2261X1VQs56%2BYsHfISmdr4y4dsIq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDGvFUR1lfl7HFW%2BLJCrcA%2B4mWRcrZo2ZsB76F5z%2B4gHlZYStQeb45MuR33I7HVRbiAoUdse%2FfRAmVieNkXGo5w9TtwX%2B%2BuxqrY9fMgHBXN%2BsnF%2FWyQzCojOG5Dm4Q2xM4K%2BaWUMrYuqN3%2FCp7olPHivlj1TpmEB%2FlyAb%2Fc3utF%2FJcTfega2p7F7L3UnCWyhQq9FObXuc%2FV6xRQewYRbH9515U83Z4DwNnxXt01oBj6mTK5kdZTJt%2BFaw3sOcb0qSSPPE9Dno5IbagiYE46%2BKQU7H%2FmtzGLcK2OIpZmwUg4QBlLwmDpFmFW92le0tnXqpDlasWR%2B1YBIhjXMFWiQ2FHUFxdXwcIAaM5EcqqAHvdWa5pFi%2BDkMb%2Fj%2BK5OHfHbj2mAroCVPFg0uKAMbVjDIcM%2FIt3J4EOeqHmvOpS5Mg5JPttoKRepg7mOKt9znrcKuWch0UHDfymixOSImsZwYEDutWGsXD0md6%2FUKvctU5EwFziQS3uOwexXTSDpZdOvspxpck0Jak5rKiI%2FHDYFrNrQns28p3omqt9rJo2ip1WL6YOP7YnYftiH83R4YAAVwrQx1l8PjxyMTvBF4VIBZXsuhn%2Bie1XJ88iwfh2pLi6J%2BSrmqEK479Xby2%2F3HfdSk1Aoj89jbTW3RYq8oMJPPm8sGOqUBfPnnZiM3uAPRR3pDgtMbT%2FYCp0y14oFwhcxxA6pgU9VOi4o%2B5%2FmDrN%2BfQMpYVhFGqLMRRRhYYJVTI0d2NTdHnMx4NiFe23f7V72EF0yssaKpb9GgBbRlsY8lkfomiI%2FvYCawf85b5iV7jGzsFMcR3X8Q%2FwhRffOYHHVh%2Fbm7SmZTbdGZCVRwMoy8SPlIvXzHihyb%2FXIzLwN%2F6lp5I%2FaaC47XinqT&X-Amz-Signature=44c9e7d9212b6d8d1d55a03c5defb5f06cf038b423036a88b9f5031de4221402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
