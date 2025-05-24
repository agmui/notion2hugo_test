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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5GZKBR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQD%2FWihTxbV2Qda6tw5PX7thRvtQnG8rC7Z9XHCRPWVFbgIhALO6qnVAZ1XiF986yFRIP5f%2BwWTAklruRRyNO%2BiNv2LlKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPo6qCdtwIOFjXf6gq3ANsTdcVO20GHtge%2FI%2BOrVkuPcBkuXPBhBzNnxIJ6fiGWnETZVx72%2F1Hro2UPH2fZ5Lzs%2FatQsSy4EE8tDnqgc%2BgOiiQ2PFhQoupYjiLbtKvVcnLQ5jbkWeoPZO5xyrrvt8mnjs%2FmlRfenahs1dYvbRFVuIweLhoJ7yxd1faA31t7CU6mI0thqJXOzLdKelSZil6wOHBBDTs5xpuwYW29zS33mAJdXeDbsKyohodoRbUWkb2asJ0lNcFLroGWhHwQn9ujlTRuaQOFOgPNRfwtFI8v856dunK7uxgV%2BmoOaUrpw2qJYSGQYCe9Vd4ObruFPeeWAOIQaa19wiKGOZ7W7KWCzlqwAYN1K1gO2j9%2Fg5GljH0OzSPr5O1MusVnvvwMpQp9F5ohSahxD2uJBzohhkpj417F%2FiP3aeEUxLlQmrTf3LACY3%2FS%2FxsHhwjL%2FGgEjIClURaOffvLQmGZ3J2Gs6run6IzdoCw1BoBRIx%2BVWyERnPbBdqgFhpZCf0Unr%2FWj4Q33TWYerU1PoSXEqkHUUfbj6yBq3YlnpsnOVkQCf%2B87vOYsISmf7TrVq0I7Qqhg47bVlYXpYSnamzJKFA1XvQCTkejAOixBzJh4T9bHYjlvXw3Tq2KGvqr460wzDencXBBjqkAUQadjYGEwLQfMhQUXxv2x%2BYCPhLNuC%2BWVu2MIWVR0eKWolsK30XIh8%2BDVOfV%2FO6WloF3R7xKFQQ9EfFHQQLjPhv9DNGOWWs5LeTsgEbD%2BSAM8hYtvVMky%2FC2Msnwt5s940PIRR%2FM4hwSKPCFjg2Ru1ieApnt%2F4cUj73SaRc0gip6Bb0%2FlGI%2Bo7PmkdM3m6wRe4OgH80hqGnFOssclE1q29AK7c3&X-Amz-Signature=de9a49444e3f252bbd375ecb168727a4f9f69ca7ccf2655a5af1d265e55b8e16&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUKTHCRF%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIHXv6Iqp2T1CFjAt4yCB2DqPEscKtzPtA8zC07Ov6mTpAiEAwU%2Fq4VB2Z3qnr94mIEQuYcvu7uVGnyAarApp8yWhE3UqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqDwsGej9VwIc%2Bv5CrcAzwqC%2F0g5%2BgPMv7ycVdgWXmoW82KPvypDQmY2d7m%2FKis%2BAM9atVDPrzY7ITZjBJlloHrYS9NJH9wQNVfJ34%2BI%2FBAK%2FkDyxLz85i4k%2FDIpexDW0t9XszRAefgmuToBKDXYaV9vwkmubPuB6wM%2FnAYqbaTqWbUyzKt19ehzEwBJlsrQKQIvIPdWntoVSt88RuVlrnhkkpFrmC6zip4cpiKlxQ5Th6exuxyjj%2FvKwF2g0Z6pUIETK6xBq2lX6FqGL0kvx2V%2B5dsSMWNivy7S0ppiIZzxIMtQxb9a6vPLPZmpSBN6OuZyvvwwG%2FJGBwUnVAS9Mp8NS5Ef5rcJglYrV%2FWBYpQHTZ4YfGTR6RKReqKEJj6HcF1Oi7Iz56IqcNo%2Fvn6%2FuZQT0PI%2BdPZswlKvTI1vckeHZQI58Xw2iVCG3Se9GJSoi1qo4aDYJbwayRrnkIy2P2rOU4eW29H3xNUD4e1IsTpox50DwN3QHwgtxWwE7ewxe7hCKF0enAm1F9FynqifQD1UM7tYGA%2FJAUExazeTlS3lSVNX%2B3l1xgGCAc6JYqbchqMasSsfsVuyO99gWzbsBaHdw4QzWzpH3WmJsGS1YJsvGpeX0pmKg%2BUH9euuKvRE9hSW9WbQrNCiI8yMM2dxcEGOqUBVUACy%2F1SKJgIOEJ5zQKjX63XCOCavds2CfapBLrqNxI2uO9erj3JdBrIOeBpEjtEdEOvcF8j1kfQjc5cIbfjon3e5%2BlaFLyGT7Ze1M62Rx%2F9%2Fk2%2FaUm9og9Xr0n7h6mBfX4d9gVKQBqf50fMca%2FdIXlSurOk6YadHOQG4xTgmg%2FNAV75Z63PjgGjOtmfnJCX0o6O%2Bu5hDfOf2J0U2YOubxiclJyj&X-Amz-Signature=cab25ce24407ca9ba99597b7b640afd83a25d5aa46aec130ab0fda882568a33b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
