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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BWNZCU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBxfnX5bjHGXhYaHELIbpWkCPLk%2Fxr%2F0hZyec%2F0KIrmeAiEAmlDLhDsMm%2BlRBJpfn5yfP%2F4%2BMEURWpz2ily9gSab1p8qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNooHSaZaDy4xlNFBCrcA24QXq7VQqUZ8%2Bn4V9OpVwjOt27rXT2ofqQQU%2BuepO5gX2yv1q5Pswe2FqpTmnBrZCHhjs3Zuu9yroQFUIyOiO7lXW%2FFlG8gO%2BRMJVDwRM3IYxXgKp6TQNZLaKkOltpNLxZf3F6vj330gXM4WvshiqWkgYbC%2FuD%2FlQhqzLUUIZxofsqWiLq0DxfGSoGjFTyfBhQRWRgVkO1rD0pa%2FmydDGq60mg1vNnMMYjmRVqjgQIxH6besmz6sQmwPLuYbJXJDA9BXOf9MRSfErRIzgIR6Z85x48DA4vI9JIDcn1l8EE%2FSzKqQYqQJufYgg123B7WbE1X%2Fj16CY%2B2OZCZaYnC9C8dwxQEreXF4Qrs2HUEoWzc4B44H%2BNeBO5YWHi%2B90UjuVIOK7stE7tNzdebUKslcQQ1JCPdA6kvxhweQMad9aPnQ%2F7bytvG66N%2FUdGafpkQYWLP8c5UXVfjIgauT0PuxzWzIjAsaK5NiuoAUgnSsoat2qLMCc80HjgEASH2Loqr9AoX2BzZ97Nw0cWD4poa%2BI8y14Tvq18eH3XkiL3bvs3Of770Bdq%2B2J3T4w61KPGSYvPLwRzuefvUi5m5ypwdUkiLkSczO3MkexDkeDxnzVK%2FCHi%2BddTRThtkYznVMJ%2BJmMAGOqUBY7Kor7NeLqMQL7ZcdXWL4GcTyEnQckZ587F2Hqzg8mmI4%2FNMhArrIDImubfKdTun1JsRRV5hJIoWx545ik4KcePXjRhplzkGOBes6QIh2rPJE3M8WDAxhjUgwEWlowwWxx%2BZPj8UIQLbyXGa9aDPy7r0RLAobdmDokc7IxLzfSIfFbHF9x9eLFU4tYitMgoV7lBmz%2BaiW%2FBw7iVydoraS8jKpKX%2F&X-Amz-Signature=e374064ed1358182a3aa12f7501b5a4d3549b7ce9ec389b4f2dc6158c000a74e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QQDUYHC%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBpWN5CAg8ulYoIbJkI9Py8RoHZlirtX0dTTmkPlfJjtAiAoAmaSxCr1QKS%2Bt1dGy5jkYx4ovxQTK9vxqmm4VgCACyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwgT18xapugBBPM7vKtwDsucfaK%2BAXYLNimOB3x96GfgJSpuubfxxsGU9RU%2FnNnLN4IDX7TbJ7PAuLpyoAjEEZ1BvNMahiAgJJuwvE50s0rlNq2BeGEVuahOz9jbxVi3CToGfftfxQbm17dVCx4iNUTmLy5Yx82eNA8lETL%2BlZE6W8fcy3r2b8l%2BGysGJZ%2BI1R8sdp%2F%2BAE%2FQlHZYWY1gRaXeHNCZ1Ni3yJ1TFoNU2wsoi8v8%2FCqYLcb7%2BJVziXTJRAO%2FRbecrNaP9KwY1JF1Uqnqbxb1UCqan8tbnnlGXnUguTEVOuqlLb%2Fmn5eJUBbQAxdGvMD4lfKpcVUzzuOCKuolUVn8OzfabUeiE2YWCaFWF0GMFZB5f7GuJ0doPaHvNemI8Nv%2BfzFCZN8IFw0YrooJEazfftO3eg8OeLBp%2FpHb1Qmcx5pCzHwK3706mBU8hObHGUoUV8HGoTv38agx8WMWXeVAavl28whqX2IILlU6OPfRthuofCVymZ8XuKeHX%2FKqkgl15zboqVDCCes8y2a%2FvAbcfo%2BVAgWUW3foJq5BNIanndxcw6Cb7Mp7k9hfsOUFSbk0WB28goSeNOoMZX874gwh1yiMA7GKJykdAUxnJjHCZKuZjDTYzUiBpMM4jl%2Bm8Pub0pMOzUCowrYmYwAY6pgGtefN0y3f6QnrHx3A19bqQ4rseBPWvf60XG0UuVseJaDyTX6mNo7OG2vPqkP0S09JFB0l2Q9GcIZBVnGw9aKkvBvUJNqAbfSMsZqbdLa2KAe78axMa7fnlLooZnKqLbUOzVrhNyi7oeeDM%2F72jbyTpz1ziXoCc1M31u4BoE1nMr4b7m%2FHPMrb87d42IbUbwvz8GFkvQX%2B8G%2FOABMYNhcrSwp1qymsv&X-Amz-Signature=1a26f859989943b43ab63426223901796c07d42e2ae4c9a5caff043f0b1a7bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
