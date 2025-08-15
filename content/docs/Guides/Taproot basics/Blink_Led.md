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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VFCJUZ2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCOnPaO3sQopbsKnSLn2t4ExEOZ3facBQ3BjnWOQnH6FgIhAOuem49%2BcY7x%2FzJCyg3Q4epgpJ6SF9u0jctjIaSb2FpGKv8DCGMQABoMNjM3NDIzMTgzODA1Igz%2BiDHrRahEWElbdsoq3AP8oFaFWWZf8ltoW2PbA082mjDzlvnzk4Y2YQ8P5aiofgAshq%2FX%2FKaM2z8DSnO3QhSBmcOI%2FBd2TgTrGkwXINrjf1CZ5%2FCP%2F8e0jtjSc9tJMy7VjiUsT6rQSXmyvB6vtSFu5OKPbEHK5pfSq5sFATr%2FbxAe9JDs9GRjF2nk5rDBHTfJB1AwevSMkr1dqpvrYE61NVR%2BCVL3f6Iyk%2F0UX729INy4YDIm2LaoJB2n83rQwmGkQ00SzJnSRl3oGtywQnmMLCyHX4ISUJFmRexFWKsHYIU26%2F8PAEmYBdGjM5oK7q2CjKAb1jCi4VEBxUejN4mMb%2BQKwJOOiqvKR2F6TRUTca8AzUDGX%2F%2FfL0lx4QYTf%2BTjlLCiSErxCKBhwp19I7yJ9FLA6EWSea9ra7oAq4YGnxoWkmpvJabuWW%2Bb%2FCI5YXud4R5fYI2LrcPhpPGrHHPN1%2BdAbcP6Q4%2B8xq74AlW1Ybtd4vnVagGVuzJdrXs3AHYKquUYd3SBgHXHabfulQ3JvLUgAQIvbq42KZlsnUK4f1AdDWpzWXma9Hz%2Bphgl4NObzn%2B8GFVl2R6Zp1AuUD2jTEVXUY%2FKUVJGqlWaxiJj8hhGKfBm7kSS2Kppq5cDLi3g%2B6o%2BLqWI48IFgDCR2%2F3EBjqkARPJ7mVqWY%2FCu66uiz%2BAuTvdcXl5cPvPRuIde3C7t%2F9abuCBmobgt4N6piJPWUoauH0R0Q395CSp%2Bhi9Z0nt9Zn4vLjJ%2FXNzrgFMpn%2Fa8DfaL0z8TZpVZk5S6ztcdxKoZ1YTVFzSuJizR2fZ8UPYsJeyWY80%2F5B%2Bc3Ph0sHx67HPzu8W8Kaj%2BJaKJ3hwebJGAN76x6PrjvYheHsfs0JjmftqR8%2FO&X-Amz-Signature=9a53e623c49930a2dc1702cbd063f13d9e0566c72e26a9e84ac71bb1aa4fb828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4CXHJF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDWGmd8dCDQ7qgUaD4VyYhcYUKLNW7hW%2FiI3qU5uhDCoQIgT5rReom%2FadR4x%2BDS02NqD6Bvps78GHEcALEBW9CxWagq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOYUNkvQUPcYS2VvFCrcA8Bgw8KV6tX3QK0sSJ%2FaHf0y1a6F5QncnKemXFvdKQ5Svd5PPcBdZzFBIbARDb6XMUAL%2BMoBsa0g7Nv%2B7PxLzhpCQgGEaO%2BAPEU6Uuy09n90FH%2FoV5j%2FA%2BQycQDaCjbrtbLi3qgW8ger2DjUFftYZ8Y1Sp69YW2iGmYHGhwQlbrMVIhLgl62nHJfrJubyLhko5buHe4n1JME7YHx3yj789BySCiLT9N3yN095MWGnltc%2F%2FEUUELTL81sM3mibGgwHZ0FtlhYAtWRumUNtz4g9GkPgv9sJShrUm%2BRibbOiHInpR38u%2FU%2BQoyYt%2BIs%2B3%2FbLD304DUTaPc%2BE29N3ziwNwx56KidRx5EPgcC%2FpOmT41QMCzmt9og4gGTBtUJu28%2BxBLZ8j530eZSzp5D2hxtWR%2B4ixVNLb9BRkwL1i4%2F0g3WuZXdNf0u4Y%2Bt6VYwDrveDWg4Nt4WKYcMA89BDkwHMGw%2BSCG0pKT18uTptWhWlDblq597vtmxWXJl9cUfK5VKLH6PwoGbUE6mfjkyfm3PvYj0MASFk7EtZ%2BV9lq0sLm1zCs3yOmODNAarU6LTrOU3QJo2gXNC%2BuFpnz%2Fr5HawajjajJVbPqLLguM5FryGV1XybrLUK0Bk21ECAbiZMMra%2FcQGOqUB7FKnaHFDrh5QtMbVzxSHAdMOa%2FC7Foj2ENRC2AxNItBL1urTpoSqFRR3%2FNhJeKjo%2FOsDdDVBAeGxIaan%2B8K6b6habXA85V0SL49KiAgjUIr3NeoarpWTxlaG1M%2BjMdNrtz%2BnX5TGiNoVWq6gRmFXHbUTt41ETw3Zhc5NhFj2ND5spZlVYmOr3DRboAzIj%2FSfbkEUGcC69k02bjtgRLooG5GZE1j2&X-Amz-Signature=97d7f081351b69f7c61c5e1cc05ffa0717e17adba68bdfe242005ffb5f8508ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
