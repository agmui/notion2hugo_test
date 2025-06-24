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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KZXNIGI%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQC2e%2FGLCFq6GnRUhzKnTw1Y2XIjMOqyLaht13kR1H4rZwIgPgkKJDxNhIR0fJNJn5xMlTai2dxK6p%2Bs6oynDrronHoq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDB4fDceYvLCFlqRJCCrcA4a23%2FCqkA2bg%2FbUEMKpmvlp58thNfEkHloPFZc68s3Qfvf2y5fJa7joyqXTO7YoXa%2FmpQVUP3N1dUiSpzuFXYn9aajHYP5Z08y3S6rUVAC%2FjoqfNUrVretvfwyzv8YioH572VlFV5wdoc0VeSOFS5CI3kMb6kRvhX%2BTnu4HL52qLiY1e9RSIENHj5lV0UPA3jwY1YUHuqtHzCIrk0xEC9IR03MQzzsvhp%2FC7y0Pw8jNwTjluds%2Fi%2BOJRbSb9lpcfLVAZ2GXtrAn1ZLTPcCPRV%2Fe4wdfG0UW%2FUnM6xexmHkKQUaxAX1Il1xOYg1yhBgyJnHxwItLdMzj3qmM1g2VsD7cUOE%2Bt2F4c%2BPiLqECh3xTXWciNRu5QQPbUGO8R0kWVD%2Bzfj7PIokgOa4whsaVxkmmIoFYtOXwSo4mR354ofbpLJJh695GdK7KgaEe9X50EGUA%2F8Me9Grj9B2ET8oPghP0YZdwMEXzHRyRnBmnMdG1MfyOcwV%2FqeTviyv%2FFrALMqBN81yAnHTmIEzIAeUVL8mirhFOkmDPAsr4NzIKXR4dgd0T%2BKNMd54aP9Yzf7Kvkghpj9SurnrEsL3ZHDPI7PzrX29nx%2BDzlSc8RzlCCYPvVBxsl4u3WsN%2F2KpzMKvd6sIGOqUBbYsBJerKHd1a7TACUbkwDv8dF5RoigOwDSub8MUij4lDQZFqmabcGaYcbrMO3IjyucsPGbPJa10N1o3UfdjwOsGqwwvftwYmO7jDrbWmfMoW6%2B6jVPxw2e5MMSpvddlLyUFqnEjHvCzs%2BRuvN%2BY%2BNXFHFrSm0uHT7UzVGAsgNFFgNACCyCDf5zyOSpavkZJJO7JAVJDQBqLkjHO3Nf0zRz7T7KUD&X-Amz-Signature=69910976b2555511dff08ec1a1d793762ac5854b5ad4354177fc02ed928704a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
