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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FA6IJ6G%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuaH2PwQJU4kHxSLTQApBkBqnAUhowBGEdWQWl9Zzp8AiEA43li%2F4xH41mT%2F6iKO763rMRH0CPls9HpVKggE8F%2BD%2FUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcQsaoHW9JKPd2MZyrcA0S8AnbhP6IuDaGaRXQzweLZa%2FQnkf%2B43P95vts5eYtNLIY4Rtr%2FlJkNk%2BxJsGyh9uviMW3EVGsUFCDdF9xxI8kPT2RSE8%2FxCYDSHVO1si1wUSOLckudXZi9eajGdmNSglKM3XM5v9ULKVdHwGbUwaPjO0I4H1yyAXURKFl6%2Fs%2FkwIRxDQwE1%2BiRjokH7B25sfHu0bmQ9osLGt5MDO2Lqx5eBSRnrebVLbBYQwJ5ANLoJRFPvVUmN3b5u%2FHKosvPetK8UFHCFx3rtSkJb2TV56O6bgE6Vd9GUV2PlZuaifRLizLV3FPttG3aT%2BJvvHCtkE%2FWrKh9yMyenFI4g7BXoSK2N45nJ1lfwQ7scMlpUKQs0DvwezGQ7VFaDxhikfN9P71EDYGUmCQidPP9c0JSVmTElAd%2BRS7rB8Kbk4yBCcK7OM2SpDGJrlHr9bnwkJ%2BwIq3qU3WP%2FTPngE%2BjK%2BqtrwBbFFsmRK52FilYDqadOPD6ppdm4wRi019Owk8fhLzGjKsStzkvYVpKFQgMFLt9kAhBldNA68YwhGiDJ1AQ2Y7ikCC%2B5Bb%2FmYq9Bs2mWlFESSbe2K1kmswAUCf7qQWxISJ1w%2B7USNgMaHE76oJy2RHCXHnYLcccUowqZ4F9MNnB6b0GOqUBqHO57GmlurN0b7uNOPV46ffdYgtsv6tJGSv0hJSYiGTFhW0bSrRKrlESNGb4OY3IDSdkmH9paWRBNnn%2FMzZjcojhJm%2B9DmX8mr%2F%2Br8qpNvZR9w2mmBS4BgG75NZQcIULzfYR1qxzvRl3BMnL1j3a17legIrIk2pldIJ%2FpbHqOuevVT8D%2Be0jm66PQIWyorQSUK4cajgiaLnBpCMqL7O8ra4GuLc9&X-Amz-Signature=f1db2c1804998c5f277455e25d0c47b3d64cb09f9e9f777b15c8e24281c42e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMXYGQW7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcSee8jsyAJvQuKROaOC7SbOTiULeyaqfZsz26q73N1QIgH1QpNdFY54Pq24QoO36f2L%2BWleusqEei5cTPvi0wGlQqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGDAntZTFKHpUM%2FEyrcAxUZm88g%2B73SjmHrlmSpvj0MWVcvHQhsftFJ4SElvOyoe6Yb3CSJtevDzApwMDdp3F0AAc7TgJwa4t6uhLMR8uLq%2FiW8%2FzB3olj1WvVusTU2R4PpPMOudCCJqk7%2FlSDw5o5zEKKUr1fMfSeavuVI5TsfPFnt01ggvlhwY70NFYIwGJ6%2FfLgRp0nTb3%2BJcA6O9m7I3nnzu3ew8yTvf74gAW2TUDRU4WrlLx86HYdCbuh19GX25SZBBfCtBHGZ4WQ5TBEtvQ9cbpXWJ0FqGFAnNcFeZAhYveJAZQY3hKpfskBPs7nT4gFbnfpHrXljJdHGr51o0sNRXFNV3c1lNzbvTHvlDGujiD6h%2FENZz%2F8ooLu1QdICA2ay%2BXFuFy8pvUwfCJcg3KpVsykBKTfznatwqK2mUJvCICLKdcpcrFq5pGGUUhmHl3Bm7vfQEsCzA7dOx3G1%2FMwMNcGKryM36hmuJzOnL5cG5vXFJrxup5hS0LfOa3ogfA8T8lHHV1ppxpHX%2Bz3ZhlL1KagoPMnh1WWZQF1obTJf94QqtuN%2BeF%2Fj5suYLZxz2kbm5bvqbETy0iPXY3wWIMuGlyVjYgWc7p8QuvjtvzRhEuurtmdbWaxNwTJwy8dGV7%2Bj01hl0B3PMMuV6r0GOqUBEaD38IuOcZqZpOZHnmrqPtJF1wYDZ%2BoOUaUxrBRZss5Qxr0td5peWSoF35zCFVLzdW1qEvfEJDu1fOTelNH4BYPR9VEW%2BIkCHMID%2F8BsaELUGejB%2B%2BF9gyt1V87xyaKkDZd5aWzkGCM9c%2BgsCV3g8jnUM67CgGerv6k2izxEUaFzeRijJA9wXXJGso24duOScwMM%2B7%2FGdZc%2FeWSySoVgdf6ncg10&X-Amz-Signature=76e6df629dec786e6dfc3343b84069582b92b3ae684513bd22ae0b6c82e4c51e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
