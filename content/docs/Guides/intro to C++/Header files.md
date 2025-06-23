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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA7E4OFY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEI1jx7p6wM80A0gQ71qQJLYZij5LPHVsKsaid6zF6a7AiEAmWdiyfAHgVg5dpgGZahxhQLmbuNbND%2Fck%2BUP5nJY2XsqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrCePU7ASBzfrbc0SrcA1Fq7uecqasZshQ6fETIjS7yu5XgitAnL3Sos%2Bzx05jcF7%2BoZGhyCcpmWaLN%2BXQ%2FVuqBTrce07Bu%2BZzV7nckJOSgT%2FvOIUoOyikMl48uOn4e8zCg7a6gbV2mUsRJJkaIGgeEt3xY7FPsIoSE3eVxf6dtUxnH6EKk5s4rhuyGtL%2BuqVf1dCBj3lIRhvXaqNgLbAOCOtKIo03lHQE%2B72Nd3NTm75xvTnV79Mjf5JGy8DFob%2F2YLsMF06Ixe0khdrMa4Gb8WgEVa1Opw27vnkxZmJS80NJRMJ%2BcCMH9jd7%2BzVG5uLKjvW4yEcclXc%2B9lnAg0XpSaJC1fAVcVButTxaxKKTPYae0gHxaGbl7Tb33wOELpVSNvC%2B2c3YDZRAQNm9P7Kpoz0B0nh%2BYmBCJY%2B8%2FnSFM1Qn%2BQpWubxY1bp8GSXSZwiYHcHbMKTlLam56dqGvANyoaqOpa3wNdOpWSux0k%2Fr2S5S68L5AAQqqVD77qeCkHX%2Frm%2BpfdTmgcDtRfdzbJm%2FUmYjkT%2F6Kt94HxQCqxlFgVwAw2TsLd9WbnN7AXjbp0rT2AMJ2ZwelG%2F4zLYclMaZtQi64Jq2WG7cMlJo1yG%2FNbxSo1pgL8beneQohxxfGjWjmPOlsQ9lzIjliMPGm4sIGOqUB%2Bueustro0y85YIG8UvIUOWluO3O019hNRC%2BjRiJzmk%2FyVhGuILXUdN7IgIAasTJhhA5jzvASlVA5WSKflXFsxbW3BjkJ81FJDYcwr0rgoA%2FY6E4LzCLM1z0Gwb57xgJPb2at6q2qw5jGXMoFLtpdUc9b%2Fs70BySyEYR5%2FPCX3ohPSeJFgU1ctAnKcj6DvE6C44GPo74FnfM%2F0Q%2FmxsNMzFmP4kQF&X-Amz-Signature=77beef9acca9cbb577a80701a3d54d9e4b29a195bce78da2b04241e9717dcdc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
