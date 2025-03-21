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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4DEWFEQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFd2VvoF8P1Mjk%2FQfXsznhErdRjyFSlugDjFYLf4%2Ft5yAiBz0QoxsCDI9cFTXR3%2BIcEioFvyI7%2Fz%2FVZgeQfY2VNvFyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ofoP1Fn8WUL15c2KtwDPakzxqL5qUvPqJVhLJvYgECb1f1nyQ3a8C%2Bb%2BLvRtEp%2F2naWoe1J%2Bt%2BvPWFC%2FQzGwIZgdUuWY7wi7Bfg%2Bz4ZdtlbNVVRHpyLKen%2Ba3yqS4in5IWvJx%2BLAl6f14oaw4TJGpj%2BvP9SHGe0g1fyCKU2BtO59%2F69JOJE0CjJOaaZIs9wytfhOCa5UwBwE0nqJ9GSZrIezwjRnLqpNw3pjVEOyO5V60VcPiQLK50J1sq5QZJ7cDk4r5TjLw2CPhdcDR8aeEmP8%2Bv8i5wSikZMjHg6Wdjtb0XnJWBTOzwYmzvbs4tUTDiGtlBTUAmkveqbtn385c8p7euBKRyVsCeno0JoKwju%2BXFEqbZ9QrsDfb8kr80iZ04HhEgd3%2FAFm5dQ1wfYL5taL9L8HgVmcw7uiM19%2FhVWXL60ih4W0VrzjVIT0yfKkV0u4MpT3ruFxzE7hMb39xQ%2FBJ2NNt%2BvuQ0J4UJBjlX4TALvGtHI0dS8S%2By2e6lzmM158B9zUci62nvnibyAOtnQySz6DvCyQxc9QZOt0JW5i2OdNMsFwO1b7SVme7qT19OTiYu8h%2Bs6hdbLELpKll%2F%2FlSUQF5fGDEqOgIu%2BvRrukOb480WsxHmCe7wePq%2FTUgeot6lrn4VPo8Ew9Nv1vgY6pgFhx%2F%2F9LEGYt8EdOnrtDUZBOjq%2BWny4RRaPTDWl2HfvCgnImsmGyv8Z01E%2F82xvNFRrhBEiAXX%2B75da01pFgykhNM%2Bj6ZA%2FJdYNRvr2HWYGjwuhHyCrf8xpg1YQa9gvNHFEA2kKG9LhGOU9AY4f4X4t21R56LhxWGBfxtEorgYRWV0oMypSkXSCAOM67QH%2FIU6nJHNfsSYrVhFaZ3FYC%2F5zfvgIhiE6&X-Amz-Signature=0642b81f6addcd882dc4275b73e2f83854e25a2f247273c7c86d924500d24898&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
