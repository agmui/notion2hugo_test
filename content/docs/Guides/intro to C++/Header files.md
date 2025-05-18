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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QEVMAWL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDd94E7Te9QT5RPidYMCzb9IqOXve%2Feg1kITWWDTjXq%2FAiEA4wIgdlUC3Pnb9ZOgmpy9ISTk%2FkfyHpXUseO36q7q0Dgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDE8tHaatpkNGzHkvACrcA4zPOIKoarBJfuhY1oF5jh2VZcbAfXr%2FzTHoUo567L%2FJkNmyrsfpvxlhBSlqF3BUo6OlekYqTlWXset%2FbRK0HApjBfl4NQ1k0MdTH55jt5sgYO6TGyO1VFq3Y6nL5sE5xmHbz9jfz0RG%2BCIHPRXaqaxTVUTtCQQZEiBYRZ%2Bn64wMLFa3P9CAYdOU474588EvCfL00i7s2ADySvZAYpcQd0MwXZIacWglPwOb2hFVRSPmIDMlrZy1%2B9krUEK7HV5yiYBuRZsERJy42fr9l9iy4bJzFIP5A3Aj6mPpFcmBdcBuIshsePCoC9xMCeEEzRgxpc%2BY4Q1blndDj4xRQwv2JuUdNdxU5zlTUgFtTudeTLCaYxCSHn4j62A2BsNIU7bhTFVNNImFFbxnYP8yJOXEQoB%2BVrj5Iydn0%2BqjzSfjWOgUfHQO6hienKLqZGAx4uZfmV526FZeBXJryOQbk7Ucxac7BVIxWT3dpL82laILW0chovkxRaylQ3JwqEIcM9FiA7bRaGhH%2BoVtsyqOrDDmoVkT4jnbX%2FG4H58R%2BjbeRdVCS%2BFoIcrn832r3rTrsREtYppWurmrM6rq6O8StyuUg5O96bwOL4wZr4wbk8tTAmjscxNJc7MUqmNAuvCwMJ%2FXpMEGOqUBh3WAdsrxW1gc8sWn2XtOyZ3d3gXXQcpmPn1RYUqqB%2Bp2%2Fwob4uiC140VLZTRAQiYJYjjUeaxpBpuyHHCTAYHAjrajM%2BHSzZbXXdHN6D75yL1TDrHldeYMXUkSlHKep4EiW15lXJQ8kHPys2ZyqqgwJfI1TMA4t%2Bas77qhnmVcx2Os2ezghANZt%2FYLOgYHNTJocMjf8%2BuXfCvB2%2FCRNjkvtoUNod7&X-Amz-Signature=f4822f9c2e0a4f2d980efe9b81f0794ef596b5ab0768a1b2c6ad1e8df0ee4f67&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
