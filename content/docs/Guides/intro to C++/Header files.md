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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTXDGDLD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuIxC0kT8yACfhiQrJiyzG5O0A9BJpJEhbyNOpHCXuWAiEA%2FSxIEimX3h6qwCTAFFf6jK3yUivN5BFIOOtgCWMPlwEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLHb3PkPMZRvK8IbsCrcA2yFG6IZUXuJmo%2FXi4YdcCO4X4ggXcvT6xuWsSo%2FaEHTov6a5hERHMHQoVs9BJK72hJKJk2dtfDe22JmDqvoxBptGBpK8zViXrWElROS1jPQp6zkB%2BEsq0Th78NT3w8NrKLyZFxeuVc3mSyYTUXaOgbkBb7JXvqjLvFgUXNHsPVLQAEA12YS8DcprHfbmyomFEEFfViRDNpZvQcOv2aEhteRj%2Fmktt6EqWqp82vlHnVE1XZAwjkFmkzT3WxYHlpNm0KL3kHrMsv2bU4A6Hf0ZA4l1Vbcb8l5RhKvvymX5OOoW9mQoSkENwGDE1acd7m0qYT18lxXK8KVL4lCKhixJ5sYGAwttltNnySPy0X4X7jcoc4npJlTgOw2ekPsLzBwvI7LTJjpJSSxp7%2Fd96inyodtXqDTPahnCYCIUyfvE8avGvL%2BORstUcV4wGnZabFKEZJ9DdXQaU0Kl53C6TVRRXedJERJ8h8hpFsuUWb%2FQnr6dG4hpNcpLG381EO3mz3IhktzhXROYT8OWtr8BrWTmQRq5iIm4Uh6T2YPKsXlqqMBj%2FQ2hTSmmbTEoVbzCoAn9QGZiskeh7khS66q7APzXKtbczm9wEEgQH3R%2B1F%2Bk%2F0rW0DTe1Fe2r8CGlEVMPf1iMAGOqUBk1kl1DuOCQ%2BNxTedvDRZkn8liWbgz%2Bt7Uvawo%2B5BI%2Bz%2FCdTkbEEv1NYHY9wK2PGvrs5lB1l%2FjwgXGt1uVhFO3ax3jRXhE8ko%2BRAePdZTd1BNOQim4FHSuv5NRNSak9JxU45ZetuBXt0VOP0tNtV2EzVd%2FVF0sIGxTP6JfeJVcXs4rkH5lrQi6c%2BiM1e9A8LDSYkYaoKB5lNVH3clFToqgLYIi0s4&X-Amz-Signature=24d9f7d82b1a80736907e6d212d7ece4422685fc6b76104fe92e5934ab51afc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
