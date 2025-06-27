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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WBE46FW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE8u3zdylQs%2FRa1ZZfxtwy%2BNSCA2kfJGwml6hSq9yFjqAiEAjjLVUWFe33S7JamouYPz0HSYoe3ozCPAocV%2FUVgF3A4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDLqEvNc8YIvparB4bSrcA6ucHkzlGC6P4hNUnJkOwof%2Bcg0o%2FhLOayo0PZA6bb1rk3SPpOFJa7hKsOR0%2Bz9MPRdlDfuNJx%2B6FVpchv1iKBx6QooPBjy3R6H71eYLAmFXIwW2JTz%2F%2BE4HPpaLWIyBm7jJtLBD8cOB8N9pBYFzRp1B5sdsKq73vI1Pd7PBaZeEJqHotCy3nkEilhBsaQLALhOQAw7wYlg9sfF8u9cypoanKEfxwAEN%2F5bk2z16Se9AnuKKBbKPRDr8ocpr3ngwIspoG2LsLM5txpFReSWcwctSNSeNivRzLq2bTnUtgl8q3hgVdU6BTGBYy%2Btl3rm65wABDlcQwYGUM3LVbYpL7VECv%2BM%2BrUi25sOkYpW7oxZ3hmnD7O4QmYZH9sjbwWL7br7VuEF7NgeYPrt208itTfX3Jiuuh6EBiZvrUUVHrEAdGEn4Z%2BQqpuJJdhdj91V5c7w8ZjVn9SdQgsMLBbrN7FC%2FI4Y8UlUQawztJl6WkiPKU1QxwFrgWfyk2m0lA5L0pO%2BNo%2BnZHpQb%2FQq7oSRUjpMrBqodYU9Snc6S1zBqUbV1NdgbmUyd4BqIqFlnO0FSZugFuUilBLPDJ3kX9Aadn9Pjazrl4z4q0WOiFHq4MrGVg4rpteOmsuBC49KDMJ7298IGOqUBhLJOj7QHSa8BdimjodVCPKKLze4WXGYx79PNeqgoSQAf40xBtFiUNS6CqhhExdCcOz1Hu2bkn%2BOYughK6u%2BlG5Cju8h8Zxa7PKNZs9kL0uUwbuDc1YzzCPubqw30JfLSt5PD10fAyLdbhfrbKeQs8u%2FF1e06WOhslySLaD74suYozzCTSKxYIaoG77f77gKbM1eQu5B89yl7Cj5qdHwBGmVjlFMq&X-Amz-Signature=cccc20a667a62a73290a88bdfabbc58a04ed3e0aeffc2fb965ca7dc194c5b97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YN5YS7%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBwx%2BzPKLMeLytYWb1caklkA3zEtntAkjvsUhksYQ32yAiEAhT68XBIXwtC8vXG0kYsKwVTbf3YdopRYX%2FeQqp2Qrawq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMwJJqKABOj%2BmIiaCyrcA81nfeL2g7t4HIMdv%2BBZz4Km7Hu2cA%2BCViVGSEMVZILnKRI5pWpChMSwzyiNzy3x44bsJl%2BqwuepXCl%2BxLMHjHQaX87jPgQNrhsgW1qRdBpm17bGM3BdHj7FH8yla9lTcDIZcfm%2Fk6d%2FoamL8XIiOAy0e5%2BEbGqX17Bgcr9VLlhGvs%2FVZy0v0noOwYYE1FK8sPQO6XoocJjClUWNp6uI7%2FIHvVMBwmTmUUlkAe3y6H15j60oV7NvwqfHmzza0%2BaVHD4YekyI6Y7mz6Bv5ILbLxuQZIsj3VnB9GQBylFi8rMM3s4qWLkLt0jMicefpY15trcu4G9Uy7vMlfHnT2pLVFV4oID80h2HWJeLg4Scc6XlWNsanXpkEanjtDbS3YZylD8qRd2vTiCQHG7g1u0YrH7AQ4HL%2BSQHvCcNGa2JKa4NlTv3PtbGMXmA1S%2Fkl70Qexng3Hd%2BmxJGovoYGI%2Bed5y2VOXIgHShWetLA68ARXH99wgT%2FZ14FxyP2vqLGt3k0KcxBfCQHwsBkwo%2BQlFDzM4CFjhCbSiV0oSfjTeeR43134Mm0anK3rOMKWYJxfaBp8tOCUYfCKdnOSg%2FjG1BrL6BjXYAMSQLLlwgiXZbF0v3AdTCRik9S0PadXvjMID198IGOqUBd1blk7EQFLU6S%2FVsA%2Fso1Imhym1VDyS4RsvZ8v%2FTBExdE1D3WNNZLqo7G12pZUBYjumONBkgMlQZkAXUCMD4tDe3dQgd7zJuigsnqjz%2BwCAS3XiS0TX%2FlEN3V5eiY2km9sRcDMvTPijIBCqL96O%2FS7rFHLLfqEBoKwiZwz0xCKtDtTQVQPsWKr2dGjKybKboaCPpjTHCCtl3EW6hhPfPU5jG7p%2Bz&X-Amz-Signature=e0b5742b1bd209d031a2076484a553e485b7bdac5e7e64f7783c06e261019f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
