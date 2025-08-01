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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIB3CWUC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkEqug5WNcAQmaIbnFgHHNWvtNxnwR%2BfA6g6uQD%2Ffw4AiA7wwd7LJRgXY8NFiC5bT7zWJ%2FEK%2FBpqAUqEF0%2Bow2eXCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8pgIY7IsSGzH2y%2BtKtwDeddh8qjfT6%2F9bqJAOO9HjD45j8pGoPb0Y6Ug2iZyNLouGN9wwTdxKI5vIoNX8Hr2FeDOAMKvy6cfQwVakZ2rHagLxt3CwydSKjE8su1gcRk3i%2BxuJk4oPjmmWKtBOqzuH%2Fz2nyNtyn7IFKgdz5vh87QI6bVD60vm%2F84hFdQTH3UPNrXRc0ng69Eqmj2nS9QttAcfFxJsJWn8dGNZ1zNFa94bpM%2Fcd65mlfjAzaqHYh%2Fwj7vcI6%2FZp5DkPLxUGLsiDMREKOwKDkjU6Zjs3pdCoiIc%2Bm2VEH5jYbTPhXzNyprKCSk9xMtOeLjGA8tku2lrtz1MLRHtuq%2FZfvlEyYhO9w0pAF%2FYsOw07I51L49bnZzpLn1CN8oDX5cTzPwWr1hu3KMALuNhFABR73Y8zazdHK5KYpDQgYw8%2Be0%2FCL7pqweMB5uoVprFDV6W1Q8amzexnBomjLYJuLtua3euIkTO391BkqFQF%2FEP01QARkk1iTDenBCLu%2Bvz8KnO42CJuC5XHB0uIy9fVUR7MGhGXk4BynSh%2Fp8CA3D5ZcK6GuykLkAz8YU2vgbeVOM0QOAEAChEb0G91lfJUDLVTCNgRz5qgYnfopDmYTIgypICdOkZRKhoweqccj3M0QaJSIYwp7CzxAY6pgHo5uru2nbgVLfx2QcfQmkH1shh0zcH4ieAEHkrmxvZRLlQbD08NVZYslqnk5LMWdBpsC%2B2tDy3sM6pW0C7rF058kTUWKmQiwAzv06XOMK7Ltmw4eWMdxCjcqhs3Qx9L3%2B8lo6ARlIBldZW6ZScgNugykgQTB6l3TciF3RVZe1Ogr%2FUDNasGxPn6Dmbu%2BntHDSGcK4cNhdJsfC6KsOJ%2FqSqQhZmbfRN&X-Amz-Signature=e2a9da06dc3d9832ca8b0587b2dc7de57a9a80cc5268ff6f8e861a91877aa94c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
