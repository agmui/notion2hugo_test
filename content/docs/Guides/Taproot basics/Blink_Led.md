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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NXBPTD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjoeVjpgBhSU3W1bI1RMXmmRdTS08KpOTwzm9bZqJzJwIhAIA6eZV8qgHugFWhP4k%2BQJ2hqsltK4ENZsGB5AS8Tx6mKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAwEOo5H515xTaF7Yq3APVTpcYTx6p1FSMoYhb8BbBiedbxtEvOAbLZwJedXIugjr61VN%2Bo5GVIhS7uOTCYAlgcfNjJfrWlwmppv2eQKoZ6Y31vrH8o%2BNyLSQ03RtbswZIS3GFMLIqnzSkKCz2F%2FhmVWuZw7NIxWYlGFTgNnJR%2FBHUZq86I2lVaUMZUv14Ujz7PDBx%2FDbFWV6b1oYarPJJYG8sDV8hsR0OR7QEFtznbWXryaVcXZVQHLIiINOVi1t%2FDZf%2BVE0ezRmkjOfCjkz0Pz0SftwSTcELfLEgiTg0IKSFF3acW3ffPsujKVko9yNY42ne6li0C7tOrQvCrABD%2FEbidOkEnqZMJqAbPuFjNWAVERfbNp9iVurB6SrCzJm%2FA5jXxnU5qvMkA%2B8RzlM41iELCQ8mdW72EyxXMmf30nyU8obZVo3aVV%2F8CXia47CtvJOLzWANFxMZl5FTa5Jri5nLfkyD4q%2FS41Y%2FuUTK1ug7EmvrY663sXxcXEox4FG2JutOPjCwfm%2Bhiw6U38GXef1O5wM83jrBEuZbS5gVRiucXAPLuXEZtqNmA5OgHkx6HPVIGeYLKVUec20ruflYL9KtJoW%2B%2BPg2oIkwLPbKbGj93IRAM%2FuX5%2B47p578z3%2Fa9WqQSCYO5dIK5zCuhOvBBjqkAVjR46zhi0IGJW7cfEFv6iZMIVIRxzp62rIdY4ybq9NM1kIEjPUMaCTFYOcpqUdIoR%2B4n8y9OF9Ek1BXwxZkAQyMgbC5MNCkLkJ0Ii5qaTlzWrKfWigOitnm5jYT%2BioYX9md9RHrijTHBJwaAJ0NEgi1UEXgj0vii%2Bqz4uqoM7APqINYfYh8RYBQAm%2FY9kBQfFCrp9QybtSBcjW6gOAJJTvSPIES&X-Amz-Signature=5c89cf731897b22546e83c1489a828391073366c6feacba131dfaa5b13548d99&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX5CCMSW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikduh3ny7%2F2fYavgNo3xolI8AWiLnTuNWUIih8U623AIhAIfFuPk4BRFpirriE7FO7PFnyKm3qwlVaImgferx081DKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0vmLOxNw%2B1D%2F%2BtJcq3AOTyezku4yi3PN5dBjFrue9KF3BHOhDFLRHqwod7pJQojR0MVJfWh0pGk9rRqCR%2F9Q6hgfJxBIQmbveY76o1trVNedUrY%2BSPG9Gk4KUmtI8YIaWvjZ5nB8FHcfQP7wEFGLWxv%2BW4KMkErSVADvuBfSOy9T4zspC%2BrBPR1qJeGSrJ2EFveLBeSJfakvAuCUBvTkjC1lFm0ji1tt7Y2xJIM1neEo9XTHBPMaSVsqqlG0G0WBOu%2FyM4tB%2B2BcAd%2Fvm33fDc%2FzB1PBbtONHjvggRS2MVyIjw8YTvYNfhOrJcAb7SdLjMvEtPsZzwzagRwnkmcZ1qxqk5D1yf5EtTcBxAezwWBVCAjnMbOdyYGCrnc7H1Bdkege7THc3WtAV2C1qEmfUDTA4tNTUpp5Y5fuaQu9P4VFpTI1oP%2FpJjXCaYeEuUt64zyNHsqfQKnX8c2AUlGQWomz0rH4fu7noC54%2BWrSpLMIK1E%2B2dms9V%2FggN5pi%2BetoBuy%2BlgHgVCDovcFaStXAzy2IdD7WMM3Ybz84WIUL9XN3q%2FFj0IcHUivJ7amqzFc2IKHromJRbmRyz4Zkcb25FsnyLzlO7inQDTazPg%2BWeVp2t24E5Ss2moYeXQ7BDRIEBaO2p3ahL1t0WTDZg%2BvBBjqkAeRg6J5L22RaScQ9YO7Mr0cRusfIJzMgNw5teSktDIfox%2FhKGOIgu3wZb1DQ5MRuuc%2Bc98WjvrTelvXHdS0mr%2Ba1cOV4Y%2BemWBLglawMFFAB8HzubkXslAaBJvv1mGPJRfdnORSx9BwbMgv3q9GMpBGmmNTasnHjeY9588HgXjF640qWqXXAp1lua8ZZ9IG5SVkktHQG%2BYsp0FbvmeTOQ0N2TS1B&X-Amz-Signature=2dcb6769e0bb6906a74b5c5c3d545b6ab31eb09ba8d4bc5466852c8b1556e013&X-Amz-SignedHeaders=host&x-id=GetObject)

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
