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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F4N5DQ3%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BbL4U1%2BLskeeAcOpDUDxqjb2xgf6eOPhwg511KRu8twIgEbGezu6%2B5fGIXiOoWHAVzuRSmBzFVuwQvG0iNxZERIMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZnckw%2Fvhai6IvRfyrcA07XfZex7ksHW4nN9kmGgLzid%2BhtQ%2Fg0vsGqIV33VjIkjHNeunTBG4qs9m%2BMsN4hhAChLqS8UmUBv6bXLZeT6kDkwl6n67gtAkKEEFYCVH860YhXW9eueHrWln0v4kEEXcVQUFEc6GcHCVQDLaWdnC9qx%2BldfJS7T2SrZYkhrzZTlZ5eKIKF2CqOAWHzhc5WJwiBkBd6QJkCdrSVJxIiCBIdRAMWF1OLGcU6jbMVKU9OoZD%2B60bXWAMYoFjI1IZcYMurUvUshWIlOhIqzHfgLv0y0hSlojnfBpmGlS5EPgY8o9rnhyqGMhWDfbVBEovd7RAQk8s1V0QjVWiU%2Fz86caHV3Mj6JmJTxrtwfl7O9CJacU6JeXVIzEYbyTbcFtvwfkKRzg5DNKG7mbmYaOcYbfnih%2FhBt%2F%2FfzV2oJw707i22zTA6UVtaEMPVJNGvXPCkclTqX5Jp3TNmf0vnvmqQMQ9tg%2Bd%2BgeuMt9V%2BjZII8AcYw%2FpbgAhjDxowFnKlpWtEzTTjs%2FXflw1mySvba3SDy8aNOhRN9ii5TSTIE6WC%2BaVaFLt0VwsCq9yGirzDZl42ZyYIWdRZRK%2FdAC6BPkF9BNv%2Br3cnTBG7sZ7aCAg7gSA5smJ0zhHht3j0BUUEMJ7F7MMGOqUBbp8qQP%2FPNqvh7QxZmwlEGDxBw8Zr2vsVs54wpKgaF%2Fk5Y%2BtRu%2FK5eWVYPr9mINJHHQv%2FU0pAnf6yEyagqsUQg%2BqQbQfUjpfqA3FcQcteWMe5zUzpzoByQZ1Z4svAcbUJ99uRYs6vGg3fck%2BS%2BMxZMx5kVb8%2B2bCNWbDONpMNMIiFkeNFLhrqnnrqo%2FcFp%2BbHkoP5i1gMOtnRkTZJKy%2FL%2BphQI31X&X-Amz-Signature=9b6f40a74a41a8ddca910897c92b71363fb223f3a9c734cc94168b409c08a06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
