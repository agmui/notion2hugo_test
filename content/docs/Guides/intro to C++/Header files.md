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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466336FK6RS%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDG%2BS4elC6z%2BH3%2FHhrDnzFb%2BVUB9TI3u1XUWaj8acmQ9QIhAID2NlGo78LpdtL%2FEUmvhEr3O5wWtxYT8GRHHf09FOJnKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVYjY823PBvhbcZ6Qq3AO6CWiJ7JQkZ8TQC2QW1LAywg1ojxHU0gHai2mnSHOSk9z3nyhgCs%2B5m9Buk8OIA%2Ba9GYX2h%2FpFxeFru3Ok7dkpJTRpAa5dDfFm7d8tq4Hr%2BHvJ6DeUZtwkOeqiHtoKY7tuEzFdxxVpT3ORpAdyvwa3RyoSjGL00afZL9aAndhX3NBbTgvs5nybSQ8y7mSPVKD1L62yFr3QQuG1ZPOCmS%2BNYKey%2FN9xmzomL0FcSnUfetsqwTnJp6tNW%2FBK1YBkYrsaRyFNPrFXx2ow%2F9VdPhZFd2I6FYblHNGWihAl1Qt2ZGuUCsDoGkISuTuTk1GsQZQsAYdUAa%2FVQbchNA0WhVJzYqEx2HaznNOheRZKMUmCR%2BjN1XD2ZkFsiY8RV1Ri2%2FVhggB4SzL9OU%2FxVf2H44yxZIj4r7cVCTBWrPN9m2q8rwmmmKqmlLyPvBmapnhsKWpeVIUPu4ThuyAcn7tUNHtd1XhhteKkh0EsmHEP0AVw%2FE2kZ9JO9MgYI2BzMM%2FAPLmEJjE0Z3h%2FCjuCp4oV4AutmDJ4PxNSCNJ%2BnNjwmA8HgH%2BQpPCwXtZnmqTstXbHeqb2cHxbuv5%2F%2F4BjEqMplCFp5Q3abnepwTkBBfmUHpTT1OR2suMTJNrC9cAa8DCz7cPBBjqkAYqbYFCEso7n41X4NxQYADdv3%2BoepcAfCfGG9JAxdYAymXKzIVeWWiOFWB9KiuTzMAFPjc68U6RsNRPY3MEIFiTfDnUODP1gfUzuzf9pA2G2UsAB6%2F9VIDOiqLOZIXQUQk0o8CSUrxzfhs2QYXAhueH5OyvoIx2sxTtjEzELB08moIWvFL3za0WpiDONuut%2BIwyklUQMCCTrrJfq2%2F%2FYt6KCK%2FIt&X-Amz-Signature=f563a1795f3cef613514e5d7d23181e3d7eb0aae307411a71fb1f72cb96a27c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
