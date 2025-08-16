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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3K57JTO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIErsfZv9ZEkBlIbrI1PQahe81wm7gTqDsLRVe99HK6HKAiEAyv2hEbINa%2FWSRlVwoWEqExpyMmFS4xKO6zB1bACZ7EQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMjPjXahqCLEQgMfPircA292iQ8jy%2BGlB5o%2F%2FQSvabO%2BESvNx%2B2HHKqBnR0ifQvQEJtjGtOii%2BTtDZ4xquRJ4piN%2B%2Bzr8yofqINNOtOQp3kU7ggoSObO1mJUGZQ3d7T0%2B0GAx5ErDjS%2FxwJj0bT5kwbtWKO0BxMhQQBBAEexHfHznyWhp%2FjUS4zPho5WWbGqZJ53ZjCxXBVJgCJcf1vTIuYVytfkUn2iXqsS65CBA5Jr97F%2BUyhSuVl81Otw%2B2RIAAmabiGP%2FK0lDYpbrxqf8GpVKdWI7zrp8O4nATHtEboe3qGr3Cl8cQnAZ3FcAkQfS%2F6ARzN06htB9Ae7CcQlvKOdnvwRxKTelLdOqePTx4zd5H0rup9CT0b%2F43pRKPHVsXT3Sqkgu4kPAmlElC4dQvz7SJR3QQJJCyKAPqJn6YIHw7jwk0XnYbLYOmq7t91Eeh3FeAYUQWZXBp38TSF9z0KESKy3sSoFRjmNmdLSl37%2FU3kC%2B1nC4B24sXNqbP3S4mYtWf6F3YiSgX9awYDbMvtk%2B%2FEKn6wZDpbRgAHPeh1Vi1OXWW%2B%2B6TXdRvzkMFEEU7QEguQ4f%2BjytVGjzviL6%2FPNpBuxYRkJXLnSm6hgrkDnQaOxHOYVkmKBdIgj1yUUqhCIkQkxw4sBZL4nMJ74gMUGOqUBWQQDvFBUNsbZ%2F2dmCM%2BsO%2FKV0TXAKm3jAse3eAumQeBjCaXyoC4Ixx9jNjvZ6EG4IWSf%2FXrMe4qjyjHGrWvg8LBC5f%2FJ6jd3%2BSZZ1YfgTLtRGkeE6P3WSN5PSz9%2FGdgzsTr2QlOfSReX1FXxhr7FJoSNnrYGnoSIOGK6sMuqIagy1ZNlcY058nVkZIl%2FeUSiIX7Z1P9igINWwU8Omls2pTuiRkhI&X-Amz-Signature=f2fa151d6dc69abad52f0e5fe2925e8f9d5434a60c353abf9b608facf3b47c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQM3HZOR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCZAQ6ufgIm4dACfzWHG1Jl04khKRwdzvc6hStuuZ%2FzWwIhAJ7lmsjmpTUZG47slNtq5L92mq5N1HEFIefhP9qbi8jhKv8DCHEQABoMNjM3NDIzMTgzODA1Igw8EZ44OyrRC3ulsVUq3AOri7kBZZZmqubg5IU0v7HVEpPpqVr7jc6Qk7i1REtpsDGE%2Fbaqu5C7tRsAD7vJQZQemvmiIKyp8f%2B4VhlRr0xUiEQmDBl9QNIEj0PwZalR3iY222l8Ok6HWv56sW8PpVfQaXFAoTPOIZHUqdU45wVOQtCNi2IwbVYWFIjeX8CCa5ZAnAvQogz8dtG0i5LqHHNSRKLtyvPFqmLlChTO%2FOWJFFWTgRYfH1qr26TjKuedINGIRpreIttjF3Sl6KVCogZZo56p9WOEpLTtWHAbojPs6WB6%2B1q8RivRleATOiWnggSw9tqwYbj5lNisODhGkLGYHWFCy6FEqFfPT5F8UpQ8yDRrKy8Q8XRc5okkIf%2FC62fdVLVCqRRGkmBMRzp4qj%2Fx%2B6Pp8IrdTNm3QFVdWC%2F20PR7AlrLBz7%2BDDpc9aoxaoGtCnK6aUaNygrbQQob%2FEzLqIcoVKAfOIMZ%2FZn0%2Br9SI0zfVXSr0MLrAeBNEGByKkfjt7t61ax4f9K4iqeua%2Fluj74pM06CpPMZyzQvvEqnuvOIuNVGMLtP2viG%2FJocF8ApwemMXog8K9hWMhCDY71jL8ArTtFkQ9aaZQMRW10gZ80%2Ba8V%2BdAfxfannrg3eOiOwSBfzyfVHNz5XWTDX94DFBjqkARkGbP45KIL2E7qcvNxCCkDf1Wh%2F1hotwxtx0vfnWHp9HTExOJvQa7EX2rum2c5pftcR2PD%2FYpXODQY3iAXYsL5td7gesF%2FgqYNl750ohW2Sur4hABtxzZ%2FEEY3lVWDrdywGnXeUA4XpSimaS%2Fid7nrxcpTmKje8ryC6LxexnzYRoywtARHSGvv0sdITdkwvcTHaKqnw%2BjbYjxpTA2A9XaYZAc0d&X-Amz-Signature=61ca73e93d1bfb51bace35d72bb2643ff9baaeba59ce756ef8ee9dc09571d3e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
