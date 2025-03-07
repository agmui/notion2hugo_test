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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474AJBR3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD98fudYYoLiHvuee6xO7Vx%2BzXqF%2B%2F6l55XezzXqOt45AIgOXEbgLeWbGim8hGEIRXie%2FVuj4HHe5qixoQFGaJh044q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDO%2FbtXW5BmyxMkQ%2B0yrcAztSzinn6C40erV17kqmJoQmvkKqL1KRiGB6aIRcva8vvnIn%2BSviqL1858CgFC0j5sAGV6UD0Sukc7rVbLIU0%2BW%2FqWImjLD65APOemsJO8UzW%2FcOmfHQFlGLQaLj62L%2FpoSFUlcjQHNC3WKtx8uhKV1U9VNzWLVSw%2B2VuBybnVB3aWICh%2BLPsyWVx3%2FYxl0FSqVYrwP6zkJvoepuUXa3vMgRzSmItSdu1ciVi62Ce5dlbrrxwlU09xpQBtdQ9nTJoyQm1gVo4%2FjR3aodjF671GnPtu4Ei%2FyW6F0yUGCRDjFaK24IKwo9ATfV29xMKnKuiauw07wkXxft50s6j6RgjYozf00NhwnwBQwkRM1YqeT%2FurI%2Bv0tYw339XlJruUmCoggd5JfiI9LF1yolGYSNQSWS3NEl5KTskbyTf6j7mx636XJz%2Bp0xRi2FKnQ9nqoK29JM5vqky1mpZEBdcBo%2Fm7NWacABm3iQ1YtedoydWd56u6Z%2BduQB5Nkg1VCgwrx4lqYPzSWsMD37GphdBY3BF2BBBIX%2Fys5EERxWIEOFInMf2e0GiBAfVdSWy%2Bt247hOU1IkqivOamwkex6GMmEyR7npUxH%2FgJAi23qO73%2FxCYI4JipJS%2BBSQy50WmDDMLigrL4GOqUBeqLhZBykBskMnrbfOZ%2BjlkCksuJVL461hF5tA0qoJZC%2Fp%2FGJttzuO1S93xsqtWAY6FMwnaTD5G7xUtUPUC46%2BYZoFRtoKhi65Mdb1UGweV%2F1P6swufVTtdfEzPgNocBUeRjJZZPM2LhT0npy58FNYCDRo4ZoX4J33SmVS3BmOilNIahdY47zfwLH5YQHc%2BcpN8l9eKrZcMdiSOaKRgCrhzhv9WqL&X-Amz-Signature=f102b85c10d88381185f3c6b48e3bd8d3f79adcc23e3364f25002a72af05190b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
