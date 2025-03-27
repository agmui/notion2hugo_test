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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTF5A6W7%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVWVKherJo36PO5CvQbpLiVPbbSlijIyXOCqVJ6jxNQQIhALeNFl7kPRkDjZp6avyqZ1S%2F6wuwSis%2B9lGLmo8ru68cKv8DCD8QABoMNjM3NDIzMTgzODA1IgzvJshY7M%2FK%2FLd5u%2Fcq3AOmMPgdHxPhS6Xj%2FRF6LSH4r%2Fqv8X3DkTg8rcyphUZ9kNtHZesj2Wrszs1zLrmNYP5SQtfj0wLvX0yUIMPRHDx9Mq6IfzXgFwRSonB%2FUESfPwydEP4AD%2BHnlF6o%2FNbFvCVUuPxXFOaXufyurhV1B36im2PvKOp58fRCV6xzo9g5qOU67sg%2Byych8TCTVNDDqvXviGIGpLL6dg2o5DUXTy9tuv7YP0iOS5D6micp8%2BhJMqXkPDRYTfKrouuob2gKBOmGSABJvlZHxivRN9ATz%2B5zc0XCrc5RW21AgfdO5gkZVhgnpnsi72gxLDITiIgXIyObhUsSAG6Dn2Dmny6q729JZm3p%2BSqPppMEuZ4EXUUFf4NDpcXtEi0WDrYANWtDFrY7GYrQpmZNh4OiQAb9hTNDBgqoDU6%2BQ8tHr9juB%2FgJmqwyruUiaae3pBd%2F8%2B21MPyy%2Bba6KRP02X8RBshx6T1kRPa0dTL9HzeMd1dTAOHJ11aUXcJTYKOVQkqEMwDut8VSpIhHyhXPgayqGWpuT8bBJ9ZP%2BSmd95JIp05BpyGTyQHUQIBiCIjOPJcZyqnv7mpSU%2Fr0KHlPaxr5piM99nN6pe%2F1mYJpVUNNhdBd78KRGrmx7fARKvRPF3OZcTD5zJO%2FBjqkAf9xSkzgaMsWl0EwjnfPHWBRcr%2BS8KhIifOuCTGiHL3mWHpzolDxS3mhd1BXmnNIYmu3P5cDVZmu0pUlnDDF4mIowDLUZezcRF5%2BPzEMWkByPFSSNEu6yF00EIR6yP4dbVGzDGh0ZJ5oGZLBEdB1InzOxqu8URqSmqOTW5OkaGElIfSw5mmT2XDr5p%2BTJ%2BK8r2xYsemQiaQ6lbQavvQtl27Dt12K&X-Amz-Signature=ed638f35545812b965b401be36020921da974e141a47600e6b3f22eb174b6635&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
