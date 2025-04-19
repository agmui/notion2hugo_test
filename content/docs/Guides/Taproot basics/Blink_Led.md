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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUK3VF7K%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDozbDxLelOIpYCuGvbhy2Y6QERyAGKN%2FTZWpPEUMHsXwIhAPvfzPgKFf7UhuamSKchcoKeGlVnnhx%2Fr5qDKru8jWSZKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBLQtXfIWnyqAyv%2BIq3AMcT0Mwq02T5RTlegy7TlnbYoYjKwalEH7MzeuBpq9lplRPMqIauqLD73DlbJ3FzGBryWT3b5nITdKqD6O8tP8mXcGxlTR%2FGyOISHQMxlt1TVFBRWfIXkGTVHgpN%2BvwHgsuro9A9nk%2B%2FmC1qyR03FQFS0TqHT3llpCaBfRGEAEFpwM06gSGTn8bfQrAnbKiqNhz38OkAqRVD8xHJLMRiYOKkqLwXFTqqUqR35p6Fp9MD5KYNf2IIvjEY5w7Mcqv%2BmjAxTCRdUzjKdoiQemStlj2Rw2jXOPfB0G%2FHnYxNKpAM032HLVjR5fLFyey%2FDa6jILpSzZOI0lvT0lM79hE2WYoDBK5SGCaMChHxdM3ownTUPLSRaBN4V5Ri1w0MfuzNkdd3X49nNFJ4RCU69KsqDGxnWi%2B39rHbmcTvSNrjQJoqoSScUodm2zEQqVSVqQKqjpg0GhHaoWD8tesWdcTSEqHWty2jwOgD51yS9avEuNOKZ3WMqMI0wnw9YT8%2BRhl1tcKz87gUp4bigthZeByTbBBjcP4lR1HFJXb5KpxDpc7DD1p2gNWDU%2F69SqB8chbvoxOxshXqpt3iUivsMOjmXCzjG%2FxmL1wEMnBNarn%2Bc17FykQHmacd6p0fzPCpjCsoI%2FABjqkAQcM9PsT2jHyWS9AsMoVry4R1hXKCq9HprfgiLHHsW%2B7S0XSd6DIxSTfTUs0oG%2BWH3eh6z5VDnf15An%2Fn%2BVzNYrwSHrqzy1vdx7oCzvUzPuJw6lZmjCzYWeY4qUivITNZsxWoT2XyN6OradrEFJfc9mgDJrC%2F7KaA%2FfNZrGiTM0YOFtw8%2BhNAEgaN6V0Na2NQjvs9ItK0B%2BO5EnUYxcQ0fYhI4ks&X-Amz-Signature=b1f83628eec25fb75ab1cb7501b5e083b27d509b9c56ccdd8fa52ab05ea687d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEIKYVH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCL%2FzPsADWudLFO4NAmXA95L7KdArz32j4Pofz2IK%2BwhgIgR%2B7rJu5MBxLPJXkVQhoYlwHHKZEh9pnYNMH%2BG5Pp9RIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBMW%2BmuIRjgO6kAoircA%2BiwrPOZwj8Wz62sx8z7i6f7uaMb%2BHj4qwQe34Z3zm0wFixf2VlBm0EBXpTjZ%2BS0ls1DVecBRhlgvgZ3ojD0ghe4wtAGVrcKsXBAlBbaBsL91z682PWU6GUuJv1%2BE3cXKdBAT4DSGvQDG4iN0UoLWPUFZ2lTqXIWKkgwcKaEY9tlgyD1EBVkeQmr1HgsmiwQjbZgyxIhvk8FvFdaZBphftJeTjj30O%2Fe6WObu7FEfDk5gm76Iv9L9Vhawr5gyY7qs5Vo%2FASiLjaJwobAxFbZIXOFTEOKWbqTU0tqkyXiwz%2B3Mgu2aci0k0d6gwhVierrpR3KcNH67usYWeOaNImsGayHRVGxE%2FcUvWevtZ2jFcwGLkjd8nxMfONg8KoJx9n9mA5HzaNhMSi%2BJN8dHEum6dxlDEzFFm1%2FG8%2FBvUVsSY6aHJSpmRT2q18RZY1wFLQEhKgIhV4JrYTLmXoibHeUtm4eHGKzQsxCUzxvBr5HOgE2pFYW1mJbQ%2FR%2FUYlCMLiNPcW93rZfSQYoNQIXvtiCQIhJu%2BLQf%2FCKUNyAtBvX0e%2F8Ldi36drEpeN5sb8T60P0JdFEpDzwIQi5Iwg4ALApZiyJrBCenbJ4uPqltsk%2BDF1tnAoDhBdwRIuzPU3YMKOgj8AGOqUBrWQKnCk45t8md0wH3yjbWa2eAQLoWC7rshJNJWhIEGfnwfOPmtzuV1VH4vGW0%2FnUeFI2looSzzf80cQ6njRRc3RqfASPG5H8%2BKk69AEN6rsEV03uBizrXNu7SSf8J0iguq2GS76do0FYCzrCSMje1FdP1lMtbgQKfsixNGE5cglxIwlfWUOeHepcS17Rb7M9nb2uqbGBBkceubjS6Dm1kCWAlWLb&X-Amz-Signature=b6045e4ad6363bee9571367738bf0a95c75cb4f5953eae01d43bf6d5a87e828b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
