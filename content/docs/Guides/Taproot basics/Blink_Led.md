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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQOPWNU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEDmIolCwDAO4cY%2B2RshqHBvpoadrqUo3Oh3NXGDmhSAiALEpGYxImlOkkBrwz81gmzpkiYhthFHJjiBuMH0zqilSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0YjT7QOXJOKZvr3MKtwDwk%2Fhbf98l2oZHrfqvIHg4PUMjUu%2BhgWAgCm3PZl%2B6rrf6WLEDgdmyHEWKhIH9FakV6SB3sUFon8AyrgO0nrUThcavU4zf2Okzv9lu1f%2BwZ6tRFqFdr7yP%2FKNLQWZv149R4ZADMULwmX2pcLziqBqc94QrXMzXWwAlFRV8D07XGw5NxFtLBKZn1%2FikR%2FD29eVG0zdeZCTqZysvkpNc4fhCArlubCski4faS%2BPphOYql54ZuYL3f2TqVK%2FEWxFToT%2F6tqiO9NvWpMVZ4msoFKoGPa0dJlLu5XRlW%2FgMCNsha1PXTPoWYJTYxTa4cUMfHj7n1rIhLnUuNWbU33HARxJ0jsvuIgxh6P1tTVwx9DthlUCX6rRP35rtAvA0E3cxAuH4bgt6CNTI%2Brxtww7YXNBk5mYrzoBTLRyJ2kY4D7OxBTX39p1fZzocYTA2fZqPg1QgCsvPBvcfgAoufd5mEqeChuqcqw2iWdkS9H2X2WcKB5Tkt9HCz235wOfttozPgGgns99NFkLq%2FdU1AgO%2BzG0v4%2Bc3PJ%2FOfAxEiB%2FiOPgLtSKsAxlvdyg3Ztx%2BMSdLNBOFESKgXCr2Irx8ru%2BFOglX2FAB5ucW1M9E5l9NVD2iSax1C2Ig0Efqvah6cMw0uKDvwY6pgEiQaZ0n%2FglAHeizftJnQ7oLR7J0IBNGxeQ%2BPGOVwbbpq3lt3lzQnqvTqeruv5t9O8SkwmRtOesh2mDHVr1mukZD8IXvoqEtzR6FjPwIV9%2BajOCwY10%2FgCqiioWzEVuCt%2FPWdLgednMR6Ov23Q%2FxsYjkWZaMYWYNZjHLQ%2BztWa2aum9Ohl3cCEjl6nbtFeNajQ6kb7UtD2G1wfGMGVD%2Bq5YH2eHEhDA&X-Amz-Signature=a6edb4b303128a91e473d885974ddf54a26f3d7fd9f5f5b57cd188da0835da09&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRFVMAV4%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FzZjJGlxKEgHjrsHYLeRRoScgoeFe4XVqt9SFbEDjuAiAxujTXcPyVADeuKjvzyehhUXCqApPeJb93s4Vk0Gm7jSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4RW%2F8ajUCleefXLBKtwDD%2By7LiLgUEz41IJZIGDRY2s7o5rWUKcXUmeS5%2FjVoOJBr33PYpFL9nQsXKLWOq0oTaRUkC2%2Bt8Mp2e3FydErgCv1mSlECbs3bmGOib3hxbwr6e3kjI9VQmkAbW7kLyg0jCP56mFj0Sw2zKvvJLuoqUUv4Uubl1hBqnQ2hIgsRi5dK2jbZk5L4v7L5J3Gzz0b%2BFUm%2FPm9AHTgFbA%2BILFMnVkje8pwJ4yIDi1J2bkpAzKxwyrp8K%2F3J3aggIUfuw6XVXIvU9LIqq6uIC8AhwN0lTekflWZHs12Q7XkTv1t%2Fq3SWBA2k4Z53Q%2Bq71YExFhG8V06RTmRMD7cmIapoRGmNfIXXT5IYVf0IgVuQgIQpJMQyogXY8RF9jSn8mH7fCXb5aicvtELRUZI5ZmO0Mv4zyOikNe20n5mUEiolkJothvch0j4IJx%2Fhe29%2Bxczh9emza8D3RPGyteCyieXpXX%2F22kB69701odtsi2%2BG%2B6MMOU9UjNV5LYLK2nwm6U%2BruS5lejfqmOHeqlAyyxL3ED4hdTnKGgKrB5bqo2JwWyR5A6W72bHBd7NjkeZ6ygINSV8kWLHd%2BQLBGzDhOGG2aXN0z8XeK%2Ber6D5w5yNnYKKn1JxiG%2FTQXI2j6YwPXgw1uKDvwY6pgHX%2BZ69yp07pqmaGaRWugTusgtssEzwKFDvP8hvcnV1NfKS13RNkQE1sQvSmZg%2BIxlFeWxJkhhkNhIGtvTkaZDk1t6Lk%2B5KGvFlcr%2BNAlvrrYCK8nEfr2up8IqWY2pLfV4kSoUI15g9tSM77EPQr847Ojx3VQDBDi5bISe19Ggxhxm692xsz27H6PJIRAvx6KHVPrKOLKXY86cEHJYMN2RE1QiubuMZ&X-Amz-Signature=134884acc8a72bef94f9ded2ce863202af88d966464cdc1bb2ca88423a12b43b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
