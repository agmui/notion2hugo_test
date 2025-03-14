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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PUYD5T%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdXAgH95gXBE8C%2B0HPK6XSwm6pYtkygjAG%2B%2Fns05nglgIgQvoFFlZIyGJDD09%2BoSb%2B3gA%2BweVbmllSLYTHXVMkGLsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5olYnRCT%2FD2%2FKY2yrcA7VxM6Op0qSWZjs8phvTajcck6OgelafXe%2FqF25l7i213Ts4u3F%2FPl2gi097NIguxfJGCtysd0PwLUJUuzIFO4NNat6rLvydhi2wASp7GQv3TfK3lbAR5mH0n4IySnNitxEhUxy%2B62lapU5CrxG8oLkTk491SUcQ19zi8WLoy%2FEZKnkWWotFvsVZ5XWZmOsC7yGQDADN%2Bao13p44Kfh9j6I%2BsxEKVM2Z5QAZvJVXjT5STWwtbxF3Tq%2ByKA7FRjHOe%2FevSYMjs4Z5luwLVtih%2BkhGvI7rchxzzYYACRSbOWkD%2FlOe7r09JztyEKSH7wQa6PZAUVw5r3MZZqwXB0XX%2FKKiUj0ccjchiKpe5Qo0iAizwmRi3vn3dvhZeJXdg4Zu0HOT%2BSGtOH8HVV1J%2BBk3mywAmXkEJmWWud%2Fmwwcslzxk8sAe2lv9Ty9%2F%2FHKzXMVeUw23lSkI%2B4v%2FJDI%2FtUuyoaCHCCpKozo89JJvu0ynoM9eleFYI3cKGyBGHbR7P0WytWTz6bB34gsNLaPp5YD0fIOWB88WDZSF7DueYMqPoh6m%2BO6xU3XDMSxe6w8QIzX8ed3zaY5C6r2PVan0xiDmyep7F0YJfHMi68%2BwqDxYBQcHvC1qDRs0ABpRGu6%2BMIPrzr4GOqUBtYz5RoNaMJD9%2FvRACCgwNl13Ko8o7FsQ%2By%2BG%2BMdhUNVRsKWvh4Sm7gwPm9i21N9rdK4LEG1t53Cg6rBIanssqP%2BSgMk7S%2BNq7GzdqVgrEoflH9125gfDDFnYIOKzsOrgItlMtgoYW6Waex%2BcvGTXdH%2BZpm0d%2F5bgQay6LO4b2TWO9OKYj7vskZ2rvrWFNXbC0IKgUkaZHNkUDyEKJuWFYEeQ5xU6&X-Amz-Signature=4812bddb12e5b6c5a300bd4d4b4d4ab31340b6d1fcc24f09d4cdbebafd28b50b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
