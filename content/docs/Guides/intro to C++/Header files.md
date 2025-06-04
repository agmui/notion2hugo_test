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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DVVUBM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCICEL4r3Z2Vhu%2BdKuRMsw%2FGKykbBhi3PfmzT21i%2FYtrabAiEAhoo%2FZQsReOshEiQ7Fde0sAwbDBsv40ymmmfyU71Bgngq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDN8JLepMZYQaz0MlGSrcA%2FrggSN5jAfB%2BYh90p1AAZxfYo5YKltvHQeR2SumpxX3eEMS3LHVQcfYfoWb%2BShQtlFBZihPetjLpoSww3dQnsl7ttE%2FX6ghPQgyR0JFqU6B9F%2FK7kDsar8OqB1HBD2TKrwK0JjqNE06pY%2FRDrnLhAU0b3UwFxymLHSD63RO%2BqFSPB4qDRPUMRuMRk4cuukxkCDnO39UMo250ep2OwuevX1Z1eaQQLwAmiOBulDkYGD5PjX2b4yecqQE2ZHj5gu40Wd8qd8HgS9%2Bk8vxfbm0I7ZA6mxwu5QNCSxAx9ErsHR0YbSVIXZ13VMc%2FYc5U0N69JoRRdSSD4EWanR%2FPRcYQqSI6zQqF2ptPC%2Bllk7toR27cm0zs%2BsRBn5YpSYTcYqUJLW0j1fzEhQET%2FWDPqDsJZTH2d3SDbYDUFFWjOjj7P4bNy3iFa1QiilJSVXUR9vuIwvmWdJdIQviXpgeNohA10ynbSAPjCPqAz3KMCOnCFsoBUjrsDd0fAo%2FNXx18kfNZQRu3uftZjHr7QR4qfZyWwF3Lpdaxt2FdHZtLwS%2Bu83%2BlrAQOq2cbPYer9nL7zznrqBUk9J9nD9vSUVMTE%2FX%2FLVP9JJ%2FSf4oAlKIj3N4vVkPLTtA%2FXMyRe6AGhd0MJiJ%2F8EGOqUBmryJtSIlpd365mnp5d0Aiclq9boRokHxmyRKMtzQSear%2F0AbbMLXAQK3Dz8Y3iC%2B%2BbFJXhsZXHkWLPZWn1ode%2FxSHuOkwd4MDv%2FwQW3X%2Bp%2FKNrLdRAdlD8YQoKDLcdTij051f59S2%2FXvcW7WfUnJNaBCoHQfOnTyKIqtKLP5ji3m3RKSjy9OPAIWvK%2F5QthVv%2BsAs7vY2nKjVQNJxyqODi1%2FWpZw&X-Amz-Signature=ce4f31a67a3a1b49ae54fb195523d4dcae63cc45e3e881fb59981f79c0d1a3d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
