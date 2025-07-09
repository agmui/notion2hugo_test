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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFKUF4A6%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMw9qakltEFADKDEQuSx77CBUKeMJwyb5v762BA62gcwIgTL4BQdI%2Fm7kYte2Fnbxt5X89g1XOFZdJHsfd1%2B9IRHQqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNm5JbrtX8erfXe1KyrcA%2BXHnH%2F1lVFSeLX5aJQY3yGZBK3Dp5QFeBN9MtOnWjU8Rk2T0mTZWCb55w4K%2FdactDE4JVj5niKpXirJAElUl1g%2FtLVxp%2Bfsr03mjQ3j2potOU%2B%2FM5029x4LXPbJS0%2B74swr7hUK0JxOZO4b%2BOp9OxDb0NVRTXbNsP1woJuSE80RMf2LqjZr8Ox9Hrw5%2FVaSSqA2gNYXJZQn%2Fae9GaKCMqacNmtmGNv7Qc2awho5z8rmCZyu73xtiBWPl7qFHTdJU%2BtFXzXpEMBpTUuOCz%2Fb7MsE3PAAKtH%2FaKYCvrrQ9IXzDJDvH%2FkmMGKP0zsOj4Y%2FmDJkGXzl%2BQxXp%2FJnQ%2FpnlMFkLphiT8MaGJiaKa6PW6KrqgSOU8nTd8ogPBvXJDOhcWK0BAikX%2FZi5al62AIUdpgkPmwvMvbwiPHJj8aDcNu20oaHmifRgIx9raw%2FfG5gUGs5yU6JeGPnBykcAqrF%2BI5PcLLbQT1uDfcemZ%2F8U3MpydkDMYcxd7j3t0ObNEA1fTm3LKJxf7gwhAn94ky4qGq30zFis%2FoYBjbkgAG%2FL3bpLvAM4UeSQPeQqfFZ8w1S3aRQHN02qGH%2BfHiU2b7%2FodKgh6rq6ihx7YlZiQtaC9bHLyR2t7Y8DotbUnNHMJa0tsMGOqUBfP3QAd3NDu%2Bf1e1Ho4G10AHI6gMthYKGerwGU%2FAUZA%2BgwnuYRKQXzyU6m4EjPatWlBxRUPEDOn4U38%2BKx3lKA3KPoKpCKwKZI2C8bB9CC9dpjzIUFOux67ZR1BzMRjIP%2BHFQJR5wFVuhpHxlwlo%2Fh5vv0lMd8Au0GMQ8FytrWgH71A9%2FtCmJF5RGL4MZ9SRd%2BT%2FweGvh0ALjeya5WPAfeYA7tV%2BH&X-Amz-Signature=92d2582d888796c5f13b8aa08a1f1c4d41a532148dd52e6af81e8cbea6ff6b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBXCQI5%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHarZHstpb2ePTCKC7zxcp0NPRy3IWwe%2Bwh9ACdhUrIbAiAqLrpCuCC931%2BJRFgzbuy%2FC7tp3wbEGdDc11i3%2FkqRRSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2GOu18IoMMxduh8EKtwDYr6RqSQ6GtmtG89q4ueuvINVPTB1WEnH1vXGSuAswkN4gv6fn5ue6Np76zuRcFfITi38siK46vRVX0%2BTUU9U2kXlCdeWo%2FzrySeWh%2FdEJFFEEPnt9H5xmskhC2sWZzoo2IvtgFFtnehRG%2Bi1T4b00eH92ryUZxFeMtTp25LqCOVaXokxNGU5tbcBZcac1KxMZOx%2FJ%2FqpOhI93B1%2Bd23azqhsfnTBV5tZ%2BUZsbdKYIcNif60OkFYPEaoNeU7N8TUo8cToXzpamnJQlwu11kwXyAUNsDczr0R4aOgBkSsvFEoASZfRNK4Im7vnkJfv3J4R8l2VORsYg8f4XeA%2BFd4UOQOIXmB53nPcQnnSECPq2ko5XifyhsQKreHBQ7r%2BPcEvDYBtjbeN%2FKRtbfkmsBbq9IDvpLDOe%2BPaTI3wnv%2F1poyj9q2mYQevAL1TSuf2e2MJpgq132treth081gsCu5%2BZZ3Jmpmy6LI7tw%2FrIdq5EtfUlv8RyyFNG%2BxPhzX204J1cjW169PRTItX6HLAslbIBMOeVT8P%2Fxa0NPBQUh5uiDdbg6N2QwQxvRj7YhYJ8usVpXXbUSC6OQaTX5ibty7Id1UFUux6mkXJBdUUmCfztU8b%2FounUv78HQbByFsw%2BrO2wwY6pgHc1Za4UnWKQZNXvg7Ik9ebNKGjBjS9By2bFQUvz50%2BgoHZrrCvIsPOh1fCbYheORV9OjC1F1UR8X8VG4C8q2g2gtLEA9z4n5p%2FvGL6LvRgM2Ad3pXmZW6%2BjgvQLqIo12GxvqWKCujsuh2dzvRSrEhepqhmU6GwqTLL8eWWS7o7HgJ2ey%2B1mUc1vIgKxQZjACiuAYcf7%2ByMHj4Dk5edmV60poDTi%2F5c&X-Amz-Signature=442f58baf695a0fa2cc68ded11bb1a83f686afddbcec0faa183c9d162bfbe9e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
