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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HIKF765%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDd3rqx7TlYaLjbltzcvXOogwvwwrZp%2FapyXMNLNkAmvQIgDyzSdJ0QlY2AhtDyhy1cTODk%2F86kkx4nJhlxXWAnBnQqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQ4uip91fahtO9eFircA5PYw3ymKPb6rOhr2bSrp0WTo7mM3toBjCE2Om6iBz7E2gjq9ChUcBYWLmMl9wMQ885OKx8CpX%2BbRwweP1mq2ade7RrHvPn4qzh1gbvcpL0AGIR1k3IrQA46SGr3imPutMcBR%2FhH1mSIoF9aTHmGslhNZXPjd45gEh0HUHNaiLQYHMHawHYmqjLh3P9dzsR%2FAvxpVgWZVNw5EiNRxzwnoVhRv7mX7BSnYALGmenqt65%2FF9t0rlmnGzWN8QfAZ5x%2Foo9vKurp%2FT9TQlYY3jS6iWT32eHcpvcmeYyY7i9GAoIJuE1dLqIt1JI4FhpugDzROoIiXculpVmViYFRku%2FnqlRJHmyshNJOZFpP81ActvJ%2FsePRdELnefOERKhnpOYyGDVZdYjlkdPdr73ZFX40GqwIXzMePAxXQq3tgy6csDAzpHyKZvzdO2O1blDXXkB9yydfBFL%2B944Rn42Tk4p22v41kGu%2BKuCHRteV2QmFBRLydaEmpxCcfiG4BxPXSXXze8sGzKedaUYpqWkYxoF9zRYKE%2F1JNhJdHq1XpNTu8MG%2B8h%2F%2FVyqCJ0mbDQTEqdFkMiFLpHn5HBulj1Xte2GYNHNH3c%2FNpranEDto5%2FxFmdgakD6MF8dVYUkkMLC7MLuEhsEGOqUBOdPLm4FVhnNbZ0CwoL%2F3Q8jVHDKwGvJXs0q6PVgjU9EJknS3HgYqttxs19fo%2BBxpV6xI4Xlww7YFrYxl8kOkveMD9ExWwW7a%2F%2FCBqwJ8SWczGoTmKHqvn9wKFzErjmN%2FnL8d14aUKsg0tdRsRZfjerbi4GNouox955kRcZwNvbZqsDAZrzPPlkVirwAEdbHS7AXKpY84vxSGY4a849GvKrUd8Zw4&X-Amz-Signature=b09ffb10d038d37630cd02bcc38b0de2f763e39185f6194726e5881f2a91803c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKD6J7UZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEoVnyTnI3vKYd5JAbtd3R4Ct65g%2B%2F8iBWZi%2BfjkHJw5AiAj%2By%2BgKDetH7Tdu6IQoHlj%2BCvT6aOmbiGDQTK8Pi27JCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBK8ItudLnGJvDm8gKtwD%2FO5fWBGSK3mpEIOH4zdjneOdpgulMxmq8emZZG37oBCB%2Fb8dCXcTIeR1Tg18%2Bi092H4U95pae156HamHRSCwjXAY63R7GK4J2es%2Bs3cgnVYmNsRGSuQWss4IyzHGw2vnJqvxQr5P0WWlXpMU8PUxb1ha213b6UEO5Ef1PbSZFSkZ78hMv53KpNgd7whGaW56XWbEtLe4xnpYWF0J2eGNetHxzADOEGtuKAOWIW0dF8DHtiBii7Es7u1lzShb%2FISUsBIbBhVHa35ON7jUMgqLkdvdlmklX1Fh%2B5sr0iOPwYhtmGjLhGaUHy%2BFADJaoioPRRWIqzImYm6tynX%2Be8kBHh2jQXlYU5%2FrXQOR8%2FisZbt%2BxNBuSWMKJKv2Wa6NzOWngLogQ7mif15%2BN4Zk58bktQW7MR4Vf9EinZY%2FAYA97q3mrwXlQCaRUp6QjBMnjtw1%2F5R3wavbiMRKTsU1YINywZ%2BEN5XGTU7eV1OfJPsXpnMrwZSt%2BdKcc5bL%2BHFzZSa0x9p9abhAIdqhpo2H99y8IJ1d%2BZ%2BZQyg2mX%2F1u6G9vAf%2BGa2XBXFN5CYujCSYNbynai872t%2FjRh4y1%2FB6Vm9HKnfiLzhAKkTnMyyWQfxNde80EuiWQvsrfy%2FIUs4wlYSGwQY6pgF7OCrP04gqlKhIBOVNdg52FEM%2B7VADMtBydeKCCwy%2BM7gVUlGX6jMZFoBgML4t%2B7qY4rtRo4N1fUt1kMOuxwU1DKvkMMoGtNFDzqDuy9cnZIMTg66ETuiboFQbPIEcQ7BoKswNs1E1LX7cMsA%2Bq2udOP5jgWigHJe%2BySvIDyejKIS17ZgXSfru5FXzegOwvbXEaHWjfxENAMp%2FaKM2OkOa6mZCsO44&X-Amz-Signature=ad34433719feb13563fa6a5058575471b303140571d93e90033ad49ec98983df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
