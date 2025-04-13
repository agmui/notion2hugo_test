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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q37E63XU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIED9Z6sYc13wrs0dZ6gmlL7SKWF3muxV3TXEIyDRwQQjAiEAvW0Rzv3Dnk43AC1I28dQKS%2BzGJbmUmART9MjxmsSNnUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsDslhdXMgzVG2gxCrcA%2BVqfN4viJ%2Fcuw%2F5qCUpD%2Be7dok3yq84%2F%2F6sRRDOS90CEySq%2FkBcFOCX1DWo22xsdmTvzsOQpIj26OlYKxr5Mf9uVnA68EUGq9FCFH4LXp0AsUTkhr14fUGEs7ACkfPdEK%2FScjBHYABdYo348Z8zOiAvv85l8LKNaLYr4tjv%2FFVillR5JCb7sjHUJSBJcWpA%2FHEgOsojsYUhsl3oW2YgNcxnaW7DiCyL0ASSrRp2I6RpS3lHa86XLHeB4iuTDS1wCSS7fmt1loVcZlixrUhm5zEhKmhYf6NtCwsN1Uu6%2FsJ9lcsxnnCpWgui3LMIcQ4Hp3Hv3or0WfQdn3ZD58Ij9ywpBkTQYgyjPSE6nJdpKbFjfhTOTEcWLO%2BJtnSu3qQ4q6HUq2yWi6vu62qVTSnuvaqgD%2Boddgc14Qe9Q2HZvZDCOAtW%2FJEtQtP77IYk4A4Aupe9ufOwMkmFKZUfWHhRefNr1fsfGD%2B0gej%2BvIkoqO8o1lstOtVhYU2UnT1NUBWcL8fxvWfkkquMW7v6b81lwgppKMG%2Fswc%2FPiLSw85u6slrVy0HxFpXQpQhWEWWX9DnrjLHBceJolOazl0NCgYImkZA4ivXvvvNmW%2B30Yuj8ZVZI6dUSQd0tiPgTk3oMP6N7b8GOqUBQ%2FmzDdipWYRvDgnkhnsLitAlyWkzlq5Rh3XK5iloNsNTMOgpGOe%2FyE0roBp1331S3EMOhCQC%2BXVV9c1ZqBr2JfX2bJ9EDVkjYcoN6ITcOLgkQKwZzLY4%2BziIgd63b4QmhTcn%2BMWsB1rM%2FaArD5wchzn23f2pGsxHYxpZGjyMfboFSUCBeO7dxpUsPrEEQdMl%2Be5hICWo%2FtAmJXDbc%2BzFjbzCJEiB&X-Amz-Signature=ccd1a1b0c2fc6091a24659a7d1461f123cd9059f25e33aa44e030394b5841226&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVWTMVI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC899ITMmIl2t2PRB3zrEwFIn5DD4scLX7lHVU9hQS1ygIhAMERITGipM9C%2BZ1c7epZix%2Fm9KYlHIV41Kb3hP7ilmrmKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIWpgAE2QRtK%2F9c7oq3AMAlchHCDz1jPexwsQCKnmk5AQsm1gJrxILJvCH1yDlEN6zL1EyAf5BgLwfhToANXNQp1tHX0S%2F54aVZ5S1MOilwaZr5ZvT0DB%2FrlOpjitAxTKS4ot0Mo9yAjdCJQEbbqLSZ6ORpCgj3CqqlCvVirykELP4UVsZGn72sh8BS0S2SJH1P1vTodls2ZoM3TWYhZUqJEgybj50NtqU%2Fs5Y8rboI9zz4NGXAaV6EuZdBVetHEEs4fpAl0KhO2h5etFDsBSRKsyretitH3G%2FLNQ4yS0IEGXybahX6jwz4QYBWRdmYhn%2BpSaod3WhkqenSPQroe5Xtk2FojLNTCAiHp7frnjOZ0jDGrGnJvAVQQLWfMHI2Ym5HOfhF1aS5sto5xg55WPQtAicctxFYbd5qg6k1scmA71VWUDlsVNs3I1EXSE7SGtYfnZ9bi59GiGnJBjEzGaCF9JNBjKPpRe7iQLlGaLQ8YT5aP0Xxuq%2BCyeFzHj4hlFEckfVLixjLjkAW3469%2BimUC7Pqy53wCd42hU10htSI3w37Eqsu510pUD%2FenDCY96NxZFBJ4x6Z6Lws59Zd7e6QDpcMm%2Fb4bHheG40zNqIOkhxVtzHHZZGq4MWmUekI24QhjDcNoU2GTBwqTD6je2%2FBjqkARXkPzcyoktuqz2wEuEdp1iw0%2BnII2UoTQRBD7uFNYuvimLCAPK8LFQsr4vBBr%2Fk2dRPYOaDngNOWKyJ6TIKlZMWC91Yon65%2BAjgfStbX3cIYupBC06hGbrV1SVg4Ashs5HFlGKykYNLaYD7myrG1dGM8TrFtDRnUYBKdqmAxF821pE3UnWupe%2FhZuampCcaPQ4aaRi%2FcuUEtAVngvnxLM%2FwkgqF&X-Amz-Signature=1aeb29ab3415530196448e44e49a934b7f979852b6023b57f9b85fe9f00860f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
