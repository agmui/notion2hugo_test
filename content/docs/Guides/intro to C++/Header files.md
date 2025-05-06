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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LOYKHQ7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxjr5fkvaYcJQ2hOi3IocNBucjYyuOvxXFlGbuetZkSAiEA99exhvqFEutJNC4inGoKS%2BV0X2Cxskz9o0io46%2BlEE0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCTt%2FmX51Pny3tF5hircA9nG5BSqnd90BguDA8RFnODGkukb3Fix2udFmRjBVHKJk%2FqvuWo48uCzpKc6zLD9l0L7RjCit4Z3NopMEJNzgEy1CC2sJzipjxngUIMlEJ8%2BLf5i8gU6VrnOoXMjPXLQPI05dAIRb2q%2FhEfrkUITQocviu%2Flj1%2BptynNrHNMHuhCcTUMX2C%2B%2BsRYy53GVgPkYJO8fUOdPrcE1jzQC6Z939s9B7wu2V7tggdsVO18Y7hQwzzdO4czQnbY4ZSaFGqQFwJWhVLa7EAii0FEfjSnRtiO%2BBbR8Ahvi6dxUzTCi5E64CmmLRTX2TThHVOAc9B6s8bmBWAaohhcilTt3oFtt5Pd8XUpWYg97SWECFNXgGK6eMVnv7kNUyEnvvqlM67XBcCoBG5Qgwwvt%2FAxvoRy3HEqNGs0YqhvG%2FiwKMbcDTsIuIE4QnxV3gbRY8xZqU%2B8rzFWPG9d2e%2BTGNoa1Qm6HyJSE7GBQXoWSux7cVT5c9J1O7FJRoAjU8sEKhTihPBg5qNuUUqHtBdyIZ2%2FQR0oZWG1JPUKhSx4W1%2Fr5V0C2oAp1TuEaB9CXD9HKCqFNubOUWXWbQtNFLdFrMikmWe6RIO%2FuZTtH4mX5Q2Jn4GQRes86H5Ih47U4TR%2FpeSEMImY6MAGOqUBZ7zsqkhmJsKjOarR4vBdn0ZdyEHD13ON1A6TmtnP%2Bc%2FLPik5gq9D4pQ7tqleq9PPKlZxeNohUN8IppFwUJwSTHdtCjCd0m0MSd0thEhnmBuqEf0tAuhdBmKTq%2BwWoaEwcvKPnafAAYrgQV7TTrhdXiUZLr2qYDa5MLLY1nRTzdinZqsSWUg4Sy4gS%2B8ozVkH%2FdAeLc6BHylI4vFzzAMhkrWRuYbR&X-Amz-Signature=d4c479aa9b64a70905d0426f369d8a06798c4216e66c5d15eac627e7a71669bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
