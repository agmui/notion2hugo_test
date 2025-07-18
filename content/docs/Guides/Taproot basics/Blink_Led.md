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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZJXL2BC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCBwYVq6%2BN9FKjq447cSJMYfJkSiG0SWT%2FelX%2F4wh%2FflAIhAIsUitBJiOs1F8yDwaiKKz6888qpUEdF%2ByumiVOdgc07KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKx%2B3VlH7C8nOfzZEq3APydn5xv5em5AG7L4fabUsOndmVhA%2B8ds0b6xyB3NZwf1eP34JNgbfGU9TBpoAMzRQ2Jm3UiMh4A2BlBhrhVAm%2FXLwOhOfmd%2FkAt3qC7G08UZUt3TvoMKmN5PI4%2B9igK5x2Gbsu18QmbEQ6HpCO84ZbTSNk4CcWbQS8IDySuGF4iJYtQobR%2FlZ87jaNsb9%2F5dT4762344ONC7hx8S%2F%2F3Eq7UkjEnX4VEFqh8iHuzBUwPWegk0vdHHj6CUWD5ssj1%2F0s2noaktM4Vcju4%2B%2B686C0ThMAsY7IeHQBcmW3eNxpvnqcsXCxW3N3%2FhfeeKdQ%2BNQFmdpAB4OeryDfFDoWADOmouvg11E3c2joULhPpcuBbTgtWr6N5IJA956UHo5z8ZyYLrcr%2BIR90811U6RMkDdSxDwoJcbqYYWeWx3vRYErDle81oRzRspisOfTzEO%2B4ZED4Q9clDX2By%2FSdum3ycSY3wJH2%2FFiH5luTExMJl3R3KsY9TxwwVMgYCf2Rj8X3Qg6wpn3r9VdgnaSYUr0J7aetu7yJt8K9tD80L0QheihH8jeNTvC6eVoa8TGVqU28hAikDKYFFzHc4PzHM44Z1hlcWKp8Pn159jZ7xJUve0UZuX1XVo8fJhthxnDITDOr%2BfDBjqkAXBo9juOjL5ek7vrjXny7TYYJmFRG%2FCFEZVqmRjnpqBPVZvcW4GN4Uh9HS%2Fkj3qkoo5wp6QnLb%2FsIlso34EnLlWoQzqlK9NxR%2Bclv5VqWQLTDRbPgXwvW2Z4g50ZQBUBJBrI2mTrIi%2Fkg0DuYlgPep5YdYYvDOeFFxAgaoSwx0T5Fn6VXIdz85NSEE%2F36bQQbpOrS%2F8kvbNpgMSRDJE4ISD8RXp6&X-Amz-Signature=9201ddde0ec39b78652d87cdf57687a0a829fd85122fe48061e925abd5ac9da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLC3VUZO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDUEePh9awgtbvTJ8QbuDKa41B863uCdilpnOltWR7RiQIhAKzHtArRlsGzjCXUU7mYFmcoBieU5edW2SjrIk9oa7ZnKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj27vPFiNvwKYvHbQq3ANfpmhPFg9GKVf8Lloz8%2BQu5xgqrkFX%2BfnlvZKV1284NNagEJkhhffgXc%2BFjlt4CdnrB1bfo8jTuNd4DZ4macVWuFbN3ttp6hKhQlgsXy41yP5HiL%2Bj1qF20VVhqPBW5QaqOrNrGMfsJYW84utnmJe%2BKOk6090QXAA1yz7ANCOxKliC1kdk3JtFyL3vOuJEzorykQaia7Gk6cg8WGvf9HXFRk9O3qwYg9QTVF73sPN2NAe5VwHB8g3s8mNaEWavmOodtHdctzZwWSHUQxuyhpnesLKzV2Xw0TiSF8CLLLjT92rUTA4R1mXf0u5HesqOskKdsqD1u3pA0sZQtsquHsrftjrNFxzpTsNeuBKjjbPiXSHI1Vu5l4XT4mmUXFDrDIKFwzh%2BdS0FKC%2FrHcq%2F4MKww8%2BldTSEt1mZRbfwYn0r0ojPeY%2B%2FQ28ZtUQfS3IypXq6SX0T8PBcsW711jbybe6LYBsvxAl3bkgQU%2FR%2FsJDq1ulordpTdGF03mWHsFXhgSvXjHltpQLAjxlFBiz%2FEhhTHVaG8w9e2z%2Fe39DEQ3tRxJ5BTffAWTmLZsoQRAoTJg0VvXUrBS7jbjL288kvBD6y4Dz3C1OdCrGwOq%2Bnlz4v2XMvdWz0%2BnSSy6zHKjD5iOfDBjqkAdMX%2FlDkAd90ROuDkFxOTSyOGLci5xUIDAVKDPMu2tPtwEUi0NbuzzgU6JSX4bgoC3gp950ZWKxIPe6JJ95LFgf7qwIHatRgrdPo9SfPcBOvYx5MmLzrck2gVoKmrJVGMbaY9ZcOavrrC6KooJhe2GQt%2Bu1W5L0BPZB%2FMlzMmAW9o7Qfvmn1rIRSzsY2eOYY20XMGvFHOxQMrKyrGOmMNYAPjUQh&X-Amz-Signature=4569d32a79b1e2919d1a867bd6bd55904c69df957507f57ea240ed7f2e622d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
