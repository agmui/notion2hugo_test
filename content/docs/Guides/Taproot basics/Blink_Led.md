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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS62ZD7N%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCMbKkqUPH%2BS2xkvV69yFB66YqHJMNOLbc4h%2F686gyRgQIgNQxCd7MRagbMiYQIvJjHeZHiNBub2yFMB1wsk1RZTMIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDHEUQYc0LvlKwAnkASrcA4%2BHCFjvnB%2BskXSmyL0v9upw1z73SZxn5jHli%2B4woj6F18F9SFFMGtS7h0tZQndAVc937dlc6olnSuGtIEEDKrz5tQ41C6e5ldIW2db5wRp3t52%2BJfYNZz7kNQLLdmtFmEvUH9TNzTrIqFlwzuTWTjQVa1XJPwqkMbsL9E82a38PvjnH3Zbk8zxZrY94P%2F%2BcCYxnnzXkjeLd0NQdEthXykeOJRU2HsqNYnmMj20bLO%2FxLuJwskhYcOrNYACh5vPtEaqPuSD%2F%2FQ%2BsbtJbzpbzHIeZYpNobzyJMLT3gsDH2ppDheAiY7kx%2BjUJsqlgmgEy5UFJgydpnhGmfasb36BDvIxiU4cJHZzLWgG3kxzmwO07j%2F0R72u3%2FVaU6bQGxJfGNNt7DDo%2FxWw%2FIBu5YF1Gc7dTj0GF8cw8HCH6akXi%2F8w%2BQWgUVR1RWMB3f7EmEjmKsEDR3Nxzwe4RNX7dBPkOxuInq5Jg7YqSaVfIWFRGbTBjflnvGWVHYehVIqtL%2BnAaI7LdWCKfa6JrQ9pBYTXefoYBfHCIPcgCd1Nx%2FI%2BIp01goRQSl96xzCosK%2Famvid7U2bBF3422TNMMb7ojvwq9GUeTKqwNJf1eqQu2IVPcL2cu6vmGH4pAIKgl2WBMJHfnL8GOqUB6SkWaJsgym0seNjr%2FFy1o0r7C6nj1lCESIOgvGIitUgt6Ygr1OzqNFoNftTGRSWD4jrvZ1xGEFKjce%2BPe4bF1CTq5L6GJ6wmalMQeQOEhoiu9g%2BJ4knjnMfM7yPi5p6n4EmPP16jTFwYk5ugD6FW5pZ2ptf%2BpiKVRvbNj9zaw6oLyP%2BRcbFvjzaEPHPoc7vEptPDmNwXZlIbX9XDcWLfn2SKH7ED&X-Amz-Signature=1f74aa9ad976d6cf936d04ce0738b0cd09995392eea216dd80ce6e3c1c205192&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673O7EZCQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCLS%2Bdhnv11%2Bucm%2FaGHG2OOmhYLckHMIbK8MIbjg8ETjQIgb1wbtviDg5aRfP0LAmJPVCKJI363tda5b4rROkO5AMwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDG9BBihu9F%2FGT52wFSrcAyAf%2FjltveArn2JmD1w5iDwvW6K1FMjdNBddK89CheN7mGfkMtf4tt0iRo7ZD25WZTj9g6PmZ%2F%2FbJceRG%2BNDW1bbBC%2Bco641S1B4lUQn0IZQrHekZ9bR8c8L%2F8jomaDrVQxHXDv3LY1W5Pzku3o1MUkR3bgnpfSWcmWARuegxb3r7Fy7RmxUUPqH0gqsTQXPTIbMpTRVr2CSglb7sADWH69OIhlqKxMhDTUNa0JWxBTI4joH51%2FyQUWMHuu3c4eZ7pfM0YkAKH08ugAquHqoYlcSoETxbJzYlxeP8kyuZ80vdBEN4x0mwbHW7bqytSkknedRM2Fn6XVdR1%2BByr72xFj1bhw76x9hGNHWCbutzJlh2f3zfZUNrSfi6nW3mc8ao2wJG0IDaMrFPZ%2FMLUiOjU6amFiZrPYo5RrbkACN8D8ouRO%2F73NdOAXV%2BHJmZYRj5rfyC008uxzjCilR42ZtTGSlrLkDTGZ5Cu4xrDkrqCy9FkYdCkD9qpIEWD9ygM23QIGx6Rim1FnJY2zj5PIdKCjwxhKlut3qzvHmMm4uGrqX8AyJsw%2BETWT20iwb1ukl2svQf24GXRqm6hclBzLrk22Lc9SeKsf9EuEARarLvgAKPQEN02d1fWPVEHEkMMzfnL8GOqUB1pCRh8O27poC17Mo4%2FwRSFyKZWl%2BmyPp9du5JW22mv5i6gWWNh4RUoabUsSY%2BlERB4HYf2Ssf3XYYrvZuFucjTl0Oh6k7qjIOZxirtRNVr2gh8wveRIBx9zdSSXQw%2F01g3ZZwE3bpnOhmh%2B1k3uH2wpxaiHQ%2FaVOejnAbr02Mr3LchRixo5mjivLT%2Bd6pbf3FmoYLoEEE04%2BImk57lBcKyMNsmeZ&X-Amz-Signature=aa29a5c89be83ef7ce5c7cb076eea06c90ece619ab5fe1c47de4d92a334a1339&X-Amz-SignedHeaders=host&x-id=GetObject)

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
