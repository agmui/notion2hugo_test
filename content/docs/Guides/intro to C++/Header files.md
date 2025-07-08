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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5AZY65%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw%2BZR%2FZPSSEW9%2BOqem1N%2BC5Ks6giQjs6%2FtfoYNWBIL1QIhAOCWnVxaEsNqyX52hXa0kyEqNe0HeaC01kQOPXmgwQNIKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsHNEsf7oDiyJFr7Qq3AMJkpKbLNns%2B2rIc4eSXkAKFSDCxjGeOoYwzM7OBZQXeX58FAZtcIRFXruAn%2F0NbkpwMB2blKEjxN22Tfdtw4uBlnj0Bt%2F21Z6nq4ssrd1YAYjdzMes8XIPyO1muFAJT9UOvJo8CT6NBTJTiv5j8sYBmWGH2sTXLIMiEFaDrDgwQnpCXp3u%2BGT7u3V2UzcMoKpgErv9PfrYYU2I1CBLUjwLyQ4ZCsr4TrJjw%2Be3e0UqiaeT9ijdc5AkvkcsdVBfz90YiQZxqNEFe%2BjqC9D27lDoCJ%2FCT510Bi3%2FXytheZliHtn8OJWCAI0uob1aIMuypasVJAWZcwQhQLyxmAGafcX4shr2mWUbxiBzUYvzEU1WYxbq2jC41FK97h4Csa7tRhzb6PHHJuKIbXYTetoCvAz%2FwutD8rOYxI%2F1O%2Fnwo6eOYz7HWcEO24zkI3C%2BeL6MGgsD%2F%2F04ik4DL25avjCSKOs0bwwtlB7D7Y4e9gHxYDT3ZBnOHz%2F5NVU3drlPN1N%2F0VpXd6Dp0XkR7t4kqrIuv7u9lp1Ws2QPqtVGgbnALJaSetXTqi4QfKOOXEGS4QNZKc8KsCqONrCj7uTm22K1%2B%2BwGqMlXoyx28JCYDgQn%2FJFlo10OnfgS0ZyyP%2BuTUjDL2LXDBjqkAVr0aCMe7hjQQM7cTPBYbfvC5kerEq55fsO164YKUgRixHDQYLVvRp6PPytniw0muv76u8SipQAisLpR8ROmy%2BUzDaeLRCV5pfMq3kTY1IBsoTGxTZQpKv1b0R6BnIgXVEl%2FocVZmhaH4oj3E7gGE%2FoixPyzIBtw%2Fd0A%2FxFRAIOY0fuNoe73ucSrXTEF422NUdSJivIeTybD2%2FUg7AaZo15cEIYA&X-Amz-Signature=8b032ad115efedadeeeb7cede1abfd523a6beb3d86f76833ae47a400221fdbb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
