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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFQWSJP5%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC83s5pO%2Fbo6DBRho9fMlj8MtFIgjJta6ApwYKFJIm0vwIgE5k46PTaD%2BnU3Z5NWysIoBVC%2FbRJ94VEHcG%2BblfxZ%2Bkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJHFma83OrJ5185GfircAxI2hseyW7wH1%2FElQMz2JLDJWatXwK8m8XNgUZHp1t9waaMohwrw%2Fxm6c6GLMM1mLLvCJ%2FwuCtmSBMtQJF0RA8VBCH69fddcffJBDEUjTNCgdBQLSSxLNKXFe3qS29Kwj33XWtyVbNslYgYcD2lDt51AZlLXiqLHk9%2BAJA8Iid6pkUCj5P2gOEbuDffGaY6ULCnRfNePo0x5%2BXwuyrkBTiR4F%2F1%2FkuWdM46EAZOrmxWMYmyOanRJr0R%2BJ9easJrj8kX0frecKf0AdZWIAL3oiFoJGlqO5E56EilYxtCayX6b1lrfeEmvhHQva9AI2VCvF0Z5CL9ulZ5W1GEotCJh%2BmT%2B9OAoukgARwOlS%2BTDe6lB4ep1CFoc797y0Oaq3XQMzlvNXibP7gUA9bPuf6tF0VLt2s5fm1ASeagTAFwi4%2B7FNCqNaePdQpDoZdYIivoc0U8KhZsjEGGP5H6jV5IcegAlDEuAjlFGruQyucx6e0Av%2FtuuM7LODL8t%2BBhYrFM%2BWYL0cjEAshp6RyQoto%2BS7xc7iNr2A5xyS9h0lkbkdd%2BNWj5H4QTE%2BLvBGT7LBf8q3FR%2B%2FVEMhvswpQUeJO4SfvocZXB1o5CXJUrJNQU4d1AywSvGG%2FzCjoq4LPrjMIGQ9b0GOqUBsQFqefYfJS9chVlQf1uOWUIpBnnVl%2F6SqwFUWcHcKlNysLaqT2YK7ezBalBaX%2BmrvrHl36vzyMxhUzXWCSo968IcHQjh4aKHqwnx0rPJ91XAMaVvu1vT4pjyP6DbqTctWrVKHHnQoL4A9PURejaTCRGV1wmYcYS8GPR06hOe5f53%2BibdhsKAHWXh7dA0sLjzaq0G0oazQ1pq8ZcKm3PvuEV3asde&X-Amz-Signature=68c834ab5c4ca2bfb53bb741a8d6dfc8ea18c99d966fa2bee3e3c2de39d1f223&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
