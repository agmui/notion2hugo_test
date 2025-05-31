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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ25S2CX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDujsSSzWZFmDIbq8VHl7mL2HrFrh41qoylLjef7QO3FAIhAMHkjcVUg2DtCUn1JeBZQ0LDtYXkixn%2FdIcPQ6qhRF76KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJjhHxS5NKadmrK5Mq3AMYPRKFFD22riNrrdPhwVvWJlvBuSzAlLv187JecwxXZ1NvSHHkObRmQCKlYsZ1m8Pw%2FxU0%2BniDd8cuLd2%2FQiMEx4VQnbPTSdzvCAy1qMyiHjhxOKi3DTqEUkgPfARnCZXbuR2mwILYTfIR%2BpoRI7emrNbMfAWmv6bbGVhI9kaVTYD9%2FgUKrPMW82JFBYBmOJnTECRSuZLX2F5Gj23op2dOW%2FnW5Bi8yzJBFwnIR7tWzzOe8XfIST%2BgqLVfmH0lrIxemTfHv4rn5dzQU%2Bt4moQyaOK5G38JQ1rkBEVnqUfGYyb%2FNx5OMtVAZ1RdNI0wVGbhKuGag2zRm%2FwAM6%2FvdKU0dpwyzAMApjyjjd0xOO81V%2BDQRJhwvNd5nxcVrqQ9Wf%2BqTxQvWGIKRncntwgpeCyPf4dPsdGykWR%2B3g9eJqX4nImiLNxyaTSccW1bBy62NX41IJPYlNitrZeiKZOXC8kQnod25cq4LVhPBLKgJrEa1BRfU3UXstOgsQ9EhgmePQd1ebpegsLppxEyqMmR2bIPK0YnPk9yAj2hi9THOQB1hRfKCZ8CzUWy1wi5mOkX9cvnxaWUodYs7ss0OM5KIkzm%2FBVVodbsQQjlP5n38cMs4JIy1eUiy8U7WtPCjTCC9%2BvBBjqkAQA%2BExm1DDKh4lM5Hh8UklujhRBFVnZg7Aef7hi%2BCTzKzp2TlMk%2BwwrlXSqdFt0SZnWcKeTaWNRjzhS%2B1eEaErBbl5VY%2FDcVBBWIG5RKiH4oR0YW%2B6mdbAvgiqlk8VMhYGGcpis8Zartq5Y0f8yResB54jkVAz%2BixBXf8P179BXF3Ks%2BbezQmhd5os8oPCIKSEyptULEqUQEs0LmAN0bznNKtg5l&X-Amz-Signature=0e1b91053395ec82054acefdd746cea0e80df0eb0ff3c3bf3eada9056dc93a38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6FPANV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsKRf4V7QDMHX0kSCQPm23wjy6KEtDaOXgsT3tPKyPhAIhAPs8yHouvugROl4BP7JkUA%2B%2BgrB5%2FiV3jlvP1%2BAUylrJKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ6T%2FzhRkjfzCXPCsq3ANh7w57RNGGG6o1CHCKtX3PaD288Pjq96M7FrirYwUXTUCOwBm3fMTCAytkSSL0PmcMmwZmzjrTy%2BQUv6X5W5EgGwB6KVu6pPDq%2FzA%2B74nojQ0TLRB2OzEQiR21Z0ZNsLNsrjlhiXk1anNqqR1k599hWayiXQyPAnnnFHgUnrooVhiCl3fRFt8ZCvFzbJd6dfxnGuPlD5P%2BFxqVKJyLDFL3%2FBmQiivHwv7aRnUFGVuZimIgzpGL52L1RPPGliWwnUhthpMVVZnIWA%2FZvBljCSgzdNQEGp5xV0hs71bmH3GoODYVy9SoDy6OsCh0dwLoakU7ThHU3iF5V9DovsWOQ5J2gmfc2SQ94IjZsRXxK2EAPwAhOgs5OHQYVXEWCcLO2WMD7lfORC99qnUXgFdfVb7YyajebI3O1e2a7Zqu0MhsbAe9FV0L3jCw4rQjZBs537ba%2BipkiRPRKOVEmDA1E7qHQyxxUqnx%2Fvi0p7II0a8SzW3iHxrh29ETCM07K8hTvBPJdvCpA74JcI%2FKAXnDcqIXRg86TcggnCkftJmfT874xy5T6nWA12jRlNy6dotvOZzgCrC3aYDS52%2Bncq0OJDa1H4A2H3VvXJkH3FtKuETFhIFuTkYDs%2FLfatwwBjDSpOzBBjqkAVRLx0z7iCr9EfVt7Opwh9BHdeuJG7j%2BZyd9%2FUEZgb8vUv%2Fc6ldDZ7gytBD0YNaREj8brlzgZKCXi%2BxXt6cHyJXo4TyoMcd%2FuGV6YOc0AmrEfWIFokjllzyFLNhIvoJ%2F17Y0Plbk4sFTcm6qjhHdpcm9ltDpJPidY2YjrPomX5C%2Bo%2FUJ21ndthfpNqKki%2F2S%2B1DudAEj9z4B6AhSofZaMW6a7VEN&X-Amz-Signature=26bb0f20fde61edf1664e55e6e729493aeedb4d15838f9158933206b5bb8456c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
