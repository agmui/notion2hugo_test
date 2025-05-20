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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLWM256C%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWLwuVHFigpQfh%2FGrC2czmIngMbmFEwy8aGowv8kQOWAiEA0l0arx%2BEXnMuPyk2bNditHtsv4gYJsRCWuoB%2FiDm8%2BkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkYEYHNSga906dz5yrcAzE0gbg7tOt%2FQBDiCmgP5aP451kWxhWR%2FjhDsi%2FCUsAJOIShu3%2BxgLMqrKhFb0i0FDtiMU6NiSDZPA8BO25Zx0%2FunqKh70rw4ANyQm9xTxWSaKBxuHgX7SkzzeW2O92RE1WeEPyRqLBcURTZ8cGeGA49NuVXiznNgIRVmXG6IQ5F10Fp2D1%2F6RHKTqcsFIDPRvVHwNWtIs61RII0n0cO9%2F6L25hlAjTau5ckhS1Vx9uH70K5Gkf6wzMjOLOPy%2BrvOiQsjIS%2BH2PbZzLOtAo8X883rTpIuVn85EyxBbAJDLZhEym2X9pUfkdbNFU%2BeZKJ8l0zVEidCU7y6wtv%2B%2FEkziylY%2FlPc2ApDs1rMuM3l23qjxSA%2FJ21ylsFIU6ptbM%2FCszUIhQU%2BkzskGS6JF5Lbmfc0NkcHLIHmranEOrZUA4JUjxbGm3XTTBW1tboZJYgobGUSkDcWUVxHIZJI1QyuJBFwwAHK%2Fs6zwhqwInVqyjzeN9D%2Fp7AvUKZtNk7qtDjxudtdbpYxFPysRRKwa3kj%2BZWK2G1SWFpxkZk8ghNNWex4qrowXra8s4A7uv2ah968Qa6PQ416152PcBpHqiAANP0bxc2Hf5szZNmctvaFzvitxsb2CgNAX2YD8u0MMeXssEGOqUB2ySSFJDylYbe%2BlKC6b1tqSg09tk1Idb3b7SYHojqVOdzCDfwU1vj0gtBHQU%2FMduddFezytsWzDjePKzHxcppIOiEaqJ3T3q6ys1QfqNfjvUCEUkDx5%2BQxaWzAsKkpzE4I4TqYcZWVLWjA7nAF0wqH1FRyZYnVgYlYY02FwK%2BiK9W4HlBZF3%2BleMjz%2BYjraQasjUDDgn0MHxMrEQt4%2FuDLdYIC4t2&X-Amz-Signature=19fd5fa826d9eb9c174588adbb99293ae956d1759837d127a8a963aa03d033d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
