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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDVKB5O%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCICxF7iEo4P7tQNWcYB%2BQHRK4s3z9d4MdRiiyJhUp4rmFAiAPDxPP8EoLIhvbtjH1RcTdW7utoFxsbviUFNIuwyrVeyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMGhfSmrGdJLYoT%2FjmKtwDnSf7QSdGnMiy%2FcWxQSUdybGOZybRT3W4ScVl4K9U7%2BJMsLC7DJXsaMm%2BHhpKcUW2l7B5IcnqeuosGBI4rNGcLLb8KEbo%2FfYbcru3b410qU%2BNaK58tackhTjJCFh8yhzZ%2FeTA2FcKECIx8oT776vRld7PVDxHnBcGDq7lnRffGOCE7Ctz5EFMr5K8%2FsaDfm2DnHiNOAcZvJgnuYHVlIeuZK7gqny%2B7%2FXfG3B%2Fkk9ztSAp24rsPqigR%2FIfKWUU96wZ7gXor8%2B8udJ9CwPWE7n1qhCz%2BwjdZMNRKO8hQlsEV660tmRzxN4jNkBrWBkyButNEofoD2dyVkE%2B%2BJE4ao4%2BiRnolge6kPoejP5DwkXnFr3kmDJJJPt2EIpeY%2BYSTKtqj4GBKAD142FuNMWsoN1vGjpi9mGmdaZcgsyqh7tC%2FijtZx0oJWinGCL8ZivvZJNPe1EW3bW4areXh7Rl6SF2t4rDVf73QfPMhXUhqvvI7XrjfZ4ufo2G2IFPVU6mON%2F7Es00yRam6rvt6dH8JYr1tPWBKd1FPbLWHfNJm9gocbDSd%2FLAfI%2FfGgWKqFdh892BPM8fZYihsRFLRlgmwLeudEp%2BQHNnLJrssuHFhihBJOwcwvdtOKYESvDEBJIwqueDvQY6pgHGSVJ25RfFhTi8HuGmZgmc2Y6lForr7gFBdbI7G4hwp1mqgKdN23cXgqmftlm%2BqqYqas147xC%2FFkowKInUFciDNqrwE9UmBqIIltJBVx2ztER1axrfj4MHC%2BAQpYK6HGMEldBnHKRI8x4YqFOfG73nzQRfaAUaQGPqXVDW1uw1a0U9jZxEwcYKOAyfYazd1eeoikuzkw7J0SqmjNl4yRZuUQtFTAau&X-Amz-Signature=43683af2830e38b8c005883db2f59fd943a4c16ce1a9081fd2a11afee56432ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
