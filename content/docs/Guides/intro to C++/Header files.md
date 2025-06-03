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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DAQ3RQR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAhEMteiL8AjmK4lDXD5DPIRZu3wZEjT4Qdcfd%2Bfbb%2B8AiAjIeejCYy9qyAiXkNbB68r1Ey9OI4A%2FNSZ6a2hI8xU1Sr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMURSRTG7TVSGQBnWPKtwDEN%2FaV%2FqZ4bhqtIre3lZIFwkyelkk78kachy%2Bcp60CyRAIUp1aJJYsRn5Yzk85Ytt1PTnGqY5kCCYnZTdN67Y0jTO1ScXPcE2Y75yS24RZ1HZQRaAl6PfLlCFWjoYykM%2Bd6bUDbJhz2cLhSVXpsfy03Uw5Yds0Rg2x2dxapnNCq5rxZ3AcZeF93cjJRGleFzMjJbXZb%2F%2Bw1S0LOkxUuJ1FKzAWGkHC4CNbvP2YooUxZDUB2SbJJ3fjXV4mNKOkwzQ6A4s1UhBALNdy8j0FdwriFYNPD5aqk8N6030g9YEnY1OvydaHHyshMnCtLtnsNPPgrRoJsW3TnZf2C07W4NejB8y%2BLxqpPra4cbatU68odM5NQLRJA2xfthTzcI3L8xo8vKl%2FDOg6DpnrZRHbOEGJSpZzb1S7GJC0xkYwLa6ZSntomJvU6ey19LtdqL4fnIYBGVNwa89tmNFMfmpQsyorU2oUTRpP8SGNuPZ%2B7Rkz8DC9Jk%2BoVbQ24532k16X1F5I359YuSd1UVH%2B2ao8MDDXtRe6WsrOmXU9P859%2Bk5Q7RzIOmTbabrzqCjyUvUBU0t8a3FwYewQceiJRIrG0MMbRZi%2BfjNafWb4JvX1Hk%2F7VVq4xpLYFFpSbeHFfkww9D6wQY6pgElswpiYVytCQRv5K18%2FrRoqtByQH4yjP01DiNW4gUKVXJO4ORON9lSMDSPaF2gtHh4M%2Bc7Gd1FXnPUP6DXdBVwcV1HZRxIbAJtYK5iRxjfRdspIGSPQhf0h4T5EsQk%2BL%2B%2BrNGS99cwjomfMt1OttJ4cg1zbkxTEb9UZTEMKW87MoWaAkmnZSl0xmMoQBs7lsiqINMXNUFfhYrUlxS1IQQ9XComRpIc&X-Amz-Signature=c4c615ce3a3c3a1c3723063a022cafeeabd0e57cdc7341e0d49b56990ca7095e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
