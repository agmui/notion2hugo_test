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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAA4T6Y%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCc75zsh%2FEDPTlK%2Bj5fpJV%2BgQoBxnP2q%2B9JIysHdY9IugIhAMtXt07wOGDHL0nXoPxiPY0kkdgjV3LLmrnpZdiFG%2B2hKv8DCC0QABoMNjM3NDIzMTgzODA1IgwvBPElmpdav3oIecoq3AMMDTIKG3ttS2PM2CZevvwo3rlUu9G4OkK2ARLNTbiu1lXyhExDp%2F4TSlJkt8Nim%2BJP27XOMfgxsaFve2sOptATl3ZEOg29qTksqus7zfkxstqoADOa2g9Ovy2vP7RiVsCQ28P50D%2BjctUc%2BJX5P6%2FUDQaRuLjdE8thaHikNPAWRA37JuXBhnZ6DlZr%2F74agm0WL3SFtYr8ZjNhg857jovbX835YImMu9PhEt0UKzEdgCmnGTrsaNnnxLfPyq09081VkMAEpDauOpzMMSlHObMNh238Srh%2F9arbbs1gJWk1GkQwgGK7go83Z%2FySOtoP1sG8ytKp4lnUpcoX%2F9j9ZGN6eqIs79IV0YbiQ82oAWVejybEGasnlPll%2FCIT2d1EKjR%2BzYOM0nRP9p0PlY2oQnLatG0CwzeY2UKffgxnpb6NwO4YWminRjpiyJ%2BNVjFBBTLpglRw3YTW%2BayMhlRfzZytxboXCuUvxKQTWJK6WWnCM8KsdflOG35sB45%2B10pQ2GJsbpb42BsAJ1nln5N1JvpEk6HXCknaQW%2BhMj0ZTiJBJU0cTeOP4Io9T8f9QIWO21OPXcvg3KgKG27H0g4yJt2GavBeUGfIO9dyjfmI%2FumJRFvIDA6Xhu4vrEl60zDEoJfBBjqkAUhMngPA%2BkMN%2FltGxw2bw17KBP1BC7otluASVmBfkQw1gvYQ5EHOgmqXUrI4IZiNtmQCkhfglK4g7xxpwOI20I%2F9lhbGhOBj7dTxQ8H0TNzEofy%2F2GThqoHYpRVFgVCppnaf%2B7c607ZcOw9wTS9T%2F6i1anEEbq2btbD6if027PK5qSqnaucUomQKnXuEs4pdzfcx4D1hC1eRQV%2BFJVRwnI9ahlP5&X-Amz-Signature=f65190071a6da809f09002b75a5f05d1c7eadc50dc6255cc63085b53fbb661d8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHIJCD4%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIA50YldnnwkjUJgNDM9Ppu1jDp%2FBN4YunlVznns27LmWAiAVLgzBd%2FaFzD0%2BR%2ByvaTqAkft1iZFYiw8waZuBuGal6Cr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMTDDO6Cse78fPtB0qKtwDLIgugEi2w1ly3XX9M2TkmnpkRm%2Fpw5ctWj3f%2BsGUL6qOPda0XHbDjekj%2B2KLT2G3Gvj5ITWhOf9BVSlkcSI5XEKT4rlkxg5VKFh8aYbVk87uAeoHdQhgBawuhhQe16uSFjsmoSnZtsmKmnlA4uLOveY63Q%2B6Zca107QWt0ptwQu1z3tiGY3m%2FY6YoqR74r6AFoKclxqlt6vN6W5CiZWvrAw5rIFmVQJpbbE%2FcDaqNcHQPTwr8w19ZNgKzY1%2BgNnNt5XxltVoZgbO%2Fq33WqLDH7JOsrKi13Rm7oxRPdvlncDF7R6AWDoyFCbpsMxhOB8YiDU%2B28r%2B7t4QwX6w12xSL5FHbelFQTiR4ipvZ0BmoORzXrS8J51JEYDZb%2F4KoadtkrJPYAKmKu1otp68xxSfGobvjJToFceAyjelGmv6jp6HEMLIchJrwQsnpiV%2FBGZPivOhLt1f%2BD%2BcRvUwf2n7H0zE3Hu1VtktaP2dPF5a2s9vAV%2Bbbd7KDliUaWEQqKF6oavfhQnNZDNo%2FDOHNRYZ4hheFl2oBbL%2FoeHiiKDtT6pxs18Pj3HGAGIr8azUwYBkUrFT%2FM%2BwcSRMqSaGv85TiRX%2F5UgNbYI6aknEyWwW5DLLNm9xzH4XFA83GCgw1KCXwQY6pgF2GKp0B4JmUY0YX2FqUUoCX%2FO%2BaWqu3xyzASF2Fwh3U%2FxZlRLDog2FOPGOro106VkS30ORe6ex0OJoTrWxyLBw2NnGizxI%2FrqL5WsfkzhuypuBPCpjbxZ57F2BHnF%2FHvjGLO9dU7TLdVdayx%2BNumnVnVsX%2BtPNBr9as%2Ff0L%2B1N%2FJMyIOpe0nr8aY8HwFdizbT7kFr97fDi4%2B4oyFMzijZbEWd7UXZQ&X-Amz-Signature=46a780bea549798485dfdeebf036f453b1d2c4f582086a55678ccf2109c481f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
