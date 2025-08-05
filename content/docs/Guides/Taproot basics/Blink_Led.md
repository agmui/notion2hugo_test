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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOAMI7K5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCV8ChzsnxXQUp1YKcB46Q0vUnMwgtdg%2BlRKxLmZacWKQIgGfBqzWJW07%2Br%2Ff2aRN0%2BKw05RCgqXPgyjWbxluG0OSAq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJWIchxoeURnIYYlZCrcA4TPL%2FHOPkSFrvxbO34yn3oIMujRq4kr7HndlDnAf%2FmRRWrouSdJPK2yL7FEGdH9MkvTXCKVd1A4YXFiiOtORR%2BOke8PkqMGvOSR8ZoxRvCztnaoIE2ocqtSiORDe49kw5PmpGw7AQG3Za31xEfAFFpoo3vgejcomOFq3Vgnu7s5oNLXPKLUZCxrFfzBCZUzayh7Avr4UqOcJ17ZR54DrZBcWOP3rcJ6FGt3hgDRSROUEp9PerwG1ZRFUocmLbVq41wG2HpkBylQ9qwKovol8%2BjdWykaUx8n6jahTEP10I3Rr2L%2Fj5WIKuTy3PLmeViSihknaPTYJCLuP%2Bbegaucy%2Byd41GHMDnjdwDfOdMYXz74e34iKrjdRQ0zIIOAMLzv42gTKjQsCB5ugiwmaPynzTU41Ivbpm%2ByuwqpDLR7Ora4hurLytKbxi7qYg0qvenhfdN31BtHC6igqZzuG4mQIs4mMP1fbRdf28xJ4PCN9KqfPSZbuphVw2LesSDXYFIZRY2r8gipqDcg185caNtQ%2B6T42M54xvAe2iEKZcdVT%2BXfU%2B6c7SprVJl913HwdG%2Bkpn15ZOJ7SygmFHaUpnFtMozuXnL8uKTzwyai%2Fsv24xviihwvIq4OyKCrUmEAMOqDyMQGOqUBbZcDzZ%2FCSpTwfncShmgeJx3gxDPRAoqGfMWSOm%2F7JNx5p7v4%2Bs1Fh3V0S7vt80oM8pPzDIuZXXl7M8c2Mat75wzNfSFuSwgOhyzqJK0l6FExVNR%2FM4f7MGQf9cRgExNPcyt0dnj2uP3ncNFXIHVcsbkexkN%2FbGQbh3yH%2Fu3zAcrhj5LueF996ods7NQ%2B6q%2FodCnmNuayRbMP%2BsZ16WmezcetmPR8&X-Amz-Signature=0b5576dee708a4186522220075033c3af25028a518ff8dd0eb3e45c8167fee68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCNBOKMD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEZrfP3DMMTZ4M4UjC3hiCaYM8z0%2B85%2Bf%2F%2F08%2FnZxXdNAiA3jKroIGGRS7pF5ZfmuB2dUs0a1s9Bxm93yhN4Uqwtqyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMqb4SHMmldyiYgC9zKtwDqUOYilBxfaJOIxwXc%2FYil7bn6%2Br6AkmvLhQ1Zwew%2Fzs3Si4j%2BMDSFUOTEdp%2F3O74t%2FlB1cuAnaI%2Ftb%2Bz%2Bs%2BJhSqde6CFtXdq0jqgTIQirllW8pfPgCiBPAmMkKHO5zVCRnQTosFeviWQwx34Y9GBM1OKPvbK27QR%2FosJt4y6gxteGgt142nJE%2FhqwgKfw1IPE6Wb64u5EiPyyf71pM9HHpKrqbia86FZufXzVuksNrPZG1pj0qCI%2BSwk8Mmdxn7r97wuejvykODSHyr7F%2BcWq3%2BPvbyFAAGVDO2q5IG1gltIWAgeQm9S3yJIPI0FLf0bEjwTKgoHy7LJVL8r6YV8JNOjDw5txNd2ykFQfrbz7Xrs3YMulB%2ByT9wwsf7WirvJ8YFdT%2FEuo4W3V1AhOnuqmvFSpuPIPaA7%2Faxs%2FRyoTZ8%2F3WN9oOvh3NGA2UG5BkZcTir1Q25TmU2P0HYLeTwksz4WZdE7310ggk7ixUvZbAhaSK9KJRhD3UokhHM7sUKSVvAxpPOP1Uwc2FBTg6grWj0oSjdRPUfZEBz8%2BOpqsEScY7fZfMwwdc54tI3oBxVuX6f5czW0dOwCZUJWhFofeU2zDDbhTcf%2FsK%2FuoDsWijVzutDFoy2qzZBx30Awz4TIxAY6pgFNjNXeUN0704MoPiF24XZSL%2BGigyUWfID5lh0NB4MBDFk2aHbcnZzU%2BTNilV2X9l7GVEOy4v3Ng6IlN%2FV2qu9kMRR8qHMCvsVluw98axdr6shatpCzWCIXq2RN2OeS%2F4wNAXeSUCSqErE6AKQBwnYrP%2F4WDOn0jC45xWIwJfY%2F7Gl2b2G8vC9IjZ3aBnC7r0lsG%2F5fsUkpODjAV%2Bu9qNAG3yNPr0SS&X-Amz-Signature=e4264aa8b947e7db136d15b355a474f0712a5ab4b7ff372123b2bee57fed0746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
