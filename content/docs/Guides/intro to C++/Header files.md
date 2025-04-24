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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEX6AMGG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC22vxL7oZ5eVkB%2BhjGsJn0Rt%2BoQa05nbVbXDrwWGbbdQIhAMOvzYk%2F3lMZPhdpTSusMoMNL%2FbQD0fPLKZvxSP1hOl%2FKv8DCCAQABoMNjM3NDIzMTgzODA1IgyaX6eVBIkJibclZKcq3ANmrpVOLYMRwoMECs6xgksxY3KpC6qisZ1VNeTgeO46jHv6N%2BfbxqfeJVR8FlUbNMvLdYW%2FMlKslIJzJL4O6Yr0O2hna9ZogButNv%2B6B8NmJddrOW66THh64UfT%2Fe%2Fsjm8lf5jvkpnc%2F%2FAGs7tDlWDbTs1Eawq4ctB1qSIQNY0DfVYyIh4t15jn%2BjZ%2FQ3SZyJS9dkelKzH3IIM0fmibMkoVs3ZMdimM0U68fY0bafyELP4ymkZCAK3yXdZbd9vr1T9MPsMn0A0Ua6B4ERy%2BfZlebx0qpJIMc5iBpILE2mwjbv2jkDvINawyIl4NDXwfIyPNlnJtGTuoE%2FkBSpeCLlb5ABihZOcIRENO09LV4QggejPjZF3DHxdbEAidAs07ss1KcvkrlZQH5BehqZu5RZB70m7hxXMZkwF2mswtNyElA%2FqXZ1gZcnYecI4gwOR18psORaYQyeq1pmhPeWdOGSsFWetRVPkOJUDjEAIUJ9xzo7M3cLta%2F%2BBQk1%2FGWAtFn6y7j7irHVlPYulwdApm0dp6E8Zv9OSrI%2FmWP%2FIwI59u91RIdUlTmF%2BBt2o9i%2FxOZhvwi5dok08X2JF64e89hT%2BnUnFfKkehfic2YlvYGsgEVV%2BFZCwrib%2F6IZ5QGDC19KrABjqkATTrl4aXayUNyKOEVv5bOTmOlY1DXjfCG9yq%2BhRZJ%2Fim0mZNwYxnEa%2FB4jV7Y2wl7oM96yaH0eDSYtkfb6sUpaNi8zEmM7OMlnRsSCDG5f8%2Fua%2FUP12ZqWy2PvjGAWDKLKeQB%2Fu3me3puCAoqshHufBzp%2BOGLTcjo3MgrRoLQwTbz5kQqPCXNzlQBM7bQXaxM9FcsqvcrGmNUkmb8AKxKWlk1QFV&X-Amz-Signature=66f64c8b19884c3751b87df0d566525a36f8068a7f336dd2c9ea7401b227983f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
