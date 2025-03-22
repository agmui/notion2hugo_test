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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P2Z4LYY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDQmT31GnpO0KJOhvutYaolBkvGREjH9Lj9XfUwoDrB%2FQIgY0cNsSQRoubVOlmWPQhrlgfoK%2Bn%2FRtItNZl2T6GjX8wqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3EsEY8ahpVSfSsPircA4IH%2FlhYiHaK9XOj0epByJV%2FoFV7rzr2MDU04EjrMnOied57SRJm2jUtNV4z89bplkIopMz6wrbd0c8mfsqkelPUr%2B3%2BdVyhzWWx7uM2pjcO5p%2FMc%2B68CGTh%2F2NoqoNffd2XoIMlQGpQhMVjGRNYVmZYYLsMxtgS1ekM%2ByQaC9RW0npCatWvXpbIBFYwMZpd7WHRPe7xZmLrJJl9cmaVVcToLB0n2Qnyf9J%2FIrnu%2FSahPtitpkGDSCwKXurE7cqyAzbL3kf%2FK23fgh3l7vlRjVXOnyx40Ioed69lUQFaKnhrl2Gd2s1dOyZU%2BEEsEQzjNAPkfwZvpKN%2FhhvmoABxumDBuRiwRAXMv3cw2xFe5eUZa%2BdQ2hM4oZTXDH0YIH29Bzd%2FZWFpHYuVUztzi9jRfAfChqt9DdyF3soa41txL71zKT9iPf5jOjv%2FttDXSMVdcneUdvRww8V%2BmuqjK5yzeP%2FW1AjSK%2FuGv4XCge00TYsFTyHiMYou9tyGnTI08VqIK0ucg7wgwP9qJsoWGrkAwP8VnsBQX5OWS7WPYC911UiC9Gj6FBn1ad9471Orr2Om99rLUXq%2FBNYi7e1Dk0MwFbMD5pzIhZTKuNrgh9MfuVCOHd%2FMcRkglwXRK%2B3LMLCq%2Bb4GOqUBhIcEZruHzw5Nez2DlIESm4Qv6Wyy9Hyk5Dg%2Bya%2F3XLXJzs%2FnQZNx1oCQ9DPq2GUl90j%2BSPR5YXxuDMX0kS99BbTTDJNyv1%2B22cQA65II%2FtPrcX8zWmDgpk2CiANmK0golp9T%2ByZQSS0FoMV7GT728imutX6wbjeessgh2rIhquba6yr5r1k%2BJEM3adwyhsfKpI2FteUxQrt4GWEaia%2FBSwwFUp%2BU&X-Amz-Signature=86c562cfead4434e3fd1c83a2e71b630bb6ad9a711ecdd1eb282097c615534db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TGPFTTI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCfYs2uAF4dYT6aVIFND152mwlrS5NSp7AreJY1xhLTZwIhANmjxiVqIyP1bGpX3nKZDZfzgkUPpnRYBGZMsUna7ZPDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7I%2BzCXt5UluCKt3kq3AOiz2JaNdp2s3Lk7jzg2uFZvjpeATJn6lO02lW7OCcUIdknOLKQjvOwKx1HAC5x%2FpbD3U0kC8gb2NMs468MpfK4DERAFdHPxsyZ67DJ9EYDyyQEp9%2FfWRBMO0NM4QIRlzhaUa%2BINvgGImJ3vknmRPNTJagFdCO9zGakxlKD7Z6HnjB9NgCWCHcWqNmYqBwhJIJ5uBn1lH%2B8Pt3HCrq0kRUJax6kEyRLDkEyutR0iSpUhEf3okanuIrdY8Aoa1qyeiAlrdL%2BUsgw6YZfvFuO9HVSeJznh1S54VaD9957jeJknHUU2cD0hRlEAppyhjU9MTUdGssfNevrJS6DWMhUtpd4u%2B1PMxRxvMS8H6m%2BnLyLD%2BH3YP2mnFcEI%2FPsdfDktDshEqpT6UK1ve72qPzqf2zvW8tH1WzJrJVLCq%2BdiF6zmzVLBQFNBexP6PqsCtWF9%2BsL%2B3%2FK%2BWZVPgC5u5is6PZjd6Yi6tZjh8T%2BAnEzLqAOZZhK3N0Y8ln1xVH4l9DLH%2BNY9p7CvPtL158AW3UqTg19FFrECjLd5%2FWvrfNpmdnQFYYICayoTFKfdWP762itSQ6%2F%2BWal8wCoYBXy1avXzE1UgT4JFMYtYtrUCQqUTw56hXUB3DfaRR7qJRAs2zDuqvm%2BBjqkAUe14bYNPImU8A8sF2PIjUbkGEKcPWl1MCyrEt1yxIQSUAgg73K1TVrvYisfgA6%2FaSPFqKbOMXS9N91%2BP6euphNjj1Ve%2Fj6X16iia0AQsDINC%2F%2F0ia%2Fnh%2Fy0wdrFuAfaFH%2Bl9Arw0VIcnneoIAncwjBZXgJhM2Lzw95WLojuVvyHtnTNl1IeNaIHZ8AIYyUExlT6%2BrGuH7ywrtBcPLRceAZI8lQO&X-Amz-Signature=8a5578b52ceb0975a4bf7c892327a20b4da812322e441122b8312b83f7a0bff3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
