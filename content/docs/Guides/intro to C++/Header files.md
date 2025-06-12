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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCMZHC2G%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCvADbjfZMoigXEdFjFY5L0NEXyCVNqZgcMg3q5%2BiQ2tQIgCKIruNJOx1EyZyZLMpXwoQ0j64tTk3F06ODEEHGIFVsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPvciQTkFv8fwZcayrcA2bvS84dfczIVIcTEd5OHCWksHBTflst7rOXekFF4%2F8njWzGnph2fo%2F65VbECPmxqbqQ%2F6WpH4lWkQosD%2BOLm2nem0rX%2BViuPRG960CLvP1D9Cc0p3xy5FGk5rRKo6RfWbgiSjhIpED2%2B%2FnS47MP8G%2Fe%2B%2Bd%2FuXEIsklWnPeVPUbPIPwbEfJu6RUejP5oNY85iiJMLi0wjTUuJBvyhp6hiN06AhO2yXaQVZliBriBchVDe%2BvGa7NchFk9p4WXUTPjFKe7AOi2RvcGGBrUZ0mnlEg3GXkulz%2B5xnJ%2FD1vfucf%2BHx82e1%2FvOCozCUAcjVUD1ujKk4wA7DAnHxMQ5LALuXGp8C85JeLtI9thwLBTK4P5JPodj470T4pmv5Zy20PyDhN8S61SLHI8ZZctEaXmhFKRAdO83C1CcOoz5RxwyH3B3ry4FCDJ4LWHwUCd%2Bj6uHoCiuyvTxEZtf41GE0rr%2B9%2FDVnPg0XCyXVFutS6jyBay88qedMMVxCLbyNI48U13jCki8kPuU5y22QYhBGie65IAQNRYD%2F9MObboofH2qUVOjxV8qozOYWXcLZTeVobIvNZNtAZgr7tlwOxCg78iw4mbIwvZDjx%2B%2FEDgulTMrEswQJ0PCd8HkU5lvKD%2FMIbCqcIGOqUBHUY0k6PRuRyuIBr9EXyQS%2FjM9Zc14oZGaN9s%2Fulf13tsWuPr%2BSpUL8UvcQCQJEop0O%2B9v5wt013qR3%2FRRZBbcOdAlbBvvR2NXBIaV9u1pCt6XDGMqymqrMcQD1ntB6nj5n%2Bk8uiPBJl6H7yBsV2bshGn4sD9gmFnLhc7j5dJMNumlYKuntIBBByVBulUIAHx%2FbNppLbdJI8F4yQSUI3vKJ8zjdXJ&X-Amz-Signature=98e9f0d7aca9e5f53489875162cdbc25ec6afde3837c17cb89a509158abcfbb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
