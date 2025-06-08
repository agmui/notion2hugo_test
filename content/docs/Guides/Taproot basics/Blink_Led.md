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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DI6XM3V%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7syDyUbo1azh6y8OGMHPtjfgFmwRI20MWNNDmGSLv0wIgZdH53ogUV2SAcGpdNjAhzNgAxM8oiu09jo57XRIe964qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAn3RmPJO1A5b%2FQT3CrcA%2F45m80uedy1YPz8CdReMuE3Y6sgb8rlVvzzWcxMsbQ933dOTQYL0uaxlFGKLq6hyO%2BAjx9ituLWQIvjbHUJvUrlgipoxv5Y1NrIvwi4e%2BBBXZR5c%2BPV0cyOTqbWkUUM%2BlL3oQAMWsT3AHsu9oqN1IOs0TBrYCMKjDHrDyv1UvfPh5IufYlADqU5gIPXHMIRNsLrIsxZ2JCbeyucRBW1p2AQChxgtLS8joK9kLKAZ9xwRegw5vSGSoO3XClid8gn3AafvVGkEh9nJ3y4MWJ1fpyG6yj%2BJdw8zMNBapylVJPl91MSOM%2BK14g3eGBb%2FpXRoGXzMA8Ec311TwkCSgp50GwKdYZOJ7RDt9GxZWr3yozEDBP3EX%2Fas%2BeVUjkwxB9MhLNJYfMyYMADTvCroaXeiCgHf03rqXiewuhMH07ye%2BpfWbCyzMKO53rSUZZzaxtM8QB3bP0XoLLMPWnGbYI218I0hEkRMlQbz%2B3QXnxvYNF%2FJo9NShEDyytc7tcLXgzScd7PRASmnvDPh3q11Fr5idwXndn5hCMgFUDRgO5MTkQh5JeXwpTmcttbTAgKc%2BKVGe2BGQs%2FQuoLVtuAHcrRma71ZsTFGM2uZtYt9b9%2BCE94meu9J%2F8POVDcF9TEML6mlcIGOqUBE4na8dfbfvZ2wWNIjsfdRBtTfA14UkN3%2FHDSlY6E4%2Fgoki9qNBQR4iwMJ5WzPALtrZxqiVH7UH84LCql22dyXHpuX%2BrnGR5bygc%2B%2BlKh7DXPv%2BKextDxhWOY0BzQ9Yfoq5FfQCG55kQrx7BdrOXS68fBg97k%2FFt6ATO2lDyTWYoh4VoENKhq%2FV6bdUxVf0ATGwZOraslxSEZqmHOmq272nCzJVpA&X-Amz-Signature=25bb3467d0dc655cf8ddd6181684e091465a4e7df8fa0371276aaa5d1cccbfcb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B4HJNOA%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3JdZGNF0FAzp7H9FMFds%2BN%2FE%2FE6mHfuJ6F5LmpBezxAIgej8r%2Bz8gDuBDySZZnawfQ0Ex%2FTcoZ%2FG1HKvZoP19FREqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlDnu0zvCjeEhRnYSrcA3eXu2RkQJPpaJEosA%2BFQY%2BPWy6Lzq03ynHSilIBq9LWqWrrtXpsFBHI2HA1I4ACSYYSb8er%2FZ1vZRn7JFuai6RSReoTXgOfM6a%2FX6BdU7vHWHIYdapfagUcoOP9RH6%2BJxsq05ToJLgERUeIjZbtEwPDyy2cb77uXbBJRIQv2tD7EvAnjFaijVAv%2FgXD8JNxqaUkD40JZPaf3cg0xqPvwtr7%2FgdsJmmzqKxqWIErXR%2FSW02HIMCsrbH31OyVHD4Ju5eStfxRWBo8HDuW%2BgAtYd4kOPSTlcuKcUuDWXmfhBGwxp0vxUxr9abBINs6MkbCH%2B3hhHW%2BJabhHx00Nuw8m%2FEvyWJ1vM8hrt0onRhyLWNhetOi%2FEvgFW6TpmMUGykrK8RSEuivu3EGxydfab9B1s2%2BuSNKxNYt7hglhCf0EXDs%2FajW8I9umogxwCeA1WyVtv%2FTSTNdRldojpKPPL4V%2Fksim4CzxXKd7S8HXs4mpYLlMN2sYinlo7DBhM71uXhW6FPbHNFxpgsn57vtrzOZ23xaWhuUd2TXHyhk%2FVkxrjg7fPzap3Rmv5e92U1QeMH2NctsdksaycRtd6VqRmxObFFavPdXZoDUJ30N8CijaDPUEw7aSQoa%2F%2Fka6DjdMIOnlcIGOqUB0AofMazgaRNlTCfjYeudlXEk6DAxdSBJH%2BZHZxe%2FJ%2FbzxbDHty5UHm%2B3BuyfLJlWfJipelvK16C8MdNIM6pCNFx97um9ud9i%2FRMI5VaKDRpPq9RcLZaScw9QrO3TRr3uW%2FhCySSSqBBfWZ33sPtV4n1F625AZzKT5KDbuUmV%2Fs6NV4AKCJLg%2BAoqH7ZSTCvA8w%2FrKFyFvceVWXcPg6y%2F03sO%2BkGt&X-Amz-Signature=83a81df6949429ddf75d16af07a3706c79ac6322263742e62661244b6dc3a0ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
