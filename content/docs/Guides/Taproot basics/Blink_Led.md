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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW7RSUB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHxIWKhOR078eH6sZEBvhCnkfg7rwtidEsVRYTZgSiaQAiEAl3MQw9SS16FZiF3QJy8k38zLlCUz47Sn35Xts5URUDYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFpqN9twTVFdSMH5jCrcA7u24wTmGNB2z6RPLImG0mOYcu8QeuwtDnpzGmQEENlv5uuYNHDBGEsBm5k26AvoMPaZEt14WHG3hB8C7LqasTejAIBWxvZjFgU2RQVVwpCZfCpNXLpTWo5E4ggJGlG5h0KQEAXJUrT3bfFc69FlGVXFCFXLtXse67H73w%2BqSiY6foejs1BT7St%2FZ1eGJkTJJLcTxoH01dZyy8pMsFAi01hBCjJWwi6GO7e0ixhdxTAtN5vE%2BEMTVGbnvMO7Is1nGDx%2BWVdxqeInzBC8VSJ7IZ6n9Hlvy4XzsMiFsJuJWpqVDRTAJeHckrfe58nUkR6vLQ03%2BAdVxXeYhQzRPaBWiJ27vcdk7SJa8bi9CWYEIZh9NfXq5q%2BCxN2ukaswWrM8w9EwfhWI3N9ZT9iQJjovEbBCkz69iU7O3%2BR7OjFoS6Y3IjJ7y5SnwN4YvW80cWv1a2IQiT8ebV3wW%2FSUtupFKgC5uegVcm7P3Kb%2B7RWYFdZVLNpzKltMd28u%2B5NVr6KUXzRE9ZntMPmAxNctakZTYYhR7Q3ct%2FmUwdgRLq2imcU6L94tEVgfn%2BQHBDnxxeamLQwjVCMfkwIZRB1uHmmftWkvActjrnInisp95TxnlbYIldjoDmnkSRZniIeeMIrv1b8GOqUBoJ%2FYjEJ0PwNAWrFXd73qVKiLtXRhmFpJqNf61%2BZCySSwCbLZU7M8IkLgjuHOye5JUiX8Ntjb1sW8v%2BC4PbYnH6%2FNt9qZoITub80vtI1H0FdU8aPH0jN01YmcpwSxgHvBe6bgYmWlIvTcSEncE49Pk0iPH2YDFiQZm3jJuPg%2BRpvOvVppjd%2Ftsu7UAobF7ZsIV4HJaPN2iY%2ByhFMt8hG2ruytNYYa&X-Amz-Signature=5b37fa07bbee6d7741d7eeaba5f32166f1d2b758844fb96a5af69c52df1ded25&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LNUJ7JD%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIBNenav2Wwj3FEXzFzC1n24dcMWl1sWxSFx16BYgrM2lAiEAj2boDqnl1XZCzFu1XtY9XmIHFfKKtlSUTxG354rFnGcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAz6ICcbJa1gwnCQPSrcA%2FUplsgrN9xfLi%2FcG2vMLPHjfcJucdR5E9UGldfDe7flFCp0DPSYKFFz8sU3bGartv%2BoqnLJZavG1z1YzrhzauZV%2BTpJNYQadjaRbBkG9pKO42y0VWdvKuIFUVehvspGVJXryQLPqII%2B0nfXLvlVh%2BEFtakvZHT6mD1zbMMUQUOQvZWkhUIs6tcgQtLdbHLk9cY7MKLTpUVoLZ6ONejjEen0yJzymObf96r66O%2FtT%2F7NbmSBU3ZzXR9uebLmg2kCCkb4qujwogaOyRtvI0cPzzNca64fzq9DPy7ff%2B8UW21gaweD2iMsoahj%2Bx9IlS3SKNesHSMtFer8OILikt%2FY0d2KxivFEQgn1Hvk3yozrZmnfIKiImHHqoqC1gbM%2FYmZf47ZspGtR3%2F6tJ6XE%2BT08Ch6EWehqXF01EV4%2BdKvfHNyLg7mxITpEPBEgZbGgw5JgSTI9BIbA8HIPHgpuBBTM7kBIEGfzyRDlfWKoydYAn%2Fu73Gp7auAr4InOTkV13%2FZp9G1kti0lAZjAzzp3Rpw0qgqzuPvWzDUgov95JWjs8F1n%2F6tjEYJJ%2B3TBD4ETgTQ8s%2FAv%2Fagf8jcCDB9pHoIhUH7teSicwDGyqY8Cng%2BYMotNPnx2YPS9hWLDfp0MPLw1b8GOqUBuFrRz8wiKaAFqWdkJHNsznuXNzHayxpuAr9PxM4omFDSlOT0P%2B3RHtJ6nSsu9SaRY0ui6dJ%2FSzHdbj70dcnZ9FwfIOqpJNPMsXsAp4lTTlHXAvuqYmXCYxRTrpsQ6rZcsGjYIWA%2Fg4COJwYNQwh5%2Fa4QiJ13DG%2BLzl11OX7IvvcgvKiEg6Am4qHc3%2BE5AvBog1LmfH9WVtcvnFEhk%2F18CwXVY%2By%2F&X-Amz-Signature=6b5a89581a1e60c41f76b4b466b4d2acf57bf24d584bfb11795c9baa552f12bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
