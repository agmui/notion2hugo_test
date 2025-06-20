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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUHUEFBU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBE%2FWZfIeARkE1qWgr3ICbNfeFxKCJXnkFei86ouXK0VAiEAyM0%2BAH%2BtWzwjb6AeeToYM0wBUWTdyqgmyBFltLhuODUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdU9K1Vhz9uXLRFcircA9pqenCffSqzwD%2BhkqyFosvnlT%2BM4wYvNOYyrTX8hnrDMrGU2XjZQROQzFHAn7TlJFdO%2FhFvigzODmHltgXKiLpF7mcKFA1PTnbliEZcsYndyhDjKxvBmW5hEb0n4hi9d5yQj4LhcnFSHzQqlUKdRFjp0f9DYrRugTuTb1ILKwf7ipfdV0OrVJtCNwEUR%2BiMjeEFL9MaeSFeW3pGbqFRo%2FTq7RhLh6mILz2FSzqbLGjFGG5ZkI3mOcET5zht0hcptoNwZYnZGyc26%2Fm3FGfVsBhSz72XgQfX%2FbwRaqxFXHPPbdrUz8wX5l1rHKrThyXy8%2BWYFRKxDYMN9Fee%2B9UCADKNN39jn1HFCHHESYqBfntWFn7Rl78vAtxpaU1t%2BVNa9YWCXrGuDTj9NWblj7fINjTdrKi%2F7rqlYi9CEdHqi%2BhsFzuSP%2BDddNBMay%2BoiYeURDYCOxC44pQlV9eV5xKU9XKrphPEmDFfSvojk2QbRwJNbo5LTOz4IrZDHUbxKplkzFzn%2Bw6mkPZ3YxMwIeP850rhgqE3uIjAa1XV9YaWJKJs%2FzkzGIOld4vkc%2FGNDWhHmiUmXfSPJmelweXhjdZ9mFO7JyNRGGm2cZ%2B4KnM4FnbjQQTsDWkHqTnxGA7SMM%2BN1MIGOqUBNfXBGzyvvVgNxkCiiBYr2azKiHBC0eQ2cCmJAJB8nzieY8EvvCvUbVeGrM6CElEqowgWBqgypQf8gIqg3FciL5rNk0pCBA4owPgi2wma5RdyXb75mVMhhXg7TKZUlNyQO%2FP5PJUEqrEQYplxl3i0xz%2Br0CFg3JRgSySTfgc%2FnK1Fxa%2FHp5robM1CjDy6wpk13r9hf8UaomZjlAECjK8dLz4mUY%2BJ&X-Amz-Signature=ff29d30f76a19e60c8f9f8b16a505c2ad088fa741ae639eee85a6a633447b1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
