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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LKB4X2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj4JkQtTUH9CRdWgopFdYoTdTN5wJNbfW1PALlswsnDgIhAMi1JmATI9tPn3WXUjOEbuZuQcLB%2FX65%2Fgm7uciSJ%2BzeKv8DCCQQABoMNjM3NDIzMTgzODA1IgzAkwFwGMH14Rvfaioq3AN442D7W8KeH39Ofd8U6OGnaQBAKH5wdpctW626H1RCz0k5c%2BKV40w41jIK1qM3qZ7ELnplj3uyocdrcHBkNUttIzInetm%2F3t2PjZuJXe%2FguUJYj6TYR0F5%2FYmZzHr2vadcQYl1WyAoL1VIZ47hCKTDtfk4OT7Nhkx12QRFzVTETZm8IA7NFwKXW4D%2Fz%2FoXXimKyhW4MLWMvlBi1tWii7YyyzQmjL3FbcemDeVvO8xHBHWAbBJydNtkDC8f7qgapM8DsaoTp6tE3uDuF38abkGHfWy%2Bme8%2FpzkghIqsseBFsLDehRsYb%2FhZ70c1pallsIuCNTIo2HVd%2ByEIjIXTOay09M%2BEn13LUlH4kZBdzBRIL8ehqGrRkK9TpDbZiIGsick%2FC%2FqJAKK6Tl4DRd8ipEOH5DupAuI32EHOZlL97FUHEyV0Gja50JbyWJbrmGriM5BxgeG9YP9%2BcM9XElf6rpVIiQ4zCxpnMWu2zbhpiYosH0gAGwtZ4NDPo6Odoun9A4zpRrrWPkcZLjRE2haQmGRf9ZSTCU1sKZlVLtjUIubM4H1qeCm8achp%2F6a%2F1wTLT7PVJhlu3VQNrOojDGbGCw44VnMvGuXmVCHJ%2BB5%2F%2FaSxfbfg39JIvn8oKO8k3zCno7vEBjqkAWkBJQy5Lsj0a39R19ojczAflNUQB2w6r8IoFqP7hyPp8uWLqmKPIQao8OGQNJgBf6GeyeYzbg8Q44YBACx%2BiCkQBR6JZqs3ZYp0ReD1PeyNSqG5JEqd1Ra0NDM%2FgRgyXG5GiJPe1EqHK46N0lgJVC0vyr%2FtDeowCNxL47fqEuf0vt5ZATVASeOAhQsNvK6dzloJFhe1%2BkcL9LTgW0uyU08fUB%2B5&X-Amz-Signature=69a0c10a1f21ef5875f78eff0a5f633c7403b2972e249fcee7575cd7b7e279e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
