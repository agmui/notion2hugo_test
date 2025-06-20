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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JAYUCI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC536HWrPxBzsDE%2FI1gDRoA%2BnHxF5vDGKhv8P7giyc96AIgAwdBZspX3h9%2B8x2BsbX7ChoOz45eAyrISX%2Bxb488ugsqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCR2xc%2Bl9yUKKlbroCrcAxoawoRwaKrVda6%2FzXzRnfbaprGjv4DqAWZKL6n2arEmiaptXmOfCAACgu9V7G%2BLUI%2Bvg0AmTiPzUWULptACByi0eeoz0%2BTKWvQsGdx8aVfsUXAPDrpETcb%2B3EGyqx%2FXbXlR%2BRGEmcvmKJ0yZm4n4dWEwNLn1pLbN1jt9HV3IrKzy68zgxDIpRsZggvfprEGNxFsKioxsPUlo2HrK9zkLZ1ks5hbcFJ4LaCYeRblSDbrqfTyjfvlZ0BB4WbKS3pbf3QoG2x%2BmDhOFZpT%2FC7K%2Bb7wfj2Op%2F7veR0Zp8gdbR%2FZwg4CQjXzo7ImAWN%2BJxGleN2pBR%2FBVsBVOIACue%2BcpdXLGbq7mwCX0IHic5yXt2LGB4o8LCJvRWlK10w3gnJbQOnr%2BYtHp8gY48TgsVqx9Jy1mR4i2yQZJocWA3CWSfYi52QhuSPqMfHaaKlLp8%2FFRzuHpXlgWqyz0GPiz8cCWdCCwr2XERnTF85VQgNhbCb9AZIDktgBf0Lwj13BORfydqzUG7HsIFAUf%2FIhY0KkmcXgSQ5armCTvoha2lmrsYKSSoXCys7Vob7ONUPFcR7nUVZbZADpmOO3jneN%2F96GZ%2FS6a%2FGz35YdAdWT5jnkYNbk2eSwKJYk2%2Fqwt8sEMP%2By1sIGOqUB0QwHo2NescaXKC72eGmpvCMXzSa2%2FwF%2F1PA1kvE89W%2Byp35GzbUQBQAalXx2%2BpCsgTyMApGBx3c7bqphu%2F9kCzMdIhYkf3NUuUlDQ8MgiQjsBQgzYq5n6z7IRDvxLMQYccGso%2BgJagULzHmZU1O01hGCuNl66QJE48kRb66HGN1Z%2BAb%2Bm5EbCQidu6vP8muA5Lo%2BXXUOQ9qzW4mF1yAXEoAoTvYO&X-Amz-Signature=7675e3de2892c2c749adbf17bdbac0b9eae846facdbdbd9501de5901080ae061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK5KDGAS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICP3kcntDeLpztFNyCmM%2B%2FuA6wB5whP7roPwxSgBynsqAiEA5RfKJCVGqhQBNKV7nc7yK61frBIiaZV%2F9R1CqHc6%2BoYqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMYKOSTU6rmhobNECrcAzNPMQHnZGH8nELQXnP0OgnwMcW1oDO4tGwbh7rEvf3T22g75N8dhwFEIO9v2ooFYWAY8hNE9ky8ssMubJ6GVBMo9Kn3HIJs72U%2Bg%2BIm9WJVg3T5R9BTOTG70c7mFx2k9Aii1kl%2BqDiM57aHQ8aBnBWl%2BwqjII5kDcoOJrX3hZ%2BacApmHZtat1bMr6jkeznCo3sWEUyQJCjbgl%2B5dP9Vu3ZPglWz4HcFjOjuLnO0t63WdBX4hNJ93kU%2BkOFF96f%2Bhle1Yb9bVRy9CHxnIbgzGPMm%2BBJS%2Fz4CvJqg21TrF8sp8rq5wqpoYKjIu31TE%2BlsHoncqpPq0JUNygCaFXiVngcTH%2BbvsT%2FyRUEno%2BvHznByNQOIAR2Nvfmmav0Dy%2BDjoAxeEiWiLp6Q%2B8Zf%2B%2BvhR2zt1rDtO0J8u0r2%2F5BCAUNGGFUd0YTV9wvY6hFhLgA37JxpcPdwTx%2FYsvIQ1k6Gkaje%2BaH8DlQ4UVB1VKoFJjzpm0250mZYdiWs757QwPDVhmLPsbaPiyOm9KzFVpy7HUPivbczHZxeFP1ELgx5Ji7No0hPbu%2BhlykIPsRDJ%2BztHFMh9W99l7EXb9eJ4JD04q4jldo2o856REzok5qu%2BjNCBCeULu2TP4Pc2LBOMLS01sIGOqUBzun%2BgrF5IWyM9PEbgxJpbY8vPBEkl8w37hPwqgd5BEjfRIb00pTH0bKSUEFEV9y3dJVAu5DSCSHTxezf04ogGz%2BP9GDwKjd9WkcxQvugfMAaPYjeuIOn2jhSChn2xSCaS7zdTOI1Aux%2Fdzn4gJJExGR9WIVlGiqkCC%2BA4vXYBc3x4OJ4Tj6QY0MSPBkDuEnZpgIdk%2BPHsCsVC7JHaP2HQjtx4txr&X-Amz-Signature=b058de2d2ee1c9152d14ab1dc0aaf0b2680708c8233420921e97a27d041f72f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
