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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q55T532K%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDhyXjReVf55hcIqma3cFjq9NhdN577UfwZTL5kmArRjgIgarV9we2hACX3cMG7kfSvX5EyYXyB6oWC%2F8PebRFD9WYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ269yr5b3iNNvFdcCrcA41UoNRtQePk6qhw09MaZhTiFQnV9fZLnkecnACb3OJOXAcpcMsnghlnjZSs8Weuy6IIQJOqO%2FJbfCEuPsxihQyg%2FYj5qxIbVH0EVmF7GSHsJ24POhWCzKUaD7oUc6q4lixVGzGkSrGPIawcRlhEWYG9w7i3b4BQ0pYvIJH%2BCdURtQ7H2NeI4GeKiLOBIsyar66TusZDGEC2DbkS9CYiNByzclJTFQhh4983YhlB97VD%2B89lXL7UrnMEw%2F6yNZ1801go1t2n46iLYSmulgxioNIZS9KE7wPHlE80FCbnS2mZtskEcX4GPsI4obnWeAngGJL2z%2BT7PwTDZ4qL4RmtcOGefRz2mXtdWiKoVUMkn%2FQAGBl0rcS8YR%2F8lJvpKA3lukpPiLuGv7XSB8JLFLlCLn0pjjRJ8VQldmvR13dXHQNPn9r5zr78Zi0gmId9t5M5HvJ5dGLs2i3gK8rVrEkRuq8vpJ9xDrVM%2FWn8RNkdI%2BcBCshoXwe5BOS%2FpxVS8lSHN6Uu3XXJpSW%2F3cBzL2v7CT3SMNg7hibPnNoSzDZVVgtIa86yH9dO9iG44TdHfErll0AZRpACZ24jqjBqFGX1KXDUBU50pxlROgXGB6488K6vV4ZrcjvKSUmrIn75MKCQir4GOqUB7iTIGIyCGEOk%2FRUuvWdsVRJd5LGvy4Kh604AgyqckydK9FSc%2Bv5ZAe9pXgcEftVRcx1jC%2FCrSTB6gWxvySsusn6OVSt0d0tcsnwV1Z%2BCx5k9Wn745u%2Fe8eYxU2TLC%2F279ggNnocidpz3ox%2BQvvaU5QcMrkw65x08Lf%2FeBQkJ1CmrKe9RMbQbQ717BFc%2BzTxqDjdpLSx9jl3%2F3q4Dsz3KJ80Rc%2Bl7&X-Amz-Signature=aaff6fa758911baa8a95d0f2d957cd72d964348061411bca9b72b520db416bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
