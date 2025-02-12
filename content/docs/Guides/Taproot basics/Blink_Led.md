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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJWEQ7O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDicW9Hu5VILUID2K4HHjkhGHa6hZ%2F6HdrMJTCz125dOwIhAM0oFD8EaUlYKB7CeMH0yjDKzM%2FEtqbM28Ni%2FNeLrEPOKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYzO5ijFZS3QqBDFYq3AMXX3Uc6QPo5e49ZXBJVM662iPZU7QWdrd%2FR04kTE6uXx%2FMJRWJBCVzevruv0S1TkA%2FoS029GqZcbVAZFSYQn%2Bw4brwgCBwFnX6UeY%2BnwwO6wVv8AKf3lG4GkNtZAUZiXa7FWMKMS%2Fbz92ePkE1TUpFE34bqIdVFIkc%2FtNI0Ibi48UXypYnyp1qHo6BDsXsqq5ODrTgrujCIk%2FOyjLllcPfbKhXULHxZ59JSUWRm8IccPy3QPW9sZrFrjV9aR2dG9FaZ055RxvzYKAyKxiZ4rFt0qqS5e8%2FYFsRliLfY2DUYOp3%2F32cB1gWz%2B8oXyPQs18TYDcL39Q5Cpija4law5h1ec9XTccUnkw2FaMhvTVWUKjbz8TYoEWcWo3h1FOOB82XVPuulGsZH63OUwsBxGKVa44oXPzbjZG%2FPpkk36OFpm%2Bk1CkEWPQmGMj%2FBZ6Z%2FmtIJ%2BQ%2FCCH70I8dStPC3n7%2FfuOntMJ4q41rIGDGEYwlcjy9TyY0cTIyJ16lXBaXjLiEMjeigf%2BfeI1uoW7%2FlPFdd21Q%2F5IRbJTsxZeyHN5r5qG35hIZjYdFp7%2FSxXT4qZm3oeCf1hDVEs85t7oEfYDZcj0G4%2B3BsJ6usGQ1lzA32itBZTWYkJlcdW7yjjC9rbK9BjqkAd2kWVP%2BB6tLgZCZxlSzpClc7lsihFjtYdhL7xiv6M1ir%2B7EphCTLVh1a8fNt3cS43GaBcDeOXTnce31yj%2FGbXTsiQzQojjH1I0GoENLJWithhxr40cfJgnjAEU1qmSTWrBDz%2F4JWrxLax9r%2BKPW%2Brmvx9RJzmmBFD8l8EBsGIB2iDRiitIjIouvcxWN4jyU7YIrmE64nfPALwmJ2FK0wUT%2Bk2fl&X-Amz-Signature=43a88d91d903a192a74ae74ad12bfdd5d6553b0a57aee85780201e37d0c42109&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6ZMERG%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8yillOOOzh%2Fazl3H9yR43AkGdtHVKRvH2%2BOVRKq305AiAQ00l4wDmxAw9ZuVTlHy3I9kyJ%2BDPMLVKfFuMAiBGuDiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkgtUAVrV5eHRrm9uKtwD3l0Lk958ZTv%2FRM4375JyMbNlFWFB8f7rJ2bq9yOnfgqfr%2B%2BfsdKUZLzmqo4DcgS%2FLhiFltBSy7fJaALWQkormUwbnY%2FAMJ4q7KwpPKgMzt3TEBbOP3%2FHZnG9TcEX3eB4nkvhQuOfmx6UckYFw86vk3v29Fjbk8wsY7ZA%2BCFx3aJVTo1j4DxbeinzRD%2FWPvPdCP3HxE1l66XwtbmglC6LPJLWEgA1pPsXBmFPnEd7mUMhJNQCQIwYYRSTZhSG7%2FZRqiwXpZIHUh5zZV6w%2FtSnyp5ZjnI11dH83J%2F6DtfI0p6ibtcsqRxkObdX2YxGvYrdXm6naC8YXjKe9m7wgJSWgTFL7s7XowVb7mro5Zm2VQmrZkwWTf38nMP2cSMxkQRc66PNs5sTWHFQqTagdQLDO1tqKO97ieVWyOarBp5yxNaG2k3HnTi86hyV5j7gXq%2Flvj26q6vDGQmnBNWMkyW%2BwpfALdCQ4JNIvaJ2JBfVUbQV7Pac2Sn99pVh1rjmd2rTLli1K62doS29%2Fx4zYd55k4PjrofiLhSws%2FuSzGPqkY35GKDTHXOt7Tc63WG1%2FrgVQvlIcABHUqyyyR3Lg4C4HM4Kaze9og%2B21rgmaE9KV22Y7ZdxY4t4VF2yq2kw3bayvQY6pgGQI%2BXYMb0AlgYo7gla08MvraOiq4Qc13%2B7VyBXW2%2Fp8pV34bcp5DA4T5zaXGFi9vTF76dJMc5zZopQC3m2uSNri%2FltAQQWoShZSAL1%2Fn0QJTwKTuTGVaIiVsC00LHJJZq1HzDGJ7WzzXltFQ0LweQzJV9v5LsIHzra88JCMa71c8JPg%2Bh1S1ZSOsdkJC%2FFyGB0HNAPWk0TbXvbCiqsATLOCvlMmG%2Bo&X-Amz-Signature=bab43abc0ee3801bdd52d75817ef40e4f405c73799f6d805b2ef8251e9d487ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
