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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVFS5YBQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL1FHd%2B1q898tHLzUUNUpFwa4Hca5kEoTkjbYarUrO0AiAJ4BuRxSGZ5V2lIUlAt3HlqI8bGGiOrAHyYFtn1CMlECr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMx%2FRSqAzHUlk20K%2FeKtwD2ZOFmhkyJZ6dI3xL1GSilT52%2BLgh8WJTjb9n0dK4e8jT44cYc1ZqIMj7f69JAzjb99Jq5OKjhOaye3uWzMWOn%2Bw5PJRkOUAkXmpkgwVYmnQ1igZuGlQETF%2FkHm8ztNtxI%2B3MiEhf6BGQ96%2F8KXH%2B7mLLprPGnuECiluIrNIrz%2Bz7aYknvs%2FIAAcOAEnMe1vSH2aQSx25QytkCJun3yTz1Tz6mVaqNikivEiqD2wh2YdY4NIT8xyyVDt35XrFu5vRZDomnwIrOBodHQqCsGXm6yXDfi2H01gH6aHGveOn5a7XB02moWBt99Vc2N5J2M8kqJkYBebMuk9FqIxJfxDGU0jK7fWNPZLd61KNqOsUAte9jK%2B0%2B3v5BffnLk62JaTMKpiVOWmZvcMLlPYMp2RuK%2FDlSW%2BN%2FTc1ise%2BP7LszgqIcadpHHeMQ%2BRE4g1ROidsLu%2By%2FuuTFR%2BksjXnmpYjNV%2BOeDNMA30ccDvvDKiA%2FP%2Bzy4YVS%2F%2BetsgspDpClja%2FPZ5YbAWdZbG8filDKnbIFNrxWf031Zrj1k0qOSTsqEGBi%2Bb2VH%2BrvhOvW10YrVPbnK4rdcZlmCwYR4sXj6dt%2Fw%2BR%2FrEGwg9mlXyWTfx%2FWY7dhiQ1Zi8EISYp4bowmOyOvwY6pgGQR5gmvhbkvyPI9%2Fc4NqLCc6Pn20JH5wT4qYDBLHce7cGbbG7NjwuOEr0iL7zQVmo9XhAgmWo6Rz9MpCfzuRmWOKnUGrc%2FK3yLGf2sm0S%2FB28EYVamTqMiqmwFO9yX0aXE7HLpuqQqA8N1Eqs3NMnSXGm4IxyapaOZw6ZI3qDvaLEN5SKnCj%2B%2BQOBsYeXbwv03httykEREj7iczGQZV1DyVt9XVuBF&X-Amz-Signature=6bfa096741b538edc52b909d139031bd0030549abaafb8f3e33b2bcb6a0755cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
