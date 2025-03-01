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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDN43BOI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCHFUBNGt%2Bng%2BdQxXFi0BietSmmAo%2BBr936eXoifZU%2BawIge9P73%2BlZ%2FgAp1MK7lQfNJJbJgQqErNGad5jSaBjFIKgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzLy%2BBbbfVdNJ%2Bw5CrcA9QD%2BbWrfXtd6DyoAWGgjtbpo4yqGvyeClgzgicy4Bfr%2BVwTlLWMyy2sTvinvfVp5RhinCcpNYLl7kxUeo3LWXpIYeE3IKAyAnHmTpX0NLdpeo33h39Ike6W%2Bz86OL0Ke7hgwciwjATeM7ijK%2FmkY6LB4BI1wFNim3QBH545hovzDg5I4g9ezrgj2Q%2Bm9H4ptpshTMzvFFlhaPxZmV4NYMFL1er9L0rdJv3FH2SvCgslNWVoNaWAvlgobNOTGFAEAKVPuWBTOPvM5GWiL8LDZT7zcDy3fv775fub%2B30rHc3iN%2FLdFVLFBbqv16Q8ajjO8hr9sWGquma7e5bLO4WNu2BVaQDPmYcXQbn3HV%2F5%2BZ%2BJpHYZoKMd50hX6aiTTwBSN1QFLeIZMGAI9iVV8CpDW%2FjRJhenAt%2BiyVAoSZtgX18U652YZ%2BKNQJrgvxFwbbwvfUwnBKu%2BrThn0A4cDRCrmgwY%2Bles67TaHlcnbmXIMo3iz4u992LGW255ZdN3ptam7i60qOYNteh1BUp72SnmRiqIulgfU30aatBQV3v4Mud%2B%2FmYJPxecweiFnDT9GR109NYpfXSzkFpONx5HuJZtnWZbwShb1eSDLnjQyrMiShot%2BoWFmj9gC%2BM4xgO3MKyQir4GOqUBxmuCH%2FijS85UmfupVyREVpz9hnKN1DxT9017MyvHiIWPA7w1nHQ%2Brapyzf6DbXeZPCTiGysegvJ1EyGMhdfJbG%2B7JnL0jNVZj9QKmhCF29U95e5tCRI2GZMVOjaeB8ZdPB%2BmE999WA%2Bp5p8SypM%2BKHvKddx1M4hZ4hP5HTEwX50cKzMwa10P6b%2F09gV2JR8vIxQwI%2FYPtjxh5v%2B%2BdR5nxlJa1VkQ&X-Amz-Signature=86ee56e9f9f52700d53e05f5899f45d81071c81a6c3aa87384e199698c8a1149&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
