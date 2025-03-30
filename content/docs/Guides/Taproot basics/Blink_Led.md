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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQSWSTDA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAIv2caCJMBOvswep7wdFv1Qh3e14Bwoa3SDxesmiys0AiEAoAQp1DnmXmqvKR1nVgVONsQIugSCvDER6iX0879YvocqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvzqUS8lP4RWNatRyrcA%2BVPDqjaYxajCujp2tXhzgh3FUFiUY8XRXus2D6EBt98PbMSlsBCHtvsUtDaJLk2ZNBeEZzQfdBNG74nFT8CncLNaXPYer6LLgagGA%2BQa6NpRyZMS%2FVM3wS1MoXVQd036ICzYeBCwyXH4g5ow34vsbS0iraS8XZPOevUj0YRom4Bl8EamZJLyixrqKyuhx6f9xRWU7FL5AfkLMT9goQKBPKbsHlCEe4IIlSWB3XZWzTWEzAjQhceOaVBw1h%2BN9NtCpRoHe1fHpQq7H8GqBFQt97mJdKYwZ2NY6KlrdtV6mFkaNSe%2F6lP4lWzZxaUFDGzZYIc9gSbzJ%2FU6%2Bpa5Xb7cMa6Nu3UlGwCzV7XhiI9yj4oq5ukhpyeg1lXMwGZn7adQr6reUnUdTWL%2FzkX8L6IKLm6ugGLhl8wTvpz5Ul6cvzWuF7szRmipKLBuqHppgXQiu%2BQpuk8spVn5dQ3w1KzLRoyBlcVhmp1KaBlgB6SuXUKmCPCAZO%2F9p%2F0VFke18UdA9YUz7h%2F%2BB8Ox9Sb%2Fu36A7BK93LmrqG4UuqVP1chmSG3Ad57YpW2JqFbj5eUvqm7f1DQoH2C1rsUG03phpt4bQiOu1KzQwIny%2F7CPnFF2j4vNnXUBSEyodva%2BQewMPT9ob8GOqUB0JINvhIBVbaA6CDcxdAbDmwdTV8y53ryEFSlLLTaKFElQZxoLKJoBlyZ%2FBVGvUbjDFW3jcGSvHKt3xhFV9t7XuvPkWfZ5emJ7Jlmkhn0sTwIPpd4VJMviA5RKQoWkn7Ez2wZXconRHHhHfi%2Fiy9tg6yq3EhGJ4v3Z%2F7TfYwspaF27nlG88BT49O6UcZpslVctNB8jGrcdwfojJEXHBpbHx1nKPB7&X-Amz-Signature=7bdb3bbe33db0cfe12078528134b974825b83a6e785fd23205ae7801840d76c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6DRPQN3%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD%2Bny6dGU7wUOlBGMMZ%2B4bCTzyyUqSjOWRxMUaVx0vLCAIhAPSI7I8Pvk%2Fo8UpZ9xy1SoFOYnSgAQVIsmGQnzYTwl61KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBZyBNRBVo%2BksnWNYq3AM84u4O7zdHRb1LtozZRbnJn541s4qKWI81rkQq0nPtsWCG5cOmSYcAPh2sWCm0uMn6U%2Bimw1gnEh7ofNT8FQJCgVTaMl4gA%2BUgT8K26pEef%2F5qAvoZSHceaDm6B%2FgVFFyTECxBXjt1I4RYH5Hr%2B3ZdjITmy1OofkxDoTscJpYg3WjXtc1TeKXRbVRqbis8oqZhZTLwwE45e2I4ZBOV3zldz77OXcxvDijK7ouVuTpzA7%2B47cZFkh%2BOFZo0YiXExGmPiymh53a0pewpOnaJVFs1RRbo8B6yBwKiDOTTk%2FTAoo5HdTAYKYSTd%2BiDYxzExXz1WsJ3ToGHKJEHQ42i%2B5y8dOV4BEqsKynbznmVo1Gp2bfRPyKJDI3l%2F8F3KwKv8xJ3MjA8GmvIJH602L1zd8pI9ldqntQtrvNyIJlNN37cDs2cYxzSWK1pFZQN%2BFa5fgxFc2IoDyFEc1i6AK8QUhezaczPGnfk5j9NuS%2F9k1Iys0By5qUV3R7pT687t9V5j%2FLAlwFkGaG4uaKSi%2FOnEnNiKIs%2FX1GGQ6uiUVXeLygIPDYt5KzKAVIzZ4G9GIEemb%2Bl6OjgqlMOZ5VrRPY3MC1WtzwdZpm38oMYR2VKVcRGtur%2F7QQ6V5CPD9JFADDY%2FqG%2FBjqkAaKeztnIDsTRF7Se7rX%2BdMb2Jppb%2BsofocWKGZhCnBblFOgu0a9Rmdc6QvUjj2x6hL934AoxFecjTAhVU5XQfomAgyAplEGgsPcs%2FiyRm5DrJXPvKh3tNUm8HPG5dNusIo4J%2BRimhzsMRogjNJDRXdf8zK95Oz8GT4iXWGVFiU5e0pq7XdNFKiTbsY0c4LIHTaiszBnRlLgTrj%2FKAOfa2j1%2BB1fO&X-Amz-Signature=2825ea99ef8659819767da441a408fd984391600cff923f8abb7a03d7bf35f41&X-Amz-SignedHeaders=host&x-id=GetObject)

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
