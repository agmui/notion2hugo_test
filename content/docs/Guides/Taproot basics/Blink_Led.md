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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQTQD5P%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICjMCL1%2BJ69uzmCTYBohAsvyYzUWE%2FJgQ8DfAM3HhpF0AiEAkZ0nME8sNS9k4dzDYDlL6rh2iW79aTm6MMwF3KGyjl0qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRuJ6rwwSCVCZDtjCrcA3hztsPA5heISjSpueyFZ5mlzJof0izLBd8aVvPSnxtCi0IlwYJ08CwiQqkT8bOghiuHDI2AFzVy9Tcst6IJhWYaP3rXmZfkD0XVmWmQ2tRI2MeRbbVM%2BwGBKSvkqwvLmTyIRqT2cmhX2pXoOYU5zuweS9LK7QG0sVkklugFMvCW%2Bh%2FuqkHODb5pafOc%2BQztnCQctG3897%2F2NXhhZlYOe6owb%2Bj%2FBeRM1vlXmPqYeQp9ZeVYj%2FYg0Tb2yT9H2IEF3ZMRBnYdJoKPE3vHyZy0bTs4ZBgN5Hl5WkOCGeqKBZ2aE7%2FdEs48pxaKLicWzpOg2mbY4oMprPPGuQ34C2CV3TelGJq4yL1KDS1MT9xhncAkF89L8Oee7nePrHjj0palc9tL3GIw%2BWl82fMzz1%2BgX%2B%2BxsgdJfCthFqlBf3xPNGEAvlwr863LhnWryuN7jW2jwG8cOs2RA3ly3BDVqGrKmUxr2ExOxiHeH2WiKSiOpYHT3quu7vMbWPOVN34W%2BPnhRSY%2FfVUxSDAZ95ZyHNl4Cokw8y0cf%2Bsj1BvNfyeyIFoEmrL0d83nfjeBagm9qaIzsiY0lNxYlLWomEEvmrqA0QekXsCEb7PDdZA1TmVK5rYDo6CYvrG0iWgzPwhsMOz6ncQGOqUBoU0OvSg8sD5HpMlzCeJzfsgKmDyBONLITGqrZlQfBxV4uwcGO%2FeblnMTIfodIihEdWACldwI%2FHWas5oSlrb0LA00nKt8LsxGkM8XlSmSL%2FuwQlxU8j73CS%2FK1X37O0SoN1nhUiUD7Gzj296SarBiIgDiZd6QAglBZkOXA59sgAJxwKiZrgkSoCA3qPG%2BwBpHQGJ5x7Ta7hqgr9cJsnAZ4MTDyGWf&X-Amz-Signature=6dee2ad8443631c7f18947754cf9950a422f8d88e42087aae9473d4078b165e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELYCUY4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIB8xa3lf0sP5aVQ28keAH%2BZVxfU4qKs50TBCeerIIEtWAiEA%2BracJwx4V79J4C5Y0UMd3%2FiVRnWLh7TgNH7ntOMKRa4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6FSXFqXQYZ3Xlh3CrcA0JMb9RiyPf8ST9canKRSQk6pR7wO71%2BEEA2seF%2BQMn5TBJgkAnUD24OBuuo%2FSCUpedZc8t3lB4tVZa1%2B0DxkP2LVvtiQQtunjkywvui16R5kZSbIDKlzlmPMWn%2FKH3TJIeWaIp7MB8IpLfjeT3RJsYDtCdTu52gq%2FNYhSr8cCPtGjnlr7N%2FGNQOMWa2K%2Bocr%2F4Vi3f417fIuc%2FB91pr%2BKXFImQOP35QoXDYjy8gBkbRtx%2FaC8UGwYLJjokzptHVwD254g9y4CAGh0zjfyzcFytoByYm1YgnhXi9l%2FlfJN8Od2ChX%2BoWwEj2unB8GYJF1rLENC5J%2BHDyXmF2BC4CDnk5WRzGdTPn107dZBaNFCwivuXXKRpliUGJfLbtF1XZnotodmF6TxVGeay7BSabo3FRDRxsAGq2D5MVnq6h9i30pYOVGiFV5M2trO22%2BqLqIleRWf9DjHGrG%2BTEaXQGvtvn6cHO6rZmtXq7O38js4km0nUcTC%2FXy8mRMi%2F4PaQSazN46BP57vlsSfJ6gpY9QIXUXqWwQHazGa8dKXiIw0jKFU5KfSXYKOaNDIwExfoTxLMDMClIcfQOPlaCYGDXrmWl%2BcHgSaO3dcfOcpPCIXtz07rylJHvwW4Mvf7dMMr7ncQGOqUBNwsBVXYd6mcNQERaLh6a1Rn0zsOPwugLx864CGgEKO%2BVc8VzfE4%2FVfCCBGmWVa5ywb352b0MaIw9AqPxRQnfsosT3HLniHOPFYHj%2F0BOZRJPMSmkp%2FPHZ9qhbtuqhRZID90k5JJAfZC%2FRvxTDIqINm%2BQC08j4HUlnhOom12R77qzdl38nc6D4bon7aJvdtN3lEeE37IGRN4LlKKeLG3LYfu2pMNy&X-Amz-Signature=6b887a33417ad96bcba2bba352204b52bf9007e6fb9865a125c272f5eb9ad35a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
