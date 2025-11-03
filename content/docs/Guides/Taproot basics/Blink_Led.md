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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTDCJ3QI%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3%2BKZod0QcsVdWPjXCNx6jbBdzwMDAk90oOQEuciYMVAiEAjI6W4tCppiANy11Vpe9HM4Z%2FAsnBqqWfim3zrWe4M8Aq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJOdRzhj3%2Fo%2F1Mk3myrcA%2Bph2RnUgaXIn%2FFvGgy1wdptv65vq14djjTpy%2FWV4bL7COeqELAkTwu3MFoX3m010DWnkD52e4iwMTLMFuJD6SHNPRTz1I%2B2u2bwm03DKLYw42F5Gi35PW2NFrY4UaWUmK6QzEzfvz0k8iGWgSwdlrDj7k0M3ubQ7KbkA4JPbmWadJCKwZdkRZJ1mjqUS8nwuNYUYhcIaqa%2BNc4XaaJOLhJpIkDaswbsNoehcAT7DREdHKN%2FPcYu5awWy4pIqFuEDxpEgJLGbAmdetpNdAw7O9blgUZa9YP9dkLcAM1sZ%2FlkS6Zos9rld7wpoizGjCTcn9PGjgVw7E%2Fn0uWh0MkzEnybEm8DXJ83oWv3bAae15Li307XRcg6wuNBvk8ksonGzG5vzEZjnybdCYwerEqbSwrJph0dUUx5jmjQrhCUe3lAYJn%2FKh6uo5bpAx83ndRA00IZgZb%2Bc4410zpTx0KeeOk5EawPksBCp5cg%2Fno6APcz3UQBgHGOPVg%2FB2FvYhIbqaGQVlFiYSllFuE%2FpodQ%2FuxaeOX0XX%2FoBahNQ8IwpCPR%2ByibA2BtTOLV06q8nOPqKUzfjH%2BUK%2FFf5n5rto3tn%2FAze0f7xB7KhSZep1dv09bsELcCof46DH4YE8USMPSIoMgGOqUBN%2FlN1A3o0Y3jBlrPEw0Uj3uPm%2B4BeMGaTj0senYz4oGgsZNGV0xmx1Ln3ydxIZhZn1qCrLDhf5clevssW7J0u%2Bhh%2FTLRO9kBuDlWoi8CKcqlEZ8JOxAZtWTjG1JH6FElH2%2FpIXJwQkEsK9EyeEyVlxIaxrheLT5y4%2BipxYynrtalk5WQ38Gv8SfXvmauG2nRb%2Fin7UlsdEibqyVupaxpQIa9qOpS&X-Amz-Signature=2d04885ba8269b2299f230d7cd49d519074beb3086e5ad65007ac0e995ef72ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU5TXOLH%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAG4v2Ez9rFgL4X9%2Fx1ATOQ8eURoqYCSCJrP%2BEMtThoAiEAxgmMvupHyqZSADnXqsga7CL%2F7pQwYRJeidQfrs85y5wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDLGwH4n3sCC9RsWIxSrcA8pjPopNszbMTZ%2BgCcd9MY3l%2FWWv0I8ZXxOk9lYxpQKGDKeB2%2BPyIsj03lMy4LXa3dtYkgN61bd7Yl3EQSQRNXifx1P%2FZwnWBbvzYTIJWElQQteunrF3qIlMTcTnkrZHFtjtTOCCPiq2ZQ%2Bf%2FNF7KM4wLLHcJSKePBr9ScBZeM%2F5hPKTFE63FBA6fuzxa%2Fb54R1yXaFR%2FqQXqEdpkBwWXWFggEoGlrwTH1S6%2FYlp2tcvwssu2oXTdNF8hDdjDbkkqQZr%2BAp7JfhoOD1C5a%2FNH1noWVJyThZDkBxPLu2GJ1AS1tDcxJVXzbfhcQ4kf3c42FA9Y64pMlVoMjk71B%2Ft71KwSIQ%2FIhjwTMtNM39C5DMR8IbgbrGwsaAlrlMFQcDtev6Dfx1VxcgaHQiZLV2zC8JTLinLo1tLJp%2BlZIgvFVKociGxTO4BxUCaHjHf5jmHnctYEj9W0IN%2BaL2pCXo5IX2GwEFoSHVzf0N43fzXNGfmxvXkn65do98w4zUPaXhug5hNvVbJpXNCudnmp3%2FrSTW2sb%2FLqWs0fU%2B4gxX9XGxIvocjgi%2BkDhfUT7G%2BOHjDt3HjfdPCGjAsrrVscWBdJ3wmecgH6%2FtQpnPmuWwQGBA19cQ8kIOoA1JmrepKMOGIoMgGOqUBNuZ%2Fvd%2BjbkLmJdakPx67wdfDvoNeoXeJGxJgmpP3iCTItwvG1hEk78hgeGGTn6wmpsvyGjbYjCWOOhr9fPCp2ekFWaWV9yPcVFVMJV%2FOVH3rea8FAqs%2FvMQwC1nFQovHs1YDm8LlgVzouejvmE6zImP1zL6%2BiWhJEa0TPv7ACvDoH%2FuWL5HzM0U2Swrie9S0O56sLmu4UXkHA2fL1lxKKh0W3l5F&X-Amz-Signature=f5a13768fcdc1b5801e470fa8a4c7673c8f2ca964e29fb67504a13ccc6dbabb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
