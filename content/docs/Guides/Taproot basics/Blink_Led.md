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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FI2RHB5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCEjmawzKK%2FMAZ156RQLvETsbZrVVO5CEKjtYyj6yxdDwIgTbrbTBxa%2BvEVOl5toaqSCiNHvXvYQyvQD6nyTX2tpG0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbu4WG6J6o8XfnFYircA%2FoLVfGoOw3DrdoIeFmrjHPJP%2BUThnSDRNo6sp5BgNtgr6VvQYXmjm%2BVOae6Vq%2BqgIuSTW4XUlXXRdao1Fb31pMPuc8i3Vf3Bx7yNx%2BAWCzYrZOf9SMbEiwDgp%2BlASoSryt6pHlQZ1LJsbmcAl0K5EhswNWxSlCxCponAYy7qYkDXWQOy%2Fw%2BZ8ZiVI0vycK6e%2F0eAFx9NLbSP%2FQxousvzKrhSR%2BhJFIEILP5qQfR%2FUH%2B1XqqsyHY%2F6VEil84Z6W6LIuLpqB5UFNCZcoGAqnIRwU21wFvCAbPTotKuuhBDN33yqPdrG8EqXVmrqkerSTlRfWu07YdGFa9%2BOq7hoJkXLtPy%2FCtDaKZZ65%2Bg4OQF78AdjX3wpw3MxqXobzjnbm2M8crP3fnDWkVqeT0BHDpti%2FfeCWWxcyJmR8KON%2FN4zC9Cxi4DwOA%2Bq7QH9bXuigJ2KXyZbuyn8niPA3PlVV50ZzHXH%2FkBenKF%2FZ3bk198NBYOG4z62opzVMVTLgXlMnSCe2HjeWMs0YSe750GYuC9kJqgSJLH7St6Yb%2FjpDgh8LNSEMQsysLK6nJfHPGUirpH56rH2rhSfVTVTldo6vgiURGfqGvi2L%2FcCBW1ZT1dFMCmjeFxArNUGryV38%2FMLiGnb0GOqUBMeWROk2YGYrY5pGS%2BwLyiK5s%2Bnyw5oAPty6Kkh4%2BBy5jRrmaVD0o5lj3rvum6oR8MUEpXVdB9wTWT9GMzEA4dWfqtcNWT9pqYFC6hQJHZ0S1DUcnn6yr0ebvnc%2F%2BGYwbFbqBGyNO9iGU1kks5a7%2FJuGoM%2FFxJHuLLm6q039PNFREwWH3RltS0K4GanW%2FYMTOv0rnEDz12jExbRuh0ye2ZAhRjjuy&X-Amz-Signature=01be309d2404b15a1fa909de8882591ed005dc42c9694b43f8f06ea5afb66675&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7VR4RIP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBsaeDJSstxztWeA58c%2FHUhqy%2Baz1Ti4Bd%2FKLNnOUrqzAiEAzHoLxnfUBxUm16U684AdMShPBTwKgutPlqK%2FDhsR7tcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJnHoM45oTs8G2zdCrcA08SEuaZudTTsaX8kVIPvh2178L%2BIFbjkeLMNDJ0AVcxQvBnKYJ1C0RKLwGPesTSf5W11GqGjw0fSggQW6sDlwZyPQ2UCKT6tWz%2BXN%2BEzDhXa90VWREcIqQC64bw60%2FRv6XQoE1hs1UtLK%2FNAUvzdtXioAyb6eQiCv7L7n6nYOJbOvfZweFO%2BgwhuejtvVYn0hTPZwb%2Fqsma%2FsF5mkRTMxTuVOtnRSHuMPWNhN6%2FM%2BQh%2FUkPQ4tJ9fMFq%2BV2oG8yrVHsQd9kyhhjyOrAhiK%2F1%2BDp8ZwP%2F%2By02kC%2B%2B6CoUPqtpk%2FwN0oCLHSaMo92XOQLz%2Fq7NRYfZHCR2ye911IrZ2LRBZWqCZ%2Fs7DjmmgJMllt%2FwoHamiOsWJOy%2BvWH3N2XKb%2FEcaUQ1JCwrgPdltNEx7zyzgwUMJui7EzTorVgQv6WU%2FQ%2F%2BlK0rLF59WAEGkSG0cNu73WKHo2j%2FXUv8Rqy5apOOFBeVtaCnqIduOjGWSLsnOgi1o0fz16JhTEnwA5Hi6TqtzeCs34UdXj1ZPzGT0%2BDBEs6y75ytwMai5dfM%2FqnBn%2FX10kD%2B7P0bKdwy3W5g3j%2FKSIkAxPj4vWUJVOtZaPJXbT%2BDhde9y1gZRWHzlLJPWMLUYUbxmOEbsnqMLCGnb0GOqUBN%2BxOGseDjWmVo6urIqjf1uKEmNGu%2BidUH%2BFvLnMavHfByOTKxSKY2pJwGfUXssuKjcGeeCns7hSDU241EZHSZsIvXWXeqhEviy8H7om3gJKq7FJ4HMOkVFVASRpGyAJO7GqTIvqgWEY9reiLZ8qyAicmgBcxSch%2BK6F%2FMIrzEn%2FQnmI%2BtQZNa2S0fcIeEKhTZVg4M9ld7TEp3svBQkXpYssM4OcI&X-Amz-Signature=bbc59426dfaf412043fe7a18a8081194791a4a6394bb785084251534e091ef4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
