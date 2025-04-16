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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GKAPP4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzlu9n%2BBad82CzmNf7A%2Btl5Ajbk0BAZQF9%2F5iKhlFm3wIhAPUQUzyIJrd33L9pdlLgDh09ix4OigAvHMn0hf4c7AbIKv8DCEEQABoMNjM3NDIzMTgzODA1IgznnD2wtuKX84P79mAq3AO48eCXnAWIsc%2BvV6ubADqZel2szma3CcJu4c7FSE%2BX839Z%2BwM3e4iJUXxhVj1GWzBsdFTLx11s%2B8gmZ3nFi%2FubZpXULc7d1242pf17vqWuWraFLXNL7GlEoTNaVGMfZTvz4TOBGZFEk6aAwgBgpNrvPAnKUdXqnfFtRzEU4cDM2v8Vao4zgP0Knp1xQhWlDpHJ7guQAQWNxFiBimSncnmAJZvJpT4bOSO5WuHX0Gqvl6yW2kjG35ejD7uvGqpvB7OcVh%2BTdSMkqW0Hqlvbj72FY76xW6TkCjaDRPKrdECj2HIODS7yooxGK%2B53ui8MWnBEk1UGh6H9%2BZc%2FIljjZolVMZISnrrfQ7pGqcQm6mmq61LW%2BmoB2VEwEn%2Bw0dGjrpQ7LbtDq8mSsWdIaVefxX4VzuDwfYJ6ZKnj3%2FIu0g4jdseSwbwUrkaR3234CLzNF9Idt%2FJeeNmjXBsClclLtzQz2T8940Uldf8CBgebvannLssBZHJEu1O1DLGezCJ5PjC%2B28krnlZS4uktRlidxzZN9PWXEvmJskOb7kfzX4ILsu9%2Beqe7nmbCqx0SCxb9MMNPzhz9LrXkSLK6Agsa0O4cUMNDWY1nnmWq73DrxZYJvlW9J48c3p3ggeHURDCfwP2%2FBjqkAZLow4kCCh00Xrh9WYsOXbJ4QvXvBTNFQ1QJek2AQRVyNUtzAAyHI7tlhVFabVv1n%2BLLFFX89BHNYc9r2JRBKRsCKVLwVF0zWW9e8Ac42R2IbXLKzQMhXZ1H98uVWR48ddy5HIrXkkxIq2GFPwTxd8pI5SwHVh58yrcjZwZ7mvSOZeGHBuC2wTKcCYsWF%2FSkKXCwc0BwoRXpQ09xCgM38PWcnG1K&X-Amz-Signature=a8b43c94a03603cf6daf3ca27fd3a409c867cb7dcc7b10df53210176f6743b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV2KL4PQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWeTiFFWucCe410c3d%2BVqCxQrEOadrh8J9jzcT9XGR6AIhALljvQGNa05yHSZZ6x0W1npauPWjXP5cYF4NnIvfF%2Ft6Kv8DCEEQABoMNjM3NDIzMTgzODA1IgzBcvj44aK7bwJ5KVIq3APKflvAadd3qJqSmg6rB6a9O7QJ9FEDsKQK54rIhJWKN8yaPgYvOe9h4kALGlu1KqRIMSILi7kgbPOxhn3xITIpkoSY75yHc4EHVc1cCB3KxL38C4RpG24ES3%2B%2FOPmLfwLecOUuZYZOG7cuO98HeNDu9FkjxUm3rB4ixv5BrUYK9A8kolhovTnd0mBSdLNSIG8uMnwhWcexCzWPfxTXAdi8PSkb6wsqT64OJUjJeKLaT79oPNUuwFZVhUIk7N1ygtm1ITG%2BH2cZ6GAAAjrSAhztCnw8ovr8y3J4eJpr%2FMkgoCzfOdTWk0kQLA45lIj0xrQE8bxcAkBpabR%2BJnzLo3LalGM92Y69%2F4vLr4QQ6UG9aN3X3XMN92vFs4r034gHgGPMSx5Lg2zdUGep0%2FFGk9sCS89qfIA%2F9CHfFmJvomauUI4ZFo3hN34M3exbuBloPly4%2FYpa81jCo25lZTJAc9NmP29wMfu0SIwocYY0zSwU5SKriO35yuCxi4phy5CTZxweWwE7ip15X652eUio%2FMCIkyAvCSTfYcPAWPHSxK%2BR5wUq2KmJj94zjEAzV6fqCnRbbA7Kyz90CqwECyRWqsRS0QNMYUp2GLrkYYWOGsGOPho0IKazFXEuS1TAFDCZwP2%2FBjqkASJOH%2B43IEKlypKnYWTeGOdk6kthb%2FUIJBdabLKWIlGXfeSpr3n8ZaL7H%2FUTvHkCL35EQ%2FYRikCegC%2BKgLjv4FLq5bRTfTolqiZwUqL34Vci0K8dNuLRaLxBF%2BFnKu7YrSO2evLrBMd23sGinjZpejzOV2xnshMIS48taVW62pACmtTy7%2FSOsnNnqIclHh7AmuO%2B%2FlQWrenNUTzRcuZCz7SHzXKm&X-Amz-Signature=096ed4129441f2384dc846ffe8158d308c7f4f8b935a1a255d9fd5d34e9a9c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
