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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y5BQ467%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIAw2mQ7wr0D6G3DzoLRwP1BcqzrqExZfG4hFbNCXNzy%2FAiEAm8hzo7Jim23IaLleMu6YEOwmAoJ9PhfHgKM%2Fdagu%2BrEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKK78oBlWaAICVewMyrcA6Vn%2BhTbEnzY1KddFA0WGWDo5djkogpCoGBcTOpYhdLfqtn8Vc6gLSNKcCWp9iPaJzooOJmJBzvSc4hP5lVZQpkH3kuZzfG8kfA1VVcGuRc3jWQgm7MplGIVQZ5XY3K8rIcNFgEfvxED5xJeFb0spL3e7ZS5aNzda9SxdKxsti2eqKP3%2BhnZxcvPCCXL65rwfJ7wEZJlE1VCXCMLTlktIh00lPi461c7LkimeKLU6UeRTu6mW43Cea24G8fN7fYtcuEcwIIm%2FsSNbpGSdKPR0xnjAZirsCJopg3EaS11kNbjHOpalX2qmtv1lYo9IBlqFbE0PL7s99mci5ufNL5KCNpKJnQ9Q7sHNLoakh8Jz8czGgXGC4%2BPXAtGkJUjoWsvwJmTGGKBvEA7Og%2BQDlO3D2esODsIJPUZpRnS22Z7S9VV8E7HCojp9sji3UFTuaboqu%2F8mJWknWziY2equH8JJvDK12S%2BRqEfNMUn%2FHu1QSZLsGHzJkaZ4k%2BYeDEHzqhcsCZJu9zeNx406jXWWUngn3KlRMqq85vf21kuWyYevN8GiVl6kIgfwOIWMdnoQtyC%2B%2FZoqKofahTiXrgUjgvETdDLL5yWQTt8EyaS4zLon0mhCTkwuuBcwFnlPa%2BWMObP5L8GOqUBmiCpLSid81%2BGO3hnfeA1AamYBVrS9fdjluVALk%2FA3n0N0HxapxKRJtLYhazm7EG%2BnRcZRMhEfyT3E%2BvLfsWLPcYYmOhza%2FSWTi2qyg97jFdD7sffAlZXm8txZxnt1j%2FDCZR9GuNNF2aaw1f0ZSXfZQptFP5bc5KbwVpJ7FEsWX%2BBdRLn%2F8ZDNPb7XBXCaj08fGE%2FhIqhSgTr7Yr6fgCoPRoHXd1h&X-Amz-Signature=840ba06aa6408d90d2a3c646e5635c5429c7fc88827065e2fac6c4add1257e74&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLR24QPC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBsPUuavu%2B4l%2FpM1tCvT7ze%2BeGKnziCuyMsTzuYEpbPBAiBaViZLLvxoxndVy0Pef%2BMajEIPJ5uIPcp0ApDGfhtjdCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYS9kM6MlzdIIlYomKtwDzVAljNh%2FEDuS%2F6YTiH71EEWVkMk3mmY4kQZE2GrkYgA5%2FPZocK9rxV%2FjbEaThljjj9PupJdFO4QLuKgapMp2EK3yFfb02X2cftl2kjKdZd%2BzPXTmHg4hlkHVA8HZF3%2Fx0Nc%2B9GsrMVuiHDzs6B4soupkCpyZczSsXKl%2BeD9d77P6%2Fx6jXoqoyOr2RW0bf32pDNaKW3HxAQQXnyUFmC7Cl3ypqpMg5GDx3ArZcMNZkbXIRrMoNBd7IBOIvU5%2BEB6K9vdshOAQzrqfG7EqGpSA9%2FQBEkHsQhlCw4EMheBGbTTg8Rp42tyJZ8ZShsy94JKGXd50aHLHVkLZbPnMa5F8frfNgcImPVqpJ4g7z8qGDc7ymXq9JgmPaRLHJHD%2FGqPHREAWNqt7ZRhUnzSztqCagTyWNiYI1Y2tbAj%2FA1ejhJPmAlKz4BzJ8ZEwvSZj2VERiDuvKGoYvhYuI%2FBkNGpxpbds2s0UTS3tIKjUXa%2B91b0lUL1EamXwso4J8LEAWjrzYKfXnQYMdOyVpaZ8FhTuaCD%2BZdvBcV5SMExsDi%2B5yx67o3IrAEfXO%2B8GOa8eKxOZ2na3lRvUhdCy1w74x0q9KsdDYaSHJVqVowSEZMbgVIgOMILq7k4xAKKpAvIwvdDkvwY6pgHp2SiQpXB2QZTg5zItNRqVK6MyLkGundS2XQ13yJvrizGUhkmlRpJkvsbpQhOgqpa6DJ78uxstxUM7czXGOwllD2sAWsqB0ACOoBBFO5oCNZPnoA4MN1rU%2BaMbxznPk9NGTOfKhIXkbphP2BWzXsWmbmMV9o%2FPuOWTu0GB1QBIOpNCXa9cK20sBIM7e1uKe1MIc97lUAYRFvxIHVYv9ldIsde%2FZ3NY&X-Amz-Signature=4ad99400de1eba9478bf2817918cfd1d37f6ecbd28a459d4f109d7e2c5cc59c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
