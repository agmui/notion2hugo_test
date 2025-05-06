---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUAOMFT%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbqeU%2F73FeqcDJpXv8XGxNwjlbcYCyvw8sVzj8qeQrNAiAuMPFKfJb431%2Bhl3wvTXrYcvdgLzQoLyClz%2F17khyTair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMwau8G1h4klQK42cIKtwDuYJYv4kFwg3rG9CyQhhDzh3ouW%2BuUd1M1uSztWP8N9T20exAK%2F7I5tfNnFr95qgQOV9JD2%2B4nFioPdIjF6%2ByVO3LqAAvUrmp6gordtPWqKBt%2F5k4DKR5fQ1D3VcW6a%2FbUSTAzKRHZ9H0d98xjLYI%2BAHwY4r0%2FP63Kx2uHz8q7RzMAr33lCC0jmNcz2Q5C0g%2BWZhJCagL%2BCMKLMgyERTdIaYZDDLqF7bR7vvPa2R0%2B5k0LXcxQ%2BIFZmR8V7qzL0AP0nllnC7iOSaMpwMFf%2F%2FLexHiiJ%2BokBIJCxX%2BMG4et0rIPZvmbU7ZQEKrqEIcmnDQgiybXluBgmrVltAy3JYEBXMHdjsL7gAPxRf6O6oQWgXYXaa0xT1%2Bb4PJzm3tfzwJpB18JjRKkHjhkvDYhEJ6lqE5VItDS4%2FW3%2BgBT%2FQXPUuoMc86kVkKicxnna5vLJs6kafgfz5LZ0gPXNaj2amD1NwK0%2FbZl3L1Sip9E1slwf93Bt2R1yGjTviko6WSS8l08QEkX1D4gkOCnmwJdGCyIWg1tzy%2FC%2FhZNKb3uDBgz%2F7TSKJWJgyD3gWW0CCTaVGTs0oa3oUUw6vLv4TfL80j1ekdDuQFpaoBGFWmQ9RRYLDyxFnibNwm72cs01kw2rPpwAY6pgERa4b4pV4%2BqcHrK0qvE8ewxpOHImVbI33i5U5pjJ07yK%2BtgdE5QYGG8%2Bxq68Y6aVQKPQRRaT6iNaSL75u6JlMmsKZ9FospjXK26XQ8GPOD2yWp1QlVA105so8B501ksJUDan84qUxqdEULSjs0z6RLZqhaq9BAs%2BlcfsrfIZo0FTY8eyLHxYWpaRK05ietM%2Fkg5SayCUCegHZwK5%2BK%2FKA%2FYfePKHyw&X-Amz-Signature=5acf21086f8fa4cfde712ca95cedb0fef3a2c8b35bbc9472b13e7cb0221b194d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
