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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667TSF7MX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjNyliif30CnmI%2FCnJFzEUONGkerCh0kbYaZw6tBn4fAiEAiDda%2Fv8kwxp34iUl%2BWDAkZbKmHsJetRqlWPDys0%2Fzpwq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDK31ukuad%2Bb9D4GHECrcA57ZCel4rsXHFRKcnHS2C%2FFthTmb1wnOIBI%2BJ1HXfM%2F0%2BG9Cb15PNYX4h0FvC7YtHehoTscEaDEzw%2BGi6mPVqaYL0UyVROdNXEByt%2BN4bxpyM64ChnslKmYolyWMPbIvqhDgxO3tPf2o4eNpHOx2G9ACBiJHBiRl327NQWjZ0zGRp25ZnlZL0shYCyLCqsuRpr7wQgKsj%2FGzWJYPF%2BOr4tMtt%2B0AVwCBekHth5VASy9KGaRk474FgA50bPL0pQmCGIDXLC4%2BLSO2LVV63XUPYXc%2F9sYmlCuEa3ihwKzBjjg9M%2B%2BNY3gDQHWLlS6wPGjbJOySu%2FUDrWE0KPBOkjiL7qMWfkTkcx3pR5UZlauGbjLt52e%2BDvRa2BG0E5ICYewXwDVUPk5LwLLjQFaNDy%2BSy4xFZ1rYrr%2FdiWFaUC%2Bnngqv80%2FqyhzhUXUi7xrxMOfzSIOY06kCydI1qI5bVClG%2B9dKkIs9Y2EaZNkNoemb3cOrnjWVnszUEIJQTZV4adlWOZUDLtsAtc%2FGsdDBGognm%2BewzvychqNP1aUL%2FipU8r2r7uoZ9%2Biaq4iQmYskpcjcTWRp4tVC%2Fy94eiYsCMnd2NnHt2r8WnsxU3DuF5JPxq%2BCDZY7dJUsy1qMiDRWMJWEssAGOqUB%2FWbl4R%2FK1xSUJmspBa6hMe3HW2mrkH6XwX6pcMo6qn1bt89qURCG3u5KiUcQl7EhrU6qfHFU7sD8hSjcWYTT01CMMCCg9OrPZ7X51%2BFni%2FnyTadWt8gRA%2BprXOb8U9sMP%2BCCod248GdjJWUl%2Fa4D8wW3bsa5LOS5XTL7JJxIrUXq7P0Ry3HURFNARiuIZEDAgsh8Nc7kJVQ%2BgFR8g5oeTEVVFDFr&X-Amz-Signature=2a91f106e2f39097be54b8be5a3b52ba5bfbc35a8c6abe52c4ce08a24f1b0777&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FD47YZ4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgFpkGG2xIvDTl0DOd7vdSjoriKK5%2FZtOGq5iEPHF0rAiAp9FAAqOfMAsRKNl%2BoKj3TPFdImjXMWEDLpG9rWbka4Sr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtZsi1cBEL%2FfmSXcMKtwDIAJmfohOdY45Z6EVA7ZQVFue2mZj0CozafTHZe%2BfaVWMNKvA%2BKJzp6epWxPcFQb29Mumyw9XvN00LyAd8fB3pm1xQ9o2c4JpkWieK7itp3b%2BVkuguRIw9tUXAGVpYUvVZmSKvxHswXVJHyE67e61MA4xVHAUh6Od5YgzZczmJFUev6vNQNtORjsf6iz6DBz2GRUwtbWiqw68bqy5akH97XKCfqZDqAOuu5PtX39zkXbVCqx%2Bjuyv3DC709i3PzhZWqyBq%2FuHNEzvdIJZ6qFoQwhxEG6v8Q%2FbEnpOgt0Twc1DWhic8T28ry67t25bkzez49bFQJUdX5J8QAFtiG8j4v8Vdk6gyoe4fslehiOPgVkWECp%2B4ppLgLsrpxWUybGkFD%2Fh8PRZUqN3zrUjDV6MIdRbpco%2BvMUD3DbFjWlnK4Renn49%2BMEWxCP9RscbqQYO1JiSB2I3A4W8oqbJxYvVc2FQIGVHtwRfz0QUBXqG2oDA3QK%2BNtBT3SaXuwrn6bNiKh%2FFBV5MTSqqojD1TsIHQ1tn%2BLJcbZJskU4TBTjbGkAx%2FyzDMDyCHeKuSIBh7GXiuc%2FxS7BhJp4ASI88E2%2FcTX5ohn2zeTIvoRwTkwq%2FJl%2Bm9FPxh4p1BLi8iJAwyISywAY6pgHrYObpB93Mxz9oYzkg63gq9SJQ7Olt3xZbZsr%2B%2F91W3cIReG6DB%2FXPTbxlKWKJxeVTh%2B3hzhbV38cZIkiww%2FKKYPv7lStSwiy10WWdcEzur7yZ7EMbBl2OpPFszZJtHIE2ApV1h2YJqvxLpOnoClFQGfoMOhP6Qr4%2FVMFD4YJPtLg3603VsyY74mwYXP0CM7JRsWnrF6oklVCUGf2Y80maClcdqlTI&X-Amz-Signature=2fd70fe64759d9dfd83be52b20ed0a96b45b511eb646293bcaecc54f71f07325&X-Amz-SignedHeaders=host&x-id=GetObject)

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
