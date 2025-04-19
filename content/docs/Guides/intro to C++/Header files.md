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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4LBLX7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDbcLRvGaFGDtXgRdL0UjlWApgn%2FMuBBcjbXnid1N2dGQIhAN9ZTJNeD83FSKaAsA8EdGm2rcEQ%2B7ygKn0ocoky7GUcKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztaQ1tZAw5wfsXq%2FAq3AOsGQ0N1MUCPVWLf%2FNEqYbHkjOtBLOwqgMM6bvBBxSbhf46aJvmcz8XnLNB%2BWfbkAodvBXmsVcziETqnS0zk5IGiBAMvaDEjo6ODEuobg2LtuncaD2uAJNS2Y%2BBt3DUzyEPmEho8VsapdZgUlccC%2FwhbMDYWZg3nM3EJhAcViedLZhMWXidUbDOoZs3osQDSB01adgGXwLP%2FRMSQdbTTJuZsH3sAV8ERB4xLQeKH%2FTvzOCa97YeLiW4pBDOJH2NWsnpIB5vFMoceGYX%2BSTIzA4wbQ6Fw5sNs7SRoByIHqu1m3VITyTmIEgTTJgPqXXQ7mhkz9pjgLh50rSEgLMRqIOpqqjtGB1%2B0ViOj33RNLhajqty9im2uh0dYeVOIOJ%2FfUcXFaHeUf%2BCOZO8pmI75KXYXc1sEhv8kwRiJXnsWMOlasl8PFmpdM87l49%2BqDahozTw14aPP6xx2D18TZrWQccb61FtNANveh2Q9JYSOtaLzBtfg0A4MgrBhxTYGtcGAXnt2opVHDBnzLqzPXerBTVp8SrwaYcM32A5my3eZGSVphttliDYhM0fkVq80EOs14ZKY04COopVQd9FtnQdcT2mR0xkWCBbvHKXWJ5EB3OiXPRh13dv%2FU2F8ODu9DDOm47ABjqkAVs1fFe6ehtR8WXxWjx6PRekisUYRZR%2F8yDa9vZ4FG0vG6dFWHOb4gnQdBYqm3BtDqPHSWRxwseQX6QJtNX4atPgDmBVe6jNgyYsiv%2F%2BggfVeospeIxlN1vsNQ5DMCmDBpSYVMRyK5k3u1SVO%2BuBA6DXK16tw6OsgbWfTJb15dXUH1%2Fsi2yetc6tSjNpifWjvtWq%2Brdawd%2BJt%2BQNzMRXFI6Er7Y2&X-Amz-Signature=d4440183cb42867b49442f4d2e03f18947230e86718dd16c77f0fe613248de3b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
