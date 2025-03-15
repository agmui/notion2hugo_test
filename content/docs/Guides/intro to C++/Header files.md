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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTXUBU6E%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAX4zZgBkxDrututypxhynbSGeIboeEZ7xnJdh5MYCvaAiA3Jlg4bD4E%2FEf1WOqB6ta20mdJinbG2niT%2FrxJFXcm8Sr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMW4X9dwsHftexGvQvKtwDd9wGYIOC1Wsi7ql3BWZIyOOoh06aMYC4hdnPE2B8YB44G41oL2DDev8u9VWFlha07fMkKYCMdKggshkbErPquu22FT5JY%2BlqTefXm0JzEXIbif4QEQAge8qhwrEIEbALXRcJXMNOVft2QqAVriMNw%2Fm%2Fm5OGKqe8XgE18iqvjCdlA%2FYwhsDRInNZbaXaHZ5cCDTEo2eeRy9Ru%2FBfXQ2NJCtS1lrPPKBaZSyxc%2Fepfvza%2BVkAH7qcZzfII%2Fun8IeDJMlRFsj1ZuMhLSQUutQIg4OUv67jXs2jTO8WYGRE36BS94TAmOeGc%2FJ3vn9Uz6KcckAmhIGH4lRx6p2mH%2FezDii7WOzpVf4vYZH2ZH5l1KpHVi6kst4YR4l%2BdzyWdbaXj1gcwPkg2NrEHUUHQMyefKc9Y3EaWpBmCtWKiQy99mVXvIH7Dm1Tkrl3nncgybzL0eS3578d9xbcAPgCR9NVBk8WN%2Bi8MGKekPQSI7LoD10tErMgBf8mGgU07VFi1NtZZKmMemxby4Vzhez2welNxKKioLbgFZnKjhFGtlcyWZldgg5RpEx%2Fn5Uj2INfuKSDSanM0R5m1NSewTid2RUyp19bpmuW7r3lApJodydrSNo%2BH4Em7N5GCexpb6swv%2BvWvgY6pgFoapx3lOQ3s9wH3hXxBztwuuzIvfINR2GKJp54NEtnbjAa0CtId0o25VFvXghhqc%2BP2wmuFG5OP%2BWo%2FZsUEuO1UugjlV3IrRsWtPCUosmu0xgxv5N6pnSmERCKrbxOIoxiXWT4HCpEvO1BEw0yylZiJwwI5GAV6C4FPRU8EwQ5NjBf1PnCtD13gHqu%2Fti0xD5sG1rhJZoLUu62IcIo8%2FyXJH0ZEOOw&X-Amz-Signature=3b86184f31cdf8797bd88ad9d51330b7ab609fcc6674cef75d191c5b94fdca2b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
