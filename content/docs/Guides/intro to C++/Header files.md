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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CRUK63A%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGQ3EaWC2Rpl7MN%2Bfi0YbcF1d3aTJv%2BooRdgUxBt%2F%2Bp4AiEAriHQBvnLc0GYr02UrWtVPq1tAnIlU%2F4VZ2ag5MiKLcMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPcXowAUga8EHNpzHSrcA1ygzc2Uo0QIGRnvFVmTD2IriD4BI8r8f0SmM%2F%2Fe5Sz0UxWWXcLkw%2F8xWSqoGeyXgsRlg6DYkVEXBQ3AJhpCvt%2Br%2B7n5Colz%2FkuD7QA0pNqhuoKH%2BCQcJNt9mexN9XWjLwBnyYG%2FD4vLuMwqokmQB%2FmfqHB79kyXKy8r45K8fLgIzyNPamBuhCOd76u1A%2Fc6Qr2lADG578Vwzilr3LSGf0pB78ZlTh1EuIYly3%2Fwq0kCUpLab6h%2FDbQ2p0aqFJq5lCgaTajWBQS2GbZsdpskcc7BSY7iqALzMAXzu%2BaFwK%2FaEECfThsVGoEP0tGknPCyGAgTLMmd3ykA3bRVkaZsqZgM8lxydoQUNIVjvDKQXal73f8HWJw%2BajAElsvhaq6PFncg%2BNEMcO%2Bhy8MEaCQm6yobV98FIaSeviHpIFStWY1p93jysrB6NZVOsH1cltqKD4AiDBczOLbKu7MvC1zFzE1jcAibRjBKBxrftCsnXVJ2RRm1O8jX2EHXtZRwS4GTf5XdcUklNWsl2Hq%2Bw8zbKnLLeV4IiTNLlnpurwwmaV949D7Xz7d1VT89%2FuHc%2BVDaxCkRSyKNUDkBihkiI%2Brfb4FuKgDNrMUQTjyzBJVZ3OGD41hRvjK7czuRwsRTMP7qzsQGOqUBDQgywqDbWlx3fkvqokIA9dH5mbYZDV5ns8328zLQX8f1k1Fv4BqHJDcxFOUB0I97dYnEcOFovx3SVZpBm2NARwBlMDPDeYst4unKXa015mKg0vor90TYKFaxCG8HsVRmSvnCHST7Mg%2Fs5MIPFv6eET%2BgdRYKidXXKncUWZWTmNbJVpjaMHWnZ17qHes1Uo4bAoCsqWkzm%2B3Wk4cgeDM%2BLqJQcHQm&X-Amz-Signature=881482a2c33fd30bf69d4d1b3743fb92e7d8b72cee158bbb0419156e7cb940dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
