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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM4G4PGA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCQl7U2sA8clUNbUSsPa9Fkj%2BDhnGGqsuHRSMBuZgWu%2FAIhAMxZUcf5InPsgx6BJmzL9Tc4H4V1lIfS9DEIneIVLeCDKv8DCCMQABoMNjM3NDIzMTgzODA1Igw2zWvzwExhwBHYe0Yq3AMZ7dp6EllUYuv8f2QnPsPzfte%2Feigxgb7Vp0NNTVVL4Hw4gRvsjO6C6eYdz2R5%2BqEziB9a%2BKZv3WaJ4tBLEfPSGXxdUCUidV%2F9%2BFIKWOJca%2BLwJgE%2BN0a%2FDXRoqIQQ70WDQDuVCGQVsaThxaoBKPYtq9ywAUCEvKbc0FQdQFI3lb9QLuRtAbETl%2BxTQBgIc9hSQ0nD%2Fty%2B32C2sTYL5L5ZM4%2FXWtYSALtJ%2Fq3qXiJojK6379mDBn6pVZQMNbQ1E329i5jeN111tCfI6BaCgAmx6%2FCDPcKt5FDzOgCgwaeM1AhgEyGUiuC2GXmX%2B8s9APqEQLlINviUL7yobqO8UdEHrx4ta7W9LC8X6lxXItdqJxMRvRoEbBKPFnYfXM3kZm%2BReVa9IL4NaZowla1ImEwmhmO9WsSprvEUT%2ByVtZm2ZYnpCNkvHmJJid2vu1mZFftbxCpNO92c7ty7lEk3LBkKjmPILWLNLjdSvVHqa%2FA9NtOz8JNM%2Be7fVTrZhsO4OYvO8kJBH1CowszO6kHcpNbXjBHJNpTgUobtjkMTzY2jXULzMgiUjB3WOPFaGMtZsZDWOE19D8iJorFovAdBnU7EbL1xhiOf5ihHdzbfhm38SwHJfeTPuIKSBOuEmzC4y9HDBjqkATV%2BqtXLhdzRInJhn6rbINV5D6%2B6f%2BfxNgyn3XrrRvCjjrxTsYohBAMzG16o6IwMkoE4URt9gWh4dGvMS%2BvqUyYzh35lW4RmcRz%2BsMl7n3FmJrNTNrM6jyyPcDUMMSlH53iSaNGtDFAaChzxseYkEuLPF%2FgBJsoZL6zyYlIQ6ye3zpHSvX3VDdS3FRQKT8haRzCjQh6SlGKWvWu7m8%2BRXGareS1W&X-Amz-Signature=c4a8bc09dc447c3b8b9f7edf3f6c94c1418bf6504a734fff24b7a0716ca4cd9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
