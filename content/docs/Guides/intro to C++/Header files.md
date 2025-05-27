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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXWKZ27D%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjfxsPYW4SW62fUBhQAI%2FJQyo%2Fka3%2F9VeS0Yy%2BZU%2FKMAiAXImRM8jdUpjcF6fYoiAzYuAP55Esdd1d9%2BXY%2Bhh%2FxZir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMR0ywngRGKHLHi0oTKtwDfuueMuvYVo32ZjuWCoS3fXGsge2wa4972X%2BPIwQWf7YHwJkYyz4Uj3xScJvKY3TyT%2B2cic9l44d%2BGd4vzVDAcGRmlcOuqEx0wC52O3VdeDSdSrTAYuTTmpya%2Fbx8ohXTguhKsIQx2tpwM78Wode6dP8Tl78yKlGETUxvyKhlfMHsx0E%2BgbrZa7NEyED5UBI1iWmMeF8wwJwOdRb1K%2FgXZGiJ%2B5qcsL5hBoj0gkJeAO6hTXiDsgtCcKXFnL39vYCYS84Pl4k3ZDol4Z1VHSVMnFFNLY6mK525stIW6z68RU%2FGUtaOBM8MgwmbkdkpRoZXBAuYVpPrzI%2BafWx2zJfmrgsXRqrJLsZbojV7fOUIvetrxVKQfRkQGXnyHFeyfuCmmMriiC4IWZsa6uRHqxAh82it0GLhlBwUiJTR2Dh%2FdRqHjGkqaYxACI2x7kAcIBxkG1die1J5VKAny05ewwB2DMNflsQqFlAxdZ6JvU66FlAlUQ7ppZbrCnPiW6f7G4hTw6HfhjlrBUxSLSdgukcMgT1W4aSr4ZmQNNUOW%2FKGclKB%2FQbmrthviwtTSkX6MnRaJKKTkGxY5rLiEyntoQ9ygQH7B%2FXCETlBC%2Fze46bQ5AQN2akFsIU8vVOPJHgwn9TWwQY6pgEMV7RU3rDkA602KvqPzUj4fTSSBYvzuZn0AIjv4jso3%2Fy%2FStottMD1xeHqVOq%2BpdZQrzRQ4dXjE44VRCmLTkusc%2FRfsfvwleb1Hyqs1gVv4G6Jp0Pj%2FTKKh%2BHuTMyGRVRYTQgTxetEhJGf2ADaitqWoiWH%2BUMPzWqHJv7lfSpOSI2Ix%2FS99kQCPVjCPwzDhqLeuYLE9Mu8T8N3eGebK6c%2BhtDJ9%2FvQ&X-Amz-Signature=96cb58ff388a0a6a64183ee9d74c517c713b0e25dc0401273db57ca3afcb3320&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
