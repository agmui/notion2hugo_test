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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYZM7MUN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFgNBn0WSwCn2dLG4tBsNIHeE%2FFUW1R715%2BwW3XlS8rlAiARbuwkHAOTFv4zlkAcRcNWZzvtO4avB52X99ykkpvt8SqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRUgbE%2Bg%2F4hKPGw9fKtwDPYw8W0FbJcci2kjMIPas01pATsQA1QUNBtYm6uvWEw4eHCZC3ajdYi2GMPkSWMSjOcTJArzba7l6PobBJIi6inYfSmOM46c6khOemQdW5uR%2FTEyjI9Q4%2BtY0B3BcYQiKDR%2BmkLHe2WaXiAjf8uMxzcdy1G7RN6F361rc4KBjxvRSiHew53504Ma9CFnVPWBAKe9q1Bi5XVcoKb2UAX1snvob5IPghBjmWyve3GSUW%2B6aGqmNxkJYv28ibns9UQHh6tdXQVivhKUe2gP8kOg%2FiunBsrCctoleLSXJKcpsSkEEdHwLn5b%2Bet4%2B3AhxTFbZYj4sp2LMZLzcUDD3IbIRaX23PaQX2fZ3XSES9BHneolgIcF7L2ArHWL7EzUeorbKbtuWpaX5FfYUXkHGHTmsllvwKSi2WMyMqsCU32K5x9VDvSvlOrbLlXhoZ31uB5mEl4alN4DWFpp4Z2Q%2FJQpfJuf%2BpLbQ6jtuupTVcrs5f3xjYAGfvF6vb7SljL2nrYFtf%2FF4T8e2OScVNuYQUwUqhzb0FY%2FkXFx4uXuKBd92MXPWcnVHFJmVLC%2BLd1jmH5TOq%2BtTCSj4eZD5Z2dTHfWAb7syPRnXteh9aUS%2F55qyObkgA0zWeCmiehmpKRswicSAwQY6pgFpHDbFz%2BECttoc70T2z2zWiX4qU%2BUQQc%2FwBwLr%2Fq2u59B7oSFcudv%2BIDD%2FKF7SIrjv3WuaKQ0fo7Ai5SWKhJgZJFTtlDUFidXTuW%2F7Trhh96G86UFM7nMFv2sZBMew%2B02gy85gMpaYJrr2BjXi6FUgw0lBSZa%2B2kLGJtenM7S40VNifRsJ94JkqcDun0UYP9%2FkOpod1r9Eltxhf%2FPC9gk972ijuBgN&X-Amz-Signature=81cbff2d7a932c0abc9619a2866588dfcb799f4544dd65a67d5cdc7afe7308ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
