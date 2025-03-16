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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIJIHNKA%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFW4QuhwSbuPz9kywk5FCeGzzBeC6s5dpKO08ebbE6v9AiA7GecqgOyW0ByA%2BDq2FtOBAP7CcRjXSr3Z8J2Oajc%2FgSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMiEiKAN2e5tTA%2Fr7oKtwDkJUwLo8GvRMdvJXhRqGRoYhjl3qeSbQC7FldjYuawU0Nw8JDGAsLSlhD2fBwggL%2FEiyVB3ELXy%2B%2B5J0xRgoIgj4EwH44yVuetmravyGo6M4WlHWZlCgDEep2iCsz%2BPW0gXe06TyFpnoRhHRzol7f%2FO2WpM%2BDV7K%2FHZY1Y7Pm9Zdr7Ke1AMbLrudARfcwGwD7eoVn0q2lU8gekWjWr8mhqXke8YQqtaXlc2PoHXz9OBb50bCl8S9l%2BdUYRVQLJo7FZw4hflo%2FVZkqZe9pre3ot2d%2Fl%2F%2BDJT9rsRlBNNzOcYLrHxtvkXFZolq4cWf%2BVXB9lhyOI8MzCUqfByCGP3LACdJxfs2YCjR6UZmynva%2BpXCVYTr%2FBpmHGil9U2mdTWA8P3FdXZq0G8sgMoWkfuAIp6eRd2mdbPF7M%2Bw7O5JG8WEKtmrsK2FhjkHdFmITi61XkCRZqxhey9vPPX7cUr1vh9w0b5GJzhGPzgvALOrumGcMZO7%2F%2BsXhQUnk13rjc8I1pV9r0vCGJ14mKJ%2FcTBt%2BB9Xyx7ayir8KlzezeNLRC1YmVagIAGVBpTng1Fi%2BGbJWhS29w7gJFNJIgy3xQ0cqwxZTHYdtXTi%2BRXNchr9aohoOtamReulM%2BtWvME4wsoLYvgY6pgFO4MAv9DG3qZFy9kxCnnRmhhMbvBtDjaDSUHTbKySib4%2FAz40Lma2Z8SIHP%2Fj5q6yjXRytZfrpSGRyJi2B2dF2dPcdBuh6mFmfgtdyaeVeGlotaYOJtmvFXLNyActAUCMWUF15NDEQ9gz9adGTdD8exkhH41A67U3FpUxFoOpkVovKa4BG582o7H8UKsd5VQxI4VqnVe7nDVB%2BWS%2FzrsmG9v5GzLpK&X-Amz-Signature=7472b77915d715eeceb97553d5a71d89fd9553758b02b1c7f3c7ea2d5ca954c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZ3XXIJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCPn39tkhbTbBDRvrUKmFmwuOCsHHShMFsZXsjeICRJgIhAPzSAFC7GHxCBa1B4E9TkL%2BeHx1y7lu2rMe74F1TGNz1Kv8DCCAQABoMNjM3NDIzMTgzODA1IgwFSfHQFjYUZCqyIlQq3AM1ax%2B40by5YT398k1lsglw%2BxHDPmeedax%2BlySpQl4sWMzAvpKXP07zMiShOce6QxUx7%2FTIUz1YN3SNbz4VOTlzsTwDCS5RySYLll%2BZz%2BXzSFf5tUv86U0lchk3cMrqdPNadnLLFd%2FdmlTPRqSgC0pjaTZ6PukncJ8%2BATwJItjcRJz2sGrrrhssmVPGQmwpVVkYX42gC67dxsslvqcjXZ%2FO7U9O%2FsHUk7C732veNlYpsOiWRoKu9hlZXxgHQmO8AvzvdAhwXI0wQduT%2Bf4FcwqE1wNHx99OTuUdd3a9Pn06mRxEL%2BSVfuNPbb%2Flu4QVeetrcf74l3BMd%2BzuM%2FyQO1D7q38P%2BjHD3SYb7E3FN4BO0v5y7A9ZXvUsfMNUeMtJkFpdZClFSN2YYQg1u8aC6c%2B1nTBQJoRMp9eGQGyTdNn0gQVciW1QnhXVWeR2bIWPLkkP%2FKy28d1rE36ZmcHrndbZ8lAUaQPV0ZMG5QHFNFevClOwBv5zYMFCEwE105Nry1rx8TIGww1%2BzeLYIBSyxeA7KBcTciSuesLqFlabtpqvipVXy3JN6nA5vNf88FwBS6%2Bm3qYvXGZPUTKQXqh0aSDKMzir7pOL0sD3liqcpVhnDT2XGyrBcJyqcOfFSTCBgti%2BBjqkAahI1B1jRSe6mJsyvYna3Ci8hwRJM8A2KMuKiEeGf4PeG6LKWw9EPfZD4B4td5FymmoP4cODoVbI9ppfuYg2eC848mfHZJNmV%2BhaGbW5ApZkLxGF6uPr6Ve4xrlrDPRm1qB3EQWcQvES1reYUo3%2BPWl9TIOX3FNflPZaejPivtfm4dP62DWFuFtOzlBHX1P1XzDKAxC6HtNCEqvJjNJZgvR2QmpZ&X-Amz-Signature=0abdc616ae5d5a339efced88b135703464744d6a44f0fc691ec858f4eacb824c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
