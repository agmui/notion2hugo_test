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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5YAK6VQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2F52w0KXdwhrrtP%2FEthNxbCnrIVwQLHS6CnOmU3CXvAiEAvynutLAEBpomp4WOiWKWAlcVYhicXuOUMqJD%2Bl36orIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4uAaxRrC4WE2JgiyrcA8iChhzfAo3l0HvM6H10AwYhM2ZbWsOCw7TJWs56W9Op0b7Nz1dztKj%2Fz9joBQBEwQ%2FAK1zY9rFr9RrJ5y7UFtOr0aEzLY%2Bq64oJF2f2cronwdtQ93OhRqGktNyONmRvm9RLOXLJ3K8MWzyjMT5tG7GmW3YZ7F1BunZhXiuXD7C7DRANos19jXt%2BLmbgNPqhArCnK59rebMVD4j6f2uVBRxTW2bVtqVNPIHZcGAmjNLAp1b8RLhLRj69CDx3OwZAVCrItxc4WfgFBQtxmQW4OXSXc6GNZaPmLOSbsb4nI0P3Sn56PWcUrqA036vV9sCY3NEL15dqkoj%2FGFviVMP6wicyFGHgFQXX2PSBg2x9KSglocMiYqcArJZ%2BNfbKZBgyzQvQu4NPrRJVbpKyDovXWkXn4ME78PFYiPsR7vWs9wm9F8g8cEjlq1P2rnnDcYMGpgL9anbDvE0wuUdyWRX6FoI11%2FiLREGqFEkxo%2Fmg5xUk949hruMDtcGUDmUc9U78oIuzXyqvMy2LX8c7p7%2F076EQrnZsta1upGbWJGuvGFjz%2FxBz0Ub5kSRH0u1S6KH19EHuCdjtqPbfc90AumRW%2Fb2UDk7iJu6zUZNkwRUDwc%2BKx2cCdFMyVN6aq5thMJqRz8IGOqUBdlZXPpVGhjKRlfdGWyUOOfQqZfsKsHWvtgdocfATX2aiIQp2PGPc1dbbhzuWe8LOPrletrG%2Fj4bJZMIRC9JXlsy1KMtcIlRL63RpOmimZlxoHU6%2FocwBGIOx%2FZumzk3l1vz95RaDFRjVcO3qcXbBoiU1%2FKKiKWYsDDVrXyqSNk5h%2F8VugZiQTrXG4vW7ACWu2odEBwc%2BHqA6mf9Gft06BO%2F%2FfKzI&X-Amz-Signature=d1813ad9e37af5494b2fc6b181504a3a45dc89c967a674a83d8f3d765dc191cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5FQTM7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN2E2%2Fn5wv0P9yZICPIvQIbmxg08GeIqQY9NXjJoZphAiEA5NfkSGntYuWoIDjS47LbahufuzaHmAETE9XmEHbGAm8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaFoThFBa5GYxJsIyrcA3Qkt3iqaWx92udAQrGbvu35GgYKseSdL8ThyGrb8cDbc9R82VNfgJp%2FdP2YvizMX%2B7EorzMc%2BOEpKxIH%2FRIusaHa3jmR37J0nYxB4nBpskF4lC%2ByZBla25sYgl%2FX6dV6zfeb5rYWvzv0Yc94ofLzWIkd5CAhTTDGcZkQcc0OJ65UfSPFr5KZuaWC55SsjCXhOI8I9skTHFJcgr0yheJpxGj5uiKF%2FsVp1N2uyHwp8uSoXuQapv%2FLK4%2FTyT6B2mplRaNg5DT6HKWqF56hq31yEhMWTogsBoT0JFqkph%2FaHa5hv%2FdjrLjtQ1FZmcyMdmhZ7gx5kYZ2hsWkD2NJ%2BOY%2FDbBElpoAijihrNHOEEbvayCwrj%2FXqc342ft8vT%2BRa3jIhUXp20e72xcbSoeWjQjiVdNVznj%2BvIaBzwh2nZisN78KSBvhFpZf8hd6l0FBrolqAzv6gNru3m4bd4bNUJZCAjESmH737hqS2MaFWz4%2FE1DVO%2Fb9TlLyCoeQY%2BWNHv3Mo3g1wFG097j56ZbbEtmazG4BWZWSYDy5i0V8kSizOW4baUxNu3bo9sVTe75%2Bcg8wFaZ4fzC7ncjiIz7st8sHFuTUfEYBnqH7rDM6fJa4T5Y3H2jsbIsIvFIVF6cMIWSz8IGOqUBJqgoLlRZ0Wf3rMWwhrxtZ%2FMg4Hr2ypmXU5ibXKlPAQ7jEE1V9wwkcB%2FsmpspGswmKHN1HyRDuWX38vTHwSlcXb8zZD3byjfhrDSs%2Fhn3glrSPWs3pvAHWsgRcdjV2px%2BJazp%2BcBxnaLcr%2BpaB%2Bx16St9xF9a%2F4fTCcxiNdWQgUKvejNgX4XQxCcKo2lHfrkRmzL2vacuimAV3wxQAcmcpNcZE3WX&X-Amz-Signature=3f95c4fb6a86ea623deaf339fc06b091473230c7c89900eedb07302d537c816c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
