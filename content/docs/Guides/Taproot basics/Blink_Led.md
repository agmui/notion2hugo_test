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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3DHKO5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOLn4wfK3PPHyHR2uB%2Bkj8wvMymcj4aMJuyVl5NR52bgIgDikeAi5GH3mkHeWEP9qaCg9otM6W4rT43i6lz3Z9cZ4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVj8ncP2VLKsGkHDCrcA5r0c3Vq8Jcr05IA68KZtIVUjVky70gllwH1Q9QKMqFrySzA9sb95w8ffwoU5QppNeBj%2BY4rdffGcBssz%2FY4yO%2BHmmmjYMDu9XUOtrlCf%2FvUgADiK64Ebi8EctktQGJOHnLUXfSiOW320Za0kpTIGCg4%2FESZPBKts3Grnpo5PLbegje%2FyD6Zgv4lVXTw%2FP9VNhiTLA5h%2FwyW17rsQpLG6l4dvA9jImA4ZRWRr0Xy7f8kMvbgzMrdGqXPStFzXfQ2mCWWHYpH4e%2BSDx2bj%2F7oGeCOcXE%2Bqffds4411yA1ozZ7pc9uRhaA9S9oXD33u1%2FMPmuSNLJgLF5Lxu5l%2BxtLQAwfs179Bo9P1tPqrjTflqfpPl6qTYUL0XXfjjbc7JxsHNBRaNOTPmfX3uTGsSnCcOwiFsBDGTHEH5jnAhr%2F5MrUTbRtYVT72EuMM1gpf%2BCODfzvAiKWIOw64TFY7RpmoSXRqv29tFB3PhoPFtm0ogEzKz%2B9FM2FB7dcGITv8FIPTkbUNyw%2FvLisFd%2FHpjDDKdSHw4eBkY39rfwZiP0%2FRiN7PUV7OOQBtLxlGzsTGomxEe%2BQdnFKYl%2BxovQHnMumPAFa%2Fp6gd%2BByz7yEsmnPn%2B9S0bTQ8RWZysU50iZUMMbKnMIGOqUBaw35fZIjCaimhW2%2BF1LSuYqmwUn%2BoacpHH6My0oDHjG3PQun1xm8m%2Fn%2Be9wwrw%2Bd7QV2U0ZXBhT9xjbE6vzxRBOghe1hlbFd5VXEuLTZA6sEn4LEv4jUK3aj1Y7qLm7%2FMVz4ZzoOxRtnmTTGL9YxkXuGEDKzUeZUqlpOF1EYaOM2%2FVJRNPCIHVe0NI5KrmHiKdPVkHVwSLV8oWuS1cdkHS%2BarmMH&X-Amz-Signature=5f6d755aaa918c98988bd2a4c82e07696512a00baf1f37f4e027f62b363197dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KL644AT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BocsfUmhDXBMYnNtn%2FU5cskMEEaG4QX6GCXtNuC5LPgIhAIXXQIzkTlb7JRNdTtAgSwEtRncJA8p04GZ9Hb4WSBcrKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1CoXwAcQYTb6buj0q3AOdhOiZ0Un2qU5fzoNpliWm4qKDfbe5aYBlgqccMPyWJlk%2B7hQFIupOvTxq9cw0xnw13KXfBL9ayaNlsvZAvtcKEApB15fhet5WrmE3rOC1EwcZzyb9b9r9FZZ03XoaBcCj6%2B%2BAAq4L1aG%2Fl82HukwzAkHV1L0LrjdGPNomTBE0xL5WQWK4eKDDB5%2BpjfE1GvPDKC78FryHPaHQG4IQl2nGXFTj1u07SRB%2F1FWam%2FtV6ICP5CRbxQItOeMbsdNnMmw3evFOxtVZJ2xBHXKFfBD5IiCOQBYgDMe82AqVq2%2Bo%2B0kSSrtEWUpq3C4SLj1W7RW4VYSJP5WXOC7toD3Kxalr3zhUR%2BRVghGIw%2F08X0q6BdQAzXsuGxkt4Bm7Gd3hekUpBR1g6wDS9JvgKbhHCRCxPL3jlT51NMknFj2r3Obu%2F43rsaqL8%2FnybbykcttoNeOnnICqvWx7YqaecXyq3iqGFD0XD27OjmI8R3ahD9W%2FvSNXAPjQxztEy2YpCiqU26odUd%2F7yjR9%2BKjIbZOe84Z2lGjjhBkrD%2F%2FBFVQOQ3GP86zk3o1JWj0xQBOnajc4som3BmHlvJsUL9FyTIdq5yg%2B3fVSU9xLAsgkHVJZ6o1eCE1g24MCKNz9xRAQqDDsypzCBjqkAVMoCj5TDU1NwsEA%2F24VNygjVbNxMQ3Uv8aOTUfx%2FiibHNpFfc9ge0oiAyaHXNcyCvs6RZZxauDtIJHRgAVbi0X21F3G1qrKofV2%2BwHGqd5PZYR9cRSv%2Fsl%2FByBcIQ%2Bqj90FLMwYhc8bFeF7le9HUoSt7olRaiVhzEA0VYu61yI2AhVpv6MAytN4ARyciWhmuJzyGXzesS0YX9ZftSJQHuko223b&X-Amz-Signature=dac01b3654d0fa212d62e408b02bff54b19aa2224810640d239b9f846574610f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
