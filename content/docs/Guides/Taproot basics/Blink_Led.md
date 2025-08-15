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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWN2J7DD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIF75ZLU7oaRInVjGOBR15B8hixOfY7IHETQPZlcPp7pHAiBn5x34%2Byu%2FyX83FaD5gvIqIjTXP3eJmJtociSDPUaReir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMb2HrrJwv6RfLx1DxKtwD%2Fz2fy00YuozZ9pvPlnP6rHD2tUkpBovVaZICMknXpSIvk3y2nuI3bnl8bDhzArMN7tJTiCE9fm%2BgFdxkNhwihrJalqzGCAf1S2flsoSu6pHzEnq7UeOQFSEyX0XhK0U1lCsMM6tzgQn2jcfPsTV9vlj7u%2FbgHyteFhmBlJtC12%2FXb0ARd2G%2B6uaG6Mwux0rijTtXsa6STU2cH95nFoehZnsIDUcqMNZVpU9Hi6Tag5xIGdYxkuyyxwfgi5qNxQYHxXe7NOjo%2BaA3LcsCbBpY01o%2BdmlUM3rK%2FRA%2BXUxYrMVrYXbFcRzmdek%2F%2B10YuORhtc0TTqtO58dqIOmBiOHSXCD3UlIGOIHQRK99c7pJo75rsulqzvZHSQ60WWkFS9UIToMCsGl5HZUZxTrqXuMrqsd%2FMP2ywxwrkWf%2BlXywoT7VVPmYtHDAr2kLKGqHEQDlJ3cimbJZTGiiatJzgjrdvcPQrxt%2FtXI4ZgUgjpqxrkRudb1rRgUhGVa6kxBCZ27aKdg6lecSh%2BZQ9eATQQF2xgnx2oHOllyt8THO4frAWV3HKLO%2F5HR2hriMbrUpmC8J5qHgA4YfD6YLYxnkhZW4ybzXo03syuGHOvJ33NT6Dz7GAKXm2v0oSxkucsYwsbf8xAY6pgH7JQIAa%2FWT6DSS8AT9wciXkWdTcQEvGrIjGPWICoHDlpZo35k8VLTwD6rm%2FYbCAhJ7ZZT%2Bhrzv1xfqhKb4uU9wzO0UKWuzwzsWkFW5uzROS30QGwLnVtOb%2F3MWwD3xrbVd5VadMySp2AL7bVFVvfhKc2XBS3TfalrTCDyLJUPIOe5yFSHSemq4ovVnX2KzA8hsksvKqJtt7aamywfhCP%2FF46Z5TIIG&X-Amz-Signature=6ad0dbe89231f5c8f9cd163171212b3ddd5d0e61f58ca1eb4e9340ac530ea09b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JUV5YWI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC8hJhgJZYqcipGhfRoMG2tRRQfJnrEH79NdwKyMKX3iAIgXlCA9ZPDLbARpf%2FvJdplc9Oh46Ju1qmQC2Bg2GWuGXwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCvovGhtJjdEWJfayCrcA%2Bj5DT8ZVxaouU2%2Bnoe27Q1WyuASoZ7iOsXc6WpMMg30J221anMhxEJ8wf%2F7mlF129iU3sUuWUCXK5BNIHM2Dd2sFW6ptWADAJaF0zOFjFBZ1Z4zFNLnhO1MJEyxuvA5EKuhbkxamN9RWWljxMc3rdH7UG%2B7Y3ya0uQy0485M3kM3u3O%2BUWVaN1QFdhBS4TaZdJucQk11RLtOLUPGlaf3T71%2BPdfivWLCKD1gQHH7gg96WEoIZjc4G0mUA8kczhQP4IHNLdOfGPhd%2Biu2QMoUVwECb%2B3hadixb%2FTr55wRWojhlEYJLAvJaFJzF948Cn9C6hP2qkv%2BbHt%2FjLg%2BmMIEZm7bmvoF%2BBV2Y8hVgPPksLLBcYlWIbuMjJgIcqPSfFYadEfHtuBieTTEDCva30Byp4J0nsnaRb4XBKJVSxS1wU0Ggo8Cm5GbDrIHyEYQufpRznFTLM9pe8WhCEFSUCBdVfv%2Bm8iPge18UCAZdPVvutMEBC8zbC%2BwEouzAtxEmaFQfUaWEjXcWdBodbs%2FkH7v3MCA%2BZeTCnK%2BBaYkoZHX5W%2BzWDeHVWzWV%2FDGIlOjLYOdEzR2Jh5D5K3lL8J9TVizNWHEhKU%2FxOIF4IU0Hj4RTojf3GSzI8dHQjJ2oF7MJO3%2FMQGOqUBeubDACoeG1CqvdISNUGU1Z7CbfjCZadcKtmyouhEtDxW779kAz1sSZeswfZiUB29L5dCU5xsOL4o953CkzNxaSjwXhBREZqmk1YrzNrbwF%2BWm8K9zTWPqze02zgk0z4ASDoOwF7mnZRs8K5jrEMyo9AoKEDqIeFiahIwAagF6iyiOSr0fn1zEd258VPzt2PlgInK3IjUxrg01Ac2K4MhIp3%2FUhe%2F&X-Amz-Signature=0a356a6f31816535facb520c711a7bc0a85a907bcc0f52b8e750448dcf8cda5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
