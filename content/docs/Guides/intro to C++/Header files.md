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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTL4IE2%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCHuRSFDEGiQV6aOkBlIOUSCBQE97w3fQ%2BeyXQvTOisPwIhAIfnKvl9REp43FryuEznn26aPurJAVk9P9TIV8Xk%2FjixKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnCwqhTdY6c9j0uO4q3APFv0DFjRblW2QVPBpheFbaBmqoOeZUZFJbjRvdU1iwOV%2BScuYV8CjbE53VnadE%2FhZmp9TXf0hwQIm0YgtPonqDBLGqppt2fmWhB9FAJCkqavK2cNDtygw92EpdETidCrCs3LK7ZDO2Rj%2FhJOXUpz51NKaBKWZchqObERp8hCWcTWHoCPJwq2pfENy4H6AewCpyLrGmTE%2BibXC3%2BGzpm%2Bq6WrSY%2Fu3NlsVmK3yDFissaPsGXH7vtCTH0PQE1ZSC2vu%2BIetS5KdkeiL2EAcAazohGDe1AKTpPS0PHKYu7JpTur7vWsmFSIMHG5hcwQJKwobPmyF%2FawyvqCExRNa9rNQN9C0Hx4yHQbkdcC5AWXLQ9ixW0ucv7DtfFNrOnmz77EVJjqMcOsQuLyYE28LBPMSvtr7nk4hwBMeDu7fQPu3NCOqNCksoHMsQDRdw%2F55MO8vGLk1vdwTvkxYRlfZ7mzPElvhvkGe8iOUWP46hCiXznfJJ4L%2BGJl7svPJDNLPV3Xp63v2i03qBakfOf%2FCW8XnLxo%2FOkp4fnlWRlCkRUipHJzFUNzHdForZ8CCHEjFQJUyHxgnSjqlqH17Esdh79LS2hh7VG4eB%2FIEAF20vuJpWU0a036Qxhr%2FwDwgeZzDur%2FTBBjqkAQIFkKRa5rElVZ2UT464aTTamhqu4y39vgLjrnpQ3SpxhESKuqIq%2Fly6UnAfq8HF1RKJOfl44D%2FKcAQCvdquvEqh6EX8rfNltOza9bvKguYd7LxYyeU3XwTDrYM5xBXqTfSb58Q6FYPlDT0JO8K4%2B7%2FRaSL9OjlrMJUnuITuXy3BGbz93GZE9ilPJALn%2FdskDE2o7om5w1gyORemePL4zGYGaOLu&X-Amz-Signature=cc053e498aea3aadc880afd5a3d7043f55b722e11f2825b0a1a590a86765d7b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
