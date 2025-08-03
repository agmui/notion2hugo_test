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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626T54HXC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxvYNc%2FMRXT9n0vwx%2FWxZwE%2BCrPocGEu7EAndiRZ%2BF4AIgDaR2bFgsVoioGbO8sSVNcWcTbR2uxQ0r%2FOWUklickNkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDH3PD0rfnwKneKwV9CrcA%2FJyJu5NB0eJHbx5ZqYd6VBPtvpcWaRSg7U4BgsUOG5oET44WfkOB4dQSo9jx9Yunvk6MkNgrUtIvHi8fdJtpV4TMRVtc%2B958HgUsk2744c1tUvi%2BNHs%2FU37fa7meGJa6%2BODLcf8Bp3OUVDi20EZBe4fcxs2oCFeB0MTrQxIh9rjYp5v3R64XcHgC%2FI1LqWFQNgBOFajr8x0rijqDZHi1x7FfId5hpUS6ogDFMCu9hDM0QiY%2BA%2F%2F0re6gYF6n1rmqvcSHvTZXyhj3OxvefX3wJikjvNAmHVbvDJfHKlHAfw7zin83UdwWBuGjbmnWf7WWSAm%2FdfUoJS3f9Rge8hysxz15R%2FKEvZDzDuyx8C1E%2F7n9PmwQHleb2OsId0ObRPVVBsRsXW0XqWPz4iKAf1t2dZz545gtssbOyHassb7IuH7TEV9YerAMGcONfW%2B42cdSiTDFHuFX%2BWKB2hb6%2B9cTAjoxRYeUDEC1re%2BbOkYwycCspaGyNJAtecVUuQd1bfFmklyNX6iCH7znhDuwOxnpP8cFNM5m7%2FVHibmZ%2BDzNMFQJgOWPwg0dER7UKCh3npdOousGLb0n3qTGphzGTcYRWKrYdMU2OEMAjNU%2BgyhOMifOlczP4Io3EPBd4xWMMi6vMQGOqUBMu0hRfulQU4GpX3lEXkCJJCLHbYeYtAEU5PO9NbvJl4HNjErP1Qw8wXckrVQAoYdQ5jy7kZ7t48lR0r7ABEmo9ytA2dqse2NB1XqsyARWgH5LSsSb3AbuiEfTRxK1LH4zu%2Betx3sGcO%2BOwLMxSyHRL5XW6RotgvEo2iKmq5tmcQR8WULKpItjAd6%2Fc9Xql0zqcPvp%2BjKJnwJHEY8mqpaLrLebkSN&X-Amz-Signature=b001f17defc5b85a2414af17aac95c69218142d41a98593e05e1aa5d80bcab1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27NIITU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVykqVJT9DCEKhYgyDqDHM5nF%2FwTt5KaBK8rU89Q2H1QIgBJVqxq0jjgvKkrQv8BjxWBXiXsTwbyF9DOYd6mds6NQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKunZw5p%2Fs1KmhXOSCrcAyzAk80KbPhzMtrpPv6hGNNn8Nl6W3vpUrVYWKQIUCAakKD%2FOxVL8AosJcclMOK7V0okMBBYg%2FbCfG913ZxnNvdyLhu%2BhmE42Gg8wjjCoICXZGjURjUgeyIfgbRa0bBCfmkwlDO11SZsCvIw2BpHKkXOuNItS%2FtNlH7awXfggWmgBguSsCXLlo47j7118cT%2FlgiiMZv%2BZBYv4kdcM73Skyy47UII45cHspZ31sSxuAebzY1WOTVWdZa%2FFnXYqF%2BlBdu2srKmv%2BWVaFv6F%2B7PhIlgiXcxhlG0iKqfxJ264PYdKvw9O9WwY3DGCtPdvtl09nGcz72rR28gVlAgvqWYYPLM9je%2FPpbgxeditH0SKc5pX9biL1Nez9rIZu4DjvELTVSRsfBaJojryhviOUnIrL9gjpc2AWudsL8%2BFhFzh7INYuZA6FcW%2BoZgn1UhplZUwHPaaopM5aIoyruNCNtcA5vwsFmRPwAJsP8KMZ6oZfQvaaimYAMTwbNrNQbHGBbXmyGbx9BivbanMVsNemJ2FnXXHKfk8dMpK5j5A4UR1GnGt6SrFyCFfCgcCC%2FKVHf3y1bKPu969uz2mwG2YPGO%2BNqaG2rK4ewBRJeTNw56sC2wKMc6fZU%2BbICNhyJHMInEvMQGOqUBfMlXomheROIxyvJmgVxlWaLaUoR88OY6OlIngYBQKQF%2B9Ht%2BnsyBRajDFGCpFoI6WDZTEv1GKxKc73DYqLx8BYTi%2FNretg2OV%2F97APmHvv159NFO9C0zJ0SezPB6g%2FAk1rVsbKbWUaixBZVMryFay%2B8EwQA360Wr1fr%2FAuVHr0U9nn%2Bhpo8QIKE0Ymdyfm3o%2BHVC3iTNsOlH5j7YiNo0r0M9onH%2B&X-Amz-Signature=953bd812773b5a50a54b21542efb0c504ff85cfdd870e5f9f790dea6ee42583b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
