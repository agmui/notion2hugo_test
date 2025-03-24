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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD47DKFG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoobYO4DBpjVWlsB6FNwGlEvqqle11Z5ir3%2BA0aYjAQAiAwFb5gJsFR0nZJ9OmL8PRH260kQDhD6j%2BB889SvO60HyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzb9Y6QNI1n8TWCVTKtwDmD0WtanNbTu5uUtdPRkEn1y8mVrWpdfGjb8uwiuO%2FVSIqqglUQPUtbQiP2GHg%2FqHPdpKC11mRh0MOx6YD%2FOsVYRj0b7pOGtnDYH03MRmB2Fegxt%2FxCpzYblfF9J1AKHtZOWHX%2BWCKEVeyFUBDvvpzDO%2BTsswy4K0QrW3sixBw1RemxVZ00rFJ2fBOs0RWFxSacCCduvGW5DJT0dM76vTUcvGTa4L1%2BMxHMA8McTZVbH0d6RauFmpr6XqnT2pMSOvOa%2FhN84mhmsQqq2O7h4NfSkVle0HyVKXj8%2FKF0eEqlvXcECQ2ZB6eDHeTyg8L229CNmnjgCP6678EEfFWvPMUKMwRQA6svIsnBxEV8fLhp04DRE6vW20iuhW2DGfvkdzzoQZVR8iBDqDlZrzwz31bvhmFUrZn7ZlcjTMY9ULucJjBTVrAHWEgyCq5kQOmAiXGpcVMGilCIGpZbsIXy3EWf4CCOKaUMtuu4NjM%2BvhTsfoqQA0lmWc7PqeHesAKktdjeXconlwrgWK9fQwojpkoilYUAvpL0OUHzKQ989d1C29tlwZ2Txiv%2BWItodCSaqOPRIHeEXxfiLzjsxufSSpcanUZbLJ5J259U1mVEuURfGV3I0iLC9bWIfAdSAw%2BeKDvwY6pgERGfGCStR3zpRJ8OXGilMn0hTGnqFGeCNsvhN5XDfL%2FZTExumxdVsylyzZPYjYPKUZ%2FeFWBxH8y7ZdXwv5jOqvw%2BHnMUR7%2BCfv%2FWkWSARlkVMXPorRO3X6Tf3uW4Y9efWHNfak5zRlB0KGo%2BXeikU%2Bsfj277k5RUY3yKs%2FXiBpwdODuvMPpOEX8oGD3lCM2FJesk68hCerNoLbkK47k8dUxfrLY7fR&X-Amz-Signature=6f934eba52690cc858a7716e4ba2f07aed3e43a360e716ab02d41e23e6fd2424&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
