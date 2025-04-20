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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2MQ3RQ3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCbZtXv3o4ixF1FFAKAUJqJ0%2B1bHlF3gf8y%2FDLuGkaGiQIgERufYCsGdQSNnQ3SVVhKN8IZktTdBEBlvOcKO8%2FV1FcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHz%2BbNK9dp%2BmPy77bCrcA%2B3YzT3pjtA0YSJTJfoshrY5XRXhC6ZXrFN07CZBnNO1SjVSqUbaMypcoWwE0d35c3CojEwifbxQA60uULJqMvW6DhqA8r46BRjoSjgeYWk5Oi2DQa1zZfxYKIFjlz8p6wiHHSTtKTn7ow6u9pX7y23ml8V8DAm3JPxXyVmvhz%2BdlR4VozRhXSiCd78AMkOgI3RvIHkBBUFtRalwOc1ytHQ2tRvF1GKklNX%2BG4DPF%2BGJ6mXsVg5Gc55OupEYVsnVvEmDNXy6Ah%2FZAu8nOHrXzrOslw0Nt%2BZj%2FLI6eWxvNJ%2BFzmjWKuo3fB7cHymXXyBD28mtuNZByEp9ssgDn3KnMbZv7WE1QC57gcuvQC1J3wVdUBi5GOUen0SAXpEO9XZQNMGlIjjGM9tr317W2nRSW%2BdS0LGPryPHhzU4tr5%2F3HJ7qKuWVJWiCZhkcaqKd9DcY7d6Zv48NRbDndLgXQWzwNQdRagwwjvcFPwW9jvKwpU3yHV1AkQq2K3Dac4681zLw6%2FJ0OhfFYMAIW726gtsRiy%2FWhqupeAlS2flJLTCO61QW5uMKAU9an7oTaeIyzJmexnVqjDy9Lg4eKmltt1TtM90BcyQFWmF5I9b%2FL9qbwaoaHw0dVmzDyfq3tihMIKCkcAGOqUBTFbX3u5n%2BKbP34CdZbHmdQPD4l727vRNnhpb3kcyM61REX0dc2Wuxg6Xs4Ey%2Fj8YoYNCrf%2FQrbqkOxUGaweZt%2F6b6Eg3kkEPDSuQFWzkobToJ2kIK39m%2FWAR%2F82gOHvXOJQxDyZJicAIJSeGPDJTmTlmMnIJxHugmm%2FjxA6iTdxihA1gptrZVvtf2XB8eE8LQirK%2BBrjV7ZG37MekQJDmgD8M6CX&X-Amz-Signature=fd10bbd9b9a075a96030392184e47c3494486f64cd1a4c22b30fa2e6f3caff23&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
