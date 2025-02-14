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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2JIOLY%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwBGUQF%2BK%2FxK%2BtjRE3LT0YXEJQigzVChIkJLYDcdQ7EAiBa7L2DkurxOx5wmePZ6aKjAbDVCBu6ipZ7AEWV0n%2B%2FUyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMtDGgrO1%2FKIoiIeeFKtwDqJvlsjLUZ8XMRfeVSaQQDNHLiGKhaqUf%2F0VE8XG94jGB6DoJBsN92MsMoNmbonymeVOIJDPs7eK2Euw1Et2FLidnZUkd1PO1dvvDsAwUJF2T7x%2Fzjgc6uqtXabQ6tUOqFfjjDSL8aKXZVGOZ1Ma%2FvkqBx13FDvGgKtr7Iz4%2Bj79npaR%2ByB6vvwXotOESmqhSKxvma%2FoaSXHMli%2BOOHmr4yQsq8VezmByRUmBJeqxxAIXPfI8%2BoE%2Fgw4bD0KVy02o8Lf4m26S2fBUCo4GTrP6%2FKN5viYZaNBYuxSMTVKHbRMcI%2BVBhunsWsqVNVadl9geRFOo3jrsh%2FElufXMvWczy3xbmGJf0cobW0gxqO0vtf6UL8RUk1jBSDdyqd2XOm%2FA4%2BU7FZBRxoIHQ9CKATDktWagLavPo6UdSMoQexqeMwIIZGnmfq5lJ%2BW591FiL3RzdfiuvUjPM%2B2aUCybK71R%2BehFiflJSnYfKOcAMH4dsatEpkrMnbhK6DKZzf6lG9mlXvhin2kd2yF06k5WhI%2B7S1Mg92suqepQYNkOcJfybWVuc5o2t8LNqfXrhZPkthCafjlziGpwHtgn17hezmK44mEsVuSt3CtHevpx0u8LtD9l%2B%2F4297i5dHK12b4wvtG6vQY6pgELNv%2By3IgA0Y1wwROWYEai48jlsCr0hmFfHJPAMmHktdvXMXgMnAYnOJRj2mioXCIFFnoPv52DAjTv6iRT1Dl44Y%2FxFx58ryiSN9NODrNKnXT6C0t1h5%2BkGj3QQavMC0g8Q2I7vzE7JZ3yuU5SN2PMSziqvWyAHFSQD5dQfUdeHIYPFQMpz2peW9V8NNqD8guJzZSbkqD8dZJ1DwRL%2Bmr15as8i4KJ&X-Amz-Signature=2e39d63fe295cde803410b47279724f19afb52518e27e477967d7a84da4398ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIAX2QT3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC83sktsK6jbUTefPHjbZl78sRkzaXBz05O7Na0Q0T13AiA0vMzpYT3SuD%2FskZOdWxUTdt9s4n1bhwyvnT8odGP%2BuSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMjuQXNYvx1ehNDM6jKtwDetmf%2BweSKFaWEa2xjN8VIFhVSzFR9vwODnxMWrCmHtyeOiQRGfnUlExWH0YTfzOM%2BRAqpoPdCbQGCaIxQFIgx8u%2FGqooFcX4WXlMrPsxS0hNtEpyN%2BeeRB%2FQpvaHG%2BVo4%2BAFdkJ2ZpCTew4XJYYZDNA0ihxO7UPtn1kn50TqanQviX1KIgRCR1VI7qQeIIPPorN%2BLfplxIW%2BjPCWrRgKwHZNHxdlWlwxoRdZ4E%2FYZCdfWqAgjUOt3QLKaVsbuUJnlOeZRhT%2Bj1Up2J22psRv6k9si6WfF1vcarRqPetPAzvGvICAa2CAujTGQ3nNsBgY7bbX%2Bm%2FtHCk4I0Rb4WMjj3aGlhn585YpoeqtjCjJZr%2Fv9tFJVvmsMR270fk%2FLzhZUgw45P0DNT2l%2F05mr16BLmT%2Fo8s12i%2FNjHSLFRQPOpX8j2To0Re%2FBFjc%2FAFT3s2g4A%2B206rte0HYES5DE%2FiKC6ganjEDnHJP5W8McX6Az6b6qw6w9zWHpzR4X237tO64djdlBvmpIfxhCEU5Qw%2F9WYIHPTKYkmD5pudJcFnApJLX7DWctROousT6Lma8v6oTUhShTYxZI1cmXo%2BBP0JyGiiPlti6jyoclE2gBvS6ghf30Eeuqcqtnr0t%2BL0w1NG6vQY6pgHvl63ijgr5Oqru3REfMS4id8BdKBDu0wzSAvH4Lps3BdBzRTvPMF7MgT9hureEtB2KIs69%2BPCwXx49P%2BomqGbgSXo0Eg8q%2FlIvNuytDIk2l%2BgAKQmchZ7Z%2BB%2FdA%2BTyu9zAEz15IP%2F%2Btzw6TSf3jjfGBbcLRwOFxdBV7aoYR99r37UJ2%2FAiG0uz%2BdmgmGVLUnBlhPkJbxqYkT%2BKIt4vb7b2D8M3NW3Q&X-Amz-Signature=26bd3fbe8871ddbb17443882d7db8171a0c3477e177e078ef186e8939a1b3f76&X-Amz-SignedHeaders=host&x-id=GetObject)

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
