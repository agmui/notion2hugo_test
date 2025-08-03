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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z477VH76%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEV0R4UNpBHn3eTD76Uxg25MJoWQvgw%2BAkGxLivoGzSTAiEAtt8sIeMeIEuX8k5Qtkl05rw94hGs7qkPimElFpF7YK0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDMNAh8%2BEbORr3d9psCrcA2%2BCxbV8L%2BBZc6Ry96E%2FwsTRyH7YxUoWBm0d%2BGG5mDW0k7H3RWXwtq14BN%2BINZVJJyo9TZFrqMibYRUgV5jbNPmkzD1uKq4rqyaJMMZr9Y%2FWJHWHxvxOChcuGQW9d8zCid%2BRhC5lrbKWCC0FZjkaBn1HdQxdx2WUJHMc0pNcL1oYghIf9xA5UYMZg0K3sgCm%2BnRnmprXLyMrVXPM5VXQeOMGhPmwrqwNVCxGOuooVvMOeDdIfcBGLua8QRFYZNvzK6KK9YBLt1c0f0FM2jADsDtlvG4pu%2F6y6abd56IrxCY5%2FJFlhsptiaTy51JjOsgJea8o7GXsjaes0TxJbsngIuyKC%2FtKUjVkueJJf38lcO5EtSFsMJwC7yhcT5qFTJTBJeIN1AieTeVLSVw83fiolBjJSC5%2BNHTriA3Sb1ePMGJg0VS9q6F6ZI1meSOTXWVuToxLvE34TQdC8CdICjbPBfinYJhix5%2BwG2Umk1Ol9Gd%2ByqG0KROFKjBFn2f41Hk9GgQOg%2FczFm1KfYoV3Nke7gYV2qIVhPMMO07zs%2F1hEFy1AfE1sWZEvBVU0bDV1JETXMcicMGBBKQk57olRDmqZvzZ4tCguMR34T2ccGx3XV0eYAE9Ty%2FhdUJBrYJ5MP7RvcQGOqUBCkkv0COUnoeEApbzH73%2FkXIGgrYKZ2LEUL6QfCkkPiW9pPM9AaaQPVA36elAjRTgq36Hb77uSuYQnzh1AbwM%2BqkhsLwzs5N8AMoao0eMnpK%2BPnQsmzmURtmMvUmFTghXt5g6xrn0UHF1wswPoD76XUZAvYwpy4UOjvQpAMQA3Y%2Be9JPeOb7Ya2xkGmn4oxcs3i3ifZRgp3SVU6UKw6NnNWVD4WKq&X-Amz-Signature=a6f2eb596b58845f99bba271031fe6e22a0018f843cdea90ca91638935d8c0b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
