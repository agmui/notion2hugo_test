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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KDN2GAY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEBT3oJCr6J0PJ%2F2Tv18AaAMK5CDec8KpHR7n%2Bdn5HUzAiEAtOzj2A%2FzH0iCA8A5DQ8HU5j7yg7I1%2FGoqtfUpe7rccMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm3D%2BnmhtUl0BhlPyrcA2lM1Sedu5kCXriABoYlXvUSRKkDsz8Z5YTbYPctQBVoW03c1F2uhukJMQfVIPfnG7lWcZ2fYkvO2XWXiukXT975j2%2B7aqG9Qgh0DWCmpeQEscssWF8e14bE%2Bz1hsYPcHLj4vE%2F10Lq8sQYrB3DFRu0ieZ8kvQNbeImksBIBNmMh4fx56bFxAF0euurri%2B9TVwJ%2BB7KIiJpa4BJB0WjLhC1asM8MxmtHI7Rkx6JrDc5tNxV%2FCs%2Bdmks4ba46pt41sZwlJ9q3K%2B1ZdBBRfDhWZkvwF3jLRuNdPwWAbnvAZL%2FpijhTooFeZaLCDeAg%2BQYw%2BYVRGKpj9FiJF5q%2Bd9zLU5JfARX1rRo4xCFCHxp1HXBgHsA31kpZYf0MvzrZ6sLH69jMhJNIF9MJ434znse6xvzoISMygp55qafR12L1BMhu1tKsaDjpPgea4tTsQwi7lEJhWxt151AO%2FxDn0wjeDmlwAKnOYp%2Fi0iubAhpFGdXx7O3x5D%2BdOsp2UPFQ4GLcSylAkghgNmYS3x7yO4iKHc%2BcmUrVHVxV6%2BvXgSVQ72nUFryGAcKZil%2F7zu08lKu%2FoxZPVuWqwiDVthzf2t2H76vKFt7ut41xeJdwOKi32LoYvZ6PqKRlHFuwGV6DMLfR0MAGOqUBvQ9FQKBS0e7OiOpZHPvrYaEOCeqR3vitr%2Bo%2B0Q0tPm3J5M2vAcNCdgFvBPAN0ka7OMP6WGnblBD8NNch0h4Oy2M66sGnRgjzn1FdkCSrYVwaMY%2Fdjgf8zqv5f%2FiQrPyR%2F94jcpPLbHm9GPTbAQqKvgeAfnjNmZ35AvPvoNzs3xOe3WRKBIDHWiPuU%2B2YLAKkTcOLPDmnJS8%2BaR84c4IXrl5XCMFh&X-Amz-Signature=629b46243a8df87b91c4263c3219af301f932a8cd5401ee40249a28a935a6477&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
