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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYTJFUBI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6nLBYYhZG4bMshjIkepc%2FoL6zaxKWtdqzKYdxggSSUAiBEQIxdYaNN8GtsSJujLmimG2Wr3PeBNiUeVA7%2Fc7Lgayr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMVGGQbJ6QCJIp%2F38iKtwD%2FCvaMUcdA9KeDjo060RWoZUubDPQZiemukyUpt4qU8rg701hkUhjM0oRSi07l438linlY79RX0ajxhNsIKmGMd9inIQCuf0Z%2FKhpcsNx22GRnN6%2Ff%2BPiWKh3iKAcdL2OfQoO8Maklcjv8mGan5yp1bKf4FhfWB%2Fs7jn%2FqroZx00txK%2Fcg%2F1UXHgQ0AW01N7KSk3Z%2BZyAOTw%2FkBZW1afMb4giohoJQzHQYW4yQlP3KxTtBSGTrILt5S3PedW3MbM%2B5Nv5re%2FkrnwzkKl6foNjyQuI3Knf5HAigalR%2BEwsIW9wUNIVwTmtrGhRz47ioZRhW23N3YxfZRO1ohkhpJJQzMuEd8BtHWvnpvMEkvKPRf9kVoTwWc4AjYPlo9ZFr%2FrPS7RnH1%2FZ%2BxcapHbBOwejj04PxdbYyNQVyWrl5HXDODHA%2BU5b%2BEegH93JAY4f6Uu%2Bx5BOXMSxR%2F27TVhoCAfndqNZ87c65fYz9LNz8cLvY7mR60wsXZgUtriKLkupyHbdmEJohKBu81AacPSFkacMJRFFR5pMsUmUO958d5ZDyTARF0lgqyBRB5dTCL3lssYAI4hQfC06BnYQTwuegBCzyW1LdLeoZHLpM8m3o7UuD4%2BsW8paSMOBOtTHnlowlfmJwAY6pgEr1tul5mRL4%2F%2FcccX5vSOFj4edk1QlxoAdJcU16gEk%2BtsQCVsfbkcmKr11E7sF%2BjIJ6TIE7oJB%2FFZywBY0SO5iUZGt6xS9VvvbKxcoMHo4XsOiI7GDeg7mQPQnY%2B3Tqd4qOVvgAJvK4PWJ5ZK3W7DOeOWGmIrOifzV8z1BrIwIZz5zDz4x5pTeeY0C8SbUfnzoR%2FrfxgHW0ZDo8M4NeVhUxrIy7MDx&X-Amz-Signature=f0074661b7b977082b91038cce16ada8cf2ad02c1af3b55d94053a1a85663887&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQGUDULF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXNSMje3738pgMCS4fVZ24U5UWUro%2BWSMa8zJSfYCoGAiBvnON94sdrbG8ICsSvwxkfJxZCCLqywrhmZXox3nQ28yr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMkq9T5h6k6DwtujPJKtwD4O%2FvhCHf5AStQr6M1xzl4iFaeOoQALjHCmGMUGiLsehphoAApfOeJFv6f7cAK3odau1qMhgEmeQV2mcIBJOAZgKROTdenvHzb49RMvqQ1RcaY3%2FwvuTR2NWA8N4Nao60g7tUt854F7iR2t%2BakW3pzt7yT1tqtsdOzaiwUJMm1qPfwIr4CAoWVwl4A03FUkySbU4HRmcWGRB5UGd6yIxP0ZjlUKmuokpymRk2vrv%2FAt5WCCXExXBQdsMUagYFk0hpOu7cxNtrhT%2FDXH9xTBhdGIUZMCpJ%2FB5Qu3ukDjK6ollT3VQ19IiO5fZq0ZAnfNv1cebiybSLS29%2BeBZYjHU3jaCV2I5zABavQaKSaNucEmoit7bM3aU5qB2IdKgy%2FfGsz8Cu4tH2el6CzyoivYKaBaa4S4404It2hXpCpJIZOSEnUZ2FFZR%2FHbTBGZkmAjHHg92tMf1NhVm3aO1EkrZgUlVMXXF9qbfrLE4Hg7ZeEwQCikzgKZoZ6xvYMReMEAPFG2OzYqLkNvm%2Bqd%2Bh9ET7LiJfVzrO4AKmzzsJYXgmpmAn4Qrg4beCOQ4WwbfRurA%2BN6%2BzCV2UXxawanWfZZrUdvx%2BSDyB9wW%2FHvGzz2GzdxqbcQKtPMRAqSNa0S4wkPmJwAY6pgGrqFqL5u4MJXGyUI1BOy1whwKoIGu%2BdQEvsPMZfz%2B%2FEbCxpwpgbuWchPOaMGK79Mvh79KTBchXwTDKhVPtixm3YxbDWegtzsX04K1gsq1TT%2FcQzQKihdNT5b5EUsiYGCL4h2wLVbWMs%2BEGZcD%2BI7Nca2M%2FtDqAhrXuZLqO3K0ciaXpV1Cvcj7fboBsf3eMTRg4U8zcpZH%2FGMi2%2FJo0OlFy9wtjU3FS&X-Amz-Signature=080e7eaae8c8ff58efa7d22a10af5c52002e911145c5c553eedf2f4a3bb09afd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
