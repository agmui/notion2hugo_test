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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2KCASO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGEUZ%2BBjvVuyzGqh5kbkdK8Cv7ztpk7W5GhStG0OBhxAiEAou0J1AUgPj5NDqgB7gasKNIYV7orQZ6EB6cO5Cdsmbgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPKDGxpbRzj9ypvzTyrcAxE2C3L5TQCpiui1EIUOBqWwpPX8TCQm9ZVnjySbhioo%2B7LKBKyNLAC88dSHndud07blw%2FinQQrFVrsXz0TANMpnjAOm5vlQz7X%2FwBeiDRhYvmj3iUciGlz1Xa3JOpHpBpXyc5e0GhlszttFu13suYl5TSrwMCUp%2B9SgY2ipe1lnrTGobYY5b8q53AWxQOzRVKuxDkVDl7DjV0yOn34Z51fT226DYATU7Lq3QR6Ax9esbK3oNnWjLup8dOFvCLhPsuaULU4J264Fp3ahbJDYLIsQt%2BfaBiP4AqaNjmbQk7vM1b%2FrnxIp5KmBxmYXcrxEaEnkTLxVlZxcxeg%2B12ZjAkMbmGC8pKAZKmaGZhLXAeOPhwGic1SYZXRl9sVzGlrPW04Jdax7jYRtCW95EdJXBcoj7epltS4f4U9UxUyWAeYfbBn9jQRUdu5wKdKPD54b614aMYH7xXAn5Sg3zxGq5wVBE5ZJAV%2BhCGrIFD0I7r9HsYRUYQV1lxbRCwD4RtAkROJaAs5237GxCXTux8TjXYCOOxhpdd0Aa4BSxj56UH5Srr61k3GlcgXR0GheamWut%2B9QPQDwWgmXDzTVZfbtmWTheASIEYiHiCi2yWN15f7QTtEm20DP2aNW7JN%2BMM6r0sEGOqUBmQ%2FUVn9R9DeEmVucD50YY5irRadK1%2BytVpGMDzD%2B6e2YOlFDKkkxUQeiuwvitcJNU2oZll6IjwHs42FcrO%2BcKcXuwAQM4CmhkCoxQIvQObr%2FI%2FDFwUdtbcADbVaWfaNsfv6zc1ivtyvMNrbh%2BzRC39DKCFlT3DusOtnNn1BQ86xtOZHzDjGeTGOGDcMrLwnaD3Pt8w1jHP4PRZup5O9rZr2P9LiL&X-Amz-Signature=f42ae3fc718c3bc20b866d24150bc83729b57dbcee7c8fd78045813d0dcdd493&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
