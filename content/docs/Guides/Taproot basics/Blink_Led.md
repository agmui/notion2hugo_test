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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKVOTIF7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCDgkYKRPl7yyv%2BAPancGK4llwPQSF5rWG3bzh%2FwA%2FFGwIhALQwJGdR%2B1IxrEQXynh4ttYeYkNMZNUHQYxOQrHcSM%2FsKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvMVnigcriEUDUX7cq3AM1aCEzzSPLNZe3mS0%2Bqcx9vEHfhSgGrUhV0ny5Q6mNFLCKt8uKaK9K8KpkK3bkiVol4T2KlXsO5c7%2FL86ETzhjQ3rOT1AQrqysSM9BmHWN5DwQxgoDClqENEbk8QGa0VIoL5qBn721DbR0yijL8b7e3et6ogS5dW87KKLL48VdBvkpil%2FoTwrZLhZHxnccSaxqgSBotm7moEP%2B9XD6MHP6PO3y95mLK%2BGYmz%2FfCkjC%2FXQabFTcyarXwZ1Z1%2BEWO671L4k5v36Xmyr2BYF8RYJBB1Jp3YrMl92IpyavFNApSQzI24MgSqRH%2FNAsef7PrYMrF2egzfmCLPbxajXt2OAi8d3oS6SkRE6cdm%2B4ggEwlHQ6hRtr59%2BMbrZfnb6dRc7a9yeKPw1u0V4hS5QEyayISFRt%2BuF58L0yhR6QhyI4j6X0AU3L3BPVSKHaWqzqKsz3xkLuy%2FTCazykaHSrcL894Y%2F0UU6qCV6nhyB0iR7Zh9UZMbd%2FawjP3dPl37zT6keD8G9Jnhcd%2FvQLvGyc7B212MeSYyVv98Ac3RkefkMZok3ak9Ct%2BwyQUIKm5pOfaW260D4iHc9UHbgFyAONd8Xe3U5soKRkS6C0irsIP8fWjIBgh9dUxC6cJG%2BB3DCPhIbBBjqkAZCVw5wfJVoPVn5tXbz0PeO3lRrbEIWDi0MImmT3RbrAWP7aVGK8wfcob3hDW0WburHiq51QmpS151bbOY8XmLmvnMlttcb7c010RzClvQ6vH8bR%2Brki17jn3sZJDvT3zErYsBoIJltAuBl1iHK1PvweYUIiABdtNeUyFzvYj9g7yZW1RMPKPAQGNzdni8yvkqlI0uXGjCUm3UDZ5DD9JHFWdyhn&X-Amz-Signature=079d007f5da3ae48a73660aeb2b68fbbdd814ff3258e0f065d2c8d5a6eb11975&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6645LVP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF0kBv057SGkmelhEDW%2BQvsib2%2FfiIMRZgAGWlGymjwwAiEAwyFqt34Hiq5RZjoJvgmoRQNIEpGX4DSDf%2FBb4b6SvhQqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNK1Bkd%2F36hhMCbjircA24UKyCMNq0cmKaR6WwOT217W02w4peJDN0d%2BWU223vJzmhVv9JLYPrMFlT6WER3%2FcHZNSLCsYD0WpnFyvlpb1JFaNqjpdVeQg8YJZ1dO0tWMLPtBpqWdyZDO62Jwlv7wrdiIcbexfOYNs0y6AscgGt12ytz9PkCV3c1viiNNAk59U6CO%2Ffz5rLWgeiSCFKPIXNy16io7g8hlgFOOexdgEU9clCScF6yEvH%2Bl5LS3xrwvFI3KDpkRbV3wrBgyGhQY156tBolb%2B1rVZrZHDv7u%2F4SKkDH4%2BCvHYFhj%2FNm7uJ3QHdwTt6pjwT6xO6HDKrSfW2slEYmrKXvjgPFyiFBJ7olYxNuNqizuncFelVlPJJk%2BMDdOMj%2BaGDrzNcwOt7rzfw0fcQZq4sIBxNGA8Xcx6zail4bZIfCcRkgW%2Fl1Baio1iVlujQnbTawV%2BdPFxPdMqORs7V%2BIIkXR1oMMFmzwU96xw75ZTighvrEEIKakv1HE7FWDiCinqykz0RGy3osQP8zMtGPDj6RJL7sgfi8RFNPXUKYhLEMRasSHL6qGuznQOdswMxNpAzqs0BxQZxXjB80ONqt8vsUwpLFzGCFhQsfPMDDVS%2BTeNMCu7fTgv2wsXkD%2FeaY28DaMSfaMLKEhsEGOqUB%2BkGbv3%2BmL7pVFEEhSgAFAHqmtYeWUn6j3o9aOPpY8enwKULLzjrXuo9m71SoYugAJh7usk4xFwwpiwOgyb6AAFFjum22SSCnYijYR92bc7QzUcFFter8ctHbTUINvCPbViABO7tD6FUhLKTNFMH4l9XljIqcH8AHNVrP3f7Krjcua%2FMwNYPumEVUqL3ujtUCAm%2Fn8TIb94fVJOOIM9pxLruoQd6s&X-Amz-Signature=93eff737338755031d816f5d9d90c1e17023444a57bd7356faa9aaf389daaffa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
