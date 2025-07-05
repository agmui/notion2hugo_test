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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X75LK7MG%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGmXeXetDVyLAd30%2BoClkYZwlIjZfahypCe92sQEobF9AiBG82QzClfihZGEyzj%2BBgop3QU0Q9bG5l7hISqeRt3hcCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMjxsvuS6hU0QVl1p6KtwDqmzkcZaF32krWoprMrIg7BacLyVfAjYclPoDwfyyV8AgSbK6XSNISndq4QEJvJ1NFrpHxoNnyj697He1QbGGV6lg%2BoqSwMSVfa3XdT4FeTGZxwqYHJQdq5nxLuZyEaBJUUNXBy9l1nDXmhXog4t%2FyNa6R3E5tzcxhinpv0IA7gqCRrJPPGdAcHCQ%2BL59ZQ6DzX4n3GvxXzSS2mEU6epkBZksdNDd3TOGzz5Mv5u1oIuONOvZAWSnFtkyGOFExHhxtbt9mkEjV0SvNw%2FfRoNsM1GlZWbmtvehzvr0cD1ZicRCE%2F8SIo4XFr%2BpJHwY5%2Fzt8y6uIiVoLCpDfQpudePkl0dRFy3C6FVEAA0kdxTjt3tKK52qtqvXOgqD8BACLEL1XHSbZW5iyiRZP5RTq7u34cavuZMonPORDFkzx%2BTwceu9%2Fp2fWSO1CcAFy9TKCU93%2B6MzAA1xGuAC%2BH2JcYdYDLa%2B1dj7lAY%2B%2B1jf7YsxrwVoAaGXFd%2FuvJvnvcrdfOq1XhL1ivQDkMjtZP1%2Fk5EQjLvp6QGRh1HIYphbpXg5%2BwcaZiNmfCeBVYcanknM9204sUhs6qZ0NUJHQCjQgVjWckcj2gropYwKgBg2s4w6cq3gwnRYGyqOJgrH%2FUww0YiiwwY6pgHYEJjD8ZxbJA7CglnKYMQvDOE%2B%2Babh2y2OQXGR7G9mX8LABiIzJJk271i2a1SlTnjaD2fn%2FGRIXImwUCu%2FeVbtzMbdEyu536zgx45MICG3XJNHCtFraOv92Q5msSExj2flT%2FMwL%2BJgowxTWAvFgGD2Q4UJPwrVqKfs3gTka31K%2FnwpMY7bh91S3iAtynpOs2Cq9vmbKHrdaZKMzUyfswwAv%2B%2Bvv5%2Fj&X-Amz-Signature=61352a4e0fdcc47bcab2733a572ea4695cac1035f00f297675bc8433cdc499aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
