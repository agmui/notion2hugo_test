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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNSR7H7W%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC0iK%2BcuEpsfVqLtbJTo%2FUs9r31YW4UWsZAVhMBWS82AIgPwaMPYOhfes77%2FvIKmmoAuZuSzI4P8fQqUc4ywB3QF8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2dDnyRpXFVcMJj6SrcAxQ4LQx5bRPdF3KCVT5e5aRfNtaT8F2Big49GEItDLla5MIb8yZjGaRBu35T9eqZI9mU1gH8y2zbbFL2nUkoexrNwlypkQ755NkctHvRypQFI8CDe1IQeQ5nO4pYu3drx6AO8huuFbF5tM0sIrEipdDaCEcyodY7BxqPmwaeScXGqSlnA4jN0Jh7lvmSIVkuFv5XTueAFusq0AGSztit2%2Bk0BFeeyOdaIpBXnW3XxhMrICc2RiHbGAeIv0%2BPXJCED0TcWUg8%2FpuxvlnKEmriIolljqU8Vcfe%2FOTdocBLR5Lcbe52inYYu7dNLa0xZRomQX9FosvqfWOpcfEQ0kpdy9iiwgMsFgAaT%2Be78wR52XEcxq%2FvgzJvkFwM1gDpmqG3fjQRuzhtvtjJt0E6eNMXFGqTJaWCMF1RDwHPGbzj7g3o5wSNBUIZALguuo0Eb0NX3kGc1qso3T4YzX2kWcl4%2Baa91Dn4T8gVPnMniMXDXXT9RidWHMuT8vhFnorXibPh2nzhWplC6yHm%2Fhg1TpHa270G5dNfQoEYt5xiESDU174ImnEpyCjtT6YTm8cCNphJhOZAIEu4PMgGpWSTf40QSDFQsePrhkMvbhU%2F%2FUznAnuemVRjdUSO72tBSO0DMJXe4L0GOqUB85TqW0NOS7LLyk9ZXPjN458YJu7OecSU5O71Ykm5v1ojMUMIvLTtv%2F7aVpNM8ZMRB1UYHNdvOUFBOPt6hDeMe3W5i0cnCpQXMBZHvksiZSLfNXkMjr5wWz36LywsKaNZcYiU1bQXMPCs3xjOCmWDSz7CySG3MUgxYiFzbgwOQcSkPaRXkUvZdirG9QwzS0pjAs3Y5PmfaaCavcNcXnFWpiTQkrc4&X-Amz-Signature=79ace67ea938e34ef0114c4b988bd2258e573f89ece0f05639bcac34a01af7c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEGHHNFU%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDUVvsZIdQgXKazSgJHWscO84RMwDZ6HTyH1INC9G14wIhAN%2BU%2Bi9XQ2gfgyA8yal5OWR9tBZyPDWsqOeZuVcpnOlTKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN6oCAWlPTfbeLO%2F4q3AP0dEbv68HDkewNLqr8J%2BAemHccFlzATK5W2zE95JMu5c41Bko2ZD5fPZpu3CydrVSy1M9NVldHPE4jFki9Ti8DVvabOUpcSxacwcOysvysJhXW82Pw%2B1pIZsAszTUj4RD%2BnWiFtRNmcHR2LyYUscvyi3HRWbxR5wsQBp8G0I2gnwXQUOP5HXD1u82k3%2BQw9o8f2jR3eARyqipWwLRdaSgw8GTEQo9eHgCOIxJwmin9tSWaCbnAq0HByBR2zixL8lzie0EqvXxbnmgQsQR7QPtW5KP%2FesvAqgh3qHYqfdLGcmBBWnHPpKU7G2uH9u1jozHHoRnSLdVe80IpigrBHWSB5qtxRoiRZVhRVUX7fPTft13%2FBlZEpj1t%2FhQwEkS8UnEANWu36LIruNNNR7nW8MtFvm82%2Bwu5C0pN1xt3ur697qaGEu0POxpQ1GzMBRsw9bD%2BJtn8Ml4OhM%2B1eLrvXC0sgqKeGce0lsAHIbQvOw5AU%2B1TwOaOQIAYX1HXZEc4%2BCMJ5FDuxRXUllINSULscnyt1o4dbaLGKWTruU046bZBDI2HATYoFDtQ0nFiK3Fbd%2BZEarPN1NPk3SJE8%2B1jX8ArdLBm5FEuapCBEh3Q%2FbJzuAzLYSIAVIWaKMz8iDDh3eC9BjqkAS9nKEZKBG0MUIcV24cyrMVuir8Zu7P6tCvbAvxrPvqCjHtPqiCn6qPCszZn8ZVvQBBh2oNMY7KVIpzwlJPmNseywPbkCWEOgawMKu6JHz655iAFTn%2FRO%2FQwzWwF8y%2FGbKgavQ5XEPjcNmomVhRLW1Vw0orFXcekZG7T9IbVP1RfkpqHhwXf5FKYIO9p0XiilPYqiqYQGD6%2BBZxuzo4HOQ2qGgDq&X-Amz-Signature=21b1ae8b140479bd90e01e3bf1affca07cc6c3b688c7e753ffdff53a5482579b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
