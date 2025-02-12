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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVA332RE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM77jC8y%2BhxzCq2oSx4tcDv5Tc6utGXr%2BZGAuJrqOGxgIgBr3h2DUVBdMBOenvWKLFm%2BlgRe%2FPpbq61H2AM4YA%2B4cqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeoyFROq5CPvWOfMircA0aO9p7GrmfEb%2FpYujYoyP7Jf85po3Ft4lbQg8ne%2F5XqZWRAzRWaiJKBKty2Rq%2FlDz3tSsJZSQcCE6FzcDo87uGm%2FrmZsu%2B8GzloxmzTDAJi%2Bmw7%2F5LPZsVcehvBCJUEhrXSNUB75sRSkc%2F86TVQaRWp0heiH2UENXEFCjRQyBanAGZeeXBvb34hK5pIYx7FChKk2sVRu0RIxoRrp2xbq3dHYcaFdJS29A9WJGAWpMo4ZVObssGSv6XfV1FPuQzzWhMO2BTbz6okkiXpbJQFB6F13MJcabFUqHSrtRgirj8DvE13jYVIdHGphRrcKNXVdhhu2NI868H6Nqo7JbOeI0SNlx3%2BktrS%2BRu0jk53EyG0GkSUYxp0c10Jb36WstY4ATlQasg3MdDc3cQmVuYd%2FSn11vvXtejWtZgEu7YpXj2Igf3CG7aSI%2FAtrpiZbpGwvnHwyHIVJ1VJtBxWX4CfoxMAPIg0fBCsWq1R5oFBXGXBMP3ZuSOMhU%2BnfrPPD81TNGqIuxLcE9tX4XmgK7uMU%2B3Mci5P3bUteSi7FFRhdU2AjWomCNJOn1hO7Fa5zJe59x3FXFwxveqE55PwksDVH7%2FDJZjk2jjBcL0iUvkqOAjF0%2B9TdPDgaNLUPXBuMMepsr0GOqUBvXCacxlLwFAbdUaTabjPxiOslQUVHirV90SxX%2F5GRLATLFcvG4i%2BjsppvAhLpIYW87mUGaIVFrDtIdy4BLorplefV7szr4%2FfwNMIF9dlojSROnDwMbHn5PJcaId8DH9%2BiTCIu4LItmmykM8%2BvPMFJ4Z2NnrhTIIG%2BOPvO%2BrmLmQCtFMBA9u9jNB7lZ6MpTlBh8YuIChACw0pG3cHAXqcStvMaadJ&X-Amz-Signature=b376ca1b450c6231fe44e0268fa3bce95c9c357ec0d29200a2f94c3cebacb627&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
