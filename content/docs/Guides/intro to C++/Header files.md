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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO5XHVTB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCUQIS2itkcsExKIdIZ7tRCf13QIYaeOVRVFiRsdRwmpwIhAKGx9YB54yHhMx2dZd4Ih272xB0gPJ%2BwjBpO6eQiN8lBKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPNrKJRxLpx4sV6Hcq3AMtzWuOW0%2Bji7mqmNdgiilTXj1lD98DGpki2Hclen6i1a%2BZZCFgxtnjfghpHg5KFKjaq4XatYoVJnikxRHX%2FHUQX6j8rmmVJviIWFGZBtp6DcoRGzJVn7TpfF0YKjqvGFwBmZQf%2BNSxMTJqwVUslKBDDKcKkLLv1m1LGrtpdtAmFOhWnuPhUfIMNNsQ%2FHLO0uZQ6VF4R7yLAFHObXP0Mw0jhAYqLmmd8X%2BF4wiBCs%2F4RS2OHLYADjoY1sbLhU0uJ8aNnf67gs%2BXZy%2BksJBClKEWAjx22y7jV8pVMuPNKvcy65dFTVgMo9fnDBYVMVwmlEsfEFwhWLiEbZKw50VFpbzhLnan47%2F6bsLsjRhdSwbr5OQGuBzZ9PMN1Ke%2ByvXBaaDbKClT4jv2jiERsZlk%2FFbLENy86aSVd76%2F%2FgtwxLmfmD%2FtjGECubrX3%2Bru%2FRiIuVu5zXuuUtno2%2BRkQCTusZus2RCW%2BoGXOZ0Q4VFQdBx%2FWRWyfs00Oza%2BEyKBpFHMatIwKCwSYHFRMAz6iLlcQ7s0OtAoJl%2FI2dMVHXszArRfGQ%2Fl7EY%2F6DPvUgOKjKBsAH6O5PPQiEqm%2Fp9jCFFqyraWR6lMIp51aN6qSEh5dM70l13gr%2BdjA4cY1wJGkDCl0sK%2BBjqkAR%2Ff8ker9bzvxZwwT2OEtmzOCLOhGIdQeU%2F%2BK4N6I396FmzUAIJNe8h0PTRyt3jOE5ZURBlbk2Ik9rtEyhieJCZmjWaC76f8TA0iDcwZp%2Byey97NQNrzTMbDR4WqON87hr7CKrZYDcne2TCrz1vlEw4frNaLq6a1HGqeGIn1NXq8yN8r%2FFAE2WfTwMbMidZn9TqOwg7DM%2FNaVX%2Fyp%2F%2BDsuzUjMAR&X-Amz-Signature=3cb723b0e2926b4a51bc586d5fa77ea4212f2ce1d7c51f8a7d1b5c49a66a3806&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
