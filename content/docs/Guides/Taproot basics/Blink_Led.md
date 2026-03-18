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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPIY2FH%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIE40esOogemj3Qp46BBUBkbHeJmcxXj%2FG%2Fp0cqeN8RgxAiAUjybjALdtKrCZYkwRtLeVioLKHupD7KS5vX%2B3zcsEjSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGa%2F1cNRnbV0lvcTLKtwDzyUQpCghgf7jke24lR4B6dclMPJjpE01CN2zFdiHKGiPSGiB0F6kGnNiyQ03TPnbFvoSzJGafrm3Yfy1ILFZiM34Hhr8dE%2FdZ5LqXHMRiHdQYNtkecT7%2F9a26GTcQx0NTtztuBNDChRgrO7BXX4G3lROvsgpIoSECA3pynZFXvIkL74LhkSisz5Gwsdv8KmgtntzWv4vmKup5Pu0Z61p1UEU1gbSaOLaJ8m0mRHxbd0hN1JEGhIpBRGkh2Q1VbGwfA6DRG11C%2Byg7VI7mr7FUIFD5q8PA6CO2OfuJz7ivq0pH0hcOfaai8TVoJ3gVt5xOdViRynYlWwqpU1TfhnjRVeU2zCTdBkHPYnYucefyG5oWxWhpREo9cQbxh3Ez8ODqHPpoA2HPpvYyMO3UCHBjsOKWhustp0BHvPEaFqgcD10ZzJe7x53upSPi4iY2kQwhRER%2BD3KCrxAtokNi7AYiGoGpda9i9CziuQ6i9JC%2FWM4GBwgFGAOKn7ki1bNAwdi5BipvBpZ2o1XBIIpQ0e10h4AcT1nsxAtzfJDvIwZEFKBeHYmDgnt0K7I0ODl%2BIFCwp%2BC%2Fth55bb1lcQdnl1LlB6GEQCsj6gIMEYn7r6KpBDk1tWsbKDBIoQgWcMw0%2BrnzQY6pgEH636v0fOcJZ%2B%2FaW486jKuBbNz4gcBRsBz3XTyxTB%2Fa9EYmZGq0OkUtbaPoClL9KCnCmcy0iVfrtgEAxLnf97SLb3QiCkYcqD10gzPoZV22Z6Ltg7Bn7RpgYEbLSrnC3N6g3aY7fo5ooU96Pnvkmiz4r47rDAXDiaNwqqQV%2BF0iKF16PSqI6rMKoSXhQ7N8E9W18wIo3tO0x%2B98A%2F3%2BY5g%2BpqRhqk2&X-Amz-Signature=65ab63f6866be2a86198bde844e0f9e10b7097f0430d19ec2db0bc6a0f0fbe24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUWEQLW%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFPOGLnydQ3Q7%2BNk7ZXsNTTvD4VnLFz7LktyJHfqUuDjAiEA69NL9V1nwsx9QMrTJ5Dexf5U8uPtdLILhbaWOMnXrQMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWBTcnGZY2ego40sSrcAz7237CnfPaWsCnsmE9S6LNHEp2PtHh1lMWk4qcw4njfSyXh5SOMLmMInrUuO42aAFVfOtY153pEQqGy2jLVQ7fRPxC9AlUYwPuwdKtoEUkXSpnULNdfnFSScj52H%2B7E9318Yyjmyiy20wFRgbcrfk73mi%2BY7CWoHuWwxpHERt3bdpTXPu8mr6HZlGJdj4EX3TxVIqcHZGGeo9SmeUw%2B7VXAHu49reUeHz37iUg3To5jk91ZjHtMjFX8DW1JLhf%2BHujnFgMHgiOcQ5eLufncBdKxB%2B1wwiofIfF%2FEN5s7hPvFyiQiC30Kxt9gaa9He%2Bdef9rC1DhOZBp6hNos7XqTxvzqAEUEU9u2P0PgbG3Bu4clDDUWCMxh57zD6iz75NaOyIaIrhrXWa7%2BBtHI3gBHCihdnEV3RAaexYFXnBOc1UmnhqUkfN3b0wwOQKkA2HjDud%2FcPaAPyb2cRT2C%2B8ZNxK0qmRD%2FzOxn34t1m5SaeKKOoGZgVHKap4LYmqYzjZCnnwFI%2FKNbHaXL88nnRitXhaqbjIXvvJDVtmxdbsodDjy%2FhiI8%2FG4e0cpEluXUCIxRf3zznlC8ouqrNd48DvPHEFGpEnhUUblq7hY71TQ1Gyda7igwfwaZ5lPaKDbMPzo580GOqUBzKhVOPpqb4KaKVxUNuxkkRRw%2FmWbYATZCj%2Bc5kpFKXLBHuPMuq9FpCCU9oustBYgOjsuTO5TWwzuZU2YqVoOEf6roXXKl2%2Bw8tz8JrQzcL4oBcU0mgQkqHMA8K9lu9AH9amH0LDl7eixdpmaGdTovdHRXOpVrqdPmCtUvgTDyWBxGU9I0zUH%2BmEHfsbDl3R6z9S2IpjGrhMuumvBq12gdFjj7Y6K&X-Amz-Signature=903bf92cb042f01014f8ae8dc03af376dc212086e07409db8ec953c58e88daf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
