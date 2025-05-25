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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6XGI7O%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDLXC5fIxqUTXHr0vdM59G%2BljUruHIt9b0le7f1IkhnAwIgGTvFbA01tDvW%2FcFZDXmYfooou1tZIwGJS%2F3gWba6Ixgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDJ8a3MBqcAkFnFviYSrcA%2F6sF7FcCFRjF%2FLKCb%2BkTT9rfFbMVAkeFo2Ruboc%2BpSjbP0PGwRaVLtXy5%2FoyLIiaWCt9N%2BjM7EGDv7wVIy104hbr%2FLkvz6oKDz4dhTMHvkMssqbYArRmXzA063XYg%2Bmltr3ni%2BUhnNPRSwIZE5DCPdDlb4c8AS%2FoPFaCBqPQIHbawm14GnEqcK6VPImWtRibBYxxaglEOZ6EnfU146Gn6ZNbsU6N8l%2Fm4ERUUM5l9rSZYoFVpW8tjkHOtec%2BIGlbq4cp1Vgcuml1iEW3BAw1EhJEI7PSYGPFbpu1gIHwpSgnmF0lucDcJZsAjPKwGgqBFlnPIVbFo%2Bf83AeLNJJlGMtMG5k%2BUdfoaNLwlZK9rZL43PGi6VrTObx2lFuwjEcJwjERD8IQedwiQZhHkzd9NEKFsMCffQUjfkMoMUFi%2FxbQqhLNvGJ4TnxGCFx8teNLrjwjRLNTSEEuKgl6LRcUDB6N69t0Vz7Dl%2Fo83OHwAnKZhK10oeISfrO7X7V%2FfzTINwu1l3typxR7nPdqBjD%2BuZHeAau0vNUl3LXvAyxjYGiTgNYSvUvOxtq2kVmUWTcQLmVAfINlDEjDLHbRP%2BUNud0KYH1GjudQQkR3gSAioGU3QfilzNVos0hwWW%2FMI%2B5ysEGOqUBLikNa7DiTlXJVlQUY3pMFSfFD%2F%2FlmWcbTV9LdUtIjzxRVyMo0sKjAke52M04e%2By%2FpqIG1XN%2FydRdXYbKqssBzyEg62dUHU%2Fd476k%2F8SvW24QEKbjXuYyX4WfKvC0jUcrmy7hBYabF36iBbzmQdTLgGINQf524DHrrG9VKsQ1vOSMBcsOgijr6tg19HBZysjum22b2aP2SZst6XyUd1%2BzPznExTiD&X-Amz-Signature=4e3133051a85398af520fae58a2d3e0e9ed17e87581d71330cf51e5ae192bb1b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
