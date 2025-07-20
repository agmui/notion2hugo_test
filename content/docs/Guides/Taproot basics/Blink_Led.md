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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KMLSBQX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWRwPXWjSIr0ofXUXXc72YLVDCnJCTIADSaXBzAD8GwwIgCphLInty%2FOtyBSvX6vn%2B%2BPrtfVETIwUsNP27%2BhKyMvsqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMit8Z6tMdWCZcmzxSrcA0iKfGe18yyNoNtLUYi4DiEAdp54PrRrOVmPgYabygZhOkeYw6Oi6hZpnXvz4nieeFetEU5OZLGS0amC7MU0SwLwA%2FrU%2FLvjEh%2BaE8PanzTHtWyJqax2L5%2BUa6Rml1x4CDRf3suoURWxyBL9l2q6b3jbLfgJQy90esgJszFqSb0dd8H%2FYruoj6qJlp0Xxugxnf9ad0ITFk38D%2BgEFEs%2FFwClDZAVwxl2ABEtGfkA%2FKPztMxJu8zbZGXyQSC7VovHbfcG7jPWehLVYfMD6JCEbSbgzGaibt8tfwQH%2Fg4iePIWCtL3F9ny2yrhhlwhr3%2FmAj438tjKAmzJTT3wVK1QmRKQmkoHqBxbOA05nFvdKBU6GsRvvd8fNV0%2Frsf5ByZs3d6zzUMj3%2FzOcdyf5pRKoj271dXKI%2FlO7ST5xixxBoEzRJgtoJsuAbU8dRbIP4%2BggfW6LEEPoYj6SjkwjYuw3maPKG86A%2BQIyMHyMsJCoSDkT7haP5GmQrWrZRENsW6dBNpVA6Aj9ngWvbRX97icMgh9QHdIRKc%2FDIxN%2FNtpJzfxGrIzpVV29poblBhu%2FTdtPuAd%2BoUaTx7v0awbvZH%2BX6InHPcQZdUFd%2BSWfpzwbOgFWx1Ix68F7pltaYqWMIS18sMGOqUBqgX3mFAtUAxahqklqw0kRT8DgwDRLHv%2FR6I7u6TSn6QImsTISOx8tIfSgRXy9jLg5GP33O7aux19jpGN7yoOIKwd%2B%2F5iljkqbuPLixL8%2Fmnl9xwAULugIu2eoqpBAAfGDdiH3EXQs50GMhXgxJqxplox6uZecYRu9E5o4QqIeU4a%2BB%2BgVsnpiEC4uUODiEMpp6E3NpepgTC0Ko1yxWLmgOHwN1Kt&X-Amz-Signature=3fcfd892e316a9d063324a388949a4933ecdad1dda369e7a646257e87c7347e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3UV57D2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzMWOIyUTPJwd6CgJtwf3yztS7cZGYIUwJIzUw3dW9hgIhAOKFVDkY32oWMSWFrotXbPiriEiOZZUyn%2FtZKhjfOem9KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSV9l0LwkHW0dYzIwq3AN2Xoazl%2FpwGyrlYZTwY2Iigx%2FdGobjjJnEObHv1WWn4K3Acahl3qmicfbaumUZhlbceImOCDAt9tvX8gE166oAohchzsDG0oDxpAeVYxku6XPZC9%2BsAtqunwygCfH829NxYhRIpibrJCSmOoIZl%2F5cDIr%2FB6C03j%2BnMPzGfmm75DgpCTLYfxhDZ12AJNUVWNSWqhvNxWC8VbKP5b%2FApxobtR7qdwlpSj%2BsKS7Hn%2FmPG0uObMgb0cOf%2F4OjD3NMC0CEFTw53vIjuUA49CUtbJCUUyu27zpNjf%2FmiRCQia7PpwQiH7tY6qhi%2BCY0fpk8UsCV9sZfh3OFS4U77cf488CRVu7tLqKIhyZ%2B2gDgFVyYXwKff6NcSiFl3saiclVXR7LTvoLA7XkY29n3HHo6UgYiVQBOuN7K1j2h%2Bs8nsji3cuYGJHgMEaT5oZkwZs%2FuMQWEL1F3kS4VTZ5Fhl77B3WAipiHHWA22k6ULCumaryBQbtZ9tdG6g%2F88wNm33TGF9mAz7%2FtZ8ityB5JtsycIffBLQrLLwVQu1jBHTzqCJ7euyB8h2wbVZ2zGdz1POifO2ME%2BvY%2FgqfjwZj%2BIDYX%2FHRLhWUCG23L77pEmo1cPeNuiEvR4uUzLoCJUWs6DTCRsfLDBjqkAcg%2BkPMikWYdjVbTiLf0Osrzk5vMzjffV8zVshzdWgi7s%2FGrhF3EMiLkjEWEGI2%2B5gA09X75ei26eZ5r3v4TWjh1qKW34KOKlo1Nb1SyqKDCmVyOEfBz0INcLiMHidtEZstSQPq5TTSWD4fFTHYWk7ll6T3BkJRYfoE2vn0oocjMg0TrMQ0qVhABQRQp79FoM%2FMIHIRO8fUMnzoGRkfbV8ki7XZl&X-Amz-Signature=748586c80349c64044f471a15ad16f4819495c320393d7910789eb39b0fc6a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
