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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ENNESV2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHhNY8Dc5%2Bbc96XnauCFjHsbnqpoyjI2oX0ejbHzOrJgAiABlmmGo1a2JwX5xOZcLDhJ6FrF3V4zAAR5%2Fgb%2BzbKObyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMjNIOLtCrZ3WPbbhCKtwDDRHeB9YPMxFQSdl2K89O%2BthuT67du%2FW51bysRHob3z9so1doUlY7SuizhpuMf9KKW7mPzelTIFZBbY28Im9bfe8Sf8RbD%2FJ%2Fetyt6zPAEq5%2Bjq9ZuDsjPdQ9anFj9%2B6AnZcvUgtwRwlZnCZj%2Bi7vLKINjhpte0JZeYw6E5GIpwzA%2BdQTiEwO3R%2Bj%2BOHAXj3C5WJX1ZzQZNwpecUeGkedx%2BKvDtzpmnijlgSNJ5G6jzKH6U8u8dtW3ztJk8iiorYqPDgbW9nq4239fpHAr01cXzD%2FHlf9tDHSBVyqeEbMlhgNo5JnjlkXYZeUPMqLlhK2ULiC1F%2FMKdB7JTbf90gt3Y0YdZpJ%2BUeTN3iH22TzFpLz3%2F%2B2%2FgFnL%2F54ZMH9mDSN%2BkzVLkJY13vPK9PkFV4jdUwV1zvXSP1Arz3XxZ%2F5xVisrPao%2BltLUQ7DLN5z%2FueipYNeqALwFi3%2BnBR9ArY%2BO1vDYUAmm5RaZSrfY2dt7n1wOZL6dZM41NqzoU%2F6%2FwK8GtyLDc%2BNqWC47dQmwdA3OUHnkuGAyQzyzgUjeF8w%2BSTTxCItXb507DUx7rpw%2FxH8f538WsLyGLxfX0UmCFC7HarnUHmkRSsuQwl9ahB7u52Iht3X14ZC39q8uOEw8vjDxAY6pgEecMlLIRYrvOMJYMKzu7CzX3HNzTE%2Bulhv8ef8MN9sowftAExO5vBN9Js4siZ26HTCPnXhhv7UgPWbaRvPZ8nkcn2RW48uliPwl0Z%2FjvekIuZ6cSgmg6lITH3tdlC6c2ymAdoxMDKDNyf5HldYnpExcwlaiX6M2gtedtx84aJZC3BmjeIfchdSmxVP9OVby2HdsO%2FVWVJyHgUXiD01jqkut1ABrAv3&X-Amz-Signature=20666ac130b9402329a1a2c66845a4a3aa1d1de38e8cfc4b3f986b3b2c75d88d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
