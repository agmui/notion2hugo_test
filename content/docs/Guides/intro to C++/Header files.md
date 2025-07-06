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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RSEX3Y6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDxYyhvz14wdgJyiZ3o3u7cW%2F%2BqqvebGxL4MMxz7R6KkQIhAKT%2FVos6oMHuqzcnYgShtongN42ES5OlCTqfB0pHcHhvKv8DCFkQABoMNjM3NDIzMTgzODA1IgwZYLr88dsxD9NDLi8q3AN1nNFa9En8TEm9SDmzNpUuyTh7af0YxL5gES203let59zbxtJMxAI0yIpVC0RwjpwXIcgrFvVOaF1VQOBxSIvLe6dx12OCLnb8kttzudf3twl%2FSLUVoKUJZ1JNtee3eIxXseTOoHX65949HM9tRB7RYulIFZP6%2BZ0BWHD6GdZdfHuzgTQI9izVdX6IssCPLaXCVxxKLNAsDKcPy7hmleGkH65%2FpkeL2KvMx3UQpLgL6luF1fGByzoHEWOvYAZwwdILTFrh0sCoHXSGQa8icFGnUXG7DNKEeRyjZpAMkcBaq7D2Q3B2D%2BQVH7Z0VkWN1GW43%2Bw4a5%2BEcth%2B7LmeIMtTF2gazGzcNiuRd%2FgkBkvoxAKlDCfQdGr2FoSQH8z95rb2fyx1AB%2Bf2krl9XWAbNCvs%2BMwT6FajSNPkH8Bpp0Djg2LFR%2BErC7a3Gy6Qrzyafmpw4dzxccDpS1%2BekzLdoc6Kdw01MaWu6UnVVi7HtAEPV65d16AkUQ8%2FbCohS0N%2BvtwRHLsw7nLHnhCIKWbA0hCMjb%2FT1bVtDkTL3HVzsO0upDrpS078z%2BLeWYRIpW3%2BctM3izbYxAYgbyTNuiKWydGrBg4iLgl%2B0pEiLpqJINq4KYk1d2%2BJgKm%2FlRtczCf0qjDBjqkAaje4IyoEjUC6bxfSSIHWBLLqGO2ZDp0NCGdPeYX8%2F4CmcybssBVcqrQJMdmuzUcJmQn7knQoVlIbVeTOYzzldsSftqMwc0K79gEdpQLztDocxF1xCOGH%2FSBjkt%2BnY%2FdJtErSW7%2FLlMqfhQ8Kv1vf7fvX097ZStQykNJShLdQB6wP8sUzTaMyiDotlktg%2FpCmnL6pcvJUsNXwzJcSkK5P9WVbnyk&X-Amz-Signature=0554dc08a787351dade48134f2052c4e649c44b8ca9a18effffe756a1850c232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
