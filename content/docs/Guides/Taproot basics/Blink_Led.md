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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJX3N5JI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCHk%2FXdXTKi5uoqKZj6ZW7SvsBXA%2FuxPaiJgBuVLGIm9gIhAIJYK9lKUJ9e1TgMP9V0LgiKUp1UYbOkrWiUZVKQWerhKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh5evFRk5I6vQlGsMq3APgnToEhLa5EpCkmD5k75Z9fyKB0Caf1MrPHrz9f4Afeat3XNvMZobADZGzswpB12%2BsK7LJTfMLPIy1EiAfVlTN1aWxG2%2FVc%2BzRZWayKLNvh6xU57DXtuLNR%2FJFZzKmBVRtUek5EE0mAYiiICbtq7B%2FRtX1dIhJmk6wN8OXxfKXx8YO5P28wulWYROk%2FqUpQi85%2FdHT0QSHxnvGELQ9IbVQZoMwTOETuGm%2FoLVayBdDxeB8hNOxsJRHnbcOSE6GhYgzd5KCCocIAi7%2FxJaX%2FKQu06alEGH1LX5X7OIE9JhWA%2BGxwJx%2BQ7RFKduDTBk5BArbAvOp7%2BtzE4NVBng2JX7tCw3KM%2FDTCdfzgF9f8wtskQnCqeGHU7qHO6uXRkeHusDJiuSS6CvdXimzL9iyJFHy%2FQ9NBgL4S4D5TDDq4cPgPsJ7%2FTCjQGyEsdla6ehaxefXjD1NGsG6WGg8UjMaQ0bEggiy5SRGBrrDq1VMUYdBRtxlXE3QC7AdUpiwyUeOcT%2FFCvA8XHGDeA0wPSFhaTcWj9KEGSG0VoigqjaGc44XyOjVEAfR1M6OEEhtI7a6BgZDMnYLcm7CEvEUi%2Fz93GZVG59UGtY4pPVO7ZdtlLNLm4tU6tj3Dufj5rkUCTCP8eW%2FBjqkAQVvV1lDoo7fLQ9Za%2F4%2Fyr521Wb1vCHDyKy9Iq7Dn2GmlGYB4WGcV4ft91Qu16zzEo5TQhRVjrLS9UOrPuDuv4iVc7ZXilKV3DpIuGdUuD8Fd95T7CnWWlzR7LTgxKM8hU9mgEW1zul5cLM4O2sztshULdy8lYvAzyFghAfv0RUg6R50iqO7pnzMvXb4A%2F1G%2F4WfJ5Rsmyk6quMfPU9tEELgPVt1&X-Amz-Signature=56eebce8b1a78d061b2f3c225e889659008b2992f4c84e4622319d27c113f980&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAXSXQ5Z%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQChCMMdD8aliGiZ6qGPbHVTPAvv%2B9OzHp6BNzYQ8wPsBgIhALedoX9DlYBdcLqaLGOQYZE%2BsPrV6yueJW2eHm4rxf9xKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7dcMKikFy5yxUJOQq3AN1LQL9rcEAaJXHu73kYk61%2Bhuq6mzWDofVi19Nh2htSmfybGXeQKmKSm%2FuBHCZLB%2BPIVoCed0Ju3ohBicf5GHW9faLf%2F8fpUOJjLP07OEgnQrgf02CG3qdvGF7z54Xfo1lrAXv7Op2chLng%2BjaAliDXEHkhL08wHJqwX%2BtOMpoLudGa9MflyJKfiP5y%2FUtsQKGysKwJC%2F%2BQEqs04YTs%2Fv4ovEVexx2%2FBRlkDwFTjlUsaxKyP215266HNAxkIeVgr%2BaFBWFRYLMzpHsiWecAhFeM7bAqbjje6utgMEJtIEEMb8%2BHj5Z3fMdZ%2FgfZtSrYMwrQwRy2JaoQZFswVVhXJvrtWqJMpPCPHuLhXuwilsrboKlLpwZ9m7vw93OVOUwaOmSDPCk51BYQwLkFgc%2FC%2Bv0lGU%2BXwiAsQYfYyOVuW1ufoDeYMoQIGIfg85us%2BXx2Ic0m10pWqGCj1OFVyk48%2Fk1hPfK%2BV8TfbUzZ15y1m1OHtJnnO%2BorultMC7YFDk46aDR4DjfkyOEkm1MNtZohzuMgkJWJgvW6h%2FsvtesR4tgIYkV%2BsbmDApGuKG8OCn2DkfF5qbS0ZBKVedzbldH2GQ8CxY3gyGJJhf1Ok6OjckTV6YkK8Tgw%2Fmkc98KOTDw8OW%2FBjqkATPdRsI4apaQ%2BG4uJQ7TUkczNbM4gfJLI2%2FAAS13e5g%2FBgXaxVD1eyfdb16xuII2%2FWHKvJQGrjq%2BvcmBUpHDLKTkdjnUP5XJqOEqaNDVjBUDcw8ok5ebgJqcocx%2BV6rvvLD7GT%2B4mZEBs%2BmQfl5GOXqrR9lomBFruapRDkiF9qnHgNbc03M55YgLjs1jBJsUygvsjQEqMmSmxPRhtxRHdJbMUbAM&X-Amz-Signature=7b9579eb53dbeae3b5a109f1763c09a2de032a71277464e42c6e737fc9dc5dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
