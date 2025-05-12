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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6WJZHCB%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDdxxvwHhUsosIt8fnsr1BHHXRahIO4b6THqvgZNr3SkQIhAImn1flf9W1o3h8NDKzmqBn3NIPXnxnFj4BPvpqYUX9rKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWyguB%2F5GvbMdT54Yq3AP81SSMO%2FWp5R%2FNT0UAWgUQYmVJ8cD39YUyGKpId1VMMpMh5lSnPc7sGwjfj6Zpmr0LHZo4G5ryGu0bVVLadQBRam5dEY78iYz23gViYFUHBKr3WXnITU51oyEctCGPd5dlCLvM%2BIvu2H63sVfOH2ADfoVLZs4vaqqKYhHdUqNZ46tnE4Q4lT3IfGxB6yq9ha3u6O%2BrR1L4eQeOKHyLah1gM2hRhlaiP0iQZVZn0%2FJCK6qY%2Bh1YyKTPvIkRkkcbl%2FDD1vaAe9C1%2F7TTt3a%2FM0XiJ6ipVMqDcD6cbzB2pAe6ttukipvRvScroFxmT%2BvFfgIVzpifjEJotYkvK5a4g8exF7DGVe7imV1GO063f5OlUOd3ZffHgff6fSN36ZDX2sComkF40rspGr8h865Y8%2B5ZZn3Q%2BvM2zCnmA0ibZm5XqFWVlLYzbD8exAhuLG9kaNuyqAdpsjRTG93%2BJKig0FF5BmFBwCcYEYPs9OQlqwNv91v7NEgX0oqwPT7COaIdkrN3pxQSzZ30CshEm%2Bra9ztA0OXz8ynv6IGx2uWeehqW6XX7GjrSU9BrvExExjxeHwjHx%2FR3WHPMBjPGKoLPwNvaN3jISE45AMcXdx1Wfz%2FYtALJM%2FKqKPT38ZEy1jCLnIfBBjqkASyvb4Y7xRdHmKZN%2BByJCTBptNwgkKs2v8X3zKN5nW35P88QMcIHL7LCbPNDqBPt%2F9g2pZ8eB77UtH7WMYobHkcyhLBV0dyPFUNUoP2V5JXQliStNxfZMijeEsHG7kF4UZe8gEANDMWnIQlN7CqL0cvPb232yXi19mMSooPqaBWcpZuWhG0WayBTD19wW48Bc007DcjzMcJQLsd4%2FkumftOEpf5H&X-Amz-Signature=2c1406a3119b60be5be78e0f3ec7ff99d3838e7004d71ef7dbc47074410d8c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AYTRZMO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIGOxZMR9zNBRDYMlQnI30Igu0euBnG9TB7t%2FD3G1j4UyAiEAt5%2F%2BoWpD5EGU%2B0rf%2BsaDjvsBCUL%2BTcNoS0j35T6SbxYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwbjG0TK8K3eLBH1CrcA512KG2lefwDQCueSHes1GaLcKN7Jq87t9I9BxjFAdey%2Bxsg3pthz2E6IMzaEJsdSUVw74HZf3vtmScJe71FJITd8Jz3V6xHIQYgsriQRvPVAYwl%2B%2FD7CQdmOJQF8TItWXdKMOZFedMYsh4srumMekr9CSQnvruojI3f3x6wzrqFQEY67Jl4aCmDVYGfgYvq7dNLWQG%2FmF6ccCmejR92NGiByTpCZRDlu459IhnjjLmAe%2BEPXSOCTC4i477rSwJsSOJUDocDmF6HjR%2FMAMTX94%2B%2Bcf%2FWSnKrNFE%2B6R1U2ybITX9jKP9SQ%2B4Dss8JOC0EvSl%2FHUtOhRq6lx8Q7mhrclGK2TGZPH7US9mP9V11q601YHqu5dPcJIv2ens2OrZ6%2BIcVxhMBg00Ph0ZSEK18u9UjV2JnorxkyuAixdR3PpavaH1ccJozhlbQXxvcerPIOZQzATozuuDxKmOkeLS2RwlKwQCiq1LN0g%2Bhq9vh9%2BBbwkcFkDx43t0%2BTyghqB3XWgtMAFAs3HexrY2ozdAhgOcFj8Uln6W60jxa65%2Fkzw%2FW8PAnEeZf0Dywv6QpczmbAzqmCUdjKVtUNNMP1UoWz%2FmJwCyT20uThDIz1SLXLchqzW8sxAGTriNkctctMLWch8EGOqUBrnmWiFJouYnBbcgwcsES9LbE%2B%2BYx4KOB8R8SHt3%2FROIs3Eo%2B7o%2By%2BQqcvBDRF%2BxiyvIJJ7qb6mt1GkMJDlAamSIftFM7gEJxSwjDfnlsfJ2Y3mHyshBYbpKkDk%2BoSsFx0siovi8zLJQcxijiNL4BajLzQFazTWeBvGaGCsx0KM1TyVI18NHPsLXGnc3euURvLVbK%2BNNfYeSPEwWLFXahsHlZc0i9&X-Amz-Signature=678c96697d5818ac3d04ce8b29019c258b9c4eefbc5c92fb3e9712705e2fa6a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
