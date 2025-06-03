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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GLL6ZVX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCTAMjTwYoXGMoEclnkZeD0RfwNaEuLZooPjw0s%2BZzJUwIhAK87ci0RpOOPqos4L48oMfZJsvPHMvSa8GwXimM6i%2FEAKv8DCCAQABoMNjM3NDIzMTgzODA1IgzR6m1lwBdgANN6kDIq3APo1a6IIegSrsO6YxknTgS%2B9TlVxDIur7pNY9FWWvEr5TpQtkJ8acZFvCTcc6h9q07z1Q6Y3rDJwr1mA3LlpGEFRa49iEkZJtrLxQMO4rVkPold%2B1Tsvejfzm%2F7cZMMTr2gd7VZGweDl9g0SUVVpUL0%2F3rAvDFkT16AFJOW%2F72qYHycXwy7%2BJwrFiHZjgOwfxoTAvlFQU1tdFl1A4XRaFOVDMNLQLNH0RT%2FrKGXf2BaCSeQSZTliWjvuabJlPZEm%2BY6seSL9rdo01rTN5S5TML3ozcZQ14ol02pkpoSXIMkW9%2BCbrqrs76r%2FmGr8iRv8p%2BqIdikgRcfbOlWOn7tRmrACs62CS7zEeeSZdSXu14en0W59j6uNGBSHpbYTIwyULRu592q2sSRJL9Sp%2BgNKnmNDfK8Ni%2Fq8n25MV1YLKTBTk1eyAjzt%2FlIpvzSBkO%2BBS75SBfvf5npiWRWmAX%2BoskM8jJPX3oS8lgwL8ODx%2BNnaX9KXWg3YFI1GJVXb2OrAu14bpUI0wMQj7bD7cKkKgMdW8E3t46ig8lcyuHUIeHKQuGcnAk3Z%2FG0960XS31wr3PoBnYHfEkv2AnDAFy8ikwcazlgqvwQWE6LK64CPncRvKmqVRsLOl3CWfgNPzDI9%2F3BBjqkAQQr5CBtwyTO8fbKQC55TGo5NmqJHiX%2BnpQjdBxDyD1lBZo9P7Daegz%2F5JwA1CswEPp%2Fujh353k7zbSo6fCb%2FL6GKSGrqnGDOXI8%2FASopLe53qtRYvWZTKcK7VkNgUSyMGuiPwrvOJthFFk9umdoB9%2FH%2BlMp2WvSZWnDlPNMVERDei6%2Beol6JrWDJH9CGXSR4aSjiOM3kYaaPr0d%2B7GvB7a1tTyq&X-Amz-Signature=0abded552c615c9696bfde88653dbd4b77ced461bb80901b46fa2415b6428855&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
