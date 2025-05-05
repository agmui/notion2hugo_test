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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466462MFJQJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCvZEGCHRsRqwTuPC0otZ%2FG%2FNQaWVCwAT5xHB0Fwb3W8QIhAI9k7VSu22jhmGbr9l6W6zSvtSyuSTBCKiU9Yh3iJKVIKv8DCB4QABoMNjM3NDIzMTgzODA1IgyJbvjaN%2Bhu%2FWTuJJ0q3AMnb68irmI5VO%2FrWOwasocfPenQe2D6c%2BL05ViUT44g2WEyE%2FaLAf7ut5hzYF3wR8o%2FHEELr6fhMeCQCvmgdmRjtZsP1NhoebcZIB11uLPpbvVXiGBVZdf0mb8M6LhWGxK0SwGI41R4hliXGzzAg1REEhWrEpfgEkCZjmLrqlt5RGorVZOIEPytm9eQJ7jBFvs1vxX55nH4SQMs0SPsW824V%2B0wD%2FTsUMJqCQGv%2FYK7Mt3p6lJXQLispYZ9aGO1p64kNUb5SUAcz7cGme1mOBWPoSd5dSHiNEhB5sk3u%2FW3dsbae5%2BiBxeeyop4HF7bfkOR8xKov1nhfS0kDv41vkm7%2Fmt4LT%2FkCXhu3xd3y%2B%2BBqnNUnYYC6ZUuqQIVaZvYRD8vZQERq8Ar0cOZwV5kIY2f9rH%2FXEDiaME0KiaKhkurAp4XSnM3gRhchP5zsxrbqqG12OdhmQ8esDDLUYHarXavHHkncp2jlC6tKbIp%2Boe4icnJD80xQFL7ITVMDPBt9SiSUe%2FmaYW63hcy4lpv%2Fhu8NgzEKc8MLr81ALGBuHzbx0QlSwqkfTcOumxXqPNgaBgVvpe14kL1ocF2VhtVmbAIXwq4GlcIb9GW82rpPyTkK0%2BPVpMc70ZvEypE%2FDCxrN%2FABjqkAeLtebSU3ul%2F33jVN3cQ8P4wvX%2FD2tkvZcW%2BTSptq4tm3mpwQelGcVjvwktc0YE20BHEcgEht9ex0FRUThYmu6p8XO2OdZBV5DNl7Urk6GOiVh1dcnax97Rj3FgOvjwGJXsPgp0fK%2BZyVwx5aSZG8qTfSNEpicUHnBlVaeOiVLt6UcDjJYnz6ffN0jlP%2FbaIvQtf0Cw%2F3Q1DsNKIi3SmSaxo97%2Fy&X-Amz-Signature=1fde027ce5a514daf6c34289fe9c9d649f6f40d5788d97cf04783fe64fc82e33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J6GHAB2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIHPoEHjfDW3oOefYuZudcVkGFFJtN%2BSQplFuch7X1vwzAiAG9S4VSIushWsP%2BTNNVh2ne%2B7eUYUDChgXxR5rJoQqMyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM9U1hL6rvBz%2FuugLAKtwD%2BAMIKpLZXQDFvOFEIkqUzWcho41zgC2H2csi96sjr%2BZR4HILS74Banox76GG1s8XmdApHw49KU%2FAxR0eFy2xawpKlbZ%2B2mQ9Aw2aZRdd5pBPUxwz5Utxr%2B6FfjLE%2Fi1blSDj4N6AAiJPX8hBzNTo9lnn7Hda6QggFBMZ3BcOAYROC9BpKo1d240Kq4YGjNL1HwiLd6%2B8Af2bBG%2BHlLmF1bfXUOOjGPvWU9oQKlWhyIZ%2FENYnU27ya5vJ9y9qbH69pJ4q1OGZJ95jg7BKBolo0ks31%2FOSADD9IlN94hoQkn1iM6ZftpA9IRhfQzxhdGlY90Sm14dpLNI871zOcTyzotrjHCsTV7vb2qy2Nty6c48tB3iIueXFJveuck9YgS6Fu8FarbSt5PG42a4p3uZsSUA6GTdFjG5xjaXsmjEfju3A%2BcEjOxDvev24xd8hdQYZtApt1f6rvfTPzLBuomA6txPih1%2FjRrXzdWpCgfihH5NbRBaGKdN5WNXgvCOkrZ2C2DKcanJeMtSG9KewS4RbatYxLulpK4Sthc8md2jd4kdKm4S1%2FiFlF1UeLmlgvmR63hcVNU1%2BH8uKSZNjafzg5faWMYqX0LSP%2BmvXIKB7n1X%2BRWQiXptG%2FPn5%2B40w9KzfwAY6pgFRlUwQKxCRg%2BZckhgODK9wPpnXgdCZgn9K8metCBpxAt3kyWce8lTPUUSXTMtPx0rTx8LLNJ9kiJi6S11GMJiIVST%2FR2LIYOKmi0vIRQ8Tu1wfcwswdkOfAOywx%2BsZcv2Bgr%2FDtmeMkr2cri5wJvZbYup2QKc22Mo8IsjxdwkFGA%2Bd1BlnOLogtfy0h9ouv%2B8oCR06%2B5ZD7nyKsLaJVk3jdWWzMG81&X-Amz-Signature=fb221cbe22ebee0afa3645c87fe2bee372b6fe1958996be5959d6a1f643630d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
