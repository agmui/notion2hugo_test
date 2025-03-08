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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRF57JE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDRyPBw0mg1MmV1gB6nd%2Bv%2FM8t8HFNDoxGjIsNeQ9TxpQIgT9DwwlXQ8hT%2FXzW5aojn7PpEd%2BHCZeLH7T%2FHnM58LH4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLEQqFevVr4%2FlEHcGSrcAxBb9yGZiI1xoB52lHVBStfmcteR2%2B%2BwiGTdgw5T%2BbF5z80DCOxIk536ldHgfmqD%2FrN0HnjG5fZXONY7htGhmBEhUhrrwBSNEW2z7g8UVcSFqLgIhqQPg3sRI3pkIavYSSXanpqj%2BseJtKwcJ6OnygDb4%2FiIVE10FO2O3aYMJT3seJoQGQZ39ZOZUYojJ5xQsiywknj71dBpnRhS5kqiL46F9FZTSo9qkALm5Rc%2BpNedExZMjchIKLCmoThFVFrYDkbmh6ULZH8dZo8GEsLN9X5O%2FgLoGI7zNNwFL8TCQask4W6I3QkBVFKSluVm5v9k%2F0Sktu9uxnVyZ9UmS8uRPkDqmMJrDyG9SKItB9d0IXrjkpRmwG5CWxwbzG5dHTJ4JFeLrzPGyAz55%2BGBJv1yFe48QNoTtuD2yyeT9VQTVmgvbBp%2F0F5vcSesQ9lGJVE3RiON2j3pisdYyFBPHSZoa%2F3d9zFWblND%2Ftzkbgq1obQmp4tHAFD4dXlcVDYplsV9ANhdv1Sr5NU1vGpymZ%2FLUMMGw4jo%2FHVWaWT2Hi1TvB%2FQBwn%2BpN0vmTm5SBZebeCkPVIFGelU5ts7Xl75w9udFGhmH0jsWgVAJOhx14S6ckwxxsMAO8TlURR4ggS5MP6dr74GOqUB0XV7ABJ3YOdEMIcJKP4RutdPEMzGbCf2G1H2igdlamIV8jrw0LQcWW07ROeSqp57qKRqZxjlajXIvTVlYuT6VzKYHcXoMYAAhOCadusF%2FdAzIu8EJg8Ck%2FhQAxCqXHWuzAG%2FUxUixBuks9SRbvapiI0M13%2F4SZDzcxOtYEa4YOEifFjEFIM6lriJdqLheeQc5P1i6EFHtPDw6zQrR59KZzsAFEIq&X-Amz-Signature=d217d68b8e7f87fd47b9dc8323a37a778eb0e0ad10f5f803f5c19739fd2fc2ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQVSTKD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIE1uE2Lhb%2B7mmcE%2BHjhSh549s4sq7Viq1AMYJgorLgthAiEAnsFFX%2FtO4DvqfJNtZ%2BdLhnqx7pDn9VTPv9%2Bh1g4JI3Qq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDOS8kT0IEG9TC2aV2CrcA%2FGoPxFMGgyknmOgSKl57GZhY4qbfqf3OVqKepmrPSBQXSrv5Rc3kiLdj6xpG4YFuHK%2BuMLjHmi%2ButXS2XJg7sVE6MO37aCrWVb32voSQKK2Q3ov3uzQhGcNO1%2Bsidcoa6CEnUagNis%2FN2kW%2FWOAtQ2y0uTCFWDo%2FYR4cS1FFF42MFj7cal3zSiblhJ%2BvmaDS3%2BeP94xSyO3PSV2ugm3qbiaBBhvx1ImfHLtz3DMBWSg%2FD1FiAUySLSr0GJyQNKlAtqUduE1WG8eYowDipa9AwIgd6hW%2FbdW7DNaUy%2B41DSpnBAarMVehPbat7lwdlj7cm18DXDvhvKYB16lYfu9d5BB1N1Za4F7Ok96C2kSk1IGjSeLrRqhNndd4hED249RIj7RIg3Gz2D61iJAOWC%2Bvrik65yVsjvDuoSdJO%2B1paxfTO7kyrv8Ylf99uKPs9rtp81r%2BGTUr%2FobNTuJP8TZso1i1RyN060hwfyggPu%2BywBU5GA5SKWLOJI%2F0Wd17J5upi9oCD87eapFx4SLfHS9fJE2NlyA%2BkZ4cs01OJIU%2FRYuHKMn2GW743kfPBsjOCKXZKHitrdOPZgRIGV6kjvueam6pIeuPAlSXgFq9RzKVKoBt2SfyztclzexiWYzMLqer74GOqUBiWPXMmDV%2BSdJf6eng5XBJPitbbcam0mN0Imgo0soJS5ro3JQ8I4lOSG1NItUe9LLucb%2FNrIZwUgSXKOvcjvsdVQuPSDJVu4rWd3%2BTu1nHz9UFRLskNbcbFIpHN1vwbL28yKUnktAAGX3Y4TNnxDlcEzqMcrFuRIq7QWptPXsfjCC2VcV1sOAH36dA1%2BVIOmA2x95cd%2BK47KbkiKr5rg2hdr7U1Nq&X-Amz-Signature=9c5df5985972c1cb03e663ec360431fc505081c882befe66bd3a4c9d8781f4bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
