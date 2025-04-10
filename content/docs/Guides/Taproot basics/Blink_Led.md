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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H5HICOI%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQChngh6ZnWW0HMw1nwHa64D83DgoxEiR1cX5YT%2F8zwFEAIhAKsnJTLiKEBZX13OS66%2FTABriT%2FXSWswWKKnNYhsY%2BZcKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhyaYK3KGZXgjqcSoq3AOMHizMsLZTArPTyvureum8OwX47dQp9DNQBuEzhRZSBIR4W4PfKbbWSWp%2BqTE%2B3K%2BUTxNq%2Bzrwl9auehYZ1kk%2BGt55thDsO4ZjF%2B5bWexYNpMjNi43ptEtxcAtjrz4D06CgFPmGjCyGYDhp2E6LRlZr%2FOdMcs2LPuzr3f%2FwdgzQk2XrAl7Ar1JwwHXtA6HaaXIC5fkNnQFn7Ew35oz4DCSdj%2BZSp3qkrAvFycbNSb97BIGJpXAVsLuPKftoXU2Yh5Qzp1SoOv8c88REyqBDH3%2FJXjIykZlwUgoLe6dv8mD9b%2BfZac0GWJm%2BhaFu7S3j4BnOqq8%2BzG6JbhwAeYUByaPOq3gl5XETnZ2rhcMuPdLC%2FPo5DM6yv10WRr5j5pTrF4%2BgvSnN%2FhfZrWE1Gra6ErcK7GoTPbc0XI84KfooSvD9XGMh3PgEyvzUEbHcvMAc82jXyYpoqAjI6kRsINcDpM5UqvbwtviPMfWE29U4QOX3HE2J18jRTpCqczU4MWHPAmJ21Zlh9D63mrY5RtcT7LBvID9YHVksOzFfzncTGUe%2BQgndTYipjTPAdGZYTdMixeTepZ7pKK3DUqTVcpImcoGzJjvgXChFrmfsKqmjQW1MG8bsTs%2FYWFxCk5lWzDA892%2FBjqkAdycHSPq2nTWhirXmIlQ9%2F4AYmeUDPac6p4aoGxmrwCBxc7DR7J6Ip5LDnVT7BnIIsO374X4CL4F2qdsTsXDYQBBu9khqrsB9HilxobSpTXmK8NtF6JNubozP9TLShFeZj5js7PgBYgMbTGs%2BD8SlQ4usJh7Q9g56yK4I0unF%2BWmOYCOLpqGH5ANdRNN%2BahJOqe3Oc7l3S36WWuEXW%2FO%2FZq1vvot&X-Amz-Signature=c7fdafd36f663e305235948598a9b43540eb3c4ffae95955bd852023e1eff55d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662GBDV7P%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDqbg%2FbPIoo17W7xoDwJ4LQIEGeaz3D1i8gd%2FQEkBEDoAIhAKc9uSbUqh4VOaGJMsNcF56115OxEf7usJilrm32XxxPKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsZYCYWknPmrk6HT0q3ANNSCq2zAATjfnE1V1mM4sNAVj9DsuAkXuL4WwEV8sU0qQK%2FebD%2F5Z1Y1zr%2FHaTMn1StS2aVvJpIih4Jx2JkH4ubDU7qXPU6H1jYZszfBTQC6jKtWGlZ7pCyP1piiAUjVhl%2Fbk4zVXqZ606zyk%2BtAmb6ZXr3SCgNrsO2L%2FD4hJgcjLzSaHWsndC1FVk5CjHII2YjJc%2BVm%2FRwyuG%2B9UCMSNDyl4vA3rm14cdBl%2BE3l4BZuJQdBylun9O0ukLrTeGQyn8I8usXp7RESm7w57qBUkxqCVnf1f6yyN7qSxf705lVxqvA640vnhia1e%2FtAjSmPlGcPphRaWyvj4F%2BYvgbGJBKP%2BU4A1D%2FfEsBZHOie7j1mHRZkSYi%2FWlHsuUNg0gTTa0NsdbVry7SpLA5Q7%2FLrp7O1kOqWiQupPTDJJ%2BNxPchzxdazTFADDupoKV4jnLPJLVOHHYwjPujp5b1S9JWHK%2BODmj3KcdHkhP5Gn8p6Tmb%2F4lfel8egVrpodeofPIDVcheMMzzD42fE6A4hSyg37jDNV2v26hWoROYtuEoNI6p67AZpH413KrHZjuPxV2Bs432%2BNdyVpgGyfONOBIE5xrGnvi5Qa0QFu%2B6138fm8MEx7VXI4O%2FYzhWxKsHTDA892%2FBjqkARZB%2BzEOgdFfVkGuSSTABBbbELsbGzHxflFMtctu8MNaUIJg4j0etUTB1KnE0DGiZYreEH26p1XsDPArY%2Bz97Lj%2BawlTBHaE1MjqAGRuKiZ1tgD%2FGSxEDcS6a7fefbiWhI6qSKUq8M1J74Xe%2FftW2%2B6ZFk1snQbUO3c3opXOCq84w8xLFJLk4kwfPb97yIZScd0WoESXXb0vqjdRve16yy%2FX%2Fs1Q&X-Amz-Signature=2cc974fa9ab733987255e2f074740a90ab8d5eeb68623674f00cb2ff77694d26&X-Amz-SignedHeaders=host&x-id=GetObject)

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
