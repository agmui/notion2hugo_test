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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DIDDTGH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCm9M4SAS7CaqlvVXntQlVtzSFt%2Ff89%2FWpKYJt6kYoSPwIgH6%2FtaWjuv1D630U0iCOWJkSOd8oHuph%2BNrsTtLaXisEqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHihn4CT919MfBGyCrcAyI9EysVjpNZRzkPFj2hElWmDYUTNzic8ZHPH2iHlVleYLVV0eVKBzP7zr%2BvhrrG2E1I6kofgTfZ%2BpVbIGU3i5D%2BnlA2chiAgmFLO9U07jVx3XZHExA%2FVWfMbpObQBqHMQC8ciqYEk1ZM29zUuKGCMWzg%2BjUD6z9cmCY4OFgKm9EfCgnG5keteVthLzJ0o1tpW%2BsnX5iwWpr69rZ2VTW%2BjeqlgoVWNp1wlXd0WuztYHdLTnkDxy%2FUQg2%2FYIqkRK%2FkKyIZ09gAiBUcBnNIaXHVBdTKirufVwnKqeb2JvXRUpAY9rpULtPVLrWDZWLptCuAfhlKrcdn5B3N4YkcIQZoOxiaOPmdJ%2FxDFXuYT16Uf3zkfcKrGoTXhgleOlZtrZNpL34isxSlbfNoOMcjQEuPDgt3U4EhwgLIrb3pzZId4Py0lHTs6kxMZyEoE9IRezyffdzlEsU3wLOzdNKNtjyi2n1nEwBAxkmTEXhbOrg64qp7mV6XrLLMzV1rcJKVBYN1nSvemoBmGa7sbGSgprFxHxLR2f5rHQGgzgFboDmFRJHewEbavEqovZRmm3M%2F%2BnmPnytmOV%2BOBpaaA4BGFOPnmY%2Bm%2Fp2q%2BZcGKirGO7eCkwofYAzrrKux2xIAzqBMI3FvMEGOqUBuXyfpWyi4JSmDxOTdJVYn1nEIhgaStiatoqlyy5J1XG068oUB1%2BhjRXmjixLfF%2F%2FEt2mfKPjdONBbpuTdJNT7ZvNvgYudcEhmPGuBta%2BhWpa42LK4LbQv4i1xOESwPGPJYfNFlPA16I7xLDnvvfOwvAjRlCkETr%2BX8WdnEO1vlwd5CGXOlwarQJ%2BVzkXX5lXsCuh1j7GE2xaXVqiQsDiE13G7MbF&X-Amz-Signature=8b497746cb2f3008980332661d317309e6066f100bd7aa7cc3f210a1af3a661d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQSIUK2F%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCSM0WhBcNTDObyWhffjq6Q7Fge2gIr9E3Khr7NDYYRqwIgXHt6TPpd3gjT6XWmdOHgDh1UgDKv1US6wu%2F2SIHxakUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHm3n3wvE39HmUzY4SrcA2NdDTETAF0QnJIXCZ2CCTrUV%2BG3KMPqkJhtGBrro4KsfL6yfXLWP13wIo90XIQya7Wn4hasJT3YUPU%2BC5zyQfJB%2FEBsdRp668Ee9te2CONMeXWlz8eX7BhwLaqezuD9lqrf9HlxAKHHJcSeAe%2FzVW%2FLyeDk%2BqOj2PrsBag2VnFHyg%2F3Y9LCahqP7WLjT6LElp8SF9VJQeP0KBSsN8GX47KO%2FhZGCSppARXzO7Z8EmTMYH9m%2F5tTTgPnddQX5lX4PXwQd7UYqB7HcZThWH2NNVdOAnROJkEP4j7fY5MX4mnAHDxk70PD5Oz6NQKxPVz47Mgn9325cloY3Hw5ul0AePHTFTYKsdkp3NfBYEvrSaot1lvmfJroHwTA4kq60Hk5UcSDwJj4Ydgjj9ze5LED%2FSdzPqB0e1AsKNiKbQBGB%2BZudK8SKzww%2BOoVLBwlEBIUW2XEjsa0prm6sO%2FdLJz1AVS77LWrY0HcgvomOCJOyKrKnhAp3fWaPrJZ2nUK%2B5dpTSOCLVZFmxM3q%2BEDpqb2S08QCAIBTyItuf9BNZFJArz5efpDKAFx0aXPyx2ZxtAZW6d2ZtS%2BpOZAx9XsHyxJWPxVOAG%2BmiJOF68xBM62pBf%2FKkB2cVNkF2XTlStTMP3EvMEGOqUB8WfP4Oj9uaraVgf72r4zsB4W4huMHSAMvXNn%2FzHDvAoZ41ySsll1fTTyErYkjmWcGUwF3%2BvX7Igcjmqv4QZIcwZhBJV3nDeK9cz3ZnautErIRNzo5blFt6ocMGkRSM%2FgPtSudbKEimytu0FLkgS48BStFSLKVtLjc%2BrGM9CqlC8rxL5GsndgyNkage4UAkjny4aTdIGubV%2BWwdKfOidbMP2l2i2D&X-Amz-Signature=24eddb060d3e1ee512fb40a27d22101f0862852314932a1a7297022450333bed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
