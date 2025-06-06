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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YMC3VMU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCQUj%2BQfnBSTdGE79fICBpFiC9mPBJylVqV7KYlBLe5HgIgGpdRDDOyqBtD6n61rqriNtHaoHhoPKeKuitekK5Vdi8q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIUPEIqBBJ3PvzO%2B9yrcA7YzhwuP5jujhEM2P7ETwdtIgeiDSMfsljt4qDQpiKvCQKzmrhfRZ1TnxBrBMxPslBH1sTwkAgM1B2vUNLv8BrQuU%2Bn0yRymlcI%2BtrBGpKYsCLErb7xif43nKL2AeriDn5bRpVKT0ulF6cYCfFm0PNfB%2F%2BU2XTkmrQio5swu9keJhQ7n%2BSDkPV6qPwJWkJIleCOx%2FBx1Ipaue%2Fx9luFYSvNw1nqG3zoaROfpdBnQbWiSoB4DWS9K%2BujQGeqp%2BFewc6ELAqBmFFY8UPVeQluqtq3Qtgdb4raEKtzSq6bUVWXeeB3xSGhjcWl5dLQ6TKUKsrFZnMVrn6BXdSLsgbFtpahAHeRGmt%2FD6VpnhTqMibUSf01MV4NawUzsiSx6U6pXqzqU5ODpKzckGHbV%2Bt2PajthAa%2FBh3tlXUHQquM0gIaCIOeuxtxYxqKTfls0BEOSa%2FtzMys6JvwecpzlLUW8a6f2LHoV%2B7L3Rq%2FRnamtFGLm%2BEs5hK27dYcDb%2F4nR52ijNM4YOvLfXEaTo4jhXKfuMjsUpLrtYBvpSQnNUlrNFWB7wtM7o56RJBxQgtpKDm9nK8pfsCb4dXoQOWEcXfJgjLdvRKvnqJLmsN7j4qsi3iHt41vCaFdugDr4M1AMIubisIGOqUB%2FcHinxO3n9OBQuoQIjb2WwPWADmAgkvbDZREfgXjpIPdMZyQ2nOpeOEQCs1B%2BqVLmFX7XJDEHbemdOUOeLmOi31UMoOSeSVSPc%2BJ8hm26CFiVh0JVuxQhvVITySxQNNRUis%2FNVKZpnDKgyq3Ue0VIZWx6FZNCxxSGtHhEKCwof8tlEy2K7r90RYLCnOyKii1LWdt93o1Z0t8qMFZQ2eBxOl8aiTn&X-Amz-Signature=f3369a78c0199d69f779aaa16361e228dcff8f70e0f9340c4ea941c43f23deb1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
