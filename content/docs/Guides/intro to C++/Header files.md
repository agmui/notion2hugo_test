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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXINGGUA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBIid7v75yJ0tN9VwEwgAs%2Bh8y0emrXD1cf9uV4l3JTvAiAldX%2FRgvPmH2u1TIRYNG1OwguTgCMP6J%2FgU1tKpfmxPir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM0OjpnQCDFMLRXFWlKtwDeI2Czud84PiNbK0FCG2UiWeD1xY3FEKmVi6LSzLlJSrSxDnkIIKiZJV3Kk9WCep8oREvTQSYFiE74lv7II%2F8b0f%2FmCzX4NzqpmD0x7dNqPXV%2FH83QBsicFU0WjxL5Fa4aCrM%2FpYkTvdw%2FXxLQ6GuL9NwJky6d0Es%2B2wH6cnAYkNQuMV%2Bsuv6l6Zx5Eoe5bKvttOdgqU%2FiUZ6udMC7i6DAhr%2BQf2a%2FGJ%2F4zjqLmTIdxuO%2FGc7qaXOgUINJLEXy5zSFIfN1TTZTUZuAP78zJ%2FoVgtEl3109rFLZ9WGUDbxEvB7gJc%2FsS5mup7Co8alfRFb%2FMENcdGzqlAIrcVO%2BWNK0vDUs9s3HD99VJSyIyluTwoyHaHBADMUEt5lkuMWpYDf4CoHuD5Mp20nwzokRU85R704EULBdsKe%2FQ%2FpX8QCA0bewzdmMQWXxJoOTAlMidEnREtjEDm%2BJjyPA3WT32rhM%2FuCC5VxDUYsyxdXUVZatGmC0vgz9cR6IM31dJP9hnlB1X91ps4pq4A1Ss9LXXikMoevg3b7pQob28xdL5ESWQD2FQu8GKYW8H%2BaCj0F3Rb7MwlorqD5MwJT80yA8IvUNvxWVQeK32srsEc8aI76qOuJTp1tcqInHKo0Q2Iw2bTmvgY6pgFiaJPgd8Ald7SZ8WLEneDrB7mT06IvNUFfIozrIBHXtqgHErGVAMyxnhC8g0pdKPqpWc05SsNHgzoY1D%2B1V5i13eM%2BzAkGa8B4bS0Yk8Z7oO%2Fi5naTU%2BajF%2Bw8p9Bhv%2B4Yx9qspj4sC6YlzgfPG6eIBUUqqoMwlrmqle9vm%2Br6bC8pcwG%2BtWceAvDtI9ew1gHFSZysDEmU0foqLywb6iOfdFi6fA4%2F&X-Amz-Signature=4b8ba1c42ef21e3afb0a328b10f25f505069d693150b0aaceb95bac99ebffc46&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
