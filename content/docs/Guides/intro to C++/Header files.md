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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLM2DUW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgUfUGD7dXdp%2Bv8d0LjiwX6NSgw0arFinTeYxpX%2BLI0AiEAlyXlUC1XdY7yJEceGBR4%2F1wgOL8AgmcDZpnCrHK9nEsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt357qp1%2BspkWZJRSrcA8EhbMYPpt6JOKYVaUcGdbdNSlHAT8JdeeSq08P9brpxZkFovHt9NbwHtv5UyLww4Do5N7hNpMRSPb%2BP53zhq2vsxgMTR0jjZQSjALb%2B%2BLnh2vhPZCoa3OqY6Z7uSq05iOOtSg2eEc1Yjglu3Qj09ZM9t4HQveg1GYXlzGWRqK7%2BTE%2FrkhO6BgVuMioEWpyqyLEZB%2BDNJEBuJlcaKmJlEoDp4q2plGr%2BhmB%2FI5HITkij2KxxhpSNGa9IBbxhXQtR2M%2BA4EnOt1b8VEPnDdjerDLpZYw9S1KJglw7ouVcbna1tr%2F1MCkhxrfBdNUI7vCyjKt%2BDAieUPFK3vDmi61CH5dz5WfnLqR3tdOw8WsJmFu%2BRJkVyEs9cme2WSBycsXGZA3WJy6E0QpJ8tX%2BZNqpDoI5vlj07vYXYXw%2BLLMWSoqOouWxyC8LfyJqTASxTp45KE8P5WQd3ny5K2JJDDGcQpkKCe645kfEiw%2BV9ee9kT9VlhywBVoadi5zAxo20AVGXL8r5xWJZmI1ULj2zOg%2BI0igM7AVHTChooGGGBr9aEtgOXF9cqlFRf56Vjov6HKO%2FYAx3AWZjFsVVkTdnaroOzPeztEXfhbL71hm6onHIp9Wc8lZwsBGVaGZBc57MLmi0b4GOqUBsjybbCJCbDYTIQg38Ky%2FfWEpVKs0k4oCehY8gODj4%2F%2BNY8Dlq%2F0j7kRkGARN%2FwMEjDyuCs6IddA6t6URrjQkx3SryJfJC%2FhIYP8lebQFiJdXn3o484rntuaTDqyKo76z1ZbxIVavVmkxhKFS6QYX9ZglzXAXmmsuHB%2BNqcStj483P%2FGBqfXRjcMqo2jd0PkO8WY0wc1s%2FMEF8Pbz6UcHfSPqCyrZ&X-Amz-Signature=6136fa274e80223c27a60e288dfdd17ccd20ab757886ebbd19cbbf2484412bed&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
