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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIPCUK6W%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZjBtQVsKozPJbPKyklIUaHW58RUn9qoDLkTsabHY72wIhAJqvLse1au4A%2FBX9A%2FX3ALRcVwwHFOJkWZGs1qd3KtKoKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGxsxG4GY7AOK2TrAq3ANc%2FzI23Jny%2FicieLRQQAZ201HrtkfJH6kB%2Fm%2BLhBg8XLJAJVsRb4QISlWvTsJbsA7Fj3En2x1rIbLgT0dHgfwhrQZCTFYDPNLSJwQTqS9S7R8jrtqRwSIyaRi3w%2BO3yVey7jujFDLdRlvFKv87hX3XJ9362zJyePtTMrtB8NPZ761ESrr3wbFsyT5jG2sgpKno0Co883ABlW%2BFamweSjzBQg7frKfB8aZz14oPT0lN9jkv099P6dyL0dMHgnGKFSFDYSbkF%2FREl4zHBQgSwvCpvnroeTyk8CKG66je6c97TknJ1txfUryjsmyGp2KVYsKAoUcCldCLLwsESIaTgwRnykcCXZnseK3Mu1Y0lVYf148nTtB3Y93BAnA%2FWtksRvlIQrln%2By5yaFFxIvmH3BGTzHZZ8MVqFQe5Cp6gVy7Cq9CQGunojICfRfi%2BFfwIlN%2BCKYra8pMSKIBFuRox8VWp6QdPDvUFnDNjqgON%2BsH7NEjyM1dOKI00IwWMl7O8x8WfrjjSc1PJ4sYbNLyGKNbouu9h%2FMm4Oqdkh3lrdbs4TXxW0M3%2BQmhSL3oTcWPlMVs3H48NmFl1XLFZuC0xpIvFMnfs%2F8JWeoXjuzQTKpmcfr3z449zQaM%2B1VTfnDDdsoi%2FBjqkAZjlEfX3ojgWKbJjasXeSiltStdFoVGv4MAtbuSEgl5UAYefUvWpIGeW5E3DAh3KQzxYN40lY6Y5XjERzPzs2xEb5hzDHMMVE5HSeua5YHc5v60DKUuXc1LUEfFyXxzoA7hIRcoG7oDUULVdx%2B7XLnPNzwAgZ2hFjOCJaJ1yQSSzBBFNjcmarVA8IsiZlGWXmuxs9F4X6smCCGYNQn%2FBAQHLZ4JH&X-Amz-Signature=ea8e01cb4b20ac9151c4bff52fad76705829dfb8958c1e6a9e1f5c852a2bd3e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
