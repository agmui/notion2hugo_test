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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGI7V2E%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHSGDgbERtigsWUWYLbSqds1nM5VGSkdsZV3U5%2FWGn%2BQIhAMOGI7W1HvOVH%2BJBKvYDXLjN6vTbybvaYGPvI3GWOQ4iKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOwAlfXtpXgXH977cq3ANkp5pDcrsPwjyL%2FyICcIrnpkzsWlGkNG6otBm96I7huvyxCfjS2KUMSc1nB3f3rGezzcbFaqdUH1Qmy1MA4JOw4Q%2BcBj%2FY3DP%2BR3r8F3LaKCeDRnMEZsqr5qYbwLBk1a4V%2FhIAOElQg0Yq9YWIBcP6GglyVhKoiW7Kc4xLq0ktOZFZ8lAZd1CJbTy6xOLBJ%2BIypb27rA6Cm6DKnCUMTWz9h2hkuV6owpecflWDiWjogN3qj1iX9xkkC%2F3PyHuzYGNHfXoKju1LvxB1IA0JyIH%2BPS9KJS5W5VMwxC197Amdwjq6eIjErWoRG%2B26l%2FYzeZEU1xiRCG009wvCBYk36ZlKS5njPr3vYrS%2FL8mpPRLS%2F%2FczgAFatLQcLsaMFNdxAkbK1R6ASh69dHER45s8xEQiZNgrwAtesibFrvBQDKHJZ8eTwYVVVC4w3wluy%2F4fSnvJpjCWbbAy%2BGEzlfDdaxxg9k%2F2Zca2TMTASwYCDUhxoOt7o5VvNou3AUswHmLargt8tU7%2BVKq7ySF3SJhFo9xBJQpxplUUypwbzI5RlPrHz8YR63B1lMKnoMEs34nk4oSwuSW3AclbXsh4hi4RsZm%2FwVx2%2BZEFzGxINTX0Z1x0Y9Dm0Vre22tpTqlC2DCU55TDBjqkASiMMyFzcB7FfyH7ytIh%2B3hIIxDiilQokJk9ctU5jhi3BkdvcPIW4%2F23s3CFoo1e1q6JFssS0ZnnnF8TDYMv1alw7YglN8fOQjwkk86HZ5sAfEmJRRlneT9sXq8qPef%2FWFcFDzaMm4z4sq8Mgv1f82HXD6M4E1Lidf1iVQBkcl6vCwt2Z7oInqX0NgL8k7myZEP46YVhLLtpvkBVnTMKzfro4CLS&X-Amz-Signature=ee72b2add775a53b19f028f4793469e44a2b09b6e6dcade5a9dc06e9d8a7ea3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JSOWNZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXsuxyfWmQIRsQd8S28uGAi96hig4XXUDTSE2iF5k%2FLAiBs5SKcAmSIhiCwt%2BijBHJXxjFDgd19i6DjHl7JeckkfyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkPj2gVC4qh7i2wk6KtwDRc5uYOpDnhbunvc%2FfyuX%2F3tVgSMseOEVG9Qdp79NNpW9%2Fm93NdCQMrivodzJ%2F6%2BY6XGcC09iIsctOnTXMgqqZIxdSOX57DA1Lt9cVyREik36HeNCcHOdafJCYt7NKkVTwAyKw6xPXOIRkXw63EN%2BxE5SeMAzM9C3denMO4UBIjEhTX%2Bhe9LxWykRV4eFFNNmeYo4b6D%2BPQ%2B57nFMmf%2FRFr3Pi%2F%2BZApAWFFVJHHWFmK6sZ45ESdyOcujZtFIEM6zI8nklRmC6Pot%2F5ZcP9LOLqUgsjCdHJOUzGRaTJtck06mZ%2BcQtjV3RKXQRXWWDkSGIvJ6Mx3RzZvhnJFGpcLm1buW43goEBXTV5ScYc6zaF63FZOuq6EHIXDVvrlyP%2F4Es18wZbBuenxE1vEYfr5eMjc9GG6titvBLO%2FPQgVM7z%2BmdBHosYBRSW633HSmvlm8nu11mMDCnFyolxvMRg5Y9%2BZpjv0ZYC3mw62%2BM20X7Kh9nIscoJKrhJQOg1Bxy0pkq5R6yoc%2Bo7GRwZ%2BDM40u1prUhS9V353EBgzKuTx7WQD2fqssu7Jx7qf58S3Tnu39bHB7MpPWqAtb%2Fhk%2BZVbZxDC5JILW%2BO3wMfAeMHiWHdZtxL4Ad3QsJ0WmD2Rcw%2B%2BaUwwY6pgGKmyNeDdWMY5AxxhQygfTV1b9OTL9mXnJjO6Hfryj1zdguJJlWtfk9cRagmP7rkoVTgorP90mh7zbPGHlJcHAs3jNgSLk7As6%2BN9v8Ii6%2FI6%2FHa299hwV11qAhjsBJ0C5QkgD0nn57rSepLQQAuU4ui27NkgKrXWXXwbO70brGRQfONGxktFSDKTLvOSR09TB7KFf56bSuVXkGYy%2FJZwX4PeN0DJgk&X-Amz-Signature=dee0085794f914f7b74c8e3ab44118363fd7f0913791bab9319f879ad8b28255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
