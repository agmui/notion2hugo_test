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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVENRFHY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIBsXPBMZl8QE3jGCeH8GrZxVrNtZ4HHUX1ep%2FlOQsFMBAiEA%2BvKj9lvxU5lFdHcSd2aKQYTEXNGrQHasstwNoLqxJT8qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgivj0hiqM0QAznfyrcAwAirbC79qeYg%2Fu9Voe4dSYEOQryjCPFf3AmdWMijG6v77vK9IlaKudwroSXMBok2pcx3wk84nXqvekpjNmUSqutguFPWyEVXuhI0r3bZjFfrgCrDGmBhrquCHLVPDpSrNdY%2B9eWn1ANwFlBEAEUDIfAd6NJLh7sVD8x50lcyGYmeeVOBxsrUXM%2BFqiSkyftb6zyRnDR%2BsVnAVriQu1%2FS7UfmdKB%2BWpBV77jAcAg%2Blk%2FjNtk%2FMPjFXcaESnW5plvLCTWd%2F2Pg5ZAUs8dGi%2FJWjYJ5MiWR6ek0W5uGuP7pbdN7WaU33UCTXIrazKksEcAWwjT%2Frri596fx703DphvDoo17bE1yrak3jGyvDEUXv3%2FOV%2BriO7oD0IAJWvQPrhiYlNHPkZKPekKWKZw6fCvNBH8KavQ1w10lxRr3vMSJ8ewoK5WITvPg2H4ofrlyz3YOF92fODWek%2FVwrBH4NEYQcFML8uWczy4SBIiJng1B6l1XQvx%2Fl9wfVtNnoYY4sp1Mxali3oGwb9DRrdFzpajY7myNWfOtVjOKwBTkRGM7lROx2UYxWxo0MM5WcEubhOFB2YDyolGRFAn7zdvyxqB4mLK4aQaFrA%2Fef%2B3xRS1HAUa0ZfSi4ULWSO7OJo%2FMIOPxMEGOqUBuI85mqdsxodzWIfyYO3PwXiCEoiDkjEZ2XC5PfaWNZSvPMd61ohAzTaRMnG9KHCjm%2FC1d5q%2FQifQasaTf6w0BxGNbvH7gCJyQUk97rnIBezDTa8U4ZHU9hAGjBpNnGi8gWwzgG3lWjM5SEC8Oz2aE0aTuNz2S6MWWVwwr8fORoi6%2Bl66JNBl4VXjM3JBjPsoDAYH0yB%2FFHzE2tOAeI9%2Bt6oOAwZU&X-Amz-Signature=06ce75e6442af87c1e4d62578f1d66524520a2820a2be50cab5a45127d8a73b1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5HARGBW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIBVKum7QuooiJ54gASK0cVogy8a2COGcnX7BVHhg78pbAiBoyidscJcctdWiGp5tvzRuS04o%2BGdl%2FqIQcKYFMcWreyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhcCvAB%2FU%2Bi4ZKykoKtwD624YJOlVjVRhYx9S9qKGgdq7jbVmPSgFwV4jJY%2BSXzPqnU5u6YqIQYqqQlcrIxE%2F5Dna0BYZ%2FjsjannU20eYOVLdl0kFA78UTEMEn2MeBMZd7Osfnb3mhhKy9qXXLsVIHCg%2BUmqByIkmSuHUb6yKY1FLVL9kYv%2BIipY3hUDeP4DYcJuk6PnX4oTcfDCc%2FbTUYPJXl9gILCNfsku2icV8NcLqu7Bp0xTIQ4Ue3Y9XKv3iU06ZAttJ8vDriUfjkAAr3pCg%2Fr%2FJ8VaqnjZaaJMAjA%2FjqFM0qlEGfQuer5zsMJGWiVCL2EZGV4r%2FZfKxa64sehtDYiGcNzoGuNh9vv39ASxtf1iLipPY10ZH5xTmJsIuOxj1qKT0bq7Rm4KhGy74FBnKg%2FqtuzdGyYwbqdZHp2EqkToDAmG0FLSM%2FKPB2z6seiaUem889IyzQ%2FPtmAqX5kKBqkn0DN5a1trzrIGGRrY6MhnHv5SG9PhEQCnM2OPXtegLFFJpZq3BGECX0AxtYM%2BWi6XAzdZiAx1ya%2BMqg9LJZRI1W3KY0N8c7NY2GnLjaj79aKR6M1zqPrVdxH9nE9zxrRV%2Bx4cPpkgn%2Bra5BPeKVwuKJk708RygIAvt7rCurYuNaLC%2Bd8enIn0wlpDEwQY6pgGymuNvAel2BW%2FwZ4dzsczO%2B7br%2Br5gGmdzcf%2FLR4j3MBmSDm1sRAXKyzMeFFWNEvqIhl01o5ShwAsuOvHIGZm7AwfKpsM3Zjr4pEjErZsLMuASUkUNxZsbApbj%2FkVvU4La3P20a8S%2B8Z2MB6xSWfG4OGkhqvHSC8tJ3Tri50c2xQ%2FG0rBO%2FcJqHNq%2FtbvcMWl0kLZvP37C2pFSL%2FqG9JtPhcttAT2s&X-Amz-Signature=ae7f5debaece85490a0840aa57c93010fa3b1d9147ef00f478bf328f5cbc4071&X-Amz-SignedHeaders=host&x-id=GetObject)

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
