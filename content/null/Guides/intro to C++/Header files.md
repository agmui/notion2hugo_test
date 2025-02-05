---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "null/Guides/intro to C++/Header files.md"
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7J646R%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDGDPwNkMeQOBVlc9tP4GO%2F0c1TAjAQ8bRnQAlK0OoQLQIgesr6c58YD3fwYJFVtwtGKW3jrp4qwP8mvmtUfw1W0kEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHVOJSd5SQkpymzLsSrcA83uOnF%2B9wdTvZ84g9EEChx3cKDuWbfuHd5DJz3iv526gGl4Ta9lNLJKDIgFjwzY%2B3K4gdSr2tUCmHKGbzDzT%2FZR36FeNzMgfJqWsc%2BvEZwFgobf1le7UJLWjzoNZ4rt%2BNuCn0gfUb%2BwHArJ1Lf0FqDaYo7rCbOyEeKJLIZDCJSj%2FEed0ckqpdYSVrxGEsLiCpGlt6cPqSH2udk7uAWkFE81tw%2BNUnrtALVZ5A8oIhCbRZlBoYznz0PjKgx9QfyRxgpnb0EStdmXzOV5dCX%2BJGM2yITabKBDZNBENmL4tndwti5BzL9bpZP%2B7yqlQW%2BDeGP18WVT%2FImdqyI6dcIOP8HBjeEVdjfiZBINcn2nx5kQV2ik90jJJMDuWp0226TcT1Mr5YVtMS5t1p9uMa%2B79WGF5ePcDN97FNbQFJpKz9BT7cN8deVIBRCOL9VVnrMxuvgMcYaqQBfyhzF1kCjufNXbNRVqm09Kdy0flAQ%2FqVEdMWLMw8Mf0php9bjXWGQJslyjjQA0DznqR8yEaWC8K2nZKWMjCpPwqALIS0JyoMz89FMIyE4aruYXNxZdC5dlywPTtDzTnusP0uzQwMqNu0TLP6nmaosNjNR3RLswjetyRQLPU1%2FbbaskOA0nMJbPir0GOqUBsisIgQy35hi30EeX2LOoGX06Mqxz2HoM%2FxK6e7hbcLiwvPJ4mu7CCTlDcRRy5CxLFfMV5a2RdW0JdjHM9dUASr%2FQ5MIqBevavfAl5TnzqlhI%2BcvZahRFUD5rMRM0NfbYbORHiS2Xr7OclZWKkWGFueFd2rayuvdCTlJkN0tm%2FDAWbaxGH0Ze6BLOIx5RX64YZb2pNYXwspn7s206GCjtBfC8a382&X-Amz-Signature=2a4fbf004b05359f8161074b352b4e7fab281e1e2b246c9f6cb8c96d66702fad&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
