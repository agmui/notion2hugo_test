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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6V7TNCF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOpnIG0iFZkKPzrCRFzKW%2FutDkpz%2BgLl0MY9g01IgBIAiEAtka9bIs1fLbASjYu38c%2BXv2tPqYmc8oBug0SuuDaubsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwipVAhm2l4qQlb3CrcA4xc0bxu2QmYLK3HwOVief9tkZkWMr%2FGxHYOEabgGEKlRbOFQjVYPcLuufvozUo5o2SfFwUC8JgtFGpya%2BDCqFfsWY%2FGW3XguwBOPxzC1VubaTV4HOcEJbBvxQVfO%2B%2BbDXkeJp1XQO2l6qTfhQ5YRkUq9gXC8YnzrSFGHGOZOqG%2FlL5LtzRgyffOAMFFhuxT%2BDMbJVCMkYD9GBDWmQRplYUZo1nMqHMKcxrIlKFvjOJO2uSoDRDaYgk%2BvUzloOY%2B%2FyJqApVtUkdbhobFhhGSM%2FmAXog83m0fb6l0QYCE%2FcUPhtrdFsylqSw0%2F%2B2QASteNKUqrIT971GhGuAx%2B5uqcYqO6GfFe3F3xON4QG6uH9rkiavN8wjX4V1UPnmm0EVozdVuCREfLefhVRpweCKyc3btLqQB%2B9nLdghu1sbDY5Gqpe%2FRKUk2G3VPyyfZ%2FN5ac2UnQfDtDI7aFLi4AuiGjU0bE9uW8a6XtbtDvyCFns9cZ2vEBn6OGTrPAghgyDOjHZvf3BIkD9XGGTtRxJ2Hs4tJ778hJQcY8jMd2s00buzbvvi%2B%2BIQbJtJISAMWfOtegJJ%2FklO5fw%2FVUGjFfqh4FVM1Fz8SjM9%2FLkBHFeJ3KeJrgFRZcICb0xwjPfLtMIKI3cIGOqUBwaAylL6C%2F213H2D%2F02zW61gWj8HUiGmi2yPay9GtWBq42UF7Kdo5LsThd4rAqClF4LblTnbHJiA%2B1If7Akl%2Bl21nXzLicLwn%2BxvSVTk0CX8oPQ%2F%2FnXoWAaEYx0gwoFwgmH0TakKkqQuunsVNLlSd%2B%2BnetFV5yIds%2B9W%2FJxKgG9r1wcTK3VeKE%2BS4P%2BahUZ80OZKAtnOEPMGM1eQ6vojcq7aMzPUX&X-Amz-Signature=a6861230628c4add7348323eb8bec46184025b38353ad498b5f1b8f74e73ec0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
