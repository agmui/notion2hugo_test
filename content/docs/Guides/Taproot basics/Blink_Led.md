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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMRPQNLW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC5k89iOkqAqCwhaXZF6HMLbJvoB9hYbUjmEbk8jS5fXQIgdPQtqE%2FGy0xOf5lSaO14iuKtidjNCQpg3QJaI5afkIkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOy%2FhrzzN97EfQlsLyrcAyQHOiXgjrP%2FX%2FAM13zEuOgPcFvaJD1rf6qnWQ6u8X8rxQTRbFDLl8JhzgIs6wqGOcg2qRA0Vnj8w5uU7TPfG9i07CHVqdIkpBHRaAN4M8wtZxx61%2B8CZrAIFvFPSjju1FBsj8okynAx%2FmxQ8r%2BYZcfRJO90ATW8HkSWtJnA0bzCTAnLpjwD0SNl%2BNPGiNcIr1NJHWR8jw%2FnRhMOZ9A23akAYI9qfSQh3APhufrAmlTcJSQNJ%2FRgRt7Q4vbER2KVD82ZoXwATfRd2zYxs6KdMYskxcJlesQTSNb%2BPFRipW2lm59b9C%2FU7ZFKUxR%2BmbDHU5TOk2%2B4zpr9JxjR1baPKEjupwcpBM8JQMeSf4J1TRYxLeM7mB6NX724Qsr737GDudrtT41f4xae0y2WvrEqEdP16TcVltLNF3SK%2B8nlNfJjDAGVN06o4wn69Ny35NAULGVdOIXTYGFNuLyMXdR6B9k2i4quhhpPHHO1%2FLWVu1%2FHURyhGFNGhhgTtuttmKEVUXsrr%2F1wkf2sUa28%2BWp0IEAVLeq7r1Pm2kCDSSiB1dblitAVSJpYymrk2O4vKbqhjgvIPh%2BsN5PCpN9kd1JLmVbkAKqHwOBeSJ%2BGu1ZeAuR12GqNfcsOKjBANnUhMMfS%2FMEGOqUBZtdHUs%2Bk8QGYz8qk%2Fm20ygDSOg%2B1OEPaP4hyn4%2FTVo8c78gp2IsXKVfTS5R0mpmAI2oEymdU8X0bvd4L3UuEZIimY40OQAJsFeKWwWLprdD4iHjvvJM2dg7Kq1Sq%2FC1BOZ2BoHpCrgzHN2YOCgdPAYr4kXhRFysijzfQTwhiL7mI3yt%2BqsrXZ6DfZhfLmkEke454CwbzivAPkwE4gFIQHytrDjwf&X-Amz-Signature=7d54e1568db7166af6de75f9534a3b845352ba6d128569e1229dfcf296caf9f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWPW3O6N%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC8xZBNSlg1EM5wTH12HMId6l2YcpGsKMW5dRmAXSTHwQIgJDe6krLE%2BsMhvhYRMrqN%2BoO4OyUb%2FhRhUJAuT4brpw8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLtPR6OPycmowWixgircA4Y%2FMpAwebEK9pr8N9BGsgIRPVw2NVdERPNv27rgdPVT74IIv%2FrPKTdb03Y2PSmpiYd1xzm9j3zIAozCkwvExXsudB5k6N51viy3LWHa13wvQIbzRTaUM%2BWz%2Bd2xkjDd6oEuEvBFwpZs5rS%2B4WEVqGlRmmbt%2BgCk%2BAK8b58CvqqgtEZTcVFEkbO%2BhZB2s3yJkST6t4VanUuyVlMQk5rZWBnNcvTLbvoMrTXc5MMZEAVBVapley1HH3QOLni1AqA%2FzuVtu32A8I6nSbIkehnKO2F42m2nw%2Bwchdjt6XKxR2%2B2AMyzNF%2B43c56aDTFDwxCUauvXl9yPzxLrr14vWD7iOyoEE%2FggIdnLYp%2Bf9ZB8YnyZTk5nG5pkAmL5gXDLLQvqKRH1bNIaqlYvPM9hQAf5ceKulYvvytq9xVWp%2BYcwy7JL%2BwZZe0uMQnw3bugAcPuA8yGEMWKcNQh42g6iPSktOB8dC4nALxpLpE4YrFi0mhoE%2BUUSETbTg%2Bc0LdTXIQsIEXyc6KBVlZXGEgqkAYLhslHpvfcBp71mY%2FO1c%2Bppx%2BkNk%2BLJ1TZqoMZFg9bdlY2JyJ33NyHL1CjSZ54w%2FYFZV4NJ4r2O%2BixG8IZ2qbep%2FCEd%2F5AmWW2jBERBcgLMJ3S%2FMEGOqUB7In%2BIK%2Br2nBeG8EMszPE%2BF1FcX3MFFBttAiJqojntHlSx5f72qOe75pengnZY%2BxDDMC8tlsV0Sbw6hU%2Bq2Cc7XHpun67J3R3OMhSxn2uPZz%2FHF4ycPpivnt9ij0It6F6SRFFddsPbpeO9ENlKbytwc8%2Fk6DIzIg040CAZi9mCcRm7kEfmOr%2BCkItUddBB4godd63HlI1vCB7zNa8rxIkX6rlOs%2FU&X-Amz-Signature=fca3be700ef80b752ac626b95758fe1e3932661db3f7cacfba53c70bcab3cd2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
