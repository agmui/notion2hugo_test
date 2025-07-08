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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUUZ7GR4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBctqDsRBUTgHSefu8ugg5tL1irKMjWKeVBiGMO0E8NrAiEArXidgsPaqWfQkKcZOtk9ARxpl9n3jIb82ZyK2JmEvD0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJl%2BHuv59liNh0gdircA51ly2S%2BRfJj3Wh2YT6ed%2B0MvmDM0acsHTlg%2FFhWzrLJKO826yN3cvRXFql2cpv9sOogJwXQYoMup1hlGgN8xxInBmxVjSyNNP3%2FKjQFV8ZN9mWwJma6v3%2FOEjUSqXAsG5DTp60uz2%2FIXvQyK33MmrQ9JjcunvFd%2BBI%2B9o1d6BGNkndIfogm0ZYVOf6rG44D%2BkkF79sEnq9k2GIC34ZpHm5mJabLXmm1fB0kaX%2Fp46DvNvgIkU5rxEyEngwl%2F4z21FD1vqIu3LBKi%2Fyvkf00DycKhh0yF44Vi1M8h3uk%2FvpsLu%2B5OaQ3ly8crlq5rL9Dt9%2B3e%2FlwGu3GOeeRJM%2FlDh8%2Ba7IgqG0bHz4vQflVwqEwWYFH65ZrRPpbsVavYBKzdmbDks6qX3igoRs3xbNj%2FhIM90yovQmuTzoC%2FzIjSJPgBi9MZZY4mIz8Huxv3q8cfRsKn7s7sEkzH65SrGanDfiYHwBjeT8B7MrZ7R%2B4aNSNgu4PBb2aMHE3nUkC4DY2JS2P6Dg5CXHMAdnMXFzdcs%2FcznGojq4KPTC8nUncBROWtiMVXHPoN9tT%2BJN54LYJc9tpjUrTbnPFWhWJ0Uxi6E34sVd02I5iy7lDF14wpLhAf10fwrdWiAUaRlntMKOntMMGOqUBfSTjqebk7lYj4V5qC8G9GvN0IOlbozXgvstErpa5R9miL33ar0Dp3R%2Fz%2F3XkNth132ii%2BsPBdP0a2gAmPgAkMNzrYgNsc2QMaiM%2BhRaSvpUT8nO0x%2FO6TVDv%2FmX9TUB6jdIGTIJb2xBfLbUlt9F6dmjk%2BAstTJCLIJvDzqcB1aWR2USbYZuvhhUtxplD9CwHPqWYJ4lFjjX3vFtelBWq%2BpAxJGxU&X-Amz-Signature=693bb4bf469187f545ffc5316ef184fe60463fddce0c978b6413d27129644c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
