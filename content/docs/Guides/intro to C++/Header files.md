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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXULCZBE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAY7HDCSXHWgHwVir0yEheyzsxAAsN2GuVvOXvYX5OhvAiBxMSIhnRgPzbKK9oHD86iyGCQM6%2FDLhfcxe%2FXvvfB05yr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMib1eZcS5nQYyVjfcKtwDdDbBBmyB0VOWvxzKjIgC4P%2Fgdtj1n7Shz5DWPR7SycTivY5UFCad8L5ipDIDB2UCSLYzci1QSFn7T6RfMz%2FtP1HpAQEjnzhPj48EXEq%2B6TcdiI8z5V3j7UVGKyxGu%2F7oHsCTlykgtUkvp9o1AWXB2RZlDs%2FmSy0lU%2FyloZuq%2BPkomKjLVMXfn0d9oZ6yW5qWQcDo%2FS2pk3TXSYWh6Dj0s3eJpgRbZjEJfO9CSwjFtpThwX1pHFuHeavtzAZCw19HdF6f5TxPCd2vELBLHSDJNJPaiPfe8iq2xPrOBRNfGswXUR3iPtoGvlY%2FWOY%2FR%2F00lYEJN4nNu6iGxYP1meFgWBTr5i1BdZI7d4XrO%2BxXVggFnpRmGLZ2IsueUULDXYn5OQByf9Byd2UwfcGwy0pC%2BcXhDZBw2HR%2BZZcoo0S8LqwSTHx%2BYpHQZIsbShZ8zYgakhtb2CPyORh4ZZlVEgOIlkhhMqoD2wk8cd%2BpqwBopUyTlSnZ9S71aJDpTMbDHDQDwdMgz%2BsgJZ5IjJb1NWq1cGp4A5PPKA2rsWFT3cjCebNbxpFcbm0y7I42RYBiPp6azaZzQmFSt45GquT7xVLdkd27aPq%2F7wAHgGPb7OM%2FYb1nXJmLgFHQ3bQZu2AwgKb5vwY6pgHjyoEyReGkPmIWiTEcEOlYsmYNx9TCZ1jrbYAiVf0dzgr1VxJqKh0%2BLKWkeDP9gNiEEFlG%2FaOUOAgKFlS4lsUuT3a0UA4kOcbGJS%2Bci%2BR2w1ZX3URkOsJohxoaCUTB%2FJEDvdlkMItWJSTqQHz11LnExUNvBlBpfD5tC73MhRpzMLPAy7xobjOCAP8O8uaqlYI4JCEHuah6S3YgSh6jdYgZsrecWGbu&X-Amz-Signature=f7c84e872b4c2aee9367015f4ab0fecab669367ad313830550d4c0c659d03bec&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
