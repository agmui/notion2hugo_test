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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5GED7P4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6p4ew5F3TzfUVr08chGT67YUpJWpezYpgcCd6fHqBfQIgdDBayY2qKxwO4wd9NzMGCDYo7y3EJL1W25q1AvR%2BeKkqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbxYg5Oxu5vI6wILSrcA155EdNeSaPAcQyhMGVF1UIVPSEU5lZqx3TzzdFJ%2F%2B8vpHAGNvSVcvnKf2Vj5S%2BPDhBjeBSq2E1k0kOeB8%2Fijt4BuXMPluP%2BxgmE70B0npSKm0aVLjl8gVWCm6kaPlFSW7E6MX%2FCVplajeV76osDlontHco26Dv%2Fgc0GvQB7Zj850OCxdLxVR06z24jCYzT7ZKQyfedBN0IlYzZ%2B8LQoju59tNooxHySyZK8Q6zq%2BKZvQYOHVyFtK7J0wqZwpEE1cQjTsaFunnYkLUHzTiISkUR8cEClDIQ5%2F2R0lUhlJ1qCCiphYnoAPmYjbYBcFPQ1aKlJJigwmGxu6uOpJuFgQgpt2F9ihjvRLnUOvhbwpRWKDeZquC0wONdBAR47alLZWIGp3GWFcmTyWgYW3HO34LD4rjU7%2BbdN9YxHiGKoGW0t%2BpRMWcnIHDAx20HGQfHR90Y2UPEqge%2BXPFga9RrdeO4bgfmSC80NeZASdO4o8EnqF8w6wjMYDMNO4Bps59zG%2BlPqUbcIu%2BAPZypDFY94mcmnkE4kYv6y6%2Bv7rbwKnBflwoneIHt8b1Z5FGaRtnYHiT5havzxU%2FMZ5K6QaycsqtPsEy9vvXcT2Uyg3aw41ozOQgn3G%2FO8XnGS80bKMLTIrr0GOqUByMQNptqf3eEu%2FJqY1%2Bl67toyc8m1dy2owLCi8KB8fNphOzroZn062iSi%2ByvfmP08JIviGvrWTlFa4eD3JMtuPAzoLU5Cf2A976Hw7rd1yA61VVJCr0yI8RsIgq%2B2lvYzREYs2owZRh5pVRnCW1y361vdWJW0XquFMQS3kjcRSb%2FfhK1nqdGzXBE%2B%2FmMxSpRh10%2BOGSZKZHU3zon7w0XISNtte%2B7s&X-Amz-Signature=14b5cd4f2ea3aef673f41a0f7a2e4ebfa84d3d7610f9c025198401e2da0d41bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2GVUL7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSIyhHKbwjLU8%2BuQm%2BdOBwrK0p3jRVrLd0oQ8KOOcuIAIhALuwRrDGnOpkoev%2B%2FsGQupEWhPh7x54rzu8ciB4AuFyGKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmFA82GlKarxJwWYcq3AN1WdDXclXtqL9sp1P3TI%2BN%2BuBI%2F5rAJod4RbZJZPM5TvO2lg%2BaHGWLeZLvW0B3Lj3aoIDBwO8LcSs9XxHDNbmZvWKMougSTPzuUShXJkroTrvnRr4Do4zNqQvCA4IxbdfxiLqU04Fxkl9REpU4SybAph7T9Tz2BVGRJ08twe4svv6id2Yx%2F7e6a6ApX0%2FOld59lML0RW7BKtVA03UD7QvHMd3gt7D3uOF08e%2FuHXYDy6sJc436%2F3BiCh1Wfu1deVWhyj9h8fsPWoBxjkiAJs4pJWLJk4iged%2BUuvfHCVU1ajn5Q0J9kfWOepooJpfJTxCZt2ZUVeqECPgEkxRJxBHUWRwelweRR89OOU4hjBZhDSB1sLcT0hNpqLgN3u5g6qnEVcTcjMkF2ecKsWJvUDuyOphxhNI1kHummDVovmKMopWraknUichaw%2BKjgtbl73w7SXI97ijV5pKgdZM6UCdTMvSK%2B90PlQsud51kaXoIp2P7OhU%2BGMbaiyabjJXXMBcQruKlw3Ar9gPHleLD64PnuPHve2ORC7I7qVwZIJXuTBVFRosYgmvEOb03Z5y6UMPcp5bz71mGpBidfzLTcYJAf6R2sPUwzPB1G7ctgkMheM9WBcbE7xmyrONkPjDPyK69BjqkAR%2Bg0bTvKIbEbRS%2FbeTrleshAIP1B7z6WcFaGCQYyj72%2Fp9vyzdL%2BbxnvKnn7RITgxlElM9Mmfm8RvwnRzrnRLZMe5L%2BzD1lKDMPrNM8fGzqIG69f1SRN8EWYkbxy1ghsL8w63Gnn%2B22JfUlGwWt%2Fk9YozbhYkAEXf%2Feqaf20ek0trafcq%2BsENeLnxsReLcNLur7MZl%2BReM6%2BxLNvfJso33BVbbc&X-Amz-Signature=636068a897c0bdb0d81e239ad8872b768cbf5c312b1a6f4bff15bb44450685c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
