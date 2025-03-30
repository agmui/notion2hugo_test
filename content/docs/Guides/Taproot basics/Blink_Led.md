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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LWQYJWL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCEHPtuGr610fDnqVNqO1%2FgR433UZuBM4bfDEgHsrYE7wIhAM0KKzxk8QslR2VAND%2BNyJcAgu6MtjvgoIKaH4HhuGAtKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyg2ZdTeYclr2OpEIIq3AP70%2BbId4IgSY%2BRne%2F21YzH5hJkOfAzPQFZEZSqnH5wb0nl%2BtXAhz5pzkPWbOs%2Ftv2VhNkB%2Bh5vYAVeJRpvcZS26L9%2BLzZu8rNWtjjjpl4ONI7gz1WLPFnH35LN84xGNRJNN7hhDF7oOYW3nAS2l7XTtX8SHd%2BqAXKC9RnwMSkUhUnjwb9EibA%2BqKfqFeRWjXwH8ztGIQInhmmKlRIIKApFB%2F9%2Bx2su9%2FTcExDZkorvByZkKn2AMOp5YCEXNeN0CL%2FcrdvxZ%2BHI90hvcgp3sBOlMMhI8XF%2FN4k7nNP9ZfrvOUaqR3yzvzbmP7QWJJJNlt2JTe4O9shhe8VhrYanzsp9QyOaBm8rlZ9DX3H%2FUb9hjNiTLeC9K8wPmyM9kwYAidxDjOCyoDuqqLyeSElBnWcrjTgYZqa6mQayWkjNdkT5PtTCr5FVPgGaHgiu9Zndcs0zO1evmf3GHWeUDLu6aKu91JyBAJkLnRLlWUNM3lbi0nvcHMr%2BvHYRiLTyLCA6HVRu2%2FtfjGYeRxf%2BnvBe7acYPBfCuSho70T5eBH7iBkO1exbP%2F%2B6SJ7rmM1sTWy6OIJohhDj66codHyLt8L%2FSFZXwy3jd%2FZnJscwy7IlFaQCYTAzr%2FGci%2F4KQIcU5zCdjKW%2FBjqkAdIsyNkzrSEdZR7e9QJBVF%2Fqnb%2Bb3a26BPS2Ok3ODIZDVdG026MEZoRJ6M04BjME19AaY1h5NqTTwNkDwCibiPnLQKz2jW37OgJ8YQMBXv6VUAmvMj0O0pK69Rrx0YgCKVYH46q7%2FMb8KTblYKH0HbAu8ALtb%2BHRlbhZl3Rr7mA28HnDABb4fnVkGirae0Q4gMwXYI4c5olIkbaZiW5KT0sI7UOI&X-Amz-Signature=87493b99cc5b85da37eef2bb6f61d5d76039a60ebd7b35348616b3d7b79e4786&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSY2RXQY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH5T03ngLLBB6Kc6wMB2y2%2BpTpTkKjVhQ9WfWktcC%2F2UAiAlWTuXzhH8NXLa5x%2F2NsGTJwh4fvZx2kXhBN116z%2FPnCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3F78WDWD92OL2VNxKtwDW1cMt2jlBszZpcQfcNYx553yTjEueVXNDSG9vKmsXXw%2F0SfLSUrgmpsiVHaPpZkrzyvZSi6%2BTDLLzioUVUVT%2Fnn6yXaUcrrSpwOBnJQ3R%2Fq8WeinUqs4s7HEHENExJQ%2FvxspUK33luimyEYeKDedSMlN%2Fb1MppxbUb6Y%2BQ%2BPAP2yz90%2FzY1cPb%2FCXRtd8lLKlZDWS98%2BFozJCFyQsGPDweexOa5Hmeutqn9MusaKHsJMIyHIURY50BXgLDEQj%2Bpcq64xe4u8GLKwdmzfPxPgAGBthPTzMya6UnwHtUJStroMmXd13qomE7avCYPKOVlKuUXlGX4B16r8Q81zBFv3uMoTRaVOVYQ%2F9yoHQNDnXUnl9KujswbXqWQ4hIouBYwcjm89StuQuGI8Wx3VgeSpAo3eHRcfEoJ7vzpc3tIV5Y2LiYtVrNxQ6T9m1dFmhm8TjmZzBMdPNefrMlWH70hRIDxlubKI%2FDbeedkYEEFsOO%2BYRDjzEF%2BmeIWoGBvPrOrxRLUOwefU8Vc7Q%2BCG7chwxclNDE2MZn7mN9RTqiSorttYZRHKX%2FxbwD3ejPhSfcd7vg5SkHt8TFaLudTIhmgM3hSEed98pE8eDB5cIL6eqMTV9eTLJz0%2BO6NQp0Mw04ulvwY6pgFV0BVgjD7wrSrcC4i3OHoaCJ09ee1dVgMfxu3x%2FgwE7vzyraIhpiQf2l6Talzr56t00mTGD1v8WWOaOyVQu4UJW%2BHbr4cgF2nldA3CwMtvpCnKBSXKDphV2zZUfgvt6kxo6ENxlMzjkCJwJ13Z10hwiO8AwywznlsZoDepOZowfdEp%2FCra1GXdfPt3EpAniGqfpTLO%2F34rXaNrZEa%2Fr%2FyqQIh8G26K&X-Amz-Signature=5f18142afd3a3de697fba69eaaacf542079728ab2c1de9e1143f289c02adf13d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
