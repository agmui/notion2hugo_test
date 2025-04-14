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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637UTTTX3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENOlHOK5jD9J0%2FYj8%2FFNtIU46yeGffntoWrf2Nb9ZfwAiAzgW6V%2BapfW6e%2B60K31Jzs7cHS4Kko%2FGFCbMf2LIBgpyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM6dTumFQ4EWrtAucUKtwDGXG6HRPi%2FoIfH3YquJvvrPFA7FOJ63OJS48VAJqVPHJgIxl6vQcteNRGL%2BZXGvb39MuIty4DFklwPLf%2BtZ08QgowQ5cj2A%2BNYmph3WUlh%2FUaK45rhz68z5E2UXDMBhk1qNzCavinqFV5T2%2B5LlW2oCk6gKyswyKO20yb1dxK0W0epGDhZZdSivy32yNTi6cnrHL3xc8Yun5i1bp3Xf9Hmx8E1y2Aav3EDveNWGUOKF%2BnIbB74KxqveIEuDYN7bRAgryZbb%2B%2FNIkY%2FFNlWEOzw9E0VSoVhdjT3ctnegmZ1P7z%2BI9DhZIAkIMtd%2BPOTSLc637R5AkVPVLLC%2Fjvj4qO%2F0rVKC01aDR%2FOFOHA7zooIKn5UEWh%2FsK1VCtkr9slcaKsBTI12ntmvHglPfq6e8Ao45y5Jxyiu%2BoInZImXePTaKOdOXvKHpFm9kQr743A8a6eH1WfObdv5PZV8q8btNfen6QjWuCQrXKf4sKloQ97LylwbMW34WVzGlZrEUbL55hfGqZsvpj2iLdY%2BqhD7OpNk6jtrt3D9zuKRXt9PfoGWRT9agj2HPmi8c7DwUwS996JS%2Bg0xtE%2BVnwV6Rr37CY9oNLz9A37W7vbyHZwvc2PKIGZFEBzOksn70cxIAwxPr0vwY6pgFmuJW0wWujh%2BdkmDgQzKaB98XJc5BWEQvvk64n6vbsK4jB8evnwwfofN0ZKCr9JFS3F9Z9iZKvBqeFFaqCRH%2BB%2BbhHkuIHisq48aaGmkH%2BofO8dqSi6g6sMrRNsu11BOUBYr4VbT9zckyAkOQC%2BlQxmDbi0CdYsDT79PNqOCEgdcKdIpjsgyCQSucZw9jpP8UPpD6BxnS1Wd%2BrP7vhEDe%2F4AyDHYJ6&X-Amz-Signature=cca1474bd0cdb60a3fd48810d01bd4762c07ed5690514d5a1b12ffc742a1ea32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73VR7D5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeR4eblJoeDHYo8khtPYcujCNMu2NiN7AeGypnGiHYLAiANdLfLHNNu7UXceEEYkL%2FTqqolSeFlXh5mEleNgFEO0Sr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMW%2B2Jf%2Fe9ppPt5RVTKtwDxl0ce1GlemZcvI9pICL8bgbNWPk3ZutusIU971Ohdkn8WzCBgBJgUpAmeRQagmxcQbWlIV7FnJRhp%2F7BjBiSzvJkTTSgeM9as0FpWJRNdnhsq6VEFPbRegW9OKy7CPQrnWqA5RemNH%2FNB2QB4AWvnBLLe%2Bf%2B0btQ1l5Fa2ECZtGOcu4omfAiMEE90XNfX1X%2B7e2LsuCGuHUGwhg3aaNhcNZsVCJBUnZbI7Gs7niCNZFJxN1gaNCcQBGqi7MTvfx1OtjXTIJihCbALpnx1rMgUclt%2F0ZhcUD3M0hR9AuqyE4jybw8owz0Kpk99mkh1Y%2BNkj8kmht%2FPFdgAM4YajQPD9b%2B4QBvMSQ8QeTotsqt3NW91H1C708rtp3lyO6U9E88s%2FvsRJQ%2BzXkPK9qX6a7S6VnQlAwVA59FO2lpa%2B2zYCbnxaT3A6L6DWD3hUXa4T2bL44U4rsUH5YqU0TtT8PRhZL5GEvAraxwH40oKLIkaueaKOC0ScmT6rPmNPS8RkEaXifrxScufdh1p0kXu3hJb57%2F%2BfkxIEvxrBbk4wyUo7q04ERKrLv3gJYWnOdpyiVTpUlF8m9cDQzG%2BcYhfpLvQtUFGY4B4PLFlTyfoHKZ0a%2BIxljRON1VTeQOxVYw6%2Fr0vwY6pgGb8ZoaaDVJYJqha1XKIqdcSCoNMqDAlLMHUDeYbsFVEaSq5hqFCPwQcTlm%2Fr1yIti9PiCUy4pvGg26xADJ1rRoyrOd08D3INzVX0sUZAoMIYT25seFdHebXsY4QRDc4i67mR9AOMK9be3ubS7JMC7NLG8CwNh189%2FNcL3TbcpgGrQkV6%2BcrAGKCtor8i2mWsPV5yPnSaJ1wS1VZ9pjyJu0LwAHo2km&X-Amz-Signature=3f84ceef47e08f9f4152ea9f8b310562d46296834287688918b3e67e04ff2095&X-Amz-SignedHeaders=host&x-id=GetObject)

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
