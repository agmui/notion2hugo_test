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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFVI4HE%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgdkHrVmyVg7jQScT68KHDmenczCe0v88cWXeM7Y5oUAiA3vvAdhnQt0jDOAsDL2dtAwQoNAUfb0amoWmbV%2B1eERSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkhBNK0h5XRU%2B%2FgEiKtwDWyvjxeGpIN5KVTcgWmrqzR%2BxnsaCaOuHQ76J1N1qlNx0v4DQeAC54j08VmuDwQEN7WKZgxXptu99o8VR9rQsi3S8Vk6whjKq2pqsZkgrf8nfYRNfMtzANY85LXfIpd6WAjWdKVJkTYf09cWoxyn2mmUvow9Hi8H1LAXJXTB7Jt1GF1eI8RvNE23H5yutZ0bONR81rgJZLSsgjPqKm7khkxR8sg2NZnu%2B00roAy%2FUnhVIz%2FcKrybZ8dgySvacUQ74r3jtqp39WBHW8G5%2Bz5z2pXqUWGoZzY9reHzrgUZonSkQDBYVc2RQ%2BbnpABBSWV342IG8UQH9yQql01mRjZE%2BGJVRytML1dus%2FuvkLSoqcDhkRpFggiF1ytWI5pmjj%2FtiNUSiQHegDmrW4lzgjC%2BSeh8giq%2BaK4IzCvutBYvWqkV%2BlxeG4KjH0KxhfskY0ZiJbrXxCn2hRoamges6vnqHPQOWIIs9xYYnD1zr0FpbexEfl5zopFFWWygHdsOpYg%2F1pmluq9DHeb3Q0ySM8K0RmZEXRHRNSy72xsFN8EU%2BfcGqzjcsHG8fhxEgXo5gtqYVk8U2%2FogvEJFLYIuitWiglMuzF0m8bngVXSONImxVHDUAdxgsjV4%2BWUBkqcUwv7vjvQY6pgFHtLVoOUHU1fHcUJKv8p%2F%2BKlv8eW%2BOGuAzFpkdo58AELlzsXwxIVsdna%2FNn1AY9WwocATrDK4NbaxZ4MvPiLpVKfHSnauA5i4nyfE%2FpXwiH8xODf4roN2loXer23zadIb0MrTuLQuPDxSm6z%2FwxPZqtwNrVhp3ujqv0V3rp9Hmqki3lgX0x6ULnEYfI19M5dvsS2%2FjjFaS19AOnB%2BptL03ZaUthmy1&X-Amz-Signature=c6ce95f8adfd02b6b0cf0dea61c8c9ed05b85bb0d3c85394975e968fba3c2804&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
