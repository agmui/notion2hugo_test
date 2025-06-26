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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FTVHC2K%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC2fuBTqRoRg4yy0ijE5IrEWudWk%2F9AIdpaqI01OA3BWAIhAOsU4SNXwTNZiLKeyNvejHe%2BGFc287PUw4Ps8NQ6fmy8Kv8DCGUQABoMNjM3NDIzMTgzODA1IgwA59A%2FwaeLLUmCJlYq3APUW6WRXYxPuj2Je3TnFvtprbvtFO2FxsuL3wZVsEJ91J2%2FJS2ViFjyhZ1PSTwL%2FNbfG46IPZfwas059Yn2RFVHCZ9W26o6n1XXM%2Bm37xXY1brsBmu9ZU%2BapSrG%2FQldxbTOmf0lyANWU4VS7CF2OMkP6bcv8GKpVTLdiEsvryIwc71kP2U4ryGTNHNyT6IrosTJQqOAW%2FulsJVhdjyct54NzV4WAr1%2Fho4k3%2FmrqlqbhxJDJsrn%2Bf6HZ7Z3AhGVewB4FXbo%2FVMK9%2FBFjMKkif%2BRB0oIanDrMQBdnF8Mw4NO4jvWmzjghtDG8qJUjwx3%2Fty3fnCcgVn3Rf6NBKMWW9Y13HD1WOayYqxt90EvxF9wxpbVn4dgnZ8zq0OofrZQcH6YpVIX5Xc90vuOxnX8a759SdLRTJrKmsAXyaDPDOBT9eJGKXoE6039CGmO0AYLzs0at%2B%2FRXOIIL0Q8Pk45zEQIOa%2FmKRLBk5yhX%2FvbvQKLXqsI3DVO5FTnxlZ91%2F3pI44qUVkKokAChVRaMFUDJaQMBM9nDTYQIFINS1Fhr3u2ytGs80lLs8iqFuwX8PUugLQazCtKUvvfw8Tlcht3VCzbhnb3WKXwqHeXr0U1Dg3lhaZnT92orHGVSIcnpzC2y%2FbCBjqkAb%2Bw6BY6fpwSCjygSt5X1d4iwSxkwnTkwu6QPX%2F1%2FKJ%2BTnhIzy9kdQogT27Gq868X2t9GGrNDn9dAVfTAUDlo7iOcfn4L1N23VoQryhWnoGR2Ng6knnne%2FCPydargZK62pzHvu2OOBqpRva%2B7w6qs2ypXAowb4dZlTXg9CEezK5HHmjTNQseUWB%2BAjfY6GNIrAfo5G0%2FITVyiI7Qc%2BhSGiFCbIjz&X-Amz-Signature=068d0c43c9197339e9155111cc83076d426ff5f8349e169a64e1e5efa582fe42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B4QJHPW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIAx0XKCmwGKPEvdcJaAaB74geCZFb7nS923LMcpqX%2BPwAiEAxF9a9LZeIC70p%2FlCr%2FuaTdwivJmhcDF2gwjRQBFMSfcq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDF5Sy%2FytVcjUdMCm2SrcAwZ5l2GVw8mY%2FmVH41B8NwdOOy9ro9uFB5GqosFR6fGQpJ9LNuBzDyHspLSVIK7n9kDxDe2WwFEEKoIRTjJlrDrLbc3XeElcNOL9ome4UscuN0RUu3w%2BOgVLCxCq7TGzMQ%2FipFEXug3NGTqLLb7xCeII%2BCU8K3A07W6Uv5Om1ynrhFYMEty2mbHjoqFPCoHIHAw8abhDo132%2F9d9K4JcFXePNj4Ps1uG1x6QaBm8VkahsvOqKjZHDIyQdnLY8cgcipumWWGGn22LlINJ4%2BYlWn9SCeDgFJozGq6nAuepiWyM1ArZ8o2VqyArhLP7fjJmWOmplj5P4uCSkHt158Cx%2B%2BJMIAGSPWLGDUGO5iHoSsrfTqn7kCWrD%2B3UCu%2BUv9USiHhFB0Hff9bux17qaTLiemjHixvWhlpjqE%2B6pDThWEwslp%2FlbGZheIv%2BBmpFlkoq3%2FVm8EdOICpPM8wLaUnc9H2kgTgkLvpZ0Gq9%2Bt7ibtKL2RZhA6e20qTEMCjcc9OCKesHYTQZHnXIPmUyJucE7qCj1Ff%2BwVFn9g5BuDKha947AzVTo%2FBIqJXTzLfa6xlJGdOVrRn6HSqckYFhBpW8QPBnA7Uw2k%2BaSGcHyg3uQ3Lrvc1H47dtHx8Dn0%2BzMPXK9sIGOqUBJh6b%2BL%2F%2FmzN8McS9JxOYFdRsWb%2FpgTAX1%2FMBmsE1YzPHzq1zLf3p3NnmZgkIz%2BGiXRV1InoWbRsXWfdZJVC6SGuME%2FsKbnbdKQbzSz6PndWI8Ix%2Bmy4AXxxIdzhbSesBTUhZWOABcXuXA5mKTXBzTg2N%2Bxe5J%2FYb4zC7fhC%2BQtj9n7wEz1%2BGv84WTz4l%2FERgmbwkI2Ju27kmcBApPach0n4dfjDM&X-Amz-Signature=15dc6c1dc5fb964ab1cef96def86bd9c567411ca969bb9f7e2344c7dbed2af8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
