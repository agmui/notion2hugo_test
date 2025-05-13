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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634FSCU52%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDLujsMIq2Xq%2BS28Vs28FO28%2Boh0VRhrtKJbWZilhYQtAIgSnT7dMcvRE3a76BBJjfHiGWKUkDVQYEPE3S9zbLydaMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKdt10KbgH2O%2FuZJyrcA6yejAa9vX2bb%2BAfoPElVF4dun9ZoBPGai7RU4urpwbti9QavrTCnkNTsV8mCRoOJqzBQsl9Qzl04%2Bezgz762%2FXhOVpH2DVAMQi7eySIJgi27TXsRY9mgIbnAQlQgytg0VFp0QVE3KLGarOqmYMrY64F96GTEg7SuGo014Cshl7ztcJFt2H2k6qnmTYpyt7XLYdub2yXL4cEGFAKVC6THJWBcNkOech4zR5NcDddSvsxH2IggAwLMIBGDRFCCvllmhHRkTYr%2FtACSFAcVNA5wTOL9Jvu249lhHcXnwWE4evkX%2BYY4pgiEBul7lVEEwlwkfau8c13u7xT1N8EnIP6IjsbYdy%2Bhu65LR2XyCh4DgBFHpbROuWaPbTks%2BmYPJ7vQa5Jyx2k7McKtDsIPltxvmZSlaQbh42t1gr86mp%2FyxMw%2FtdXxoFQuykh4VQ%2FRwOqiphtG0qt9tXGdF64qmPsFgiyRgI7JOQ9JDp9So%2BCds4FKXCbBMAHeDkiAQ1s4ceqFSHzkhXiKnDUhdQS3amSylcSO6NpMhPFLPy9wJ59erf5ajMjri3XTGswCH3tydWs8ahYG2iXbtM7vyFNDHD4PIebGDBEugWDKiN1%2BgzeQZQO9Qi9Uu926QNiF3PkMMr0jcEGOqUBJpZjJ4dI8kl7kgxUFTFDXQmiOaOf90kGNMgB8VWdwtxhWP0RZZsxN1d6RFECuGf1akKdZUTJ3RatYtvprgAGwtBTZSS42ageJED0K1fTtRn3UVZk19Vo7RpMxU5Fbt%2F%2B5Y3YaS9z2zLzu%2FtgaxxTzcxBA0VVidKIaBZlccMTBxd8qxdclCh3k0LA9zOJ%2Bk15LurSlTJthI9%2ByCIfgTAuRezh%2BkZz&X-Amz-Signature=eba5a6cc86da6006d0349652a5b2d7360d95617185e3ed17cc4bfabce7fc93c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
