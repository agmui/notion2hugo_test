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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VJBZBZ5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIB0dr2mWZeNwK%2FVDTVepnP47UxmGymIZbmsU82Ks8qxoAiAQ2rj9%2FsgAf21d%2Bc4EpJbP1LIB7qnVZpRSMb0d4v2aDCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMuGpWnVB9%2FMjq5l4XKtwDrL1gJQdilr4LQODLn%2BVCCrLvf%2BZE2c9loE0URrX7deyYJoDfwkavXCRXMf9xoJQNte9%2BgC0fAlspTkppyf7dj%2FXDZtXSnqcyPDK4xlPbRPWkXBQMXEf6V06wx3ClLsNc4UGDF6hf6dgjQfsiZCXD5kj%2Bo1a0MzMIwUl7TNML5Yabw9Cfw1Xos7aRQdZispXFx%2FfdobmepdERqBtf%2BdtZwXcbAwAzAIJfEVSYtuBIi8dSSi2o0Vsh%2Bm%2FeEwMpF0ovaFMkwuuLS%2BfpuGzxafM0M1ogT0K%2FtmVhIuRuklLAmt9rnli2HsGYD4wnBHvCGFaJMXEsygR0VdOOskQVEVC%2BGL0O5NU3iB7lSVwygBGpwu2aniTWrBgbylF86iDDvna64wYCt2HCaW3TlvJSc30EBnUZyu0ScPCQcXUE6pgJqxZV8naFqFusWYgC2MaoxXtuKIGuBawVLDCOqfU1PsiZ6QtXuZdqN8WZsCkKiXTADtap0Ec3nFZsDKMVoG3bkoZtHorFutIxzYKb%2FHKAsyqFUfBL8%2FuGCio%2Fzj9THhMzqrErP8%2F236twZVMNwKs0AXEisKOLiQEnfY%2BTYq6MOJ0CM0JW%2Fj%2F0%2FOjsQu%2FhgJAn6JQ59rcTkWJ77JdVlCYwy9j%2BxAY6pgFqZmF717%2F6wew2tSEz2JUwIpoZ1pvjyQESXyDpCfCKqk7bht%2BtWRwQTKVY%2BqJARc4V8rUHvEWch8C6WtUW0XfyJwyASo6Mi91YCj%2BJftT5cX0%2Bz6wW4YPT6Mj3VmErp1v3hL4mtmXP2yh%2B9CmvGRuMoQ9p6mSy4rJZ8qBN2VDbdT%2B5%2B5OWZnfFl0l9eFHfEJNUMn5ncfO1kpOk9Zn5Iowfd4%2BwGV9q&X-Amz-Signature=7297b06444c8cdd2f03ea6ff387592dddf76842a04f2da29ef7ca189a2337c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665WSUNUT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDaxTQMQNGN%2FacdvoWHwqtM%2FnVKDc8e2CDgA%2FcbTOI99wIhANm1muHAgLm4lsBoppBO7tyOQNAduL1UNf8EdngGcFtTKv8DCGcQABoMNjM3NDIzMTgzODA1Igy6cSvsayLwr4WBAasq3AOtrwpdxMQDIJOKsP9V8N4Dz9bkaEW7EfD6qd1G6xsrvHqXDibaswSQEz9rYRM4FQR9FGR11s868vgMxsV%2BR4pU6R74%2Bhoy5bRtWBGN3gLHGsOBTyaArTmE5OI3y%2Fhj9spVrbQaU5WeFi%2FbxYXyMGONKmAiYuoMVq0QZ%2BwJWMa3u0wgDST%2Fq8eI5vkHpch6JS%2F6XedRcYHNY2OLeD7UHqV9sgs%2FxrZnadrh27OJQ383Xh6MizmehtxhOxHRDxgbU3VQOeXWgVhmlHniAO3kiJauVT2Bl%2F1v748284jCJV%2FkK61RD8%2Bebp%2Fs%2Fc5t5iZMJrNdQOtRTxkvVQbnQK4hFl1qv5MNyUS%2Bx0EX6QQ4kZcdMW9w7xc53sY1%2BfXjP%2BvjUS2B7Npp8yyNOfkeP9W5Gl43z6Einci1anB6MRhQJpodNaSajVXkZtox4N7rNaWFYbezuy%2BpQcNrktOOr6qdEPKV5ikEjIq6HT5d%2FPY22Rz5DjB0aFPlVfqLXlqOS06puDcMt9sFex%2F1plAmTEmdeV2vMqboRProfhDRKbZKzh7UFKmPROxfruilHkmDZ1j6bn%2BLCrKVY7BtPgCpm6Y%2FyWUI%2BxFMxcFFZbSAQ%2BBFBN0b8vZTSGSME2ZjkN8O9zC22P7EBjqkAUgdPFqTTL%2FGSl4MmkrUt168u8rRHII2Ec%2BqzravHm7coIV3XlZJz2oSsHqHin2xV1D4Kq2CSeRUJBDuRbJToi5jyKFt5cJk%2FaYSpqurZPQEWGFuVYzYknRaiL30Xdl0xyPiccAzdd2znXrMLqCOMPPe52hqEae5XzoocFXgsgZAuk0tcjbm0QBRdnViqOyzTn1GBnp9q9%2B2Y2gwapAbvGwt3S78&X-Amz-Signature=2dba9ab2de615c15ae06e4daa8eb907a2ca464caa747d63e08a8adc700f3e757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
