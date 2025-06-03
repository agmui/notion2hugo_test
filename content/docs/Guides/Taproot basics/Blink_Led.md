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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V6J5DRH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIDzd4Xv3k9dOD9GGHP18oatjFFPITIJptrYEW%2BfgotmrAiEA5iRLh7XccBQilqdJMvHhrM0ngmHWJO4Bl4BqSYBo%2BnUqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsLBbaE%2BLeEqwdNlyrcA6dCUcdVXelQiu9OyEKfhD7NntDev%2FLLkkG9zphwxGlHxDnXZMeXUNYcfKllZ7l5GccQmqM6ccNIAOkcgV036i%2Bs%2Fl3Liom9FyhYiCHb1ysvDmICqi8pnUVr4iCChiTDTCxIpz4w7k8LSXq5W1G9D2%2F%2F54oAg%2BSqiw9ZjVPuufhzNoMl618%2FxoONKZOlcCIJG%2FrUG06NOuiqW%2FO5aJZVIfhXdGKym3HyFoUEotBduipNzn7c3dkrkHtsjDOy5jsX7P9NtEr9SYQCGZ3P8kJ%2BQ%2Bdrow3nmwy7sJGwS1LloYNXmMqXPfCcs9CEuyx0i19ssb9a2HDnmMa3vHXwCdn%2FZ23OJFBJRUYR3mgA9L2RY4GtBRwM7FLsJG0rJhHnlchFg42jCmq1%2Fuwq%2FDG9W8fhqM%2BL3Q0fcwsbZ5BqHNHAOrt%2B4FvT220qkpvDIwp5P2TthfvzwLYsDY9fwjDX9AH87CLQBp%2FY%2Fnw47mosJT7a9tUBair9O3ykzxllg4aN74EgXdh3j%2Fbu%2FfofnkiPjX3hD3puGVsOUN8UB58xA8CN1QxVyWUHbjiPAzJcJL65mYFAeOhnmVVYwz5OF%2BELB3p%2FkDvAxx5NU8xwhwR6VIv7vpJjeGGb0ij6Vt1M%2F6zcMMPE%2BcEGOqUBscVvsZgsVVD9AcTyEebON7CVjiFJt3VCkJwyq6ZPFx51gfF48RyNNYXfM%2F%2BUD6c1p5k2gLz4p6xIOrqAUiCESTnoatE3Z%2FUV2vlTFG3BufulKWQwft39V%2BEhdB9bqHGDmT3bVXGFqUqlnyraIN13kNeIn6Rk3R9XjrKdaja9gBokZVYDB5UIeQ5wiAlHIdy2RA41%2BB%2BFEdiaftc2mcAY%2Fd3LCE7O&X-Amz-Signature=c9f87915ba88a089af1b4778149fb7b3ef7a95c5b289220fc34b568477fcba61&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HOG27B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQC%2BjakbxHKU5ycwH6uksDc06%2Fn8gK3slFoEjwiTaYvu7QIhALv86pqhWo9oqtkiV4BYa1WWny%2BC6ZXd9AclNNv0tlIrKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0CwGpeOrcQ4JuF6oq3AMZP9e92gYAJ%2Btqc5li0yfWGpNfu4AW%2F6eH10pBpcLq9qZmpWLRq3sWozdnDmczDfr9B8zCI7%2BQlATUQngCVGWPY5LhLV1r1P7nVxnhgiCbHsOuthGNKrLKEpEgk6wUb4CtYsGHzc%2FZOjLOUjj91mZ3e3PWcj3ihwLX9cq3vSjX9rNfNXVHD5AlloSiUvSAmMoQQaXXipjfnjlsk1OGCqjqaWGIkdGEG9AaQ5jvdInseATEoH%2FBVI6dy5AErB2RLvXfYYVo8piWjx43UutWQVMLlCMU9P2oNyVkMRdY3rpPsXGShAzEMkUPAtTvQ9AE8h9zOSw%2FUf%2FmjReMzvB3fAgNTdEeuu137xBoHASSrq6HSkRp5tTLibCs1N9digdTrLj9NlgnS1dComeoTiFzYwe31zAyGS6SlG%2FIwX3K0YCAajPPFS2H%2B%2FgFu1JRzfqDPVirh3KoJizFk0h3B9Nzw4DhAQxuPp1dgwTXft6hDULWmbdtWZlClst%2BzRElUAea5pi2BGtFz5Ju9ffB0qKkcJ1nPnQzkALVCi7eES3EYuNhcpwaqGAHZJvw%2FcxQMuDJsEGI4SXYbLohDIr8doectWO2NMU2ZfXbt9cktCNtFQnXch1morXpokKNbmVOwzDKxPnBBjqkAbwOurUeD%2BpooJ2bTLfTfnCa0ldleZQvGqQp7t6uhCEQHCMRQY9i6iZ2l%2BNospb7XAP4tOlOxiqIu5kRV0Rt8PRLrxOj37eCsDW2nOqf%2B9vu4P05Wl6bI3Q%2BPCvXgBiYJZ%2FiZA7muqQr%2BCLwWdBZvZ7fUVQq3xGcss1WoD8JX9J1ktdILKqDdBlN2hPWXcp45lSr%2Ba7IHDquQNN%2BPmJrrmjI53pj&X-Amz-Signature=4fa259b8b4cb21eb8cc83048a0dc78a3e5f91e67b732e1fa7e76542fb406e784&X-Amz-SignedHeaders=host&x-id=GetObject)

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
