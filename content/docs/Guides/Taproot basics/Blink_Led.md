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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXV2MRMB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDV1Th4QMM0SUycAD%2FzNU7tet5CmzRrdWvy66cUsvsOwIgfokdXRhU%2BJPE2MyDHR4Lt788DhF%2FAz7acfrZtueZVKkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHP%2BTxGwFFbN%2Be%2F1fyrcAyh9ykvvyFgroIXNevPekay3pXLUpFDJ3YMbNNjbeWFLjGeybmx%2BhKRGKNV%2FFGglHHBy%2BtAIrs7qB4ilnhvp%2Bx0koxB2rSFR39KFTdHa58NQMFwpVpZMZ6oqBA131jLXxcYzPdhs5VBenQt%2FBUqn%2FruBVkH5LzEUZxNN5FuKh2SI7Q8cCXJzZo4yqX%2BCAW%2BuBmdf4J4UrX3zKg28paRdVAHCkYObKk7Gg5utxvUBltY3kRagVHdwViXVVLfLlXmnT1e8Jvw557mHwNZtdh1JRzeOecYcgD6DmWhQAtuXIQJHhccZNY1DripqzyeldP4lv7b1VJHRS5jUA7uVfNRUPnAamiACHwa7LEWF%2FiCozO5qtzaro2R4MxieITLbq3pW5uEEuSQuU20EZiMo3mzRGs9ZpQiJYxxeJpEn5Ry7SzcsLeKIIT1BwLw9wZLJPU0XDAybnRIRdtXRZYLPyhf9DwzKaIIWhfvf%2B1vLDKOB4iBEkD6UA94d8UWoMtgX96g3S3Ufn4QFVpLe3LUug8UPNdlJixaHtWP0dJqd6qvytZaOr8ssn1RKdZ2yGPsa%2BQGZg0MkuNE3bwofAp3GytB97SUj%2F9FBv2LNYypWpMD0hvZrruJISMkQ08hL5ufdMIPEoMEGOqUBtwaUMFZG7Rhw%2BIwAf0AtkNxDZCd0EdTz8KKljW4W7GlBAEHH7FxhXc3SujVEzwVPz0NyzdfCSWrhpm%2BhjG48mcYX%2BqO4Y3Ox6%2FfMdKXjFGxB%2F%2BrimxQisiV2WJxOC1IvMCD2xB4wPGQlhuF8yKom8zXTfYjHbKYNa7A88takUSS41Jw6CLv6%2FBgluApj%2Fpq9ZBhVjcUkb%2B%2FlKP6UYEXLHBZt87Cx&X-Amz-Signature=95d4e1c2562758860399bc5a8b192371a771227352d7e347579b1de2cc336bc1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BVRDMV2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDls9oTr9QJVDOtydBTC84SKd19m3wa4IvOZC4YPQ9d7wIhALHx7UReco6GOE2g59ItRch6ohdwaXlZh4lBas11v%2BX9Kv8DCFcQABoMNjM3NDIzMTgzODA1IgzTLxMCjUowEgVyl1Eq3AMJ79ym%2B2bNufvIvFqYbWC5Ur9FYGwOFWsJKU2l%2FLDSIpzoQoN%2FKpNIBL1JasKjd%2FqAVWVxKTN5U9rT9FhlSGPGFOSXwmtVpy4F5Jvpi1Kh%2BvaInXGIHW0df9dBG1EJOXWWLEsaJUq2t8zcseV8swEsTtrRaYKDR9Gdf3bUQbqv1BQVKPa3xj6wjXF3%2Bfo6Y9g7wdD45yPoCeEKDw6iUfUv0ZjDlLOcW%2BvBrE0unrdrcdrf4aoLInWLMLWyGXpFB9XX2%2Bk43PIcKUilb7f3TEAG7tQnYxUCEv6XSBHTCZbmojO%2BPnYn5tkubbRrCsEZ%2Fu5kUqdd6DsP2kBB55nYOmQl16BxtOksJT5mRQlDs3sN3hl3RTzQl8XXoTpZAK6glbgfY9xzDsWpe3taO4SieNtKuPnIVIbEipED9XsTrVIuTm57Fda6c6Pv%2B7IA7E3EhkQbilfCS%2FPpUt%2BFXn52fQ6OVMTAQAg3TfDYEz%2BYBkcu2HF%2Bzs6ED2EtnpN6SXFFrsrYmErdp5lyyJGPlH855Z8MMxZnKdmR1vAgH%2BbToVFP3UtE5nPvUQAn6MitFHnf7yvZAaRGRKjEA%2BvvpGPADLU%2F%2BmCeukZ0cKlC4m3cFt4vzgbsSp2zAxYrtcwZGjDow6DBBjqkAS3nNSxVaoG7DAP13IBq8JWBIM1HH0zCwxHutSXtkyJ9EAuEE0cTdeywGftVMLkCEV8AqBpjlOCZvwrSXJpGxAxiUT%2B%2BuAL%2FMZka%2BQsmPjDlVuLEEWcSzXCm40ZRydHxk8EeCXnwRClUSJ6MJikyitdfl85GspTKg0TcJ9olZAZ8NS334ggJ3PkuyzJNLk%2Bkq9CfFhyrMUl7CXeD5OvOKKfiBf9g&X-Amz-Signature=f5630c0aa1612ba7f615ed93b8a8893eb3d33ed394d3307f5863cbf4375dad8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
