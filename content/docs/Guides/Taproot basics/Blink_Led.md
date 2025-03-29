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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHETREJM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCUFrYmRoZAtsfo4kqgM0bH1L4dW9g1VdsfT4mN3Z9SDgIhANs7gZ47s0wtbLkyH4c5kQMOwn4%2B2%2FiqyTrs4jsTFmufKv8DCH8QABoMNjM3NDIzMTgzODA1IgxLnz5Tc9kJsId%2BHXQq3ANuPgB%2BEk3ovTt5x3JW4jECAuqY5UNX%2FSoDYeBDzZYE7Mi7uSgrQDsywnqRlGAmEVqRDak2VcaT4pWw%2B4okSdzY4UEXoghqavcYcolKYSbwtlinrel5EhHLwLHApPHEiaQFdstnildCsI7VAY62MJrRWkI8xwcviCMCUGvJN%2B8PdBl3LzVH1xPAgbpj3Qcql6VPmn7lDNGEX9syAIIDLNeQjf2YKDLXPq1HZcOjc3L6wf7%2BrgROt%2FIqV2Bo8R5R6bs8n3lSlqyXUIl7DuioNaBNq0xjUPmLN4ZrqrGQ1w0vItNC%2F8biKpTwaEq1IBZBqa28PUUXzSz34n0j1Yj18FfIZHp7gHQ%2BtGBqbmCXw8gkASZn1sExFRl%2BQkCjJfP6nJWpuNga%2FZ0eeKJJqIK22r6nOYHopEARohXi9hYyO7CjKgoyDbOlRA4fiu1F2Kv8w9ECAVe23ucmXytjKjWRUyUFEH%2B1rkZVTi9FyDyiY4RzJsONHvHGDyWkjwlacqKkjK2FgrAixy3Ko8JUdTONcIWdmd1fNU3lD5d%2FgSf26SZse0Tocr4dagTdQlUx1FrLV1REozLcD%2FerB2EyXPPeC1ohNDBIk4Ly9LcUnO3vtfH%2FWTojGjugNXAPwqiH1jCp3KG%2FBjqkAWi2deof9Cw1B%2B2A7YR3PxhlRJcxQzM7cgwWqHbXPTRpkvwJ%2Fwn9Be8ScmjKOECNuDyXiLd%2FFvC0ndR5LGYcYoxJNYXTX3NYKSVR0l4RdfPkrYkuQwzxw%2FgJHPJEs1L81siXXM%2FYmu%2FGOkDfA3Z0P2b4DvKRtgpMb2YOmEcuh0bAtehTaBW%2BKoQNf5uvIIy3NfE8B9dlq9Z85XVzzSPYS9KwEM1Q&X-Amz-Signature=e30727b465250bcce971bb4a692ea0e3029ed5f0126a1097a4f8257ecda8c197&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDY2TNO4%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQD7TC0vqiTl4y5m1A08gyGqvvTVDgD3JqoAv0CVAw16vwIhANam3JWxjnjg4tnwa%2FheX%2BsWoChkGA1AdT2lyC2EOMqUKv8DCH8QABoMNjM3NDIzMTgzODA1IgytqSiMLrNogpBjBnIq3AMbHxJsNoJetLIiiJy3znNkDhU7M7kjCDlKWuyLj91jBTsd5MStemfLUbshN6fMuzbeSQpi5J66qme%2BCXwbOUQK5%2F0ult8sm425B4CsymPHJzL2KyDsswILElewTldPTYZMv3%2Fy0gL4Qci46qJzUO8bv1fjrO0%2B35Dle76qTcvfGIeJS1SseM1s3nuu6AAjbZP9scDMZma8cD7ceoTbqb8SSdGdoCZbtU%2BXXtxqyNmGF2DOhAdcavULakzv3i5gy7iB8I5F%2BUsqBtMKp5vzCiKsEvw6Tbeq0xa0exjw97DpBy351EofZVz4yF518wLB3L%2F8cR0101AUVMehmkZZo%2BSMcaoUNkdnyn1Y%2FkdttlvpyfoMtsqdW1TjKPQlRoYAnsPDeJ%2BEGTo1nOeP6MBVvVcMhiMy9kusRFO2UZp6bYeWdqPyuegy%2F1w8tzFIJjEAnF0A4h5Kl%2BzE%2FkvMX1D2%2F4Sb%2F%2FuSu6iICJyN2Z%2F%2F5P%2BF1Mnhr7HvOrd0fYUJ1vWp9ocpNxghC3aM%2BQBfiHRAx33hXU5eB3rBbRjTAXnOqp%2FYkPJig%2BnFk3pfqvK2jWg0Fi%2Bo%2FbHi2iIUXceSEBDrbomXeo9sTRRBl7lcmRC8xCZF2O880AqE1wuUK5bf6TDY3KG%2FBjqkAU0movFwJZ3FaItcBMjytkp1Gi%2FcrWVmuScCsnCwY1RerLpZ%2BDQkKi%2F8GnhxUTsafAORXb9oKf7Q4hp%2BlNRbGwicSrQAdoOfx4bn0Y8VeWP79RMIjH6hFxtY70ZFWAZxXbV7QXgJwJubd14UHnNjJy04r7X5zu6Yb6c3zzzquOkSFQhiz3HjoTUyD%2Bx7gmj%2FhLUmM0T76wP3OoCdUIVIRb6BZbxZ&X-Amz-Signature=64c365a6c61c26f9a37c671298fe89f0347b3e76233048c67929ef2456b12485&X-Amz-SignedHeaders=host&x-id=GetObject)

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
