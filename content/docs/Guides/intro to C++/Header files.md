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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFBTPBKS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBb%2BO0AF4RSZ%2FW0NQtCD4gMvlNBfrsTyrV%2FdpQAfaUg4AiAfsJq8hsb02FZR%2F3FMglFDWURiwEyFATFcVD7YmpYZCiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMueHsbsrLpNdsht34KtwDe3HPFZ5kEEYz36NaowNqlBGcnUDIpWbyr8%2FuQ2ZU%2ByDjRPpVxNFFCk3P0ndsqqASCiTpKgUfHMWbt6mTw2nyYzwAV8rtZWs%2F39YCKyP8fLkKVaQMhepib2KLdFtRqCvgda%2FFhfL4G151QDpVohIeNoOn65l07XosgYUsWkgF4hrY2f%2BSA5NwPs37o2Sl4YxK%2FAq9a%2BPe5RrYJ3UDzq6EEzXJyBlzcjw5MNkXE7S2gc%2Fz6da3Ms8tZA%2BNy8j07VJ%2FD%2B%2BQGCNu0vLbM7Y%2FD46QW4180miWpfU28t%2FnZKyyoe7X9FLv9ynyd5W8WO7wZJssnLAU3VvQHbqiiQ%2BSg%2FLxVVBPqgUsRr1kWDDhnQa6CpHDdm3fFIQiEi%2BTNOX7ZYGK%2FTb9ZoJxdh%2BHOBeMldsP%2Fath%2BMAaphdjadzf2Ma39wLi50ReSYs5mZcdZGGmQ0cMDt6zuy2wEs6b3r7izdITasht4NQiHBVotxGOyDfRmvdKRuvUZvMpFPQf4Oxd6TSfgSMPogOLAqRAZzvNArObxRFoNFQnzA8umNnaWvulCSBeS4C4S5hnk%2FGCV%2BFqABxHaw6NVioZ5PojnH0MwfXiRfVjmI8oxpU0qwB2w8DSiPkzZmxioYUFxOfOrCgw3MawwQY6pgGYV876pN8Yu3FCbXCT2Trza4ihR7ReRmn7rnN6FHVJseTWZPdy%2BevjLKodtn59rvTZyMPd9ihPFWFJm0AwCk0ZVLxZMnlMzNmSX9XLnI22q4KTGixMAnqhNhMajqAqpplLf8t1sBTByYKsBuRQxFvToB1uDQnkhWMnZS%2F83kFc7EPEbtgoN%2BkXLBw70BQ0bVkvHGPUW6z23%2Bt0W3xTtTmBlpwANthm&X-Amz-Signature=d2bae067f5e4ddf5e8af5ecf91b393748451250caeaf123451d5352aa81dd465&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
