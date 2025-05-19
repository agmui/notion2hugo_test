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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DB3SFBH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRGbdtWKch4s490pP5jQmXqYZNOIz%2B%2B3%2Fl5N%2BPDtBTJAiEAjJDLQU1QNuxLm68nMKwd4X64vaSZVABrLiGO3Ilqd44qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIauCpBLZeAdfxRQkyrcA8OJ5xHICCbtwXgIU3ujJNZE%2BqV3eFrzgYRomIGSAu5c3%2B4BN9VsugcnCX4TffZ8yBZP0qTgDnRJKCmRczUn4F86ZgJp9E7jU5Qqm2IHY8lEQaxDzshJ768tiSoYr%2BIBpblQMSeM50BrULdGpK914JuaGjDQl5O%2FR7To0Nh3hyEIkdg1cMj7Y6lW49G1q%2BEmYB%2BbzC5qq%2FrcmMWpsdsHUVC0087%2FWZ2QNzQFUSwArn55Iwq5lNqMyzKnMSif7PUDwlxPpp84wq1hLWRvYqoc%2F3%2FtyvsxwVobtsZpV%2BLotpboedU28Y%2BEDV2G9HqIUv16dtvB%2FTrQCN9%2BnplFvzwPMkHU%2BKuJ6k0DLsMcSKMVm3JKWHR1NvT3rS1oCZOI3C5jFO5k8gVu6n6JFYd621vj0HQ8jmFSO82pPaGvGzgYLjlf3w3myUGk4pWQF4j%2F3C4hT3twgQ%2FjFVU2pVSCkso8uHS%2Fp5RYFHf0lY0MQXNIftzAUutmDcc%2F0AZdY6CxfrrvDiVNyeQBce8lZGjOxzfNQ%2F7vd0jBj%2BkGWI502SWTOKadBlKLYf5oUlJL0%2BbzJFsksdpzqCWFTvBtdjqUM2KAAEvcr%2FOej%2BSCxm8jo%2FEonBOFhpoRpvZM6nCrPsKEMPzhrcEGOqUBxFgAro99l7YBhQqNtoOZztUKknhpHIfvxO6a4iP9wg2sbUMEce7hkWa9SDPKJaNSC1B0Kpzz5S%2BIucln%2FqbtpLO1dRawhrr%2Bs%2FJJOCeeMUP%2BJPnJ7IlQjIoss5a79MWZLa1GmaAuh1pSGwcf3tXYlFsJTSjTIzF%2FgcDKxE4wa2PP2VsQz7J2M5ymmh2Aw%2FsdpoiCogGgA%2BlKHcDioQ8q9dvhMujy&X-Amz-Signature=4a32b927d4354091ff461c1cfd084250877a5053401e6542c946056b83fef571&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
