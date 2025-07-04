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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZKBTDU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDwNvJ16z%2FYHekw93huqp5jfcw85s08%2Fmo%2Fm%2FLvU8CuGwIhAM%2BBj67s5SqZwysGM2NhfifJSC3Jj5x2PJdsEM1UbJo3Kv8DCCMQABoMNjM3NDIzMTgzODA1Igwx5yB0Wwz5EVcQw64q3ANkqQUcZfPZk9%2FUxbQjtczI6mJddeGjvDpXMR7ooBkrxrTYyq3QG3G1d3%2FIww7%2Bo6xBbJEk6crTkLPAhf0JiAo0%2Fpv8WkEJhUlumTUV6tRBWRAhhVHHYyk%2FWQKSkUYcEVNbHQzuZu9eTWhyCpoR%2BsZZiMB04qquzxK3bhqAK4q8outI9jNu1cFAk8oxHBS3DpTSfsgfSwfApLBeuGrmn9ALROXNlN5m0D%2FaABMKU%2FxTONsrr6Gj1hDEcNfeDgj%2FnDHqJqwswGYZODFhrWNwbEDwj3NjT3NsDaneSXjVKg7AZ9oqrDgRE7IQeoyhEJjsbEFf3ZhyGupBxNfv69u8mowf5ebOo8k959Snu9hOFAels3YJPHUH%2B450opSqFC0b0wjIWy9w9xxKaGF2JB9JNBhOXwIwJbbal5%2BhXajjwtwhr%2FN8HQTDUIeBBh8MqNHkh0tgOTFUAi8dE2n%2Bx9E7jVn6dN6dkH7NwYC0Gwvjd6437pjXKpYeDw6DM8cbNxoYZEYFfw%2FVRLfWaAn%2FbNOYqCyeZqLY%2BiFV7mOUadX%2Fx9Ki0fTkyPhYtIRU8A7LSzDhSdCxXMUAHYZCcDPWXiPkWaajMaTOiUEwRKKS%2BK%2FRvuEHgcSfUmSQAzwVFaE1ADC05pzDBjqkAYOfrv4AQYxNee0cWcOp8ghbJfDCIUrGIXPdwhYqA6%2FGv5z%2FyNyoHum%2BcMVHCXdPCUlNO7IsU44K47x8efC2JfaJtj3%2BcSvJDNvIQD4i7CDdmxdTiPKih6umvXeWc3LFcTeZg7bb2z03m%2FS822M3KUPm7Ye9B%2F2VImdZIMBZ52bfy4I54c4Dyju%2FPZ7dEFBS1pcR5wf9pq7mU%2FmYhdSyIxxTMpv1&X-Amz-Signature=e0096f7089ef17ca80ec4fa94b565de77aa3adf2ac16048f26c0869ffede0f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB4QLJ53%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC1YBnIOxkeBofp1qo5w9asiMzBsvzqv5v%2BcOE4lw%2FdKgIgK0lU%2B2KZu4kOrKTFmVN%2BsAZOne5DSm2xKkDTd3EN1%2BYq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJzATQvUOg05XXABxircA%2Fc%2F2wsWJYRK5tCRXvVFKfPaj7kUt4MBWL4r6y7V0zR7JRtUCibVAFbjFE%2BxNRC9CFyhryf9PTlwNLxYqcoK8ybmo05io9I3qmSSK%2FFqdNwiWTcnOCtPh3stUcW6lTv4QWomutWQyhDqgjvHkbvgJKdQkb9yacDw%2FQlTHTihxzp%2BP9U%2Fg9R3MREDuB%2FCf6qi0C666TTpcQbwWN%2BivZWYl4Q7AmaCpaaLy9ZnAbipmmjdBD5COdGgepDIdjqFNjTJAOj5dMUGOByZm0sSjWs5j6stLHom9FLfTpuDljI6qwpygsA7Vj4LB6zZCrM5%2FNcjEA3AXA7i%2FWWW7dwghrmpeldrGiCVMoaHSY2OggNPsCrUfwL6x5FI8G%2BZwqCFmLFk5%2Fn2YJ9mvfcWz%2BIkUwqxBNOE%2Fo8unXy6bX1ymh%2Fs1YOqCD0bIeMKOgxI3ao49HxPL%2F0O5pG8EIoKo3NtkLBwET3YRAupPglYIePYnRcamHEk6Rb4dQJ1tBcja3MmdFQYocof76W4GKZ9v90APjeKyguXZshQfFL0SrjS6W6stvft0%2BYvF%2FtDfBZfhPv8e6okrnGkhH%2BIB9sqfCku3MHdW9ojAYuxEIJPTYhlum%2FAoGPQIMHw0NjP15TWjEtOMInlnMMGOqUBycn1CYTjFQPV1WP3Wk9c9Furr6uXD%2BpcrDmS6K3v%2FZBnTIArYmRnXMttm%2Byh0Jlh25HxOojLwgAVUJ1BK9oDVuhrBd1MSL3qPdv7q%2FesBjlwWuUy7BC8zg4XED7ybR%2Fzc3TMhp1gfzsSyW%2F7oWgyKu8%2Bv%2FI%2FcP6nRB3IFcQpoOBTBGVy4Rn1bsXCdZ2ZWMKk0oexeJePcNAOIecXyBNNlW8CRv42&X-Amz-Signature=c29a4af4669acac239e2a997e6a925583b4317024ee9829f9576d8537fdb0f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
