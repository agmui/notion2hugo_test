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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FE2MGXL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMYSroys6H2wlzZ0%2B29Sw4umd9YJ%2FhHXa5Md5gUeldbwIgHsN%2FwfxdYeoqvvLwn7P%2BhzJrUHNhL1Xuk2cknKAJhekqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxMh7cmsNDK5mceRircA%2BiBve6JSI6juiRMnqevCqRSNZ%2F0d5a540f7hIE6SJPGCyE9KkPvYvta7NFIgqBkE8oRsCl0vGvOj7Qxf8UTATnNc1HaCBkn%2FaNFLUq3FxlSqj3RW2JwFFtCSBGP4iyH10vYDoCXgzi%2FzP2dRJkrWRQHbOy%2BC0dLwMNbPxDalRTGdPhdhMefLChJuCGchnrJ%2FPO4xFimKvY1bhfSJIfAT5gFL96vruOFUafGZ31Pd09ED9C7hGtcFVJqwNlQhus4AZ7NtmVbB7UisMZKKUnqUAGVXYN4SxyhD401lPRtSemkHVQScEC9tleLaPT049KQy1g7noZQGWSfXBl6UD4SGX1M%2BN2PkyAPeWq7O8zdMGqMu3AC5O%2BBg2WOG1hw%2FO72UH8Eoc24bep2pPOTbBVYF0LTklfazCOFnsUDvyQ785W%2FF8DZh5g1qsMvNOed5Jmu%2F5oZ7pR3j7u7MHUWCPFqUUPF9Bw0oPHNJ0PmOtMsISHA9ws2c79UAl0it7Wujk3nUmjhXoAI%2Bs8lbij7ShcGvA9YR2OAWqh%2B6r2rVV2GQCqsj3n12GqZktoucGstqcB%2FqSYYqbmctbPbmn3HukyDgMUzlfouV2sPP0Ou0kXd%2BJgUmTGh6D1cBqmwFhOHMK%2By38QGOqUBMrWY4NMB4vkNob1jvYsuj%2FfgGLe%2BvIgk59PgEfJ3Kfv2ysQTntivK2CjmbRigXOjAN%2Be%2B1FHNmRm1X2Elf0ncJEGfs11EyVooYiDWY2K42dbRY6SOhCPsT22pMYoDARJNRLJo5h%2F7Eby99PFMFLDfrInZHJmBc%2BaFHdORILoCU%2BcpYZZWvGfkqe%2BGvynRpsnrix9o%2BncON%2BHJgKzhrOP2vNsdLwd&X-Amz-Signature=aa8f0627f5d08271ac6ed27f6e9d7069fcab6c784310d30694ffba6c2a473132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKK5CD7V%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBN8FmLRc11IEXZWQY%2BF8%2F1%2BJbGVa8PsHj7dIHRcqUlAIhAIoOzNC6oHDWsrcDyauX8bECQfSRUh3K9IxgrZKEq8RjKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEEpnU%2FkOlvgnU9DAq3AO9KMwQ62ovoJTD2iHqYbQ1%2Frxd5MmDRu34HumkmJTNfJjeDbVsl%2Fci0ZspHeaHRQL2MQz030Y7dypDYG050D0CdEEMh%2FNsnGYFUux%2BRNFCsC%2For0c6RgG6ShE6byr5zqUCZFJH8ZsSdM3i2IC3Oa2qjZoyNUgb2DaRi%2FqQrnsuFvrvcFrQjIxxkgtWcPgq5ngH9fBR1AnMUntdEdP22C9ZdtsJXzKUOBXbUaUK8C%2BA2WtnTiaGwG1scLrMEbj1Z0kSvzv6nIXO3ANPcUzsEk8QX%2Fgpy5EtyGGqfErPj9j38peUMRKlz6nGRC2gXN8H8gzFrUSFu6E2zbFBjR9DsghKfV2GARO43LkYoUfeKFE10jk9f9b0CfUi5y9%2FaRXOeaBwL18J930713q7w9qSyUlWz2%2BzpYRV6hxxZVcVVxLX0nZzLlAAdNfHOIn0pWs6C433LGxyytoxDi%2F5JuTPGDHSn4%2FfZzlp4NPSF%2BpPh7lt0ENtLeG21dNvl4MgP%2FRHFf1jCz6gyeM4m9go9fWp2XE4wCd4tz%2Bfd2H0TXzH2re7PplWdYOb6ltMvVEZ4D%2BAxsjJ1yXZ9C%2BYnO9jBvDviJt96wqZOmYLgcEft7nWWNFmQabwTGwn6rTPfHAzXDC6st%2FEBjqkAUc5J69BJF8sXpzShQo628LOel0Q4Zyhr135gRHtV9hi9SwUuWvl94gcwGNLlCkot2leKz5F3X3Yvo4fpupyOJC%2FVAEaDdp3y1EAEcMC9HDCAaTc%2FXvUxLWdnkcg7XrE95VZ5SXUAxGfZDYFM%2F3xBQatp9IwRrZrzSLWzX%2BILPVJYUpuqGDK0zCjw25SanAPmignNuoLYABYUfI1%2BD3IHUHMSjk%2B&X-Amz-Signature=ddbc1bed3631bca8a54607f91b7627cb8fac0d79098ec719a7d89cafebdfe6dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
