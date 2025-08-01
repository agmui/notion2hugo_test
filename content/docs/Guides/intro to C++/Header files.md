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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X74RZDFW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBakDi1cr8wfB%2Fd2RkWHJwqt2nNOt2DvRjX3HoWZhX1qAiBmu%2Bh4CMaJGBqVgbe1qbqz3spZrUbyf9bx2UEvcv0PliqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfJAKPzBtXUIDbjdrKtwDTQ0ebw5soSIe%2FQB8eUFQTWteZQjn%2FPBtE802txo%2F1I%2Bw%2FHtG5jTUC5RZl4WcZR6p7Iw9WfPdb1waotSSHIk4h0lW4VaaIdYOFP%2B5D1OGvjPUgXrQ5FMGpvti%2F8HdnhhDQp2BNQqwG6DB9wMgosIGn6rjEDcGvO7nCfGOO6DiJEOh4eVONtXTUZ%2BAR42dfo9Nto6CV7RfrM%2B59pN6NqHTby54RpOg%2FG%2BqlJY8qc2JTtk9WrLr%2Be9Kkdn3t4Uf1OFYARR5Ovzqf06dXsyNRup0dkaRAUTR2%2BTAMFuXQY1gfgPRDMHPDDjAhBELGmNxUQAh1Q3te9mahHLD8A%2BEj2gCfCP%2FqfoTsbaaL84kjT2D3zEzaZiKfOLdgrWPdezbLi4AFLwARFUF3rQq72mQ7EG8TPlPQSqVPj6PufzLoVP%2FE0llLZXHsaQdmFXb5K7dqjToyzuaPZ2CekKUVvCLtaek79f6837RDoYbeJKKTj4GwKREfoaNs21bTHgxt4JIakAkNQiy6QcdH4zdF72C4t1wKXF9Dq1V9EVVHf4ynJdsSR6sraJ8kQ5dq2dKdj6%2BJeQq2tj2s%2FTgKAFsUOyYBXJj4J4nUL0yQQoeUfsPHantvgoIuGKd%2Fh83NEE9pS8wpuuxxAY6pgHX4%2FOlckC2gMe7tNWVbAAtIGY1Pp4w9x1SaEeyHsQZN77xm%2F34hED8lwpfGrb0T%2BzvzdbNARstun7vVxkFX9Ne9kQ2COgJGR862rHcVoRKN4obAYKvGNhKeXZmG9cS2VTCZFf1xdM4A8dToYYZPTF4VXhTBrwq%2BM4Zocl%2BCIwlX4a9xHL1fKuv9VwQGxdgwnotn53oZFN2K%2B%2B7QdkEW4trAioc7Mzz&X-Amz-Signature=828c63882739152852ab6061b6609c4075d3313e46fa0bacee87fc7b1f1e9cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
