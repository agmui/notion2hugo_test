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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHGTUA3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGmlQ91V9ktaHUcHxXcpKVEuZtlbBMzOHgCBpA9WA4LWAiEAjRhJDNmoVsbvx4HWZswG%2BsEwGd%2FN6rhaKU%2FukAktzP4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8mD7HHZ7wIH96oKircA0RT4iYW3Vuw1x3K%2FrJhPYvpEPeeh%2BgaUdNde1fr9LHJyrg0DXgFdIsWh959VdCpgPK6uneA7BcNdnXmIah1jlSqUfMNjMgLyXiSXuafIofUs14E3c0PIvk8HPN22kBcNwJrEn47pvGoRnquvWpoPVEPwBOvhy0FP7%2Fo%2BFWjFxCSSeR1m%2BVRluMeEOYMqOaWVCvF3UNEzMdFkRoyLxFrnNFxaZO%2Bkm6wNAznnZUz9ssp6OUP%2BsX8pHIQVYyCW2IRLfgT%2BgyiVc5kMgssrNUFCjFgfdxbNAd5aL7R8%2BX4zy%2FOOZOeurmEe0p4wdmvY0ZXOsjCZx%2Bs1%2BVygtBXRpF2aSzPBk0aJfetVFasP10liF8GkG6hrXpkM%2BRpUkhLWAcaTDfSwOVdfxSdP0WfwWr6Q65bZe%2BOKcsEaaSfy%2Bz9K3b55G9gQ37NrXPk8OGbnQ2k%2FB4aBNJpO2BqQ01ErAPAIZkW4LdrSjduiaI%2FKKE49SFmV2YCU137i0gdbk2tZdoCyVsDxPTcgZLhHYyf6XnTjnsBjdITc%2BfcrSS%2B2s13Gyw66cCl%2FIge0hr8cGbBsZtOR9RYFiRib98vusx1l6b99K2tsgN4JiCAJZZjHXaCv6wBREdJBMwKb%2Bwbtx7cMK22r78GOqUB2VzbyNT91ScveXmVGYM6irC7C882rTj7xJjb5Ym%2BADO3Bj5G%2BpT6JA7xMdqIpB1PpJOjiGSABJyVyAo2vq471zdivH8I%2FuRmk%2BQp4Bo9HCrAWPQDi1qjeg%2FI93lVeb5R0MqE3FNYuwiALVTlF0AmtYV8hDycoRMUcfBLbN2RFSjnDrsC3xHAj38l0PHC7%2FCttIaW%2Bgo6RhckHsXjv844IVY0PRBW&X-Amz-Signature=7fad897bbd2b8071cffec33b086ba18fc47d0da26c2150f5db2677ae3d1aab16&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
