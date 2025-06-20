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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMY6G5TZ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICevLfQztsDaxjWGzi%2Bsjj8x9GAJQWo0TOYZr7tdQGViAiAowg8QHXlAMf6Wz77RXCyqifMnmo4zW1G4hfLfRHbIJSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuRSTUOyPDfjqxIQOKtwDb0ZyZzFf4968DZPphG3QnRmSToW15gxM4mMj5Cy8YGmgIPj56jS%2BFZcEpFED3UGIBo0VhwvgUDEl4ZNVlRGxT1aVEZG8Hp%2BOPAYHlxiXcA8DmfPaVjtBm7%2BgIn8d%2Fv5Z3MUxGi3rotHgUwT9koV%2FNb%2F5y3Hs6YtWLxmzpq%2F5u9tB7hH2Aot3l7uC5H9ecGdIVszBM%2F9AwAXoFMJrfcJFNakkhukqTt56ezJqLKLOxzPFOlTlGUmodiY507LnBI56dCyutXx6DGwHrhM3BfaDzbYRqQufL8NLSLNZBNn751cdGmdPFmp%2Fsc6cl4i3c20NVwaH4tnCXEo4irPBqWRdme%2Fgh4gU9YbOSSSYO7RsMHpSZRNChTL%2FWB4FoeUtL6r8KajQQsOlWNMOh7%2FvsbRyNqLS9qk7W%2BaTFhcaLPdFMiskaQxnRlxSFDvh3jvTq5iSoIMEpdwJPHhdbWmqqVH8k%2BQvWBfpmlrD5Bx0CNCCsKGkWOk9ZtxI7ee%2FGhB5ASs35Ltf7fPCRFRHLV0GcHfDN%2F2%2Fb4tGCUppTx6oe75hGypqG9z%2Bcw6P4Ru%2BSsrynHta6v3dyuuL%2BjU%2FVLlzkpW89vFC4thqBPG0s4qFsvEz3QYqqMyFUTq2LZWj6%2B8w57LWwgY6pgEKAW7u0StW1cTUkkEFJsO68P3FW2pBi1Gfcnfv53Xfe8t3lDDTHL8Qcbz%2B4YaCr27P5SGjQDQJ5S5ONDo1QApV0bjPrdkhz0RQ7IbQcwDE0O8xPZnr1ZryUHvZQahBS4EytLRQSPjDo1uBngQKzjpWLkUtZR7NvKCmlVO1ONAX8fFyLVJFWVSXE%2Frcq%2FQRRXgQ6IGBRhdcj65aptLPAMZ8nK3OCEVO&X-Amz-Signature=e0d2b53b3971292ee40e57a3e4dc7e9bd487b871859940099d42c27cdf4ad4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOIHBQT%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxQj5VbAOpVS%2FQBHK92FgP7S0QX0CKUUHWiBDgSiVQOgIgRlZGNlPy0stGYgui35pZ0PSlB36YHHg2toSpjAeZjdQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyW5AUduwxk6vcLVSrcAxs5VFVo%2FVVb9Vax9XdLrb61xWPEE%2F5WUWMRhBa1gSa0PCyfeayjbtX2MzbucH8AG8wRVx1DJENFY%2F6n6rAcmY3mhb1Gb2GS5xGjw%2Fq1g5wqbTpod%2FLntHRlvwa76EJONBZrUCn2NJaFsOJVC79O3qB%2FjrRuWBSKPmIEtCNdmnyoe4uhjZCoo4M8ct8YCfnRihKIjpZKEHcedJ2Opa83qh%2Btuy1wGRkpkRsyBaUtdh2EDK47JfXm3nmn%2FHFiFvGYGDOac%2F43KjSeLyJxWp8OUNt%2F12KOtXdbrZW3w3X73WT97yoJiSifNeG%2FE0yi8aPHL4Lw4gdMZASNPznRi0DPPtlscwYsZ%2BpqcB6%2FLxiBJkNIJA2EmaxAZVzRd72tfkyBz2zOyGvqwl7sznU4CmthStY%2F2%2Bsf2P%2FCwXtSMjrk2t6V5CIyQvGXnxBuI8HMuqeaaNESWNQKab%2F3nZFiR3UmlqBAgFI2UJbwmx6Uo%2FCzKPKSPYydtVYpP6FjZ6tKudiUdqUwo9Rj5J1FtAMkk%2BYTvO%2F67843UYh4lpCl3vHh118uZk%2Fla70mY3EOcnz%2BSKJK1vizEjYDAIdojDEBsWWK0NMNXAs3bhOcgZ1GakhNkkMbhl86ogSmeQqTGHPYMLSz1sIGOqUBv8BBM%2F21jRbHnriy2IWuin8YqLmTllPFak2pyPl0Boch2AEUpXfmhoGqZKQNP6JlVBLX1RbD6QMjhKbe7ANH%2BclkQa1UFQtZLvfFEDyAn87yzomD%2BIwjxzYyxkVIej5uz6ZGvGqrv26KjtsY6yqTSUlMCsu555yhNvv9SMu%2BQa0KhtEEsVZLajVjA%2BCteFMxiKW014GzpteSm962UaNL3u6ll9hL&X-Amz-Signature=a90c7f8e7ac4417dbd3f6b38440d7f858fce0c3fd2789bfbb5207495d7cd0efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
