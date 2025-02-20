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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636W6XMRU%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDX0xJhaZWFhew7PPUu30TmLDsLIQ2vgyDV1iJqbp16JAiA79q76OF8aTN7PxCX%2Be3yUEfEFEBAaYkNk8ngFDD7%2FfiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeqfK7AP3e4Zh9kCNKtwD0hFkBN7kKb%2FNsobp1VV7hM4bfEfzsZl31ZZNM8fIsF1wn4YKAJN3ZN%2FSuZxAyGjdASaw7EfFIQCEgCL1A7YXcxBXG48fGuqAwbp4q7jeG6XfGXjFGuz0THVTAaPZ9GjHr4HhY6NzZCKbklFCYBS4rMnPLn4zpJH9E5e5us0bPbW7fgL4j7YnYLIOR5k%2BJktoizf7JrrUJpwo9o0Adar7HjzvHDS4E%2B%2BOzV2RinXJADSbOCMKEyzunLkzQAoCUF8a2Uvrlfbq9DtZntdtfo2%2FHxcMNdhOnotThlTl16eviWuH6jKtmCFKt73K4U4sc4RK%2Fonk3Luj%2F9g3e5nbCb8XyC5WuGxvunQ%2B9yjKcsJe26g23lK8Zr%2BMknfM4oGydlSbZRSf7Q455lQGKLrBiRZQddgiIACP2y8%2FuK%2F5MXNOwYA9K1rq6ugP6heLQLBExpUVqx3yrntarbl8NsFwTfNCqW45qnBXqn%2BfS%2FfnoZQp7injhjhdJGwOpNBMnBRe5N%2BdiVxnT1kc6JaR8q0Drs%2B6furEeRoGxBk6gUQpy2FEzWfxDBknAhx79c%2BRQZVni6B4zyLm3gJDqINAk0cQ9WGG0lqUQUYGjNcOKuQIQai3xZyK55zYWnSXmqHzBK0w4p3bvQY6pgGrsvNRZzeY9AzCh7V%2B8Q5dE1Ox80Jv7wofnqWq9MAqiub1iQthXOFtBLJv3f1rpSxRu1z13y1E9f9OOVcAqZH4f%2BB4yHuXbO%2FblUDEHHLIPw0rmYUiM7Yt2Wu6VOIqgtWHT2f%2FOgfU3z645bucMDh03tCct5VAQcq0%2F6PVZ%2F9fs8tDETqoWCd975bUUg4qkScOXKFs592KiMsY%2FyDGgat7zu4MRjbc&X-Amz-Signature=5ad7e280ec8f2ea22e674f456c62a8304ac9739795ef1d4cb24ed8dd7d53f1da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMEY7C6%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJZypAqTEIV6arGjXj9RixAFhIJNC4lqWn%2B6dpPdEkRwIhAISfGBOZ%2BDzdI0C04us1rEXLmE0Iph7deWQ2RlalaYAYKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTvIpN3Bc0E4Lvpgwq3AOofNuNmI7uCfxUqWd7WRY7Wp%2Fv4U5WG%2F3FFKzOpXyPwZC350WA6EybK3zAPSqw%2FLVCxNGzSJkmVFsF4TVdSri1rzrSUSja2GRla0fDJCauPYvPwu31kqbbOm6oRDfY%2BHY1XEKHNGtppVr4ie5TTf5QcAjmAWrgjhM9D8VlybpcZdr863CZSTSowGv097RB%2FSNrANaj7%2BG%2BN%2BB2%2FOHeUlszRase%2FbOqT64schPJhAxPuxK6gGuv%2BLEYHlLkPM8BZhRVwDoenAKmkOoTXKsSbiBN8nw3%2F%2FkRQ%2BLdT9%2Bv%2FnlUZPkRmfWZbabGfAui%2BPgKsKdukM5g%2Fk6pmRWvJOGtffEDySKp8XaImF1G1zRnc1NMc9khpfmlErBBStxQVBQriu6kZEQt6q9ihvkeenPInjMA%2FLutI3CU97cCuJyss4AOZYo7PB2j24%2BCyFRChlNCOEK5g2IdFhLQ%2BuUUQ3GNXScNX3H0genQ9%2BfkgwqWoTjGS0wsDPcz9K10uxorb1eheJ4XzBmy%2BZp1JFS%2B%2B%2F9BuUOk6ODJiGmNdv6MQrv8pfdjv0%2BcyXGMkLwKIkKnS%2BpvlIGN4SJqoK6Ff%2F%2BH5kqXnQxXKLOgcoKlThUEilgpw7IN4MQUJ5Safx8clLvBMDDfndu9BjqkAUsx0D03ign%2Bn%2FzS7A4JQYP8R%2BS8rRFEz0j112jpqB4OWLfXQ0OD%2F06KpJOoInByLdvV2W%2BI5h9rjGomK6Ebu7XoFRkMIxz%2FjPe4VO5DXiWWy7c1iM36LU%2B1X0Tb5%2FtDBjVfXt5aHO7OlOf0SbCYGeBPbeENngkwQFHTWvljeuUuR6hvKHHpZMWVdlbsgh2dF93067iecpf7ILhZnC4h4L9w%2Fd4W&X-Amz-Signature=8cdec38e71d4aeb6ebb4efb4a6c07f3b182c02b8f11d6a176a592da85d04224d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
