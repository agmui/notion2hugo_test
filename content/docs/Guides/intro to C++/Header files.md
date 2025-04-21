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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFZB72C%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEBmAsfTuzowEir6XmV3WNf5m4CyBrBbVpq2cCWqNWzWAiAY3DvVRkcUnPfXDo1TDaDu%2FSDvC4X6XmTwezPsLTkAvCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR9LZr%2FXdwdT04gt8KtwDXI%2BG5VsX5CV4uqlQ7zK2m969ZkfgVQ%2FS8FXxqSrJB0Hk9msW8lJosvtcRmsu%2BTGZSZPfoZJ7UePGG6K6%2BVU%2BueCPTLz0QvFeo1Y7dekgCf18z2e0aTMxU8IZ2BlEWRCJrlUrdDY4KbGXXqKSYkr4S19LZ94ymjyx6I%2Fp2cNCTcOFOZvP%2BLcLa4GPdksFPhtoI2vh92XKBpQzBTYAVrMdS2u76ujcz2TM2vdCbT2%2FfwP%2BiUTtCYUSvvIXq1k1ltqXk8s2TRCk5pV9%2Bznj%2Btq2dlLiBO%2BXxXTMXDFZtdFWB8uzIQHrOKYJLtqr8tfGdvTfrjsN4XP1oXE1VRBNmCgfifQrxgM%2BJGrsLYdEUcNujd4xZgyA%2FZ3yW%2FsMDNsfrmmJ0qwFQktK139i68x53dLnua6DNWHapFGJBKM3k0G3IsPCMJj7ksexnbdkJ30A%2FqJZt8ZTCaNZNR%2Bnw0KFNaLSVqGd0mbchqQnaKLFxApqSmvQ%2BR9OpYI1%2FPCqAkBG3tygJi6Khos%2FyaAG0GAjtIa9dz3QlAEr6ZVFrrC1atOdE9f9jjurtr92%2BjID1Z2xNUjbUHslpl7NNUsj0jPibT7xx5aOQWJiupycQIJCXpINL%2FBQ%2F9KvBr9lo2SA3lUw%2B%2FmWwAY6pgEat4l29PVgUWdMnKGXD%2BaHB96lwf%2Biz7sy7nG0P5MSdtEOvCY3ilKkpWeBJo30sx%2BRdBFnrZHZ62WLgZPO%2BJRXwFO7dKntDY9qC9%2FIY3IfjJcNTebx2JjcbJide7Es7Dh1vjKDSBPk4fZNBZtOSVIwsNE6odYp6r1FQ7Dmj4RL6SGhL7AICUvZgySdwNV%2FjTe2O8nt3bLkbGLABgUFno7g7S5NrAwA&X-Amz-Signature=2805c8b5a91909b3e113b628b17d4b2c1cd07a34003906aeccba6069b2f7f561&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
