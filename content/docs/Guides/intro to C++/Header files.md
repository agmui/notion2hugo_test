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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDIED3LZ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeE1xeB0sXnSeh3gnByVC4z2K9ukfeePLPzUIpRJEthAiBDzqX2k2EuWNBNDBn2H%2BKLocxeX10EfW9iVK4f7jzLEyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM7N7uSMPwOr%2F20R40KtwDdFOM7y0Sd%2BAglElXEgNsQLVpP2JVCxtNxCBNLk%2BpfUgvEI%2BjH4LkXcErkBipI1fRyfVnOlZ7wdEvqUuqJbyxlgPyPm0wj%2FEUrKf5Xn%2F%2FlFTNJq1Tl0VyPLe0xCAC0TlBprdlzRWa8mSEQ82alsmBPikIQpYDPoYjvl06ly%2FzyGGuChDpAHEakPy6Xd81wYzN%2Bwkn46Jag5b1eDFhZvUv3L0x0GLFVo6KiEw826cDSF8NRPHls0AgqDcRLgtdrFubtt2wxnNqHYXqGOQ60ulP0asBoE4nwL5q89wE89usWJQI%2FkeM%2F4SRA1ySDUewOtmD98s7M3At07N%2FXwhjLnaajmfmwKlc%2BGwahztJtM%2BQnaGdpkrL0AC%2BxBSogg5bLPDoC5oVw3vikLqlrbtQmqj7aYnci2l3Lelhp2mXrIw5esO9M1j3E5VcXsKb4GuB0sej4z9pvESVbGRTUq0BnQhKCnIzMqzPr%2FgR8At60mOGpBrSp6rV32NuDz5w%2FNt2a7joFQFw2FgYBo89MdwsICLgmERFAhiay7inrPNxZvfD5itNPilrONCLqRuAKDIA24JbcZmZv88K7TtlpMDi8ffJFkwyu1EyAxYExB0XOuN3vSMkcBr%2FQxlIDcLCmOMw%2FN7bvgY6pgGls6oydii8bBfZI%2ByhzyWVLI0NA8D7HmLtLka8LWuentKwHYy6CC0fMgr1I%2BGMBvsKvpJJmSx2sViIfH7FPqmF6c%2BKVVtqcex0K0jvXRJEIkMn9nC3DoFdQLLHSYDysPc98FWRTX5vWTSw6uR9jCfrkJ7VAvRtU3UUNH%2BYP1LpjfmfO5w%2FXkWcvg3GXhzUK7gUVIgfQjayamf2tVzRiQQloXM3bIPn&X-Amz-Signature=faf026d970e8bcaf993fb02b5a79bee139dbc24900747afb3d65fec8711e1729&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
