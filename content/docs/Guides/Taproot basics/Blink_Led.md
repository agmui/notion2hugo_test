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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z3H6JNC%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC2sdbRyaPQ8u6cg%2Bn0iGwwAGgl7y1pEyq%2F1iORe6vRGQIhAJIVQ2mEzvNFPbPDperZGBE1xkz2lxHQTtqPgdUHtIwVKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BhuS7c1sAuYiA5xkq3APaQEUrW2k3a0uMW%2FCrDjyerp7EpuT46UAjjhEC6jhlDN44ZcpNEE%2BSs2OhN2uPiMBA71qXFhsZYZRj501sPSk9vlvm3UJo0CAp2WvtCj3ozqVg7EoZ6wTyDfhLn70DUzigq0Fy%2FliwynhCyekNtccuPR5pydAgQNtHoC3nxbd3OZxagz3NqjB%2Bnzh%2BECnV1ATozkX9HiiWMaGxrXapmSa8%2F0xhQkoMvXi01dzmlSlXmPjCB1HWFICWtA6k6fwbMRepT9LGqv%2FLBpI38J0B9UzYCZpv3%2BpdlWEzeWgzlZoK7qLpNe%2FU99JoDOEW0X%2FsGR83QDig7FvDvlnnd3aMhbE%2B926I57hMGx8wm%2FLDcvcTh04bj3KmOm%2Bbs48FGqz%2BVbgW3h8N73E%2BgJ1SxZBTRV%2FrHOva4k%2BYUTLpmqErSukOqvYlt%2FQUWQEMSh1VDdfLUAnQ9tQ6QDtc8AUusoYGC6bLERQ6GCcyR5NPgenj8PBih00amslFQOkE0JNiMKasfwvL8kVHmI197kpduBzLnNcrG2dzogLZJtqHu%2BBI7MXovnJe1bqDu3QWCsnHHrLdwPoGBknTTFNFVgx8XYTDjSy8SBqo2a%2BBFv7HuZ0QaqMXzixfjsSWprwaPW49mzCRtfbBBjqkAeAXVCABNv2%2B6SsUM1Eqp%2B4lLqdG3%2BvikPZ6PN78qlJ9D9vfUJrz0LoBZvda04Ih8wughw3IVTjmBgbxvgJHujB4bVpj0LnvghtbZmyWbWw%2BWWqyHOfY%2B8pXpLC8%2FtXa7c6OIZUIxzfqVmIY8O%2BdNwa1fBk5S7VK5v3adi4Vs3N5Skl5jTF8XgGLIiFZCwDC3W%2Fckn6MxZOOgf0ligjP7649nEw8&X-Amz-Signature=f3c4b6d785d6b09617775dcf37ae5eef868a5cb4c61daff0c5e1c820a6e7d815&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T363RNO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGWO%2BuJStOJ5tjMVUsZjMqX5CH%2Baj9Cu%2FXcIt47Vz7fxAiBALS9dmQ%2BvyNezotDtnBJmUS0RGZXma5MHzZ%2FPTFrVUCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Q2Z8JEL0sPL5YzUKtwDRFWDv7FqE3bVEgaO9XzuK9ItZSNF9QofCPaDLdLz19XIsnODDaf49DVJrLoN2BkdvOBLVd0DwHyp%2BLIEQbpZhXhtqTPyQLblp9lnDLAnhmoftGm8sn9rq8KcNV7mj31ASW37jU13SKYxx21HEA0dE4s7JoV7ACSJhy%2BSMJUp0bmkt2VNt7A5mARjr%2BXIL3bQ2zIMfLz3kw1%2F4ZpNH7HM3KgqaD%2FcULHh7RgRiozhzcYXdl6vayLtpswgyXjy40i23cHFcsd5A%2Bc4OY8nwcW8RNsXuQqnT8ikTjymLofyfNJHAcGWQsEPJKYtBtlbcPpJDPDjmz5Dz%2FvJ9Hnmpt89CLo4onrPieYfhza3NuGdGXgCr5y4djJwxTBxVdovl89%2B6QF2rEcaZ%2FKai72zKFdXsrlzY05WUxKFHoxEiFfmyMAEnOUzbHT2jxe152hF5ukHibZzpNllrNJb0KAg3FNfIbXE3BhUR9N5sNt4wmx5shi%2FdwBBAHj0zW2pedwZ2%2FRhDmuqT67ZIJvG0%2BLXrMcxmJpJHZ%2F99evw78synyAYh9IXLxOkjeuSzPaDYELGI82r6E8eOrdSgDz2XDfNA1v2GrzBUI9ZA9NzAyteOlO0KFdyVb7rhFYI3L%2BLiq0wkLT2wQY6pgHoa%2BKNDg7MqSNwP9I%2BE2FQKQZ7b0F6bQ2coX39JiyjFDO8tIRQotlQmA%2BzllsZTlBFTO7Auubt3xP3XqO0eQxMP1gUu8CnPIakBSbgQMjw4LltknE7nPa9Funx8vUr9x3FxlF2aPJjQRqyrG%2BOcFHCXoT2%2BOYToJYszMRYHIWfLZ7cZS2bLeW4g6L7ZuljmyQwAc6n5H0K0v0vLqnBRle7R7g2GOOC&X-Amz-Signature=95f6aa2c4d8bfe323350b50dc693b6e6ee710dbf03d9ead81b0b5c3a9424cb1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
