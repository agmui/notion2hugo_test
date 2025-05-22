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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TA5WVXQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCySj%2FI7Lb5EBc8zkW3OlNJVkWx3J%2BqXtmE9U2xlvl%2B1AIhAOYMXIbQ%2Fb5C3w6WSVRxZusoYo6KqjnjHM%2B3HXhbAbSEKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRYamN5bulq0XlLAAq3AM9D6LOBsz1MB0mPxqHf2Q7kZO%2B15ekb0uctlp2%2FUeOKgmwwuXjVymJfX0GIDMvMQU4ZdonJFMm1Fagoyg1Pr2n1qWdNmmfDl8Luyd4ypTRhlqcnSIFcRdHZB0FuxJsaoYm2RAjkVWClCN81hXzoTjFjtbCvinMFmuVs2lf4SaOPXNuD4pJmInz17Jbaeu1gzXu%2Bc0Ni%2BC9ue2yB5qZNsDMppRiL3d8mSCfL53ozWDKuOcv6jSAU2VUfSMERpokyqFj9RB4Fjxmk0xxb%2Bqzs06R90oLCrbkyXB11ed8GRrWvqo0kE5nTeTpsm6N9eMwyLwO9H1cWqrrMCZa%2FLf82QaTGePs2JJW0cCkrjMcsHvkUJ3eAVjO8Mq079Xwxl1jwu9PIXe3OjimoHa9jrG18LPzHgCry3g70WMF5BnzVxEH97aBmf13lsBFG5mSwG4ZvrcRjN6tYXRJ7OkeRV4j2oIFx8S4QEAYQYtZhLRc7m3NVAX%2FEoDacm29Yj%2BBSLC%2F7dG1whraGqod0er%2BLsmsEwbjcnsN0jO1HD2FTPp7o2O9tmFZ0Dh6q7wV%2FlaNqIrzRTlyBqmBHvT11jXzsaIpuyY615NfmQcuLqRPLpMBilFPOj1bVG7oE4Z%2Bvrch0jCnqr7BBjqkAT0LsnfI3NKW6f9GRIkBqSSBZRromfNX5D64n6iCZQAYqSOTPQpo3NY%2B%2FlboxgBUFRBEal5%2FZEGeaHnaiGWiwWU3tdx2AJ9hNvDHABANIHOVpMFyna%2BVJkzNH8HFz8Ms0aPtIzJHtJMRNScp8e2594xphkbp%2FbPGza6Cm3WLfA2E%2Bn5ip66zs5wFcMXnhk6LUyB6YXXLPaCi3SBwD8QipPiExfC9&X-Amz-Signature=6b44b3a2d3d92cc71ee1c9a410381497bfebee0914c5c3965940a1028cb131b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
