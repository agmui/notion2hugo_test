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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEH3VYN5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIER5yU9yA00wB%2FGHNKxn798yfu%2BUevrNyudkQB2VJKigAiEAuUjNVC9FNP%2FlNdCWBYKUP6DlTZqQFSuC03SaMilvdpYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPaBVSzgZ8BMO175yrcAwjHGMWKmZPMw5TFEuORR1oOSmStj9TS8HrTUr9gFrgqu9APVoSwYZgervMVkJz0ZUClibsgKvoV4J%2Fw1GyDRrGE7vuqQUTyYHVjmtbj9DvD6fP%2B3iV6JOF1D6zv1VJpzRNowHTTHBVR4yUe61qxeItzTr%2BVtTMaZyXXRBu5Ux1NwYN68Byv1aJ%2BaiTOhIUOyf%2BsjMJmfMoVImOdZJ0K0cd452m33rFKvGQ5D3H0O0cNkobPE7LHf6DMiAI2xsJJkODTC%2FbcRnDRnJLVV8ZR%2B3caKMEcrnWdG52R1HxVCjeDWSjHneCzSayFPMpnwwq8sUBuNR2EkhFpT40CfonjvlTQHEOc2MbIeB6CHNegH5Xd8yhTs01nc46O97j5nOpuTHZ2TxZeltAPYalrYXnSgYLxElTOOmkSIKiH3gxhwjCUgsDqmpelwzK1LRn0aAEojq50KWrM83yf0VfIJpJ2X8KzNSrSJW2cAi%2Fqqjlx3YyuBf3UVprja180UZm%2FxxZE7B4AHxTrHuVR%2F%2BZ5DTEqF20Oz8TIg2%2FTUFD29JjhGZuO%2BcdAUMYG5s%2FWU4qtMEseQjMdmkvqlZ1LhOu0AS38nctqXZk%2FqMkLhF53YFb%2F6%2FmlnjV%2B9Y06rBCN%2B5%2BtMNvtmsAGOqUBLPCG7VMr3CPLaN%2BErMfplI73TQgQmQRmGBfgdkzbQ6nMwLXttZB6zgG5So8geIr%2FxZe0w0q7K%2FNOgJWEwRBmvmy7V1hE%2FvDSIg3MRsORvbppIS5r0Uv4FsSq6dmAFzp476Z3YOJGMaroSzduLfv6zs8nQwkNdN%2BEoaaADM9Vhi44InP47jsL1sggAA9glWFy3q%2BwdmWWeahdq5sUJ%2BypSl2s0LJm&X-Amz-Signature=eaa7fa1df91575c3a39946b7cd28817d643283f7a2728641f9093b56cc00586d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
