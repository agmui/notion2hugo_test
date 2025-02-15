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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCBIB7BQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBDNizYdmr8gnqc6N2atz49zePeFmE9iQ5csclfq2lCoAiEA5bOaY%2FxWyi1lcqAFOVpR6QLHj0zkH83EzIagc5cs21Qq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDL0AtjJW%2FtlF%2F5tyJCrcAyn8BhKnisBaswZJ5xNhUnBQMl7lAgtUw620RfFcf8VMfnrjp%2Blta5mpMc5y1Q3yAmf3ClzUWzoEJwjB0KWdDp%2FwjK0IUrsAG%2BFX%2F7G%2FZd5eyDb3mSgd4CwB%2FYsPK%2BrgKXWYnyT1qFK5wmLFzIAG%2FzS8fwZ9zn0xEAJ7xRxKfysS2MQEkTygyOWswJKnYjVunwDBehRRyc0p4bDg%2FT%2B4lZuA%2FGPvbaj4POwIjPhBXmqHtsdqmPWMJnrGUFgsofEh6KsbtHamPFLOFiq52%2BgXtQv0QJWrCz8x5Gra6Hnn8eVAjQ3cBvKV92p677pv8n1vtQ%2B0I7MM5nPQMK5N%2Bo6lec4LfOR45WsNG0Gw5%2FQthCeue%2BNmPTBfa17Tj88Nes4p5sXwED8Knu8Si4eXtdfrCkcMUgG9QUkjE6Jk1KP7w9kc3iwAsFSXkX%2FL5xEB4ZXpBjR2FCde7MVKrKXK4XlPAwoBbDlp4zFLLB009no8srxEkiH6ApbHmf3%2BqeMfPToHgg57%2BN96J9yuqTqjmDrMmWHlxyPHeyusXPT5qiATchsaUrmL%2FBEfaOF4J824pyO8FP%2BgTzntXc1Wwfduwz53JS7t4wHjyClUdoNKxTUD4%2FWSJCLbzlh12OIA4qxQMLrGwr0GOqUB7SvRDFOM4m26wLshLBoyszyHxKuxbJhmyQaISr5dwvZ9EvimpAUTy8PN7dRpYHXiUU5a7GTNdRMRWvBh6csac7rParSCc9YLCTfwzlzCa5k5jwlJNCAn5CzalwV9rNUulp%2BgUjvFs88l6n%2BZZvlx%2FZ%2B%2BwxE0SHsTMykaC9t2uvrPNfeYrZb0uVLu84sNdsdgzlmzYuUIgooiKrS2NZdB79J0tmfF&X-Amz-Signature=c03cbc3370e4076e3255d4303a5c8c43aa0c6865de5297a6a3e23dea8a1c9dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655JAFRY%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDFbyOkI1mXDE1sVV1cNu38olxfTsU2IJlZLY%2FiJ3KKygIhAPTSCvX%2FQEmBfwnCOS%2FJn%2BT%2F4EJV%2FUGTdtryNulVpb9AKv8DCEcQABoMNjM3NDIzMTgzODA1IgyfkVe4MnwWuW8bErwq3AONxFTcvlOoNWWpE%2Fu98WzQXiIkf2Ek7szkiE2Q0A5iRHkrxOCr5bgbjvEL4gb48BPXuA5SJnuHqiRWuBpve0N9mbMZ2Uk1h1kXsYOdVI5hupxMb3Ki7lscL0J53Rz4jfYfvBwH2aT%2Fxidjv7pHXn50H2sHLg7x945zHfkNz1e4mZ2%2BpyyptXGxe22Tm0xdhOHhjmqapo%2BbwhbxSMFHEEGt5oNWKP2NF39ce%2Bw0drmD1iOiPlPSyUAbwYJuWawOG4AbIMVw%2BzusD2ZuGjjVO5o80LJ16%2FOQh8MxBwn0U4dXUc9E4ty%2Be8y71wD9UVYbNSGs76Cd%2Brpx6QkGXnB%2FkvkffpNfrmVTLNNHP738jOV%2FH%2FatwlX2Cyv5VUj95%2B9DoBGRbPk0Odj5YQDG5YUS11jDdQsDrkspD6y63w3S54Ijvtgq%2FiInaQZuHXY0IpeAOh6tQW7Qiz3DSqOlXtB36W07e42usbMC5INztbEgZsX0uEDpXJl33QC%2FgdmQk%2BrAfTv5EEcoe3jv5dAmsrxqDQCsfiYfbqKvZXQ3h88%2FzPyeNDeiwe7pRo%2BcYSTjcRohIXRynlioYmdXL5TqkcxSa87TV7LlOdnmECCALw0BGW%2FS1Ro%2B1mu1Tee%2Bn2JjxDCyxsK9BjqkAaXjIIJzKNNvk6hFB6VOIfTJ9if8LIJuO3h1LNLf0zcJDnaKKxeC6sj4nDlnxe%2FYTWOe0kOkroqiavH2SHjoF3JsDM9QelJIAF7r3L2%2FQz%2FjSqlMpKF4TPcUkRWU9TJrYMICywD%2BHvgRbJo4si1zphdhPWwTJAm2FcN59GJkUk7m66UCOYZOUaDhLWLaYo4dKkYhB6KpTy7ZNOGSjPV%2F9fTGGp1m&X-Amz-Signature=df1eb8077523a707539d37257eb86f6dd8329ae32ed2ad1322b51f1c03dad1f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
