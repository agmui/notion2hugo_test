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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RHXZMVT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQD2bJCDDCNegPC%2FNtRV%2BUsOkDn7uFejxS%2Fco9kWdwaW7QIgGfDdNS1RIWh6cI5DERXRR2%2Bz9QktB7TYve90byetZ%2BsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD30EvVtX6r7tGlXByrcA7Zfi2kCi58hdh5GHtn%2BocydxBvFW79k4sHYjlzy4nHlpHjfI1A3lgpYdCXPZZjBBByu6KtB6Xe3FosXBdfDwZ8ECpvWxFJVLM9RFtahyIKe%2BvQtoBO5u%2FXYFECGA229soBlHMW6%2F9s56K0JQVzvCBhIr5ae4a3vvyiHBmowEf70nUCUzKaa%2B7G1jxpvKtoFDNp0sTiGd8tSQLLlGoyDI4jAGvHtiitMT4hHomiKabu%2F0B0WmELkKxrvOvi56FZIGCaVdwZCl3GZuKiAJErtgFnPsWxNFS6OhiF9wF9h6D7g5ynlyUMDeOvGSd%2BhwrLYgzPVdtG2fv938AkCiUitMQi82N3br%2FptKxEbWh48FYSKeejdLfdS70KWANvuX6KYyO5O6N1RFfcE1q1WIUslG2f9UCU1ySweBQpZgRuWzktwqyAyMz0rOXQYjCFkfNoF6m82cYhgqtb1duLyjb4dE65KPa3gXwni3CDQzZOYkv65hbGVvCJEFlEPHyfCG05qJTUcddXbLHYCC7sUbGcRgJdpU3AX%2BHVTpfRPVw4P0WhYPkUS2KV%2F80SpOSRUHTImeozON6XNiMzzE%2BjSH2aLO4TdG8ZnxSkieJuXQyWSWhyRrJcXb8mTq6jnHqwEMJjnosQGOqUBbdDoRVWVmxRc6nRqRi9UR9QJJth%2FbmXxWJAIaJZuEd62V3iUrcx1qEPanQlEwmBPC6iBfh7IIFbzhUnGhxEX7i%2B%2BCgUw4Yf2T9udrN4%2FfLCiXXi9XooEyrcjZ6Uf%2B1KZ%2FQ3fKsgZ%2Fey4L2WZgopU%2FkCixu7Bz%2BaD5QkkBIjzgSdPv4Bp9JxKL4%2BiDjEjXf0yLt7jLyNyPGcVbP7AdrS6A8%2FrP0Qv&X-Amz-Signature=cf4c24c2319790f46a23f11e04ad397a7c495a75c7ea8c84b6c1c5798b5a2736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
