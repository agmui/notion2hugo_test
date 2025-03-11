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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGA7DH5Q%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEgf7YUGPxhmzJe4n2iniIxy9%2FCgrbeoUkPSNJjAv5yfAiAPXZVs78auV1iL144LNhoQLw69VLol%2FQ23FRys0CucuyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM28sGitPqdaDTNlmlKtwDLXQ2rMv42Wyc0C8xN%2B24h1LDqCGs5WAUabTZO51%2BclM8M1xAe9r8GMLYioapuzVV%2FDgUWN0%2FcpL3gdA8qdp%2Fmnp1e3Qr%2FPvObkQtd6nf2Qc99VUiv5n9UjUs61nV7tbKrJMBb8xE57O1qAbKXAlkAdt18Aj75EjQKFfQBTBC%2FZZxVUogVTlLbBCIEcmY7f8YhupeLjnOVJOR7Ji39piKdK9WR%2BwoFQzkrLzJy33csY%2FdP9rFKD3DpH9RbvzA8y1HlxnjgHf5zJFnIF%2FYLCIK%2BIBIsdIC%2BptUlQg0x%2FAq4VichF1tDZJ0iui59lSuZMeZBnCtCl8MT%2FhyqN9SiyoZXClSah7d7KTIf8mjjQ19wX7Xlvfe%2BTxmUd49lhUrysHA1sJQq57gDaBDFF5smRacd1Ky4vfziWWNaXdWnE8pP7rx2pmWv9DqDSXpBANmCX9xhUE8oWhRCrP9KV5ip%2FBi55bzjcsAj7ju11RgwgxTOoMc%2Fmz7xHBHZF%2BxIosF85ZKRZjxgdZlz4mdzlHIH72Mwm0fdpJR7IQLx8b7vxK07K81Od1ZRauqeb1%2FW6Da%2B%2F3X4CREL7Z4DmufOLMa0c3USHfsXDf0VjjmqSe%2Fzxrl3k9NH%2FOxIexqpdYPJ68wsNC%2BvgY6pgFopTh%2FsghIh60flJLcmaBNNDlFD7XYnCOq1d%2BJXqZtbI6HQ6c8zX63c5ctSgMNNybfRlge1Nc0PmH30imdfnvtbZbh6JzV%2Bgkc6sYGK8j9fmND7tNrS40vx4ywMrvBH%2F1sAZunTJWCQenIQwsfEi6J8c2WGKd2l3n3udu3o3zLMTaSYXcg8pzR%2BU%2BYCMtVsw2q6pmUgC4HYaCHWYgdrnzn%2FLHe4lEG&X-Amz-Signature=82f987afa4e89b7de4e13d316925310f4179c723282bb26abf07c4e5e27899c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SZKSXKY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCUQ%2BbZassT5KrSYxNUlek8weQkcjh3qDP9OHeLmV%2FJXwIgC15YvU7eJBy3Sr1DolcpH0z%2BI3%2FZbHpGRCTQkBM3cGwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy0bLIkWX3KC%2FHsESrcA4XIy%2FkrHahKgUydEuCSLl5Uk0IuSMW47Vs%2FYhNkhtwH3L99MVVVlDaJogHHg%2BGUvN2eZc7ALcC7TOZQOEywkxEv%2FUA1iyNbFXnhL70n9n689chwadwG5GHNDAgazLU7lBqlASL%2FGPpw12KQJBcm4oejgY5T2Cj%2FadvfH6c892pAOmkoDl8n5QnSTvgBDVr5m%2BmeQxK74yhqah6RJZpVVbstdBL5TJv%2FfW6sXhC6z%2BBfL4yqBmtQBnXXSXwKbfhE1BE7eh4zb9%2BbvQ9YIKBRGsyjQkd8QUvr8UoG5Fqe3WYK6vzoKcsdSBXR86PEteQElG09JcMS6h8sOBtZV0JC%2BFmps89PzsjLUAwx4ofsxmp9oPlHLiy8pZ3wPPnPXuGemyZ8L4%2BhGYhbX%2FZeJMkF%2FN5KcKvhzqHt2dOwamsfw0iGEsAwWV9wlfk0YLdhNY8lcgFcatppRlQRRS1NRKkT%2BQZ6OVY56X2lS6z88Ssgcl6sgD85dCqkKqjT6v6qbxnaskTpJjxVpBFL0qEnpSQKklj2%2BtP%2B9mPuYS1jxZOoBVsZNngEyNliVPK2rGLAJwK5XosVaibS%2BDmJkGxqCwGKf8c928B335obSrhyVfymhxYHZAd5TNXpSbuuKTt6MN%2FPvr4GOqUBpUGjvy0F2h311ziwYG%2BGMcYbDNaoTGobgh14u5YLlQGroJhHfU1JuIfPARU4s%2BAdOLQbtm6LeqbGwlVLYfIkFOnUxjaBFBeMnpQyc0iLQ3VAcS%2FZNiHYie0GOU%2F%2FHJBMgX%2BipiIHZsNsTgvBe%2BNnUbuBK%2F%2FwqZb6xV7PRsFhvR%2BrFRfgb2MLeBh7gMnmRrdsczGxO772iv64ncVaO1v%2F8dGKsrp6&X-Amz-Signature=3e1b0b994dc5ae933cc734a1306e728f02805f6045740213ded94321f8363c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
