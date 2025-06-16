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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJ6XGVT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFFT%2ByHHe7%2FIZ%2FOPiZf6wImFYlRQaD%2FP41Gik5hlS%2FfZAiEAmDR%2Fx%2B7fn2EaLy0AEBxLE%2BusNhWzQAYKVUFinOma4l4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPEmMQ5intTXqzLt9ircA3MJgVsNK5MT6CKyP9rWJZPkk9a6eRRd1l17tln1F9OpTaGJ7w5MfZlt7UIb%2FzwisdpfykpkTmLk6M7OiiY2I45gc0%2BwMfvKpOBtPM13O2EgDxpQIoDIOZguzKKK3%2F%2F%2FcQJleFhpvrRzQ3%2Blb%2FUDrZDu13F5bNUToKxJhsrAvgeYuxwdA%2F%2FMPaWOKd0zUva0szgaMs94N9fGhkZwZY5eXvfrZzR3a9l7nvBsJXEp93WDmLiEEAnt93ZcMvEiSjACwYSmuXS%2FrsDy66hAZu%2B2F6D3eTU31R%2BVPpkC09Vmik%2FNhi5zF5gDuxqETE0o9yJEIcqDVWGZvVvsdk6k0cRXJWA%2BoD%2FnWg8mAveBGxD42DFBxrAougZGoB%2FhW8ZJORXuNFTMeNYwHQbwaCBp%2FuWFJ7%2FU0uys6a8O1CVkhba%2BbRbk2JF%2BNMbTLM962l1687X4n9fSbr73S6Y1RxvQ%2BbHMqg8CYFl5YC5x0ijXU93rWz0zwph4omDZSId2UHBIQrCl%2Fgx%2BBb4AqR6qgmM9aCz64OpDNosqaSS0lWxj2qiJXBNwWv1n2gie%2BA968O9Wspm16RH3hKMnP1t2dV22JjtXyYnf22mA9SEGj%2BA9xFYs0WC10csT6W%2Fmgw670PHEMJf%2BvcIGOqUBu3w5pTuqDFCy%2FiL1n0i5pw0jYVyC%2BwOrjeOAjo7szmLilKhNT9vONNArOwxlzP0y4DXAI9SxYRESCwpd2cuqE9VbE8j9lY1iL9Mued78xOGg%2Bcs66EcjkvFy6pRYLWjpy00mAY0Z7Q%2FG9rgQi4jXv5cnyozO6WlhwtBBLwhCs9TsfYA4tTjR%2FetEahF66QVQfcH8nN%2B%2F06g9ZXFoUTOcyN3K87sI&X-Amz-Signature=b8a4ce25ebb8889a51f7ecfdb14d2a52c0eb1515e6e9d344dffc1cdd3aa08670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LYW5JH2%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD9mEAOzM%2BwdCYAd4dHJBl2bGmhIn%2FI%2FgFCMHDPXUvfFgIhAI5ODbyVC7aqdxjYyvHGpNFhDv2ieOXfiZBbCZlS5ed1Kv8DCFYQABoMNjM3NDIzMTgzODA1Igw0G%2FWHfT24NkiML%2B8q3ANU5AAC1gZtVnlsy4rOxhW43mIfw0t0O2%2F%2FBf8tibs4L7yDzdUieoJrbW8gcONyUBfqsrMNR%2FcfiVZF2qDB5eC00uG7TogstgD29OtDVv5dlYJDQTtpgtRBnS%2BjQWfrWTsq%2BT51B9wCJKfSo0AJS7F%2Fuf1IsjNckcQawACRQXbW%2B5TsoqDsD5WUloCHBaicNR9tY%2BWH1XnHciFJMD4s2hSbbUuKWby7xqxgu6Dbu6%2BDYZS%2FzywA0DpeX9mFNwcDDDlOCyXA9GKAeMB5sFiyGf7K4s8096qLLiYOP2aG%2FqaVKhjJWAikGxlIz97BKSRppUXhtUQCLsJC9%2FSOMUUkN4UQr9xiru7SBkP07ER2icd%2Fkiu96Ghuvcces%2B5hHs2I8e42pnDMzDQSs6Omj%2BrRdI8YQPWJ18zteq%2Bui4nQYbpVywP9gXwjkm8NLDoLewIA%2F1E%2FB%2BLdFiAwaemVVqRjJ2BAuAR1ciottkWyBH6FHrBDF72KsU4b0Rmd%2FBep9hMpa3uzX0mDFlB30O5AjLhcT%2FgYRHkul0oR6JuaCM1INmsO8KtAtL42HZFyCxktQ4mUTh%2FFLr7Eaku2AghwMDjnCWI1wTjPYY0KKpVysvA5JHybZsNQkgcOAnjKFWSvOzCTzb7CBjqkATKLxJ9qUnvQgjfZKOs8YZ7i9rkpyQI42HJFaB1y4JtXZfF7c2C0UqRmDpJP59azg%2Fe3OOXbeWXzLipBvSjvpBsH3TLu7KVSL%2FkgSVNEKb9n1jZJfagH29wSPneaps0%2F4%2BTOrWKSwiewac2ym9ibpHf3ToPTkckdgouQyoWSovKrNox545SNCf4d5DRj9MkvlnRdxnfx4YHrzi9kDkpBjh0kuI48&X-Amz-Signature=b233c0c4aca8c4622702bc332728be7879d537b48c7ae6e53e30cba861da05f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
