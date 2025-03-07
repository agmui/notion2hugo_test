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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KDEJV2%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCG27netaizVIpw6GfQFAbanRPdPIpb95q16u0uCrkIIwIhALk%2BJ2zNKotLNsHqy78tnwWgx8yexiQ3ZgXP7OnNDMglKv8DCEwQABoMNjM3NDIzMTgzODA1IgyZV%2FtAinkjPWcQQu8q3ANCUNqj9kVhMH1W46ndETBa20g%2BNW9ZPtWmclMlWd2kSmiTccleh43wiLxySnSmUZsHNpsPhX%2B1ofWlW5EFOqeky712eSwhokf2bRs9YzyaXbVQekYHMOttLuq0Sb4ocDOzjBXDcCZouf74bsm%2B4Fjc1h2kwBBRsJUMY8YQa55xxKJlWcN6QoVHvtkAeJFANAym4I31gFPxHc2V8LvTpo5fRgHkyJlv1ALicAOEyB4X0O5OAy3GGc%2BmqAAXUv71V8BMO1FgBxhWkIM1vQlbW6Qe511NWCiqTSgr4mGzHUoggXsiUM0FOEPK2Y0EPSI8WsScCFKmdMF0zK4Sgh66b%2BuaTVnUoXnozyWgOW8ar7dhKIk2B3D0pzVSka5UQNMlkZT%2Bmt%2FTicZnQAUlGCWFbyvoJmg160iwb%2FD7RXaTfCAA5VvgRCD7wqkBKGphYoeu5A%2FjkWWtzMBzDrc6z%2Fpy2t8GPoLA4kMJLxN602eW9UcjKIfZSX5yowfbFPXYnLp77nCFB601NFpMIUESh8SOcbCZExLnuNBg%2Fq4nrArxXPTvxBrOzEDIunJS6gySvdn3FEUe3yYPi%2FISspVCEYDiyWqZ5FZQNVvDGDMTlddwVOMo27XVkYDl0oNd37oybDDj%2F6y%2BBjqkASQfKiHCTgxtL8ea9mmyMiigS%2F500rE6aimSJEvR7sNFD1HT7%2FIvdx1p0G4xmesoT93PNys0Qk91SYx42qcnt1ls%2BhXOuThRUPkIUNv%2FA%2BFKmkTj4q%2FHCypEaibVrgAUuSJgLMTKCR5WrNglqDYL0DzqMYlggA3mBuqdSq7t8Par5v790kXnUDRLWMZ4K90RAHwto8VcOMTtRcoPGkHHn4IojYWM&X-Amz-Signature=313a8cea11b73dbcd38502ac7e8202bb44af8a2b9a4e3e122d243caa27958d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
