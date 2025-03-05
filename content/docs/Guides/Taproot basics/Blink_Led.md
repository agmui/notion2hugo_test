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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON4TH3L%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqq40zQKjqMnSW8%2Bo8sS9FhOPgnjfRtuart6Z%2B1hi5KQIhAM3S%2FCboaPIEMTBcvgyAwHKgJNQbBQ9qnZjDlDt8sHdQKv8DCBYQABoMNjM3NDIzMTgzODA1IgymAm14GCNYiSWB4ygq3APGOeNWJCd08JNa6kBq8Sa2%2BoUaiCXKTbA9ftSbum4nHhd3sq4IbuZXWjxQDne5172rbVgFk57oIMwkq7oZiP8gElGayKewajEtt2g7ilLC%2BDdorsFCUpJXUDN7Mfy1FgeJmVeuL5ZqZpgPz1x%2FAVLJDZxgZ1Ki7NIGe6dRwg88%2BXnHFmZ%2FsrZyawXyX0Hfq4wDkqPXUF8r4lVi457grzkPAtUBeH%2BKW4HaXLOK%2FX4ZeeAzBbfdMAA3bKH9%2B%2FSi8Bb3TPjsygxORjQsPpJx%2BM7czqCH2S0En%2BQfE5HCQtZdgidBIZFOIORH7MqfIbYJ9zPmL6gMUkx7Pzm%2F6XFhpliNcVnlwbbbFaxk%2Bw%2B6iXa6FQnKqCaCgX%2BaMxwgmCa2%2B9tMhuzKPGPYsad82OeU%2B2cpwQkE0o5yZiuUmwqVig3GisrfV3NFfLFKjo1nVzkuf%2FnlO4e879sjYn8sT%2F0dUS%2FZrWL4nvFhpOzxbs3uEYcVRkQObBcqta8Tdkz%2FiPOeFmLSf3Yc3Shs5zEe3govb%2BCYEjfE1q6z5ck6rO1rIGuTjOPvCW6NJtKU84IngVnyvaQwGS3XU7gAOLL6kVzzrgY3Rb%2FtPGtu0RpX%2F4CNCeNMyA%2BCeWffuli33TBCTjDJlqG%2BBjqkATMtsa6njnvp20pKKqXZzVc5BixuU1c3gK4161LtyIiXxUw7fEUynbCkIPiAJNd6cOFx5Kiao7fsY01shWTL%2FojGwhguahgZruDmEEgL%2FZCqEKtjkNCUq2kiUFGfmGwZ0A%2BqrwVhLYEZKYfybbSp8XAYFvDhfGVF%2BS1D%2FGSVKDlKOQy7DR0LxLz6NqphoBKe7aVyiayDMkynCGa8TRWjADzj9A5d&X-Amz-Signature=22ae1d830f04fec97e45befa363f84119793049401864e0420a56578c5613499&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNY2RXRF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BWhggZMqLC%2Bt05FYSEp0lmpCwL8zkjq8eRNbnCIRFbQIgeL3xARZ2rPqlts2c7TUy82CitH0nFPEGOP2UjNTyb6gq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNJdY5XbqZbmG3zvlircA4E62JxWT9LiMctgsEPrPKBdRoz5PdZZZzCDz1GPYfH6vcBOMMntzatZ6W%2FNaFfuW0PbO9DkCmLVBFeu1OVBNig47ytISE9tOTLnenuBLIVi6IF6aQH%2BHX5GV7Bc1hbPtVDussU1YSjoCn9iNr2KHTcmiprAwrOi6KFWE26tLYXTF1CWjfeg7jyEeS9cF3tfCq1jZ5kefnklDMxw7f%2FuGp%2B8LfkhBExpRChGmwrVP5sdRywiuRbu7DxQ%2BrK%2BANxFIKqmehFFPsiqpJQI7OV5DoP5LkT%2B5d3oh%2FHk8OARHTswtOmGnT%2BqF9uivYqtNTaivtyUnFWrVFfbRipBQCE4BdX%2FHspqMOmVjdVAOGE954UCF1WYmLdFqg%2BetOoGSvv7L4HMGufOLAKC8DWUC801u%2BxC6lDJ8Dn0KOkIci25ci4Wf%2BVuT3UrJHXkqpsvGiwj1p%2FBWF5Nxug23FALgKwNrGFKgyeotpbkNJ8v1qdIXlMen6JjFryFpuA8rK8ZJYw7wxuuzcjVyQDG9nanAbdADamtOiqhOU0iTHVwf2BrnuuxGatbpxABYRb3LMCYsyScF6EhtPhuh%2FieOIM87ktZMmL%2F8S1BcrQdj3TEMhQEZe57My75rnk6FfYTluz6MOSVob4GOqUBCRdTOPcvekxfERyPS4htmmOQYRGNv8m0SoQO7p%2Be33chDgt78Q7ez%2BdxhGTYrouUOleCh%2FS6aGS1T9C0QpNZ5KcF1Ah22nFwYd5auK%2BEn1lmSgothyZNPGow3Ii9K8%2B9rfm%2BJ%2B8fXZ5l%2BM9470O2FGf5ziibl6Ay5wXXdJvgLcobIWwZ2vexjRXYcfNW8OS5ayZS7fgSobE5l1MosJFbvuim%2FoJg&X-Amz-Signature=211d41de73ee3e080bf437d6f039e5781fb6f4555ab5ba86f340951f0cda746f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
