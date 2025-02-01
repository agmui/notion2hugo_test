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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHOVQUZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0GYHYQdVDVKdLi3TBzv4eUPa%2Fn6H23ockFYM4kt3PEgIhANBzGcKHFcY7O5lp1wu89y9Wt8YoQOToi%2Bv9KzDU4QugKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BLmlNPJfFHY1vMF8q3AOKPmxuhpxCZBNpJztIUO1aaSSIshf94NNmkp4Jufok5kTflkeLrg4mgKeaPMqDupv1PDxPRE4O6yhJPKxY1YuzvaE5wsmkwLMSU8I2g79UvNAtx2ChB7cSsF009C8AWmQqvtQfECIx7TW5Swixbhmh8uAHFg9G2qgrwzFWT58dxN8vbK%2Fd54paKWbQOZSBugfG2HjDO63RG4Q61bQmlIh2sD7ZYAl68wZ9F%2FNGZoTLO%2F8YtcJvLG0G8JiBl5rsNSUljOV575RaazeIePmN3NfhAh0%2FxUQR2xFRp%2F3AJRiC%2BV4eCuYBbB2B6FCwfxQMplu%2ByITOpdWFSXNvBBOXB5R0%2BGU%2FsXo0ZOvkikjNSII2nkXI2houjT8PVmQWRP2%2FW4IbLH%2Bm6VHKe5jqMzE8NDkB32%2FQellzM4JWQnNcRdX%2FkFIBIdxbCf5XxQ%2FPo%2BR6LA3zf097gLmJGI4%2Bbqp2bxKZbPq%2BUfozPuy9einkXTJfd9NVMyNtyRgOjiaTaw132yuFCSy0%2FMseNPqLO6p7DmWhi0%2FKfhZuPpEEAAgbMXRf2CZKJg5w0E6KMjWcu2NPBlkUTRsG46zjjOmcq0OasnWVA9yR3k2LS7Xx3DTIlYxMb9aldTyGazGcY82TizDEy%2Fi8BjqkAQb%2BJlVl9S26rHFfu7cG4Jbo5OPtIt1LxLXJt2wiHxf3ffrNKpJ4So8z2mHFzcxy%2Btg2kSUKNDbVmtWsX0AdI%2F%2BkkRRBTbkY8yeMeOnPQdN2qKu1t4JLtCryr39%2FrSIZ0BujMTBJ%2F7e3EXqq6Po4T5CwFt1ltvkiQsJXIP%2FU0cm8o%2BSMNYd6qW7G4AsB3BB3rHjf2zG%2B13C6o879vvBly4bCsP4Q&X-Amz-Signature=c922f4f8447c07b92bbf773e9f3213ce6a7e4f45719bf877527773273b3ce62a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
