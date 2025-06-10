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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YDDENU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8jHqg82DDdFsWqakAe1uyF4P5r3VjzqS2thSOJ6w8YwIhAKumEWQRo2ydqNRlmjTSlgEz3glywlZkqgYedNoMs%2F00KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSTfm50bNSfZnyEYgq3AO%2FvoKDeKs9GpJ14ejPvdHejg9xNmVLkvG1BXCamV5a4KwaHCjjReG44%2BjHlnsY6O5m9WcLUFxVkywEWJZvjY2s0UoZpCXBCypAiP%2B8%2FrzSbag6zp7dVdW8hVBz7dAYwK49oSrTYk7LE%2FGA8qUBN8cFnnD4Qb%2F8f3czj2bj7zS4JND2FsntjmjtRPLhnsjAV%2BKUBOfaSUF%2BepLQgtWd8H5oMz7gBVJ8fo1Q8uAHhVXcYTnR0WsrUWWQ1h%2BODp%2Fnz6B3CV%2FYPED9b9wo%2BAN0M%2FKC%2B592M7SDwSWhkq1djL91gJBWGOhHBbtSXrjRv0QP%2FalTqDbDuoqifetEQMAG2RHsdyOvy4dQ3irJdBhmon2KyTYtIi5fJ2GLimrDaRt9B9aMi%2FMaCXF%2BiNmmZgVMC60qCtV3XHkDUeBMlLUoVUrP3q3lItvbfC2u48qlL%2F5oqB4VcpRBX3dRY0lx2A8Ddpd%2BLUr3ttWbzHJYPAYMTSqF%2F56efTVqJwI7kReeqYHiZjsIxLLcnB446kR%2FCh%2BfO6D8%2FRRkvkc5qMwRm%2BjdFSPp7Avjcrp0geve0LPdgrQPUDF0qISyJl9L63%2B0O0Vm4h0%2FcewZOy51XUWqpHXrcVI2v896WW6mXa5KtQHmeDCawKDCBjqkAbkMlJprFjaTmYdJDcjZYH6ZTWN3Ji932nNBI%2FSRJJ5jNQCxDDYu1swAdnvmrqpG%2FyJrULJPNXZLB6qMI0aDWZHPeLlQH7%2FpYzd1XfagChJJ2qAoP%2F%2BuQ16KBo5YGs5nMoYSO5ZukMTHtfDWjnXqJ2Un%2FuiqWvyAPx%2FOg9aorWB3nqvOCoDrlnDl8pJgHyNrjoOhyrjNjdsd6ZEabQ1jhwX1dv%2Br&X-Amz-Signature=00f4effeefecc1d19c982c2a188d30543d3d9c5ec7f6dfe55c42bbe6892cd3ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
