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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFQY7XOR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRSbNX%2Fh5v8kQwpnBEOskEztGxD904YKnta7QWNVFKAQIgRYdcptVqzcYuX4SSJs4mlUFTklVpa67RH1ITlcve2g8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDDF4VT4XcMtYChTyTSrcAwCpucaTojO7Qvep0I4PhcZ0e0Up%2FA0gtoO4LrFz%2B27OfQpM9JSYoyaH4fQWegwP%2Fx%2BzKD%2FR6G6hl1a2WfaDXfrRT9EXg0PaPN4XBZG4QyTPoawC4mnkoaPou1Ybnh4LzkXh2QZAal4i4Gr5cRuzhJrl0uJUHA18zuZ1i1xijWXiVlbE9b0XEa8NC1AAOeKhIMWDBhIjEM%2Ff9nPNlq6sfeIuRgeFD9TXQvTx0o%2BdRn2GAzSBIB4KKPF2sUz7Aw%2Fl2p8%2FH8EyeEgdOtkJ5rAIWblf%2BpfTl7EXD5WmK4gNiJwS7uFiKbpuwyPiPRM1NXMi2s8PfeLghoKPSAUkwYALpEWln3rZJXn1vQGmAxahq1oPAeIJ9lQcIkobwkbnNZJASMW7scf7Zy%2BDhQc%2BYs523xxDCZHJGbM46ShU0yfePP%2BQAg20ggn5TR2RPYS%2F7eUbIZFb%2BEeOTpKDYGHLJxGQE4%2BeSDSPBqFnljoKCs6tppzxSCc3hJpCtnW0hwW%2BAP1Qm9HcIKBhXKiy%2FoMTGc532lDajapuJBb%2BeIOsAt0NrH0CGCrGNqMp7m3%2FVUbe%2FrgxqSTl9RSnSzjUUmnOfsh8EF7iuYJ86s2xSD5QaWPtFod7BzF8Wmby8QPWpauvMI%2Fkir8GOqUBtzQ9oS9FuO5XrqItbA60sH9dNn%2FM7%2Fcu4UVhYxvtRLD%2BvrkjRe0ad2Otmoef4H7qGfxYzvTJ6MdvBNMGUVCl8%2FYjCdmkvLNSAjZyBXIttDlXsCo2RiFCwmiDx6J40Uz04lgnCV2mMUg4iLfnoKN9tLYaIesuZZ2ujSW2iJyg2lHeyWblqWeBciT8w5F8F9KG5GknZB%2BGveXfIbehBFHefQELGSAn&X-Amz-Signature=a5099c95c3736671eece7fcc3c128c393592575a561cceb84665ee5a68024029&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
