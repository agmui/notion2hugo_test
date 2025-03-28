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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7IKOXU7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FjvZ72mWHkqhHxA0KXbba%2FCemfEqudlHxZCrnXlKCqgIhAMC8H1QEY3VdT3XzCeBEVa28QU3T9hXXScpKuieHh4o9Kv8DCGcQABoMNjM3NDIzMTgzODA1IgyZFVvNMUlvxnj1JnEq3ANLnUCXFRnBIij8K4xwGY7H3I7PmCoCjayTXwvgcRHzMz%2B0v1BhHwDqp4WsASEVPopZdCP6mwwmlDPPmbMLpa8TH7IHoZe4sPt7Kdkoyytqhf2GNVrZoZWvdC8yxvKRq0XNGJguvIpn6aWLmT8jAy3OfvUP9BEVqcmF6idlXhZJCK48xXZj361ZYTpqRzU3YR9hnhoGnsjzvYQzrSJWnATrJ2bXxsFWXBB5SLEQ8EBKjMDTjd65WMppzrOD0e7t3PsFECgI0anIj2YbE8Pa85WKsx%2BE0FCWPX26LMIBYsCzHZLxoLCMzpIFkUWHAIBn1K3xtroMGXXEXvwZNhm3WEO0A5G4vDv5Gsr4LN0nPwp3wRDxakrpYQ02%2FsS8T40%2FGRQeh%2BcpgFC7%2F2jT%2FOR%2F5Ms4bhRcxEDQGv0wRfjaQD5BlYBwjZjZrV62F5XGn%2F8cCRnK5plaOj56orzHRZbOpcZEWljhXAf%2BfKMvJo2oFoahlujzE6VpFdPEPbuRdg2%2Bth8bEI1eZH9CuX94Hm78zgcQhO9yQu6bm6omFfHwDwJ5sNs%2BCvxPpNF4kzlekuyEl6fcQDwOBXsroCTNrhHyo4imQ9Ml1%2F0gJ%2BLxwl2%2BswGY4drBEJUVvdJMLpzJODCgqpy%2FBjqkAejHHFXKp4lz80h8yqrGZWz2PNeh3EJwe33KW7FtQC%2BWFbzUial4qm79G%2BqA%2BCuREZ1RiUH5Coko3UK67i%2FMcMso5IXYDsICtMExCzsNDjEe6KoJV%2BpK6UEE6yt1iimAjSbjaZCEwY4ESPOAj%2B3d0R%2FOrD%2BmhPXHfHG%2FdVLxKD5brHGWan97Ec%2BjaokKwCcm4%2BxGTddm7dUpB7I77pFcrl6rXM%2Fj&X-Amz-Signature=a4dd31afd5377d4984aed6a5140b4ce96a08288c63bf77fe28867f07ed8f10f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEGDZA5T%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa%2BayEmI0IH8Uow1KFGIsZcBHSeSbEm%2Bau4RWhlzh48QIhALaNahe9JBtWPanDwsHMr3otywdYdMhxf3rXCgnY4MLbKv8DCGcQABoMNjM3NDIzMTgzODA1IgzHtHTmd7MyiI4wANAq3AOKbzGdg7MZ%2BKEffHwC3K9oUvCu0%2BdA%2Bjh9Ki9LcSmnQPLIXU%2F2%2FGtz%2FkFgll65qvWqkjBSp2NEzYA%2BwCdoX5F0HFqPJsM6i6v%2BkLiGzmAw5Kw2iGJHk62quIzW2DCfuqX0RvqEq8CU8SYIrSF2OY74I1ZvnZWgl%2BdgO6Y3B8ZwM6GLj7gZBdME6YiyMp7es2pk%2BtZ6cV4zO71cD9HLeVoXQj%2BhBgsfYMaOdK4gDPbEIgnEsCbECz2o9%2F76htsZnNntNW64ahvUxVTnQ8jkGKn9BZDvZWK4yX0tBmhMCFF9Q2XpaUnI9%2BhbjL8feR89mhD%2BnPmVBNziUmrWVhANQmH4e1oKRFOLr%2B6JtvZv6TP2PTbiYr6U4T5cap6G3F1BKVp%2Bw1lJ9I4oXcspJW8CMcX3dprGgYaRfK%2BQzUp9qBP%2Fy%2Bdxh8QMNm7L6YYLmf3Udt1Hsqv3X5ROckwjJ7Pz24iB%2FRekpzkl%2BDJHHUu%2F7vG2Z7LlPDdBY1QHiGaxt3whDR0CYAG0SF0pi%2Bbhw%2BAh6TfB%2FW5d%2F8o7b7tiMQmbZXmN8HZLSFnzdNgA7eKJ6dFbaYusLtqghGAWxbkfuMBk5%2BrmgYLVNybBB50jRbMlcoeRBtjhIp0HvPab%2B9LyhzDDqpy%2FBjqkASJ0rzJYcGdE8QaFfuIdTHWqCrpYr%2F5qpeiTOQQdoxhBT3r%2FG%2FGOmQ0mJm991Q%2F2s5HObH6Aq54cpJd5SqliEMCkvD5q2JbDSNdYeLrDhZ6mBGglafTmDsLeuuIqwy8UcntIlP2LcWYPZ9dcUm36Z%2FtYLiNoza3uoB8S%2Fq4Cv91NhuB8H8trhpqklMmmN5NgKuFB75wRMNPbVO26TWpybst%2BbkAA&X-Amz-Signature=91799ad321b3d84f9e3ecac3c3f5994d323dc67e91758698f923812a9835ca49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
