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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NQRMJ2K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAghjDyAB0ySPcCCNTMypJlz5%2FwmrTRH9moqkDWyOWH5AiA6%2BK8rOc4lHhv9zIMbBJbpoiccm3Su6oII0oz1PdBEziqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEh42Wls0Gch78djwKtwD98imSiP135ZspmUYjuTPj3XxgSyglXcO0nF3jrzacUT%2B%2FTfck1QuV4H4D72bRhkDcUq8FoWBTE9XlHsO7iLk0hD3Q%2FP0J9cZFj6ve41GZPveuWjbtljji4vM0JpC%2Fy4bVnxS730BGDRxI2AC%2B6P2xf8qohA93ugh%2BVqZnj%2FXW6zs32l3AhoGST%2BqcFmGfjKKKlItm0%2FP3RSfTvE51y7OFU%2BxEJu7%2BuC6ICfKGYboUgK%2Bs%2F4T2FvJBc8j2FKPU48LxKyGFW0cQqg0vQ67iLnxKdzuupFPm9pvpipYJ78h9eQ3QHsZV%2FK5aEll9FsAaOms3cf98ADcN8xYyzG7k%2BcN4HziYn6qmIs4uPFz5Sp5BMgPNYwGqQr8kxqKtUptFiwkTX%2BevXvGpoJqCrKSWdjJGxAQrI4NcKKFs7HagvAA0VEUEFADD8o%2FJGj5b0qDHRNQRUvxRW3CeT6M8CiGlb0%2Fsxe1sIItXwVRKjooD0lcuWbTY7X5GhfTZiM3OaRMalfOeRWfmO5ptsm20%2B715OREQZU5pauk1P0yk9bb80BDUewEaeDLKqDAvbi0GFsQKriuCqYvwD2qzooXXB7EHZG5tk8hcAMXIdrwRuVAlFz7ogzGuUME7nlz9v2yTYEwkfXgxAY6pgE4zpGsfYoxCl9UFkNLM028QESZs34MjYmXeuyeWJxUtvPfJtTb15I7YO2nOidP40VNOnTTqE3wwu27%2BYxc%2Fzx3ZdZ30Z8kQkQCLjjqKlq7AOiFyKPfNN20yI1BZJEuu3dDdGF7eyfClT%2BMzoGoUCYZTWk9dmwg6glJG8935dWAxJxSvMDEYphgJCRzWxtp8VigajQtDyLFJDCPZnZJZLXE0Kcu3%2BME&X-Amz-Signature=71c646fa782d5c8762c57aa85f813c4cb677e02a2eb19995b5947149b81f3e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
