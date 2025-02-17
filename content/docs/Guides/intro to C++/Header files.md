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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWHZQPIV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDWWOWHKqISh9PD%2B7EW3B4smcI7Kb0fSwO%2BxjuNTr564AIhAOtN6lT7lGyt29X8qiWpLGGfA8KfNXrBpFK1x8AhoYqeKv8DCHkQABoMNjM3NDIzMTgzODA1IgxtoNNT0zCeN7b8HeUq3AM0aufYZrOCiamWPNbm0jdpJm7WngVWz6GlCS4PHSqpb1cCI85GRKvjeJCtbbw3zmjwMXbZbjcawFwza5orwE4APE2PFg6ttnKYA%2FH%2BK8lwumH117pZqVbuwYlNlQTmwGD%2F0%2BAfQ%2FQ8Efm%2FkxRXlRCAyGSrK7jRu3YZkGtvmIpQpCw1BaQNwrNqxW2KwQkPLGMKPg0TXl7Yyi%2Be5gRz0TdpV6j%2F%2BSnly58bqTi58oIZmHSJYhpRCRGr%2B4nIEzvwYCkQCCb9wEVG%2Bs60Gy45yS%2Bx6ugwnY4Yho71MD7XZXeI65%2Fi8NnxUO8TeovKo6D0KfBN8oDB30p3g1U6gkFIH8pm8cQugPx5ML22DYMWu0ItM432Vz452t554Go5gIzk%2F8uZloBJrZTUgssIZaioU05x619E5TjN2BHXJT4XHQKBMxj23NH%2BPttIE70KVeAsRKIWy9oFRTAIxzIrO%2FtUf5U19JmKubaqq%2B3N44Tda3ILTaya9H4ZH%2Fcgo%2FfKW6lYlSGBwtCGUu5KyDJo5C3w4%2Bm7l6BiK8r8LMgDbyrDmSuajsEx5vAu4R4RqJZ5iLS6S0xSroODxa3NwrnoFPOIEm2GuBK9CX7p6ugBqGL7zoMcevxN%2BPl9fTTfUM4QWzCbws29BjqkAdniMHnxjCM5KEze0zGoiypeJPz527J4QJj24isyFjG3d%2B6lE3JpJeE6aD5BFKnECWwRSBheMmXfudEw6HGUqWxODdcQnEKSw59kQNFi%2BFOX0XSYz7g1Iq2ZwYVMHGEvvKYOESSpVvdERcz%2Bkui9kyFCwn1usMmDGRvCzx9QhGZrtm%2BQaszeCPNfQ2Z3tad%2BtRfApML2%2F7Pp0eWScmoVTH3rWTGt&X-Amz-Signature=77de388156d5ac8e2d59cc25c20e7834cb22347e52a188f13ab75854a351138b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
