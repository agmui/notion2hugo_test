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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HGZH3RU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4FozLuWtZtrOlz6gTTtHgUiMVsHWgcQ2Ywc22NYwnIAiEA66PMg0vUto8QHyEVjH3LhJ4pP61qusKUy6E%2BLcBSnzQqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmUM37Vh5paCGC%2F2CrcA4sij5zR7N3NdPsnSoc156kOSWg8ALv5lHP6eYCzICNsTCOIIqGs5aDKP4f5b2XB82ELYJPBroFvz42R30%2FA%2FF3SAVi5%2Fj8TA1EQZtvYA0XE%2FtAWv9kYHte%2BTGRb%2F46tzi6nvqjaWiL%2FtNb0D9YQORWfk6sNlS%2FnmJ9SShrRni%2BMFiy%2F4LVFL4Hanrb05oSsIHNi3vxsxCxm6y04nKweWGHO5bKB2ZNmsH5e%2Bll63Zm8YPe2tdyVRdtBYct3e01peVng8lkTSJMe4N0BL52f%2FmHQvqc2cm%2BvdxZowH1wJVPdylrAzgJvoXHbtOcZi%2BTb3i36zKb9ldIDhTUKuYsczmsD7vXKMTnMRUtnS6uvpFuaB58hIHJN0k4F%2BaCocznVxtKzBOADfIrcoET%2B5IyK9asXqH7q%2FoNKiL9RPmq%2BNcLWe3oqYGf4qtwXNdWChb%2BplnNYo76J60cv%2BGuhHTgHw3RZxs8pcxfwMfJNK8RVjn3Gl%2B4qoLQb0d%2F6r65nsjQdhS2GIqZtFnqTzvG0vEfvureY3CuUVDF0ETeEYGoV7a%2B9mESmitmdKGJ2wg%2F1%2F4w3erblUarYVZDuQc2SMTtVnI1s0TCSqTigMSXYzLdlxPiFhQzN1KDwFYCPWWIhMIjFncIGOqUBxh5q%2Bfy6vQus0dtYyqHY8uW7ObfyEwpnu5oJAo4%2B%2BbcQhqFzspDDUzgHDe1Fm5lScu1BkUXxjX2PPL1y0E8%2BTB8SHzVpKj9PKEWb8kX%2BT5YYiMxTC0iqrgl8oskkAeat8%2B9SOG9VBOoa%2BOXrnBi3nwVk1V0riwZXpcdPujfsUWtNMT029EdTVUGGoNiQs%2B4hjCcTz9T41YrK%2Bus83eS0VzzAXmmu&X-Amz-Signature=d3976eea3e8e88f83aa3682967bb34816c210220ccc607c34dfb6d78aded80ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBEOL5JB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSgI23cKn9eTTYoANYMLrb%2BAKogHMGKuWbsLtwEsXQZAIhANwQX2GUhIGRyWPurYX7GGoqLZEozLUhLXSwh4h9tlopKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE3kXDGw2YXFjK6bkq3APHviv1yHEc%2Frb%2BSi9hwGw6fGFbWj5zMbGY0hvl%2FzcTGyDYVuMVQoYf2G%2BLs%2BCYcXBRBP272a1JIOKFMT2z8DjkXW%2B0YljduEhQM95liFfe1HTMDqWshqgQTLXq1iuqIQRe7YAICwUc%2FyaJIQuX%2FYbrtOGBDpNDkOKu6sgaVnjMZbzjpwA6n9MEgEN9AGFWoGr1c1qVelcGacI2vamaOh%2Fh3o9%2FpxM%2FJDI07PNmhEWgQrCBO9V65t8I8ciwNtsqMK%2FIWNGveH4wKawmiseNhZLIgNNJ1eYwINkjbXEGkLFdv6zNCBpopP%2BZ8gIrui434Z4v503wj0i1YMa2qqTykgieyQqWTcQxqc9fCLSJ20l0JyerHY6FIQfx3wxqeaDySVdKPY0jqMftVOtzTznQUWXLeOE0wrKTtOW%2Fv9xaniL%2BFg0FC5JVjQ7ON9KCJJGode256L4K2kuV0JGOM94luXk0gYPeQ%2BApiTEXESREgOOYj%2FbRcrD3ODT%2BtOcTYLCb%2BYISavJ%2BzUUZ%2FZ%2BfKahsmKCQ0c34vXNn%2BbQB8Mjs80nK%2FWmmg0XSvDle9V2PQE7h29uKGkZLmhNNq5wHBPSmkxgMvWjp974tWw2cINlESo8hH9366Q07CcIEDo%2BnRTCoxZ3CBjqkAWG9eDpGLfJbBctT%2B2L8Ozugnr%2BMbljtdESUC35gtKaqIzSGrTkgchMSk1fdsXBJUAuO9vY5HBIY0iNqHBh9xM7U2vut4x5ir859%2B36%2BPPfzw1EryeLU1T1EXO3%2FdSsYTZEQBHcgdUTcG3r75OPcprFMyySJ1l2gAXG9UwV7M8SJpo1HMEQAoez7OZM2lnSoKOtSFDDy%2BfIhCGB2e9DFe3c%2Bw83l&X-Amz-Signature=ea8c261ff0de1197e012db6b4dc113ffb551b3a5536523645a3910768023c591&X-Amz-SignedHeaders=host&x-id=GetObject)

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
