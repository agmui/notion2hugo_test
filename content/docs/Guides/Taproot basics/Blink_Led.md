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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJWGJSY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCgSfD%2F4mT%2B8notK6HcZMMIjJtjsuRjkaRVAIeyh87FWgIgYoeX%2Fby%2BSHPM41oXm7x7O%2BQ969e1DsRFzv%2BFF6rrStEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKzLy%2Fxd%2BBfjlOBvFircA%2Bd6kIUx8p9nqRCrqtl6HY0fJbCcEkTZFnvVItgRUv%2F%2FaspRrJXv2M3akBcsW3THdr3ltQH%2F0hPI0s7KmuWM4%2BD1%2Bsd9oeub%2BHKzvUb1a2XtapOltfGWMCFaPFT3Ua0tP75Apzm6u3cOfEep2%2B8xz4%2BeyWJQ17hBnCe0gmdalTiBhpnoYrx83kY3MOiPIWqGJTt9cLpWbNhVitQNp7mBeR5JpxGOxU9DnfIU9HA4%2Fz42fv%2BZTIza2h7oxDXa8QHEDTkFY2rxuk4czwA7o6QIz3KcRWBO3Plq180mtq60w9lU1moshX8%2F9RwFBChJ7sA%2BfOE3fB2897z2gudVLRT%2ByTlY1F4bxrVri1J0EsovVACCb%2BM0%2FzVmm7noFeCWQKLKoOeXGh7Fo%2B76%2BR8xWUZ%2B30iW4bUpyAy8Ajhz0j76xSCKbmkKN5Sg8iPMfZUVBXaXlJJwdvVfIkZnGu04VR2GFXCjGuh3chyJQQgfvQ84Jr9SdjuSf7q6y4rTLKlSAhfgVN2%2BN0qB8rEibvifJA6R%2FQK9B%2BukHjcOYiJ1Di0BO%2FSHFq8aRIoM1X5J%2FrUuhPuhx9qRLtkgkpEI2kwVtkdNJtOH%2FcrWW2oLSE8h889kp3E9i41kV1WBPdhXAingMMqG1b8GOqUBjfgIQ5V1FdxBIC28g0R5rY2HegHTuRjrsogQwKzG4%2FQZHE5k4gbYBbhR7CVVuZ7zut9SMrRpP2mO66nYsokk2K%2F5evZ0czBCGANO55ZbU%2F4HgALzFboNJM3VfcMGy2nnQgi4pJDmWYLrNUqS3%2B7qmQQ3eFMW3KEHr20VLtdisHZJq9eM061tz3NRLBjsD6adQgnPAFdXD5hsnVqgDfxrbAcJvJGB&X-Amz-Signature=d3aaac9ffa794791a6628ea4f9d7a7b63341094e3c87ab88bc50e029a7bed0f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3PBBBPA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAqXhCM%2BeXwLl85w7EsRclqdkGJDTiQQZDWYjIiPWHjjAiB0f5S92cM09ihI8RjvBCSkHroKZmImBNqYDFadLdfvair%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMofT94Cqkep%2Fkyr8oKtwDvIjELv4UDS3NJGIIpMCMRHN8kx5ifztYcpbuPnAT5kwQ9GWi6aLTGCqe5cUk3CLZOraQg3DJpCvLZcVdCOsI04%2FbO8ja2uSsVKGeyUEUH5d33p9hUPHYzyZIwUGdcacnwtXNk9jUnXBH59izzn1dcoV5947aFs8vDhA7FVYONCEsdZOWjHbkoUwrGAfJzKPX%2BKj8%2BTJXC0PpyLYoNSgf0%2BNubVLyaU1%2FBULmH8QASMxHLfmsM7hjsUEHHRXHb5kKRSCms1mPQmHmu%2FuC0DR258gUB39mXdylnwKJt56axWNQcnBz0DmiJZzRYn4v8CSZTDgYYO%2BVviUoTXXJyLRfVwE%2Bld3TXJQSzDqY5xg4y5hw8A8Et39v8Xo%2BCPtfv%2FCTXNbpMq4W%2BHNRxae3lZPr6pKr82oFax0AQzfLI%2F1FtDgOf%2FShS9fNJPc79cTY7vXlFRVO9qV9P6CL4cSuYUnPRWaChUR4%2F6l5BtDC1Dt4CwLTDRda6YAWYsMENzwZkZYjTyCOlcU83FV3O2JAlYg3u6U0bp3UdcBIazfm1d8AQzcm5Zx9Cjp2AkGpIBYP%2FlHHGj1n18jI%2F%2FJWUbFWOz%2BOOLR2VCP1BoXcsYkRGQM%2FvqBNJw0A%2Fv9307B7I7Iw1YbVvwY6pgH3GZWi2dr4LNRDRmnNNVbuYQUCxkXE59IIu79SG6MVHlLuQxdBQ%2FoATh9NIfKaQhdncRO%2BatkGQm6WtUGuJuCLTzsZJShJxakFT5e1zna2eogQPFPh%2FUVCMI2GnRGWwKXDif%2Br23Qudt8NkhrwpEYbbUMbz2N%2FiUpM1jt%2FSYDIyfz2eCX9bBrazh7BmAS67ZD38rpnq9hYsJR7NNxemDTBhD2tajVg&X-Amz-Signature=3129069ecc6468504483417c3801d3a0d0120f358bbd4417d1fd2a4e68f72a2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
