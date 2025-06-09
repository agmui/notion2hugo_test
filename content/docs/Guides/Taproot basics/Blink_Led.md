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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626KYFI3V%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDdpio6wr5UiszheS9MnCBiWTwrspBgaHPuJFUpXoDaAIhAKIerEgZPZkjbLmDw6xtPoUoUMYs2KsoXaBFAADPX81aKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq2ulTmUWNOKlUwpIq3AMO4heVRPcwmGhLT%2BRYqXYPO88959Tx1keQRocFkBGvEO%2Bu0plOoRK%2F8yIglLeORuhJ%2BCiwhS5jW01n3j0A%2FaKizzLxnJ%2Ber11p95HczhB%2BccuymqdGp9qJHY3wE66nE3huS3K2c0nGex8CndO63shY%2BcE1zzBgmhKa8Xs594zc5sTrCDgutkSF7A160IIJFQ8MVduiZHR7BzYsBsvkhz0iQrlti2GO6KmJa5gCVbUOJp2VW%2B1vB8YwkFJw2UYzXMtdPhjZkhnG01VlXGoC9qkDfmljEW3KCvMmzs5aWe6rUspwXRgf3oCXfzSh%2F7Zd3cuedjvo98n0lRgwt8glBX%2F%2FvV2G8266leO%2Bq%2F3EffVvC0QIB%2Fy6gtVWoWu9deZ028W5d%2BMHznmjqZZ7UUxAOUgR5P9ViyX8QEuYfZC9KXCF0ErEAYZ4eSsZb%2FpGWTB5w%2Fwz2CdEU5%2FvITKlMMEn%2BkQiF5ofKDRLr4es8bhLZKP10AgL%2BbU5PRKcjK%2Bgr372jsN0k2uEYjfaMN7CXdi1%2B0mMShkFCMNe7qTFGWqj49BC%2F%2Be3LjI07hn6p%2BnAIfgsX%2BcbSNhK2oHRX3rC9ikY0pwhcrlRj8rwJz2LdjuhIhojgXP1gdP%2FJ88c4M8jNTC47ZjCBjqkAfif5Zf4DsOAdqqlIYY6sJObvrgDojZAKMKcMSY96gWwUj%2F0GSFmSlhUtK58wnlO8gUmHgOJ9D0vQG5hYfHecbW6De1SVXl4A5vtN0J7FRw8XU1EgVoYge1e%2FbEX7BmRoBzc8dkvuwPUYZXKhcRWdi44osmVEqkauipG12DkE53MCQlREoULnEN%2BZC1bzHsBEyleaQQoeolVbu3RmmUfqfVj%2F8ap&X-Amz-Signature=edf4ab6d7c31c94971289fc8a198a868e2e7b16c02ca100eccc9f50615b80ee4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VASHWV4W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPgO5Mbs80VsNu9hs41%2F2hYTbbv7pkCy%2BURtaliypvpAiBmI9RSnC1HlgTvHGpDb1lAg2tmFpCfwnjK2%2FOw4eiAmiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ2KHSr4JBtJaOmKbKtwDHQgdOt6K5lDTkw3OqNa3KMNjDjyRt12YxgXrXcwL9tGSdX7JPWdRMY8GwUuqlkNKlQfeOdZS8A%2BWJK16zIH6SFBJSEP%2BooC9x%2BC6M3hCrFLm6p9ZKJbats%2Fq97BzK7s0ZbDeWw4eG4eucDwimEXQ2D3g7hJD8BgNRfLgHwjFmnLCdCBZP0Q1ffF1qSFW6VPGvTFtipe3Fc255OitiPuhMmW6bl3x6q6ZJmDK7XlHK1Nd62f%2BgCw7%2FOcQO1Ks6ZccpX5VUNmNVq3%2FSgmGshzgvIvAgMwRlny33TrZ3hvu4%2FrpkP%2FC1CrSB8mqaWFnAoPQXEP3TiKYaFvThy%2FN%2FSJMeBuy%2B1OoeWZhz9Q%2FEhgDxaIMXUqRB2lxHpU3RPAR03SHTbrp10qWCxuP6XcD310qiMEBp9ND%2F9NurYN0nMW1MyROPVG8NktYBEcKnKspHe2Q3zBSKNPuQ%2BW%2FwCFESSIuPqfxF2LkPUylu9NtH5gQUObY2gT9LEZjYeqo0DElx0VNhQoiVlPnnLw%2FiYV1F70HYvEWFhFwdQKjCWR7pFq99NCaXV6mrnZ%2FIoqx7skIdsHlxsdEznp%2BK%2FFrl4je2sO2mY8Xr3r0Yd1lXLFHciRlDklVaddld%2BFi3kc6PiwwpO6YwgY6pgHacwyhkI7kjZsaRcBQSCjJZNwS72yJRohzh7cLfaeiTGlQ6W%2FfNDT9RVOezZB9RJwF7dtCkzhWHzY331eQDQW1VquVIX%2Bq0997FSieVGP2%2BHdmSeqKXC2BuQBlBSOwu6U%2ByIqP0%2F18xgV8tgXEIhY4bJFbennxCUuMnNHWlIJanF%2BuYF7g6KJAU%2FVXPu0aT12Z4kWGn51UTKFoyS%2BWYl9Z8AdsjVGU&X-Amz-Signature=c82d55f87236fbda408078b2a738018a473c42c02ddcd90f0945cc4d628efd15&X-Amz-SignedHeaders=host&x-id=GetObject)

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
