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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRT25VNR%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9yfDypvCTXE8XjYb2SUA%2BPNOKritXZRWGrU1AmSvZLAiBTglhDGn4rxu6wyArsAgHDNT7VUNqP4BlZv%2BwctE48qiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm3B7xgQmoQ4%2B7engKtwDCgeomTY4pHJJN91jxyNgv%2FDupxIm2M%2BbaSWrwyvODkm0pHGIHUChzRfL2jdeDCwcZLzbEs9zhOWze8%2FByOlJgk848LPJ2y8OBKBMwNg%2B5oNKVq6cSQQ6W1XlLj6bdFnsXr9mYkcmtzJf7sCzJHhZnyAWpwj7%2BGxjUzrbHeiwFdv5Ql8QGB%2FyynNQ57pfQki6rqZel1p2gfZRIeyCPsubkkWByk7vtAIDwg9YOw4dcia6Kd5D%2B1d1g37d0GvucpeVGAEO5bypCDmhz8gtJGv27ywIODks2qoFgoJf3thr%2Fg0NYvTcB8fbZ0IX9YvdNyel2yLHTZFWRZbM7itT5BSqc7orzBhBQtSTxStV6gYuOqCVQTOzich8C2jksQg%2BX4ucJhNHH3wudbxUBGM7lfoZATFXvTXl5sdLnozV4CHPTBrMwms%2F1Sf6ZJAzwEKsuH2I%2FWkyZyPF%2BHzfLiOfthtASissDS%2Bbb27Us8X7%2BOnWZWI2xRLdBS%2BTsA7QJEangW6LSgbFYQZ4%2FWMd7f8n2mH0nV0Nf8mEbeMqEhNyn5YbaH3Pe%2BrTUPVDpTdlxDOPeQAbL7Fy7ZAA0jXao%2F6%2FkomhxOCbve%2FD%2Fynr3N7ckvUPwCMZD2rTerPkMviAoPUw94%2BkvQY6pgFvIz3PcOnGPUlv4W%2BVUo%2FbhX7jXXc8A5FTWQ4cRfs%2FukhZXunltBIY5J3GkdsWOaeFPpoqByFOMH0jqzmYiQCoXX9KI6bfUdBeIfrsrBBI4qyDYs1jtLzUV4EN7xat2y5KWa%2BehhKFaN6rsxDdx8P8UHklpay1u0coQQ04kPOAKjXkvD69WMBjvAg70gsEpDxJ7D0Bo%2Bk7dGzy2GrqudFcCVRZ1qMV&X-Amz-Signature=3dc28eedf8f3b2215a327b47bad18ebec289cc5ed88a929eb1af37621a99c599&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZUIVHE%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBToyVX9GCGwT3z2r9VQObP4u%2BTUeq9mNvEU8iX2cBIVAiEAwXyyjPJq90EzcSnxkoSP%2BblBjfSNrJoAkMzkHtURCvcqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3rn1dNgdrj%2B8RbySrcAzonXCHwFCTCKAtucf29S3okwoDZpKnJcc0xa3PuUzbLU29hnq9Pfvr%2BsOImMpYTJJdm0yOdF474sKECC9UziiIbPc56BxwWLCAsvQ0AG7o07zFXWmVYw2o2ZepG6G3Uinul8l%2FGHJs%2BgrTp6vUAlqhHi3hwJsO%2BZLCNOODSyodiZgYeqjiieTkco9ZyVu2RnYhSRBuUbd8cqXg01cScgl9MG2KPWgeVuzqdcfUHQIBl0jTEHiFHwnm2bXVbGOVCmX8FWMt0ySQzodiAS1ppLoLr%2BGvSsziGcRHZyAZoV7NHM1DYWJT4zguqU0yHBWYAHPVcNaUSyxZ2LC6pEg6iKV%2F%2BjWrWAxMQV8ZuSeG2ay4XBIVsvWAoDDM87i2g5WfEMp8x71Lw1ns4Ox16wndl6h5Vj9qOC6fq%2Bn5JCd45XqFCDo0O7JE2JV4Dh60ZvmrVvBpoipgnWTEfFMdH394G%2Fs0sp6gita5qttKnooMCaYuCI4Yru1sTcyLPpirfsOkjMsc%2BNBKGWtRzi3n%2B%2B8Y%2FwOyRTIvdrqVFMNhBxb4rcWl3vuFvPJPnybCHcajzezSw2PibmqWTCcTB8FaQoF0a%2FdeIkXsY7qvSkzpv6QdceEdsEnsGQwq6RnHy3k8HMIKPpL0GOqUBdXeH9BIwkN%2BM1rjTiWdzVMV7EB0SruRsaAb0D0wzwGhyxcbk1KRtjIbgrHgvHYo%2BGj1qLEj0tNeUXFlhtcQHUieF8AefAs%2FfpEmxKCXflO6yuLdVYdSucfH4uynGok4IqRzVpHkjDLOarpTII6mjDi1ADJUUpGvGFH6G9gYsuadv1FcifravNy7Q9WQfQXYDl3nWHN0F1qaZSL8Tn2qDv9cfUvgL&X-Amz-Signature=1f959263bc634d41c7f8eed067509837d7daefee464003395ef485aa2b34eeb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
