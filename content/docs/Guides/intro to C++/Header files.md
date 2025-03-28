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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCCQIMU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDM3N3k%2BmGPzN9Aepjgm34p0F4xpFJJvt0Zn5v%2BT89OJAiAshzD6s9%2BYcCJaMVc3GdwRb%2FswdTCqt%2FVPzMFPe3DnByr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMZvjIFVtWpljodPBFKtwDEpjlw0Ao6pZ3B%2BZuELbYj01a3vtcJC8zCyOzBtFa84lO2fqHgj3HnAsZHA%2BtbkMrHprXqq7H6d70rBAOo%2Bjj%2BUGXqCPbYPAxQtDpFthYtUmeHhexiIFe%2Fp9MeMMrH73H9lYPavlfEPB7%2B0vlhKxIristzbbCFAiMiE5ZCS0CBnksjDeerOzYW%2F10d6bMk%2FkjdW2eMlM3TQl1pbjzkaBQiQM%2FPn2Xx5OiGz6ZCeSdBfUYRZ9V8isdgSbzoGlLvAwWBbeWFdVV56VF9DcfTcpFPGrfZdm7J4i0IM5rtrcS9UGkdJQi4G6hpJ9QYUyHrNyE5aGauuSpeg7mdzted4w3T4YkJ9n31T4YnsZhWB2o3Cq8yS9T74SEKiaoy1cRJ8%2FfCBc1K10yKwmFmX4SXiL2NcGXX%2BxBhh84Us2Yw2qgVxHFUTWZhRFeR1QEmg0NjDLnIcV9oXECnS5E%2FP%2B84Kfxob6KSH59f00A0b7P2Cx5REFguE5wdPPOdsD98vVDf5NQfSLhOCC%2F6IJFDo9T6S3RvCVPHDG1bs0tAaJo3ByQsA8mrTUg8nYyC09z10WmRdjWfmZ8XA1MeUI8O8baXKHoe%2BkxsCkwCrWc24OJZBQsu5Dlf9MeEG%2FNSCHYByowqrGavwY6pgE0sekfvoE8Twzi7WPbgnn7cWQ64V8gumiHFGMqVvYTS93n5pMHbXSNPzzljQmVsS7ht89a62jf1CIxdZ8lmoVyq89lLK5FEBcXHZ7rmEnJt0Q2cuBsavGhBsJiTjPLLvrQwx26Ckb5M0wbLYIaaMsHERade97NGiV%2FPktP47glFF01f03g1OnrLEkhHQheMS8RaLlFqscqSstZejMnl6Sddb%2B9DxVU&X-Amz-Signature=cb3a16627eb8309133d26d5a09e1f60db625fbe8656538bd2261a4dab2607087&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
