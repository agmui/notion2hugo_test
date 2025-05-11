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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676U73F4O%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCICkL9RLltUwLAYZ1cXB0IME0wWuZaj2iyIi7cWfLOEd6AiBOORqYAHaK8Y0cTZZUHty99O6bOfoa1ODMzLkASMUMVCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvMvH9bEAJ8plow13KtwDoUeFFKyyt%2FruFhs2LFskXtOxvylpUFDN9mS%2FSFKD6fxMPHlesuTT9fh%2BTFRkaeWyUh4HwYJzcD6z1C61XdJj2cfXPRcC8omFtxwrUOPZ2v3rYRVDzVTtOW7Hgk2WaUdcWRmfOWuvNjg5ChM83pVgaE1k86Ksce4PNmGNoU5FnutmC7K9GkwIACuo5SH9dCYjLMvemttg3MIXcPhbN4vIVcMI8sdzq4LwV%2F%2Fx0Xd21AAKD8KCVqHZYXF9OANrVrfNjXabhHTKGHmJ1MJ6tAqZqm8SucXDfrro3Sjve3jfvwMGERom5LJ%2FIZl9kw1Z24yfWhhD1AVKiT9L459vgBmoI4mhh%2BfXkH6txgijEoC8nQm11FlyX90Nn55sQt%2Fvuu4DqCiK9sQqqjsTRbM2%2BaJKZ8QugLTtR%2BJKUunY3IExcKHS9B0Aky53cuF0pkWx5OyFOzVb8%2B513CEpivszPJVsYKLS0FJtsvkOpvL06RdXr9EteFmhMnWs3TjJZBhXb7iF9fs%2Fp2G78lJH3NZVd9nGZkbn13F6WHukH1rlhe09EHzdp33%2BzsT8V%2FnsM4vc5TcfRVC9ooEKH%2FoI%2BTvoYHOZr%2BPSssjaqp93Kil9V7MTqOU%2FxaQj0ErPz3BPR1Mw5eiBwQY6pgE6vnOYKJeVC3Wj7FzLFusTD1Rvc8i%2F48vPjMd6kzU%2BGptLZY7RBY%2F8H4VTP8JGBUKUIEYOZySUN78lXHKxaW0aDK9emgaMT%2FOfKMkr93pQ5j2uWcPdp%2BPTgTCMfJQctJKJt7SFCmn%2BG2gPWbLHT%2Fg%2BhnFEKm9FMkYJhUqrN4QkMZWTNtCob2P1C2jQKziIccWMvyxUgGliyrLWYtwwH27QzJihPsaT&X-Amz-Signature=f7d18361763cb1e1325c5326080059cd58cccbc927b313af438f8581fb5c305d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKHOGGIT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF8SNkq2o663l23LIILT0fwNfXxZTM8WEaB0nvPPi5WdAiBMCvt1EZpcDWQYmyjJWWvFsYjHVvZO2lvMZtF4OG25EyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbrGGSfzpUm6BUNEvKtwDCUH3XgPM2IWUit4ta%2BsA5Xni2lIZ7jRN5ZMX8tGNnZ3Mkss8P3tj76%2BP2JQtdtbA8irWmrTEYNK7v%2FrnBbT%2BlfuceadX4CCby%2FbFQI3nXPhRKXeXvxqfItTPr2nrg%2BEBNXPXcR7G7h5%2BlWeDpfQwONPKke7krpl8S8ThvEns6TxtBQ%2F58byG6eK8j5p%2FsotZBx3IgQpF9PTC4qN9nOGBqgTPCi1vWcPNgpQYhofXYQHtjR%2BwvFf0ufCqbc%2F3Rj3R5luJten%2B%2BK4fvo4DPIKT74XoF7Rc1FS0jn%2FTuWTmyMxFYTLYCZNJb53LuJcxf3Msi4zq9xpO5%2F7C9R%2BTbznxtbK4yVjuXMvFHB%2BKPU5%2FxKJq%2BV9fM1wkSe59vl%2B%2BGS5EWjWndFb7BLb59QMcpNJq1xycwm1fX89etPcbFT%2Fvbv4%2FxEeE%2B5UVioxyv%2FpfcglUZeU5qiRR6lx4FTIef0w9YU0cQeoUETesehRbn98eO4h3qgnitKoXgWb5zk%2FAa6tVdOUjNv842NCMzPE45RN7FfYRuNQ8LY05ydXt%2BBy7hz0LFopdvTQfdSTX8wDPuT7ybkDhZmyxxv3CeGMTMDURUYQK1iKy%2Fnwpn18MZxiagdgMEsOg9%2BkM%2FCU%2FNvQw78iBwQY6pgGG1TRSuZ%2BdbLcdMjsFb7U0nJgRf%2BeRHeq%2B%2BiWxP2bmF2tn58I93wcza4FkCLOceFoKsfmumZ8dDyksybDFkiYBCP1ECR7ntGfJVpmoLa5Hqq2YALbGrTIqac7vZ%2F5%2BRFqmdSOk7jR%2Fgh0ticZEkBGLBYD8oz7ytHpBKcagfHcA6dLNNrA%2B%2BAxu8EqMPDPLh6gBljwf5jwRAnSY9IlardL7ioL8CWsO&X-Amz-Signature=c442bc817c70c16e89ed0df8026224109596b747aedc6c76451c90702fa4d128&X-Amz-SignedHeaders=host&x-id=GetObject)

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
