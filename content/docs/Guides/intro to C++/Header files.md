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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDJU3XTP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH17Os5o02dPELhBL32fM56SGimDqFcKhqYRmSvbnv%2F7AiAb11GoEhFRdR244LeFioRYzVsJMXFjibzxmYK%2FyOWdSSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMQE8Oaj6lJBMZmJXJKtwDHV1diaP%2BzZFXWarsSK0RB65XqPO%2BGGvzJE5NVKEggcxgw3H9ZLtNQbu9%2BCKSBLxKtfYACt1moFxZ4nKuSAP37vE4LReugXMxtYOikOnc2kMo5cMHNMaTIBXM3En%2B7atKm1kEutkxDLY0zwskLOzUwfp1PSRDP3KUUupsm96RWfYLYaESfMdMkAkhoq1A%2F4VvVUGIwwNgIGN6XR35Y%2BKxgJcygiko9Pl0pKk6uA%2FqYUOi8KOI08qdHx0bmxFd6VbifMPf7wrHg2Vl1kuNWTQfKsnervGL29%2Bjb5vZ25cWI2En9QL%2BXWOUqUg5PmfufgyFBg1gVJ87ikRKrgirZYLwMm0MX%2BxAvKCbtk5oidH%2BL%2F7roBxhnT1R%2BH37swa0n649ZiHJiaVC94IRZkxroojiwbQCcnHJvRGJLABBq8Unz6B6zeeDobUyId1I%2B7XG68nTMWX0UWNpJyTJSXz%2B3DP12cf1fXbA2%2Biox%2BNEuEO98MyyngFyWJBL7bSRFDV63ZrVax4fhE9YYpbsKFT7UK4E34Y%2FTWC6w5HrfXAf60HxZoQ54UtFFUtJJiQEAWiy%2BpFgzEqgsTUq6VdP16vQfIER48E5P8JiQp%2FDwevjiK00eGQetFcwb6o5b38wi6Uw1sHnwAY6pgH%2BoIOs0Ld9RZmbSH657dmlhdvlk32khcNkSsbN2XaRLZlR1HJcE56ljXnom4RVaES8EuOCDeXKmu4qOcrA8%2F2m22FtzYNMXI%2F%2FrQ6uY%2FGM1OMHPHI1AkAs4JTabYFDk8FSoIIHEae9mVqOpOta%2FR02Avh5jOCwFOtO5DeNPGPjTn6U8zSh%2FNnjPEAIvmaPKQWC4NVL1dK4VWzQG6qP%2FgBoZPCfNz7N&X-Amz-Signature=30a4b1330eabacb8215565cf0a336a6dd9b2ec15f37cfc09f648cef8f11675ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
