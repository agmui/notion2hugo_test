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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THLPWCLS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDncBnsGmTj1DwhNpmpuhPJXRPlkRsxqYFA4d9Y4jo53gIgHMstFLDV%2B%2FRzeHNtkEEtzvyA90MiXsSzehW7l4LUZsgq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDOqF12eBPYh5FED06yrcAydnxUY8R%2BFl4E4GQ%2BlmFIaQ55oiOhjmXi8yA1Jt1t7IsJAHGG2vr%2ByeBEVFtt6Rc%2BvfSjpXsWQrbKCRum3utbqEvE7bPAtMGa8CdsdLC8N%2FjVQeow9e76hre59uCRswY1J6z1D54r%2Bb0b2oNYSQapdnaS3Az253R8qst%2Fmqa%2BAj%2FtNtC2F7%2BA%2BDlQdZtce17TgSr6KMBwK9PqE%2FyA6Rc62YLdQQwlRKNJWkitX1HzNEzUpBRVkJYWdc1dmxLvWnq1Mv9Fmgx8aWn0SDI1ByBAE%2BGmdxlcZvusbPqUnwW6L76DBM5MkNzxN73OXhESKVVO6iEr6sScVfN%2Be2gFyyU%2FU3XCapcsHe%2Bcg5m30GWWkjYlYDuTnmAIqt5mUIIPy0sQAzhm7SpL1fKNH3SlcJRrh2KIWzlJBHu92HvO%2BYTSZmRgpEMIlRjUlIMut%2Bu9iwfgBVTiQ%2FsDk6rFaZ82DttPC9xxHUgcY88bXHCnCXScgrv2p8VuGzZfbhE484etvzefpY3z40ghkMNlEEKl3QSC2fixH%2FGMzhN4s7dh5a0TJ1i2pP1JQLAjyboIuruaa7xS1%2F9QD3rf6JsrLzrIM2ImIRoDvRjMaMjrwNa3DbMGEn%2FrEcMY6Q9al1o51DMPDt670GOqUBC3t9eNY5eoVapxIPDxl8xjX9XEeNnryounnwR1hoWlMd7NmeVL79zvI%2BvgF89Z4SuYtzNjEIYBj%2BS10b6GCrswxYAcKltc250BiFhzINscnom33xza%2FUGCOTjYNWIOPkOrerjLQJQa5cMSRpCYn3snY4qgQGBp4rvvh7NA0%2FO569Ldq7cr6uQg1mcaGBwWX7JPSo60LMrn6c%2BrJcchrQsvJnZ8TR&X-Amz-Signature=7beefecb55752bae0229d6367c61648eb6a22917f2ae27a02ae722283f64ffc1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
