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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RQDEVVB%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrT%2FIeM8HLSQaqjlBVegLBcvrWOyh19BmkVzCYiI%2Fz8gIgdqaw7chGNYXtu%2BPThy6qfEp7EPd5g4QMPmQd3dnK5Koq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDE7yhu8%2FUDN6y%2BygTCrcA%2BihKjJ48N3cFbEos0r2vGB7PXbywppaHjjmQWaUSY%2Fl%2FAQR11EGeh4VP1owGD8tfGrl%2Fx%2B3pM%2FVMvso2eDFjPUL%2BOOlW2b9%2BMIi%2FsgZdvW4T3olD1VH6B8B2QhGqqXpdWFvqB%2FfkVmNXUSo8SmvNUdDQO0PHbK9loEGCeBCMDI5f0MRJc0J713etSRntCzvWt9aMs3lG1grNJlxRZAUl5tWSWWiXMld8eShuxyrEyJne5JByo2j5h9nZ3jrs9nmhEF%2FUcGrnsrv7gGVSkv5jTo%2B22WfS1fneZTjCi0kfx10RoItv9ZCk%2BrjxY9djiR%2BvgDYTaTslLuLd6t3JduHliHwhhLeHK0PAXjvddvZ2UCAjw6O3B9XEYYx26baIMZ%2BULmcAJZX6yGS%2Fx5%2B%2F407ZNbnhT0dlN5eyxYEHwHAJ3sMHhHRBJoUhgw9rCySJ1E9vXmhgtU1Ft5XSblExzuRTAXj%2B9UokRukrwlwRc3ttIzN7sd%2BC5B5kNXCAv%2BDaUI0Al9GSBLx%2FZwNW5Uu%2FpLz4ZA6G3eVwcMu99uGadqtqcD5IJANtmBk3hX2Vw6iAhxBG6Jp86NyjS4AP%2BQE%2B%2FtbfbtYcTCAYduK6fKn%2BpdgNpwvwMcrZTWFHZ89uUpbMNjx7r0GOqUBEtIvy8GsOMdzdYhJcyWuyVwt0yK5urCl91fXal3Mj4heyXYwXVmt0zOzbNQI5SsgLCP2MgNWFsJOgEMfoGooOfOam37YbL0eA4pT62W0pDlbDFIGtVBFU8j1tv5rNbfVOEvoVaQ76K3C23AYCSVjrl2FpERXDy8zPl7LplmEF1OKQJbCFb%2B6CmJncKM%2FsHDYXRgIKZ46GbsKhcU%2BdWNBoWjHwM3d&X-Amz-Signature=8176e8a69a2ab04e7f82fd56b16acca38304dee265d222f67074f060f2a4034c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
