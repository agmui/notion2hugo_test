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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ43R5ZE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCSfJb41W734hQQoZwzg2vmjTHPriHuIGM%2FFNBNqlacAiBIRbbAw5l%2FN8XAhP7DQNBdob5%2B9Pzirf1ppsjTvOdw8iqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLwnighFfPAQf4%2BYlKtwDzMY5d0q8xBAhEZtdEREBXXy7nuK1bYbT2ZCCZ19A0yIN4I%2FHltmi4qJ8KQqnCIr3F31hyt41Co3E6XR2ICo6neltAgbdURVDEhZal%2Bmd3QgIAEiMGhKstBsHXRNzBnx68WBEp%2BJKdcTJQeN1QOTU5MjLkEtf7t2%2BSLk43Bp1uuEZ%2Bs22ySirmoZi7eQk%2FcbDaGgnxWSxjjTpnyfc9CfdNcVgZYDGtaIfOTGoBg%2FzIPEGTWmo76Q5WPM%2FH1bWGQalv9e%2BG0gS8IuvK66K0vuWHuDMPZzbPRdSPJnos5Qdc2IygdXJTa3g3N%2BC%2B89H5E62107kwxT01YdeESRQMxTrhdGPefznguJzTDVirzc6NO%2BYKsPZOsSAN7ShLAWyYAN3453g%2Bm6O%2BfPt9VD3EfmVv7CIxj6tAwINYk%2F8u4946WWPeKNSbCxthbgFfn37Du%2B4eWHG1Q22R9xCjU55TzS2hZM9um38eXcFKfdKEzhTZdk%2BEWPIsVqxvA8yu710WP0qltvMgluVeNPGJjvI0XEUfyzcvT9wIPd2eJSDXcYpXa8Z9XkbrZRuA%2Flgt1IJAq8XHKunZbC5wCHE%2FvUVIp9%2F%2B5a04eGnH%2FT5WHCfrpLlmFVSm3gLm461%2Bqz6Kngwl7%2FAwAY6pgHzhP5paa7yTwDqiPnnEibTksE%2FQrKHGKvZC%2BknMmDy386d8j%2FK3pCGazxofkhD2cKf%2B%2BmxrPNSWqLWf4ESYo2Sur9PeCsb1Px0qHfILswlQSOMXoEEVakk9q7HVYOI0MvpbS0l4P4We3u3phoCEY%2BsGfWWM1iJAtm5kB6WM%2BFFUvtDQAhikHKFB0Tc1rgf63I4HVlSmfaPoPhCLzSAXZ%2FsMhGSaF0H&X-Amz-Signature=e7d3439c892aca11c6fceed42cbac5df862d5a34f30da251bfe2869a780bd23e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RJY3GE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWDKpyf9ZidN65mqqiQSJT%2F9xsT%2BQ2tV5dPWjBbiokfAIhALCJ%2BGw4ILpZRTiJ6IDSuNDik3bvu%2BJg2e1Bsuv89y8XKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx28A9CnfZVxKbToFwq3AMDFjiQmze3wHOH7EiIknQu0fMWX3RyOduu4IMQwLxW8hjWliix5ewVjrIl6z2djTwb%2FF4BBRkkpqwLJwC7c3d63PhuMqpb7vVPirDDmFdCJGMhq9KMHeTC2M376yKhCUJdeC7Mwwl7EyGS8YDfdpeQAKFS%2FghWpCMRl7dVcVlWIk7HA3I5WYQDhCL3iSE9G3FBe%2B83S1u9APfhRMHABeV1EnWIol6zGd%2BcUTobMIMAwaq1DoAjgZmdoSo4gPn8wE%2B%2BQCuCorLKzdg1iA8lS7aNv51LD16Dmaewy8Yua9JMcEqe4AqLhdxBsT5tZ1iPoKX5zgKsrcI5%2Fr%2FgNx8L9tuDXxp7dv%2BRXY1zaUPhCpwc8f%2BPPKAaSNcNi3P7Mj8IBueNaTGGUDDJ98Upg4P2K7yKhqYceTk4XTfFyC7XE1xR2goGDB0VLz6ULZjDpoXue822%2Fim3FNORKVHG%2FYbSuL9CPYXlX8EPNajDqpAQsp5NmE0A9o1A0ikEixv3a%2F3Rk3oIqpeQZL%2FAdwXxITekPuuIqCAVDHaCTJB4wu2UQ0Nh4PYt9djaXbSh2qJTBev02WhBdxy3pVD46ow1%2Bi%2Bv%2F5n%2Br9T0u4iAxGdEHEMvjASVMe460sWqt4iYnHiIwzCBv8DABjqkASr0wotusDqR6mrRFxGXJXvwd%2B%2Fnwbtdk6HBJzRypHry2Aqs85v3aq%2BXYpQwra%2FO9IeiUzIS3c9sScejLtJibrQX3p6VddtgEZxitBF3%2BKTpHok0dfL5wfK39EB00Ac1a6ZUlaZAK5r%2BIANJSmp55DdgOtQJNXtDRyBaZCOVc%2FcfRxj1P7HkQCiNQOYS%2FglfSPyo4dLQIP1r8TyBDCtz1%2FczQSU4&X-Amz-Signature=f6c1d259410b4947b0d71376571d56bf0af1eacf313d0de2815f915983ea26ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
