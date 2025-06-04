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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UPDYW2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDN1wSHNkbFn1FCiqHgtr2IX23YVWjdpWJcpsIKvJf%2F3QIhALqti8OST7rFXH2hCpsoVAaMlKWkYjif8Z%2BuSYF5QrWKKv8DCDEQABoMNjM3NDIzMTgzODA1Igxzgup4yw8fCvgfWL8q3APyKnP5hIsmBKTqabU3i9I1NBlB74u%2BF7v71uiqKdY1Pms3ya5yHvAWYLx4Db7JXxutCMQGeuOCZJwijxl9g1eLd%2FnH3QCGyOmFt52xchWB2a%2F09bgMYag3s1t59rgeURT3XUkgbaUhrnCmGV8vXhEM3AM9iWT4FfAcRbzjv4u2lnevTp%2FH2hVxYil8LxiUyFiEH1rsnaol4MsDgE0H%2B13hbJCnxoGDAEaS%2F0%2B9jMP2t8OBx%2Fbp6cXbgN7LNRxIit2z5LXEr7b1rj8JV636ORhM%2Fb3C0SU0vXbDtT6yyBuomll7iuxo0mnmVMsAhruELJ4WOk46ivcYdLQO%2B8jOlCl6jaJj6r22jPu2Mj8NWMnQTaFKAeYz0RR6aT6Tz1QCn40OAP4Vu%2FEY1iVixcQGOV9GR%2BomspvxvnpSfFvNTSR6iqiHFqrmmDfQkrTpy1FNseEtMF%2BMaa6K9NBrJrj2ObuzDKG8n2cXYYUdAqLsFF8uVLict5IH7dumPsOOX%2F5UagoS8z%2FYPLRs9mJlOKxFm8fTJcYOukxY0EAJZX2c0UZjK18qZFvk%2Bv43aLL6XnfLZNvsmkVuzfcSu1D%2BjPb%2FWDNtFTuuPNgZvki45xnmgj425WBfCQsPnuVNcTEf4jDi3oHCBjqkASpLvLJs00fyfPnVIDjr9FyxRsuBWf8BnWdNRnz7T0utFRol%2BBMykpDxiDTbwK1XHA9K5ZHd8NYJEQVW%2F2CzcLZLTTYFRcizTpLtgxg%2BCFps5Z3THyaPqQrlRmyfjjMQtfwdeO1s6FlWkmMrv2izA9kRspU1rq9goQIwQ8m%2BC9mOD0cn1nQG%2F2zf8kclE7A4WUZabxWs8O6kwBbIxhutdR8pKjHI&X-Amz-Signature=83f6af21af40910612be6453559d474a1f139a961bb071f38a8ff17a39f91bac&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
