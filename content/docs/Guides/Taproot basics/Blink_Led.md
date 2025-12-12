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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPTFC66I%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCID15eCGP6STgygT1u2tMN3ybhyGI9JXdX2%2BrvCaFOHtUAiEA8gI1Mzq7BoA50CV%2FY3Tw5oIvgU1s2E79p%2Fq8Sg3iJKkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe3tXNzCxCjap0mGyrcA0vnZvqy%2BrtBq%2B4YJwUBFaPRc%2FmiQ9dB3qtx2PKmSy0PwxAAYZfmtPLWsHbB0IkQSeIB1NmDgmUqv3n3cHkW73o7bIKeURDcDOuhf0naSMAvnbtNwwrhrilwP%2BO%2BSJq5Ky3tWM2JA%2BcDUrZnIDQs4dE%2FLZcKitn9O%2FFVGrNsreqfc939ZTiQ1%2BlTQsKBCV8zCLFQ1BYCOVv4YvRLOXX5iLplxTWdJv7ATnPj5nRmQAP1VUXwgTuxt4rPsqjWT6KO9rhBISSLvFiU0HVqc0B2I5Nb0E%2FX%2BtJBusLOiadD19MKCa5Nn82fx%2BQiPH2C7dWBtlatcGbxm94OB5cWWOHWrcM%2BfiOknjSZagb%2Bhg2tIwoa8Aad9ZbfpEzDCmZEodKOvtjoTinU0ZpJ0Cz4QsEnsbvQNLsRwPbrc5CTutCgyHvvse%2F7Cc36t6vliuSmz7pjRlySM4Fq7939pRDQ0YeKmnw5mCW1tG8%2Bv1M3MUTEgj%2FBhQT1T90x60nZAuNPKQsshybNvAv1BxI8gNckt%2FrbkeiycQKOl6%2BQmES7pd8bzKUALOBFS6Bcg2a9%2F1HikZ0d9zTswA%2FUKhACLdU%2Fk3MVtnoqYGeap7JsX3T5XS5gTIy6%2FFWA25dzN6H0bBciMKDV7ckGOqUBfV8uQGUXSSX0q6jxKfjwaQ%2BjrwTgHYXdB1EOp1pKOstAQf7QMQKQFear79Kck44lH6TUeRVKSVxUJwQUiecH4smBkCd72LrTetfSn8jilh7awuEOdHppbjF%2BAte3DeHT15k3IMfFTnaN2J2qMyzhFP1Ua4tAN67BYU46xJG5ff%2BIlM5N4HBSKZC6SMk%2FtpnZBRoSMhjO1WNcbVDhlaQ1T5CHDc4z&X-Amz-Signature=06016d6dcaaa7503e4005a347e85634c7d8b54ad338660941661dac653f542c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OGGPMNW%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIEQhXqE1k7fLOEhCRYdyfQMw5JMmvA4g4P6EjtYEQHPsAiEAiqBXQSUZAEDrM1cbhzTwtxV4jDj1tMVNu%2F8KmYAZpOMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDJOt%2Bc0KtkE58ILSrcA1ae42KpL%2FijEtzhxh%2BmH7V3ZhiTlDwOY4WuG7ZjiUuoW5Y20nh0BELB7gvVBYWytn0J94a2bHtm%2BPQFo4HaiLE9%2FESrb6O9vaEBBkW2L7LjIfUZVlThqXWZZbWP7cY4HHqFDywht3hGZW55ori5Bd6pOftObDQQK4ysA1vGC7AZvwc9RwWgt%2F%2BS75LtDXsFdUvVmPPsFj9kCZt2Rb6Fx5CZFTOpvN8YCiMqKaVENa%2BHj%2BeCvCyPCyo8jVcmwo4xOIXDe41H4zGuTjdPunZ%2BpDuL%2BJcpC%2Fb78p2KY2I5Vq%2BY30OOir4u0M4g08YTrwTmCEuMEc%2F5%2FrqSX3DYY21gf6FytLwHsvbhl%2FLhrvJKWmRsTi5lVpipOpK6NbxYCZK6XvCqDvt4Re%2BRXpNKn7sQoD58%2FJYjbaQhZveGQ0uwDYnRyT9HbsegxHUY4anAX6UCx1A3KdpOGxlHO7cJ4nJNtMFWXqHXkYJ5B16lbGrYl3d8uitDUn6g9b6UC76bfMu3iw9Apbn1M2EpN%2FF74fRxaXzIDM19BryCYiufqkP%2BvzyAcgrEWAfryFslwnAXWd%2B3HxzVEdMM5kqsKocuAl6ueDJmKH1g96haquc6Gp8z4kaWHCFT9mk2vsRTp%2B%2FiMOrU7ckGOqUBVcC1yxA%2Fw6hZ3p1mZ84utcv7nVP7Eerc6Jyynl0Q4e7YpuhaNm71hYVaxfae3QZUCLoN3xfiZfU2bjPcyzEUTmuADWuxYVoI1V2Wb%2BbXhJD04Y6fypEL4cpOwglMq7iV6j%2FJI5femVDtK9D1EuyXGhI43TvXhQKzvqRFzkPZgp9iHkGb9c9fh7lz%2BT2ewLpAkIC8jG0Aj1hURaxbHRy%2BBQxZpPBx&X-Amz-Signature=f11378a6a2447a9bafe6745091a4174b28dd8c34b47aa89709d51e34b65fb3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
