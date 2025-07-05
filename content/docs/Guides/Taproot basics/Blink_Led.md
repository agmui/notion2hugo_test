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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7XIO5D%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDn36HF33hzzbW%2BufFOevfvy20oRliwxHKwpex%2Bz0ba3AIgWWjF%2FBct4UIZD%2Fjubys8R2pSKjJLK7tXkC202WmmC5Eq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAC2V%2FjonlOfz%2B%2BeVSrcA53m4BvLpK5jvSeJfHxyTt0J4%2B3oATGUtOLueS8v1Zsti9IbTEd48CgmVHygsnsL9K%2BIbwptcP7iCl%2F4J%2BpLojCdUxd1yj0LY0rE%2FxNvRcEVbUXR9vRanP5BvZTqzMm8OHLs%2B0wVcF9Wzr8%2BosXBLSvzTvMe7Akz07e8dRRdfFLEeVsvTjuqXRZINgnpNy9GqHM%2B0QjAbKx75Y9Lv1YPz1FgN7wyqo%2BlGwv1NDHElXRSYaMciWwgshAFIKgtBS%2B1EOPEFFXTphOfWZBnGaIF1rr0tmGYin2SwGvDu4iOg%2Fd7BIkCk67wrmQh1uTThBUnjB2JohVi4t7zjkKDvu0C%2FKkehO4%2FHdGajG3Fc1MqfD6Im3a4jgF4UD46Ici%2BUPbMeE6NEJNYCAxbzoCOagXp3P0E683hhnz2BnF8m4n2ZWsya64UFii%2BjGFgyGgonFNQbxuz3z0h0OHmtGRkQubjYKmP04El%2F%2BE%2F9wniidxa4AMiAnNb62IEaSokgD75TUo2mi6ufqEayOyHIC6kKxBBB7i1IhHWACt4JXkt27ATfHQQePNmejUBpBp%2FXewFUi1WE6Ne%2FGeLy2cPm4O7oLZVgUytDSJw2AcMD%2Ba%2B159%2FYzyU%2BCl9GdBJCjS4Bw2jMN3qpcMGOqUBgxVrzHi%2B2A%2F4U1looujTLEivtoLPcjyiOVIFsf8KuB492FjlxYrZYEEWbTYhjcTsUJZVdz%2BIkjfQNZk9tnq91aT%2FyBG1AOivFVQvCSDsnyITsKBrAGbWXRw1tSMG99I2dRtnEio%2FO9KhcOIuU6ATJ0xkEgnbf80LH%2BqhHnNRk8xSifypG2JJI4jn5Z5qJ4dR%2FOwJECwmyeJYESrBb94O%2BfxmIh1n&X-Amz-Signature=76449f7b00331d72f519742808aa4495d48b6d1dc57e8eb681803489d60c4018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAV4N2RH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGw7NgOIVNj61jc%2Bnv4Xgts%2BANFkeXpP3AphwFBzTiKPAiAwjVsJbr1Qg6V0qwspDVuk6A2BfhjbuhrY8HJn3QK5ISr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxTJ4ruvsjMt3VGAQKtwDCgJj1ovOKhz%2BZVas%2FmogePrNQ%2Ft%2BYY4L47f3hvk%2FadBg%2F64mAIik2ra3BctqNv5JSuDNklTnP4LSaP55cWTrEGkCdV6UzG12nuT5m8DsawzWVLlF6vTuqsr8Zxnc4cFnrizYYQHaSaJK8GCo%2FVyUlY8qOu74RTvGPI%2FX8IQNx%2Bc5iT%2BFo9CsFEFOIij%2F44Dghe16rS4AvQMN4r1jXNE4vDizbigJED8z2fkZ8DBsKvf1cVtWBw7XhL0YcQqZgYVCU7%2BjtfLUU0EEgX9oUm%2BzhXUVWdzZxdwN4B9K4EFjFtd3fGwLyG4fN%2BLS0seckUXNGegvFHPm9VjO0znb8hle72ndPINz08eressRMDGC9FUUGdZK1TLxOYoduvWqHkMC36ppQ7X%2Bh%2BaFT6Q09TSMi9gnMsUfs7C1AZkpwklMMFrecgSRP9HQkdZy9EXapnyWEi9PNMV6ADwLrFDENUZU7U9fYvRUHATC%2FAk4bs%2Fgp%2BS9OPqcUmb5sm5tBjq612Y70PQjw%2B9tdTf6S3BgdmnxRuMjmQScKH7jGrnM4vdvPq2yMJsRtDtFFS48yBzW3F%2FFG%2BfPrQW8WJACrT0R9TphapNXP%2FCT0k0LyM1yEW19jLQ6VX64Ha8xQXHU%2BCEwt%2B%2BlwwY6pgGfMrVgC2lXa4cOT0Tr903Bh7oXWub4Sxi0I%2FAR%2FZAMvcUkqeETFIlathZSdmb2NcH8uz%2FfBjihXWZFdrNUY7am%2B44WEo4ZdvWNJaflEmrwa0nws6Vwvs5aZJEOkx3EHBQAu63iX4rcTU7MKlqaYCfhTT1o2NDMAXuwAIvKDYCTGsTX5UNFhm5b7hj7h8Kyx0ZFxu7sFAleH282cK05BCD4dk4wAdIn&X-Amz-Signature=bcdf69b6e13479543604ea1224be4eb28035c171b060a9f613abc087044999f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
