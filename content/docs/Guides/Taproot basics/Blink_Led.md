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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N42EIOQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTPLQBXzrlBrxtmxqbe24pLYfUIEP1qDsBgn8rkOaiJAIgIVbV8zPOTQcKHaGBLejwoMqB9WEjDWK2yUTfNWau3hIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDELe4oBphWEek23XByrcAzjBMVSkXQkrgJkBhLujNrQsKcEri%2FqH6P3K3rhGbQJRKJJux%2FjEUWEeVozb48ZjTOsylHoXXsiC5Ykl6wD9GXomCAUKhd8LiTgH%2Bk0Xv1OWs2JB57Z2f%2FJFkK4r6trSfV4uFzFTF%2BAdfWVrPAAk%2FWfHOH0NAw3o6c986w8KJUjCYu94G4%2BZA%2Bgdc1RM2cmwuU%2FvY%2FgsQa2AxH9qOwE%2FJBJLv%2BAEO9o97MCsfqU%2BzO2cYWz1GFSzSp8CoWUl7L6h0FJOWIQySnL3L%2FQ6XMHYiJz8OkNGJmgB910BIXBNzsGuQWy9yj%2FGq2bm%2FNDh24VddBMSSBSeHbLNOoP9lTIoo4Lqic7z0fhY08Eb8W5b0dHEinPL2%2FTKazN2SqhaAzh8bm68naKTOYDtecufhzvLknm4tBt3GjCMPj51aGmoCiIkQxV1NO%2BT0MxTcyXYjras%2FG5yLvRNjCtSKuaypooY89Wxr%2BU9uNqg8yhc53KhKLhUrswuJmtMOH%2B%2Fx5Vo%2FNETRLgc285gGvaRQhAKV01ZeTgv%2FwIzLtnNPVb91AKCjbz94dPBSJWozaKmbxnpuvn6OqS8gJ81IasI%2BzOiyMcJ54jaKzXvNYrKJuE6m1G3bpbjW82vNTapR6LwL5b0MMGrvsQGOqUB5YhpdjV0ImFveE%2BcuEgyXj7S0z44DcYwcmkdkcNL%2BGsDxgnbJH7m4kHXHgu%2BWtpg7uSc0NivudlrvoUrfbwuLv2vpxVgGsdNxI4WD0Cq2x%2BNS%2F1%2FLiGI0cuNxZCKb1CwJy4rufUfYFNGsamjPWe3XNYlQ9v1J00CZ7Yywpn94nHFx%2FB7pTrAc3RIWuPAp6GaJBIgqW1DFFfh8PPqtO1CcVyCQvMY&X-Amz-Signature=330966695f30b81c273ac6065a3be8113c3558f574d342b8cd30450c33fb4a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YF6YEKI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxF%2F7b8s%2BwlwB3RG6TpEKFhvu1%2FAXViB1cjwa5KVMFGQIgBuR2sXev%2F97gEolSiI5%2BrEKn%2F67zO8aPykQVITPPxDQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDF8Z4cDhx5%2BpnEWCcircA5E86u27V59baB7XktihgQWm2RzuNimex0EWZ10oT%2FJrzaX7JxYAv54Nx6CUoCgMDqp1ACjaad317vUtLlVF%2BXM07ytD8omNQSfhLwLCO56Aipl8Q73KgE%2FmTJyIN%2B%2FW0cPKZYvsH021Thi0JLdy%2B1DyW3iVsI6S4FtJWBHdsRxo1iUOoburcC41LgK9nJs%2FPw%2FNHRv3YBoxOPPZEEfO5QsECm22JnjFpzTPMkHJ2jAZJv7CUq2Wk77VqAQR9oA6rn%2BcdWkJAfWjijMbOAxakHLqKmLAQC%2F5G%2BLeF%2FYaDA7LTM7jWxEKYFMYuMTMs%2ByJOT90kd0Cbhn%2F3vJkWv3vp5fb%2BG3R%2BmwmQZTI3V7ekA39LuPdl6K8zk6mf6vxve3mJjFnE8FsAKwzcBC%2BuYEGdDcIybgjSmUxm0hL3hUsshuLsO%2FwYZ%2FFfzVxpPfPSM5Lh%2BdqmGSQ7oGc84JsvLO%2Fjv%2FeDze6mxN%2BTUqnZRm%2FB5GDuhtr3rBe%2FSb2o05eEtias7d90Ci15iFE7W7%2FKAdxmHx7MyLF8esKJMa7%2BAPoyvBQa7o4MvjlglDLN0B%2FEkYnvco7w7D0%2FMbR5WBxlWOgRUgOv2pAfrigbFnjlAnitwy2qqV3yYrV8ywe1mQnMPWqvsQGOqUBVi3LvxVlcst1L8i3ZVnJZX0X5dzRMASaDIcEzYHX7Vl5S3JVxeZDTm6K%2FRVTbtKnP8Xu0bVMOlGjXPgp8OyRKemkB0pGj5dMHxOrNViMFTTaMPfSjih3dWIwuN%2B1XX4YXTLdFHrczGAHUSJaGq85NHb9yuDjmnkkph36P7lJ8Y44wG3UFoCPXmewIErwH9Pt9OOmvN76nffQfe2LC%2BhNvel0FsRx&X-Amz-Signature=29217f7b22c8dd36ff6c37d183bff2025ef13da946a719aa6e687191c57a536b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
