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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZMFWM4E%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKmXm0kqIKEjYQZHoMeEHRcFzldEvxlWJGA6DPmIt60wIgBpuxUTMdZFCmHkwbkes9tRiRtsBf5NmKMjPgCaoDMHgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDLaPvcJv3GUU7I03wircA%2FFtElWcd3Ml7UHAyHEk1tGOw47X0jShSU%2BCY%2BDonGEBMOqzv%2BbIbTa9yYhrVd67QZbwwlfFdeMIdMJDHphJ%2FNIewLGnkQ7%2FKhIMQggE1L1Jb3S9ZZqGcyo6%2BzSrHWRnsKJ7ChwXX%2BcYi05mrpZLw3vNe4YPVS96Sc72XPcQI%2FkwhUBi3YNqAg9nHtva8x6BurHsht2g%2FxpDkD1VXBocFK0E%2FLo8%2BwDMR8KOVDuDEpnz9WuEzdz8sXKyZAVJhwt0babsjxOFoMRCBu4Wvi2GAojhuCjWFd76fWfwalHdboGIAqPCqq5HadDVqg%2FywSehgbJ%2FzPDHKitXBF1OYh6AuaPVKAvUpBQ0BNjOHmAon6E%2BCDYQuxdWXe%2B%2FPRacDZWXXaemc2UyPyH8wbkLrvKaEN1Qvdqg8OrhnksnkcT%2BTgshwv8K51ED4CaNk40plW4iAbVyQ79WAyRni2CJZ1C8TN8HSBsPRRE%2FKFMpnQz77%2BKCZjvQz%2FP3ScfvS1uPb58BEt7gaq%2BHGlNZs7g8uinpFeD1BuQEIEFrd9yfut%2BnJqZVlfwdys0RO5ZLLrfB4iRZo9VUxbWjHf4SfekK2hRWD3mDja6tVGrVYgiKxsc95j6AaDcY%2Fo2iW9elV28ZMNuYv78GOqUBUf85fTQaOXkmTNRsP0XDGKfwZ%2FdYSUlg7Oc9Nk2VmErKzaydI0piM4YnZAv1%2F7tkDgWvES9djWkz5TEtk4wt%2BGmtBNXfDn22pj77PWgRIv2%2BiH%2BVMArYuDPyWRtRTbaD30s2TnuuCaLBt6xF0lsqX8Zg6RqsdHog7652yyloK%2FpXeXuhlaUt6nh4MfsjkqHcBO1GgqVUDAf%2FmtuqL23NAMPWGjME&X-Amz-Signature=d3f9d658b7dd62ecf78f29a5fa2db95661751cbfaa556261dbfa0fd630d55a70&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
