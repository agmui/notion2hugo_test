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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB4FJ7XO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDvfQ0UwAUmpMlCUKd2uNRLcNFcZLhGb0vGWiCjddOWmAiA3vl3lliKWNIi78jEx3wYJRm8dA1gTkphGxoHtBLXjTCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMhjhdCEmTgj8Vq2oGKtwDIupajtME3lW7UnWojHN0AezwEpF%2FwY600cx3hwDO2uK1XmOHelJLG3sCcg57Q2orIhVCELbKvHfHW6Pkn%2F3svXXq0gqV83krpV4lrId2fftFXZkdaVu2uZh1%2Fi5rDEZdMHV9ifQp%2Bb5OU6bljmEm%2Bo8GsDewgHQKroDF2OLntxHIe9E4RSDqgWpH1JE8uxRUrr1VKyssZLYlnE5%2FIEoLl8bBGiz0mdgo5KsWMyFkvcuqBWgHldEBootUK09JYeTkh8mDdBrGlDdK9LkUZmnvIIVBH6w7S7zl9VH8Z3jrq%2FShvvYq2PouJ2AldYeg5lkr%2FAyw1PeN4TgoRGGFQtxuwVwftpFS0x6bSiHKmGt6utq%2Bvd%2BP3oaWSWtyK2dJ0Od78r27dRLQGw9en1ueTg0KA96lWMbEU859%2FhUvxmHtnqmgu9QCXJ64pfvF67Ia0CsovVYs7HAJOvwpNrRUGVzc1YlwvZQO6jvRN7DrY%2B4oos6SMi2dAWlwsTydfcbfma%2BYUSJAejmYH4DwKhpFv%2FfBTMP1EgS2l3FIwvzLSJJdC%2BRAH6DEtEL7lG%2B2syrcFDRwb7EKaBULqIhahYiZmgAQR0NdCxYH5zWIPnXATJLPbmD7W73u77uCpzKsjT8w8t3ywgY6pgFyDbWV%2Bye8eR%2FwRrBbTI3%2BlMYEkkZv3%2B08uTAi4p342yJWlsBdbK8JHmim%2FA%2FX24eMcDuJTLIlpW3k1JUeqeyECSogXDunVEcnugU6jBz8Hl6nmZVYRkQP%2BnlOPudCSUvOwEtA7Ew0mstbi47216dAHdwBsN2OE5heAxieVTKRd4CBiQukwKyCFhtICmlXKLMWn7Ho9y1ftUXkZG2t1LpH60IahpQO&X-Amz-Signature=ba4913c1895ae7b5ebabcb699c16d5352a204094525f660799a13321c177168a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
