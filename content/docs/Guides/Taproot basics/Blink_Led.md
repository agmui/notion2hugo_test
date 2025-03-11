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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAY5T54%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIBwPqLppT0snLF0kDM%2By2sEHxsIQD1G1%2BU3aXUcwRtsZAiBIqtQ5tXPlvz1KuK6cHFYkRRvD3xfjxmTMA37z8eD%2F%2FSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxmuAlqJJCan8OuEtKtwD88323b7v0QinoGBLK7sSjfp5z8FRW3sZ%2B4RYcu650yCi4wAv3e4azSFVRWPOCuQanz7ZxbSey227wSc6lRFaezhnBhyBz0S6wYMa0JtrkpQ6rJRgBjK3SZRzZ55zSUKCXcGJncf1zNLihyBNGRGl9HR%2Fnssr6xey1EQCqoNQOPDNBZmYr%2B5TSOvA%2BDk88MrjcKrfpdvpd5Vp0IDiHlaJQcxDQY0mw02ihLs6zIuPg49GQrCxUzLD5UtcIpJTz0FNaY247tfuoBmOIGgVOnX4gBlPMmA7pXZZKvlwmkJ9lsnKjAv3RBuhZ0pmW5xfJRx%2Fy3bdWUguK%2B8ZFw8WVPcMdgwi9FY3CLtjQU0bmzA8huW25cO%2BZycjD7s3TTZgZLPkGwKCaRgYQLTgWmDloRRILlWhIbxX8%2F93pVffEdK%2BXweJGIYpBO2kO2D2abmPRY%2BUnxH1M1l3m8c7wsoVaJ75iA4Njo5%2BWI%2BDBEIO6q5Bkkv%2BxzZ0UBDr00MI8LyK8fj4EOp6pzKpK6gMOCbLhO6n5DBPtSdL%2Ftf2PPnaduAHlI%2BvOu%2B49zK3e5S2YJX9J5BTTVulVhGR9GADpBjN9tl1p2oXWb%2BJMd5VkQt8cNG14iZzR0RnBc7%2FEAvIi14wjpHCvgY6pgFAiiKnoEEOL6lNTQJF%2FvV6oo%2B42OKdKL%2FeDhF6eXMK9GKVUztyGLkQhm52%2BGFMElWz%2Baug%2FObN9Z9mw31SBczAz%2FE08Q%2Buu19zHjsrd4%2FMTvNFRTFNhGHQuX7VV6ewMeBxdpsOzdU5NxdS1IZNRbwCyTEJ4LdI%2B%2Bfptvzq40Qay7Apwwr0xePtTE5didw87uXbYXuiDNvM%2Bfn6eosWKi6D1Mxl%2FppK&X-Amz-Signature=a32da4afb81175845ad0126b4100411d737972c2473c850ac09cb4f536090e69&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPLEPFP%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFtpJ77l%2FERuxjKao%2FZ89L3KC9%2FQXJWVpos%2FQ8S7DghPAiAmqQQOPpdw3fhTjmGK5MSRM3ixKeaFNKiAU0e2cwSxACqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKJ7OHHDj0lmm058kKtwD1IIhfPWYxUHPjaJ3yVU5gRIGFWTQp2VWwObvWHjrhqpiW9vE4uAasaD0WGBojonzUtLTXW%2Fm2yMtWD2DE8Mzr4uf0UVNvKbDD9MSDTmxgzME2rdEjMHujy79Czch08EEDfjWQTWibcLTi3tuWJVSGEKguWfToxDkQl85uE82cummnwT40LA1gv1AqGQt58DKkCbOMUWCcwEBeAatubxDF5Dpj%2FzWVJ16Tm0T6S9yv%2BilephmF6Pbz5TftGpOqCPEJsXFgemTuCpP25m5buLPgwnuefDhwraNb0%2BQePZdn2AB10dP04nMXf7PZNi%2B0j%2FEDIgPiuKumRuxOReltqOsF79gAhak%2FBw1zEN8D5EaUi6vHlK8g8fnkJp0dgHz%2BFsfHn9CGutzEBnWNHyn05iMHvdKul1F3t4LjPeuOPCGAxQPQSYTnJ%2FxTD1uau5yYDnGUO50dA6S5dzUBcTAqW7LAv1mrrvpq1Q7iVLZ1zPju5q3dDBgWUJCjWFHFUXhhrBXr3BECQ3uDzWC6S9WWECHP0MHjdhvOeWHPN8wJpLA2F06z2CaaqBA9OWRThcqGc5JJqWBvPEyurT%2FuvOyTOgFzsTD4Tog3Q5WgkiXmlikwJDBexRT33ss%2BtnqvZkwv5DCvgY6pgEdG9VzmuKUuw34cvC1%2FsqiwBqq0GKgN1xGRtvA5Q7Xim260g%2B44FGnw73YxxkKS9timnuJt%2F1knrjOlfQcPZmdzlwCpMATvBerBWW0aUXW9rRWODAHedF5hA2QjK96%2BGlnpAxX%2Bi1mM%2BHRU8gYeAXoxJnIk1KVvMWsOPFbLVwBx1gbuCOKq%2B7qw%2Ft3AWNizY3lgfQ3ZfNPROJG1SqifvRpiTbEG1n1&X-Amz-Signature=ab3c78e22a2afbf0939bbf4b051a4e9bdbf18fe62408194e12da0e835b098d69&X-Amz-SignedHeaders=host&x-id=GetObject)

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
