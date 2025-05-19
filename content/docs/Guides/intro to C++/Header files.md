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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3L24CKW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7mgqEDYFW%2B0fxCzxnsgAcRojkQuYQp%2BP6L09o%2FBXrxAiEA1wAGd67w9HPXwoyIgDWKCxg10usstrK9CFqXo2yZ0FEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXURx%2BVkVafWXHKOSrcA%2F6Ql9h5kzT3O%2FY9e%2BEosoosHl%2FwU2uMDgtuKQpVMA3N1%2BUdSkh8gL4eFHgruLWdVY%2Fj4C8reuXlsmdWcbgwl2afXYOc6G9CUTAhbHJvPXCOo5NEYxj3yWQdcYmV%2B31k3%2BmAyrFOPy3tietBtgalneR7%2BuzqzV6RiBs6Hx%2FNIQ3B6vJTT2dlPMRH1x4cN3DYCJKC5jURUYc%2FC1izzJBPKDPslsjancUOrMoq2EjNX717xArb39%2BtRBaVqB7fkBbtPlPxumnO5%2Fgou5uqxcy02Z9k2THeGqAnw6O5OKSu37%2FKhwiZSnIb%2Bs2BvBqTScNIbxiuZTnZ1sGq6QGwlgHh1%2FSBbHjRciI7ob3%2BkUMUAU8lhkxObYecZSwYmzQbXWWaEBNeYs26cKgqTdVo110eDgrnuI3nWsG%2BZfHWvgLBwYLmV0%2FRlmNKweSimUXIKNpe4hkgX7K1vceoUriwhGxd%2BjH5%2FtM8tJFJ8SZaI5F1Zt1JmkbdotE6624OEiUZMV5832bdx54s94UPR4PTXqR%2BbqpeGTrjqTpD9ThwDZXnHCuSpDKHCq%2FnFWwvNGLiZV%2BqRV97pr33qvdiSk5WwphME3pMHQDFbN1TWyjvWffjijAjZS3e9iaFcU1YuAVbMLaBrMEGOqUBWee8uV2%2BaSt3WIezRblcn%2Bxs0YmEvuuiEoBcTMGJsknC73SYPemt26VvnoYkxIiKk23rPqSNtS4wwB3SMQSLyCDSnY%2BdnrIzX0oZMuwdDo%2FL%2BCBZH5oIG0nskQ9Yzi1QhJZ8%2FvFWco7C5nT0i6u1zUZoO22kUEXjfI8BRT0J5VHGSScBuKCDWEVvyFPtAEge6OaC%2B4w6BnfTJ6BxB5ll%2Fkg%2F7y61&X-Amz-Signature=5f613a246e255218ca7b61dcc4ceb6a94e1f62e82dd54e2bb1538aefd9588b78&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
