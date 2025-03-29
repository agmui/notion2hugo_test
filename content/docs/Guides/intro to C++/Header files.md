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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVBOGWS6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDHsr5R3Yrdha1wFHh%2F7CwbjSvtgFbTUr6KDBGxWNFh%2BQIgV0Mb5xTP7p2ei1%2F%2Bo00J94sYu825T2hfKJU63%2BrQ5KYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDC3zvFwgCo9HiPHr5yrcAx%2BLK90nEUSDdE3Qos5T2m0MRwbg%2BZua0oICIKm%2BZqCw0MbMOT4lB%2FCjamXGO57PX34YxzruxXqcSwqJ3%2BjjBBVQv72SnccKr5xbMClzJ3hPjiSJ0%2FPMXDazlHEBqrtCgju4ckbhcgdGa6U%2FbYtxudW8DaFXJMXVs6rea2CBzIJ0dAoB%2FvLSDcyViqzj2DqNd0AVTOyjMFdtf9jEt7%2B1ZEof5Fp76jt2GUBQ5gh6ub1a5a0GtlHDd32nDktLRZj1YlJ22hbFccg%2FOrMySlS%2BCPKlSlK1SiesetAecHB%2FTPr4v4FA0roeRuFYO5RIJP37OLWIYbL3xaeXiHPbxSjYD3QcnP%2F4U3jeEZuKW77s6yTlICZvwV9sfNTEtJzPfE5%2BEEVeV%2FL%2B6ambjGrkRGYC%2FgTipB0OHslp1yiDOEHAtNJCs6YaJvrmWX2XmT%2B%2F%2BX22satBEEYwIHlv6m40M%2BkYHpmF834GuQs3we4Nv7OZdOcY4EAp1bBfaIGfeIRvDKppy5OS7rorRJx5ZqNOQU5Epsrj5hUVDRJ77SuwghR82ROampbp%2BNUI2o5CMrAvgKUbC5tl%2ByO6MjfyJloNWsPhbkf3g3DRi5oIy56O8IibOKPBmM8LvsqKyUluJLQNMJPfnL8GOqUBG74W%2BmsQqSX21KLzWkSe5ub1E56YoYB1PsWWHYUP7qFGXM17WRkp9UFegPYINN1QYwBiasisKCjJ6zAt4oW%2BatebcQ1dF1QBjGwsJqVkbOtZHlAUjeRbqnoP6S4Faq9Y8EPf4etAAdthxHMKGFxwQ5rfTUSXHnaxYvbj310%2FzRNR9u0sFrriE0X1KCfk0758sw%2FJ3AEuKfgY1PpIIp%2Fz43fil4hc&X-Amz-Signature=ce3897918c2e8d8e6e30b8526b643ac3f666fd22ebddbb68144304d4a9ffb082&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
