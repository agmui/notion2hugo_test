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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6JYMCKF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB8GZ8%2Fs17E86NC%2BtEzXcGmMW5BHP%2B64cnZ6JYi8pEEAiEA2cMR%2BL5v%2Fknkwoifu%2FdIhprrnSUYwfv2%2Fo%2Fvjccp1kwq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDNnnM2mgZqqNlX1fSircA%2BHFuykN7fOasOWzWiwkUxDiwJQ6slN8%2Bi4x5AewIxuYFfINcDA%2FJIiRs%2FW24SxGvuC0vRGwSz%2FgTiMMG%2Bv4jD5iDzm28UR%2BIfKFsaSY1%2BdDSUpU2pe0vbsLzjUvDZZ4D3Dl%2BUAJSLbovgGPjDsY5NfzkfltQK2AkHunbUhgMTjrU%2B62HCDiqG1kT1Ha9FGy2PZMtDYd74c33uNsLVimUvckkw2p%2BQ0QNOJTIg5UEJ5WU5kopDIKApm5iI%2BGT%2BG7gEah1d36iFs4si8bU3k0Xg%2BQwYUJlwMqZSGxgsUmxFK%2BKST4qmehp4xG6prdqny%2Bp9KlqjjX%2BfpsozWOF0ijx%2FmnstB%2BlQWbGtpMma2OU6xXn69OkB%2FxVgQE7WsKU0Pe%2FO2N7JAX9AiAxUmDsVDJoHaevdpkJRDOFBq%2FsUXvDjIeA0wzeQCmdGYrAsBSAXBF8wWcvVMGCs1MHisBFdyc47gzmUL8S8Gc2PoWRFfvpoxs%2BlrSZeeIhYNaKKP4JJkDXR0loMkpUadP9dE%2FmQpsdtkdq8uymAiXgMgSz%2BrhPFuUurRmrWkZ5k5BWw7jh63TF3cpkbyhq%2ByTT6VaG0nXAZT8vRh5D3IHv5f3sefdNBjAdqOnb276A8rIgZdhMPi3978GOqUB3Bf%2FJts9u3mRnAdZxv7ByauA6NVZsgPc9ChLORVH5tHA1BS%2BhGfPS4GOTl8Wk83KJO1RNw7FGdfuX%2BPYbDtFhqH6vB7KjEgKz32MrIhGB9mLlz0Nv6HHW1LDy6IJ%2BcTzswjt%2BRXkw2xsb%2BlM3flMy9pKHbDIUrDi5%2Bog0QXQILe29o5YhXaXzL4ls6Hg0kX1J0uZcLExKpatG8eSqbH1g8WRpo9A&X-Amz-Signature=584730c62ff2b7356ec0933187108b046424e5641bf26f6d911988ef9ae83962&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
