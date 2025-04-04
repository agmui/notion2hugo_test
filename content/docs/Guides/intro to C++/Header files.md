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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMSUEDG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIz58hBAc2MSCewwGX6gfCo4kga8SDMOIqjjPvKzOCBAiEAhVep6uAvvJm1zgPXCoA1DoNcNKyyYeXGilvF58K3ukAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn4yLzhCYigrz%2BsJircA5gyh643NTK3Vvb%2B%2BHNAkm0tNRWFsPImP79gJfTeimlyjyHO10cJGTq2OfcMKK84KgYHt1mMMY33toREUL5Bbx8YP%2FixmGNH1CqgByZ7zrBBGHwIKoPmNsEBknErf6XT6NwaYSTuDNhdGlrWUgDHJBFmtfT%2B6l0BuHYyIFEg2iZsyXQGZ%2FHV3gL%2F0DNc7%2BBQNATMba3q46sMAZ0l8vIbSdsCgWf%2FJmdwizmPSHEEqFD7cOVR52jq%2FdfWpRAkjQ54CvkttdyBckAwYklhy6ksRxifLjYdMRFnrGJa%2B1zCEAi7WqQvJux8p%2BKq3ysNdMaXD9GVzX3Yh%2FMtjYVtvLb4igQsQ6ffZ2lp1GakBL93YCPwJQVAqkJiAzzZZJLeUXpx2OxQ58wAJQWHV84ckI%2BDuY4F13QKC9hXwiuFCtxQpFw1i0iSy0bLw6RbQKDdEfyQF5S9Qrap3hANzmx%2B7dUIVOs3XIns6T5yhpBzqZPT3hvU6fC5ao%2F2cqjdxUziuoZxZdvHu5arA61QBKTk0Q95Enp7dF6B7IVrMD1dz2Urn3u7VvJfC2sR1pfk2AxqjhMLGNAI1zV5cgT1n5DR9H0hT3gv53YyxGwGBKRX60nCXq9LOl47pcfq2LBAMAaOMO%2BBvb8GOqUBKDI%2BDfLYDXnxk4skB8Jblhr4tVKOqlTty4cQLaSHTSsS8Irvsjo4Gx8Eal2rArgmq0uNgoD%2FiQuxvF18G8FdVhJeCl3PKp39ilMc888J5EQMbfZWuxU6p8PA6Taey2mcDqsP18u8Ob4HmPnEcLK4F2U99kKnyueTxzfemOSTXFVRJIHqBH058bAJknTn50RbqnnBkV93ZqA911cVUZQ5ysA4K%2FLH&X-Amz-Signature=7d37e990fb1d3f9475a67943742ddda69ecd549780012cd1fcd618e7e9a582e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
