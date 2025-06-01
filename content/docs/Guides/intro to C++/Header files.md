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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT3FV4NS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD02%2BGgkebGm6Wp1aLX1u29D%2BeU0QLj6NLGt9A6lr1JUgIhANQxpVwQTBkeQLUsiur5dkgAf49m1hHAuCOX2IkqvpSeKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVPl7OB22PEZfZbFQq3AOV%2F%2FqNVPDO3eVUf1oIpoM8vu3Amb6167KKtucnONXWmcp3mWIoCEqRUMWvG9kMTSdHFMFy25B21CG20pUOCPMwa4pH2mJLOAzd%2Ft%2BqycMu80%2BRrppC7G0s48%2FCS9ZdIECFkOywFAARULs0%2FbGL9ez4Uk6Tfv3wVee2hORY%2Fkkz8oxUhJsRsc%2F8h%2BOg3N6eGJcPGJAnTDc90eRPjh9lkVNy%2BGJKYm3urbof6d4RqWhEcZcP5uO0fqOqow7n9XkCmoSJ%2BlB3mlBjkA%2B0Y6XgGSmAU2hi3FdZrQiYkdc7QKCjtFgKQSO8%2B3WRlSqX5ST7qeTP19pM3ORZhFcnWCbK2rLP0C2Y%2BivkMGCY7bPFNziUzjtXAKcAjL0HZvxef3Fbvj%2Bt8Mx6KFCHxllJKsGsfdulLyRkA78plw01mIMFwmsAPvR6d13x7Cphe44BEvWZ4l6%2BKGGyIkfPJWrCfn14Thi0AqDzKbfPTt3JWiR9jPTFpjHvSpjMGjs7tZfiCA9MyLchJkuc8o0no6Sf0Q8E%2FYgTZzudWDBzxJdEvS4w6rrPz7giGs79%2FAiBWdUi4SCVk%2B7ijYkznJojcvrVczmPhi2K%2BanzKljZQEL7qzDsvLab1blh0ai0PBIMvJxwxjC0rPHBBjqkAbd6qsvHfjLxf%2BqwzaC93%2BY3xbg1zSQdTadEXMZuuAw%2Brp5rJhqLRRVSNRSNLLNEcyUero6jJ25QZeeCYsrh03n4iyUZuiqx4r8EZDYX9vOojXXJMhF9MT39sY2Q4zR%2FtAbC1L3TuHV3k6qqv5dqc1OAryngZi8aKs2RLQ5NCS9F%2FLkmmXB1OF9h2BH2aXPiuKMjsXX2ZbODTWkVbmPU5knobqG3&X-Amz-Signature=8d18e757c955b62fe511776e832365143689b68c7de68ed7a159fa0b56cb63bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
