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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK3MILQF%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFFCmSD3ftM0IoS5jbqREwf2W2UoHlEe4MhSk6NrIy4bAiBkgz8q6hS2gxRxUukwffvB%2F5lg09YXWX0PeiFHICBBkCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRLSUw3VmJsKTaDntKtwDRAbaFhlMY91lCqbPnAJ1ScLR1NgwqyYmzpYkYon9rRhEDnrBcbZcEQruKjp9aV5eQV34vKGizS1HEOwLI4%2BeTCk%2FvZecFEDbIIVMatRy3w6mB%2FpAqtPrbMQugo%2BdrTDYZjvVPTzjpKAP973CrF%2Fpl9oMggaI26enys%2BSreOx64k6NUYQrMRVbuMyiJxBU7wwSEaw46UcteqtJOsJJton0wF%2F1VS1daIfEo4TQRms7tlCZDHfnTRkeTF2iVWc8iwJ0Aj9jY%2FLoof24TclPX6lx6hBrZFdhlfpHEMDmEHGGJiNYyZdi6IcTePJKISBeMDrTmrkJAdst2jvjdgPXrVnMh5VIqMJwBU1y5%2Fr3RdXo6dboJDpq0EihB0iwKhRHUulYc2X0kvFLYq0DOF43OakUoUH1Qea5ZFg2KaAsdXcOr3g53k3rOyvCBPKtjfpw0cAc43iWcH5cdg6Lb0qGHrVjFy%2BPzmIenmaZOHW7PdRk7mbUg9%2FtGwFIjkcn%2BFtnlC%2FSzekSNRb2Od5QYI6O7OK1x8xP7wYERAfmkqUfoJmFVdBsVKbIeigCM2h1I4fLQ8BvkFa1CpLokNoInU4%2B0RXW8AzoDbJaaQYP%2B4jpkuAO%2BZ2PvNgVMIKl1mLysIw7NHCvgY6pgEFYSSkqHFFwS%2FI9EVwJoZP2LwMpWD6Ji4vtdRLAL3g0O9YDpnrkw3BMXO%2BPFJ8mCzuEi1q2OoBBhRx7f2wGcJJfCSG%2Bvv1wcRqgSOf8%2F0iffPCagGFi643yn9WcYSvMFG3XwXif3446LLq%2FoIZOsRUMh1vEKqrxry6mToFIHesopYS7mSUBCI1uhsoryPNldC7dccK2ULhVuhcua2fryV8%2BCmJSSbQ&X-Amz-Signature=67700c6e93bba3d7117a0fc09a535b7d6837fe8e9b0f855e15c38f3654f91942&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEPGV6MN%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGoMz%2FBwQDHhn9OYXRRO8IJUbk5Of8slgjYB1HbliA6hAiA9AdGm3UPbPItgbs73hScGplSN2qoCSZTsl6P3DC4JxiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpjwmBNcojyzxmhZLKtwDePeKZyr%2BTtsdyevTzgMj%2Bz6XkhKxEk9URgKcKqeiLBjAbMCNZVoLCESOEgr4heRKSL8S5oosGvbh6aSwHAqRBh2oaik7zQq0TEYZFK5bSlgf%2B8h6V7yOhRmRr36xA0ZpVD4aIShuBCAcGTXy7LswmSnQiyxJ5yPV0%2BadPVcAZ1oKRJnDShv2eKxhjvKbuV7CvFtV%2BOqT3bUXv30EdK%2BeVfAjXGAtfiVjQqt%2BJAmp3KD1w7Blx4Rsu9zK7ZlChgWxkjpuTfuOoKHXp41Roccx8J7Il0mdkRPZjIv%2B8Wy6SHeZ22T9sqqqh76foRpUoRmgPpiWEJNqGkq9%2FekOs8jLbZYIAyIC3%2Fg7cpi7Krw2Y0%2B98dqcVq14cb00a8n7UHADizJ3UrfVYcZqmtK5eEWMyXUrRLQfD1oeTxWDq3MoTBhjPMlr9rKN%2BSh7wAhOKIZoXaEyvzsigkFPF%2BbXN37mGTa4u4sSeJ5uVVNy%2Bt2gbGDJbswyXBA1Vhm%2FETY5ZXs1qRAUhlwOSnL22K23HmRbjiq589gZ%2F9n3ImoHxG2XZ%2Bg7%2Fsn8hayoHSHbIHmqiPIvZOjAABRmRXO2ynwsWBAoSVbNbOcHRcsuditOWg46cwXGV6lvfRhIyyLzuDow69HCvgY6pgFVMCu1hXRBctQxyHL1CRJHTvWEpe98ofLdz4NvHPupspI2D2xF8%2FiKDT53Qx5IEQcv3Jf6ovrpw8OKbrPBt1tB9hgOf9tQv9mzHlbnDA1RPcJT60wHYjIXui3Rsmasl9sOTBF8Awtjm8B4t4JCjKkQSBks4q%2FK8R1zMkhpDnpeXALXIhViBmo4gyDOcgX43SQ0KSlLVaEKv%2BpCczqXQDMzc4Z%2F33uY&X-Amz-Signature=c00f98819627e139d145a36e7c95582261165530e492cb9979937dcf5b5c4a46&X-Amz-SignedHeaders=host&x-id=GetObject)

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
