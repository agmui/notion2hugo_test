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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMZTMHN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGo4k4bg1%2BdMAORwCfwYlRVMlVwY%2BdmkB3z2mC9APlS5AiEAigwel%2FFu9L0Mb4aNSw1xBMGvaARRYheRF3e0ay0flLQqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRD228Rqw7EEXNFcircA7hEUpWChIc%2FcjDtySzYCD5dL95mgMzY%2FBmGNN6a8zeQYDFbJclwWDw5k%2FnGxA8u4Gi2ZIkAqhw7VTL5pSkz%2B%2BoAMh%2BHJcJxEFrHRpEEuZp0Xk8tlbG9JcAeq0Ikmr1JqRCdCdE3Zc1F50cB6KRkNU0%2FEedefUhFRBXk1DdH4RvPJc1kx55lgnWGw%2BSqbR74tHqa5tXPkE2anrofjqLBMYWKLqOzh%2BB%2FK6mUJbCdNe4c0qscZycfj%2F%2BkE8knhBhAFPbrBPlD1RX2nieBgW43VSvRbZf2luy7xvXP%2BzuBNKoX4NBBlgoi3vahNrHH12tmubMthADEoZVotuVY%2BeSyaVRJrrBnfPffmTbIolyGOjoK32lmjn61tynvPLfpup7bRHMXBS5tbrkODHuj22g%2BuRPwfMUn%2BDwd8ReRaRG1foBc2kJjj7yaAey%2FdYTov%2F6g4JktSs6sPWVM937DlKR1DFddFGNpLbJkdqvHRHRZNeSQKLsjNjJUpibGNd39m7VbKmdO53NDb%2BIdL2LhpXSCXd5EPed8hIl36o0%2B9Qqu%2FBQIaMpo%2FsDouwZ18mH0Dw7NtbHMukNe1VLavLuwf1CmQMidBti0Hc0MAiQhSYCH9seO9TmQ0OLM%2FS5JJ3PyMJSOib8GOqUByl2vv0d6kXWDeYkq%2FaPQq%2BWn9UwTLJ0wyeFj%2BKZl%2BH1CCoJAJjpZt4CUzYzDoOCJNk4wE0qjal0p4zna7AAxFfcXWCrwsibRcc%2FM8EWTqlHnquP3%2FysfhpmNgm9CPN9ZBMAv0FcuY1KnGQ9RhzksQC%2F5LZx4BovBKJ30NqG%2BKKuE8pvXsUA%2BTBhL4ztfbdG6UrFrSegxGTkNQzl99EdhO%2FC7c9s8&X-Amz-Signature=671ab1c28f48bdd7281bc3713a1498cf200806783ee78876b7aac9cc6c41fc9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
