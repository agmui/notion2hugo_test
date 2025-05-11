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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSOJ3OTI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDu6eZQx7COrHIOFHShihWUWln1PE7vvtXYC5ErMev98AiAwxWC1KyYTuYyYyCs3oD7zhNjvzlaayyHXSLiKmozDaCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPdBINq%2BiM%2B1pvg75KtwDyGMqeTkKjf1GcY2tSQkmTAQ99XO7Aa0ERRYemtyGIGrnXZYzduaTu7UFy4gV5w%2FM%2FTaLU%2B%2FCeUL0RMdsb%2FH6msIRc1z0cCH1X5X5FGhhDUgMr3zsRBvhxbU5lk9cvZN1mTOyFzgaNKhWZ5ifbK4yRXth1OYIZeuWmU6IjnhL8RDw5d1RXpwyB8xMO3dp9GnbZr3X8ubFNoyIyr5dY0za4YUg%2BwRYK0RertGLwrzyTPkX%2FrFTZlUsg4rNXsdbOfncIPGLFe4ELwY8S89Q1Ih5hn5%2BFLsK15AOOEybn1dppCIHFotPnbMomGMDf2oEyCdsoFCEfciDITCTZYyQk4kJ7FW8e67hZNjvEToIKT4JA6s2KaFlkcJEBXAcPHFMKkRLYOsJqynQckBsJmuH10FLzN8wryf6lFwVMqyyoVTscxgRdMLeNSbau5t5wbzVosxZq90aGpqw1jtlixqI%2F3EPd5ZpDRNp3cO0daLy9kibdty2LC3IbOQ8ygSydPm336f%2BAqXiWDuX7eJOgTRRIKfjEjUzknVP7Y%2BvnObvgHl2XUbH%2BlJ4SaMgw07nBu0wyAmgIHsBCYRx4Deyw18Hip1UicTuyl5v0cH2WMcTqsITrQIwCpNKJyg72FH%2FTWQwpseBwQY6pgHN4kcMDQaHVyiik%2FowIpw5GyoYCUPXidX534qfTYI3HXEKh1Tp7ez4MnW%2BI0CL8NB94WdgE12QB1cGJfan%2Bm4ze5nNcgSP%2BBAJh9zwl6VnOlQV5B3ecTIaVi6vxMycjDSOvHHNuZlhTHf%2B6MhyQ%2Bpp2%2FuLd6TLG7DUleisyoqm4VunzcvbM%2Baeizy10JmOzVng6AqlievGG6dQZq0FKQRGcMrsWZrz&X-Amz-Signature=295a7d28673b8b5a763d2b1a1079495f69f9481e2bd5af8abe2db631eb98387c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
