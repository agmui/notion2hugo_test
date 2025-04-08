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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DEGGRG7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI%2BLDGIZk3x3Ae5qjo7T%2BjoJn8kye7IlGfXGUSsVxvMwIgRYOO7mNRhMT%2FofNbdY9SyBdgvOtaAAjOI%2By%2BoxvSElEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGWAI7IBOp%2FLTuh6eyrcA2xkZMcxZGts7n9FZLAQhpQTcVdRIPknDJL8%2ByGNgTDV1umbn5RqviTA%2BJwyf6MGsG5FPI1Lsmeym0UYfXFJL3pp7K3Qp8qAFaoxCYQ2vVIOXXjCn3ZJsaHeeuKkf0N7Y6CF%2BjzdYllaUbfMsLhkn9aFFQ7Lbl9pZLgz4UpDscvtDcxjip2%2BeWMTSJbCHpoHgSU8RYb4E6kSjAcK4vnUDn7ytnIngZRQJEx5sviEsvMtvEORTuM5VNV1NKvc%2B0CUgaf5tR4tr4Wxkb%2B4YKSU9IXQohWza8laUtW1Yh904jkdThIrqWkrsuJ5Jlh2ADHFkCemdyKp%2FE5P04icjzkhq2EZD0bM8%2FkaxKSIOmxQ%2FvpwoJZXg29Z6zQPCvAZMcY0qc%2Bbam4FBqiF8CTq0CgDcxppM%2BD1%2BGgKtMlJmGdJROsW3EPPdbXwxiQjquCaHnEQASETfeeK2o8r7ZTCnfYgrAekq%2Ftyu43o1P%2B88gVIONIJwsGetzx6HvQDOu92CdF0ddYwE0Fjd6xC8wSg0UHc7Evy9vfzfNgPQqP5sxdNRwwuQPJ4DyACt5BbjSl8otnPlP3bQ0fXz%2Ffw7isTrctJCFh0Bw9HEPfyXw3q7jb1weDNWFoAQ8%2Bk1Smtut71MLO60b8GOqUBq%2FwlvSKGEMNzJ7kufJpw%2B3JGFqiqFcCY7R60rsQrkoqSop8Ff4sNgsnwBaC7orvxsRHqdiCUvIGEoCU%2FpuvQO07NazeUqh1EzAfvBb%2FxBmPx5cvHewuUjzDh%2FNKBp0x7P1gAOUGh01e5Ths8F8nNewNSSCKdCUNDwhlNSSDymmefGDxp%2B%2BuqzzPQMW9n5XOtYKLWX9nROoO1HZJ5XZztdlfqqd6y&X-Amz-Signature=5c531a3f6a74754ade82026134712b10e2f93ea692f67cda09a62ef4ee48c123&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
