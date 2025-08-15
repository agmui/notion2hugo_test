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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652S7KTT3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHf5IIBn7kH4Ab%2FuKem2W%2BGGU2tt8sjPboiho1D86BnPAiEAz%2B%2FcOceqmB0U3y9sKV2nO8pbFHmBdNoUis5wQHGVcxsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNMCTCb7PQcT%2BHhDpircAxMeh1rZVDgAJTlSqB5PkidUnqOPAaTju1kkSW3%2BFkZCuHpTKThHlB%2F1AotN6QfzZl%2F1MB7w7CD77zGdheYaywl1jmloyJ729z48kth22f4qpTB2ov%2BoymqNmtinSNcKhJ9teTrF17Wq47bxc39i%2B%2BkXhZRmBDV0A5q%2BQAtYYDRgLtpd8heT%2F0WjoGcQvqxQmrIfFP%2BfgNDxZm8yVDtO%2BXy6%2BD%2BoYhKP6w0ofnFeoaHpHzcCYuVft1zVTsbGFUvYONJ8cnjODNrUQOr3uqzp6GIQvMjBT5CZqKmJT51Dk5BsxlBVVu3DjyKOwbNa6Df48WHOti%2FazfUf%2BKTdS0EWwom%2BviU%2Bz9GyvGJp8UfyjjwZQ9YcdH9KHkD6amN%2BlCs06zMmGeEEuEUCO9W9Jkk5rggnwVIa9j%2BKzIB%2FDiZeKnneIWbj5vToHP3KP9QmKfyp0ihUMNSn4Wwoque%2FiJGfmLqnpB%2BGWF6747qDmNu3DrNH1AfwbUlVb%2BoEvMsddEoJtShOlgU%2FeLCF4NK60d9xknuy%2FfRQooEteX7Dwy%2Fq6x75mpXqO1PquH8RO%2BhU7DI7XJZaQG8Yf5f6bPvaMu9LKDAuwU62NKkCXxr1KI8%2B29QA2LqaTZzBsOI8L%2F74MIuj%2BsQGOqUBBSIbCAa5ovwxsFBzZUIJiRpTF7a8%2BifURDikNKiwvplxKUubvPKQCegEPNe1lcZdvFxNsKPONl1VcvLnpmGbVbQBbwc%2FUFO8SRCKNELsCFb8QtKJ3y%2BuDiZ6ObaK5nKYbD%2F25krfZC%2Fm92eOPnj%2BS7Pjvup3QGZRffDy7mfyD%2BocwheqSNRj2fwrlwnPv0lfuCf74Rb%2FXstbIm9nWUb7eYLBKUqN&X-Amz-Signature=11dee5fa183b617fe1c2c73039f9c801aad5f19f69f6916af0c0db53b7d7d408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2S762G3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCcFzpa6OkxWKYQDZR7m2XeVhXMmoCb6AvSfrmERkZlxQIgczJLHQU%2F5S%2B6O97YnxYbM5mWLjNE3IMBm2mi3OBv2SQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDAIy6iH26i39xfCRBSrcA1kz3q5uYOADpABVc6AtC1cQfudEvW%2BnJcif%2BkEZrn88MnZhVYgcUdgCQE82vfpDL0FuA4B970GX9QT%2FNWs7MA2J7ZNFcIJJKxB4TPMza1vrAZKm46w7QyA5PEZGn0xZTC0plmBLTO%2B4AtSL29XSQhNg6KnkZWWhpeRKNovtJrhVlzV%2FiqMuxBkEOXoKlDuOvyLUx2sVZ9AQ1m6CwCcWBV1%2F5o9%2BQQIDrsV7eEbmNlk1Uk0PTPeaBRBJ04EgcN8V1wuJgOgaLTm3iIxAiJtCpYD2mVB3q7Mq3BE1x1a%2Fxm0ANNdNoUCn47XAJ7KFznVHnxNcAbyU829YgK4Srhcw9lNdCWX3z51jkLFbaJXL9%2BVCgkPoAzuU2hI3L8bqtO9Dv6WkETAD1hElfnvy5g7HVEwdNNjyPA12nMSkgv1d6lQovhOniGGDZP%2F7NTUkJabNVJJbqRsAb5%2BktMMxT%2BhdKSvEbzuTi%2FaCGuWoS%2BzzmzMGWaoYSelW2EdM16rti4f8A7aL8nmenU0g9GZgFDBM%2FSN1NYywSpWdnX4plTumhMdwDRaXvLYJdJhoG5BcG%2FLfv4jcT1UVGRG0m3cumAufzY0rDSfjudVTzGhkDrnPxjAKe28wim0PZ%2FTv%2BpA3MLCj%2BsQGOqUBjaChNlMwZ%2F5rb7Nq6m%2FlUvGVdE%2FIfZzsCTGrurJolV5TSukbpTmoT824KABXWNsJCbcGrzxNEwQtOXvANcHs1S2MZxMDa9TEy1FM0N%2F9k4d1J4%2BETJ%2B9o2yPp0loFSLUGEshvleBjsOf8v4UZALU%2BtWu7NEoVdOx8bDDmu5bo4JLZVJCFYZaXI%2BhUFQsf0dyXlh0LehYfW6XxL7DABDRO0vHngg8&X-Amz-Signature=12eb6b90ea76569e08620e85c97637d4da1a40a07b9d5133bd38e7eba0d74b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
