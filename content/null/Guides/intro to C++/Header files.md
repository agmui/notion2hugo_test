---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "null/Guides/intro to C++/Header files.md"
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U2BS374%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDEJXeXm1hta%2FLuQEplzU%2BlP%2FgwR16hdYIiWD5dvxq4bQIhAP8mQjhSvpYpOerPOGsupsm73hGH6%2BrrbhQwNGEMriiSKv8DCDcQABoMNjM3NDIzMTgzODA1Igzhp06LtJuW9z6mm7Eq3AMSwkOCIlwaiDPEhqaSHCm%2BEU57D7tMCtu5nGzemXOOfplsz6Oe%2FkcJ2scoryVkFcwHZJ%2BA2EdXb9MkJvh55q%2BFxg7TPs%2BFd%2FR1eugYXHqjieT0IB82lsmXyZcEJSm8cGAESeLUZcpBFNcLZ9q9lEvDWJhQ4KQ8mvlXCx7j%2BywicqoFmOfx3BrntXgRYIlzgd1Yo8arfGAHlHV%2FSaQycMmNQm5S%2Bk%2Frqu2FZTI6JazL%2FWsp4TQct1CSd79sHeNUVwtjwUJt7kxeogP2DHoB6ylkPc2Qen%2BcsuX2kTr4KIQurlkls8ZDRbJXaRTs73bR2E1rY3LlD9fkQttBSyk%2FMjlgtz6QclIK7deOhRZ1uP9G%2Fd48M%2BFxtCr6ucYvmcfuggpsyVfCys5FXoPkYObluVMUoqWlMyQUz1KzYCsKrVbRX%2Bq8%2F4ZSo6KU9SME%2F2zusfEkGbzsiBnq3v3OcD09tzMQpiwJjRPL69Q4lKBH%2B9r%2BvNw8ei59CiHT1wGqdZZAqN9FtHXXorRRSljOC681Kv1PC%2FwOWvMGS5gq%2BSIUGH4bsW2oj0m9ia0QevE3t84g06djAJKeBgyS4JrUJzVNmpk2%2BcuXpIqohj1yxiB4yNgCYNAbUE3Vn%2BqYzfVgfjCkloq9BjqkAYNwqyQevjQcbyUWSJ4%2By3iC%2BDLHxc3tdxjmsSsmIsNasxXBrhrCmwoE3dvkKK5dCcpV3C%2F5JVMYMA%2Ff13PFRXQfk%2BInxht8MEZx%2F831DstYoYA41r122KtbWU3ocZS7KENVSXRCFo5WjOPiN9Qls1NoQTVt%2Fq%2FoWaNJ3fWduxHuPHfIisjfW4ZkmG6EszndmS9p2HjBeK47%2Bg%2FSDpaO05ZHYj2a&X-Amz-Signature=409c4d15cd0bedfcf376b818178fb008a570588c373cb9774c832b5c2f880a34&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
