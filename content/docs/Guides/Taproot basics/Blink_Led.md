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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC3J6DYW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBljcMf4laHdAjhsB%2BtAFSzZaMjBZcSNDyVcpq4eYbgAiEA8fiihQIq0kAqecMmQHbp8aLEDplO7MjN%2Ba46bZTSsyYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGxV0ustxZNPhFUktyrcAw6QwJv30FAqHGuRxjvaZaQVlCun%2Bynx9b%2Fw9A9aK%2FlDfv7rI8qZTyZun9bFeNwZHx6sr7IXcsO5IS%2FPYrrGDwKbSCbI4Je%2Fqmb4iPaYqNTAH2EBiWlt9xLGYdKCESmQKIPRA8d9LrkXqFk5qJ3ZzRMT1IeV1ZXVg4r1t%2BPDTRri6tQOCgXO%2BXqQlrNMaqnQ3G7Kc%2Bt9JWzsggtoX4BdHNbDJn%2Buii0aNOPQnttVHLxP3PTGu26%2BQXJIbTrObYtAuSgsfriU4z%2BdFwq9A8O76k6DrrwcW0XyB4zP7CZvVtbJzdsFzHkrhm0XGKix2b3sR6l4vOA29%2Fpg4PSfeM9X7EWCWgl2VktvdiVhuQsOg7F9GdZwa4vr0Re6pZpfLTt7Ua2NVZsMuiA7hE1CIaWqqS808totrDz7BSXF%2Bh9hjQSri99uAIJfW4%2Bvy0XPfg%2B3cmAUnPO3kBrfsdurJxslTOQcSqgUU4nB2qdhrscII03RS%2FFJboq35S3CjXmBG8fqj26upcYlCgYAyu05KJj9Al9QsoTYyPbNLk3CD8B2wK5H8eBQVzxMSJXvH5YdTF9wfpi22Ht7VsYUpV8XdvzvuN8lnYwKVcS3mlkVefODcYw1ix%2BTvR%2Fvs1IpeEqqMK27870GOqUBq9P6BBJWlRTS9jdf8wUuH%2FIMdvTIRdo9OR1PwZjumnPdmfsKVXI%2FyIuXZBNx4KTmFSdnuhKerv8L1f3Gtd0XaHLoLG3OaSVdM%2B07Da4vsZ12QAPOxztnU1z2md3Y9b55HpRKP3KD2L%2BWtapfevDQ%2FWCZVWFZ%2FSGvsnh7p2FEqVKw4g8TfxLM5jlJb7q8KMlsQq4HtC7gYQ8JdNDwFHeb83cyXo1G&X-Amz-Signature=85b206ba99125206907b78f043659dcde3b9eb1c5bf50f2c05187d6781c6817e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EEKU3DG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7UeHYoaSEtnUu%2BMzrUlNiYzBTzhJcqOW3AdNEGozFEwIhAMWI9wP65JWyrchA4MTJjMLdD8O96tooMaGClqnlsxfPKv8DCDYQABoMNjM3NDIzMTgzODA1Igwp38IQHQcP3xfu94Mq3AMGiFBmBHJ5VXs5phCJJgLzRlp8%2BJwUttgKCOgeJ403AnRmmFjyrPwXGq6JZD0p9T3CO%2BcPVC59k38wvmQeMSi41b7MqxFo9MsvAxJJkqpXHCGM8l9osTjKxwiPK21CIIqQEewCCLWbMG0O9KJUftv08a73IBZjF0ZpJfZHgoYhrDsYro%2B8ag0zLUWL%2FKc%2FtFt4FXE%2BfFrXLswCob6lprX8%2B4JQ%2FhtDfdfzju441J5hlDfKXchO%2F7dnErWrFzOQYHPsgxhMW68ScUgLlWh%2FaJuzF2dmfH8kr9Qf%2BTpByD3F8j7SdloYef1Fn%2Bf3vNFRrc%2FGkYnKx5Y7Dhkcb01%2FmtNzKrESuRDWyL8moNQZ%2BtuRPb0NYxcw5sL4nJ6ZOgk%2FShAglJPqtFq3vSo6phHxk5g4e3DBl5ptNqtVEIAFWVy8TYBOBWpRtr6osq%2F5HvHf%2BgXoSXyIv78%2FgVa21%2FD%2FcCNWbcNT3SxMvXcKPDRvGoEC4x0jLomsbsA0LGCwMDECA6hZVRA9yQWVxRrPNOCf%2B6iMHLWbqPR7y%2F7NkB4b3Bkxa97Q0pqAXvjPiO17VzcKSK%2Fuwk5U5ymCmQlMW2QmAOsmxMiV%2FzhbCBpkCBjAJ8SSF7OblITyX%2FCr5%2FrEMzC7u%2FO9BjqkAS1qodlaYbv946x7bNgdj0Hh22qOO7KkkRDeqsjwvjMJn6CWuJa07CNStEtAcNvSuqzvatiLx3alp8IMUAyeom3CbKzj30ii59Z1Z8MTe1TTsdM%2BKYMzMl7ULdfw0HLz6x%2Bp2APgnhTAYJwbwioOTz2ae5DtQ1O56GeFGP%2FpR2pEML0%2Fjt6QnajCJZdSgsGGLw9A59YWZcL1nZB%2B8k4HAl%2Fryv7H&X-Amz-Signature=fadc59b54f9db40ec4fe6aaee8d974bb5b7fd2c7e1bca9d6e458ee9891046ee6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
