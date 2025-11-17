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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIXJCJW%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTZzuiyNsQD5ci0PJxj4laROZAtqvXLWVkmQhrJySGdAiEApGOYPNklSJUZhYQ6JHwt8%2FLbkIXRxcmVrh2y6%2BxXyysqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaetW6Xy9Pf9SFyMCrcA3puG8gFlJsUi3wpEq%2BZ%2BnSl6zvVhu9eW24ILxuVKVyChmVHP%2BoxfyzTzBayBYc4c3wQMe%2BjK%2FVPGT8Tm%2BFz6cSN7OunMEBnZ17IIM%2Bz1k4eNJQDQrNeiYypvjBd9mmAV3kw60YALNDFAesEWc3z7CiRVdmuE%2FOGlOFeTghpXNdgRxsOOrYiBKfFLQI6p2%2BBmtk2k57r1Q2iRMjRQ6U9co6Rd5U32rT%2FXgiHj2JQX3Fr96bQQi%2BKTov0PcQ0Ga0jVlMEaZBUv%2F65qx0axdHl5jiK2caiU8VGPU%2FaR2P4iHmav8jeFnp4meEYDszzw7TbitabF6vP%2F%2BTQfmo51IDM8ptA1jVNmGNpjiZRUk8BFIMKHkYkYad8e4yXp8lvce5kJEXX6TwEM64QQSopcoCCEY6DSM9fkZY64KsLVmWoahU1%2BbSijQ1RgPVs%2BsUGGGhoRMCtWD%2FKWtDejyQA3opzXaWqbcdxpk%2BhFmwmVBxMKCs10XOCPDCcFk2GIcly63hlIWcg6qOL%2FlTjXOVGuLEi0NEZ2Z0ij6fqsmJuwsKfltsx6RFdkWLux%2B1kqygbERzFoYldOm4XnaLbNoJYHnjQYuPpeUNEO80JF3sDQKZaZk3Q9b3mT2QP9kx%2B1NuEMJjh6cgGOqUBxvoMVh8JqFx3mOEOk3GN0F4yUlXav%2Fr1Ezr6VAxf1SEQsT%2FHA2nRKDzSsMKEt93k5Rw1kzwm4UpAAhe0xjPy9Opgt5qQazEq1oMBC9cQ9FzOrCTTjW7c6GLSBbcCydrWTdp4jIefRA9PTs6tgsIY0pUxgvvgBJXazcAfgOAv3jACVfkWYCjxxtPXHa7Tu94rXLDnPM7gRTg5lpeKDlVIVgilBs%2Fn&X-Amz-Signature=0d7112036153c6f8c75ec3a61dd92cdd1e0da01faf67f31aaaaa57885bc1dc56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623DFENSR%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaYueG8GzloOgdq3HecL1Hx3BxuX%2FTeWoXzw668hbS0AIhANTOmu42MIR7ED0K9zVP0Xw03MD4mCooPiuf%2FR7LIkQHKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn4DWc%2BJk9ATJD7vQq3AN8dBGuoAWXVgm3Ioig4RE8ZvTdQ0eb2Xxqpfqt3msbsqCukpljXcSbMNSs8DlLUM6K2yR2L5DmG5P48%2BQDAICOIHMEn%2FiGsXW8LNpoNpgrXYRa2sr84Ycia4QHa2tmpdWgqtrmFVM9Ls%2FyX56VBsge7tRc8KCZQd3aP2wrC9aDD89djvzl8uH1TQJUcuIOlfiTUHUsNyQ96T2zFBvHSrtmdYANMvLuo4FKyFJCyPN7WExqohHK3Xyp%2BriMqJEjOcXGLwFH1myNooQU5zcGW2dEiH2y5w9cJZW21boJdPa30qbcGHWD%2BIh8f5lC4E4ASNgHGqdAvyqYu1xUJWSsTBdvr3NUArzoYQhrMkz2cM8xHBqdco%2BDY5Jysfl%2FbUqP%2BtW6f68tTICyWVUFzfbxthakU4gbX8CZTJCCY7uZeI%2FL2%2B1mTcePk%2F0sP8S7WkVqeHSOQXIj%2FKk1%2BksFneNgVu2OcljfidBmwyQpiuNdLRgb3BCy5GN6oeaIVxvrrYN3qJlx9%2BfHo%2FXhHJNgQXTFm2EK%2Bt2mz%2B96QzvBV6JgaDPL9YgBna4hqTdvVPRVYbVpdVBFtluCTjoPlwBKTdzs8WXYYxiZv8ZfPzaAuFD7Cu8A8cYq%2BOZ0Crk8L6ijLDCv4enIBjqkAbMSUkAv%2BxQ5%2BvW9ziAWRAhP446LoFpHjLiTa6BAG4x13Db3grRmFLo2yg%2B7MslE1DIsgofzOKWsvMokwbF7wU%2F4wUWf1B3BDz2r4%2B9cvNFteyYMb3euWoG8ozvK6GAdfVDNA%2BYZ4vNIVZEskgLSLJleeYiFPUXD7e59w4XfkL%2F0687vmGrVRSMByytgnhfryIMZsCVKsrtC5rXHVmvlXGiR4S3E&X-Amz-Signature=e6eb7ff31fe6bc08b48bb8006ffd6f5f82bb2759966f58b81741ed96dba08c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
