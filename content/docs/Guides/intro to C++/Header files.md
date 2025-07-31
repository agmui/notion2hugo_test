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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363M7ZUH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGcl3AF%2FGbMxIwz%2Fjp7W0pw7wNazoD6AMMvmr8xtTgkwIgD6FvrHswmFLdgBThxPh2U2PsVnFOPZnDBLcjQjIyWm8qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsldE99AR2RG2HZmCrcA7JChxC8nq269N1OjdEHPccjzP8rdNI%2BuNUhsgZiOUuG7tnvpeufp6oDuW9a%2BfhsXcFLm1xwmpF6%2BlyNKhyz4BdLkMcjlNVnxtwQixIR%2FmLoTYpt3rmWDUEe0AUzpGSGtZpS9%2BhAuomOq%2BVXlQ9028Fz6BvXPMLIhplKVpnRi0ASQ3mPmnFyQRPAFoyr8nrLhiFTIDJJTwWBT8UPS%2BX6nrZhrIBjrkdbHicSooWq%2Bum7PoiHW3WztYE60ShfcyumD3hNCYpwKgRG8dOCFBmLcTNIlkMqzjorZkzJFU%2BmvtWvwhANVnNSAP1lfI%2B2xRfq9Axw6MjpH%2FpMw0sVlXann3%2BEuFqfoFHldRKDuSGIm2PIMG6YzolJbZ4OMcDZ2V16KAwsczUsDckv88XEVqBID%2FicrXhrmeVEfPNWZj3ZBOPkMMmnXKDYZsIiOguRfJnjgnHkIw1X%2BTENtFqh0m1GOVmPyXNTm2iP1V9h1pFD6K7nAQH6kcM8tvVRz3h4A%2FOM58OaFMflv1t0RovRNr5ZImV0n8fy91%2BHibvnZOdPMxEaTJA6f5rXMTFeTRVjp%2BXHxnjrb23FXLsACSbaJ%2F%2BuePmxtzOyIEx3XDJOpWpWZvo1Uz%2FKD%2FT8AfkZv8FKMIzqrcQGOqUBSk02hrL5yPPVY33CwyTPsmZfpc5ExWYBTr90ZWAcWmxV0Tfb2diVNc38azbSPuew2pzDSMbOG3kUGW9hxgTYSidp68W0Pc3v%2BezU6Qatj6gRq5d0vWCdECjgaVC2JBF9t65aO%2BeXeCtYHekM9xnVNTrUtj%2F%2BrcXooChuXlXQYLsQl4ZWmykQs8okPOkVTjBF827zmAjt%2FHws97nTt6HhHqbjoNh7&X-Amz-Signature=83059e3b18d1dc65c1be94b7fa0795d833ab8dea24aa095bbd02756a81f8a5e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
