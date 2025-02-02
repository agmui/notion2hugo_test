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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HXHUZZV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC51mJegCloVTbsT5FbhxhAHS1u32UQYNX5HEv1FCeztAiEAh%2FFT0QN83eHRkOX9NtlrEOTOntD318EFNOJp2sjXwY8qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhPHQlWmrBVmEMU9yrcAwWuZpHYp9YD4NsRBR4QtWeLZqrYdREDlbvtxuiCbPpZ99QPdKzair71TN8MOb%2B2Hdk1Pg9KVcP4z682jw2UnoJ%2FqnIgRK1ORq2Ebn%2FU%2BWxZPcOE2z41siz2zP8POsvPeFOtzRykUrYkaS5qyGhgEeuYlomC0qfiOzidmNS0Bfpjb1cLc7C14pwa0tlLe17sabF2Lv0CdSeYEwGCIvLfu%2FP5rUNC7CxhnVTIAJ2bSNrVNbyds35JqeaKIeqIIbEPYX2eTzz0XjF1pNj%2B1I3Ms4F8zoXcm5ver0qjSbKNlvNIsYgw%2FfMRvUd6DFOkL1z5vr7OTmtLuIe2avicEMZXuRn0Ms3snHPkJzpcaQz%2Br8gYCU%2Br1JZ6ZieJolg8Mscri13DBw872A0JxnJDzksz9dSUXHqk6x05YuaWmxXTX8RQgOeoC3WgcThU7Js19sRpjErEUBsB82yxOlK5BVkN%2FsCv71hcDMJaevlpa46aNX2HeYzs3w30p2DnYwhBMHAzFBkbXQINK5hcv8QXV%2FZudSJ8uafGI7wbfWTONKOqkNmYnDG3GW7MzWjTRTSGb7p76wfarytWOrgAlci73gC14jqZ%2FckIkUeXkjn79QGw7SnbdUPRi1zFljIDFgLNMPbi%2FrwGOqUBmz5v83Pl5k5LvJkiVV63TFxVGmVroEoCZ0byAjLL%2BilQLIupdnTl7BGvwoArxh01JI0Mp3yHj3VJY5zE45iNsA69E86tOsQ6mcB3FUT%2FHl9GgCyUiPe%2F7EdhyfAjk3ar3D6P%2BIJEYS9jQiPRN2fwPk%2Fpgl3%2Be2HrtHxYylykmFxbO8NbtwjuacnN3C%2B4Sv%2BGjxZeDVdsKhjvMDGb4XoG2yoB6w5r&X-Amz-Signature=7f94bdb211e9e2d9669f88e1be8d05ba3670a527691687af1b0ad3e9db6ffbd6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
