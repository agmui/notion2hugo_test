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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2Z4QYB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCHouOCS8yBfUsnA6UGEWhoA386RJX%2FTUIKuj3hxEIf%2BQIgbaPmwFBeHMls9OWWWoFQ%2B1CTa6Rk%2BajZ3HXVOajCfs8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmuajX2dhLES0hPFircA2%2FPUYwzQQgc6nf1l4c%2FK%2BNvihy2mWr1cxRf6IOo5gdJaS%2F2rsW6Om0uBpOv3KpQdwFpG9CpzoqZ6iPmPI3q4nHj8OqFOvbcRjItw1VhdL%2FYNMWlSJHAYD4gzos1ZNYaTBVJDPPBLV1UuVHHhD8qKV36WYZCsegZ9bg0yz2vm4wsXeW067OLt2blJjN0hsrXPlSvXxgplYiqlf4Pg0NgpqW7e%2Bz3fN%2Fs58Qz8Z5VDo%2BI%2B5pA%2Bw0iJb4W4vG4Xt5uV8%2FLwQgr%2BVgFknwnt0IqMZScWAyn0HWTUTctPZ1dwb%2Fgu1por0GPaYJkehDrLjgFwWzR9IsIKomVG9zIp%2BJg1RsqXIlpGZRXoHcxm5bsN0qh%2B%2FaDRZPpW49ptvEvLKEXM86Ljtr6zWM0QseHICKWuNj1u8jX94nFFMF%2FnIwk%2BDk%2F%2FBDzBr6Lu%2FF4svSKJtdm3B3FHnCia4QBw3kwsr6XFZNZ%2Blsys0jm3JYetTcwrAN6upxXxWWDruTBe2RQo%2FruiU1lRlIEIZXgjjfn82pssSZ3hEVLs%2FItuMdBJxZykgT7R1axdUPRoGNLXjh56Y80EA1zAjOuUP3dtf2Oog%2B7rFGOJXSsTQlyB845Accg0%2FfYhQz19uycW0swkrJoMNChw8EGOqUB4nbDUMP44lwrcmNjaXqsrLiUDNphKm0A%2F3Z1SQYaQ%2FEcLid9hGoD5egj7bZtM60xzgty0P9RGhjgQU53jxc%2FO%2BvyPDZOqs2SM%2FyRndH5DgXgBXG7yfWgOhrEFvrnw5pEtUYy1x519lPyI17yytgVgZ%2Bs46bxgEuge6jVFj4ufREhzi2SP7tFA0E2nrogRw%2FroE3YxsQn7QK5h0Rg%2Brvd%2Fi9xzuBT&X-Amz-Signature=2b749788e3dad441cc84ced0776fcce87003226d0e7cf1725bae29e819fc6f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
