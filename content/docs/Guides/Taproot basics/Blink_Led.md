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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SXJIMIP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTfzOSnbcS6Vx9m5HgeiW%2FDyGJV6Fjz3zb1GlgZvuw3QIgTnzhohcl%2FBPvhC2LKxJTxboymM14p%2BrjHfkLsznJcC8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZhfJNRkMlAUfHGYyrcA1R7qjlCaMiTMBbR%2BivqYgLh1EF0%2BqcK5CZAy%2FaeAAX8OqYvss6nYSfLd7UbdGeQx9%2FW%2FCcwrXKUS5j8mVksqlAZ08up4nf64vkbrQpByZnWPpGEr8yajiiOpE6IJo6iLBlTpQ3Mp7RxVzk7uvoQr55udWEtWKXo7OgaLHvmKrxZ3oEZGUlze1zL3QRKeTPKUovnFbaMoSZHzI4p56c7BSNu29TT7qXRLCAoi03Tcj9N2HeJcI7aPQE6QqeI6LzKfUVo8gMy0ykjvJ4tQiD29ZfcKOzIoVLg6xETmcVhk3kFf%2FkJmjpy7byOkcsgdUUvLBEBwrTUDlLl27H00aG3lOvUIuMfEBOOffyHhb4xqMzujVET2%2Fejr%2BCfzHb8k1xPQXyHdb%2BgkL7Myl6hCrqw0Cz3spgn6HoBi7%2FUXuuGf4n2soDWEeXOTVOtDPcbmW9oBTjaSrHSp13dH%2FOR5lrwCafvhviboNOYcKmPhHVKqKJkkz%2BxEjwguzFakKhJJz%2B5YQ%2BYKAOr%2Bz%2F6QdBZ7DPGQ1sMKvYdhzgFvQj08FCIwCYwoFKRKii5Dnysx5lbQEWKH4xzt9vug0%2Bfo1v%2FYCwvq8G%2BSyQAXjinLQWdYSyQF%2BhLaOv19jRCN7C%2BmqBMMOri4sEGOqUBJMImSeTfvat5rFgh%2Fsaulr2bgLy1cWTKXO1CBeWdyqWPAf8G8MPA0K2ZbUUW2a7A%2BCtXR7pU4yEZY5KJwgKG5DHkfMdqC6Iexkm2ApbcgiSyq6MPCVm8TObMmanY%2B5QW6fTafhyM2l%2FROHSnAYf0wiqAw0JyzF0bxphzJYmrEHJHaKDwCvd2Z5IYouTPwQ%2BF7SZKSH6NXVBpNbrRrzrk9NegC6Ug&X-Amz-Signature=05e539bb607cac527a101ee1e9bd58ddd6cb9bb3e1ea111f6c7f34afc2e91188&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DECJ3P5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQQgqzY6Bga0kql2ab7u0ILSV3r%2FNRotepu8MdNvxpwAiEArKo%2BpDwAl%2B9jc9LqO61%2FFni0orcj1HdEyNwUV4wMIuYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4UccDT2FbHM45QLircA8WMB3ADhoS2tObImebDk65abHgsCVfrYnPRG5jBE74V3jZgJxaqjkRwYNVvviRp8%2BCdfxXqz10N3dRnDMZbR9qIKGrTePdX03ksBGVSmq3b5XttTYtHdzHuq181JFvo0oNN6PulWiGcX1XXwxdbSr9XKkGWM2ng4P9dl71k%2FaxtBbQnzQ2Zd2G8bSCdFrI%2B8NZ9o56hfl%2FtdN5FmFkWWxBe4h8DoHQ6Yg27leieDCBS0njzKIqUU4KdCMEcuQwhXCv4QzT87aMMM1MdsOZ6ODo4tfy%2BqgvEKWs0jHX11Fcr2gR78hXn3SfBz6QzLWzShSmkdD3iIDhn99tC%2F2JmiZBKPnaMt%2FE77hFS2zTbvHngfX34vkii0jGxLmFxRPa7CkjK87WzrFJ7Ilunb%2BWrbFhHWC1vRc3GWmaX9lpFlW9A042%2BYPrfjlDz92y4I5Ftyw1SzN4%2FYArQDmMe%2B9cek4xD2cvup0VgWDU8yxfE%2Bw7LFUdz2yJHMvJ13g1pR%2BwM7OgyA2snxQFu44l0Ug2ZlEoVXnBUQ3pq5vrqYh%2BboCfFOoi3rMRIA603chseekKyHj4XtcpSpbhObqosZCulumnhtOmGHFQbPrqsm2YMDwdcrz%2FYRgGMFu7wmn%2BoMJrj4sEGOqUByHmlePARN2ARRr%2FzxApjpq%2FcMgMh2i0T4dZzNBAh9dL%2FXRK%2BrmgWoq2PYwyAMqcMTYMLjFLXNL4bGpqRBXOMi2JbYsWMMcx%2F%2BC5NwWgrypl5KkL1dduxA0mvFr9VeeUXiRFcY7jmPZWEqoteSZx6qFyXP6ROM9Hl7kGaXyLn%2FfUusTU4q4wEhaNG19dWXGPAHFkBPNG9%2F4VdZ9X0yARTdwY7Zjad&X-Amz-Signature=5c0969604442ae17b57da01fc8c25d2d31e9e8a3372cc1565de8558340a15a51&X-Amz-SignedHeaders=host&x-id=GetObject)

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
