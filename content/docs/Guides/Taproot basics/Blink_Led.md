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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTLOR47%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDakvkZoWvwv1K71kxzBIt5yOMH06dALA4K%2FyXlKMfJaAiEA7ID5xRBe92qqGbcm0OrUMgtqzKHsjPuBCvB2hVIi48oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBv49q4Uon9q3XKPUyrcA%2FNlfWqvE%2FODWQ67FFTbxKe%2FtwnFkEI%2BvvzVPt5r2FSzSXOC7r49gowQHoWhEHZbCu20bI7JiVV7yfhdfcVXR%2BpL7yq%2BJGz%2BH5naITQWFO2rURLfdafrfg6RKy5alsHAjoox6w3LbJbv%2FfvkV2o%2BL4rDHZCH%2Fh4kTebsKs1E5Er9j%2BDeNr6AvHXhnM%2BMw8vD8h7VKA5OhBDHjzzmT4Ia4wxBoXlMgQvzqmno5QBs6s92gSlBPGH6j5m2dl5wkDRqaUSv6J8GNSDoH%2Bt8R0NMlsCXVTksuWkvtkRvzNrrDiAJyRB4qfzZKI4%2FjGPIOtI2rX%2BlslIswhDNIEIRHCcS9yq2UDrxC9PoINAlIbNAS724AA2XtdIYH%2BHF8og2mz%2FO62RBa34a7HxYnuFRhED2kcpFG56vdvd5J3e%2BFJbshkntfKME9pUm6Qu6NshmSEbYWFzbFE77m00VTuTcSF4dG62RIeOuQRhbuFK1CQB1CIOK78U1dw9o39%2B%2FFg9%2FGrlS9n0OKlTcCIWmUScFG0t0LGEJAw5EAWl%2FnS6d1CHbj5A6Hxpr5%2Bcdobvib4RXfciFbDTZWge8CTWVMxfxz2vQcSjHpBSGNnC6eAUY%2FIpAkSbBqmZilnJZB%2FaLL%2Fg9MMK78b8GOqUBMVyN%2FUDL%2BsxUnLwUX3v%2FPPtbaE6vLG186sQlIiqCveFdWF6QASVVukz4iJ%2FnTXFZ0PkneH0CyPB8FewD%2Bq63YlPxA%2BeF%2BfXsYCboKZfyXKvQwpRDTdDslbncMDtvBv9M4g9Qm8SxsMYOWlGSGt%2B7Y1vY0TOTB5iVM8U2USFmqaJ3v%2BFCYll73%2F1DcQ4RhJx4iCODPe8EidEuxJkHIZI7ZGaOWyfx&X-Amz-Signature=040e2666a89557bd2faa42a9dd5e26b6f6c19db62edc498960d1ea7b9653571f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPSTF45L%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuWjgn%2F%2FJR27lIFL0LmjPI%2BYRjZ9e%2BX00gzlw7hqzbKAiEAyeMdnh2P%2F48MOwARczSv077h%2FQp%2FQqT7emhjbkS2ah8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl4j%2BfKkuHnxI3VFyrcAwzcRPTB2F%2BabwsXTRFUSC87m3Fz592Xadrd%2Busv4LbPrOq60aa9Pv6VaHSGiGyiRw8pAFbY94%2F2VEctmJ25C5Uz09kNL311tos%2BZGvi93mvPLOYq9ye9XbRRKQcEBvenacTQHL6AvLdSzdiIrl4u%2FJSc6hjLa1EyitVfHzlQQQJ%2BA5qZ6iWJu2R%2BBgsLQ1zl1jVsrYh23UbHabMTJTUxfE%2FuTeBzWSls%2BVepk1l77wXJOxHBBw8s208yDhs87phM6loxSw3%2BYsqh8VFjPh8PVeyyzW%2FQY5zI2huGCtT6dLGifHYChvGDdq2lUjhE1zhfsRIZVR3clHaqgSKkDfRuM%2BiIgzqwYLauVH7IHhkzsxIuGifemIc8P3kW0EDQcuY9cgJrgA9fv3pHtD0ad1y40p8AI7uPOZttTv29FkRtlJI86WJhTxeMFkL04Jk6COCRECgj7wB4xxdi4GddNuj%2BSe0xWiAv9H3XwchjL9vu4h6TRDtsMCzVD8OL2T4o8FhIKUGDwdDHe2Ga5laASt2HaGgl%2BB7xOcyN%2F%2B9w6MEt0b4Z1P1jVdP2uhY5x6ajwZM77DQKwMk0%2B2yvORTbr%2B%2BBo6Sw8sipx7%2B%2FlTw68A28DKK9wPf%2FrcWyN73T0WRMN258b8GOqUB1nIlaaJI2UMKOx9TC9Y3BxJ%2BJ6Iidz8WZJWHVN%2FajHB6UIlsLzppt5RRfonrfQu4%2BjQDUxWRUkauekMdoYgMuKC2qbDQb1PeEveqIsq7Go75J8btlRu4PIm29GDr5OcU1Oe6wrGXJejU1kfKzxqbQav8pmmOaOi0YRIjdFbSZQJiTNVrQKm%2Bzl99kiNR2xXiyGLkxR7FcA3%2FGxqEf4pVvFyI2nIH&X-Amz-Signature=ea85c3427d21ec80d92b326bcb140d2808cb176f21c5368ce0c5e548eb766083&X-Amz-SignedHeaders=host&x-id=GetObject)

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
