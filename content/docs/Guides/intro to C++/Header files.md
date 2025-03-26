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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN7KNZ7D%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8TldnoJ0Y%2BiSUipbJyJFgXjhKNdJej9nDY9j80j%2BoQAiEA6KxP9RPuPrJ3aCAPetEmu7YptFpslm3DUE%2BCFhCy5Coq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDFaX8lF2tPLLIKELDSrcA7JL0vMoa6ZzY3RR7OICAKyl7EyznDoflmrmY5zqHiwf5j0ekfjeI3qjJenWsB2uQE8o1zDS8%2BqikzPG3wzv%2FJ9tta%2BUdcFTEmJxlRcubhLJt44Wz3NiOwmx%2BwFGzmhS3fyxhJAS1%2BHQ53dXmLuQCSZg%2FH5kyt0pGvO8GU7pAHPwJmba9jkkT%2FJDzT5AzBEivVs4OgspQ4vqnSPp%2FoRTZxv77BGWcqF8X%2Fmd6frw0dr5d6EJhQb9%2FXFixQA50gVSOfYefsCZCsB1RaQ%2BDr6%2BLvUap4O5rTk0dOMIe%2Fs8yEXkc%2BYNALIrj9gDw8CWFObV74FUBU7xovHUZ25GDFItsK9pNHTj7T%2FeAPUrwFeUq54n%2B%2Ft7CMlMb0cJKgWSoMjFSY7SoCBKr4%2FZuS5LFncYPgdURcpgEW4IPROath3zfK53N13aMbtb5vUFsTJ45DTf507tCMxyVP4EPSEBSOMkD3CjrIUtttZSKHR5NXv0vMkUiWJ69QNtZY45jd16Lf0MYlZCFP7Rc9vww5pwW4Hzk9x1m2X%2BEefXdpljUyy9%2F7nTPLqBTUiZqDSy9%2F076Fy%2FVI%2BrrDk4PDKmIPTUcWJKinRDTo7g7Zp1yafxMYc2SCiW0pdBL5meeMdv35qvMLytjr8GOqUB4ydUNWhtDxIIUOtcSwHoPTCWOqWX7poH%2BrQ%2Fv%2B%2BbA%2BL9263HYkO2cg6pxb2THrXPUFVRSFoElUuqEeXRwqZU3Vk46O34v1QUulQRKUpiRkwGm7vU1IHqHvJOR%2FiIlBAUG%2B3eULClbT9opF2RVR89OOC%2BcdkPuMVAgNrH3hicEvkDYMfs2KRO6yhIxKj3V4c%2FD1TkzTmOLcI9JMRwUvnUA3SFUfTV&X-Amz-Signature=dae47bcd64eeb260e8f69795cb0935f999f8f2eb682dad6cec3bda37f7e8e506&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
