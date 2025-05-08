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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RV5UDZR%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCPxXIp7aRzNyORySicIiIyamrBYXUhj7bQCFm2w7SPAiEAoxQcKE6vwdybzCQratXrWrv8oK3WBHgLLRActGejLRoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpfwwMRgMzLkS9r%2ByrcA2E47ch8sQuNQH3kXo6yvTFrZjWmxj7%2B7iiH8Xm0M%2BeTOoraqbkXdv3s0e%2FPsQQsnzfi%2FP032Fbc7GcYC0lrZW8mFU0MwKFEraSXvDqJg7RF9TOiHq6m1diOXdTNupbTP253PETJ8Qx%2F34vdPcBiwjfI4k2vp8bjcv9lKGrulGXjBROMS2DTV5LSEHYoEBYkj4dTyYec%2B25N%2Fz7nWLo5GgEMiILmOIYq5NrCEMkIz9vHMwJbdLhFTyRz4wZaM1QczTsnU2%2BLdJkqgj6lRYV9FwwwFxsTPi0R%2FFQ2qFzYifZcxjDfjRVknbHU5jw7ti3YGQzNYlBLS8WAKCsq%2Br7cZkeSusUD%2Fc47FzDMudz%2BIfcW8qmSkNmH7kqNC%2For068xTxxu8qmPbg%2FXW%2Fykj79AhbzkqRCZuesz4GDDxEgD1uLOBFNbHANnO0KCp10Q85FMG%2F8zAtqe13KUGiFNghT5yPkXMVt%2FBJ6FrBafRY%2FyrV3ZadBff2VAyz%2F%2BKetmjRQjFZKCNkvsQEDKlQ%2B6j6mBiLM9a05nT0D8gejOZrJcFgIrQI8qs9omYI6LKiIZXfCVWiwO5a7BVA6htnDHTdD%2FUWNB2dnx5ubV5ft%2FmO3kid48thSlYo23sEaO%2FgFvMObj9MAGOqUBaLrssmzfVRAGMB8jvbBqKKTcmeQdkCGTA1xM3TVq4tbnlFdMkIyOmMHOOkMUGz3CyvW89A66Yd%2BbWz96IZoEsT9hKc6MFfLjRSWapo4AwRNJPpaL1doXuQXv0xRUbAiezaBWqp%2BL7UCMxC2Ky2uFjX9mIa49oGlTYite6%2BBChN1iW5onnPgtZE%2FmTCgsCc2J8Pn7x97FQLJqx42crKRAVR0l9vMh&X-Amz-Signature=5022c7bad7973e7d788b68fd11cc7acf94c079930e6ead1b4c2a26639d3ed145&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
