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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RECHR3Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8q%2BQbNzMiXhfcrIRl7v%2B2DUS%2FvBvmAs2CAOGbx7jV8AiB3z66050lRHBmYMPR1frvlHIHD1GfkvMpXIB1xmiQv9yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSCTzZscgmfklnwgNKtwDNmT34TsmnY0WE3SMjsrbokfjvRS4KXoZyWGuSfi4ylSs%2Bvtj2lxHrjdb9mIFJiLp2PYgQNquJujXVr2Mqm1MLzjPZjpyl7GtuGW5lAG9GGbIB45FVW3J1VTFbQVwGVaw0r%2FLP%2FDaIPMIyVSuHC7lUn3i9P8i0qg4NHCyCxoIyYcQFQuOxPXXZ%2BrUV0K5nKbUmQFrARh18d0BjqTgFhHHAyrphWfPxq0CEoVPXCM8s%2BMPQz38jRjmDfiLnYidON4OKIqxlfWrzSKQrpOQZFnHuMKCMheKN%2FCmuF0WrBZtW%2Bx%2B9rh%2BDNYySIGSP3VqCo7aSYWQGa8cUEoJaymu9izovPOpWTXzPJC5kkEkhIJeklhhPH7myy2SWs9wjcBMzyub%2FuUp1%2B1lY6hzYDnwkfE1rI2ZKKfPSZA4HwEHjgPb7QwVFT%2Bah6P2dcAEjKV3CmTiDacwLk8odO6iAk0rWxSfBlkLGd7BVmFvx1oNslpb4zRDblvZ9hb%2BjNsBlU8mE3iPbZrsjU57JyqLkcvWhiUxO7Xu%2FzH%2BsvufAYY1OJUZ87o%2BBmIBTMLPrBksL%2B5Ak3r722LoGYtMYqiX84Y9zVFd3MINtKdvrK%2FBfj%2BMj4The3DtsVhR3vQzhM7AfoMwkcCnxAY6pgF2%2BBt18a5TrrIYBQT3XC3yDJHv3o5AYMLTe%2FEXchJTdkLCvI7ShRH5NaQ1BEBm%2FpFcekttOb4uAxSWEYuRiz96ziuISCSdrjrXEF7FJPJGg6hK%2FoM3Qh2p8DggHveQGg43bjywS58pgXWNg4TSAvdetHjiVAlrcPXhTn%2FIcF%2BFWQ6VBySuE3DCMhL6JSH7jR5kZznkeMR97zv4A17oQK64rf6Tydek&X-Amz-Signature=97d091035686b24d0826630e6b9bcd0426df5cf28b29f48751fa669f09cafc1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
