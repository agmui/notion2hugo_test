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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL5MXSM3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIE0Pn66DL2BrvM%2FtIcY%2BgIu6R6%2FJ7KSwlAUFNk1HDm1GAiEAx87gck6wrMlNTqzCAjUR%2BBBJaeG0LFawszot%2FQA4iOoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDES2w0TFGGVpP5y%2BtCrcA%2FK6O8iBR%2FGeCu%2FPpgcvjFwoclHsMwxQgRagyVrIQpHLXKfVKqObGoDsKnoZBEP5KyqTF3iGc%2F7TmMuZQpejdRuAJGVWCqiU2fc7nqaZALYpukq2XgS%2Fr64%2F3TXmDhjysm8kKavYelXJm0zcqmtxnb0o8PIaQfJPZZNH1%2B%2BIIEm8ab0HFO%2FVD7TFAObe9E%2B%2BtGr1Sgt3lQOgrPWKwXHwnj4eVKKBJbVpVktB%2BtV0nQ%2FQOgtoMgDWb78wqAYB8nHdbBOT3ncpCe1QcxWku%2BYwH%2FcDMeXxYbdVV0aqdpJ1PQvanxeSGiuJvu1N4k23CQijmaDpT5uLypH2tjJH5pqXvyAXyt7nmHB27Y5wvZvV86dFZE6xzeS2QaUtJX2P%2BccmsDf6z7x1HkkEXYVK950f7MpPDi9hA%2Bfg9nv0fPXxSpqaah3d3xBECCRSXcch32VdZedaAIfqWThlg8e8nUW1k12hx865MFhazWK2WA%2F0tI98k4%2Bh2pp48fOYwAqmtTVw1pnAe%2FonV8oQS%2BDAcqcTDSJAR6y%2FEM7I6pZx4iiXGRHMZKOsB0Vk2SO8o2kDcQhpXGa1XacriBzwBZUKcG1fbORzlqKSjivPUI%2Fy4xHR%2BUguesrfYZaX012oS3enMITfgcIGOqUBGUjtwRWoqTRt%2FA%2BRozjRTgKKN45xXCo0V1ilGgw7%2BQIvv4G0%2B3Bh9lqATBb3C5Ns9hECbD85bjk99j2Jz%2FNEy1wEzg01O323%2FDqfygw3AJDNI7xF4QFtZ0L8%2BqIWUvss8VfOiY5muAryZa9hhsR%2BTjj9NpPF9RpGbebc96yY06GAtKRBsQXzayjz2VanthAY6F13LgaBEiMbfDniA7aAvUnQrMqP&X-Amz-Signature=ab870eabbe2042a742fdd87968ae5c4e6161fcc8f846e622a209d18373fa9f4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OJNQJN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDr3ns%2BpuFBW5HC23yWrU2aAx91Syg1fFr5s5KSl6jU3AiEAzYo1zfnFxAHQD%2B7aBdWvcU0xqzbyEAq3%2FAAXiulM0%2FIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOsHfOYFpYP%2Fi7df0yrcA%2Bxwi7JWj9wmehrXykxZU%2BBSyT%2B75PV%2FF6kV9hZIPRfzJE32F7wZFO5LfeczYH%2BSNw6FbNEVOh2nN7sC%2BPV2kGtkaQaaabMFdvcnzdroJ6c24d7CTlqAFCC6n6iA7hoQhPucCzD6%2FIlxxtUDVeb97NpAaaPyDQFJmBGbVe149jw3miSUQ5DRpAwen5kuqEgRVKa4%2BAspKTBirV%2B9tIhfpF%2FtqtvC5B3VA7u0N4RxNZlYJZjHWF1tX665Uja1nFT%2FUYnSiKVaR2au89ROEDiKE%2FLcut%2BCmvmxxf26fjlYJHGWhC7F5rNkTDGJsFrc662g%2FfmGpfzSoQ8AafrSdkKqj2a9ekLXHtbts%2Fjwgp2Cxh0hpTTK9npjEFFOm%2FqN3NbNeewM4VBpQzu5n9hblrG%2FRMrnsMHod0cMe5b5oAXyWzgL89ZaxjUP8SkbKNprIqdxpmg0H6r3OfBk6xtHlzU0gG1FQ57ScSzjO2ki8fcG74RQFAObLf9aLJWcKvSQFvtxo3tS4v0UcreCQELfaqBu0%2BgEOHXT6iA%2BFp6wNNvbqnmrsN1aNLQC%2Fhd42Tkqwd49EQgQCZ0fGQmvbdZvYIDjb0AOr5zrTqvQsSbZP6htq2Jcj0o2QI%2FqRe3WC3NLMKTegcIGOqUBzI%2BeygycsrgkqE4C0do8c3WBl4o%2BA6fJMvZcTRZOFxk9tJfAHhYn9UfqexVlDd5UqGaoOHRyf%2BvC%2F%2FLc7VgYoA3hLDw3k8Uu3cErQJ0vLFQkZzTxLkZmh7mA2yEtgGXpRptXDa82mLzJwr5ownJXCifMswUup%2BQcPW6gPRDi%2FOjsaGUjTMworapP9%2FRWXB8Ri5a5dSX3Zx9L05ZwQHFdXcjPq1wb&X-Amz-Signature=a09b762c211b4aed396afd50676875d37d4f094e306dd447b994421009ff5b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
