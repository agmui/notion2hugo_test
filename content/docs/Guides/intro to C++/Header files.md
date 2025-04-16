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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OS5BMYV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTOFwupWYBGoavHCKmL6qoZnwPpH37EVJ2fBIkOSZx3gIhAMv%2FHtKPAwxIiDKLfLNxyHBXtwVQZ2IeBSFUjD%2FTo7NZKv8DCEcQABoMNjM3NDIzMTgzODA1IgyOeZufUI203ybShgQq3APe7FsKvkvkeOBYQcvGG4bIX%2FMEjM0PMQ%2FlExE4xMYd7RqxFtHCOeQ%2F%2Bna1PbVq0ysIaHsN89Lnyduo93GKji2lbSIjd6F7MptkA1%2FjpEt2yR3Tuh5GmJhsKIRP8ovFXHKywFfTojUdwD3T3S4GSO6aDA%2BLJQPhB2arqaS7JlBXqPVPRyRJod6QrYzdTVYzO%2FLeT2esejF%2FVx2FOW1uPCpjcno%2FtvP2cVPT8DLrM8bORhKlNzs1JlsPmmRmOUeE36vECW2oEsNjeTKy1RwvJDKJ7e3lUi06RKK8JrpJji7xt%2BuBemmo7tRlAi6s%2FPSO%2Fm28WcgGvyQDIjTZ8YSu6hZUxap%2FZz4Baw86tMwe4CGbFNfIk76Oh18U3Tl9bJrdfW1IoCwhNvqvkioIPGfKwbcVJkiUhx6lF52LjKHUrmRGoX8TCijy3Rx9XNzkJPGJiSpdDUhsN5MzuL6xRxcBHKHWgYyZmXveqanGyGTjEiD8pfZNHgebSLzuQpDbuPoghvY9t83ts%2FAodG19ltMp9C1KdoFf61fesawf5Ip0a0pOP42F%2FBFwrToQM9n3PeKj2DDIXh1gjI2ZHl5zqc%2FfPNgimLzEAVXK7wDNzWejTamjcN2LOnGAalE5k3Wp9jCi4P6%2FBjqkAV212bGQQpOaVkp22dGgtAYA3iCQEnoZZOY%2FQGnzDapjUDVmE%2FKvX9T5mR42chpFWv7ca6WO6jAJHIbwn2QkZ6TrgSX4ekZ2QoKkvKDzWQrmDGUl9acXrO2Bhszru0I4IKPQHv8lvfMaTT0Bpm%2BYUn%2BUNsPqOx2wuotj1Xb3Xr4vCbIojuPYaKCCWjnLxU%2FAMLORR3YssdPlVKhgTwCWVkfbrT4M&X-Amz-Signature=6d3036d502f11f78317379ec92b70bba230cf51b7b44b3223bffd3ecbf78558f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
