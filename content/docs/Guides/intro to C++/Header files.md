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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R63647XC%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtAhq8YuCa5RBg7mDFaK9M6TvspsUffWyeQ7lsHHT%2BPAiBSG47nXYBGVD9RLA32jNnE6So2yrRCYKHs2wYqiSCuuyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlKoCrKCeO9vtqyl7KtwD8OY0TgfmpPemOhalEDGbKx7Hu1bbGGAb7nSiFIh4JreOP4vl1w2jvZ1LQHMWQk%2BDTQ79XMG9ws3BT7QCJ0prEGYGzv012ehTbaro9vNaLm4xP%2BFAyOOd2EQ1iWe6%2BBEQrnH0rFdwXUVMfhhZLzeznHFhYIvrnKEZD9V7nWw%2FMZdkIwVdBzhMfrMrCR3ZO2uLeO3%2B0J%2BfJd5OpDDWx9ZqQuLZl%2BJD8xXrbzhDygJXplWLAswFb84Djw5KEMRbtfIdc4eaErH1kuSnhNBLAiH8fQntJ2nQ45TM6vbCdsPfBl62CdlaD5mvCfstHF9X6Kkak5WB%2FlfG8ijzVpgV3eUp7yhJaILe5IVE%2Br65IYLVP3tI3D8%2BUlXb7W%2FOehPDJRqSbSuIKAzWKIkI4vbrrmjxOuDN7xO56YfGitKZ%2FS8nHhJ6HPn5vtBgWFoKHq4ulqB9F7GFRxp8tBjwDFhBoaNm9%2F8E9xmd%2FZu9%2BLLrZd5g99QGHSrmK5hNyDNS6IPDhNbNqkmRvGZf%2Fzogsl2Q4IIcb7Ch0f%2BUX0akxQZmmiIcT1eVlvvDmVwSutMthFTNdTC7qLYM%2BAECtakTDTSZwioACz5pxT7QodMYlYoQlGozj95Gk7RhrPF%2BU9WWgBwwkembvgY6pgFnFBtuSX7PYwLGzQ%2BpicP3MMb5XRMcfMP9aYU07snFBwjVdgCmSkTvudaw%2FiI2ULUunvjxdsstM5S4BeOTxbCil3fziTsqRd5dPAWGK8r%2B5KHTvsgtlTEM37deBZzVACMAhpvCxtcmsTtUfIX14ubvlTyV5PWjs4j3BnNtU2751krEA%2FRJBQRzLiwWs%2B5jNIpJruoNrYtZDCwnmmSxasl4jz50%2BDLQ&X-Amz-Signature=62ac91a4310996e12f97de785fb40117aa9f9a85e552413baf2fed3f3a9a5308&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
