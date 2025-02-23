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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JFNQBQ2%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfBrcQQk%2F7y%2BoeSFsZI5PA98MONCxvvmuS%2B7chLM%2B9NwIgFiiLnyDQ2Ebw39ibw%2BQgxL20NCq9eXt%2B%2Bs2NEzsrvw4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaqOApUY1CFc6lCoCrcA6IDlr%2FHrVvSjtnF1sWzspfFSrm%2Bj2ShwfqN%2FGt%2FCLYxU7idrFV31Ulk2yqF4%2BuRKUvoi8z6RDr6mVKQA0C5Wv%2FBYN8DJNV6vGihMGY5QfUrReqrOpNYzpX3x45fRZy3pIZ390UJFCAFMXoXwEl4bUgninuHXNmvY5vnR1mPSa8jq%2BqAXQb4xo0ouenDzuXz8ltxMGQM8%2FbTeSN1KfoG8tYOPQAkxMjuSdxhk7HbTja4xTWwQcodX0JLQWA6Bjzu0xXuSGHzNSKEc3YZPIcNOi4joGS3oh%2BPz6BWXWkozf6h8Z3X6xL2yLTyLZMfv7nDnU92H968U4OjRh9mxVPIEbFaF%2BqqZjxOmzwjnCLpmZFaFdTt%2Ff6dXd6PsLV%2FKKwuR%2BwNUe%2Bx%2F%2BWAvXmVdsq%2BOLJ%2Fz7GpqagJx2abAkhFkKK2f0GwAauhkfaXRhUa0NuaRLkX0yZm8LJuMQG89u%2BGuo0N%2FtfeR4hti2Jzyd%2FpxnU%2BBI%2FRiCz6%2FXkuU9XThBMTKU1KFqtYahB3W8L3IYSwXJS7MNxZzCMrtexmDfTiCs6fVWwAZIpy7HiuljDAZKYmvq7%2Fy7CNDD6K7Jtra3DKAggnFevUl%2BQlP2qnMlZ3p1jnGuk3dljAVbaOG7CcMLPT6r0GOqUBAD4hJHgR1yJ%2FaRnQkRnq%2FXKFUAX2u9Bcw9CQ7yWMegZiuUKTxg2FjRW4Re1E3il217I5xaeJHyJv8Ra87FgQkgHTO5Ev3YCRCgScjzhXgeR8XMB0IAFdqDr22GYEFJ3t543%2FFeW9VhuhkwHtefafg44i925wMFBLZ6IfT0hPCQOb26YqkxwieCstrNE4r%2Fd55Fx4hd0CCqVfqJbszoIWQLcuX67H&X-Amz-Signature=b0857c062d489fd1d9e4c682810bd01fe3a6adfc4cf47d66d1a65dfd5b5f7d36&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
