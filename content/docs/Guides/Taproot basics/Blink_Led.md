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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW2C54ZJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDcF1fsQFtuEz3FliFo3x4fMfXCN%2BR5ifex2L5gPHzRUAIhAMzpXGYQZJMRzZejoTe4uCyBvtze%2Fahg9o0L9ul21MS2KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySL8pS%2FplnQMVNoRoq3AM26Bmf7xfR%2BGfegFry8TZIyMXkH%2FpJCH3QiZIE64e1wkpTyBbf2WI5G652X8QiHC%2Fmy7ZcNQQzxJJJMUacKcuUA4OJMdTFb%2FD82SjkqUkAdZJVbBgla%2FN8DWE4hwMAuiBIoGI0QWnSJhYh8IUqU8jF0Hs2oHTL1bUC1YJzAYbMw1PfYJE%2BXehCGfXnTWqGIjef7JRlOwt3GBz09PCiyvhnZ4HGw7D8QIEdX%2F1FReDhkWIE2T9EJcTnt99vcmFQ62DV77xIB2DeRLMOrGtz8Z19tPH3bZqgxdbmC70euqAz5O60%2Bz0HSp8rNMO3JtuqYQA7X3Beble9DtdVjwPtKWrj%2FQxyRVOExR8mMUlK85I972TKxCLGFgKhhFEkTOVy3C7TiNwcxtQM3g30qDumVGyX0GfR%2F6dIcaWVn22X4fp%2FJGwllt1mKVrGQfhHSAj%2B9fGsmi3i8ye%2Bku3zBk%2Bc87SjE6IILzwZ2cPjbZ10lESkPFBApRFKPYmhxSi7qdN9vKcMqDRweA2dxKWOqEYb6wQOD%2B64jnZBpSoWCCuN0%2FngEHy%2BJEqjndgm4E8%2FnUwQzdUBclaN3VisCgeFEUtf%2F5n%2FoCWW%2BDBa7O6tP2FWd5KSOcQnmiPchbqoCRIHKzCwsti%2FBjqkAYdO1jzJx5nxv%2FSQ56Vq4RspC42fCRMqb36WHNvn%2BD7w3e37BKj%2FFSRGJY2fNR6kIDA5e1vT4cNMzcplRPBKgwOcJGRXkOJslByAlZXIRlnRJ3ACsOXcbM%2Fe2LZT8QwJJ%2BdaYHGrxqgT8gFE%2FLDJWpUuQIzB8imuX7fOR4BVqjLgOT6c4qP%2FM23zUX0lQjHuH3NpRrWS5HBf1WSuauFVPMJEBI8f&X-Amz-Signature=f2071d59aa4782b56196113956658dd110090f78c2472d4fb5f986d3238e117f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y2HC47B%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIErRfXim7AvvlYFjFugZPMS7iFWfVpRhLtiGCpMGLYgYAiEA4bnU4c3hcdrIcwPSmKXMH1Qg%2FWTKm%2BJrh7WUBV50hHcqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyyzzQPpcSd4hzBGSrcA7hdbsMfgx2mp%2F7%2BJgchB2NLp91AMAEz1xqSztR5Ha5OD%2FXrf0uyhhi57YqM5GhWA4zJYu%2FqvBtO%2Bkeryam%2FAWCpwTHjKUmNOeG9%2BDsY0QUfP5GwiPNfLpNbB79XvEO%2BgAqyrIhAXA7n7EGiCgSMaJwOdNpmXQ16uT9SYlGgE%2FwKt8mADHJm6EG4XwDc4qzFkfohPJ7HuKu3pRarmKNu4zkUxSVFsQSZMuLaxvP4b0YH1ggenSqPmYegF8tly6vy1iEp3F0CL%2BUJ1aT57qYcIqQzCk08Ww9v43WDgRQm6Fi1a9rm5cR3ah6ZeYJE3q9VWuG5kaNF8%2FV8GZTLjvCZhDmPaMxJUJUc6%2BNU0Z%2BM1rPt56HOp6FAQwxvg8Ty0J%2BqYRiy6YNbpMe103V2UIXh9FYv0q0xnKKZINo73KArvxDvjBh%2BzfOxusUtJMeFJVjNReAtP68Kps5v3sVArz9FCDEsKzbONiK9sXXAZtrvLPMon4ywsmFGus32%2BJTO2Z6iIMLGis%2BDUrI8zqi3NZzHCK1sryZFrlpAmnZCgt5%2F97eJwsy0IV56pULxJhVS49XeC%2BB%2Fr3CbEmaeeucdYYg6PwHp%2FlIC3lkWlF8ZgPE6w8Xb%2BcWR2dPRxHAPIhD9MKyy2L8GOqUBPamX5MPBDnNzK7uy0OKFz3Vqj6SAwW9SJR4%2BubPfPmLzEkdifBlBdhzRMWT4O2r%2B4sF%2BLOnb1uNUBP7F%2BZMFaMYqG7GzN6Mi1JSj%2F2Zqmj8a40KdHG5Vz7ebNlWOtkXsdJwcFm%2B8v97dppLSqPqlJp0%2BrnNJrDYh1dTeBrksAHty1bagkXCoMPOijplvTkL9uFZCKBLSHYGw95ALC%2FNQRdHeqn6F&X-Amz-Signature=8e94b6728f616d4a0b030d4e3d88895359a75acc5ab74e0803244a380cb35efb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
