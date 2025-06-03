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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLRU2M6%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIFrdwnze%2BPPmgklb3%2F1kVyG3bMcEDn4X4va6mFFHvGKLAiAbbfyqA5gJzmgzNyIqscDW%2BLechp2WG%2FxpD141Zn0xzyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMOMdH%2BVab5tZfA8WTKtwDmTSnNvlIWQp4NVK6FK1GkmX35j3gnn2pkIXy446HKrB8b3y7mKSShAcwTlZKqTldjWdItvSR%2BkhccPppqTH1HNPxp8bCfFneRzfkJrIsrPiT%2BWIH1yY%2BksHdDs4WjGRp7Pw2xkORYdaeOEorAq6Ze80UJBZaVZ%2BHb%2FVIvWtIJWv6bEt%2F0a9qvx3JDsimb3Zb%2FI2S8w8mMiWSt2%2FpDH61nZ0OMuDoO%2Bpu9qDaa9JFOqzrFR9RMKP9Zu%2FIu4b96hzLjw%2FQShyniOF7x4vAZ9KBgw3qtD9g7SY%2FaQHXhXWyxZNmlqPQ1k5OCLIwUnya%2FgwP29afeo9oRSYjdRhkAdZZpOTq4XXZDAgRSOXxP0zQdX07zAE02YZj6ir2PD3sw%2FLPNzjpO2LJiRj7qGfztX2qO4SZzVXfGrrsnopQpj8fVdacci5%2FjwtVtxmQtZga93sUCgQ%2FYb4ofwfH%2FrIhRwmktW2rGhjyHVrA7iWzZn5q9GCyL5JDHWJVfpJ%2BB1NqyYJqUxioVCbYOpiuodkV6VQaIxF1qYjkukDL6YRxghvolRgnD8ZfgBxcQ44mXhnWtwNywG%2FeWXdaT4A4eLVmKfXIN3CF4HuaH8y%2FMS7tuv5a%2Bcc4If9laMKj88XAywIwkqD8wQY6pgFKfuLvVX2pDg8rb0dlWiQzH6E1aO5ark%2FsYTlArGQkWBLusFYyCWxvluFSFgB1M7k2yWKaOv3ME2Iap81Kb919fY5cWQBU91plYZ%2FFCHVjErIlj0ecHTjvJVW%2BmtcRiWqySQUargFJZzBR%2BMqzz9fosjGWGve1smWhyLarjngCfgA6x22kHxC5grFCyqiTnRjZAASMJWLVmRg21FSnoVH8dN59%2FC2g&X-Amz-Signature=005d129740cf85635090552a907cd708534993e2663b26f096f09c9cf2df8e78&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
