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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JNSSP3W%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhWg9lw3wxi1jp%2BJTQsPjI7xfx6QW%2BHb0BTXA8RMNjngIhAJAYVya5Kg29N8IgL3XPGoF66meXf1zJ0SY4ZyeNv9L7KogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG9LDziEFn8jl8OIQq3AN2HbNo0z3BR89ocfu8FaLE51kPz39kcIiEcXdeVv%2FpASjMyJvEiDzrbuVmoU3OxnQVzoL2gHqwoFK3CRkdQIA9vma9I0ex1CWytjS7ApFAAaEdih0DovuK53E5zj5NgsCBHW%2F5KGc2S%2Bk%2BpuAtwEkEsj%2BPIqZAvTtjl2QvirxcJBawgoxsmr%2FrBkZrDXOpoGTmdY1GN6BSqogyT0HgZLmc48bcSUzoczgZA6sEThYgU2Z6nIbqJ%2FoYw%2FOYX7ZHvxbivkqjIs35CEYZnBGV8K19FeMmLjpMmVOjc0PQ4Xxl0PgVdj4c0Qj4i%2BXmHoKw%2BVHuZ%2FHPRQju0dOa%2BHpLtsE7aaj9WvEI0kXujJ%2BKBecNEMn5a%2Bb0BXzrrctmmb1PTyzgHDcocX6l1%2B5qECAR5%2FZeFfdAKDw7ryMIZNkgh0TXP%2Bsh2UiU36FZlBwI9y%2BRInHCrgbSE4i6tcIFZPh4yqzux16VPUMNflHghHG%2F6P9XY61rwq9yYxzn9FPNOzx2GuvRep70nQS8uZbu7NQaeAo79yI6qLrtTjTNCfphWTrv%2BPeDyn1rq5Cy%2Fnap6Mm5DnAo0SKqSHyKZ9zNUXlNtFqTB%2FuphwwEz3LKk4ZMYGQmBV1Q2W3wL5%2FxZkf0XjC%2Fr%2BvDBjqkAYAvNS1rclnKTeeLr83JqEQCcacyTS6foQF8QVSrCs0fh7%2FCkzAS427FoLrw21%2F1fh1hsDuzQw7ta1JcRf57R2JfLSb%2FiaDfrNpzAJxyfmmPlX6T1M7WB6GKXuTMge%2BGwzv9fy1KldXImd6qYBCr%2BueWMAkukZNs%2BsXppT6qlZm9knsXqANOdak%2BTGlDdimdAkySiQwCoORcZ1ILmu55vWqJXBLU&X-Amz-Signature=70b5a4e158d9f0186c79c05667226169357a566685104ca3cbd293d4ddf91030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
