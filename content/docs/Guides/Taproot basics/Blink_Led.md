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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VFZ5LD%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwQjfMqCpVle5K%2ByOgqh8ZV49n7AXz0YxDlmb6eebKJQIhAIW8sa1%2By4POwZ068yOHl%2FfB%2FyLczTAa5VaKFKyhLIZjKv8DCEsQABoMNjM3NDIzMTgzODA1IgzAnSA876Q45RZ6sDgq3AOwYCpQTOMCfhZNm%2FbO%2Bk%2BPxKy6Y%2BCfX94FnYs%2BA2iHXLQDEgeZg4pCQ3%2BQ5qKdtxn4TcPTFJyedOZrgW09br4jcnALpSTd5oWqc1V1sN745LTGuKwFIJjg6PhVdBLdMlOuH21M8kVw7SdFvtSAVPyw82ODMRWMk%2B2jKanc8uUN2jNzZq4Xy0v9FtxpXbnhZTj%2FtDawGWMmUxzFRQcxH9BM1%2BZZtlOnHSmKrsfi%2Busg9GQptHP0IV22xXgRZ%2FMysBU47lNAlt0%2FxglI3N60qj0hfnTpOv%2FxQ1zxmblGyEWPS4XCMS6Cqhk85irZuzv3a7xxZEfvqECLh6ICpDxQiuME6MSBBc2shnExap2Cu5LLYrzb%2Bf53xhtzHHmU%2F8rhXnXzX7e3xT9akY0PAu569jhHaFLKKDeAk3nTvvwVxaHcgHUbGfCFTJeQFDiZBzvDzM5Ko9xLYC1bR6jJmnxedTqmS5jjgLNBTYRKJd1VWz6Wn7%2FSIBZFVKJ9IZufO3F%2BTY7Y2j7BJprOLdVHTAJsvTDmohlJruB5%2F1XUoJLyk7aT8xIAZZWGpKCFcdzlF%2FICzDBFFSh%2Fc%2FWH%2FRVaDq36HwhW5LMWv%2BvnTaEV20V1%2BMzn2wfz9y%2F0pVFYZLJESzC6s%2BDLBjqkAfHCgs%2Fyr8E3yLqsroS3znc2P1bJz9%2Bu0pchw0GxZD1JZvJlsO3m9t2kFPGFU3uhewoWwN7Y47%2F6d4Mz1M%2FePDNPXPIjXmrGaFsQyKyiQvujnJqZyI5%2B1zNcHN2bNTvHoSygllapDRBQDGlzWz308gEXECpc2oRzuX0WcvUKz49o%2FL4QoUjHInu0xoglD00nknKnJbBe71%2BvJJtvGY5EEiIbj%2FDG&X-Amz-Signature=029620787ac6fb4cf67e2b67f23fb3eb0a47ada71e79d6d503f297a66bf27176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M4SNG7X%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2h6d7DQrgqOOHmxJJv%2BS3PIlO9JpPIofM8f2K9KGTyAiBKxnxCQzB3VDfw7JACNroJ%2B%2B%2FNIT%2BoXdlOU57SJ9OxACr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM4jNNu1lzjb6XhxMCKtwDlME28fuoU4twE2pzVzW0jFMYGhoR8xiAZRPvyU9q8S7W%2BVxiPyT229asI3cCtFK49PAHjvunld7iiS8jKSm2wwrSprAP8OHhKbZi1JxzYLTUIjbY20AXpicvJhXeG159qOIWEkDSk2slrCaPDvEZZ7%2FOEAssbMFSqMgHCkfPiZM%2BeaNyM0aD3GF1eNN8%2FthjRmBHD9cQongCWXz0Ma6l4KzKzFalF3RR3aXGV2246yj4ynKWlYcmZ%2Bq5z68MFPGxcnp117ggR9%2BmdAfZuEHRmg%2FwvBK8Dhx1Lo1TOzQAduUapkEqDGdZsywc6KmQy%2Bieg9y95Eb1Llkj5B2udS3V7Y6dyZLSOnKskYTLC%2Fi3nNYsLo%2FygF6RX1R4ugCttzRDi093Jk2gMqEd6JcL0WIWE1WDcvKSVt4KBcVuE8DX7mboUEDGCR%2FvIq3vi0DXRWJZCOJtR7UZ0eqQxkdl8uHFgkja3sFnUnSJyyzxranEUGdBCcJCN6j6HQ9oIJcbEjJUJKJMqV0hKQajX%2FEQUzOnDeqLqaQRoI7V18HVA1ijqs7Ho6JE3gS32b%2FbyQIvJbh7se95s01ZwN6OIJyFW3oYgc%2BvUMn8RfMhVA10E6Z5S6e%2FttmooISFaIqFZNswjLDgywY6pgGX7TfyXFQ1ZgCE3JYkYnAtgddOHpUKK7v64Kr49UffhjhK8R4Slz%2BeWzpU8ebj7KyWhx04sbpPDJovpmndW9AMELRIyLLF1t%2BlDNgcSideHOs356LxF6ePeFUzsvjeO3mGrYTNaUB1Q416naIogVAs%2Fli0VTFuMNX5RPbr5%2FBXEpY3tHYP3%2BZjnWpNJgP7pWU6SoQug0rV5r9fxUdh7d3mbSUogrsa&X-Amz-Signature=32abf0c93362462570a9907f488b07cd1b14aded713455755706b7cdbdf32138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
