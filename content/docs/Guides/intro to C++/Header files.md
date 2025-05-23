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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SELBRWRF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCgNLe4vyhSOxKulb0SUvjDZNyU8DW%2Bw00nXrKCtI18FAIgB7Jybh%2BpkxM2WjpT3Uwc8nXUD%2FqXWPTgt54gPG6Tf9IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZhqnC6TbvzorZKISrcA1bbsr0RXdjtF0eaQb4ruhg%2BZIUHHVcSxGJ6vxw0A2rIx7OacysE2TDY2uk0WSk246OYDK7Qt2tSuMfXVs0SVsBZjTWiYGlZeWDipQ7QzafZuv1%2B3TFhsCOQuVRak0gGUo2xFsutPoA6UFmN6uaktgn9mmypX8zUduLhBb1T02fewH%2BWMH0d4H2TxNCWJ3ZTbOWkChHQe%2F0Pj7VsfCjmoinQ%2BxwwaqXu3J1Z%2Bcg4VhH0DtYgW8lisV2V3MRoIZLRfMsZSUpM6MjzIvrZymm5jg%2BiPrAch3W5Je6OFAk%2BM1HFXvt287yXNTbt0J%2Bt3plntcopDWxE9pg%2BkiCtUrkhZsGStj1%2Fn0TvMuiFpumyx3SEZRE0StNk4HO5cMypMk9nP0OfH9aRXh5I1nX34HnpUoV3hP%2Fs7X%2BlqaFzjAygY9eQhFhwkV%2F5HxyLlSiOJA2GDMkfp9tK5vs6jZi605LUqXJ1UoSEpAAOcVNSWab97LInV4jGPR%2Bkf2Y8wllPykVPHlQxCmOF66sIS526%2Fwm2kZNhh2yhcLjiHNvjkDJs%2FFsUH2CwJ1es0bQnOdyyzKn%2B919CIylpUu3DRonj15LHlCavD9%2BBY2ZftQQEl391W99utKtBEG0jD5v79tafMLjYwsEGOqUBY5CwqdNsPKogkFoVqWZN8HNThWQ3S5Yeakt1oA5w38AFnjyAlYVUUcCPuC2Yf794Q5PnFCder7fvWfvMXcH6uJHPzfDp7Deyhj6iZRsVioUpFxBc6ifsoB1DHos40vELUJujPJM%2FimXby2KYH5F5EWkvZd3FHGDJPmT9tOqwEG%2FfXdjob%2FoBwKgF0H%2FnFHFq9MVMKQ4tlenuM5wU2UDYX7xndlHI&X-Amz-Signature=580ee5b1832b5ca75e2a2a4d5aab88a3e391ee594a27112f21e191505598aa52&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
