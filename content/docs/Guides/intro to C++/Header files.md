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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL3YQSCC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGbQEalOPNDZgp%2FvIAjGEztYcCr10RJWi9uwPn3aCr%2BgIhAMOpyRqg16C%2Fe%2FHIweL6TbdIHbQvq3OVhyGgFgZSW9d0KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4sPYJsTUeCTDs3fAq3APgMKS%2FYIB6cYtcHEU1OwQnL71L0j1Oq9wkGV5WjyQkEcOBsDWKOy0Eu7EwyiLvoYv0BrQ8RwkCy3JFY%2F%2BOpC16p6RzbHmET8HI1ch%2FTN2vmTbVUiPXM4nkZcFq3sfaScDHOJ0qHAbhNaojbmY9As3OgpXnothLvysJWZqfAjcnihvu7XbHdr%2BzO7h1MELNlI2SzFcC6ef398OO2qvpN2NwTGdA6VnyIxIQUROg%2F1zA6T%2FY7JjDyHBguDnZO0sdGLZlph8aC%2BvQlK0Cwp5Lewtl%2F3iAQklhC9jF3zFMf0oZd%2Br8g9HTZ4y0H0WvvZqV2wpJ%2Bl8srNp7aL%2FebcwHjMyrwW9SyeofR5zUi2NmfkUnW57Gnvpcqctrm5saX6tMe8b94QdOqeHX4CmqSX2tJV%2BKfILFn%2FGA5eovJfodNUkZYEyawRCiDCkFflthoUHbNgPSTYelIVcpfTcfRU6sYJbe83M8VpAxC1I%2BRZ8I8iQrZyaWnigI8j6vkmydstKrf2iQgaM2qAohOlHvDsHeMp0qV76wJt7Wg0W991YyFDN3zBuuyujcFIurVTc8FFfclqEz04mE9avNlWbdNsNslHbUy0Hq%2FPFHA0xNptfYJ3g%2F4TlZpH5Yr24XpLql%2FDDRvenBBjqkAeOutWQGxkeEbLR5KGxjFalkO1e5J0iPwYtvyr0%2Fyhpc%2FybT3R5w8UHU9iy3BpXWLRNoMWdQhhPB%2BNk0kVp1awY%2BP12kiCPRYj2pp9a3XLecBRLWNEaedWFjM7pafUTyncU7j1b3Z%2FDitlNhluzyJteAgysWNi0UwbkVKhAySXMO2MIbP%2FtNE88xatb7kQGgvoaTnDYmzOUwNMSPESPoqY05tl3X&X-Amz-Signature=43e57bf73502e4b7c34fc5c334161e5119f1a90f751cbad5d93106e45c454f49&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
