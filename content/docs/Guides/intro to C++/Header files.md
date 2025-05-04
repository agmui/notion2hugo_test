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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUJW7NYY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCnuNOAotGW4d%2BsnvvXcreULuFWLLjHQazm4jGlrMbffgIhAKV3O%2FrFpk4JsBjqYZ%2FZ1K3HzE8BuqZGVE8diQCGaRN5KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC4AB%2Bd1glZmruDU4q3ANLuyPkOroIjDADMN5Z7fZIM1ejKEEMO5ZshQdhYdp0s%2FBLqcMEnSq8TsxTkjOX%2BPyzOVnViRXb0AviZxiavJdfglWOpLWMyFKf6lOTOU1OZ84dtY%2FdJ7PI45%2B2Fd7SOtsY2FIl3vbZfW9803nMrmBGpBskE5P9aH6SD%2Fe3XJCXdZy5UBm6ZK6xWnePbcgRu3GWmGI0neldMqvbccep75gDqrzfzfPHifSHYq9rYVTFQb7GjG5XqUyoM8B3%2BhBeTSFoYj%2Bsq8L%2BIdYllTuIGfu7k%2B8c0G3UYbiWr%2Beg2brFZ%2BujDkaTbROsM%2B6bk3PtrRGAOpy9X5ttmhk%2Bz1dmkuC63jFQA98%2BDH3vHW3W3LPYA02QC0K5gfCJ3N9s2WTn26SQyaoh1W3By%2B8XqBcU6mlqYQgRJ%2FpyygpRNiprwVXOp83z2oRyEuI4tWDBwBdvPfU61IWEP9hQ%2FRhbUAWZHTENuudNSwWOVxsTm%2BusETVoOmWr6el521vp4r83vnh5kC4zMEIa3djdggjxZcmEtLtLUL%2FlKF0xi67QVJdedZXg91FlbkuLT9h0gzcZx2taGJpYrcZZhDrjKlm%2FL91UXA6MazIZceHdm6jwCMd04J%2FFtxkNiwrGKmmpqnp1xTCl69vABjqkAam87ihNgeHeNI81FIiaTaw5wA%2FryN1kxewtiXPjtmd6Q1rx6BoBAUS17drFcR%2BL5HsowuOvCCMFLTchX%2F71h708sFDgWrZB9m%2Bz5TSjzUouJuS1wy%2FYSr7kHKIl5N%2BqTl%2FtQ0yTcKOztlvpkf%2FjnXqrwtlgDLgetaz9NOpMJYMn8VYpolc7nqSHWWOJb8jYiGu4qcQRm3Jn6f%2FCfVphmWpUjYxR&X-Amz-Signature=fee68b3c05e0493dee5eba52185226b2a42419b8ff37b535dfc343ba78fd3f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
