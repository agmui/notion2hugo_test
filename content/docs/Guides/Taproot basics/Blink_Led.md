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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667344PIU7%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCID3R46ziKs1QP2Y8CEbM%2BfhxZSyh%2BkzWj5HTGqpEhV8YAiAwAlO5mKnOQPE%2BlHY9yXp3nUBQK%2BM4ME1%2BguDm9qUmqyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY199FJcZ79wrE5%2BpKtwDiHvFtO%2FPFjLKSne0THmtTRu8UsnULjVAgr9Upx4cpx%2B1lMQgu7LgLZ0ChD9%2Bd3FM83jXGWXixe%2ByI%2BcyT0oDWsVodpKLkKEnNS8jnZ0mabGA%2BT2%2FdHSMEl5KmmwLJjtIt9KWwDPWn%2Fnm75fQ1dsFCV3HD8bHKKXGeoPlsayRTA7fRdflGzBqvyKPnfHfyogFyxf8NVORC5qXchFB8EM0Xq54EIJkXE0RjiV4%2BUi02yDkhOX4pGpguBgFzY9dmFh7lEAxf%2FWddwuG9aOi%2BRMm%2BPtzSUa0xSjGdHw%2BezffQe61f8iALknqq7BBKMraD4RqxgTaWOokaSwHHhsjYFY%2F7mTd0R58Ad031jq%2BdIZR1kFCscSTMzTGZ1HcpmLXsG8wo8%2B7g24xJZdhrteK4O%2F1tcFEjItRytwFnblNp1Zei4ZDwEg3gIduqCVEP3WrChHSgyXxkdQ83xI2MJSkag%2BKAkfD0KabNv1BNZPrsKeB%2F1ZWVZaNdS7OFVDlRdqt1fhnNddpeYakqr0LcINFAzko8bSImhu60Xp6XV9VQQsj0T%2FPnd58vaDIrk5ehstRtbTOf0BuqFAKrrhlMisbonMy32f5qs84oBGcqX%2BTHzTdihCbw4qDbs2sCSLkLGcwzZK%2FzAY6pgHVMBeyM%2B%2B%2BFbHD%2BNOJHghTA%2B0ESxl%2B%2Fj934bgDUitOG5wGrPARtWn4P8c9hphLBMaHghcB8Bwk0o0Hy9XM%2BVcsG0CqdkNESG34IycUNT8316GYy%2FpIGX%2FfXHYG8MEZs0%2FBkeymeBKHVdg363bpHTOHZ185vdMGFsQHVQtoPlV2rkD7o14pnJnK%2F5JaPqxTShIJwu4Ufw8HrvHEUsARvGAKydgwpvoi&X-Amz-Signature=98244da3e78ad65cdf4c2ba8a6dd49fdd175f28e5f63d3e6ff6fe15774ec9166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHIL5CS2%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICbT%2BvE9gFNDK7sTogub02hOaBilS5fwMdR91ex5yZRrAiB5On7qEX7fVmGVzAYPaCJSlNXSLVl160nH1ARegML%2BVyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyKvPC3Fh81Z9dDZNKtwDZDFoSzFTcJEcntYygyW4uUN2R2Ym11t8TfK91%2BchP11pS0fjjgp5Pud9Cr%2F67bWQTZQC1OjBVPSkhcfVF8qj2IWdb5YC8BH881ieJhsEbwaOJCx1iNm7%2FUdBJos7bdmKrbjDbEKRvq4GdIyIpAACGsmmJZAyjSFOilU7WBr0BJ1a%2FSRh0D0%2FuggJgZl5zHcZT%2B2wTfV3jdmq3y63nlQ%2BSXINMX%2BrXaJB9MGKuEWiM3NhY2AEqB75L%2BzdlTqZbg2KyARZ3YThhMupSVXbXB%2FfmCN6Z3VoG%2BvT9AhIuummXEJDJQ3OOo%2Ftq%2ByDlyU63UfA%2B1iQ1ipW8LDwJzcd%2BegZPMWyV1jVXADmxJa46O1prVqXleYP7EDUE4Av2BLOlTxnnmANAjWYn%2BLYa35clOKS3NGBlPPioieu145ur601dXMLBzp%2B98FfOhI0Cz3NZIA79zP1ReMt%2F%2FiadHVOvsZlN22EfKkLZulG6Tpc3Lk4wGi%2Buk9zKjQl5t52%2BsJKi1jwSVP0CwqFUGm28KpRsQl9XWZAqU7TOfuVwsYEschDzVtleKAiy%2FQha6qv8v3n99O5JGe3SXnyOHanwHEortSsDV2wVN%2FAv%2FyILpKk1X%2FwDSO02jK%2FUTiQgffROx4w3ZK%2FzAY6pgE6P8SS1Y6wn34Jw5EicB7ewtDq6HxcQT0QRCeMgpD2nbz5b%2B7Vmm657B6VsjBipCrCZxUFVmBUSnpTF0dVfDRKJmF9VNp8J%2FAW9hsnGZq8LBErl5uIXwjY5J%2FFDVcZM53KjlQL8HqkeLaY1heTEHrau%2FWHtx9I1o0pGam0hHhi3BehWvbsujVaHpiJIb4NwybsJutsXna8KowdrtNWDpeO33Svjd7d&X-Amz-Signature=82eed7441cb46bfc21833febdfd76008b3b6e34406d58b7fb1a25f4b25d9f810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
