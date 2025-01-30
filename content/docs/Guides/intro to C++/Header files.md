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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KHBF43M%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp6uY5LnaC%2BOo2Cj48IUnIa0aWx%2B7WzHCVDB%2BEGu%2B%2BXwIgX0Q6E8jtYfhMNSnt3rrxOSHFVSckAONAKoT1VlK6TtAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4pevBDl5yI8of5uircAyHiQWpyiuOA71ms6Cihx6MU4pu9JADzAdBewhWkNZCl2ZqsXonKkmXmliZECkLVUwotPVV3GN61jM7Ld89QLsbhRDM291LOO8wETWg4sGC4oF9z7OuLJNOzU%2BmpGMX8OW8atNouZ030ERbRYpwUwFgrK%2BBqfgvutWv9CAYKz%2FwJJ9vfFqDp8NrNYLu%2BfgJw1Q0SdkPK%2B1os2P89LsOG%2BdgFG5eLrexKX3I3q%2FLxLzZ%2B5uiERTZMIVOPTGDwVrE4LNJKXdVDUbiXdXhcb99%2FTTtYDXP9YmUGe26GAhICK4io%2F8tqunkORJz3GkF%2FqjS0k%2BrBpX%2FFgi34Bd5idUr2Sqpa%2FmU%2FZ%2B%2Fo5mKCx3JklmZ1%2FJslGAFaaZif8LB4c51z%2FlJ9iKOAeSdS4yUbeCd4zkcOO82eoSCECYeJrGT0okhgpiMjmpdn8A0I9wF2X2npAhNspefTIC3jxHf%2FNhpzfYCKjCofdg%2B8B5FpWRK7AnyvhmXQyhmynWb8VcKWMppgvo0h6qvhBbb8w1YwamC0Wrpk%2B4YG8aLkSW9RSWI9x2Ekt4XsMP5gRsluCFvgFh3QzUZNLdmG4fjsZZZOawQr1mjBXrsFfUXi%2Bd38PgABcJKftdcc3%2BsMO0PKPyWsMJbg7bwGOqUBdxPH4UlGXJe64bqlB%2Fi0k1Gby9h55m4BBkbjec%2BOfXpm9n%2ByJn4lC4pWBsyqG8c8%2FamfK0COwA3QhMFvT3lV9cXR18tuPHKpR9LIXDNS%2BNa3hk6HbIaWjylijt%2FQX8bwGKhraeEUVMAYrwSu1bKgibm4Os%2F93lnB3DieST8%2FJDq0Ufo5HC%2B1%2BWy40ZfKhmOegVNC5vmdDUAelYxJATvbeHeTdtPK&X-Amz-Signature=3814ace3726aec126318f4bc11d1fc1bb3072f1db98ece94d2b87ef63c44374f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
