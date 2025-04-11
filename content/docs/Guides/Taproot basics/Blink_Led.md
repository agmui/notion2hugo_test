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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XETP4FOF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBbxHRJkxzr6qJ3k1A5P%2BywKZao6IRH2oD4HisylrEgxAiEA62h9vSwqaZq%2FDlLRZBgiJQ9Q%2FXTw6P%2BebvEDlOs6VzgqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJozTESLjfxjhy4BeSrcA4TD2KE0i82W2avyUI%2FoP66ZMjmuawKktC9NXE%2B%2BRTIJnw9jUgnFKpCdoZDxmJ02uDRUSB4K58l2lYq46XtkwUtWYbJKgJXuopmPCQCOYu7CmmCJdvzj0QlsjUZnhuKHFUphDCkYFE2OvgYuc1uGfhp0ZAir6CzdFwZDQUHiPywZhlmS8%2BncSil6KzfRJCGirozW7sWLw5QnLTb2CpXj7oltmfkVvyHutWKCpKci9hsC0%2BjYyF0mMf2QWKBNnoECQRvsIfcaCXF1nkZ4Fctw2M3kJApAIluG8WWvOUZaHHwUkSnAjf5dGc%2Bou2UQ%2FjNm6BCY9SOqdPJkvUREijekRNefTiMk1Iq3TNLA01nccsR7S8zgF9Q5aR34BQoE5z6lfUAx9o%2BPIV7CytCwc6TQLDmo2AlWFv4cZhVcXatKPDAG6%2BlNQFgTBAADFzY%2Bw9nJOnXmj3KMMpLCx2J6qcMuYdsqOZEt06B4jjTE%2BsW9KkQKmqfdrDRZsoyNnMKedIma%2Fl8GMhgfjuqheMhqc4XS5TLkZlmtcflSFAbQAh3JfBX5vdalFqwPe%2FFcYlJKg5YjA5UsWDHbISNqZ6mQVguDfbi%2FVRdupqpb3%2BCQA3fwGTIOR9Uc4dqsMgNBfSrYMOqq4r8GOqUBvf%2BsNh%2F%2BVvcObNsPtdOepVrMOXSWaSsch7KivPcflZG2nT9c0m3k5X9mI50KWVf7FcdES4vIFjR81zQaUJjrEHOHkYLrK2SI7Ye78cCmHMaBNYD9jxKN42r6ngViKCwcishbT3ICnOpULqTitcpKMaEqsa7L5ODB3STk%2BHypHQxaDwurD7YqT43oMXKAvAEsN8fqYOSZlJBHi0QsEXGtNAY1Qmiv&X-Amz-Signature=d3fdb6a112b3eaad1507cf8ae74576c87a6b922c99e4dc3662a0bf5ccbc65ae3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6B2ISQY%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCICtsMvYKyJuZ5%2B8BBoZKSQyOjw6wBBmCj12qns%2B%2FVh%2FGAiAchf42fHqqS19JLZ3TeJ12BoZI3%2FLuYfOsVnCoidkEgyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZZxbWHAJ7gvZgrI4KtwDSHhNHTtk4a2lrE7q8Fnk%2B%2ByHIroMVJs6ac1rga6cdAPzTtybqLMtZikGxZTN7pcdUIe6u%2Bea4ntYL095Dia2xSX%2BVqH8QMGWoGBLWtDw5XavJ8oOv%2FLdZSYMwz7M%2FlyrClaKhge6wo6XL1ZD9psEKL21QI9UtvLQwKflwPtoGu0TVSSb%2FfGinGBIWvSjoloSMimvIJrVisNyVIYg0V5132Ag9abi%2BJVE30Nvpj0yuGCS6c%2ByjiJcrdUPROWmppOu51wG7%2FB9iklbuGj9mglhFCwdaQHvBIJdwCM9khJWuWczc8pQ7ETXDjIvAOxHzzz322hVA1qEyq%2Bo73%2F27bEFyd%2Bhd7FrY8OfANy%2B8S0Tla6KLTTfMIrisTdf9e2P4djHuCjPEfevcNE7f1Ha7AMAqY1gTAuGYopHJb6yfT8X3LG0504plx5H%2FhSDn%2FzWt7GLYbtaS6LRaPfqDVkcI%2BV0Rt%2FrjCAhXDN1SXJs8woc75hixqfyEVUfgwkU%2B0NoVHVEP8k8EA%2FhlLnDqUIQ7YO8tSujZ4DNVv7ZqblFUDxvxvvszdfr%2FwwhtYRwPheUPbFUg3ElCcYQX7oK4nxJDF1hKOeoepW0VendU3yG9%2FeG1tmpOVPUHWt8dYp8Fh4wiKvivwY6pgFszuTHBr9zVPLTRKoAv9dmJJn1NmS2S%2BSLL%2BbDCo63NAkDcPNR6gcBhor5LxCYoy2JhoxcM58qFXL9Vd7SZpMf98FcPoQKTQxBf3fQ5pWi1xw3qwKl0J5fubrh%2Bk5MLSuau355wq27qK%2Fu1KNEYXK%2BHq0DkiFFUOirYZ196ujfLYWHPeDfw0uLnrwpFakMkJ6Kb%2BhCCPtH9OwuNZfS8O0LKkrAkRok&X-Amz-Signature=befe10facc9a7911b960ebeed9884a847342476c9ed8431a554ff9f3d53effcd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
