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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTO7UD22%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTte2%2FxZHjGr2dVs9L4QGLhw8NU6LQeYGTO0IBRNaV0gIhANLoUqO%2B8rSYfrVdx726FdwcPcuwu1aogr4jFEWbiGklKv8DCF4QABoMNjM3NDIzMTgzODA1Igy%2F1e3AooB6peoxTGkq3AOZVI%2FnSiduta2r6E0m82d7YTbgwsV%2BiBmbVCmSu7IdJyIn4c6LGBpbiZ%2BTc1ScfgR5PniCJ9mZOoHYY6vJ8gMNgUePZi7fa2Pd8ICc6kel4PmM9RU75noufq028sD7p0slILiwvgrqOrr3Gjs2%2FNHWD8saHU4jdHzjNrq7YQFp5H5nwTQ6RFX4QJQC%2F3lqIBRAntPQtghb8Vnfgg2Im4BzWsmmNVdAht3gwn08%2FGXAgLLOdBucC65SszocmpVhA93mcsrla%2BZf%2Fb2POVCWKWTYang%2BX6o3RP1PgWUPbQNJmGKsjisGX1iWD2a5zafL8%2BGVk5aqOanjpNB2RNkhoul4OwPiL0GW4z6SOuwpEeNCRxNpK4yX5Wgv5jUxyW8jxOD%2FGdwuPpjiOw2XD8ikC2kUN0gThpSiE56wF50DCWIi0CMdnUs7tQqIKcvt9W0%2BVFOlsmongtQD36pQ2V%2FGHCTbjwO63Z3MIa4DBPDo%2B8aGSsHXpDL36OuD1kJmJhCG4micjmyLU6FRjv5CAlwoh2cB08yABze8iLlompC76I5w1vpuLiWeeA%2FiTia8saA859N9kHATgzmvdgFP8HnVbEUz9qP9j0sYQKSpOEKg6DWgxv9uE5d5UESxsO%2FxEjCss%2B3ABjqkAW4vPtvPbhG7ba5wryx1IPASEmyq0P9KvSWPPw%2BIYuzrmOqYXAsflFKYzs0gUysmmRQt3gnQvwkFU6ozmYQxPZzQJ0ouKytG5ZWiWQ%2F%2BfN9bKW4YEQC3pc6z%2BhfTkvcWLRjgSBo3s09vb3082W6F4Rcqvhprdq7dmYxSrS4sCGfHDvd0ASfdSk825v3ECw9HuSCGgTjdw2WJXGhGy9A92zRzF0ZZ&X-Amz-Signature=3640cf6c83e1b50df874340a3ec976b332730155b824b046b6030f24bb49a51d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
