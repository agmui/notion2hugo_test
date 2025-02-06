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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTSEPPC%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDAMutbVujCHEhWfhOJW%2BGpGAtayVqF0M89qsgLOjDoGAiEAh22ExuBzTzaQDRySegn1srZxHVqZJcpPIGLKolu%2B%2BQgq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEssN3OUWV%2B6mEjwsyrcA%2FyAJX04tpYKAjT5SiGVI5iUYPWlAplFhH2YP1i06mXj%2F7jstvgHKKCc0A%2BbUI28tKdILzjQ%2Fj5txfjvXQG%2F9mfPIjK0w%2Ff4S7VREoXEn2YytlHUnptVMLQAORHW4eMfPDCAWyBYJTShBRK7QtpvwXYRF7U4lmieEquM49qDGfofFK2exDZq7JU85RMV4xBAsoi%2F8eCqkH%2BUbLQuSpxGXJQ6%2FG9eK2FDCy5I2KSOivb3aUuSXJaxGaG0B39lZZYSfxs4pJSGJz4GjqHED%2B4T2iku0ujumVibi322d42Znjl3F0LaZx1zkzkDV9k1Sww5AyzNlI15YAhzmwbgAdU8At6jFSnNsAu7SJ%2FjoLwFOz9HHqNCKOKqu%2Bt7zTm9AV33w4JRSjzEeYSxM0ZB5tq4j2yBJMO5RohlKSZ%2Fadm%2F78oek0SJrgO47vpdRZuIKRhhfc6Fb6Lqh6u8lhjslJbOqmXQCF2%2BWmXt8HyVGJyY9E8yUV1VJpkuyT6emtjgXRz4T%2FssCeZEaaSTlLWKDvbOtzE0eCeQbRUhVx1Na5AZ68u%2F2DhSD3Y9exq6aEV1gVGHxL201mi5tTEYys3vxKi1%2B2osUwpqa%2BcpExcVnztciYigngme5Elhzjxev7XQMLP9kL0GOqUB7zTejuy5NQfOpTNOzTS%2FxC2dGdcmVXwZUbBblizux7sKAGvsXE58RtkGWI5tSLrYeFULSOnV%2Frgf%2BLie5zGPF2JGi8DWWvagXzPckrvoLiR%2B0cMRbuehpcebaKNf%2Bfh56Ta72RqazqgH4GDkzERHdRpL0o41op8kCtFEHnp6r8%2Bfz9G9K5LOtr6grhwlT5mMp3NTo76Ogsk7rXd8MNesqH0f1e5H&X-Amz-Signature=2dfb85e33a2fedb88a10d72c60dd045c7e04e19b873ed4129be8ef42dda7c8b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
