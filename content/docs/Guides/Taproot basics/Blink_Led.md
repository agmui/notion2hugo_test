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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667QVQIU5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCgLb3mi2qN1Z3JZ7Jc1HEhLvjmduPbQNVxRVdeU2wkqAIhANeqb9%2FqBrCIeLpnoQu8ZwGow3ausbja2jZpKZ7QYhunKv8DCGMQABoMNjM3NDIzMTgzODA1Igwx4QccXkeNeswy76Qq3AOdwj8MAhflLI%2Bj%2BFuZKsOLtI8jOjDBoMqdafCuJyPxg3vkelhto0%2BJ65q9xgiZz8wwZ%2FP7EBJ6ADTui5jtOiEAeCNnVZHH0TZXnMw7ZKZAfv2xPrDx55RbWEDmtm4NRnt3XXhCPOMpiGyBa70ptO2nZJaY0bgVuKmTJO1zSHUxL9su3LzBesgkLMLrdZ4wXQs%2BSoMSivLRINawMyFChgDmCuF7o7ZZjbxw8m6G9OyMuOwwy065BOxlh1jc1abp284PGR%2F1TksWrHDTTP0pJlmuWv%2BkPIXd7bQEDLwQM91DfTv%2B9ltbPS798g%2Bpdv7HPzhJBEf9lx6rXwszlxlkMKkqxU5i%2Bw0trVEQ9C0D6JjBZEhXZm8nngy6iwhIJu6BbeXr2pURDoZUIIt50L69zDI%2BDp3dVdbFK0yaSl1USl%2FGUF%2FiMs6PlSJWTtarYG%2FoOULb13htFsoNE5migYhTxLpaoRGu%2B%2BNMO73B4nVi5KQWRLWQEhK5759bdeRzRpIsTlEueRAda53ZtT79pWyw9SgzdCLlFebKYagl6IPle0oHomNg7mC2JjTstFvZEh84ZiP3wONS7CO4SEaq2%2FmMVI80Gllg81vJoBMf3LuEWNhX%2F7xJanqq%2FFWag7yCRzDD66rDBjqkAT4QXsNvN4UFCYbKk332v%2FMcus5RfZ%2BLe4B7LkmyGEDATvoKP0MX1e6aJNF0ssz6gX669QCcZV47RKaKBRaqI9EXDDjlPqPONh3we3V8vS%2Bit8C9cfDe3qBha0xf6I6srCB7TofoUTbiuV1jJj8iEscicJUuZ%2BM4mXyolx8QG4zzEEfj4JQ9uHqv1TtI96CjsqGnDp17KH6NYJOFteOGGku27BUv&X-Amz-Signature=78166b0f48c9cf6159434933d851e92735e04cf85e018663a1cc7830c84a9ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q25REMP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCH%2FKU2ek%2BfR%2BEeUyBSJmCmNx7pA7KmupHkuZ8MLSor1AIgOqRGrv%2BAiWEe0NALbuFvWXIZzX974sRZI3Igznb9oqEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPJ%2FTRzpA4U4Wisf8CrcA%2B8BrwqG7IUWI8JDGdw8CwKbc9i2qJIqEqrGC1gDIxt8IxukKv92Ezr5xIPXjghjIeGblCHuBl6QX66W1yWl6MJD2DzOwcKoyY9zMgk4AlgzwjfjF2CRhNngXHKGv9SEODNME2DjCxf7utxy8prLjdrwndHs7u5npQS7x3u7JD5vhBnqbesm37om2QoEc4gipKgslCbxheUT1ci58UnrZEHFl9brh5akj3WzXG4uyTEkGZtflZ%2BoDmWRAQWtVOd8aOsLjHU1rVi1yJWfCAQnIypE9O%2FJImAxM%2B4mokcZUKMPW9pUxtYpZHVzgUPdSCWIM04zrex9XLNe7ZzbtNXlM8%2BMi%2FOLyu4lE6k%2B3cnlQHRFZgoFnPTZ8FAR4whPrRIEYMVsOUEc9c%2F8cANMZ6x95O1%2BysLKDYsMJqZtgV6R%2BFA3QfkbcVBlHTL5n2YcELcA53sjRlmqpSqvi%2FWKKWoRTaZoNMxFh9sPKUF%2BjClkJgiAJnNj%2BGAuX%2FeNKVSTpk%2FHN3%2BpD5NjtcZi68nzewlwi4pZvKghZ41ocShNshiMHpNv72GsE0tjw%2B6DHphLy0DqauNDZn8GM8cN9mbgRjcNbP3EELSMmyhMGfJPOQQrcgt8t9xNWnFNHVLyrOIsMIC%2Bq8MGOqUBgDUubHqr%2BhCgupNxOekeTl9n86c4P1UTB7uDcv%2FZQb%2BSHGdDUBXM3Uusg9yQm0MB0GXuhSnzthqRcPTp93ZnoOWBmFG0Xl9xOiSNPx%2BAOHF8OYvJI9GZ6r4UvtGpA%2BSDIjgw4EbqGmNn6SdInn%2BfW%2FbPcm%2B22xmxeA%2FhS8%2Bzqkhk7KEgcVM192ea6YTcgWzYHXCravg1SjDwdO2b4VI3SqWGBUmW&X-Amz-Signature=4b309151f2e401c5c5f07a8a515b09aca65c0725ff97ab9458d651f1f051d3d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
