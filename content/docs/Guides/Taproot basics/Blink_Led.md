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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMD27DD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIEIhnyqem5JPLqnzfdeDJIObz0Z2B3lxrR3P%2FVDJO4AiEAsVwBajtROLbWBkfysq989nQk1YyiYicFCmDB209OUewqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDWAK8CWmKLdkV8bCrcA9TCSQ6A8RSh8ApBWYBg6Ktkr7AQjym1RegF193kTZyfe3cjabMLVNcJDvAPzivVI%2FaqtLNnEyp%2BX%2FXEbD2k6ijWcPX5BLYMl3gZrQpB81sqvg9BK2xjjMNTYYYnGi0%2FpiJBGY6uoTLoYnmwUpc%2BzSsIqOpO9PwdjSlDZgRq1ItO6TDROlXEixzO9vRnvDIFyqDhUzt%2BYqIRQ2Bu8qQvzfm3udVzd4KTroBndl7NhMmDfFDJYlJD5UBLxTBk4%2Bdw%2B8BR398NQqo8QfYNpuGW%2BDGLQb0%2F1QhT7MNtWcooqXmVfBtJ9XDCSvK0tTaxPcmBim3j2iF9jH2X3%2FyxBkea0NNTu2TfQfhOg9H2FeS%2B4wpxGtyXb1%2F6g65BmsBprTyDbCxmbmHS6e9i1jk9vNbUnFl4RYYTmNotqetH%2BVEXiu2mPFfUH1Tg4yqTGKdUWlzHpWjLku2zPdUd3gMj8o5GbsfnEYQoX%2B4EvhNVTbdR7tFoUtbk%2Bj4lDm07qG7WYea%2F7lbyylNwdj11z1CZZOHxGhKCl7bt8bgQSfAsZTxtdbd505ttGMKVuGh2%2BTMN6qVOLRQi%2BC2dNx51ervARyOb4HSO6Rv7OtRwdphtFFs68hgCpn3obHHqokoig6RUMM2H3cIGOqUBx47pEHfwhVqB1QDtBu8IjQq8oZDk8yEeHI4%2FimfouL4rWOCFslcSXeAnX7gl9n6z%2By2d1jDTeDuEF9anpgFFBQcYqagbJN0YMyeQLoOxfRXs4rqHHGG5BV4dekVSGI3z1bfnMEOsrmCJEIkpIv44%2BYgS%2FNhMg8b%2FzypMdaBu7e3DxWh0eDihNWE%2BIdsxlzqAtRCMWOSebXgpB1wnaOB0scwAqgid&X-Amz-Signature=446a5463160f4493fbe223923f9d2230d9c9d0f36d1e51a221091c048c14118b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EMSACSX%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLeSAgEKIlky6CQBCUztbEUpHaTPCmV6REpP8i5pFLmAiBSyjBarfzOgrN5nkVTsO3lBGUWarAK7FB%2FsyoFEOB9PCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZBkY1GNYdkgmyPmbKtwDAUcciU4AFQMplOk2IwjIEoGKWTQAflozoqdssNXzCTFcNRGelgVYhIFzNxT6JQ4RFnsF3qvqdMs1%2FfZ0qVBJTvdGsnNxjRfvNI3nIZymtAFAjCecb%2FCoZf9TpCsq8hKkTezsQz6itIFilTHOHo6IkfVNow3Cnkyu0GWCO0Pf8ipX0RnsZS7%2FoXTo7UxIGszO8A5YdCZ9f%2BUomc8HJC3MIcGAAP3U0ljcpG%2FCk1klSeJN0idqNCKPS1FunuUXasp4RHVNP5TIoU7fYVX5u3eGTi4KaWkqW%2B73mma%2B%2FBjYfc9uRzVSjD9K37bwFRlIVCtzBajlo99NHXu48y9J3AtGOdU%2BnDidwdut2E4SBhoIdIXQOKehifn5sO99bhN7Yn3noLue1gSNS9ZfIXAGT%2Bk5pwey1xOvSaLVKyKjCmmkP7piK0aw2ec6DXPfmlgkaaynP%2B4n0hyi%2FEV8LiIjkgX5xFi9NJOFT3fRWENJjoNG4YG6FqGL6Hkq6OU3cOlb8%2B6cBcLgktP6dsQP5Fbozu3joK%2BxfAm44n2HXjgjTUYrN9grGoOvlTsnYCSQ4TMP%2FQlDkGNHd1DYMmh46osZX2yi61%2BQlPYEVVjb8FUzB2hw4boXg%2BZ%2FYEvOeoBXbDswmYjdwgY6pgE57eX30MuLWngeODpQHnsybeeCFPKW6J%2FcQDprBkKgq2Mw%2B1Tbj1fG9RlOu7VgFKNTDUaKq7n9E7B4VucVJLgPdb5FeA%2FLWwLJUrUNJjDuTs%2B8FQoQRTOSObngj75zg74np%2BLJfwA6u6bCbVs8uLdUcLOikLqw0glPQ0tQPBsNByglZXBBBhwtFfKrvdIZu2uhFTOmSIxu3nVmLr5asdW9tguTy%2F0l&X-Amz-Signature=98d7b4822b06727498a8f08885e53a3e4837012d1af6e8400f70d896cb7f1d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
