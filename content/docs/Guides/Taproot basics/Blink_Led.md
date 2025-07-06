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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YFHX4Z5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIFJcOxA8c9kuVuToEc8EZSpICLumC6GXCzn5%2Fh0lndZuAiBYCxrcdXlrjJPUwZGfD45zhdZzJ30CflHRQbuvBOzFfCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMVarLqW9%2B9bm3vwcKKtwDt3%2FPuC9crNLz3ia%2BSTXfQvgVt6ybYqZ6DoQOlvCZkOzoFe1XKvcpmcT3ejaRepibmhIrot1LtBPp8ClPdTMxyH7rjIp6h9eIE1U2VdKuy3V43gBs91OdvQ%2F73LiekM%2FugX9iTV%2FjJWPnroUnRtLTUffaiEfiyQ0Ojyt2klsffdKJ0KegHVYSR%2FRGzZKJ211%2BfWQ9I%2BUnI7DQXsq0mqIr3SNEcOuyqBAEEZh86pMcj2pjevW1zHTJe5W%2FNrt%2BAoGOKUOXpIS3%2FeS%2BEXQl3NphlVZZCmDqZWkBPEkrtxpvgZB1kJVcNjBXBn4kbK2gzCpEDqmxj2yKHiZGGLA4WS02RBA8Xkugl4C9N2w3FdWyrJB6klJoEiBFsolMlscB7GJrkHtkS1lSwqSmfh3UP21jM9tsr6%2FbkZeg6fFTUKabMhRS4fMbczIhBHHAT7seiSaUXSRwtSWs7COa8eaTSGdfX14cFIHhLsdp6sST5HaTpUUTm9TvjyzkpxQjuChDSpjflMUgItBjKXUX4HyevHtTvPUSxXZQwI1Y1b6TXe5fTfyoSeNpkMkefg8xzI7b6YG14I1TXfSN2DGgR98AF43BuoHDSqnt0VAXwjy8Kd8NeQNNV0NFUBDOcLOK1tgwvfyqwwY6pgE4yLZUyE6Zz%2FhwKxWIGOy19%2F3VNkCa4TxMYtzjNZlSnw4Z2pWBWovauxF2%2FNVMIV%2FYCR7tsfZjBLyvcpqgNCcKolQiGa3nrFVUFd8IQpkIuDt%2B8ZvdwYuSmyf07rjn5BUYTy9wkVcqQ1LZfkISt5QjfoNHk6ArsrAZG2gtFC%2BQtM9ubEMkeb1U1ZorZ6YsxQ5o2WHP%2FNqlAidKeSfvd0j6pOccZWqa&X-Amz-Signature=ea3d066579a11a6e37f62b5d7f9a4ab80f8820874d9d943815f8671a431ad712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7JM3LS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDWD0r%2FYz7dgVb2FNuMvMtfbu2Nz6za6QOk4Bwcf8plWwIhAL3MQiIcwUxnSImYbTiLn0rdD0G2Ecwc2r5kczbsHJsUKv8DCGIQABoMNjM3NDIzMTgzODA1IgxenOfu%2FpawUaSbUAIq3AM1ftX%2B5s1TV%2BzRtQ3Fq1mrthVwZe6sXjyt1btmLT78EeoMWYhej1jc1KbEhpfD%2F8ZZlCQclRR2f4N6z8RrTRdq%2By0R490C44YN4yxVPzDeOhnNJYV%2FngW%2FTQNu03svF1w5xNiGi2MC4fYc1lHOyMftbbxtGVV4cq%2FjzBwU%2FMvqCkK0EfI1X8eAresHtGSIkaQeh5ggMMCD1md5KAo%2B084AtIt1GDepWRNNExJcqiXN5anemEQhFkUodhmHWoAGLEhnoLZ1%2FzpXikjIElvh%2BwCUQHM%2FF1d0C9Di1M6uZd44HRWfUpci3kd2CSR0QFxSeinixUKEP4bY9QGZrg0b3SLZtiWeNoJh%2B7XGIeLC75ZG1m0XsA1yG5uFDoF0jRITj3kr7OUXcV20tlHxPFe%2FXrFL%2FHmW3dVO%2FIQG%2BOd22gLsAytmRFaPMubK4DM7Y4VXt34X%2FjYPD%2FNwkWDLUx83YG6xNLPUUOWbCbiIl%2FOQ2lHHxurkaRGcL4jHc0H1ABw1CRDUUabvq1z602n0iSsyFr9qBaW7vHkfvV5jI9JiNB7gzEZGG7KbEXpbvL8XA0KMqQmgKqu%2BbFVs3YWbTp%2B65Pg%2BGoxoSzdOxEI5ZoShc2DGX5bnbzQYCILHYlUZDzCY3qrDBjqkAacaJMTSfTqhRhW7Kmayv6UAxERUbQcv8m%2FWNGVP49OEfQcOgkEf7oa0ZXmofWqe%2BiqWlVffA5fSdiCC%2BC1mTD%2FWrs7RzXRADsLNYHik8WXcUze7xDB1G%2BIXcXlFDLQ4ulNMQV1IemAMj%2BLA5jeh0%2FrhmPWi8Z0mCrFRTQ%2Fcjmzl8YFc0dL%2FKQnhGm%2B%2Bp3z4f3dypwslqw4SUgAD1M0oK7wB1v%2B8&X-Amz-Signature=10317e6f5189565bd18fc7da7509a26dc8272a66338ee78ced83b074d121b3db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
