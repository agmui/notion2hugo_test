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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OJ3QM2B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxDD2iOwRO9qAnP7IaZjG1y3xqOSGawfZ9cFfybgph9AIhALO30WPVcIb1QQoI9CIq6r7hRdrHNGAtuwqoW8XzzmNAKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB0Kq9jDbWKKdHv4oq3AOysL6ATm8QsW8JuEwbKbVfVTui7fJTF6ltRfLudJ%2FtxD83m4uj2PaXop64hreJzjDyAlkyWCmFWQ9XRndI%2B4fzb3rizAItpgzAJw5IjmPr5SWalELz%2B6X1BKxAnpSwxE%2FdZcrJ%2Bk4hEVzpH76QsIgevm8a%2FfyFTdJeQrcsKPAJiRH24AKvLV0q5jNsFYouLtCnVMTGeozyV466w%2Fje6gySQX30Tv6949%2FgDLNSWQ2ci5zlI7L7Wvs%2BG8siIXyk8EkT%2FU0oe9yCOM%2B2lu%2FwZupoLZ6XhLfhSTMFGtA4l1nQz1Ia8NAr3Jg%2F5%2F34J4GpthNLjt5mB9nWajC7op1afwO3ENn5M4oAYZn7Ob%2BEfGyW%2Bqw9DamqXJQuXCw32JdO00P6TkN8Lkh7FFFj2uXm9Q3GvnHrR8DsNb3NcjVGObNgRClWiN4dYx7m6m%2BoanYiWhAnDhaWFME1D%2BrGx20cfKLbUiYd0YXbE64euhu7O7kzQZRGO%2BFlE1ZaxhY7Qz1GwLgsNOoFfnBuH3sQJBCrv71hKQCy99cjK71o768Z9bxSNXROmtQZOwi34M7IeNu%2FH%2FkXgJ6kXxuLhZ6RUknDsud5d%2BQQQx1ZXc6Z8slbkg10D%2F0Zu07fIn0ZPKWShTDb0eDEBjqkAaGlddMOUd66Mqr6jnzpAIKqrESXSWyknX7HbbHEkTPbIlucIYoMLUoNX37ghZLtFpJlYYDfQgvqHbx7URWtC3lE3%2FslLx4N6vU9W8NV2jtJuKp28zDpvP9AZkdQTWGUqAu7%2FMT3MEWMGql1msjsY8%2BQq1jJTfkvFEg6%2F%2Bj2XjG4Aa2nm9RDmG1duxlZqut2qX02%2BLXjkZLiRNY95DKorev49fkw&X-Amz-Signature=9a60ae5fd75bea5f395906049cb0555d4b7cac235f8e22d2d84f72e268493032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S6I4HSK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHEOCinNtAKI%2FXe77EtdVZv5m8C60bk11STPgUvipBxAiEAxnzLnjg1A%2BLYJ3zozZ1ULH3LGod2oDA8V7Ts7JRCwVEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJxOEYLyJ7jur%2FLpyrcAyjzroDSf92jIIAinLhOMq4WJK%2Fo02oWLpNbj8YsFU4eiHsRU9F36Sz61vn6h1a8xtvUgdAS2%2B6OC7mTj230jaU%2Btf1aJmmpijxYWKyKpE6lolfwrFHHozh1XlkqbZH7KnBLQKJSzTlQzIoIxAcK3MneOXGwEYJUUENQizDejM7zuFDQ4Fg05JscgVVseH9T%2FGMfYkf7gWds%2BBo09SaGqoHNDNEJ9Y5CwFWhQ6bfMsvFeey%2BWAMNAEJEhcZlyVrFCn0ck6T4jaHKmPdtCPw0mJtV8aTbK1AeRd%2B4Z34JcbB1kE9KdCiKkerGbmZ2YtuLb7%2BBvQYF4FmVBThRR9dRnfh5yL2qViYzAtlPVT4ZXrnxkECvyWa0tdlBES1mdGw%2FnXq9cKNLk0pAQt8h6Esi2Ebp2ILTpwqTPpmZtRkCbkqN9OUHllH%2F%2BL6WuAFq%2BSQz5hfsCyRE5NLBGP9qp26xulX%2BgPkiloUIadQ4b%2FMPFp7pd6n%2BfWlRTTJImd47i7JTmlXGt%2FxmWFq9vXto%2FWBLWVil3Nm%2B2xEXo%2BxhPWlLU08jUJZVcydXtmnVHhly4ItsOiUrmrJn%2F4SRln%2BiDSwIp5vU29slrJDtFzum8cmwrDxJWzzr9ToRSe7LFhW6MKPR4MQGOqUBtAKL%2B6hlqzC75yDPXB5lRacILKBO3DGkNDllkVjFjk0qMzNsJlv04SLf36qFVphYgvtz1qzE4eFpqdszPHdzhCW7%2FCSP1heMtiCJEtjrjwJE0MJ6wxxD4wDYnkB1HKMV%2F8vDt%2FCjijYPgJkTDeIkx8FLdHDkNrAPv7m4CiNYV0fGhy5LUSio9%2FIOtfSEiAP2iHL5dfuijlhPHPaM9nw6ANCI%2BYP6&X-Amz-Signature=82d7a294a34a0802897ace430a01eaf31f4f08481e0244a405455e2b83d9b3db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
