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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTYI4JC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEeQ8zNcYtwAUCQIikP3M5YUfrsXS0jEQkRhOiAdSoviAiAsCbcp0ysf4qZsC5GAb%2BUil%2B6Eh4ilJVhLE2yNnFp81CqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTnvk71zDFgXQYj9KKtwDw3Atd1hyBYswmtXRrE5HusJ0WPrJy2X6gPEYrrqvT8TKXi0afzd8z%2B%2FTmE6Lf7xggv8B9iJOnjISJ9yyHrkapt0SW99CELfJ%2BbCHuZLILo%2FXBZVi9nFZQFRYqtgK%2BbBSAYCTY%2BBanuHtVkWhEaSaEp4fLxgChyUIjjJIY7ejt9BEfRyGimSBJ33a9kkXNU9lTEuwGPHhoFRMw7iNRw6Yk8rT3J0e5Qfg%2B2SJ8ssI%2BZ9FPe6Z7cfHZ1fHGTSmJeLNxKOlJCIv8LJTvlQkE2GpxFvvQBaIiAO47rjZOoa8vs44iF54WlbGpSzIqDb53gL6vC0Daegs8G4i96DcJBQvppBCLTjL0ntZHyzRqju5jggO%2FnVUA85GTKfuwHtodAqZ9PJtFhJxeT2U9%2FvJX3yR7JpwhDTHf%2F4v0btNSSJ5jXJT5bzzCp%2B6cWHcRtHpQqDnt0t10W0BcvlzN7QTCCHuFUrYdsXY0fPxMjIE%2F2qCi%2BpU7rTYyrOIpBvQn5J3KNMldUm83r2u6YUqUHNLovjgl87G1Qt9z8mhYzklRL1l1jNjygSRPETi%2BLzX1OR6ryQKK4gbYjjI5FQFdBN7rTAduWNo2IZut%2FOb%2BuUwrtcMPnDXRqtgNSkWoR46WLsw4JHPwAY6pgHBn9Vc4DZe4LnFwhWmLGwtVS%2B7tI6g3jQH8UZbXqTwhHaOOlfwicJVz%2B8QxFAv5hEGPaLcts2G11v2HmPhGBkb72DjKa1999LbOFcTI5dnvpdJjOoAUDPLV5xjJAWEoHfmiSzaYg6xhr61ZzOxaQm1IFClNuk1yw7N%2Bv7gduTDaLv2XDVoysWyXHVYfLzglnpaUoOjzwAuR2i7nYi9jK6vronBEJgy&X-Amz-Signature=50ade4eb3a780b8da1dad11e4defac217d957d041a5aca03a0db96a0182ae5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
