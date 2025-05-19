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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HQUJCM2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxJ1a46%2F633fAwUbciVXT7hUwxc8YESzZ3GT%2B9talAfAiEAlzylv6uu0IjjwE%2BqPb9e2xEbLwbvGh2g8WnlhxJidKsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHI4slj52ONGPiRszSrcAz%2BB2TaLsgk62kArORio2ORAKg2yPpvFVza7euPVJpIMzSC82jcBUOqjS2xWt4nPRoc9IjF9cTtoUk0tRbh8cFpFRP9m4y%2BSwWt6hKOiytiXJCgp5Y%2F9uEoAPxNFR7WLzv0ArEUyy3GOi9YonOBR64IXBiZG88t89ell1YXUGM31LnlTfPLnkgByP6cH4h2o1%2FvVx7LJ9fyLnLj4KE5ZTogGDi%2Fa1uIr27N0IkWK09rcnorNfVhIWUA9R25GOzkeUA6eQMhxi26EIH3t65VTsQYf%2FR55IbIAqvvO4tBTqJTdKrcMKMFknMMidRLWt9LTQKlR8wwKdQu6sWwUKzI%2B6fz0E89KBUdzfuSE1541ntI1DodD06K0A2%2Bq77h54UhTKuUd6BRKWhwjePmkZ42s1kVJ2hGTDwGI9BkjYMb0ZwN9rKZrE9jXzinhVqcenpfK8VDZk06uFtPPXvWDoYaWj0dpMXSok4Uj3jnMviLjUBezJ8ECw9uYf%2BKEtsQ%2BpFaoXhK9Qoo1ava91rm5o9mPZQhGduiBniae9pRrsvM%2FLf7cT%2BgKxMsihvnClqyx3zYIVdg5fIQryGW54oesamypFnLlbW3ZPXo1%2FwMSEzN4%2BF7BWCAnSxoV6rPN%2F68UMNjircEGOqUBvj9R3myzNr4E9OydpcB6DNJx66mfRm1jwcHnc5mcc%2FCq6WF9XRP2nVxUDBx3a4sa0AB%2BgaDPIcCouFqYlEmLdTGSqhP%2BiIaolWIXudX9pz3AXFWN26Kv9So6Q39n3vu1q9fF%2FjCU%2F6O2dPb1OTFne50cXC7XrpEpc%2BDyHj42sNn0AKjUlyeaxjNz563otrf1%2FuDz41vln45GyOTnFA1pI9QX0mKn&X-Amz-Signature=96c2d305e3ad41e9851effadcc44d8d3e47e704f65a4442226ba1c2788821141&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF4QX5XA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2RSpBG77t4mFbZ9Wae%2BJvzW8klxZ0LWhk%2BVSCh5KO5AiA83Ra3Mbw%2BbFWqYesgCsk7%2FvcRCozhrmDUc7b%2BPZOb0CqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8M13gtRoe11JQ9N5KtwDDD%2FewaWtjdr3dX5RulnMnwXjPtfrfo5VX1nedDjteh84WKSfqO1iOLGeRo2iDVfk%2FCJDPHR4zuWK31tsRkS6rNqFZ7emRN8xUNHHILYOqBy2eunmxtWPMy410XWeKi2E08HKutguMypPVeJ%2F8WxXnscvSAkuqasT0qZWgykpNHL7MI1bViD%2F3uqLI78y4eCGFMZ9ExszZppETVUWCCDd1La%2Ff8QITgHECDNTsJeDDy84Uu9BFC9rLgA9Y6Ym9lS7TnvyhyeYWwEl3PufXC4sxsYmBpIaPH7t6LrknjKE7EuYW9aqKarufz1f3WSLhnnX5dylKxaeAwa%2FFTcBKF6ukolUonWCYSyGcwzECtE4Rc6wRYcP%2F1cZErcoq3FNdIo1zwM9hoYRjAKjBThhRnTgXo6hqNKXhal2kLusZrqzoS10ObP5TrhElAsCcTxaZBKDLzQWUGJQDv7PNCw8ZhfQV9M3IjJNvYpa2a%2BS6lt%2BYgnIRiO33srRwa58vq9KF2OS9R13%2Fr0RSPWM2cwgqnU%2Bdcg%2Bl0myMBzaTM4%2FxxfMnJZE7vB3OeGui2jFwF2Zi3xkpCRFdHXP67OVbDtdyJoXDrqIWYPZtd%2F%2BR0YhR3FYXgtjhKB7C0OP1gRIj5ww%2BeGtwQY6pgEvCHUe2T3gCoTBkZI0BWSbkcOuPhsgtUhXF3WooU9hQ5jaO%2FG6K2WBpk7LgQcvuteaIrtiuFCjKuhqOJsEqo9MOLpoJY5AorbuLDng4Nd8GSVphQuJ2x%2FHtXZwHXuUSyd%2B3Toy2Jzx9ZL%2FjhSBkW9P%2BVrMgE3APWqiK3TprwIKt6kXoIPMfMMhPt4ZhIpl2m3u7vnA7rFuLGQskxNUneT4VlXJIaSQ&X-Amz-Signature=841e94dd3e459844908904afa5c0c35bcb6bf64fa3adf74faef7866630033b58&X-Amz-SignedHeaders=host&x-id=GetObject)

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
