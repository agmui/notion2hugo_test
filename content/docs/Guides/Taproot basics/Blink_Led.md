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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PB6YSFU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC8ikOUNrWByuctyJZn4eTq2xWDKEtd9R9sKCAQabFCdgIgQ3%2Fh5aCZAzDHu6CaziT7m5V9FBU6nRU9G2AauoXTJcMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDM5zyqAlEgst%2F%2BN5tCrcA7WXUNfznKl4N70DHa0b%2BWspQKYzgVFiuPOdXYGUPUbOMru3kOtfp61MfajLZM0eBgjpfpaQkaUkWligoASpKq42AW8ct%2FIcSXjTYgGc4PCpb3W3EpurHMGFMm0h2h%2FQZd1V0%2FYMk0FVbRF%2Bl8QQsQnjYMPaYVxKRtsR19eFYqdEftBQdxrK9nOf9EPdZ7rgQg9nQ9vixjTey%2Fh4VVI4XZvR%2F%2FB2yGmCNb7bJOJTw7JKwDNeQZn0a%2BCa09HI9Hf%2FfEwjwA0Eoc57X%2FevlxuebD7wsAjkDPD3OJWcBSqrXVme6lY%2BTsMv3kTdOA1MWGb2wmYcfHll%2FkzYz8p77V7Vjo4pc3mXmSfQJYB7fXMvPDHIlRLA7Ypj%2BEBgvF1evbU92mGErx8ZKUex4oiLtOYnQpjggehml7PCXDEWZSeRiS%2FsKJ2WzTv8lgZA46cl2tT7tEW4QPBNKzkp9tUIm54xOioisKj2l5WTpTmY4fqOiOlmzLOqkt4GZUfk8CXoLzo%2Fy8OkpgiErr2djAh0qT2kCL5pCua5y4%2F7esps1AdSilRWgtHHrw0%2FNS8n6Xapy8EDOhfQXf2SAUQjFgx7G0RKfHbLKV9XnXZS7XSLlpDvJMTWtsZO6X6OBA3Ri7LdMOrK%2B8QGOqUBfIwQiAZ8gznXd3664GhpfmaQjsI8DaFnJ8I0e3%2Bw0Kfvkmz8eEz1lfeNfxL8nxeZywM63tT7R37DQtklPKAJwj7s6LuinLDNRR7G4zBN56lsTealMDtoT7jyMoeJS9NzN7XQWlwKLu3vijsS7%2F6z27YSUmT343ugYTZJekoq08GMRa%2FDkceaauYVRwW%2F1EMzYp8X%2Bib7qNNDsnkHCyszb0LKKOLI&X-Amz-Signature=bd651a8862cdf93a0e25230435b53b7d9ea9b44f25350f6dcbfda2afea65b161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663XOO7JB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDdNfd%2Bt3nGBMtU4aYyrDyGse2PjRZwx1nF6BGh0rndWwIhAI0YCVhomQmJa1iEVw02JxmZIbbPETjWZO5o3UQgJsMTKv8DCFkQABoMNjM3NDIzMTgzODA1IgyaEK8C%2FxQZ6lWYsdMq3AMWJCkrsoyld9wedFesT9jOoy%2ByJLUOvhyT%2B65Hs8%2Bk52Q7RDcY75wOxWmKMEvIi%2FqtMRUCfX1F%2B9uc32kK1SfgvuQIvfZEbsKv0dIgkZx21NwydT1hOisU5I5UAPsJO3OvEF4qyN6n5N3ws43%2FLoBayNAmmY0RLh%2BABg62%2Bai4mUre0roAmfxkZO77tyleASEFZzcXzFP0n71B%2Bwh%2Fxc5EcF%2BP5fYKFwcafFZdemzjIAHfzmCqRlOhjHtNLpKTYvJbicPxNwFeqk%2FuzOm9qzcpPGMqMvHYOQ9biUEFeNx32NzFbn9%2BWS5RBJnsh16u7qrn1zZZQbp97jN%2FZ5CRWr2vLF9rChLAZEYqOSaqWUzTkf7KcXI8TzW6f73CUE6VoWjoD8CRng%2Bzs58z0wih0r%2B3rd4hIAmML9TAnroUI4IRtls1KJsZm31%2BD0N9m5rsOLzS%2Btj7Klo9tqXsxH7QF1oTH5xnPEoK2e5o%2BJ6rXNdUjeSZuKLL81kFFrAMT72tXlUfH87GYjWTOkvhgqosgfOZ%2Fa6c65E7fZNp85BUu651380kE1NOzR2JaLtumvq9YiGdsQkRxaEPmJtj%2BUPh4O%2BGAxRurEWYBso7%2F3gvWhEFqZq5Jln3aM7zB08o9jC%2ByvvEBjqkATVtw7pB4r5JpuhsBGPAgMa3A1WTWvwb76wK1n00G%2BAwlWHFegDvW92kE6%2B1ZzhEMAHJ%2B0shmLnSttAtZ5TKpCYIeG5dVr69Psq1ACCTaxGkcaE7ouD7dM%2BPeXjzzmMNjovIRjzvcl5dnCEuS%2BvjzH7OqH%2FUcb7i1RKWFGJQVTT2LpbBZdIKqqsP63%2FSXkFG0HGGzY6KLjlVVoe99XxLe2KXoOpt&X-Amz-Signature=f1355d3a5110532894b55ab83a5314eb8729782cbd044c735740b4b13fcde489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
